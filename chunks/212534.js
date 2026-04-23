"use strict";
n.d(t, { A: () => E, e: () => o });
var i,
    r = n(17928),
    s = n(228366),
    a = n(395671),
    o = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
let l = {},
    d = {},
    _ = new Set(),
    u = {};
class c extends r.Ay.Store {
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
        if (null != e) return d[e];
    }
    getApplicationFetchStates() {
        return d;
    }
    isInvalidApplication(e) {
        return null != e && _.has(e);
    }
    getInvalidApplicationIds() {
        return _;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return u[e];
    }
}
let E = new c(s.h, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: function (e) {
        let { applicationId: t } = e;
        d = { ...d, [t]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function (e) {
        let { application: t } = e;
        (l = { ...l, [t.id]: t }), (d = { ...d, [t.id]: 1 });
        let n = Date.now();
        (u = { ...u, [t.id]: n }), _.has(t.id) && (_.delete(t.id), (_ = new Set(_)));
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function (e) {
        let { applicationId: t, isInvalidApplication: n } = e;
        (d = { ...d, [t]: 2 }), n && (_.add(t), (_ = new Set(_)));
    },
});
