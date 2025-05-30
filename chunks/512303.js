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
    let { analyticsLocations: S } = (0, u.ZP)(),
        j = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        _ = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (y = e.interactionMetadata) ? void 0 : y.user.id,
        I = (0, a.e7)([h.default], () => h.default.getUser(j)),
        N = (0, a.e7)([b.Z], () => b.Z.getGuild(_)),
        Z = p.Z.getChannel(e.channel_id),
        D = null == Z ? void 0 : Z.getGuildId(),
        A = (0, a.e7)([h.default], () => h.default.getUser(P));
    if (
        (r.useEffect(() => {
            null == I && null != j && (0, s.PR)(j);
        }, [I, j]),
        !(0, d.a)(e))
    )
        return null;
    null == A && (A = new m.Z(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let x = null;
    return (
        null != N
            ? (x = (0, i.jsx)(o.sNh, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(f.Z, {
                          guild: N,
                          size: f.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: N.name,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              }))
            : null != I &&
              (x = (0, i.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: I.id,
                          guildId: D,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: S
                      }),
                  className: E.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, i.jsx)(c.Z, {
                          user: I,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: I.username,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: O.intl.string(O.t.Rjezb2),
            children: [
                x,
                null != A
                    ? (0, i.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: A.id,
                                  guildId: D,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: S
                              }),
                          className: E.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, i.jsx)(c.Z, {
                                  user: A,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: A.username,
                          subtext: O.intl.string(O.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
