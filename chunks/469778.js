n.d(t, { A: () => D }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(334279),
    s = n(17928),
    l = n(228366),
    o = n(557009),
    d = n(189081),
    c = n(674378),
    u = n(67480),
    _ = n(652215),
    E = n(202541);
let A = {},
    h = {},
    I = {},
    f = {},
    p = !1,
    T = !1,
    m = !1,
    g = new Set(),
    S = new Set(),
    N = {};
function C(e) {
    (A[e.id] = o.A.createFromServer(e)),
        null == I[e.sku_id] && (I[e.sku_id] = new Set()),
        null == f[e.application_id] && (f[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == N[e.subscription_id] && (N[e.subscription_id] = new Set()), N[e.subscription_id].add(e.id)),
        f[e.application_id].add(e.id),
        I[e.sku_id].add(e.id);
}
function O(e) {
    h[e.id] = o.A.createFromServer(e);
}
function R(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function L(e) {
    return C(e.entitlement);
}
class y extends s.il {
    static displayName = "EntitlementStore";
    initialize() {
        this.syncWith([d.A], () => !0);
    }
    get(e) {
        return A[e];
    }
    getGiftable() {
        return r().values(h);
    }
    getForApplication(e) {
        let t = f[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(A[e]);
        return n;
    }
    getForSku(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(A[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return p;
    }
    get fetchedAllEntitlements() {
        return T;
    }
    get fetchedEndedEntitlements() {
        return m;
    }
    get applicationIdsFetching() {
        return g;
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
        for (let e of t) n.add(A[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = I[t];
        if (null != r)
            for (let t of r) {
                let n = A[t];
                if (null != n && n.isValid(e, u.A, i)) return !0;
            }
        if (S.has(n)) return !1;
        let a = null != i ? d.A.getLibraryApplication(n, i) : d.A.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, c.XZ)(a)) || null;
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
                let a = null != r.endsAt && r.endsAt < i,
                    s = r.sourceType === _.GD.REVERSE_TRIAL && t;
                r.type !== _.zF_.FRACTIONAL_REDEMPTION || (a && !e) || s || n.push(r);
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
                a.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(t.skuId) && !t.consumed && e.push(t);
            }),
            e
        );
    }
}
let D = new y(l.h, {
    ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
        let { applicationId: t } = e;
        g.add(t);
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        let { applicationId: t, entitlements: n } = e;
        for (let e of (g.delete(t), S.add(t), n)) !0 !== e.consumed && C(e);
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
        for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
    },
    ENTITLEMENT_CREATE: L,
    ENTITLEMENT_UPDATE: L,
    ENTITLEMENT_DELETE: function (e) {
        return (function (e) {
            delete A[e.id];
            let t = f[e.application_id];
            null != t && t.delete(e.id);
            let n = I[e.sku_id];
            if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                let t = N[e.subscription_id];
                null != t && t.delete(e.id);
            }
        })(e.entitlement);
    },
    LOGOUT: function () {
        (A = {}), (I = {}), (f = {}), (p = !1), (T = !1), (m = !1), (g = new Set()), (S = new Set());
    },
    ENTITLEMENTS_FETCH_FOR_USER_START: function () {
        p = !0;
    },
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
        let { entitlements: t, excludeEnded: n } = e;
        for (let e of ((T = !0), (p = !1), (m = !n), t)) C(e);
    },
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
        (T = !1), (p = !1), (m = !1);
    },
});
