"use strict";
n.d(t, { A: () => m, N: () => c });
var r = n(311907),
    i = n(73153),
    a = n(156898),
    s = n(67480),
    o = n(328968);
let l = new Map(),
    u = new Map();
var c = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        (e[(e.FAILED = 3)] = "FAILED"),
        e
    );
})({});
let d = new a.A({ subscriptions: [], otps: [] });
function _(e) {
    let { applicationId: t, layout: n } = e;
    l.set(t, a.A.createFromServer(n)), u.delete(t);
}
function f(e) {
    let { applicationId: t } = e;
    u.set(t, 3);
}
function p(e) {
    let { applicationId: t } = e;
    u.set(t, 1);
}
class h extends r.Ay.Store {
    static displayName = "ApplicationStoreDirectoryStore";
    initialize() {
        this.waitFor(s.A, o.A);
    }
    hasStorefront(e) {
        return l.has(e);
    }
    getStoreLayout(e) {
        return l.get(e) ?? d;
    }
    getFetchStatus(e) {
        return l.has(e) ? 2 : (u.get(e) ?? 0);
    }
}
let m = new h(i.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: _,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: f,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: p,
});
