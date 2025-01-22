var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = 0,
    u = {};
function c(e) {
    return (u[e.guildId] = { type: 'loading' }), !1;
}
function d(e) {
    (u[e.guildId] = e.guildInfo), l++;
}
function f(e) {
    return (u[e.guildId] = { type: 'failed' }), !1;
}
class p extends (i = a.ZP.Store) {
    getGuild(e) {
        let n = u[e];
        if (null != n) {
            if (!('type' in n)) return n;
        }
    }
    getGuildOrStatus(e) {
        return u[e];
    }
    getVersion() {
        return l;
    }
}
s(p, 'displayName', 'BasicGuildStore'),
    (n.Z = new p(o.Z, {
        BASIC_GUILD_FETCH: c,
        BASIC_GUILD_FETCH_SUCCESS: d,
        BASIC_GUILD_FETCH_FAILURE: f
    }));
