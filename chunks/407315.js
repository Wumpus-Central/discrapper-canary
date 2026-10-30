(n.d(t, { Ay: () => b, Q9: () => O, W: () => w }), n(321073));
var l = n(626551),
    i = n(635377),
    r = n.n(i),
    s = n(181370),
    a = n.n(s),
    o = n(941426),
    u = n(938855),
    c = n(768947),
    d = n(927813),
    h = n(38405),
    m = n(186306),
    f = n(323350),
    p = n(35277),
    g = n(820066),
    x = n(551483),
    E = n(891031),
    S = n(389437);
let y = new o.Vy("withCodeBlocks"),
    A = new Set(["line"]),
    C = /^[a-z0-9_+\-.#]+$/i;
function b(e) {
    let { onChange: t } = e,
        n = null,
        l = !1;
    function i(t) {
        (0, u.W9)(t)
            .then((t) => {
                null != t &&
                    (l ||
                        ((l = !0),
                        queueMicrotask(() => {
                            l = !1;
                            try {
                                (m.o.withoutSaving(e, () => {
                                    g.VW.withoutNormalizing(e, () => I(e, i));
                                }),
                                    (n = g.VW.richValue(e)));
                            } catch (e) {
                                y.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            (g.VW.richValue(e) !== n &&
                (m.o.withoutSaving(e, () => {
                    g.VW.withoutNormalizing(e, () => {
                        I(e, i);
                    });
                }),
                (n = g.VW.richValue(e))),
                t());
        }),
        e
    );
}
function I(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = null;
        for (let t of g.VW.blocks(e))
            ((i = (function (e, t, n, l, i) {
                let r = (function (e) {
                        let t,
                            [n, l] = e;
                        if (!A.has(n.type)) return [];
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
                let n = [],
                    i = !1;
                for (let r of e) {
                    let s = r === e[e.length - 1];
                    if (
                        (r.closesCodeBlock || s) &&
                        (i && s && !r.closesCodeBlock && n.push(r), (i = !1), n.length > 0)
                    ) {
                        let e = n.map((e) => (0, f.IQ)(e.blockEntry[0])).join("\n"),
                            i = n[0].lang;
                        if (null != i && "ansi" === (0, c.py)(i)) {
                            let t = (function (e, t) {
                                let n = a()(e),
                                    i = R.get(n);
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
                                    o(e.substring(u, t.position), [E.ansiControlSequence]);
                                    let n = (0, c.OT)(t);
                                    (o(t.value, null != n ? [S.ansi] : [], n), (u = t.position + t.value.length));
                                }
                                return (o(e.substring(u), [E.ansiControlSequence]), r.length !== t)
                                    ? null
                                    : (R.set(n, r), r);
                            })(e, n.length);
                            for (let e = 0; e < n.length; e++) n[e].hljsTypes = t?.[e] ?? [];
                        } else
                            null != i &&
                                (function (e, t, n, l) {
                                    let i = (function (e, t, n, l) {
                                        let i,
                                            r = (0, c.py)(t);
                                        if (null == r) return null;
                                        let s = (0, u.F)(r);
                                        if (null == s) return (l?.(r), null);
                                        let o = a()(`${r}\0${e}`),
                                            d = j.get(o);
                                        if (null != d && d.length === n) return d;
                                        if (k.has(o)) return null;
                                        for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                        try {
                                            let t = s.highlightToHtml(e);
                                            if (((i = t.html), null != l)) for (let e of t.missingInjections) l(e);
                                        } catch (e) {
                                            return (
                                                k.set(o, !0),
                                                h.A.captureException(e instanceof Error ? e : Error(String(e)), {
                                                    tags: { app_context: "syntax_highlighting" },
                                                    extra: { lang: r, surface: "editor" },
                                                }),
                                                null
                                            );
                                        }
                                        let m = i.split("\n"),
                                            f = e.match(/\n*$/)?.[0].length ?? 0;
                                        for (let e = 0; e < f; e++) m.push("");
                                        if (m.length !== n) return null;
                                        let p = [];
                                        for (let e = 0; e < n; e++)
                                            p.push(
                                                (function (e) {
                                                    let t,
                                                        n = [],
                                                        l = [],
                                                        i = 0,
                                                        r = 0;
                                                    for (v.lastIndex = 0; null != (t = v.exec(e));) {
                                                        let s = t.index + t[0].length,
                                                            a = _(e.substring(r, t.index)).length,
                                                            o = l.filter((e) => null != e);
                                                        if (
                                                            (a > 0 &&
                                                                o.length > 0 &&
                                                                n.push({ types: o, start: i, end: i + a }),
                                                            a > 0 && (i += a),
                                                            null != t[1])
                                                        ) {
                                                            let e = N.get(t[1]);
                                                            l.push(e ?? null);
                                                        } else l.pop();
                                                        r = s;
                                                    }
                                                    let s = _(e.substring(r)).length,
                                                        a = l.filter((e) => null != e);
                                                    return (
                                                        s > 0 &&
                                                            a.length > 0 &&
                                                            n.push({ types: a, start: i, end: i + s }),
                                                        n
                                                    );
                                                })(m[e]),
                                            );
                                        return (j.set(o, p), p);
                                    })(e, t, n.length, l);
                                    if (null != i) for (let e = 0; e < n.length; e++) n[e].hljsTypes = i[e];
                                    else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                                })(e, i, n, t);
                        n = [];
                    }
                    (i && n.push(r), r.opensCodeBlock && (i = !0));
                }
            })(n, t),
            n
        );
    })(e, t);
    var i,
        r = e,
        s = n;
    for (let e of s) {
        let [t, n] = e.blockEntry,
            l =
                (i = e).isStyledCodeBlockLine || i.wasInCodeBlock
                    ? {
                          lang: i.lang,
                          wasInCodeBlock: i.wasInCodeBlock,
                          isInCodeBlock: i.isInCodeBlock,
                          isStyledCodeBlockLine: i.isStyledCodeBlockLine,
                          hljsTypes: i.hljsTypes,
                      }
                    : null;
        t?.codeBlockState != l && p.b.setNodes(r, { codeBlockState: l }, { at: n });
    }
}
let v = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    N = new Map();
for (let [e, t] of Object.entries(S)) e.startsWith("a-") && null != t && N.set(e, t);
let T = { max: 250, maxAge: +d.A.Millis.MINUTE, updateAgeOnGet: !0 },
    j = new (r())(T),
    k = new (r())(T);
function _(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
(0, u.Q4)(() => {
    j.reset();
});
let R = new (r())(T);
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
function O(e) {
    if (null == e.selection) return !1;
    let t = g.ZF.start(e.selection);
    return w(e, t);
}
