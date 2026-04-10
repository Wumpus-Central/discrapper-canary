t.d(n, { default: () => eh });
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
    x = t(304072),
    f = t(793574),
    h = t(688810),
    S = t(323082),
    g = t(160946),
    b = t(459793),
    I = t(589078),
    P = t(981036),
    E = t(725836),
    y = t(742810),
    A = t(584160),
    v = t(169797),
    C = t(357669),
    N = t(832286),
    j = t(958340),
    T = t(156312),
    M = t(166532),
    L = t(566980),
    R = t(216641),
    D = t(925847),
    U = t(87719),
    w = t(253390),
    k = t(489254),
    O = t(251913),
    G = t(632638),
    B = t(480800),
    W = t(71393),
    F = t(178368),
    Y = t(825755),
    V = t(295405),
    H = t(97352),
    K = t(166403),
    z = t(954571),
    q = t(473145),
    J = t(927578),
    $ = t(83617),
    Q = t(615396),
    X = t(802790),
    Z = t(636441),
    ee = t(875022),
    en = t(458663),
    et = t(595164),
    ei = t(879100),
    el = t(599669),
    er = t(622501),
    es = t(652215),
    ea = t(788868),
    eo = t(818348),
    ec = t(985018),
    eu = t(953248);
let ed = ea.gD.NONE_MONTH,
    ep = [M.pn.PLAN_SELECT, M.pn.REVIEW, M.pn.CONFIRM],
    em = [M.pn.PLAN_SELECT, M.pn.ADD_PAYMENT_STEPS, M.pn.REVIEW, M.pn.CONFIRM];
