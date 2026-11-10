var i = n(160517),
    r = n(620632),
    a = n(406935),
    s = n(73153),
    l = n(339048),
    o = n(773669),
    d = n(594061),
    c = n(287809),
    u = n(264779),
    _ = n(412260),
    E = n(682901),
    A = n(652215);
async function f() {
    try {
        let e = o.default.locale;
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH", locale: e });
        let t = i.j.DESKTOP,
            n = await r.Bo.get({
                url: A.Rsh.PROMOTIONS,
                query: { locale: e, platform: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            a = _.A.consumedInboundPromotionId;
        if (!_.A.hasFetchedConsumedInboundPromotionId) {
            let e = (await (0, l.LM)(E.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            a = e?.promotion_id ?? null;
        }
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS", promotions: n.body, consumedInboundPromotionId: a });
    } catch (e) {
        s.h.dispatch({ type: "ACTIVE_PROMOTIONS_FETCH_FAIL" });
    }
}
function h(e) {
    s.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODE_ADD", claimedOutboundPromotionCode: e });
}
n.d(
    t,
    {},
    {
        Ak: function () {
            s.h.dispatch({ type: "ACTIVE_PROMOTIONS_CLEAR" });
        },
        Ay: {
            fetchActivePromotions: f,
            fetchClaimedOutboundPromotionCodes: async function () {
                try {
                    let e = (
                        await r.Bo.get({
                            url: A.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
                            query: { locale: o.default.locale },
                            oldFormErrors: !0,
                            rejectWithError: (0, r.fT)(),
                        })
                    ).body.map(u.Ng);
                    return (
                        s.h.dispatch({
                            type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS",
                            claimedOutboundPromotionCodes: e,
                        }),
                        !0
                    );
                } catch {
                    return (s.h.dispatch({ type: "CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL" }), !1);
                }
            },
            addClaimedOutboundPromotionCode: h,
            dismissOutboundPromotionNotice: function () {
                s.h.dispatch({ type: "OUTBOUND_PROMOTION_NOTICE_DISMISS" });
                let e = _.A.lastDismissedOutboundPromotionStartDate;
                null != e &&
                    d.wc.updateAsync(
                        "userContent",
                        (t) => {
                            t.lastDismissedOutboundPromotionStartDate = a.hU.create({ value: e });
                        },
                        d.Sb.INFREQUENT_USER_ACTION,
                    );
            },
            markOutboundPromotionsSeen() {
                s.h.dispatch({ type: "OUTBOUND_PROMOTIONS_SEEN" });
            },
        },
        BE: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            null == c.default.getCurrentUser() ||
                _.A.isFetchingActivePromotions ||
                (e && null != _.A.lastFetchedActivePromotions) ||
                f();
        },
        LI: h,
        b8: f,
    },
);
