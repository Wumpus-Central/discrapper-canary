n.d(t, { Z: () => c });
var s,
    r,
    i,
    l = n(442837),
    a = n(570140);
let o = {};
class d extends (i = l.ZP.Store) {
    getBranches(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t ? t : [];
    }
}
(r = 'ApplicationBranchStore'),
    (s = 'displayName') in d
        ? Object.defineProperty(d, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[s] = r);
let c = new d(a.Z, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        o[t] = n;
    },
    LOGOUT: function () {
        o = {};
    }
});
