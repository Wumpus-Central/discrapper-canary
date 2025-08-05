e.d(n, { Z: () => p });
var i = e(255367);
e(73800);
var a = e(442837),
    l = e(481060),
    r = e(787014),
    o = e(904245),
    s = e(787263),
    d = e(660189),
    u = e(216572),
    c = e(144140),
    f = e(314897),
    h = e(496675),
    v = e(709054),
    g = e(981631),
    Z = e(388032);
function p(t) {
    let n = t.isForumPost(),
        e = (0, a.e7)([f.default], () => t.isOwner(f.default.getId()), [t]),
        p = (0, u.HL)(t),
        { canManageChannel: b, canAccessChannel: C } = (0, a.cj)(
            [h.Z],
            () => ({
                canAccessChannel: h.Z.can(t.accessPermissions, t),
                canManageChannel: h.Z.can(t.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, t)
            }),
            [t]
        ),
        m = (0, a.e7)(
            [c.Z],
            () => {
                var n;
                return null != (n = c.Z.getCount(t.id)) ? n : 0;
            },
            [t.id]
        ),
        { firstMessage: _ } = (0, a.e7)([d.Z], () => d.Z.getMessage(t.id), [t.id]),
        E = p && b && null == _,
        O = n && (b || (e && m < 1) || E),
        N = n && e && !b && m > 0 && null != _;
    return C && (!p || E) && (b || O || N)
        ? (0, i.jsx)(l.sNh, {
              id: 'delete-channel',
              label: t.type === g.d4z.GUILD_CATEGORY ? Z.intl.string(Z.t.ifbXnJ) : t.isForumPost() ? (O ? Z.intl.string(Z.t.nEOg1N) : Z.intl.string(Z.t.xwMqDw)) : t.isThread() ? Z.intl.string(Z.t.H7vTe3) : Z.intl.string(Z.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, s.w)(t, function () {
                      N ? o.Z.deleteMessage(t.id, v.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id);
                  });
              }
          })
        : null;
}
