"use strict";
n.d(t, { A: () => E, e: () => l });
var i,
    r = n(17928),
    a = n(228366),
    s = n(395671),
    l = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
let o = {},
    d = {},
    c = new Set(),
    u = {};
class _ extends r.Ay.Store {
    static displayName = "ApplicationDirectoryApplicationsStore";
    getApplication(e) {
        if (null != e) return o[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = o[e];
        if (null != t) return s.Ay.createFromServer(t);
    }
    getApplications() {
        return o;
    }
    getApplicationFetchState(e) {
        if (null != e) return d[e];
    }
    getApplicationFetchStates() {
        return d;
    }
    isInvalidApplication(e) {
        return null != e && c.has(e);
    }
    getInvalidApplicationIds() {
        return c;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return u[e];
    }
}
let E = new _(a.h, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: function (e) {
        let { applicationId: t } = e;
        d = { ...d, [t]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function (e) {
        let { application: t } = e;
        (o = { ...o, [t.id]: t }), (d = { ...d, [t.id]: 1 });
        let n = Date.now();
        (u = { ...u, [t.id]: n }), c.has(t.id) && (c.delete(t.id), (c = new Set(c)));
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function (e) {
        let { applicationId: t, isInvalidApplication: n } = e;
        (d = { ...d, [t]: 2 }), n && (c.add(t), (c = new Set(c)));
    },
});
