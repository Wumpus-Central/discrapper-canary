n.d(t, {
    A: () => p,
});
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(323073);

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
    (u[t] = !0), a.w.set(c, u);
}
class f extends (r = i.Ay.Store) {
    initialize() {
        var e;
        u = null != (e = a.w.get(c)) ? e : u;
    }
    didAgree(e) {
        return !(null == e || (0, o.r9)()) && (u[e] || !1);
    }
}
l(f, "displayName", "GuildNSFWAgreeStore");
let p = new f(s.h, {
    GUILD_NSFW_AGREE: d,
});
