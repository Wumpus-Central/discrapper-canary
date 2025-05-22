n.d(t, { Z: () => O });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(904245),
    u = n(787263),
    d = n(660189),
    c = n(216572),
    s = n(144140),
    f = n(314897),
    _ = n(496675),
    E = n(709054),
    h = n(981631),
    p = n(388032);
function O(e) {
    let t = e.isForumPost(),
        n = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        O = (0, c.HL)(e),
        { canManageChannel: g, canAccessChannel: v } = (0, r.cj)(
            [_.Z],
            () => ({
                canAccessChannel: _.Z.can(e.accessPermissions, e),
                canManageChannel: _.Z.can(e.isThread() ? h.Plq.MANAGE_THREADS : h.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        y = (0, r.e7)(
            [s.Z],
            () => {
                var t;
                return null != (t = s.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: A } = (0, r.e7)([d.Z], () => d.Z.getMessage(e.id), [e.id]),
        b = t && (g || (n && y < 1)),
        T = t && n && !g && y > 0 && null != A;
    return v && !O && (g || b || T)
        ? (0, i.jsx)(l.sNh, {
              id: 'delete-channel',
              label: e.type === h.d4z.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnJ) : e.isForumPost() ? (b ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqDw)) : e.isThread() ? p.intl.string(p.t.H7vTe3) : p.intl.string(p.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      T ? o.Z.deleteMessage(e.id, E.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
