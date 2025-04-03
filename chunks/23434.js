n.d(t, { Z: () => u });
var r,
    o,
    i,
    a = n(442837),
    s = n(570140);
let l = null;
class c extends (i = a.ZP.Store) {
    hasAction() {
        return null != l;
    }
    getAction() {
        return l;
    }
}
function d(e) {
    l = e.requiredAction;
}
(o = 'UserRequiredActionStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = o);
let u = new c(s.Z, {
    CONNECTION_OPEN: d,
    USER_REQUIRED_ACTION_UPDATE: d
});
