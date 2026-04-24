"use strict";
n.d(t, { A: () => m, N: () => u });
var i,
    a = n(17928),
    s = n(228366),
    l = n(156898),
    r = n(67480),
    o = n(328968);
let c = new Map(),
    d = new Map();
var u =
    (((i = {})[(i.NONE = 0)] = "NONE"),
    (i[(i.FETCHING = 1)] = "FETCHING"),
    (i[(i.FETCHED = 2)] = "FETCHED"),
    (i[(i.FAILED = 3)] = "FAILED"),
    i);
let h = new l.A({ subscriptions: [], otps: [] });
class p extends a.Ay.Store {
    static displayName = "ApplicationStoreDirectoryStore";
    initialize() {
        this.waitFor(r.A, o.A);
    }
    hasStorefront(e) {
        return c.has(e);
    }
    getStoreLayout(e) {
        return c.get(e) ?? h;
    }
    getFetchStatus(e) {
        return c.has(e) ? 2 : (d.get(e) ?? 0);
    }
}
let m = new p(s.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
        let { applicationId: t, layout: n } = e;
        c.set(t, l.A.createFromServer(n)), d.delete(t);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
        let { applicationId: t } = e;
        d.set(t, 3);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
        let { applicationId: t } = e;
        d.set(t, 1);
    },
});
