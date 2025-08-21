t.d(n, { Z: () => b });
var i = t(951288);
t(647438);
var r = t(442837),
    l = t(481060),
    a = t(787014),
    o = t(904245),
    s = t(787263),
    c = t(660189),
    u = t(216572),
    d = t(144140),
    f = t(314897),
    h = t(496675),
    p = t(709054),
    g = t(981631),
    O = t(388032);
function b(e) {
    let n = e.isForumPost(),
        t = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        b = (0, u.HL)(e),
        { canManageChannel: v, canAccessChannel: y } = (0, r.cj)(
            [h.Z],
            () => ({
                canAccessChannel: h.Z.can(e.accessPermissions, e),
                canManageChannel: h.Z.can(e.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        Z = (0, r.e7)([d.Z], () => {
            var n;
            return null != (n = d.Z.getCount(e.id)) ? n : 0;
        }, [e.id]),
        { firstMessage: m } = (0, r.e7)([c.Z], () => c.Z.getMessage(e.id), [e.id]),
        _ = b && v && null == m,
        j = n && (v || (t && Z < 1) || _),
        C = n && t && !v && Z > 0 && null != m;
    return y && (!b || _) && (v || j || C)
        ? (0, i.jsx)(l.sNh, {
              id: "delete-channel",
              label:
                  e.type === g.d4z.GUILD_CATEGORY
                      ? O.intl.string(O.t.ifbXnJ)
                      : e.isForumPost()
                        ? j
                            ? O.intl.string(O.t.nEOg1N)
                            : O.intl.string(O.t.xwMqDw)
                        : e.isThread()
                          ? O.intl.string(O.t.H7vTe3)
                          : O.intl.string(O.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, s.w)(e, function () {
                      C ? o.Z.deleteMessage(e.id, p.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
