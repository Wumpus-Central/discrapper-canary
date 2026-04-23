"use strict";
n.d(t, { A: () => R });
var i,
    r,
    s = n(17928),
    a = n(228366),
    o = n(739508),
    l = n(580630),
    d =
        (((i = {})[(i.DISCONNECTED = 0)] = "DISCONNECTED"),
        (i[(i.CONNECTING = 1)] = "CONNECTING"),
        (i[(i.CONNECTED = 2)] = "CONNECTED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i),
    _ = (((r = {}).IN_APP = "in_app"), (r.SUBSCRIPTION = "subscription"), r),
    u = n(818348);
let c = d.DISCONNECTED,
    E = null,
    h = new Map(),
    m = new Set(),
    f = new Set(),
    g = null,
    p = !1,
    A = !1,
    I = !1,
    T = null;
function S(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        i =
            "BG" === T && t === u.Yr.EUR
                ? (0, l.ze)(n, { convertToMajorUnits: !1 })
                : (0, l.Gp)(n, t, { convertToMajorUnits: !1 });
    return { ...e, price: e.price, currencyCode: t, priceString: i };
}
function N(e) {
    let { skus: t, skusType: n } = e;
    t.forEach((e) => {
        h.set(e.identifier, e);
    }),
        (E = Array.from(h.values())?.filter((e) => null != e)),
        E?.forEach((e) => {
            let t = e?.offerIds;
            null != t && t.forEach((e) => m.add(e));
        });
    try {
        E = E?.map(S);
    } catch (e) {
        (0, o.pM)(e);
    }
    switch (
        (E?.forEach((e) => {
            h.set(e.identifier, e);
        }),
        n)
    ) {
        case _.IN_APP:
            A = !1;
            break;
        case _.SUBSCRIPTION:
            I = !1;
    }
}
class C extends s.Ay.Store {
    static displayName = "IAPStore";
    getProducts() {
        return E;
    }
    getOfferIds() {
        return m;
    }
    getProduct(e) {
        return h.get(e) ?? null;
    }
    isBusy() {
        return f.size > 0 || p;
    }
    isPurchasingProduct(e) {
        return f.has(e);
    }
    isReady() {
        return c === d.CONNECTED;
    }
    hasConnectionError() {
        return c === d.ERROR;
    }
    getPendingDowngrade() {
        return g;
    }
    isFetchingGoogleSkus() {
        return I || A;
    }
    isFetchingProducts() {
        return I || A;
    }
    getUserCountry() {
        return T;
    }
}
let R = new C(a.h, {
    GPLAY_UPDATE_CONNECTION_STATE: function (e) {
        let { connectionState: t } = e;
        c = t;
    },
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function () {
        I = !0;
    },
    GPLAY_SUBSCRIPTION_SKUS_LOADED: N,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function () {
        I = !1;
    },
    GPLAY_FETCH_IN_APP_SKUS_START: function () {
        A = !0;
    },
    GPLAY_IN_APP_SKUS_LOADED: N,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: function () {
        A = !1;
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
        g = t;
    },
    GPLAY_UPDATE_IS_DOWNGRADING: function (e) {
        let { isDowngrading: t } = e;
        p = t;
    },
    GPLAY_SET_USER_COUNTRY: function (e) {
        let { countryCode: t } = e;
        T = t;
    },
});
