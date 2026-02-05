n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(435183),
    u = n(843472),
    d = n(608226),
    s = n(969043),
    o = n(715757),
    A = n(456874),
    c = n(961350),
    f = n(576705),
    E = n(661191),
    g = n(652215),
    _ = n(985018);
function v(e) {
    let t = e.isForumPost(),
        n = (0, l.bG)([c.default], () => e.isOwner(c.default.getId()), [e]),
        v = (0, o.V)(e),
        { canManageChannel: h, canAccessChannel: C } = (0, l.cf)(
            [f.A],
            () => ({
                canAccessChannel: f.A.can(e.accessPermissions, e),
                canManageChannel: f.A.can(e.isThread() ? g.xBc.MANAGE_THREADS : g.xBc.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        N = (0, l.bG)([A.A], () => A.A.getCount(e.id) ?? 0, [e.id]),
        { firstMessage: p } = (0, l.bG)([s.A], () => s.A.getMessage(e.id), [e.id]),
        I = v && h && null == p,
        G = t && (h || (n && N < 1) || I),
        T = t && n && !h && N > 0 && null != p;
    return C && (!v || I) && (h || G || T)
        ? (0, i.jsx)(r.Drp, {
              id: "delete-channel",
              label:
                  e.type === g.rbe.GUILD_CATEGORY
                      ? _.intl.string(_.t.ifbXnL)
                      : e.isForumPost()
                        ? G
                            ? _.intl.string(_.t.nEOg1N)
                            : _.intl.string(_.t.xwMqD7)
                        : e.isThread()
                          ? _.intl.string(_.t.H7vTe2)
                          : _.intl.string(_.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, d.O)(e, function () {
                      T ? u.A.deleteMessage(e.id, E.default.castChannelIdAsMessageId(e.id)) : a.Ay.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
