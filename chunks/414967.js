n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var a = n(877624),
    l = n(397927),
    r = n(73153),
    s = n(272355),
    o = n(835095),
    d = n(287809),
    c = n(816733),
    u = n(536194),
    A = n(40185),
    h = n(881489),
    _ = n(412260),
    m = n(852218),
    p = n(231265),
    g = n(979080),
    E = n(652215);
let I = "PremiumServerDriveAnnouncementModal";
class f extends s.A {
    _initialize() {
        r.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            r.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            r.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            r.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            r.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    _terminate() {
        r.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            r.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            r.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            r.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            r.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = c.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === a.C.ANNOUNCEMENT_MODAL)
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
            this.maybeShowAnnouncementModalFromPromotions(Object.values(_.A.promotionsByType[m.pt.MARKETING_MOMENT]));
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        u.P.isDisallowPopupsSet() || t.source_type !== E.GD.REVERSE_TRIAL || (0, h.al)();
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, a, r) => {
        if ((0, l.kBI)(I)) return !1;
        let s = (0, g.H)({ promotionId: t, content: a, isPreview: r });
        if (null != s)
            return (
                (!1 !== r || s?.contentIdentifier !== "summer_bogo_content" || !!(await (0, p.C)())) &&
                ((0, l.mMO)(
                    async () => {
                        let { default: a } = await Promise.resolve().then(n.bind(n, 979080));
                        return (n) =>
                            (0, i.jsx)(a, { renderModalProps: n, componentId: e, promotionId: t, properties: s });
                    },
                    { modalKey: I },
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
        (null == e || e.verified) && ((0, h.al)(), (0, h.QM)());
    };
}
let C = new f();
