n.d(t, { Z: () => u });
var r,
    i = n(442837),
    a = n(570140);
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
let s = {};
function l(e) {
    let { message: t, sendMessageOptions: n } = e;
    (null != n && (s[t.id] = n), null != t.nonce && t.nonce in s && delete s[t.nonce]);
}
class c extends (r = i.ZP.Store) {
    getOptions(e) {
        return s[e];
    }
}
o(c, 'displayName', 'SendMessageOptionsStore');
let u = new c(a.Z, { MESSAGE_CREATE: l });
