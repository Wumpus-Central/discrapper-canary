n.d(l, { A: () => f });
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
    m = n(375708);
function f(e) {
    let { user: l, guildId: n, channelId: f, displayProfile: p, onClose: x } = e,
        { analyticsLocations: v, sourceAnalyticsLocations: h } = (0, a.Ay)(),
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
                    label: m.intl.string(m.t.DisZzB),
                    subtext: m.intl.formatToPlainString(m.t["mn/nW2"], { displayName: o.Ay.getName(n, f, l) }),
                    action: () => {
                        x?.(),
                            (0, c.openUserProfileModal)({
                                userId: l.id,
                                ...A,
                                guildId: n,
                                sourceAnalyticsLocations: h,
                            }),
                            b({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: v, ...A });
                    },
                })
          : (0, t.jsx)(r.Dr, {
                id: "view-main-profile",
                label: m.intl.string(m.t.GISTta),
                subtext: m.intl.formatToPlainString(m.t["mn/nW2"], { displayName: o.Ay.getName(void 0, void 0, l) }),
                action: () => {
                    x?.(),
                        (0, c.openUserProfileModal)({
                            userId: l.id,
                            ...A,
                            guildId: void 0,
                            originGuildId: n,
                            sourceAnalyticsLocations: h,
                        }),
                        b({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: v, ...A });
                },
            });
}
