n.d(t, { Z: () => C }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(581883);
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
    d = null;
function f() {
    u = !0;
}
function p() {
    (c.bogoPromotion = null), (u = !1);
}
function _(e) {
    let { activePromotion: t } = e;
    (c.bogoPromotion = t), (d = Date.now()), (u = !1);
}
let h = !1,
    m = null,
    g = [],
    E = null;
function v(e) {
    let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
    (g = t), (m = Date.now()), (h = !1), c.hasFetchedConsumedInboundPromotionId || ((c.hasFetchedConsumedInboundPromotionId = !0), (c.consumedInboundPromotionId = n));
}
function b() {
    h = !0;
}
function y() {
    (g = []), (h = !1);
}
function O() {
    let e = null;
    for (let t of g) (null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
    return e;
}
function S() {
    if (0 === g.length) return !1;
    let e = O();
    null != e && (E = e);
}
function I() {
    if (0 === g.length) return !1;
    let e = O();
    null != e && ((E = e), (c.lastSeenOutboundPromotionStartDate = e));
}
function T() {
    (c = l()), (h = !1), (m = null), (u = !1), (d = null), (g = []);
}
function N() {
    var e, t, n;
    E = null !== (n = null === (t = a.Z.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null;
}
class A extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(a.Z), this.syncWith([a.Z], N);
    }
    get outboundPromotions() {
        return g;
    }
    get lastSeenOutboundPromotionStartDate() {
        return c.lastSeenOutboundPromotionStartDate;
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
s(A, 'displayName', 'PromotionsStore'), s(A, 'persistKey', 'PromotionsPersistedStore');
let C = new A(o.Z, {
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: v,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH: b,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: y,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: _,
    ACTIVE_BOGO_PROMOTION_FETCH: f,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: p,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: S,
    OUTBOUND_PROMOTIONS_SEEN: I,
    LOGOUT: T
});
