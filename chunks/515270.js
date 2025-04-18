n.d(t, {
    L6: () => C,
    ZP: () => h,
    iF: () => A
}),
    n(388685),
    n(539854),
    n(35282),
    n(704826);
var r = n(147519),
    i = n(31775),
    a = n.n(i),
    o = n(70956),
    s = n(364964),
    l = n(53529),
    c = n(925994),
    u = n(436660),
    d = n(887490),
    f = n(42530);
let _ = new Set(['line']),
    p = /^[a-z0-9_+\-.#]+$/i;
function h(e) {
    let { onChange: t } = e,
        n = null;
    return (
        (e.onChange = () => {
            d.bN.richValue(e) !== n &&
                (l.T.withMergedEntry(e, () => {
                    d.bN.withoutNormalizing(e, () => m(e));
                }),
                (n = d.bN.richValue(e))),
                t();
        }),
        e
    );
}
function m(e) {
    let t = E(e);
    y(e, t);
}
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function E(e) {
    let t = [],
        n = null;
    for (let r of d.bN.blocks(e)) {
        let i = null != n && (n.isInCodeBlock || n.opensCodeBlock);
        (n = b(e, r, i, null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine), null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null)), t.push(n);
    }
    return O(t), t;
}
function b(e, t, n, r, i) {
    var a;
    let o = N(t),
        l = o[0],
        c = o[o.length - 1],
        u = null;
    if (null != c) {
        let [t] = d.bN.node(e, c.path);
        u = t.text.substring(c.offset + 3);
    }
    let f = n && null != l,
        _ = n && 0 === o.length,
        h = r && 0 === o.length,
        m = (f ? o.slice(1) : o).length % 2 == 1,
        g = m && (null == u || '' === u || null != u.match(p)),
        E = g && null != u && null != (a = s.default.resolveLanguageName(u)) ? a : null;
    return {
        blockEntry: t,
        wasInCodeBlock: n,
        isInCodeBlock: _,
        isStyledCodeBlockLine: h,
        lang: m || f ? E : i,
        hljsTypes: null,
        closesCodeBlock: f,
        opensCodeBlock: m,
        opensCodeBlockOnOwnLine: g
    };
}
function y(e, t) {
    for (let n of t) {
        let [t, r] = n.blockEntry,
            i = v(n);
        (null == t ? void 0 : t.codeBlockState) != i && u.Q.setNodes(e, { codeBlockState: i }, { at: r });
    }
}
function v(e) {
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
function O(e) {
    let t = [],
        n = !1;
    for (let i of e) {
        let a = i === e[e.length - 1];
        if ((i.closesCodeBlock || a) && (n && a && !i.closesCodeBlock && t.push(i), (n = !1), t.length > 0)) {
            let e = t.map((e) => (0, c.sg)(e.blockEntry[0])).join('\n'),
                n = t[0].lang;
            if (null != n && null != r.Z.getLanguage(n)) {
                let r = T(e, n);
                if (null != r && r.length === t.length) {
                    let e = [];
                    for (let n = 0; n < t.length; n++) {
                        let i,
                            a = r[n]
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>')
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            o = [],
                            s = 0,
                            l = 0;
                        for (; null != (i = g.exec(a)); ) {
                            let t = i.index + i[0].length,
                                n = i.index - l;
                            i.index > l &&
                                (e.length > 0 &&
                                    o.push({
                                        types: [...e],
                                        start: s,
                                        end: s + n
                                    }),
                                (s += n)),
                                '</span>' === i[0] ? e.pop() : e.push(i[1]),
                                (l = t);
                        }
                        if (e.length > 0) {
                            let t = a.length - l;
                            o.push({
                                types: [...e],
                                start: s,
                                end: s + t
                            });
                        }
                        t[n].hljsTypes = o;
                    }
                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
            }
            t = [];
        }
        n && t.push(i), i.opensCodeBlock && (n = !0);
    }
}
let I = {
        max: 1 / 0,
        maxAge: +o.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    S = new (a())(I);
function T(e, t) {
    let n = ''.concat(e, '-').concat(t),
        r = S.get(n);
    if (null != r) return r;
    let i = s.default.highlight(t, e, !1);
    if (null == i || i.illegal) return null;
    let a = i.value.split('\n');
    return S.set(n, a), a;
}
function N(e) {
    let t,
        [n, r] = e;
    if (!_.has(n.type)) return [];
    let i = [],
        a = /\\|```/g;
    for (let e = 0; e < n.children.length; e++) {
        let o = n.children[e];
        if (d.LC.isText(o))
            for (a.lastIndex = 0; null != (t = a.exec(o.text)); ) {
                if ('\\' === t[0]) {
                    a.lastIndex += 1;
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
function A(e, t) {
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
        let a = e.match(/```/g);
        n += null != (r = null == a ? void 0 : a.length) ? r : 0;
    }
    return n % 2 != 0;
}
function C(e) {
    if (null == e.selection) return !1;
    let t = d.M8.start(e.selection);
    return A(e, t);
}
