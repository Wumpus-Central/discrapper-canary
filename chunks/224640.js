"use strict";
n.d(t, { d: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(110259),
    u = n(113325),
    d = n(187322),
    c = n(707554),
    _ = n(22856),
    f = n(150591),
    E = n(967744);
function h(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: s = "md",
            paddingSize: h = "sm",
            fullScreenOnMobile: p = !0,
            returnRef: m,
            role: g = "dialog",
            "aria-label": A,
            dismissable: I = !0,
            maxHeight: T = "default",
            onClose: S,
            contentOutsideContainer: y,
            trackingProps: N,
            children: O,
        } = e,
        R = i.useId(),
        v = i.useMemo(() => ({ id: R, headingId: `heading-${R}`, onClose: S, dismissable: I }), [I, R, S]),
        C = (0, f.kS)(t, n),
        b = i.useRef(null);
    return (0, r.jsx)(_.V.Provider, {
        value: v,
        children: (0, r.jsx)(u.l, {
            id: R,
            role: g,
            "aria-label": A,
            "aria-labelledby": null != A ? void 0 : v.headingId,
            returnRef: m,
            trackingProps: { ...N, impressionType: N?.impressionType ?? l.ImpressionTypes.MODAL },
            children: (0, r.jsx)(d.xp, {
                containerRef: b,
                children: (0, r.jsx)(c.F, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: b,
                        className: a()(E.outerContainer, { [E.fullScreenOnMobile]: p }),
                        children: [
                            y,
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "modal",
                                className: a()(E.container, E[`size-${s}`], E[`padding-size-${h}`], {
                                    [E.maxHeightViewport]: "viewport" === T,
                                }),
                                style: C,
                                children: O,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
