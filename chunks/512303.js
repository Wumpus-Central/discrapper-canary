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
    y = n(594174),
    O = n(388032),
    h = n(121271);
function v(e) {
    var t, n, v, j;
    let { analyticsLocations: S } = (0, u.ZP)(),
        E = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        Z = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        _ = (0, a.e7)([y.default], () => y.default.getUser(E)),
        I = (0, a.e7)([m.Z], () => m.Z.getGuild(P)),
        T = p.Z.getChannel(e.channel_id),
        N = null == T ? void 0 : T.getGuildId(),
        w = (0, a.e7)([y.default], () => y.default.getUser(Z));
    if (
        (i.useEffect(() => {
            null == _ && null != E && (0, s.PR)(E);
        }, [_, E]),
        !(0, d.a)(e))
    )
        return null;
    null == w && (w = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let M = null;
    return (
        null != I
            ? (M = (0, r.jsx)(o.sNh, {
                  className: h.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: I,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: I.name,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXB, { application: e.author.username }),
              }))
            : null != _ &&
              (M = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: _.id,
                          guildId: N,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: S,
                      }),
                  className: h.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: _,
                          size: o.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: _.username,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXB, { application: e.author.username }),
              })),
        (0, r.jsxs)(o.sNh, {
            id: "view-interaction-info",
            label: O.intl.string(O.t.Rjezbz),
            children: [
                M,
                null != w
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: w.id,
                                  guildId: N,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: S,
                              }),
                          className: h.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: w,
                                  size: o.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: w.username,
                          subtext: O.intl.string(O.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
