(n.d(t, { Z: () => M }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(780384),
    o = n(481060),
    s = n(906732),
    c = n(243778),
    u = n(26323),
    d = n(433280),
    p = n(34131),
    h = n(434404),
    f = n(567458),
    g = n(782959),
    m = n(538445),
    b = n(933104),
    _ = n(276645),
    O = n(970731),
    E = n(601964),
    y = n(626135),
    v = n(267642),
    I = n(337721),
    C = n(981631),
    S = n(921944),
    N = n(30513),
    T = n(474936),
    P = n(388032),
    j = n(540835),
    A = n(519254),
    Z = n(741160),
    x = n(829972),
    w = n(31932),
    L = n(642301);
function R(e) {
    null != e && h.Z.open(e.id, C.pNK.BOOST_PERKS, { section: C.jXE.PREMIUM_GUILD_PROGRESS_BAR });
}
function D(e, t) {
    null != t &&
        ((0, v.f2)(t, C.Eu4.TIER_1)
            ? h.Z.open(t.id, C.pNK.BOOST_PERKS, { section: C.jXE.PREMIUM_GUILD_INVITE_SPLASH })
            : (0, u.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: C.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, N.o9)()
              }));
}
function k(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: l,
        renderPopout: () =>
            (0, r.jsx)('div', {
                onClick: (e) => e.stopPropagation(),
                children: t
            }),
        position: 'bottom',
        align: 'center',
        animation: o.yRy.Animation.TRANSLATE,
        shouldShow: !0,
        children: () =>
            (0, r.jsx)('div', {
                ref: l,
                children: n()
            })
    });
}
let M = i.memo(function (e) {
    let { contentTypes: t, theme: n, guild: i, renderGuildHeaderDropdownButton: o } = e,
        { analyticsLocations: u } = (0, s.ZP)(),
        N = () => {
            y.default.track(C.rMx.TOOLTIP_VIEWED, {
                type: T.cd.PREMIUM_PROGRESS_BAR,
                location: { page: C.ZY5.GUILD_CHANNEL }
            });
        },
        M = () => {
            y.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.INVITE_SPLASH_UPSELL,
                location: { page: C.ZY5.GUILD_CHANNEL },
                location_stack: u
            });
        },
        U = (0, a.wj)(n) ? x : w,
        [G, V] = (0, c.US)(t, S.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (G) {
                case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(m.Z, {
                            guild: i,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(b.$h, {
                            guildId: i.id,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(_.Z, {
                            guildId: i.id,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            onComponentMount: N,
                            header: P.intl.string(P.t.nxtaFx),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: U,
                                className: A.fullWidthImage
                            }),
                            content: P.intl.format(P.t.ujItEh, {}),
                            buttonCTA: P.intl.string(P.t.UzVPra),
                            secondaryButtonCTA: P.intl.string(P.t['KkK/aG']),
                            onSecondaryClick: () => R(),
                            onClick: () => R(i),
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            onComponentMount: N,
                            header: P.intl.string(P.t.KAsfPT),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: U,
                                className: A.fullWidthImage
                            }),
                            content: P.intl.format(P.t.zK1hpq, {}),
                            buttonCTA: P.intl.string(P.t.UzVPra),
                            secondaryButtonCTA: P.intl.string(P.t['KkK/aG']),
                            onSecondaryClick: () => R(),
                            onClick: () => R(i),
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(d.Z, {
                            guildId: i.id,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(I.Z, {
                            guild: i,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, v.f2)(i, C.Eu4.TIER_1) ? P.intl.format(P.t.DDzEVl, {}) : P.intl.formatToPlainString(P.t.pMftkJ, { boostCount: (0, v.KK)(i, C.Eu4.TIER_1) }),
                        t = (0, v.f2)(i, C.Eu4.TIER_1) ? P.intl.string(P.t.rOFcBg) : P.intl.string(P.t.hvVgAQ);
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            onComponentMount: M,
                            header: P.intl.string(P.t['36wK8/']),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: A.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: P.intl.string(P.t.hBIHLS),
                            onSecondaryClick: () => D(u),
                            onClick: () => D(u, i),
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(f.Z, { markAsDismissed: V }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            className: j.tooltipOverrideColor,
                            header: P.intl.string(P.t.hLUL3t),
                            content: P.intl.string(P.t.ahWaPT),
                            buttonCTA: P.intl.string(P.t['NX+WJC']),
                            onClick: () => V(S.L.UNKNOWN),
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(O.ZP, {
                            header: P.intl.string(P.t.PZNQKC),
                            content: P.intl.string(P.t.jQIyyM),
                            buttonCTA: P.intl.string(P.t.RzWDqa),
                            secondaryButtonCTA: P.intl.string(P.t.f3Pet7),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: L,
                                className: A.fullWidthImage
                            }),
                            onClick: () => {
                                (h.Z.open(i.id, C.pNK.ROLES), h.Z.selectRole((0, E.lV)(i), P.intl.string(P.t.Bco7ND)));
                            },
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(g.Z, {
                            guildId: i.id,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(k, {
                        renderPopout: (0, r.jsx)(p.Z, {
                            guildId: i.id,
                            markAsDismissed: V
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                default:
                    return o();
            }
        })()
    });
});
