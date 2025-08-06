n.d(t, { C: () => h });
var r = n(442837),
    i = n(160404),
    l = n(345162),
    a = n(592125),
    s = n(485386),
    o = n(430824),
    c = n(584825),
    u = n(790285),
    d = n(981631);
function h(e) {
    let { guildId: t, channelId: n } = e,
        h = (0, c.qi)(t);
    return (0, r.Wu)(
        [a.Z, o.Z, i.Z],
        () => {
            let e = a.Z.getChannel(n),
                r = o.Z.getGuild(t),
                c = i.Z.isViewingServerShop(t);
            return null != r && null != e
                ? h.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(r || e.published)) return !1;
                          let i = n.permissionOverwrites[e.role_id];
                          if ((0, u.TG)(n, i)) return !0;
                          let a = s.Z.getEveryoneRole(t),
                              o = null != a && !(0, l.Fs)(a, d.Plq.VIEW_CHANNEL),
                              c = (0, u.wB)(n, n.permissionOverwrites[t.id]),
                              h = s.Z.getRole(t.id, e.role_id);
                          return o && !c && null != h && (0, u.yt)(h) && !(0, u.wB)(n, i);
                      })(t, r, e, { isPreviewingRoles: c })
                  )
                : [];
        },
        [t, n, h]
    );
}
