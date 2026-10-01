n.d(t, { A: () => f });
var i = n(477900),
    l = n(477782),
    r = n(688810),
    s = n(562153),
    a = n(183555),
    o = n(591179),
    u = n(402860),
    d = n(999291),
    c = n(487409),
    g = n(375708);
function f(e) {
    let { user: t, guildId: n, channelId: f, displayProfile: m, onClose: p } = e,
        { analyticsLocations: h, sourceAnalyticsLocations: x } = (0, r.Ay)(),
        { context: A, trackUserProfileAction: v } = (0, a.NJ)(),
        I = (0, d.Ay)(t.id, n),
        j = (0, o.X)("useViewUserProfileModalItem");
    return ((0, c.A)(t.id) && j) || I?.guildId == null
        ? null
        : m?.guildId != null
          ? (0, i.jsx)(l.Dr, {
                id: "view-main-profile",
                label: g.intl.string(g.t.GISTta),
                subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: s.Ay.getName(void 0, void 0, t) }),
                action: () => {
                    (p?.(),
                        (0, u.openUserProfileModal)({
                            userId: t.id,
                            ...A,
                            guildId: void 0,
                            originGuildId: n,
                            sourceAnalyticsLocations: x,
                        }),
                        v({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: h, ...A }));
                },
            })
          : m?.guildId != null
            ? null
            : (0, i.jsx)(l.Dr, {
                  id: "view-server-profile",
                  label: g.intl.string(g.t.DisZzB),
                  subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: s.Ay.getName(n, f, t) }),
                  action: () => {
                      (p?.(),
                          (0, u.openUserProfileModal)({ userId: t.id, ...A, guildId: n, sourceAnalyticsLocations: x }),
                          v({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: h, ...A }));
                  },
              });
}
