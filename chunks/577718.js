n.d(t, { Z: () => O }), n(388685);
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
    h = n(511342),
    g = n(933104),
    m = n(337721),
    b = n(921944);
function _(e) {
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
let O = i.memo(function (e) {
    let { contentTypes: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { analyticsLocations: a } = (0, o.ZP)(),
        [O, E] = (0, s.US)(t, b.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (O) {
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(_, {
                        renderPopout: (0, r.jsx)(g.$h, {
                            guildId: n.id,
                            markAsDismissed: E,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL:
                    return (0, r.jsx)(h.Z, {
                        guild: n,
                        markAsDismissed: E,
                        renderTargetElement: i,
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(_, {
                        renderPopout: (e) =>
                            (0, r.jsx)(c.Z, {
                                guildId: n.id,
                                markAsDismissed: E,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(_, {
                        renderPopout: (e) =>
                            (0, r.jsx)(m.Z, {
                                guild: n,
                                markAsDismissed: E,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    return (0, r.jsx)(_, {
                        renderPopout: (e) =>
                            (0, r.jsx)(p.Z, {
                                elementRef: e,
                                guild: n,
                                markAsDismissed: E,
                                analyticsLocations: a,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(_, {
                        renderPopout: (0, r.jsx)(d.Z, { markAsDismissed: E }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(f.Z, {
                        guildId: n.id,
                        markAsDismissed: E,
                        renderTargetElement: i,
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(_, {
                        renderPopout: (e) =>
                            (0, r.jsx)(u.Z, {
                                guildId: n.id,
                                markAsDismissed: E,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
