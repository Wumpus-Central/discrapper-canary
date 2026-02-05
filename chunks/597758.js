"use strict";
n.d(t, { Ay: () => g, BE: () => p, hS: () => m });
var r = n(160517),
    i = n(562465),
    a = n(406935),
    s = n(73153),
    o = n(339048),
    l = n(773669),
    u = n(594061),
    c = n(835095),
    d = n(412260),
    _ = n(788868),
    f = n(652215);
function p() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    d.A.isFetchingActivePromotions || (e && null != d.A.lastFetchedActivePromotions) || h();
}
async function h() {
    try {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let e = r.j.DESKTOP,
            t = await i.Bo.get({
                url: f.Rsh.PROMOTIONS,
                query: { locale: l.default.locale, platform: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = d.A.consumedInboundPromotionId;
        if (!d.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, o.LM)(_.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            n = e?.promotion_id ?? null;
        }
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: t.body, consumedInboundPromotionId: n });
    } catch (e) {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function m() {
    if (!d.A.isFetchingActiveBogoPromotion)
        try {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await i.Bo.get({ url: f.Rsh.BOGO_PROMOTIONS, query: { locale: l.default.locale }, rejectWithError: !0 })
            ).body;
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: c.A.createFromServer(e) });
        } catch (e) {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let g = {
    fetchActivePromotions: h,
    dismissOutboundPromotionNotice: function () {
        s.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = d.A.lastDismissedOutboundPromotionStartDate;
        null != e &&
            u.wc.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = a.hU.create({ value: e });
                },
                u.Sb.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        s.h.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: m,
};
