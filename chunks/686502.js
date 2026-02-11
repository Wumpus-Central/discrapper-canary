n.d(t, { y: () => T });
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
    m = n(793574),
    p = n(688810),
    g = n(975412),
    _ = n(392054),
    f = n(826673),
    x = n(757293),
    C = n(954571),
    E = n(272812),
    I = n(652215),
    b = n(985018),
    N = n(556614),
    S = n(867010);
function T(e) {
    let { channel: t, guild: n, width: l, inPopout: s, handleClose: a, userParticipantCount: r } = e;
    return l < 250
        ? (0, i.jsx)(v, { channel: t, guild: n, width: l, inPopout: s, handleClose: a, userParticipantCount: r })
        : r > 1
          ? (0, i.jsx)(j, { channel: t, guild: n, width: l, inPopout: s, handleClose: a, userParticipantCount: r })
          : (0, i.jsx)(y, { channel: t, guild: n, width: l, inPopout: s });
}
function v(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: r } = (0, p.Ay)(m.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(p.f5, {
        value: s,
        children: (0, i.jsxs)(E.A, {
            className: N.zr,
            children: [
                (0, i.jsx)(d.m, {
                    asContainer: !0,
                    text: b.intl.string(b.t.qJvTKQ),
                    children: (0, i.jsx)(c.DUT, {
                        onClick: () => {
                            (0, g.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: r,
                            });
                        },
                        className: N.F1,
                        children: (0, i.jsx)("div", {
                            className: N.zc,
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
                    theme: I.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(c.DUT, {
                            onClick: l,
                            className: a()(e, N.lg),
                            children: (0, i.jsx)(c.aXh, {
                                size: "md",
                                color: "currentColor",
                                className: N.yP,
                                secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function y(e) {
    let { channel: t, guild: s, inPopout: r } = e;
    l.useEffect(() => {
        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: o, newestAnalyticsLocation: d } = (0, p.Ay)(m.A.VC_TILE_ACTIVITY_INVITE);
    function u() {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("97710")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(e, { ...n, guild: s, channel: t, source: I.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: r ? c.KX8 : c.SYi },
        );
    }
    function h() {
        (0, g.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: r,
            analyticsLocation: d,
        });
    }
    return (0, i.jsx)(p.f5, {
        value: o,
        children: (0, i.jsx)(c.NPJ, {
            disableAdaptiveTheme: !0,
            theme: I.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(E.A, {
                    className: a()(N.zr, N.co, e),
                    children: [
                        (0, i.jsx)("img", { src: S, className: N.Qw, alt: "" }),
                        (0, i.jsxs)(c.ButtonGroup, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    icon: c.Rvf,
                                    text: b.intl.string(b.t["EE+P0H"]),
                                    onClick: u,
                                }),
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    icon: c.k9F,
                                    text: b.intl.string(b.t.qnFavR),
                                    onClick: h,
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function j(e) {
    let { channel: t, guild: n, handleClose: s, width: o, userParticipantCount: d } = e;
    (0, u.Ay)(() => {
        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: d,
        });
    });
    let g = (0, h.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: S } = (0, p.Ay)(m.A.VC_TILE_ACTIVITY_SUGGESTION),
        T = l.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(p.f5, {
        value: S,
        children: (0, i.jsxs)(E.A, {
            className: N.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(c.Text, {
                          className: N.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: b.intl.string(b.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: a()(N.Di, { [N.qy]: o <= 300 }),
                    children: g.map((e) =>
                        (0, i.jsx)(
                            A.C,
                            {
                                context: T,
                                activityItem: e,
                                aspectRatio: A.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: N.KU,
                                commandOrigin: _.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(c.DUT, {
                    className: N.HI,
                    onClick: function () {
                        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: d,
                        }),
                            (0, f.Dr)(r.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(x.A, {}),
                        (0, i.jsx)(c.Text, { variant: "text-sm/medium", children: b.intl.string(b.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(c.DUT, {
                    className: N.cG,
                    onClick: function () {
                        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: d,
                        }),
                            s();
                    },
                    children: (0, i.jsx)(c.PGe, { size: "md", color: "currentColor", className: N.b }),
                }),
            ],
        }),
    });
}
