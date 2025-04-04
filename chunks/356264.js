n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = 0,
    l = {};
function c(e) {
    return (l[e.guildId] = { type: 'loading' }), !1;
}
function u(e) {
    (l[e.guildId] = e.guildInfo), s++;
}
function d(e) {
    return (l[e.guildId] = { type: 'failed' }), !1;
}
class f extends (r = i.ZP.Store) {
    getGuild(e) {
        let t = l[e];
        if (null != t && !('type' in t)) return t;
    }
    getGuildOrStatus(e) {
        return l[e];
    }
    getVersion() {
        return s;
    }
}
a(f, 'displayName', 'BasicGuildStore');
let _ = new f(o.Z, {
    BASIC_GUILD_FETCH: c,
    BASIC_GUILD_FETCH_SUCCESS: u,
    BASIC_GUILD_FETCH_FAILURE: d
});
