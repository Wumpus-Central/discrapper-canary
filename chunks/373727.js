"use strict";
n.d(t, { A: () => v });
var i,
    r,
    s = n(17928),
    a = n(228366),
    o = n(739508),
    l = n(580630),
    u =
        (((i = {})[(i.DISCONNECTED = 0)] = "DISCONNECTED"),
        (i[(i.CONNECTING = 1)] = "CONNECTING"),
        (i[(i.CONNECTED = 2)] = "CONNECTED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i),
    c = (((r = {}).IN_APP = "in_app"), (r.SUBSCRIPTION = "subscription"), r),
    d = n(818348);
let _ = u.DISCONNECTED,
    h = null,
    f = new Map(),
    p = new Set(),
    E = new Set(),
    m = null,
    g = !1,
    A = !1,
    I = !1,
    T = null;
function S(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        i =
            "BG" === T && t === d.Yr.EUR
                ? (0, l.ze)(n, { convertToMajorUnits: !1 })
                : (0, l.Gp)(n, t, { convertToMajorUnits: !1 });
    return { ...e, price: e.price, currencyCode: t, priceString: i };
}
function y(e) {
    let { skus: t, skusType: n } = e;
    t.forEach((e) => {
        f.set(e.identifier, e);
    }),
        (h = Array.from(f.values())?.filter((e) => null != e)),
        h?.forEach((e) => {
            let t = e?.offerIds;
            null != t && t.forEach((e) => p.add(e));
        });
    try {
        h = h?.map(S);
    } catch (e) {
        (0, o.pM)(e);
    }
    switch (
        (h?.forEach((e) => {
            f.set(e.identifier, e);
        }),
        n)
    ) {
        case c.IN_APP:
            A = !1;
            break;
        case c.SUBSCRIPTION:
            I = !1;
    }
}
class N extends s.Ay.Store {
    static displayName = "IAPStore";
    getProducts() {
        return h;
    }
    getOfferIds() {
        return p;
    }
    getProduct(e) {
        return f.get(e) ?? null;
    }
    isBusy() {
        return E.size > 0 || g;
    }
    isPurchasingProduct(e) {
        return E.has(e);
    }
    isReady() {
        return _ === u.CONNECTED;
    }
    hasConnectionError() {
        return _ === u.ERROR;
    }
    getPendingDowngrade() {
        return m;
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
let v = new N(a.h, {
    GPLAY_UPDATE_CONNECTION_STATE: function (e) {
        let { connectionState: t } = e;
        _ = t;
    },
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function () {
        I = !0;
    },
    GPLAY_SUBSCRIPTION_SKUS_LOADED: y,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function () {
        I = !1;
    },
    GPLAY_FETCH_IN_APP_SKUS_START: function () {
        A = !0;
    },
    GPLAY_IN_APP_SKUS_LOADED: y,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: function () {
        A = !1;
    },
    GPLAY_VERIFICATION_START: function (e) {
        let { productId: t } = e;
        E.add(t);
    },
    GPLAY_VERIFICATION_END: function (e) {
        let { productId: t } = e;
        if (!E.has(t)) throw Error(`Tried verifying product without initialization: ${t}`);
        E.delete(t);
    },
    GPLAY_UPDATE_PENDING_DOWNGRADE: function (e) {
        let { pendingDowngrade: t } = e;
        m = t;
    },
    GPLAY_UPDATE_IS_DOWNGRADING: function (e) {
        let { isDowngrading: t } = e;
        g = t;
    },
    GPLAY_SET_USER_COUNTRY: function (e) {
        let { countryCode: t } = e;
        T = t;
    },
});
