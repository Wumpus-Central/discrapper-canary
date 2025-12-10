n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(704215),
    a = n(481060),
    s = n(243778),
    o = n(433280),
    c = n(34131),
    u = n(567458),
    d = n(782959),
    p = n(933104),
    f = n(337721),
    g = n(921944);
function h(e) {
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
let m = i.memo(function (e) {
    let { contentTypes: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        [a, m] = (0, s.US)(t, g.R.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (a) {
                case l.z.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(h, {
                        renderPopout: (e) =>
                            (0, r.jsx)(p.$h, {
                                guildId: n.id,
                                markAsDismissed: m,
                                channelRowRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(h, {
                        renderPopout: (e) =>
                            (0, r.jsx)(o.Z, {
                                guildId: n.id,
                                markAsDismissed: m,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(h, {
                        renderPopout: (e) =>
                            (0, r.jsx)(f.Z, {
                                guild: n,
                                markAsDismissed: m,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(h, {
                        renderPopout: (0, r.jsx)(u.Z, { markAsDismissed: m }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(d.Z, {
                        guildId: n.id,
                        markAsDismissed: m,
                        renderTargetElement: i,
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(h, {
                        renderPopout: (e) =>
                            (0, r.jsx)(c.Z, {
                                guildId: n.id,
                                markAsDismissed: m,
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
