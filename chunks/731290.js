var i,
    a = r(442837),
    o = r(433517),
    s = r(570140);
function l(e, n, r) {
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
let u = 'GuildNSFWAgreeStore',
    c = {};
function d(e) {
    let { guildId: n } = e;
    (c[n] = !0), o.K.set(u, c);
}
class f extends (i = a.ZP.Store) {
    initialize() {
        var e;
        c = null !== (e = o.K.get(u)) && void 0 !== e ? e : c;
    }
    didAgree(e) {
        return null != e && (c[e] || !1);
    }
}
l(f, 'displayName', 'GuildNSFWAgreeStore'), (n.Z = new f(s.Z, { GUILD_NSFW_AGREE: d }));
