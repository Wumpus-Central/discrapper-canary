n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(379848),
    o = n(645104),
    d = n(345485),
    c = n(554154),
    u = n(527901),
    A = n(361908),
    h = n(249584),
    _ = n(791295),
    m = n(49999);
function p(e) {
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
let g = [],
    E = r.memo(function (e) {
        let { contentTypes: t, guildContentTypes: n = g, guild: r, renderGuildHeaderDropdownButton: a } = e,
            [E, I] = (0, s.kn)(t, m.m.GUILD_HEADER_TOOLTIPS),
            [f, C] = (0, s.ww)(n, r.id, m.m.GUILD_HEADER_TOOLTIPS),
            N = E ?? f,
            T = null != E ? I : C;
        return (0, i.jsx)(i.Fragment, {
            children: (() => {
                switch (N) {
                    case l.M.GUILD_POWERUP_PERKS_COACHMARK:
                        return (0, i.jsx)(p, {
                            renderPopout: (e) =>
                                (0, i.jsx)(h.UB, { guildId: r.id, markAsDismissed: T, channelRowRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                        return (0, i.jsx)(p, {
                            renderPopout: (e) =>
                                (0, i.jsx)(h.K8, { guildId: r.id, markAsDismissed: T, channelRowRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                        return (0, i.jsx)(p, {
                            renderPopout: (e) =>
                                (0, i.jsx)(d.A, { guildId: r.id, markAsDismissed: T, targetElementRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                        return (0, i.jsx)(p, {
                            renderPopout: (e) => (0, i.jsx)(_.A, { guild: r, markAsDismissed: T, targetElementRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                        return (0, i.jsx)(p, {
                            renderPopout: (0, i.jsx)(u.A, { markAsDismissed: T }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.MEDIA_CHANNEL_UPSELL:
                        return (0, i.jsx)(A.A, { guildId: r.id, markAsDismissed: T, renderTargetElement: a });
                    case l.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                        return (0, i.jsx)(p, {
                            renderPopout: (e) =>
                                (0, i.jsx)(c.A, { guildId: r.id, markAsDismissed: T, targetElementRef: e }),
                            renderGuildHeaderDropdownButton: a,
                        });
                    case l.M.GAME_CLAIM_COACHMARK:
                        return (0, i.jsx)(o.A, {
                            guildId: r.id,
                            markAsDismissed: T,
                            renderGuildHeaderDropdownButton: a,
                        });
                    default:
                        return a();
                }
            })(),
        });
    });
