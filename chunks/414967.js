n.d(t, { A: () => P });
var i = n(627968);
n(64700);
var r = n(607399),
    a = n(877624),
    l = n(554146),
    s = n(397927),
    o = n(73153),
    d = n(272355),
    c = n(826673),
    u = n(579364),
    A = n(835095),
    h = n(287809),
    _ = n(816733),
    m = n(927578),
    p = n(536194),
    g = n(661191),
    E = n(40185),
    f = n(89366),
    I = n(637073),
    C = n(91435),
    N = n(89465),
    T = n(50283),
    S = n(412260),
    x = n(852218),
    v = n(231265),
    b = n(93751),
    y = n(979080),
    L = n(788868);
let O = "PremiumServerDriveAnnouncementModal";
class R extends d.A {
    _initialize() {
        o.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            o.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            o.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            o.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    _terminate() {
        o.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            o.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            o.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            o.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = _.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === a.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => A.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(S.A.promotionsByType[x.pt.MARKETING_MOMENT]));
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, r, a) => {
        if ((0, s.kBI)(O)) return !1;
        let l = (0, y.H)({ promotionId: t, content: r, isPreview: a });
        if (null != l)
            return (
                (!1 !== a || l?.contentIdentifier !== "summer_bogo_content" || !!(await (0, v.C)())) &&
                ((0, s.mMO)(
                    async () => {
                        let { default: r } = await Promise.resolve().then(n.bind(n, 979080));
                        return (n) =>
                            (0, i.jsx)(r, { renderModalProps: n, componentId: e, promotionId: t, properties: l });
                    },
                    { modalKey: O },
                ),
                !0)
            );
        return !1;
    };
    handlePreview = (e) => {
        let { data: t } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
    };
    getOfferFromStore = () => {
        let e = h.default.getCurrentUser();
        if ((0, m.TW)(e)) return {};
        let t = [L.TU, L.KG, L.lj, L.HF]
            .map((e) => _.A.getUserDiscountOffer(e))
            .filter((e) => null != e && !(0, u.w)(e))
            .shift();
        if (null != t) return { userDiscountOffer: t };
        let n = (0, f.qD)();
        return null != n ? { userTrialOffer: n } : {};
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, E.hb)(), p.P.isDisallowPopupsSet())) return;
        let e = this.getOfferFromStore(),
            t = N.A.getCurrentConfig({ location: "announcementManager" }, { autoTrackExposure: !1 }).enabled,
            n = (0, C.r)({ location: "mayShowAnnouncementModal" }),
            i = (0, c.k8)(l.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
            a = h.default.getCurrentUser();
        if (
            (!t ||
                i ||
                (0, s.ueM)() ||
                (0, m.TW)(a) ||
                ((await (0, I.m)(e.userTrialOffer)) && (0, b.A)({ upsellType: L.e.REVERSE_TRIAL_FOLLOWUP_UPSELL })),
            (null == a || a.verified) && !(0, s.ueM)() && !r.Fr && !n)
        ) {
            for (let t of await (0, T._)(e))
                if (await this.maybeOpenServerDriveAnnouncementModal("", g.default.fromTimestamp(Date.now()), t, !1))
                    break;
        }
    };
}
let P = new R();
