n.d(t, { Z: () => D }), n(47120);
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
    b = n(276645),
    _ = n(970731),
    E = n(626135),
    O = n(267642),
    N = n(337721),
    y = n(981631),
    I = n(921944),
    v = n(30513),
    C = n(474936),
    S = n(388032),
    T = n(540835),
    P = n(519254),
    j = n(741160),
    A = n(829972),
    Z = n(31932),
    x = n(642301);
function L(e) {
    null != e && h.Z.open(e.id, (0, f.r)(e.id), { section: y.jXE.PREMIUM_GUILD_PROGRESS_BAR }, y.KsC.DISPLAY);
}
function w(e, t) {
    null != t &&
        ((0, O.f2)(t, y.Eu4.TIER_1)
            ? h.Z.open(t.id, (0, f.r)(t.id), { section: y.jXE.PREMIUM_GUILD_INVITE_SPLASH }, y.KsC.INVITE)
            : (0, u.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: y.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, v.o9)()
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
        f = () => {
            E.default.track(y.rMx.TOOLTIP_VIEWED, {
                type: C.cd.PREMIUM_PROGRESS_BAR,
                location: { page: y.ZY5.GUILD_CHANNEL }
            });
        },
        v = () => {
            E.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.INVITE_SPLASH_UPSELL,
                location: { page: y.ZY5.GUILD_CHANNEL },
                location_stack: u
            });
        },
        D = (0, a.wj)(n) ? A : Z,
        [k, M] = (0, c.US)(t, I.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (k) {
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(b.Z, {
                            guildId: i.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: f,
                            header: S.NW.string(S.t.nxtaFx),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: D,
                                className: P.fullWidthImage
                            }),
                            content: S.NW.format(S.t.ujItEh, {}),
                            buttonCTA: S.NW.string(S.t.UzVPra),
                            secondaryButtonCTA: S.NW.string(S.t['KkK/aG']),
                            onSecondaryClick: () => L(),
                            onClick: () => L(i),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: f,
                            header: S.NW.string(S.t.KAsfPT),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: D,
                                className: P.fullWidthImage
                            }),
                            content: S.NW.format(S.t.zK1hpq, {}),
                            buttonCTA: S.NW.string(S.t.UzVPra),
                            secondaryButtonCTA: S.NW.string(S.t['KkK/aG']),
                            onSecondaryClick: () => L(),
                            onClick: () => L(i),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(d.Z, {
                            guildId: i.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(N.Z, {
                            guild: i,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, O.f2)(i, y.Eu4.TIER_1) ? S.NW.format(S.t.DDzEVl, {}) : S.NW.formatToPlainString(S.t.pMftkJ, { boostCount: (0, O.KK)(i, y.Eu4.TIER_1) }),
                        t = (0, O.f2)(i, y.Eu4.TIER_1) ? S.NW.string(S.t.rOFcBg) : S.NW.string(S.t.hvVgAQ);
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: v,
                            header: S.NW.string(S.t['36wK8/']),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: j,
                                className: P.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: S.NW.string(S.t.hBIHLS),
                            onSecondaryClick: () => w(u),
                            onClick: () => w(u, i),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(g.Z, { markAsDismissed: M }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            className: T.tooltipOverrideColor,
                            header: S.NW.string(S.t.hLUL3t),
                            content: S.NW.string(S.t.ahWaPT),
                            buttonCTA: S.NW.string(S.t['NX+WJC']),
                            onClick: () => M(I.L.UNKNOWN),
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            header: S.NW.string(S.t.PZNQKC),
                            content: S.NW.string(S.t.jQIyyM),
                            buttonCTA: S.NW.string(S.t.RzWDqa),
                            secondaryButtonCTA: S.NW.string(S.t.f3Pet7),
                            asset: (0, r.jsx)('img', {
                                alt: '',
                                src: x,
                                className: P.fullWidthImage
                            }),
                            onClick: () => {
                                h.Z.open(i.id, y.pNK.ROLES), h.Z.selectRole(i.getEveryoneRoleId(), S.NW.string(S.t.Bco7ND));
                            },
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(m.Z, {
                            guildId: i.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(R, {
                        renderPopout: (0, r.jsx)(p.Z, {
                            guildId: i.id,
                            markAsDismissed: M
                        }),
                        renderGuildHeaderDropdownButton: o
                    });
                default:
                    return o();
            }
        })()
    });
});
