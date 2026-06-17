n.d(t, { M: () => j, X: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(922016),
    o = n(990078),
    u = n(939249),
    c = n(834730),
    d = n(43990),
    m = n(408278),
    p = n(597770),
    g = n(409626),
    h = n(692969),
    f = n(738250),
    A = n(830647),
    x = n(240248),
    E = n(360469),
    v = n(818348),
    C = n(375708),
    I = n(24908);
function _(e) {
    let { applicationId: t, hideApplicationName: n } = e,
        { gameId: i, gameRecord: s } = (0, f.A)({ applicationId: t }),
        a = (0, h.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            gameId: i ?? void 0,
            source: g.Ob.CallTile,
            trackEntryPointImpression: !0,
        }),
        d = s?.getIconURL(E.iu.SMALL);
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
        [g, h] = i.useState(!1),
        f = i.useRef(null),
        x = i.useCallback(() => h(!0), []),
        E = i.useCallback(() => h(!1), []),
        _ = C.intl.string(C.t["wg/30i"]);
    return (0, l.jsx)(a.Y, {
        targetElementRef: f,
        shouldShow: g,
        animation: a.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: E,
        renderPopout: () =>
            (0, l.jsx)(d.N, {
                theme: v.NJ.DARKER,
                children: (e) => (0, l.jsx)(A.Z, { className: e, userId: t, channel: s, applicationId: n, onClose: E }),
            }),
        children: () =>
            (0, l.jsx)("div", {
                ref: f,
                children: (0, l.jsx)(o.m, {
                    text: _,
                    shouldShow: !g && void 0,
                    children: (0, l.jsx)("div", {
                        className: r()(I.V7, { [I.kl]: u, [I.N7]: c }),
                        children: (0, l.jsx)(m.K, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), x();
                            },
                            "aria-label": _,
                            icon: p.o,
                        }),
                    }),
                }),
            }),
    });
}
