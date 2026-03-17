i.d(l, { A: () => u });
var n = i(627968),
    t = i(397927),
    s = i(688810),
    a = i(562153),
    r = i(183555),
    o = i(657331),
    d = i(950191),
    c = i(985018);
function u(e) {
    let { user: l, guildId: i, channelId: u, displayProfile: A, onClose: m, onChangeGuildId: p } = e,
        { analyticsLocations: g, sourceAnalyticsLocations: x } = (0, s.Ay)(),
        { context: h, trackUserProfileAction: f } = (0, r.NJ)(),
        I = (0, d.Ay)(l.id, i);
    return I?.guildId == null
        ? null
        : A?.guildId == null || A?.private
          ? A?.guildId != null
              ? null
              : (0, n.jsx)(t.Drp, {
                    id: "view-server-profile",
                    label: c.intl.string(c.t.DisZzB),
                    subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: a.Ay.getName(i, u, l) }),
                    action: () => {
                        null != p
                            ? p(i ?? null)
                            : (m?.(),
                              (0, o.openUserProfileModal)({
                                  userId: l.id,
                                  ...h,
                                  guildId: i,
                                  sourceAnalyticsLocations: x,
                              })),
                            f({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: g, ...h });
                    },
                })
          : (0, n.jsx)(t.Drp, {
                id: "view-main-profile",
                label: c.intl.string(c.t.GISTta),
                subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: a.Ay.getName(void 0, void 0, l) }),
                action: () => {
                    null != p
                        ? p(null)
                        : (m?.(),
                          (0, o.openUserProfileModal)({
                              userId: l.id,
                              ...h,
                              guildId: void 0,
                              originGuildId: i,
                              sourceAnalyticsLocations: x,
                          })),
                        f({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: g, ...h });
                },
            });
}
