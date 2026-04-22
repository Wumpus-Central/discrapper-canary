l.d(n, { A: () => m });
var t = l(627968),
    i = l(311907),
    r = l(477782),
    s = l(688810),
    a = l(287809),
    o = l(562153),
    d = l(183555),
    c = l(591179),
    u = l(657331),
    g = l(950191),
    A = l(985018);
function m(e) {
    let { user: n, guildId: l, channelId: m, displayProfile: f, onClose: p } = e,
        { analyticsLocations: x, sourceAnalyticsLocations: h } = (0, s.Ay)(),
        { context: v, trackUserProfileAction: j } = (0, d.NJ)(),
        I = (0, g.Ay)(n.id, l),
        b = (0, i.bG)([a.default], () => a.default.getCurrentUser()?.id === n.id),
        C = (0, c.X)("useViewUserProfileModalItem");
    return (b && C) || I?.guildId == null
        ? null
        : f?.guildId == null || f?.private
          ? f?.guildId != null
              ? null
              : (0, t.jsx)(r.Dr, {
                    id: "view-server-profile",
                    label: A.intl.string(A.t.DisZzB),
                    subtext: A.intl.formatToPlainString(A.t["mn/nW2"], { displayName: o.Ay.getName(l, m, n) }),
                    action: () => {
                        p?.(),
                            (0, u.openUserProfileModal)({
                                userId: n.id,
                                ...v,
                                guildId: l,
                                sourceAnalyticsLocations: h,
                            }),
                            j({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: x, ...v });
                    },
                })
          : (0, t.jsx)(r.Dr, {
                id: "view-main-profile",
                label: A.intl.string(A.t.GISTta),
                subtext: A.intl.formatToPlainString(A.t["mn/nW2"], { displayName: o.Ay.getName(void 0, void 0, n) }),
                action: () => {
                    p?.(),
                        (0, u.openUserProfileModal)({
                            userId: n.id,
                            ...v,
                            guildId: void 0,
                            originGuildId: l,
                            sourceAnalyticsLocations: h,
                        }),
                        j({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: x, ...v });
                },
            });
}
