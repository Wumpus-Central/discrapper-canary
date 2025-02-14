n.d(t, { Z: () => V }), n(47120), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(314794),
    o = n(442837),
    l = n(570140),
    u = n(959546),
    c = n(283595),
    d = n(780570),
    f = n(55563),
    _ = n(981631),
    p = n(474936);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = {},
    g = {},
    E = {},
    v = {},
    y = !1,
    I = !1,
    T = !1,
    b = new Set(),
    S = new Set(),
    A = {};
function N() {
    (m = {}), (E = {}), (v = {}), (y = !1), (I = !1), (T = !1), (b = new Set()), (S = new Set());
}
function C(e) {
    (m[e.id] = u.Z.createFromServer(e)), null == E[e.sku_id] && (E[e.sku_id] = new Set()), null == v[e.application_id] && (v[e.application_id] = new Set()), null != e.subscription_id && (null == A[e.subscription_id] && (A[e.subscription_id] = new Set()), A[e.subscription_id].add(e.id)), v[e.application_id].add(e.id), E[e.sku_id].add(e.id);
}
function R(e) {
    g[e.id] = u.Z.createFromServer(e);
}
function O(e) {
    delete m[e.id];
    let t = v[e.application_id];
    null != t && t.delete(e.id);
    let n = E[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = A[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function D(e) {
    let { applicationId: t } = e;
    b.add(t);
}
function L(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (b.delete(t), S.add(t), n)) !0 !== e.consumed && C(e);
}
function x(e) {
    let { entitlements: t } = e;
    (g = {}), t.forEach(R);
}
function P() {}
function w() {
    y = !0;
}
function M(e) {
    let { entitlements: t, excludeEnded: n } = e;
    for (let e of ((I = !0), (y = !1), (T = !n), t)) C(e);
}
function k() {
    (I = !1), (y = !1), (T = !1);
}
function U(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function G(e) {
    let { libraryApplications: t } = e;
    for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
}
function B(e) {
    return C(e.entitlement);
}
function Z(e) {
    return O(e.entitlement);
}
class F extends (i = o.yh) {
    initialize() {
        this.syncWith([c.Z], () => !0);
    }
    get(e) {
        return m[e];
    }
    getGiftable() {
        return a().values(g);
    }
    getForApplication(e) {
        let t = v[e];
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
        return I;
    }
    get fetchedEndedEntitlements() {
        return T;
    }
    get applicationIdsFetching() {
        return b;
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
        let t = A[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(m[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = E[t];
        if (null != r)
            for (let t of r) {
                let n = m[t];
                if (null != n && n.isValid(e, f.Z, i)) return !0;
            }
        if (S.has(n)) return !1;
        let a = null != i ? c.Z.getLibraryApplication(n, i) : c.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, d.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => S.has(e));
    }
    getReverseTrialEntitlement(e) {
        let t = new Date(),
            n = this.getForApplication(p.CL);
        if (null != n)
            for (let i of n) {
                let n = null != i.endsAt && i.endsAt < t,
                    r = null != i.startsAt;
                if (i.type === _.qc2.FRACTIONAL_REDEMPTION && i.sourceType === _.kNB.REVERSE_TRIAL && (!n || e) && r) return i;
            }
        return null;
    }
    getFractionalPremium(e) {
        var t;
        let n = [],
            i = new Date();
        return (
            null === (t = this.getForApplication(p.CL)) ||
                void 0 === t ||
                t.forEach((t) => {
                    let r = null != t.endsAt && t.endsAt < i;
                    t.type === _.qc2.FRACTIONAL_REDEMPTION && (!r || e) && n.push(t);
                }),
            n
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null === (e = this.getForApplication(p.CL)) ||
                void 0 === e ||
                e.forEach((e) => {
                    s.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
h(F, 'displayName', 'EntitlementStore');
let V = new F(l.Z, {
    ENTITLEMENT_FETCH_APPLICATION_START: D,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: L,
    ENTITLEMENT_FETCH_APPLICATION_FAIL: P,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: x,
    SKU_PURCHASE_SUCCESS: U,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: U,
    LIBRARY_FETCH_SUCCESS: G,
    ENTITLEMENT_CREATE: B,
    ENTITLEMENT_UPDATE: B,
    ENTITLEMENT_DELETE: Z,
    LOGOUT: N,
    ENTITLEMENTS_FETCH_FOR_USER_START: w,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: k
});
