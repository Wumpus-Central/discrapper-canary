"use strict";
if (
    (n.d(t, { BN: () => v, ER: () => y, Ej: () => g, RK: () => u, UU: () => s, cY: () => p, jD: () => f, rD: () => a }),
    !/^(38190|98365)$/.test(n.j))
)
    var r = n(56027);
function o(e, t, n) {
    let o,
        { reference: a, floating: i } = e,
        u = (0, r.TV)(t),
        s = (0, r.Dz)(t),
        l = (0, r.sq)(s),
        c = (0, r.C0)(t),
        f = "y" === u,
        d = a.x + a.width / 2 - i.width / 2,
        h = a.y + a.height / 2 - i.height / 2,
        p = a[l] / 2 - i[l] / 2;
    switch (c) {
        case "top":
            o = { x: d, y: a.y - i.height };
            break;
        case "bottom":
            o = { x: d, y: a.y + a.height };
            break;
        case "right":
            o = { x: a.x + a.width, y: h };
            break;
        case "left":
            o = { x: a.x - i.width, y: h };
            break;
        default:
            o = { x: a.x, y: a.y };
    }
    switch ((0, r.Sg)(t)) {
        case "start":
            o[s] -= p * (n && f ? -1 : 1);
            break;
        case "end":
            o[s] += p * (n && f ? -1 : 1);
    }
    return o;
}
let a = async (e, t, n) => {
    let { placement: r = "bottom", strategy: a = "absolute", middleware: i = [], platform: u } = n,
        s = i.filter(Boolean),
        l = await (null == u.isRTL ? void 0 : u.isRTL(t)),
        c = await u.getElementRects({ reference: e, floating: t, strategy: a }),
        { x: f, y: d } = o(c, r, l),
        h = r,
        p = {},
        v = 0;
    for (let n = 0; n < s.length; n++) {
        let { name: i, fn: y } = s[n],
            {
                x: g,
                y: m,
                data: b,
                reset: w,
            } = await y({
                x: f,
                y: d,
                initialPlacement: r,
                placement: h,
                strategy: a,
                middlewareData: p,
                rects: c,
                platform: u,
                elements: { reference: e, floating: t },
            });
        (f = null != g ? g : f),
            (d = null != m ? m : d),
            (p = { ...p, [i]: { ...p[i], ...b } }),
            w &&
                v <= 50 &&
                (v++,
                "object" == typeof w &&
                    (w.placement && (h = w.placement),
                    w.rects &&
                        (c =
                            !0 === w.rects
                                ? await u.getElementRects({ reference: e, floating: t, strategy: a })
                                : w.rects),
                    ({ x: f, y: d } = o(c, h, l))),
                (n = -1));
    }
    return { x: f, y: d, placement: h, strategy: a, middlewareData: p };
};
async function i(e, t) {
    var n;
    void 0 === t && (t = {});
    let { x: o, y: a, platform: i, rects: u, elements: s, strategy: l } = e,
        {
            boundary: c = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: h = !1,
            padding: p = 0,
        } = (0, r._3)(t, e),
        v = (0, r.nI)(p),
        y = s[h ? ("floating" === d ? "reference" : "floating") : d],
        g = (0, r.B1)(
            await i.getClippingRect({
                element:
                    null == (n = await (null == i.isElement ? void 0 : i.isElement(y))) || n
                        ? y
                        : y.contextElement ||
                          (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating))),
                boundary: c,
                rootBoundary: f,
                strategy: l,
            }),
        ),
        m = "floating" === d ? { x: o, y: a, width: u.floating.width, height: u.floating.height } : u.reference,
        b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)),
        w = ((await (null == i.isElement ? void 0 : i.isElement(b))) &&
            (await (null == i.getScale ? void 0 : i.getScale(b)))) || { x: 1, y: 1 },
        _ = (0, r.B1)(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: s,
                      rect: m,
                      offsetParent: b,
                      strategy: l,
                  })
                : m,
        );
    return {
        top: (g.top - _.top + v.top) / w.y,
        bottom: (_.bottom - g.bottom + v.bottom) / w.y,
        left: (g.left - _.left + v.left) / w.x,
        right: (_.right - g.right + v.right) / w.x,
    };
}
let u = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "autoPlacement",
                options: e,
                async fn(t) {
                    var n, o, a, u;
                    let { rects: s, middlewareData: l, placement: c, platform: f, elements: d } = t,
                        {
                            crossAxis: h = !1,
                            alignment: p,
                            allowedPlacements: v = r.DD,
                            autoAlignment: y = !0,
                            ...g
                        } = (0, r._3)(e, t),
                        m =
                            void 0 !== p || v === r.DD
                                ? ((u = p || null)
                                      ? [...v.filter((e) => (0, r.Sg)(e) === u), ...v.filter((e) => (0, r.Sg)(e) !== u)]
                                      : v.filter((e) => (0, r.C0)(e) === e)
                                  ).filter((e) => !u || (0, r.Sg)(e) === u || (!!y && (0, r.aD)(e) !== e))
                                : v,
                        b = await i(t, g),
                        w = (null == (n = l.autoPlacement) ? void 0 : n.index) || 0,
                        _ = m[w];
                    if (null == _) return {};
                    let D = (0, r.w7)(_, s, await (null == f.isRTL ? void 0 : f.isRTL(d.floating)));
                    if (c !== _) return { reset: { placement: m[0] } };
                    let x = [b[(0, r.C0)(_)], b[D[0]], b[D[1]]],
                        k = [
                            ...((null == (o = l.autoPlacement) ? void 0 : o.overflows) || []),
                            { placement: _, overflows: x },
                        ],
                        E = m[w + 1];
                    if (E) return { data: { index: w + 1, overflows: k }, reset: { placement: E } };
                    let C = k
                            .map((e) => {
                                let t = (0, r.Sg)(e.placement);
                                return [
                                    e.placement,
                                    t && h ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                                    e.overflows,
                                ];
                            })
                            .sort((e, t) => e[1] - t[1]),
                        A =
                            (null ==
                            (a = C.filter((e) => e[2].slice(0, (0, r.Sg)(e[0]) ? 2 : 3).every((e) => e <= 0))[0])
                                ? void 0
                                : a[0]) || C[0][0];
                    return A !== c ? { data: { index: w + 1, overflows: k }, reset: { placement: A } } : {};
                },
            }
        );
    },
    s = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, o, a, u, s;
                    let {
                            placement: l,
                            middlewareData: c,
                            rects: f,
                            initialPlacement: d,
                            platform: h,
                            elements: p,
                        } = t,
                        {
                            mainAxis: v = !0,
                            crossAxis: y = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: m = "bestFit",
                            fallbackAxisSideDirection: b = "none",
                            flipAlignment: w = !0,
                            ..._
                        } = (0, r._3)(e, t);
                    if (null != (n = c.arrow) && n.alignmentOffset) return {};
                    let D = (0, r.C0)(l),
                        x = (0, r.TV)(d),
                        k = (0, r.C0)(d) === d,
                        E = await (null == h.isRTL ? void 0 : h.isRTL(p.floating)),
                        C = g || (k || !w ? [(0, r.bV)(d)] : (0, r.WJ)(d)),
                        A = "none" !== b;
                    !g && A && C.push(...(0, r.lP)(d, w, b, E));
                    let S = [d, ...C],
                        O = await i(t, _),
                        B = [],
                        T = (null == (o = c.flip) ? void 0 : o.overflows) || [];
                    if ((v && B.push(O[D]), y)) {
                        let e = (0, r.w7)(l, f, E);
                        B.push(O[e[0]], O[e[1]]);
                    }
                    if (((T = [...T, { placement: l, overflows: B }]), !B.every((e) => e <= 0))) {
                        let e = ((null == (a = c.flip) ? void 0 : a.index) || 0) + 1,
                            t = S[e];
                        if (
                            t &&
                            ("alignment" !== y ||
                                x === (0, r.TV)(t) ||
                                T.every((e) => (0, r.TV)(e.placement) !== x || e.overflows[0] > 0))
                        )
                            return { data: { index: e, overflows: T }, reset: { placement: t } };
                        let n =
                            null ==
                            (u = T.filter((e) => e.overflows[0] <= 0).sort(
                                (e, t) => e.overflows[1] - t.overflows[1],
                            )[0])
                                ? void 0
                                : u.placement;
                        if (!n)
                            switch (m) {
                                case "bestFit": {
                                    let e =
                                        null ==
                                        (s = T.filter((e) => {
                                            if (A) {
                                                let t = (0, r.TV)(e.placement);
                                                return t === x || "y" === t;
                                            }
                                            return !0;
                                        })
                                            .map((e) => [
                                                e.placement,
                                                e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                                            ])
                                            .sort((e, t) => e[1] - t[1])[0])
                                            ? void 0
                                            : s[0];
                                    e && (n = e);
                                    break;
                                }
                                case "initialPlacement":
                                    n = d;
                            }
                        if (l !== n) return { reset: { placement: n } };
                    }
                    return {};
                },
            }
        );
    };
