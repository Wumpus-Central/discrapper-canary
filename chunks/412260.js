(n.d(t, { A: () => R }), n(321073));
var i = n(17928),
    r = n(228366),
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
    h = null,
    I = null,
    f = E(),
    p = null,
    T = new Map(),
    g = null,
    m = [],
    S = !1;
function N() {
    let e = null;
    for (let t of Object.values(f[d.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function C() {
    p = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class O extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        (null != e && (_ = e), this.waitFor(a.A, l.default), this.syncWith([a.A], C));
    }
    get outboundPromotions() {
        return Object.values(f[d.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(f[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return _.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return p;
    }
    get lastFetchedActivePromotions() {
        return h;
    }
    get lastFetchedActivePromotionsLocale() {
        return I;
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
        return f;
    }
    getPromotionByTypeAndId(e, t) {
        return f[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(f[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return _;
    }
    getMarketingComponentByType(e) {
        if (g?.componentType === e) return g;
        let t = l.default.getCurrentUser(),
            n = new Date();
        return (0, c.A)(T.get(e) ?? [], n, (e) => null != t && e.isIncludedInRollout(t.id, n));
    }
    hasPromotion(e) {
        return Object.values(f).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(f[d.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(f[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = f[d.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = f[d.pt.MARKETING_MOMENT],
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
        return Object.values(f[d.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    hasActiveBogoRewardPromotion() {
        return null !== this.getActiveBogoRewardPromotion();
    }
    get claimedOutboundPromotionCodes() {
        return m;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return S;
    }
}
let R = new O(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        ((f = E()),
            (T = new Map()),
            (g = null),
            t.forEach((e) => {
                let t = s.A.createFromServer(e);
                ((f[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        let n = T.get(e.component_type) ?? [];
                        (n.push(o.A.createFromServer(e, t)), T.set(e.component_type, n));
                    }));
            }),
            (h = Date.now()),
            (A = !1),
            _.hasFetchedConsumedInboundPromotionId ||
                ((_.hasFetchedConsumedInboundPromotionId = !0), (_.consumedInboundPromotionId = n)));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        ((A = !0), (I = t));
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        ((f = E()), (T = new Map()), (g = null), (A = !1));
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        ((f = E()), (T = new Map()), (g = null), (A = !1), (h = Date.now()));
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(f[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = N();
        null != e && (p = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(f[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = N();
        null != e && ((p = e), (_.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        ((m = t), (S = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        ((m = []), (S = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            m.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        m = [...m, t];
    },
    LOGOUT: function () {
        ((_ = u()), (A = !1), (h = null), (f = E()), T.clear(), (g = null), (m = []), (S = !1));
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? s.A.createFromServer(t.promotion) : null;
        ((g = o.A.createFromServer(t, n)), null != n && (f[n.promotionType][n.id] = n));
    },
});
