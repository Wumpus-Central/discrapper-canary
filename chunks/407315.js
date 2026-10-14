(n.d(t, { Ay: () => N, Q9: () => U, W: () => D }), n(321073));
var l = n(626551),
    i = n(635377),
    r = n.n(i),
    s = n(181370),
    a = n.n(s),
    o = n(941426),
    u = n(586172),
    c = n(938855),
    d = n(768947),
    h = n(927813),
    m = n(38405),
    f = n(186306),
    p = n(323350),
    g = n(35277),
    x = n(820066),
    E = n(551483),
    S = n(891031),
    y = n(389437);
let C = new o.Vy("withCodeBlocks"),
    A = new Set(["line"]),
    b = /^[a-z0-9_+\-.#]+$/i,
    I = null,
    v = null;
function N(e) {
    let { onChange: t } = e,
        l = null,
        i = !1,
        r = !1;
    function s(t) {
        (0, c.W9)(t)
            .then((t) => {
                null != t &&
                    (r ||
                        ((r = !0),
                        queueMicrotask(() => {
                            r = !1;
                            try {
                                (f.o.withoutSaving(e, () => {
                                    x.VW.withoutNormalizing(e, () => T(e, s));
                                }),
                                    (l = x.VW.richValue(e)));
                            } catch (e) {
                                C.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            (x.VW.richValue(e) !== l &&
                (f.o.withoutSaving(e, () => {
                    x.VW.withoutNormalizing(e, () => {
                        let t = T(e, s),
                            { enabled: r } = u.L.getConfig({ location: "syntaxHighlightCodeBlocks" });
                        !t ||
                            r ||
                            null != I ||
                            i ||
                            ((i = !0),
                            (null == v &&
                                (v = Promise.all([n.e("818449"), n.e("175134")])
                                    .then(n.bind(n, 752238))
                                    .then((e) => {
                                        I = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((v = null), e);
                                    })),
                            v)
                                .then(() => {
                                    ((l = null),
                                        f.o.withoutSaving(e, () => {
                                            x.VW.withoutNormalizing(e, () => T(e));
                                        }),
                                        (l = x.VW.richValue(e)));
                                })
                                .catch(() => {})
                                .finally(() => {
                                    i = !1;
                                }));
                    });
                }),
                (l = x.VW.richValue(e))),
                t());
        }),
        e
    );
}
function T(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = null;
        for (let t of x.VW.blocks(e))
            ((i = (function (e, t, n, l, i) {
                let r = (function (e) {
                        let t,
                            [n, l] = e;
                        if (!A.has(n.type)) return [];
                        let i = [],
                            r = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let s = n.children[e];
                            if (x.l5.isText(s))
                                for (r.lastIndex = 0; null != (t = r.exec(s.text));) {
                                    if ("\\" === t[0]) {
                                        r.lastIndex += 1;
                                        continue;
                                    }
                                    i.push({ path: x.PW.child(l, e), offset: t.index });
                                }
                        }
                        return i;
                    })(t),
                    s = r[0],
                    a = r[r.length - 1],
                    o = null;
                if (null != a) {
                    let [t] = x.VW.node(e, a.path);
                    o = t.text.substring(a.offset + 3);
                }
                let u = n && null != s,
                    c = n && 0 === r.length,
                    d = l && 0 === r.length,
                    h = (u ? r.slice(1) : r).length % 2 == 1,
                    m = h && (null == o || "" === o || null != o.match(b)),
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
                null != i && (i.isInCodeBlock || i.opensCodeBlock),
                null != i && (i.isStyledCodeBlockLine || i.opensCodeBlockOnOwnLine),
                null != i && (i.opensCodeBlock || !i.closesCodeBlock) ? i.lang : null,
            )),
                n.push(i));
        return (
            (function (e, t) {
                let { enabled: n } = u.L.getConfig({ location: "syntaxHighlightCodeBlocks" }),
                    i = [],
                    r = !1;
                for (let s of e) {
                    let o = s === e[e.length - 1];
                    if (
                        (s.closesCodeBlock || o) &&
                        (r && o && !s.closesCodeBlock && i.push(s), (r = !1), i.length > 0)
                    ) {
                        let e = i.map((e) => (0, p.IQ)(e.blockEntry[0])).join("\n"),
                            r = i[0].lang;
                        if (null != r && "ansi" === (0, d.py)(r)) {
                            let t = (function (e, t) {
                                let n = a()(e),
                                    i = P.get(n);
                                if (null != i && i.length === t) return i;
                                let r = [[]],
                                    s = 0;
                                function o(e, t, n) {
                                    let l = e.split("\n");
                                    for (let e = 0; e < l.length; e++) {
                                        e > 0 && (r.push([]), (s = 0));
                                        let i = l[e].length;
                                        if (i > 0 && t.length > 0) {
                                            let e = { types: t, start: s, end: s + i };
                                            (null != n && (e.style = n), r[r.length - 1].push(e));
                                        }
                                        s += i;
                                    }
                                }
                                let u = 0;
                                for (let t of (0, l.$M)(e)) {
                                    o(e.substring(u, t.position), [S.ansiControlSequence]);
                                    let n = (0, d.OT)(t);
                                    (o(t.value, null != n ? [y.ansi] : [], n), (u = t.position + t.value.length));
                                }
                                return (o(e.substring(u), [S.ansiControlSequence]), r.length !== t)
                                    ? null
                                    : (P.set(n, r), r);
                            })(e, i.length);
                            for (let e = 0; e < i.length; e++) i[e].hljsTypes = t?.[e] ?? [];
                        } else if (null != r && n)
                            !(function (e, t, n, l) {
                                let i = (function (e, t, n, l) {
                                    let i,
                                        r = (0, d.py)(t);
                                    if (null == r) return null;
                                    let s = (0, c.F)(r);
                                    if (null == s) return (l?.(r), null);
                                    let o = a()(`${r}\0${e}`),
                                        u = L.get(o);
                                    if (null != u && u.length === n) return u;
                                    if (w.has(o)) return null;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    try {
                                        let t = s.highlightToHtml(e);
                                        if (((i = t.html), null != l)) for (let e of t.missingInjections) l(e);
                                    } catch (e) {
                                        return (
                                            w.set(o, !0),
                                            m.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                tags: { app_context: "syntax_highlighting" },
                                                extra: { lang: r, surface: "editor" },
                                            }),
                                            null
                                        );
                                    }
                                    let h = i.split("\n"),
                                        f = e.match(/\n*$/)?.[0].length ?? 0;
                                    for (let e = 0; e < f; e++) h.push("");
                                    if (h.length !== n) return null;
                                    let p = [];
                                    for (let e = 0; e < n; e++)
                                        p.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    l = [],
                                                    i = 0,
                                                    r = 0;
                                                for (_.lastIndex = 0; null != (t = _.exec(e));) {
                                                    let s = t.index + t[0].length,
                                                        a = M(e.substring(r, t.index)).length,
                                                        o = l.filter((e) => null != e);
                                                    if (
                                                        (a > 0 &&
                                                            o.length > 0 &&
                                                            n.push({ types: o, start: i, end: i + a }),
                                                        a > 0 && (i += a),
                                                        null != t[1])
                                                    ) {
                                                        let e = k.get(t[1]);
                                                        l.push(e ?? null);
                                                    } else l.pop();
                                                    r = s;
                                                }
                                                let s = M(e.substring(r)).length,
                                                    a = l.filter((e) => null != e);
                                                return (
                                                    s > 0 && a.length > 0 && n.push({ types: a, start: i, end: i + s }),
                                                    n
                                                );
                                            })(h[e]),
                                        );
                                    return (L.set(o, p), p);
                                })(e, t, n.length, l);
                                if (null != i) for (let e = 0; e < n.length; e++) n[e].hljsTypes = i[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, r, i, t);
                        else if (null == r || null == I || I.hasLanguage(r)) {
                            if (null != r && null != I && I.hasLanguage(r)) {
                                let t = (function (e, t) {
                                    if (null == I) return null;
                                    let n = `${e}-${t}`,
                                        l = O.get(n);
                                    if (null != l) return l;
                                    let i = I.highlight(t, e, !1);
                                    if (null == i || i.illegal) return null;
                                    let r = i.value.split("\n");
                                    return (O.set(n, r), r);
                                })(e, r);
                                if (null != t && t.length === i.length) {
                                    let e = [];
                                    for (let n = 0; n < i.length; n++) {
                                        let l,
                                            r = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            s = [],
                                            a = 0,
                                            o = 0;
                                        for (; null != (l = j.exec(r));) {
                                            let t = l.index + l[0].length,
                                                n = l.index - o;
                                            (l.index > o &&
                                                (e.length > 0 && s.push({ types: [...e], start: a, end: a + n }),
                                                (a += n)),
                                                "</span>" === l[0] ? e.pop() : e.push(l[1]),
                                                (o = t));
                                        }
                                        if (e.length > 0) {
                                            let t = r.length - o;
                                            s.push({ types: [...e], start: a, end: a + t });
                                        }
                                        i[n].hljsTypes = s;
                                    }
                                } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = [];
                        i = [];
                    }
                    (r && i.push(s), s.opensCodeBlock && (r = !0));
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
                    r =
                        (n = l).isStyledCodeBlockLine || n.wasInCodeBlock
                            ? {
                                  lang: n.lang,
                                  wasInCodeBlock: n.wasInCodeBlock,
                                  isInCodeBlock: n.isInCodeBlock,
                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                  hljsTypes: n.hljsTypes,
                              }
                            : null;
                t?.codeBlockState != r && g.b.setNodes(e, { codeBlockState: r }, { at: i });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let j = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    _ = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    k = new Map();
for (let [e, t] of Object.entries(y)) e.startsWith("a-") && null != t && k.set(e, t);
let R = { max: 1 / 0, maxAge: +h.A.Millis.MINUTE, updateAgeOnGet: !0 },
    O = new (r())(R),
    L = new (r())(R),
    w = new (r())(R);
function M(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
(0, c.Q4)(() => {
    L.reset();
});
let P = new (r())(R);
function D(e, t) {
    let n = 0;
    for (let l of x.VW.nodes(e, {
        at: { anchor: { path: E.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => x.l5.isText(e),
    })) {
        let e = l[0].text;
        x.PW.equals(l[1], t.path) && (e = e.substring(0, t.offset));
        let i = e.match(/```/g);
        n += i?.length ?? 0;
    }
    return n % 2 != 0;
}
function U(e) {
    if (null == e.selection) return !1;
    let t = x.ZF.start(e.selection);
    return D(e, t);
}
