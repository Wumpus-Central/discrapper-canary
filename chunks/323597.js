n.d(t, { Z: () => v });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    u = n(787014),
    a = n(904245),
    o = n(787263),
    c = n(660189),
    d = n(216572),
    s = n(144140),
    f = n(314897),
    E = n(496675),
    g = n(709054),
    O = n(981631),
    p = n(388032);
function v(e) {
    let t = e.isForumPost(),
        n = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        v = (0, d.HL)(e),
        { canManageChannel: Z, canAccessChannel: h } = (0, r.cj)(
            [E.Z],
            () => ({
                canAccessChannel: E.Z.can(e.accessPermissions, e),
                canManageChannel: E.Z.can(e.isThread() ? O.Plq.MANAGE_THREADS : O.Plq.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        y = (0, r.e7)([s.Z], () => {
            var t;
            return null != (t = s.Z.getCount(e.id)) ? t : 0;
        }, [e.id]),
        { firstMessage: _ } = (0, r.e7)([c.Z], () => c.Z.getMessage(e.id), [e.id]),
        b = v && Z && null == _,
        N = t && (Z || (n && y < 1) || b),
        m = t && n && !Z && y > 0 && null != _;
    return h && (!v || b) && (Z || N || m)
        ? (0, i.jsx)(l.sNh, {
              id: "delete-channel",
              label:
                  e.type === O.d4z.GUILD_CATEGORY
                      ? p.intl.string(p.t.ifbXnL)
                      : e.isForumPost()
                        ? N
                            ? p.intl.string(p.t.nEOg1N)
                            : p.intl.string(p.t.xwMqD7)
                        : e.isThread()
                          ? p.intl.string(p.t.H7vTe2)
                          : p.intl.string(p.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, o.w)(e, function () {
                      m ? a.Z.deleteMessage(e.id, g.default.castChannelIdAsMessageId(e.id)) : u.ZP.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
