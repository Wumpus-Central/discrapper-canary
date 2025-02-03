n.d(t, { Z: () => u });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140);
let o = null;
class c extends (a = r.ZP.Store) {
    hasAction() {
        return null != o;
    }
    getAction() {
        return o;
    }
}
function d(e) {
    o = e.requiredAction;
}
(l = 'UserRequiredActionStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let u = new c(s.Z, {
    CONNECTION_OPEN: d,
    USER_REQUIRED_ACTION_UPDATE: d
});
