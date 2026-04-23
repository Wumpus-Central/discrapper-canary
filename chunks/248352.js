"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = [],
    a = s,
    o = (e) => {
        a = null != e && e.length > 0 ? e : s;
    };
class l extends i.Ay.Store {
    static displayName = "CollectiblesUserDiscountStore";
    getUserDiscounts() {
        return a;
    }
    getUserDiscount(e) {
        return a.find((t) => t.discountId === e);
    }
}
let d = new l(r.h, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: (e) => {
        o(e.shopHome.userDiscounts);
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
        o(e.categories.userDiscounts);
    },
    SKU_PURCHASE_SUCCESS: (e) => {
        let t = e.appliedUserDiscounts;
        if (null != t && t.length > 0) {
            let e = a.filter((e) => !t.some((t) => t.discount.id === e.discountId));
            if (e.length !== a.length) return (a = e), !0;
        }
        return !1;
    },
    COLLECTIBLES_USER_DISCOUNTS_EXPIRED: (e) => {
        let t = e.discountIds;
        if (t.length > 0) {
            let e = a.filter((e) => !t.includes(e.discountId));
            if (e.length !== a.length) return (a = e), !0;
        }
        return !1;
    },
    WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS: (e) => {
        let { userDiscounts: t } = e;
        o(t);
    },
    LOGOUT: () => {
        a = s;
    },
});
