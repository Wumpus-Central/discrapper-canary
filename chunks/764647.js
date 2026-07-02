"use strict";
if (
    (n.d(t, { BN: () => f, ER: () => g, Ej: () => h, RK: () => s, UU: () => l, cY: () => m, jD: () => d, rD: () => i }),
    !/^(38190|98365)$/.test(n.j))
)
    var r = n(56027);
function a(e, t, n) {
    let a,
        { reference: i, floating: o } = e,
        s = (0, r.TV)(t),
        l = (0, r.Dz)(t),
        c = (0, r.sq)(l),
        u = (0, r.C0)(t),
        d = "y" === s,
        _ = i.x + i.width / 2 - o.width / 2,
        p = i.y + i.height / 2 - o.height / 2,
        m = i[c] / 2 - o[c] / 2;
    switch (u) {
        case "top":
            a = { x: _, y: i.y - o.height };
            break;
        case "bottom":
            a = { x: _, y: i.y + i.height };
            break;
        case "right":
            a = { x: i.x + i.width, y: p };
            break;
        case "left":
            a = { x: i.x - o.width, y: p };
            break;
        default:
            a = { x: i.x, y: i.y };
    }
    switch ((0, r.Sg)(t)) {
        case "start":
            a[l] -= m * (n && d ? -1 : 1);
            break;
        case "end":
            a[l] += m * (n && d ? -1 : 1);
    }
    return a;
}
let i = async (e, t, n) => {
    let { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: s } = n,
        l = o.filter(Boolean),
        c = await (null == s.isRTL ? void 0 : s.isRTL(t)),
        u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
        { x: d, y: _ } = a(u, r, c),
        p = r,
        m = {},
        f = 0;
    for (let n = 0; n < l.length; n++) {
        let { name: o, fn: g } = l[n],
            {
                x: h,
                y: b,
                data: E,
                reset: y,
            } = await g({
                x: d,
                y: _,
                initialPlacement: r,
                placement: p,
                strategy: i,
                middlewareData: m,
                rects: u,
                platform: s,
                elements: { reference: e, floating: t },
            });
        (d = null != h ? h : d),
            (_ = null != b ? b : _),
            (m = { ...m, [o]: { ...m[o], ...E } }),
            y &&
                f <= 50 &&
                (f++,
                "object" == typeof y &&
                    (y.placement && (p = y.placement),
                    y.rects &&
                        (u =
                            !0 === y.rects
                                ? await s.getElementRects({ reference: e, floating: t, strategy: i })
                                : y.rects),
                    ({ x: d, y: _ } = a(u, p, c))),
                (n = -1));
    }
    return { x: d, y: _, placement: p, strategy: i, middlewareData: m };
};
async function o(e, t) {
    var n;
    void 0 === t && (t = {});
    let { x: a, y: i, platform: o, rects: s, elements: l, strategy: c } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: _ = "floating",
            altBoundary: p = !1,
            padding: m = 0,
        } = (0, r._3)(t, e),
        f = (0, r.nI)(m),
        g = l[p ? ("floating" === _ ? "reference" : "floating") : _],
        h = (0, r.B1)(
            await o.getClippingRect({
                element:
                    null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n
                        ? g
                        : g.contextElement ||
                          (await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(l.floating))),
                boundary: u,
                rootBoundary: d,
                strategy: c,
            }),
        ),
        b = "floating" === _ ? { x: a, y: i, width: s.floating.width, height: s.floating.height } : s.reference,
        E = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(l.floating)),
        y = ((await (null == o.isElement ? void 0 : o.isElement(E))) &&
            (await (null == o.getScale ? void 0 : o.getScale(E)))) || { x: 1, y: 1 },
        v = (0, r.B1)(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: l,
                      rect: b,
                      offsetParent: E,
                      strategy: c,
                  })
                : b,
        );
    return {
        top: (h.top - v.top + f.top) / y.y,
        bottom: (v.bottom - h.bottom + f.bottom) / y.y,
        left: (h.left - v.left + f.left) / y.x,
        right: (v.right - h.right + f.right) / y.x,
    };
}
let s = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "autoPlacement",
                options: e,
                async fn(t) {
                    var n, a, i, s;
                    let { rects: l, middlewareData: c, placement: u, platform: d, elements: _ } = t,
                        {
                            crossAxis: p = !1,
                            alignment: m,
                            allowedPlacements: f = r.DD,
                            autoAlignment: g = !0,
                            ...h
                        } = (0, r._3)(e, t),
                        b =
                            void 0 !== m || f === r.DD
                                ? ((s = m || null)
                                      ? [...f.filter((e) => (0, r.Sg)(e) === s), ...f.filter((e) => (0, r.Sg)(e) !== s)]
                                      : f.filter((e) => (0, r.C0)(e) === e)
                                  ).filter((e) => !s || (0, r.Sg)(e) === s || (!!g && (0, r.aD)(e) !== e))
                                : f,
                        E = await o(t, h),
                        y = (null == (n = c.autoPlacement) ? void 0 : n.index) || 0,
                        v = b[y];
                    if (null == v) return {};
                    let S = (0, r.w7)(v, l, await (null == d.isRTL ? void 0 : d.isRTL(_.floating)));
                    if (u !== v) return { reset: { placement: b[0] } };
                    let T = [E[(0, r.C0)(v)], E[S[0]], E[S[1]]],
                        C = [
                            ...((null == (a = c.autoPlacement) ? void 0 : a.overflows) || []),
                            { placement: v, overflows: T },
                        ],
                        D = b[y + 1];
                    if (D) return { data: { index: y + 1, overflows: C }, reset: { placement: D } };
                    let O = C.map((e) => {
                            let t = (0, r.Sg)(e.placement);
                            return [
                                e.placement,
                                t && p ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                                e.overflows,
                            ];
                        }).sort((e, t) => e[1] - t[1]),
                        w =
                            (null ==
                            (i = O.filter((e) => e[2].slice(0, (0, r.Sg)(e[0]) ? 2 : 3).every((e) => e <= 0))[0])
                                ? void 0
                                : i[0]) || O[0][0];
                    return w !== u ? { data: { index: y + 1, overflows: C }, reset: { placement: w } } : {};
                },
            }
        );
    },
    l = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, a, i, s, l;
                    let {
                            placement: c,
                            middlewareData: u,
                            rects: d,
                            initialPlacement: _,
                            platform: p,
                            elements: m,
                        } = t,
                        {
                            mainAxis: f = !0,
                            crossAxis: g = !0,
                            fallbackPlacements: h,
                            fallbackStrategy: b = "bestFit",
                            fallbackAxisSideDirection: E = "none",
                            flipAlignment: y = !0,
                            ...v
                        } = (0, r._3)(e, t);
                    if (null != (n = u.arrow) && n.alignmentOffset) return {};
                    let S = (0, r.C0)(c),
                        T = (0, r.TV)(_),
                        C = (0, r.C0)(_) === _,
                        D = await (null == p.isRTL ? void 0 : p.isRTL(m.floating)),
                        O = h || (C || !y ? [(0, r.bV)(_)] : (0, r.WJ)(_)),
                        w = "none" !== E;
                    !h && w && O.push(...(0, r.lP)(_, y, E, D));
                    let A = [_, ...O],
                        R = await o(t, v),
                        M = [],
                        N = (null == (a = u.flip) ? void 0 : a.overflows) || [];
                    if ((f && M.push(R[S]), g)) {
                        let e = (0, r.w7)(c, d, D);
                        M.push(R[e[0]], R[e[1]]);
                    }
                    if (((N = [...N, { placement: c, overflows: M }]), !M.every((e) => e <= 0))) {
                        let e = ((null == (i = u.flip) ? void 0 : i.index) || 0) + 1,
                            t = A[e];
                        if (
                            t &&
                            ("alignment" !== g ||
                                T === (0, r.TV)(t) ||
                                N.every((e) => (0, r.TV)(e.placement) !== T || e.overflows[0] > 0))
                        )
                            return { data: { index: e, overflows: N }, reset: { placement: t } };
                        let n =
                            null ==
                            (s = N.filter((e) => e.overflows[0] <= 0).sort(
                                (e, t) => e.overflows[1] - t.overflows[1],
                            )[0])
                                ? void 0
                                : s.placement;
                        if (!n)
                            switch (b) {
                                case "bestFit": {
                                    let e =
                                        null ==
                                        (l = N.filter((e) => {
                                            if (w) {
                                                let t = (0, r.TV)(e.placement);
                                                return t === T || "y" === t;
                                            }
                                            return !0;
                                        })
                                            .map((e) => [
                                                e.placement,
                                                e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                                            ])
                                            .sort((e, t) => e[1] - t[1])[0])
                                            ? void 0
                                            : l[0];
                                    e && (n = e);
                                    break;
                                }
                                case "initialPlacement":
                                    n = _;
                            }
                        if (c !== n) return { reset: { placement: n } };
                    }
                    return {};
                },
            }
        );
    };
