n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    o = n(570140);
let a = null;
class s extends (i = l.ZP.Store) {
    hasAction() {
        return null != a;
    }
    getAction() {
        return a;
    }
}
function c(e) {
    a = e.requiredAction;
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "UserRequiredActionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "UserRequiredActionStore");
let u = new s(o.Z, {
    CONNECTION_OPEN: c,
    USER_REQUIRED_ACTION_UPDATE: c,
});
