n.d(t, { d: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(128954),
    o = n(113325),
    d = n(259678),
    c = n(707554),
    u = n(22856),
    _ = n(150591),
    E = n(815390),
    A = n(592551);
function h(e) {
    let {
            transitionState: t,
            animationVariant: n = "default",
            size: a = "md",
            paddingSize: h = "sm",
            fullScreenOnMobile: I = !0,
            returnRef: f,
            role: p = "dialog",
            "aria-label": T,
            dismissable: m = !0,
            maxHeight: g = "default",
            onClose: S,
            contentOutsideContainer: N,
            trackingProps: C,
            children: O,
        } = e,
        R = r.useId(),
        L = r.useMemo(() => ({ id: R, headingId: `heading-${R}`, onClose: S, dismissable: m }), [m, R, S]),
        y = (0, _.kS)(t, n),
        D = r.useRef(null);
    return (0, i.jsx)(u.V.Provider, {
        value: L,
        children: (0, i.jsx)(o.lG, {
            id: R,
            role: p,
            "aria-label": T,
            "aria-labelledby": null != T ? void 0 : L.headingId,
            returnRef: f,
            trackingProps: C,
            trackingComponentName: "Modal",
            children: (0, i.jsx)(c.F, {
                forceLevel: 1,
                children: (0, i.jsxs)("div", {
                    className: s()(A.outerContainer, { [A.fullScreenOnMobile]: I }),
                    children: [
                        N,
                        (0, i.jsx)(l.animated.div, {
                            ref: D,
                            "data-mana-component": "modal",
                            className: s()(A.container, A[`size-${a}`], A[`padding-size-${h}`], {
                                [A.maxHeightViewport]: "viewport" === g,
                                [A.exiting]: t === E.i.EXITING || t === E.i.EXITED,
                            }),
                            style: y,
                            children: (0, i.jsx)(d.xp, { containerRef: D, children: O }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
