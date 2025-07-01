n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(232567),
    c = n(700582),
    u = n(906732),
    d = n(592180),
    f = n(565138),
    g = n(892001),
    b = n(598077),
    p = n(592125),
    O = n(430824),
    m = n(594174),
    y = n(388032),
    h = n(274693);
function v(e) {
    var t, n, v, j;
    let { analyticsLocations: E } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        _ = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        Z = (0, a.e7)([m.default], () => m.default.getUser(S)),
        I = (0, a.e7)([O.Z], () => O.Z.getGuild(_)),
        T = p.Z.getChannel(e.channel_id),
        w = null == T ? void 0 : T.getGuildId(),
        N = (0, a.e7)([m.default], () => m.default.getUser(P));
    if (
        (i.useEffect(() => {
            null == Z && null != S && (0, s.PR)(S);
        }, [Z, S]),
        !(0, d.a)(e))
    )
        return null;
    null == N && (N = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let A = null;
    return (
        null != I
            ? (A = (0, r.jsx)(o.sNh, {
                  className: h.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: I,
                          size: f.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: I.name,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXF, { application: e.author.username })
              }))
            : null != Z &&
              (A = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: Z.id,
                          guildId: w,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: E
                      }),
                  className: h.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: Z,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: Z.username,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXF, { application: e.author.username })
              })),
        (0, r.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: y.intl.string(y.t.Rjezb2),
            children: [
                A,
                null != N
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: N.id,
                                  guildId: w,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: E
                              }),
                          className: h.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: N,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: N.username,
                          subtext: y.intl.string(y.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
