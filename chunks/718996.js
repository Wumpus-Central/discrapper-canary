n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(554146),
    l = n(397927),
    s = n(379848),
    o = n(345485),
    d = n(554154),
    c = n(527901),
    u = n(361908),
    A = n(249584),
    h = n(791295),
    _ = n(49999);
function m(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        a = r.useRef(null);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: a,
        renderPopout: () =>
            (0, i.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(a) : t }),
        position: "bottom",
        align: "center",
        animation: l.YNO.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, i.jsx)("div", { ref: a, children: n() }),
    });
}
let p = r.memo(function (e) {
    let { contentTypes: t, guild: n, renderGuildHeaderDropdownButton: r } = e,
        [l, p] = (0, s.kn)(t, _.m.GUILD_HEADER_TOOLTIPS);
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (l) {
                case a.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, i.jsx)(m, {
                        renderPopout: (e) => (0, i.jsx)(A.UB, { guildId: n.id, markAsDismissed: p, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, i.jsx)(m, {
                        renderPopout: (e) => (0, i.jsx)(A.K8, { guildId: n.id, markAsDismissed: p, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(m, {
                        renderPopout: (e) =>
                            (0, i.jsx)(o.A, { guildId: n.id, markAsDismissed: p, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(m, {
                        renderPopout: (e) => (0, i.jsx)(h.A, { guild: n, markAsDismissed: p, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(m, {
                        renderPopout: (0, i.jsx)(c.A, { markAsDismissed: p }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case a.M.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(u.A, { guildId: n.id, markAsDismissed: p, renderTargetElement: r });
                case a.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(m, {
                        renderPopout: (e) =>
                            (0, i.jsx)(d.A, { guildId: n.id, markAsDismissed: p, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                default:
                    return r();
            }
        })(),
    });
});
