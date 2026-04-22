n.d(t, { y: () => M });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(554146),
    o = n(827734),
    c = n(990078),
    d = n(939249),
    u = n(323384),
    p = n(43990),
    h = n(285796),
    _ = n(192308),
    m = n(231723),
    A = n(825484),
    x = n(821609),
    f = n(283973),
    g = n(834730),
    C = n(789645),
    y = n(964486),
    v = n(887700),
    E = n(855446),
    N = n(793574),
    I = n(688810),
    j = n(975412),
    T = n(392054),
    b = n(826673),
    S = n(757293),
    R = n(954571),
    P = n(272812),
    O = n(652215),
    w = n(985018),
    L = n(766019),
    D = n(867010);
function M(e) {
    let {
        channel: t,
        guild: n,
        width: a,
        inPopout: l,
        handleClose: s,
        userParticipantCount: r,
        activitiesEnabled: o = !0,
    } = e;
    return a < 250
        ? (0, i.jsx)(U, { channel: t, guild: n, width: a, inPopout: l, handleClose: s, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(k, { channel: t, guild: n, width: a, inPopout: l, handleClose: s, userParticipantCount: r })
          : (0, i.jsx)(V, { channel: t, guild: n, width: a, inPopout: l, activitiesEnabled: o });
}
function U(e) {
    let { channel: t, inPopout: n, handleClose: a } = e,
        { analyticsLocations: l, newestAnalyticsLocation: r } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(I.f5, {
        value: l,
        children: (0, i.jsxs)(P.A, {
            className: L.zr,
            children: [
                (0, i.jsx)(c.m, {
                    asContainer: !0,
                    text: w.intl.string(w.t.qJvTKQ),
                    children: (0, i.jsx)(d.D, {
                        onClick: () => {
                            (0, j.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: r,
                            });
                        },
                        className: L.F1,
                        children: (0, i.jsx)("div", {
                            className: L.zc,
                            children: (0, i.jsx)(u.k, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                        }),
                    }),
                }),
                (0, i.jsx)(p.N, {
                    theme: O.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(d.D, {
                            onClick: a,
                            className: s()(e, L.lg),
                            children: (0, i.jsx)(h.a, {
                                size: "md",
                                color: "currentColor",
                                className: L.yP,
                                secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function V(e) {
    let { channel: t, guild: l, inPopout: r, activitiesEnabled: o = !0 } = e;
    a.useEffect(() => {
        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: c, newestAnalyticsLocation: d } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_INVITE);
    function h() {
        (0, _.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("76530")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(e, { ...n, guild: l, channel: t, source: O.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: r ? m.KX : m.SY },
        );
    }
    function g() {
        (0, j.A)({
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
                    className: s()(L.zr, L.co, e),
                    children: [
                        (0, i.jsx)("img", { src: D, className: L.Qw, alt: "" }),
                        (0, i.jsxs)(A.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(x.$, {
                                    variant: "secondary",
                                    icon: f.R,
                                    text: w.intl.string(w.t["EE+P0H"]),
                                    onClick: h,
                                }),
                                o &&
                                    (0, i.jsx)(x.$, {
                                        variant: "secondary",
                                        icon: u.k,
                                        text: w.intl.string(w.t.qnFavR),
                                        onClick: g,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function k(e) {
    let { channel: t, guild: n, handleClose: l, width: o, userParticipantCount: c } = e;
    (0, y.Ay)(() => {
        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let u = (0, v.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: p } = (0, I.Ay)(N.A.VC_TILE_ACTIVITY_SUGGESTION),
        h = a.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(I.f5, {
        value: p,
        children: (0, i.jsxs)(P.A, {
            className: L.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(g.E, {
                          className: L.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: w.intl.string(w.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: s()(L.Di, { [L.qy]: o <= 300 }),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            E.C,
                            {
                                context: h,
                                activityItem: e,
                                aspectRatio: E.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: L.KU,
                                commandOrigin: T.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(d.D, {
                    className: L.HI,
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
                        (0, i.jsx)(g.E, { variant: "text-sm/medium", children: w.intl.string(w.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    className: L.cG,
                    onClick: function () {
                        R.default.track(O.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: c,
                        }),
                            l();
                    },
                    children: (0, i.jsx)(C.P, { size: "md", color: "currentColor", className: L.b }),
                }),
            ],
        }),
    });
}
