n.d(t, { Z: () => y });
var i = n(255367),
    r = n(73800),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(232567),
    c = n(700582),
    u = n(906732),
    d = n(592180),
    f = n(565138),
    g = n(892001),
    m = n(598077),
    p = n(592125),
    b = n(430824),
    h = n(594174),
    O = n(388032),
    E = n(274693);
function y(e) {
    var t, n, y, v;
    let { analyticsLocations: j } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        _ = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (y = e.interactionMetadata) ? void 0 : y.user.id,
        N = (0, a.e7)([h.default], () => h.default.getUser(S)),
        Z = (0, a.e7)([b.Z], () => b.Z.getGuild(_)),
        I = p.Z.getChannel(e.channel_id),
        x = null == I ? void 0 : I.getGuildId(),
        T = (0, a.e7)([h.default], () => h.default.getUser(P));
    if (
        (r.useEffect(() => {
            null == N && null != S && (0, s.PR)(S);
        }, [N, S]),
        !(0, d.a)(e))
    )
        return null;
    null == T && (T = new m.Z(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let M = null;
    return (
        null != Z
            ? (M = (0, i.jsx)(o.sNh, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(f.Z, {
                          guild: Z,
                          size: f.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: Z.name,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              }))
            : null != N &&
              (M = (0, i.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: N.id,
                          guildId: x,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: j
                      }),
                  className: E.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, i.jsx)(c.Z, {
                          user: N,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: N.username,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: O.intl.string(O.t.Rjezb2),
            children: [
                M,
                null != T
                    ? (0, i.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: T.id,
                                  guildId: x,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: j
                              }),
                          className: E.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, i.jsx)(c.Z, {
                                  user: T,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: T.username,
                          subtext: O.intl.string(O.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
