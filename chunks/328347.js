let i;
n.d(t, { Z: () => h });
var r,
    a = n(442837),
    s = n(570140);
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
let l = [],
    u = l,
    c = null,
    d = (e) => {
        var t, n;
        (u = null !== (t = e.analyticsLocations) && void 0 !== t ? t : l), (c = null !== (n = e.analyticsSource) && void 0 !== n ? n : null), (i = e.initialProductSkuId);
    },
    f = (e) => {
        (u = l), (c = null);
    },
    _ = (e) => {
        e.item.skuId === i && (i = void 0);
    };
class p extends (r = a.ZP.Store) {
    get analyticsLocations() {
        return u;
    }
    get analyticsSource() {
        return c;
    }
    get initialProductSkuId() {
        return i;
    }
    getAnalytics() {
        return {
            analyticsLocations: u,
            analyticsSource: c
        };
    }
}
o(p, 'displayName', 'CollectiblesShopStore');
let h = new p(s.Z, {
    COLLECTIBLES_SHOP_OPEN: d,
    COLLECTIBLES_SHOP_CLOSE: f,
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: _,
    LOGOUT: f
});
