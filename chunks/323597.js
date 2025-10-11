n.d(t, { Z: () => h });
var i = n(951288);
n(647438);
var a = n(442837),
    l = n(481060),
    r = n(787014),
    o = n(904245),
    s = n(787263),
    u = n(660189),
    c = n(216572),
    d = n(144140),
    f = n(314897),
    g = n(496675),
    O = n(709054),
    p = n(981631),
    v = n(388032);
function h(e) {
    let t = e.isForumPost(),
        n = (0, a.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        h = (0, c.HL)(e),
        { canManageChannel: E, canAccessChannel: _ } = (0, a.cj)(
            [g.Z],
            () => ({
                canAccessChannel: g.Z.can(e.accessPermissions, e),
                canManageChannel: g.Z.can(e.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        b = (0, a.e7)([d.Z], () => {
            var t;
            return null != (t = d.Z.getCount(e.id)) ? t : 0;
        }, [e.id]),
        { firstMessage: C } = (0, a.e7)([u.Z], () => u.Z.getMessage(e.id), [e.id]),
        y = h && E && null == C,
        N = t && (E || (n && b < 1) || y),
        A = t && n && !E && b > 0 && null != C;
    return _ && (!h || y) && (E || N || A)
        ? (0, i.jsx)(l.sNh, {
              id: "delete-channel",
              label:
                  e.type === p.d4z.GUILD_CATEGORY
                      ? v.intl.string(v.t.ifbXnJ)
                      : e.isForumPost()
                        ? N
                            ? v.intl.string(v.t.nEOg1N)
                            : v.intl.string(v.t.xwMqDw)
                        : e.isThread()
                          ? v.intl.string(v.t.H7vTe3)
                          : v.intl.string(v.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, s.w)(e, function () {
                      A ? o.Z.deleteMessage(e.id, O.default.castChannelIdAsMessageId(e.id)) : r.ZP.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
