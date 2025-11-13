n.d(t, { Z: () => d });
var a,
    i,
    r = n(442837),
    l = n(570140);
let s = null,
    o = !1;
class c extends (i = r.ZP.Store) {
    get loading() {
        return o;
    }
    get methods() {
        return s;
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
        o = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (s = t), (o = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        o = !1;
    },
});
