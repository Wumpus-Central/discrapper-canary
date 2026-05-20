n.d(t, { y: () => U });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(554146),
    o = n(661531),
    c = n(990078),
    d = n(939249),
    u = n(323384),
    h = n(43990),
    p = n(285796),
    m = n(192308),
    A = n(231723),
    x = n(825484),
    g = n(821609),
    C = n(283973),
    f = n(834730),
    E = n(789645),
    y = n(964486),
    N = n(648027),
    j = n(855446),
    v = n(793574),
    I = n(688810),
    T = n(975412),
    _ = n(392054),
    R = n(826673),
    S = n(757293),
    P = n(174459),
    O = n(272812),
    b = n(652215),
    L = n(375708),
    M = n(17795),
    D = n(867010);
function U(e) {
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
        ? (0, i.jsx)(w, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(B, { channel: t, guild: n, width: l, inPopout: a, handleClose: s, userParticipantCount: r })
          : (0, i.jsx)(V, { channel: t, guild: n, width: l, inPopout: a, activitiesEnabled: o });
}
function w(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: r } = (0, I.Ay)(v.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(I.f5, {
        value: a,
        children: (0, i.jsxs)(O.A, {
            className: M.zr,
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
                        className: M.F1,
                        children: (0, i.jsx)("div", {
                            className: M.zc,
                            children: (0, i.jsx)(u.k, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                        }),
                    }),
                }),
                (0, i.jsx)(h.N, {
                    theme: b.NJ8.DARK,
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
        P.default.track(b.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: c, newestAnalyticsLocation: d } = (0, I.Ay)(v.A.VC_TILE_ACTIVITY_INVITE);
    function p() {
        (0, m.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("44710"),
                    n.e("59957"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
                return (n) => (0, i.jsx)(e, { ...n, guild: a, channel: t, source: b.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: r ? A.KX : A.SY },
        );
    }
    function f() {
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
            theme: b.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(O.A, {
                    className: s()(M.zr, M.co, e),
                    children: [
                        (0, i.jsx)("img", { src: D, className: M.Qw, alt: "" }),
                        (0, i.jsxs)(x.e, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(g.$, {
                                    variant: "secondary",
                                    icon: C.R,
                                    text: L.intl.string(L.t["EE+P0H"]),
                                    onClick: p,
                                }),
                                o &&
                                    (0, i.jsx)(g.$, {
                                        variant: "secondary",
                                        icon: u.k,
                                        text: L.intl.string(L.t.qnFavR),
                                        onClick: f,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function B(e) {
    let { channel: t, guild: n, handleClose: a, width: o, userParticipantCount: c } = e;
    (0, y.Ay)(() => {
        P.default.track(b.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let u = (0, N.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: h } = (0, I.Ay)(v.A.VC_TILE_ACTIVITY_SUGGESTION),
        p = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(I.f5, {
        value: h,
        children: (0, i.jsxs)(O.A, {
            className: M.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(f.E, {
                          className: M.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: L.intl.string(L.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: s()(M.Di, { [M.qy]: o <= 300 }),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            j.C,
                            {
                                context: p,
                                activityItem: e,
                                aspectRatio: j.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: M.KU,
                                commandOrigin: _.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(d.D, {
                    className: M.HI,
                    onClick: function () {
                        P.default.track(b.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, R.Dr)(r.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(S.A, {}),
                        (0, i.jsx)(f.E, { variant: "text-sm/medium", children: L.intl.string(L.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    className: M.cG,
                    onClick: function () {
                        P.default.track(b.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: c,
                        }),
                            a();
                    },
                    children: (0, i.jsx)(E.P, { size: "md", color: "currentColor", className: M.b }),
                }),
            ],
        }),
    });
}
