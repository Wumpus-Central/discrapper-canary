"use strict";
n.d(t, { y: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(554146),
    o = n(827734),
    c = n(990078),
    d = n(397927),
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
    N = n(985018),
    b = n(556614),
    S = n(867010);
function T(e) {
    let { channel: t, guild: n, width: s, inPopout: l, handleClose: r, userParticipantCount: a } = e;
    return s < 250
        ? (0, i.jsx)(v, { channel: t, guild: n, width: s, inPopout: l, handleClose: r, userParticipantCount: a })
        : a > 1
          ? (0, i.jsx)(j, { channel: t, guild: n, width: s, inPopout: l, handleClose: r, userParticipantCount: a })
          : (0, i.jsx)(y, { channel: t, guild: n, width: s, inPopout: l });
}
function v(e) {
    let { channel: t, inPopout: n, handleClose: s } = e,
        { analyticsLocations: l, newestAnalyticsLocation: a } = (0, p.Ay)(m.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, i.jsx)(p.f5, {
        value: l,
        children: (0, i.jsxs)(E.A, {
            className: b.zr,
            children: [
                (0, i.jsx)(c.m, {
                    asContainer: !0,
                    text: N.intl.string(N.t.qJvTKQ),
                    children: (0, i.jsx)(d.DUT, {
                        onClick: () => {
                            (0, g.A)({
                                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                openInPopout: n,
                                analyticsLocation: a,
                            });
                        },
                        className: b.F1,
                        children: (0, i.jsx)("div", {
                            className: b.zc,
                            children: (0, i.jsx)(d.k9F, {
                                size: "custom",
                                color: "currentColor",
                                width: 40,
                                height: 40,
                            }),
                        }),
                    }),
                }),
                (0, i.jsx)(d.NPJ, {
                    theme: I.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(d.DUT, {
                            onClick: s,
                            className: r()(e, b.lg),
                            children: (0, i.jsx)(d.aXh, {
                                size: "md",
                                color: "currentColor",
                                className: b.yP,
                                secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                        }),
                }),
            ],
        }),
    });
}
function y(e) {
    let { channel: t, guild: l, inPopout: a } = e;
    s.useEffect(() => {
        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1,
        });
    }, []);
    let { analyticsLocations: o, newestAnalyticsLocation: c } = (0, p.Ay)(m.A.VC_TILE_ACTIVITY_INVITE);
    function u() {
        (0, d.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("97710")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(e, { ...n, guild: l, channel: t, source: I.PE1.ACTIVITY_ENTRY_POINT_TILE });
            },
            { contextKey: a ? d.KX8 : d.SYi },
        );
    }
    function h() {
        (0, g.A)({
            context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
            openInPopout: a,
            analyticsLocation: c,
        });
    }
    return (0, i.jsx)(p.f5, {
        value: o,
        children: (0, i.jsx)(d.NPJ, {
            disableAdaptiveTheme: !0,
            theme: I.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)(E.A, {
                    className: r()(b.zr, b.co, e),
                    children: [
                        (0, i.jsx)("img", { src: S, className: b.Qw, alt: "" }),
                        (0, i.jsxs)(d.ButtonGroup, {
                            justify: "center",
                            align: "center",
                            children: [
                                (0, i.jsx)(d.Button, {
                                    variant: "secondary",
                                    icon: d.Rvf,
                                    text: N.intl.string(N.t["EE+P0H"]),
                                    onClick: u,
                                }),
                                (0, i.jsx)(d.Button, {
                                    variant: "secondary",
                                    icon: d.k9F,
                                    text: N.intl.string(N.t.qnFavR),
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
    let { channel: t, guild: n, handleClose: l, width: o, userParticipantCount: c } = e;
    (0, u.Ay)(() => {
        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c,
        });
    });
    let g = (0, h.A)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: S } = (0, p.Ay)(m.A.VC_TILE_ACTIVITY_SUGGESTION),
        T = s.useMemo(() => ({ channel: t, type: "channel" }), [t]);
    return (0, i.jsx)(p.f5, {
        value: S,
        children: (0, i.jsxs)(E.A, {
            className: b.zr,
            children: [
                o > 300
                    ? (0, i.jsx)(d.Text, {
                          className: b.R_,
                          variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                          children: N.intl.string(N.t["7BKMcG"]),
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: r()(b.Di, { [b.qy]: o <= 300 }),
                    children: g.map((e) =>
                        (0, i.jsx)(
                            A.C,
                            {
                                context: T,
                                activityItem: e,
                                aspectRatio: A.C.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: b.KU,
                                commandOrigin: _.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS,
                            },
                            e.application.id,
                        ),
                    ),
                }),
                (0, i.jsxs)(d.DUT, {
                    className: b.HI,
                    onClick: function () {
                        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "permanent",
                            n_participants: c,
                        }),
                            (0, f.Dr)(a.M.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(x.A, {}),
                        (0, i.jsx)(d.Text, { variant: "text-sm/medium", children: N.intl.string(N.t["5E9SB9"]) }),
                    ],
                }),
                (0, i.jsx)(d.DUT, {
                    className: b.cG,
                    onClick: function () {
                        C.default.track(I.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: "activity suggestion",
                            close_type: "temporary",
                            n_participants: c,
                        }),
                            l();
                    },
                    children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: b.b }),
                }),
            ],
        }),
    });
}
