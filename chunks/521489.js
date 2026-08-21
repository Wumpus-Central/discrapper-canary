a.d(i, { N: () => N });
var s = a(477900),
    d = a(582128),
    l = a(503698),
    n = a.n(l),
    r = a(221877),
    c = a(562708),
    h = a(38021),
    o = a(150591),
    t = a(22856),
    m = a(707554),
    p = a(43990),
    u = a(305866),
    j = a(97469),
    v = a(858779),
    x = a(592551);
function N(e) {
    let {
            transitionState: i,
            animationVariant: a = "default",
            returnRef: l,
            "aria-label": N,
            onClose: b,
            trackingProps: y,
            children: k,
        } = e,
        f = d.useId(),
        g = d.useMemo(() => ({ id: f, headingId: `heading-${f}`, onClose: b, dismissable: !0 }), [f, b]),
        w = (0, j.NC)(),
        { theme: I } = (0, h.wR)(),
        C = (0, o.kS)(i, a);
    return (0, s.jsx)(t.V.Provider, {
        value: g,
        children: (0, s.jsx)(u.l, {
            id: f,
            role: "dialog",
            "aria-label": N,
            "aria-labelledby": null != N ? void 0 : g.headingId,
            returnRef: l,
            ...y,
            impressionType: y?.impressionType ?? c.ImpressionTypes.MODAL,
            children: (0, s.jsx)(m.F, {
                forceLevel: 1,
                children: (0, s.jsx)("div", {
                    className: v.nw,
                    children: (0, s.jsx)(p.N, {
                        theme: w,
                        children: (e) =>
                            (0, s.jsx)(r.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: n()(x.container, v.yl, e),
                                style: C,
                                children: (0, s.jsx)("div", {
                                    className: v.jE,
                                    children: (0, s.jsx)(p.N, {
                                        theme: I,
                                        children: (e) => (0, s.jsx)("div", { className: n()(e, v.h_), children: k }),
                                    }),
                                }),
                            }),
                    }),
                }),
            }),
        }),
    });
}
