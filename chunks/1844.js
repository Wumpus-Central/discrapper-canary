n.d(t, { Z: () => k }), n(388685);
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
let _ = f(),
    p = null,
    h = !1,
    m = null,
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
function I() {
    h = !0;
}
function T() {
    (p = null), (h = !1);
}
function S(e) {
    let { activePromotion: t } = e;
    (p = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString(),
    }),
        (m = Date.now()),
        (h = !1);
}
function A(e) {
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
        _.hasFetchedConsumedInboundPromotionId ||
            ((_.hasFetchedConsumedInboundPromotionId = !0), (_.consumedInboundPromotionId = n));
}
function C() {
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
function R() {
    var e;
    let t = null;
    for (let e of Object.values(b[u.$k.THIRD_PARTY_OUTBOUND])) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function P() {
    if (0 === Object.values(b[u.$k.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && (O = e);
}
function D() {
    if (0 === Object.values(b[u.$k.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = R();
    null != e && ((O = e), (_.lastSeenOutboundPromotionStartDate = e));
}
function w(e) {
    let { data: t } = e,
        n = l.Z.createFromServer(t);
    v.set(n.componentType, n);
}
function L() {
    (_ = f()),
        (g = !1),
        (E = null),
        (h = !1),
        (m = null),
        (b = {
            [u.$k.BOGO]: {},
            [u.$k.MARKETING_MOMENT]: {},
            [u.$k.THIRD_PARTY_INBOUND]: {},
            [u.$k.THIRD_PARTY_OUTBOUND]: {},
        }),
        (p = null),
        (y = {}),
        v.clear();
}
function x() {
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
class M extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (_ = e), this.waitFor(o.Z), this.syncWith([o.Z], x);
    }
    get outboundPromotions() {
        return Object.values(b[u.$k.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(y);
    }
    get lastSeenOutboundPromotionStartDate() {
        return _.lastSeenOutboundPromotionStartDate;
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
        return _.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return _.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return p;
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
    getState() {
        return _;
    }
    getMarketingComponentByType(e) {
        var t;
        return null != (t = v.get(e)) ? t : null;
    }
}
d(M, "displayName", "PromotionsStore"),
    d(M, "persistKey", "PromotionsPersistedStore"),
    d(M, "migrations", [
        (e) => {
            try {
                delete e.bogoPromotion;
            } catch (e) {}
            return e;
        },
    ]);
let k = new M(a.Z, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: A,
    ACTIVE_PROMOTIONS_FETCH: C,
    ACTIVE_PROMOTIONS_FETCH_FAIL: N,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: S,
    ACTIVE_BOGO_PROMOTION_FETCH: I,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: T,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: P,
    OUTBOUND_PROMOTIONS_SEEN: D,
    LOGOUT: L,
    PREMIUM_MARKETING_PREVIEW: w,
});
