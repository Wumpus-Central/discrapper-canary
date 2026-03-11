t.d(n, { default: () => ep });
var l = t(627968),
    i = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(835245),
    o = t(311907),
    c = t(732955),
    u = t(397927),
    p = t(384904),
    d = t(923408),
    _ = t(891197),
    m = t(444927),
    S = t(964486),
    E = t(304072),
    A = t(793574),
    P = t(688810),
    I = t(160946),
    g = t(459793),
    b = t(608805),
    y = t(981036),
    f = t(725836),
    x = t(584160),
    M = t(169797),
    T = t(357669),
    h = t(832286),
    N = t(958340),
    C = t(156312),
    L = t(166532),
    R = t(566980),
    j = t(216641),
    D = t(925847),
    k = t(87719),
    v = t(253390),
    w = t(251913),
    U = t(998678),
    O = t(632638),
    G = t(71393),
    W = t(178368),
    B = t(825755),
    F = t(295405),
    Y = t(97352),
    V = t(166403),
    H = t(954571),
    z = t(473145),
    q = t(927578),
    J = t(83617),
    K = t(615396),
    Q = t(802790),
    $ = t(879100),
    X = t(599669),
    Z = t(622501),
    ee = t(652215),
    en = t(788868),
    et = t(818348),
    el = t(985018),
    ei = t(213179);
let er = en.gD.NONE_MONTH,
    es = [L.pn.PLAN_SELECT, L.pn.REVIEW, L.pn.CONFIRM],
    ea = [L.pn.PLAN_SELECT, L.pn.ADD_PAYMENT_STEPS, L.pn.REVIEW, L.pn.CONFIRM];
