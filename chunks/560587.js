n.d(t, { Z: () => c });
var r,
    i,
    s = n(442837),
    l = n(570140);
let a = {};
class o extends (i = s.ZP.Store) {
    getBranches(e) {
        var t;
        return null != (t = a[e]) ? t : [];
    }
}
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "ApplicationBranchStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "ApplicationBranchStore");
let c = new o(l.Z, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        a[t] = n;
    },
    LOGOUT: function () {
        a = {};
    },
});
