n.d(t, { Z: () => u });
var i,
    r,
    l,
    a = n(442837),
    o = n(570140);
let s = {};
class c extends (l = a.ZP.Store) {
    getOptions(e) {
        return s[e];
    }
}
(r = 'SendMessageOptionsStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = r);
let u = new c(o.Z, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        null != n && (s[t.id] = n), null != t.nonce && t.nonce in s && delete s[t.nonce];
    }
});
