r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(973616);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(i || (i = {}));
let d = {},
    f = {},
    p = new Set(),
    h = {};
function _(e) {
    let { applicationId: n } = e;
    f = {
        ...f,
        [n]: 0
    };
}
function m(e) {
    let { application: n } = e;
    (d = {
        ...d,
        [n.id]: n
    }),
        (f = {
            ...f,
            [n.id]: 1
        });
    let r = Date.now();
    (h = {
        ...h,
        [n.id]: r
    }),
        p.has(n.id) && (p.delete(n.id), (p = new Set(p)));
}
function g(e) {
    let { applicationId: n, isInvalidApplication: r } = e;
    (f = {
        ...f,
        [n]: 2
    }),
        r && (p.add(n), (p = new Set(p)));
}
class E extends (a = s.ZP.Store) {
    getApplication(e) {
        if (null != e) return d[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let n = d[e];
        if (null != n) return u.ZP.createFromServer(n);
    }
    getApplications() {
        return d;
    }
    getApplicationFetchState(e) {
        if (null != e) return f[e];
    }
    getApplicationFetchStates() {
        return f;
    }
    isInvalidApplication(e) {
        return null != e && p.has(e);
    }
    getInvalidApplicationIds() {
        return p;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return h[e];
    }
}
c(E, 'displayName', 'ApplicationDirectoryApplicationsStore'),
    (n.Z = new E(l.Z, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: _,
        APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: m,
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: g
    }));
