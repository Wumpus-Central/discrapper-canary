"use strict";
n.d(t, { A: () => D });
var i = n(17928),
    r = n(228366),
    s = n(617617),
    a = n(835095),
    o = n(65412),
    l = n(638504),
    u = n(875676),
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
function h() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let f = h();
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
    T = null,
    S = p(),
    y = null,
    C = new Map(),
    N = [],
    v = !1;
function R() {
    let e = null;
    for (let t of Object.values(S[_.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function O() {
    y = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class b extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (f = e), this.waitFor(s.A), this.syncWith([s.A], O);
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
        return Object.values(S[_.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(S[_.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return f.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return y;
    }
    get lastFetchedActivePromotions() {
        return I;
    }
    get lastFetchedActivePromotionsLocale() {
        return T;
    }
    get isFetchingActivePromotions() {
        return A;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return f.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return f.consumedInboundPromotionId;
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
        return S;
    }
    getPromotionByTypeAndId(e, t) {
        return S[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(S[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return f;
    }
    getMarketingComponentByType(e) {
        return C.get(e) ?? null;
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(S[_.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(S[_.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = S[_.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = S[_.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
    get claimedOutboundPromotionCodes() {
        return N;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return v;
    }
}
let D = new b(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (S = p()),
            (C = new Map()),
            t.forEach((e) => {
                let t = a.A.createFromServer(e);
                (S[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        C.set(e.component_type, d.createFromServer(e));
                    });
            }),
            (I = Date.now()),
            (A = !1),
            f.hasFetchedConsumedInboundPromotionId ||
                ((f.hasFetchedConsumedInboundPromotionId = !0), (f.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        (A = !0), (T = t);
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (S = p()), (C = new Map()), (A = !1);
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        (S = p()), (C = new Map()), (E = null), (A = !1), (I = Date.now());
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
        if (0 === Object.values(S[_.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = R();
        null != e && (y = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(S[_.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = R();
        null != e && ((y = e), (f.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        (N = t), (v = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        (N = []), (v = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            N.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        N = [...N, t];
    },
    LOGOUT: function () {
        (f = h()), (A = !1), (I = null), (m = !1), (g = null), (S = p()), (E = null), C.clear(), (N = []), (v = !1);
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = d.createFromServer(t);
        C.set(n.componentType, n);
    },
});
