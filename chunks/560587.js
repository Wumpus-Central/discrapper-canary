n.d(t, { Z: () => d });
var i,
    s,
    r = n(442837),
    l = n(570140);
let a = {};
class o extends (s = r.ZP.Store) {
    getBranches(e) {
        var t;
        return null != (t = a[e]) ? t : [];
    }
}
(i = "displayName") in o
    ? Object.defineProperty(o, i, {
          value: "ApplicationBranchStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[i] = "ApplicationBranchStore");
let d = new o(l.Z, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        a[t] = n;
    },
    LOGOUT: function () {
        a = {};
    },
});
