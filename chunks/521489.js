a.d(i, { N: () => N });
var s = a(627968),
    d = a(64700),
    l = a(503698),
    n = a.n(l),
    r = a(123924),
    c = a(110259),
    h = a(150591),
    o = a(22856),
    t = a(707554),
    m = a(38021),
    p = a(305866),
    u = a(43990),
    j = a(97469),
    v = a(382450),
    x = a(967744);
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
        { theme: I } = (0, m.wR)(),
        C = (0, h.kS)(i, a);
    return (0, s.jsx)(o.V.Provider, {
        value: g,
        children: (0, s.jsx)(p.l, {
            id: f,
            role: "dialog",
            "aria-label": N,
            "aria-labelledby": null != N ? void 0 : g.headingId,
            returnRef: l,
            ...y,
            impressionType: y?.impressionType ?? c.ImpressionTypes.MODAL,
            children: (0, s.jsx)(t.F, {
                forceLevel: 1,
                children: (0, s.jsx)("div", {
                    className: v.nw,
                    children: (0, s.jsx)(u.N, {
                        theme: w,
                        children: (e) =>
                            (0, s.jsx)(r.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: n()(x.container, v.yl, e),
                                style: C,
                                children: (0, s.jsx)("div", {
                                    className: v.jE,
                                    children: (0, s.jsx)(u.N, {
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
