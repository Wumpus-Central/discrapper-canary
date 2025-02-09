n.d(t, {
    L6: () => L,
    ZP: () => E,
    iF: () => D
}),
    n(47120),
    n(411104),
    n(653041),
    n(757143);
var i = n(147519),
    r = n(31775),
    a = n.n(r),
    s = n(70956),
    o = n(364964),
    l = n(53529),
    u = n(925994),
    c = n(436660),
    d = n(887490),
    f = n(42530);
let _ = new Set(['line']),
    p = i.Z.listLanguages(),
    h = new Map();
for (let e of p) {
    e = e.toLowerCase();
    let t = i.Z.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if ((h.set(e, e), null != n)) for (let t of n) h.set(t.toLowerCase(), e);
}
let m = /^[a-z0-9_+\-.#]+$/,
    g = /^[a-z0-9_+\-.#]+$/i;
for (let [e, t] of h) if (null == e.match(m)) throw Error('Language name does not match regex: '.concat(e));
function E(e) {
    let { onChange: t } = e,
        n = null;
    return (
        (e.onChange = () => {
            d.bN.richValue(e) !== n &&
                (l.T.withMergedEntry(e, () => {
                    d.bN.withoutNormalizing(e, () => v(e));
                }),
                (n = d.bN.richValue(e))),
                t();
        }),
        e
    );
}
function v(e) {
    let t = I(e);
    b(e, t);
}
let y = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function I(e) {
    let t = [],
        n = null;
    for (let i of d.bN.blocks(e)) {
        let r = null != n && (n.isInCodeBlock || n.opensCodeBlock);
        (n = T(e, i, r, null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine), null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null)), t.push(n);
    }
    return A(t), t;
}
function T(e, t, n, i, r) {
    var a;
    let s = O(t),
        o = s[0],
        l = s[s.length - 1],
        u = null;
    if (null != l) {
        let [t] = d.bN.node(e, l.path);
        u = t.text.substring(l.offset + 3);
    }
    let c = n && null != o,
        f = n && 0 === s.length,
        _ = i && 0 === s.length,
        p = (c ? s.slice(1) : s).length % 2 == 1,
        m = p && (null == u || '' === u || null != u.match(g)),
        E = m && null != u && null !== (a = h.get(u.toLowerCase())) && void 0 !== a ? a : null;
    return {
        blockEntry: t,
        wasInCodeBlock: n,
        isInCodeBlock: f,
        isStyledCodeBlockLine: _,
        lang: p || c ? E : r,
        hljsTypes: null,
        closesCodeBlock: c,
        opensCodeBlock: p,
        opensCodeBlockOnOwnLine: m
    };
}
function b(e, t) {
    for (let n of t) {
        let [t, i] = n.blockEntry,
            r = S(n);
        (null == t ? void 0 : t.codeBlockState) != r && c.Q.setNodes(e, { codeBlockState: r }, { at: i });
    }
}
function S(e) {
    return e.isStyledCodeBlockLine || e.wasInCodeBlock
        ? {
              lang: e.lang,
              wasInCodeBlock: e.wasInCodeBlock,
              isInCodeBlock: e.isInCodeBlock,
              isStyledCodeBlockLine: e.isStyledCodeBlockLine,
              hljsTypes: e.hljsTypes
          }
        : null;
}
function A(e) {
    let t = [],
        n = !1;
    for (let r of e) {
        let a = r === e[e.length - 1];
        if ((r.closesCodeBlock || a) && (n && a && !r.closesCodeBlock && t.push(r), (n = !1), t.length > 0)) {
            let e = t.map((e) => (0, u.sg)(e.blockEntry[0])).join('\n'),
                n = t[0].lang;
            if (null != n && null != i.Z.getLanguage(n)) {
                let i = R(e, n);
                if (null != i && i.length === t.length) {
                    let e = [];
                    for (let n = 0; n < t.length; n++) {
                        let r;
                        let a = i[n]
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>')
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            s = [],
                            o = 0,
                            l = 0;
                        for (; null != (r = y.exec(a)); ) {
                            let t = r.index + r[0].length,
                                n = r.index - l;
                            r.index > l &&
                                (e.length > 0 &&
                                    s.push({
                                        types: [...e],
                                        start: o,
                                        end: o + n
                                    }),
                                (o += n)),
                                '</span>' === r[0] ? e.pop() : e.push(r[1]),
                                (l = t);
                        }
                        if (e.length > 0) {
                            let t = a.length - l;
                            s.push({
                                types: [...e],
                                start: o,
                                end: o + t
                            });
                        }
                        t[n].hljsTypes = s;
                    }
                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
            }
            t = [];
        }
        n && t.push(r), r.opensCodeBlock && (n = !0);
    }
}
let N = {
        max: 1 / 0,
        maxAge: 1 * s.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    C = new (a())(N);
function R(e, t) {
    let n = ''.concat(e, '-').concat(t),
        i = C.get(n);
    if (null != i) return i;
    let r = o.default.highlight(t, e, !1);
    if (null == r || r.illegal) return null;
    let a = r.value.split('\n');
    return C.set(n, a), a;
}
function O(e) {
    let t;
    let [n, i] = e;
    if (!_.has(n.type)) return [];
    let r = [],
        a = /\\|```/g;
    for (let e = 0; e < n.children.length; e++) {
        let s = n.children[e];
        if (d.LC.isText(s))
            for (a.lastIndex = 0; null != (t = a.exec(s.text)); ) {
                if ('\\' === t[0]) {
                    a.lastIndex += 1;
                    continue;
                }
                r.push({
                    path: d.C0.child(i, e),
                    offset: t.index
                });
            }
    }
    return r;
}
function D(e, t) {
    let n = 0;
    for (let r of d.bN.nodes(e, {
        at: {
            anchor: {
                path: f.u9,
                offset: 0
            },
            focus: t
        },
        mode: 'lowest',
        match: (e) => d.LC.isText(e)
    })) {
        var i;
        let e = r[0].text;
        d.C0.equals(r[1], t.path) && (e = e.substring(0, t.offset));
        let a = e.match(/```/g);
        n += null !== (i = null == a ? void 0 : a.length) && void 0 !== i ? i : 0;
    }
    return n % 2 != 0;
}
function L(e) {
    if (null == e.selection) return !1;
    let t = d.M8.start(e.selection);
    return D(e, t);
}
