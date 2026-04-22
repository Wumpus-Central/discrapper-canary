"use strict";
n.d(t, { A: () => M });
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
let c = u();
function d() {
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
    p = null,
    h = !1,
    m = null,
    E = d(),
    g = null,
    A = new Map();
function I() {
    f = !0;
}
function T() {
    (_ = null), (f = !1);
}
function S(e) {
    let { activePromotion: t } = e;
    (_ = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
        (p = Date.now()),
        (f = !1);
}
function y(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    (E = d()),
        (A = new Map()),
        t.forEach((e) => {
            let t = a.A.createFromServer(e);
            (E[e.promotion_type][e.id] = t),
                e.marketing_components?.forEach((e) => {
                    A.set(e.component_type, o.A.createFromServer(e));
                });
        }),
        (m = Date.now()),
        (h = !1),
        c.hasFetchedConsumedInboundPromotionId ||
            ((c.hasFetchedConsumedInboundPromotionId = !0), (c.consumedInboundPromotionId = n));
}
function v() {
    h = !0;
}
function N() {
    (E = d()), (A = new Map()), (h = !1);
}
function C() {
    let e = null;
    for (let t of Object.values(E[l.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function R() {
    if (0 === Object.values(E[l.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = C();
    null != e && (g = e);
}
function O() {
    if (0 === Object.values(E[l.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = C();
    null != e && ((g = e), (c.lastSeenOutboundPromotionStartDate = e));
}
function b(e) {
    let { data: t } = e,
        n = o.A.createFromServer(t);
    A.set(n.componentType, n);
}
function D() {
    (c = u()), (h = !1), (m = null), (f = !1), (p = null), (E = d()), (_ = null), A.clear();
}
function L() {
    g = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class w extends r.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (c = e), this.waitFor(s.A), this.syncWith([s.A], L);
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
        return Object.values(E[l.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(E[l.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return c.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return g;
    }
    get lastFetchedActivePromotions() {
        return m;
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
        return f;
    }
    get lastFetchedActiveBogoPromotion() {
        return p;
    }
    get promotionsByType() {
        return E;
    }
    getPromotionByTypeAndId(e, t) {
        return E[e]?.[t];
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(E[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return c;
    }
    getMarketingComponentByType(e) {
        return A.get(e) ?? null;
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(E[l.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(E[l.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = E[l.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = E[l.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
}
let M = new w(i.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: y,
    ACTIVE_PROMOTIONS_FETCH: v,
    ACTIVE_PROMOTIONS_FETCH_FAIL: N,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: S,
    ACTIVE_BOGO_PROMOTION_FETCH: I,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: T,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: R,
    OUTBOUND_PROMOTIONS_SEEN: O,
    LOGOUT: D,
    PREMIUM_MARKETING_PREVIEW: b,
});
