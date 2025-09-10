n.d(t, { r: () => f });
var r = n(951288),
    i = n(442837);
n(544891);
var a = n(481060),
    o = n(570140),
    s = n(583434);
n(960048);
var l = n(176757),
    c = n(266198);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f() {
    let { isSeptemberMarketingMomentEntitlementCreated: e, isMarketingCampaignApplicationModalViewed: t } = (0, i.cj)(
            [l.Z],
            () => ({
                isSeptemberMarketingMomentEntitlementCreated: l.Z.isSeptemberMarketingMomentEntitlementCreated,
                isMarketingCampaignApplicationModalViewed: l.Z.isMarketingCampaignApplicationModalViewed,
            }),
        ),
        { product: u } = (0, s.T)(c.Fw, { includeBundles: !0 });
    return (i) => {
        let s = (null == i ? void 0 : i.sku_id) === c.Fw;
        (e || s) &&
            !t &&
            null != u &&
            (o.Z.dispatch({
                type: "MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED",
                marketingCampaignId: c.Fw,
            }),
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e("75157").then(n.bind(n, 710658));
                return (t) => (0, r.jsx)(e, d({ product: u }, t));
            }));
    };
}
n(981631);
