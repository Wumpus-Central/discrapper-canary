n(47120);
var i = n(200651),
    r = n(192379),
    l = n(704215),
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
    f = n(276645),
    _ = n(970731),
    E = n(626135),
    I = n(267642),
    C = n(337721),
    N = n(981631),
    v = n(921944),
    S = n(30513),
    T = n(474936),
    A = n(388032),
    b = n(325382),
    Z = n(44669),
    x = n(741160),
    L = n(829972),
    P = n(31932),
    O = n(642301);
function y(e) {
    if (null != e) m.Z.open(e.id, N.pNK.OVERVIEW, { section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR }, N.KsC.DISPLAY);
}
function R(e, t) {
    if (null != t)
        (0, I.f2)(t, N.Eu4.TIER_1)
            ? m.Z.open(t.id, N.pNK.OVERVIEW, { section: N.jXE.PREMIUM_GUILD_INVITE_SPLASH }, N.KsC.INVITE)
            : (0, d.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: N.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, S.o9)()
              });
}
function j(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e;
    return (0, i.jsx)(s.Popout, {
        renderPopout: () =>
            (0, i.jsx)('div', {
                onClick: (e) => e.stopPropagation(),
                children: t
            }),
        position: 'bottom',
        align: 'center',
        animation: s.Popout.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => n()
    });
}
t.Z = r.memo(function (e) {
    let { contentTypes: t, theme: n, guild: r, renderGuildHeaderDropdownButton: s } = e,
        { analyticsLocations: d } = (0, o.ZP)(),
        S = () => {
            E.default.track(N.rMx.TOOLTIP_VIEWED, {
                type: T.cd.PREMIUM_PROGRESS_BAR,
                location: { page: N.ZY5.GUILD_CHANNEL }
            });
        },
        D = () => {
            E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.INVITE_SPLASH_UPSELL,
                location: { page: N.ZY5.GUILD_CHANNEL },
                location_stack: d
            });
        },
        M = (0, a.wj)(n) ? L : P,
        [w, k] = (0, c.US)(t, v.R.GUILD_HEADER_TOOLTIPS);
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (w) {
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.ZP, {
                            onComponentMount: S,
                            header: A.intl.string(A.t.nxtaFx),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: M,
                                className: Z.fullWidthImage
                            }),
                            content: A.intl.format(A.t.ujItEh, {}),
                            buttonCTA: A.intl.string(A.t.UzVPra),
                            secondaryButtonCTA: A.intl.string(A.t['KkK/aG']),
                            onSecondaryClick: () => y(),
                            onClick: () => y(r),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.ZP, {
                            onComponentMount: S,
                            header: A.intl.string(A.t.KAsfPT),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: M,
                                className: Z.fullWidthImage
                            }),
                            content: A.intl.format(A.t.zK1hpq, {}),
                            buttonCTA: A.intl.string(A.t.UzVPra),
                            secondaryButtonCTA: A.intl.string(A.t['KkK/aG']),
                            onSecondaryClick: () => y(),
                            onClick: () => y(r),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(u.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(C.Z, {
                            guild: r,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, I.f2)(r, N.Eu4.TIER_1) ? A.intl.format(A.t.DDzEVl, {}) : A.intl.formatToPlainString(A.t.pMftkJ, { boostCount: (0, I.KK)(r, N.Eu4.TIER_1) }),
                        t = (0, I.f2)(r, N.Eu4.TIER_1) ? A.intl.string(A.t.rOFcBg) : A.intl.string(A.t.hvVgAQ);
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.ZP, {
                            onComponentMount: D,
                            header: A.intl.string(A.t['36wK8/']),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: x,
                                className: Z.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: A.intl.string(A.t.hBIHLS),
                            onSecondaryClick: () => R(d),
                            onClick: () => R(d, r),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(p.Z, { markAsDismissed: k }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.ZP, {
                            className: b.tooltipOverrideColor,
                            header: A.intl.string(A.t.hLUL3t),
                            content: A.intl.string(A.t.ahWaPT),
                            buttonCTA: A.intl.string(A.t['NX+WJC']),
                            onClick: () => k(v.L.UNKNOWN),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.ZP, {
                            header: A.intl.string(A.t.PZNQKC),
                            content: A.intl.string(A.t.jQIyyM),
                            buttonCTA: A.intl.string(A.t.RzWDqa),
                            secondaryButtonCTA: A.intl.string(A.t.f3Pet7),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: O,
                                className: Z.fullWidthImage
                            }),
                            onClick: () => {
                                m.Z.open(r.id, N.pNK.ROLES), m.Z.selectRole(r.getEveryoneRoleId(), A.intl.string(A.t.Bco7ND));
                            },
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(g.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(h.Z, {
                            guildId: r.id,
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
