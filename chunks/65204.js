n.d(t, { A: () => u });
var i,
    r,
    l = n(311907),
    s = n(73153);
let a = {};
class o extends (r = l.Ay.Store) {
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
let u = new o(s.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        a[t] = n;
    },
    LOGOUT: function () {
        a = {};
    },
});
