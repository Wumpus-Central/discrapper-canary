r.d(n, {
    N: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(331065),
    c = r(55563),
    d = r(551428);
function f(e, n, r) {
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
let p = new Map(),
    h = new Map();
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.FAILED = 3)] = 'FAILED');
})(i || (i = {}));
let _ = new u.Z({
    subscriptions: [],
    otps: []
});
function m(e) {
    let { applicationId: n, layout: r } = e;
    p.set(n, u.Z.createFromServer(r)), h.delete(n);
}
function g(e) {
    let { applicationId: n } = e;
    h.set(n, 3);
}
function E(e) {
    let { applicationId: n } = e;
    h.set(n, 1);
}
class v extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z);
    }
    hasStorefront(e) {
        return p.has(e);
    }
    getStoreLayout(e) {
        var n;
        return null !== (n = p.get(e)) && void 0 !== n ? n : _;
    }
    getFetchStatus(e) {
        var n;
        return p.has(e) ? 2 : null !== (n = h.get(e)) && void 0 !== n ? n : 0;
    }
}
f(v, 'displayName', 'ApplicationStoreDirectoryStore'),
    (n.Z = new v(l.Z, {
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: m,
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: g,
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: E
    }));
