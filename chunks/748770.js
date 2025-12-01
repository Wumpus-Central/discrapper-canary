n.d(t, {
    L9: () => y,
    Pu: () => E,
    ZP: () => O,
});
var r = n(32662),
    i = n(544891),
    a = n(381499),
    o = n(570140),
    s = n(496929),
    l = n(706454),
    c = n(675478),
    u = n(605338),
    d = n(594174),
    f = n(74538),
    p = n(163684),
    _ = n(312973),
    m = n(1844),
    h = n(474936),
    g = n(981631);
function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.default.getCurrentUser(),
        n = f.ZP.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        r = (0, _.$)({ location: "maybeFetchActivePromotions" }),
        i = p.g.getCurrentConfig(
            { location: "maybeFetchActivePromotions" },
            {
                autoTrackExposure: !1,
                disable: n,
            },
        ).enabled;
    (r || n || i) && !m.Z.isFetchingActivePromotions && ((e && null != m.Z.lastFetchedActivePromotions) || b());
}
async function b() {
    try {
        o.Z.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
        let t = r.H.DESKTOP,
            n = await i.tn.get({
                url: g.ANM.PROMOTIONS,
                query: {
                    locale: l.default.locale,
                    platform: t,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            a = m.Z.consumedInboundPromotionId;
        if (!m.Z.hasFetchedConsumedInboundPromotionId) {
            var e;
            let t = (await (0, s.yD)(h.CL, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            a = null != (e = null == t ? void 0 : t.promotion_id) ? e : null;
        }
        o.Z.dispatch({
            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
            promotions: n.body,
            consumedInboundPromotionId: a,
        });
    } catch (e) {
        o.Z.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
async function y() {
    if (!m.Z.isFetchingActiveBogoPromotion)
        try {
            o.Z.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await i.tn.get({
                    url: g.ANM.BOGO_PROMOTIONS,
                    query: { locale: l.default.locale },
                    rejectWithError: !0,
                })
            ).body;
            o.Z.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                activePromotion: u.Z.createFromServer(e),
            });
        } catch (e) {
            o.Z.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let O = {
    fetchActivePromotions: b,
    dismissOutboundPromotionNotice: function () {
        o.Z.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = m.Z.lastDismissedOutboundPromotionStartDate;
        null != e &&
            c.hW.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = a.Gm.create({ value: e });
                },
                c.fy.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        o.Z.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: y,
};
