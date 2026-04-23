t.d(n, { A: () => f });
var l = t(627968),
    i = t(17928),
    r = t(477782),
    a = t(688810),
    s = t(287809),
    o = t(562153),
    d = t(183555),
    u = t(591179),
    c = t(975732),
    g = t(999291),
    m = t(985018);
function f(e) {
    let { user: n, guildId: t, channelId: f, displayProfile: p, onClose: x } = e,
        { analyticsLocations: A, sourceAnalyticsLocations: h } = (0, a.Ay)(),
        { context: v, trackUserProfileAction: j } = (0, d.NJ)(),
        I = (0, g.Ay)(n.id, t),
        b = (0, i.bG)([s.default], () => s.default.getCurrentUser()?.id === n.id),
        C = (0, u.X)("useViewUserProfileModalItem");
    return (b && C) || I?.guildId == null
        ? null
        : p?.guildId == null || p?.private
          ? p?.guildId != null
              ? null
              : (0, l.jsx)(r.Dr, {
                    id: "view-server-profile",
                    label: m.intl.string(m.t.DisZzB),
                    subtext: m.intl.formatToPlainString(m.t["mn/nW2"], { displayName: o.Ay.getName(t, f, n) }),
                    action: () => {
                        x?.(),
                            (0, c.openUserProfileModal)({
                                userId: n.id,
                                ...v,
                                guildId: t,
                                sourceAnalyticsLocations: h,
                            }),
                            j({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: A, ...v });
                    },
                })
          : (0, l.jsx)(r.Dr, {
                id: "view-main-profile",
                label: m.intl.string(m.t.GISTta),
                subtext: m.intl.formatToPlainString(m.t["mn/nW2"], { displayName: o.Ay.getName(void 0, void 0, n) }),
                action: () => {
                    x?.(),
                        (0, c.openUserProfileModal)({
                            userId: n.id,
                            ...v,
                            guildId: void 0,
                            originGuildId: t,
                            sourceAnalyticsLocations: h,
                        }),
                        j({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: A, ...v });
                },
            });
}
