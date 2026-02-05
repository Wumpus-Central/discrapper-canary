"use strict";
n.d(t, { Ay: () => T, BE: () => E, hS: () => I });
var r = n(160517),
    i = n(562465),
    a = n(406935),
    s = n(73153),
    o = n(339048),
    l = n(773669),
    u = n(594061),
    c = n(835095),
    d = n(287809),
    _ = n(927578),
    f = n(728364),
    p = n(91435),
    h = n(412260),
    m = n(788868),
    g = n(652215);
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.default.getCurrentUser(),
        n = _.Ay.isPremiumExactly(t, m.PremiumTypes.TIER_2),
        r = (0, p.r)({ location: "maybeFetchActivePromotions" }),
        i = f.m.getCurrentConfig(
            { location: "maybeFetchActivePromotions" },
            { autoTrackExposure: !1, disable: n },
        ).enabled;
    (r || n || i) && !h.A.isFetchingActivePromotions && ((e && null != h.A.lastFetchedActivePromotions) || A());
}
async function A() {
    try {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let e = r.j.DESKTOP,
            t = await i.Bo.get({
                url: g.Rsh.PROMOTIONS,
                query: { locale: l.default.locale, platform: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            n = h.A.consumedInboundPromotionId;
        if (!h.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, o.LM)(m.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            n = e?.promotion_id ?? null;
        }
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: t.body, consumedInboundPromotionId: n });
    } catch (e) {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function I() {
    if (!h.A.isFetchingActiveBogoPromotion)
        try {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await i.Bo.get({ url: g.Rsh.BOGO_PROMOTIONS, query: { locale: l.default.locale }, rejectWithError: !0 })
            ).body;
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS", activePromotion: c.A.createFromServer(e) });
        } catch (e) {
            s.h.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let T = {
    fetchActivePromotions: A,
    dismissOutboundPromotionNotice: function () {
        s.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = h.A.lastDismissedOutboundPromotionStartDate;
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
    fetchActiveBogoPromotion: I,
};
