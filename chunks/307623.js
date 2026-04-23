n.d(t, { A: () => T });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(477782),
    a = n(435183),
    u = n(720149),
    s = n(608226),
    d = n(969043),
    o = n(715757),
    c = n(456874),
    E = n(495544),
    _ = n(576705),
    A = n(935208),
    N = n(652215),
    h = n(985018);
function T(e) {
    let t = e.isForumPost(),
        n = (0, i.bG)([E.default], () => e.isOwner(E.default.getId()), [e]),
        T = (0, o.V)(e),
        { canManageChannel: S, canAccessChannel: f } = (0, i.cf)(
            [_.A],
            () => ({
                canAccessChannel: _.A.can(e.accessPermissions, e),
                canManageChannel: _.A.can(e.isThread() ? N.xBc.MANAGE_THREADS : N.xBc.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        C = (0, i.bG)([c.A], () => c.A.getCount(e.id) ?? 0, [e.id]),
        { firstMessage: g } = (0, i.bG)([d.A], () => d.A.getMessage(e.id), [e.id]),
        I = T && S && null == g,
        m = t && (S || (n && C < 1) || I),
        y = t && n && !S && C > 0 && null != g;
    return f && (!T || I) && (S || m || y)
        ? (0, l.jsx)(r.Dr, {
              id: "delete-channel",
              label:
                  e.type === N.rbe.GUILD_CATEGORY
                      ? h.intl.string(h.t.ifbXnL)
                      : e.isForumPost()
                        ? m
                            ? h.intl.string(h.t.nEOg1N)
                            : h.intl.string(h.t.xwMqD7)
                        : e.isThread()
                          ? h.intl.string(h.t.H7vTe2)
                          : h.intl.string(h.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, s.O)(e, function () {
                      y ? u.A.deleteMessage(e.id, A.default.castChannelIdAsMessageId(e.id)) : a.Ay.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
