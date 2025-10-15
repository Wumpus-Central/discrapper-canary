n.d(t, { Z: () => S });
var r,
    i,
    a,
    o,
    s = n(442837),
    l = n(570140),
    c = n(365113),
    u = n(592125),
    d = n(896797),
    f = n(430824),
    _ = n(944486),
    p = n(55589),
    h = n(981631);
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
let g = (null != (a = null == (i = window) || null == (r = i.location) ? void 0 : r.pathname) ? a : "").startsWith(
    h.Z5c.ACTIVITIES,
)
    ? h.Z5c.ACTIVITIES
    : null;
function E() {
    let e = p.Z.getPrivateChannelIds(),
        t = _.Z.getChannelId(h.ME);
    (null != t || null != e[0]) && (g = h.Z5c.CHANNEL(h.ME, null != t ? t : e[0]));
}
function b(e) {
    let { link: t } = e;
    if (g === t) return !1;
    g = t;
}
function y() {
    if (null == g || !g.startsWith(h.Z5c.APPLICATION_STORE)) return !1;
    g = h.Z5c.APPLICATION_STORE;
}
function O(e) {
    let { location: t } = e;
    b({
        link: t.pathname,
        type: "APP_VIEW_SET_HOME_LINK",
    });
}
function v(e) {
    let { guildId: t, channelId: n } = e;
    if (null == t && null != n && !c.o.getConfig({ location: "appviewstore" }).dmsTab) {
        let e = h.Z5c.CHANNEL(h.ME, n);
        if (e !== g) return (g = e), !0;
    }
    return !1;
}
function I(e) {
    let { channel: t } = e;
    null == t.guild_id && null != t.id && null != g && g === h.Z5c.CHANNEL(h.ME, t.id) && (g = null);
}
class T extends (o = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, p.Z, _.Z, f.Z, u.Z);
    }
    getHomeLink() {
        return null != g ? g : d.Z.fallbackRoute;
    }
}
m(T, "displayName", "AppViewStore");
let S = new T(l.Z, {
    OVERLAY_INITIALIZE: E,
    APP_VIEW_SET_HOME_LINK: b,
    APPLICATION_STORE_LOCATION_CHANGE: O,
    APPLICATION_STORE_RESET_NAVIGATION: y,
    CHANNEL_SELECT: v,
    CHANNEL_DELETE: I,
});
