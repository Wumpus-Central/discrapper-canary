n.d(t, { Z: () => c });
var s,
    i,
    l,
    r = n(442837),
    a = n(570140);
let o = {};
class d extends (l = r.ZP.Store) {
    getBranches(e) {
        var t;
        return null != (t = o[e]) ? t : [];
    }
}
(i = 'ApplicationBranchStore'),
    (s = 'displayName') in d
        ? Object.defineProperty(d, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[s] = i);
let c = new d(a.Z, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        o[t] = n;
    },
    LOGOUT: function () {
        o = {};
    }
});
