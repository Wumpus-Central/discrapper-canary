s.d(t, { default: () => eu });
var n = s(627968),
    i = s(64700),
    l = s(17928),
    r = s(430993),
    a = s(289873),
    o = s(228366),
    u = s(73825),
    d = s(444927),
    c = s(964486),
    p = s(793574),
    S = s(688810),
    h = s(753390),
    A = s(86379),
    x = s(545075),
    C = s(529427),
    E = s(197510),
    j = s(655857),
    I = s(584160),
    P = s(480642),
    m = s(211159),
    M = s(832286),
    b = s(958340),
    g = s(937008),
    y = s(166532),
    L = s(566980),
    O = s(829850),
    _ = s(735305),
    k = s(343834),
    G = s(615310),
    U = s(925847),
    T = s(489254),
    f = s(71393),
    D = s(178368),
    H = s(97352),
    N = s(166403),
    R = s(174459),
    v = s(473145),
    B = s(83617),
    F = s(802790),
    q = s(636441),
    w = s(587491),
    W = s(285753),
    z = s(989351),
    J = s(619088),
    V = s(587187),
    K = s(526151),
    Q = s(130305),
    Y = s(121226),
    $ = s(303557),
    X = s(469633),
    Z = s(652215),
    ee = s(375708),
    et = s(898640);
function es(e) {
    let { transitionState: t, message: s, onClose: i } = e;
    return (0, n.jsxs)(P.Jg, {
        transitionState: t,
        size: "md",
        onClose: i,
        "aria-label": ee.intl.string(ee.t.q9EGps),
        children: [
            (0, n.jsx)(P.s3, { title: ee.intl.string(ee.t.q9EGps) }),
            (0, n.jsx)(r.c, { children: (0, n.jsx)("p", { className: et.C, children: s }) }),
        ],
    });
}
function en(e) {
    let { transitionState: t, onClose: s, onSubscriptionConfirmation: r, analyticsLocations: d } = e,
        {
            numGuildBoostsToPurchase: C,
            guildId: E,
            applicationId: I,
            analyticsLocation: g,
            analyticsSourceLocation: y,
        } = (0, K.Oe)(),
        { displayCurrency: _, hasFetchedRelatedSubscriptionPlans: k } = (0, j.Jn)(),
        { analyticsLocations: G } = (0, S.Ay)(d, p.A.GUILD_BOOST_PURCHASE_MODAL),
        {
            activeSubscription: U,
            paymentSourceId: T,
            purchaseState: D,
        } = (0, m.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            purchaseState: e.purchaseState,
        })),
        v = (0, A.Hp)(),
        F = (0, l.bG)([N.A], () => N.A.hasFetchedSubscriptions()),
        { hasFetchedAdditionalPlans: q, premiumGuildSubscriptionPlanId: w } = (0, $.l)(),
        W = (0, l.bG)([H.A], () => H.A.get(w)?.skuId, [w]);
    (0, c.Ay)(() => {
        N.A.hasFetchedSubscriptions() || (0, h.hP)(),
            H.A.isLoadedForPremiumSKUs() || o.h.wait(() => (0, u.zS)()),
            null == E || null != f.A.getGuild(E) || null != b.A.getGuild(E) || b.A.isGuildFetching(E) || (0, M.y)(E),
            null != U &&
                null != U.renewalMutations &&
                R.default.track(Z.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: g, guild_id: E });
    }),
        i.useEffect(() => {
            (0, B.c_)(T);
        }, [T]);
    let z = i.useMemo(() => ({ quantity: C }), [C]),
        J = i.useCallback(() => (s(D === L.h.COMPLETED), Promise.resolve()), [s, D]);
    return v
        ? (0, n.jsx)(P.Jg, {
              transitionState: t,
              size: "md",
              onClose: J,
              "aria-label": ee.intl.string(ee.t.q9EGps),
              children: (0, n.jsx)(x.oO, {}),
          })
        : null != U && U.isPausedOrPausePending && !U.isPausedAllowsUpdatesButNotResume
          ? (0, n.jsx)(es, { transitionState: t, message: ee.intl.string(ee.t.mOWsF1), onClose: J })
          : null != U && null != U.renewalMutations
            ? (0, n.jsx)(es, { transitionState: t, message: ee.intl.string(ee.t.npfhh0), onClose: J })
            : F && q && k && null != _ && "" !== _
              ? (0, n.jsx)(ei, {
                    transitionState: t,
                    onClose: s,
                    children: (0, n.jsx)(O.q, {
                        analyticsLocations: G,
                        analyticsObject: g,
                        analyticsSourceLocation: y,
                        transitionState: t,
                        onClose: s,
                        initialPlanId: null,
                        subscriptionTier: null,
                        planGroup: [],
                        skuId: W ?? null,
                        applicationId: I,
                        guildId: E ?? void 0,
                        onSubscriptionConfirmation: r,
                        renderHeader: er,
                        skipUnifiedHeaderForSteps: ea,
                        disableUnsupportedExternalSubscriptionHandler: !0,
                        isMediumModal: !0,
                        analyticsDataOverride: z,
                    }),
                })
              : (0, n.jsx)(P.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: J,
                    "aria-label": ee.intl.string(ee.t.q9EGps),
                    children: (0, n.jsx)("div", { className: et._5, children: (0, n.jsx)(a.y, {}) }),
                });
}
function ei(e) {
    let { transitionState: t, onClose: s, children: i } = e,
        { numGuildBoostsToPurchase: l, guildId: r, existingAvailableSlotCount: a } = (0, K.Oe)(),
        o = (0, m.t4)((e) => e.purchaseState),
        u = (0, G.bB)(),
        d = (0, T.n)("GuildBoostPurchaseModal"),
        c = d && (u === y.pn.REVIEW || u === y.pn.CONFIRM),
        p = (0, W.A)(c);
    return d && u === y.pn.CONFIRM
        ? (0, n.jsx)(w.A, {
              mediaUrls: p.mediaUrls,
              isSuccess: p.isSuccess,
              transitionState: t,
              onClose: () => (s(o === L.h.COMPLETED), Promise.resolve()),
              children: (e, s) =>
                  (0, n.jsx)(q.A, {
                      transitionState: t,
                      guild: f.A.getGuild(r),
                      guildBoostQuantity: l + a,
                      isTransfer: !1,
                      graphic: e,
                      onClose: s,
                  }),
          })
        : i;
}
function el(e) {
    let { step: t, onClose: s } = e,
        i = (0, T.n)("GuildBoostPurchaseModal"),
        l = (0, m.t4)((e) => e.purchaseState);
    return i
        ? (0, n.jsx)(P.s3, { title: (0, I.u)({ skuId: null, step: t }).title })
        : (0, n.jsx)(F.A, { onClose: () => s(l === L.h.COMPLETED), currentStep: t, purchaseState: l });
}
let er = (e, t, s) =>
        s === y.pn.PREMIUM_UPSELL
            ? null
            : s === y.pn.REVIEW
              ? (0, n.jsx)(P.s3, { ...(0, I.u)({ skuId: e?.skuId ?? null, step: s }) })
              : (0, n.jsx)(el, { step: s, onClose: t }),
    ea = [y.pn.PLAN_SELECT];
