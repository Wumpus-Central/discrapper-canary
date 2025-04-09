n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(787014),
    o = n(904245),
    u = n(787263),
    d = n(660189),
    c = n(144140),
    s = n(314897),
    f = n(496675),
    _ = n(709054),
    E = n(981631),
    h = n(388032);
function p(e) {
    let t = e.isForumPost(),
        n = (0, r.e7)([s.default], () => e.isOwner(s.default.getId()), [e]),
        { canManageChannel: p, canAccessChannel: O } = (0, r.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(e.accessPermissions, e),
                canManageChannel: f.Z.can(e.isThread() ? E.Plq.MANAGE_THREADS : E.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        g = (0, r.e7)(
            [c.Z],
            () => {
                var t;
                return null != (t = c.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: v } = (0, r.e7)([d.Z], () => d.Z.getMessage(e.id), [e.id]),
        A = t && (p || (n && g < 1)),
        y = t && n && !p && g > 0 && null != v;
    return O && (p || A || y)
        ? (0, i.jsx)(a.sNh, {
              id: 'delete-channel',
              label: e.type === E.d4z.GUILD_CATEGORY ? h.NW.string(h.t.ifbXnJ) : e.isForumPost() ? (A ? h.NW.string(h.t.nEOg1N) : h.NW.string(h.t.xwMqDw)) : e.isThread() ? h.NW.string(h.t.H7vTe3) : h.NW.string(h.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      y ? o.Z.deleteMessage(e.id, _.default.castChannelIdAsMessageId(e.id)) : l.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
