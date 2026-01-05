n.d(t, { Z: () => I });
var r,
    i,
    a,
    o,
    s = n(442837),
    l = n(570140),
    c = n(592125),
    u = n(896797),
    d = n(430824),
    f = n(944486),
    p = n(55589),
    _ = n(981631);
function m(e, t, n) {
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
let h = (null != (a = null == (i = window) || null == (r = i.location) ? void 0 : r.pathname) ? a : "").startsWith(
    _.Z5c.ACTIVITIES,
)
    ? _.Z5c.ACTIVITIES
    : null;
function g() {
    let e = p.Z.getPrivateChannelIds(),
        t = f.Z.getChannelId(_.ME);
    (null != t || null != e[0]) && (h = _.Z5c.CHANNEL(_.ME, null != t ? t : e[0]));
}
function E(e) {
    let { link: t } = e;
    if (h === t) return !1;
    h = t;
}
function b() {
    if (null == h || !h.startsWith(_.Z5c.APPLICATION_STORE)) return !1;
    h = _.Z5c.APPLICATION_STORE;
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
        let e = _.Z5c.CHANNEL(_.ME, n);
        if (e !== h) return (h = e), !0;
    }
    return !1;
}
function v(e) {
    let { channel: t } = e;
    null == t.guild_id && null != t.id && null != h && h === _.Z5c.CHANNEL(_.ME, t.id) && (h = null);
}
class S extends (o = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, p.Z, f.Z, d.Z, c.Z);
    }
    getHomeLink() {
        return null != h ? h : u.Z.fallbackRoute;
    }
}
m(S, "displayName", "AppViewStore");
let I = new S(l.Z, {
    OVERLAY_INITIALIZE: g,
    APP_VIEW_SET_HOME_LINK: E,
    APPLICATION_STORE_LOCATION_CHANGE: y,
    APPLICATION_STORE_RESET_NAVIGATION: b,
    CHANNEL_SELECT: O,
    CHANNEL_DELETE: v,
});
