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
    h = n(388032),
    y = n(896602);
function v(e) {
    var t, n, v, E;
    let { analyticsLocations: j } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        _ = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        Z = (0, a.e7)([m.default], () => m.default.getUser(S)),
        N = (0, a.e7)([O.Z], () => O.Z.getGuild(_)),
        I = p.Z.getChannel(e.channel_id),
        w = null == I ? void 0 : I.getGuildId(),
        M = (0, a.e7)([m.default], () => m.default.getUser(P));
    if (
        (i.useEffect(() => {
            null == Z && null != S && (0, s.PR)(S);
        }, [Z, S]),
        !(0, d.a)(e))
    )
        return null;
    null == M && (M = new b.Z(null == (E = e.interactionMetadata) ? void 0 : E.user));
    let T = null;
    return (
        null != N
            ? (T = (0, r.jsx)(o.sNh, {
                  className: y.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: N,
                          size: f.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: N.name,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              }))
            : null != Z &&
              (T = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: Z.id,
                          guildId: w,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: j
                      }),
                  className: y.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: Z,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: Z.username,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXF, { application: e.author.username })
              })),
        (0, r.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: h.intl.string(h.t.Rjezb2),
            children: [
                T,
                null != M
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: M.id,
                                  guildId: w,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: j
                              }),
                          className: y.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: M,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: M.username,
                          subtext: h.intl.string(h.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
