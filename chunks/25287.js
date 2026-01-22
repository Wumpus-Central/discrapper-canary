n.d(t, {
    A: () => A,
});
var r = n(627968),
    l = n(64700),
    i = n(485845),
    o = n(311907),
    a = n(397927),
    c = n(803306),
    s = n(688810),
    d = n(597929),
    u = n(263063),
    f = n(657331),
    g = n(427157),
    p = n(734057),
    b = n(71393),
    m = n(287809),
    y = n(985018),
    O = n(79924);

function A(e) {
    var t, n, A, v;
    let { analyticsLocations: j } = (0, s.Ay)(),
        h = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[i.b.USER_INSTALL],
        E = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[i.b.GUILD_INSTALL],
        S = null == (A = e.interactionMetadata) ? void 0 : A.user.id,
        _ = (0, o.bG)([m.default], () => m.default.getUser(h)),
        D = (0, o.bG)([b.A], () => b.A.getGuild(E)),
        I = p.A.getChannel(e.channel_id),
        P = null == I ? void 0 : I.getGuildId(),
        T = (0, o.bG)([m.default], () => m.default.getUser(S));
    if (
        (l.useEffect(() => {
            null == _ && null != h && (0, c.wz)(h);
        }, [_, h]),
        !(0, d._)(e))
    )
        return null;
    null == T && (T = new g.A(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let w = null;
    return (
        null != D
            ? (w = (0, r.jsx)(a.Drp, {
                  className: O.X,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(u.A, {
                          guild: D,
                          size: u.A.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: D.name,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXB, {
                      application: e.author.username,
                  }),
              }))
            : null != _ &&
              (w = (0, r.jsx)(a.Drp, {
                  action: () =>
                      (0, f.openUserProfileModal)({
                          userId: _.id,
                          guildId: P,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: j,
                      }),
                  className: O.X,
                  leadingAccessory: {
                      type: "avatar",
                      src: _.getAvatarURL(P, 18),
                  },
                  id: "integration-owner",
                  label: _.username,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXB, {
                      application: e.author.username,
                  }),
              })),
        (0, r.jsxs)(a.Drp, {
            id: "view-interaction-info",
            label: y.intl.string(y.t.Rjezbz),
            children: [
                w,
                null != T
                    ? (0, r.jsx)(a.Drp, {
                          action: () =>
                              (0, f.openUserProfileModal)({
                                  userId: T.id,
                                  guildId: P,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: j,
                              }),
                          className: O.X,
                          leadingAccessory: {
                              type: "avatar",
                              src: T.getAvatarURL(P, 18),
                          },
                          id: "interaction-user",
                          label: T.username,
                          subtext: y.intl.string(y.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
