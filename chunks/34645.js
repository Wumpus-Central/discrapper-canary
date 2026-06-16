n.d(t, { default: () => eu });
var s = n(627968),
    i = n(64700),
    l = n(17928),
    r = n(430993),
    a = n(289873),
    o = n(228366),
    u = n(73825),
    d = n(444927),
    c = n(964486),
    p = n(793574),
    S = n(688810),
    h = n(753390),
    A = n(86379),
    E = n(160946),
    I = n(545075),
    x = n(529427),
    j = n(197510),
    C = n(584160),
    M = n(480642),
    P = n(211159),
    g = n(832286),
    m = n(958340),
    _ = n(937008),
    L = n(166532),
    b = n(566980),
    O = n(314671),
    y = n(735305),
    G = n(343834),
    U = n(615310),
    k = n(925847),
    T = n(489254),
    f = n(71393),
    D = n(178368),
    H = n(97352),
    N = n(166403),
    R = n(174459),
    v = n(473145),
    B = n(83617),
    F = n(802790),
    w = n(636441),
    q = n(587491),
    W = n(285753),
    z = n(989351),
    J = n(619088),
    V = n(587187),
    K = n(526151),
    Y = n(130305),
    Q = n(121226),
    $ = n(303557),
    X = n(652215),
    Z = n(788868),
    ee = n(375708),
    et = n(898640);
