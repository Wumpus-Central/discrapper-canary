n.d(t, { A: () => A });
var i = n(311907),
    s = n(73153),
    r = n(734057),
    a = n(650048),
    l = n(71393),
    o = n(309010),
    c = n(645959),
    d = n(652215);
let u = (window?.location?.pathname ?? "").startsWith(d.BVt.ACTIVITIES) ? d.BVt.ACTIVITIES : null;
function _(e) {
    let { link: t } = e;
    if (u === t) return !1;
    u = t;
}
class m extends i.Ay.Store {
    static displayName = "AppViewStore";
    initialize() {
        this.waitFor(a.A, c.default, o.A, l.A, r.A);
    }
    getHomeLink() {
        return u ?? a.A.fallbackRoute;
    }
}
let A = new m(s.h, {
    OVERLAY_INITIALIZE: function () {
        let e = c.default.getPrivateChannelIds(),
            t = o.A.getChannelId(d.ME);
        (null != t || null != e[0]) && (u = d.BVt.CHANNEL(d.ME, t ?? e[0]));
    },
    APP_VIEW_SET_HOME_LINK: _,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        _({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == u || !u.startsWith(d.BVt.APPLICATION_STORE)) return !1;
        u = d.BVt.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = d.BVt.CHANNEL(d.ME, n);
            if (e !== u) return (u = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != u && u === d.BVt.CHANNEL(d.ME, t.id) && (u = null);
    },
});
