n.d(t, { Z: () => d });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let s = null;
class c extends (a = l.ZP.Store) {
    hasAction() {
        return null != s;
    }
    getAction() {
        return s;
    }
}
function u(e) {
    s = e.requiredAction;
}
(i = 'UserRequiredActionStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let d = new c(o.Z, {
    CONNECTION_OPEN: u,
    USER_REQUIRED_ACTION_UPDATE: u
});
