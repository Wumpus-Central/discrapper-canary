"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(334279),
    a = n(17928),
    o = n(228366),
    l = n(557009),
    u = n(189081),
    c = n(674378),
    d = n(67480),
    _ = n(652215),
    h = n(788868);
let f = {},
    p = {},
    E = {},
    m = {},
    g = !1,
    A = !1,
    I = !1,
    T = new Set(),
    S = new Set(),
    y = {};
function C(e) {
    (f[e.id] = l.A.createFromServer(e)),
        null == E[e.sku_id] && (E[e.sku_id] = new Set()),
        null == m[e.application_id] && (m[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == y[e.subscription_id] && (y[e.subscription_id] = new Set()), y[e.subscription_id].add(e.id)),
        m[e.application_id].add(e.id),
        E[e.sku_id].add(e.id);
}
function N(e) {
    p[e.id] = l.A.createFromServer(e);
}
function v(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function R(e) {
    return C(e.entitlement);
}
class O extends a.il {
    static displayName = "EntitlementStore";
    initialize() {
        this.syncWith([u.A], () => !0);
    }
    get(e) {
        return f[e];
    }
    getGiftable() {
        return r().values(p);
    }
    getForApplication(e) {
        let t = m[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(f[e]);
        return n;
    }
    getForSku(e) {
        let t = E[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(f[e]);
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
        for (let e of t) n.add(f[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = E[t];
        if (null != r)
            for (let t of r) {
                let n = f[t];
                if (null != n && n.isValid(e, d.A, i)) return !0;
            }
        if (S.has(n)) return !1;
        let s = null != i ? u.A.getLibraryApplication(n, i) : u.A.getActiveLibraryApplication(n);
        return !!(null != s && s.sku.id === t && (0, c.XZ)(s)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => S.has(e));
    }
    getFractionalPremium() {
        let { includeEnded: e = !1, excludeReverseTrial: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [],
            i = new Date();
        return (
            this.getForApplication(h.tv)?.forEach((r) => {
                let s = null != r.endsAt && r.endsAt < i,
                    a = r.sourceType === _.GD.REVERSE_TRIAL && t;
                r.type !== _.zF_.FRACTIONAL_REDEMPTION || (s && !e) || a || n.push(r);
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
            this.getForApplication(h.tv)?.forEach((t) => {
                s.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(t.skuId) && !t.consumed && e.push(t);
            }),
            e
        );
    }
}
let b = new O(o.h, {
    ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
        let { applicationId: t } = e;
        T.add(t);
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        let { applicationId: t, entitlements: n } = e;
        for (let e of (T.delete(t), S.add(t), n)) !0 !== e.consumed && C(e);
    },
    ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let { entitlements: t } = e;
        (p = {}), t.forEach(N);
    },
    SKU_PURCHASE_SUCCESS: v,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: v,
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
    },
    ENTITLEMENT_CREATE: R,
    ENTITLEMENT_UPDATE: R,
    ENTITLEMENT_DELETE: function (e) {
        return (function (e) {
            delete f[e.id];
            let t = m[e.application_id];
            null != t && t.delete(e.id);
            let n = E[e.sku_id];
            if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                let t = y[e.subscription_id];
                null != t && t.delete(e.id);
            }
        })(e.entitlement);
    },
    LOGOUT: function () {
        (f = {}), (E = {}), (m = {}), (g = !1), (A = !1), (I = !1), (T = new Set()), (S = new Set());
    },
    ENTITLEMENTS_FETCH_FOR_USER_START: function () {
        g = !0;
    },
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
        let { entitlements: t, excludeEnded: n } = e;
        for (let e of ((A = !0), (g = !1), (I = !n), t)) C(e);
    },
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
        (A = !1), (g = !1), (I = !1);
    },
});
