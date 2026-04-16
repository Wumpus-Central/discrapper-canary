n.d(t, { y: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(554146),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(964486),
    h = n(887700),
    A = n(855446),
    _ = n(793574),
    m = n(688810),
    p = n(975412),
    g = n(392054),
    f = n(826673),
    E = n(757293),
    x = n(954571),
    I = n(272812),
    C = n(652215),
    N = n(985018),
    T = n(17795),
    S = n(867010);
function b(e) {
    let {
        channel: t,
        guild: n,
        width: l,
        inPopout: s,
        handleClose: a,
        userParticipantCount: r,
        activitiesEnabled: o = !0,
    } = e;
    return l < 250
        ? (0, i.jsx)(y, { channel: t, guild: n, width: l, inPopout: s, handleClose: a, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(R, { channel: t, guild: n, width: l, inPopout: s, handleClose: a, userParticipantCount: r })
          : (0, i.jsx)(v, { channel: t, guild: n, width: l, inPopout: s, activitiesEnabled: o });
}
function y(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, m.Ay)(_.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(m.f5, {
        value: s,
        children: (0, i.jsxs)(I.A, {
            className: T.zr,
            children: [
                (0, i.jsx)(d.m, {
                    asContainer: !0,
                    text: N.intl.string(N.t.qJvTKQ),
                    children: (0, i.jsx)(c.DUT, {
                        onClick: () => {
                            (0, p.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: r,
                            });
                        },
                        className: T.F1,
                        children: (0, i.jsx)("div", {
                            className: T.zc,
                            children: (0, i.jsx)(c.k9F, {
                                size: "custom",
                                color: "currentColor",
                                width: 40,
                                height: 40,
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(c.NPJ, {
                    theme: C.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(c.DUT, {
                            onClick: l,
                            className: a()(e, T.lg),
                            children: (0, i.jsx)(c.aXh, {
                                size: "md",
                                color: "currentColor",
                                className: T.yP,
                                secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function v(e) {
    let { channel: t, guild: s, inPopout: r, activitiesEnabled: o = !0 } = e;
    l.useEffect(() => {
        x.default.track(C.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: d, newestAnalyticsLocation: u } = (0, m.Ay)(_.A.VC_TILE_ACTIVITY_INVITE);
    function h() {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42738")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(e, { ...n, guild: s, channel: t, source: C.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: r ? c.KX8 : c.SYi },
        );
    }
    function A() {
        (0, p.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: r,
            analyticsLocation: u,
        });
    }
    return (0, i.jsx)(m.f5, {
        value: d,
        children: (0, i.jsx)(c.NPJ, {
            disableAdaptiveTheme: !0,
            theme: C.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(I.A, {
                    className: a()(T.zr, T.co, e),
                    children: [
                        (0, i.jsx)("img", { src: S, className: T.Qw, alt: "" }),
                        (0, i.jsxs)(c.ButtonGroup, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    icon: c.Rvf,
                                    text: N.intl.string(N.t["EE+P0H"]),
                                    onClick: h,
                                }),
                                o &&
                                    (0, i.jsx)(c.Button, {
                                        variant: "secondary",
                                        icon: c.k9F,
                                        text: N.intl.string(N.t.qnFavR),
                                        onClick: A,
                                    }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function R(e) {
    let { channel: t, guild: n, handleClose: s, width: o, userParticipantCount: d } = e;
    (0, u.Ay)(() => {
        x.default.track(C.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: d,
        });
    });
    let p = (0, h.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: S } = (0, m.Ay)(_.A.VC_TILE_ACTIVITY_SUGGESTION),
        b = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(m.f5, {
        value: S,
        children: (0, i.jsxs)(I.A, {
            className: T.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(c.Text, {
                          className: T.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: N.intl.string(N.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: a()(T.Di, { [T.qy]: o <= 300 }),
                    children: p.map((e) =>
                        (0, i.jsx)(
                            A.C,
                            {
                                context: b,
                                activityItem: e,
                                aspectRatio: A.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: T.KU,
                                commandOrigin: g.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(c.DUT, {
                    className: T.HI,
                    onClick: function () {
                        x.default.track(C.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: d,
                        }),
                            (0, f.Dr)(r.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(E.A, {}),
                        (0, i.jsx)(c.Text, { variant: "text-sm/medium", children: N.intl.string(N.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(c.DUT, {
                    className: T.cG,
                    onClick: function () {
                        x.default.track(C.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: d,
                        }),
                            s();
                    },
                    children: (0, i.jsx)(c.PGe, { size: "md", color: "currentColor", className: T.b }),
                }),
            ],
        }),
    });
}
