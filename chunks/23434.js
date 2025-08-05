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
o(l, 'displayName', 'UserRequiredActionStore');
let u = new l(a.Z, {
    CONNECTION_OPEN: c,
    USER_REQUIRED_ACTION_UPDATE: c
});
