(n.d(t, { Ay: () => I, Q9: () => M, W: () => L }), n(321073));
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
    f = n(818948),
    p = n(323350),
    g = n(35277),
    x = n(820066),
    E = n(551483),
    S = n(891031),
    y = n(389437);
let C = new o.Vy("withCodeBlocks"),
    A = new Set(["line"]),
    b = /^[a-z0-9_+\-.#]+$/i;
function I(e) {
    let { onChange: t } = e,
        n = null,
        l = null,
        i = !1;
    function r(t) {
        (0, u.W9)(t)
            .then((t) => {
                null != t &&
                    (i ||
                        ((i = !0),
                        queueMicrotask(() => {
                            i = !1;
                            try {
                                (m.o.withoutSaving(e, () => {
                                    x.VW.withoutNormalizing(e, () => v(e, r));
                                }),
                                    (n = x.VW.richValue(e)));
                            } catch (e) {
                                C.warn("error applying arborium highlighting to editor", e);
                            }
                        })));
            })
            .catch(() => {});
    }
    return (
        (e.onChange = () => {
            let i = (0, f.Sd)(e);
            ((x.VW.richValue(e) !== n || i !== l) &&
                (m.o.withoutSaving(e, () => {
                    x.VW.withoutNormalizing(e, () => {
                        v(e, r);
                    });
                }),
                (n = x.VW.richValue(e)),
                (l = i)),
                t());
        }),
        e
    );
}
function v(e, t) {
    let n = (function (e, t) {
        let n = (0, f.p0)(e);
        if (null != n)
            return (function (e, t, n) {
                let l = e.children.map((e, t) => ({
                    blockEntry: [e, [t]],
                    wasInCodeBlock: !1,
                    isInCodeBlock: !1,
                    isStyledCodeBlockLine: !1,
                    lang: null,
                    hljsTypes: null,
                    closesCodeBlock: !1,
                    opensCodeBlock: !1,
                    opensCodeBlockOnOwnLine: !1,
                }));
                for (let e of t.codeBlocks) {
                    if (e.openLine === e.closeLine) continue;
                    let t = e.onOwnLine ? e.lang : null,
                        n = l[e.openLine];
                    ((n.opensCodeBlock = !0), (n.opensCodeBlockOnOwnLine = e.onOwnLine), (n.lang = t));
                    let i = e.closeLine ?? l.length;
                    for (let n = e.openLine + 1; n < i; n++)
                        ((l[n].wasInCodeBlock = !0),
                            (l[n].isInCodeBlock = !0),
                            (l[n].isStyledCodeBlockLine = e.onOwnLine),
                            (l[n].lang = t));
                    null != e.closeLine &&
                        ((l[e.closeLine].wasInCodeBlock = !0), (l[e.closeLine].closesCodeBlock = !0));
                }
                return (k(l, n), l);
            })(e, n, t);
        let l = [],
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
                l.push(i));
        return (k(l, t), l);
    })(e, t);
    var l,
        i = e,
        r = n;
    for (let e of r) {
        let [t, n] = e.blockEntry,
            r =
                (l = e).isStyledCodeBlockLine || l.wasInCodeBlock
                    ? {
                          lang: l.lang,
                          wasInCodeBlock: l.wasInCodeBlock,
                          isInCodeBlock: l.isInCodeBlock,
                          isStyledCodeBlockLine: l.isStyledCodeBlockLine,
                          hljsTypes: l.hljsTypes,
                      }
                    : null;
        t?.codeBlockState != r && g.b.setNodes(i, { codeBlockState: r }, { at: n });
    }
}
let N = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    T = new Map();
for (let [e, t] of Object.entries(y)) e.startsWith("a-") && null != t && T.set(e, t);
function k(e, t) {
    let n = [],
        i = !1;
    for (let r of e) {
        let s = r === e[e.length - 1];
        if ((r.closesCodeBlock || s) && (i && s && !r.closesCodeBlock && n.push(r), (i = !1), n.length > 0)) {
            let e = n.map((e) => (0, p.IQ)(e.blockEntry[0])).join("\n"),
                i = n[0].lang;
            if (null != i && "ansi" === (0, c.py)(i)) {
                let t = (function (e, t) {
                    let n = a()(e),
                        i = O.get(n);
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
                        let n = (0, c.OT)(t);
                        (o(t.value, null != n ? [y.ansi] : [], n), (u = t.position + t.value.length));
                    }
                    return (o(e.substring(u), [S.ansiControlSequence]), r.length !== t) ? null : (O.set(n, r), r);
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
                                d = _.get(o);
                            if (null != d && d.length === n) return d;
                            if (R.has(o)) return null;
                            for (let t of e.split("\n")) if (t.length > 1e3) return null;
                            try {
                                let t = s.highlightToHtml(e);
                                if (((i = t.html), null != l)) for (let e of t.missingInjections) l(e);
                            } catch (e) {
                                return (
                                    R.set(o, !0),
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
                                        for (N.lastIndex = 0; null != (t = N.exec(e));) {
                                            let s = t.index + t[0].length,
                                                a = w(e.substring(r, t.index)).length,
                                                o = l.filter((e) => null != e);
                                            if (
                                                (a > 0 && o.length > 0 && n.push({ types: o, start: i, end: i + a }),
                                                a > 0 && (i += a),
                                                null != t[1])
                                            ) {
                                                let e = T.get(t[1]);
                                                l.push(e ?? null);
                                            } else l.pop();
                                            r = s;
                                        }
                                        let s = w(e.substring(r)).length,
                                            a = l.filter((e) => null != e);
                                        return (s > 0 && a.length > 0 && n.push({ types: a, start: i, end: i + s }), n);
                                    })(m[e]),
                                );
                            return (_.set(o, p), p);
                        })(e, t, n.length, l);
                        if (null != i) for (let e = 0; e < n.length; e++) n[e].hljsTypes = i[e];
                        else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                    })(e, i, n, t);
            n = [];
        }
        (i && n.push(r), r.opensCodeBlock && (i = !0));
    }
}
let j = { max: 250, maxAge: +d.A.Millis.MINUTE, updateAgeOnGet: !0 },
    _ = new (r())(j),
    R = new (r())(j);
function w(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
(0, u.Q4)(() => {
    _.reset();
});
let O = new (r())(j);
function L(e, t) {
    let n = (0, f.p0)(e);
    if (null != n) return (0, f.tA)(n, t);
    let l = 0;
    for (let n of x.VW.nodes(e, {
        at: { anchor: { path: E.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => x.l5.isText(e),
    })) {
        let e = n[0].text;
        x.PW.equals(n[1], t.path) && (e = e.substring(0, t.offset));
        let i = e.match(/```/g);
        l += i?.length ?? 0;
    }
    return l % 2 != 0;
}
function M(e) {
    if (null == e.selection) return !1;
    let t = x.ZF.start(e.selection);
    return L(e, t);
}
