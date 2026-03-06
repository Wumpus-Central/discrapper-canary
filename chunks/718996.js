n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(345485),
    o = n(554154),
    d = n(527901),
    c = n(379229),
    u = n(249584),
    A = n(791295);
function h(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        l = r.useRef(null);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: l,
        renderPopout: () =>
            (0, i.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(l) : t }),
        position: "bottom",
        align: "center",
        animation: a.YNO.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, i.jsx)("div", { ref: l, children: n() }),
    });
}
let _ = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: r } = e,
        { contentType: a, data: _, markAsDismissed: m } = t;
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (a) {
                case l.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) => (0, i.jsx)(u.UB, { guildId: n.id, markAsDismissed: m, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) => (0, i.jsx)(u.YX, { guildId: n.id, markAsDismissed: m, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) => (0, i.jsx)(u.K8, { guildId: n.id, markAsDismissed: m, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = _?.featuredPowerup;
                    if (null == e) return r();
                    return (0, i.jsx)(h, {
                        renderPopout: (t) =>
                            (0, i.jsx)(u.Gw, {
                                type: c.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: m,
                                channelRowRef: t,
                            }),
                        renderGuildHeaderDropdownButton: r,
                    });
                }
                case l.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = _?.featuredExpiringPowerup;
                    if (null == e) return r();
                    return (0, i.jsx)(h, {
                        renderPopout: (t) =>
                            (0, i.jsx)(u.Mr, {
                                type: c.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: m,
                                channelRowRef: t,
                            }),
                        renderGuildHeaderDropdownButton: r,
                    });
                }
                case l.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(s.A, { guildId: n.id, markAsDismissed: m, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) => (0, i.jsx)(A.A, { guild: n, markAsDismissed: m, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(h, {
                        renderPopout: (0, i.jsx)(d.A, { markAsDismissed: m }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(o.A, { guildId: n.id, markAsDismissed: m, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                default:
                    return r();
            }
        })(),
    });
});
