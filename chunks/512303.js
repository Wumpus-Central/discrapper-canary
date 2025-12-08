n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
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
    m = n(430824),
    O = n(594174),
    y = n(388032),
    h = n(121271);
function v(e) {
    var t, n, v, j;
    let { analyticsLocations: E } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        _ = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        Z = (0, a.e7)([O.default], () => O.default.getUser(S)),
        I = (0, a.e7)([m.Z], () => m.Z.getGuild(P)),
        T = p.Z.getChannel(e.channel_id),
        N = null == T ? void 0 : T.getGuildId(),
        M = (0, a.e7)([O.default], () => O.default.getUser(_));
    if (
        (i.useEffect(() => {
            null == Z && null != S && (0, s.PR)(S);
        }, [Z, S]),
        !(0, d.a)(e))
    )
        return null;
    null == M && (M = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let w = null;
    return (
        null != I
            ? (w = (0, r.jsx)(o.sNh, {
                  className: h.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: I,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: I.name,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXB, { application: e.author.username }),
              }))
            : null != Z &&
              (w = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: Z.id,
                          guildId: N,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: E,
                      }),
                  className: h.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: Z,
                          size: o.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: Z.username,
                  subtext: y.intl.formatToPlainString(y.t.ShLXXB, { application: e.author.username }),
              })),
        (0, r.jsxs)(o.sNh, {
            id: "view-interaction-info",
            label: y.intl.string(y.t.Rjezbz),
            children: [
                w,
                null != M
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: M.id,
                                  guildId: N,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: E,
                              }),
                          className: h.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: M,
                                  size: o.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: M.username,
                          subtext: y.intl.string(y.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
