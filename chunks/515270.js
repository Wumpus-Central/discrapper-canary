r.d(n, {
    L6: function () {
        return k;
    },
    ZP: function () {
        return y;
    },
    iF: function () {
        return M;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(653041);
var o = r(757143);
var l = r(147519),
    u = r(31775),
    c = r.n(u),
    d = r(70956),
    f = r(364964),
    _ = r(53529),
    h = r(925994),
    p = r(436660),
    m = r(887490),
    g = r(42530);
let E = new Set(['line']),
    v = l.Z.listLanguages(),
    I = new Map();
for (let e of v) {
    e = e.toLowerCase();
    let n = l.Z.getLanguage(e);
    if (null == n) continue;
    let r = n.aliases;
    if ((I.set(e, e), null != r)) for (let n of r) I.set(n.toLowerCase(), e);
}
let T = /^[a-z0-9_+\-.#]+$/,
    b = /^[a-z0-9_+\-.#]+$/i;
for (let [e, n] of I) if (null == e.match(T)) throw Error('Language name does not match regex: '.concat(e));
function y(e) {
    let { onChange: n } = e,
        r = null;
    return (
        (e.onChange = () => {
            m.bN.richValue(e) !== r &&
                (_.T.withMergedEntry(e, () => {
                    m.bN.withoutNormalizing(e, () => S(e));
                }),
                (r = m.bN.richValue(e))),
                n();
        }),
        e
    );
}
function S(e) {
    let n = N(e);
    R(e, n);
}
let A = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;
function N(e) {
    let n = [],
        r = null;
    for (let i of m.bN.blocks(e)) {
        let a = null != r && (r.isInCodeBlock || r.opensCodeBlock),
            s = null != r && (r.isStyledCodeBlockLine || r.opensCodeBlockOnOwnLine);
        (r = C(e, i, a, s, null != r && (r.opensCodeBlock || !r.closesCodeBlock) ? r.lang : null)), n.push(r);
    }
    return D(n), n;
}
function C(e, n, r, i, a) {
    var s;
    let o = P(n),
        l = o[0],
        u = o[o.length - 1],
        c = null;
    if (null != u) {
        let [n] = m.bN.node(e, u.path);
        c = n.text.substring(u.offset + 3);
    }
    let d = r && null != l,
        f = r && 0 === o.length,
        _ = i && 0 === o.length,
        h = (d ? o.slice(1) : o).length % 2 == 1,
        p = h && (null == c || '' === c || null != c.match(b)),
        g = p && null != c && null !== (s = I.get(c.toLowerCase())) && void 0 !== s ? s : null;
    return {
        blockEntry: n,
        wasInCodeBlock: r,
        isInCodeBlock: f,
        isStyledCodeBlockLine: _,
        lang: h || d ? g : a,
        hljsTypes: null,
        closesCodeBlock: d,
        opensCodeBlock: h,
        opensCodeBlockOnOwnLine: p
    };
}
function R(e, n) {
    for (let r of n) {
        let [n, i] = r.blockEntry,
            a = O(r);
        (null == n ? void 0 : n.codeBlockState) != a && p.Q.setNodes(e, { codeBlockState: a }, { at: i });
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
                        let s = i[r]
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>')
                                .replace(/&quot;/g, '"')
                                .replace(/&#x27;/g, "'"),
                            o = [],
                            l = 0,
                            u = 0;
                        for (; null != (a = A.exec(s)); ) {
                            let n = a.index + a[0].length,
                                r = a.index - u;
                            a.index > u &&
                                (e.length > 0 &&
                                    o.push({
                                        types: [...e],
                                        start: l,
                                        end: l + r
                                    }),
                                (l += r)),
                                '</span>' === a[0] ? e.pop() : e.push(a[1]),
                                (u = n);
                        }
                        if (e.length > 0) {
                            let n = s.length - u;
                            o.push({
                                types: [...e],
                                start: l,
                                end: l + n
                            });
                        }
                        n[r].hljsTypes = o;
                    }
                } else for (let e = 0; e < n.length; e++) n[e].hljsTypes = null;
            }
            n = [];
        }
        r && n.push(i), i.opensCodeBlock && (r = !0);
    }
}
let L = {
        max: 1 / 0,
        maxAge: 1 * d.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    x = new (c())(L);
function w(e, n) {
    let r = ''.concat(e, '-').concat(n),
        i = x.get(r);
    if (null != i) return i;
    let a = f.default.highlight(n, e, !1);
    if (null == a || a.illegal) return null;
    let s = a.value.split('\n');
    return x.set(r, s), s;
}
function P(e) {
    let n;
    let [r, i] = e;
    if (!E.has(r.type)) return [];
    let a = [],
        s = /\\|```/g;
    for (let e = 0; e < r.children.length; e++) {
        let o = r.children[e];
        if (m.LC.isText(o))
            for (s.lastIndex = 0; null != (n = s.exec(o.text)); ) {
                if ('\\' === n[0]) {
                    s.lastIndex += 1;
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
        let s = e.match(/```/g);
        r += null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0;
    }
    return r % 2 != 0;
}
function k(e) {
    if (null == e.selection) return !1;
    let n = m.M8.start(e.selection);
    return M(e, n);
}
