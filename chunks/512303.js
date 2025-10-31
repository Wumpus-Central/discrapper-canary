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
    y = n(430824),
    O = n(594174),
    h = n(388032),
    m = n(121271);
function v(e) {
    var t, n, v, j;
    let { analyticsLocations: E } = (0, u.ZP)(),
        S = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        Z = null == (v = e.interactionMetadata) ? void 0 : v.user.id,
        _ = (0, a.e7)([O.default], () => O.default.getUser(S)),
        T = (0, a.e7)([y.Z], () => y.Z.getGuild(P)),
        I = p.Z.getChannel(e.channel_id),
        N = null == I ? void 0 : I.getGuildId(),
        w = (0, a.e7)([O.default], () => O.default.getUser(Z));
    if (
        (i.useEffect(() => {
            null == _ && null != S && (0, s.PR)(S);
        }, [_, S]),
        !(0, d.a)(e))
    )
        return null;
    null == w && (w = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let A = null;
    return (
        null != T
            ? (A = (0, r.jsx)(o.sNh, {
                  className: m.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: T,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: T.name,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXB, { application: e.author.username }),
              }))
            : null != _ &&
              (A = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: _.id,
                          guildId: N,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: E,
                      }),
                  className: m.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: _,
                          size: o.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: _.username,
                  subtext: h.intl.formatToPlainString(h.t.ShLXXB, { application: e.author.username }),
              })),
        (0, r.jsxs)(o.sNh, {
            id: "view-interaction-info",
            label: h.intl.string(h.t.Rjezbz),
            children: [
                A,
                null != w
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: w.id,
                                  guildId: N,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: E,
                              }),
                          className: m.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: w,
                                  size: o.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: w.username,
                          subtext: h.intl.string(h.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
