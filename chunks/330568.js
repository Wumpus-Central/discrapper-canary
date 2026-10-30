E.d(e, { A: () => r });
var I = E(17928),
    A = E(73153),
    a = E(845300);
let i = a.Z.INITIALIZED,
    L = new Set();
class p extends I.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return i;
    }
    isDeveloperOfApplication(t) {
        return null != t && L.has(t);
    }
}
let r = new p(A.h, {
    LOGOUT: function () {
        ((i = a.Z.INITIALIZED), (L = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        i = a.Z.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e } = t;
        ((i = a.Z.LOADED), (L = new Set(e)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        i = a.Z.ERROR;
    },
});
