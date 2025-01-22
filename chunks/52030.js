let i, a, o;
var s,
    l = r(442837),
    u = r(570140);
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
let d = [];
let f = {};
let p = !1,
    h = d,
    _ = (e) => {
        (p = !0), (o = void 0), (f = e.options), (a = void 0);
    },
    m = (e) => {
        (h = e.shopHome.shopBlocks), (i = Date.now()), (p = !1), (o = void 0), (a = void 0);
    },
    g = (e) => {
        let { error: n } = e;
        (h = d), (p = !1), (o = n), (a = Date.now());
    },
    E = () => {
        (h = d), (f = {}), (o = void 0), (p = !1), (i = void 0), (a = void 0);
    };
class v extends (s = l.ZP.Store) {
    get lastSuccessfulFetch() {
        return i;
    }
    get lastErrorTimestamp() {
        return a;
    }
    get lastFetchOptions() {
        return f;
    }
    get fetchShopHomeError() {
        return o;
    }
    get isFetchingShopHome() {
        return p;
    }
    get shopBlocks() {
        return h;
    }
}
c(v, 'displayName', 'CollectiblesShopHomesStore'),
    (n.Z = new v(u.Z, {
        COLLECTIBLES_SHOP_HOME_FETCH: _,
        COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: m,
        COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: g,
        LOGOUT: E
    }));
