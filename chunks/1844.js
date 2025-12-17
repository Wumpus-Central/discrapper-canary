n.d(t, { Z: () => M }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(581883),
    s = n(605338),
    l = n(357),
    c = n(518638),
    u = n(397047);
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
    m = !1,
    h = null,
    g = !1,
    E = null,
    b = {
        [u.$k.BOGO]: {},
        [u.$k.MARKETING_MOMENT]: {},
        [u.$k.THIRD_PARTY_INBOUND]: {},
        [u.$k.THIRD_PARTY_OUTBOUND]: {},
    },
    y = {},
    O = null,
    v = new Map();
function S() {
    m = !0;
}
function I() {
    (_ = null), (m = !1);
}
function T(e) {
    let { activePromotion: t } = e;
    (_ = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString(),
    }),
        (h = Date.now()),
        (m = !1);
}
function C(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    t.forEach((e) => {
        let t = s.Z.createFromServer(e);
        if (!0 === (0, c.pD)({ promotionPartner: t.outboundTitle })) t.id in y || (y[t.id] = t);
        else if (e.promotion_type === u.$k.THIRD_PARTY) b[u.$k.THIRD_PARTY_OUTBOUND][e.id] = t;
        else {
            var n;
            (b[e.promotion_type][e.id] = t),
                null == (n = e.marketing_components) ||
                    n.forEach((e) => {
                        v.set(e.component_type, l.Z.createFromServer(e));
                    });
        }
    }),
        (E = Date.now()),
        (g = !1),
        p.hasFetchedConsumedInboundPromotionId ||
            ((p.hasFetchedConsumedInboundPromotionId = !0), (p.consumedInboundPromotionId = n));
}
function A() {
    g = !0;
}
function N() {
    (b = {
        [u.$k.BOGO]: {},
        [u.$k.MARKETING_MOMENT]: {},
        [u.$k.THIRD_PARTY_INBOUND]: {},
        [u.$k.THIRD_PARTY_OUTBOUND]: {},
    }),
        (g = !1),
        (y = {});
}
function P() {
    var e;
    let t = null;
    for (let e of Object.values(b[u.$k.THIRD_PARTY_OUTBOUND])) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function R() {
    if (0 === Object.values(b[u.$k.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = P();
    null != e && (O = e);
}
function w() {
    if (0 === Object.values(b[u.$k.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = P();
    null != e && ((O = e), (p.lastSeenOutboundPromotionStartDate = e));
}
function D(e) {
    let { data: t } = e,
        n = l.Z.createFromServer(t);
    v.set(n.componentType, n);
}
function x() {
    (p = f()),
        (g = !1),
        (E = null),
        (m = !1),
        (h = null),
        (b = {
            [u.$k.BOGO]: {},
            [u.$k.MARKETING_MOMENT]: {},
            [u.$k.THIRD_PARTY_INBOUND]: {},
            [u.$k.THIRD_PARTY_OUTBOUND]: {},
        }),
        (_ = null),
        (y = {}),
        v.clear();
}
function L() {
    var e, t, n;
    O =
        null !=
        (n =
            null == (t = o.Z.settings.userContent) || null == (e = t.lastDismissedOutboundPromotionStartDate)
                ? void 0
                : e.value)
            ? n
            : null;
}
class j extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (p = e), this.waitFor(o.Z), this.syncWith([o.Z], L);
    }
    get outboundPromotions() {
        return Object.values(b[u.$k.THIRD_PARTY_OUTBOUND]);
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
        return m;
    }
    get lastFetchedActiveBogoPromotion() {
        return h;
    }
    get promotionsByType() {
        return b;
    }
    getState() {
        return p;
    }
    getMarketingComponentByType(e) {
        var t;
        return null != (t = v.get(e)) ? t : null;
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
let M = new j(a.Z, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: C,
    ACTIVE_PROMOTIONS_FETCH: A,
    ACTIVE_PROMOTIONS_FETCH_FAIL: N,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: T,
    ACTIVE_BOGO_PROMOTION_FETCH: S,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: I,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: R,
    OUTBOUND_PROMOTIONS_SEEN: w,
    LOGOUT: x,
    PREMIUM_MARKETING_PREVIEW: D,
});
