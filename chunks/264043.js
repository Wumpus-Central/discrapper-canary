n.d(t, {
    M: () => l,
    Z: () => g
}),
    n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(973616);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var l = (function (e) {
    return (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR'), e;
})({});
let u = {},
    c = {},
    d = new Set(),
    f = {};
function _(e) {
    let { applicationId: t } = e;
    c = {
        ...c,
        [t]: 0
    };
}
function p(e) {
    let { application: t } = e;
    (u = {
        ...u,
        [t.id]: t
    }),
        (c = {
            ...c,
            [t.id]: 1
        });
    let n = Date.now();
    (f = {
        ...f,
        [t.id]: n
    }),
        d.has(t.id) && (d.delete(t.id), (d = new Set(d)));
}
function h(e) {
    let { applicationId: t, isInvalidApplication: n } = e;
    (c = {
        ...c,
        [t]: 2
    }),
        n && (d.add(t), (d = new Set(d)));
}
class m extends (i = r.ZP.Store) {
    getApplication(e) {
        if (null != e) return u[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = u[e];
        if (null != t) return s.ZP.createFromServer(t);
    }
    getApplications() {
        return u;
    }
    getApplicationFetchState(e) {
        if (null != e) return c[e];
    }
    getApplicationFetchStates() {
        return c;
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
        if (null != e) return f[e];
    }
}
o(m, 'displayName', 'ApplicationDirectoryApplicationsStore');
let g = new m(a.Z, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: _,
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: p,
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: h
});
