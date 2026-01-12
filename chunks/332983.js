n.d(t, { Z: () => k }), n(388685), n(415506);
var r,
    i = n(442837),
    a = n(570140),
    o = n(122289),
    s = n(937615),
    l = n(667354),
    c = n(231338);
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
let _ = l.vk.DISCONNECTED,
    m = null,
    h = new Map(),
    g = new Set(),
    E = new Set(),
    b = null,
    y = !1,
    O = !1,
    v = !1,
    S = null;
function I(e) {
    let { connectionState: t } = e;
    _ = t;
}
function T(e) {
    let t = e.currencyCode.toLowerCase(),
        n = e.price / 100,
        r =
            "BG" === S && t === c.pK.EUR
                ? (0, s.HR)(n, { convertToMajorUnits: !1 })
                : (0, s.yH)(n, t, { convertToMajorUnits: !1 });
    return p(d({}, e), {
        price: e.price,
        currencyCode: t,
        priceString: r,
    });
}
function C() {
    v = !0;
}
function A() {
    v = !1;
}
function N() {
    O = !0;
}
function P() {
    O = !1;
}
function R(e) {
    var t;
    let { skus: n, skusType: r } = e;
    n.forEach((e) => {
        h.set(e.identifier, e);
    }),
        null == (m = null == (t = Array.from(h.values())) ? void 0 : t.filter((e) => null != e)) ||
            m.forEach((e) => {
                let t = null == e ? void 0 : e.offerIds;
                null != t && t.forEach((e) => g.add(e));
            });
    try {
        m = null == m ? void 0 : m.map(T);
    } catch (e) {
        (0, o.q2)(e);
    }
    switch (
        (null == m ||
            m.forEach((e) => {
                h.set(e.identifier, e);
            }),
        r)
    ) {
        case l.oo.IN_APP:
            O = !1;
            break;
        case l.oo.SUBSCRIPTION:
            v = !1;
    }
}
function w(e) {
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
    S = t;
}
class M extends (r = i.ZP.Store) {
    getProducts() {
        return m;
    }
    getOfferIds() {
        return g;
    }
    getProduct(e) {
        var t;
        return null != (t = h.get(e)) ? t : null;
    }
    isBusy() {
        return E.size > 0 || y;
    }
    isPurchasingProduct(e) {
        return E.has(e);
    }
    isReady() {
        return _ === l.vk.CONNECTED;
    }
    hasConnectionError() {
        return _ === l.vk.ERROR;
    }
    getPendingDowngrade() {
        return b;
    }
    isFetchingGoogleSkus() {
        return v || O;
    }
    isFetchingProducts() {
        return v || O;
    }
    getUserCountry() {
        return S;
    }
}
u(M, "displayName", "IAPStore");
let k = new M(a.Z, {
    GPLAY_UPDATE_CONNECTION_STATE: I,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_START: C,
    GPLAY_SUBSCRIPTION_SKUS_LOADED: R,
    GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: A,
    GPLAY_FETCH_IN_APP_SKUS_START: N,
    GPLAY_IN_APP_SKUS_LOADED: R,
    GPLAY_FETCH_IN_APP_SKUS_FAILED: P,
    GPLAY_VERIFICATION_START: w,
    GPLAY_VERIFICATION_END: D,
    GPLAY_UPDATE_PENDING_DOWNGRADE: x,
    GPLAY_UPDATE_IS_DOWNGRADING: L,
    GPLAY_SET_USER_COUNTRY: j,
});
