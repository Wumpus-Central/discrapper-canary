n.d(t, { N: () => x });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(517738),
    o = n(110259),
    d = n(150591),
    c = n(22856),
    u = n(707554),
    m = n(38021),
    _ = n(305866),
    h = n(43990),
    f = n(97469),
    g = n(382450),
    p = n(967744);
function x(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            returnRef: i,
            "aria-label": x,
            onClose: b,
            trackingProps: A,
            children: v,
        } = e,
        E = l.useId(),
        I = l.useMemo(() => ({ id: E, headingId: `heading-${E}`, onClose: b, dismissable: !0 }), [E, b]),
        C = (0, f.NC)(),
        { theme: N } = (0, m.wR)(),
        j = (0, d.kS)(t, n);
    return (0, a.jsx)(c.V.Provider, {
        value: I,
        children: (0, a.jsx)(_.l, {
            id: E,
            role: "dialog",
            "aria-label": x,
            "aria-labelledby": null != x ? void 0 : I.headingId,
            returnRef: i,
            ...A,
            impressionType: A?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, a.jsx)(u.F, {
                forceLevel: 1,
                children: (0, a.jsx)("div", {
                    className: g.nw,
                    children: (0, a.jsx)(h.N, {
                        theme: C,
                        children: (e) =>
                            (0, a.jsx)(s.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: r()(p.container, g.yl, e),
                                style: j,
                                children: (0, a.jsx)("div", {
                                    className: g.jE,
                                    children: (0, a.jsx)(h.N, {
                                        theme: N,
                                        children: (e) => (0, a.jsx)("div", { className: r()(e, g.h_), children: v }),
                                    }),
                                }),
                            }),
                    }),
                }),
            }),
        }),
    });
}
