n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(554146),
    l = n(265872),
    s = n(345485),
    o = n(554154),
    d = n(527901),
    u = n(379229),
    c = n(249584),
    A = n(791295);
function h(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        a = r.useRef(null);
    return (0, i.jsx)(l.Y, {
        targetElementRef: a,
        renderPopout: () =>
            (0, i.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(a) : t }),
        position: "bottom",
        align: "center",
        animation: l.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, i.jsx)("div", { ref: a, children: n() }),
    });
}
let _ = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: r } = e,
        { contentType: l, data: _, markAsDismissed: E } = t,
        p = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (l) {
                case a.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(c.UB, { guildId: n.id, markAsDismissed: E, channelRowRef: e, ...p }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(c.YX, { guildId: n.id, markAsDismissed: E, channelRowRef: e, ...p }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(c.Ns, { guildId: n.id, markAsDismissed: E, channelRowRef: e, ...p }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) => (0, i.jsx)(c.K8, { guildId: n.id, markAsDismissed: E, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = _?.featuredPowerup;
                    if (null == e) return r();
                    return (0, i.jsx)(h, {
                        renderPopout: (t) =>
                            (0, i.jsx)(c.Gw, {
                                type: u.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: E,
                                channelRowRef: t,
                                ...p,
                            }),
                        renderGuildHeaderDropdownButton: r,
                    });
                }
                case a.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = _?.featuredExpiringPowerup;
                    if (null == e) return r();
                    return (0, i.jsx)(h, {
                        renderPopout: (t) =>
                            (0, i.jsx)(c.Mr, {
                                type: u.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: E,
                                channelRowRef: t,
                                ...p,
                            }),
                        renderGuildHeaderDropdownButton: r,
                    });
                }
                case a.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(s.A, { guildId: n.id, markAsDismissed: E, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) => (0, i.jsx)(A.A, { guild: n, markAsDismissed: E, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(h, {
                        renderPopout: (0, i.jsx)(d.A, { markAsDismissed: E }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(h, {
                        renderPopout: (e) =>
                            (0, i.jsx)(o.A, { guildId: n.id, markAsDismissed: E, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                default:
                    return r();
            }
        })(),
    });
});
