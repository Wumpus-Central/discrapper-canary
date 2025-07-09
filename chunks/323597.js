n.d(e, { Z: () => h });
var i = n(255367);
n(73800);
var l = n(442837),
    a = n(481060),
    s = n(787014),
    r = n(904245),
    o = n(787263),
    d = n(660189),
    c = n(216572),
    u = n(144140),
    g = n(314897),
    _ = n(496675),
    f = n(709054),
    S = n(981631),
    E = n(388032);
function h(t) {
    let e = t.isForumPost(),
        n = (0, l.e7)([g.default], () => t.isOwner(g.default.getId()), [t]),
        h = (0, c.HL)(t),
        { canManageChannel: N, canAccessChannel: b } = (0, l.cj)(
            [_.Z],
            () => ({
                canAccessChannel: _.Z.can(t.accessPermissions, t),
                canManageChannel: _.Z.can(t.isThread() ? S.Plq.MANAGE_THREADS : S.Plq.MANAGE_CHANNELS, t)
            }),
            [t]
        ),
        L = (0, l.e7)(
            [u.Z],
            () => {
                var e;
                return null != (e = u.Z.getCount(t.id)) ? e : 0;
            },
            [t.id]
        ),
        { firstMessage: p } = (0, l.e7)([d.Z], () => d.Z.getMessage(t.id), [t.id]),
        O = e && (N || (n && L < 1)),
        v = e && n && !N && L > 0 && null != p;
    return b && !h && (N || O || v)
        ? (0, i.jsx)(a.sNh, {
              id: 'delete-channel',
              label: t.type === S.d4z.GUILD_CATEGORY ? E.intl.string(E.t.ifbXnJ) : t.isForumPost() ? (O ? E.intl.string(E.t.nEOg1N) : E.intl.string(E.t.xwMqDw)) : t.isThread() ? E.intl.string(E.t.H7vTe3) : E.intl.string(E.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, o.w)(t, function () {
                      v ? r.Z.deleteMessage(t.id, f.default.castChannelIdAsMessageId(t.id)) : s.ZP.deleteChannel(t.id);
                  });
              }
          })
        : null;
}
