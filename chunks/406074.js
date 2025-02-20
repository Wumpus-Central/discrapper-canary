n.d(t, { C: () => d });
var r = n(149765),
    i = n(442837),
    l = n(160404),
    o = n(592125),
    a = n(430824),
    s = n(584825),
    c = n(790285),
    u = n(981631);
function d(e) {
    let { guildId: t, channelId: n } = e,
        d = (0, s.qi)(t);
    return (0, i.Wu)(
        [o.Z, a.Z, l.Z],
        () => {
            let e = o.Z.getChannel(n),
                i = a.Z.getGuild(t),
                s = l.Z.isViewingServerShop(t);
            return null != i && null != e
                ? d.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(i || e.published)) return !1;
                          let l = n.permissionOverwrites[e.role_id];
                          if ((0, c.TG)(n, l)) return !0;
                          let o = a.Z.getRole(t.id, t.getEveryoneRoleId()),
                              s = null != o && !r.e$(o.permissions, u.Plq.VIEW_CHANNEL),
                              d = (0, c.wB)(n, n.permissionOverwrites[t.id]),
                              p = a.Z.getRole(t.id, e.role_id);
                          return s && !d && null != p && (0, c.MT)(p) && !(0, c.wB)(n, l);
                      })(t, i, e, { isPreviewingRoles: s })
                  )
                : [];
        },
        [t, n, d]
    );
}
