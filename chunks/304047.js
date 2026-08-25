n.d(t, { M: () => j, X: () => S });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(922016),
    o = n(866665),
    u = n(939249),
    c = n(834730),
    d = n(43990),
    m = n(408278),
    p = n(597770),
    g = n(409626),
    f = n(692969),
    h = n(738250),
    A = n(830647),
    x = n(240248),
    v = n(360469),
    E = n(818348),
    C = n(375708),
    I = n(584841);
function S(e) {
    let { applicationId: t, hideApplicationName: n } = e,
        { gameId: i, gameRecord: s } = (0, h.A)({ applicationId: t }),
        a = (0, f.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            gameId: i ?? void 0,
            source: g.GameProfileSources.CallTile,
            trackEntryPointImpression: !0,
        }),
        d = s?.getIconURL(v.iu.SMALL);
    if (null == a || null == s || (0, x.uJ)(d)) return null;
    let m = C.intl.string(C.t.ajHoOr);
    return (0, l.jsx)(o.m, {
        text: m,
        children: (0, l.jsxs)(u.D, {
            className: r()(I.dY, I.ac, { [I.M7]: n }),
            onClick: a,
            "aria-label": m,
            children: [
                (0, l.jsx)("div", {
                    className: I.jy,
                    children: (0, l.jsx)("img", { className: I.Se, src: d, alt: "", "aria-hidden": !0 }),
                }),
                !n && (0, l.jsx)(c.E, { variant: "text-sm/normal", className: I.Wk, children: s.name }),
            ],
        }),
    });
}
function j(e) {
    let { userId: t, applicationId: n, channel: s, hideWhenInactive: u, idle: c } = e,
        [g, f] = i.useState(!1),
        h = i.useRef(null),
        x = i.useCallback(() => f(!0), []),
        v = i.useCallback(() => f(!1), []),
        S = C.intl.string(C.t["wg/30i"]);
    return (0, l.jsx)(a.Y, {
        targetElementRef: h,
        shouldShow: g,
        animation: a.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: v,
        renderPopout: () =>
            (0, l.jsx)(d.N, {
                theme: E.NJ.DARKER,
                children: (e) => (0, l.jsx)(A.Z, { className: e, userId: t, channel: s, applicationId: n, onClose: v }),
            }),
        children: () =>
            (0, l.jsx)("div", {
                ref: h,
                children: (0, l.jsx)(o.m, {
                    text: S,
                    shouldShow: !g && void 0,
                    children: (0, l.jsx)("div", {
                        className: r()(I.V7, { [I.kl]: u, [I.N7]: c }),
                        children: (0, l.jsx)(m.K, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), x();
                            },
                            "aria-label": S,
                            icon: p.GiftIcon,
                        }),
                    }),
                }),
            }),
    });
}
