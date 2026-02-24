"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153);
let s = [],
    a = s,
    o = (e) => {
        c(e.shopHome.userDiscounts);
    },
    l = (e) => {
        c(e.categories.userDiscounts);
    },
    u = (e) => {
        let { userDiscounts: t } = e;
        c(t);
    },
    c = (e) => {
        a = null != e && e.length > 0 ? e : s;
    },
    d = (e) => {
        let t = e.appliedUserDiscounts;
        if (null != t && t.length > 0) {
            let e = a.filter((e) => !t.some((t) => t.discount.id === e.discountId));
            if (e.length !== a.length) return (a = e), !0;
        }
        return !1;
    },
    _ = (e) => {
        let t = e.discountIds;
        if (t.length > 0) {
            let e = a.filter((e) => !t.includes(e.discountId));
            if (e.length !== a.length) return (a = e), !0;
        }
        return !1;
    },
    f = () => {
        a = s;
    };
class p extends r.Ay.Store {
    static displayName = "CollectiblesUserDiscountStore";
    getUserDiscounts() {
        return a;
    }
    getUserDiscount(e) {
        return a.find((t) => t.discountId === e);
    }
}
let h = new p(i.h, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: o,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: l,
    SKU_PURCHASE_SUCCESS: d,
    COLLECTIBLES_USER_DISCOUNTS_EXPIRED: _,
    WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS: u,
    LOGOUT: f,
});
