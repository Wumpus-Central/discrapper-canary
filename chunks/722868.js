l.d(n, { A: () => f });
var t = l(477900),
    i = l(477782),
    r = l(688810),
    a = l(562153),
    s = l(183555),
    o = l(591179),
    d = l(402860),
    u = l(999291),
    c = l(487409),
    g = l(375708);
function f(e) {
    let { user: n, guildId: l, channelId: f, displayProfile: m, onClose: p } = e,
        { analyticsLocations: x, sourceAnalyticsLocations: h } = (0, r.Ay)(),
        { context: v, trackUserProfileAction: A } = (0, s.NJ)(),
        b = (0, u.Ay)(n.id, l),
        j = (0, o.X)("useViewUserProfileModalItem");
    return ((0, c.A)(n.id) && j) || b?.guildId == null
        ? null
        : m?.guildId != null
          ? (0, t.jsx)(i.Dr, {
                id: "view-main-profile",
                label: g.intl.string(g.t.GISTta),
                subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: a.Ay.getName(void 0, void 0, n) }),
                action: () => {
                    (p?.(),
                        (0, d.openUserProfileModal)({
                            userId: n.id,
                            ...v,
                            guildId: void 0,
                            originGuildId: l,
                            sourceAnalyticsLocations: h,
                        }),
                        A({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: x, ...v }));
                },
            })
          : m?.guildId != null
            ? null
            : (0, t.jsx)(i.Dr, {
                  id: "view-server-profile",
                  label: g.intl.string(g.t.DisZzB),
                  subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: a.Ay.getName(l, f, n) }),
                  action: () => {
                      (p?.(),
                          (0, d.openUserProfileModal)({ userId: n.id, ...v, guildId: l, sourceAnalyticsLocations: h }),
                          A({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: x, ...v }));
                  },
              });
}
