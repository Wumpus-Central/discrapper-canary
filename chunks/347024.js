"use strict";
let i;
n.d(t, { W: () => x, Ay: () => L, Q9: () => k }), n(321073);
var r = n(635377),
    a = n.n(r),
    s = n(941426),
    l = n(534979);
let o = new Map(),
    d = new Map(),
    c = new Set();
function u(e) {
    let t = o.get(e);
    if (null != t) return t;
    if (!(e in l.pb)) {
        let t = Promise.resolve(null);
        return o.set(e, t), t;
    }
    return (
        (t = (null == i && (i = (0, l.A)()), i)
            .then((t) => t.loadGrammar(l.pb[e]))
            .then((t) => {
                for (let n of (d.set(e, t), c)) n(e);
                return t;
            })),
        o.set(e, t),
        t
    );
}
var _ = n(157941),
    E = n(768947),
    A = n(927813),
    h = n(38405),
    I = n(186306),
    f = n(323350),
    p = n(35277),
    T = n(820066),
    m = n(551483),
    g = n(618559);
let S = new s.Vy("withCodeBlocks"),
    N = new Set(["line"]),
    C = /^[a-z0-9_+\-.#]+$/i,
    R = null,
    O = null;
function L(e) {
    let { onChange: t } = e,
        i = null,
        r = !1,
        a = !1;
    function s(t) {
        u(t)
            .then((t) => {
                null != t &&
                    (a ||
                        ((a = !0),
                        queueMicrotask(() => {
                            a = !1;
                            try {
                                I.o.withoutSaving(e, () => {
                                    T.VW.withoutNormalizing(e, () => D(e, s));
                                }),
                                    (i = T.VW.richValue(e));
                            } catch (e) {
                                S.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            T.VW.richValue(e) !== i &&
                (I.o.withoutSaving(e, () => {
                    T.VW.withoutNormalizing(e, () => {
                        D(e, s) &&
                            null == R &&
                            !r &&
                            ((r = !0),
                            (null == O &&
                                (O = Promise.all([n.e("57036"), n.e("75134")])
                                    .then(n.bind(n, 981776))
                                    .then((e) => {
                                        R = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((O = null), e);
                                    })),
                            O)
                                .then(() => {
                                    (i = null),
                                        I.o.withoutSaving(e, () => {
                                            T.VW.withoutNormalizing(e, () => D(e));
                                        }),
                                        (i = T.VW.richValue(e));
                                })
                                .catch(() => {})
                                .finally(() => {
                                    r = !1;
                                }));
                    });
                }),
                (i = T.VW.richValue(e))),
                t();
        }),
        e
    );
}
function D(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = null;
        for (let t of T.VW.blocks(e))
            (i = (function (e, t, n, i, r) {
                let a = (function (e) {
                        let t,
                            [n, i] = e;
                        if (!N.has(n.type)) return [];
                        let r = [],
                            a = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let s = n.children[e];
                            if (T.l5.isText(s))
                                for (a.lastIndex = 0; null != (t = a.exec(s.text)); ) {
                                    if ("\\" === t[0]) {
                                        a.lastIndex += 1;
                                        continue;
                                    }
                                    r.push({ path: T.PW.child(i, e), offset: t.index });
                                }
                        }
                        return r;
                    })(t),
                    s = a[0],
                    l = a[a.length - 1],
                    o = null;
                if (null != l) {
                    let [t] = T.VW.node(e, l.path);
                    o = t.text.substring(l.offset + 3);
                }
                let d = n && null != s,
                    c = n && 0 === a.length,
                    u = i && 0 === a.length,
                    _ = (d ? a.slice(1) : a).length % 2 == 1,
                    E = _ && (null == o || "" === o || null != o.match(C)),
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
                let n = _.L.getConfig({ location: "syntaxHighlightCodeBlocks" }).enabled,
                    i = [],
                    r = !1;
                for (let a of e) {
                    let s = a === e[e.length - 1];
                    if (
                        (a.closesCodeBlock || s) &&
                        (r && s && !a.closesCodeBlock && i.push(a), (r = !1), i.length > 0)
                    ) {
                        let e = i.map((e) => (0, f.IQ)(e.blockEntry[0])).join("\n"),
                            r = i[0].lang;
                        if (null != r && n)
                            !(function (e, t, n, i) {
                                let r = (function (e, t, n, i) {
                                    let r,
                                        a = (0, E.py)(t);
                                    if (null == a) return null;
                                    let s = `${e}-${a}`,
                                        l = U.get(s);
                                    if (null != l && l.length === n) return l;
                                    if (w.has(s)) return null;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    let o = d.has(a) ? (d.get(a) ?? null) : (u(a), null);
                                    if (null == o) return i?.(a), null;
                                    let c = e.endsWith("\n")
                                            ? e
                                            : `${e}
`,
                                        _ = o.createSession();
                                    try {
                                        _.setText(c);
                                        let e = _.highlightToHtml();
                                        if (((r = e.html), null != i)) for (let t of e.missingInjections) i(t);
                                    } catch (e) {
                                        return (
                                            w.set(s, !0),
                                            h.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                tags: { app_context: "syntax_highlighting" },
                                                extra: { lang: a, surface: "editor" },
                                            }),
                                            null
                                        );
                                    } finally {
                                        _.free();
                                    }
                                    let A = r.endsWith("\n") ? r.slice(0, -1).split("\n") : r.split("\n");
                                    if (A.length !== n) return null;
                                    let I = [];
                                    for (let e = 0; e < n; e++)
                                        I.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    i = [],
                                                    r = 0,
                                                    a = 0;
                                                for (v.lastIndex = 0; null != (t = v.exec(e)); ) {
                                                    let s = t.index + t[0].length,
                                                        l = G(e.substring(a, t.index)).length,
                                                        o = i.filter((e) => null != e);
                                                    if (
                                                        (l > 0 &&
                                                            o.length > 0 &&
                                                            n.push({ types: o, start: r, end: r + l }),
                                                        l > 0 && (r += l),
                                                        null != t[1])
                                                    ) {
                                                        let e = b.get(t[1]);
                                                        i.push(e ?? null);
                                                    } else i.pop();
                                                    a = s;
                                                }
                                                let s = G(e.substring(a)).length,
                                                    l = i.filter((e) => null != e);
                                                return (
                                                    s > 0 && l.length > 0 && n.push({ types: l, start: r, end: r + s }),
                                                    n
                                                );
                                            })(A[e]),
                                        );
                                    return U.set(s, I), I;
                                })(e, t, n.length, i);
                                if (null != r) for (let e = 0; e < n.length; e++) n[e].hljsTypes = r[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, r, i, t);
                        else if (null == r || null == R || R.hasLanguage(r)) {
                            if (null != r && null != R && R.hasLanguage(r)) {
                                let t = (function (e, t) {
                                    if (null == R) return null;
                                    let n = `${e}-${t}`,
                                        i = P.get(n);
                                    if (null != i) return i;
                                    let r = R.highlight(t, e, !1);
                                    if (null == r || r.illegal) return null;
                                    let a = r.value.split("\n");
                                    return P.set(n, a), a;
                                })(e, r);
                                if (null != t && t.length === i.length) {
                                    let e = [];
                                    for (let n = 0; n < i.length; n++) {
                                        let r,
                                            a = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            s = [],
                                            l = 0,
                                            o = 0;
                                        for (; null != (r = y.exec(a)); ) {
                                            let t = r.index + r[0].length,
                                                n = r.index - o;
                                            r.index > o &&
                                                (e.length > 0 && s.push({ types: [...e], start: l, end: l + n }),
                                                (l += n)),
                                                "</span>" === r[0] ? e.pop() : e.push(r[1]),
                                                (o = t);
                                        }
                                        if (e.length > 0) {
                                            let t = a.length - o;
                                            s.push({ types: [...e], start: l, end: l + t });
                                        }
                                        i[n].hljsTypes = s;
                                    }
                                } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = [];
                        i = [];
                    }
                    r && i.push(a), a.opensCodeBlock && (r = !0);
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
                t?.codeBlockState != a && p.b.setNodes(e, { codeBlockState: a }, { at: r });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let y = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    v = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    b = new Map();
for (let [e, t] of Object.entries(g)) e.startsWith("a-") && null != t && b.set(e, t);
let M = { max: 1 / 0, maxAge: +A.A.Millis.MINUTE, updateAgeOnGet: !0 },
    P = new (a())(M),
    U = new (a())(M),
    w = new (a())(M);
function G(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
function x(e, t) {
    let n = 0;
    for (let i of T.VW.nodes(e, {
        at: { anchor: { path: m.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => T.l5.isText(e),
    })) {
        let e = i[0].text;
        T.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let r = e.match(/```/g);
        n += r?.length ?? 0;
    }
    return n % 2 != 0;
}
function k(e) {
    if (null == e.selection) return !1;
    let t = T.ZF.start(e.selection);
    return x(e, t);
}
c.add(() => {
    U.reset();
});
