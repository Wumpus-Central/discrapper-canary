n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
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
    y = n(594174),
    m = n(388032),
    h = n(121271);
function v(e) {
    var t, n, v, j;
    let { analyticsLocations: S } = (0, u.ZP)(),
        E = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        _ = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        Z = (0, a.e7)([y.default], () => y.default.getUser(E)),
        T = (0, a.e7)([O.Z], () => O.Z.getGuild(P)),
        w = p.Z.getChannel(e.channel_id),
        I = null == w ? void 0 : w.getGuildId(),
        N = (0, a.e7)([y.default], () => y.default.getUser(_));
    if (
        (i.useEffect(() => {
            null == Z && null != E && (0, s.PR)(E);
        }, [Z, E]),
        !(0, d.a)(e))
    )
        return null;
    null == N && (N = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let A = null;
    return (
        null != T
            ? (A = (0, r.jsx)(o.sNh, {
                  className: h.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: T,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: T.name,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXF, { application: e.author.username }),
              }))
            : null != Z &&
              (A = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: Z.id,
                          guildId: I,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: S,
                      }),
                  className: h.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: Z,
                          size: o.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: Z.username,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXF, { application: e.author.username }),
              })),
        (0, r.jsxs)(o.sNh, {
            id: "view-interaction-info",
            label: m.intl.string(m.t.Rjezb2),
            children: [
                A,
                null != N
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: N.id,
                                  guildId: I,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: S,
                              }),
                          className: h.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: N,
                                  size: o.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: N.username,
                          subtext: m.intl.string(m.t["04gxNj"]),
                      })
                    : null,
            ],
        })
    );
}
