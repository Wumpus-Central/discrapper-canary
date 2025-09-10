n.d(t, { Z: () => f });
var r = n(442837),
    i = n(570140),
    a = n(266198);
let o = !1,
    s = !1;
function l() {
    (o = !1), (s = !1);
}
function c(e) {
    e.entitlement.sku_id === a.Fw && (o = !0);
}
function u(e) {
    e.marketingCampaignId === a.Fw && (s = !0);
}
class d extends r.ZP.Store {
    get isSeptemberMarketingMomentEntitlementCreated() {
        return o;
    }
    get isMarketingCampaignApplicationModalViewed() {
        return s;
    }
}
let f = new d(i.Z, {
    ENTITLEMENT_CREATE: c,
    ENTITLEMENT_UPDATE: c,
    MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED: u,
    LOGOUT: l,
});
