"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(73153);
let a = [],
    s = a,
    o = (e) => {
        u(e.shopHome.userDiscounts);
    },
    l = (e) => {
        u(e.categories.userDiscounts);
    },
    u = (e) => {
        s = null != e && e.length > 0 ? e : a;
    },
    c = (e) => {
        let t = e.appliedUserDiscounts;
        if (null != t && t.length > 0) {
            let e = s.filter((e) => !t.some((t) => t.discount.id === e.discountId));
            e.length !== s.length && (s = e);
        }
    },
    d = (e) => {
        let t = e.discountIds;
        if (t.length > 0) {
            let e = s.filter((e) => !t.includes(e.discountId));
            e.length !== s.length && (s = e);
        }
    },
    _ = () => {
        s = a;
    };
class f extends r.Ay.Store {
    static displayName = "CollectiblesUserDiscountStore";
    getUserDiscounts() {
        return s;
    }
    getUserDiscount(e) {
        return s.find((t) => t.discountId === e);
    }
}
let p = new f(i.h, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: o,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: l,
    SKU_PURCHASE_SUCCESS: c,
    COLLECTIBLES_USER_DISCOUNTS_EXPIRED: d,
    LOGOUT: _,
});
