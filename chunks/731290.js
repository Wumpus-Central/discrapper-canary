n.d(t, { Z: () => f });
var i,
    r = n(442837),
    a = n(433517),
    s = n(570140);
function o(e, t, n) {
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
let l = 'GuildNSFWAgreeStore',
    u = {};
function c(e) {
    let { guildId: t } = e;
    (u[t] = !0), a.K.set(l, u);
}
class d extends (i = r.ZP.Store) {
    initialize() {
        var e;
        u = null !== (e = a.K.get(l)) && void 0 !== e ? e : u;
    }
    didAgree(e) {
        return null != e && (u[e] || !1);
    }
}
o(d, 'displayName', 'GuildNSFWAgreeStore');
let f = new d(s.Z, { GUILD_NSFW_AGREE: c });
