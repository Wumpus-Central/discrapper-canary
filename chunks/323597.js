t.d(e, { Z: () => Z });
var i = t(255367);
t(73800);
var r = t(442837),
    a = t(481060),
    l = t(787014),
    o = t(904245),
    s = t(787263),
    d = t(660189),
    u = t(216572),
    c = t(144140),
    f = t(314897),
    h = t(496675),
    v = t(709054),
    g = t(981631),
    p = t(388032);
function Z(n) {
    let e = n.isForumPost(),
        t = (0, r.e7)([f.default], () => n.isOwner(f.default.getId()), [n]),
        Z = (0, u.HL)(n),
        { canManageChannel: b, canAccessChannel: C } = (0, r.cj)(
            [h.Z],
            () => ({
                canAccessChannel: h.Z.can(n.accessPermissions, n),
                canManageChannel: h.Z.can(n.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, n)
            }),
            [n]
        ),
        m = (0, r.e7)(
            [c.Z],
            () => {
                var e;
                return null != (e = c.Z.getCount(n.id)) ? e : 0;
            },
            [n.id]
        ),
        { firstMessage: E } = (0, r.e7)([d.Z], () => d.Z.getMessage(n.id), [n.id]),
        y = e && (b || (t && m < 1)),
        _ = e && t && !b && m > 0 && null != E;
    return C && !Z && (b || y || _)
        ? (0, i.jsx)(a.sNh, {
              id: 'delete-channel',
              label: n.type === g.d4z.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnJ) : n.isForumPost() ? (y ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqDw)) : n.isThread() ? p.intl.string(p.t.H7vTe3) : p.intl.string(p.t['8D8Rsb']),
              color: 'danger',
              action: () => {
                  (0, s.w)(n, function () {
                      _ ? o.Z.deleteMessage(n.id, v.default.castChannelIdAsMessageId(n.id)) : l.ZP.deleteChannel(n.id);
                  });
              }
          })
        : null;
}
