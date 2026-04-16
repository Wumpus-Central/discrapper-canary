n.d(t, { M: () => x, X: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(265872),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    h = n(409626),
    m = n(692969),
    A = n(535296),
    g = n(240248),
    _ = n(360469),
    p = n(818348),
    f = n(985018),
    E = n(391308);
function C(e) {
    let t,
        { applicationId: n, hideApplicationName: a } = e,
        o = (0, m.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            applicationId: n,
            source: h.Ob.CallTile,
            trackEntryPointImpression: !0,
        }),
        { name: A, icon: p } =
            ((t = (0, r.bG)([u.A], () => u.A.getApplication(n))),
            l.useMemo(() => {
                if (null == t) return null;
                let e = t.getIconURL(_.iu.SMALL);
                return (0, g.uJ)(e)
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
    if (null == o || null == p) return null;
    let C = f.intl.string(f.t.ajHoOr);
    return (0, i.jsx)(c.m, {
        text: C,
        children: (0, i.jsxs)(d.DUT, {
            className: s()(E.dY, E.ac, { [E.M7]: a }),
            onClick: o,
            "aria-label": C,
            children: [
                p(),
                !a &&
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: E.Wk,
                        children: f.intl.format(f.t.Sq9xJ7, { game: A }),
                    }),
            ],
        }),
    });
}
function x(e) {
    let { userId: t, applicationId: n, channel: a, hideWhenInactive: r, idle: u } = e,
        [h, m] = l.useState(!1),
        g = l.useRef(null),
        _ = l.useCallback(() => m(!0), []),
        C = l.useCallback(() => m(!1), []),
        x = f.intl.string(f.t["wg/30i"]);
    return (0, i.jsx)(o.Y, {
        targetElementRef: g,
        shouldShow: h,
        animation: o.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: C,
        renderPopout: () =>
            (0, i.jsx)(d.NPJ, {
                theme: p.NJ.DARKER,
                children: (e) => (0, i.jsx)(A.Z, { className: e, userId: t, channel: a, applicationId: n, onClose: C }),
            }),
        children: () =>
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsx)(c.m, {
                    text: x,
                    shouldShow: !h && void 0,
                    children: (0, i.jsx)("div", {
                        className: s()(E.V7, { [E.kl]: r, [E.N7]: u }),
                        children: (0, i.jsx)(d.K0, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), _();
                            },
                            "aria-label": x,
                            icon: d.okO,
                        }),
                    }),
                }),
            }),
    });
}
