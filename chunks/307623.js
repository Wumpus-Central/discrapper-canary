n.d(e, { A: () => N });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(435183),
    s = n(843472),
    o = n(608226),
    d = n(969043),
    u = n(715757),
    c = n(456874),
    g = n(961350),
    _ = n(576705),
    A = n(661191),
    S = n(652215),
    f = n(985018);
function N(t) {
    let e = t.isForumPost(),
        n = (0, r.bG)([g.default], () => t.isOwner(g.default.getId()), [t]),
        N = (0, u.V)(t),
        { canManageChannel: E, canAccessChannel: h } = (0, r.cf)(
            [_.A],
            () => ({
                canAccessChannel: _.A.can(t.accessPermissions, t),
                canManageChannel: _.A.can(t.isThread() ? S.xBc.MANAGE_THREADS : S.xBc.MANAGE_CHANNELS, t),
            }),
            [t],
        ),
        b = (0, r.bG)([c.A], () => {
            var e;
            return null != (e = c.A.getCount(t.id)) ? e : 0;
        }, [t.id]),
        { firstMessage: v } = (0, r.bG)([d.A], () => d.A.getMessage(t.id), [t.id]),
        p = N && E && null == v,
        O = e && (E || (n && b < 1) || p),
        L = e && n && !E && b > 0 && null != v;
    return h && (!N || p) && (E || O || L)
        ? (0, i.jsx)(l.Drp, {
              id: "delete-channel",
              label:
                  t.type === S.rbe.GUILD_CATEGORY
                      ? f.intl.string(f.t.ifbXnL)
                      : t.isForumPost()
                        ? O
                            ? f.intl.string(f.t.nEOg1N)
                            : f.intl.string(f.t.xwMqD7)
                        : t.isThread()
                          ? f.intl.string(f.t.H7vTe2)
                          : f.intl.string(f.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, o.O)(t, function () {
                      L ? s.A.deleteMessage(t.id, A.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id);
                  });
              },
          })
        : null;
}
