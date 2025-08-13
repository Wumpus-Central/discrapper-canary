n.d(e, { Z: () => C });
var i = n(255367);
n(73800);
var a = n(442837),
    r = n(481060),
    l = n(787014),
    o = n(904245),
    s = n(787263),
    u = n(660189),
    c = n(216572),
    d = n(144140),
    f = n(314897),
    p = n(496675),
    O = n(709054),
    h = n(981631),
    g = n(388032);
function C(t) {
    let e = t.isForumPost(),
        n = (0, a.e7)([f.default], () => t.isOwner(f.default.getId()), [t]),
        C = (0, c.HL)(t),
        { canManageChannel: v, canAccessChannel: E } = (0, a.cj)(
            [p.Z],
            () => ({
                canAccessChannel: p.Z.can(t.accessPermissions, t),
                canManageChannel: p.Z.can(t.isThread() ? h.Plq.MANAGE_THREADS : h.Plq.MANAGE_CHANNELS, t),
            }),
            [t],
        ),
        _ = (0, a.e7)([d.Z], () => {
            var e;
            return null != (e = d.Z.getCount(t.id)) ? e : 0;
        }, [t.id]),
        { firstMessage: y } = (0, a.e7)([u.Z], () => u.Z.getMessage(t.id), [t.id]),
        A = C && v && null == y,
        b = e && (v || (n && _ < 1) || A),
        R = e && n && !v && _ > 0 && null != y;
    return E && (!C || A) && (v || b || R)
        ? (0, i.jsx)(r.sNh, {
              id: "delete-channel",
              label:
                  t.type === h.d4z.GUILD_CATEGORY
                      ? g.intl.string(g.t.ifbXnJ)
                      : t.isForumPost()
                        ? b
                            ? g.intl.string(g.t.nEOg1N)
                            : g.intl.string(g.t.xwMqDw)
                        : t.isThread()
                          ? g.intl.string(g.t.H7vTe3)
                          : g.intl.string(g.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, s.w)(t, function () {
                      R ? o.Z.deleteMessage(t.id, O.default.castChannelIdAsMessageId(t.id)) : l.ZP.deleteChannel(t.id);
                  });
              },
          })
        : null;
}
