n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = null;
class s extends (i = l.ZP.Store) {
    hasAction() {
        return null != o;
    }
    getAction() {
        return o;
    }
}
function c(e) {
    o = e.requiredAction;
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "UserRequiredActionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "UserRequiredActionStore");
let u = new s(a.Z, {
    CONNECTION_OPEN: c,
    USER_REQUIRED_ACTION_UPDATE: c,
});
