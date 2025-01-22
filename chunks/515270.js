r.d(n, {
    L6: function () {
        return k;
    },
    ZP: function () {
        return T;
    },
    iF: function () {
        return M;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(653041);
var s = r(757143);
var l = r(147519),
    u = r(31775),
    c = r.n(u),
    d = r(70956),
    f = r(364964),
    p = r(53529),
    h = r(925994),
    _ = r(436660),
    m = r(887490),
    g = r(42530);
let E = new Set(['line']),
    v = l.Z.listLanguages(),
    y = new Map();
for (let e of v) {
    e = e.toLowerCase();
    let n = l.Z.getLanguage(e);
    if (null == n) continue;
    let r = n.aliases;
    if ((y.set(e, e), null != r)) for (let n of r) y.set(n.toLowerCase(), e);
}
let b = /^[a-z0-9_+\-.#]+$/,
    I = /^[a-z0-9_+\-.#]+$/i;
for (let [e, n] of y) if (null == e.match(b)) throw Error('Language name does not match regex: '.concat(e));
function T(e) {
    let { onChange: n } = e,
        r = null;
    return (
        (e.onChange = () => {
            m.bN.richValue(e) !== r &&
                (p.T.withMergedEntry(e, () => {
                    m.bN.withoutNormalizing(e, () => S(e));
                }),
                (r = m.bN.richValue(e))),
                n();
        }),
        e
    );
}
function S(e) {
    let n = C(e);
    R(e, n);
}
let A = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function C(e) {
    let n = [],
        r = null;
    for (let i of m.bN.blocks(e)) {
        let a = null != r && (r.isInCodeBlock || r.opensCodeBlock),
            o = null != r && (r.isStyledCodeBlockLine || r.opensCodeBlockOnOwnLine);
        (r = N(e, i, a, o, null != r && (r.opensCodeBlock || !r.closesCodeBlock) ? r.lang : null)), n.push(r);
    }
    return D(n), n;
}
function N(e, n, r, i, a) {
    var o;
    let s = P(n),
        l = s[0],
        u = s[s.length - 1],
        c = null;
    if (null != u) {
        let [n] = m.bN.node(e, u.path);
        c = n.text.substring(u.offset + 3);
    }
    let d = r && null != l,
        f = r && 0 === s.length,
        p = i && 0 === s.length,
        h = (d ? s.slice(1) : s).length % 2 == 1,
        _ = h && (null == c || '' === c || null != c.match(I)),
        g = _ && null != c && null !== (o = y.get(c.toLowerCase())) && void 0 !== o ? o : null;
    return {
        blockEntry: n,
        wasInCodeBlock: r,
        isInCodeBlock: f,
        isStyledCodeBlockLine: p,
        lang: h || d ? g : a,
        hljsTypes: null,
        closesCodeBlock: d,
        opensCodeBlock: h,
        opensCodeBlockOnOwnLine: _
    };
}
function R(e, n) {
    for (let r of n) {
        let [n, i] = r.blockEntry,
            a = O(r);
        (null == n ? void 0 : n.codeBlockState) != a && _.Q.setNodes(e, { codeBlockState: a }, { at: i });
    }
}
function O(e) {
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
function D(e) {
    let n = [],
        r = !1;
    for (let i of e) {
        let a = i === e[e.length - 1];
        if ((i.closesCodeBlock || a) && (r && a && !i.closesCodeBlock && n.push(i), (r = !1), n.length > 0)) {
            let e = n.map((e) => (0, h.sg)(e.blockEntry[0])).join('\n'),
                r = n[0].lang;
            if (null != r && null != l.Z.getLanguage(r)) {
                let i = w(e, r);
                if (null != i && i.length === n.length) {
                    let e = [];
                    for (let r = 0; r < n.length; r++) {
                        let a;
                        let o = i[r]
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>')
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            s = [],
                            l = 0,
                            u = 0;
                        for (; null != (a = A.exec(o)); ) {
                            let n = a.index + a[0].length,
                                r = a.index - u;
                            a.index > u &&
                                (e.length > 0 &&
                                    s.push({
                                        types: [...e],
                                        start: l,
                                        end: l + r
                                    }),
                                (l += r)),
                                '</span>' === a[0] ? e.pop() : e.push(a[1]),
                                (u = n);
                        }
                        if (e.length > 0) {
                            let n = o.length - u;
                            s.push({
                                types: [...e],
                                start: l,
                                end: l + n
                            });
                        }
                        n[r].hljsTypes = s;
                    }
                } else for (let e = 0; e < n.length; e++) n[e].hljsTypes = null;
            }
            n = [];
        }
        r && n.push(i), i.opensCodeBlock && (r = !0);
    }
}
let x = {
        max: 1 / 0,
        maxAge: 1 * d.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    L = new (c())(x);
function w(e, n) {
    let r = ''.concat(e, '-').concat(n),
        i = L.get(r);
    if (null != i) return i;
    let a = f.default.highlight(n, e, !1);
    if (null == a || a.illegal) return null;
    let o = a.value.split('\n');
    return L.set(r, o), o;
}
function P(e) {
    let n;
    let [r, i] = e;
    if (!E.has(r.type)) return [];
    let a = [],
        o = /\\|```/g;
    for (let e = 0; e < r.children.length; e++) {
        let s = r.children[e];
        if (m.LC.isText(s))
            for (o.lastIndex = 0; null != (n = o.exec(s.text)); ) {
                if ('\\' === n[0]) {
                    o.lastIndex += 1;
                    continue;
                }
                a.push({
                    path: m.C0.child(i, e),
                    offset: n.index
                });
            }
    }
    return a;
}
function M(e, n) {
    let r = 0;
    for (let a of m.bN.nodes(e, {
        at: {
            anchor: {
                path: g.u9,
                offset: 0
            },
            focus: n
        },
        mode: 'lowest',
        match: (e) => m.LC.isText(e)
    })) {
        var i;
        let e = a[0].text;
        m.C0.equals(a[1], n.path) && (e = e.substring(0, n.offset));
        let o = e.match(/```/g);
        r += null !== (i = null == o ? void 0 : o.length) && void 0 !== i ? i : 0;
    }
    return r % 2 != 0;
}
function k(e) {
    if (null == e.selection) return !1;
    let n = m.M8.start(e.selection);
    return M(e, n);
}
