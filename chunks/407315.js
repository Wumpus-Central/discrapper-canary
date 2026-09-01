"use strict";
n.d(t, { Ay: () => N, Q9: () => w, W: () => k }), n(321073);
var l = n(635377),
    i = n.n(l),
    s = n(181370),
    r = n.n(s),
    a = n(941426),
    o = n(157941),
    u = n(938855),
    c = n(768947),
    d = n(927813),
    h = n(38405),
    m = n(186306),
    f = n(323350),
    p = n(35277),
    g = n(820066),
    x = n(551483),
    A = n(389437);
let E = new a.Vy("withCodeBlocks"),
    C = new Set(["line"]),
    I = /^[a-z0-9_+\-.#]+$/i,
    y = null,
    S = null;
function N(e) {
    let { onChange: t } = e,
        l = null,
        i = !1,
        s = !1;
    function r(t) {
        (0, u.W9)(t)
            .then((t) => {
                null != t &&
                    (s ||
                        ((s = !0),
                        queueMicrotask(() => {
                            s = !1;
                            try {
                                m.o.withoutSaving(e, () => {
                                    g.VW.withoutNormalizing(e, () => v(e, r));
                                }),
                                    (l = g.VW.richValue(e));
                            } catch (e) {
                                E.warn("error applying arborium highlighting to editor", e);
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
                        v(e, r) &&
                            null == y &&
                            !i &&
                            ((i = !0),
                            (null == S &&
                                (S = Promise.all([n.e("818449"), n.e("175134")])
                                    .then(n.bind(n, 981776))
                                    .then((e) => {
                                        y = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((S = null), e);
                                    })),
                            S)
                                .then(() => {
                                    (l = null),
                                        m.o.withoutSaving(e, () => {
                                            g.VW.withoutNormalizing(e, () => v(e));
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
function v(e, t) {
    let n = (function (e, t) {
        let n = [],
            l = null;
        for (let t of g.VW.blocks(e))
            (l = (function (e, t, n, l, i) {
                let s = (function (e) {
                        let t,
                            [n, l] = e;
                        if (!C.has(n.type)) return [];
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
                let { enabled: n } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" }),
                    l = [],
                    i = !1;
                for (let s of e) {
                    let a = s === e[e.length - 1];
                    if (
                        (s.closesCodeBlock || a) &&
                        (i && a && !s.closesCodeBlock && l.push(s), (i = !1), l.length > 0)
                    ) {
                        let e = l.map((e) => (0, f.IQ)(e.blockEntry[0])).join("\n"),
                            i = l[0].lang;
                        if (null != i && n)
                            !(function (e, t, n, l) {
                                let i = (function (e, t, n, l) {
                                    let i,
                                        s = (0, c.py)(t);
                                    if (null == s) return null;
                                    let a = (0, u.F)(s);
                                    if (null == a) return l?.(s), null;
                                    let o = r()(`${s}\0${e}`),
                                        d = O.get(o);
                                    if (null != d && d.length === n) return d;
                                    if (M.has(o)) return null;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    let m = e.endsWith("\n")
                                        ? e
                                        : `${e}
`;
                                    try {
                                        let e = a.highlightToHtml(m);
                                        if (((i = e.html), null != l)) for (let t of e.missingInjections) l(t);
                                    } catch (e) {
                                        return (
                                            M.set(o, !0),
                                            h.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                tags: { app_context: "syntax_highlighting" },
                                                extra: { lang: s, surface: "editor" },
                                            }),
                                            null
                                        );
                                    }
                                    let f = i.endsWith("\n") ? i.slice(0, -1).split("\n") : i.split("\n");
                                    if (f.length !== n) return null;
                                    let p = [];
                                    for (let e = 0; e < n; e++)
                                        p.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    l = [],
                                                    i = 0,
                                                    s = 0;
                                                for (j.lastIndex = 0; null != (t = j.exec(e)); ) {
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
                                                        let e = T.get(t[1]);
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
                                            })(f[e]),
                                        );
                                    return O.set(o, p), p;
                                })(e, t, n.length, l);
                                if (null != i) for (let e = 0; e < n.length; e++) n[e].hljsTypes = i[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, i, l, t);
                        else if (null == i || null == y || y.hasLanguage(i)) {
                            if (null != i && null != y && y.hasLanguage(i)) {
                                let t = (function (e, t) {
                                    if (null == y) return null;
                                    let n = `${e}-${t}`,
                                        l = R.get(n);
                                    if (null != l) return l;
                                    let i = y.highlight(t, e, !1);
                                    if (null == i || i.illegal) return null;
                                    let s = i.value.split("\n");
                                    return R.set(n, s), s;
                                })(e, i);
                                if (null != t && t.length === l.length) {
                                    let e = [];
                                    for (let n = 0; n < l.length; n++) {
                                        let i,
                                            s = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            r = [],
                                            a = 0,
                                            o = 0;
                                        for (; null != (i = _.exec(s)); ) {
                                            let t = i.index + i[0].length,
                                                n = i.index - o;
                                            i.index > o &&
                                                (e.length > 0 && r.push({ types: [...e], start: a, end: a + n }),
                                                (a += n)),
                                                "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                                (o = t);
                                        }
                                        if (e.length > 0) {
                                            let t = s.length - o;
                                            r.push({ types: [...e], start: a, end: a + t });
                                        }
                                        l[n].hljsTypes = r;
                                    }
                                } else for (let e = 0; e < l.length; e++) l[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < l.length; e++) l[e].hljsTypes = [];
                        l = [];
                    }
                    i && l.push(s), s.opensCodeBlock && (i = !0);
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
    j = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    T = new Map();
for (let [e, t] of Object.entries(A)) e.startsWith("a-") && null != t && T.set(e, t);
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
function k(e, t) {
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
function w(e) {
    if (null == e.selection) return !1;
    let t = g.ZF.start(e.selection);
    return k(e, t);
}
(0, u.Q4)(() => {
    O.reset();
});
