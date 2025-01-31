n.d(t, { C: () => u });
var i = n(149765),
    l = n(442837),
    a = n(160404),
    r = n(592125),
    s = n(430824),
    o = n(584825),
    c = n(790285),
    d = n(981631);
function u(e) {
    let { guildId: t, channelId: n } = e,
        u = (0, o.qi)(t);
    return (0, l.Wu)(
        [r.Z, s.Z, a.Z],
        () => {
            let e = r.Z.getChannel(n),
                l = s.Z.getGuild(t),
                o = a.Z.isViewingServerShop(t);
            return null != l && null != e
                ? u.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: l = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(l || e.published)) return !1;
                          let a = n.permissionOverwrites[e.role_id];
                          if ((0, c.TG)(n, a)) return !0;
                          let r = s.Z.getRole(t.id, t.getEveryoneRoleId()),
                              o = null != r && !i.e$(r.permissions, d.Plq.VIEW_CHANNEL),
                              u = (0, c.wB)(n, n.permissionOverwrites[t.id]),
                              h = s.Z.getRole(t.id, e.role_id);
                          return o && !u && null != h && (0, c.MT)(h) && !(0, c.wB)(n, a);
                      })(t, l, e, { isPreviewingRoles: o })
                  )
                : [];
        },
        [t, n, u]
    );
}
