n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    u = n(904245),
    o = n(787263),
    c = n(660189),
    s = n(216572),
    d = n(144140),
    f = n(314897),
    g = n(496675),
    E = n(709054),
    p = n(981631),
    O = n(388032);
function h(e) {
    let t = e.isForumPost(),
        n = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        h = (0, s.HL)(e),
        { canManageChannel: _, canAccessChannel: b } = (0, r.cj)(
            [g.Z],
            () => ({
                canAccessChannel: g.Z.can(e.accessPermissions, e),
                canManageChannel: g.Z.can(e.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        v = (0, r.e7)(
            [d.Z],
            () => {
                var t;
                return null != (t = d.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: C } = (0, r.e7)([c.Z], () => c.Z.getMessage(e.id), [e.id]),
        y = t && (_ || (n && v < 1)),
        A = t && n && !_ && v > 0 && null != C;
    return b && !h && (_ || y || A)
        ? (0, i.jsx)(l.sNh, {
              id: 'delete-channel',
              label: e.type === p.d4z.GUILD_CATEGORY ? O.intl.string(O.t.ifbXnJ) : e.isForumPost() ? (y ? O.intl.string(O.t.nEOg1N) : O.intl.string(O.t.xwMqDw)) : e.isThread() ? O.intl.string(O.t.H7vTe3) : O.intl.string(O.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, o.w)(e, function () {
                      A ? u.Z.deleteMessage(e.id, E.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
