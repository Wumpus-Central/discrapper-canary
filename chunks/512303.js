n.d(t, { Z: () => y });
var r = n(255367),
    i = n(73800),
    o = n(373793),
    a = n(442837),
    s = n(481060),
    l = n(232567),
    c = n(700582),
    u = n(906732),
    d = n(592180),
    f = n(565138),
    _ = n(892001),
    p = n(598077),
    h = n(592125),
    m = n(430824),
    g = n(594174),
    E = n(388032),
    b = n(274693);
function y(e) {
    var t, n, y, O;
    let { analyticsLocations: v } = (0, u.ZP)(),
        I = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[o.Y.USER_INSTALL],
        T = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[o.Y.GUILD_INSTALL],
        S = null == (y = e.interactionMetadata) ? void 0 : y.user.id,
        A = (0, a.e7)([g.default], () => g.default.getUser(I)),
        N = (0, a.e7)([m.Z], () => m.Z.getGuild(T)),
        C = h.Z.getChannel(e.channel_id),
        R = null == C ? void 0 : C.getGuildId(),
        P = (0, a.e7)([g.default], () => g.default.getUser(S));
    if (
        (i.useEffect(() => {
            null == A && null != I && (0, l.PR)(I);
        }, [A, I]),
        !(0, d.a)(e))
    )
        return null;
    null == P && (P = new p.Z(null == (O = e.interactionMetadata) ? void 0 : O.user));
    let w = null;
    return (
        null != N
            ? (w = (0, r.jsx)(s.sNh, {
                  className: b.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(f.Z, {
                          guild: N,
                          size: f.Z.Sizes.MINI,
                      }),
                  id: "integration-owner",
                  label: N.name,
                  subtext: E.intl.formatToPlainString(E.t.ShLXXF, { application: e.author.username }),
              }))
            : null != A &&
              (w = (0, r.jsx)(s.sNh, {
                  action: () =>
                      (0, _.openUserProfileModal)({
                          userId: A.id,
                          guildId: R,
                          channelId: e.channel_id,
                          sourceAnalyticsLocations: v,
                      }),
                  className: b.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: A,
                          size: s.EFr.SIZE_20,
                      }),
                  id: "integration-owner",
                  label: A.username,
                  subtext: E.intl.formatToPlainString(E.t.ShLXXF, { application: e.author.username }),
              })),
        (0, r.jsxs)(s.sNh, {
            id: "view-interaction-info",
            label: E.intl.string(E.t.Rjezb2),
            children: [
                w,
                null != P
                    ? (0, r.jsx)(s.sNh, {
                          action: () =>
                              (0, _.openUserProfileModal)({
                                  userId: P.id,
                                  guildId: R,
                                  channelId: e.channel_id,
                                  sourceAnalyticsLocations: v,
                              }),
                          className: b.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: P,
                                  size: s.EFr.SIZE_20,
                              }),
                          id: "interaction-user",
                          label: P.username,
                          subtext: E.intl.string(E.t["04gxNj"]),
                      })
                    : null,
            ],
        })
    );
}
