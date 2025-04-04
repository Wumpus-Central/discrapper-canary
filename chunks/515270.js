n.d(t, {
    L6: () => w,
    ZP: () => E,
    iF: () => P
}),
    n(47120),
    n(301563),
    n(411104),
    n(653041),
    n(757143);
var r = n(147519),
    i = n(31775),
    o = n.n(i),
    a = n(70956),
    s = n(364964),
    l = n(53529),
    c = n(925994),
    u = n(436660),
    d = n(887490),
    f = n(42530);
let _ = new Set(['line']),
    p = r.Z.listLanguages(),
    h = new Map();
for (let e of p) {
    e = e.toLowerCase();
    let t = r.Z.getLanguage(e);
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
                    d.bN.withoutNormalizing(e, () => b(e));
                }),
                (n = d.bN.richValue(e))),
                t();
        }),
        e
    );
}
function b(e) {
    let t = v(e);
    I(e, t);
}
let y = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function v(e) {
    let t = [],
        n = null;
    for (let r of d.bN.blocks(e)) {
        let i = null != n && (n.isInCodeBlock || n.opensCodeBlock);
        (n = O(e, r, i, null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine), null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null)), t.push(n);
    }
    return T(t), t;
}
function O(e, t, n, r, i) {
    var o;
    let a = R(t),
        s = a[0],
        l = a[a.length - 1],
        c = null;
    if (null != l) {
        let [t] = d.bN.node(e, l.path);
        c = t.text.substring(l.offset + 3);
    }
    let u = n && null != s,
        f = n && 0 === a.length,
        _ = r && 0 === a.length,
        p = (u ? a.slice(1) : a).length % 2 == 1,
        m = p && (null == c || '' === c || null != c.match(g)),
        E = m && null != c && null != (o = h.get(c.toLowerCase())) ? o : null;
    return {
        blockEntry: t,
        wasInCodeBlock: n,
        isInCodeBlock: f,
        isStyledCodeBlockLine: _,
        lang: p || u ? E : i,
        hljsTypes: null,
        closesCodeBlock: u,
        opensCodeBlock: p,
        opensCodeBlockOnOwnLine: m
    };
}
function I(e, t) {
    for (let n of t) {
        let [t, r] = n.blockEntry,
            i = S(n);
        (null == t ? void 0 : t.codeBlockState) != i && u.Q.setNodes(e, { codeBlockState: i }, { at: r });
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
function T(e) {
    let t = [],
        n = !1;
    for (let i of e) {
        let o = i === e[e.length - 1];
        if ((i.closesCodeBlock || o) && (n && o && !i.closesCodeBlock && t.push(i), (n = !1), t.length > 0)) {
            let e = t.map((e) => (0, c.sg)(e.blockEntry[0])).join('\n'),
                n = t[0].lang;
            if (null != n && null != r.Z.getLanguage(n)) {
                let r = C(e, n);
                if (null != r && r.length === t.length) {
                    let e = [];
                    for (let n = 0; n < t.length; n++) {
                        let i,
                            o = r[n]
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>')
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            a = [],
                            s = 0,
                            l = 0;
                        for (; null != (i = y.exec(o)); ) {
                            let t = i.index + i[0].length,
                                n = i.index - l;
                            i.index > l &&
                                (e.length > 0 &&
                                    a.push({
                                        types: [...e],
                                        start: s,
                                        end: s + n
                                    }),
                                (s += n)),
                                '</span>' === i[0] ? e.pop() : e.push(i[1]),
                                (l = t);
                        }
                        if (e.length > 0) {
                            let t = o.length - l;
                            a.push({
                                types: [...e],
                                start: s,
                                end: s + t
                            });
                        }
                        t[n].hljsTypes = a;
                    }
                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
            }
            t = [];
        }
        n && t.push(i), i.opensCodeBlock && (n = !0);
    }
}
let N = {
        max: 1 / 0,
        maxAge: +a.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    A = new (o())(N);
function C(e, t) {
    let n = ''.concat(e, '-').concat(t),
        r = A.get(n);
    if (null != r) return r;
    let i = s.default.highlight(t, e, !1);
    if (null == i || i.illegal) return null;
    let o = i.value.split('\n');
    return A.set(n, o), o;
}
function R(e) {
    let t,
        [n, r] = e;
    if (!_.has(n.type)) return [];
    let i = [],
        o = /\\|```/g;
    for (let e = 0; e < n.children.length; e++) {
        let a = n.children[e];
        if (d.LC.isText(a))
            for (o.lastIndex = 0; null != (t = o.exec(a.text)); ) {
                if ('\\' === t[0]) {
                    o.lastIndex += 1;
                    continue;
                }
                i.push({
                    path: d.C0.child(r, e),
                    offset: t.index
                });
            }
    }
    return i;
}
function P(e, t) {
    let n = 0;
    for (let i of d.bN.nodes(e, {
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
        var r;
        let e = i[0].text;
        d.C0.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let o = e.match(/```/g);
        n += null != (r = null == o ? void 0 : o.length) ? r : 0;
    }
    return n % 2 != 0;
}
function w(e) {
    if (null == e.selection) return !1;
    let t = d.M8.start(e.selection);
    return P(e, t);
}
