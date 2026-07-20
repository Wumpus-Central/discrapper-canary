n.d(t, { y: () => D });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(554146),
    o = n(661531),
    c = n(866665),
    d = n(939249),
    u = n(323384),
    p = n(43990),
    h = n(285796),
    m = n(192308),
    A = n(231723),
    x = n(825484),
    f = n(821609),
    g = n(283973),
    C = n(834730),
    y = n(789645),
    j = n(964486),
    v = n(648027),
    E = n(855446),
    N = n(793574),
    I = n(688810),
    T = n(975412),
    _ = n(392054),
    b = n(826673),
    S = n(757293),
    R = n(174459),
    P = n(272812),
    O = n(652215),
    L = n(375708),
    w = n(766019),
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
          ? (0, i.jsx)(k, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
          : (0, i.jsx)(V, { channel: t, guild: n, width: l, inPopout: a, activitiesEnabled: o });
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
                    text: L.intl.string(L.t.qJvTKQ),
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
                (0, i.jsx)(p.N, {
                    theme: O.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(d.D, {
                            onClick: l,
                            className: s()(e, w.lg),
                            children: (0, i.jsx)(h.a, {
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
function V(e) {
    let { channel: t, guild: a, inPopout: r, activitiesEnabled: o = !0 } = e;
    l.useEffect(() => {
        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: c, newestAnalyticsLocation: d } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_INVITE);
    function h() {
        (0, m.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("70158"),
                    n.e("52757"),
                    n.e("59957"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("22547"),
                ]).then(n.bind(n, 778929));
                return (n) => (0, i.jsx)(e, { ...n, guild: a, channel: t, source: O.PE1.ACTIVITY_ENTRY_POINT_TILE });
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
        children: (0, i.jsx)(p.N, {
            disableAdaptiveTheme: !0,
            theme: O.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(P.A, {
                    className: s()(w.zr, w.co, e),
                    children: [
                        (0, i.jsx)("img", { src: M, className: w.Qw, alt: "" }),
                        (0, i.jsxs)(x.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(f.$, {
                                    variant: "secondary",
                                    icon: g.R,
                                    text: L.intl.string(L.t["EE+P0H"]),
                                    onClick: h,
                                }),
                                o &&
                                    (0, i.jsx)(f.$, {
                                        variant: "secondary",
                                        icon: u.k,
                                        text: L.intl.string(L.t.qnFavR),
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
        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let u = (0, v.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: p } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_SUGGESTION),
        h = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(I.f5, {
        value: p,
        children: (0, i.jsxs)(P.A, {
            className: w.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(C.E, {
                          className: w.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: L.intl.string(L.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: s()(w.Di, { [w.qy]: o <= 300 }),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            E.C,
                            {
                                context: h,
                                activityItem: e,
                                aspectRatio: E.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: w.KU,
                                commandOrigin: _.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(d.D, {
                    className: w.HI,
                    onClick: function () {
                        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, b.Dr)(r.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(S.A, {}),
                        (0, i.jsx)(C.E, { variant: "text-sm/medium", children: L.intl.string(L.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    className: w.cG,
                    onClick: function () {
                        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
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
