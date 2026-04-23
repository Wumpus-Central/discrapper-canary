n.d(t, { A: () => p, N: () => c });
var s,
    i = n(17928),
    l = n(228366),
    r = n(156898),
    a = n(67480),
    o = n(328968);
let d = new Map(),
    u = new Map();
var c =
    (((s = {})[(s.NONE = 0)] = "NONE"),
    (s[(s.FETCHING = 1)] = "FETCHING"),
    (s[(s.FETCHED = 2)] = "FETCHED"),
    (s[(s.FAILED = 3)] = "FAILED"),
    s);
let h = new r.A({ subscriptions: [], otps: [] });
class E extends i.Ay.Store {
    static displayName = "ApplicationStoreDirectoryStore";
    initialize() {
        this.waitFor(a.A, o.A);
    }
    hasStorefront(e) {
        return d.has(e);
    }
    getStoreLayout(e) {
        return d.get(e) ?? h;
    }
    getFetchStatus(e) {
        return d.has(e) ? 2 : (u.get(e) ?? 0);
    }
}
let p = new E(l.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
        let { applicationId: t, layout: n } = e;
        d.set(t, r.A.createFromServer(n)), u.delete(t);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
        let { applicationId: t } = e;
        u.set(t, 3);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
        let { applicationId: t } = e;
        u.set(t, 1);
    },
});
