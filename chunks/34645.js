t.d(n, { default: () => eS });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(835245),
    o = t(311907),
    c = t(732955),
    u = t(397927),
    d = t(923408),
    p = t(891197),
    m = t(444927),
    _ = t(964486),
    f = t(793574),
    S = t(688810),
    x = t(323082),
    g = t(160946),
    b = t(459793),
    h = t(589078),
    I = t(981036),
    E = t(725836),
    y = t(584160),
    P = t(169797),
    A = t(94420),
    N = t(357669),
    C = t(832286),
    v = t(958340),
    T = t(156312),
    j = t(166532),
    M = t(566980),
    L = t(216641),
    R = t(925847),
    D = t(87719),
    U = t(253390),
    k = t(489254),
    w = t(251913),
    O = t(632638),
    G = t(480800),
    B = t(71393),
    W = t(178368),
    F = t(825755),
    Y = t(295405),
    V = t(97352),
    H = t(166403),
    z = t(954571),
    K = t(473145),
    J = t(927578),
    q = t(83617),
    $ = t(615396),
    Q = t(802790),
    X = t(636441),
    Z = t(875022),
    ee = t(458663),
    en = t(595164),
    et = t(879100),
    ei = t(599669),
    el = t(622501),
    er = t(652215),
    es = t(788868),
    ea = t(818348),
    eo = t(985018),
    ec = t(898640);
let eu = es.gD.NONE_MONTH,
    ed = [j.pn.PLAN_SELECT, j.pn.REVIEW, j.pn.CONFIRM],
    ep = [j.pn.PLAN_SELECT, j.pn.ADD_PAYMENT_STEPS, j.pn.REVIEW, j.pn.CONFIRM];
