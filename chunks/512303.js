n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    a = n(373793),
    l = n(442837),
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
    var t, n, E, N;
    let v = null == (t = e.interactionMetadata) ? void 0 : t.authorizing_integration_owners[a.Y.USER_INSTALL],
        j = null == (n = e.interactionMetadata) ? void 0 : n.authorizing_integration_owners[a.Y.GUILD_INSTALL],
        S = null == (E = e.interactionMetadata) ? void 0 : E.user.id,
        P = (0, l.e7)([h.default], () => h.default.getUser(v)),
        _ = (0, l.e7)([b.Z], () => b.Z.getGuild(j)),
        Z = m.Z.getChannel(e.channel_id),
        I = null == Z ? void 0 : Z.getGuildId(),
        x = (0, l.e7)([h.default], () => h.default.getUser(S));
    if (
        (i.useEffect(() => {
            null == P && null != v && (0, s.PR)(v);
        }, [P, v]),
        !(0, u.a)(e))
    )
        return null;
    null == x && (x = new g.Z(null == (N = e.interactionMetadata) ? void 0 : N.user));
    let T = null;
    return (
        null != _
            ? (T = (0, r.jsx)(o.sNh, {
                  className: y.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, r.jsx)(d.Z, {
                          guild: _,
                          size: d.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: _.name,
                  subtext: O.NW.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              }))
            : null != P &&
              (T = (0, r.jsx)(o.sNh, {
                  action: () =>
                      (0, f.openUserProfileModal)({
                          userId: P.id,
                          guildId: I,
                          channelId: e.channel_id,
                          analyticsLocation: { object: p.qAy.MESSAGE_ACTION_SHEET }
                      }),
                  className: y.interactionInfoMenuItem,
                  iconLeft: () =>
                      (0, r.jsx)(c.Z, {
                          user: P,
                          size: o.EFr.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: P.username,
                  subtext: O.NW.formatToPlainString(O.t.ShLXXF, { application: e.author.username })
              })),
        (0, r.jsxs)(o.sNh, {
            id: 'view-interaction-info',
            label: O.NW.string(O.t.Rjezb2),
            children: [
                T,
                null != x
                    ? (0, r.jsx)(o.sNh, {
                          action: () =>
                              (0, f.openUserProfileModal)({
                                  userId: x.id,
                                  guildId: I,
                                  channelId: e.channel_id,
                                  analyticsLocation: { object: p.qAy.MESSAGE_ACTION_SHEET }
                              }),
                          className: y.interactionInfoMenuItem,
                          iconLeft: () =>
                              (0, r.jsx)(c.Z, {
                                  user: x,
                                  size: o.EFr.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: x.username,
                          subtext: O.NW.string(O.t['04gxNj'])
                      })
                    : null
            ]
        })
    );
}
