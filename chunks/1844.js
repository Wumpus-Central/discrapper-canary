n.d(t, { Z: () => L }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(581883),
    s = n(605338),
    l = n(357),
    c = n(397047);
function u(e, t, n) {
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
function d() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let f = d(),
    _ = null,
    p = !1,
    h = null,
    m = !1,
    g = null,
    E = {
        [c.$.BOGO]: {},
        [c.$.MARKETING_MOMENT]: {},
        [c.$.THIRD_PARTY_INBOUND]: {},
        [c.$.THIRD_PARTY_OUTBOUND]: {},
    },
    b = null,
    y = new Map();
function O() {
    p = !0;
}
function v() {
    (_ = null), (p = !1);
}
function I(e) {
    let { activePromotion: t } = e;
    (_ = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString(),
    }),
        (h = Date.now()),
        (p = !1);
}
function T(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    t.forEach((e) => {
        if (e.promotion_type === c.$.THIRD_PARTY) E[c.$.THIRD_PARTY_OUTBOUND][e.id] = s.Z.createFromServer(e);
        else {
            var t;
            (E[e.promotion_type][e.id] = s.Z.createFromServer(e)),
                null == (t = e.marketing_components) ||
                    t.forEach((e) => {
                        y.set(e.component_type, l.Z.createFromServer(e));
                    });
        }
    }),
        (g = Date.now()),
        (m = !1),
        f.hasFetchedConsumedInboundPromotionId ||
            ((f.hasFetchedConsumedInboundPromotionId = !0), (f.consumedInboundPromotionId = n));
}
function S() {
    m = !0;
}
function A() {
    (E = {
        [c.$.BOGO]: {},
        [c.$.MARKETING_MOMENT]: {},
        [c.$.THIRD_PARTY_INBOUND]: {},
        [c.$.THIRD_PARTY_OUTBOUND]: {},
    }),
        (m = !1);
}
function C() {
    var e;
    let t = null;
    for (let e of Object.values(E[c.$.THIRD_PARTY_OUTBOUND])) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function N() {
    if (0 === Object.values(E[c.$.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = C();
    null != e && (b = e);
}
function R() {
    if (0 === Object.values(E[c.$.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = C();
    null != e && ((b = e), (f.lastSeenOutboundPromotionStartDate = e));
}
function P(e) {
    let { data: t } = e,
        n = l.Z.createFromServer(t);
    y.set(n.componentType, n);
}
function w() {
    (f = d()),
        (m = !1),
        (g = null),
        (p = !1),
        (h = null),
        (E = {
            [c.$.BOGO]: {},
            [c.$.MARKETING_MOMENT]: {},
            [c.$.THIRD_PARTY_INBOUND]: {},
            [c.$.THIRD_PARTY_OUTBOUND]: {},
        }),
        (_ = null),
        y.clear();
}
function D() {
    var e, t, n;
    b =
        null !=
        (n =
            null == (t = o.Z.settings.userContent) || null == (e = t.lastDismissedOutboundPromotionStartDate)
                ? void 0
                : e.value)
            ? n
            : null;
}
class x extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (f = e), this.waitFor(o.Z), this.syncWith([o.Z], D);
    }
    get outboundPromotions() {
        return Object.values(E[c.$.THIRD_PARTY_OUTBOUND]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return f.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return b;
    }
    get lastFetchedActivePromotions() {
        return g;
    }
    get isFetchingActivePromotions() {
        return m;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return f.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return f.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return _;
    }
    get isFetchingActiveBogoPromotion() {
        return p;
    }
    get lastFetchedActiveBogoPromotion() {
        return h;
    }
    get promotionsByType() {
        return E;
    }
    getState() {
        return f;
    }
    getMarketingComponentByType(e) {
        var t;
        return null != (t = y.get(e)) ? t : null;
    }
}
u(x, "displayName", "PromotionsStore"),
    u(x, "persistKey", "PromotionsPersistedStore"),
    u(x, "migrations", [
        (e) => {
            try {
                delete e.bogoPromotion;
            } catch (e) {}
            return e;
        },
    ]);
let L = new x(a.Z, {
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: T,
    ACTIVE_PROMOTIONS_FETCH: S,
    ACTIVE_PROMOTIONS_FETCH_FAIL: A,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: I,
    ACTIVE_BOGO_PROMOTION_FETCH: O,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: v,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: N,
    OUTBOUND_PROMOTIONS_SEEN: R,
    LOGOUT: w,
    PREMIUM_MARKETING_PREVIEW: P,
});
