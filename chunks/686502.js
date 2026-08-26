n.d(t, { y: () => D });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(554146),
    o = n(661531),
    c = n(866665),
    d = n(939249),
    u = n(323384),
    h = n(43990),
    p = n(285796),
    m = n(192308),
    A = n(231723),
    f = n(825484),
    x = n(821609),
    g = n(283973),
    C = n(834730),
    y = n(789645),
    j = n(964486),
    I = n(648027),
    N = n(855446),
    v = n(793574),
    E = n(688810),
    b = n(975412),
    T = n(392054),
    _ = n(826673),
    R = n(757293),
    S = n(174459),
    L = n(272812),
    O = n(652215),
    P = n(375708),
    M = n(253802),
    w = n(867010);
function D(e) {
    let {
        channel: t,
        guild: n,
        width: l,
        inPopout: a,
        handleClose: s,
        userParticipantCount: r,
        activitiesEnabled: o = !0,
    } = e;
    return l < 250
        ? (0, i.jsx)(U, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(k, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
          : (0, i.jsx)(V, { channel: t, guild: n, width: l, inPopout: a, activitiesEnabled: o });
}
function U(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: r } = (0, E.Ay)(v.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(E.f5, {
        value: a,
        children: (0, i.jsxs)(L.A, {
            className: M.zr,
            children: [
                (0, i.jsx)(c.m, {
                    asContainer: !0,
                    text: P.intl.string(P.t.qJvTKQ),
                    children: (0, i.jsx)(d.D, {
                        onClick: () => {
                            (0, b.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: r,
                            });
                        },
                        className: M.F1,
                        children: (0, i.jsx)("div", {
                            className: M.zc,
                            children: (0, i.jsx)(u.k, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                        }),
                    }),
                }),
                (0, i.jsx)(h.N, {
                    theme: O.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(d.D, {
                            onClick: l,
                            className: s()(e, M.lg),
                            children: (0, i.jsx)(p.a, {
                                size: "md",
                                color: "currentColor",
                                className: M.yP,
                                secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function V(e) {
    let { channel: t, guild: a, inPopout: r, activitiesEnabled: o = !0 } = e;
    l.useEffect(() => {
        S.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: c, newestAnalyticsLocation: d } = (0, E.Ay)(v.A.VC_TILE_ACTIVITY_INVITE);
    function p() {
        (0, m.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("683621"),
                    n.e("711162"),
                    n.e("159957"),
                    n.e("728136"),
                    n.e("216084"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
                return (n) => (0, i.jsx)(e, { ...n, guild: a, channel: t, source: O.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: r ? A.KX : A.SY },
        );
    }
    function C() {
        (0, b.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: r,
            analyticsLocation: d,
        });
    }
    return (0, i.jsx)(E.f5, {
        value: c,
        children: (0, i.jsx)(h.N, {
            disableAdaptiveTheme: !0,
            theme: O.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(L.A, {
                    className: s()(M.zr, M.co, e),
                    children: [
                        (0, i.jsx)("img", { src: w, className: M.Qw, alt: "" }),
                        (0, i.jsxs)(f.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(x.$, {
                                    variant: "secondary",
                                    icon: g.R,
                                    text: P.intl.string(P.t["EE+P0H"]),
                                    onClick: p,
                                }),
                                o &&
                                    (0, i.jsx)(x.$, {
                                        variant: "secondary",
                                        icon: u.k,
                                        text: P.intl.string(P.t.qnFavR),
                                        onClick: C,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function k(e) {
    let { channel: t, guild: n, handleClose: a, width: o, userParticipantCount: c } = e;
    (0, j.Ay)(() => {
        S.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let u = (0, I.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: h } = (0, E.Ay)(v.A.VC_TILE_ACTIVITY_SUGGESTION),
        p = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(E.f5, {
        value: h,
        children: (0, i.jsxs)(L.A, {
            className: M.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(C.E, {
                          className: M.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: P.intl.string(P.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: s()(M.Di, { [M.qy]: o <= 300 }),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            N.C,
                            {
                                context: p,
                                activityItem: e,
                                aspectRatio: N.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: M.KU,
                                commandOrigin: T.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(d.D, {
                    className: M.HI,
                    onClick: function () {
                        S.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, _.Dr)(r.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(R.A, {}),
                        (0, i.jsx)(C.E, { variant: "text-sm/medium", children: P.intl.string(P.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    className: M.cG,
                    onClick: function () {
                        S.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: c,
                        }),
                            a();
                    },
                    children: (0, i.jsx)(y.P, { size: "md", color: "currentColor", className: M.b }),
                }),
            ],
        }),
    });
}