async function e_(e, n) {
    await (0, d.CD)();
    let t = (0, q.D$)(F.A.boostSlots);
    return (0, d.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function ex(e) {
    let {
        currentStep: n,
        isUnifiedCheckoutUIEnabled: t,
        isRefreshEnabled: l,
        backStep: r,
        handleStepChange: a,
        primaryButtonProps: o,
        secondaryButton: d,
        legacySubmitButton: p,
    } = e;
    return n === M.pn.CONFIRM
        ? null
        : t && n === M.pn.REVIEW
          ? (s()(null != o, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(v.lo, { onBackClick: null != r ? () => a(r) : void 0, primaryButtonProps: o }))
          : (0, i.jsx)(c.jlY, {
                children: (0, i.jsxs)(u.BJc, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != r ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != r
                            ? (0, i.jsx)(u.QWc, {
                                  text: ec.intl.string(ec.t["13/7kX"]),
                                  onClick: () => a(r),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(u.BJc, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(l && n === M.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [d, p],
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
            analyticsLocation: eh,
            analyticsSourceLocation: eS,
            guildId: eg,
            onSubscribeComplete: eb,
            totalNumberOfSlotsToAssign: eI = 1,
            disablePremiumUpsell: eP = !1,
            onSubscriptionConfirmation: eE,
            applicationId: ey,
            intent: eA,
        } = e,
        {
            activeSubscription: ev,
            blockedPayments: eC,
            startingFractionalPremiumEndsAtRef: eN,
            invoicePreview: ej,
            customCheckoutFlow: eT,
        } = (0, T.P5)(),
        eM = (0, o.bG)([K.A], () => K.A.hasFetchedSubscriptions()),
        eL = null != ev ? ev.paymentSourceId : null,
        eR = (0, o.bG)([H.A], () => (null != ev ? (0, Q.c9)(ev.planId) : null)),
        eD = (0, o.bG)([H.A], () => null == ev || null != H.A.get(ev.planId)),
        eU = (0, o.bG)([H.A], () => (null == eR ? H.A.get(ed) : eR)),
        ew = l.useRef((0, q.D$)(F.A.boostSlots)).current,
        ek = (0, o.bG)([j.A], () => (null != eg ? j.A.getGuild(eg) : void 0), [eg]),
        eO = (0, o.bG)([V.A], () => V.A.defaultPaymentSourceId),
        eG = (0, B._V)(null != eL ? eL : eM ? eO : null),
        {
            paymentSources: eB,
            setPurchaseError: eW,
            paymentSourceId: eF,
            setIsSubmittingCurrentStep: eY,
            paymentAuthenticationState: eV,
            setPaymentSourceId: eH,
            isSubmittingCurrentStep: eK,
            paymentError: ez,
            purchaseError: eq,
            purchaseErrorBlockRef: eJ,
        } = eG,
        e$ = Object.keys(eB).length > 0,
        [eQ, eX] = l.useState(eI - ew.length),
        { hasAcceptedTerms: eZ, setHasAcceptedTerms: e0 } = (0, T.P5)(),
        e8 = (0, o.bG)([Y.A], () => Y.A.popupCallbackCalled),
        e9 = (0, g.Y)(),
        e6 = l.useMemo(
            () => (null != ev && eD && e9 ? (0, w.v)(ev, eQ) : [{ planId: ea.gD.PREMIUM_MONTH_GUILD, quantity: eQ }]),
            [ev, eD, eQ, e9],
        ),
        e5 = l.useMemo(() => (0, D.A)(), []),
        [e7, e1] = (0, m.A)(() => [e5 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e4 } = (0, h.Ay)(ef, f.A.GUILD_BOOST_PURCHASE_MODAL),
        e3 = l.useMemo(
            () =>
                e6.find((e) => {
                    let { planId: n } = e;
                    return ea.pW.has(n);
                })?.planId ?? ea.gD.PREMIUM_MONTH_GUILD,
            [e6],
        ),
        e2 = (0, o.bG)([H.A], () => H.A.get(e3)?.skuId, [e3]),
        ne = l.useMemo(
            () => ({
                load_id: e7,
                payment_type: eo.fr[eo.VV.SUBSCRIPTION],
                sku_id: ea.pe.GUILD,
                subscription_type: es.rzx.PREMIUM,
                subscription_plan_id: e3,
                quantity: eQ,
                location: eh,
                source: eS,
                location_stack: e4,
                checkout_flow: I.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e7, eh, e4, eS, eQ, e3],
        );
    l.useEffect(() => {
        (0, $.c_)(eF);
    }, [eF]);
    let [nn, nt] = l.useState(M.pn.PLAN_SELECT),
        ni = l.useMemo(() => Date.now(), [nn]),
        nl = l.useCallback(
            (e, n) => {
                nt(e), eW(null);
                let t = Date.now();
                z.default.track(es.HAw.PAYMENT_FLOW_STEP, {
                    ...ne,
                    from_step: null != n ? n : nn,
                    to_step: e === M.pn.ADD_PAYMENT_STEPS ? M.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - ni,
                    flow_duration_ms: t - e1,
                    guild_id: eg,
                    application_id: ey,
                });
            },
            [eW, ne, nn, ni, e1, eg, ey],
        ),
        nr = {
            baseAnalyticsData: ne,
            flowStartTime: e1,
            guildId: eg,
            handleStepChange: nl,
            onSubscribeComplete: eb,
            paymentSourceId: eF,
            setIsSubmittingCurrentStep: eY,
            setPurchaseError: eW,
        },
        ns = l.useRef(nr);
    l.useEffect(() => {
        ns.current = nr;
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
            } = ns.current;
            (async () => {
                if (!0 === e8)
                    try {
                        if (null == Y.A.redirectedPaymentId) return;
                        await (0, S.tn)(Y.A.redirectedPaymentId),
                            i(M.pn.CONFIRM),
                            nu(L.h.COMPLETED),
                            null != t && (await e_(t, null != eA)),
                            l?.();
                    } catch (t) {
                        nu(L.h.FAIL),
                            a(t),
                            z.default.track(es.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: es.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, S.bl)();
                    }
            })();
        }, [e8, eA]),
        (0, _.Ay)(() => {
            K.A.hasFetchedSubscriptions() || (0, S.hP)(),
                null == eg ||
                    null != W.A.getGuild(eg) ||
                    null != j.A.getGuild(eg) ||
                    j.A.isGuildFetching(eg) ||
                    (0, N.y)(eg),
                (0, C.b)({ ...ne, guild_id: eg, application_id: ey, custom_checkout_flow: eT }),
                null != ev &&
                    null != ev.renewalMutations &&
                    z.default.track(es.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: eh, guild_id: eg });
        });
    let [na, no] = l.useState(ep),
        [nc, nu] = l.useState(L.h.WAITING),
        [nd, np] = l.useState(!0),
        nm = () => {
            r(nc === L.h.COMPLETED);
        },
        n_ = null != ev && ev.isPurchasedExternally;
    l.useEffect(() => {
        eV !== O.oc.PENDING &&
            nn !== M.pn.CONFIRM &&
            null != eL &&
            (na !== ep && no(ep), ep.includes(nn) || nn === M.pn.PREMIUM_UPSELL || nl(M.pn.REVIEW)),
            nn === M.pn.ADD_PAYMENT_STEPS && na !== em && no(em),
            n_ && nn !== M.pn.PLAN_SELECT && nt(M.pn.PLAN_SELECT);
    }, [nn, nl, n_, eV, ev, eL, na]),
        (0, O.b)(nn, eV, nl, nu),
        (0, M.zT)(nn, nc, nu);
    let nx = l.useRef(null),
        [nf, nh] = (0, x.A)(!1, 500),
        nS = (0, y.D7)({ location: "GuildBoostPurchaseModal" }),
        ng = (0, k.n)("GuildBoostPurchaseModal"),
        nb = ng && (nn === M.pn.REVIEW || nn === M.pn.CONFIRM),
        nI = (0, en.A)(nb),
        [nP, nE] = l.useState(null),
        [ny, nA] = l.useState([]),
        [nv, nC] = l.useState(!1),
        nN = l.useMemo(() => JSON.stringify(ny), [ny]);
    l.useEffect(() => {
        let e;
        e9 &&
            (null != H.A.get(ea.gD.PREMIUM_MONTH_GUILD) && nA((e = (0, $._w)(ea.gD.PREMIUM_MONTH_GUILD, eF, !1))),
            null == eF && null != ev && null != ev.paymentSourceId ? nE(ev.currency) : null != e && nE(e[0]));
    }, [eF, ev, e9, nN]);
    let nj = (0, B.Y)({
        paymentModalArgs: eG,
        initialStep: M.pn.PAYMENT_TYPE,
        prependSteps: [M.pn.PLAN_SELECT],
        appendSteps: [M.pn.REVIEW, M.pn.CONFIRM],
        breadcrumpSteps: na,
        currentBreadcrumpStep: nn,
        onReturn: () => {
            nl(Object.values(eB).length < 1 ? M.pn.PLAN_SELECT : M.pn.REVIEW, M.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            nl(M.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            z.default.track(es.HAw.PAYMENT_FLOW_STEP, {
                ...ne,
                from_step: n,
                to_step: t,
                step_duration_ms: i - ni,
                flow_duration_ms: i - e1,
                guild_id: eg,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eC) n = (0, i.jsx)(b.oO, {});
    else if (eM && eD && e9 && null != nP && "" !== nP)
        if (ev?.isPausedOrPausePending && !ev.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.cwr, {
                children: (0, i.jsx)("p", { className: eu.C, children: ec.intl.string(ec.t.mOWsF1) }),
            });
        else if (null != ev && null != ev.renewalMutations)
            n = (0, i.jsx)(c.cwr, {
                children: (0, i.jsx)("p", { className: eu.C, children: ec.intl.string(ec.t.npfhh0) }),
            });
        else if (nn === M.pn.PREMIUM_UPSELL) {
            s()(null != eU, "Missing nextPremiumSubscriptionPlan"), s()(nP, "Currency not defined");
            let e = null != eF ? { paymentSourceId: eF, currency: nP } : { currency: nP };
            n = (0, i.jsx)(er.A, {
                premiumSubscriptionPlan: eU,
                analyticsLocation: eh,
                analyticsSourceLocation: eS,
                onClose: nm,
                onBack: () => nl(M.pn.PLAN_SELECT),
                onSkip: () => nl(null != eL || e$ ? M.pn.REVIEW : M.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            s()(nP, "Currency not defined");
            let a = null != eF ? { paymentSourceId: eF, currency: nP } : { currency: nP },
                o = W.A.getGuild(eg),
                c = null == ek && null == o,
                m = null;
            switch (nn) {
                case M.pn.PLAN_SELECT:
                    s()(null != eg, "Missing guildId"),
                        s()(null != eU, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(et.As, {
                            premiumSubscriptionPlan: eU,
                            numGuildBoosts: eQ,
                            setNumGuildBoosts: eX,
                            setForceDisableSubmitButton: np,
                            premiumSubscription: ev,
                            existingAvailableSlots: ew,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nm(), null != d && d(), (0, U.e)();
                            },
                            priceOptions: a,
                            isRefreshEnabled: ng,
                            refreshNextStepLabel: (0, M.Ir)(
                                na.find((e) => e !== M.pn.PLAN_SELECT && e !== M.pn.CONFIRM) ?? M.pn.REVIEW,
                            ),
                        })),
                        n_ && null != ev && null != ev.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: eu.xK,
                                  children: [
                                      (0, i.jsx)(u.wx6, {
                                          type: "critical",
                                          children: ec.intl.format(ec.t["/m3Y3s"], {
                                              paymentGatewayName: eo.qm[ev.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !j.A.isGuildFetching(eg) &&
                              c &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.po8, {
                                          messageType: u.YCn.ERROR,
                                          className: eu.MR,
                                          children: ec.intl.string(ec.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = ng
                            ? (0, i.jsx)(u.Button, {
                                  variant: "secondary",
                                  text: ec.intl.string(ec.t["ETE/oC"]),
                                  onClick: nm,
                              })
                            : (0, i.jsx)(u.QWc, {
                                  text: ec.intl.string(ec.t.oEAioF),
                                  onClick: nm,
                                  variant: "secondary",
                              })),
                        (r = (0, i.jsx)(u.Button, {
                            variant: "primary",
                            text: ec.intl.string(ec.t["3PatSz"]),
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
                                forceDisableSubmitButton: nd,
                                numGuildBoostsToPurchase: eQ,
                                isDisabledBecauseExternalSubscription: n_,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                eP || (null != eR && eR.premiumSubscriptionType === ea.PremiumTypes.TIER_2)
                                    ? nl(null != eL || e$ ? M.pn.REVIEW : M.pn.ADD_PAYMENT_STEPS)
                                    : nl(M.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case M.pn.ADD_PAYMENT_STEPS:
                    break;
                case M.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(p.N, { className: eu.__invalid_body });
                    break;
                case M.pn.REVIEW:
                    s()(null != eU, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != eg, "Missing guildId"),
                        (e = (0, i.jsx)(el.pc, {
                            guildId: eg,
                            paymentSources: eB,
                            priceOptions: a,
                            currentPremiumSubscription: ev,
                            premiumSubscriptionPaymentSourceId: eL,
                            premiumSubscriptionPlan: eU,
                            newAdditionalPlans: e6,
                            onPurchaseTermsChange: e0,
                            legalTermsNodeRef: nx,
                            hasLegalTermsFlash: nf,
                            setPaymentSourceId: eH,
                            onPaymentSourceAdd: () => {
                                nl(M.pn.ADD_PAYMENT_STEPS), eH(null);
                            },
                        })),
                        (t = M.pn.PLAN_SELECT);
                    let _ = async () => {
                        s()(null != e6, "Missing newAdditionalPlans");
                        let e = (0, R.W)(eB, eF);
                        eW(null);
                        try {
                            nu(L.h.PURCHASING),
                                eY(!0),
                                s()(null != eF, "Missing paymentSourceId"),
                                s()(null != ej, "Missing invoicePreview");
                            let n = { amount: ej.total, currency: ej.currency },
                                t = a.currency ?? ej.currency,
                                i = (0, J.U8)(ev, e6, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (z.default.track(es.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...ne,
                                    duration_ms: Date.now() - e1,
                                    guild_id: eg,
                                    application_id: ey,
                                }),
                                nv)
                            )
                                return;
                            if (null == ev || null == eR) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, S.Ky)({
                                    items: e6,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nC(null != l.redirectURL);
                            } else {
                                let l = { items: (0, J.aE)(ev, e6) };
                                (l.currency = ev.currency ?? t),
                                    (l.paymentSource = null != eL ? eB[eL] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let r = await (0, S.nV)(ev, l, n, i, e4);
                                if (r.redirectConfirmation) return void nC(null != r.redirectURL);
                            }
                            null == eA && nl(M.pn.CONFIRM),
                                nu(L.h.COMPLETED),
                                null != eg && (await e_(eg, null != eA)),
                                null != eA && nm(),
                                eb?.();
                        } catch (n) {
                            nu(L.h.FAIL),
                                eW(n),
                                z.default.track(es.HAw.PAYMENT_FLOW_FAILED, {
                                    ...ne,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === es.hes.CARD ? es.kM_.STRIPE : es.kM_.BRAINTREE) : null,
                                    payment_source_id: eF,
                                    duration_ms: Date.now() - e1,
                                });
                        } finally {
                            nv || eY(!1);
                        }
                    };
                    (m = {
                        text: ec.intl.string(ec.t.eUEeCt),
                        loading: eK,
                        tooltipText: eZ ? void 0 : ec.intl.string(ec.t.XdvBLS),
                        onClick: eZ
                            ? _
                            : () => {
                                  null != nx.current && (nx.current.scrollIntoView({ behavior: "smooth" }), nh(!0));
                              },
                        variant: "active",
                    }),
                        (r = (0, i.jsx)(P.p, { ...m }));
                    break;
                case M.pn.CONFIRM:
                    let x = o?.name ?? ek?.name,
                        f = (0, R.g)(eB, eF),
                        h = (0, Q.b2)(eN.current) && null != eR && !ea.YV.has(eR.id);
                    e = (0, i.jsx)(ei.W, {
                        guild: o,
                        guildBoostQuantity: eQ + ew.length,
                        onClose: nm,
                        withAnimation: !1,
                        paymentSourceType: f,
                        fallbackGuildName: x,
                        didPurchaseOnFractionalPremium: h,
                        customCheckoutFlow: eT,
                    });
            }
            let g = null != ez && null == (0, M.ou)(ez) ? ez : eq;
            n =
                nn === M.pn.ADD_PAYMENT_STEPS
                    ? nj
                    : (0, i.jsx)(G.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let {
                                  currentStep: n,
                                  isUnifiedCheckoutUIEnabled: t,
                                  isBoostingPreCheckoutModalRefreshEnabled: i,
                              } = e;
                              return (t && n === M.pn.REVIEW) || n === M.pn.CONFIRM || (i && n === M.pn.PLAN_SELECT);
                          })({
                              currentStep: nn,
                              isUnifiedCheckoutUIEnabled: nS,
                              isBoostingPreCheckoutModalRefreshEnabled: ng,
                          }),
                          steps: na,
                          currentStep: nn,
                          paymentError: g,
                          purchaseErrorBlockRef: eJ,
                          hasCurrencies: ny.length > 1,
                          body: e,
                          footer: (0, i.jsx)(ex, {
                              currentStep: nn,
                              isUnifiedCheckoutUIEnabled: nS,
                              isRefreshEnabled: ng,
                              backStep: t,
                              handleStepChange: nl,
                              primaryButtonProps: m,
                              secondaryButton: l,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: eu._5, children: (0, i.jsx)(u.y$y, {}) });
    let nT = (0, A.u)({ skuId: e2, step: nn }),
        nM = null;
    if (!eC)
        if (ng && nn !== M.pn.PREMIUM_UPSELL)
            if (nS && nn === M.pn.REVIEW) nM = (0, i.jsx)(v.s3, { ...nT });
            else {
                let e = (0, i.jsx)(v.s3, { title: nT.title });
                nM = nS ? e : (0, i.jsx)(E.e0, { children: e });
            }
        else
            nS && nn === M.pn.REVIEW
                ? (nM = (0, i.jsx)(v.s3, { ...nT }))
                : nn !== M.pn.PREMIUM_UPSELL &&
                  (nM = (0, i.jsx)(X.A, { onClose: nm, currentStep: nn, purchaseState: nc }));
    return ng && nn === M.pn.CONFIRM
        ? (0, i.jsx)(ee.A, {
              mediaUrls: nI.mediaUrls,
              isSuccess: nI.isSuccess,
              transitionState: t,
              onClose: () => (nm(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(Z.A, {
                      transitionState: t,
                      guild: W.A.getGuild(eg),
                      guildBoostQuantity: eQ + ew.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : nS
          ? (0, i.jsx)(E.e0, {
                children: (0, i.jsxs)(v.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: () => (nm(), Promise.resolve()),
                    children: [nM, n],
                }),
            })
          : (0, i.jsxs)(u.dWK, { transitionState: t, onClose: () => (nm(), Promise.resolve()), children: [nM, n] });
}
function eh(e) {
    let n = (0, o.bG)([K.A], () => K.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, h.Ay)(f.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(h.f5, {
        value: t,
        children: (0, i.jsx)(T.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: I.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(ef, { ...e }),
        }),
    });
}
