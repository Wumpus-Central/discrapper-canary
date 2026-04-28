r.d(e, { A: () => p, N: () => c });
var s,
    n = r(17928),
    o = r(228366),
    A = r(156898),
    i = r(67480),
    a = r(328968);
let u = new Map(),
    E = new Map();
var c =
    (((s = {})[(s.NONE = 0)] = "NONE"),
    (s[(s.FETCHING = 1)] = "FETCHING"),
    (s[(s.FETCHED = 2)] = "FETCHED"),
    (s[(s.FAILED = 3)] = "FAILED"),
    s);
let C = new A.A({ subscriptions: [], otps: [] });
class T extends n.Ay.Store {
    static displayName = "ApplicationStoreDirectoryStore";
    initialize() {
        this.waitFor(i.A, a.A);
    }
    hasStorefront(t) {
        return u.has(t);
    }
    getStoreLayout(t) {
        return u.get(t) ?? C;
    }
    getFetchStatus(t) {
        return u.has(t) ? 2 : (E.get(t) ?? 0);
    }
}
let p = new T(o.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (t) {
        let { applicationId: e, layout: r } = t;
        u.set(e, A.A.createFromServer(r)), E.delete(e);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (t) {
        let { applicationId: e } = t;
        E.set(e, 3);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (t) {
        let { applicationId: e } = t;
        E.set(e, 1);
    },
});
