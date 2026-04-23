n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(734057),
    l = n(650048),
    o = n(71393),
    a = n(309010),
    d = n(567761),
    c = n(652215);
let _ = (window?.location?.pathname ?? "").startsWith(c.BVt.ACTIVITIES) ? c.BVt.ACTIVITIES : null;
function u(e) {
    let { link: t } = e;
    if (_ === t) return !1;
    _ = t;
}
class g extends i.Ay.Store {
    static displayName = "AppViewStore";
    initialize() {
        this.waitFor(l.A, d.default, a.A, o.A, s.A);
    }
    getHomeLink() {
        return _ ?? l.A.fallbackRoute;
    }
}
let h = new g(r.h, {
    OVERLAY_INITIALIZE: function () {
        let e = d.default.getPrivateChannelIds(),
            t = a.A.getChannelId(c.ME);
        (null != t || null != e[0]) && (_ = c.BVt.CHANNEL(c.ME, t ?? e[0]));
    },
    APP_VIEW_SET_HOME_LINK: u,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        u({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == _ || !_.startsWith(c.BVt.APPLICATION_STORE)) return !1;
        _ = c.BVt.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = c.BVt.CHANNEL(c.ME, n);
            if (e !== _) return (_ = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != _ && _ === c.BVt.CHANNEL(c.ME, t.id) && (_ = null);
    },
});
