n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = 0,
    l = {};
function u(e) {
    return (l[e.guildId] = { type: 'loading' }), !1;
}
function c(e) {
    (l[e.guildId] = e.guildInfo), o++;
}
function d(e) {
    return (l[e.guildId] = { type: 'failed' }), !1;
}
class f extends (i = r.ZP.Store) {
    getGuild(e) {
        let t = l[e];
        if (null != t && !('type' in t)) return t;
    }
    getGuildOrStatus(e) {
        return l[e];
    }
    getVersion() {
        return o;
    }
}
s(f, 'displayName', 'BasicGuildStore');
let _ = new f(a.Z, {
    BASIC_GUILD_FETCH: u,
    BASIC_GUILD_FETCH_SUCCESS: c,
    BASIC_GUILD_FETCH_FAILURE: d
});
