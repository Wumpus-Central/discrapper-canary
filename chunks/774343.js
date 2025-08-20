n.d(t, { Z: () => T });
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
    _ = n(55589),
    p = n(981631);
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
let m = (null != (a = null == (i = window) || null == (r = i.location) ? void 0 : r.pathname) ? a : "").startsWith(
    p.Z5c.ACTIVITIES,
)
    ? p.Z5c.ACTIVITIES
    : null;
function g() {
    let e = _.Z.getPrivateChannelIds(),
        t = f.Z.getChannelId(p.ME);
    (null != t || null != e[0]) && (m = p.Z5c.CHANNEL(p.ME, null != t ? t : e[0]));
}
function E(e) {
    let { link: t } = e;
    if (m === t) return !1;
    m = t;
}
function b() {
    if (null == m || !m.startsWith(p.Z5c.APPLICATION_STORE)) return !1;
    m = p.Z5c.APPLICATION_STORE;
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
        let e = p.Z5c.CHANNEL(p.ME, n);
        if (e !== m) return (m = e), !0;
    }
    return !1;
}
function v(e) {
    let { channel: t } = e;
    null == t.guild_id && null != t.id && null != m && m === p.Z5c.CHANNEL(p.ME, t.id) && (m = null);
}
class I extends (o = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, _.Z, f.Z, d.Z, c.Z);
    }
    getHomeLink() {
        return null != m ? m : u.Z.fallbackRoute;
    }
}
h(I, "displayName", "AppViewStore");
let T = new I(l.Z, {
    OVERLAY_INITIALIZE: g,
    APP_VIEW_SET_HOME_LINK: E,
    APPLICATION_STORE_LOCATION_CHANGE: y,
    APPLICATION_STORE_RESET_NAVIGATION: b,
    CHANNEL_SELECT: O,
    CHANNEL_DELETE: v,
});
