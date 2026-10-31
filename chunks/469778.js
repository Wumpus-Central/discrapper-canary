(n.d(t, { A: () => v }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(447732),
    s = n(931093),
    l = n(334279),
    o = n(17928),
    d = n(73153),
    c = n(557009),
    u = n(189081),
    _ = n(674378),
    E = n(67480),
    A = n(202541);
let h = {},
    f = {},
    I = {},
    p = {},
    T = !1,
    m = !1,
    g = !1,
    S = new Set(),
    N = new Set(),
    C = {};
function O(e) {
    ((h[e.id] = c.A.createFromServer(e)),
        null == I[e.sku_id] && (I[e.sku_id] = new Set()),
        null == p[e.application_id] && (p[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == C[e.subscription_id] && (C[e.subscription_id] = new Set()), C[e.subscription_id].add(e.id)),
        p[e.application_id].add(e.id),
        I[e.sku_id].add(e.id));
}
function R(e) {
    f[e.id] = c.A.createFromServer(e);
}
function L(e) {
    let { entitlements: t } = e;
    for (let e of t) O(e);
}
function y(e) {
    return O(e.entitlement);
}
class D extends o.il {
    static displayName = "EntitlementStore";
    initialize() {
        this.syncWith([u.A], () => !0);
    }
    get(e) {
        return h[e];
    }
    getGiftable() {
        return r().values(f);
    }
    getForApplication(e) {
        let t = p[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    getForSku(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return T;
    }
    get fetchedAllEntitlements() {
        return m;
    }
    get fetchedEndedEntitlements() {
        return g;
    }
    get applicationIdsFetching() {
        return S;
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
        let t = C[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = I[t];
        if (null != r)
            for (let t of r) {
                let n = h[t];
                if (null != n && n.isValid(e, E.A, i)) return !0;
            }
        if (N.has(n)) return !1;
        let a = null != i ? u.A.getLibraryApplication(n, i) : u.A.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, _.XZ)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => N.has(e));
    }
    getFractionalPremium() {
        let { includeEnded: e = !1, excludeReverseTrial: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [],
            i = new Date();
        return (
            this.getForApplication(A.tv)?.forEach((r) => {
                let l = null != r.endsAt && r.endsAt < i,
                    o = r.sourceType === a.G.REVERSE_TRIAL && t;
                r.type !== s.z.FRACTIONAL_REDEMPTION || (l && !e) || o || n.push(r);
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
            this.getForApplication(A.tv)?.forEach((t) => {
                l.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(t.skuId) && !t.consumed && e.push(t);
            }),
            e
        );
    }
}
let v = new D(d.h, {
    ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
        let { applicationId: t } = e;
        S.add(t);
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        let { applicationId: t, entitlements: n } = e;
        for (let e of (S.delete(t), N.add(t), n)) !0 !== e.consumed && O(e);
    },
    ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let { entitlements: t } = e;
        ((f = {}), t.forEach(R));
    },
    SKU_PURCHASE_SUCCESS: L,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: L,
    LIBRARY_FETCH_SUCCESS: function (e) {
        let { libraryApplications: t } = e;
        for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) O(t);
    },
    ENTITLEMENT_CREATE: y,
    ENTITLEMENT_UPDATE: y,
    ENTITLEMENT_DELETE: function (e) {
        return (function (e) {
            delete h[e.id];
            let t = p[e.application_id];
            null != t && t.delete(e.id);
            let n = I[e.sku_id];
            if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                let t = C[e.subscription_id];
                null != t && t.delete(e.id);
            }
        })(e.entitlement);
    },
    LOGOUT: function () {
        ((h = {}), (I = {}), (p = {}), (T = !1), (m = !1), (g = !1), (S = new Set()), (N = new Set()));
    },
    ENTITLEMENTS_FETCH_FOR_USER_START: function () {
        T = !0;
    },
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
        let { entitlements: t, excludeEnded: n } = e;
        for (let e of ((m = !0), (T = !1), (g = !n), t)) O(e);
    },
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
        ((m = !1), (T = !1), (g = !1));
    },
});
