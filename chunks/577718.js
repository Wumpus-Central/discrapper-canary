n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(704215),
    a = n(780384),
    s = n(481060),
    o = n(906732),
    c = n(243778),
    d = n(26323),
    u = n(433280),
    h = n(34131),
    m = n(434404),
    p = n(978946),
    g = n(567458),
    _ = n(782959),
    f = n(276645),
    E = n(970731),
    I = n(626135),
    C = n(267642),
    N = n(337721),
    v = n(981631),
    T = n(921944),
    S = n(30513),
    A = n(474936),
    Z = n(388032),
    b = n(255235),
    x = n(987524),
    L = n(741160),
    y = n(829972),
    P = n(31932),
    O = n(642301);
function R(e) {
    null != e && m.Z.open(e.id, (0, p.r)(e.id), { section: v.jXE.PREMIUM_GUILD_PROGRESS_BAR }, v.KsC.DISPLAY);
}
function j(e, t) {
    null != t &&
        ((0, C.f2)(t, v.Eu4.TIER_1)
            ? m.Z.open(t.id, (0, p.r)(t.id), { section: v.jXE.PREMIUM_GUILD_INVITE_SPLASH }, v.KsC.INVITE)
            : (0, d.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: v.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, S.o9)()
              }));
}
function D(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e;
    return (0, i.jsx)(s.yRy, {
        renderPopout: () =>
            (0, i.jsx)('div', {
                onClick: (e) => e.stopPropagation(),
                children: t
            }),
        position: 'bottom',
        align: 'center',
        animation: s.yRy.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => n()
    });
}
let w = l.memo(function (e) {
    let { contentTypes: t, theme: n, guild: l, renderGuildHeaderDropdownButton: s } = e,
        { analyticsLocations: d } = (0, o.ZP)(),
        p = () => {
            I.default.track(v.rMx.TOOLTIP_VIEWED, {
                type: A.cd.PREMIUM_PROGRESS_BAR,
                location: { page: v.ZY5.GUILD_CHANNEL }
            });
        },
        S = () => {
            I.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.INVITE_SPLASH_UPSELL,
                location: { page: v.ZY5.GUILD_CHANNEL },
                location_stack: d
            });
        },
        w = (0, a.wj)(n) ? y : P,
        [k, M] = (0, c.US)(t, T.R.GUILD_HEADER_TOOLTIPS);
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (k) {
                case r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(f.Z, {
                            guildId: l.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(E.ZP, {
                            onComponentMount: p,
                            header: Z.intl.string(Z.t.nxtaFx),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: w,
                                className: x.fullWidthImage
                            }),
                            content: Z.intl.format(Z.t.ujItEh, {}),
                            buttonCTA: Z.intl.string(Z.t.UzVPra),
                            secondaryButtonCTA: Z.intl.string(Z.t['KkK/aG']),
                            onSecondaryClick: () => R(),
                            onClick: () => R(l),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(E.ZP, {
                            onComponentMount: p,
                            header: Z.intl.string(Z.t.KAsfPT),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: w,
                                className: x.fullWidthImage
                            }),
                            content: Z.intl.format(Z.t.zK1hpq, {}),
                            buttonCTA: Z.intl.string(Z.t.UzVPra),
                            secondaryButtonCTA: Z.intl.string(Z.t['KkK/aG']),
                            onSecondaryClick: () => R(),
                            onClick: () => R(l),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(u.Z, {
                            guildId: l.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(N.Z, {
                            guild: l,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, C.f2)(l, v.Eu4.TIER_1) ? Z.intl.format(Z.t.DDzEVl, {}) : Z.intl.formatToPlainString(Z.t.pMftkJ, { boostCount: (0, C.KK)(l, v.Eu4.TIER_1) }),
                        t = (0, C.f2)(l, v.Eu4.TIER_1) ? Z.intl.string(Z.t.rOFcBg) : Z.intl.string(Z.t.hvVgAQ);
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(E.ZP, {
                            onComponentMount: S,
                            header: Z.intl.string(Z.t['36wK8/']),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: L,
                                className: x.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: Z.intl.string(Z.t.hBIHLS),
                            onSecondaryClick: () => j(d),
                            onClick: () => j(d, l),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(g.Z, { markAsDismissed: M }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(E.ZP, {
                            className: b.tooltipOverrideColor,
                            header: Z.intl.string(Z.t.hLUL3t),
                            content: Z.intl.string(Z.t.ahWaPT),
                            buttonCTA: Z.intl.string(Z.t['NX+WJC']),
                            onClick: () => M(T.L.UNKNOWN),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(E.ZP, {
                            header: Z.intl.string(Z.t.PZNQKC),
                            content: Z.intl.string(Z.t.jQIyyM),
                            buttonCTA: Z.intl.string(Z.t.RzWDqa),
                            secondaryButtonCTA: Z.intl.string(Z.t.f3Pet7),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: O,
                                className: x.fullWidthImage
                            }),
                            onClick: () => {
                                m.Z.open(l.id, v.pNK.ROLES), m.Z.selectRole(l.getEveryoneRoleId(), Z.intl.string(Z.t.Bco7ND));
                            },
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(_.Z, {
                            guildId: l.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(D, {
                        renderPopout: (0, i.jsx)(h.Z, {
                            guildId: l.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                default:
                    return s();
            }
        })()
    });
});
