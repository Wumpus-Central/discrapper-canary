n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    a = n(481060),
    o = n(906732),
    s = n(243778),
    c = n(433280),
    u = n(34131),
    d = n(567458),
    p = n(230421),
    f = n(782959),
    h = n(538445),
    g = n(511342),
    m = n(933104),
    b = n(355251),
    _ = n(337721),
    O = n(921944);
function E(e) {
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
let y = i.memo(function (e) {
    let { contentTypes: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { analyticsLocations: a } = (0, o.ZP)(),
        [y, v] = (0, s.US)(t, O.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (y) {
                case l.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK:
                    return (0, r.jsx)(E, {
                        renderPopout: (0, r.jsx)(h.Z, {
                            guild: n,
                            markAsDismissed: v,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(E, {
                        renderPopout: (0, r.jsx)(m.$h, {
                            guildId: n.id,
                            markAsDismissed: v,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, r.jsx)(E, {
                        renderPopout: (e) =>
                            (0, r.jsx)(b.Z, {
                                guildId: n.id,
                                markAsDismissed: v,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL:
                    return (0, r.jsx)(g.Z, {
                        guild: n,
                        markAsDismissed: v,
                        renderTargetElement: i,
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(E, {
                        renderPopout: (0, r.jsx)(c.Z, {
                            guildId: n.id,
                            markAsDismissed: v,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(E, {
                        renderPopout: (0, r.jsx)(_.Z, {
                            guild: n,
                            markAsDismissed: v,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    return (0, r.jsx)(E, {
                        renderPopout: (e) =>
                            (0, r.jsx)(p.Z, {
                                elementRef: e,
                                guild: n,
                                markAsDismissed: v,
                                analyticsLocations: a,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(E, {
                        renderPopout: (0, r.jsx)(d.Z, { markAsDismissed: v }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(f.Z, {
                        guildId: n.id,
                        markAsDismissed: v,
                        renderTargetElement: i,
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(E, {
                        renderPopout: (0, r.jsx)(u.Z, {
                            guildId: n.id,
                            markAsDismissed: v,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
