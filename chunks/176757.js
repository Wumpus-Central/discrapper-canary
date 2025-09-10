n.d(t, { Z: () => p });
var r = n(442837),
    i = n(570140),
    a = n(266198),
    o = n(219333),
    s = n(304426);
let l = !1,
    c = !1;
function u() {
    (l = !1), (c = !1);
}
function d(e) {
    e.entitlement.sku_id === a.Fw && ((0, o.j)({ campaignID: s.C }), (l = !0));
}
function f(e) {
    e.marketingCampaignId === a.Fw && (c = !0);
}
class _ extends r.ZP.Store {
    get isSeptemberMarketingMomentEntitlementCreated() {
        return l;
    }
    get isMarketingCampaignApplicationModalViewed() {
        return c;
    }
}
let p = new _(i.Z, {
    ENTITLEMENT_CREATE: d,
    ENTITLEMENT_UPDATE: d,
    MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED: f,
    LOGOUT: u,
});
