n.d(t, { A: () => B }), n(896048), n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(334279),
    o = n(311907),
    l = n(73153),
    c = n(557009),
    u = n(189081),
    d = n(674378),
    f = n(67480),
    p = n(652215),
    _ = n(788868);
function h(e, t, n) {
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
let m = {},
    g = {},
    E = {},
    b = {},
    y = !1,
    O = !1,
    A = !1,
    v = new Set(),
    S = new Set(),
    I = {};
function T() {
    (m = {}), (E = {}), (b = {}), (y = !1), (O = !1), (A = !1), (v = new Set()), (S = new Set());
}
function C(e) {
    (m[e.id] = c.A.createFromServer(e)),
        null == E[e.sku_id] && (E[e.sku_id] = new Set()),
        null == b[e.application_id] && (b[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == I[e.subscription_id] && (I[e.subscription_id] = new Set()), I[e.subscription_id].add(e.id)),
        b[e.application_id].add(e.id),
        E[e.sku_id].add(e.id);
}
function N(e) {
    g[e.id] = c.A.createFromServer(e);
}
function R(e) {
    delete m[e.id];
    let t = b[e.application_id];
    null != t && t.delete(e.id);
    let n = E[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = I[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function w(e) {
    let { applicationId: t } = e;
    v.add(t);
}
function P(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (v.delete(t), S.add(t), n)) !0 !== e.consumed && C(e);
}
function D(e) {
    let { entitlements: t } = e;
    (g = {}), t.forEach(N);
}
function x() {}
function L() {
    y = !0;
}
function j(e) {
    let { entitlements: t, excludeEnded: n } = e;
    for (let e of ((O = !0), (y = !1), (A = !n), t)) C(e);
}
function M() {
    (O = !1), (y = !1), (A = !1);
}
function k(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function U(e) {
    let { libraryApplications: t } = e;
    for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
}
function G(e) {
    return C(e.entitlement);
}
function V(e) {
    return R(e.entitlement);
}
class F extends (r = o.il) {
    initialize() {
        this.syncWith([u.A], () => !0);
    }
    get(e) {
        return m[e];
    }
    getGiftable() {
        return a().values(g);
    }
    getForApplication(e) {
        let t = b[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(m[e]);
        return n;
    }
    getForSku(e) {
        let t = E[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(m[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return y;
    }
    get fetchedAllEntitlements() {
        return O;
    }
    get fetchedEndedEntitlements() {
        return A;
    }
    get applicationIdsFetching() {
        return v;
    }
    get applicationIdsFetched() {
        return S;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(m[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = E[t];
        if (null != i)
            for (let t of i) {
                let n = m[t];
                if (null != n && n.isValid(e, f.A, r)) return !0;
            }
        if (S.has(n)) return !1;
        let a = null != r ? u.A.getLibraryApplication(n, r) : u.A.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, d.XZ)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => S.has(e));
    }
    getReverseTrialEntitlement(e) {
        let t = new Date(),
            n = this.getForApplication(_.tv);
        if (null != n)
            for (let r of n) {
                let n = null != r.endsAt && r.endsAt < t,
                    i = null != r.startsAt;
                if (r.type === p.zF_.FRACTIONAL_REDEMPTION && r.sourceType === p.GD.REVERSE_TRIAL && (!n || e) && i)
                    return r;
            }
        return null;
    }
    getFractionalPremium() {
        var e;
        let { includeEnded: t = !1, excludeReverseTrial: n = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = [],
            i = new Date();
        return (
            null == (e = this.getForApplication(_.tv)) ||
                e.forEach((e) => {
                    let a = null != e.endsAt && e.endsAt < i,
                        s = e.sourceType === p.GD.REVERSE_TRIAL && n;
                    e.type !== p.zF_.FRACTIONAL_REDEMPTION || (a && !t) || s || r.push(e);
                }),
            r
        );
    }
    isFractionalPremiumActive() {
        let { excludeReverseTrial: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
            this.getFractionalPremium({
                includeEnded: !1,
                excludeReverseTrial: e,
            }).length > 0
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null == (e = this.getForApplication(_.tv)) ||
                e.forEach((e) => {
                    s.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
h(F, "displayName", "EntitlementStore");
let B = new F(l.h, {
    ENTITLEMENT_FETCH_APPLICATION_START: w,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: P,
    ENTITLEMENT_FETCH_APPLICATION_FAIL: x,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: D,
    SKU_PURCHASE_SUCCESS: k,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: k,
    LIBRARY_FETCH_SUCCESS: U,
    ENTITLEMENT_CREATE: G,
    ENTITLEMENT_UPDATE: G,
    ENTITLEMENT_DELETE: V,
    LOGOUT: T,
    ENTITLEMENTS_FETCH_FOR_USER_START: L,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: j,
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: M,
});
