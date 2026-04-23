n.d(t, { e: () => h });
var i = n(17928),
    l = n(164956),
    s = n(34457),
    r = n(734057),
    a = n(317525),
    o = n(71393),
    d = n(599941),
    c = n(855918),
    u = n(652215);
function h(e) {
    let { guildId: t, channelId: n } = e,
        h = (0, d.uP)(t);
    return (0, i.yK)([r.A, o.A, l.A], () => {
        let e = r.A.getChannel(n),
            i = o.A.getGuild(t),
            d = l.A.isViewingServerShop(t);
        return null != i && null != e
            ? h.filter((t) =>
                  (function (e, t, n) {
                      let { isPreviewingRoles: i = !1 } =
                          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                      if (!(i || e.published)) return !1;
                      let l = n.permissionOverwrites[e.role_id];
                      if ((0, c.Uj)(n, l)) return !0;
                      let r = a.A.getEveryoneRole(t),
                          o = null != r && !(0, s._m)(r, u.xBc.VIEW_CHANNEL),
                          d = (0, c.AN)(n, n.permissionOverwrites[t.id]),
                          h = a.A.getRole(t.id, e.role_id);
                      return o && !d && null != h && (0, c.iR)(h) && !(0, c.AN)(n, l);
                  })(t, i, e, { isPreviewingRoles: d }),
              )
            : [];
    }, [t, n, h]);
}
