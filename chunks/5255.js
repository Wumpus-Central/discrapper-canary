"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(73153),
    s = n(739508),
    a = n(580630),
    o = n(558519),
    l = n(818348);
let u = o.vx.DISCONNECTED,
    d = null,
    c = new Map(),
    _ = new Set(),
    f = new Set(),
    E = null,
    h = !1,
    p = !1,
    m = !1,
    g = null;
function A(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        r =
            "BG" === g && t === l.Yr.EUR
                ? (0, a.ze)(n, { convertToMajorUnits: !1 })
                : (0, a.Gp)(n, t, { convertToMajorUnits: !1 });
    return { ...e, price: e.price, currencyCode: t, priceString: r };
}
function I(e) {
    let { skus: t, skusType: n } = e;
    t.forEach((e) => {
        c.set(e.identifier, e);
    }),
        (d = Array.from(c.values())?.filter((e) => null != e)),
        d?.forEach((e) => {
            let t = e?.offerIds;
            null != t && t.forEach((e) => _.add(e));
        });
    try {
        d = d?.map(A);
    } catch (e) {
        (0, s.pM)(e);
    }
    switch (
        (d?.forEach((e) => {
            c.set(e.identifier, e);
        }),
        n)
    ) {
        case o.MA.IN_APP:
            p = !1;
            break;
        case o.MA.SUBSCRIPTION:
            m = !1;
    }
}
class T extends r.Ay.Store {
    static displayName = "IAPStore";
    getProducts() {
        return d;
    }
    getOfferIds() {
        return _;
    }
    getProduct(e) {
        return c.get(e) ?? null;
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
        return E;
    }
    isFetchingGoogleSkus() {
        return m || p;
    }
    isFetchingProducts() {
        return m || p;
    }
    getUserCountry() {
        return g;
    }
}
let S = new T(i.h, {
    GPLAY_UPDATE_CONNECTION_STATE: function (e) {
        let { connectionState: t } = e;
        u = t;
    },
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function () {
        m = !0;
    },
    GPLAY_SUBSCRIPTION_SKUS_LOADED: I,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function () {
        m = !1;
    },
    GPLAY_FETCH_IN_APP_SKUS_START: function () {
        p = !0;
    },
    GPLAY_IN_APP_SKUS_LOADED: I,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: function () {
        p = !1;
    },
    GPLAY_VERIFICATION_START: function (e) {
        let { productId: t } = e;
        f.add(t);
    },
    GPLAY_VERIFICATION_END: function (e) {
        let { productId: t } = e;
        if (!f.has(t)) throw Error(`Tried verifying product without initialization: ${t}`);
        f.delete(t);
    },
    GPLAY_UPDATE_PENDING_DOWNGRADE: function (e) {
        let { pendingDowngrade: t } = e;
        E = t;
    },
    GPLAY_UPDATE_IS_DOWNGRADING: function (e) {
        let { isDowngrading: t } = e;
        h = t;
    },
    GPLAY_SET_USER_COUNTRY: function (e) {
        let { countryCode: t } = e;
        g = t;
    },
});
