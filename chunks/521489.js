"use strict";
n.d(t, { N: () => x });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(419354),
    c = n(110259),
    o = n(150591),
    d = n(22856),
    u = n(707554),
    m = n(38021),
    f = n(305866),
    h = n(43990),
    _ = n(97469),
    g = n(382450),
    p = n(967744);
function x(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            returnRef: l,
            "aria-label": x,
            onClose: b,
            trackingProps: E,
            children: v,
        } = e,
        A = i.useId(),
        I = i.useMemo(() => ({ id: A, headingId: `heading-${A}`, onClose: b, dismissable: !0 }), [A, b]),
        N = (0, _.NC)(),
        { theme: S } = (0, m.wR)(),
        j = (0, o.kS)(t, n);
    return (0, a.jsx)(d.V.Provider, {
        value: I,
        children: (0, a.jsx)(f.l, {
            id: A,
            role: "dialog",
            "aria-label": x,
            "aria-labelledby": null != x ? void 0 : I.headingId,
            returnRef: l,
            ...E,
            impressionType: E?.impressionType ?? c.ImpressionTypes.MODAL,
            children: (0, a.jsx)(u.F, {
                forceLevel: 1,
                children: (0, a.jsx)("div", {
                    className: g.nw,
                    children: (0, a.jsx)(h.N, {
                        theme: N,
                        children: (e) =>
                            (0, a.jsx)(s.animated.div, {
                                "data-mana-component": "layer-modal",
                                className: r()(p.container, g.yl, e),
                                style: j,
                                children: (0, a.jsx)("div", {
                                    className: g.jE,
                                    children: (0, a.jsx)(h.N, {
                                        theme: S,
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
