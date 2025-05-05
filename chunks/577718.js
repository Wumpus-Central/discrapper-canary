n.d(t, { Z: () => D }), n(388685);
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
    m = n(933104),
    b = n(276645),
    _ = n(970731),
    E = n(626135),
    O = n(267642),
    y = n(337721),
    I = n(981631),
    v = n(921944),
    C = n(30513),
    S = n(474936),
    N = n(388032),
    T = n(540835),
    P = n(519254),
    j = n(741160),
    A = n(829972),
    Z = n(31932),
    x = n(642301);
function w(e) {
    null != e && h.Z.open(e.id, I.pNK.BOOST_PERKS, { section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR });
}
function L(e, t) {
    null != t &&
        ((0, O.f2)(t, I.Eu4.TIER_1)
            ? h.Z.open(t.id, I.pNK.BOOST_PERKS, { section: I.jXE.PREMIUM_GUILD_INVITE_SPLASH })
            : (0, u.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: I.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, C.o9)()
              }));
}
function R(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e;
    return (0, r.jsx)(o.yRy, {
        renderPopout: () =>
            (0, r.jsx)('div', {
                onClick: (e) => e.stopPropagation(),
                children: t
            }),
        position: 'bottom',
        align: 'center',
        animation: o.yRy.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => n()
    });
}
let D = i.memo(function (e) {
    let { contentTypes: t, theme: n, guild: i, renderGuildHeaderDropdownButton: o } = e,
        { analyticsLocations: u } = (0, s.ZP)(),
        C = () => {
            E.default.track(I.rMx.TOOLTIP_VIEWED, {
                type: S.cd.PREMIUM_PROGRESS_BAR,
                location: { page: I.ZY5.GUILD_CHANNEL }
            });
        },
        D = () => {
            E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.cd.INVITE_SPLASH_UPSELL,
                location: { page: I.ZY5.GUILD_CHANNEL },
                location_stack: u
            });
        },
        k = (0, a.wj)(n) ? A : Z,
        [M, U] = (0, c.US)(t, v.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (M) {
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(m.$h, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(b.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: C,
                            header: N.intl.string(N.t.nxtaFx),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: k,
                                className: P.fullWidthImage
                            }),
                            content: N.intl.format(N.t.ujItEh, {}),
                            buttonCTA: N.intl.string(N.t.UzVPra),
                            secondaryButtonCTA: N.intl.string(N.t['KkK/aG']),
                            onSecondaryClick: () => w(),
                            onClick: () => w(i),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: C,
                            header: N.intl.string(N.t.KAsfPT),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: k,
                                className: P.fullWidthImage
                            }),
                            content: N.intl.format(N.t.zK1hpq, {}),
                            buttonCTA: N.intl.string(N.t.UzVPra),
                            secondaryButtonCTA: N.intl.string(N.t['KkK/aG']),
                            onSecondaryClick: () => w(),
                            onClick: () => w(i),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(d.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(y.Z, {
                            guild: i,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, O.f2)(i, I.Eu4.TIER_1) ? N.intl.format(N.t.DDzEVl, {}) : N.intl.formatToPlainString(N.t.pMftkJ, { boostCount: (0, O.KK)(i, I.Eu4.TIER_1) }),
                        t = (0, O.f2)(i, I.Eu4.TIER_1) ? N.intl.string(N.t.rOFcBg) : N.intl.string(N.t.hvVgAQ);
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: D,
                            header: N.intl.string(N.t['36wK8/']),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: j,
                                className: P.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: N.intl.string(N.t.hBIHLS),
                            onSecondaryClick: () => L(u),
                            onClick: () => L(u, i),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(f.Z, { markAsDismissed: U }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            className: T.tooltipOverrideColor,
                            header: N.intl.string(N.t.hLUL3t),
                            content: N.intl.string(N.t.ahWaPT),
                            buttonCTA: N.intl.string(N.t['NX+WJC']),
                            onClick: () => U(v.L.UNKNOWN),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            header: N.intl.string(N.t.PZNQKC),
                            content: N.intl.string(N.t.jQIyyM),
                            buttonCTA: N.intl.string(N.t.RzWDqa),
                            secondaryButtonCTA: N.intl.string(N.t.f3Pet7),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: x,
                                className: P.fullWidthImage
                            }),
                            onClick: () => {
                                h.Z.open(i.id, I.pNK.ROLES), h.Z.selectRole(i.getEveryoneRoleId(), N.intl.string(N.t.Bco7ND));
                            },
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(g.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(p.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                default:
                    return o();
            }
        })()
    });
});
