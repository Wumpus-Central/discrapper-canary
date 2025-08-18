n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    a = n(780384),
    o = n(481060),
    s = n(906732),
    c = n(243778),
    u = n(26323),
    d = n(433280),
    p = n(34131),
    f = n(434404),
    h = n(567458),
    g = n(782959),
    m = n(538445),
    b = n(933104),
    _ = n(355251),
    O = n(970731),
    E = n(626135),
    y = n(267642),
    v = n(337721),
    I = n(981631),
    C = n(921944),
    S = n(30513),
    N = n(474936),
    T = n(388032),
    P = n(706371),
    j = n(741160),
    x = n(829972),
    A = n(31932);
function Z(e) {
    null != e && f.Z.open(e.id, I.pNK.BOOST_PERKS, { section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR });
}
function w(e, t) {
    null != t &&
        ((0, y.f2)(t, I.Eu4.TIER_1)
            ? f.Z.open(t.id, I.pNK.BOOST_PERKS, { section: I.jXE.PREMIUM_GUILD_INVITE_SPLASH })
            : (0, u.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: I.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, S.o9)(),
              }));
}
function L(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: l,
        renderPopout: () =>
            (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(l) : t,
            }),
        position: "bottom",
        align: "center",
        animation: o.yRy.Animation.TRANSLATE,
        shouldShow: !0,
        children: () =>
            (0, r.jsx)("div", {
                ref: l,
                children: n(),
            }),
    });
}
let R = i.memo(function (e) {
    let { contentTypes: t, theme: n, guild: i, renderGuildHeaderDropdownButton: o } = e,
        { analyticsLocations: u } = (0, s.ZP)(),
        f = () => {
            E.default.track(I.rMx.TOOLTIP_VIEWED, {
                type: N.cd.PREMIUM_PROGRESS_BAR,
                location: { page: I.ZY5.GUILD_CHANNEL },
            });
        },
        S = () => {
            E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.INVITE_SPLASH_UPSELL,
                location: { page: I.ZY5.GUILD_CHANNEL },
                location_stack: u,
            });
        },
        R = (0, a.wj)(n) ? x : A,
        [D, k] = (0, c.US)(t, C.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (D) {
                case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(m.Z, {
                            guild: i,
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(b.$h, {
                            guildId: i.id,
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(L, {
                        renderPopout: (e) =>
                            (0, r.jsx)(_.Z, {
                                guildId: i.id,
                                markAsDismissed: k,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            onComponentMount: f,
                            header: T.intl.string(T.t.KAsfPT),
                            asset: (0, r.jsx)("img", {
                                alt: "",
                                src: R,
                                className: P.fullWidthImage,
                            }),
                            content: T.intl.format(T.t.zK1hpq, {}),
                            buttonCTA: T.intl.string(T.t.UzVPra),
                            secondaryButtonCTA: T.intl.string(T.t["KkK/aG"]),
                            onSecondaryClick: () => Z(),
                            onClick: () => Z(i),
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(d.Z, {
                            guildId: i.id,
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(v.Z, {
                            guild: i,
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, y.f2)(i, I.Eu4.TIER_1)
                            ? T.intl.format(T.t.DDzEVl, {})
                            : T.intl.formatToPlainString(T.t.pMftkJ, { boostCount: (0, y.KK)(i, I.Eu4.TIER_1) }),
                        t = (0, y.f2)(i, I.Eu4.TIER_1) ? T.intl.string(T.t.rOFcBg) : T.intl.string(T.t.hvVgAQ);
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            onComponentMount: S,
                            header: T.intl.string(T.t["36wK8/"]),
                            asset: (0, r.jsx)("img", {
                                alt: "",
                                src: j,
                                className: P.fullWidthImage,
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: T.intl.string(T.t.hBIHLS),
                            onSecondaryClick: () => w(u),
                            onClick: () => w(u, i),
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(h.Z, { markAsDismissed: k }),
                        renderGuildHeaderDropdownButton: o,
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(g.Z, {
                        guildId: i.id,
                        markAsDismissed: k,
                        renderTargetElement: o,
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(L, {
                        renderPopout: (0, r.jsx)(p.Z, {
                            guildId: i.id,
                            markAsDismissed: k,
                        }),
                        renderGuildHeaderDropdownButton: o,
                    });
                default:
                    return o();
            }
        })(),
    });
});
