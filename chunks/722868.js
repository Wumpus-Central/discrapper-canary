i.d(t, { A: () => u });
var l = i(627968),
    n = i(397927),
    s = i(688810),
    a = i(562153),
    r = i(183555),
    o = i(657331),
    d = i(950191),
    c = i(985018);
function u(e) {
    let { user: t, guildId: i, channelId: u, displayProfile: A, onClose: m } = e,
        { analyticsLocations: p, sourceAnalyticsLocations: x } = (0, s.Ay)(),
        { context: g, trackUserProfileAction: h } = (0, r.NJ)(),
        f = (0, d.Ay)(t.id, i);
    return f?.guildId == null
        ? null
        : A?.guildId != null
          ? (0, l.jsx)(n.Drp, {
                id: "view-main-profile",
                label: c.intl.string(c.t.GISTta),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: a.Ay.getName(void 0, void 0, t) }),
                action: () => {
                    m?.(),
                        (0, o.openUserProfileModal)({
                            userId: t.id,
                            guildId: i,
                            ...g,
                            showGuildProfile: !1,
                            sourceAnalyticsLocations: x,
                        }),
                        h({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: p, ...g });
                },
            })
          : (0, l.jsx)(n.Drp, {
                id: "view-server-profile",
                label: c.intl.string(c.t.DisZzB),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: a.Ay.getName(i, u, t) }),
                action: () => {
                    m?.(),
                        (0, o.openUserProfileModal)({
                            userId: t.id,
                            guildId: i,
                            ...g,
                            showGuildProfile: !0,
                            sourceAnalyticsLocations: x,
                        }),
                        h({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: p, ...g });
                },
            });
}
