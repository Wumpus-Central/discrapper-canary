n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(373793),
    o = n(442837),
    a = n(481060),
    s = n(232567),
    c = n(906732),
    u = n(592180),
    d = n(565138),
    f = n(892001),
    g = n(598077),
    p = n(592125),
    b = n(430824),
    m = n(594174),
    y = n(388032),
    O = n(327420);
function h(e) {
    var t, n, h, v;
    let { analyticsLocations: j } = (0, c.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        E = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (h = e.interactionMetadata) ? void 0 : h.user.id,
        T = (0, o.e7)([m.default], () => m.default.getUser(S)),
        I = (0, o.e7)([b.Z], () => b.Z.getGuild(E)),
        _ = p.Z.getChannel(e.channel_id),
        Z = null == _ ? void 0 : _.getGuildId(),
        A = (0, o.e7)([m.default], () => m.default.getUser(P));
    if (
        (i.useEffect(() => {
            null == T && null != S && (0, s.PR)(S);
        }, [T, S]),
        !(0, u.a)(e))
    )
        return null;
    null == A && (A = new g.Z(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let w = null;
    return (
        null != I
            ? (w = (0, r.jsx)(a.sNh, {
                  className: O.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(d.Z, {
                          guild: I,
                          size: d.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: I.name,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXB, { application: e.author.username }),
              }))
            : null != T &&
              (w = (0, r.jsx)(a.sNh, {
                  action: () =>
                      (0, f.openUserProfileModal)({
                          userId: T.id,
                          guildId: Z,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: j,
                      }),
                  className: O.interactionInfoMenuItem,
                  leadingAccessory: {
                      type: "avatar",
                      src: T.getAvatarURL(Z, 18),
                  },
                  id: "integration-owner",
                  label: T.username,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXB, { application: e.author.username }),
              })),
        (0, r.jsxs)(a.sNh, {
            id: "view-interaction-info",
            label: y.intl.string(y.t.Rjezbz),
            children: [
                w,
                null != A
                    ? (0, r.jsx)(a.sNh, {
                          action: () =>
                              (0, f.openUserProfileModal)({
                                  userId: A.id,
                                  guildId: Z,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: j,
                              }),
                          className: O.interactionInfoMenuItem,
                          leadingAccessory: {
                              type: "avatar",
                              src: A.getAvatarURL(Z, 18),
                          },
                          id: "interaction-user",
                          label: A.username,
                          subtext: y.intl.string(y.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