async function em(e, n) {
    await (0, d.CD)();
    let t = (0, K.D$)(W.A.boostSlots);
    return (0, d.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function e_(e) {
    let {
        currentStep: n,
        isRefreshEnabled: t,
        backStep: l,
        handleStepChange: r,
        primaryButtonProps: a,
        secondaryButton: o,
        legacySubmitButton: d,
    } = e;
    return n === j.pn.CONFIRM
        ? null
        : n === j.pn.REVIEW
          ? (s()(null != a, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(P.lo, { onBackClick: null != l ? () => r(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(c.jlY, {
                children: (0, i.jsxs)(u.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(u.QWc, {
                                  text: eo.intl.string(eo.t["13/7kX"]),
                                  onClick: () => r(l),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(u.BJc, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && n === j.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [o, d],
                        }),
                    ],
                }),
            });
}
function ef(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: d,
            analyticsLocations: ef,
            analyticsLocation: eS,
            analyticsSourceLocation: ex,
            guildId: eg,
            onSubscribeComplete: eb,
            totalNumberOfSlotsToAssign: eh = 1,
            disablePremiumUpsell: eI = !1,
            onSubscriptionConfirmation: eE,
            applicationId: ey,
            intent: eP,
        } = e,
        {
            activeSubscription: eA,
            blockedPayments: eN,
            startingFractionalPremiumEndsAtRef: eC,
            customCheckoutFlow: ev,
            hasAcceptedTerms: eT,
        } = (0, T.P5)(),
        ej = (0, A.sw)(),
        eM = (0, o.bG)([H.A], () => H.A.hasFetchedSubscriptions()),
        eL = null != eA ? eA.paymentSourceId : null,
        eR = (0, o.bG)([V.A], () => (null != eA ? (0, $.c9)(eA.planId) : null)),
        eD = (0, o.bG)([V.A], () => null == eA || null != V.A.get(eA.planId)),
        eU = (0, o.bG)([V.A], () => (null == eR ? V.A.get(eu) : eR)),
        ek = l.useRef((0, K.D$)(W.A.boostSlots)).current,
        ew = (0, o.bG)([v.A], () => (null != eg ? v.A.getGuild(eg) : void 0), [eg]),
        eO = (0, o.bG)([Y.A], () => Y.A.defaultPaymentSourceId),
        eG = (0, G._V)(null != eL ? eL : eM ? eO : null),
        {
            paymentSources: eB,
            setPurchaseError: eW,
            paymentSourceId: eF,
            setIsSubmittingCurrentStep: eY,
            paymentAuthenticationState: eV,
            setPaymentSourceId: eH,
            isSubmittingCurrentStep: ez,
            paymentError: eK,
            purchaseError: eJ,
            purchaseErrorBlockRef: eq,
        } = eG,
        e$ = Object.keys(eB).length > 0,
        [eQ, eX] = l.useState(eh - ek.length),
        eZ = (0, o.bG)([F.A], () => F.A.popupCallbackCalled),
        e0 = (0, g.Y)(),
        e9 = l.useMemo(
            () => (null != eA && eD && e0 ? (0, U.v)(eA, eQ) : [{ planId: es.gD.PREMIUM_MONTH_GUILD, quantity: eQ }]),
            [eA, eD, eQ, e0],
        ),
        e8 = l.useMemo(() => (0, R.A)(), []),
        [e6, e4] = (0, m.A)(() => [e8 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e5 } = (0, S.Ay)(ef, f.A.GUILD_BOOST_PURCHASE_MODAL),
        e1 = l.useMemo(
            () =>
                e9.find((e) => {
                    let { planId: n } = e;
                    return es.pW.has(n);
                })?.planId ?? es.gD.PREMIUM_MONTH_GUILD,
            [e9],
        ),
        e3 = (0, o.bG)([V.A], () => V.A.get(e1)?.skuId, [e1]),
        e7 = l.useMemo(
            () => ({
                load_id: e6,
                payment_type: ea.fr[ea.VV.SUBSCRIPTION],
                sku_id: es.pe.GUILD,
                subscription_type: er.rzx.PREMIUM,
                subscription_plan_id: e1,
                quantity: eQ,
                location: eS,
                source: ex,
                location_stack: e5,
                checkout_flow: h.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e6, eS, e5, ex, eQ, e1],
        );
    l.useEffect(() => {
        (0, q.c_)(eF);
    }, [eF]);
    let [e2, ne] = l.useState(j.pn.PLAN_SELECT),
        nn = l.useMemo(() => Date.now(), [e2]),
        nt = l.useCallback(
            (e, n) => {
                ne(e), eW(null);
                let t = Date.now();
                z.default.track(er.HAw.PAYMENT_FLOW_STEP, {
                    ...e7,
                    from_step: null != n ? n : e2,
                    to_step: e === j.pn.ADD_PAYMENT_STEPS ? j.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - nn,
                    flow_duration_ms: t - e4,
                    guild_id: eg,
                    application_id: ey,
                });
            },
            [eW, e7, e2, nn, e4, eg, ey],
        ),
        ni = {
            baseAnalyticsData: e7,
            flowStartTime: e4,
            guildId: eg,
            handleStepChange: nt,
            onSubscribeComplete: eb,
            paymentSourceId: eF,
            setIsSubmittingCurrentStep: eY,
            setPurchaseError: eW,
        },
        nl = l.useRef(ni);
    l.useEffect(() => {
        nl.current = ni;
    }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: a,
            } = nl.current;
            (async () => {
                if (!0 === eZ)
                    try {
                        if (null == F.A.redirectedPaymentId) return;
                        await (0, x.tn)(F.A.redirectedPaymentId),
                            i(j.pn.CONFIRM),
                            no(M.h.COMPLETED),
                            null != t && (await em(t, null != eP)),
                            l?.();
                    } catch (t) {
                        no(M.h.FAIL),
                            a(t),
                            z.default.track(er.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: er.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, x.bl)();
                    }
            })();
        }, [eZ, eP]),
        (0, _.Ay)(() => {
            H.A.hasFetchedSubscriptions() || (0, x.hP)(),
                null == eg ||
                    null != B.A.getGuild(eg) ||
                    null != v.A.getGuild(eg) ||
                    v.A.isGuildFetching(eg) ||
                    (0, C.y)(eg),
                (0, N.b)({ ...e7, guild_id: eg, application_id: ey, custom_checkout_flow: ev }),
                null != eA &&
                    null != eA.renewalMutations &&
                    z.default.track(er.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: eS, guild_id: eg });
        });
    let [nr, ns] = l.useState(ed),
        [na, no] = l.useState(M.h.WAITING),
        [nc, nu] = l.useState(!0),
        nd = () => {
            r(na === M.h.COMPLETED);
        },
        np = null != eA && eA.isPurchasedExternally;
    l.useEffect(() => {
        eV !== w.oc.PENDING &&
            e2 !== j.pn.CONFIRM &&
            null != eL &&
            (nr !== ed && ns(ed), ed.includes(e2) || e2 === j.pn.PREMIUM_UPSELL || nt(j.pn.REVIEW)),
            e2 === j.pn.ADD_PAYMENT_STEPS && nr !== ep && ns(ep),
            np && e2 !== j.pn.PLAN_SELECT && ne(j.pn.PLAN_SELECT);
    }, [e2, nt, np, eV, eA, eL, nr]),
        (0, w.b)(e2, eV, nt, no),
        (0, j.zT)(e2, na, no);
    let nm = (0, k.n)("GuildBoostPurchaseModal"),
        n_ = nm && (e2 === j.pn.REVIEW || e2 === j.pn.CONFIRM),
        nf = (0, ee.A)(n_),
        [nS, nx] = l.useState(null),
        [ng, nb] = l.useState([]),
        [nh, nI] = l.useState(!1),
        nE = l.useMemo(() => JSON.stringify(ng), [ng]);
    l.useEffect(() => {
        let e;
        e0 &&
            (null != V.A.get(es.gD.PREMIUM_MONTH_GUILD) && nb((e = (0, q._w)(es.gD.PREMIUM_MONTH_GUILD, eF, !1))),
            null == eF && null != eA && null != eA.paymentSourceId ? nx(eA.currency) : null != e && nx(e[0]));
    }, [eF, eA, e0, nE]);
    let ny = (0, G.Y)({
        paymentModalArgs: eG,
        initialStep: j.pn.PAYMENT_TYPE,
        prependSteps: [j.pn.PLAN_SELECT],
        appendSteps: [j.pn.REVIEW, j.pn.CONFIRM],
        breadcrumpSteps: nr,
        currentBreadcrumpStep: e2,
        onReturn: () => {
            nt(Object.values(eB).length < 1 ? j.pn.PLAN_SELECT : j.pn.REVIEW, j.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            nt(j.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            z.default.track(er.HAw.PAYMENT_FLOW_STEP, {
                ...e7,
                from_step: n,
                to_step: t,
                step_duration_ms: i - nn,
                flow_duration_ms: i - e4,
                guild_id: eg,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eN) n = (0, i.jsx)(b.oO, {});
    else if (eM && eD && e0 && null != nS && "" !== nS)
        if (eA?.isPausedOrPausePending && !eA.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.cwr, {
                children: (0, i.jsx)("p", { className: ec.C, children: eo.intl.string(eo.t.mOWsF1) }),
            });
        else if (null != eA && null != eA.renewalMutations)
            n = (0, i.jsx)(c.cwr, {
                children: (0, i.jsx)("p", { className: ec.C, children: eo.intl.string(eo.t.npfhh0) }),
            });
        else if (e2 === j.pn.PREMIUM_UPSELL) {
            s()(null != eU, "Missing nextPremiumSubscriptionPlan"), s()(nS, "Currency not defined");
            let e = null != eF ? { paymentSourceId: eF, currency: nS } : { currency: nS };
            n = (0, i.jsx)(el.A, {
                premiumSubscriptionPlan: eU,
                analyticsLocation: eS,
                analyticsSourceLocation: ex,
                onClose: nd,
                onBack: () => nt(j.pn.PLAN_SELECT),
                onSkip: () => nt(null != eL || e$ ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            s()(nS, "Currency not defined");
            let a = null != eF ? { paymentSourceId: eF, currency: nS } : { currency: nS },
                o = B.A.getGuild(eg),
                c = null == ew && null == o,
                m = null;
            switch (e2) {
                case j.pn.PLAN_SELECT:
                    s()(null != eg, "Missing guildId"),
                        s()(null != eU, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(en.As, {
                            premiumSubscriptionPlan: eU,
                            numGuildBoosts: eQ,
                            setNumGuildBoosts: eX,
                            setForceDisableSubmitButton: nu,
                            premiumSubscription: eA,
                            existingAvailableSlots: ek,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nd(), null != d && d(), (0, D.e)();
                            },
                            priceOptions: a,
                            isRefreshEnabled: nm,
                            refreshNextStepLabel: (0, j.Ir)(
                                nr.find((e) => e !== j.pn.PLAN_SELECT && e !== j.pn.CONFIRM) ?? j.pn.REVIEW,
                            ),
                        })),
                        np && null != eA && null != eA.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: ec.xK,
                                  children: [
                                      (0, i.jsx)(u.wx6, {
                                          type: "critical",
                                          children: eo.intl.format(eo.t["/m3Y3s"], {
                                              paymentGatewayName: ea.qm[eA.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !v.A.isGuildFetching(eg) &&
                              c &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.po8, {
                                          messageType: u.YCn.ERROR,
                                          className: ec.MR,
                                          children: eo.intl.string(eo.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = nm
                            ? (0, i.jsx)(u.Button, {
                                  variant: "secondary",
                                  text: eo.intl.string(eo.t["ETE/oC"]),
                                  onClick: nd,
                              })
                            : (0, i.jsx)(u.QWc, {
                                  text: eo.intl.string(eo.t.oEAioF),
                                  onClick: nd,
                                  variant: "secondary",
                              })),
                        (r = (0, i.jsx)(u.Button, {
                            variant: "primary",
                            text: eo.intl.string(eo.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: n,
                                    numGuildBoostsToPurchase: t,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: l,
                                } = e;
                                return n || 0 === t || i || l;
                            })({
                                forceDisableSubmitButton: nc,
                                numGuildBoostsToPurchase: eQ,
                                isDisabledBecauseExternalSubscription: np,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                eI || (null != eR && eR.premiumSubscriptionType === es.PremiumTypes.TIER_2)
                                    ? nt(null != eL || e$ ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS)
                                    : nt(j.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case j.pn.ADD_PAYMENT_STEPS:
                    break;
                case j.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(p.N, { className: ec.__invalid_body });
                    break;
                case j.pn.REVIEW:
                    s()(null != eU, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != eg, "Missing guildId"),
                        (e = (0, i.jsx)(ei.pc, {
                            guildId: eg,
                            paymentSources: eB,
                            priceOptions: a,
                            currentPremiumSubscription: eA,
                            premiumSubscriptionPaymentSourceId: eL,
                            premiumSubscriptionPlan: eU,
                            newAdditionalPlans: e9,
                            setPaymentSourceId: eH,
                            onPaymentSourceAdd: () => {
                                nt(j.pn.ADD_PAYMENT_STEPS), eH(null);
                            },
                        })),
                        (t = j.pn.PLAN_SELECT);
                    let _ = async () => {
                        s()(null != e9, "Missing newAdditionalPlans");
                        let e = (0, L.W)(eB, eF);
                        eW(null);
                        try {
                            no(M.h.PURCHASING),
                                eY(!0),
                                s()(null != eF, "Missing paymentSourceId"),
                                s()(null != ej, "Missing invoicePreview");
                            let n = { amount: ej.total, currency: ej.currency },
                                t = a.currency ?? ej.currency,
                                i = (0, J.U8)(eA, e9, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (z.default.track(er.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e7,
                                    duration_ms: Date.now() - e4,
                                    guild_id: eg,
                                    application_id: ey,
                                }),
                                nh)
                            )
                                return;
                            if (null == eA || null == eR) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, x.Ky)({
                                    items: e9,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nI(null != l.redirectURL);
                            } else {
                                let l = { items: (0, J.aE)(eA, e9) };
                                (l.currency = eA.currency ?? t),
                                    (l.paymentSource = null != eL ? eB[eL] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let r = await (0, x.nV)(eA, l, n, i, e5);
                                if (r.redirectConfirmation) return void nI(null != r.redirectURL);
                            }
                            null == eP && nt(j.pn.CONFIRM),
                                no(M.h.COMPLETED),
                                null != eg && (await em(eg, null != eP)),
                                null != eP && nd(),
                                eb?.();
                        } catch (n) {
                            no(M.h.FAIL),
                                eW(n),
                                z.default.track(er.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e7,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === er.hes.CARD ? er.kM_.STRIPE : er.kM_.BRAINTREE) : null,
                                    payment_source_id: eF,
                                    duration_ms: Date.now() - e4,
                                });
                        } finally {
                            nh || eY(!1);
                        }
                    };
                    (m = {
                        text: eo.intl.string(eo.t.eUEeCt),
                        loading: ez,
                        disabled: !eT,
                        onClick: _,
                        variant: "active",
                    }),
                        (r = (0, i.jsx)(I.p, { ...m }));
                    break;
                case j.pn.CONFIRM:
                    let f = o?.name ?? ew?.name,
                        S = (0, L.g)(eB, eF),
                        g = (0, $.b2)(eC.current) && null != eR && !es.YV.has(eR.id);
                    e = (0, i.jsx)(et.W, {
                        guild: o,
                        guildBoostQuantity: eQ + ek.length,
                        onClose: nd,
                        withAnimation: !1,
                        paymentSourceType: S,
                        fallbackGuildName: f,
                        didPurchaseOnFractionalPremium: g,
                        customCheckoutFlow: ev,
                    });
            }
            let b = null != eK && null == (0, j.ou)(eK) ? eK : eJ;
            n =
                e2 === j.pn.ADD_PAYMENT_STEPS
                    ? ny
                    : (0, i.jsx)(O.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === j.pn.REVIEW || n === j.pn.CONFIRM || (t && n === j.pn.PLAN_SELECT);
                          })({ currentStep: e2, isBoostingPreCheckoutModalRefreshEnabled: nm }),
                          steps: nr,
                          currentStep: e2,
                          paymentError: b,
                          purchaseErrorBlockRef: eq,
                          hasCurrencies: ng.length > 1,
                          body: e,
                          footer: (0, i.jsx)(e_, {
                              currentStep: e2,
                              isRefreshEnabled: nm,
                              backStep: t,
                              handleStepChange: nt,
                              primaryButtonProps: m,
                              secondaryButton: l,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: ec._5, children: (0, i.jsx)(u.y$y, {}) });
    let nP = (0, y.u)({ skuId: e3, step: e2 }),
        nA = null;
    return (eN ||
        (nm && e2 !== j.pn.PREMIUM_UPSELL
            ? (nA = e2 === j.pn.REVIEW ? (0, i.jsx)(P.s3, { ...nP }) : (0, i.jsx)(P.s3, { title: nP.title }))
            : e2 === j.pn.REVIEW
              ? (nA = (0, i.jsx)(P.s3, { ...nP }))
              : e2 !== j.pn.PREMIUM_UPSELL &&
                (nA = (0, i.jsx)(Q.A, { onClose: nd, currentStep: e2, purchaseState: na }))),
    nm && e2 === j.pn.CONFIRM)
        ? (0, i.jsx)(Z.A, {
              mediaUrls: nf.mediaUrls,
              isSuccess: nf.isSuccess,
              transitionState: t,
              onClose: () => (nd(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(X.A, {
                      transitionState: t,
                      guild: B.A.getGuild(eg),
                      guildBoostQuantity: eQ + ek.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(E.e0, {
              children: (0, i.jsxs)(P.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nd(), Promise.resolve()),
                  children: [nA, n],
              }),
          });
}
function eS(e) {
    let n = (0, o.bG)([H.A], () => H.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, S.Ay)(f.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(S.f5, {
        value: t,
        children: (0, i.jsx)(T.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: h.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(ef, { ...e }),
        }),
    });
}
