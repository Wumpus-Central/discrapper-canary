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
    v = n(648027),
    E = n(855446),
    N = n(793574),
    I = n(688810),
    T = n(975412),
    b = n(392054),
    _ = n(826673),
    R = n(757293),
    S = n(174459),
    P = n(272812),
    L = n(652215),
    O = n(375708),
    w = n(361595),
    M = n(867010);
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
          ? (0, i.jsx)(V, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
          : (0, i.jsx)(k, { channel: t, guild: n, width: l, inPopout: a, activitiesEnabled: o });
}
function U(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: r } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(I.f5, {
        value: a,
        children: (0, i.jsxs)(P.A, {
            className: w.zr,
            children: [
                (0, i.jsx)(c.m, {
                    asContainer: !0,
                    text: O.intl.string(O.t.qJvTKQ),
                    children: (0, i.jsx)(d.D, {
                        onClick: () => {
                            (0, T.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: r,
                            });
                        },
                        className: w.F1,
                        children: (0, i.jsx)("div", {
                            className: w.zc,
                            children: (0, i.jsx)(u.k, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                        }),
                    }),
                }),
                (0, i.jsx)(h.N, {
                    theme: L.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(d.D, {
                            onClick: l,
                            className: s()(e, w.lg),
                            children: (0, i.jsx)(p.a, {
                                size: "md",
                                color: "currentColor",
                                className: w.yP,
                                secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function k(e) {
    let { channel: t, guild: a, inPopout: r, activitiesEnabled: o = !0 } = e;
    l.useEffect(() => {
        S.default.track(L.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: c, newestAnalyticsLocation: d } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_INVITE);
    function p() {
        (0, m.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("27574"),
                    n.e("21149"),
                    n.e("59957"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
                return (n) => (0, i.jsx)(e, { ...n, guild: a, channel: t, source: L.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: r ? A.KX : A.SY },
        );
    }
    function C() {
        (0, T.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: r,
            analyticsLocation: d,
        });
    }
    return (0, i.jsx)(I.f5, {
        value: c,
        children: (0, i.jsx)(h.N, {
            disableAdaptiveTheme: !0,
            theme: L.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(P.A, {
                    className: s()(w.zr, w.co, e),
                    children: [
                        (0, i.jsx)("img", { src: M, className: w.Qw, alt: "" }),
                        (0, i.jsxs)(f.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(x.$, {
                                    variant: "secondary",
                                    icon: g.R,
                                    text: O.intl.string(O.t["EE+P0H"]),
                                    onClick: p,
                                }),
                                o &&
                                    (0, i.jsx)(x.$, {
                                        variant: "secondary",
                                        icon: u.k,
                                        text: O.intl.string(O.t.qnFavR),
                                        onClick: C,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function V(e) {
    let { channel: t, guild: n, handleClose: a, width: o, userParticipantCount: c } = e;
    (0, j.Ay)(() => {
        S.default.track(L.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let u = (0, v.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: h } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_SUGGESTION),
        p = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(I.f5, {
        value: h,
        children: (0, i.jsxs)(P.A, {
            className: w.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(C.E, {
                          className: w.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: O.intl.string(O.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: s()(w.Di, { [w.qy]: o <= 300 }),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            E.C,
                            {
                                context: p,
                                activityItem: e,
                                aspectRatio: E.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: w.KU,
                                commandOrigin: b.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(d.D, {
                    className: w.HI,
                    onClick: function () {
                        S.default.track(L.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, _.Dr)(r.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(R.A, {}),
                        (0, i.jsx)(C.E, { variant: "text-sm/medium", children: O.intl.string(O.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    className: w.cG,
                    onClick: function () {
                        S.default.track(L.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: c,
                        }),
                            a();
                    },
                    children: (0, i.jsx)(y.P, { size: "md", color: "currentColor", className: w.b }),
                }),
            ],
        }),
    });
}
