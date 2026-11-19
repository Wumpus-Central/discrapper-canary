var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
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
    A = n(909004),
    x = n(240248),
    v = n(487887),
    E = n(818348),
    C = n(792996),
    j = n(584841);
n.d(
    t,
    {},
    {
        M: function (e) {
            let { userId: t, applicationId: n, channel: r, hideWhenInactive: o, idle: u } = e,
                [g, f] = i.useState(!1),
                h = i.useRef(null),
                x = i.useCallback(() => f(!0), []),
                v = i.useCallback(() => f(!1), []),
                S = C.intl.string(C.t["wg/30i"]);
            return (0, l.jsx)(c.Y, {
                targetElementRef: h,
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
                            (0, l.jsx)(A.Z, { className: e, userId: t, channel: r, applicationId: n, onClose: v }),
                    }),
                children: () =>
                    (0, l.jsx)("div", {
                        ref: h,
                        children: (0, l.jsx)(a.m, {
                            text: S,
                            shouldShow: !g && void 0,
                            children: (0, l.jsx)("div", {
                                className: s()(j.V7, { [j.kl]: o, [j.N7]: u }),
                                children: (0, l.jsx)(m.K, {
                                    size: "sm",
                                    variant: "overlay-secondary",
                                    onClick: (e) => {
                                        (e.stopPropagation(), x());
                                    },
                                    "aria-label": S,
                                    icon: p.GiftIcon,
                                }),
                            }),
                        }),
                    }),
            });
        },
        X: function (e) {
            let { applicationId: t, hideApplicationName: n } = e,
                { gameId: i, gameRecord: r } = (0, h.A)({ applicationId: t }),
                c = (0, f.A)({
                    location: "SocialLayerCommerceGameDetailsButton",
                    gameId: i ?? void 0,
                    source: g.GameProfileSources.CallTile,
                    trackEntryPointImpression: !0,
                }),
                d = r?.getIconURL(v.iu.SMALL);
            if (null == c || null == r || (0, x.uJ)(d)) return null;
            let m = C.intl.string(C.t.ajHoOr);
            return (0, l.jsx)(a.m, {
                text: m,
                children: (0, l.jsxs)(o.D, {
                    className: s()(j.dY, j.ac, { [j.M7]: n }),
                    onClick: c,
                    "aria-label": m,
                    children: [
                        (0, l.jsx)("div", {
                            className: j.jy,
                            children: (0, l.jsx)("img", { className: j.Se, src: d, alt: "", "aria-hidden": !0 }),
                        }),
                        !n && (0, l.jsx)(u.E, { variant: "body-sm/normal", className: j.Wk, children: r.name }),
                    ],
                }),
            });
        },
    },
);
