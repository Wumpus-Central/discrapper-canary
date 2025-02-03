n.d(t, { Z: () => R }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(581883);
function o(e, t, n) {
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
let u = l(),
    c = !1,
    d = null;
function f() {
    c = !0;
}
function _() {
    (u.bogoPromotion = null), (c = !1);
}
function p(e) {
    let { activePromotion: t } = e;
    (u.bogoPromotion = t), (d = Date.now()), (c = !1);
}
let h = !1,
    m = null,
    g = [],
    E = null;
function v(e) {
    let { activeOutboundPromotions: t, consumedInboundPromotionId: n } = e;
    (g = t), (m = Date.now()), (h = !1), u.hasFetchedConsumedInboundPromotionId || ((u.hasFetchedConsumedInboundPromotionId = !0), (u.consumedInboundPromotionId = n));
}
function y() {
    h = !0;
}
function I() {
    (g = []), (h = !1);
}
function b() {
    let e = null;
    for (let t of g) (null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
    return e;
}
function T() {
    if (0 === g.length) return !1;
    let e = b();
    null != e && (E = e);
}
function S() {
    if (0 === g.length) return !1;
    let e = b();
    null != e && ((E = e), (u.lastSeenOutboundPromotionStartDate = e));
}
function A() {
    (u = l()), (h = !1), (m = null), (c = !1), (d = null), (g = []);
}
function N() {
    var e, t, n;
    E = null !== (n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null;
}
class C extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (u = e), this.waitFor(s.Z), this.syncWith([s.Z], N);
    }
    get outboundPromotions() {
        return g;
    }
    get lastSeenOutboundPromotionStartDate() {
        return u.lastSeenOutboundPromotionStartDate;
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
        return u.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return u.consumedInboundPromotionId;
    }
    get bogoPromotion() {
        return u.bogoPromotion;
    }
    get isFetchingActiveBogoPromotion() {
        return c;
    }
    get lastFetchedActiveBogoPromotion() {
        return d;
    }
    getState() {
        return u;
    }
}
o(C, 'displayName', 'PromotionsStore'), o(C, 'persistKey', 'PromotionsPersistedStore');
let R = new C(a.Z, {
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: v,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH: y,
    ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: I,
    ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: p,
    ACTIVE_BOGO_PROMOTION_FETCH: f,
    ACTIVE_BOGO_PROMOTION_FETCH_FAIL: _,
    OUTBOUND_PROMOTION_NOTICE_DISMISS: T,
    OUTBOUND_PROMOTIONS_SEEN: S,
    LOGOUT: A
});
