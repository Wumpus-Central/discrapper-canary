t.d(n, { A: () => m });
var l = t(477900),
    i = t(477782),
    r = t(688810),
    s = t(562153),
    a = t(183555),
    o = t(591179),
    d = t(402860),
    u = t(999291),
    c = t(487409),
    g = t(375708);
function m(e) {
    let { user: n, guildId: t, channelId: m, displayProfile: f, onClose: p } = e,
        { analyticsLocations: h, sourceAnalyticsLocations: x } = (0, r.Ay)(),
        { context: A, trackUserProfileAction: v } = (0, a.NJ)(),
        I = (0, u.Ay)(n.id, t),
        j = (0, o.X)("useViewUserProfileModalItem");
    return ((0, c.A)(n.id) && j) || I?.guildId == null
        ? null
        : f?.guildId != null
          ? (0, l.jsx)(i.Dr, {
                id: "view-main-profile",
                label: g.intl.string(g.t.GISTta),
                subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: s.Ay.getName(void 0, void 0, n) }),
                action: () => {
                    (p?.(),
                        (0, d.openUserProfileModal)({
                            userId: n.id,
                            ...A,
                            guildId: void 0,
                            originGuildId: t,
                            sourceAnalyticsLocations: x,
                        }),
                        v({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: h, ...A }));
                },
            })
          : f?.guildId != null
            ? null
            : (0, l.jsx)(i.Dr, {
                  id: "view-server-profile",
                  label: g.intl.string(g.t.DisZzB),
                  subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: s.Ay.getName(t, m, n) }),
                  action: () => {
                      (p?.(),
                          (0, d.openUserProfileModal)({ userId: n.id, ...A, guildId: t, sourceAnalyticsLocations: x }),
                          v({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: h, ...A }));
                  },
              });
}
