"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(777376),
    a = n(983060),
    o = n(788868);
let l = null,
    u = s.Px.NOT_FETCHED,
    c = null;
function d() {
    u === s.Px.NOT_FETCHED && (u = s.Px.FETCHED);
}
function _(e) {
    if (e.entitlement.sku_id !== a.X8) return !1;
    let t = (0, a.MM)(e.entitlement);
    (l = null == t ? null : { perk: s.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), d();
}
class f extends i.Ay.Store {
    static displayName = "CroissantActivationStore";
    getActivationStatus() {
        return l;
    }
    getRequestState() {
        return u;
    }
    getLastFetchTime() {
        return c;
    }
}
let h = new f(r.h, {
    CROISSANT_ACTIVATION_FETCH_START: function () {
        u = s.Px.FETCHING;
    },
    CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (l = t), (u = s.Px.FETCHED), (c = Date.now());
    },
    CROISSANT_ACTIVATION_FETCH_FAILURE: function () {
        u = s.Px.FETCHED;
    },
    CROISSANT_CANCELLATION_START: function () {
        u = s.Px.CANCELLING;
    },
    CROISSANT_CANCELLATION_SUCCESS: function () {
        (l = {
            perk: l?.perk ?? s.n9.XGPP,
            state: s.gR.CANCELLATION_PENDING,
            entitlement_id: l?.entitlement_id ?? null,
            redirect: null,
        }),
            (u = s.Px.FETCHED),
            (c = null);
    },
    CROISSANT_CANCELLATION_FAILURE: function () {
        u = s.Px.FETCHED;
    },
    CROISSANT_ACTIVATION_RESET: function () {
        (l = null), (u = s.Px.FETCHED), (c = null);
    },
    ENTITLEMENT_CREATE: _,
    ENTITLEMENT_UPDATE: _,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== a.X8) return !1;
        (l = null), (c = null), d();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== o.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let n of e.entitlements) {
            if (n.sku_id !== a.X8) continue;
            let e = (0, a.MM)(n);
            if (e === s.gR.ACTIVATED) {
                (l = { perk: s.n9.XGPP, state: s.gR.ACTIVATED, entitlement_id: n.id, redirect: null }), d();
                return;
            }
            e === s.gR.CANCELLATION_PENDING && (t = n.id);
        }
        if (null == t) return !1;
        (l = { perk: s.n9.XGPP, state: s.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), d();
    },
    LOGOUT: function () {
        (l = null), (u = s.Px.NOT_FETCHED), (c = null);
    },
});
