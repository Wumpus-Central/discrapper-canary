n.d(t, { Ay: () => S, BE: () => I, hS: () => T });
var i = n(160517),
    r = n(636537),
    a = n(406935),
    s = n(228366),
    _ = n(339048),
    l = n(773669),
    o = n(594061),
    E = n(835095),
    d = n(374200),
    c = n(788868),
    u = n(652215);
function I() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    d.A.isFetchingActivePromotions || (e && null != d.A.lastFetchedActivePromotions) || A();
}
async function A() {
    try {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let e = i.j.DESKTOP,
            t = await r.Bo.get({
                url: u.Rsh.PROMOTIONS,
                query: { locale: l.default.locale, platform: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = d.A.consumedInboundPromotionId;
        if (!d.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, _.LM)(c.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            n = e?.promotion_id ?? null;
        }
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: t.body, consumedInboundPromotionId: n });
    } catch (e) {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function T() {
    if (!d.A.isFetchingActiveBogoPromotion)
        try {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await r.Bo.get({ url: u.Rsh.BOGO_PROMOTIONS, query: { locale: l.default.locale }, rejectWithError: !0 })
            ).body;
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: E.A.createFromServer(e) });
        } catch (e) {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let S = {
    fetchActivePromotions: A,
    dismissOutboundPromotionNotice: function () {
        s.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = d.A.lastDismissedOutboundPromotionStartDate;
        null != e &&
            o.wc.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = a.hU.create({ value: e });
                },
                o.Sb.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        s.h.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: T,
};
