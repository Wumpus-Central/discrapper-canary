n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
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
    (u[t] = !0), o.K.set(c, u);
}
class f extends (r = i.ZP.Store) {
    initialize() {
        var e;
        u = null != (e = o.K.get(c)) ? e : u;
    }
    didAgree(e) {
        return !(null == e || (0, s.dl)()) && (u[e] || !1);
    }
}
l(f, "displayName", "GuildNSFWAgreeStore");
let _ = new f(a.Z, { GUILD_NSFW_AGREE: d });
