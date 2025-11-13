n.d(t, { Z: () => c });
var i,
    r,
    l = n(442837),
    s = n(570140);
let a = {};
class o extends (r = l.ZP.Store) {
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
let c = new o(s.Z, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        a[t] = n;
    },
    LOGOUT: function () {
        a = {};
    },
});
