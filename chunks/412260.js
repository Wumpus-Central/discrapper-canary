n.d(t, { A: () => M }), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(617617),
    o = n(835095),
    l = n(822571),
    c = n(264779),
    u = n(852218);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let p = f(),
    _ = null,
    h = !1,
    m = null,
    g = !1,
    E = null,
    b = {
        [u.pt.BOGO]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    },
    y = {},
    O = null,
    A = new Map();
function v() {
    h = !0;
}
function S() {
    (_ = null), (h = !1);
}
function I(e) {
    let { activePromotion: t } = e;
    (_ = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString(),
    }),
        (m = Date.now()),
        (h = !1);
}
function T(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    (y = {}),
        (b = {
            [u.pt.BOGO]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (A = new Map()),
        t.forEach((e) => {
            let t = o.A.createFromServer(e);
            if (
                !0 ===
                (0, c.HB)({
                    promotionPartner: t.outboundTitle,
                    promotionType: t.promotionType,
                })
            )
                t.id in y || (y[t.id] = t);
            else if (e.promotion_type === u.pt.THIRD_PARTY) b[u.pt.THIRD_PARTY_OUTBOUND][e.id] = t;
            else {
                var n;
                (b[e.promotion_type][e.id] = t),
                    null == (n = e.marketing_components) ||
                        n.forEach((e) => {
                            A.set(e.component_type, l.A.createFromServer(e));
                        });
            }
        }),
        (E = Date.now()),
        (g = !1),
        p.hasFetchedConsumedInboundPromotionId ||
            ((p.hasFetchedConsumedInboundPromotionId = !0), (p.consumedInboundPromotionId = n));
}
function C() {
    g = !0;
}
function N() {
    (b = {
        [u.pt.BOGO]: {},
        [u.pt.MARKETING_MOMENT]: {},
        [u.pt.THIRD_PARTY_INBOUND]: {},
        [u.pt.THIRD_PARTY_OUTBOUND]: {},
        [u.pt.GIFT_PROMOTION]: {},
        [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    }),
        (A = new Map()),
        (g = !1),
        (y = {});
}
function R() {
    var e;
    let t = null;
    for (let e of Object.values(b[u.pt.THIRD_PARTY_OUTBOUND])) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function w() {
    if (0 === Object.values(b[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && (O = e);
}
function P() {
    if (0 === Object.values(b[u.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && ((O = e), (p.lastSeenOutboundPromotionStartDate = e));
}
function D(e) {
    let { data: t } = e,
        n = l.A.createFromServer(t);
    A.set(n.componentType, n);
}
function x() {
    (p = f()),
        (g = !1),
        (E = null),
        (h = !1),
        (m = null),
        (b = {
            [u.pt.BOGO]: {},
            [u.pt.MARKETING_MOMENT]: {},
            [u.pt.THIRD_PARTY_INBOUND]: {},
            [u.pt.THIRD_PARTY_OUTBOUND]: {},
            [u.pt.GIFT_PROMOTION]: {},
            [u.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
        }),
        (_ = null),
        (y = {}),
        A.clear();
}
function L() {
    var e, t, n;
    O =
        null !=
        (e =
            null == (n = s.A.settings.userContent) || null == (t = n.lastDismissedOutboundPromotionStartDate)
                ? void 0
                : t.value)
            ? e
            : null;
}
class j extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (p = e), this.waitFor(s.A), this.syncWith([s.A], L);
    }
    get outboundPromotions() {
        return Object.values(b[u.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(y);
    }
    get lastSeenOutboundPromotionStartDate() {
        return p.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return O;
    }
    get lastFetchedActivePromotions() {
        return E;
    }
    get isFetchingActivePromotions() {
        return g;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return p.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return p.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return _;
    }
    get isFetchingActiveBogoPromotion() {
        return h;
    }
    get lastFetchedActiveBogoPromotion() {
        return m;
    }
    get promotionsByType() {
        return b;
    }
    getPromotionByTypeAndId(e, t) {
        var n;
        return null == (n = b[e]) ? void 0 : n[t];
    }
    getState() {
        return p;
    }
    getMarketingComponentByType(e) {
        var t;
        return null != (t = A.get(e)) ? t : null;
    }
    getGiftPromotionRewardSkuIds() {
        let e = b[u.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? [] : e[t[0]].rewardSkuIds;
    }
}
d(j, "displayName", "PromotionsStore"),
    d(j, "persistKey", "PromotionsPersistedStore"),
    d(j, "migrations", [
        (e) => {
            try {
                delete e.bogoPromotion;
            } catch (e) {}
            return e;
        },
    ]);
let M = new j(a.h, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: T,
    ACTIVE_PROMOTIONS_FETCH: C,
    ACTIVE_PROMOTIONS_FETCH_FAIL: N,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: I,
    ACTIVE_BOGO_PROMOTION_FETCH: v,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: S,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: w,
    OUTBOUND_PROMOTIONS_SEEN: P,
    LOGOUT: x,
    PREMIUM_MARKETING_PREVIEW: D,
});
