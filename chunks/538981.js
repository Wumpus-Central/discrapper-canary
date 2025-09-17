n.d(t, {
    f: () => y,
    r: () => O,
});
var r = n(951288),
    i = n(442837),
    a = n(544891),
    o = n(481060),
    s = n(570140),
    l = n(583434),
    c = n(626135),
    u = n(74538),
    d = n(960048),
    f = n(176757),
    _ = n(266198),
    p = n(219333),
    h = n(304426),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = 3,
    y = async (e) => {
        let { campaignId: t } = e;
        try {
            s.Z.dispatch({ type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_STARTED" });
            let e = await a.tn.get({
                url: m.ANM.MARKETING_CAMPAIGN_ELIGIBILITY(t),
                rejectWithError: !1,
                retries: b,
            });
            return (
                s.Z.dispatch({
                    type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_SUCCESS",
                    isEligible: e.body.eligibility,
                }),
                e.body.eligibility
            );
        } catch (e) {
            s.Z.dispatch({ type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED" }), d.Z.captureException(e);
        }
    };
function O() {
    let { isSeptemberMarketingMomentEntitlementCreated: e, isMarketingCampaignApplicationModalViewed: t } = (0, i.cj)(
            [f.Z],
            () => ({
                isSeptemberMarketingMomentEntitlementCreated: f.Z.isSeptemberMarketingMomentEntitlementCreated,
                isMarketingCampaignApplicationModalViewed: f.Z.isMarketingCampaignApplicationModalViewed,
            }),
        ),
        { product: a } = (0, l.T)(_.Fw, !0),
        d = (0, u.EK)();
    return (i) => {
        let l = (0, p.W)({ campaignID: h.m.NITRO_DROP }),
            u = (null == i ? void 0 : i.sku_id) === _.Fw || e;
        d &&
            c.default.track(m.rMx.PREMIUM_MARKETING_CAMPAIGN_CLAIM_MODAL_OPEN_ATTEMPTED, {
                has_entitlement: u,
                is_dc_dismissed: l,
                product_loaded_successfully: null != a,
            }),
            u &&
                !t &&
                null != a &&
                (s.Z.dispatch({
                    type: "MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED",
                    marketingCampaignId: _.Fw,
                }),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("75157").then(n.bind(n, 710658));
                    return (t) => (0, r.jsx)(e, E({ product: a }, t));
                }));
    };
}
