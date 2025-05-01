n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
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
    b = n(592125),
    h = n(430824),
    p = n(594174),
    O = n(388032),
    y = n(274693);
function E(e) {
    var t, n, E, v;
    let { analyticsLocations: j } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        _ = null == (E = e.interactionMetadata) ? void 0 : E.user.id,
        N = (0, a.e7)([p.default], () => p.default.getUser(S)),
        Z = (0, a.e7)([h.Z], () => h.Z.getGuild(P)),
        I = b.Z.getChannel(e.channel_id),
        x = null == I ? void 0 : I.getGuildId(),
        T = (0, a.e7)([p.default], () => p.default.getUser(_));
    if (
        (r.useEffect(() => {
            null == N && null != S && (0, s.PR)(S);
        }, [N, S]),
        !(0, d.a)(e))
    )
        return null;
    null == T && (T = new m.Z(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let A = null;
    return (
        null != Z
            ? (A = (0, i.jsx)(o.sNh, {
                  className: y.interactionInfoMenuItem,
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
              (A = (0, i.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: N.id,
                          guildId: x,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: j
                      }),
                  className: y.interactionInfoMenuItem,
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
                A,
                null != T
                    ? (0, i.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: T.id,
                                  guildId: x,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: j
                              }),
                          className: y.interactionInfoMenuItem,
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
