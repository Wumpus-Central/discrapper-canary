n(321073);
var i = n(855986),
    r = n(73153),
    a = n(617617),
    s = n(835095),
    l = n(287809),
    o = n(822571),
    d = n(852218),
    c = n(891786);
function u() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let _ = u();
function E() {
    return {
        [d.pt.THIRD_PARTY]: {},
        [d.pt.BOGO]: {},
        [d.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [d.pt.MARKETING_MOMENT]: {},
        [d.pt.THIRD_PARTY_INBOUND]: {},
        [d.pt.THIRD_PARTY_OUTBOUND]: {},
        [d.pt.GIFT_PROMOTION]: {},
        [d.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let A = !1,
    f = null,
    h = null,
    I = E(),
    p = null,
    m = new Map(),
    T = new Map(),
    g = null,
    S = [],
    N = !1;
function C() {
    let e = null;
    for (let t of Object.values(I[d.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function O() {
    p = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class R extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        (null != e && (_ = e), this.waitFor(a.A, l.default), this.syncWith([a.A], O));
    }
    get outboundPromotions() {
        return Object.values(I[d.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(I[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return _.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return p;
    }
    get lastFetchedActivePromotions() {
        return f;
    }
    get lastFetchedActivePromotionsLocale() {
        return h;
    }
    get isFetchingActivePromotions() {
        return A;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return _.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return _.consumedInboundPromotionId;
    }
    get promotionsByType() {
        return I;
    }
    getPromotionByTypeAndId(e, t) {
        return I[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(I[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return _;
    }
    getAllMarketingComponentsByType(e, t) {
        return g?.componentType === e && g.promotionId === t ? [g] : (T.get(t)?.get(e) ?? []);
    }
    getMarketingComponentByType(e) {
        if (g?.componentType === e) return g;
        let t = l.default.getCurrentUser(),
            n = new Date();
        return (0, c.A)(m.get(e) ?? [], n, (e) => null != t && e.isIncludedInRollout(t.id, n));
    }
    hasPromotion(e) {
        return Object.values(I).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(I[d.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(I[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = I[d.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = I[d.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
    getActiveBogoRewardPromotion() {
        let e = new Date();
        return Object.values(I[d.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    hasActiveBogoRewardPromotion() {
        return null !== this.getActiveBogoRewardPromotion();
    }
    get claimedOutboundPromotionCodes() {
        return S;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return N;
    }
}
let L = new R(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        ((I = E()),
            (m = new Map()),
            (T = new Map()),
            (g = null),
            t.forEach((e) => {
                let t = s.A.createFromServer(e);
                I[e.promotion_type][e.id] = t;
                let n = new Map();
                (T.set(e.id, n),
                    e.marketing_components?.forEach((e) => {
                        let i = m.get(e.component_type) ?? [],
                            r = o.A.createFromServer(e, t);
                        i.push(r);
                        let a = n.get(e.component_type) ?? [];
                        (a.push(r), n.set(e.component_type, a), m.set(e.component_type, i));
                    }));
            }),
            (f = Date.now()),
            (A = !1),
            _.hasFetchedConsumedInboundPromotionId ||
                ((_.hasFetchedConsumedInboundPromotionId = !0), (_.consumedInboundPromotionId = n)));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        ((A = !0), (h = t));
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        ((I = E()), (m = new Map()), (T = new Map()), (g = null), (A = !1));
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        ((I = E()), (m = new Map()), (T = new Map()), (g = null), (A = !1), (f = Date.now()));
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(I[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = C();
        null != e && (p = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(I[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = C();
        null != e && ((p = e), (_.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        ((S = t), (N = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        ((S = []), (N = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            S.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        S = [...S, t];
    },
    LOGOUT: function () {
        ((_ = u()), (A = !1), (f = null), (I = E()), m.clear(), T.clear(), (g = null), (S = []), (N = !1));
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? s.A.createFromServer(t.promotion) : null;
        ((g = o.A.createFromServer(t, n)), null != n && (I[n.promotionType][n.id] = n));
    },
});
n.d(t, {}, { A: L });
