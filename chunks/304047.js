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
    h = n(980822),
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
                [g, f] = l.useState(!1),
                h = l.useRef(null),
                A = l.useCallback(() => f(!0), []),
                v = l.useCallback(() => f(!1), []),
                j = C.intl.string(C.t["wg/30i"]);
            return (0, i.jsx)(c.Y, {
                targetElementRef: h,
                shouldShow: g,
                animation: c.Y.Animation.FADE,
                position: "left",
                align: "bottom",
                spacing: 8,
                onRequestClose: v,
                renderPopout: () =>
                    (0, i.jsx)(d.N, {
                        theme: E.NJ.DARK,
                        children: (e) =>
                            (0, i.jsx)(x.Z, { className: e, userId: t, channel: s, applicationId: n, onClose: v }),
                    }),
                children: () =>
                    (0, i.jsx)("div", {
                        ref: h,
                        children: (0, i.jsx)(a.m, {
                            text: j,
                            shouldShow: !g && void 0,
                            children: (0, i.jsx)("div", {
                                className: r()(I.V7, { [I.kl]: o, [I.N7]: u }),
                                children: (0, i.jsx)(m.K, {
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
                { gameId: l, gameRecord: s } = (0, h.A)({ applicationId: t }),
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
                    className: r()(I.dY, I.ac, { [I.M7]: n }),
                    onClick: c,
                    "aria-label": m,
                    children: [
                        (0, i.jsx)("div", {
                            className: I.jy,
                            children: (0, i.jsx)("img", { className: I.Se, src: d, alt: "", "aria-hidden": !0 }),
                        }),
                        !n && (0, i.jsx)(u.E, { variant: "body-sm/normal", className: I.Wk, children: s.name }),
                    ],
                }),
            });
        },
    },
);
