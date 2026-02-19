"use strict";
n.d(t, { e: () => h });
var i = n(311907),
    s = n(164956),
    l = n(34457),
    r = n(734057),
    a = n(317525),
    o = n(71393),
    c = n(599941),
    d = n(855918),
    u = n(652215);
function h(e) {
    let { guildId: t, channelId: n } = e,
        h = (0, c.uP)(t);
    return (0, i.yK)([r.A, o.A, s.A], () => {
        let e = r.A.getChannel(n),
            i = o.A.getGuild(t),
            c = s.A.isViewingServerShop(t);
        return null != i && null != e
            ? h.filter((t) =>
                  (function (e, t, n) {
                      let { isPreviewingRoles: i = !1 } =
                          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                      if (!(i || e.published)) return !1;
                      let s = n.permissionOverwrites[e.role_id];
                      if ((0, d.Uj)(n, s)) return !0;
                      let r = a.A.getEveryoneRole(t),
                          o = null != r && !(0, l._m)(r, u.xBc.VIEW_CHANNEL),
                          c = (0, d.AN)(n, n.permissionOverwrites[t.id]),
                          h = a.A.getRole(t.id, e.role_id);
                      return o && !c && null != h && (0, d.iR)(h) && !(0, d.AN)(n, s);
                  })(t, i, e, { isPreviewingRoles: c }),
              )
            : [];
    }, [t, n, h]);
}
