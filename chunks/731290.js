n.d(t, { Z: () => p });
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(622822);
function l(e, t, n) {
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
let c = "GuildNSFWAgreeStore",
    u = {};
function d(e) {
    let { guildId: t } = e;
    (u[t] = !0), a.K.set(c, u);
}
class f extends (r = i.ZP.Store) {
    initialize() {
        var e;
        u = null != (e = a.K.get(c)) ? e : u;
    }
    didAgree(e) {
        return !(null == e || (0, s.dl)()) && (u[e] || !1);
    }
}
l(f, "displayName", "GuildNSFWAgreeStore");
let p = new f(o.Z, { GUILD_NSFW_AGREE: d });
