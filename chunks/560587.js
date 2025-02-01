n.d(t, { Z: () => h });
var s,
    l,
    i,
    r = n(442837),
    a = n(570140);
let o = {};
class d extends (i = r.ZP.Store) {
    getBranches(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t ? t : [];
    }
}
(l = 'ApplicationBranchStore'),
    (s = 'displayName') in d
        ? Object.defineProperty(d, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[s] = l);
let h = new d(a.Z, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        o[t] = n;
    },
    LOGOUT: function () {
        o = {};
    }
});
