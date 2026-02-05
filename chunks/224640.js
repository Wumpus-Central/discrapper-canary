"use strict";
n.d(t, { d: () => m, i: () => p.i });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(110259),
    u = n(113325),
    c = n(426333),
    d = n(707554),
    _ = n(22856),
    f = n(150591),
    p = n(815390),
    h = n(22789);
function m(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: a = "md",
            paddingSize: p = "sm",
            fullScreenOnMobile: m = !0,
            returnRef: g,
            role: E = "dialog",
            "aria-label": A,
            dismissable: I = !0,
            onClose: T,
            contentOutsideContainer: y,
            trackingProps: S,
            children: v,
        } = e,
        C = i.useId(),
        b = i.useMemo(() => ({ id: C, headingId: `heading-${C}`, onClose: T, dismissable: I }), [I, C, T]),
        N = (0, f.kS)(t, n),
        R = i.useRef(null);
    return (0, r.jsx)(_.V.Provider, {
        value: b,
        children: (0, r.jsx)(u.l, {
            id: C,
            role: E,
            "aria-label": A,
            "aria-labelledby": null != A ? void 0 : b.headingId,
            returnRef: g,
            trackingProps: { ...S, impressionType: S?.impressionType ?? l.ImpressionTypes.MODAL },
            children: (0, r.jsx)(c.xp, {
                containerRef: R,
                children: (0, r.jsx)(d.F, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: R,
                        className: s()(h.outerContainer, { [h.fullScreenOnMobile]: m }),
                        children: [
                            y,
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "modal",
                                className: s()(h.container, h[`size-${a}`], h[`padding-size-${p}`]),
                                style: N,
                                children: v,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
