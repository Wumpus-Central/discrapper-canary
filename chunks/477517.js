n.d(t, { E: () => e4, default: () => e5, STEPS: () => e3 });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(73825),
    o = n(793574),
    d = n(688810),
    u = n(120700),
    c = n(197510),
    p = n(426398),
    S = n(558620),
    m = n(211159),
    E = n(960851),
    I = n(380619),
    g = n(607399),
    h = n(795791),
    x = n(788868),
    A = n(561794),
    f = n(97352),
    T = n(166403),
    P = n(937008),
    j = n(166532),
    _ = n(491057),
    b = n(566980),
    k = n(314671),
    v = n(735305),
    C = n(343834),
    y = n(926795),
    R = n(862241),
    M = n(615310),
    N = n(811656),
    O = n(394584),
    L = n(20742),
    w = n(430993),
    U = n(331322),
    G = n(71804),
    B = n(503698),
    D = n.n(B),
    H = n(575593),
    F = n(778712),
    W = n(187322),
    z = n(890856),
    V = n(947641),
    K = n(661531),
    Y = n(534514),
    q = n(834730),
    Q = n(713517),
    X = n(674658),
    Z = n(898461),
    $ = n(837015),
    J = n(929283),
    ee = n(761365),
    et = n(375708),
    en = n(267861);
