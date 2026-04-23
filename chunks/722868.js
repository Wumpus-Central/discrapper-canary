t.d(n, { A: () => m });
var l = t(627968),
    i = t(311907),
    r = t(477782),
    a = t(688810),
    s = t(287809),
    o = t(562153),
    d = t(183555),
    u = t(591179),
    c = t(657331),
    g = t(950191),
    A = t(985018);
function m(e) {
    let { user: n, guildId: t, channelId: m, displayProfile: f, onClose: p } = e,
        { analyticsLocations: x, sourceAnalyticsLocations: h } = (0, a.Ay)(),
        { context: v, trackUserProfileAction: j } = (0, d.NJ)(),
        I = (0, g.Ay)(n.id, t),
        b = (0, i.bG)([s.default], () => s.default.getCurrentUser()?.id === n.id),
        C = (0, u.X)("useViewUserProfileModalItem");
    return (b && C) || I?.guildId == null
        ? null
        : f?.guildId == null || f?.private
          ? f?.guildId != null
              ? null
              : (0, l.jsx)(r.Dr, {
                    id: "view-server-profile",
                    label: A.intl.string(A.t.DisZzB),
                    subtext: A.intl.formatToPlainString(A.t["mn/nW2"], { displayName: o.Ay.getName(t, m, n) }),
                    action: () => {
                        p?.(),
                            (0, c.openUserProfileModal)({
                                userId: n.id,
                                ...v,
                                guildId: t,
                                sourceAnalyticsLocations: h,
                            }),
                            j({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: x, ...v });
                    },
                })
          : (0, l.jsx)(r.Dr, {
                id: "view-main-profile",
                label: A.intl.string(A.t.GISTta),
                subtext: A.intl.formatToPlainString(A.t["mn/nW2"], { displayName: o.Ay.getName(void 0, void 0, n) }),
                action: () => {
                    p?.(),
                        (0, c.openUserProfileModal)({
                            userId: n.id,
                            ...v,
                            guildId: void 0,
                            originGuildId: t,
                            sourceAnalyticsLocations: h,
                        }),
                        j({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: x, ...v });
                },
            });
}
