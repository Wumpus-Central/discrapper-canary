n.d(t, { M: () => N, X: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(265872),
    d = n(990078),
    c = n(939249),
    u = n(834730),
    _ = n(43990),
    f = n(408278),
    m = n(597770),
    p = n(587895),
    g = n(409626),
    h = n(692969),
    A = n(535296),
    x = n(240248),
    v = n(360469),
    I = n(818348),
    E = n(985018),
    C = n(391308);
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
                let e = t.getIconURL(v.iu.SMALL);
                return (0, x.uJ)(e)
                    ? null
                    : {
                          name: t.name,
                          icon: () =>
                              (0, i.jsx)("div", {
                                  className: C.jy,
                                  children: (0, i.jsx)("img", { className: C.Se, src: e, alt: "", "aria-hidden": !0 }),
                              }),
                      };
            }, [t]) ?? {});
    if (null == o || null == f) return null;
    let m = E.intl.string(E.t.ajHoOr);
    return (0, i.jsx)(d.m, {
        text: m,
        children: (0, i.jsxs)(c.D, {
            className: r()(C.dY, C.ac, { [C.M7]: a }),
            onClick: o,
            "aria-label": m,
            children: [f(), !a && (0, i.jsx)(u.E, { variant: "text-sm/normal", className: C.Wk, children: _ })],
        }),
    });
}
function N(e) {
    let { userId: t, applicationId: n, channel: a, hideWhenInactive: s, idle: c } = e,
        [u, p] = l.useState(!1),
        g = l.useRef(null),
        h = l.useCallback(() => p(!0), []),
        x = l.useCallback(() => p(!1), []),
        v = E.intl.string(E.t["wg/30i"]);
    return (0, i.jsx)(o.Y, {
        targetElementRef: g,
        shouldShow: u,
        animation: o.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: x,
        renderPopout: () =>
            (0, i.jsx)(_.N, {
                theme: I.NJ.DARKER,
                children: (e) => (0, i.jsx)(A.Z, { className: e, userId: t, channel: a, applicationId: n, onClose: x }),
            }),
        children: () =>
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsx)(d.m, {
                    text: v,
                    shouldShow: !u && void 0,
                    children: (0, i.jsx)("div", {
                        className: r()(C.V7, { [C.kl]: s, [C.N7]: c }),
                        children: (0, i.jsx)(f.K, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), h();
                            },
                            "aria-label": v,
                            icon: m.o,
                        }),
                    }),
                }),
            }),
    });
}
