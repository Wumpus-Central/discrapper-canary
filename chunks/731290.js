n.d(t, { Z: () => f });
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140);
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
let l = 'GuildNSFWAgreeStore',
    c = {};
function u(e) {
    let { guildId: t } = e;
    (c[t] = !0), a.K.set(l, c);
}
class d extends (r = i.ZP.Store) {
    initialize() {
        var e;
        c = null != (e = a.K.get(l)) ? e : c;
    }
    didAgree(e) {
        return null != e && (c[e] || !1);
    }
}
s(d, 'displayName', 'GuildNSFWAgreeStore');
let f = new d(o.Z, { GUILD_NSFW_AGREE: u });
