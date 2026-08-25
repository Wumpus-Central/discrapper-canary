n.d(t, { M: () => S, X: () => j });
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
    h = n(692969),
    f = n(738250),
    x = n(830647),
    A = n(240248),
    v = n(360469),
    E = n(818348),
    C = n(375708),
    I = n(584841);
function j(e) {
    let { applicationId: t, hideApplicationName: n } = e,
        { gameId: i, gameRecord: s } = (0, f.A)({ applicationId: t }),
        a = (0, h.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            gameId: i ?? void 0,
            source: g.GameProfileSources.CallTile,
            trackEntryPointImpression: !0,
        }),
        d = s?.getIconURL(v.iu.SMALL);
    if (null == a || null == s || (0, A.uJ)(d)) return null;
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
function S(e) {
    let { userId: t, applicationId: n, channel: s, hideWhenInactive: u, idle: c } = e,
        [g, h] = i.useState(!1),
        f = i.useRef(null),
        A = i.useCallback(() => h(!0), []),
        v = i.useCallback(() => h(!1), []),
        j = C.intl.string(C.t["wg/30i"]);
    return (0, l.jsx)(a.Y, {
        targetElementRef: f,
        shouldShow: g,
        animation: a.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: v,
        renderPopout: () =>
            (0, l.jsx)(d.N, {
                theme: E.NJ.DARKER,
                children: (e) => (0, l.jsx)(x.Z, { className: e, userId: t, channel: s, applicationId: n, onClose: v }),
            }),
        children: () =>
            (0, l.jsx)("div", {
                ref: f,
                children: (0, l.jsx)(o.m, {
                    text: j,
                    shouldShow: !g && void 0,
                    children: (0, l.jsx)("div", {
                        className: r()(I.V7, { [I.kl]: u, [I.N7]: c }),
                        children: (0, l.jsx)(m.K, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), A();
                            },
                            "aria-label": j,
                            icon: p.GiftIcon,
                        }),
                    }),
                }),
            }),
    });
}
