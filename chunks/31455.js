n.d(t, { A: () => h, N: () => u });
var i,
    l = n(311907),
    a = n(73153),
    s = n(156898),
    r = n(67480),
    o = n(328968);
let d = new Map(),
    c = new Map();
var u =
    (((i = {})[(i.NONE = 0)] = "NONE"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    (i[(i.FAILED = 3)] = "FAILED"),
    i);
let m = new s.A({ subscriptions: [], otps: [] });
class _ extends l.Ay.Store {
    static displayName = "ApplicationStoreDirectoryStore";
    initialize() {
        this.waitFor(r.A, o.A);
    }
    hasStorefront(e) {
        return d.has(e);
    }
    getStoreLayout(e) {
        return d.get(e) ?? m;
    }
    getFetchStatus(e) {
        return d.has(e) ? 2 : (c.get(e) ?? 0);
    }
}
let h = new _(a.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
        let { applicationId: t, layout: n } = e;
        d.set(t, s.A.createFromServer(n)), c.delete(t);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
        let { applicationId: t } = e;
        c.set(t, 3);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
        let { applicationId: t } = e;
        c.set(t, 1);
    },
});
