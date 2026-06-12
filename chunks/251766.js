t.d(n, { e: () => h });
var l = t(17928),
    i = t(164956),
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
    return (0, l.yK)([a.A, d.A, i.A], () => {
        let e = a.A.getChannel(t),
            l = d.A.getGuild(n),
            o = i.A.isViewingServerShop(n);
        return null != l && null != e
            ? h.filter((n) =>
                  (function (e, n, t) {
                      let { isPreviewingRoles: l = !1 } =
                          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                      if (!(l || e.published)) return !1;
                      let i = t.permissionOverwrites[e.role_id];
                      if ((0, c.Uj)(t, i)) return !0;
                      let a = r.A.getEveryoneRole(n),
                          d = null != a && !(0, s._m)(a, u.xBc.VIEW_CHANNEL),
                          o = (0, c.AN)(t, t.permissionOverwrites[n.id]),
                          h = r.A.getRole(n.id, e.role_id);
                      return d && !o && null != h && (0, c.iR)(h) && !(0, c.AN)(t, i);
                  })(n, l, e, { isPreviewingRoles: o }),
              )
            : [];
    }, [n, t, h]);
}
