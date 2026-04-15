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
    p = n(985018),
    f = n(633916);
function E(e) {
    let {
        applicationName: t,
        applicationIcon: n,
        tooltipText: l,
        shouldShowTooltip: a,
        onClick: r,
        "aria-expanded": o,
        "aria-haspopup": u,
    } = e;
    return (0, i.jsx)(c.m, {
        text: l,
        shouldShow: a,
        children: (0, i.jsxs)(d.DUT, {
            className: s()(f.dY, f.ac),
            onClick: r,
            "aria-label": l,
            "aria-expanded": o,
            "aria-haspopup": u,
            children: [
                n(),
                null != t &&
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: f.Wk,
                        children: p.intl.format(p.t.Sq9xJ7, { game: t }),
                    }),
            ],
        }),
    });
}
function C(e) {
    let t,
        { applicationId: n, hideApplicationName: a } = e,
        s = (0, m.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            applicationId: n,
            source: h.Ob.CallTile,
            trackEntryPointImpression: !0,
        }),
        { name: o, icon: c } =
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
                                  className: f.jy,
                                  children: (0, i.jsx)("img", { className: f.Se, src: e, alt: "", "aria-hidden": !0 }),
                              }),
                      };
            }, [t]) ?? {});
    return null == s || null == c
        ? null
        : (0, i.jsx)(E, {
              applicationName: a ? void 0 : o,
              applicationIcon: c,
              tooltipText: p.intl.string(p.t.ajHoOr),
              onClick: s,
          });
}
function x(e) {
    let { userId: t, applicationId: n, channel: a, hideWhenInactive: r, idle: u } = e,
        [h, m] = l.useState(!1),
        g = l.useRef(null),
        _ = l.useCallback(() => m(!0), []),
        E = l.useCallback(() => m(!1), []),
        C = p.intl.string(p.t["wg/30i"]);
    return (0, i.jsx)(o.Y, {
        targetElementRef: g,
        shouldShow: h,
        animation: o.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: E,
        renderPopout: () => (0, i.jsx)(A.Z, { userId: t, channel: a, applicationId: n, onClose: E }),
        children: () =>
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsx)(c.m, {
                    text: C,
                    shouldShow: !h && void 0,
                    children: (0, i.jsx)("div", {
                        className: s()(f.V7, { [f.kl]: r, [f.N7]: u }),
                        children: (0, i.jsx)(d.K0, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), _();
                            },
                            "aria-label": C,
                            icon: d.okO,
                        }),
                    }),
                }),
            }),
    });
}
