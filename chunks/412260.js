"use strict";
n.d(t, { A: () => x });
var r = n(311907),
    i = n(73153),
    s = n(617617),
    a = n(835095),
    o = n(822571),
    l = n(264779),
    u = n(852218);
function c() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let d = c(),
    _ = null,
    f = !1,
    p = null,
    h = !1,
    m = null,
    E = {
        [u.pt.BOGO]: {},
        [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    },
    g = {},
    A = null,
    I = new Map();
function T() {
    f = !0;
}
function S() {
    (_ = null), (f = !1);
}
function y(e) {
    let { activePromotion: t } = e;
    (_ = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
        (p = Date.now()),
        (f = !1);
}
function v(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    (g = {}),
        (E = {
            [u.pt.BOGO]: {},
            [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (I = new Map()),
        t.forEach((e) => {
            let t = a.A.createFromServer(e);
            !0 === (0, l.HB)({ promotionPartner: t.outboundTitle, promotionType: t.promotionType })
                ? t.id in g || (g[t.id] = t)
                : e.promotion_type === u.pt.THIRD_PARTY
                  ? (E[u.pt.THIRD_PARTY_OUTBOUND][e.id] = t)
                  : ((E[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        I.set(e.component_type, o.A.createFromServer(e));
                    }));
        }),
        (m = Date.now()),
        (h = !1),
        d.hasFetchedConsumedInboundPromotionId ||
            ((d.hasFetchedConsumedInboundPromotionId = !0), (d.consumedInboundPromotionId = n));
}
function N() {
    h = !0;
}
function C() {
    (E = {
        [u.pt.BOGO]: {},
        [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    }),
        (I = new Map()),
        (h = !1),
        (g = {});
}
function R() {
    let e = null;
    for (let t of Object.values(E[u.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function O() {
    if (0 === Object.values(E[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && (A = e);
}
function b() {
    if (0 === Object.values(E[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && ((A = e), (d.lastSeenOutboundPromotionStartDate = e));
}
function D(e) {
    let { data: t } = e,
        n = o.A.createFromServer(t);
    I.set(n.componentType, n);
}
function L() {
    (d = c()),
        (h = !1),
        (m = null),
        (f = !1),
        (p = null),
        (E = {
            [u.pt.BOGO]: {},
            [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (_ = null),
        (g = {}),
        I.clear();
}
function w() {
    A = s.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class M extends r.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (d = e), this.waitFor(s.A), this.syncWith([s.A], w);
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
        return Object.values(E[u.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(g);
    }
    get lastSeenOutboundPromotionStartDate() {
        return d.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return A;
    }
    get lastFetchedActivePromotions() {
        return m;
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
        return d;
    }
    getMarketingComponentByType(e) {
        return I.get(e) ?? null;
    }
    getGiftPromotionRewardSkuIds() {
        let e = E[u.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? [] : e[t[0]].rewardSkuIds;
    }
    getMarketingMomentRewardSkuIds() {
        let e = E[u.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        return 0 === t.length ? [] : e[t[0]].rewardSkuIds;
    }
}
let x = new M(i.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: v,
    ACTIVE_PROMOTIONS_FETCH: N,
    ACTIVE_PROMOTIONS_FETCH_FAIL: C,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: y,
    ACTIVE_BOGO_PROMOTION_FETCH: T,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: S,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: O,
    OUTBOUND_PROMOTIONS_SEEN: b,
    LOGOUT: L,
    PREMIUM_MARKETING_PREVIEW: D,
});
