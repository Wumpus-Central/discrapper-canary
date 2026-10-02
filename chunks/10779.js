E.d(e, { A: () => T });
var I,
    A = E(582128),
    i = E(17928),
    a = E(885386),
    p = E(636537),
    n = E(73153),
    r = E(652215);
async function L() {
    n.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let t = await p.Bo.get({
            url: r.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        n.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: t.body.map((t) => t.id) });
    } catch (t) {
        n.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var c =
    (((I = {}).INITIALIZED = "INITIALIZED"), (I.LOADING = "LOADING"), (I.LOADED = "LOADED"), (I.ERROR = "ERROR"), I);
let s = c.INITIALIZED,
    O = new Set();
class D extends i.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return s;
    }
    isDeveloperOfApplication(t) {
        return null != t && O.has(t);
    }
}
let S = new D(n.h, {
    LOGOUT: function () {
        ((s = c.INITIALIZED), (O = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        s = c.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e } = t;
        ((s = c.LOADED), (O = new Set(e)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        s = c.ERROR;
    },
});
function T(t) {
    let e = a.Q_.useSetting(),
        E = (0, i.bG)([S], () => S.getFetchState()),
        I = (0, i.bG)([S], () => S.isDeveloperOfApplication(t));
    return (
        A.useEffect(() => {
            null != t && e && E === c.INITIALIZED && L();
        }, [t, e, E]),
        I
    );
}