function eo(e) {
    return (0, n.jsx)(en, { ...e });
}
function eu(e) {
    let {
            totalNumberOfSlotsToAssign: t = 1,
            disablePremiumUpsell: s,
            closeGuildPerksModal: r,
            guildId: a,
            analyticsLocation: o,
            analyticsSourceLocation: u,
            applicationId: c,
            intent: h,
            onSubscribeComplete: A,
        } = e,
        x = (0, l.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        { analyticsLocations: j } = (0, S.Ay)(p.A.GUILD_BOOST_PURCHASE_MODAL),
        I = (0, d.A)(() => t - (0, v.D$)(D.A.boostSlots).length),
        P = i.useMemo(() => (0, U.A)() ?? void 0, []);
    return (0, n.jsx)(S.f5, {
        value: j,
        children: (0, n.jsx)(E.M, {
            activeSubscription: x,
            stepConfigs: ed,
            skuIDs: [],
            currencySkuIDs: X.q,
            loadId: P,
            unifiedCheckoutFlow: C.CL.GUILD_BOOST_CHECKOUT,
            children: (0, n.jsx)(g.Mq, {
                children: (0, n.jsxs)(K.mf, {
                    initialNumGuildBoostsToPurchase: I,
                    disablePremiumUpsell: s,
                    closeGuildPerksModal: r,
                    guildId: a ?? null,
                    analyticsLocation: o,
                    analyticsSourceLocation: u,
                    applicationId: c,
                    intent: h,
                    onSubscribeComplete: A,
                    children: [(0, n.jsx)(Y.B, {}), (0, n.jsx)(eo, { ...e })],
                }),
            }),
        }),
    });
}
let ed = [
    { key: y.pn.PLAN_SELECT, renderStep: (e) => (0, n.jsx)(J.c, { ...e }), options: { renderHeader: !0 } },
    {
        key: y.pn.PREMIUM_UPSELL,
        renderStep: (e) => (0, n.jsx)(V.d, { ...e }),
        options: { renderHeader: !1, hideSlider: !0 },
    },
    { key: y.pn.ADD_PAYMENT_STEPS, renderStep: (e) => (0, n.jsx)(_.x, { ...e }), options: { renderHeader: !0 } },
    { key: y.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, n.jsx)(k.A, {}), options: { renderHeader: !0 } },
    { key: y.pn.REVIEW, renderStep: (e) => (0, n.jsx)(Q.b, { ...e }), options: { renderHeader: !0 } },
    { key: y.pn.CONFIRM, renderStep: (e) => (0, n.jsx)(z.H, { ...e }), options: { renderHeader: !0 } },
];
