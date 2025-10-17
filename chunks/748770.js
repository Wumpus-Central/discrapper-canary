n.d(t, {
    L9: () => g,
    ZP: () => E,
    vM: () => m,
});
var r = n(32662),
    i = n(544891),
    a = n(381499),
    o = n(570140),
    s = n(496929),
    l = n(706454),
    c = n(675478),
    u = n(605338),
    d = n(777261),
    f = n(164207),
    _ = n(1844),
    p = n(474936),
    h = n(981631);
async function m() {
    if (!_.Z.isFetchingActiveOutboundPromotions)
        try {
            let t;
            o.Z.dispatch({ type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH" }),
                (t = d.e.getCurrentConfig({ location: "5731cc_1" }, { autoTrackExposure: !1 }).enabled
                    ? h.ANM.PROMOTIONS
                    : f.t.getCurrentConfig({ location: "5731cc_1" }, { autoTrackExposure: !1 }).previewEnabled
                      ? h.ANM.OUTBOUND_PROMOTIONS_PREVIEW
                      : h.ANM.OUTBOUND_PROMOTIONS);
            let n = r.H.DESKTOP,
                a = await i.tn.get({
                    url: t,
                    query: {
                        locale: l.default.locale,
                        platform: n,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                c = _.Z.consumedInboundPromotionId;
            if (!_.Z.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = (await (0, s.yD)(p.CL, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
                c = null != (e = null == t ? void 0 : t.promotion_id) ? e : null;
            }
            o.Z.dispatch({
                type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                promotions: a.body,
                consumedInboundPromotionId: c,
            });
        } catch (e) {
            o.Z.dispatch({ type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL" });
        }
}
async function g() {
    if (!_.Z.isFetchingActiveBogoPromotion)
        try {
            o.Z.dispatch({ type: "ACTIVE_BOGO_PROMOTION_FETCH" });
            let e = (
                await i.tn.get({
                    url: h.ANM.BOGO_PROMOTIONS,
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
let E = {
    fetchActiveOutboundPromotions: m,
    dismissOutboundPromotionNotice: function () {
        o.Z.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
        let e = _.Z.lastDismissedOutboundPromotionStartDate;
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
    fetchActiveBogoPromotion: g,
};
