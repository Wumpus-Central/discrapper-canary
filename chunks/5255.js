n.d(t, {
    A: () => k,
}),
    n(896048),
    n(65821);
var r,
    i = n(311907),
    a = n(73153),
    s = n(739508),
    o = n(580630),
    l = n(558519),
    c = n(818348);

function u(e, t, n) {
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

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = l.vx.DISCONNECTED,
    h = null,
    m = new Map(),
    g = new Set(),
    E = new Set(),
    b = null,
    y = !1,
    O = !1,
    A = !1,
    v = null;

function S(e) {
    let { connectionState: t } = e;
    _ = t;
}

function I(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        r =
            "BG" === v && t === c.Yr.EUR
                ? (0, o.ze)(n, {
                      convertToMajorUnits: !1,
                  })
                : (0, o.Gp)(n, t, {
                      convertToMajorUnits: !1,
                  });
    return p(d({}, e), {
        price: e.price,
        currencyCode: t,
        priceString: r,
    });
}

function T() {
    A = !0;
}

function C() {
    A = !1;
}

function N() {
    O = !0;
}

function R() {
    O = !1;
}

function w(e) {
    var t;
    let { skus: n, skusType: r } = e;
    n.forEach((e) => {
        m.set(e.identifier, e);
    }),
        null == (h = null == (t = Array.from(m.values())) ? void 0 : t.filter((e) => null != e)) ||
            h.forEach((e) => {
                let t = null == e ? void 0 : e.offerIds;
                null != t && t.forEach((e) => g.add(e));
            });
    try {
        h = null == h ? void 0 : h.map(I);
    } catch (e) {
        (0, s.pM)(e);
    }
    switch (
        (null == h ||
            h.forEach((e) => {
                m.set(e.identifier, e);
            }),
        r)
    ) {
        case l.MA.IN_APP:
            O = !1;
            break;
        case l.MA.SUBSCRIPTION:
            A = !1;
    }
}

function P(e) {
    let { productId: t } = e;
    E.add(t);
}

function D(e) {
    let { productId: t } = e;
    if (!E.has(t)) throw Error("Tried verifying product without initialization: ".concat(t));
    E.delete(t);
}

function x(e) {
    let { pendingDowngrade: t } = e;
    b = t;
}

function L(e) {
    let { isDowngrading: t } = e;
    y = t;
}

function j(e) {
    let { countryCode: t } = e;
    v = t;
}
class M extends (r = i.Ay.Store) {
    getProducts() {
        return h;
    }
    getOfferIds() {
        return g;
    }
    getProduct(e) {
        var t;
        return null != (t = m.get(e)) ? t : null;
    }
    isBusy() {
        return E.size > 0 || y;
    }
    isPurchasingProduct(e) {
        return E.has(e);
    }
    isReady() {
        return _ === l.vx.CONNECTED;
    }
    hasConnectionError() {
        return _ === l.vx.ERROR;
    }
    getPendingDowngrade() {
        return b;
    }
    isFetchingGoogleSkus() {
        return A || O;
    }
    isFetchingProducts() {
        return A || O;
    }
    getUserCountry() {
        return v;
    }
}
u(M, "displayName", "IAPStore");
let k = new M(a.h, {
    GPLAY_UPDATE_CONNECTION_STATE: S,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: T,
    GPLAY_SUBSCRIPTION_SKUS_LOADED: w,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: C,
    GPLAY_FETCH_IN_APP_SKUS_START: N,
    GPLAY_IN_APP_SKUS_LOADED: w,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: R,
    GPLAY_VERIFICATION_START: P,
    GPLAY_VERIFICATION_END: D,
    GPLAY_UPDATE_PENDING_DOWNGRADE: x,
    GPLAY_UPDATE_IS_DOWNGRADING: L,
    GPLAY_SET_USER_COUNTRY: j,
});
