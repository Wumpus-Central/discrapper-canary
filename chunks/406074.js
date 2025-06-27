n.d(t, { C: () => p });
var r = n(149765),
    i = n(442837),
    l = n(160404),
    o = n(592125),
    a = n(485386),
    s = n(430824),
    c = n(584825),
    u = n(790285),
    d = n(981631);
function p(e) {
    let { guildId: t, channelId: n } = e,
        p = (0, c.qi)(t);
    return (0, i.Wu)(
        [o.Z, s.Z, l.Z],
        () => {
            let e = o.Z.getChannel(n),
                i = s.Z.getGuild(t),
                c = l.Z.isViewingServerShop(t);
            return null != i && null != e
                ? p.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(i || e.published)) return !1;
                          let l = n.permissionOverwrites[e.role_id];
                          if ((0, u.TG)(n, l)) return !0;
                          let o = a.Z.getRole(t.id, t.getEveryoneRoleId()),
                              s = null != o && !r.e$(o.permissions, d.Plq.VIEW_CHANNEL),
                              c = (0, u.wB)(n, n.permissionOverwrites[t.id]),
                              p = a.Z.getRole(t.id, e.role_id);
                          return s && !c && null != p && (0, u.MT)(p) && !(0, u.wB)(n, l);
                      })(t, i, e, { isPreviewingRoles: c })
                  )
                : [];
        },
        [t, n, p]
    );
}
