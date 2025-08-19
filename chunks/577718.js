n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    a = n(481060),
    o = n(906732),
    s = n(243778),
    c = n(26323),
    u = n(433280),
    d = n(34131),
    p = n(434404),
    f = n(567458),
    h = n(782959),
    g = n(538445),
    m = n(933104),
    b = n(355251),
    _ = n(970731),
    O = n(626135),
    E = n(267642),
    y = n(337721),
    v = n(981631),
    I = n(921944),
    C = n(30513),
    S = n(474936),
    N = n(388032),
    T = n(706371),
    P = n(741160);
function j(e, t) {
    null != t &&
        ((0, E.f2)(t, v.Eu4.TIER_1)
            ? p.Z.open(t.id, v.pNK.BOOST_PERKS, { section: v.jXE.PREMIUM_GUILD_INVITE_SPLASH })
            : (0, c.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: v.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, C.o9)(),
              }));
}
function A(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: l,
        renderPopout: () =>
            (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(l) : t,
            }),
        position: "bottom",
        align: "center",
        animation: a.yRy.Animation.TRANSLATE,
        shouldShow: !0,
        children: () =>
            (0, r.jsx)("div", {
                ref: l,
                children: n(),
            }),
    });
}
let x = i.memo(function (e) {
    let { contentTypes: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { analyticsLocations: a } = (0, o.ZP)(),
        c = () => {
            O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.cd.INVITE_SPLASH_UPSELL,
                location: { page: v.ZY5.GUILD_CHANNEL },
                location_stack: a,
            });
        },
        [p, C] = (0, s.US)(t, I.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (p) {
                case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(g.Z, {
                            guild: n,
                            markAsDismissed: C,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(m.$h, {
                            guildId: n.id,
                            markAsDismissed: C,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(A, {
                        renderPopout: (e) =>
                            (0, r.jsx)(b.Z, {
                                guildId: n.id,
                                markAsDismissed: C,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(u.Z, {
                            guildId: n.id,
                            markAsDismissed: C,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(y.Z, {
                            guild: n,
                            markAsDismissed: C,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, E.f2)(n, v.Eu4.TIER_1)
                            ? N.intl.format(N.t.DDzEVl, {})
                            : N.intl.formatToPlainString(N.t.pMftkJ, { boostCount: (0, E.KK)(n, v.Eu4.TIER_1) }),
                        t = (0, E.f2)(n, v.Eu4.TIER_1) ? N.intl.string(N.t.rOFcBg) : N.intl.string(N.t.hvVgAQ);
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(_.ZP, {
                            onComponentMount: c,
                            header: N.intl.string(N.t["36wK8/"]),
                            asset: (0, r.jsx)("img", {
                                alt: "",
                                src: P,
                                className: T.fullWidthImage,
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: N.intl.string(N.t.hBIHLS),
                            onSecondaryClick: () => j(a),
                            onClick: () => j(a, n),
                            markAsDismissed: C,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(f.Z, { markAsDismissed: C }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(h.Z, {
                        guildId: n.id,
                        markAsDismissed: C,
                        renderTargetElement: i,
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(A, {
                        renderPopout: (0, r.jsx)(d.Z, {
                            guildId: n.id,
                            markAsDismissed: C,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
