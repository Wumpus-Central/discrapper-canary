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
    f = t(589078),
    y = t(981036),
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
    w = t(87719),
    O = t(253390),
    v = t(251913),
    U = t(998678),
    G = t(632638),
    B = t(71393),
    W = t(178368),
    F = t(825755),
    Y = t(295405),
    V = t(97352),
    H = t(166403),
    z = t(954571),
    K = t(473145),
    q = t(927578),
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
    er = t(953248);
let es = et.gD.NONE_MONTH,
    ea = [R.pn.PLAN_SELECT, R.pn.REVIEW, R.pn.CONFIRM],
    eo = [R.pn.PLAN_SELECT, R.pn.ADD_PAYMENT_STEPS, R.pn.REVIEW, R.pn.CONFIRM];
async function ec(e, n) {
    await (0, d.CD)();
    let t = (0, K.D$)(W.A.boostSlots);
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
            analyticsLocations: ep,
            analyticsLocation: ed,
            analyticsSourceLocation: e_,
            guildId: em,
            onSubscribeComplete: eS,
            totalNumberOfSlotsToAssign: eE = 1,
            disablePremiumUpsell: eA = !1,
            onSubscriptionConfirmation: eP,
            applicationId: eI,
            intent: eg,
        } = e,
        {
            activeSubscription: eb,
            blockedPayments: ef,
            startingFractionalPremiumEndsAtRef: ey,
            invoicePreview: ex,
            customCheckoutFlow: eM,
        } = (0, L.P5)(),
        eT = (0, o.bG)([H.A], () => H.A.hasFetchedSubscriptions()),
        eh = null != eb ? eb.paymentSourceId : null,
        eC = (0, o.bG)([V.A], () => (null != eb ? (0, Q.c9)(eb.planId) : null)),
        eN = (0, o.bG)([V.A], () => null == eb || null != V.A.get(eb.planId)),
        eL = (0, o.bG)([V.A], () => (null == eC ? V.A.get(es) : eC)),
        eR = i.useRef((0, K.D$)(W.A.boostSlots)).current,
        ej = (0, o.bG)([N.A], () => (null != em ? N.A.getGuild(em) : void 0), [em]),
        eD = (0, o.bG)([Y.A], () => Y.A.defaultPaymentSourceId),
        ek = (0, U.KP)(null != eh ? eh : eT ? eD : null),
        {
            paymentSources: ew,
            setPurchaseError: eO,
            paymentSourceId: ev,
            setIsSubmittingCurrentStep: eU,
            paymentAuthenticationState: eG,
            setPaymentSourceId: eB,
            isSubmittingCurrentStep: eW,
            paymentError: eF,
            purchaseError: eY,
            purchaseErrorBlockRef: eV,
        } = ek,
        eH = Object.keys(ew).length > 0,
        [ez, eK] = i.useState(eE - eR.length),
        { hasAcceptedTerms: eq, setHasAcceptedTerms: eJ } = (0, L.P5)(),
        eQ = (0, o.bG)([F.A], () => F.A.popupCallbackCalled),
        e$ = (0, I.Y)(),
        eX = i.useMemo(
            () => (null != eb && eN && e$ ? (0, O.v)(eb, ez) : [{ planId: et.gD.PREMIUM_MONTH_GUILD, quantity: ez }]),
            [eb, eN, ez, e$],
        ),
        eZ = i.useMemo(() => (0, k.A)(), []),
        [e0, e8] = (0, m.A)(() => [eZ ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e9 } = (0, P.Ay)(ep, A.A.GUILD_BOOST_PURCHASE_MODAL),
        e5 = i.useMemo(
            () =>
                eX.find((e) => {
                    let { planId: n } = e;
                    return et.pW.has(n);
                })?.planId ?? et.gD.PREMIUM_MONTH_GUILD,
            [eX],
        ),
        e7 = (0, o.bG)([V.A], () => V.A.get(e5)?.skuId, [e5]),
        e1 = i.useMemo(
            () => ({
                load_id: e0,
                payment_type: el.fr[el.VV.SUBSCRIPTION],
                sku_id: et.pe.GUILD,
                subscription_type: en.rzx.PREMIUM,
                subscription_plan_id: e5,
                quantity: ez,
                location: ed,
                source: e_,
                location_stack: e9,
                checkout_flow: f.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e0, ed, e9, e_, ez, e5],
        );
    i.useEffect(() => {
        (0, J.c_)(ev);
    }, [ev]);
    let [e4, e6] = i.useState(R.pn.PLAN_SELECT),
        e3 = i.useMemo(() => Date.now(), [e4]),
        e2 = i.useCallback(
            (e, n) => {
                e6(e), eO(null);
                let t = Date.now();
                z.default.track(en.HAw.PAYMENT_FLOW_STEP, {
                    ...e1,
                    from_step: null != n ? n : e4,
                    to_step: e === R.pn.ADD_PAYMENT_STEPS ? R.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - e3,
                    flow_duration_ms: t - e8,
                    guild_id: em,
                    application_id: eI,
                });
            },
            [eO, e1, e4, e3, e8, em, eI],
        ),
        ne = {
            baseAnalyticsData: e1,
            flowStartTime: e8,
            guildId: em,
            handleStepChange: e2,
            onSubscribeComplete: eS,
            paymentSourceId: ev,
            setIsSubmittingCurrentStep: eU,
            setPurchaseError: eO,
        },
        nn = i.useRef(ne);
    i.useEffect(() => {
        nn.current = ne;
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
            } = nn.current;
            (async () => {
                if (!0 === eQ)
                    try {
                        if (null == F.A.redirectedPaymentId) return;
                        await (0, p.tn)(F.A.redirectedPaymentId),
                            l(R.pn.CONFIRM),
                            nr(j.h.COMPLETED),
                            null != t && (await ec(t, null != eg)),
                            i?.();
                    } catch (t) {
                        nr(j.h.FAIL),
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
        }, [eQ, eg]),
        (0, S.Ay)(() => {
            H.A.hasFetchedSubscriptions() || (0, p.hP)(),
                null == em ||
                    null != B.A.getGuild(em) ||
                    null != N.A.getGuild(em) ||
                    N.A.isGuildFetching(em) ||
                    (0, C.y)(em),
                (0, h.b)({ ...e1, guild_id: em, application_id: eI, custom_checkout_flow: eM }),
                null != eb &&
                    null != eb.renewalMutations &&
                    z.default.track(en.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: ed, guild_id: em });
        });
    let [nt, nl] = i.useState(ea),
        [ni, nr] = i.useState(j.h.WAITING),
        [ns, na] = i.useState(!0),
        no = () => {
            r(ni === j.h.COMPLETED);
        },
        nc = null != eb && eb.isPurchasedExternally;
    i.useEffect(() => {
        eG !== v.oc.PENDING &&
            e4 !== R.pn.CONFIRM &&
            null != eh &&
            (nt !== ea && nl(ea), ea.includes(e4) || e4 === R.pn.PREMIUM_UPSELL || e2(R.pn.REVIEW)),
            e4 === R.pn.ADD_PAYMENT_STEPS && nt !== eo && nl(eo),
            nc && e4 !== R.pn.PLAN_SELECT && e6(R.pn.PLAN_SELECT);
    }, [e4, e2, nc, eG, eb, eh, nt]),
        (0, v.b)(e4, eG, e2, nr),
        (0, R.zT)(e4, ni, nr);
    let nu = i.useRef(null),
        [np, nd] = (0, E.A)(!1, 500),
        n_ = (0, b.D7)({ location: "GuildBoostPurchaseModal" }),
        [nm, nS] = i.useState(null),
        [nE, nA] = i.useState([]),
        [nP, nI] = i.useState(!1),
        ng = i.useMemo(() => JSON.stringify(nE), [nE]);
    i.useEffect(() => {
        let e;
        e$ &&
            (null != V.A.get(et.gD.PREMIUM_MONTH_GUILD) && nA((e = (0, J._w)(et.gD.PREMIUM_MONTH_GUILD, ev, !1))),
            null == ev && null != eb && null != eb.paymentSourceId ? nS(eb.currency) : null != e && nS(e[0]));
    }, [ev, eb, e$, ng]);
    let nb = (0, U.Y)({
        paymentModalArgs: ek,
        initialStep: R.pn.PAYMENT_TYPE,
        prependSteps: [R.pn.PLAN_SELECT],
        appendSteps: [R.pn.REVIEW, R.pn.CONFIRM],
        breadcrumpSteps: nt,
        currentBreadcrumpStep: e4,
        onReturn: () => {
            e2(Object.values(ew).length < 1 ? R.pn.PLAN_SELECT : R.pn.REVIEW, R.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e2(R.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            z.default.track(en.HAw.PAYMENT_FLOW_STEP, {
                ...e1,
                from_step: n,
                to_step: t,
                step_duration_ms: l - e3,
                flow_duration_ms: l - e8,
                guild_id: em,
            });
        },
        shouldUseManaModal: !0,
    });
    if (ef) n = (0, l.jsx)(g.oO, {});
    else if (eT && eN && e$ && null != nm && "" !== nm)
        if (eb?.isPausedOrPausePending && !eb.isPausedAllowsUpdatesButNotResume)
            n = (0, l.jsx)(c.cwr, {
                children: (0, l.jsx)("p", { className: er.C, children: ei.intl.string(ei.t.mOWsF1) }),
            });
        else if (null != eb && null != eb.renewalMutations)
            n = (0, l.jsx)(c.cwr, {
                children: (0, l.jsx)("p", { className: er.C, children: ei.intl.string(ei.t.npfhh0) }),
            });
        else if (e4 === R.pn.PREMIUM_UPSELL) {
            s()(null != eL, "Missing nextPremiumSubscriptionPlan"), s()(nm, "Currency not defined");
            let e = null != ev ? { paymentSourceId: ev, currency: nm } : { currency: nm };
            n = (0, l.jsx)(ee.A, {
                premiumSubscriptionPlan: eL,
                analyticsLocation: ed,
                analyticsSourceLocation: e_,
                onClose: no,
                onBack: () => e2(R.pn.PLAN_SELECT),
                onSkip: () => e2(null != eh || eH ? R.pn.REVIEW : R.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eP,
                priceOptions: e,
            });
        } else {
            let e, t, i, r;
            s()(nm, "Currency not defined");
            let a = null != ev ? { paymentSourceId: ev, currency: nm } : { currency: nm },
                o = B.A.getGuild(em),
                c = null == ej && null == o,
                m = null;
            switch (e4) {
                case R.pn.PLAN_SELECT:
                    s()(null != em, "Missing guildId"),
                        s()(null != eL, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(X.A, {
                            premiumSubscriptionPlan: eL,
                            numGuildBoosts: ez,
                            setNumGuildBoosts: eK,
                            setForceDisableSubmitButton: na,
                            premiumSubscription: eb,
                            existingAvailableSlots: eR,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                no(), null != d && d(), (0, w.e)();
                            },
                            priceOptions: a,
                        })),
                        nc && null != eb && null != eb.paymentGateway
                            ? (e = (0, l.jsxs)("div", {
                                  className: er.xK,
                                  children: [
                                      (0, l.jsx)(u.wx6, {
                                          type: "critical",
                                          children: ei.intl.format(ei.t["/m3Y3s"], {
                                              paymentGatewayName: el.qm[eb.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !N.A.isGuildFetching(em) &&
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
                            onClick: no,
                            variant: "secondary",
                        })),
                        (r = (0, l.jsx)(u.Button, {
                            variant: "primary",
                            text: ei.intl.string(ei.t["3PatSz"]),
                            type: "submit",
                            disabled: ns || 0 === ez || nc || c,
                            onClick: () => {
                                eA || (null != eC && eC.premiumSubscriptionType === et.PremiumTypes.TIER_2)
                                    ? e2(null != eh || eH ? R.pn.REVIEW : R.pn.ADD_PAYMENT_STEPS)
                                    : e2(R.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case R.pn.ADD_PAYMENT_STEPS:
                    break;
                case R.pn.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(_.N, { className: er.__invalid_body });
                    break;
                case R.pn.REVIEW:
                    s()(null != eL, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != em, "Missing guildId"),
                        (e = (0, l.jsx)(Z.pc, {
                            guildId: em,
                            paymentSources: ew,
                            priceOptions: a,
                            currentPremiumSubscription: eb,
                            premiumSubscriptionPaymentSourceId: eh,
                            premiumSubscriptionPlan: eL,
                            newAdditionalPlans: eX,
                            onPurchaseTermsChange: eJ,
                            legalTermsNodeRef: nu,
                            hasLegalTermsFlash: np,
                            onPaymentSourceChange: (e) => eB(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e2(R.pn.ADD_PAYMENT_STEPS), eB(null);
                            },
                        })),
                        (t = R.pn.PLAN_SELECT);
                    let S = async () => {
                        s()(null != eX, "Missing newAdditionalPlans");
                        let e = (0, D.W)(ew, ev);
                        eO(null);
                        try {
                            nr(j.h.PURCHASING),
                                eU(!0),
                                s()(null != ev, "Missing paymentSourceId"),
                                s()(null != ex, "Missing invoicePreview");
                            let n = { amount: ex.total, currency: ex.currency },
                                t = a.currency ?? ex.currency,
                                l = (0, q.U8)(eb, eX, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (z.default.track(en.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e1,
                                    duration_ms: Date.now() - e8,
                                    guild_id: em,
                                    application_id: eI,
                                }),
                                nP)
                            )
                                return;
                            if (null == eb || null == eC) {
                                s()(null != e, "Missing paymentSource");
                                let i = await (0, p.Ky)({
                                    items: eX,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: l,
                                });
                                if (i.redirectConfirmation) return void nI(null != i.redirectURL);
                            } else {
                                let i = { items: (0, q.aE)(eb, eX) };
                                (i.currency = eb.currency ?? t),
                                    (i.paymentSource = null != eh ? ew[eh] : void 0),
                                    null == i.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (i.paymentSource = e),
                                        (i.currency = t));
                                let r = await (0, p.nV)(eb, i, n, l, e9);
                                if (r.redirectConfirmation) return void nI(null != r.redirectURL);
                            }
                            null == eg && e2(R.pn.CONFIRM),
                                nr(j.h.COMPLETED),
                                null != em && (await ec(em, null != eg)),
                                null != eg && no(),
                                eS?.();
                        } catch (n) {
                            nr(j.h.FAIL),
                                eO(n),
                                z.default.track(en.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e1,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === en.hes.CARD ? en.kM_.STRIPE : en.kM_.BRAINTREE) : null,
                                    payment_source_id: ev,
                                    duration_ms: Date.now() - e8,
                                });
                        } finally {
                            nP || eU(!1);
                        }
                    };
                    (m = {
                        text: ei.intl.string(ei.t.eUEeCt),
                        loading: eW,
                        tooltipText: eq ? void 0 : ei.intl.string(ei.t.XdvBLS),
                        onClick: eq
                            ? S
                            : () => {
                                  null != nu.current && (nu.current.scrollIntoView({ behavior: "smooth" }), nd(!0));
                              },
                        variant: "active",
                    }),
                        (r = (0, l.jsx)(y.p, { ...m }));
                    break;
                case R.pn.CONFIRM:
                    let E = o?.name ?? ej?.name,
                        A = (0, D.g)(ew, ev),
                        P = (0, Q.b2)(ey.current) && null != eC && !et.YV.has(eC.id);
                    e = (0, l.jsx)(X.W, {
                        guild: o,
                        guildBoostQuantity: ez + eR.length,
                        onClose: no,
                        withAnimation: !1,
                        paymentSourceType: A,
                        fallbackGuildName: E,
                        didPurchaseOnFractionalPremium: P,
                        customCheckoutFlow: eM,
                    });
            }
            let I = null != eF && null == (0, R.ou)(eF) ? eF : eY;
            n =
                e4 === R.pn.ADD_PAYMENT_STEPS
                    ? nb
                    : (0, l.jsx)(G.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (n_ && e4 === R.pn.REVIEW) || e4 === R.pn.CONFIRM,
                          steps: nt,
                          currentStep: e4,
                          paymentError: I,
                          purchaseErrorBlockRef: eV,
                          hasCurrencies: nE.length > 1,
                          body: e,
                          footer: (0, l.jsx)(eu, {
                              currentStep: e4,
                              isUnifiedCheckoutUIEnabled: n_,
                              backStep: t,
                              handleStepChange: e2,
                              primaryButtonProps: m,
                              secondaryButton: i,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, l.jsx)("div", { className: er._5, children: (0, l.jsx)(u.y$y, {}) });
    let nf = (0, M.u)({ skuId: e7, step: e4 }),
        ny = null;
    return (
        ef ||
            (n_ && e4 === R.pn.REVIEW
                ? (ny = (0, l.jsx)(T.s3, { ...nf }))
                : e4 !== R.pn.PREMIUM_UPSELL &&
                  (ny = (0, l.jsx)($.A, { onClose: no, currentStep: e4, purchaseState: ni }))),
        n_
            ? (0, l.jsx)(x.e0, {
                  children: (0, l.jsxs)(T.Jg, {
                      transitionState: t,
                      size: "md",
                      onClose: () => (no(), Promise.resolve()),
                      children: [ny, n],
                  }),
              })
            : (0, l.jsxs)(u.dWK, { transitionState: t, onClose: () => (no(), Promise.resolve()), children: [ny, n] })
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
            unifiedCheckoutFlow: f.CL.GUILD_BOOST_CHECKOUT,
            children: (0, l.jsx)(ep, { ...e }),
        }),
    });
}
