n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
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
        n = (0, r.e7)([d.default], () => e.isOwner(d.default.getId()), [e]),
        { canManageChannel: E, canAccessChannel: N } = (0, r.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(e.accessPermissions, e),
                canManageChannel: f.Z.can(e.isThread() ? O.Plq.MANAGE_THREADS : O.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        b = (0, r.e7)(
            [c.Z],
            () => {
                var t;
                return null != (t = c.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: _ } = (0, r.e7)([s.Z], () => s.Z.getMessage(e.id), [e.id]),
        v = t && (E || (n && b < 1)),
        h = t && n && !E && b > 0 && null != _;
    return N && (E || v || h)
        ? (0, i.jsx)(a.sNh, {
              id: 'delete-channel',
              label: e.type === O.d4z.GUILD_CATEGORY ? p.NW.string(p.t.ifbXnJ) : e.isForumPost() ? (v ? p.NW.string(p.t.nEOg1N) : p.NW.string(p.t.xwMqDw)) : e.isThread() ? p.NW.string(p.t.H7vTe3) : p.NW.string(p.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, u.w)(e, function () {
                      h ? o.Z.deleteMessage(e.id, g.default.castChannelIdAsMessageId(e.id)) : l.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
