"use strict";
n.d(t, { d: () => m, i: () => p.i });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(4208),
    l = n(110259),
    u = n(113325),
    c = n(426333),
    d = n(707554),
    _ = n(22856),
    f = n(150591),
    p = n(815390),
    h = n(110992);
function m(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: s = "md",
            paddingSize: p = "sm",
            fullScreenOnMobile: m = !0,
            returnRef: E,
            role: g = "dialog",
            "aria-label": A,
            dismissable: I = !0,
            maxHeight: T = "default",
            onClose: S,
            contentOutsideContainer: y,
            trackingProps: v,
            children: N,
        } = e,
        C = i.useId(),
        R = i.useMemo(() => ({ id: C, headingId: `heading-${C}`, onClose: S, dismissable: I }), [I, C, S]),
        O = (0, f.kS)(t, n),
        b = i.useRef(null);
    return (0, r.jsx)(_.V.Provider, {
        value: R,
        children: (0, r.jsx)(u.l, {
            id: C,
            role: g,
            "aria-label": A,
            "aria-labelledby": null != A ? void 0 : R.headingId,
            returnRef: E,
            trackingProps: { ...v, impressionType: v?.impressionType ?? l.ImpressionTypes.MODAL },
            children: (0, r.jsx)(c.xp, {
                containerRef: b,
                children: (0, r.jsx)(d.F, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: b,
                        className: a()(h.outerContainer, { [h.fullScreenOnMobile]: m }),
                        children: [
                            y,
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "modal",
                                className: a()(h.container, h[`size-${s}`], h[`padding-size-${p}`], {
                                    [h.maxHeightViewport]: "viewport" === T,
                                }),
                                style: O,
                                children: N,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
