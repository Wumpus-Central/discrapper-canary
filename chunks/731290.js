n.d(t, { Z: () => f });
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = 'GuildNSFWAgreeStore',
    u = {};
function d(e) {
    let { guildId: t } = e;
    ((u[t] = !0), a.K.set(c, u));
}
class _ extends (r = i.ZP.Store) {
    initialize() {
        var e;
        u = null != (e = a.K.get(c)) ? e : u;
    }
    didAgree(e) {
        return !(null == e || (0, s.dl)()) && (u[e] || !1);
    }
}
l(_, 'displayName', 'GuildNSFWAgreeStore');
let f = new _(o.Z, { GUILD_NSFW_AGREE: d });
