"use strict";
n.d(t, { d: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(113325),
    u = n(187322),
    d = n(707554),
    c = n(22856),
    _ = n(150591),
    h = n(967744);
function f(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: s = "md",
            paddingSize: f = "sm",
            fullScreenOnMobile: E = !0,
            returnRef: p,
            role: m = "dialog",
            "aria-label": g,
            dismissable: A = !0,
            maxHeight: I = "default",
            onClose: T,
            contentOutsideContainer: S,
            trackingProps: N,
            children: C,
        } = e,
        y = r.useId(),
        v = r.useMemo(() => ({ id: y, headingId: `heading-${y}`, onClose: T, dismissable: A }), [A, y, T]),
        R = (0, _.kS)(t, n),
        O = r.useRef(null);
    return (0, i.jsx)(c.V.Provider, {
        value: v,
        children: (0, i.jsx)(l.lG, {
            id: y,
            role: m,
            "aria-label": g,
            "aria-labelledby": null != g ? void 0 : v.headingId,
            returnRef: p,
            trackingProps: N,
            trackingComponentName: "Modal",
            children: (0, i.jsx)(u.xp, {
                containerRef: O,
                children: (0, i.jsx)(d.F, {
                    forceLevel: 1,
                    children: (0, i.jsxs)("div", {
                        ref: O,
                        className: a()(h.outerContainer, { [h.fullScreenOnMobile]: E }),
                        children: [
                            S,
                            (0, i.jsx)(o.animated.div, {
                                "data-mana-component": "modal",
                                className: a()(h.container, h[`size-${s}`], h[`padding-size-${f}`], {
                                    [h.maxHeightViewport]: "viewport" === I,
                                }),
                                style: R,
                                children: C,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
