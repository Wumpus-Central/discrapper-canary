l.d(e, { A: () => r });
var s = l(17928),
    a = l(73153),
    i = l(845300);
let h = i.Z.INITIALIZED,
    n = new Set();
class c extends s.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return h;
    }
    isDeveloperOfApplication(t) {
        return null != t && n.has(t);
    }
}
let r = new c(a.h, {
    LOGOUT: function () {
        ((h = i.Z.INITIALIZED), (n = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        h = i.Z.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e } = t;
        ((h = i.Z.LOADED), (n = new Set(e)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        h = i.Z.ERROR;
    },
});
