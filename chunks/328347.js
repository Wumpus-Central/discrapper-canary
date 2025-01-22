let i;
var a,
    o = r(442837),
    s = r(570140);
function l(e, n, r) {
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
let u = [],
    c = u,
    d = null,
    f = (e) => {
        var n, r;
        (c = null !== (n = e.analyticsLocations) && void 0 !== n ? n : u), (d = null !== (r = e.analyticsSource) && void 0 !== r ? r : null), (i = e.initialProductSkuId);
    },
    p = (e) => {
        (c = u), (d = null);
    },
    h = (e) => {
        e.item.skuId === i && (i = void 0);
    };
class _ extends (a = o.ZP.Store) {
    get analyticsLocations() {
        return c;
    }
    get analyticsSource() {
        return d;
    }
    get initialProductSkuId() {
        return i;
    }
    getAnalytics() {
        return {
            analyticsLocations: c,
            analyticsSource: d
        };
    }
}
l(_, 'displayName', 'CollectiblesShopStore'),
    (n.Z = new _(s.Z, {
        COLLECTIBLES_SHOP_OPEN: f,
        COLLECTIBLES_SHOP_CLOSE: p,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: h,
        LOGOUT: p
    }));
