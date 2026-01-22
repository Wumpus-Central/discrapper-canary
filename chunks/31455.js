n.d(t, {
    A: () => E,
    N: () => f,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(156898),
    o = n(67480),
    l = n(328968);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = new Map(),
    d = new Map();
var f = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        (e[(e.FAILED = 3)] = "FAILED"),
        e
    );
})({});
let p = new s.A({
    subscriptions: [],
    otps: [],
});
function _(e) {
    let { applicationId: t, layout: n } = e;
    u.set(t, s.A.createFromServer(n)), d.delete(t);
}
function h(e) {
    let { applicationId: t } = e;
    d.set(t, 3);
}
function m(e) {
    let { applicationId: t } = e;
    d.set(t, 1);
}
class g extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A, l.A);
    }
    hasStorefront(e) {
        return u.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null != (t = u.get(e)) ? t : p;
    }
    getFetchStatus(e) {
        var t;
        return u.has(e) ? 2 : null != (t = d.get(e)) ? t : 0;
    }
}
c(g, "displayName", "ApplicationStoreDirectoryStore");
let E = new g(a.h, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: _,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: h,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: m,
});
