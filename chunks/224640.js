n.d(t, { d: () => A });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(950372),
    o = n(113325),
    d = n(259678),
    c = n(707554),
    u = n(22856),
    _ = n(150591),
    E = n(592551);
function A(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: a = "md",
            paddingSize: A = "sm",
            fullScreenOnMobile: h = !0,
            returnRef: I,
            role: f = "dialog",
            "aria-label": p,
            dismissable: T = !0,
            maxHeight: m = "default",
            onClose: g,
            contentOutsideContainer: S,
            trackingProps: N,
            children: C,
        } = e,
        O = r.useId(),
        R = r.useMemo(() => ({ id: O, headingId: `heading-${O}`, onClose: g, dismissable: T }), [T, O, g]),
        L = (0, _.kS)(t, n),
        y = r.useRef(null);
    return (0, i.jsx)(u.V.Provider, {
        value: R,
        children: (0, i.jsx)(o.lG, {
            id: O,
            role: f,
            "aria-label": p,
            "aria-labelledby": null != p ? void 0 : R.headingId,
            returnRef: I,
            trackingProps: N,
            trackingComponentName: "Modal",
            children: (0, i.jsx)(d.xp, {
                containerRef: y,
                children: (0, i.jsx)(c.F, {
                    forceLevel: 1,
                    children: (0, i.jsxs)("div", {
                        ref: y,
                        className: s()(E.outerContainer, { [E.fullScreenOnMobile]: h }),
                        children: [
                            S,
                            (0, i.jsx)(l.animated.div, {
                                "data-mana-component": "modal",
                                className: s()(E.container, E[`size-${a}`], E[`padding-size-${A}`], {
                                    [E.maxHeightViewport]: "viewport" === m,
                                }),
                                style: L,
                                children: C,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
