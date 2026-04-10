n.d(t, { MI: () => T, X0: () => S, sU: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(265872),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    h = n(409626),
    m = n(692969),
    A = n(535296),
    g = n(240248),
    p = n(360469),
    f = n(985018),
    _ = n(633916);
function E(e) {
    let t = (0, r.bG)([u.A], () => u.A.getApplication(e));
    return l.useMemo(() => {
        if (null == t) return null;
        let e = t.getIconURL(p.iu.SMALL);
        return (0, g.uJ)(e)
            ? null
            : {
                  name: t.name,
                  icon: () =>
                      (0, i.jsx)("div", {
                          className: _.jy,
                          children: (0, i.jsx)("img", { className: _.Se, src: e, alt: "", "aria-hidden": !0 }),
                      }),
              };
    }, [t]);
}
function x(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(_.qs, _.ac),
        children: [
            n(),
            null != t &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    className: _.Wk,
                    children: f.intl.format(f.t.Sq9xJ7, { game: t }),
                }),
        ],
    });
}
function C(e) {
    let {
        applicationName: t,
        applicationIcon: n,
        tooltipText: l,
        shouldShowTooltip: s,
        onClick: r,
        "aria-expanded": o,
        "aria-haspopup": u,
    } = e;
    return (0, i.jsx)(c.m, {
        text: l,
        shouldShow: s,
        children: (0, i.jsxs)(d.DUT, {
            className: a()(_.dY, _.ac),
            onClick: r,
            "aria-label": l,
            "aria-expanded": o,
            "aria-haspopup": u,
            children: [
                n(),
                null != t &&
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: _.Wk,
                        children: f.intl.format(f.t.Sq9xJ7, { game: t }),
                    }),
            ],
        }),
    });
}
function S(e) {
    let { applicationId: t, hideApplicationName: n } = e,
        l = (0, m.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            applicationId: t,
            source: h.Ob.CallTile,
            trackEntryPointImpression: !0,
        }),
        { name: s, icon: a } = E(t) ?? {};
    return null == l || null == a
        ? null
        : (0, i.jsx)(C, {
              applicationName: n ? void 0 : s,
              applicationIcon: a,
              tooltipText: f.intl.string(f.t.ajHoOr),
              onClick: l,
          });
}
function I(e) {
    let { userId: t, applicationId: n, channel: s, hasApplicationWidget: a, hideApplicationName: r } = e,
        [c, d] = l.useState(!1),
        u = l.useRef(null),
        h = l.useCallback(() => d(!0), []),
        m = l.useCallback(() => d(!1), []),
        g = l.useCallback(
            (e) => {
                e?.stopPropagation(), h();
            },
            [h],
        ),
        { name: p, icon: _ } = E(n) ?? {};
    return null == _
        ? null
        : a
          ? (0, i.jsx)(o.Y, {
                targetElementRef: u,
                shouldShow: c,
                animation: o.Y.Animation.FADE,
                position: "top",
                align: "center",
                spacing: 8,
                onRequestClose: m,
                renderPopout: () => (0, i.jsx)(A.fd, { userId: t, channel: s, applicationId: n }),
                children: () =>
                    (0, i.jsx)("div", {
                        ref: u,
                        children: (0, i.jsx)(C, {
                            applicationName: r ? void 0 : p,
                            applicationIcon: _,
                            tooltipText: f.intl.string(f.t["03qWLj"]),
                            shouldShowTooltip: !c && void 0,
                            onClick: g,
                            "aria-expanded": c,
                            "aria-haspopup": "dialog",
                        }),
                    }),
            })
          : (0, i.jsx)(x, { applicationName: r ? void 0 : p, applicationIcon: _ });
}
function T(e) {
    let { userId: t, applicationId: n, channel: s, hideWhenInactive: r, idle: u } = e,
        [h, m] = l.useState(!1),
        g = l.useRef(null),
        p = l.useCallback(() => m(!0), []),
        E = l.useCallback(() => m(!1), []),
        x = f.intl.string(f.t["wg/30i"]);
    return (0, i.jsx)(o.Y, {
        targetElementRef: g,
        shouldShow: h,
        animation: o.Y.Animation.FADE,
        position: "top",
        align: "center",
        spacing: 8,
        onRequestClose: E,
        renderPopout: () => (0, i.jsx)(A.Z, { userId: t, channel: s, applicationId: n, onClose: E }),
        children: () =>
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsx)(c.m, {
                    text: x,
                    shouldShow: !h && void 0,
                    children: (0, i.jsx)("div", {
                        className: a()(_.V7, { [_.kl]: r, [_.N7]: u }),
                        children: (0, i.jsx)(d.K0, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), p();
                            },
                            "aria-label": x,
                            icon: d.okO,
                        }),
                    }),
                }),
            }),
    });
}
