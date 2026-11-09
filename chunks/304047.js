var l = n(477900),
    i = n(582128),
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
    h = n(692969),
    f = n(980822),
    x = n(909004),
    A = n(240248),
    v = n(487887),
    E = n(818348),
    C = n(792996),
    I = n(584841);
n.d(
    t,
    {},
    {
        M: function (e) {
            let { userId: t, applicationId: n, channel: s, hideWhenInactive: o, idle: u } = e,
                [g, h] = i.useState(!1),
                f = i.useRef(null),
                A = i.useCallback(() => h(!0), []),
                v = i.useCallback(() => h(!1), []),
                j = C.intl.string(C.t["wg/30i"]);
            return (0, l.jsx)(c.Y, {
                targetElementRef: f,
                shouldShow: g,
                animation: c.Y.Animation.FADE,
                position: "left",
                align: "bottom",
                spacing: 8,
                onRequestClose: v,
                renderPopout: () =>
                    (0, l.jsx)(d.N, {
                        theme: E.NJ.DARK,
                        children: (e) =>
                            (0, l.jsx)(x.Z, { className: e, userId: t, channel: s, applicationId: n, onClose: v }),
                    }),
                children: () =>
                    (0, l.jsx)("div", {
                        ref: f,
                        children: (0, l.jsx)(a.m, {
                            text: j,
                            shouldShow: !g && void 0,
                            children: (0, l.jsx)("div", {
                                className: r()(I.V7, { [I.kl]: o, [I.N7]: u }),
                                children: (0, l.jsx)(m.K, {
                                    size: "sm",
                                    variant: "overlay-secondary",
                                    onClick: (e) => {
                                        (e.stopPropagation(), A());
                                    },
                                    "aria-label": j,
                                    icon: p.GiftIcon,
                                }),
                            }),
                        }),
                    }),
            });
        },
        X: function (e) {
            let { applicationId: t, hideApplicationName: n } = e,
                { gameId: i, gameRecord: s } = (0, f.A)({ applicationId: t }),
                c = (0, h.A)({
                    location: "SocialLayerCommerceGameDetailsButton",
                    gameId: i ?? void 0,
                    source: g.GameProfileSources.CallTile,
                    trackEntryPointImpression: !0,
                }),
                d = s?.getIconURL(v.iu.SMALL);
            if (null == c || null == s || (0, A.uJ)(d)) return null;
            let m = C.intl.string(C.t.ajHoOr);
            return (0, l.jsx)(a.m, {
                text: m,
                children: (0, l.jsxs)(o.D, {
                    className: r()(I.dY, I.ac, { [I.M7]: n }),
                    onClick: c,
                    "aria-label": m,
                    children: [
                        (0, l.jsx)("div", {
                            className: I.jy,
                            children: (0, l.jsx)("img", { className: I.Se, src: d, alt: "", "aria-hidden": !0 }),
                        }),
                        !n && (0, l.jsx)(u.E, { variant: "body-sm/normal", className: I.Wk, children: s.name }),
                    ],
                }),
            });
        },
    },
);
