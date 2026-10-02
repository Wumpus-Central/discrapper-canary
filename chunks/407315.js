(n.d(t, { Ay: () => I, Q9: () => P, W: () => L }), n(321073));
var l = n(635377),
    i = n.n(l),
    r = n(181370),
    s = n.n(r),
    a = n(941426),
    o = n(586172),
    u = n(938855),
    c = n(768947),
    d = n(927813),
    h = n(38405),
    m = n(186306),
    p = n(323350),
    f = n(35277),
    g = n(820066),
    x = n(551483),
    E = n(389437);
let S = new a.Vy("withCodeBlocks"),
    y = new Set(["line"]),
    C = /^[a-z0-9_+\-.#]+$/i,
    A = null,
    b = null;
function I(e) {
    let { onChange: t } = e,
        l = null,
        i = !1,
        r = !1;
    function s(t) {
        (0, u.W9)(t)
            .then((t) => {
                null != t &&
                    (r ||
                        ((r = !0),
                        queueMicrotask(() => {
                            r = !1;
                            try {
                                (m.o.withoutSaving(e, () => {
                                    g.VW.withoutNormalizing(e, () => v(e, s));
                                }),
                                    (l = g.VW.richValue(e)));
                            } catch (e) {
                                S.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            (g.VW.richValue(e) !== l &&
                (m.o.withoutSaving(e, () => {
                    g.VW.withoutNormalizing(e, () => {
                        let t = v(e, s),
                            { enabled: r } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" });
                        !t ||
                            r ||
                            null != A ||
                            i ||
                            ((i = !0),
                            (null == b &&
                                (b = Promise.all([n.e("818449"), n.e("175134")])
                                    .then(n.bind(n, 981776))
                                    .then((e) => {
                                        A = e.default;
                                    })
                                    .catch((e) => {
                                        throw ((b = null), e);
                                    })),
                            b)
                                .then(() => {
                                    ((l = null),
                                        m.o.withoutSaving(e, () => {
                                            g.VW.withoutNormalizing(e, () => v(e));
                                        }),
                                        (l = g.VW.richValue(e)));
                                })
                                .catch(() => {})
                                .finally(() => {
                                    i = !1;
                                }));
                    });
                }),
                (l = g.VW.richValue(e))),
                t());
        }),
        e
    );
}
function v(e, t) {
    let n = (function (e, t) {
        let n = [],
            l = null;
        for (let t of g.VW.blocks(e))
            ((l = (function (e, t, n, l, i) {
                let r = (function (e) {
                        let t,
                            [n, l] = e;
                        if (!y.has(n.type)) return [];
                        let i = [],
                            r = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let s = n.children[e];
                            if (g.l5.isText(s))
                                for (r.lastIndex = 0; null != (t = r.exec(s.text));) {
                                    if ("\\" === t[0]) {
                                        r.lastIndex += 1;
                                        continue;
                                    }
                                    i.push({ path: g.PW.child(l, e), offset: t.index });
                                }
                        }
                        return i;
                    })(t),
                    s = r[0],
                    a = r[r.length - 1],
                    o = null;
                if (null != a) {
                    let [t] = g.VW.node(e, a.path);
                    o = t.text.substring(a.offset + 3);
                }
                let u = n && null != s,
                    c = n && 0 === r.length,
                    d = l && 0 === r.length,
                    h = (u ? r.slice(1) : r).length % 2 == 1,
                    m = h && (null == o || "" === o || null != o.match(C)),
                    p = m && null != o && "" !== o ? o.toLowerCase() : null;
                return {
                    blockEntry: t,
                    wasInCodeBlock: n,
                    isInCodeBlock: c,
                    isStyledCodeBlockLine: d,
                    lang: h || u ? p : i,
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
                n.push(l));
        return (
            (function (e, t) {
                let { enabled: n } = o.L.getConfig({ location: "syntaxHighlightCodeBlocks" }),
                    l = [],
                    i = !1;
                for (let r of e) {
                    let a = r === e[e.length - 1];
                    if (
                        (r.closesCodeBlock || a) &&
                        (i && a && !r.closesCodeBlock && l.push(r), (i = !1), l.length > 0)
                    ) {
                        let e = l.map((e) => (0, p.IQ)(e.blockEntry[0])).join("\n"),
                            i = l[0].lang;
                        if (null != i && n)
                            !(function (e, t, n, l) {
                                let i = (function (e, t, n, l) {
                                    let i,
                                        r = (0, c.py)(t);
                                    if (null == r) return null;
                                    let a = (0, u.F)(r);
                                    if (null == a) return (l?.(r), null);
                                    let o = s()(`${r}\0${e}`),
                                        d = R.get(o);
                                    if (null != d && d.length === n) return d;
                                    if (w.has(o)) return null;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    try {
                                        let t = a.highlightToHtml(e);
                                        if (((i = t.html), null != l)) for (let e of t.missingInjections) l(e);
                                    } catch (e) {
                                        return (
                                            w.set(o, !0),
                                            h.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                tags: { app_context: "syntax_highlighting" },
                                                extra: { lang: r, surface: "editor" },
                                            }),
                                            null
                                        );
                                    }
                                    let m = i.split("\n"),
                                        p = e.match(/\n*$/)?.[0].length ?? 0;
                                    for (let e = 0; e < p; e++) m.push("");
                                    if (m.length !== n) return null;
                                    let f = [];
                                    for (let e = 0; e < n; e++)
                                        f.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    l = [],
                                                    i = 0,
                                                    r = 0;
                                                for (T.lastIndex = 0; null != (t = T.exec(e));) {
                                                    let s = t.index + t[0].length,
                                                        a = O(e.substring(r, t.index)).length,
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
                                                    r = s;
                                                }
                                                let s = O(e.substring(r)).length,
                                                    a = l.filter((e) => null != e);
                                                return (
                                                    s > 0 && a.length > 0 && n.push({ types: a, start: i, end: i + s }),
                                                    n
                                                );
                                            })(m[e]),
                                        );
                                    return (R.set(o, f), f);
                                })(e, t, n.length, l);
                                if (null != i) for (let e = 0; e < n.length; e++) n[e].hljsTypes = i[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, i, l, t);
                        else if (null == i || null == A || A.hasLanguage(i)) {
                            if (null != i && null != A && A.hasLanguage(i)) {
                                let t = (function (e, t) {
                                    if (null == A) return null;
                                    let n = `${e}-${t}`,
                                        l = _.get(n);
                                    if (null != l) return l;
                                    let i = A.highlight(t, e, !1);
                                    if (null == i || i.illegal) return null;
                                    let r = i.value.split("\n");
                                    return (_.set(n, r), r);
                                })(e, i);
                                if (null != t && t.length === l.length) {
                                    let e = [];
                                    for (let n = 0; n < l.length; n++) {
                                        let i,
                                            r = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            s = [],
                                            a = 0,
                                            o = 0;
                                        for (; null != (i = N.exec(r));) {
                                            let t = i.index + i[0].length,
                                                n = i.index - o;
                                            (i.index > o &&
                                                (e.length > 0 && s.push({ types: [...e], start: a, end: a + n }),
                                                (a += n)),
                                                "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                                (o = t));
                                        }
                                        if (e.length > 0) {
                                            let t = r.length - o;
                                            s.push({ types: [...e], start: a, end: a + t });
                                        }
                                        l[n].hljsTypes = s;
                                    }
                                } else for (let e = 0; e < l.length; e++) l[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < l.length; e++) l[e].hljsTypes = [];
                        l = [];
                    }
                    (i && l.push(r), r.opensCodeBlock && (i = !0));
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
                t?.codeBlockState != r && f.b.setNodes(e, { codeBlockState: r }, { at: i });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let N = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    T = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    j = new Map();
for (let [e, t] of Object.entries(E)) e.startsWith("a-") && null != t && j.set(e, t);
let k = { max: 1 / 0, maxAge: +d.A.Millis.MINUTE, updateAgeOnGet: !0 },
    _ = new (i())(k),
    R = new (i())(k),
    w = new (i())(k);
function O(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
function L(e, t) {
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
function P(e) {
    if (null == e.selection) return !1;
    let t = g.ZF.start(e.selection);
    return L(e, t);
}
(0, u.Q4)(() => {
    R.reset();
});
