t.d(n, { e: () => h });
var i = t(17928),
    l = t(164956),
    s = t(34457),
    a = t(734057),
    r = t(317525),
    d = t(71393),
    o = t(599941),
    c = t(855918),
    u = t(652215);
function h(e) {
    let { guildId: n, channelId: t } = e,
        h = (0, o.uP)(n);
    return (0, i.yK)([a.A, d.A, l.A], () => {
        let e = a.A.getChannel(t),
            i = d.A.getGuild(n),
            o = l.A.isViewingServerShop(n);
        return null != i && null != e
            ? h.filter((n) =>
                  (function (e, n, t) {
                      let { isPreviewingRoles: i = !1 } =
                          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                      if (!(i || e.published)) return !1;
                      let l = t.permissionOverwrites[e.role_id];
                      if ((0, c.Uj)(t, l)) return !0;
                      let a = r.A.getEveryoneRole(n),
                          d = null != a && !(0, s._m)(a, u.xBc.VIEW_CHANNEL),
                          o = (0, c.AN)(t, t.permissionOverwrites[n.id]),
                          h = r.A.getRole(n.id, e.role_id);
                      return d && !o && null != h && (0, c.iR)(h) && !(0, c.AN)(t, l);
                  })(n, i, e, { isPreviewingRoles: o }),
              )
            : [];
    }, [n, t, h]);
}
