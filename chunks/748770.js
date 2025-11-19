n.d(t, {
    Br: () => p,
    L9: () => h,
    ZP: () => m,
});
var r = n(32662),
    i = n(544891),
    a = n(381499),
    o = n(570140),
    s = n(496929),
    l = n(706454),
    c = n(675478),
    u = n(605338),
    d = n(1844),
    f = n(474936),
    _ = n(981631);
async function p() {
    if (!d.Z.isFetchingActivePromotions)
        try {
            o.Z.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH" });
            let t = r.H.DESKTOP,
                n = await i.tn.get({
                    url: _.ANM.PROMOTIONS,
                    query: {
                        locale: l.default.locale,
                        platform: t,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                a = d.Z.consumedInboundPromotionId;
            if (!d.Z.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = (await (0, s.yD)(f.CL, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
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
async function h() {
    if (!d.Z.isFetchingActiveBogoPromotion)
        try {
            o.Z.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await i.tn.get({
                    url: _.ANM.BOGO_PROMOTIONS,
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
let m = {
    fetchActivePromotions: p,
    dismissOutboundPromotionNotice: function () {
        o.Z.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = d.Z.lastDismissedOutboundPromotionStartDate;
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
    fetchActiveBogoPromotion: h,
};
