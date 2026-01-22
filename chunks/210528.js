n.d(t, { A: () => u });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
let o = !1;
function l(e) {
    let { isRegistered: t } = e;
    o = t;
}
class c extends (r = i.Ay.Store) {
    isProtocolRegistered() {
        return o;
    }
}
s(c, "displayName", "SpotifyProtocolStore");
let u = new c(a.h, { SPOTIFY_SET_PROTOCOL_REGISTERED: l });
