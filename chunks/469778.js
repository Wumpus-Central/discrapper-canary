"use strict";
n.d(t, { A: () => b }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(334279),
    a = n(311907),
    o = n(73153),
    l = n(557009),
    u = n(189081),
    d = n(674378),
    c = n(67480),
    _ = n(652215),
    f = n(788868);
let E = {},
    h = {},
    p = {},
    m = {},
    g = !1,
    A = !1,
    I = !1,
    T = new Set(),
    S = new Set(),
    y = {};
function N(e) {
    (E[e.id] = l.A.createFromServer(e)),
        null == p[e.sku_id] && (p[e.sku_id] = new Set()),
        null == m[e.application_id] && (m[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == y[e.subscription_id] && (y[e.subscription_id] = new Set()), y[e.subscription_id].add(e.id)),
        m[e.application_id].add(e.id),
        p[e.sku_id].add(e.id);
}
function O(e) {
    h[e.id] = l.A.createFromServer(e);
}
function R(e) {
    let { entitlements: t } = e;
    for (let e of t) N(e);
}
function v(e) {
    return N(e.entitlement);
}
class C extends a.il {
    static displayName = "EntitlementStore";
    initialize() {
        this.syncWith([u.A], () => !0);
    }
    get(e) {
        return E[e];
    }
    getGiftable() {
        return i().values(h);
    }
    getForApplication(e) {
        let t = m[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(E[e]);
        return n;
    }
    getForSku(e) {
        let t = p[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(E[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return g;
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
        return S;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = y[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(E[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = p[t];
        if (null != i)
            for (let t of i) {
                let n = E[t];
                if (null != n && n.isValid(e, c.A, r)) return !0;
            }
        if (S.has(n)) return !1;
        let s = null != r ? u.A.getLibraryApplication(n, r) : u.A.getActiveLibraryApplication(n);
        return !!(null != s && s.sku.id === t && (0, d.XZ)(s)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => S.has(e));
    }
    getFractionalPremium() {
        let { includeEnded: e = !1, excludeReverseTrial: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [],
            r = new Date();
        return (
            this.getForApplication(f.tv)?.forEach((i) => {
                let s = null != i.endsAt && i.endsAt < r,
                    a = i.sourceType === _.GD.REVERSE_TRIAL && t;
                i.type !== _.zF_.FRACTIONAL_REDEMPTION || (s && !e) || a || n.push(i);
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
                s.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(t.skuId) && !t.consumed && e.push(t);
            }),
            e
        );
    }
}
let b = new C(o.h, {
    ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
        let { applicationId: t } = e;
        T.add(t);
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        let { applicationId: t, entitlements: n } = e;
        for (let e of (T.delete(t), S.add(t), n)) !0 !== e.consumed && N(e);
    },
    ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let { entitlements: t } = e;
        (h = {}), t.forEach(O);
    },
    SKU_PURCHASE_SUCCESS: R,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: R,
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) N(t);
    },
    ENTITLEMENT_CREATE: v,
    ENTITLEMENT_UPDATE: v,
    ENTITLEMENT_DELETE: function (e) {
        return (function (e) {
            delete E[e.id];
            let t = m[e.application_id];
            null != t && t.delete(e.id);
            let n = p[e.sku_id];
            if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                let t = y[e.subscription_id];
                null != t && t.delete(e.id);
            }
        })(e.entitlement);
    },
    LOGOUT: function () {
        (E = {}), (p = {}), (m = {}), (g = !1), (A = !1), (I = !1), (T = new Set()), (S = new Set());
    },
    ENTITLEMENTS_FETCH_FOR_USER_START: function () {
        g = !0;
    },
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
        let { entitlements: t, excludeEnded: n } = e;
        for (let e of ((A = !0), (g = !1), (I = !n), t)) N(e);
    },
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
        (A = !1), (g = !1), (I = !1);
    },
});
