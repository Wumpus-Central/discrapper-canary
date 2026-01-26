n.d(t, {
    A: () => v,
});
var r = n(627968),
    i = n(64700),
    l = n(485845),
    a = n(311907),
    o = n(397927),
    c = n(803306),
    s = n(966327),
    d = n(688810),
    u = n(597929),
    g = n(263063),
    p = n(657331),
    f = n(427157),
    y = n(734057),
    b = n(71393),
    A = n(287809),
    m = n(985018),
    O = n(79924);

function v(e) {
    var t, n, v, j;
    let { analyticsLocations: h } = (0, d.Ay)(),
        E = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.b.USER_INSTALL],
        S = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.b.GUILD_INSTALL],
        _ = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        D = (0, a.bG)([A.default], () => A.default.getUser(E)),
        P = (0, a.bG)([b.A], () => b.A.getGuild(S)),
        T = y.A.getChannel(e.channel_id),
        I = null == T ? void 0 : T.getGuildId(),
        x = (0, a.bG)([A.default], () => A.default.getUser(_));
    if (
        (i.useEffect(() => {
            null == D && null != E && (0, c.wz)(E);
        }, [D, E]),
        !(0, u._)(e))
    )
        return null;
    null == x && (x = new f.A(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let w = null;
    return (
        null != P
            ? (w = (0, r.jsx)(o.Drp, {
                  className: O.X,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(g.A, {
                          guild: P,
                          size: g.A.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: P.name,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
                      application: e.author.username,
                  }),
              }))
            : null != D &&
              (w = (0, r.jsx)(o.Drp, {
                  action: () =>
                      (0, p.openUserProfileModal)({
                          userId: D.id,
                          guildId: I,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: h,
                      }),
                  className: O.X,
                  leadingAccessory: {
                      type: "avatar",
                      src: D.getAvatarURL(I, 18),
                  },
                  id: "integration-owner",
                  label: D.username,
                  iconLeft: () =>
                      (0, r.jsx)(s.A, {
                          user: D,
                          size: o._3J.SIZE_20,
                      }),
                  subtext: m.intl.formatToPlainString(m.t.ShLXXB, {
                      application: e.author.username,
                  }),
              })),
        (0, r.jsxs)(o.Drp, {
            id: "view-interaction-info",
            label: m.intl.string(m.t.Rjezbz),
            leadingAccessory: {
                type: "icon",
                icon: o.mir,
            },
            children: [
                w,
                null != x
                    ? (0, r.jsx)(o.Drp, {
                          action: () =>
                              (0, p.openUserProfileModal)({
                                  userId: x.id,
                                  guildId: I,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: h,
                              }),
                          className: O.X,
                          leadingAccessory: {
                              type: "avatar",
                              src: x.getAvatarURL(I, 18),
                          },
                          iconLeft: () =>
                              (0, r.jsx)(s.A, {
                                  user: x,
                                  size: o._3J.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: x.username,
                          subtext: m.intl.string(m.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
