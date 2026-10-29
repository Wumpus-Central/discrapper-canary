n.d(t, { M: () => S, X: () => I });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(866665),
    o = n(939249),
    u = n(834730),
    c = n(265872),
    d = n(43990),
    m = n(408278),
    p = n(597770),
    g = n(409626),
    f = n(692969),
    x = n(980822),
    h = n(852105),
    A = n(240248),
    v = n(818023),
    E = n(818348),
    C = n(105292),
    j = n(584841);
function I(e) {
    let { applicationId: t, hideApplicationName: n } = e,
        { gameId: l, gameRecord: s } = (0, x.A)({ applicationId: t }),
        c = (0, f.A)({
            location: "SocialLayerCommerceGameDetailsButton",
            gameId: l ?? void 0,
            source: g.GameProfileSources.CallTile,
            trackEntryPointImpression: !0,
        }),
        d = s?.getIconURL(v.iu.SMALL);
    if (null == c || null == s || (0, A.uJ)(d)) return null;
    let m = C.intl.string(C.t.ajHoOr);
    return (0, i.jsx)(a.m, {
        text: m,
        children: (0, i.jsxs)(o.D, {
            className: r()(j.dY, j.ac, { [j.M7]: n }),
            onClick: c,
            "aria-label": m,
            children: [
                (0, i.jsx)("div", {
                    className: j.jy,
                    children: (0, i.jsx)("img", { className: j.Se, src: d, alt: "", "aria-hidden": !0 }),
                }),
                !n && (0, i.jsx)(u.E, { variant: "text-sm/normal", className: j.Wk, children: s.name }),
            ],
        }),
    });
}
function S(e) {
    let { userId: t, applicationId: n, channel: s, hideWhenInactive: o, idle: u } = e,
        [g, f] = l.useState(!1),
        x = l.useRef(null),
        A = l.useCallback(() => f(!0), []),
        v = l.useCallback(() => f(!1), []),
        I = C.intl.string(C.t["wg/30i"]);
    return (0, i.jsx)(c.Y, {
        targetElementRef: x,
        shouldShow: g,
        animation: c.Y.Animation.FADE,
        position: "left",
        align: "bottom",
        spacing: 8,
        onRequestClose: v,
        renderPopout: () =>
            (0, i.jsx)(d.N, {
                theme: E.NJ.DARK,
                children: (e) => (0, i.jsx)(h.Z, { className: e, userId: t, channel: s, applicationId: n, onClose: v }),
            }),
        children: () =>
            (0, i.jsx)("div", {
                ref: x,
                children: (0, i.jsx)(a.m, {
                    text: I,
                    shouldShow: !g && void 0,
                    children: (0, i.jsx)("div", {
                        className: r()(j.V7, { [j.kl]: o, [j.N7]: u }),
                        children: (0, i.jsx)(m.K, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                (e.stopPropagation(), A());
                            },
                            "aria-label": I,
                            icon: p.GiftIcon,
                        }),
                    }),
                }),
            }),
    });
}
