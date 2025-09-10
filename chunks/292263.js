n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    o = n(570140);
let a = null,
    c = !1;
class s extends (i = l.ZP.Store) {
    get loading() {
        return c;
    }
    get methods() {
        return a;
    }
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "AgeVerificationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "AgeVerificationStore");
let d = new s(o.Z, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        c = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (a = t), (c = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        c = !1;
    },
});
