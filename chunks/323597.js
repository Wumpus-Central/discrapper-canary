e.d(n, { Z: () => m });
var i = e(54381);
e(473749);
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
    Z = e(388032);
function m(t) {
    let n = t.isForumPost(),
        e = (0, a.e7)([h.default], () => t.isOwner(h.default.getId()), [t]),
        m = (0, u.HL)(t),
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
        O = m && b && null == _,
        N = n && (b || (e && C < 1) || O),
        j = n && e && !b && C > 0 && null != _;
    return p && (!m || O) && (b || N || j)
        ? (0, i.jsx)(l.sNh, {
              id: "delete-channel",
              label:
                  t.type === v.d4z.GUILD_CATEGORY
                      ? Z.intl.string(Z.t.ifbXnL)
                      : t.isForumPost()
                        ? N
                            ? Z.intl.string(Z.t.nEOg1N)
                            : Z.intl.string(Z.t.xwMqD7)
                        : t.isThread()
                          ? Z.intl.string(Z.t.H7vTe2)
                          : Z.intl.string(Z.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, o.w)(t, function () {
                      j ? s.Z.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id);
                  });
              },
          })
        : null;
}
