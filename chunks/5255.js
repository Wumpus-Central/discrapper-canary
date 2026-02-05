"use strict";
n.d(t, { A: () => w });
var r = n(311907),
    i = n(73153),
    a = n(739508),
    s = n(580630),
    o = n(558519),
    l = n(818348);
let u = o.vx.DISCONNECTED,
    c = null,
    d = new Map(),
    _ = new Set(),
    f = new Set(),
    p = null,
    h = !1,
    m = !1,
    g = !1,
    E = null;
function A(e) {
    let { connectionState: t } = e;
    u = t;
}
function I(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        r =
            "BG" === E && t === l.Yr.EUR
                ? (0, s.ze)(n, { convertToMajorUnits: !1 })
                : (0, s.Gp)(n, t, { convertToMajorUnits: !1 });
    return { ...e, price: e.price, currencyCode: t, priceString: r };
}
function T() {
    g = !0;
}
function y() {
    g = !1;
}
function S() {
    m = !0;
}
function v() {
    m = !1;
}
function C(e) {
    let { skus: t, skusType: n } = e;
    t.forEach((e) => {
        d.set(e.identifier, e);
    }),
        (c = Array.from(d.values())?.filter((e) => null != e)),
        c?.forEach((e) => {
            let t = e?.offerIds;
            null != t && t.forEach((e) => _.add(e));
        });
    try {
        c = c?.map(I);
    } catch (e) {
        (0, a.pM)(e);
    }
    switch (
        (c?.forEach((e) => {
            d.set(e.identifier, e);
        }),
        n)
    ) {
        case o.MA.IN_APP:
            m = !1;
            break;
        case o.MA.SUBSCRIPTION:
            g = !1;
    }
}
function b(e) {
    let { productId: t } = e;
    f.add(t);
}
function N(e) {
    let { productId: t } = e;
    if (!f.has(t)) throw Error(`Tried verifying product without initialization: ${t}`);
    f.delete(t);
}
function R(e) {
    let { pendingDowngrade: t } = e;
    p = t;
}
function O(e) {
    let { isDowngrading: t } = e;
    h = t;
}
function D(e) {
    let { countryCode: t } = e;
    E = t;
}
class L extends r.Ay.Store {
    static displayName = "IAPStore";
    getProducts() {
        return c;
    }
    getOfferIds() {
        return _;
    }
    getProduct(e) {
        return d.get(e) ?? null;
    }
    isBusy() {
        return f.size > 0 || h;
    }
    isPurchasingProduct(e) {
        return f.has(e);
    }
    isReady() {
        return u === o.vx.CONNECTED;
    }
    hasConnectionError() {
        return u === o.vx.ERROR;
    }
    getPendingDowngrade() {
        return p;
    }
    isFetchingGoogleSkus() {
        return g || m;
    }
    isFetchingProducts() {
        return g || m;
    }
    getUserCountry() {
        return E;
    }
}
let w = new L(i.h, {
    GPLAY_UPDATE_CONNECTION_STATE: A,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: T,
    GPLAY_SUBSCRIPTION_SKUS_LOADED: C,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: y,
    GPLAY_FETCH_IN_APP_SKUS_START: S,
    GPLAY_IN_APP_SKUS_LOADED: C,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: v,
    GPLAY_VERIFICATION_START: b,
    GPLAY_VERIFICATION_END: N,
    GPLAY_UPDATE_PENDING_DOWNGRADE: R,
    GPLAY_UPDATE_IS_DOWNGRADING: O,
    GPLAY_SET_USER_COUNTRY: D,
});
