n.d(t, { C: () => p });
var r = n(442837),
    i = n(160404),
    l = n(345162),
    a = n(592125),
    o = n(485386),
    s = n(430824),
    c = n(584825),
    u = n(790285),
    d = n(981631);
function p(e) {
    let { guildId: t, channelId: n } = e,
        p = (0, c.qi)(t);
    return (0, r.Wu)(
        [a.Z, s.Z, i.Z],
        () => {
            let e = a.Z.getChannel(n),
                r = s.Z.getGuild(t),
                c = i.Z.isViewingServerShop(t);
            return null != r && null != e
                ? p.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(r || e.published)) return !1;
                          let i = n.permissionOverwrites[e.role_id];
                          if ((0, u.TG)(n, i)) return !0;
                          let a = o.Z.getEveryoneRole(t),
                              s = null != a && !(0, l.Fs)(a, d.Plq.VIEW_CHANNEL),
                              c = (0, u.wB)(n, n.permissionOverwrites[t.id]),
                              p = o.Z.getRole(t.id, e.role_id);
                          return s && !c && null != p && (0, u.yt)(p) && !(0, u.wB)(n, i);
                      })(t, r, e, { isPreviewingRoles: c })
                  )
                : [];
        },
        [t, n, p]
    );
}
