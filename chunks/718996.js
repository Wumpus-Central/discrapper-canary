n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
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
let p = [],
    g = r.memo(function (e) {
        let { contentTypes: t, guildContentTypes: n = p, guild: r, renderGuildHeaderDropdownButton: a } = e,
            [g, E] = (0, s.kn)(t, _.m.GUILD_HEADER_TOOLTIPS),
            [I, f] = (0, s.ww)(n, r.id, _.m.GUILD_HEADER_TOOLTIPS),
            C = g ?? I,
            T = null != g ? E : f;
        return (0, i.jsx)(i.Fragment, {
            children: (() => {
                switch (C) {
                    case l.M.GUILD_POWERUP_PERKS_COACHMARK:
                        return (0, i.jsx)(m, {
                            renderPopout: (e) =>
                                (0, i.jsx)(A.UB, { guildId: r.id, markAsDismissed: T, channelRowRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                        return (0, i.jsx)(m, {
                            renderPopout: (e) =>
                                (0, i.jsx)(A.K8, { guildId: r.id, markAsDismissed: T, channelRowRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                        return (0, i.jsx)(m, {
                            renderPopout: (e) =>
                                (0, i.jsx)(o.A, { guildId: r.id, markAsDismissed: T, targetElementRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                        return (0, i.jsx)(m, {
                            renderPopout: (e) => (0, i.jsx)(h.A, { guild: r, markAsDismissed: T, targetElementRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                        return (0, i.jsx)(m, {
                            renderPopout: (0, i.jsx)(c.A, { markAsDismissed: T }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.MEDIA_CHANNEL_UPSELL:
                        return (0, i.jsx)(u.A, { guildId: r.id, markAsDismissed: T, renderTargetElement: a });
                    case l.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                        return (0, i.jsx)(m, {
                            renderPopout: (e) =>
                                (0, i.jsx)(d.A, { guildId: r.id, markAsDismissed: T, targetElementRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    default:
                        return a();
                }
            })(),
        });
    });
