var l = a(855986),
    s = a(73153),
    n = a(845300);
let i = n.Z.INITIALIZED,
    r = new Set();
class c extends l.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return i;
    }
    isDeveloperOfApplication(e) {
        return null != e && r.has(e);
    }
}
let o = new c(s.h, {
    LOGOUT: function () {
        ((i = n.Z.INITIALIZED), (r = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        i = n.Z.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t } = e;
        ((i = n.Z.LOADED), (r = new Set(t)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        i = n.Z.ERROR;
    },
});
a.d(t, {}, { A: o });
