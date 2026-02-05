"use strict";
n.d(t, { A: () => F }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(334279),
    s = n(311907),
    o = n(73153),
    l = n(557009),
    u = n(189081),
    c = n(674378),
    d = n(67480),
    _ = n(652215),
    f = n(788868);
let p = {},
    h = {},
    m = {},
    g = {},
    E = !1,
    A = !1,
    I = !1,
    T = new Set(),
    y = new Set(),
    S = {};
function v() {
    (p = {}), (m = {}), (g = {}), (E = !1), (A = !1), (I = !1), (T = new Set()), (y = new Set());
}
function C(e) {
    (p[e.id] = l.A.createFromServer(e)),
        null == m[e.sku_id] && (m[e.sku_id] = new Set()),
        null == g[e.application_id] && (g[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == S[e.subscription_id] && (S[e.subscription_id] = new Set()), S[e.subscription_id].add(e.id)),
        g[e.application_id].add(e.id),
        m[e.sku_id].add(e.id);
}
function b(e) {
    h[e.id] = l.A.createFromServer(e);
}
function N(e) {
    delete p[e.id];
    let t = g[e.application_id];
    null != t && t.delete(e.id);
    let n = m[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = S[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function R(e) {
    let { applicationId: t } = e;
    T.add(t);
}
function O(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (T.delete(t), y.add(t), n)) !0 !== e.consumed && C(e);
}
function D(e) {
    let { entitlements: t } = e;
    (h = {}), t.forEach(b);
}
function L() {}
function w() {
    E = !0;
}
function x(e) {
    let { entitlements: t, excludeEnded: n } = e;
    for (let e of ((A = !0), (E = !1), (I = !n), t)) C(e);
}
function P() {
    (A = !1), (E = !1), (I = !1);
}
function M(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function k(e) {
    let { libraryApplications: t } = e;
    for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
}
function U(e) {
    return C(e.entitlement);
}
function G(e) {
    return N(e.entitlement);
}
class V extends s.il {
    static displayName = "EntitlementStore";
    initialize() {
        this.syncWith([u.A], () => !0);
    }
    get(e) {
        return p[e];
    }
    getGiftable() {
        return i().values(h);
    }
    getForApplication(e) {
        let t = g[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(p[e]);
        return n;
    }
    getForSku(e) {
        let t = m[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(p[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return E;
    }
    get fetchedAllEntitlements() {
        return A;
    }
    get fetchedEndedEntitlements() {
        return I;
    }
    get applicationIdsFetching() {
        return T;
    }
    get applicationIdsFetched() {
        return y;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = S[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(p[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = m[t];
        if (null != i)
            for (let t of i) {
                let n = p[t];
                if (null != n && n.isValid(e, d.A, r)) return !0;
            }
        if (y.has(n)) return !1;
        let a = null != r ? u.A.getLibraryApplication(n, r) : u.A.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, c.XZ)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => y.has(e));
    }
    getReverseTrialEntitlement(e) {
        let t = new Date(),
            n = this.getForApplication(f.tv);
        if (null != n)
            for (let r of n) {
                let n = null != r.endsAt && r.endsAt < t,
                    i = null != r.startsAt;
                if (r.type === _.zF_.FRACTIONAL_REDEMPTION && r.sourceType === _.GD.REVERSE_TRIAL && (!n || e) && i)
                    return r;
            }
        return null;
    }
    getFractionalPremium() {
        let { includeEnded: e = !1, excludeReverseTrial: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [],
            r = new Date();
        return (
            this.getForApplication(f.tv)?.forEach((i) => {
                let a = null != i.endsAt && i.endsAt < r,
                    s = i.sourceType === _.GD.REVERSE_TRIAL && t;
                i.type !== _.zF_.FRACTIONAL_REDEMPTION || (a && !e) || s || n.push(i);
            }),
            n
        );
    }
    isFractionalPremiumActive() {
        let { excludeReverseTrial: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.getFractionalPremium({ includeEnded: !1, excludeReverseTrial: e }).length > 0;
    }
    getUnactivatedFractionalPremiumUnits() {
        let e = [];
        return (
            this.getForApplication(f.tv)?.forEach((t) => {
                a.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(t.skuId) && !t.consumed && e.push(t);
            }),
            e
        );
    }
}
let F = new V(o.h, {
    ENTITLEMENT_FETCH_APPLICATION_START: R,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
    ENTITLEMENT_FETCH_APPLICATION_FAIL: L,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: D,
    SKU_PURCHASE_SUCCESS: M,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: M,
    LIBRARY_FETCH_SUCCESS: k,
    ENTITLEMENT_CREATE: U,
    ENTITLEMENT_UPDATE: U,
    ENTITLEMENT_DELETE: G,
    LOGOUT: v,
    ENTITLEMENTS_FETCH_FOR_USER_START: w,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: x,
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: P,
});
