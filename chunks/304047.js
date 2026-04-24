n.d(t, { M: () => b, X: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    o = n(922016),
    d = n(990078),
    c = n(939249),
    u = n(834730),
    _ = n(43990),
    f = n(408278),
    m = n(597770),
    p = n(587895),
    g = n(409626),
    h = n(692969),
    x = n(830647),
    v = n(240248),
    A = n(360469),
    I = n(818348),
    C = n(985018),
    E = n(391308);
function j(e) {
    let t,
        { applicationId: n, hideApplicationName: a } = e,
        o = (0, h.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            applicationId: n,
            source: g.Ob.CallTile,
            trackEntryPointImpression: !0,
        }),
        { name: _, icon: f } =
            ((t = (0, s.bG)([p.A], () => p.A.getApplication(n))),
            l.useMemo(() => {
                if (null == t) return null;
                let e = t.getIconURL(A.iu.SMALL);
                return (0, v.uJ)(e)
                    ? null
                    : {
                          name: t.name,
                          icon: () =>
                              (0, i.jsx)("div", {
                                  className: E.jy,
                                  children: (0, i.jsx)("img", { className: E.Se, src: e, alt: "", "aria-hidden": !0 }),
                              }),
                      };
            }, [t]) ?? {});
    if (null == o || null == f) return null;
    let m = C.intl.string(C.t.ajHoOr);
    return (0, i.jsx)(d.m, {
        text: m,
        children: (0, i.jsxs)(c.D, {
            className: r()(E.dY, E.ac, { [E.M7]: a }),
            onClick: o,
            "aria-label": m,
            children: [f(), !a && (0, i.jsx)(u.E, { variant: "text-sm/normal", className: E.Wk, children: _ })],
        }),
    });
}
function b(e) {
    let { userId: t, applicationId: n, channel: a, hideWhenInactive: s, idle: c } = e,
        [u, p] = l.useState(!1),
        g = l.useRef(null),
        h = l.useCallback(() => p(!0), []),
        v = l.useCallback(() => p(!1), []),
        A = C.intl.string(C.t["wg/30i"]);
    return (0, i.jsx)(o.Y, {
        targetElementRef: g,
        shouldShow: u,
        animation: o.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: v,
        renderPopout: () =>
            (0, i.jsx)(_.N, {
                theme: I.NJ.DARKER,
                children: (e) => (0, i.jsx)(x.Z, { className: e, userId: t, channel: a, applicationId: n, onClose: v }),
            }),
        children: () =>
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsx)(d.m, {
                    text: A,
                    shouldShow: !u && void 0,
                    children: (0, i.jsx)("div", {
                        className: r()(E.V7, { [E.kl]: s, [E.N7]: c }),
                        children: (0, i.jsx)(f.K, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), h();
                            },
                            "aria-label": A,
                            icon: m.o,
                        }),
                    }),
                }),
            }),
    });
}
