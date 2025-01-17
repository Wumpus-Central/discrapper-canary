var i,
    a = r(47120);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(314794),
    c = r(442837),
    d = r(570140),
    f = r(959546),
    _ = r(283595),
    h = r(780570),
    p = r(55563),
    m = r(981631),
    g = r(474936);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = {},
    I = {},
    T = {},
    b = {},
    y = !1,
    S = !1,
    A = new Set(),
    N = new Set(),
    C = {};
function R() {
    (v = {}), (T = {}), (b = {}), (y = !1), (S = !1), (A = new Set()), (N = new Set());
}
function O(e) {
    (v[e.id] = f.Z.createFromServer(e)), null == T[e.sku_id] && (T[e.sku_id] = new Set()), null == b[e.application_id] && (b[e.application_id] = new Set()), null != e.subscription_id && (null == C[e.subscription_id] && (C[e.subscription_id] = new Set()), C[e.subscription_id].add(e.id)), b[e.application_id].add(e.id), T[e.sku_id].add(e.id);
}
function D(e) {
    I[e.id] = f.Z.createFromServer(e);
}
function L(e) {
    delete v[e.id];
    let n = b[e.application_id];
    null != n && n.delete(e.id);
    let r = T[e.sku_id];
    if ((null != r && r.delete(e.id), null != e.subscription_id)) {
        let n = C[e.subscription_id];
        null != n && n.delete(e.id);
    }
}
function x(e) {
    let { applicationId: n } = e;
    A.add(n);
}
function w(e) {
    let { applicationId: n, entitlements: r } = e;
    for (let e of (A.delete(n), N.add(n), r)) !0 !== e.consumed && O(e);
}
function P(e) {
    let { entitlements: n } = e;
    (I = {}), n.forEach(D);
}
function M() {}
function k() {
    y = !0;
}
function U(e) {
    let { entitlements: n } = e;
    for (let e of ((S = !0), (y = !1), n)) O(e);
}
function B() {
    (S = !1), (y = !1);
}
function G(e) {
    let { entitlements: n } = e;
    for (let e of n) O(e);
}
function Z(e) {
    let { libraryApplications: n } = e;
    for (let e of n) if (null != e.entitlements) for (let n of e.entitlements) O(n);
}
function F(e) {
    return O(e.entitlement);
}
function V(e) {
    return L(e.entitlement);
}
class j extends (i = c.yh) {
    initialize() {
        this.syncWith([_.Z], () => !0);
    }
    get(e) {
        return v[e];
    }
    getGiftable() {
        return l().values(I);
    }
    getForApplication(e) {
        let n = b[e];
        if (null == n) return null;
        let r = new Set();
        for (let e of n) r.add(v[e]);
        return r;
    }
    getForSku(e) {
        let n = T[e];
        if (null == n) return null;
        let r = new Set();
        for (let e of n) r.add(v[e]);
        return r;
    }
    get fetchingAllEntitlements() {
        return y;
    }
    get fetchedAllEntitlements() {
        return S;
    }
    get applicationIdsFetching() {
        return A;
    }
    get applicationIdsFetched() {
        return N;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let n = C[e];
        if (null == n) return null;
        let r = new Set();
        for (let e of n) r.add(v[e]);
        return r;
    }
    isEntitledToSku(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            a = T[n];
        if (null != a)
            for (let n of a) {
                let r = v[n];
                if (null != r && r.isValid(e, p.Z, i)) return !0;
            }
        if (N.has(r)) return !1;
        let s = null != i ? _.Z.getLibraryApplication(r, i) : _.Z.getActiveLibraryApplication(r);
        return !!(null != s && s.sku.id === n && (0, h.Je)(s)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => N.has(e));
    }
    getFractionalPremium(e) {
        var n;
        let r = [],
            i = new Date();
        return (
            null === (n = this.getForApplication(g.CL)) ||
                void 0 === n ||
                n.forEach((n) => {
                    let a = null != n.endsAt && n.endsAt < i;
                    n.type === m.qc2.FRACTIONAL_REDEMPTION && (!a || e) && r.push(n);
                }),
            r
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let n = [];
        return (
            null === (e = this.getForApplication(g.CL)) ||
                void 0 === e ||
                e.forEach((e) => {
                    u.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && n.push(e);
                }),
            n
        );
    }
}
E(j, 'displayName', 'EntitlementStore'),
    (n.Z = new j(d.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: x,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: w,
        ENTITLEMENT_FETCH_APPLICATION_FAIL: M,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: P,
        SKU_PURCHASE_SUCCESS: G,
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: G,
        LIBRARY_FETCH_SUCCESS: Z,
        ENTITLEMENT_CREATE: F,
        ENTITLEMENT_UPDATE: F,
        ENTITLEMENT_DELETE: V,
        LOGOUT: R,
        ENTITLEMENTS_FETCH_FOR_USER_START: k,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: U,
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: B
    }));
