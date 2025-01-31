n.d(e, { Z: () => v });
var i = n(200651);
n(192379);
var a = n(442837),
    l = n(481060),
    r = n(787014),
    u = n(904245),
    o = n(787263),
    s = n(660189),
    d = n(144140),
    c = n(314897),
    f = n(496675),
    E = n(709054),
    g = n(981631),
    _ = n(388032);
function v(t) {
    let e = t.isForumPost(),
        n = (0, a.e7)([c.default], () => t.isOwner(c.default.getId()), [t]),
        { canManageChannel: v, canAccessChannel: C } = (0, a.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(t.accessPermissions, t),
                canManageChannel: f.Z.can(t.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, t)
            }),
            [t]
        ),
        h = (0, a.e7)(
            [d.Z],
            () => {
                var e;
                return null !== (e = d.Z.getCount(t.id)) && void 0 !== e ? e : 0;
            },
            [t.id]
        ),
        { firstMessage: p } = (0, a.e7)([s.Z], () => s.Z.getMessage(t.id), [t.id]),
        A = e && (v || (n && h < 1)),
        O = e && n && !v && h > 0 && null != p;
    return C && (v || A || O)
        ? (0, i.jsx)(l.sNh, {
              id: 'delete-channel',
              label: t.type === g.d4z.GUILD_CATEGORY ? _.intl.string(_.t.ifbXnJ) : t.isForumPost() ? (A ? _.intl.string(_.t.nEOg1N) : _.intl.string(_.t.xwMqDw)) : t.isThread() ? _.intl.string(_.t.H7vTe3) : _.intl.string(_.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, o.w)(t, function () {
                      O ? u.Z.deleteMessage(t.id, E.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id);
                  });
              }
          })
        : null;
}
