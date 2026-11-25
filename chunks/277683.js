(n.d(t, { Ay: () => b, Q9: () => L, W: () => w }), n(321073));
var l = n(626551),
    i = n(635377),
    r = n.n(i),
    s = n(181370),
    a = n.n(s),
    o = n(611599),
    u = n(1145),
    c = n(980045),
    d = n(927813),
    h = n(856383),
    m = n(186306),
    f = n(818948),
    p = n(323350),
    g = n(35277),
    x = n(339200),
    E = n(551483),
    y = n(891031),
    S = n(389437);
let A = new o.Vy("withCodeBlocks"),
    C = new Set(["line"]),
    I = /^[a-z0-9_+\-.#]+$/i;
function b(e) {
    let { onChange: t } = e,
        n = null,
        l = null,
        i = !1;
    function r() {
        let t = new Set();
        ((function (e, t) {
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
                        return (N(l, n), l);
                    })(e, n, t);
                let l = [],
                    i = null;
                for (let t of x.VW.blocks(e))
                    ((i = (function (e, t, n, l, i) {
                        let r = (function (e) {
                                let t,
                                    [n, l] = e;
                                if (!C.has(n.type)) return [];
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
                        null != i && (i.isInCodeBlock || i.opensCodeBlock),
                        null != i && (i.isStyledCodeBlockLine || i.opensCodeBlockOnOwnLine),
                        null != i && (i.opensCodeBlock || !i.closesCodeBlock) ? i.lang : null,
                    )),
                        l.push(i));
                return (N(l, t), l);
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
        })(e, (e) => t.add(e)),
            t.size > 0 &&
                (async function (t) {
                    (await (0, u.$z)(t)) &&
                        (i ||
                            ((i = !0),
                            queueMicrotask(() => {
                                i = !1;
                                try {
                                    (m.o.withoutSaving(e, () => {
                                        x.VW.withoutNormalizing(e, r);
                                    }),
                                        (n = x.VW.richValue(e)));
                                } catch (e) {
                                    A.warn("error applying arborium highlighting to editor", e);
                                }
                            })));
                })(t));
    }
    return (
        (e.onChange = () => {
            let i = (0, f.Sd)(e);
            ((x.VW.richValue(e) !== n || i !== l) &&
                (m.o.withoutSaving(e, () => {
                    x.VW.withoutNormalizing(e, r);
                }),
                (n = x.VW.richValue(e)),
                (l = i)),
                t());
        }),
        e
    );
}
let v = new Map();
for (let [e, t] of Object.entries(S)) e.startsWith("a-") && null != t && v.set(e, t);
function N(e, t) {
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
                        o(e.substring(u, t.position), [y.ansiControlSequence]);
                        let n = (0, c.OT)(t);
                        (o(t.value, null != n ? [S.ansi] : [], n), (u = t.position + t.value.length));
                    }
                    return (o(e.substring(u), [y.ansiControlSequence]), r.length !== t) ? null : (R.set(n, r), r);
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
                                d = T.get(o);
                            if (null != d && d.length === n) {
                                for (let e of O.get(o) ?? []) l?.(e);
                                return d;
                            }
                            if (k.has(o) || !(0, c.VB)(e)) return null;
                            try {
                                let t = s.highlightToSpans(e);
                                if (((i = t.spans), null != l && t.missingInjections.length > 0)) {
                                    let e = O.get(o);
                                    for (let n of (null == e &&
                                        _(o) &&
                                        ((e = t.missingInjections),
                                        !(async function (e, t) {
                                            (O.set(e, t), await (0, u.$z)(t), O.delete(e));
                                        })(o, e)),
                                    e ?? []))
                                        l(n);
                                }
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
                            let m = (function (e, t, n) {
                                let l = e.split("\n"),
                                    i = l.map(() => []),
                                    r = t
                                        .filter((e) => e.start < e.end)
                                        .sort((e, t) => (e.start === t.start ? t.end - e.end : e.start - t.start)),
                                    s = r
                                        .flatMap((e, t) => [
                                            { position: e.start, opening: !0, index: t },
                                            { position: e.end, opening: !1, index: t },
                                        ])
                                        .sort((e, t) =>
                                            e.position === t.position
                                                ? Number(e.opening) - Number(t.opening)
                                                : e.position - t.position,
                                        ),
                                    a = [],
                                    o = 0,
                                    u = 0,
                                    c = 0;
                                function d(t) {
                                    let s = Math.min(t, e.length);
                                    for (; o < s;) {
                                        let e = c + l[u].length,
                                            t = Math.min(s, e),
                                            d = a[a.length - 1],
                                            h = null == d ? void 0 : n.get(`a-${r[d].tag}`);
                                        if (o < t && null != h) {
                                            let e = i[u],
                                                n = e[e.length - 1],
                                                l = o - c,
                                                r = t - c;
                                            null != n && n.end === l && n.types[0] === h
                                                ? (n.end = r)
                                                : e.push({ types: [h], start: l, end: r });
                                        }
                                        (o = t) < s && o === e && ((o += 1), (u += 1), (c = o));
                                    }
                                }
                                for (let e of s)
                                    if ((d(e.position), e.opening)) a.push(e.index);
                                    else {
                                        let t = a.lastIndexOf(e.index);
                                        t >= 0 && a.splice(t, 1);
                                    }
                                return (d(e.length), i);
                            })(e, i, v);
                            return m.length !== n ? null : (T.set(o, m), m);
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
    T = new (r())(j),
    k = new (r())(j),
    _ = (0, u.Gn)(),
    O = new Map();
(0, u.Q4)(() => {
    T.reset();
});
let R = new (r())(j);
function w(e, t) {
    let n = (0, f.p0)(e);
    return null != n ? (0, f.tA)(n, t) : M(e, t);
}
function M(e, t) {
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
function L(e) {
    if (null == e.selection) return !1;
    let t = x.ZF.start(e.selection);
    return M(e, t);
}
