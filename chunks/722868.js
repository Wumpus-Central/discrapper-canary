n.d(t, { A: () => u });
var i = n(627968),
    s = n(397927),
    l = n(688810),
    a = n(562153),
    r = n(183555),
    d = n(657331),
    o = n(950191),
    c = n(985018);
function u(e) {
    let { user: t, guildId: n, channelId: u, displayProfile: A, onClose: x } = e,
        { analyticsLocations: m, sourceAnalyticsLocations: p } = (0, l.Ay)(),
        { context: h, trackUserProfileAction: f } = (0, r.NJ)(),
        g = (0, o.Ay)(t.id, n);
    return g?.guildId == null
        ? null
        : A?.guildId != null
          ? (0, i.jsx)(s.Drp, {
                id: "view-main-profile",
                label: c.intl.string(c.t.GISTta),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: a.Ay.getName(void 0, void 0, t) }),
                action: () => {
                    x?.(),
                        (0, d.openUserProfileModal)({
                            userId: t.id,
                            guildId: n,
                            ...h,
                            showGuildProfile: !1,
                            sourceAnalyticsLocations: p,
                        }),
                        f({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: m, ...h });
                },
            })
          : (0, i.jsx)(s.Drp, {
                id: "view-server-profile",
                label: c.intl.string(c.t.DisZzB),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: a.Ay.getName(n, u, t) }),
                action: () => {
                    x?.(),
                        (0, d.openUserProfileModal)({
                            userId: t.id,
                            guildId: n,
                            ...h,
                            showGuildProfile: !0,
                            sourceAnalyticsLocations: p,
                        }),
                        f({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: m, ...h });
                },
            });
}
