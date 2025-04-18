n.d(t, { Z: () => k }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    a = n(780384),
    o = n(481060),
    s = n(906732),
    c = n(243778),
    u = n(26323),
    d = n(433280),
    p = n(34131),
    h = n(434404),
    f = n(978946),
    g = n(567458),
    m = n(782959),
    b = n(933104),
    _ = n(276645),
    E = n(970731),
    O = n(626135),
    N = n(267642),
    y = n(337721),
    I = n(981631),
    v = n(921944),
    C = n(30513),
    S = n(474936),
    T = n(388032),
    P = n(807039),
    j = n(685155),
    A = n(741160),
    Z = n(829972),
    x = n(31932),
    L = n(642301);
function w(e) {
    null != e && h.Z.open(e.id, (0, f.r)(e.id), { section: I.jXE.PREMIUM_GUILD_PROGRESS_BAR }, I.KsC.DISPLAY);
}
function R(e, t) {
    null != t &&
        ((0, N.f2)(t, I.Eu4.TIER_1)
            ? h.Z.open(t.id, (0, f.r)(t.id), { section: I.jXE.PREMIUM_GUILD_INVITE_SPLASH }, I.KsC.INVITE)
            : (0, u.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: I.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, C.o9)()
              }));
}
function D(e) {
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
let k = i.memo(function (e) {
    let { contentTypes: t, theme: n, guild: i, renderGuildHeaderDropdownButton: o } = e,
        { analyticsLocations: u } = (0, s.ZP)(),
        f = () => {
            O.default.track(I.rMx.TOOLTIP_VIEWED, {
                type: S.cd.PREMIUM_PROGRESS_BAR,
                location: { page: I.ZY5.GUILD_CHANNEL }
            });
        },
        C = () => {
            O.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.cd.INVITE_SPLASH_UPSELL,
                location: { page: I.ZY5.GUILD_CHANNEL },
                location_stack: u
            });
        },
        k = (0, a.wj)(n) ? Z : x,
        [M, U] = (0, c.US)(t, v.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (M) {
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(b.$h, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(_.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(E.ZP, {
                            onComponentMount: f,
                            header: T.NW.string(T.t.nxtaFx),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: k,
                                className: j.fullWidthImage
                            }),
                            content: T.NW.format(T.t.ujItEh, {}),
                            buttonCTA: T.NW.string(T.t.UzVPra),
                            secondaryButtonCTA: T.NW.string(T.t['KkK/aG']),
                            onSecondaryClick: () => w(),
                            onClick: () => w(i),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(E.ZP, {
                            onComponentMount: f,
                            header: T.NW.string(T.t.KAsfPT),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: k,
                                className: j.fullWidthImage
                            }),
                            content: T.NW.format(T.t.zK1hpq, {}),
                            buttonCTA: T.NW.string(T.t.UzVPra),
                            secondaryButtonCTA: T.NW.string(T.t['KkK/aG']),
                            onSecondaryClick: () => w(),
                            onClick: () => w(i),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(d.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(y.Z, {
                            guild: i,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, N.f2)(i, I.Eu4.TIER_1) ? T.NW.format(T.t.DDzEVl, {}) : T.NW.formatToPlainString(T.t.pMftkJ, { boostCount: (0, N.KK)(i, I.Eu4.TIER_1) }),
                        t = (0, N.f2)(i, I.Eu4.TIER_1) ? T.NW.string(T.t.rOFcBg) : T.NW.string(T.t.hvVgAQ);
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(E.ZP, {
                            onComponentMount: C,
                            header: T.NW.string(T.t['36wK8/']),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: A,
                                className: j.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: T.NW.string(T.t.hBIHLS),
                            onSecondaryClick: () => R(u),
                            onClick: () => R(u, i),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(g.Z, { markAsDismissed: U }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(E.ZP, {
                            className: P.tooltipOverrideColor,
                            header: T.NW.string(T.t.hLUL3t),
                            content: T.NW.string(T.t.ahWaPT),
                            buttonCTA: T.NW.string(T.t['NX+WJC']),
                            onClick: () => U(v.L.UNKNOWN),
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(E.ZP, {
                            header: T.NW.string(T.t.PZNQKC),
                            content: T.NW.string(T.t.jQIyyM),
                            buttonCTA: T.NW.string(T.t.RzWDqa),
                            secondaryButtonCTA: T.NW.string(T.t.f3Pet7),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: L,
                                className: j.fullWidthImage
                            }),
                            onClick: () => {
                                h.Z.open(i.id, I.pNK.ROLES), h.Z.selectRole(i.getEveryoneRoleId(), T.NW.string(T.t.Bco7ND));
                            },
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(D, {
                        renderPopout: (0, r.jsx)(m.Z, {
                            guildId: i.id,
                            markAsDismissed: U
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(D, {
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