let el = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: o, selectedSkuId: d } = e,
        [u, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        S = i.useMemo(() => ({ current: u }), [u]),
        { isHoveringOrFocusing: m } = (0, Q.A)(S),
        E = !a && m,
        { product: I } = (0, X.q)(r);
    if (null == I) return null;
    let g = I.items[0];
    return null == g
        ? null
        : ((0, Z.T)(g)
              ? ((n = H.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(J.i, { item: g, user: s, isHighlighted: E, avatarSize: F._3.SIZE_96 })))
              : (0, $.F)(g) &&
                ((n = H.R.NAMEPLATE),
                (t = (0, l.jsx)(ee.A, { nameplate: g, user: s, isHighlighted: E, size: "small" }))),
          (0, l.jsx)(W.vN, {
              children: (0, l.jsxs)(z.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == o || a || o(r);
                  },
                  className: D()(en._x, { [en.Vp]: !a, [en.mr]: E, [en.md]: d === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: D()(en.VH, { [en._Q]: n === H.R.AVATAR_DECORATION, [en.M4]: n === H.R.NAMEPLATE }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: D()(en.i1, { [en.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(V.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: K.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: en.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: en.tZ,
                          children: [
                              (0, l.jsx)(Y.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(q.E, {
                                  variant: "text-sm/normal",
                                  children: a ? et.intl.string(et.t["6cfuDj"]) : et.intl.string(et.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var ei = n(374200),
    er = n(696208),
    es = n(683433),
    ea = n(344159);
function eo(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: s,
            showBackButton: a,
            planOptions: o,
            shouldRenderUpdatedPaymentModal: d = !1,
            isTrial: u,
            isNextDisabled: c = !1,
        } = e,
        { paymentSources: m } = (0, p.jm)(),
        E = (0, S.A)(),
        { isGift: I, claimableRewards: g } = (0, P.Pv)();
    r = r ?? m;
    let {
            variant: h,
            text: x,
            onClick: A,
            disabled: f,
        } = ed({
            onStepChange: t,
            selectedPlanId: (n = n ?? E?.id),
            isGift: I,
            claimableRewards: g,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: d,
            isTrial: u,
            isNextDisabled: c,
        }),
        T = i.useMemo(
            () =>
                null != n && o.includes(n)
                    ? [{ variant: h, text: x, onClick: A, disabled: f }]
                    : [{ variant: "primary", text: et.intl.string(et.t.XqMe3N), disabled: !0 }],
            [h, x, A, f, n, o],
        );
    return (0, l.jsx)(er.H, { leading: a && null != s ? (0, l.jsx)(es.A, { onClick: s }) : void 0, actions: T });
}
let ed = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: i,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: o,
            isNextDisabled: d = !1,
        } = e,
        u = (0, r.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        c = (0, S.A)(),
        p = (0, M.bB)(),
        { hasEntitlements: m } = (0, ea.X)(n, l),
        E = (null != u && null != u.paymentSourceId) || Object.keys(s).length > 0 || (m && !o);
    var g = a ? et.intl.string(et.t.PDTjLN) : et.intl.string(et.t.XqMe3N),
        h = j.pn.ADD_PAYMENT_STEPS;
    return (
        E && (h = j.pn.REVIEW),
        (0, I.px)(c, l, i) && p !== j.pn.SELECT_FREE_SKU && (h = j.pn.SELECT_FREE_SKU),
        { variant: "primary", text: g, onClick: () => t(h), disabled: d }
    );
};
var eu = n(287809),
    ec = n(482132),
    ep = n(328232);
function eS(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, S.A)(),
        a = (0, M.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: d, claimableRewards: u } = (0, P.Pv)(),
        c = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        p = (0, r.yK)([ei.A], () => ei.A.getGiftPromotionRewardSkuIds()),
        E = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, d),
        [I, g] = i.useState(E),
        [h, x] = i.useState(!1);
    i.useEffect(() => {
        h || null != d || null == E || (o(E), g(E));
    }, [E, h, d, o]);
    let A = { selectedPlan: s, selectedSkuId: n, step: a };
    if (null == s) throw new G.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new G.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == a) throw new G.v({ message: "Step should be set", extraSentryInformation: A });
    let f = i.useMemo(() => null != I && (u ?? []).includes(I), [I, u]),
        T = i.useMemo(() => 0 === p.length || null == I || !f, [p, I, f]);
    i.useEffect(() => {
        if (0 === p.length) {
            g(void 0), o(void 0);
            return;
        }
        (null != I && f && p.includes(I)) || null == I || (g(void 0), o(void 0));
    }, [p, f, I, o]);
    let _ = (e) => {
            o(e), g(e), x(!0);
        },
        b = p.map((e) =>
            (0, l.jsx)(
                el,
                { skuId: e, claimed: null != u && !u.includes(e), user: c, onSelect: _, selectedSkuId: I },
                e,
            ),
        ),
        k = (0, l.jsx)(ec.UX, {
            children: (0, l.jsx)(eo, {
                onStepChange: t,
                onBackClick: () => t(j.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: T,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: et.intl.string(et.t.OEtqpm),
                subtitle: et.intl.string(et.t.h2nMp0),
            }),
            (0, l.jsx)(w.c, {
                children: (0, l.jsx)(U.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: ep.Dq, children: b }),
                }),
            }),
            k,
        ],
    });
}
var em = n(800471),
    eE = n(284009),
    eI = n.n(eE),
    eg = n(877624),
    eh = n(702841),
    ex = n(683071),
    eA = n(428644),
    ef = n(274971),
    eT = n(463376),
    eP = n(699595),
    ej = n(543767),
    e_ = n(67948),
    eb = n(807098),
    ek = n(298305),
    ev = n(387745);
function eC() {
    let e = (0, r.bG)([ei.A], () => {
            let e = ei.A.getMarketingComponentByType(eg.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, P.Pv)(),
        n = (0, eb.T)(e?.asset),
        i = (0, eb.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, I.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, I.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let d = (0, I.x)(o, a),
        u = e?.assetVariant === e_.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: ev.qD,
              style: d,
              children: [
                  (0, l.jsx)("div", {
                      className: D()([ev.my], { [ev.R_]: u }),
                      children: (0, l.jsx)(ek.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? F._3.SIZE_72 : F._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(q.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: et.intl.string(et.t.Abiuci),
                  }),
              ],
          });
}
var ey = n(410516),
    eR = n(361597),
    eM = n(45938),
    eN = n(975571),
    eO = n(428262),
    eL = n(69494),
    ew = n(340034),
    eU = n(597770),
    eG = n(102741),
    eB = n(296589);
function eD(e) {
    let { giftMessage: t = et.intl.string(et.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, P.Pv)();
    return !n || (0, eM.Ik)(i)
        ? null
        : (0, l.jsx)(eG.A, {
              className: eB.z,
              iconSize: eG.A.Sizes.SMALL,
              icon: eU.o,
              color: null == t ? eG.A.Colors.PRIMARY : eG.A.Colors.SECONDARY,
              children: t,
          });
}
var eH = n(921925),
    eF = n(71867),
    eW = n(652215),
    ez = n(249872);
function eV(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: o } = e,
        {
            selectedSkuId: d,
            priceOptions: u,
            referralTrialOfferId: c,
            activeSubscription: p,
            defaultPlanId: E,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: g, isEligibleForTrial: h, isEligibleForDiscount: x, discountOffer: A } = (0, eT.i)(),
        T = (0, ey.YJ)(A),
        _ = (0, S.A)(),
        b = (0, M.bB)(),
        { isGift: k, giftRecipient: v, giftMessage: C, claimableRewards: y } = (0, P.Pv)(),
        R = (0, I.Mq)(_),
        N = (0, eh.bG)([ei.A], () => {
            let e = ei.A.getMarketingComponentByType(eg.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = k && R && null != y && y.length > 0 && N,
        L = (h || x) ?? !1,
        w = i.useMemo(() => (0, eO.Tm)({ skuId: d, isPremium: g, defaultPlanId: E }), [d, g, E]),
        U = x && null != T && w.includes(T) ? T : w[0],
        G = (0, eh.bG)([f.A], () => f.A.get(U)),
        B = [{ planId: G?.id, quantity: 1 }],
        [H, F] = i.useState(L),
        [W, z] = (0, ej.YV)({
            items: B,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
        });
    i.useEffect(() => {
        L && F(W?.subscriptionPeriodEnd == null);
    }, [W, L]),
        (0, eA.A)(
            "Payment Modal Plan Select Step",
            H,
            5,
            { proratedInvoicePreview: W, proratedInvoiceError: z, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let V = z?.message ?? et.intl.string(et.t.R0RpRX),
        K = L && null == z,
        Y = L && null != z,
        Q = K && null == p && W?.subscriptionPeriodEnd == null;
    (0, eP.W)({ priceOptions: u, trialId: a, discountInvoicePreview: W });
    let X = i.useMemo(
        () => ({
            planOptions: w,
            selectedPlanId: _?.id,
            planGroup: r,
            subscriptionPeriodEnd: W?.subscriptionPeriodEnd,
            useCompactGiftComponents: O,
            handleClose: o,
        }),
        [w, _?.id, r, W?.subscriptionPeriodEnd, O, o],
    );
    if (Q) return (0, l.jsx)(ef.E, { className: ez.QW });
    eI()(null != b, "Step should be set"), eI()(w.length > 0, "Premium plan options should be set");
    let Z = k
        ? (0, l.jsx)(eR.$p, { ...X })
        : (0, l.jsx)(ew.XH, { ...X, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eD, { giftMessage: C }),
            !(k && (0, eM.Ik)(v)) && (0, l.jsx)(eL.A, { isEligibleForTrial: h }),
            (0, l.jsxs)(ec.dZ, {
                children: [
                    (0, l.jsx)(eF.P, { className: ez.ZB, planSkuId: G?.skuId, referralTrialOfferId: c }),
                    (0, l.jsx)(eH.A, {}),
                    Y ? (0, l.jsx)(ex.w, { type: "critical", children: V }) : Z,
                    K &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: D()(ez.IM, ez.Go) }),
                                (0, l.jsx)(q.E, {
                                    variant: "text-xs/normal",
                                    children: et.intl.format(et.t.BHtnqA, {
                                        link: eN.A.getArticleURL(eW.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(ec.UX, {
                children: [
                    O && (0, l.jsx)(eC, {}),
                    (0, l.jsx)(eo, {
                        onStepChange: t,
                        onBackClick: () => t(j.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: w,
                        shouldRenderUpdatedPaymentModal: K,
                        isTrial: h,
                    }),
                ],
            }),
        ],
    });
}
var eK = n(234419),
    eY = n(862990),
    eq = n(672525),
    eQ = n(169801),
    eX = n(634378);
function eZ(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        {
            setSelectedSkuId: i,
            setSelectedPlanId: r,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: d,
        } = (0, m.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { hasPaymentSources: u } = (0, p.jm)(),
        { isGift: c, claimableRewards: S } = (0, P.Pv)(),
        E = c && null != S && S.length > 0,
        I = (0, eK.V)(n);
    return (0, l.jsx)(e$, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: d,
                } = e;
                l(n);
                let u = j.pn.PLAN_SELECT,
                    c = (0, eO.aZ)(t);
                (c !== x.pe.TIER_1 && c !== x.pe.TIER_2) || n !== x.pe.TIER_0 || r || (u = j.pn.WHAT_YOU_LOSE);
                let p = (0, eQ.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    S = (0, em.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                u !== j.pn.WHAT_YOU_LOSE && S && ((u = j.pn.REVIEW), a((0, em.xT)(n, t, d))),
                    i(u, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: c,
                userTrialOffer: I,
                startedPaymentFlowWithPaymentSources: d,
                setSelectedPlanId: r,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, eO.mH)(x.pe.TIER_2)),
                    t(x.gD.PREMIUM_GROUP_MONTH),
                    n(l ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: x.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: u, setSelectedSkuId: i }),
        isGift: c,
        priceOptions: s,
        showPromotionalGiftBanner: E,
    });
}
function e$(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, eY.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.rQ, { titleTextVariant: "heading-lg/semibold", title: et.intl.string(et.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(w.c, {
                      children: (0, l.jsx)("div", {
                          className: eX.eE,
                          children: (0, l.jsx)(eq.yS, {
                              onSelectSku: (e) => t((0, eO.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(w.c, {
                      children: (0, l.jsx)("div", {
                          className: eX.a2,
                          children: (0, l.jsx)(eq.Ay, {
                              onSelectSku: (e) => t((0, eO.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var eJ = n(825484),
    e0 = n(821609),
    e1 = n(137728);
function e7(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSources: a,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: o } = (0, P.Pv)(),
        d = null != s ? (0, eO.EL)(s) : null,
        u = null != d ? (0, eO.RH)(d.planId) : null,
        c = null != d ? (0, eO.m6)(d.planId) : null,
        p = (0, em.vT)({ isTrial: !1, isGift: o, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a });
    return (
        eI()(null != c, "Expected premium type"),
        (0, l.jsx)(e1.A, {
            premiumType: c,
            titleText: et.intl.string(et.t["7VcWW0"]),
            subtitleText: et.intl.format(et.t.Qk34Ik, { subscriptionName: u }),
            footer: (0, l.jsxs)(eJ.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(e0.$, {
                        variant: "primary",
                        text: et.intl.string(et.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, em.xT)(i, s)), t(j.pn.REVIEW)) : t(j.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(e0.$, { variant: "secondary", onClick: n, text: et.intl.string(et.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let e2 = [j.pn.PLAN_SELECT, j.pn.ADD_PAYMENT_STEPS, j.pn.REVIEW, j.pn.CONFIRM];
function e6(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: u,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: S,
            trialId: E,
            reviewWarningMessage: I,
            openInvoiceId: A,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: _,
            postSuccessGuild: v,
            followupSKUInfo: C,
            renderHeader: y,
            applicationId: R,
            guildId: O,
            referralTrialOfferId: L,
            skuId: w,
            returnRef: U,
            skipConfirm: G = !1,
            continueSessionToInitialStep: B,
        } = e,
        { analyticsLocations: D } = (0, d.Ay)();
    i.useEffect(() => {
        f.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: H, purchaseState: F } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        W = (0, M.bB)(),
        {
            isGift: z,
            giftMessage: V,
            selectedGiftingPromotionReward: K,
            openGiftingBadgePostPurchaseModal: Y,
        } = (0, P.Pv)(),
        q = i.useCallback(
            (e, t) => {
                S(e, t), e && z && null == K && Y();
            },
            [S, z, K, Y],
        ),
        Q = !z && H === x.pe.TIER_2 && !g.Ct && !g.KY && null == (0, h.uM)(),
        X = F === b.h.PURCHASING;
    return (0, l.jsx)(N.A, {
        isConfirmationStep: W === j.pn.CONFIRM && null == B && null == _,
        isEligibleForWowMoment: Q,
        shouldPrefetchWowMoment: X,
        children: (0, l.jsx)(k.PaymentModal, {
            analyticsLocations: D,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eW.rzx.PREMIUM,
            onComplete: o,
            transitionState: u,
            initialPlanId: c,
            giftMessage: V,
            subscriptionTier: p,
            onClose: q,
            trialId: E,
            isGift: z,
            reviewWarningMessage: I,
            planGroup: x.LE,
            openInvoiceId: A,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: _,
            postSuccessGuild: v,
            followupSKUInfo: C,
            renderHeader: y,
            applicationId: R,
            guildId: O,
            referralTrialOfferId: L,
            skuId: w,
            shakeWhilePurchasing: !0,
            returnRef: U,
            skipConfirm: G,
            continueSessionToInitialStep: B,
        }),
    });
}
function e8(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, p.jm)(),
        a = (0, S.A)(),
        { isGift: o, claimableRewards: d } = (0, P.Pv)(),
        u = (0, eQ.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        c = (0, em.lp)(u),
        E = (0, I.px)(a, o, d);
    return (0, l.jsx)(v.x, {
        ...e,
        breadcrumbSteps: e2,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? j.pn.PLAN_SELECT : j.pn.REVIEW;
            c && (l = j.pn.REVIEW),
                E && e.length < 1 && (l = j.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: j.pn.PAYMENT_TYPE });
        },
    });
}
let e4 = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(k.I, { ...e }) },
            {
                key: j.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(eZ, { ...e }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    modalSizeGetter: (t) => {
                        let { canCurrentlyPurchasePremiumGroup: n } = t;
                        return e || n ? "xl" : "md";
                    },
                },
            },
            {
                key: j.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(e7, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: j.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(eV, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, em.lp)(e) ? null : et.intl.string(et.t["r+SebU"])),
                    sectionHeaderText: () => et.intl.string(et.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: j.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(e8, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, em.lp)(e) ? null : et.intl.string(et.t.Sb6wI1)),
                },
            },
            { key: j.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(y.A, {}) },
            { key: j.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(C.A, {}) },
            {
                key: j.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(R._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, em.lp)(e) ? et.intl.string(et.t.UKbp1N) : et.intl.string(et.t.QBnNHq),
                },
            },
            {
                key: j.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(O._, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: j.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eS, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    e3 = e4();
function e5(e) {
    let t = (0, r.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        n = (0, E.cg)() ? x.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, d.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: p,
            giftingOrigin: S,
            giftMessage: m,
            giftRecipient: I,
            giftStyle: g,
            isGift: h,
            loadId: f,
            referralCode: j,
            subscriptionTier: b,
            referralTrialOfferId: k,
        } = e;
    if (null != b && !Object.values(x.pe).includes(b)) throw Error("subscriptionTier must be a premium subscription");
    let v = (0, A.tA)({ giftRecipient: I, isGift: h ?? !1 }),
        C = i.useMemo(() => e4(v), [v]);
    return (0, l.jsx)(d.f5, {
        value: s,
        children: (0, l.jsx)(c.CheckoutRootProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: C,
            skuIDs: [...x.oz],
            isGift: h,
            defaultPlanId: n ?? p,
            referralCode: j,
            referralTrialOfferId: k,
            unifiedCheckoutFlow: u.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(_.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(P.dX, {
                    isGift: h,
                    giftRecipient: null == I ? void 0 : I,
                    giftMessage: m,
                    giftStyle: g,
                    giftingOrigin: S,
                    children: (0, l.jsx)(e6, { ...e }),
                }),
            }),
        }),
    });
}
