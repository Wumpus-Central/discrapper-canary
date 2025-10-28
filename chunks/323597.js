e.d(n, { Z: () => Z });
var i = e(951288);
e(647438);
var a = e(442837),
    l = e(481060),
    r = e(787014),
    s = e(904245),
    o = e(787263),
    d = e(660189),
    u = e(216572),
    c = e(144140),
    h = e(314897),
    f = e(496675),
    g = e(709054),
    v = e(981631),
    m = e(388032);
function Z(t) {
    let n = t.isForumPost(),
        e = (0, a.e7)([h.default], () => t.isOwner(h.default.getId()), [t]),
        Z = (0, u.HL)(t),
        { canManageChannel: b, canAccessChannel: p } = (0, a.cj)(
            [f.Z],
            () => ({
                canAccessChannel: f.Z.can(t.accessPermissions, t),
                canManageChannel: f.Z.can(t.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, t),
            }),
            [t],
        ),
        C = (0, a.e7)([c.Z], () => {
            var n;
            return null != (n = c.Z.getCount(t.id)) ? n : 0;
        }, [t.id]),
        { firstMessage: _ } = (0, a.e7)([d.Z], () => d.Z.getMessage(t.id), [t.id]),
        O = Z && b && null == _,
        N = n && (b || (e && C < 1) || O),
        j = n && e && !b && C > 0 && null != _;
    return p && (!Z || O) && (b || N || j)
        ? (0, i.jsx)(l.sNh, {
              id: "delete-channel",
              label:
                  t.type === v.d4z.GUILD_CATEGORY
                      ? m.intl.string(m.t.ifbXnL)
                      : t.isForumPost()
                        ? N
                            ? m.intl.string(m.t.nEOg1N)
                            : m.intl.string(m.t.xwMqD7)
                        : t.isThread()
                          ? m.intl.string(m.t.H7vTe2)
                          : m.intl.string(m.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, o.w)(t, function () {
                      j ? s.Z.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id);
                  });
              },
          })
        : null;
}
