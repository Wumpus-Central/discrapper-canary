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
    I = n(891786);
function p() {
    return {
        hasFetchedConsumedInboundPromotionId: !1,
        consumedInboundPromotionId: null,
        lastSeenOutboundPromotionStartDate: null,
    };
}
let m = p();
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
let g = !1,
    S = null,
    N = null,
    C = T(),
    O = null,
    R = new Map(),
    L = null,
    y = [],
    D = (0, _.L_)((e, t, i, r) => {
        let { resolveCampaignComponents: a } = n(547515);
        return a(e.components, t, i, e.endDate, r);
    });
function b() {
    let e = u.default.getCurrentUser(),
        t = [];
    if (null != L && e?.isStaff() === !0) {
        let n = E.A.hasPremiumTypeOverride(e) ? E.A.getPremiumTypeOverride() : void 0;
        t = D(L, e, o.default.locale, n);
    }
    return !r().isEqual(t, y) && ((y = t), !0);
}
function v() {
    return null != L && b();
}
let P = null,
    M = [],
    U = !1;
function w() {
    let e = null;
    for (let t of Object.values(C[h.pt.THIRD_PARTY_OUTBOUND])) (null == e || t.startDate > e) && (e = t.startDate);
    return e?.toISOString() ?? null;
}
function G() {
    O = d.A.settings.userContent?.lastDismissedOutboundPromotionStartDate?.value ?? null;
}
class x extends s.Ay.PersistedStore {
    static displayName = "PromotionsStore";
    static persistKey = "PromotionsPersistedStore";
    initialize(e) {
        (null != e && (m = e),
            this.waitFor(d.A, u.default, o.default, E.A),
            this.syncWith([u.default, o.default, E.A], v),
            this.syncWith([d.A], G));
    }
    get outboundPromotions() {
        return Object.values(C[h.pt.THIRD_PARTY_OUTBOUND]);
    }
    get outboundRecurringPromotions() {
        return Object.values(C[h.pt.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
    get lastSeenOutboundPromotionStartDate() {
        return m.lastSeenOutboundPromotionStartDate;
    }
    get lastDismissedOutboundPromotionStartDate() {
        return O;
    }
    get lastFetchedActivePromotions() {
        return S;
    }
    get lastFetchedActivePromotionsLocale() {
        return N;
    }
    get isFetchingActivePromotions() {
        return g;
    }
    get hasFetchedConsumedInboundPromotionId() {
        return m.hasFetchedConsumedInboundPromotionId;
    }
    get consumedInboundPromotionId() {
        return m.consumedInboundPromotionId;
    }
    get promotionsByType() {
        return C;
    }
    getPromotionByTypeAndId(e, t) {
        return C[e]?.[t];
    }
    getMarketingPromotionForEligibility(e) {
        return this.campaignOverrideId === e ? null : this.getPromotionByTypeAndId(h.pt.MARKETING_MOMENT, e);
    }
    getPromotionByTypeAndKey(e, t) {
        return Object.values(C[e]).find((e) => e.promotionKey === t);
    }
    getState() {
        return m;
    }
    getMarketingComponentsBySurfaceAcrossPromotions(e) {
        if (!(0, f.Uy)(e)) return [];
        let t = a.bt[e];
        return null != L && u.default.getCurrentUser()?.isStaff() === !0
            ? this.campaignOverrideComponents.filter((e) => e.properties.properties.oneofKind === t)
            : P?.properties.properties.oneofKind === t
              ? [P]
              : (R.get(t) ?? []);
    }
    get campaignOverrideId() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? null : (L?.promotionId ?? null);
    }
    get campaignOverrideRows() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? [] : (L?.components ?? []);
    }
    get campaignOverrideComponents() {
        return u.default.getCurrentUser()?.isStaff() !== !0 ? [] : y;
    }
    getMarketingComponentBySurface(e) {
        return (0, f.Uy)(e) ? this.getMarketingComponentByKind(a.bt[e]) : null;
    }
    getMarketingComponentByKind(e) {
        if (null != L && u.default.getCurrentUser()?.isStaff() === !0)
            return this.campaignOverrideComponents.find((t) => t.properties.properties.oneofKind === e) ?? null;
        if (P?.properties.properties.oneofKind === e) return P;
        let t = u.default.getCurrentUser(),
            n = new Date();
        return (0, I.A)(R.get(e) ?? [], n, (e) => null != t && e.isIncludedInRollout(t.id, n));
    }
    hasPromotion(e) {
        return Object.values(C).some((t) => Object.values(t).some((t) => t.promotionKey === e));
    }
    getPromotionsByPartner(e) {
        return {
            oneTime: Object.values(C[h.pt.THIRD_PARTY_OUTBOUND]).filter((t) => t.partnerId === e),
            recurring: Object.values(C[h.pt.THIRD_PARTY_OUTBOUND_RECURRING]).filter((t) => t.partnerId === e),
        };
    }
    getGiftPromotion() {
        let e = C[h.pt.GIFT_PROMOTION],
            t = Object.keys(e);
        return 0 === t.length ? null : e[t[0]];
    }
    getGiftPromotionRewardSkuIds() {
        return this.getGiftPromotion()?.rewardSkuIds ?? [];
    }
    getMarketingMomentPromotion() {
        let e = C[h.pt.MARKETING_MOMENT],
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
        return Object.values(C[h.pt.MARKETING_MOMENT]).find((t) => t.hasBogoReward && t.endDate >= e) ?? null;
    }
    hasActiveBogoRewardPromotion() {
        return null !== this.getActiveBogoRewardPromotion();
    }
    get claimedOutboundPromotionCodes() {
        return M;
    }
    get claimedOutboundPromotionCodesLoaded() {
        return U;
    }
}
let k = new x(l.h, {
    CAMPAIGN_OVERRIDE_SET: function (e) {
        return u.default.getCurrentUser()?.isStaff() === !0 && ((L = null == e.promotionId ? null : e), b(), !0);
    },
    ACTIVE_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { promotions: t, consumedInboundPromotionId: n } = e;
        ((C = T()),
            (R = new Map()),
            (P = null),
            t.forEach((e) => {
                let t = c.A.createFromServer(e);
                ((C[e.promotion_type][e.id] = t),
                    e.marketing_components?.forEach((e) => {
                        let n = A.A.createFromServer(e, t),
                            i = n.properties.properties.oneofKind;
                        if (null != i) {
                            let e = R.get(i) ?? [];
                            (e.push(n), R.set(i, e));
                        }
                    }));
            }),
            (S = Date.now()),
            (g = !1),
            m.hasFetchedConsumedInboundPromotionId ||
                ((m.hasFetchedConsumedInboundPromotionId = !0), (m.consumedInboundPromotionId = n)));
    },
    ACTIVE_PROMOTIONS_FETCH: function (e) {
        let { locale: t } = e;
        ((g = !0), (N = t));
    },
    ACTIVE_PROMOTIONS_FETCH_FAIL: function () {
        ((C = T()), (R = new Map()), (P = null), (g = !1));
    },
    ACTIVE_PROMOTIONS_CLEAR: function () {
        ((C = T()), (R = new Map()), (P = null), (g = !1), (S = Date.now()));
    },
    OUTBOUND_PROMOTION_NOTICE_DISMISS: function () {
        if (0 === Object.values(C[h.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = w();
        null != e && (O = e);
    },
    OUTBOUND_PROMOTIONS_SEEN: function () {
        if (0 === Object.values(C[h.pt.THIRD_PARTY_OUTBOUND]).length) return !1;
        let e = w();
        null != e && ((O = e), (m.lastSeenOutboundPromotionStartDate = e));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function (e) {
        let { claimedOutboundPromotionCodes: t } = e;
        ((M = t), (U = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function (e) {
        ((M = []), (U = !0));
    },
    CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function (e) {
        let { claimedOutboundPromotionCode: t } = e;
        if (
            M.some((e) => {
                let { promotion: n } = e;
                return n.id === t.promotion.id;
            })
        )
            return !1;
        M = [...M, t];
    },
    LOGOUT: function () {
        ((L = null), (y = []), (m = p()), (g = !1), (S = null), (C = T()), R.clear(), (P = null), (M = []), (U = !1));
    },
    PREMIUM_MARKETING_PREVIEW: function (e) {
        let { data: t } = e,
            n = null != t.promotion ? c.A.createFromServer(t.promotion) : null;
        ((P = A.A.createFromServer(t, n)), null != n && (C[n.promotionType][n.id] = n));
    },
});
n.d(t, {}, { A: k });
