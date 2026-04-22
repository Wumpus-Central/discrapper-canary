"use strict";
n.d(t, { A: () => f, e: () => o });
var r,
    i = n(311907),
    s = n(73153),
    a = n(611010),
    o = (((r = {})[(r.FETCHING = 0)] = "FETCHING"), (r[(r.FETCHED = 1)] = "FETCHED"), (r[(r.ERROR = 2)] = "ERROR"), r);
let l = {},
    u = {},
    d = new Set(),
    c = {};
class _ extends i.Ay.Store {
    static displayName = "ApplicationDirectoryApplicationsStore";
    getApplication(e) {
        if (null != e) return l[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = l[e];
        if (null != t) return a.Ay.createFromServer(t);
    }
    getApplications() {
        return l;
    }
    getApplicationFetchState(e) {
        if (null != e) return u[e];
    }
    getApplicationFetchStates() {
        return u;
    }
    isInvalidApplication(e) {
        return null != e && d.has(e);
    }
    getInvalidApplicationIds() {
        return d;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return c[e];
    }
}
let f = new _(s.h, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: function (e) {
        let { applicationId: t } = e;
        u = { ...u, [t]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function (e) {
        let { application: t } = e;
        (l = { ...l, [t.id]: t }), (u = { ...u, [t.id]: 1 });
        let n = Date.now();
        (c = { ...c, [t.id]: n }), d.has(t.id) && (d.delete(t.id), (d = new Set(d)));
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function (e) {
        let { applicationId: t, isInvalidApplication: n } = e;
        (u = { ...u, [t]: 2 }), n && (d.add(t), (d = new Set(d)));
    },
});
