n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var a = n(442837),
    r = n(481060),
    l = n(787014),
    o = n(904245),
    u = n(787263),
    s = n(660189),
    c = n(144140),
    d = n(314897),
    f = n(496675),
    g = n(709054),
    O = n(981631),
    p = n(388032);
function E(e) {
    let t = e.isForumPost(),
        n = (0, a.e7)([d.default], () => e.isOwner(d.default.getId()), [e]),
        { canManageChannel: E, canAccessChannel: b } = (0, a.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(e.accessPermissions, e),
                canManageChannel: f.Z.can(e.isThread() ? O.Plq.MANAGE_THREADS : O.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        _ = (0, a.e7)(
            [c.Z],
            () => {
                var t;
                return null != (t = c.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: v } = (0, a.e7)([s.Z], () => s.Z.getMessage(e.id), [e.id]),
        h = t && (E || (n && _ < 1)),
        y = t && n && !E && _ > 0 && null != v;
    return b && (E || h || y)
        ? (0, i.jsx)(r.sNh, {
              id: 'delete-channel',
              label: e.type === O.d4z.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnJ) : e.isForumPost() ? (h ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqDw)) : e.isThread() ? p.intl.string(p.t.H7vTe3) : p.intl.string(p.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      y ? o.Z.deleteMessage(e.id, g.default.castChannelIdAsMessageId(e.id)) : l.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
