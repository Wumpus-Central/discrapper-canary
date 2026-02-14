"use strict";
n.d(t, { d: () => g, i: () => h.i });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(110259),
    u = n(113325),
    c = n(426333),
    d = n(707554),
    _ = n(22856),
    f = n(150591),
    h = n(815390),
    p = n(22789);
function g(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: a = "md",
            paddingSize: h = "sm",
            fullScreenOnMobile: g = !0,
            returnRef: E,
            role: A = "dialog",
            "aria-label": I,
            dismissable: T = !0,
            maxHeight: y = "default",
            onClose: S,
            contentOutsideContainer: v,
            trackingProps: C,
            children: b,
        } = e,
        N = i.useId(),
        R = i.useMemo(() => ({ id: N, headingId: `heading-${N}`, onClose: S, dismissable: T }), [T, N, S]),
        O = (0, f.kS)(t, n),
        D = i.useRef(null);
    return (0, r.jsx)(_.V.Provider, {
        value: R,
        children: (0, r.jsx)(u.l, {
            id: N,
            role: A,
            "aria-label": I,
            "aria-labelledby": null != I ? void 0 : R.headingId,
            returnRef: E,
            trackingProps: { ...C, impressionType: C?.impressionType ?? l.ImpressionTypes.MODAL },
            children: (0, r.jsx)(c.xp, {
                containerRef: D,
                children: (0, r.jsx)(d.F, {
                    forceLevel: 1,
                    children: (0, r.jsxs)("div", {
                        ref: D,
                        className: s()(p.outerContainer, { [p.fullScreenOnMobile]: g }),
                        children: [
                            v,
                            (0, r.jsx)(o.animated.div, {
                                "data-mana-component": "modal",
                                className: s()(p.container, p[`size-${a}`], p[`padding-size-${h}`], {
                                    [p.maxHeightViewport]: "viewport" === y,
                                }),
                                style: O,
                                children: b,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
