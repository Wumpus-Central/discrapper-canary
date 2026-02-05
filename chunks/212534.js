"use strict";
n.d(t, { A: () => h, e: () => s });
var r = n(311907),
    i = n(73153),
    a = n(611010),
    s = (function (e) {
        return (e[(e.FETCHING = 0)] = "FETCHING"), (e[(e.FETCHED = 1)] = "FETCHED"), (e[(e.ERROR = 2)] = "ERROR"), e;
    })({});
let o = {},
    l = {},
    u = new Set(),
    c = {};
function d(e) {
    let { applicationId: t } = e;
    l = { ...l, [t]: 0 };
}
function _(e) {
    let { application: t } = e;
    (o = { ...o, [t.id]: t }), (l = { ...l, [t.id]: 1 });
    let n = Date.now();
    (c = { ...c, [t.id]: n }), u.has(t.id) && (u.delete(t.id), (u = new Set(u)));
}
function f(e) {
    let { applicationId: t, isInvalidApplication: n } = e;
    (l = { ...l, [t]: 2 }), n && (u.add(t), (u = new Set(u)));
}
class p extends r.Ay.Store {
    static displayName = "ApplicationDirectoryApplicationsStore";
    getApplication(e) {
        if (null != e) return o[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = o[e];
        if (null != t) return a.Ay.createFromServer(t);
    }
    getApplications() {
        return o;
    }
    getApplicationFetchState(e) {
        if (null != e) return l[e];
    }
    getApplicationFetchStates() {
        return l;
    }
    isInvalidApplication(e) {
        return null != e && u.has(e);
    }
    getInvalidApplicationIds() {
        return u;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return c[e];
    }
}
let h = new p(i.h, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: d,
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: _,
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: f,
});
