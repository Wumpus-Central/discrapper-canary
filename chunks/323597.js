n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(787014),
    o = n(904245),
    u = n(787263),
    c = n(660189),
    s = n(216572),
    d = n(144140),
    f = n(314897),
    g = n(496675),
    p = n(709054),
    O = n(981631),
    E = n(388032);
function v(e) {
    let t = e.isForumPost(),
        n = (0, l.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        v = (0, s.wL)(e),
        { canManageChannel: b, canAccessChannel: _ } = (0, l.cj)(
            [g.Z],
            () => ({
                canAccessChannel: g.Z.can(e.accessPermissions, e),
                canManageChannel: g.Z.can(e.isThread() ? O.Plq.MANAGE_THREADS : O.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        h = (0, l.e7)(
            [d.Z],
            () => {
                var t;
                return null != (t = d.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: y } = (0, l.e7)([c.Z], () => c.Z.getMessage(e.id), [e.id]),
        C = t && (b || (n && h < 1)),
        A = t && n && !b && h > 0 && null != y;
    return _ && !v && (b || C || A)
        ? (0, i.jsx)(r.sNh, {
              id: 'delete-channel',
              label: e.type === O.d4z.GUILD_CATEGORY ? E.intl.string(E.t.ifbXnJ) : e.isForumPost() ? (C ? E.intl.string(E.t.nEOg1N) : E.intl.string(E.t.xwMqDw)) : e.isThread() ? E.intl.string(E.t.H7vTe3) : E.intl.string(E.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      A ? o.Z.deleteMessage(e.id, p.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
