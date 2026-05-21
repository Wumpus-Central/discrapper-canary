n.d(t, { A: () => _ });
var i = n(17928),
    l = n(228366),
    r = n(777376),
    s = n(983060),
    a = n(788868);
let c = null,
    o = r.Px.NOT_FETCHED,
    d = null;
function u() {
    o === r.Px.NOT_FETCHED && (o = r.Px.FETCHED);
}
function E(e) {
    if (e.entitlement.sku_id !== s.X8) return !1;
    let t = (0, s.MM)(e.entitlement);
    (c = null == t ? null : { perk: r.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), u();
}
class A extends i.Ay.Store {
    static displayName = "CroissantActivationStore";
    getActivationStatus() {
        return c;
    }
    getRequestState() {
        return o;
    }
    getLastFetchTime() {
        return d;
    }
}
let _ = new A(l.h, {
    CROISSANT_ACTIVATION_FETCH_START: function () {
        o = r.Px.FETCHING;
    },
    CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (o = r.Px.FETCHED), (d = Date.now());
    },
    CROISSANT_ACTIVATION_FETCH_FAILURE: function () {
        o = r.Px.FETCHED;
    },
    CROISSANT_CANCELLATION_START: function () {
        o = r.Px.CANCELLING;
    },
    CROISSANT_CANCELLATION_SUCCESS: function () {
        (c = {
            perk: c?.perk ?? r.n9.XGPP,
            state: r.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
        }),
            (o = r.Px.FETCHED),
            (d = null);
    },
    CROISSANT_CANCELLATION_FAILURE: function () {
        o = r.Px.FETCHED;
    },
    CROISSANT_ACTIVATION_RESET: function () {
        (c = null), (o = r.Px.FETCHED), (d = null);
    },
    ENTITLEMENT_CREATE: E,
    ENTITLEMENT_UPDATE: E,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== s.X8) return !1;
        (c = null), (d = null), u();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== a.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let n of e.entitlements) {
            if (n.sku_id !== s.X8) continue;
            let e = (0, s.MM)(n);
            if (e === r.gR.ACTIVATED) {
                (c = { perk: r.n9.XGPP, state: r.gR.ACTIVATED, entitlement_id: n.id, redirect: null }), u();
                return;
            }
            e === r.gR.CANCELLATION_PENDING && (t = n.id);
        }
        if (null == t) return !1;
        (c = { perk: r.n9.XGPP, state: r.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), u();
    },
    LOGOUT: function () {
        (c = null), (o = r.Px.NOT_FETCHED), (d = null);
    },
});
