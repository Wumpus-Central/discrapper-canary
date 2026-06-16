a.d(t, { A: () => N });
var s = a(17928),
    i = a(228366),
    n = a(777376),
    r = a(983060),
    l = a(788868);
let c = null,
    o = n.Px.NOT_FETCHED,
    d = null;
function u() {
    o === n.Px.NOT_FETCHED && (o = n.Px.FETCHED);
}
function m(e) {
    if (e.entitlement.sku_id !== r.X8) return !1;
    let t = (0, r.MM)(e.entitlement);
    (c = null == t ? null : { perk: n.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), u();
}
class A extends s.Ay.Store {
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
let N = new A(i.h, {
    CROISSANT_ACTIVATION_FETCH_START: function () {
        o = n.Px.FETCHING;
    },
    CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (o = n.Px.FETCHED), (d = Date.now());
    },
    CROISSANT_ACTIVATION_FETCH_FAILURE: function () {
        o = n.Px.FETCHED;
    },
    CROISSANT_CANCELLATION_START: function () {
        o = n.Px.CANCELLING;
    },
    CROISSANT_CANCELLATION_SUCCESS: function () {
        (c = {
            perk: c?.perk ?? n.n9.XGPP,
            state: n.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
        }),
            (o = n.Px.FETCHED),
            (d = null);
    },
    CROISSANT_CANCELLATION_FAILURE: function () {
        o = n.Px.FETCHED;
    },
    CROISSANT_ACTIVATION_RESET: function () {
        (c = null), (o = n.Px.FETCHED), (d = null);
    },
    ENTITLEMENT_CREATE: m,
    ENTITLEMENT_UPDATE: m,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== r.X8) return !1;
        (c = null), (d = null), u();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== l.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let a of e.entitlements) {
            if (a.sku_id !== r.X8) continue;
            let e = (0, r.MM)(a);
            if (e === n.gR.ACTIVATED) {
                (c = { perk: n.n9.XGPP, state: n.gR.ACTIVATED, entitlement_id: a.id, redirect: null }), u();
                return;
            }
            e === n.gR.CANCELLATION_PENDING && (t = a.id);
        }
        if (null == t) return !1;
        (c = { perk: n.n9.XGPP, state: n.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), u();
    },
    LOGOUT: function () {
        (c = null), (o = n.Px.NOT_FETCHED), (d = null);
    },
});
