"use strict";
n.d(t, { A: () => h, e: () => o });
var i,
    r = n(17928),
    s = n(228366),
    a = n(395671),
    o = (((i = {})[(i.FETCHING = 0)] = "FETCHING"), (i[(i.FETCHED = 1)] = "FETCHED"), (i[(i.ERROR = 2)] = "ERROR"), i);
let l = {},
    u = {},
    c = new Set(),
    d = {};
class _ extends r.Ay.Store {
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
        return null != e && c.has(e);
    }
    getInvalidApplicationIds() {
        return c;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return d[e];
    }
}
let h = new _(s.h, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: function (e) {
        let { applicationId: t } = e;
        u = { ...u, [t]: 0 };
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function (e) {
        let { application: t } = e;
        (l = { ...l, [t.id]: t }), (u = { ...u, [t.id]: 1 });
        let n = Date.now();
        (d = { ...d, [t.id]: n }), c.has(t.id) && (c.delete(t.id), (c = new Set(c)));
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function (e) {
        let { applicationId: t, isInvalidApplication: n } = e;
        (u = { ...u, [t]: 2 }), n && (c.add(t), (c = new Set(c)));
    },
});
