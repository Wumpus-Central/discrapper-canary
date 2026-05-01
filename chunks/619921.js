n.d(t, { A: () => A });
var i = n(17928),
    l = n(228366),
    s = n(734057),
    r = n(650048),
    a = n(71393),
    o = n(309010),
    d = n(567761),
    c = n(652215);
let u = (window?.location?.pathname ?? "").startsWith(c.BVt.ACTIVITIES) ? c.BVt.ACTIVITIES : null;
function h(e) {
    let { link: t } = e;
    if (u === t) return !1;
    u = t;
}
class g extends i.Ay.Store {
    static displayName = "AppViewStore";
    initialize() {
        this.waitFor(r.A, d.default, o.A, a.A, s.A);
    }
    getHomeLink() {
        return u ?? r.A.fallbackRoute;
    }
}
let A = new g(l.h, {
    OVERLAY_INITIALIZE: function () {
        let e = d.default.getPrivateChannelIds(),
            t = o.A.getChannelId(c.ME);
        (null != t || null != e[0]) && (u = c.BVt.CHANNEL(c.ME, t ?? e[0]));
    },
    APP_VIEW_SET_HOME_LINK: h,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        h({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == u || !u.startsWith(c.BVt.APPLICATION_STORE)) return !1;
        u = c.BVt.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = c.BVt.CHANNEL(c.ME, n);
            if (e !== u) return (u = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != u && u === c.BVt.CHANNEL(c.ME, t.id) && (u = null);
    },
});
