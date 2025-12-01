n.d(t, { Z: () => T });
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
    p = n(944486),
    _ = n(55589),
    m = n(981631);
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
let g = (null != (a = null == (i = window) || null == (r = i.location) ? void 0 : r.pathname) ? a : "").startsWith(
    m.Z5c.ACTIVITIES,
)
    ? m.Z5c.ACTIVITIES
    : null;
function E() {
    let e = _.Z.getPrivateChannelIds(),
        t = p.Z.getChannelId(m.ME);
    (null != t || null != e[0]) && (g = m.Z5c.CHANNEL(m.ME, null != t ? t : e[0]));
}
function b(e) {
    let { link: t } = e;
    if (g === t) return !1;
    g = t;
}
function y() {
    if (null == g || !g.startsWith(m.Z5c.APPLICATION_STORE)) return !1;
    g = m.Z5c.APPLICATION_STORE;
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
        let e = m.Z5c.CHANNEL(m.ME, n);
        if (e !== g) return (g = e), !0;
    }
    return !1;
}
function S(e) {
    let { channel: t } = e;
    null == t.guild_id && null != t.id && null != g && g === m.Z5c.CHANNEL(m.ME, t.id) && (g = null);
}
class I extends (o = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, _.Z, p.Z, f.Z, u.Z);
    }
    getHomeLink() {
        return null != g ? g : d.Z.fallbackRoute;
    }
}
h(I, "displayName", "AppViewStore");
let T = new I(l.Z, {
    OVERLAY_INITIALIZE: E,
    APP_VIEW_SET_HOME_LINK: b,
    APPLICATION_STORE_LOCATION_CHANGE: O,
    APPLICATION_STORE_RESET_NAVIGATION: y,
    CHANNEL_SELECT: v,
    CHANNEL_DELETE: S,
});
