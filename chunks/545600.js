i.d(t, { A: () => A });
var a = i(17928),
    s = i(228366),
    n = i(777376),
    r = i(983060),
    l = i(788868);
let c = null,
    d = n.Px.NOT_FETCHED;
function o() {
    d === n.Px.NOT_FETCHED && (d = n.Px.FETCHED);
}
function u(e) {
    if (e.entitlement.sku_id !== r.X8) return !1;
    let t = (0, r.MM)(e.entitlement);
    (c = null == t ? null : { perk: n.n9.XGPP, state: t, entitlement_id: e.entitlement.id, redirect: null }), o();
}
class m extends a.Ay.Store {
    static displayName = "CroissantActivationStore";
    getActivationStatus() {
        return c;
    }
    getRequestState() {
        return d;
    }
}
let A = new m(s.h, {
    CROISSANT_ACTIVATION_FETCH_START: function () {
        d = n.Px.FETCHING;
    },
    CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (c = t), (d = n.Px.FETCHED);
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
            (d = n.Px.FETCHED);
    },
    CROISSANT_CANCELLATION_FAILURE: function () {
        d = n.Px.FETCHED;
    },
    CROISSANT_ACTIVATION_RESET: function () {
        (c = null), (d = n.Px.FETCHED);
    },
    ENTITLEMENT_CREATE: u,
    ENTITLEMENT_UPDATE: u,
    ENTITLEMENT_DELETE: function (e) {
        if (e.entitlement.sku_id !== r.X8) return !1;
        (c = null), o();
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        if (e.applicationId !== l.tv || 0 === e.entitlements.length) return !1;
        let t = null;
        for (let i of e.entitlements) {
            if (i.sku_id !== r.X8) continue;
            let e = (0, r.MM)(i);
            if (e === n.gR.ACTIVATED) {
                (c = { perk: n.n9.XGPP, state: n.gR.ACTIVATED, entitlement_id: i.id, redirect: null }), o();
                return;
            }
            e === n.gR.CANCELLATION_PENDING && (t = i.id);
        }
        if (null == t) return !1;
        (c = { perk: n.n9.XGPP, state: n.gR.CANCELLATION_PENDING, entitlement_id: t, redirect: null }), o();
    },
    LOGOUT: function () {
        (c = null), (d = n.Px.NOT_FETCHED);
    },
});
