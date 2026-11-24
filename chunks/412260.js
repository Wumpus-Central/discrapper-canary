n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(517352),
    s = n(855986),
    l = n(73153),
    o = n(773669),
    d = n(617617),
    c = n(835095),
    u = n(287809),
    _ = n(583613),
    E = n(683760),
    A = n(822571),
    f = n(693369),
    h = n(852218),
    I = n(809701),
    p = n(795992);
function m() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let g = m();
function T() {
    return {
        [h.pt.THIRD_PARTY]: {},
        [h.pt.BOGO]: {},
        [h.pt.THIRD_PARTY_DIRECT_FULFILLMENT]: {},
        [h.pt.MARKETING_MOMENT]: {},
        [h.pt.THIRD_PARTY_INBOUND]: {},
        [h.pt.THIRD_PARTY_OUTBOUND]: {},
        [h.pt.GIFT_PROMOTION]: {},
        [h.pt.THIRD_PARTY_OUTBOUND_RECURRING]: {},
    };
}
let S = !1,
    N = !1,
    C = null,
    O = null,
    R = T(),
    L = null,
    y = new Map(),
    D = null,
    b = [],
    v = (0, _.L_)((e, t, i, r) => {
        let { resolveCampaignComponents: a } = n(547515);
        return a(e.components, t, i, e.endDate, r);
    });
function P() {
    let e = u.default.getCurrentUser(),
        t = [];
    if (null != D && e?.isStaff() === !0) {
        let n = E.A.hasPremiumTypeOverride(e) ? E.A.getPremiumTypeOverride() : void 0;
        t = v(D, e, o.default.locale, n);
    }
    return !r().isEqual(t, b) && ((b = t), !0);
}
function M() {
    return null != D && P();
}
let U = null;
function w(e) {
    return null != D && u.default.getCurrentUser()?.isStaff() === !0
        ? b.filter((t) => t.properties.properties.oneofKind === e)
        : U?.properties.properties.oneofKind === e
          ? [U]
          : null;
}
function G(e, t) {
    let n = u.default.getCurrentUser(),
        i = new Date();
    return t(y.get(e) ?? [], i, (e) => null != n && e.isIncludedInRollout(n.id, i));
}
let x = [],
    k = !1;
function F() {
    let e = null;
    for (let t of Object.values(R[h.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function B() {
    L = d.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class V extends s.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        (null != e && (g = e),
            this.waitFor(d.A, u.default, o.default, E.A),
            this.syncWith([u.default, o.default, E.A], M),
            this.syncWith([d.A], B));
    }
    get outboundPromotions() {
        return Object.values(R[h.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(R[h.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return g.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return L;
    }
    get lastFetchedActivePromotions() {
        return C;
    }
    get lastFetchedActivePromotionsLocale() {
        return O;
    }
    get isFetchingActivePromotions() {
        return S;
    }
    get lastActivePromotionsFetchFailed() {
        return N;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return g.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return g.consumedInboundPromotionId;
    }
    get promotionsByType() {
        return R;
    }
    getPromotionByTypeAndId(e, t) {
        return R[e]?.[t];
    }
    getMarketingPromotionForEligibility(e) {
        return this.campaignOverrideId === e ? null : this.getPromotionByTypeAndId(h.pt.MARKETING_MOMENT, e);
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(R[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return g;
    }
    getMarketingComponentsBySurfaceAcrossPromotions(e) {
        if (!(0, f.Uy)(e)) return [];
        let t = a.bt[e],
            n = w(t);
        return null != n ? n : (y.get(t) ?? []);
    }
    get campaignOverrideId() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? null : (D?.promotionId ?? null);
    }
    get campaignOverrideRows() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? [] : (D?.components ?? []);
    }
    get campaignOverrideComponents() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? [] : b;
    }
    getMarketingComponentBySurface(e) {
        return (0, f.Uy)(e) ? this.getMarketingComponentByKind(a.bt[e]) : null;
    }
    getMarketingComponentByKind(e) {
        let t = w(e);
        return null != t ? (t[0] ?? null) : G(e, p.A);
    }
    getActiveMarketingComponentsBySurfaceUnprioritized(e) {
        if (!(0, f.Uy)(e)) return [];
        let t = a.bt[e];
        return w(t) ?? G(t, I.A);
    }
    hasPromotion(e) {
        return Object.values(R).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(R[h.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(R[h.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = R[h.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = R[h.pt.MARKETING_MOMENT],
            t = Object.keys(e);
        if (0 === t.length) return null;
        let n = e[t[0]];
        return n.endDate < new Date() ? null : n;
    }
    getMarketingMomentRewardSkuIds() {
        return this.getMarketingMomentPromotion()?.rewardSkuIds ?? [];
    }
    getActiveBogoRewardPromotion() {
        let e = new Date();
        return Object.values(R[h.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    hasActiveBogoRewardPromotion() {
        return null !== this.getActiveBogoRewardPromotion();
    }
    get claimedOutboundPromotionCodes() {
        return x;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return k;
    }
}
let H = new V(l.h, {
    CAMPAIGN_OVERRIDE_SET: function (e) {
        return u.default.getCurrentUser()?.isStaff() === !0 && ((D = null == e.promotionId ? null : e), P(), !0);
    },
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        ((R = T()),
            (y = new Map()),
            (U = null),
            t.forEach((e) => {
                let t = c.A.createFromServer(e);
                ((R[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        let n = A.A.createFromServer(e, t),
                            i = n.properties.properties.oneofKind;
                        if (null != i) {
                            let e = y.get(i) ?? [];
                            (e.push(n), y.set(i, e));
                        }
                    }));
            }),
            (C = Date.now()),
            (S = !1),
            (N = !1),
            g.hasFetchedConsumedInboundPromotionId ||
                ((g.hasFetchedConsumedInboundPromotionId = !0), (g.consumedInboundPromotionId = n)));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        ((S = !0), (O = t));
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        ((R = T()), (y = new Map()), (U = null), (S = !1), (N = !0));
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        ((R = T()), (y = new Map()), (U = null), (S = !1), (N = !1), (C = Date.now()));
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(R[h.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = F();
        null != e && (L = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(R[h.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = F();
        null != e && ((L = e), (g.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        ((x = t), (k = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        ((x = []), (k = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            x.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        x = [...x, t];
    },
    LOGOUT: function () {
        ((D = null),
            (b = []),
            (g = m()),
            (S = !1),
            (N = !1),
            (C = null),
            (R = T()),
            y.clear(),
            (U = null),
            (x = []),
            (k = !1));
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? c.A.createFromServer(t.promotion) : null;
        ((U = A.A.createFromServer(t, n)), null != n && (R[n.promotionType][n.id] = n));
    },
});
n.d(t, {}, { A: H });
