n.d(t, { e: () => f });
var r = n(311907),
    l = n(164956),
    i = n(34457),
    a = n(734057),
    s = n(317525),
    o = n(71393),
    c = n(599941),
    u = n(855918),
    d = n(652215);
function f(e) {
    let { guildId: t, channelId: n } = e,
        f = (0, c.uP)(t);
    return (0, r.yK)([a.A, o.A, l.A], () => {
        let e = a.A.getChannel(n),
            r = o.A.getGuild(t),
            c = l.A.isViewingServerShop(t);
        return null != r && null != e
            ? f.filter((t) =>
                  (function (e, t, n) {
                      let { isPreviewingRoles: r = !1 } =
                          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                      if (!(r || e.published)) return !1;
                      let l = n.permissionOverwrites[e.role_id];
                      if ((0, u.Uj)(n, l)) return !0;
                      let a = s.A.getEveryoneRole(t),
                          o = null != a && !(0, i._m)(a, d.xBc.VIEW_CHANNEL),
                          c = (0, u.AN)(n, n.permissionOverwrites[t.id]),
                          f = s.A.getRole(t.id, e.role_id);
                      return o && !c && null != f && (0, u.iR)(f) && !(0, u.AN)(n, l);
                  })(t, r, e, { isPreviewingRoles: c }),
              )
            : [];
    }, [t, n, f]);
}
