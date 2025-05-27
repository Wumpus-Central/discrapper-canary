n.d(t, { Z: () => b });
var i = n(255367);
n(73800);
var a = n(442837),
    r = n(481060),
    l = n(787014),
    o = n(904245),
    u = n(787263),
    s = n(660189),
    c = n(216572),
    d = n(144140),
    f = n(314897),
    g = n(496675),
    O = n(709054),
    p = n(981631),
    E = n(388032);
function b(e) {
    let t = e.isForumPost(),
        n = (0, a.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        b = (0, c.HL)(e),
        { canManageChannel: _, canAccessChannel: v } = (0, a.cj)(
            [g.Z],
            () => ({
                canAccessChannel: g.Z.can(e.accessPermissions, e),
                canManageChannel: g.Z.can(e.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        h = (0, a.e7)(
            [d.Z],
            () => {
                var t;
                return null != (t = d.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: y } = (0, a.e7)([s.Z], () => s.Z.getMessage(e.id), [e.id]),
        C = t && (_ || (n && h < 1)),
        A = t && n && !_ && h > 0 && null != y;
    return v && !b && (_ || C || A)
        ? (0, i.jsx)(r.sNh, {
              id: 'delete-channel',
              label: e.type === p.d4z.GUILD_CATEGORY ? E.intl.string(E.t.ifbXnJ) : e.isForumPost() ? (C ? E.intl.string(E.t.nEOg1N) : E.intl.string(E.t.xwMqDw)) : e.isThread() ? E.intl.string(E.t.H7vTe3) : E.intl.string(E.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      A ? o.Z.deleteMessage(e.id, O.default.castChannelIdAsMessageId(e.id)) : l.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
