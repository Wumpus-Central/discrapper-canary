n.d(t, { A: () => E });
var i = n(311907),
    l = n(73153),
    r = n(734057),
    s = n(650048),
    o = n(71393),
    a = n(309010),
    d = n(645959),
    c = n(652215);
let u = (window?.location?.pathname ?? "").startsWith(c.BVt.ACTIVITIES) ? c.BVt.ACTIVITIES : null;
function _(e) {
    let { link: t } = e;
    if (u === t) return !1;
    u = t;
}
class A extends i.Ay.Store {
    static displayName = "AppViewStore";
    initialize() {
        this.waitFor(s.A, d.default, a.A, o.A, r.A);
    }
    getHomeLink() {
        return u ?? s.A.fallbackRoute;
    }
}
let E = new A(l.h, {
    OVERLAY_INITIALIZE: function () {
        let e = d.default.getPrivateChannelIds(),
            t = a.A.getChannelId(c.ME);
        (null != t || null != e[0]) && (u = c.BVt.CHANNEL(c.ME, t ?? e[0]));
    },
    APP_VIEW_SET_HOME_LINK: _,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        _({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
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
