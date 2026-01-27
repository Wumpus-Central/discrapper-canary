n.d(t, {
    A: () => b,
});
var r,
    i,
    l,
    s,
    a,
    o = n(311907),
    c = n(73153),
    d = n(734057),
    u = n(650048),
    _ = n(71393),
    p = n(309010),
    m = n(645959),
    g = n(652215);
let A = (null != (i = null == (s = window) || null == (l = s.location) ? void 0 : l.pathname) ? i : "").startsWith(
    g.BVt.ACTIVITIES,
)
    ? g.BVt.ACTIVITIES
    : null;

function f(e) {
    let { link: t } = e;
    if (A === t) return !1;
    A = t;
}
class h extends (a = o.Ay.Store) {
    initialize() {
        this.waitFor(u.A, m.A, p.A, _.A, d.A);
    }
    getHomeLink() {
        return null != A ? A : u.A.fallbackRoute;
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "AppViewStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "AppViewStore");
let b = new h(c.h, {
    OVERLAY_INITIALIZE: function () {
        let e = m.A.getPrivateChannelIds(),
            t = p.A.getChannelId(g.ME);
        (null != t || null != e[0]) && (A = g.BVt.CHANNEL(g.ME, null != t ? t : e[0]));
    },
    APP_VIEW_SET_HOME_LINK: f,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        f({
            link: t.pathname,
            type: "APP_VIEW_SET_HOME_LINK",
        });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == A || !A.startsWith(g.BVt.APPLICATION_STORE)) return !1;
        A = g.BVt.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = g.BVt.CHANNEL(g.ME, n);
            if (e !== A) return (A = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != A && A === g.BVt.CHANNEL(g.ME, t.id) && (A = null);
    },
});
