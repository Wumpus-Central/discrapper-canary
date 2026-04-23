"use strict";
n.d(t, { A: () => y });
var i = n(17928),
    r = n(228366),
    s = n(617617),
    a = n(835095),
    o = n(65412),
    l = n(638504),
    d = n(651436),
    _ = n(315069);
class u extends _.A {
    id;
    componentType;
    properties;
    promotionId;
    static createFromServer(e) {
        let t = new TextDecoder("utf-8", { ignoreBOM: !0 });
        return new u({
            id: e.id,
            componentType: e.component_type,
            properties: d.m.fromBinary((0, o.A)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new l.V(e, t),
            }),
            promotionId: e.promotion_id,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties),
            (this.promotionId = e.promotionId);
    }
}
var c = n(852218);
function E() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let h = E();
function m() {
    return {
        [c.pt.THIRD_PARTY]: {},
        [c.pt.BOGO]: {},
        [c.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [c.pt.MARKETING_MOMENT]: {},
        [c.pt.THIRD_PARTY_INBOUND]: {},
        [c.pt.THIRD_PARTY_OUTBOUND]: {},
        [c.pt.GIFT_PROMOTION]: {},
        [c.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let f = null,
    g = !1,
    p = null,
    A = !1,
    I = null,
    T = m(),
    S = null,
    N = new Map();
function C() {
    let e = null;
    for (let t of Object.values(T[c.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function R() {
    S = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class O extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (h = e), this.waitFor(s.A), this.syncWith([s.A], R);
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
        return Object.values(T[c.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(T[c.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return h.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return S;
    }
    get lastFetchedActivePromotions() {
        return I;
    }
    get isFetchingActivePromotions() {
        return A;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return h.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return h.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return f;
    }
    get isFetchingActiveBogoPromotion() {
        return g;
    }
    get lastFetchedActiveBogoPromotion() {
        return p;
    }
    get promotionsByType() {
        return T;
    }
    getPromotionByTypeAndId(e, t) {
        return T[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(T[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return h;
    }
    getMarketingComponentByType(e) {
        return N.get(e) ?? null;
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(T[c.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(T[c.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = T[c.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = T[c.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
}
let y = new O(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (T = m()),
            (N = new Map()),
            t.forEach((e) => {
                let t = a.A.createFromServer(e);
                (T[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        N.set(e.component_type, u.createFromServer(e));
                    });
            }),
            (I = Date.now()),
            (A = !1),
            h.hasFetchedConsumedInboundPromotionId ||
                ((h.hasFetchedConsumedInboundPromotionId = !0), (h.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function () {
        A = !0;
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (T = m()), (N = new Map()), (A = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (f = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (p = Date.now()),
            (g = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        g = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (f = null), (g = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(T[c.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = C();
        null != e && (S = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(T[c.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = C();
        null != e && ((S = e), (h.lastSeenOutboundPromotionStartDate = e));
    },
    LOGOUT: function () {
        (h = E()), (A = !1), (I = null), (g = !1), (p = null), (T = m()), (f = null), N.clear();
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = u.createFromServer(t);
        N.set(n.componentType, n);
    },
});
