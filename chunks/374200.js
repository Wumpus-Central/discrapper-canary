"use strict";
n.d(t, { A: () => b });
var i = n(17928),
    r = n(228366),
    s = n(617617),
    a = n(835095),
    o = n(65412),
    l = n(638504),
    u = n(651436),
    c = n(315069);
class d extends c.A {
    id;
    componentType;
    properties;
    promotionId;
    static createFromServer(e) {
        let t = new TextDecoder("utf-8", { ignoreBOM: !0 });
        return new d({
            id: e.id,
            componentType: e.component_type,
            properties: u.m.fromBinary((0, o.A)(e.properties), {
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
var _ = n(852218);
function f() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let h = f();
function p() {
    return {
        [_.pt.THIRD_PARTY]: {},
        [_.pt.BOGO]: {},
        [_.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [_.pt.MARKETING_MOMENT]: {},
        [_.pt.THIRD_PARTY_INBOUND]: {},
        [_.pt.THIRD_PARTY_OUTBOUND]: {},
        [_.pt.GIFT_PROMOTION]: {},
        [_.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let E = null,
    m = !1,
    g = null,
    A = !1,
    I = null,
    T = p(),
    S = null,
    N = new Map(),
    y = [],
    C = !1;
function v() {
    let e = null;
    for (let t of Object.values(T[_.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function O() {
    S = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class R extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (h = e), this.waitFor(s.A), this.syncWith([s.A], O);
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
        return Object.values(T[_.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(T[_.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
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
        return E;
    }
    get isFetchingActiveBogoPromotion() {
        return m;
    }
    get lastFetchedActiveBogoPromotion() {
        return g;
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
            oneTime: Object.values(T[_.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(T[_.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = T[_.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = T[_.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
    get claimedOutboundPromotionCodes() {
        return y;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return C;
    }
}
let b = new R(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (T = p()),
            (N = new Map()),
            t.forEach((e) => {
                let t = a.A.createFromServer(e);
                (T[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        N.set(e.component_type, d.createFromServer(e));
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
        (T = p()), (N = new Map()), (A = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (E = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (g = Date.now()),
            (m = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        m = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (E = null), (m = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(T[_.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = v();
        null != e && (S = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(T[_.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = v();
        null != e && ((S = e), (h.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        (y = t), (C = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        (y = []), (C = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            y.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        y = [...y, t];
    },
    LOGOUT: function () {
        (h = f()), (A = !1), (I = null), (m = !1), (g = null), (T = p()), (E = null), N.clear(), (y = []), (C = !1);
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = d.createFromServer(t);
        N.set(n.componentType, n);
    },
});
