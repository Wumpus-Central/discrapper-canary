n.d(t, { Z: () => C });
var i = n(255367);
n(73800);
var a = n(442837),
    r = n(481060),
    l = n(787014),
    o = n(904245),
    d = n(787263),
    u = n(660189),
    s = n(216572),
    c = n(144140),
    f = n(314897),
    v = n(496675),
    p = n(709054),
    h = n(981631),
    O = n(388032);
function C(e) {
    let t = e.isForumPost(),
        n = (0, a.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        C = (0, s.HL)(e),
        { canManageChannel: E, canAccessChannel: g } = (0, a.cj)(
            [v.Z],
            () => ({
                canAccessChannel: v.Z.can(e.accessPermissions, e),
                canManageChannel: v.Z.can(e.isThread() ? h.Plq.MANAGE_THREADS : h.Plq.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        _ = (0, a.e7)([c.Z], () => {
            var t;
            return null != (t = c.Z.getCount(e.id)) ? t : 0;
        }, [e.id]),
        { firstMessage: A } = (0, a.e7)([u.Z], () => u.Z.getMessage(e.id), [e.id]),
        y = C && E && null == A,
        b = t && (E || (n && _ < 1) || y),
        Z = t && n && !E && _ > 0 && null != A;
    return g && (!C || y) && (E || b || Z)
        ? (0, i.jsx)(r.sNh, {
              id: "delete-channel",
              label:
                  e.type === h.d4z.GUILD_CATEGORY
                      ? O.intl.string(O.t.ifbXnJ)
                      : e.isForumPost()
                        ? b
                            ? O.intl.string(O.t.nEOg1N)
                            : O.intl.string(O.t.xwMqDw)
                        : e.isThread()
                          ? O.intl.string(O.t.H7vTe3)
                          : O.intl.string(O.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, d.w)(e, function () {
                      Z ? o.Z.deleteMessage(e.id, p.default.castChannelIdAsMessageId(e.id)) : l.ZP.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
