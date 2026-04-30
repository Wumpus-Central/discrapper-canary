"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(734057),
    a = n(650048),
    o = n(71393),
    l = n(309010),
    u = n(567761),
    c = n(652215);
let d = (window?.location?.pathname ?? "").startsWith(c.BVt.ACTIVITIES) ? c.BVt.ACTIVITIES : null;
function _(e) {
    let { link: t } = e;
    if (d === t) return !1;
    d = t;
}
class f extends i.Ay.Store {
    static displayName = "AppViewStore";
    initialize() {
        this.waitFor(a.A, u.default, l.A, o.A, s.A);
    }
    getHomeLink() {
        return d ?? a.A.fallbackRoute;
    }
}
let h = new f(r.h, {
    OVERLAY_INITIALIZE: function () {
        let e = u.default.getPrivateChannelIds(),
            t = l.A.getChannelId(c.ME);
        (null != t || null != e[0]) && (d = c.BVt.CHANNEL(c.ME, t ?? e[0]));
    },
    APP_VIEW_SET_HOME_LINK: _,
    APPLICATION_STORE_LOCATION_CHANGE: function (e) {
        let { location: t } = e;
        _({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
    },
    APPLICATION_STORE_RESET_NAVIGATION: function () {
        if (null == d || !d.startsWith(c.BVt.APPLICATION_STORE)) return !1;
        d = c.BVt.APPLICATION_STORE;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null == t && null != n) {
            let e = c.BVt.CHANNEL(c.ME, n);
            if (e !== d) return (d = e), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null == t.guild_id && null != t.id && null != d && d === c.BVt.CHANNEL(c.ME, t.id) && (d = null);
    },
});
