n.d(t, { Z: () => Z });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(904245),
    s = n(787263),
    d = n(660189),
    u = n(216572),
    c = n(144140),
    f = n(314897),
    h = n(496675),
    g = n(709054),
    b = n(981631),
    v = n(388032);
function Z(e) {
    let t = e.isForumPost(),
        n = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        Z = (0, u.HL)(e),
        { canManageChannel: p, canAccessChannel: m } = (0, r.cj)(
            [h.Z],
            () => ({
                canAccessChannel: h.Z.can(e.accessPermissions, e),
                canManageChannel: h.Z.can(e.isThread() ? b.Plq.MANAGE_THREADS : b.Plq.MANAGE_CHANNELS, e)
            }),
            [e]
        ),
        O = (0, r.e7)(
            [c.Z],
            () => {
                var t;
                return null != (t = c.Z.getCount(e.id)) ? t : 0;
            },
            [e.id]
        ),
        { firstMessage: _ } = (0, r.e7)([d.Z], () => d.Z.getMessage(e.id), [e.id]),
        j = t && (p || (n && O < 1)),
        y = t && n && !p && O > 0 && null != _;
    return m && !Z && (p || j || y)
        ? (0, i.jsx)(l.sNh, {
              id: 'delete-channel',
              label: e.type === b.d4z.GUILD_CATEGORY ? v.intl.string(v.t.ifbXnJ) : e.isForumPost() ? (j ? v.intl.string(v.t.nEOg1N) : v.intl.string(v.t.xwMqDw)) : e.isThread() ? v.intl.string(v.t.H7vTe3) : v.intl.string(v.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, s.w)(e, function () {
                      y ? o.Z.deleteMessage(e.id, g.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              }
          })
        : null;
}