function en(e) {
    let { transitionState: t, message: n, onClose: i } = e;
    return (0, s.jsxs)(M.Jg, {
        transitionState: t,
        size: "md",
        onClose: i,
        "aria-label": ee.intl.string(ee.t.q9EGps),
        children: [
            (0, s.jsx)(M.s3, { title: ee.intl.string(ee.t.q9EGps) }),
            (0, s.jsx)(r.c, { children: (0, s.jsx)("p", { className: et.C, children: n }) }),
        ],
    });
}
function es(e) {
    let { transitionState: t, onClose: n, onSubscriptionConfirmation: r, analyticsLocations: d } = e,
        {
            numGuildBoostsToPurchase: x,
            currency: j,
            setCurrency: C,
            setCurrencies: _,
            guildId: L,
            applicationId: y,
            analyticsLocation: G,
            analyticsSourceLocation: U,
        } = (0, K.Oe)(),
        { analyticsLocations: k } = (0, S.Ay)(d, p.A.GUILD_BOOST_PURCHASE_MODAL),
        {
            activeSubscription: T,
            paymentSourceId: D,
            purchaseState: v,
        } = (0, P.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            purchaseState: e.purchaseState,
        })),
        F = (0, A.Hp)(),
        w = (0, l.bG)([N.A], () => N.A.hasFetchedSubscriptions()),
        q = (0, E.Y)(),
        { hasFetchedPremiumSubscriptionPlan: W, premiumGuildSubscriptionPlanId: z } = (0, $.l)(),
        J = (0, l.bG)([H.A], () => H.A.get(z)?.skuId, [z]);
    (0, c.Ay)(() => {
        N.A.hasFetchedSubscriptions() || (0, h.hP)(),
            H.A.isLoadedForPremiumSKUs() || o.h.wait(() => (0, u.zS)()),
            null == L || null != f.A.getGuild(L) || null != m.A.getGuild(L) || m.A.isGuildFetching(L) || (0, g.y)(L),
            null != T &&
                null != T.renewalMutations &&
                R.default.track(X.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: G, guild_id: L });
    }),
        i.useEffect(() => {
            (0, B.c_)(D);
        }, [D]),
        i.useEffect(() => {
            let e;
            q &&
                (null != H.A.get(Z.gD.PREMIUM_MONTH_GUILD) && _((e = (0, B._w)(Z.gD.PREMIUM_MONTH_GUILD, D, !1))),
                null == D && null != T && null != T.paymentSourceId ? C(T.currency) : null != e && C(e[0]));
        }, [D, T, q, C, _]);
    let V = i.useMemo(() => ({ quantity: x }), [x]),
        Y = i.useCallback(() => (n(v === b.h.COMPLETED), Promise.resolve()), [n, v]);
    return F
        ? (0, s.jsx)(M.Jg, {
              transitionState: t,
              size: "md",
              onClose: Y,
              "aria-label": ee.intl.string(ee.t.q9EGps),
              children: (0, s.jsx)(I.oO, {}),
          })
        : null != T && T.isPausedOrPausePending && !T.isPausedAllowsUpdatesButNotResume
          ? (0, s.jsx)(en, { transitionState: t, message: ee.intl.string(ee.t.mOWsF1), onClose: Y })
          : null != T && null != T.renewalMutations
            ? (0, s.jsx)(en, { transitionState: t, message: ee.intl.string(ee.t.npfhh0), onClose: Y })
            : w && W && null != j && "" !== j
              ? (0, s.jsx)(ei, {
                    transitionState: t,
                    onClose: n,
                    children: (0, s.jsx)(O.q, {
                        analyticsLocations: k,
                        analyticsObject: G,
                        analyticsSourceLocation: U,
                        transitionState: t,
                        onClose: n,
                        initialPlanId: null,
                        subscriptionTier: null,
                        planGroup: [],
                        skuId: J ?? null,
                        applicationId: y,
                        guildId: L ?? void 0,
                        onSubscriptionConfirmation: r,
                        renderHeader: er,
                        skipUnifiedHeaderForSteps: ea,
                        disableUnsupportedExternalSubscriptionHandler: !0,
                        isMediumModal: !0,
                        analyticsDataOverride: V,
                    }),
                })
              : (0, s.jsx)(M.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: Y,
                    "aria-label": ee.intl.string(ee.t.q9EGps),
                    children: (0, s.jsx)("div", { className: et._5, children: (0, s.jsx)(a.y, {}) }),
                });
}
function ei(e) {
    let { transitionState: t, onClose: n, children: i } = e,
        { numGuildBoostsToPurchase: l, guildId: r, existingAvailableSlotCount: a } = (0, K.Oe)(),
        o = (0, P.t4)((e) => e.purchaseState),
        u = (0, U.bB)(),
        d = (0, T.n)("GuildBoostPurchaseModal"),
        c = d && (u === L.pn.REVIEW || u === L.pn.CONFIRM),
        p = (0, W.A)(c);
    return d && u === L.pn.CONFIRM
        ? (0, s.jsx)(q.A, {
              mediaUrls: p.mediaUrls,
              isSuccess: p.isSuccess,
              transitionState: t,
              onClose: () => (n(o === b.h.COMPLETED), Promise.resolve()),
              children: (e, n) =>
                  (0, s.jsx)(w.A, {
                      transitionState: t,
                      guild: f.A.getGuild(r),
                      guildBoostQuantity: l + a,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : i;
}
function el(e) {
    let { step: t, onClose: n } = e,
        i = (0, T.n)("GuildBoostPurchaseModal"),
        l = (0, P.t4)((e) => e.purchaseState);
    return i
        ? (0, s.jsx)(M.s3, { title: (0, C.u)({ skuId: null, step: t }).title })
        : (0, s.jsx)(F.A, { onClose: () => n(l === b.h.COMPLETED), currentStep: t, purchaseState: l });
}
let er = (e, t, n) =>
        n === L.pn.PREMIUM_UPSELL
            ? null
            : n === L.pn.REVIEW
              ? (0, s.jsx)(M.s3, { ...(0, C.u)({ skuId: e?.skuId ?? null, step: n }) })
              : (0, s.jsx)(el, { step: n, onClose: t }),
    ea = [L.pn.PLAN_SELECT];
function eo(e) {
    return (0, s.jsx)(es, { ...e });
}
function eu(e) {
    let {
            totalNumberOfSlotsToAssign: t = 1,
            disablePremiumUpsell: n,
            closeGuildPerksModal: r,
            guildId: a,
            analyticsLocation: o,
            analyticsSourceLocation: u,
            applicationId: c,
            intent: h,
            onSubscribeComplete: A,
        } = e,
        E = (0, l.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        { analyticsLocations: I } = (0, S.Ay)(p.A.GUILD_BOOST_PURCHASE_MODAL),
        C = (0, d.A)(() => t - (0, v.D$)(D.A.boostSlots).length),
        M = i.useMemo(() => (0, k.A)() ?? void 0, []);
    return (0, s.jsx)(S.f5, {
        value: I,
        children: (0, s.jsx)(j.M, {
            activeSubscription: E,
            stepConfigs: ed,
            skuIDs: [],
            loadId: M,
            unifiedCheckoutFlow: x.CL.GUILD_BOOST_CHECKOUT,
            children: (0, s.jsx)(_.Mq, {
                children: (0, s.jsxs)(K.mf, {
                    initialNumGuildBoostsToPurchase: C,
                    disablePremiumUpsell: n,
                    closeGuildPerksModal: r,
                    guildId: a ?? null,
                    analyticsLocation: o,
                    analyticsSourceLocation: u,
                    applicationId: c,
                    intent: h,
                    onSubscribeComplete: A,
                    children: [(0, s.jsx)(Q.B, {}), (0, s.jsx)(eo, { ...e })],
                }),
            }),
        }),
    });
}
let ed = [
    { key: L.pn.PLAN_SELECT, renderStep: (e) => (0, s.jsx)(J.c, { ...e }), options: { renderHeader: !0 } },
    {
        key: L.pn.PREMIUM_UPSELL,
        renderStep: (e) => (0, s.jsx)(V.d, { ...e }),
        options: { renderHeader: !1, hideSlider: !0 },
    },
    { key: L.pn.ADD_PAYMENT_STEPS, renderStep: (e) => (0, s.jsx)(y.x, { ...e }), options: { renderHeader: !0 } },
    { key: L.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, s.jsx)(G.A, {}), options: { renderHeader: !0 } },
    { key: L.pn.REVIEW, renderStep: (e) => (0, s.jsx)(Y.b, { ...e }), options: { renderHeader: !0 } },
    { key: L.pn.CONFIRM, renderStep: (e) => (0, s.jsx)(z.H, { ...e }), options: { renderHeader: !0 } },
];
