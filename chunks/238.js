n.d(t, {
    N: () => f,
    Z: () => E
}),
    n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(331065),
    o = n(55563),
    l = n(551428);
function u(e, t, n) {
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
let c = new Map(),
    d = new Map();
var f = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.FAILED = 3)] = 'FAILED'), e;
})({});
let _ = new s.Z({
    subscriptions: [],
    otps: []
});
function p(e) {
    let { applicationId: t, layout: n } = e;
    c.set(t, s.Z.createFromServer(n)), d.delete(t);
}
function h(e) {
    let { applicationId: t } = e;
    d.set(t, 3);
}
function m(e) {
    let { applicationId: t } = e;
    d.set(t, 1);
}
class g extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, l.Z);
    }
    hasStorefront(e) {
        return c.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null !== (t = c.get(e)) && void 0 !== t ? t : _;
    }
    getFetchStatus(e) {
        var t;
        return c.has(e) ? 2 : null !== (t = d.get(e)) && void 0 !== t ? t : 0;
    }
}
u(g, 'displayName', 'ApplicationStoreDirectoryStore');
let E = new g(a.Z, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: p,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: h,
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: m
});
