n.d(t, { Z: () => d });
var a,
    r,
    i = n(442837),
    l = n(570140);
let o = null,
    s = !1;
class c extends (r = i.ZP.Store) {
    get loading() {
        return s;
    }
    get methods() {
        return o;
    }
}
(a = "displayName") in c
    ? Object.defineProperty(c, a, {
          value: "AgeVerificationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[a] = "AgeVerificationStore");
let d = new c(l.Z, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        s = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (o = t), (s = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        s = !1;
    },
});
