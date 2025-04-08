n.d(t, { Z: () => u });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let s = {};
class c extends (a = l.ZP.Store) {
    getOptions(e) {
        return s[e];
    }
}
(i = 'SendMessageOptionsStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let u = new c(o.Z, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        null != n && (s[t.id] = n), null != t.nonce && t.nonce in s && delete s[t.nonce];
    }
});
