n.d(t, {
    A: () => L,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(607399),
    l = n(877624),
    a = n(554146),
    s = n(397927),
    o = n(73153),
    c = n(272355),
    u = n(826673),
    d = n(579364),
    p = n(835095),
    f = n(287809),
    h = n(816733),
    A = n(927578),
    g = n(536194),
    m = n(661191),
    b = n(40185),
    _ = n(89366),
    E = n(637073),
    O = n(91435),
    y = n(89465),
    I = n(50283),
    v = n(412260),
    S = n(852218),
    C = n(231265),
    N = n(93751),
    T = n(979080),
    j = n(788868);

function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let P = "PremiumServerDriveAnnouncementModal";
class w extends c.A {
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
    constructor(...e) {
        super(...e),
            x(this, "maybeShowAnnouncementModalFromPromotions", (e) => {
                for (let t of e)
                    if (null != t.marketingComponents) {
                        if (null != t.trialId) {
                            let e = h.A.getUserTrialOffer(t.trialId);
                            if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                        }
                        for (let e of t.marketingComponents)
                            if (e.component_type === l.C.ANNOUNCEMENT_MODAL)
                                return void this.maybeOpenServerDriveAnnouncementModal(
                                    e.id,
                                    e.promotion_id,
                                    e.properties,
                                    !1,
                                );
                    }
            }),
            x(this, "handleActivePromotionsFetchSuccess", (e) => {
                let { promotions: t } = e;
                this.maybeShowAnnouncementModalFromPromotions(t.map((e) => p.A.createFromServer(e)));
            }),
            x(this, "handleUserOfferFetchSuccess", (e) => {
                let { userTrialOffer: t } = e;
                null != t &&
                    this.maybeShowAnnouncementModalFromPromotions(
                        Object.values(v.A.promotionsByType[S.pt.MARKETING_MOMENT]),
                    );
            }),
            x(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i, l) => {
                if ((0, s.kBI)(P)) return !1;
                let a = (0, T.H)({
                    promotionId: t,
                    content: i,
                    isPreview: l,
                });
                if (null != a)
                    return (
                        (!1 !== l ||
                            (null == a ? void 0 : a.contentIdentifier) !== "summer_bogo_content" ||
                            !!(await (0, C.C)())) &&
                        ((0, s.mMO)(
                            async () => {
                                let { default: i } = await Promise.resolve().then(n.bind(n, 979080));
                                return (n) =>
                                    (0, r.jsx)(i, {
                                        renderModalProps: n,
                                        componentId: e,
                                        promotionId: t,
                                        properties: a,
                                    });
                            },
                            {
                                modalKey: P,
                            },
                        ),
                        !0)
                    );
                return !1;
            }),
            x(this, "handlePreview", (e) => {
                let { data: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
            }),
            x(this, "getOfferFromStore", () => {
                let e = f.default.getCurrentUser();
                if ((0, A.TW)(e)) return {};
                let t = [j.TU, j.KG, j.lj, j.HF]
                    .map((e) => h.A.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, d.w)(e))
                    .shift();
                if (null != t)
                    return {
                        userDiscountOffer: t,
                    };
                let n = (0, _.qD)();
                return null != n
                    ? {
                          userTrialOffer: n,
                      }
                    : {};
            }),
            x(this, "mayShowAnnouncementModal", async () => {
                if ((await (0, b.hb)(), g.P.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = y.A.getCurrentConfig(
                        {
                            location: "announcementManager",
                        },
                        {
                            autoTrackExposure: !1,
                        },
                    ).enabled,
                    n = (0, O.r)({
                        location: "mayShowAnnouncementModal",
                    }),
                    r = (0, u.k8)(a.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
                    l = f.default.getCurrentUser();
                if (
                    (!t ||
                        r ||
                        (0, s.ueM)() ||
                        (0, A.TW)(l) ||
                        ((await (0, E.m)(e.userTrialOffer)) &&
                            (0, N.A)({
                                upsellType: j.e.REVERSE_TRIAL_FOLLOWUP_UPSELL,
                            })),
                    (null == l || l.verified) && !(0, s.ueM)() && !i.Fr && !n)
                ) {
                    for (let t of await (0, I._C)(e))
                        if (
                            await this.maybeOpenServerDriveAnnouncementModal(
                                "",
                                m.default.fromTimestamp(Date.now()),
                                t,
                                !1,
                            )
                        )
                            break;
                }
            });
    }
}
let L = new w();
