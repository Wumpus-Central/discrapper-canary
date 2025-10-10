n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    u = n(904245),
    o = n(787263),
    c = n(660189),
    s = n(216572),
    d = n(144140),
    f = n(314897),
    E = n(496675),
    g = n(709054),
    O = n(981631),
    v = n(388032);
function p(e) {
    let t = e.isForumPost(),
        n = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
        p = (0, s.HL)(e),
        { canManageChannel: Z, canAccessChannel: N } = (0, r.cj)(
            [E.Z],
            () => ({
                canAccessChannel: E.Z.can(e.accessPermissions, e),
                canManageChannel: E.Z.can(e.isThread() ? O.Plq.MANAGE_THREADS : O.Plq.MANAGE_CHANNELS, e),
            }),
            [e],
        ),
        _ = (0, r.e7)([d.Z], () => {
            var t;
            return null != (t = d.Z.getCount(e.id)) ? t : 0;
        }, [e.id]),
        { firstMessage: b } = (0, r.e7)([c.Z], () => c.Z.getMessage(e.id), [e.id]),
        h = p && Z && null == b,
        y = t && (Z || (n && _ < 1) || h),
        P = t && n && !Z && _ > 0 && null != b;
    return N && (!p || h) && (Z || y || P)
        ? (0, i.jsx)(l.sNh, {
              id: "delete-channel",
              label:
                  e.type === O.d4z.GUILD_CATEGORY
                      ? v.intl.string(v.t.ifbXnJ)
                      : e.isForumPost()
                        ? y
                            ? v.intl.string(v.t.nEOg1N)
                            : v.intl.string(v.t.xwMqDw)
                        : e.isThread()
                          ? v.intl.string(v.t.H7vTe3)
                          : v.intl.string(v.t["8D8Rsb"]),
              color: "danger",
              action: () => {
                  (0, o.w)(e, function () {
                      P ? u.Z.deleteMessage(e.id, g.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id);
                  });
              },
          })
        : null;
}
