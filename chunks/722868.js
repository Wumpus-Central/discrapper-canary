var i = n(477900),
    l = n(477782),
    r = n(688810),
    s = n(562153),
    a = n(183555),
    o = n(702476),
    u = n(527212),
    d = n(487409),
    c = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, guildId: n, channelId: g, displayProfile: m, onClose: f } = e,
                { analyticsLocations: h, sourceAnalyticsLocations: p } = (0, r.Ay)(),
                { context: x, trackUserProfileAction: A } = (0, a.NJ)(),
                I = (0, u.Ay)(t.id, n);
            return (0, d.A)(t.id) || I?.guildId == null
                ? null
                : m?.guildId != null
                  ? (0, i.jsx)(l.Dr, {
                        id: "view-main-profile",
                        label: c.intl.string(c.t.GISTta),
                        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
                            displayName: s.Ay.getName(void 0, void 0, t),
                        }),
                        action: () => {
                            (f?.(),
                                (0, o.openUserProfileModal)({
                                    userId: t.id,
                                    ...x,
                                    guildId: void 0,
                                    originGuildId: n,
                                    sourceAnalyticsLocations: p,
                                }),
                                A({ action: "PRESS_VIEW_MAIN_PROFILE", analyticsLocations: h, ...x }));
                        },
                    })
                  : m?.guildId != null
                    ? null
                    : (0, i.jsx)(l.Dr, {
                          id: "view-server-profile",
                          label: c.intl.string(c.t.DisZzB),
                          subtext: c.intl.formatToPlainString(c.t["mn/nW2"], { displayName: s.Ay.getName(n, g, t) }),
                          action: () => {
                              (f?.(),
                                  (0, o.openUserProfileModal)({
                                      userId: t.id,
                                      ...x,
                                      guildId: n,
                                      sourceAnalyticsLocations: p,
                                  }),
                                  A({ action: "PRESS_VIEW_SERVER_PROFILE", analyticsLocations: h, ...x }));
                          },
                      });
        },
    },
);
