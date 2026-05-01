n.d(t, { Ay: () => h, BE: () => A, hS: () => T });
var i = n(160517),
    a = n(636537),
    r = n(406935),
    s = n(228366),
    l = n(339048),
    o = n(773669),
    d = n(594061),
    c = n(835095),
    _ = n(374200),
    E = n(788868),
    u = n(652215);
function A() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    _.A.isFetchingActivePromotions || (e && null != _.A.lastFetchedActivePromotions) || I();
}
async function I() {
    try {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let e = i.j.DESKTOP,
            t = await a.Bo.get({
                url: u.Rsh.PROMOTIONS,
                query: { locale: o.default.locale, platform: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = _.A.consumedInboundPromotionId;
        if (!_.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, l.LM)(E.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            n = e?.promotion_id ?? null;
        }
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: t.body, consumedInboundPromotionId: n });
    } catch (e) {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function T() {
    if (!_.A.isFetchingActiveBogoPromotion)
        try {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await a.Bo.get({ url: u.Rsh.BOGO_PROMOTIONS, query: { locale: o.default.locale }, rejectWithError: !0 })
            ).body;
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: c.A.createFromServer(e) });
        } catch (e) {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let h = {
    fetchActivePromotions: I,
    dismissOutboundPromotionNotice: function () {
        s.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = _.A.lastDismissedOutboundPromotionStartDate;
        null != e &&
            d.wc.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = r.hU.create({ value: e });
                },
                d.Sb.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        s.h.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: T,
};
