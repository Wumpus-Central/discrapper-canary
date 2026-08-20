"use strict";
n.d(t, { Ay: () => S, Q9: () => k, W: () => w }), n(321073);
var l = n(635377),
    i = n.n(l),
    s = n(181370),
    r = n.n(s),
    a = n(941426),
    o = n(157941),
    u = n(386239),
    c = n(768947),
    d = n(927813),
    h = n(38405),
    m = n(186306),
    f = n(323350),
    p = n(35277),
    g = n(820066),
    x = n(551483),
    A = n(389437);
let C = new a.Vy("withCodeBlocks"),
    E = new Set(["line"]),
    I = /^[a-z0-9_+\-.#]+$/i,
    y = null,
    v = null;
function S(e) {
    let { onChange: t } = e,
        l = null,
        i = !1,
        s = !1;
    function r(t) {
        let { preferNative: n } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" });
        (0, u.W9)(t, n)
            .then((t) => {
                null != t &&
                    (s ||
                        ((s = !0),
                        queueMicrotask(() => {
                            s = !1;
                            try {
                                m.o.withoutSaving(e, () => {
                                    g.VW.withoutNormalizing(e, () => N(e, r));
                                }),
                                    (l = g.VW.richValue(e));
                            } catch (e) {
                                C.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            g.VW.richValue(e) !== l &&
                (m.o.withoutSaving(e, () => {
                    g.VW.withoutNormalizing(e, () => {
                        N(e, r) &&
                            null == y &&
                            !i &&
                            ((i = !0),
                            (null == v &&
                                (v = Promise.all([n.e("818449"), n.e("175134")])
                                    .then(n.bind(n, 981776))
                                    .then((e) => {
                                        y = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((v = null), e);
                                    })),
                            v)
                                .then(() => {
                                    (l = null),
                                        m.o.withoutSaving(e, () => {
                                            g.VW.withoutNormalizing(e, () => N(e));
                                        }),
                                        (l = g.VW.richValue(e));
                                })
                                .catch(() => {})
                                .finally(() => {
                                    i = !1;
                                }));
                    });
                }),
                (l = g.VW.richValue(e))),
                t();
        }),
        e
    );
}
function N(e, t) {
    let n = (function (e, t) {
        let n = [],
            l = null;
        for (let t of g.VW.blocks(e))
            (l = (function (e, t, n, l, i) {
                let s = (function (e) {
                        let t,
                            [n, l] = e;
                        if (!E.has(n.type)) return [];
                        let i = [],
                            s = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let r = n.children[e];
                            if (g.l5.isText(r))
                                for (s.lastIndex = 0; null != (t = s.exec(r.text)); ) {
                                    if ("\\" === t[0]) {
                                        s.lastIndex += 1;
                                        continue;
                                    }
                                    i.push({ path: g.PW.child(l, e), offset: t.index });
                                }
                        }
                        return i;
                    })(t),
                    r = s[0],
                    a = s[s.length - 1],
                    o = null;
                if (null != a) {
                    let [t] = g.VW.node(e, a.path);
                    o = t.text.substring(a.offset + 3);
                }
                let u = n && null != r,
                    c = n && 0 === s.length,
                    d = l && 0 === s.length,
                    h = (u ? s.slice(1) : s).length % 2 == 1,
                    m = h && (null == o || "" === o || null != o.match(I)),
                    f = m && null != o && "" !== o ? o.toLowerCase() : null;
                return {
                    blockEntry: t,
                    wasInCodeBlock: n,
                    isInCodeBlock: c,
                    isStyledCodeBlockLine: d,
                    lang: h || u ? f : i,
                    hljsTypes: null,
                    closesCodeBlock: u,
                    opensCodeBlock: h,
                    opensCodeBlockOnOwnLine: m,
                };
            })(
                e,
                t,
                null != l && (l.isInCodeBlock || l.opensCodeBlock),
                null != l && (l.isStyledCodeBlockLine || l.opensCodeBlockOnOwnLine),
                null != l && (l.opensCodeBlock || !l.closesCodeBlock) ? l.lang : null,
            )),
                n.push(l);
        return (
            (function (e, t) {
                let { enabled: n, preferNative: l } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" }),
                    i = [],
                    s = !1;
                for (let a of e) {
                    let o = a === e[e.length - 1];
                    if (
                        (a.closesCodeBlock || o) &&
                        (s && o && !a.closesCodeBlock && i.push(a), (s = !1), i.length > 0)
                    ) {
                        let e = i.map((e) => (0, f.IQ)(e.blockEntry[0])).join("\n"),
                            s = i[0].lang;
                        if (null != s && n)
                            !(function (e, t, n, l, i) {
                                let s = (function (e, t, n, l, i) {
                                    let s,
                                        a = (0, c.py)(t);
                                    if (null == a) return null;
                                    let o = (0, u.F)(a, l);
                                    if (null == o) return i?.(a), null;
                                    let d = r()(`${a}\0${e}\0${o.backend}`),
                                        m = O.get(d);
                                    if (null != m && m.length === n) return m;
                                    if (M.has(d)) return null;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    let f = e.endsWith("\n")
                                        ? e
                                        : `${e}
`;
                                    try {
                                        let e = o.highlightToHtml(f);
                                        if (((s = e.html), null != i)) for (let t of e.missingInjections) i(t);
                                    } catch (e) {
                                        return (
                                            M.set(d, !0),
                                            h.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                tags: { app_context: "syntax_highlighting" },
                                                extra: { lang: a, surface: "editor" },
                                            }),
                                            null
                                        );
                                    }
                                    let p = s.endsWith("\n") ? s.slice(0, -1).split("\n") : s.split("\n");
                                    if (p.length !== n) return null;
                                    let g = [];
                                    for (let e = 0; e < n; e++)
                                        g.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    l = [],
                                                    i = 0,
                                                    s = 0;
                                                for (T.lastIndex = 0; null != (t = T.exec(e)); ) {
                                                    let r = t.index + t[0].length,
                                                        a = L(e.substring(s, t.index)).length,
                                                        o = l.filter((e) => null != e);
                                                    if (
                                                        (a > 0 &&
                                                            o.length > 0 &&
                                                            n.push({ types: o, start: i, end: i + a }),
                                                        a > 0 && (i += a),
                                                        null != t[1])
                                                    ) {
                                                        let e = j.get(t[1]);
                                                        l.push(e ?? null);
                                                    } else l.pop();
                                                    s = r;
                                                }
                                                let r = L(e.substring(s)).length,
                                                    a = l.filter((e) => null != e);
                                                return (
                                                    r > 0 && a.length > 0 && n.push({ types: a, start: i, end: i + r }),
                                                    n
                                                );
                                            })(p[e]),
                                        );
                                    return O.set(d, g), g;
                                })(e, t, n.length, l, i);
                                if (null != s) for (let e = 0; e < n.length; e++) n[e].hljsTypes = s[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, s, i, l, t);
                        else if (null == s || null == y || y.hasLanguage(s)) {
                            if (null != s && null != y && y.hasLanguage(s)) {
                                let t = (function (e, t) {
                                    if (null == y) return null;
                                    let n = `${e}-${t}`,
                                        l = R.get(n);
                                    if (null != l) return l;
                                    let i = y.highlight(t, e, !1);
                                    if (null == i || i.illegal) return null;
                                    let s = i.value.split("\n");
                                    return R.set(n, s), s;
                                })(e, s);
                                if (null != t && t.length === i.length) {
                                    let e = [];
                                    for (let n = 0; n < i.length; n++) {
                                        let l,
                                            s = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            r = [],
                                            a = 0,
                                            o = 0;
                                        for (; null != (l = _.exec(s)); ) {
                                            let t = l.index + l[0].length,
                                                n = l.index - o;
                                            l.index > o &&
                                                (e.length > 0 && r.push({ types: [...e], start: a, end: a + n }),
                                                (a += n)),
                                                "</span>" === l[0] ? e.pop() : e.push(l[1]),
                                                (o = t);
                                        }
                                        if (e.length > 0) {
                                            let t = s.length - o;
                                            r.push({ types: [...e], start: a, end: a + t });
                                        }
                                        i[n].hljsTypes = r;
                                    }
                                } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = [];
                        i = [];
                    }
                    s && i.push(a), a.opensCodeBlock && (s = !0);
                }
            })(n, t),
            n
        );
    })(e, t);
    return (
        (function (e, t) {
            for (let l of t) {
                var n;
                let [t, i] = l.blockEntry,
                    s =
                        (n = l).isStyledCodeBlockLine || n.wasInCodeBlock
                            ? {
                                  lang: n.lang,
                                  wasInCodeBlock: n.wasInCodeBlock,
                                  isInCodeBlock: n.isInCodeBlock,
                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                  hljsTypes: n.hljsTypes,
                              }
                            : null;
                t?.codeBlockState != s && p.b.setNodes(e, { codeBlockState: s }, { at: i });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let _ = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    T = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    j = new Map();
for (let [e, t] of Object.entries(A)) e.startsWith("a-") && null != t && j.set(e, t);
let b = { max: 1 / 0, maxAge: +d.A.Millis.MINUTE, updateAgeOnGet: !0 },
    R = new (i())(b),
    O = new (i())(b),
    M = new (i())(b);
function L(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
function w(e, t) {
    let n = 0;
    for (let l of g.VW.nodes(e, {
        at: { anchor: { path: x.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => g.l5.isText(e),
    })) {
        let e = l[0].text;
        g.PW.equals(l[1], t.path) && (e = e.substring(0, t.offset));
        let i = e.match(/```/g);
        n += i?.length ?? 0;
    }
    return n % 2 != 0;
}
function k(e) {
    if (null == e.selection) return !1;
    let t = g.ZF.start(e.selection);
    return w(e, t);
}
(0, u.Q4)(() => {
    O.reset();
});
