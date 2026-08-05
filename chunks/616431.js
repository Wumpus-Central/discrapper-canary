"use strict";
n.d(t, { A: () => D }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(617617),
    s = n(835095),
    l = n(822571),
    o = n(852218);
function d(e, t) {
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
function c() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let u = c();
function _() {
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
let E = null,
    A = !1,
    h = null,
    I = !1,
    f = null,
    p = null,
    T = _(),
    m = null,
    g = new Map(),
    S = null,
    N = [],
    C = !1;
function O() {
    let e = null;
    for (let t of Object.values(T[o.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function R() {
    m = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class L extends i.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (u = e), this.waitFor(a.A), this.syncWith([a.A], R);
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
        return Object.values(T[o.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(T[o.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return u.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return m;
    }
    get lastFetchedActivePromotions() {
        return f;
    }
    get lastFetchedActivePromotionsLocale() {
        return p;
    }
    get isFetchingActivePromotions() {
        return I;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return u.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return u.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return E;
    }
    get isFetchingActiveBogoPromotion() {
        return A;
    }
    get lastFetchedActiveBogoPromotion() {
        return h;
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
        return u;
    }
    getMarketingComponentByType(e) {
        var t, n;
        let i;
        return S?.componentType === e
            ? S
            : ((t = g.get(e) ?? []),
              (n = new Date()),
              0 ===
              (i = t.filter((e) => {
                  var t, i;
                  return (
                      (t = e.effectiveStartDate),
                      (i = e.effectiveEndDate),
                      !((null != t && n.getTime() < t.getTime()) || (null != i && n.getTime() > i.getTime()))
                  );
              })).length
                  ? null
                  : ([...i].sort(d)[0] ?? null));
    }
    hasPromotion(e) {
        return Object.values(T).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(T[o.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(T[o.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = T[o.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = T[o.pt.MARKETING_MOMENT],
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
        return Object.values(T[o.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    get claimedOutboundPromotionCodes() {
        return N;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return C;
    }
}
let D = new L(r.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        (T = _()),
            (g = new Map()),
            (S = null),
            t.forEach((e) => {
                let t = s.A.createFromServer(e);
                (T[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((t) => {
                        let n = g.get(t.component_type) ?? [];
                        n.push(l.A.createFromServer(t, e)), g.set(t.component_type, n);
                    });
            }),
            (f = Date.now()),
            (I = !1),
            u.hasFetchedConsumedInboundPromotionId ||
                ((u.hasFetchedConsumedInboundPromotionId = !0), (u.consumedInboundPromotionId = n));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        (I = !0), (p = t);
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        (T = _()), (g = new Map()), (S = null), (I = !1);
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        (T = _()), (g = new Map()), (S = null), (E = null), (I = !1), (f = Date.now());
    },
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function (e) {
        let { activePromotion: t } = e;
        (E = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
            (h = Date.now()),
            (A = !1);
    },
    ACTIVE_BOGO_PROMOTION_FETCH: function () {
        A = !0;
    },
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function () {
        (E = null), (A = !1);
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(T[o.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = O();
        null != e && (m = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(T[o.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = O();
        null != e && ((m = e), (u.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        (N = t), (C = !0);
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        (N = []), (C = !0);
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
        (u = c()),
            (I = !1),
            (f = null),
            (A = !1),
            (h = null),
            (T = _()),
            (E = null),
            g.clear(),
            (S = null),
            (N = []),
            (C = !1);
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e;
        if (((S = l.A.createFromServer(t, t.promotion)), null != t.promotion)) {
            let e = s.A.createFromServer(t.promotion);
            T[t.promotion.promotion_type][t.promotion.id] = e;
        }
    },
});
