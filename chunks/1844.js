(n.d(t, { Z: () => R }), n(388685));
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
        lastSeenOutboundPromotionStartDate: null
    };
}
let c = l(),
    u = null,
    d = !1,
    _ = null,
    f = !1,
    p = null,
    h = [],
    m = null;
function g() {
    d = !0;
}
function E() {
    ((u = null), (d = !1));
}
function b(e) {
    let { activePromotion: t } = e;
    ((u = {
        id: t.id,
        startDate: t.startDate.toISOString(),
        endDate: t.endDate.toISOString()
    }),
        (_ = Date.now()),
        (d = !1));
}
function y(e) {
    let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
    ((h = t), (p = Date.now()), (f = !1), c.hasFetchedConsumedInboundPromotionId || ((c.hasFetchedConsumedInboundPromotionId = !0), (c.consumedInboundPromotionId = n)));
}
function O() {
    f = !0;
}
function v() {
    ((h = []), (f = !1));
}
function I() {
    var e;
    let t = null;
    for (let e of h) (null == t || e.startDate > t) && (t = e.startDate);
    return null != (e = null == t ? void 0 : t.toISOString()) ? e : null;
}
function T() {
    if (0 === h.length) return !1;
    let e = I();
    null != e && (m = e);
}
function S() {
    if (0 === h.length) return !1;
    let e = I();
    null != e && ((m = e), (c.lastSeenOutboundPromotionStartDate = e));
}
function A() {
    ((c = l()), (f = !1), (p = null), (d = !1), (_ = null), (h = []), (u = null));
}
function N() {
    var e, t, n;
    m = null != (n = null == (t = o.Z.settings.userContent) || null == (e = t.lastDismissedOutboundPromotionStartDate) ? void 0 : e.value) ? n : null;
}
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null != e && (c = e), this.waitFor(o.Z), this.syncWith([o.Z], N));
    }
    get outboundPromotions() {
        return h;
    }
    get lastSeenOutboundPromotionStartDate() {
        return c.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return m;
    }
    get lastFetchedActivePromotions() {
        return p;
    }
    get isFetchingActiveOutboundPromotions() {
        return f;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return c.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return c.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return u;
    }
    get isFetchingActiveBogoPromotion() {
        return d;
    }
    get lastFetchedActiveBogoPromotion() {
        return _;
    }
    getState() {
        return c;
    }
}
(s(C, 'displayName', 'PromotionsStore'),
    s(C, 'persistKey', 'PromotionsPersistedStore'),
    s(C, 'migrations', [
        (e) => {
            try {
                delete e.bogoPromotion;
            } catch (e) {}
            return e;
        }
    ]));
let R = new C(a.Z, {
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: y,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH: O,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: v,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: b,
    ACTIVE_BOGO_PROMOTION_FETCH: g,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: E,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: T,
    OUTBOUND_PROMOTIONS_SEEN: S,
    LOGOUT: A
});
