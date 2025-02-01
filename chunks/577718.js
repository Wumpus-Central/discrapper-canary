n.d(t, { Z: () => D }), n(47120);
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
    p = n(567458),
    g = n(782959),
    _ = n(276645),
    f = n(970731),
    E = n(626135),
    I = n(267642),
    C = n(337721),
    v = n(981631),
    N = n(921944),
    T = n(30513),
    S = n(474936),
    Z = n(388032),
    x = n(325382),
    A = n(44669),
    b = n(741160),
    L = n(829972),
    y = n(31932),
    P = n(642301);
function O(e) {
    null != e && m.Z.open(e.id, v.pNK.OVERVIEW, { section: v.jXE.PREMIUM_GUILD_PROGRESS_BAR }, v.KsC.DISPLAY);
}
function R(e, t) {
    null != t &&
        ((0, I.f2)(t, v.Eu4.TIER_1)
            ? m.Z.open(t.id, v.pNK.OVERVIEW, { section: v.jXE.PREMIUM_GUILD_INVITE_SPLASH }, v.KsC.INVITE)
            : (0, d.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: v.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, T.o9)()
              }));
}
function j(e) {
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
let D = l.memo(function (e) {
    let { contentTypes: t, theme: n, guild: l, renderGuildHeaderDropdownButton: s } = e,
        { analyticsLocations: d } = (0, o.ZP)(),
        T = () => {
            E.default.track(v.rMx.TOOLTIP_VIEWED, {
                type: S.cd.PREMIUM_PROGRESS_BAR,
                location: { page: v.ZY5.GUILD_CHANNEL }
            });
        },
        D = () => {
            E.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.cd.INVITE_SPLASH_UPSELL,
                location: { page: v.ZY5.GUILD_CHANNEL },
                location_stack: d
            });
        },
        w = (0, a.wj)(n) ? L : y,
        [M, k] = (0, c.US)(t, N.R.GUILD_HEADER_TOOLTIPS);
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (M) {
                case r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.Z, {
                            guildId: l.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.ZP, {
                            onComponentMount: T,
                            header: Z.intl.string(Z.t.nxtaFx),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: w,
                                className: A.fullWidthImage
                            }),
                            content: Z.intl.format(Z.t.ujItEh, {}),
                            buttonCTA: Z.intl.string(Z.t.UzVPra),
                            secondaryButtonCTA: Z.intl.string(Z.t['KkK/aG']),
                            onSecondaryClick: () => O(),
                            onClick: () => O(l),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.ZP, {
                            onComponentMount: T,
                            header: Z.intl.string(Z.t.KAsfPT),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: w,
                                className: A.fullWidthImage
                            }),
                            content: Z.intl.format(Z.t.zK1hpq, {}),
                            buttonCTA: Z.intl.string(Z.t.UzVPra),
                            secondaryButtonCTA: Z.intl.string(Z.t['KkK/aG']),
                            onSecondaryClick: () => O(),
                            onClick: () => O(l),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(u.Z, {
                            guildId: l.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(C.Z, {
                            guild: l,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, I.f2)(l, v.Eu4.TIER_1) ? Z.intl.format(Z.t.DDzEVl, {}) : Z.intl.formatToPlainString(Z.t.pMftkJ, { boostCount: (0, I.KK)(l, v.Eu4.TIER_1) }),
                        t = (0, I.f2)(l, v.Eu4.TIER_1) ? Z.intl.string(Z.t.rOFcBg) : Z.intl.string(Z.t.hvVgAQ);
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.ZP, {
                            onComponentMount: D,
                            header: Z.intl.string(Z.t['36wK8/']),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: b,
                                className: A.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: Z.intl.string(Z.t.hBIHLS),
                            onSecondaryClick: () => R(d),
                            onClick: () => R(d, l),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(p.Z, { markAsDismissed: k }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.ZP, {
                            className: x.tooltipOverrideColor,
                            header: Z.intl.string(Z.t.hLUL3t),
                            content: Z.intl.string(Z.t.ahWaPT),
                            buttonCTA: Z.intl.string(Z.t['NX+WJC']),
                            onClick: () => k(N.L.UNKNOWN),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.ZP, {
                            header: Z.intl.string(Z.t.PZNQKC),
                            content: Z.intl.string(Z.t.jQIyyM),
                            buttonCTA: Z.intl.string(Z.t.RzWDqa),
                            secondaryButtonCTA: Z.intl.string(Z.t.f3Pet7),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: P,
                                className: A.fullWidthImage
                            }),
                            onClick: () => {
                                m.Z.open(l.id, v.pNK.ROLES), m.Z.selectRole(l.getEveryoneRoleId(), Z.intl.string(Z.t.Bco7ND));
                            },
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(g.Z, {
                            guildId: l.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case r.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(h.Z, {
                            guildId: l.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                default:
                    return s();
            }
        })()
    });
});
