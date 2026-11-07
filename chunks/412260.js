n(321073);
var i = n(517352),
    r = n(855986),
    a = n(73153),
    s = n(617617),
    l = n(835095),
    o = n(287809),
    d = n(822571),
    c = n(693369),
    u = n(852218),
    _ = n(891786);
function E() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let A = E();
function f() {
    return {
        [u.pt.THIRD_PARTY]: {},
        [u.pt.BOGO]: {},
        [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let h = !1,
    I = null,
    p = null,
    m = f(),
    T = null,
    g = new Map(),
    S = new Map(),
    N = new Map(),
    C = null,
    O = [],
    R = !1;
function L() {
    let e = null;
    for (let t of Object.values(m[u.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function y() {
    T = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class D extends r.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        (null != e && (A = e), this.waitFor(s.A, o.default), this.syncWith([s.A], y));
    }
    get outboundPromotions() {
        return Object.values(m[u.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(m[u.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return A.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return T;
    }
    get lastFetchedActivePromotions() {
        return I;
    }
    get lastFetchedActivePromotionsLocale() {
        return p;
    }
    get isFetchingActivePromotions() {
        return h;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return A.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return A.consumedInboundPromotionId;
    }
    get promotionsByType() {
        return m;
    }
    getPromotionByTypeAndId(e, t) {
        return m[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(m[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return A;
    }
    getAllMarketingComponentsByType(e, t) {
        return C?.componentType === e && C.promotionId === t ? [C] : (S.get(t)?.get(e) ?? []);
    }
    getMarketingComponentsByTypeAcrossPromotions(e) {
        return C?.componentType === e ? [C] : (g.get(e) ?? []);
    }
    getMarketingComponentByType(e) {
        if (C?.componentType === e) return C;
        let t = o.default.getCurrentUser(),
            n = new Date();
        return (0, _.A)(g.get(e) ?? [], n, (e) => null != t && e.isIncludedInRollout(t.id, n));
    }
    getMarketingComponentBySurface(e) {
        return (0, c.U)(e) ? this.getMarketingComponentByKind(i.bt[e]) : null;
    }
    getMarketingComponentByKind(e) {
        if (C?.properties.properties.oneofKind === e) return C;
        let t = o.default.getCurrentUser(),
            n = new Date();
        return (0, _.A)(N.get(e) ?? [], n, (e) => null != t && e.isIncludedInRollout(t.id, n));
    }
    hasPromotion(e) {
        return Object.values(m).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(m[u.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(m[u.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = m[u.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = m[u.pt.MARKETING_MOMENT],
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
        return Object.values(m[u.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    hasActiveBogoRewardPromotion() {
        return null !== this.getActiveBogoRewardPromotion();
    }
    get claimedOutboundPromotionCodes() {
        return O;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return R;
    }
}
let b = new D(a.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        ((m = f()),
            (N = new Map()),
            (g = new Map()),
            (S = new Map()),
            (C = null),
            t.forEach((e) => {
                let t = l.A.createFromServer(e);
                m[e.promotion_type][e.id] = t;
                let n = new Map();
                (S.set(e.id, n),
                    e.marketing_components?.forEach((e) => {
                        let i = d.A.createFromServer(e, t),
                            r = g.get(i.componentType) ?? [];
                        (r.push(i), g.set(i.componentType, r));
                        let a = n.get(i.componentType) ?? [];
                        (a.push(i), n.set(i.componentType, a));
                        let s = i.properties.properties.oneofKind;
                        if (null != s) {
                            let e = N.get(s) ?? [];
                            (e.push(i), N.set(s, e));
                        }
                    }));
            }),
            (I = Date.now()),
            (h = !1),
            A.hasFetchedConsumedInboundPromotionId ||
                ((A.hasFetchedConsumedInboundPromotionId = !0), (A.consumedInboundPromotionId = n)));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        ((h = !0), (p = t));
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        ((m = f()), (N = new Map()), (g = new Map()), (S = new Map()), (C = null), (h = !1));
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        ((m = f()), (N = new Map()), (g = new Map()), (S = new Map()), (C = null), (h = !1), (I = Date.now()));
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(m[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = L();
        null != e && (T = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(m[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = L();
        null != e && ((T = e), (A.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        ((O = t), (R = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        ((O = []), (R = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            O.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        O = [...O, t];
    },
    LOGOUT: function () {
        ((A = E()), (h = !1), (I = null), (m = f()), N.clear(), g.clear(), S.clear(), (C = null), (O = []), (R = !1));
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? l.A.createFromServer(t.promotion) : null;
        ((C = d.A.createFromServer(t, n)), null != n && (m[n.promotionType][n.id] = n));
    },
});
n.d(t, {}, { A: b });
