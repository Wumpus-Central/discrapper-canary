n.d(t, {
    L9: () => h,
    ZP: () => m,
    vM: () => p
});
var r = n(544891),
    i = n(381499),
    o = n(570140),
    a = n(496929),
    s = n(706454),
    l = n(675478),
    c = n(164207),
    u = n(518638),
    d = n(1844),
    f = n(474936),
    _ = n(981631);
async function p() {
    if (!d.Z.isFetchingActiveOutboundPromotions)
        try {
            o.Z.dispatch({ type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH' });
            let t = c.t.getCurrentConfig({ location: '5731cc_1' }, { autoTrackExposure: !1 }).previewEnabled ? _.ANM.OUTBOUND_PROMOTIONS_PREVIEW : _.ANM.OUTBOUND_PROMOTIONS,
                n = (
                    await r.tn.get({
                        url: t,
                        query: { locale: s.default.locale },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body,
                i = d.Z.consumedInboundPromotionId;
            if (!d.Z.hasFetchedConsumedInboundPromotionId) {
                var e;
                let t = (await (0, a.yD)(f.CL, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
                i = null != (e = null == t ? void 0 : t.promotion_id) ? e : null;
            }
            o.Z.dispatch({
                type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS',
                activeOutboundPromotions: n.map((e) => (0, u.X_)(e)),
                consumedInboundPromotionId: i
            });
        } catch (e) {
            o.Z.dispatch({ type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL' });
        }
}
async function h() {
    if (!d.Z.isFetchingActiveBogoPromotion)
        try {
            o.Z.dispatch({ type: 'ACTIVE_BOGO_PROMOTION_FETCH' });
            let e = (
                await r.tn.get({
                    url: _.ANM.BOGO_PROMOTIONS,
                    query: { locale: s.default.locale },
                    rejectWithError: !0
                })
            ).body;
            o.Z.dispatch({
                type: 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS',
                activePromotion: (0, u.kr)(e)
            });
        } catch (e) {
            o.Z.dispatch({ type: 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL' });
        }
}
let m = {
    fetchActiveOutboundPromotions: p,
    dismissOutboundPromotionNotice: function () {
        o.Z.dispatch({ type: 'OUTBOUND_PROMOTION_NOTICE_DISMISS' });
        let e = d.Z.lastDismissedOutboundPromotionStartDate;
        null != e &&
            l.hW.updateAsync(
                'userContent',
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = i.Gm.create({ value: e });
                },
                l.fy.INFREQUENT_USER_ACTION
            );
    },
    markOutboundPromotionsSeen() {
        o.Z.dispatch({ type: 'OUTBOUND_PROMOTIONS_SEEN' });
    },
    fetchActiveBogoPromotion: h
};
