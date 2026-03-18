t.d(l, { A: () => p });
var i = t(627968),
    n = t(311907),
    s = t(397927),
    a = t(688810),
    r = t(287809),
    o = t(562153),
    d = t(183555),
    c = t(591179),
    u = t(657331),
    m = t(950191),
    A = t(985018);
function p(e) {
    let { user: l, guildId: t, channelId: p, displayProfile: x, onClose: g } = e,
        { analyticsLocations: f, sourceAnalyticsLocations: h } = (0, a.Ay)(),
        { context: j, trackUserProfileAction: I } = (0, d.NJ)(),
        v = (0, m.Ay)(l.id, t),
        N = (0, n.bG)([r.default], () => r.default.getCurrentUser()?.id === l.id),
        y = (0, c.X)("useViewUserProfileModalItem");
    return (N && y) || v?.guildId == null
        ? null
        : x?.guildId == null || x?.private
          ? x?.guildId != null
              ? null
              : (0, i.jsx)(s.Drp, {
                    id: "view-server-profile",
                    label: A.intl.string(A.t.DisZzB),
                    subtext: A.intl.formatToPlainString(A.t["mn/nW2"], { displayName: o.Ay.getName(t, p, l) }),
                    action: () => {
                        g?.(),
                            (0, u.openUserProfileModal)({
                                userId: l.id,
                                ...j,
                                guildId: t,
                                sourceAnalyticsLocations: h,
                            }),
                            I({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: f, ...j });
                    },
                })
          : (0, i.jsx)(s.Drp, {
                id: "view-main-profile",
                label: A.intl.string(A.t.GISTta),
                subtext: A.intl.formatToPlainString(A.t["mn/nW2"], { displayName: o.Ay.getName(void 0, void 0, l) }),
                action: () => {
                    g?.(),
                        (0, u.openUserProfileModal)({
                            userId: l.id,
                            ...j,
                            guildId: void 0,
                            originGuildId: t,
                            sourceAnalyticsLocations: h,
                        }),
                        I({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: f, ...j });
                },
            });
}
