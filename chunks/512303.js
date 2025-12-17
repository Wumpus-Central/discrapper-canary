n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(373793),
    o = n(442837),
    a = n(481060),
    c = n(232567),
    s = n(700582),
    u = n(906732),
    d = n(592180),
    f = n(565138),
    g = n(892001),
    b = n(598077),
    p = n(592125),
    O = n(430824),
    y = n(594174),
    m = n(388032),
    v = n(327420);
function h(e) {
    var t, n, h, j;
    let { analyticsLocations: S } = (0, u.ZP)(),
        E = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        P = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        T = null == (h = e.interactionMetadata) ? void 0 : h.user.id,
        _ = (0, o.e7)([y.default], () => y.default.getUser(E)),
        I = (0, o.e7)([O.Z], () => O.Z.getGuild(P)),
        Z = p.Z.getChannel(e.channel_id),
        w = null == Z ? void 0 : Z.getGuildId(),
        A = (0, o.e7)([y.default], () => y.default.getUser(T));
    if (
        (i.useEffect(() => {
            null == _ && null != E && (0, c.PR)(E);
        }, [_, E]),
        !(0, d.a)(e))
    )
        return null;
    null == A && (A = new b.Z(null == (j = e.interactionMetadata) ? void 0 : j.user));
    let N = null;
    return (
        null != I
            ? (N = (0, r.jsx)(a.sNh, {
                  className: v.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: I,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: I.name,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXB, { application: e.author.username }),
              }))
            : null != _ &&
              (N = (0, r.jsx)(a.sNh, {
                  action: () =>
                      (0, g.openUserProfileModal)({
                          userId: _.id,
                          guildId: w,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: S,
                      }),
                  className: v.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(s.Z, {
                          user: _,
                          size: a.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: _.username,
                  subtext: m.intl.formatToPlainString(m.t.ShLXXB, { application: e.author.username }),
              })),
        (0, r.jsxs)(a.sNh, {
            id: "view-interaction-info",
            label: m.intl.string(m.t.Rjezbz),
            children: [
                N,
                null != A
                    ? (0, r.jsx)(a.sNh, {
                          action: () =>
                              (0, g.openUserProfileModal)({
                                  userId: A.id,
                                  guildId: w,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: S,
                              }),
                          className: v.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(s.Z, {
                                  user: A,
                                  size: a.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: A.username,
                          subtext: m.intl.string(m.t["04gxNg"]),
                      })
                    : null,
            ],
        })
    );
}
