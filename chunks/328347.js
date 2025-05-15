let r;
n.d(t, { Z: () => h });
var i,
    o = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let l = [],
    c = l,
    u = null,
    d = (e) => {
        var t, n;
        (c = null != (t = e.analyticsLocations) ? t : l), (u = null != (n = e.analyticsSource) ? n : null), (r = e.initialProductSkuId);
    },
    f = (e) => {
        (c = l), (u = null);
    },
    _ = (e) => {
        e.item.skuId === r && (r = void 0);
    };
class p extends (i = o.ZP.Store) {
    get analyticsLocations() {
        return c;
    }
    get analyticsSource() {
        return u;
    }
    get initialProductSkuId() {
        return r;
    }
    getAnalytics() {
        return {
            analyticsLocations: c,
            analyticsSource: u
        };
    }
}
s(p, 'displayName', 'CollectiblesShopStore');
let h = new p(a.Z, {
    COLLECTIBLES_SHOP_OPEN: d,
    COLLECTIBLES_SHOP_CLOSE: f,
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: _,
    LOGOUT: f
});
