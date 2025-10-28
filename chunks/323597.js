n.d(t, { Z: () => h });
var i = n(951288);
n(647438);
var l = n(442837),
    a = n(481060),
    r = n(787014),
    o = n(904245),
    s = n(787263),
    u = n(660189),
    c = n(216572),
    d = n(144140),
    f = n(314897),
    g = n(496675),
    O = n(709054),
    v = n(981631),
    p = n(388032);
function h(e) {
    let t = e.isForumPost(),
        n = (0, l.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        h = (0, c.HL)(e),
        { canManageChannel: _, canAccessChannel: E } = (0, l.cj)(
            [g.Z],
            () => ({
                canAccessChannel: g.Z.can(e.accessPermissions, e),
                canManageChannel: g.Z.can(e.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        b = (0, l.e7)([d.Z], () => {
            var t;
            return null != (t = d.Z.getCount(e.id)) ? t : 0;
        }, [e.id]),
        { firstMessage: C } = (0, l.e7)([u.Z], () => u.Z.getMessage(e.id), [e.id]),
        y = h && _ && null == C,
        N = t && (_ || (n && b < 1) || y),
        A = t && n && !_ && b > 0 && null != C;
    return E && (!h || y) && (_ || N || A)
        ? (0, i.jsx)(a.sNh, {
              id: "delete-channel",
              label:
                  e.type === v.d4z.GUILD_CATEGORY
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
                  (0, s.w)(e, function () {
                      A ? o.Z.deleteMessage(e.id, O.default.castChannelIdAsMessageId(e.id)) : r.ZP.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
