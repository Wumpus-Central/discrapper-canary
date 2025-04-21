n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    l = n(373793),
    a = n(442837),
    o = n(481060),
    s = n(232567),
    c = n(700582),
    u = n(592180),
    d = n(565138),
    f = n(171368),
    g = n(598077),
    m = n(592125),
    b = n(430824),
    h = n(594174),
    p = n(981631),
    O = n(388032),
    y = n(274693);
function E(e) {
    var t, n, E, v;
    let j = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[l.Y.USER_INSTALL],
        S = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[l.Y.GUILD_INSTALL],
        P = null == (E = e.interactionMetadata) ? void 0 : E.user.id,
        _ = (0, a.e7)([h.default], () => h.default.getUser(j)),
        Z = (0, a.e7)([b.Z], () => b.Z.getGuild(S)),
        N = m.Z.getChannel(e.channel_id),
        I = null == N ? void 0 : N.getGuildId(),
        x = (0, a.e7)([h.default], () => h.default.getUser(P));
    if (
        (r.useEffect(() => {
            null == _ && null != j && (0, s.PR)(j);
        }, [_, j]),
        !(0, u.a)(e))
    )
        return null;
    null == x && (x = new g.Z(null == (v = e.interactionMetadata) ? void 0 : v.user));
    let T = null;
    return (
        null != Z
            ? (T = (0, i.jsx)(o.sNh, {
                  className: y.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, i.jsx)(d.Z, {
                          guild: Z,
                          size: d.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: Z.name,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              }))
            : null != _ &&
              (T = (0, i.jsx)(o.sNh, {
                  action: () =>
                      (0, f.openUserProfileModal)({
                          userId: _.id,
                          guildId: I,
                          channelId: e.channel_id,
                          analyticsLocation: { object: p.qAy.MESSAGE_ACTION_SHEET }
                      }),
                  className: y.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, i.jsx)(c.Z, {
                          user: _,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: _.username,
                  subtext: O.intl.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              })),
        (0, i.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: O.intl.string(O.t.Rjezb2),
            children: [
                T,
                null != x
                    ? (0, i.jsx)(o.sNh, {
                          action: () =>
                              (0, f.openUserProfileModal)({
                                  userId: x.id,
                                  guildId: I,
                                  channelId: e.channel_id,
                                  analyticsLocation: { object: p.qAy.MESSAGE_ACTION_SHEET }
                              }),
                          className: y.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, i.jsx)(c.Z, {
                                  user: x,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: x.username,
                          subtext: O.intl.string(O.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
