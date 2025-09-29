n.d(t, { Z: () => D }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(581883),
    s = n(605338),
    l = n(397047);
function c(e, t, n) {
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
function u() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let d = u(),
    f = null,
    _ = !1,
    p = null,
    h = !1,
    m = null,
    g = {
        [l.$.BOGO]: {},
        [l.$.MARKETING_MOMENT]: {},
        [l.$.THIRD_PARTY_INBOUND]: {},
        [l.$.THIRD_PARTY_OUTBOUND]: {},
    },
    E = null;
function b() {
    _ = !0;
}
function y() {
    (f = null), (_ = !1);
}
function O(e) {
    let { activePromotion: t } = e;
    (f = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString(),
    }),
        (p = Date.now()),
        (_ = !1);
}
function v(e) {
    return [l.$.THIRD_PARTY, l.$.THIRD_PARTY_OUTBOUND].includes(e.promotion_type);
}
function I(e) {
    let { promotions: t, consumedInboundPromotionId: n } = e;
    t.forEach((e) => {
        !0 === v(e) && (g[l.$.THIRD_PARTY_OUTBOUND][e.id] = s.Z.createFromServer(e));
    }),
        (m = Date.now()),
        (h = !1),
        d.hasFetchedConsumedInboundPromotionId ||
            ((d.hasFetchedConsumedInboundPromotionId = !0), (d.consumedInboundPromotionId = n));
}
function T() {
    h = !0;
}
function S() {
    (g = {
        [l.$.BOGO]: {},
        [l.$.MARKETING_MOMENT]: {},
        [l.$.THIRD_PARTY_INBOUND]: {},
        [l.$.THIRD_PARTY_OUTBOUND]: {},
    }),
        (h = !1);
}
function A() {
    var e;
    let t = null;
    for (let e of Object.values(g[l.$.THIRD_PARTY_OUTBOUND])) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function C() {
    if (0 === Object.values(g[l.$.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = A();
    null != e && (E = e);
}
function N() {
    if (0 === Object.values(g[l.$.THIRD_PARTY_OUTBOUND]).length) return !1;
    let e = A();
    null != e && ((E = e), (d.lastSeenOutboundPromotionStartDate = e));
}
function R() {
    (d = u()),
        (h = !1),
        (m = null),
        (_ = !1),
        (p = null),
        (g = {
            [l.$.BOGO]: {},
            [l.$.MARKETING_MOMENT]: {},
            [l.$.THIRD_PARTY_INBOUND]: {},
            [l.$.THIRD_PARTY_OUTBOUND]: {},
        }),
        (f = null);
}
function P() {
    var e, t, n;
    E =
        null !=
        (n =
            null == (t = o.Z.settings.userContent) || null == (e = t.lastDismissedOutboundPromotionStartDate)
                ? void 0
                : e.value)
            ? n
            : null;
}
class w extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (d = e), this.waitFor(o.Z), this.syncWith([o.Z], P);
    }
    get outboundPromotions() {
        return Object.values(g[l.$.THIRD_PARTY_OUTBOUND]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return d.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return E;
    }
    get lastFetchedActivePromotions() {
        return m;
    }
    get isFetchingActiveOutboundPromotions() {
        return h;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return d.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return d.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return f;
    }
    get isFetchingActiveBogoPromotion() {
        return _;
    }
    get lastFetchedActiveBogoPromotion() {
        return p;
    }
    get promotionsByType() {
        return g;
    }
    getState() {
        return d;
    }
}
c(w, "displayName", "PromotionsStore"),
    c(w, "persistKey", "PromotionsPersistedStore"),
    c(w, "migrations", [
        (e) => {
            try {
                delete e.bogoPromotion;
            } catch (e) {}
            return e;
        },
    ]);
let D = new w(a.Z, {
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: I,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH: T,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: S,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: O,
    ACTIVE_BOGO_PROMOTION_FETCH: b,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: y,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: C,
    OUTBOUND_PROMOTIONS_SEEN: N,
    LOGOUT: R,
});
