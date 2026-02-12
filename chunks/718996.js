n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(345485),
    o = n(554154),
    d = n(527901),
    c = n(361908),
    u = n(379229),
    A = n(249584),
    h = n(791295);
function _(e) {
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
let m = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: r } = e,
        { contentType: a, data: m, markAsDismissed: p } = t;
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (a) {
                case l.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, i.jsx)(_, {
                        renderPopout: (e) => (0, i.jsx)(A.UB, { guildId: n.id, markAsDismissed: p, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, i.jsx)(_, {
                        renderPopout: (e) => (0, i.jsx)(A.K8, { guildId: n.id, markAsDismissed: p, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = m?.featuredPowerup;
                    if (null == e) return r();
                    return (0, i.jsx)(_, {
                        renderPopout: (t) =>
                            (0, i.jsx)(A.Gw, {
                                type: u.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: p,
                                channelRowRef: t,
                            }),
                        renderGuildHeaderDropdownButton: r,
                    });
                }
                case l.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(_, {
                        renderPopout: (e) =>
                            (0, i.jsx)(s.A, { guildId: n.id, markAsDismissed: p, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(_, {
                        renderPopout: (e) => (0, i.jsx)(h.A, { guild: n, markAsDismissed: p, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(_, {
                        renderPopout: (0, i.jsx)(d.A, { markAsDismissed: p }),
                        renderGuildHeaderDropdownButton: r,
                    });
                case l.M.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(c.A, { guildId: n.id, markAsDismissed: p, renderTargetElement: r });
                case l.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(_, {
                        renderPopout: (e) =>
                            (0, i.jsx)(o.A, { guildId: n.id, markAsDismissed: p, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: r,
                    });
                default:
                    return r();
            }
        })(),
    });
});
