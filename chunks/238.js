n.d(t, {
    N: () => f,
    Z: () => E
}),
    n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(331065),
    s = n(55563),
    l = n(551428);
function c(e, t, n) {
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
let u = new Map(),
    d = new Map();
var f = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.FAILED = 3)] = 'FAILED'), e;
})({});
let _ = new a.Z({
    subscriptions: [],
    otps: []
});
function p(e) {
    let { applicationId: t, layout: n } = e;
    u.set(t, a.Z.createFromServer(n)), d.delete(t);
}
function h(e) {
    let { applicationId: t } = e;
    d.set(t, 3);
}
function m(e) {
    let { applicationId: t } = e;
    d.set(t, 1);
}
class g extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.Z);
    }
    hasStorefront(e) {
        return u.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null != (t = u.get(e)) ? t : _;
    }
    getFetchStatus(e) {
        var t;
        return u.has(e) ? 2 : null != (t = d.get(e)) ? t : 0;
    }
}
c(g, 'displayName', 'ApplicationStoreDirectoryStore');
let E = new g(o.Z, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: p,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: h,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: m
});
