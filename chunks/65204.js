n.d(t, { A: () => a });
var i = n(311907),
    l = n(73153);
let s = {};
class r extends i.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return s[e] ?? [];
    }
}
let a = new r(l.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        s[t] = n;
    },
    LOGOUT: function () {
        s = {};
    },
});
