n.d(l, { A: () => m });
var t = n(477900),
    i = n(477782),
    r = n(688810),
    a = n(562153),
    s = n(183555),
    o = n(591179),
    d = n(402860),
    u = n(999291),
    c = n(487409),
    g = n(375708);
function m(e) {
    let { user: l, guildId: n, channelId: m, displayProfile: f, onClose: p } = e,
        { analyticsLocations: x, sourceAnalyticsLocations: h } = (0, r.Ay)(),
        { context: v, trackUserProfileAction: A } = (0, s.NJ)(),
        b = (0, u.Ay)(l.id, n),
        j = (0, o.X)("useViewUserProfileModalItem");
    return ((0, c.A)(l.id) && j) || b?.guildId == null
        ? null
        : f?.guildId != null
          ? (0, t.jsx)(i.Dr, {
                id: "view-main-profile",
                label: g.intl.string(g.t.GISTta),
                subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: a.Ay.getName(void 0, void 0, l) }),
                action: () => {
                    p?.(),
                        (0, d.openUserProfileModal)({
                            userId: l.id,
                            ...v,
                            guildId: void 0,
                            originGuildId: n,
                            sourceAnalyticsLocations: h,
                        }),
                        A({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: x, ...v });
                },
            })
          : f?.guildId != null
            ? null
            : (0, t.jsx)(i.Dr, {
                  id: "view-server-profile",
                  label: g.intl.string(g.t.DisZzB),
                  subtext: g.intl.formatToPlainString(g.t["mn/nW2"], { displayName: a.Ay.getName(n, m, l) }),
                  action: () => {
                      p?.(),
                          (0, d.openUserProfileModal)({ userId: l.id, ...v, guildId: n, sourceAnalyticsLocations: h }),
                          A({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: x, ...v });
                  },
              });
}
