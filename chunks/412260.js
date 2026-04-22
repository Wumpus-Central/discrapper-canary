"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(73153),
    s = n(617617),
    a = n(835095),
    o = n(822571),
    l = n(852218);
function u() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let d = u();
function c() {
    return {
        [l.pt.THIRD_PARTY]: {},
        [l.pt.BOGO]: {},
        [l.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [l.pt.MARKETING_MOMENT]: {},
        [l.pt.THIRD_PARTY_INBOUND]: {},
        [l.pt.THIRD_PARTY_OUTBOUND]: {},
        [l.pt.GIFT_PROMOTION]: {},
        [l.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let _ = null,
    f = !1,
    E = null,
    h = !1,
    p = null,
    m = c(),
    g = null,
    A = new Map();
function I() {
    let e = null;
    for (let t of Object.values(m[l.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function T() {
    g = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class S extends r.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (d = e), this.waitFor(s.A), this.syncWith([s.A], T);
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
        return Object.values(m[l.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(m[l.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return d.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return g;
    }
    get lastFetchedActivePromotions() {
        return p;
    }
    get isFetchingActivePromotions() {
        return h;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return d.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return d.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return _;
    }
    get isFetchingActiveBogoPromotion() {
        return f;
    }
    get lastFetchedActiveBogoPromotion() {
        return E;
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
        return d;
    }
    getMarketingComponentByType(e) {
        return A.get(e) ?? null;
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(m[l.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(m[l.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = m[l.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = m[l.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
}
let y = new S(i.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (m = c()),
            (A = new Map()),
            t.forEach((e) => {
                let t = a.A.createFromServer(e);
                (m[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        A.set(e.component_type, o.A.createFromServer(e));
                    });
            }),
            (p = Date.now()),
            (h = !1),
            d.hasFetchedConsumedInboundPromotionId ||
                ((d.hasFetchedConsumedInboundPromotionId = !0), (d.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function () {
        h = !0;
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (m = c()), (A = new Map()), (h = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (_ = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (E = Date.now()),
            (f = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        f = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (_ = null), (f = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(m[l.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = I();
        null != e && (g = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(m[l.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = I();
        null != e && ((g = e), (d.lastSeenOutboundPromotionStartDate = e));
    },
    LOGOUT: function () {
        (d = u()), (h = !1), (p = null), (f = !1), (E = null), (m = c()), (_ = null), A.clear();
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = o.A.createFromServer(t);
        A.set(n.componentType, n);
    },
});
