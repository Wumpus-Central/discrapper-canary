n.d(t, { Z: () => B }), n(388685), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(314794),
    s = n(442837),
    l = n(570140),
    c = n(959546),
    u = n(283595),
    d = n(780570),
    f = n(55563),
    p = n(981631),
    _ = n(474936);
function m(e, t, n) {
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
let h = {},
    g = {},
    E = {},
    b = {},
    y = !1,
    O = !1,
    v = !1,
    S = new Set(),
    I = new Set(),
    T = {};
function C() {
    (h = {}), (E = {}), (b = {}), (y = !1), (O = !1), (v = !1), (S = new Set()), (I = new Set());
}
function A(e) {
    (h[e.id] = c.Z.createFromServer(e)),
        null == E[e.sku_id] && (E[e.sku_id] = new Set()),
        null == b[e.application_id] && (b[e.application_id] = new Set()),
        null != e.subscription_id &&
            (null == T[e.subscription_id] && (T[e.subscription_id] = new Set()), T[e.subscription_id].add(e.id)),
        b[e.application_id].add(e.id),
        E[e.sku_id].add(e.id);
}
function N(e) {
    g[e.id] = c.Z.createFromServer(e);
}
function P(e) {
    delete h[e.id];
    let t = b[e.application_id];
    null != t && t.delete(e.id);
    let n = E[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = T[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function R(e) {
    let { applicationId: t } = e;
    S.add(t);
}
function w(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (S.delete(t), I.add(t), n)) !0 !== e.consumed && A(e);
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
    for (let e of ((O = !0), (y = !1), (v = !n), t)) A(e);
}
function M() {
    (O = !1), (y = !1), (v = !1);
}
function k(e) {
    let { entitlements: t } = e;
    for (let e of t) A(e);
}
function U(e) {
    let { libraryApplications: t } = e;
    for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) A(t);
}
function G(e) {
    return A(e.entitlement);
}
function Z(e) {
    return P(e.entitlement);
}
class F extends (r = s.yh) {
    initialize() {
        this.syncWith([u.Z], () => !0);
    }
    get(e) {
        return h[e];
    }
    getGiftable() {
        return a().values(g);
    }
    getForApplication(e) {
        let t = b[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    getForSku(e) {
        let t = E[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return y;
    }
    get fetchedAllEntitlements() {
        return O;
    }
    get fetchedEndedEntitlements() {
        return v;
    }
    get applicationIdsFetching() {
        return S;
    }
    get applicationIdsFetched() {
        return I;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = T[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = E[t];
        if (null != i)
            for (let t of i) {
                let n = h[t];
                if (null != n && n.isValid(e, f.Z, r)) return !0;
            }
        if (I.has(n)) return !1;
        let a = null != r ? u.Z.getLibraryApplication(n, r) : u.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, d.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => I.has(e));
    }
    getReverseTrialEntitlement(e) {
        let t = new Date(),
            n = this.getForApplication(_.CL);
        if (null != n)
            for (let r of n) {
                let n = null != r.endsAt && r.endsAt < t,
                    i = null != r.startsAt;
                if (r.type === p.qc2.FRACTIONAL_REDEMPTION && r.sourceType === p.kNB.REVERSE_TRIAL && (!n || e) && i)
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
            null == (e = this.getForApplication(_.CL)) ||
                e.forEach((e) => {
                    let a = null != e.endsAt && e.endsAt < i,
                        o = e.sourceType === p.kNB.REVERSE_TRIAL && n;
                    e.type !== p.qc2.FRACTIONAL_REDEMPTION || (a && !t) || o || r.push(e);
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
            null == (e = this.getForApplication(_.CL)) ||
                e.forEach((e) => {
                    o.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
m(F, "displayName", "EntitlementStore");
let B = new F(l.Z, {
    ENTITLEMENT_FETCH_APPLICATION_START: R,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: w,
    ENTITLEMENT_FETCH_APPLICATION_FAIL: x,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: D,
    SKU_PURCHASE_SUCCESS: k,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: k,
    LIBRARY_FETCH_SUCCESS: U,
    ENTITLEMENT_CREATE: G,
    ENTITLEMENT_UPDATE: G,
    ENTITLEMENT_DELETE: Z,
    LOGOUT: C,
    ENTITLEMENTS_FETCH_FOR_USER_START: L,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: j,
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: M,
});