async function eo(e, n) {
    await (0, d.CD)();
    let t = (0, z.D$)(W.A.boostSlots);
    return (0, d.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function ec(e) {
    let {
        currentStep: n,
        isUnifiedCheckoutUIEnabled: t,
        backStep: i,
        handleStepChange: r,
        primaryButtonProps: a,
        secondaryButton: o,
        legacySubmitButton: p,
    } = e;
    return n === L.pn.CONFIRM
        ? null
        : t && n === L.pn.REVIEW
          ? (s()(null != a, "Missing primaryButtonProps for review step"),
            (0, l.jsx)(M.lo, { onBackClick: null != i ? () => r(i) : void 0, primaryButtonProps: a }))
          : (0, l.jsx)(c.jlY, {
                children: (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != i ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != i
                            ? (0, l.jsx)(u.QWc, {
                                  text: el.intl.string(el.t["13/7kX"]),
                                  onClick: () => r(i),
                                  variant: "secondary",
                              })
                            : null,
                        (0, l.jsxs)(u.BJc, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            fullWidth: !1,
                            children: [o, p],
                        }),
                    ],
                }),
            });
}
function eu(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: d,
            analyticsLocations: eu,
            analyticsLocation: ep,
            analyticsSourceLocation: ed,
            guildId: e_,
            onSubscribeComplete: em,
            totalNumberOfSlotsToAssign: eS = 1,
            disablePremiumUpsell: eE = !1,
            onSubscriptionConfirmation: eA,
            applicationId: eP,
            intent: eI,
        } = e,
        {
            activeSubscription: eg,
            blockedPayments: eb,
            startingFractionalPremiumEndsAtRef: ey,
            invoicePreview: ef,
            customCheckoutFlow: ex,
        } = (0, C.P5)(),
        eM = (0, o.bG)([V.A], () => V.A.hasFetchedSubscriptions()),
        eT = null != eg ? eg.paymentSourceId : null,
        eh = (0, o.bG)([Y.A], () => (null != eg ? (0, K.c9)(eg.planId) : null)),
        eN = (0, o.bG)([Y.A], () => null == eg || null != Y.A.get(eg.planId)),
        eC = (0, o.bG)([Y.A], () => (null == eh ? Y.A.get(er) : eh)),
        eL = i.useRef((0, z.D$)(W.A.boostSlots)).current,
        eR = (0, o.bG)([N.A], () => (null != e_ ? N.A.getGuild(e_) : void 0), [e_]),
        ej = (0, o.bG)([F.A], () => F.A.defaultPaymentSourceId),
        eD = (0, U.KP)(null != eT ? eT : eM ? ej : null),
        {
            paymentSources: ek,
            setPurchaseError: ev,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: eU,
            paymentAuthenticationState: eO,
            setPaymentSourceId: eG,
            isSubmittingCurrentStep: eW,
            paymentError: eB,
            purchaseError: eF,
            purchaseErrorBlockRef: eY,
        } = eD,
        eV = Object.keys(ek).length > 0,
        [eH, ez] = i.useState(eS - eL.length),
        { hasAcceptedTerms: eq, setHasAcceptedTerms: eJ } = (0, C.P5)(),
        eK = (0, o.bG)([B.A], () => B.A.popupCallbackCalled),
        eQ = (0, I.Y)(),
        e$ = i.useMemo(
            () => (null != eg && eN && eQ ? (0, v.v)(eg, eH) : [{ planId: en.gD.PREMIUM_MONTH_GUILD, quantity: eH }]),
            [eg, eN, eH, eQ],
        ),
        eX = i.useMemo(() => (0, D.A)(), []),
        [eZ, e0] = (0, m.A)(() => [eX ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e8 } = (0, P.Ay)(eu, A.A.GUILD_BOOST_PURCHASE_MODAL),
        e5 = i.useMemo(
            () =>
                e$.find((e) => {
                    let { planId: n } = e;
                    return en.pW.has(n);
                })?.planId ?? en.gD.PREMIUM_MONTH_GUILD,
            [e$],
        ),
        e9 = (0, o.bG)([Y.A], () => Y.A.get(e5)?.skuId, [e5]),
        e7 = i.useMemo(
            () => ({
                load_id: eZ,
                payment_type: et.fr[et.VV.SUBSCRIPTION],
                sku_id: en.pe.GUILD,
                subscription_type: ee.rzx.PREMIUM,
                subscription_plan_id: e5,
                quantity: eH,
                location: ep,
                source: ed,
                location_stack: e8,
            }),
            [eZ, ep, e8, ed, eH, e5],
        );
    i.useEffect(() => {
        (0, J.c_)(ew);
    }, [ew]);
    let [e1, e4] = i.useState(L.pn.PLAN_SELECT),
        e6 = i.useMemo(() => Date.now(), [e1]),
        e3 = i.useCallback(
            (e, n) => {
                e4(e), ev(null);
                let t = Date.now();
                H.default.track(ee.HAw.PAYMENT_FLOW_STEP, {
                    ...e7,
                    from_step: null != n ? n : e1,
                    to_step: e === L.pn.ADD_PAYMENT_STEPS ? L.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - e6,
                    flow_duration_ms: t - e0,
                    guild_id: e_,
                    application_id: eP,
                });
            },
            [ev, e7, e1, e6, e0, e_, eP],
        ),
        e2 = {
            baseAnalyticsData: e7,
            flowStartTime: e0,
            guildId: e_,
            handleStepChange: e3,
            onSubscribeComplete: em,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: eU,
            setPurchaseError: ev,
        },
        ne = i.useRef(e2);
    i.useEffect(() => {
        ne.current = e2;
    }),
        i.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: l,
                onSubscribeComplete: i,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: a,
            } = ne.current;
            (async () => {
                if (!0 === eK)
                    try {
                        if (null == B.A.redirectedPaymentId) return;
                        await (0, p.tn)(B.A.redirectedPaymentId),
                            l(L.pn.CONFIRM),
                            ni(R.h.COMPLETED),
                            null != t && (await eo(t, null != eI)),
                            i?.();
                    } catch (t) {
                        ni(R.h.FAIL),
                            a(t),
                            H.default.track(ee.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: ee.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, p.bl)();
                    }
            })();
        }, [eK, eI]),
        (0, S.Ay)(() => {
            V.A.hasFetchedSubscriptions() || (0, p.hP)(),
                null == e_ ||
                    null != G.A.getGuild(e_) ||
                    null != N.A.getGuild(e_) ||
                    N.A.isGuildFetching(e_) ||
                    (0, h.y)(e_),
                (0, T.b)({ ...e7, guild_id: e_, application_id: eP, custom_checkout_flow: ex }),
                null != eg &&
                    null != eg.renewalMutations &&
                    H.default.track(ee.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: ep, guild_id: e_ });
        });
    let [nn, nt] = i.useState(es),
        [nl, ni] = i.useState(R.h.WAITING),
        [nr, ns] = i.useState(!0),
        na = () => {
            r(nl === R.h.COMPLETED);
        },
        no = null != eg && eg.isPurchasedExternally;
    i.useEffect(() => {
        eO !== w.oc.PENDING &&
            e1 !== L.pn.CONFIRM &&
            null != eT &&
            (nn !== es && nt(es), es.includes(e1) || e1 === L.pn.PREMIUM_UPSELL || e3(L.pn.REVIEW)),
            e1 === L.pn.ADD_PAYMENT_STEPS && nn !== ea && nt(ea),
            no && e1 !== L.pn.PLAN_SELECT && e4(L.pn.PLAN_SELECT);
    }, [e1, e3, no, eO, eg, eT, nn]),
        (0, w.b)(e1, eO, e3, ni),
        (0, L.zT)(e1, nl, ni);
    let nc = i.useRef(null),
        [nu, np] = (0, E.A)(!1, 500),
        nd = (0, b.D7)({ location: "GuildBoostPurchaseModal" }),
        [n_, nm] = i.useState(null),
        [nS, nE] = i.useState([]),
        [nA, nP] = i.useState(!1),
        nI = i.useMemo(() => JSON.stringify(nS), [nS]);
    i.useEffect(() => {
        let e;
        eQ &&
            (null != Y.A.get(en.gD.PREMIUM_MONTH_GUILD) && nE((e = (0, J._w)(en.gD.PREMIUM_MONTH_GUILD, ew, !1))),
            null == ew && null != eg && null != eg.paymentSourceId ? nm(eg.currency) : null != e && nm(e[0]));
    }, [ew, eg, eQ, nI]);
    let ng = (0, U.Y)({
        paymentModalArgs: eD,
        initialStep: L.pn.PAYMENT_TYPE,
        prependSteps: [L.pn.PLAN_SELECT],
        appendSteps: [L.pn.REVIEW, L.pn.CONFIRM],
        breadcrumpSteps: nn,
        currentBreadcrumpStep: e1,
        onReturn: () => {
            e3(Object.values(ek).length < 1 ? L.pn.PLAN_SELECT : L.pn.REVIEW, L.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e3(L.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            H.default.track(ee.HAw.PAYMENT_FLOW_STEP, {
                ...e7,
                from_step: n,
                to_step: t,
                step_duration_ms: l - e6,
                flow_duration_ms: l - e0,
                guild_id: e_,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eb) n = (0, l.jsx)(g.oO, { onClose: na });
    else if (eM && eN && eQ && null != n_ && "" !== n_)
        if (eg?.isPausedOrPausePending && !eg.isPausedAllowsUpdatesButNotResume)
            n = (0, l.jsx)(c.cwr, {
                children: (0, l.jsx)("p", { className: ei.C, children: el.intl.string(el.t.mOWsF1) }),
            });
        else if (null != eg && null != eg.renewalMutations)
            n = (0, l.jsx)(c.cwr, {
                children: (0, l.jsx)("p", { className: ei.C, children: el.intl.string(el.t.npfhh0) }),
            });
        else if (e1 === L.pn.PREMIUM_UPSELL) {
            s()(null != eC, "Missing nextPremiumSubscriptionPlan"), s()(n_, "Currency not defined");
            let e = null != ew ? { paymentSourceId: ew, currency: n_ } : { currency: n_ };
            n = (0, l.jsx)(Z.A, {
                premiumSubscriptionPlan: eC,
                analyticsLocation: ep,
                analyticsSourceLocation: ed,
                onClose: na,
                onBack: () => e3(L.pn.PLAN_SELECT),
                onSkip: () => e3(null != eT || eV ? L.pn.REVIEW : L.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eA,
                priceOptions: e,
            });
        } else {
            let e, t, i, r;
            s()(n_, "Currency not defined");
            let a = null != ew ? { paymentSourceId: ew, currency: n_ } : { currency: n_ },
                o = G.A.getGuild(e_),
                c = null == eR && null == o,
                m = null;
            switch (e1) {
                case L.pn.PLAN_SELECT:
                    s()(null != e_, "Missing guildId"),
                        s()(null != eC, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)($.A, {
                            premiumSubscriptionPlan: eC,
                            numGuildBoosts: eH,
                            setNumGuildBoosts: ez,
                            setForceDisableSubmitButton: ns,
                            premiumSubscription: eg,
                            existingAvailableSlots: eL,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                na(), null != d && d(), (0, k.e)();
                            },
                            priceOptions: a,
                        })),
                        no && null != eg && null != eg.paymentGateway
                            ? (e = (0, l.jsxs)("div", {
                                  className: ei.xK,
                                  children: [
                                      (0, l.jsx)(u.wx6, {
                                          type: "critical",
                                          children: el.intl.format(el.t["/m3Y3s"], {
                                              paymentGatewayName: et.qm[eg.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !N.A.isGuildFetching(e_) &&
                              c &&
                              (e = (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(u.po8, {
                                          messageType: u.YCn.ERROR,
                                          className: ei.MR,
                                          children: el.intl.string(el.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (i = (0, l.jsx)(u.QWc, {
                            text: el.intl.string(el.t.oEAioF),
                            onClick: na,
                            variant: "secondary",
                        })),
                        (r = (0, l.jsx)(u.Button, {
                            variant: "primary",
                            text: el.intl.string(el.t["3PatSz"]),
                            type: "submit",
                            disabled: nr || 0 === eH || no || c,
                            onClick: () => {
                                eE || (null != eh && eh.premiumSubscriptionType === en.PremiumTypes.TIER_2)
                                    ? e3(null != eT || eV ? L.pn.REVIEW : L.pn.ADD_PAYMENT_STEPS)
                                    : e3(L.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case L.pn.ADD_PAYMENT_STEPS:
                    break;
                case L.pn.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(_.N, { className: ei.__invalid_body });
                    break;
                case L.pn.REVIEW:
                    s()(null != eC, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != e_, "Missing guildId"),
                        (e = (0, l.jsx)(X.pc, {
                            guildId: e_,
                            paymentSources: ek,
                            priceOptions: a,
                            currentPremiumSubscription: eg,
                            premiumSubscriptionPaymentSourceId: eT,
                            premiumSubscriptionPlan: eC,
                            newAdditionalPlans: e$,
                            onPurchaseTermsChange: eJ,
                            legalTermsNodeRef: nc,
                            hasLegalTermsFlash: nu,
                            onPaymentSourceChange: (e) => eG(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e3(L.pn.ADD_PAYMENT_STEPS), eG(null);
                            },
                        })),
                        (t = L.pn.PLAN_SELECT);
                    let S = async () => {
                        s()(null != e$, "Missing newAdditionalPlans");
                        let e = (0, j.W)(ek, ew);
                        ev(null);
                        try {
                            ni(R.h.PURCHASING),
                                eU(!0),
                                s()(null != ew, "Missing paymentSourceId"),
                                s()(null != ef, "Missing invoicePreview");
                            let n = { amount: ef.total, currency: ef.currency },
                                t = (0, q.U8)(eg, e$, a.currency.toLowerCase(), a.paymentSourceId);
                            if (
                                (H.default.track(ee.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e7,
                                    duration_ms: Date.now() - e0,
                                    guild_id: e_,
                                    application_id: eP,
                                }),
                                nA)
                            )
                                return;
                            if (null == eg || null == eh) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, p.Ky)({
                                    items: e$,
                                    paymentSource: e,
                                    currency: a.currency,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: t,
                                });
                                if (l.redirectConfirmation) return void nP(null != l.redirectURL);
                            } else {
                                let l = { items: (0, q.aE)(eg, e$) };
                                (l.currency = eg.currency),
                                    null == l.currency && (l.currency = a.currency),
                                    (l.paymentSource = null != eT ? ek[eT] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = a.currency));
                                let i = await (0, p.nV)(eg, l, n, t, e8);
                                if (i.redirectConfirmation) return void nP(null != i.redirectURL);
                            }
                            null == eI && e3(L.pn.CONFIRM),
                                ni(R.h.COMPLETED),
                                null != e_ && (await eo(e_, null != eI)),
                                null != eI && na(),
                                em?.();
                        } catch (n) {
                            ni(R.h.FAIL),
                                ev(n),
                                H.default.track(ee.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e7,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === ee.hes.CARD ? ee.kM_.STRIPE : ee.kM_.BRAINTREE) : null,
                                    payment_source_id: ew,
                                    duration_ms: Date.now() - e0,
                                });
                        } finally {
                            nA || eU(!1);
                        }
                    };
                    (m = {
                        text: el.intl.string(el.t.eUEeCt),
                        loading: eW,
                        tooltipText: eq ? void 0 : el.intl.string(el.t.XdvBLS),
                        onClick: eq
                            ? S
                            : () => {
                                  null != nc.current && (nc.current.scrollIntoView({ behavior: "smooth" }), np(!0));
                              },
                        variant: "active",
                    }),
                        (r = (0, l.jsx)(y.p, { ...m }));
                    break;
                case L.pn.CONFIRM:
                    let E = o?.name ?? eR?.name,
                        A = (0, j.g)(ek, ew),
                        P = (0, K.b2)(ey.current) && null != eh && !en.YV.has(eh.id);
                    e = (0, l.jsx)($.W, {
                        guild: o,
                        guildBoostQuantity: eH + eL.length,
                        onClose: na,
                        withAnimation: !1,
                        paymentSourceType: A,
                        fallbackGuildName: E,
                        didPurchaseOnFractionalPremium: P,
                        customCheckoutFlow: ex,
                    });
            }
            let I = null != eB && null == (0, L.ou)(eB) ? eB : eF;
            n =
                e1 === L.pn.ADD_PAYMENT_STEPS
                    ? ng
                    : (0, l.jsx)(O.A, {
                          shouldUseManaModal: nd,
                          hideBreadcrumbs: (nd && e1 === L.pn.REVIEW) || e1 === L.pn.CONFIRM,
                          steps: nn,
                          currentStep: e1,
                          paymentError: I,
                          purchaseErrorBlockRef: eY,
                          hasCurrencies: nS.length > 1,
                          body: e,
                          footer: (0, l.jsx)(ec, {
                              currentStep: e1,
                              isUnifiedCheckoutUIEnabled: nd,
                              backStep: t,
                              handleStepChange: e3,
                              primaryButtonProps: m,
                              secondaryButton: i,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, l.jsx)("div", { className: ei._5, children: (0, l.jsx)(u.y$y, {}) });
    let nb = (0, x.u)({ skuId: e9, step: e1 }),
        ny = null;
    return (
        eb ||
            (nd && e1 === L.pn.REVIEW
                ? (ny = (0, l.jsx)(M.s3, { ...nb }))
                : e1 !== L.pn.PREMIUM_UPSELL &&
                  (ny = (0, l.jsx)(Q.A, { onClose: na, currentStep: e1, purchaseState: nl }))),
        nd
            ? (0, l.jsx)(f.e0, {
                  children: (0, l.jsxs)(M.Jg, {
                      transitionState: t,
                      size: "md",
                      onClose: () => (na(), Promise.resolve()),
                      children: [ny, n],
                  }),
              })
            : (0, l.jsxs)(u.dWK, { transitionState: t, onClose: () => (na(), Promise.resolve()), children: [ny, n] })
    );
}
function ep(e) {
    let n = (0, o.bG)([V.A], () => V.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, P.Ay)(A.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(P.f5, {
        value: t,
        children: (0, l.jsx)(C.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(eu, { ...e }),
        }),
    });
}
