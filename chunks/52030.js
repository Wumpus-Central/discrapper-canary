let i, r, a;
n.d(t, { Z: () => v });
var s,
    o = n(442837),
    l = n(570140);
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
let c = [],
    d = {},
    f = !1,
    _ = c,
    p = (e) => {
        (f = !0), (a = void 0), (d = e.options), (r = void 0);
    },
    h = (e) => {
        (_ = e.shopHome.shopBlocks), (i = Date.now()), (f = !1), (a = void 0), (r = void 0);
    },
    m = (e) => {
        let { error: t } = e;
        (_ = c), (f = !1), (a = t), (r = Date.now());
    },
    g = () => {
        (_ = c), (d = {}), (a = void 0), (f = !1), (i = void 0), (r = void 0);
    };
class E extends (s = o.ZP.Store) {
    get lastSuccessfulFetch() {
        return i;
    }
    get lastErrorTimestamp() {
        return r;
    }
    get lastFetchOptions() {
        return d;
    }
    get fetchShopHomeError() {
        return a;
    }
    get isFetchingShopHome() {
        return f;
    }
    get shopBlocks() {
        return _;
    }
}
u(E, 'displayName', 'CollectiblesShopHomesStore');
let v = new E(l.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH: p,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: h,
    COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: m,
    LOGOUT: g
});
