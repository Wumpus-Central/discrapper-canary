n.d(t, { Z: () => F }), n(47120), n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(314794),
    s = n(442837),
    l = n(570140),
    c = n(959546),
    u = n(283595),
    d = n(780570),
    f = n(55563),
    p = n(981631),
    _ = n(474936);
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
    b = !1,
    y = !1,
    O = !1,
    S = new Set(),
    I = new Set(),
    T = {};
function N() {
    (m = {}), (E = {}), (v = {}), (b = !1), (y = !1), (O = !1), (S = new Set()), (I = new Set());
}
function A(e) {
    (m[e.id] = c.Z.createFromServer(e)), null == E[e.sku_id] && (E[e.sku_id] = new Set()), null == v[e.application_id] && (v[e.application_id] = new Set()), null != e.subscription_id && (null == T[e.subscription_id] && (T[e.subscription_id] = new Set()), T[e.subscription_id].add(e.id)), v[e.application_id].add(e.id), E[e.sku_id].add(e.id);
}
function C(e) {
    g[e.id] = c.Z.createFromServer(e);
}
function R(e) {
    delete m[e.id];
    let t = v[e.application_id];
    null != t && t.delete(e.id);
    let n = E[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = T[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function P(e) {
    let { applicationId: t } = e;
    S.add(t);
}
function w(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (S.delete(t), I.add(t), n)) !0 !== e.consumed && A(e);
}
function D(e) {
    let { entitlements: t } = e;
    (g = {}), t.forEach(C);
}
function x() {}
function L() {
    b = !0;
}
function M(e) {
    let { entitlements: t, excludeEnded: n } = e;
    for (let e of ((y = !0), (b = !1), (O = !n), t)) A(e);
}
function k() {
    (y = !1), (b = !1), (O = !1);
}
function j(e) {
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
function B(e) {
    return R(e.entitlement);
}
class Z extends (r = s.yh) {
    initialize() {
        this.syncWith([u.Z], () => !0);
    }
    get(e) {
        return m[e];
    }
    getGiftable() {
        return o().values(g);
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
        return b;
    }
    get fetchedAllEntitlements() {
        return y;
    }
    get fetchedEndedEntitlements() {
        return O;
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
        for (let e of t) n.add(m[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = E[t];
        if (null != i)
            for (let t of i) {
                let n = m[t];
                if (null != n && n.isValid(e, f.Z, r)) return !0;
            }
        if (I.has(n)) return !1;
        let o = null != r ? u.Z.getLibraryApplication(n, r) : u.Z.getActiveLibraryApplication(n);
        return !!(null != o && o.sku.id === t && (0, d.Je)(o)) || null;
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
                if (r.type === p.qc2.FRACTIONAL_REDEMPTION && r.sourceType === p.kNB.REVERSE_TRIAL && (!n || e) && i) return r;
            }
        return null;
    }
    getFractionalPremium(e) {
        var t;
        let n = [],
            r = new Date();
        return (
            null === (t = this.getForApplication(_.CL)) ||
                void 0 === t ||
                t.forEach((t) => {
                    let i = null != t.endsAt && t.endsAt < r;
                    t.type === p.qc2.FRACTIONAL_REDEMPTION && (!i || e) && n.push(t);
                }),
            n
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null === (e = this.getForApplication(_.CL)) ||
                void 0 === e ||
                e.forEach((e) => {
                    a.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
h(Z, 'displayName', 'EntitlementStore');
let F = new Z(l.Z, {
    ENTITLEMENT_FETCH_APPLICATION_START: P,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: w,
    ENTITLEMENT_FETCH_APPLICATION_FAIL: x,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: D,
    SKU_PURCHASE_SUCCESS: j,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: j,
    LIBRARY_FETCH_SUCCESS: U,
    ENTITLEMENT_CREATE: G,
    ENTITLEMENT_UPDATE: G,
    ENTITLEMENT_DELETE: B,
    LOGOUT: N,
    ENTITLEMENTS_FETCH_FOR_USER_START: L,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: k
});