function l(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function c(e) {
    return r.r_.some((t) => e[t] >= 0);
}
let f = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    let { rects: n } = t,
                        { strategy: o = "referenceHidden", ...a } = (0, r._3)(e, t);
                    switch (o) {
                        case "referenceHidden": {
                            let e = l(await i(t, { ...a, elementContext: "reference" }), n.reference);
                            return { data: { referenceHiddenOffsets: e, referenceHidden: c(e) } };
                        }
                        case "escaped": {
                            let e = l(await i(t, { ...a, altBoundary: !0 }), n.floating);
                            return { data: { escapedOffsets: e, escaped: c(e) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    d = new Set(["left", "top"]);
async function h(e, t) {
    let { placement: n, platform: o, elements: a } = e,
        i = await (null == o.isRTL ? void 0 : o.isRTL(a.floating)),
        u = (0, r.C0)(n),
        s = (0, r.Sg)(n),
        l = "y" === (0, r.TV)(n),
        c = d.has(u) ? -1 : 1,
        f = i && l ? -1 : 1,
        h = (0, r._3)(t, e),
        {
            mainAxis: p,
            crossAxis: v,
            alignmentAxis: y,
        } = "number" == typeof h
            ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: h.mainAxis || 0, crossAxis: h.crossAxis || 0, alignmentAxis: h.alignmentAxis };
    return (
        s && "number" == typeof y && (v = "end" === s ? -1 * y : y), l ? { x: v * f, y: p * c } : { x: p * c, y: v * f }
    );
}
let p = function (e) {
        return (
            void 0 === e && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    let { x: o, y: a, placement: i, middlewareData: u } = t,
                        s = await h(t, e);
                    return i === (null == (n = u.offset) ? void 0 : n.placement) &&
                        null != (r = u.arrow) &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + s.x, y: a + s.y, data: { ...s, placement: i } };
                },
            }
        );
    },
    v = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    let { x: n, y: o, placement: a } = t,
                        {
                            mainAxis: u = !0,
                            crossAxis: s = !1,
                            limiter: l = {
                                fn: (e) => {
                                    let { x: t, y: n } = e;
                                    return { x: t, y: n };
                                },
                            },
                            ...c
                        } = (0, r._3)(e, t),
                        f = { x: n, y: o },
                        d = await i(t, c),
                        h = (0, r.TV)((0, r.C0)(a)),
                        p = (0, r.PG)(h),
                        v = f[p],
                        y = f[h];
                    if (u) {
                        let e = "y" === p ? "top" : "left",
                            t = "y" === p ? "bottom" : "right",
                            n = v + d[e],
                            o = v - d[t];
                        v = (0, r.qE)(n, v, o);
                    }
                    if (s) {
                        let e = "y" === h ? "top" : "left",
                            t = "y" === h ? "bottom" : "right",
                            n = y + d[e],
                            o = y - d[t];
                        y = (0, r.qE)(n, y, o);
                    }
                    let g = l.fn({ ...t, [p]: v, [h]: y });
                    return { ...g, data: { x: g.x - n, y: g.y - o, enabled: { [p]: u, [h]: s } } };
                },
            }
        );
    },
    y = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                options: e,
                fn(t) {
                    let { x: n, y: o, placement: a, rects: i, middlewareData: u } = t,
                        { offset: s = 0, mainAxis: l = !0, crossAxis: c = !0 } = (0, r._3)(e, t),
                        f = { x: n, y: o },
                        h = (0, r.TV)(a),
                        p = (0, r.PG)(h),
                        v = f[p],
                        y = f[h],
                        g = (0, r._3)(s, t),
                        m = "number" == typeof g ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
                    if (l) {
                        let e = "y" === p ? "height" : "width",
                            t = i.reference[p] - i.floating[e] + m.mainAxis,
                            n = i.reference[p] + i.reference[e] - m.mainAxis;
                        v < t ? (v = t) : v > n && (v = n);
                    }
                    if (c) {
                        var b, w;
                        let e = "y" === p ? "width" : "height",
                            t = d.has((0, r.C0)(a)),
                            n =
                                i.reference[h] -
                                i.floating[e] +
                                ((t && (null == (b = u.offset) ? void 0 : b[h])) || 0) +
                                (t ? 0 : m.crossAxis),
                            o =
                                i.reference[h] +
                                i.reference[e] +
                                (t ? 0 : (null == (w = u.offset) ? void 0 : w[h]) || 0) -
                                (t ? m.crossAxis : 0);
                        y < n ? (y = n) : y > o && (y = o);
                    }
                    return { [p]: v, [h]: y };
                },
            }
        );
    },
    g = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, o;
                    let a,
                        u,
                        { placement: s, rects: l, platform: c, elements: f } = t,
                        { apply: d = () => {}, ...h } = (0, r._3)(e, t),
                        p = await i(t, h),
                        v = (0, r.C0)(s),
                        y = (0, r.Sg)(s),
                        g = "y" === (0, r.TV)(s),
                        { width: m, height: b } = l.floating;
                    "top" === v || "bottom" === v
                        ? ((a = v),
                          (u =
                              y === ((await (null == c.isRTL ? void 0 : c.isRTL(f.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((u = v), (a = "end" === y ? "top" : "bottom"));
                    let w = b - p.top - p.bottom,
                        _ = m - p.left - p.right,
                        D = (0, r.jk)(b - p[a], w),
                        x = (0, r.jk)(m - p[u], _),
                        k = !t.middlewareData.shift,
                        E = D,
                        C = x;
                    if (
                        (null != (n = t.middlewareData.shift) && n.enabled.x && (C = _),
                        null != (o = t.middlewareData.shift) && o.enabled.y && (E = w),
                        k && !y)
                    ) {
                        let e = (0, r.T9)(p.left, 0),
                            t = (0, r.T9)(p.right, 0),
                            n = (0, r.T9)(p.top, 0),
                            o = (0, r.T9)(p.bottom, 0);
                        g
                            ? (C = m - 2 * (0 !== e || 0 !== t ? e + t : (0, r.T9)(p.left, p.right)))
                            : (E = b - 2 * (0 !== n || 0 !== o ? n + o : (0, r.T9)(p.top, p.bottom)));
                    }
                    await d({ ...t, availableWidth: C, availableHeight: E });
                    let A = await c.getDimensions(f.floating);
                    return m !== A.width || b !== A.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
