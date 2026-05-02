i.d(t, { A: () => p });
var s = i(17928),
    a = i(228366),
    n = i(777376),
    r = i(983060),
    l = i(788868);
let c = null,
    d = n.Px.NOT_FETCHED,
    o = null;
function u() {
    d === n.Px.NOT_FETCHED && (d = n.Px.FETCHED);
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
        return d;
    }
    getLastFetchTime() {
        return o;
    }
}
let p = new A(a.h, {
    CROISSANT_ACTIVATION_FETCH_START: function () {
        d = n.Px.FETCHING;
    },
    CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (d = n.Px.FETCHED), (o = Date.now());
    },
    CROISSANT_ACTIVATION_FETCH_FAILURE: function () {
        d = n.Px.FETCHED;
    },
    CROISSANT_CANCELLATION_START: function () {
        d = n.Px.CANCELLING;
    },
    CROISSANT_CANCELLATION_SUCCESS: function () {
        (c = {
            perk: c?.perk ?? n.n9.XGPP,
            state: n.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
        }),
            (d = n.Px.FETCHED),
            (o = null);
    },
    CROISSANT_CANCELLATION_FAILURE: function () {
        d = n.Px.FETCHED;
    },
    CROISSANT_ACTIVATION_RESET: function () {
        (c = null), (d = n.Px.FETCHED), (o = null);
    },
    ENTITLEMENT_CREATE: m,
    ENTITLEMENT_UPDATE: m,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== r.X8) return !1;
        (c = null), (o = null), u();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== l.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let i of e.entitlements) {
            if (i.sku_id !== r.X8) continue;
            let e = (0, r.MM)(i);
            if (e === n.gR.ACTIVATED) {
                (c = { perk: n.n9.XGPP, state: n.gR.ACTIVATED, entitlement_id: i.id, redirect: null }), u();
                return;
            }
            e === n.gR.CANCELLATION_PENDING && (t = i.id);
        }
        if (null == t) return !1;
        (c = { perk: n.n9.XGPP, state: n.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), u();
    },
    LOGOUT: function () {
        (c = null), (d = n.Px.NOT_FETCHED), (o = null);
    },
});
