o.d(n, { Z: () => p });
var t,
    r,
    i,
    a = o(442837),
    c = o(570140);
let u = null;
class d extends (i = a.ZP.Store) {
    hasAction() {
        return null != u;
    }
    getAction() {
        return u;
    }
}
function _(e) {
    u = e.requiredAction;
}
(r = 'UserRequiredActionStore'),
    (t = 'displayName') in d
        ? Object.defineProperty(d, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[t] = r);
let p = new d(c.Z, {
    CONNECTION_OPEN: _,
    USER_REQUIRED_ACTION_UPDATE: _
});
