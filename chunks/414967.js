n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var r = n(877624),
    a = n(554146),
    l = n(397927),
    s = n(73153),
    o = n(272355),
    d = n(826673),
    c = n(579364),
    u = n(835095),
    A = n(287809),
    h = n(816733),
    _ = n(927578),
    m = n(536194),
    p = n(40185),
    g = n(89366),
    E = n(637073),
    f = n(89465),
    I = n(412260),
    C = n(852218),
    N = n(231265),
    T = n(93751),
    S = n(979080),
    x = n(788868);
let v = "PremiumServerDriveAnnouncementModal";
class b extends o.A {
    _initialize() {
        s.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            s.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            s.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            s.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    _terminate() {
        s.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            s.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            s.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            s.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = h.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === r.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => u.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(I.A.promotionsByType[C.pt.MARKETING_MOMENT]));
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, r, a) => {
        if ((0, l.kBI)(v)) return !1;
        let s = (0, S.H)({ promotionId: t, content: r, isPreview: a });
        if (null != s)
            return (
                (!1 !== a || s?.contentIdentifier !== "summer_bogo_content" || !!(await (0, N.C)())) &&
                ((0, l.mMO)(
                    async () => {
                        let { default: r } = await Promise.resolve().then(n.bind(n, 979080));
                        return (n) =>
                            (0, i.jsx)(r, { renderModalProps: n, componentId: e, promotionId: t, properties: s });
                    },
                    { modalKey: v },
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
        let e = A.default.getCurrentUser();
        if ((0, _.TW)(e)) return {};
        let t = [x.TU, x.KG, x.lj, x.HF]
            .map((e) => h.A.getUserDiscountOffer(e))
            .filter((e) => null != e && !(0, c.w)(e))
            .shift();
        if (null != t) return { userDiscountOffer: t };
        let n = (0, g.qD)();
        return null != n ? { userTrialOffer: n } : {};
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, p.hb)(), m.P.isDisallowPopupsSet())) return;
        let e = this.getOfferFromStore(),
            t = f.A.getCurrentConfig({ location: "announcementManager" }, { autoTrackExposure: !1 }).enabled,
            n = (0, d.k8)(a.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
            i = A.default.getCurrentUser();
        if (
            (!t ||
                n ||
                (0, l.ueM)() ||
                (0, _.TW)(i) ||
                ((await (0, E.m)(e.userTrialOffer)) && (0, T.A)({ upsellType: x.e.REVERSE_TRIAL_FOLLOWUP_UPSELL })),
            null != i && !i.verified)
        )
            return;
    };
}
let y = new b();
