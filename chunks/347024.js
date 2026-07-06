"use strict";
let i;
n.d(t, { W: () => x, Ay: () => O, Q9: () => U }), n(321073);
var r = n(635377),
    s = n.n(r),
    a = n(941426),
    o = n(534979);
let l = new Map(),
    u = new Map(),
    c = new Set();
function d(e) {
    let t = l.get(e);
    if (null != t) return t;
    if (!(e in o.pb)) {
        let t = Promise.resolve(null);
        return l.set(e, t), t;
    }
    return (
        (t = (null == i && (i = (0, o.A)()), i)
            .then((t) => t.loadGrammar(o.pb[e]))
            .then((t) => {
                for (let n of (u.set(e, t), c)) n(e);
                return t;
            })),
        l.set(e, t),
        t
    );
}
var _ = n(157941),
    h = n(768947),
    f = n(927813),
    E = n(186306),
    p = n(323350),
    m = n(35277),
    g = n(820066),
    A = n(551483),
    I = n(618559);
let T = new a.Vy("withCodeBlocks"),
    S = new Set(["line"]),
    N = /^[a-z0-9_+\-.#]+$/i,
    C = null,
    y = null;
function O(e) {
    let { onChange: t } = e,
        i = null,
        r = !1,
        s = !1;
    function a(t) {
        d(t)
            .then((t) => {
                null != t &&
                    (s ||
                        ((s = !0),
                        queueMicrotask(() => {
                            s = !1;
                            try {
                                E.o.withoutSaving(e, () => {
                                    g.VW.withoutNormalizing(e, () => R(e, a));
                                }),
                                    (i = g.VW.richValue(e));
                            } catch (e) {
                                T.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            g.VW.richValue(e) !== i &&
                (E.o.withoutSaving(e, () => {
                    g.VW.withoutNormalizing(e, () => {
                        R(e, a) &&
                            null == C &&
                            !r &&
                            ((r = !0),
                            (null == y &&
                                (y = Promise.all([n.e("57036"), n.e("75134")])
                                    .then(n.bind(n, 981776))
                                    .then((e) => {
                                        C = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((y = null), e);
                                    })),
                            y)
                                .then(() => {
                                    (i = null),
                                        E.o.withoutSaving(e, () => {
                                            g.VW.withoutNormalizing(e, () => R(e));
                                        }),
                                        (i = g.VW.richValue(e));
                                })
                                .catch(() => {})
                                .finally(() => {
                                    r = !1;
                                }));
                    });
                }),
                (i = g.VW.richValue(e))),
                t();
        }),
        e
    );
}
function R(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = null;
        for (let t of g.VW.blocks(e))
            (i = (function (e, t, n, i, r) {
                let s = (function (e) {
                        let t,
                            [n, i] = e;
                        if (!S.has(n.type)) return [];
                        let r = [],
                            s = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let a = n.children[e];
                            if (g.l5.isText(a))
                                for (s.lastIndex = 0; null != (t = s.exec(a.text)); ) {
                                    if ("\\" === t[0]) {
                                        s.lastIndex += 1;
                                        continue;
                                    }
                                    r.push({ path: g.PW.child(i, e), offset: t.index });
                                }
                        }
                        return r;
                    })(t),
                    a = s[0],
                    o = s[s.length - 1],
                    l = null;
                if (null != o) {
                    let [t] = g.VW.node(e, o.path);
                    l = t.text.substring(o.offset + 3);
                }
                let u = n && null != a,
                    c = n && 0 === s.length,
                    d = i && 0 === s.length,
                    _ = (u ? s.slice(1) : s).length % 2 == 1,
                    h = _ && (null == l || "" === l || null != l.match(N)),
                    f = h && null != l && "" !== l ? l.toLowerCase() : null;
                return {
                    blockEntry: t,
                    wasInCodeBlock: n,
                    isInCodeBlock: c,
                    isStyledCodeBlockLine: d,
                    lang: _ || u ? f : r,
                    hljsTypes: null,
                    closesCodeBlock: u,
                    opensCodeBlock: _,
                    opensCodeBlockOnOwnLine: h,
                };
            })(
                e,
                t,
                null != i && (i.isInCodeBlock || i.opensCodeBlock),
                null != i && (i.isStyledCodeBlockLine || i.opensCodeBlockOnOwnLine),
                null != i && (i.opensCodeBlock || !i.closesCodeBlock) ? i.lang : null,
            )),
                n.push(i);
        return (
            (function (e, t) {
                let n = _.L.getConfig({ location: "syntaxHighlightCodeBlocks" }).enabled,
                    i = [],
                    r = !1;
                for (let s of e) {
                    let a = s === e[e.length - 1];
                    if (
                        (s.closesCodeBlock || a) &&
                        (r && a && !s.closesCodeBlock && i.push(s), (r = !1), i.length > 0)
                    ) {
                        let e = i.map((e) => (0, p.IQ)(e.blockEntry[0])).join("\n"),
                            r = i[0].lang;
                        if (null != r && n)
                            !(function (e, t, n, i) {
                                let r = (function (e, t, n, i) {
                                    let r,
                                        s = (0, h.py)(t);
                                    if (null == s) return null;
                                    let a = `${e}-${s}`,
                                        o = P.get(a);
                                    if (null != o && o.length === n) return o;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    let l = u.has(s) ? (u.get(s) ?? null) : (d(s), null);
                                    if (null == l) return i?.(s), null;
                                    let c = e.endsWith("\n")
                                            ? e
                                            : `${e}
`,
                                        _ = l.createSession();
                                    try {
                                        _.setText(c);
                                        let e = _.highlightToHtml();
                                        if (((r = e.html), null != i)) for (let t of e.missingInjections) i(t);
                                    } finally {
                                        _.free();
                                    }
                                    let f = r.endsWith("\n") ? r.slice(0, -1).split("\n") : r.split("\n");
                                    if (f.length !== n) return null;
                                    let E = [];
                                    for (let e = 0; e < n; e++)
                                        E.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    i = [],
                                                    r = 0,
                                                    s = 0;
                                                for (b.lastIndex = 0; null != (t = b.exec(e)); ) {
                                                    let a = t.index + t[0].length,
                                                        o = M(e.substring(s, t.index)).length,
                                                        l = i.filter((e) => null != e);
                                                    if (
                                                        (o > 0 &&
                                                            l.length > 0 &&
                                                            n.push({ types: l, start: r, end: r + o }),
                                                        o > 0 && (r += o),
                                                        null != t[1])
                                                    ) {
                                                        let e = L.get(t[1]);
                                                        i.push(e ?? null);
                                                    } else i.pop();
                                                    s = a;
                                                }
                                                let a = M(e.substring(s)).length,
                                                    o = i.filter((e) => null != e);
                                                return (
                                                    a > 0 && o.length > 0 && n.push({ types: o, start: r, end: r + a }),
                                                    n
                                                );
                                            })(f[e]),
                                        );
                                    return P.set(a, E), E;
                                })(e, t, n.length, i);
                                if (null != r) for (let e = 0; e < n.length; e++) n[e].hljsTypes = r[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, r, i, t);
                        else if (null == r || null == C || C.hasLanguage(r)) {
                            if (null != r && null != C && C.hasLanguage(r)) {
                                let t = (function (e, t) {
                                    if (null == C) return null;
                                    let n = `${e}-${t}`,
                                        i = w.get(n);
                                    if (null != i) return i;
                                    let r = C.highlight(t, e, !1);
                                    if (null == r || r.illegal) return null;
                                    let s = r.value.split("\n");
                                    return w.set(n, s), s;
                                })(e, r);
                                if (null != t && t.length === i.length) {
                                    let e = [];
                                    for (let n = 0; n < i.length; n++) {
                                        let r,
                                            s = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            a = [],
                                            o = 0,
                                            l = 0;
                                        for (; null != (r = v.exec(s)); ) {
                                            let t = r.index + r[0].length,
                                                n = r.index - l;
                                            r.index > l &&
                                                (e.length > 0 && a.push({ types: [...e], start: o, end: o + n }),
                                                (o += n)),
                                                "</span>" === r[0] ? e.pop() : e.push(r[1]),
                                                (l = t);
                                        }
                                        if (e.length > 0) {
                                            let t = s.length - l;
                                            a.push({ types: [...e], start: o, end: o + t });
                                        }
                                        i[n].hljsTypes = a;
                                    }
                                } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = [];
                        i = [];
                    }
                    r && i.push(s), s.opensCodeBlock && (r = !0);
                }
            })(n, t),
            n
        );
    })(e, t);
    return (
        (function (e, t) {
            for (let i of t) {
                var n;
                let [t, r] = i.blockEntry,
                    s =
                        (n = i).isStyledCodeBlockLine || n.wasInCodeBlock
                            ? {
                                  lang: n.lang,
                                  wasInCodeBlock: n.wasInCodeBlock,
                                  isInCodeBlock: n.isInCodeBlock,
                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                  hljsTypes: n.hljsTypes,
                              }
                            : null;
                t?.codeBlockState != s && m.b.setNodes(e, { codeBlockState: s }, { at: r });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let v = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    b = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    L = new Map();
for (let [e, t] of Object.entries(I)) e.startsWith("a-") && null != t && L.set(e, t);
let D = { max: 1 / 0, maxAge: +f.A.Millis.MINUTE, updateAgeOnGet: !0 },
    w = new (s())(D),
    P = new (s())(D);
function M(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
function x(e, t) {
    let n = 0;
    for (let i of g.VW.nodes(e, {
        at: { anchor: { path: A.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => g.l5.isText(e),
    })) {
        let e = i[0].text;
        g.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let r = e.match(/```/g);
        n += r?.length ?? 0;
    }
    return n % 2 != 0;
}
function U(e) {
    if (null == e.selection) return !1;
    let t = g.ZF.start(e.selection);
    return x(e, t);
}
c.add(() => {
    P.reset();
});
