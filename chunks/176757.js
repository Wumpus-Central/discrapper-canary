n.d(t, { Z: () => m });
var r = n(442837),
    i = n(570140),
    a = n(626135),
    o = n(266198),
    s = n(219333),
    l = n(304426),
    c = n(981631);
let u = !1,
    d = !1;
function f() {
    (u = !1), (d = !1);
}
function _(e) {
    e.entitlement.sku_id === o.Fw &&
        ((0, s.j)({ campaignID: l.C }),
        (u = !0),
        a.default.track(c.rMx.PREMIUM_MARKETING_CAMPAIGN_ENTITLEMENT_CREATED_INGESTED, {
            type: e.type,
            entitlement_sku_id: e.entitlement.sku_id,
        }));
}
function p(e) {
    e.marketingCampaignId === o.Fw && (d = !0);
}
class h extends r.ZP.Store {
    get isSeptemberMarketingMomentEntitlementCreated() {
        return u;
    }
    get isMarketingCampaignApplicationModalViewed() {
        return d;
    }
}
let m = new h(i.Z, {
    ENTITLEMENT_CREATE: _,
    ENTITLEMENT_UPDATE: _,
    MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED: p,
    LOGOUT: f,
});
