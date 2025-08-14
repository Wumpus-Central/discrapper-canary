n.d(t, { Z: () => _ });
var i,
    r,
    s,
    a,
    l,
    o = n(442837),
    c = n(570140),
    d = n(592125),
    u = n(896797),
    m = n(430824),
    p = n(944486),
    g = n(55589),
    h = n(981631);
let f = (null != (a = null == (s = window) || null == (r = s.location) ? void 0 : r.pathname) ? a : "").startsWith(
    h.Z5c.ACTIVITIES,
)
    ? h.Z5c.ACTIVITIES
    : null;
function b(e) {
    let { link: t } = e;
    if (f === t) return !1;
    f = t;
}
class x extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, g.Z, p.Z, m.Z, d.Z);
    }
    getHomeLink() {
        return null != f ? f : u.Z.fallbackRoute;
    }
}
(i = "displayName") in x
    ? Object.defineProperty(x, i, {
          value: "AppViewStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (x[i] = "AppViewStore");
let _ = new x(c.Z, {
    OVERLAY_INITIALIZE: function () {
        let e = g.Z.getPrivateChannelIds(),
            t = p.Z.getChannelId(h.ME);
        (null != t || null != e[0]) && (f = h.Z5c.CHANNEL(h.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: b,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        b({
            link: t.pathname,
            type: "APP_VIEW_SET_HOME_LINK",
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == f || !f.startsWith(h.Z5c.APPLICATION_STORE)) return !1;
        f = h.Z5c.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = h.Z5c.CHANNEL(h.ME, n);
            if (e !== f) return (f = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != f && f === h.Z5c.CHANNEL(h.ME, t.id) && (f = null);
    },
});
