t.d(n, { default: () => ed });
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
    y = t(589078),
    f = t(981036),
    x = t(725836),
    M = t(584160),
    T = t(169797),
    h = t(357669),
    C = t(832286),
    N = t(958340),
    L = t(156312),
    R = t(166532),
    j = t(566980),
    D = t(216641),
    k = t(925847),
    v = t(87719),
    w = t(253390),
    O = t(251913),
    U = t(998678),
    G = t(632638),
    B = t(71393),
    W = t(178368),
    F = t(825755),
    Y = t(295405),
    V = t(97352),
    H = t(166403),
    z = t(954571),
    q = t(473145),
    K = t(927578),
    J = t(83617),
    Q = t(615396),
    $ = t(802790),
    X = t(879100),
    Z = t(599669),
    ee = t(622501),
    en = t(652215),
    et = t(788868),
    el = t(818348),
    ei = t(985018),
    er = t(213179);
let es = et.gD.NONE_MONTH,
    ea = [R.pn.PLAN_SELECT, R.pn.REVIEW, R.pn.CONFIRM],
    eo = [R.pn.PLAN_SELECT, R.pn.ADD_PAYMENT_STEPS, R.pn.REVIEW, R.pn.CONFIRM];
async function ec(e, n) {
    await (0, d.CD)();
    let t = (0, q.D$)(W.A.boostSlots);
    return (0, d.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function eu(e) {
    let {
        currentStep: n,
        isUnifiedCheckoutUIEnabled: t,
        backStep: i,
        handleStepChange: r,
        primaryButtonProps: a,
        secondaryButton: o,
        legacySubmitButton: p,
    } = e;
    return n === R.pn.CONFIRM
        ? null
        : t && n === R.pn.REVIEW
          ? (s()(null != a, "Missing primaryButtonProps for review step"),
            (0, l.jsx)(T.lo, { onBackClick: null != i ? () => r(i) : void 0, primaryButtonProps: a }))
          : (0, l.jsx)(c.jlY, {
                children: (0, l.jsxs)(u.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != i ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != i
                            ? (0, l.jsx)(u.QWc, {
                                  text: ei.intl.string(ei.t["13/7kX"]),
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
function ep(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: d,
            analyticsLocations: y,
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
        } = (0, L.P5)(),
        eM = (0, o.bG)([H.A], () => H.A.hasFetchedSubscriptions()),
        eT = null != eg ? eg.paymentSourceId : null,
        eh = (0, o.bG)([V.A], () => (null != eg ? (0, Q.c9)(eg.planId) : null)),
        eC = (0, o.bG)([V.A], () => null == eg || null != V.A.get(eg.planId)),
        eN = (0, o.bG)([V.A], () => (null == eh ? V.A.get(es) : eh)),
        eL = i.useRef((0, q.D$)(W.A.boostSlots)).current,
        eR = (0, o.bG)([N.A], () => (null != e_ ? N.A.getGuild(e_) : void 0), [e_]),
        ej = (0, o.bG)([Y.A], () => Y.A.defaultPaymentSourceId),
        eD = (0, U.KP)(null != eT ? eT : eM ? ej : null),
        {
            paymentSources: ek,
            setPurchaseError: ev,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: eO,
            paymentAuthenticationState: eU,
            setPaymentSourceId: eG,
            isSubmittingCurrentStep: eB,
            paymentError: eW,
            purchaseError: eF,
            purchaseErrorBlockRef: eY,
        } = eD,
        eV = Object.keys(ek).length > 0,
        [eH, ez] = i.useState(eS - eL.length),
        { hasAcceptedTerms: eq, setHasAcceptedTerms: eK } = (0, L.P5)(),
        eJ = (0, o.bG)([F.A], () => F.A.popupCallbackCalled),
        eQ = (0, I.Y)(),
        e$ = i.useMemo(
            () => (null != eg && eC && eQ ? (0, w.v)(eg, eH) : [{ planId: et.gD.PREMIUM_MONTH_GUILD, quantity: eH }]),
            [eg, eC, eH, eQ],
        ),
        eX = i.useMemo(() => (0, k.A)(), []),
        [eZ, e0] = (0, m.A)(() => [eX ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e8 } = (0, P.Ay)(y, A.A.GUILD_BOOST_PURCHASE_MODAL),
        e5 = i.useMemo(
            () =>
                e$.find((e) => {
                    let { planId: n } = e;
                    return et.pW.has(n);
                })?.planId ?? et.gD.PREMIUM_MONTH_GUILD,
            [e$],
        ),
        e9 = (0, o.bG)([V.A], () => V.A.get(e5)?.skuId, [e5]),
        e7 = i.useMemo(
            () => ({
                load_id: eZ,
                payment_type: el.fr[el.VV.SUBSCRIPTION],
                sku_id: et.pe.GUILD,
                subscription_type: en.rzx.PREMIUM,
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
    let [e1, e4] = i.useState(R.pn.PLAN_SELECT),
        e6 = i.useMemo(() => Date.now(), [e1]),
        e3 = i.useCallback(
            (e, n) => {
                e4(e), ev(null);
                let t = Date.now();
                z.default.track(en.HAw.PAYMENT_FLOW_STEP, {
                    ...e7,
                    from_step: null != n ? n : e1,
                    to_step: e === R.pn.ADD_PAYMENT_STEPS ? R.pn.PAYMENT_TYPE : e,
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
            setIsSubmittingCurrentStep: eO,
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
                if (!0 === eJ)
                    try {
                        if (null == F.A.redirectedPaymentId) return;
                        await (0, p.tn)(F.A.redirectedPaymentId),
                            l(R.pn.CONFIRM),
                            ni(j.h.COMPLETED),
                            null != t && (await ec(t, null != eI)),
                            i?.();
                    } catch (t) {
                        ni(j.h.FAIL),
                            a(t),
                            z.default.track(en.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: en.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, p.bl)();
                    }
            })();
        }, [eJ, eI]),
        (0, S.Ay)(() => {
            H.A.hasFetchedSubscriptions() || (0, p.hP)(),
                null == e_ ||
                    null != B.A.getGuild(e_) ||
                    null != N.A.getGuild(e_) ||
                    N.A.isGuildFetching(e_) ||
                    (0, C.y)(e_),
                (0, h.b)({ ...e7, guild_id: e_, application_id: eP, custom_checkout_flow: ex }),
                null != eg &&
                    null != eg.renewalMutations &&
                    z.default.track(en.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: ep, guild_id: e_ });
        });
    let [nn, nt] = i.useState(ea),
        [nl, ni] = i.useState(j.h.WAITING),
        [nr, ns] = i.useState(!0),
        na = () => {
            r(nl === j.h.COMPLETED);
        },
        no = null != eg && eg.isPurchasedExternally;
    i.useEffect(() => {
        eU !== O.oc.PENDING &&
            e1 !== R.pn.CONFIRM &&
            null != eT &&
            (nn !== ea && nt(ea), ea.includes(e1) || e1 === R.pn.PREMIUM_UPSELL || e3(R.pn.REVIEW)),
            e1 === R.pn.ADD_PAYMENT_STEPS && nn !== eo && nt(eo),
            no && e1 !== R.pn.PLAN_SELECT && e4(R.pn.PLAN_SELECT);
    }, [e1, e3, no, eU, eg, eT, nn]),
        (0, O.b)(e1, eU, e3, ni),
        (0, R.zT)(e1, nl, ni);
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
            (null != V.A.get(et.gD.PREMIUM_MONTH_GUILD) && nE((e = (0, J._w)(et.gD.PREMIUM_MONTH_GUILD, ew, !1))),
            null == ew && null != eg && null != eg.paymentSourceId ? nm(eg.currency) : null != e && nm(e[0]));
    }, [ew, eg, eQ, nI]);
    let ng = (0, U.Y)({
        paymentModalArgs: eD,
        initialStep: R.pn.PAYMENT_TYPE,
        prependSteps: [R.pn.PLAN_SELECT],
        appendSteps: [R.pn.REVIEW, R.pn.CONFIRM],
        breadcrumpSteps: nn,
        currentBreadcrumpStep: e1,
        onReturn: () => {
            e3(Object.values(ek).length < 1 ? R.pn.PLAN_SELECT : R.pn.REVIEW, R.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e3(R.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            z.default.track(en.HAw.PAYMENT_FLOW_STEP, {
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
    if (eb) n = (0, l.jsx)(g.oO, {});
    else if (eM && eC && eQ && null != n_ && "" !== n_)
        if (eg?.isPausedOrPausePending && !eg.isPausedAllowsUpdatesButNotResume)
            n = (0, l.jsx)(c.cwr, {
                children: (0, l.jsx)("p", { className: er.C, children: ei.intl.string(ei.t.mOWsF1) }),
            });
        else if (null != eg && null != eg.renewalMutations)
            n = (0, l.jsx)(c.cwr, {
                children: (0, l.jsx)("p", { className: er.C, children: ei.intl.string(ei.t.npfhh0) }),
            });
        else if (e1 === R.pn.PREMIUM_UPSELL) {
            s()(null != eN, "Missing nextPremiumSubscriptionPlan"), s()(n_, "Currency not defined");
            let e = null != ew ? { paymentSourceId: ew, currency: n_ } : { currency: n_ };
            n = (0, l.jsx)(ee.A, {
                premiumSubscriptionPlan: eN,
                analyticsLocation: ep,
                analyticsSourceLocation: ed,
                onClose: na,
                onBack: () => e3(R.pn.PLAN_SELECT),
                onSkip: () => e3(null != eT || eV ? R.pn.REVIEW : R.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eA,
                priceOptions: e,
            });
        } else {
            let e, t, i, r;
            s()(n_, "Currency not defined");
            let a = null != ew ? { paymentSourceId: ew, currency: n_ } : { currency: n_ },
                o = B.A.getGuild(e_),
                c = null == eR && null == o,
                m = null;
            switch (e1) {
                case R.pn.PLAN_SELECT:
                    s()(null != e_, "Missing guildId"),
                        s()(null != eN, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(X.A, {
                            premiumSubscriptionPlan: eN,
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
                                na(), null != d && d(), (0, v.e)();
                            },
                            priceOptions: a,
                        })),
                        no && null != eg && null != eg.paymentGateway
                            ? (e = (0, l.jsxs)("div", {
                                  className: er.xK,
                                  children: [
                                      (0, l.jsx)(u.wx6, {
                                          type: "critical",
                                          children: ei.intl.format(ei.t["/m3Y3s"], {
                                              paymentGatewayName: el.qm[eg.paymentGateway],
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
                                          className: er.MR,
                                          children: ei.intl.string(ei.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (i = (0, l.jsx)(u.QWc, {
                            text: ei.intl.string(ei.t.oEAioF),
                            onClick: na,
                            variant: "secondary",
                        })),
                        (r = (0, l.jsx)(u.Button, {
                            variant: "primary",
                            text: ei.intl.string(ei.t["3PatSz"]),
                            type: "submit",
                            disabled: nr || 0 === eH || no || c,
                            onClick: () => {
                                eE || (null != eh && eh.premiumSubscriptionType === et.PremiumTypes.TIER_2)
                                    ? e3(null != eT || eV ? R.pn.REVIEW : R.pn.ADD_PAYMENT_STEPS)
                                    : e3(R.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case R.pn.ADD_PAYMENT_STEPS:
                    break;
                case R.pn.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(_.N, { className: er.__invalid_body });
                    break;
                case R.pn.REVIEW:
                    s()(null != eN, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != e_, "Missing guildId"),
                        (e = (0, l.jsx)(Z.pc, {
                            guildId: e_,
                            paymentSources: ek,
                            priceOptions: a,
                            currentPremiumSubscription: eg,
                            premiumSubscriptionPaymentSourceId: eT,
                            premiumSubscriptionPlan: eN,
                            newAdditionalPlans: e$,
                            onPurchaseTermsChange: eK,
                            legalTermsNodeRef: nc,
                            hasLegalTermsFlash: nu,
                            onPaymentSourceChange: (e) => eG(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e3(R.pn.ADD_PAYMENT_STEPS), eG(null);
                            },
                        })),
                        (t = R.pn.PLAN_SELECT);
                    let S = async () => {
                        s()(null != e$, "Missing newAdditionalPlans");
                        let e = (0, D.W)(ek, ew);
                        ev(null);
                        try {
                            ni(j.h.PURCHASING),
                                eO(!0),
                                s()(null != ew, "Missing paymentSourceId"),
                                s()(null != ef, "Missing invoicePreview");
                            let n = { amount: ef.total, currency: ef.currency },
                                t = (0, K.U8)(eg, e$, a.currency.toLowerCase(), a.paymentSourceId);
                            if (
                                (z.default.track(en.HAw.PAYMENT_FLOW_COMPLETED, {
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
                                let l = { items: (0, K.aE)(eg, e$) };
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
                            null == eI && e3(R.pn.CONFIRM),
                                ni(j.h.COMPLETED),
                                null != e_ && (await ec(e_, null != eI)),
                                null != eI && na(),
                                em?.();
                        } catch (n) {
                            ni(j.h.FAIL),
                                ev(n),
                                z.default.track(en.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e7,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === en.hes.CARD ? en.kM_.STRIPE : en.kM_.BRAINTREE) : null,
                                    payment_source_id: ew,
                                    duration_ms: Date.now() - e0,
                                });
                        } finally {
                            nA || eO(!1);
                        }
                    };
                    (m = {
                        text: ei.intl.string(ei.t.eUEeCt),
                        loading: eB,
                        tooltipText: eq ? void 0 : ei.intl.string(ei.t.XdvBLS),
                        onClick: eq
                            ? S
                            : () => {
                                  null != nc.current && (nc.current.scrollIntoView({ behavior: "smooth" }), np(!0));
                              },
                        variant: "active",
                    }),
                        (r = (0, l.jsx)(f.p, { ...m }));
                    break;
                case R.pn.CONFIRM:
                    let E = o?.name ?? eR?.name,
                        A = (0, D.g)(ek, ew),
                        P = (0, Q.b2)(ey.current) && null != eh && !et.YV.has(eh.id);
                    e = (0, l.jsx)(X.W, {
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
            let I = null != eW && null == (0, R.ou)(eW) ? eW : eF;
            n =
                e1 === R.pn.ADD_PAYMENT_STEPS
                    ? ng
                    : (0, l.jsx)(G.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (nd && e1 === R.pn.REVIEW) || e1 === R.pn.CONFIRM,
                          steps: nn,
                          currentStep: e1,
                          paymentError: I,
                          purchaseErrorBlockRef: eY,
                          hasCurrencies: nS.length > 1,
                          body: e,
                          footer: (0, l.jsx)(eu, {
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
    else n = (0, l.jsx)("div", { className: er._5, children: (0, l.jsx)(u.y$y, {}) });
    let nb = (0, M.u)({ skuId: e9, step: e1 }),
        ny = null;
    return (
        eb ||
            (nd && e1 === R.pn.REVIEW
                ? (ny = (0, l.jsx)(T.s3, { ...nb }))
                : e1 !== R.pn.PREMIUM_UPSELL &&
                  (ny = (0, l.jsx)($.A, { onClose: na, currentStep: e1, purchaseState: nl }))),
        nd
            ? (0, l.jsx)(x.e0, {
                  children: (0, l.jsxs)(T.Jg, {
                      transitionState: t,
                      size: "md",
                      onClose: () => (na(), Promise.resolve()),
                      children: [ny, n],
                  }),
              })
            : (0, l.jsxs)(u.dWK, { transitionState: t, onClose: () => (na(), Promise.resolve()), children: [ny, n] })
    );
}
function ed(e) {
    let n = (0, o.bG)([H.A], () => H.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, P.Ay)(A.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(P.f5, {
        value: t,
        children: (0, l.jsx)(L.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: y.CL.GUILD_BOOST_CHECKOUT,
            children: (0, l.jsx)(ep, { ...e }),
        }),
    });
}
