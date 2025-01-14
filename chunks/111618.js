var i,
    l,
    r,
    a,
    o = t(442837),
    s = t(570140);
let u = {};
class c extends (a = o.ZP.Store) {
    getOptions(e) {
        return u[e];
    }
}
(r = 'SendMessageOptionsStore'),
    (l = 'displayName') in (i = c)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r),
    (n.Z = new c(s.Z, {
        MESSAGE_CREATE: function (e) {
            let { message: n, sendMessageOptions: t } = e;
            null != t && (u[n.id] = t), null != n.nonce && n.nonce in u && delete u[n.nonce];
        }
    }));
