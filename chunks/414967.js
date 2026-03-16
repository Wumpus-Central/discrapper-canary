n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(877624),
    l = n(397927),
    a = n(73153),
    s = n(272355),
    o = n(835095),
    d = n(287809),
    c = n(816733),
    u = n(536194),
    A = n(40185),
    h = n(412260),
    _ = n(852218),
    m = n(231265),
    g = n(979080);
let p = "PremiumServerDriveAnnouncementModal";
class E extends s.A {
    _initialize() {
        a.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            a.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            a.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            a.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    _terminate() {
        a.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            a.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            a.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            a.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = c.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === r.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => o.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(h.A.promotionsByType[_.pt.MARKETING_MOMENT]));
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, r, a) => {
        if ((0, l.kBI)(p)) return !1;
        let s = (0, g.H)({ promotionId: t, content: r, isPreview: a });
        if (null != s)
            return (
                (!1 !== a || s?.contentIdentifier !== "summer_bogo_content" || !!(await (0, m.C)())) &&
                ((0, l.mMO)(
                    async () => {
                        let { default: r } = await Promise.resolve().then(n.bind(n, 979080));
                        return (n) =>
                            (0, i.jsx)(r, { renderModalProps: n, componentId: e, promotionId: t, properties: s });
                    },
                    { modalKey: p },
                ),
                !0)
            );
        return !1;
    };
    handlePreview = (e) => {
        let { data: t } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, A.hb)(), u.P.isDisallowPopupsSet())) return;
        let e = d.default.getCurrentUser();
        if (null != e && !e.verified) return;
    };
}
let I = new E();
