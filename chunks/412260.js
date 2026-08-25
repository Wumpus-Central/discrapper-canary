"use strict";
n.d(t, { A: () => D }), n(321073);
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
let A = null,
    h = !1,
    I = null,
    f = !1,
    p = null,
    T = null,
    m = E(),
    g = null,
    S = new Map(),
    N = null,
    C = [],
    O = !1;
function R() {
    let e = null;
    for (let t of Object.values(m[d.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function L() {
    g = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class y extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (_ = e), this.waitFor(a.A, l.default), this.syncWith([a.A], L);
    }
    static migrations = [
        (e) => {
            try {
                delete e.bogoPromotion;
            } catch (e) {}
            return e;
        },
    ];
    get outboundPromotions() {
        return Object.values(m[d.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(m[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return _.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return g;
    }
    get lastFetchedActivePromotions() {
        return p;
    }
    get lastFetchedActivePromotionsLocale() {
        return T;
    }
    get isFetchingActivePromotions() {
        return f;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return _.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return _.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return A;
    }
    get isFetchingActiveBogoPromotion() {
        return h;
    }
    get lastFetchedActiveBogoPromotion() {
        return I;
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
        return _;
    }
    getMarketingComponentByType(e) {
        if (N?.componentType === e) return N;
        let t = l.default.getCurrentUser(),
            n = new Date();
        return (0, c.A)(S.get(e) ?? [], n, (e) => null != t && e.isIncludedInRollout(t.id, n));
    }
    hasPromotion(e) {
        return Object.values(m).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(m[d.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(m[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = m[d.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = m[d.pt.MARKETING_MOMENT],
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
        return Object.values(m[d.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    get claimedOutboundPromotionCodes() {
        return C;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return O;
    }
}
let D = new y(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (m = E()),
            (S = new Map()),
            (N = null),
            t.forEach((e) => {
                let t = s.A.createFromServer(e);
                (m[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        let n = S.get(e.component_type) ?? [];
                        n.push(o.A.createFromServer(e, t)), S.set(e.component_type, n);
                    });
            }),
            (p = Date.now()),
            (f = !1),
            _.hasFetchedConsumedInboundPromotionId ||
                ((_.hasFetchedConsumedInboundPromotionId = !0), (_.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        (f = !0), (T = t);
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (m = E()), (S = new Map()), (N = null), (f = !1);
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        (m = E()), (S = new Map()), (N = null), (A = null), (f = !1), (p = Date.now());
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (A = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (I = Date.now()),
            (h = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        h = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (A = null), (h = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(m[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = R();
        null != e && (g = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(m[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = R();
        null != e && ((g = e), (_.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        (C = t), (O = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        (C = []), (O = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            C.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        C = [...C, t];
    },
    LOGOUT: function () {
        (_ = u()),
            (f = !1),
            (p = null),
            (h = !1),
            (I = null),
            (m = E()),
            (A = null),
            S.clear(),
            (N = null),
            (C = []),
            (O = !1);
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? s.A.createFromServer(t.promotion) : null;
        (N = o.A.createFromServer(t, n)), null != n && (m[n.promotionType][n.id] = n);
    },
});
