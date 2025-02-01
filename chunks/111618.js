n.d(t, { Z: () => c });
var i,
    l,
    a,
    s = n(442837),
    r = n(570140);
let o = {};
class d extends (a = s.ZP.Store) {
    getOptions(e) {
        return o[e];
    }
}
(l = 'SendMessageOptionsStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = l);
let c = new d(r.Z, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        null != n && (o[t.id] = n), null != t.nonce && t.nonce in o && delete o[t.nonce];
    }
});
