"use strict";
n.d(t, { Ay: () => C, Q9: () => w, W: () => U }), n(321073);
var i = n(635377),
    r = n.n(i),
    a = n(181370),
    s = n.n(a),
    l = n(941426),
    o = n(157941),
    d = n(386239),
    c = n(768947),
    u = n(927813),
    _ = n(38405),
    E = n(186306),
    A = n(323350),
    h = n(35277),
    I = n(820066),
    f = n(551483),
    p = n(618559);
let T = new l.Vy("withCodeBlocks"),
    m = new Set(["line"]),
    g = /^[a-z0-9_+\-.#]+$/i,
    S = null,
    N = null;
function C(e) {
    let { onChange: t } = e,
        i = null,
        r = !1,
        a = !1;
    function s(t) {
        let { preferNative: n } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" });
        (0, d.W9)(t, n)
            .then((t) => {
                null != t &&
                    (a ||
                        ((a = !0),
                        queueMicrotask(() => {
                            a = !1;
                            try {
                                E.o.withoutSaving(e, () => {
                                    I.VW.withoutNormalizing(e, () => O(e, s));
                                }),
                                    (i = I.VW.richValue(e));
                            } catch (e) {
                                T.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            I.VW.richValue(e) !== i &&
                (E.o.withoutSaving(e, () => {
                    I.VW.withoutNormalizing(e, () => {
                        O(e, s) &&
                            null == S &&
                            !r &&
                            ((r = !0),
                            (null == N &&
                                (N = Promise.all([n.e("57036"), n.e("75134")])
                                    .then(n.bind(n, 981776))
                                    .then((e) => {
                                        S = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((N = null), e);
                                    })),
                            N)
                                .then(() => {
                                    (i = null),
                                        E.o.withoutSaving(e, () => {
                                            I.VW.withoutNormalizing(e, () => O(e));
                                        }),
                                        (i = I.VW.richValue(e));
                                })
                                .catch(() => {})
                                .finally(() => {
                                    r = !1;
                                }));
                    });
                }),
                (i = I.VW.richValue(e))),
                t();
        }),
        e
    );
}
function O(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = null;
        for (let t of I.VW.blocks(e))
            (i = (function (e, t, n, i, r) {
                let a = (function (e) {
                        let t,
                            [n, i] = e;
                        if (!m.has(n.type)) return [];
                        let r = [],
                            a = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let s = n.children[e];
                            if (I.l5.isText(s))
                                for (a.lastIndex = 0; null != (t = a.exec(s.text)); ) {
                                    if ("\\" === t[0]) {
                                        a.lastIndex += 1;
                                        continue;
                                    }
                                    r.push({ path: I.PW.child(i, e), offset: t.index });
                                }
                        }
                        return r;
                    })(t),
                    s = a[0],
                    l = a[a.length - 1],
                    o = null;
                if (null != l) {
                    let [t] = I.VW.node(e, l.path);
                    o = t.text.substring(l.offset + 3);
                }
                let d = n && null != s,
                    c = n && 0 === a.length,
                    u = i && 0 === a.length,
                    _ = (d ? a.slice(1) : a).length % 2 == 1,
                    E = _ && (null == o || "" === o || null != o.match(g)),
                    A = E && null != o && "" !== o ? o.toLowerCase() : null;
                return {
                    blockEntry: t,
                    wasInCodeBlock: n,
                    isInCodeBlock: c,
                    isStyledCodeBlockLine: u,
                    lang: _ || d ? A : r,
                    hljsTypes: null,
                    closesCodeBlock: d,
                    opensCodeBlock: _,
                    opensCodeBlockOnOwnLine: E,
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
                let { enabled: n, preferNative: i } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" }),
                    r = [],
                    a = !1;
                for (let l of e) {
                    let o = l === e[e.length - 1];
                    if (
                        (l.closesCodeBlock || o) &&
                        (a && o && !l.closesCodeBlock && r.push(l), (a = !1), r.length > 0)
                    ) {
                        let e = r.map((e) => (0, A.IQ)(e.blockEntry[0])).join("\n"),
                            a = r[0].lang;
                        if (null != a && n)
                            !(function (e, t, n, i, r) {
                                let a = (function (e, t, n, i, r) {
                                    let a,
                                        l = (0, c.py)(t);
                                    if (null == l) return null;
                                    let o = (0, d.F)(l, i);
                                    if (null == o) return r?.(l), null;
                                    let u = s()(`${l}\0${e}\0${o.backend}`),
                                        E = b.get(u);
                                    if (null != E && E.length === n) return E;
                                    if (M.has(u)) return null;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    let A = e.endsWith("\n")
                                        ? e
                                        : `${e}
`;
                                    try {
                                        let e = o.highlightToHtml(A);
                                        if (((a = e.html), null != r)) for (let t of e.missingInjections) r(t);
                                    } catch (e) {
                                        return (
                                            M.set(u, !0),
                                            _.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                tags: { app_context: "syntax_highlighting" },
                                                extra: { lang: l, surface: "editor" },
                                            }),
                                            null
                                        );
                                    }
                                    let h = a.endsWith("\n") ? a.slice(0, -1).split("\n") : a.split("\n");
                                    if (h.length !== n) return null;
                                    let I = [];
                                    for (let e = 0; e < n; e++)
                                        I.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    i = [],
                                                    r = 0,
                                                    a = 0;
                                                for (L.lastIndex = 0; null != (t = L.exec(e)); ) {
                                                    let s = t.index + t[0].length,
                                                        l = P(e.substring(a, t.index)).length,
                                                        o = i.filter((e) => null != e);
                                                    if (
                                                        (l > 0 &&
                                                            o.length > 0 &&
                                                            n.push({ types: o, start: r, end: r + l }),
                                                        l > 0 && (r += l),
                                                        null != t[1])
                                                    ) {
                                                        let e = D.get(t[1]);
                                                        i.push(e ?? null);
                                                    } else i.pop();
                                                    a = s;
                                                }
                                                let s = P(e.substring(a)).length,
                                                    l = i.filter((e) => null != e);
                                                return (
                                                    s > 0 && l.length > 0 && n.push({ types: l, start: r, end: r + s }),
                                                    n
                                                );
                                            })(h[e]),
                                        );
                                    return b.set(u, I), I;
                                })(e, t, n.length, i, r);
                                if (null != a) for (let e = 0; e < n.length; e++) n[e].hljsTypes = a[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, a, r, i, t);
                        else if (null == a || null == S || S.hasLanguage(a)) {
                            if (null != a && null != S && S.hasLanguage(a)) {
                                let t = (function (e, t) {
                                    if (null == S) return null;
                                    let n = `${e}-${t}`,
                                        i = v.get(n);
                                    if (null != i) return i;
                                    let r = S.highlight(t, e, !1);
                                    if (null == r || r.illegal) return null;
                                    let a = r.value.split("\n");
                                    return v.set(n, a), a;
                                })(e, a);
                                if (null != t && t.length === r.length) {
                                    let e = [];
                                    for (let n = 0; n < r.length; n++) {
                                        let i,
                                            a = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            s = [],
                                            l = 0,
                                            o = 0;
                                        for (; null != (i = R.exec(a)); ) {
                                            let t = i.index + i[0].length,
                                                n = i.index - o;
                                            i.index > o &&
                                                (e.length > 0 && s.push({ types: [...e], start: l, end: l + n }),
                                                (l += n)),
                                                "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                                (o = t);
                                        }
                                        if (e.length > 0) {
                                            let t = a.length - o;
                                            s.push({ types: [...e], start: l, end: l + t });
                                        }
                                        r[n].hljsTypes = s;
                                    }
                                } else for (let e = 0; e < r.length; e++) r[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < r.length; e++) r[e].hljsTypes = [];
                        r = [];
                    }
                    a && r.push(l), l.opensCodeBlock && (a = !0);
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
                    a =
                        (n = i).isStyledCodeBlockLine || n.wasInCodeBlock
                            ? {
                                  lang: n.lang,
                                  wasInCodeBlock: n.wasInCodeBlock,
                                  isInCodeBlock: n.isInCodeBlock,
                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                  hljsTypes: n.hljsTypes,
                              }
                            : null;
                t?.codeBlockState != a && h.b.setNodes(e, { codeBlockState: a }, { at: r });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let R = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    L = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    D = new Map();
for (let [e, t] of Object.entries(p)) e.startsWith("a-") && null != t && D.set(e, t);
let y = { max: 1 / 0, maxAge: +u.A.Millis.MINUTE, updateAgeOnGet: !0 },
    v = new (r())(y),
    b = new (r())(y),
    M = new (r())(y);
function P(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
function U(e, t) {
    let n = 0;
    for (let i of I.VW.nodes(e, {
        at: { anchor: { path: f.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => I.l5.isText(e),
    })) {
        let e = i[0].text;
        I.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let r = e.match(/```/g);
        n += r?.length ?? 0;
    }
    return n % 2 != 0;
}
function w(e) {
    if (null == e.selection) return !1;
    let t = I.ZF.start(e.selection);
    return U(e, t);
}
(0, d.Q4)(() => {
    b.reset();
});
