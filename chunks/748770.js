n.d(t, {
    L9: () => m,
    ZP: () => g,
    vM: () => h,
});
var r = n(544891),
    i = n(381499),
    a = n(570140),
    o = n(496929),
    s = n(706454),
    l = n(675478),
    c = n(605338),
    u = n(777261),
    d = n(164207),
    f = n(1844),
    _ = n(474936),
    p = n(981631);
async function h() {
    if (!f.Z.isFetchingActiveOutboundPromotions)
        try {
            let t;
            a.Z.dispatch({ type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH" }),
                (t = u.e.getCurrentConfig({ location: "5731cc_1" }, { autoTrackExposure: !1 }).enabled
                    ? p.ANM.PROMOTIONS
                    : d.t.getCurrentConfig({ location: "5731cc_1" }, { autoTrackExposure: !1 }).previewEnabled
                      ? p.ANM.OUTBOUND_PROMOTIONS_PREVIEW
                      : p.ANM.OUTBOUND_PROMOTIONS);
            let n = await r.tn.get({
                    url: t,
                    query: { locale: s.default.locale },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                i = f.Z.consumedInboundPromotionId;
            if (!f.Z.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = (await (0, o.yD)(_.CL, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
                i = null != (e = null == t ? void 0 : t.promotion_id) ? e : null;
            }
            a.Z.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                promotions: n.body,
                consumedInboundPromotionId: i,
            });
        } catch (e) {
            a.Z.dispatch({ type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL" });
        }
}
async function m() {
    if (!f.Z.isFetchingActiveBogoPromotion)
        try {
            a.Z.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await r.tn.get({
                    url: p.ANM.BOGO_PROMOTIONS,
                    query: { locale: s.default.locale },
                    rejectWithError: !0,
                })
            ).body;
            a.Z.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                activePromotion: c.Z.createFromServer(e),
            });
        } catch (e) {
            a.Z.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL" });
        }
}
let g = {
    fetchActiveOutboundPromotions: h,
    dismissOutboundPromotionNotice: function () {
        a.Z.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = f.Z.lastDismissedOutboundPromotionStartDate;
        null != e &&
            l.hW.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = i.Gm.create({ value: e });
                },
                l.fy.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        a.Z.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
    },
    fetchActiveBogoPromotion: m,
};
