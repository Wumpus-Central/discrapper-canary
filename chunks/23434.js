n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = null;
class l extends (r = i.ZP.Store) {
    hasAction() {
        return null != s;
    }
    getAction() {
        return s;
    }
}
function c(e) {
    s = e.requiredAction;
}
a(l, "displayName", "UserRequiredActionStore");
let u = new l(o.Z, {
    CONNECTION_OPEN: c,
    USER_REQUIRED_ACTION_UPDATE: c,
});
