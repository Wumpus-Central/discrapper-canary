n.d(t, { Z: () => p });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
        if (null != t && t.length > 0) {
            let e = l.filter((e) => !t.some((t) => t.discount.id === e.discountId));
            e.length !== l.length && (l = e);
        }
    },
    d = (e) => {
        let t = e.discountIds;
        if (t.length > 0) {
            let e = l.filter((e) => !t.includes(e.discountId));
            e.length !== l.length && (l = e);
        }
    },
    f = () => {
        l = s;
    };
class _ extends (r = i.ZP.Store) {
    getUserDiscounts() {
        return l;
    }
}
o(_, "displayName", "CollectiblesUserDiscountStore");
let p = new _(a.Z, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
    SKU_PURCHASE_SUCCESS: u,
    COLLECTIBLES_USER_DISCOUNTS_EXPIRED: d,
    LOGOUT: f,
});
