"use strict";
n.d(t, { A: () => D }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(334279),
    a = n(17928),
    o = n(228366),
    l = n(513985),
    d = n(189081),
    _ = n(674378),
    u = n(67480),
    c = n(652215),
    E = n(788868);
let h = {},
    m = {},
    f = {},
    g = {},
    p = !1,
    A = !1,
    I = !1,
    T = new Set(),
    S = new Set(),
    N = {};
function C(e) {
    (h[e.id] = l.A.createFromServer(e)),
        null == f[e.sku_id] && (f[e.sku_id] = new Set()),
        null == g[e.application_id] && (g[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == N[e.subscription_id] && (N[e.subscription_id] = new Set()), N[e.subscription_id].add(e.id)),
        g[e.application_id].add(e.id),
        f[e.sku_id].add(e.id);
}
function R(e) {
    m[e.id] = l.A.createFromServer(e);
}
function O(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function y(e) {
    return C(e.entitlement);
}
class v extends a.il {
    static displayName = "EntitlementStore";
    initialize() {
        this.syncWith([d.A], () => !0);
    }
    get(e) {
        return h[e];
    }
    getGiftable() {
        return r().values(m);
    }
    getForApplication(e) {
        let t = g[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    getForSku(e) {
        let t = f[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return p;
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
        let t = N[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = f[t];
        if (null != r)
            for (let t of r) {
                let n = h[t];
                if (null != n && n.isValid(e, u.A, i)) return !0;
            }
        if (S.has(n)) return !1;
        let s = null != i ? d.A.getLibraryApplication(n, i) : d.A.getActiveLibraryApplication(n);
        return !!(null != s && s.sku.id === t && (0, _.XZ)(s)) || null;
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
            this.getForApplication(E.tv)?.forEach((r) => {
                let s = null != r.endsAt && r.endsAt < i,
                    a = r.sourceType === c.GD.REVERSE_TRIAL && t;
                r.type !== c.zF_.FRACTIONAL_REDEMPTION || (s && !e) || a || n.push(r);
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
            this.getForApplication(E.tv)?.forEach((t) => {
                s.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(t.skuId) && !t.consumed && e.push(t);
            }),
            e
        );
    }
}
let D = new v(o.h, {
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
        (m = {}), t.forEach(R);
    },
    SKU_PURCHASE_SUCCESS: O,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: O,
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
    },
    ENTITLEMENT_CREATE: y,
    ENTITLEMENT_UPDATE: y,
    ENTITLEMENT_DELETE: function (e) {
        return (function (e) {
            delete h[e.id];
            let t = g[e.application_id];
            null != t && t.delete(e.id);
            let n = f[e.sku_id];
            if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                let t = N[e.subscription_id];
                null != t && t.delete(e.id);
            }
        })(e.entitlement);
    },
    LOGOUT: function () {
        (h = {}), (f = {}), (g = {}), (p = !1), (A = !1), (I = !1), (T = new Set()), (S = new Set());
    },
    ENTITLEMENTS_FETCH_FOR_USER_START: function () {
        p = !0;
    },
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
        let { entitlements: t, excludeEnded: n } = e;
        for (let e of ((A = !0), (p = !1), (I = !n), t)) C(e);
    },
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
        (A = !1), (p = !1), (I = !1);
    },
});
