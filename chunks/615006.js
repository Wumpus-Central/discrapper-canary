n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = [],
    l = s,
    c = (e) => {
        let t = e.shopHome.userDiscounts;
        l = null != t && t.length > 0 ? t : s;
    },
    u = (e) => {
        let t = e.appliedUserDiscounts;
        null != t && t.length > 0 && (l = l.filter((e) => !t.some((t) => t.discount.id === e.discountId)));
    },
    d = () => {
        l = s;
    };
class f extends (r = i.ZP.Store) {
    getUserDiscounts() {
        return l;
    }
}
a(f, "displayName", "CollectiblesUserDiscountStore");
let _ = new f(o.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
    SKU_PURCHASE_SUCCESS: u,
    LOGOUT: d,
});
