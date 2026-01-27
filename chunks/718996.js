n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(379848),
    o = n(345485),
    c = n(554154),
    u = n(527901),
    d = n(361908),
    p = n(249584),
    h = n(791295),
    g = n(49999);

function f(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(a.YNO, {
        targetElementRef: l,
        renderPopout: () =>
            (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(l) : t,
            }),
        position: "bottom",
        align: "center",
        animation: a.YNO.Animation.TRANSLATE,
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
        [a, m] = (0, s.kn)(t, g.m.GUILD_HEADER_TOOLTIPS);
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (a) {
                case l.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(f, {
                        renderPopout: (e) =>
                            (0, r.jsx)(p.UB, {
                                guildId: n.id,
                                markAsDismissed: m,
                                channelRowRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, r.jsx)(f, {
                        renderPopout: (e) =>
                            (0, r.jsx)(p.K8, {
                                guildId: n.id,
                                markAsDismissed: m,
                                channelRowRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, r.jsx)(f, {
                        renderPopout: (e) =>
                            (0, r.jsx)(o.A, {
                                guildId: n.id,
                                markAsDismissed: m,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(f, {
                        renderPopout: (e) =>
                            (0, r.jsx)(h.A, {
                                guild: n,
                                markAsDismissed: m,
                                targetElementRef: e,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(f, {
                        renderPopout: (0, r.jsx)(u.A, {
                            markAsDismissed: m,
                        }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case l.M.MEDIA_CHANNEL_UPSELL:
                    return (0, r.jsx)(d.A, {
                        guildId: n.id,
                        markAsDismissed: m,
                        renderTargetElement: i,
                    });
                case l.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(f, {
                        renderPopout: (e) =>
                            (0, r.jsx)(c.A, {
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
