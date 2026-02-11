"use strict";
n.d(t, { A: () => M });
var r = n(311907),
    i = n(73153),
    a = n(617617),
    s = n(835095),
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
    h = null,
    p = !1,
    g = null,
    E = {
        [u.pt.BOGO]: {},
        [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    },
    A = {},
    I = null,
    T = new Map();
function y() {
    f = !0;
}
function S() {
    (_ = null), (f = !1);
}
function v(e) {
    let { activePromotion: t } = e;
    (_ = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
        (h = Date.now()),
        (f = !1);
}
function C(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    (A = {}),
        (E = {
            [u.pt.BOGO]: {},
            [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (T = new Map()),
        t.forEach((e) => {
            let t = s.A.createFromServer(e);
            !0 === (0, l.HB)({ promotionPartner: t.outboundTitle, promotionType: t.promotionType })
                ? t.id in A || (A[t.id] = t)
                : e.promotion_type === u.pt.THIRD_PARTY
                  ? (E[u.pt.THIRD_PARTY_OUTBOUND][e.id] = t)
                  : ((E[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        T.set(e.component_type, o.A.createFromServer(e));
                    }));
        }),
        (g = Date.now()),
        (p = !1),
        d.hasFetchedConsumedInboundPromotionId ||
            ((d.hasFetchedConsumedInboundPromotionId = !0), (d.consumedInboundPromotionId = n));
}
function b() {
    p = !0;
}
function N() {
    (E = {
        [u.pt.BOGO]: {},
        [u.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    }),
        (T = new Map()),
        (p = !1),
        (A = {});
}
function R() {
    let e = null;
    for (let t of Object.values(E[u.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function O() {
    if (0 === Object.values(E[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && (I = e);
}
function D() {
    if (0 === Object.values(E[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && ((I = e), (d.lastSeenOutboundPromotionStartDate = e));
}
function L(e) {
    let { data: t } = e,
        n = o.A.createFromServer(t);
    T.set(n.componentType, n);
}
function w() {
    (d = c()),
        (p = !1),
        (g = null),
        (f = !1),
        (h = null),
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
        (A = {}),
        T.clear();
}
function x() {
    I = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class P extends r.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (d = e), this.waitFor(a.A), this.syncWith([a.A], x);
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
        return Object.values(A);
    }
    get lastSeenOutboundPromotionStartDate() {
        return d.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return I;
    }
    get lastFetchedActivePromotions() {
        return g;
    }
    get isFetchingActivePromotions() {
        return p;
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
        return h;
    }
    get promotionsByType() {
        return E;
    }
    getPromotionByTypeAndId(e, t) {
        return E[e]?.[t];
    }
    getState() {
        return d;
    }
    getMarketingComponentByType(e) {
        return T.get(e) ?? null;
    }
    getGiftPromotionRewardSkuIds() {
        let e = E[u.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? [] : e[t[0]].rewardSkuIds;
    }
}
let M = new P(i.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: C,
    ACTIVE_PROMOTIONS_FETCH: b,
    ACTIVE_PROMOTIONS_FETCH_FAIL: N,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: v,
    ACTIVE_BOGO_PROMOTION_FETCH: y,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: S,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: O,
    OUTBOUND_PROMOTIONS_SEEN: D,
    LOGOUT: w,
    PREMIUM_MARKETING_PREVIEW: L,
});
