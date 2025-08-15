n.d(t, { Z: () => y });
var r,
    i = n(442837),
    a = n(570140),
    o = n(353926),
    s = n(592125),
    l = n(430824),
    c = n(945577),
    u = n(981631);
function d(e, t, n) {
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
let f = !1,
    _ = null;
function p(e) {
    if (null == e);
    else if (e === u.aib.DMS) return u.aib.DMS;
    else if (e === u.I_8) return u.aib.FAVORITES;
    else if (null != l.Z.getGuild(e)) return u.aib.GUILD;
    else if (null != s.Z.getChannel(e)) return u.aib.CHANNEL;
    return null;
}
function h(e) {
    if (e === _) return !1;
    _ = e;
}
function m() {
    (f = !0),
        null != _ &&
            p(_) === u.aib.CHANNEL &&
            (0, c.ad)({ location: "SearchStore_handleConnectionOpen" }) &&
            h(u.aib.DMS);
}
function g(e) {
    let { guildId: t, channelId: n } = e;
    null != t
        ? h(t)
        : (0, c.ad)({
                location: "SearchStore_handleChannelSelect",
                autoTrackExposure: f,
            })
          ? h(u.aib.DMS)
          : h(n);
}
function E(e) {
    let { id: t } = e;
    h(t);
}
class b extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, s.Z, o.Z);
    }
    getSelectedSearchContextId() {
        return _;
    }
}
d(b, "displayName", "SearchStore");
let y = new b(a.Z, {
    CONNECTION_OPEN: m,
    SEARCH_SCREEN_OPEN: E,
    CHANNEL_SELECT: g,
});
