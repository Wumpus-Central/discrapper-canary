n.d(t, { Z: () => C }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(581883);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
        bogoPromotion: null
    };
}
let c = l(),
    u = !1,
    d = null,
    _ = !1,
    f = null,
    p = [],
    h = null;
function m() {
    u = !0;
}
function g() {
    (c.bogoPromotion = null), (u = !1);
}
function E(e) {
    let { activePromotion: t } = e;
    (c.bogoPromotion = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString()
    }),
        (d = Date.now()),
        (u = !1);
}
function b(e) {
    let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
    (p = t), (f = Date.now()), (_ = !1), c.hasFetchedConsumedInboundPromotionId || ((c.hasFetchedConsumedInboundPromotionId = !0), (c.consumedInboundPromotionId = n));
}
function y() {
    _ = !0;
}
function O() {
    (p = []), (_ = !1);
}
function v() {
    var e;
    let t = null;
    for (let e of p) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function I() {
    if (0 === p.length) return !1;
    let e = v();
    null != e && (h = e);
}
function T() {
    if (0 === p.length) return !1;
    let e = v();
    null != e && ((h = e), (c.lastSeenOutboundPromotionStartDate = e));
}
function S() {
    (c = l()), (_ = !1), (f = null), (u = !1), (d = null), (p = []);
}
function A() {
    var e, t, n;
    h = null != (n = null == (t = o.Z.settings.userContent) || null == (e = t.lastDismissedOutboundPromotionStartDate) ? void 0 : e.value) ? n : null;
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(o.Z), this.syncWith([o.Z], A);
    }
    get outboundPromotions() {
        return p;
    }
    get lastSeenOutboundPromotionStartDate() {
        return c.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return h;
    }
    get lastFetchedActivePromotions() {
        return f;
    }
    get isFetchingActiveOutboundPromotions() {
        return _;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return c.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return c.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return c.bogoPromotion;
    }
    get isFetchingActiveBogoPromotion() {
        return u;
    }
    get lastFetchedActiveBogoPromotion() {
        return d;
    }
    getState() {
        return c;
    }
}
s(N, 'displayName', 'PromotionsStore'), s(N, 'persistKey', 'PromotionsPersistedStore');
let C = new N(a.Z, {
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: b,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH: y,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: O,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: E,
    ACTIVE_BOGO_PROMOTION_FETCH: m,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: g,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: I,
    OUTBOUND_PROMOTIONS_SEEN: T,
    LOGOUT: S
});
