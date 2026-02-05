"use strict";
n.d(t, { A: () => P });
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
    p = null,
    h = !1,
    m = null,
    g = {
        [u.pt.BOGO]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    },
    E = {},
    A = null,
    I = new Map();
function T() {
    f = !0;
}
function y() {
    (_ = null), (f = !1);
}
function S(e) {
    let { activePromotion: t } = e;
    (_ = { id: t.id, startDate: t.startDate.toISOString(), endDate: t.endDate.toISOString() }),
        (p = Date.now()),
        (f = !1);
}
function v(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    (E = {}),
        (g = {
            [u.pt.BOGO]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (I = new Map()),
        t.forEach((e) => {
            let t = s.A.createFromServer(e);
            !0 === (0, l.HB)({ promotionPartner: t.outboundTitle, promotionType: t.promotionType })
                ? t.id in E || (E[t.id] = t)
                : e.promotion_type === u.pt.THIRD_PARTY
                  ? (g[u.pt.THIRD_PARTY_OUTBOUND][e.id] = t)
                  : ((g[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        I.set(e.component_type, o.A.createFromServer(e));
                    }));
        }),
        (m = Date.now()),
        (h = !1),
        d.hasFetchedConsumedInboundPromotionId ||
            ((d.hasFetchedConsumedInboundPromotionId = !0), (d.consumedInboundPromotionId = n));
}
function C() {
    h = !0;
}
function b() {
    (g = {
        [u.pt.BOGO]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    }),
        (I = new Map()),
        (h = !1),
        (E = {});
}
function N() {
    let e = null;
    for (let t of Object.values(g[u.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function R() {
    if (0 === Object.values(g[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = N();
    null != e && (A = e);
}
function O() {
    if (0 === Object.values(g[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = N();
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
        (g = {
            [u.pt.BOGO]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (_ = null),
        (E = {}),
        I.clear();
}
function w() {
    A = a.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class x extends r.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        null != e && (d = e), this.waitFor(a.A), this.syncWith([a.A], w);
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
        return Object.values(g[u.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(E);
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
        return g;
    }
    getPromotionByTypeAndId(e, t) {
        return g[e]?.[t];
    }
    getState() {
        return d;
    }
    getMarketingComponentByType(e) {
        return I.get(e) ?? null;
    }
    getGiftPromotionRewardSkuIds() {
        let e = g[u.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? [] : e[t[0]].rewardSkuIds;
    }
}
let P = new x(i.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: v,
    ACTIVE_PROMOTIONS_FETCH: C,
    ACTIVE_PROMOTIONS_FETCH_FAIL: b,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: S,
    ACTIVE_BOGO_PROMOTION_FETCH: T,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: y,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: R,
    OUTBOUND_PROMOTIONS_SEEN: O,
    LOGOUT: L,
    PREMIUM_MARKETING_PREVIEW: D,
});
