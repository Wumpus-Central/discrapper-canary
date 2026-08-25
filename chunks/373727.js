"use strict";
n.d(t, { A: () => R });
var i,
    r,
    a = n(17928),
    s = n(228366),
    l = n(739508),
    o = n(580630),
    d =
        (((i = {})[(i.DISCONNECTED = 0)] = "DISCONNECTED"),
        (i[(i.CONNECTING = 1)] = "CONNECTING"),
        (i[(i.CONNECTED = 2)] = "CONNECTED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i),
    c = (((r = {}).IN_APP = "in_app"), (r.SUBSCRIPTION = "subscription"), r),
    u = n(818348);
let _ = d.DISCONNECTED,
    E = null,
    A = new Map(),
    h = new Set(),
    I = new Set(),
    f = null,
    p = !1,
    T = !1,
    m = !1,
    g = null;
function S(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        i =
            "BG" === g && t === u.Yr.EUR
                ? (0, o.ze)(n, { convertToMajorUnits: !1 })
                : (0, o.Gp)(n, t, { convertToMajorUnits: !1 });
    return { ...e, price: e.price, currencyCode: t, priceString: i };
}
function N(e) {
    let { skus: t, skusType: n } = e;
    t.forEach((e) => {
        A.set(e.identifier, e);
    }),
        (E = Array.from(A.values())?.filter((e) => null != e)),
        E?.forEach((e) => {
            let t = e?.offerIds;
            null != t && t.forEach((e) => h.add(e));
        });
    try {
        E = E?.map(S);
    } catch (e) {
        (0, l.pM)(e);
    }
    switch (
        (E?.forEach((e) => {
            A.set(e.identifier, e);
        }),
        n)
    ) {
        case c.IN_APP:
            T = !1;
            break;
        case c.SUBSCRIPTION:
            m = !1;
    }
}
class C extends a.Ay.Store {
    static displayName = "IAPStore";
    getProducts() {
        return E;
    }
    getOfferIds() {
        return h;
    }
    getProduct(e) {
        return A.get(e) ?? null;
    }
    isBusy() {
        return I.size > 0 || p;
    }
    isPurchasingProduct(e) {
        return I.has(e);
    }
    isReady() {
        return _ === d.CONNECTED;
    }
    hasConnectionError() {
        return _ === d.ERROR;
    }
    getPendingDowngrade() {
        return f;
    }
    isFetchingGoogleSkus() {
        return m || T;
    }
    isFetchingProducts() {
        return m || T;
    }
    getUserCountry() {
        return g;
    }
}
let R = new C(s.h, {
    GPLAY_UPDATE_CONNECTION_STATE: function (e) {
        let { connectionState: t } = e;
        _ = t;
    },
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function () {
        m = !0;
    },
    GPLAY_SUBSCRIPTION_SKUS_LOADED: N,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function () {
        m = !1;
    },
    GPLAY_FETCH_IN_APP_SKUS_START: function () {
        T = !0;
    },
    GPLAY_IN_APP_SKUS_LOADED: N,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: function () {
        T = !1;
    },
    GPLAY_VERIFICATION_START: function (e) {
        let { productId: t } = e;
        I.add(t);
    },
    GPLAY_VERIFICATION_END: function (e) {
        let { productId: t } = e;
        if (!I.has(t)) throw Error(`Tried verifying product without initialization: ${t}`);
        I.delete(t);
    },
    GPLAY_UPDATE_PENDING_DOWNGRADE: function (e) {
        let { pendingDowngrade: t } = e;
        f = t;
    },
    GPLAY_UPDATE_IS_DOWNGRADING: function (e) {
        let { isDowngrading: t } = e;
        p = t;
    },
    GPLAY_SET_USER_COUNTRY: function (e) {
        let { countryCode: t } = e;
        g = t;
    },
});