function c(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function u(e) {
    return r.r_.some((t) => e[t] >= 0);
}
let d = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    let { rects: n } = t,
                        { strategy: a = "referenceHidden", ...i } = (0, r._3)(e, t);
                    switch (a) {
                        case "referenceHidden": {
                            let e = c(await o(t, { ...i, elementContext: "reference" }), n.reference);
                            return { data: { referenceHiddenOffsets: e, referenceHidden: u(e) } };
                        }
                        case "escaped": {
                            let e = c(await o(t, { ...i, altBoundary: !0 }), n.floating);
                            return { data: { escapedOffsets: e, escaped: u(e) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    _ = new Set(["left", "top"]);
async function p(e, t) {
    let { placement: n, platform: a, elements: i } = e,
        o = await (null == a.isRTL ? void 0 : a.isRTL(i.floating)),
        s = (0, r.C0)(n),
        l = (0, r.Sg)(n),
        c = "y" === (0, r.TV)(n),
        u = _.has(s) ? -1 : 1,
        d = o && c ? -1 : 1,
        p = (0, r._3)(t, e),
        {
            mainAxis: m,
            crossAxis: f,
            alignmentAxis: g,
        } = "number" == typeof p
            ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: p.mainAxis || 0, crossAxis: p.crossAxis || 0, alignmentAxis: p.alignmentAxis };
    return (
        l && "number" == typeof g && (f = "end" === l ? -1 * g : g), c ? { x: f * d, y: m * u } : { x: m * u, y: f * d }
    );
}
let m = function (e) {
        return (
            void 0 === e && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    let { x: a, y: i, placement: o, middlewareData: s } = t,
                        l = await p(t, e);
                    return o === (null == (n = s.offset) ? void 0 : n.placement) &&
                        null != (r = s.arrow) &&
                        r.alignmentOffset
                        ? {}
                        : { x: a + l.x, y: i + l.y, data: { ...l, placement: o } };
                },
            }
        );
    },
    f = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    let { x: n, y: a, placement: i } = t,
                        {
                            mainAxis: s = !0,
                            crossAxis: l = !1,
                            limiter: c = {
                                fn: (e) => {
                                    let { x: t, y: n } = e;
                                    return { x: t, y: n };
                                },
                            },
                            ...u
                        } = (0, r._3)(e, t),
                        d = { x: n, y: a },
                        _ = await o(t, u),
                        p = (0, r.TV)((0, r.C0)(i)),
                        m = (0, r.PG)(p),
                        f = d[m],
                        g = d[p];
                    if (s) {
                        let e = "y" === m ? "top" : "left",
                            t = "y" === m ? "bottom" : "right",
                            n = f + _[e],
                            a = f - _[t];
                        f = (0, r.qE)(n, f, a);
                    }
                    if (l) {
                        let e = "y" === p ? "top" : "left",
                            t = "y" === p ? "bottom" : "right",
                            n = g + _[e],
                            a = g - _[t];
                        g = (0, r.qE)(n, g, a);
                    }
                    let h = c.fn({ ...t, [m]: f, [p]: g });
                    return { ...h, data: { x: h.x - n, y: h.y - a, enabled: { [m]: s, [p]: l } } };
                },
            }
        );
    },
    g = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                options: e,
                fn(t) {
                    let { x: n, y: a, placement: i, rects: o, middlewareData: s } = t,
                        { offset: l = 0, mainAxis: c = !0, crossAxis: u = !0 } = (0, r._3)(e, t),
                        d = { x: n, y: a },
                        p = (0, r.TV)(i),
                        m = (0, r.PG)(p),
                        f = d[m],
                        g = d[p],
                        h = (0, r._3)(l, t),
                        b = "number" == typeof h ? { mainAxis: h, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h };
                    if (c) {
                        let e = "y" === m ? "height" : "width",
                            t = o.reference[m] - o.floating[e] + b.mainAxis,
                            n = o.reference[m] + o.reference[e] - b.mainAxis;
                        f < t ? (f = t) : f > n && (f = n);
                    }
                    if (u) {
                        var E, y;
                        let e = "y" === m ? "width" : "height",
                            t = _.has((0, r.C0)(i)),
                            n =
                                o.reference[p] -
                                o.floating[e] +
                                ((t && (null == (E = s.offset) ? void 0 : E[p])) || 0) +
                                (t ? 0 : b.crossAxis),
                            a =
                                o.reference[p] +
                                o.reference[e] +
                                (t ? 0 : (null == (y = s.offset) ? void 0 : y[p]) || 0) -
                                (t ? b.crossAxis : 0);
                        g < n ? (g = n) : g > a && (g = a);
                    }
                    return { [m]: f, [p]: g };
                },
            }
        );
    },
    h = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, a;
                    let i,
                        s,
                        { placement: l, rects: c, platform: u, elements: d } = t,
                        { apply: _ = () => {}, ...p } = (0, r._3)(e, t),
                        m = await o(t, p),
                        f = (0, r.C0)(l),
                        g = (0, r.Sg)(l),
                        h = "y" === (0, r.TV)(l),
                        { width: b, height: E } = c.floating;
                    "top" === f || "bottom" === f
                        ? ((i = f),
                          (s =
                              g === ((await (null == u.isRTL ? void 0 : u.isRTL(d.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((s = f), (i = "end" === g ? "top" : "bottom"));
                    let y = E - m.top - m.bottom,
                        v = b - m.left - m.right,
                        S = (0, r.jk)(E - m[i], y),
                        T = (0, r.jk)(b - m[s], v),
                        C = !t.middlewareData.shift,
                        D = S,
                        O = T;
                    if (
                        (null != (n = t.middlewareData.shift) && n.enabled.x && (O = v),
                        null != (a = t.middlewareData.shift) && a.enabled.y && (D = y),
                        C && !g)
                    ) {
                        let e = (0, r.T9)(m.left, 0),
                            t = (0, r.T9)(m.right, 0),
                            n = (0, r.T9)(m.top, 0),
                            a = (0, r.T9)(m.bottom, 0);
                        h
                            ? (O = b - 2 * (0 !== e || 0 !== t ? e + t : (0, r.T9)(m.left, m.right)))
                            : (D = E - 2 * (0 !== n || 0 !== a ? n + a : (0, r.T9)(m.top, m.bottom)));
                    }
                    await _({ ...t, availableWidth: O, availableHeight: D });
                    let w = await u.getDimensions(d.floating);
                    return b !== w.width || E !== w.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
