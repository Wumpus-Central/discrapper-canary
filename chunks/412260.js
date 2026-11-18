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
    N = null,
    C = null,
    O = T(),
    R = null,
    L = new Map(),
    y = null,
    D = [],
    b = (0, _.L_)((e, t, i, r) => {
        let { resolveCampaignComponents: a } = n(547515);
        return a(e.components, t, i, e.endDate, r);
    });
function v() {
    let e = u.default.getCurrentUser(),
        t = [];
    if (null != y && e?.isStaff() === !0) {
        let n = E.A.hasPremiumTypeOverride(e) ? E.A.getPremiumTypeOverride() : void 0;
        t = b(y, e, o.default.locale, n);
    }
    return !r().isEqual(t, D) && ((D = t), !0);
}
function P() {
    return null != y && v();
}
let M = null;
function U(e) {
    return null != y && u.default.getCurrentUser()?.isStaff() === !0
        ? D.filter((t) => t.properties.properties.oneofKind === e)
        : M?.properties.properties.oneofKind === e
          ? [M]
          : null;
}
function w(e, t) {
    let n = u.default.getCurrentUser(),
        i = new Date();
    return t(L.get(e) ?? [], i, (e) => null != n && e.isIncludedInRollout(n.id, i));
}
let G = [],
    x = !1;
function k() {
    let e = null;
    for (let t of Object.values(O[h.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function F() {
    R = d.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class B extends s.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        (null != e && (g = e),
            this.waitFor(d.A, u.default, o.default, E.A),
            this.syncWith([u.default, o.default, E.A], P),
            this.syncWith([d.A], F));
    }
    get outboundPromotions() {
        return Object.values(O[h.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(O[h.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return g.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return R;
    }
    get lastFetchedActivePromotions() {
        return N;
    }
    get lastFetchedActivePromotionsLocale() {
        return C;
    }
    get isFetchingActivePromotions() {
        return S;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return g.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return g.consumedInboundPromotionId;
    }
    get promotionsByType() {
        return O;
    }
    getPromotionByTypeAndId(e, t) {
        return O[e]?.[t];
    }
    getMarketingPromotionForEligibility(e) {
        return this.campaignOverrideId === e ? null : this.getPromotionByTypeAndId(h.pt.MARKETING_MOMENT, e);
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(O[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return g;
    }
    getMarketingComponentsBySurfaceAcrossPromotions(e) {
        if (!(0, f.Uy)(e)) return [];
        let t = a.bt[e],
            n = U(t);
        return null != n ? n : (L.get(t) ?? []);
    }
    get campaignOverrideId() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? null : (y?.promotionId ?? null);
    }
    get campaignOverrideRows() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? [] : (y?.components ?? []);
    }
    get campaignOverrideComponents() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? [] : D;
    }
    getMarketingComponentBySurface(e) {
        return (0, f.Uy)(e) ? this.getMarketingComponentByKind(a.bt[e]) : null;
    }
    getMarketingComponentByKind(e) {
        let t = U(e);
        return null != t ? (t[0] ?? null) : w(e, p.A);
    }
    getActiveMarketingComponentsBySurfaceUnprioritized(e) {
        if (!(0, f.Uy)(e)) return [];
        let t = a.bt[e];
        return U(t) ?? w(t, I.A);
    }
    hasPromotion(e) {
        return Object.values(O).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(O[h.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(O[h.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = O[h.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = O[h.pt.MARKETING_MOMENT],
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
        return Object.values(O[h.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    hasActiveBogoRewardPromotion() {
        return null !== this.getActiveBogoRewardPromotion();
    }
    get claimedOutboundPromotionCodes() {
        return G;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return x;
    }
}
let V = new B(l.h, {
    CAMPAIGN_OVERRIDE_SET: function (e) {
        return u.default.getCurrentUser()?.isStaff() === !0 && ((y = null == e.promotionId ? null : e), v(), !0);
    },
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        ((O = T()),
            (L = new Map()),
            (M = null),
            t.forEach((e) => {
                let t = c.A.createFromServer(e);
                ((O[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        let n = A.A.createFromServer(e, t),
                            i = n.properties.properties.oneofKind;
                        if (null != i) {
                            let e = L.get(i) ?? [];
                            (e.push(n), L.set(i, e));
                        }
                    }));
            }),
            (N = Date.now()),
            (S = !1),
            g.hasFetchedConsumedInboundPromotionId ||
                ((g.hasFetchedConsumedInboundPromotionId = !0), (g.consumedInboundPromotionId = n)));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        ((S = !0), (C = t));
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        ((O = T()), (L = new Map()), (M = null), (S = !1));
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        ((O = T()), (L = new Map()), (M = null), (S = !1), (N = Date.now()));
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(O[h.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = k();
        null != e && (R = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(O[h.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = k();
        null != e && ((R = e), (g.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        ((G = t), (x = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        ((G = []), (x = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            G.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        G = [...G, t];
    },
    LOGOUT: function () {
        ((y = null), (D = []), (g = m()), (S = !1), (N = null), (O = T()), L.clear(), (M = null), (G = []), (x = !1));
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? c.A.createFromServer(t.promotion) : null;
        ((M = A.A.createFromServer(t, n)), null != n && (O[n.promotionType][n.id] = n));
    },
});
n.d(t, {}, { A: V });
