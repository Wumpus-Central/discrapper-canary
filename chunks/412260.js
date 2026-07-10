"use strict";
n.d(t, { A: () => O });
var i = n(17928),
    r = n(228366),
    a = n(617617),
    s = n(835095),
    l = n(822571),
    o = n(852218);
function d() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let c = d();
function u() {
    return {
        [o.pt.THIRD_PARTY]: {},
        [o.pt.BOGO]: {},
        [o.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [o.pt.MARKETING_MOMENT]: {},
        [o.pt.THIRD_PARTY_INBOUND]: {},
        [o.pt.THIRD_PARTY_OUTBOUND]: {},
        [o.pt.GIFT_PROMOTION]: {},
        [o.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let _ = null,
    E = !1,
    A = null,
    h = !1,
    I = null,
    f = null,
    p = u(),
    T = null,
    m = new Map(),
    g = [],
    S = !1;
function N() {
    let e = null;
    for (let t of Object.values(p[o.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function C() {
    T = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class R extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (c = e), this.waitFor(a.A), this.syncWith([a.A], C);
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
        return Object.values(p[o.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(p[o.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return c.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return T;
    }
    get lastFetchedActivePromotions() {
        return I;
    }
    get lastFetchedActivePromotionsLocale() {
        return f;
    }
    get isFetchingActivePromotions() {
        return h;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return c.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return c.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return _;
    }
    get isFetchingActiveBogoPromotion() {
        return E;
    }
    get lastFetchedActiveBogoPromotion() {
        return A;
    }
    get promotionsByType() {
        return p;
    }
    getPromotionByTypeAndId(e, t) {
        return p[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(p[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return c;
    }
    getMarketingComponentByType(e) {
        return m.get(e) ?? null;
    }
    hasPromotion(e) {
        return Object.values(p).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(p[o.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(p[o.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = p[o.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = p[o.pt.MARKETING_MOMENT],
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
        return Object.values(p[o.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    get claimedOutboundPromotionCodes() {
        return g;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return S;
    }
}
let O = new R(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (p = u()),
            (m = new Map()),
            t.forEach((e) => {
                let t = s.A.createFromServer(e);
                (p[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        m.set(e.component_type, l.A.createFromServer(e));
                    });
            }),
            (I = Date.now()),
            (h = !1),
            c.hasFetchedConsumedInboundPromotionId ||
                ((c.hasFetchedConsumedInboundPromotionId = !0), (c.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        (h = !0), (f = t);
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (p = u()), (m = new Map()), (h = !1);
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        (p = u()), (m = new Map()), (_ = null), (h = !1), (I = Date.now());
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (_ = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (A = Date.now()),
            (E = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        E = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (_ = null), (E = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(p[o.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = N();
        null != e && (T = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(p[o.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = N();
        null != e && ((T = e), (c.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        (g = t), (S = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        (g = []), (S = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            g.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        g = [...g, t];
    },
    LOGOUT: function () {
        (c = d()), (h = !1), (I = null), (E = !1), (A = null), (p = u()), (_ = null), m.clear(), (g = []), (S = !1);
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = l.A.createFromServer(t);
        if ((m.set(n.componentType, n), null != t.promotion)) {
            let e = s.A.createFromServer(t.promotion);
            p[t.promotion.promotion_type][t.promotion.id] = e;
        }
    },
});
