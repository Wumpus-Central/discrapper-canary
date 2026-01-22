n.d(t, {
    Ay: () => O,
    BE: () => E,
    hS: () => y,
});
var r = n(160517),
    i = n(562465),
    a = n(406935),
    s = n(73153),
    o = n(339048),
    l = n(773669),
    c = n(594061),
    u = n(835095),
    d = n(287809),
    f = n(927578),
    p = n(728364),
    _ = n(91435),
    h = n(412260),
    m = n(788868),
    g = n(652215);

function E() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.default.getCurrentUser(),
        n = f.Ay.isPremiumExactly(t, m.PremiumTypes.TIER_2),
        r = (0, _.r)({
            location: "maybeFetchActivePromotions",
        }),
        i = p.m.getCurrentConfig(
            {
                location: "maybeFetchActivePromotions",
            },
            {
                autoTrackExposure: !1,
                disable: n,
            },
        ).enabled;
    (r || n || i) && !h.A.isFetchingActivePromotions && ((e && null != h.A.lastFetchedActivePromotions) || b());
}
async function b() {
    try {
        s.h.dispatch({
            type: "ACTIVE_PROMOTIONS_FETCH",
        });
        let t = r.j.DESKTOP,
            n = await i.Bo.get({
                url: g.Rsh.PROMOTIONS,
                query: {
                    locale: l.default.locale,
                    platform: t,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            a = h.A.consumedInboundPromotionId;
        if (!h.A.hasFetchedConsumedInboundPromotionId) {
            var e;
            let t = (await (0, o.LM)(m.tv, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
            a = null != (e = null == t ? void 0 : t.promotion_id) ? e : null;
        }
        s.h.dispatch({
            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
            promotions: n.body,
            consumedInboundPromotionId: a,
        });
    } catch (e) {
        s.h.dispatch({
            type: "ACTIVE_PROMOTIONS_FETCH_FAIL",
        });
    }
}
async function y() {
    if (!h.A.isFetchingActiveBogoPromotion)
        try {
            s.h.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH",
            });
            let e = (
                await i.Bo.get({
                    url: g.Rsh.BOGO_PROMOTIONS,
                    query: {
                        locale: l.default.locale,
                    },
                    rejectWithError: !0,
                })
            ).body;
            s.h.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                activePromotion: u.A.createFromServer(e),
            });
        } catch (e) {
            s.h.dispatch({
                type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL",
            });
        }
}
let O = {
    fetchActivePromotions: b,
    dismissOutboundPromotionNotice: function () {
        s.h.dispatch({
            type: "OUTBOUND_PROMOTION_NOTICE_DISMISS",
        });
        let e = h.A.lastDismissedOutboundPromotionStartDate;
        null != e &&
            c.wc.updateAsync(
                "userContent",
                (t) => {
                    t.lastDismissedOutboundPromotionStartDate = a.hU.create({
                        value: e,
                    });
                },
                c.Sb.INFREQUENT_USER_ACTION,
            );
    },
    markOutboundPromotionsSeen() {
        s.h.dispatch({
            type: "OUTBOUND_PROMOTIONS_SEEN",
        });
    },
    fetchActiveBogoPromotion: y,
};
