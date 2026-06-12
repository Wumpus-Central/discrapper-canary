n.d(l, { A: () => m });
var t = n(627968),
    i = n(17928),
    r = n(477782),
    a = n(688810),
    s = n(287809),
    o = n(562153),
    d = n(183555),
    u = n(591179),
    c = n(975732),
    g = n(999291),
    f = n(375708);
function m(e) {
    let { user: l, guildId: n, channelId: m, displayProfile: p, onClose: x } = e,
        { analyticsLocations: h, sourceAnalyticsLocations: v } = (0, a.Ay)(),
        { context: A, trackUserProfileAction: b } = (0, d.NJ)(),
        j = (0, g.Ay)(l.id, n),
        I = (0, i.bG)([s.default], () => s.default.getCurrentUser()?.id === l.id),
        C = (0, u.X)("useViewUserProfileModalItem");
    return (I && C) || j?.guildId == null
        ? null
        : p?.guildId == null || p?.private
          ? p?.guildId != null
              ? null
              : (0, t.jsx)(r.Dr, {
                    id: "view-server-profile",
                    label: f.intl.string(f.t.DisZzB),
                    subtext: f.intl.formatToPlainString(f.t["mn/nW2"], { displayName: o.Ay.getName(n, m, l) }),
                    action: () => {
                        x?.(),
                            (0, c.openUserProfileModal)({
                                userId: l.id,
                                ...A,
                                guildId: n,
                                sourceAnalyticsLocations: v,
                            }),
                            b({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: h, ...A });
                    },
                })
          : (0, t.jsx)(r.Dr, {
                id: "view-main-profile",
                label: f.intl.string(f.t.GISTta),
                subtext: f.intl.formatToPlainString(f.t["mn/nW2"], { displayName: o.Ay.getName(void 0, void 0, l) }),
                action: () => {
                    x?.(),
                        (0, c.openUserProfileModal)({
                            userId: l.id,
                            ...A,
                            guildId: void 0,
                            originGuildId: n,
                            sourceAnalyticsLocations: v,
                        }),
                        b({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: h, ...A });
                },
            });
}
