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
    h = n(592125),
    p = n(430824),
    b = n(594174),
    O = n(388032),
    E = n(274693);
function y(e) {
    var t, n, y, v;
    let { analyticsLocations: j } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        _ = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (y = e.interactionMetadata) ? void 0 : y.user.id,
        N = (0, a.e7)([b.default], () => b.default.getUser(S)),
        I = (0, a.e7)([p.Z], () => p.Z.getGuild(_)),
        Z = h.Z.getChannel(e.channel_id),
        x = null == Z ? void 0 : Z.getGuildId(),
        D = (0, a.e7)([b.default], () => b.default.getUser(P));
    if (
        (r.useEffect(() => {
            null == N && null != S && (0, s.PR)(S);
        }, [N, S]),
        !(0, d.a)(e))
    )
        return null;
    null == D && (D = new m.Z(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let T = null;
    return (
        null != I
            ? (T = (0, i.jsx)(o.sNh, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(f.Z, {
                          guild: I,
                          size: f.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: I.name,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              }))
            : null != N &&
              (T = (0, i.jsx)(o.sNh, {
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
                T,
                null != D
                    ? (0, i.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: D.id,
                                  guildId: x,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: j
                              }),
                          className: E.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, i.jsx)(c.Z, {
                                  user: D,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: D.username,
                          subtext: O.intl.string(O.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
