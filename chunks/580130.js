n.d(t, { Z: () => V }), n(47120), n(653041);
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
    b = {},
    y = !1,
    v = !1,
    O = !1,
    I = new Set(),
    S = new Set(),
    T = {};
function N() {
    (m = {}), (E = {}), (b = {}), (y = !1), (v = !1), (O = !1), (I = new Set()), (S = new Set());
}
function A(e) {
    (m[e.id] = c.Z.createFromServer(e)), null == E[e.sku_id] && (E[e.sku_id] = new Set()), null == b[e.application_id] && (b[e.application_id] = new Set()), null != e.subscription_id && (null == T[e.subscription_id] && (T[e.subscription_id] = new Set()), T[e.subscription_id].add(e.id)), b[e.application_id].add(e.id), E[e.sku_id].add(e.id);
}
function C(e) {
    g[e.id] = c.Z.createFromServer(e);
}
function R(e) {
    delete m[e.id];
    let t = b[e.application_id];
    null != t && t.delete(e.id);
    let n = E[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = T[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function P(e) {
    let { applicationId: t } = e;
    I.add(t);
}
function w(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (I.delete(t), S.add(t), n)) !0 !== e.consumed && A(e);
}
function D(e) {
    let { entitlements: t } = e;
    (g = {}), t.forEach(C);
}
function L() {}
function x() {
    y = !0;
}
function M(e) {
    let { entitlements: t, excludeEnded: n } = e;
    for (let e of ((v = !0), (y = !1), (O = !n), t)) A(e);
}
function k() {
    (v = !1), (y = !1), (O = !1);
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
class F extends (r = s.yh) {
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
        return v;
    }
    get fetchedEndedEntitlements() {
        return O;
    }
    get applicationIdsFetching() {
        return I;
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
        if (S.has(n)) return !1;
        let o = null != r ? u.Z.getLibraryApplication(n, r) : u.Z.getActiveLibraryApplication(n);
        return !!(null != o && o.sku.id === t && (0, d.Je)(o)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => S.has(e));
    }
    getReverseTrialEntitlement(e) {
        let t = new Date(),
            n = this.getForApplication(p.CL);
        if (null != n)
            for (let r of n) {
                let n = null != r.endsAt && r.endsAt < t,
                    i = null != r.startsAt;
                if (r.type === _.qc2.FRACTIONAL_REDEMPTION && r.sourceType === _.kNB.REVERSE_TRIAL && (!n || e) && i) return r;
            }
        return null;
    }
    getFractionalPremium(e) {
        var t;
        let n = [],
            r = new Date();
        return (
            null == (t = this.getForApplication(p.CL)) ||
                t.forEach((t) => {
                    let i = null != t.endsAt && t.endsAt < r;
                    t.type === _.qc2.FRACTIONAL_REDEMPTION && (!i || e) && n.push(t);
                }),
            n
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null == (e = this.getForApplication(p.CL)) ||
                e.forEach((e) => {
                    a.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
h(F, 'displayName', 'EntitlementStore');
let V = new F(l.Z, {
    ENTITLEMENT_FETCH_APPLICATION_START: P,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: w,
    ENTITLEMENT_FETCH_APPLICATION_FAIL: L,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: D,
    SKU_PURCHASE_SUCCESS: j,
    VIRTUAL_CURRENCY_REDEEM_SUCCESS: j,
    LIBRARY_FETCH_SUCCESS: U,
    ENTITLEMENT_CREATE: G,
    ENTITLEMENT_UPDATE: G,
    ENTITLEMENT_DELETE: B,
    LOGOUT: N,
    ENTITLEMENTS_FETCH_FOR_USER_START: x,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: k
});
