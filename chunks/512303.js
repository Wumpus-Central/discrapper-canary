n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(373793),
    o = n(442837),
    a = n(481060),
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
    v = n(388032),
    y = n(121271);
function h(e) {
    var t, n, h, j;
    let { analyticsLocations: S } = (0, u.ZP)(),
        E = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        I = null == (h = e.interactionMetadata) ? void 0 : h.user.id,
        _ = (0, o.e7)([O.default], () => O.default.getUser(E)),
        T = (0, o.e7)([m.Z], () => m.Z.getGuild(P)),
        Z = p.Z.getChannel(e.channel_id),
        N = null == Z ? void 0 : Z.getGuildId(),
        w = (0, o.e7)([O.default], () => O.default.getUser(I));
    if (
        (i.useEffect(() => {
            null == _ && null != E && (0, s.PR)(E);
        }, [_, E]),
        !(0, d.a)(e))
    )
        return null;
    null == w && (w = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let A = null;
    return (
        null != T
            ? (A = (0, r.jsx)(a.sNh, {
                  className: y.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: T,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: T.name,
                  subtext: v.intl.formatToPlainString(v.t.ShLXXB, { application: e.author.username }),
              }))
            : null != _ &&
              (A = (0, r.jsx)(a.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: _.id,
                          guildId: N,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: S,
                      }),
                  className: y.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: _,
                          size: a.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: _.username,
                  subtext: v.intl.formatToPlainString(v.t.ShLXXB, { application: e.author.username }),
              })),
        (0, r.jsxs)(a.sNh, {
            id: "view-interaction-info",
            label: v.intl.string(v.t.Rjezbz),
            children: [
                A,
                null != w
                    ? (0, r.jsx)(a.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: w.id,
                                  guildId: N,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: S,
                              }),
                          className: y.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: w,
                                  size: a.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: w.username,
                          subtext: v.intl.string(v.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
