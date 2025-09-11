n.d(t, {
    f: () => m,
    r: () => g,
});
var r = n(951288),
    i = n(442837),
    a = n(544891),
    o = n(481060),
    s = n(570140),
    l = n(583434),
    c = n(960048),
    u = n(176757),
    d = n(266198),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = 3,
    m = async (e) => {
        let { campaignId: t } = e;
        try {
            let e = await a.tn.get({
                url: f.ANM.MARKETING_CAMPAIGN_ELIGIBILITY(t),
                rejectWithError: !1,
                retries: h,
            });
            return (
                s.Z.dispatch({
                    type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCHED",
                    isEligible: e.body.eligibility,
                }),
                e.body.eligibility
            );
        } catch (e) {
            s.Z.dispatch({ type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED" }), c.Z.captureException(e);
        }
    };
function g() {
    let { isSeptemberMarketingMomentEntitlementCreated: e, isMarketingCampaignApplicationModalViewed: t } = (0, i.cj)(
            [u.Z],
            () => ({
                isSeptemberMarketingMomentEntitlementCreated: u.Z.isSeptemberMarketingMomentEntitlementCreated,
                isMarketingCampaignApplicationModalViewed: u.Z.isMarketingCampaignApplicationModalViewed,
            }),
        ),
        { product: a } = (0, l.T)(d.Fw, !0);
    return (i) => {
        let l = (null == i ? void 0 : i.sku_id) === d.Fw;
        (e || l) &&
            !t &&
            null != a &&
            (s.Z.dispatch({
                type: "MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED",
                marketingCampaignId: d.Fw,
            }),
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("75157").then(n.bind(n, 710658));
                return (t) => (0, r.jsx)(e, p({ product: a }, t));
            }));
    };
}
