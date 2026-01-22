n.d(t, { A: () => S });
var r,
    i,
    a,
    s,
    o = n(311907),
    l = n(73153),
    c = n(734057),
    u = n(650048),
    d = n(71393),
    f = n(309010),
    p = n(645959),
    _ = n(652215);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = (null != (r = null == (a = window) || null == (i = a.location) ? void 0 : i.pathname) ? r : "").startsWith(
    _.BVt.ACTIVITIES,
)
    ? _.BVt.ACTIVITIES
    : null;
function g() {
    let e = p.A.getPrivateChannelIds(),
        t = f.A.getChannelId(_.ME);
    (null != t || null != e[0]) && (m = _.BVt.CHANNEL(_.ME, null != t ? t : e[0]));
}
function E(e) {
    let { link: t } = e;
    if (m === t) return !1;
    m = t;
}
function b() {
    if (null == m || !m.startsWith(_.BVt.APPLICATION_STORE)) return !1;
    m = _.BVt.APPLICATION_STORE;
}
function y(e) {
    let { location: t } = e;
    E({
        link: t.pathname,
        type: "APP_VIEW_SET_HOME_LINK",
    });
}
function O(e) {
    let { guildId: t, channelId: n } = e;
    if (null == t && null != n) {
        let e = _.BVt.CHANNEL(_.ME, n);
        if (e !== m) return (m = e), !0;
    }
    return !1;
}
function A(e) {
    let { channel: t } = e;
    null == t.guild_id && null != t.id && null != m && m === _.BVt.CHANNEL(_.ME, t.id) && (m = null);
}
class v extends (s = o.Ay.Store) {
    initialize() {
        this.waitFor(u.A, p.A, f.A, d.A, c.A);
    }
    getHomeLink() {
        return null != m ? m : u.A.fallbackRoute;
    }
}
h(v, "displayName", "AppViewStore");
let S = new v(l.h, {
    OVERLAY_INITIALIZE: g,
    APP_VIEW_SET_HOME_LINK: E,
    APPLICATION_STORE_LOCATION_CHANGE: y,
    APPLICATION_STORE_RESET_NAVIGATION: b,
    CHANNEL_SELECT: O,
    CHANNEL_DELETE: A,
});
