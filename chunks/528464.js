"use strict";
n.d(t, { A: () => M }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(617617),
    s = n(835095),
    l = n(287809),
    o = n(822571),
    d = n(852218),
    c = n(181370),
    u = n.n(c),
    _ = n(927813);
function E(e, t) {
    let n = e.effectiveStartDate?.getTime() ?? -1 / 0,
        i = t.effectiveStartDate?.getTime() ?? -1 / 0;
    if (n !== i) return i - n;
    let r = e.effectiveEndDate?.getTime() ?? 1 / 0,
        a = t.effectiveEndDate?.getTime() ?? 1 / 0;
    if (r !== a) return a - r;
    let s = BigInt(e.id),
        l = BigInt(t.id);
    return s === l ? 0 : l > s ? 1 : -1;
}
function A() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let h = A();
function I() {
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
let f = null,
    p = !1,
    T = null,
    m = !1,
    g = null,
    S = null,
    N = I(),
    C = null,
    O = new Map(),
    R = null,
    L = [],
    D = !1;
function y() {
    let e = null;
    for (let t of Object.values(N[d.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function v() {
    C = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class b extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (h = e), this.waitFor(a.A, l.default), this.syncWith([a.A], v);
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
        return Object.values(N[d.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(N[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return h.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return C;
    }
    get lastFetchedActivePromotions() {
        return g;
    }
    get lastFetchedActivePromotionsLocale() {
        return S;
    }
    get isFetchingActivePromotions() {
        return m;
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
        return p;
    }
    get lastFetchedActiveBogoPromotion() {
        return T;
    }
    get promotionsByType() {
        return N;
    }
    getPromotionByTypeAndId(e, t) {
        return N[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(N[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return h;
    }
    getMarketingComponentByType(e) {
        if (R?.componentType === e) return R;
        let t = l.default.getCurrentUser(),
            n = new Date();
        return (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0,
                i = e.filter((e) => {
                    var i, r;
                    return (
                        (i = e.effectiveStartDate),
                        (r = e.effectiveEndDate),
                        !((null != i && t.getTime() < i.getTime()) || (null != r && t.getTime() > r.getTime())) &&
                            (!e.isTimed || n(e))
                    );
                });
            return 0 === i.length ? null : ([...i].sort(E)[0] ?? null);
        })(
            O.get(e) ?? [],
            n,
            (e) =>
                null != t &&
                (function (e, t, n) {
                    if (!e.isTimed || null == e.effectiveStartDate) return !0;
                    let i =
                        1e4 *
                        Math.min(
                            1,
                            Math.max(0, ((n.getTime() - e.effectiveStartDate.getTime()) / _.A.Millis.HOUR) * 0.2),
                        );
                    return u().v3(`${e.promotionId}:${t}`) % 1e4 < i;
                })(e, t.id, n),
        );
    }
    hasPromotion(e) {
        return Object.values(N).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(N[d.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(N[d.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = N[d.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = N[d.pt.MARKETING_MOMENT],
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
        return Object.values(N[d.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    get claimedOutboundPromotionCodes() {
        return L;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return D;
    }
}
let M = new b(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (N = I()),
            (O = new Map()),
            (R = null),
            t.forEach((e) => {
                let t = s.A.createFromServer(e);
                (N[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((t) => {
                        let n = O.get(t.component_type) ?? [];
                        n.push(o.A.createFromServer(t, e)), O.set(t.component_type, n);
                    });
            }),
            (g = Date.now()),
            (m = !1),
            h.hasFetchedConsumedInboundPromotionId ||
                ((h.hasFetchedConsumedInboundPromotionId = !0), (h.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        (m = !0), (S = t);
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (N = I()), (O = new Map()), (R = null), (m = !1);
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        (N = I()), (O = new Map()), (R = null), (f = null), (m = !1), (g = Date.now());
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (f = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (T = Date.now()),
            (p = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        p = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (f = null), (p = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(N[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = y();
        null != e && (C = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(N[d.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = y();
        null != e && ((C = e), (h.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        (L = t), (D = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        (L = []), (D = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            L.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        L = [...L, t];
    },
    LOGOUT: function () {
        (h = A()),
            (m = !1),
            (g = null),
            (p = !1),
            (T = null),
            (N = I()),
            (f = null),
            O.clear(),
            (R = null),
            (L = []),
            (D = !1);
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e;
        if (((R = o.A.createFromServer(t, t.promotion)), null != t.promotion)) {
            let e = s.A.createFromServer(t.promotion);
            N[t.promotion.promotion_type][t.promotion.id] = e;
        }
    },
});
