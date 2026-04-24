n.d(t, { A: () => u });
var l = n(17928),
    a = n(228366);
let i = [],
    r = i,
    s = (e) => {
        r = null != e && e.length > 0 ? e : i;
    };
class o extends l.Ay.Store {
    static displayName = "CollectiblesUserDiscountStore";
    getUserDiscounts() {
        return r;
    }
    getUserDiscount(e) {
        return r.find((t) => t.discountId === e);
    }
}
let u = new o(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        s(e.shopHome.userDiscounts);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
        s(e.categories.userDiscounts);
    },
    SKU_PURCHASE_SUCCESS: (e) => {
        let t = e.appliedUserDiscounts;
        if (null != t && t.length > 0) {
            let e = r.filter((e) => !t.some((t) => t.discount.id === e.discountId));
            if (e.length !== r.length) return (r = e), !0;
        }
        return !1;
    },
    COLLECTIBLES_USER_DISCOUNTS_EXPIRED: (e) => {
        let t = e.discountIds;
        if (t.length > 0) {
            let e = r.filter((e) => !t.includes(e.discountId));
            if (e.length !== r.length) return (r = e), !0;
        }
        return !1;
    },
    WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS: (e) => {
        let { userDiscounts: t } = e;
        s(t);
    },
    LOGOUT: () => {
        r = i;
    },
});
