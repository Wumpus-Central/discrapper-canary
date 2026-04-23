t.d(n, { default: () => eE });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(835245),
    o = t(311907),
    c = t(364840),
    u = t(430993),
    d = t(331322),
    p = t(123292),
    m = t(289873),
    _ = t(683071),
    f = t(512950),
    h = t(821609),
    g = t(923408),
    S = t(891197),
    x = t(444927),
    b = t(964486),
    I = t(793574),
    E = t(688810),
    A = t(323082),
    y = t(160946),
    P = t(459793),
    N = t(589078),
    v = t(981036),
    C = t(725836),
    T = t(584160),
    j = t(169797),
    M = t(94420),
    L = t(357669),
    R = t(832286),
    D = t(958340),
    U = t(156312),
    w = t(166532),
    k = t(566980),
    O = t(216641),
    G = t(925847),
    B = t(87719),
    F = t(253390),
    W = t(489254),
    V = t(251913),
    Y = t(632638),
    H = t(480800),
    z = t(71393),
    K = t(178368),
    q = t(825755),
    J = t(295405),
    $ = t(97352),
    Q = t(166403),
    X = t(954571),
    Z = t(473145),
    ee = t(927578),
    en = t(83617),
    et = t(615396),
    ei = t(802790),
    el = t(636441),
    er = t(875022),
    es = t(458663),
    ea = t(595164),
    eo = t(879100),
    ec = t(599669),
    eu = t(622501),
    ed = t(652215),
    ep = t(788868),
    em = t(818348),
    e_ = t(985018),
    ef = t(898640);
let eh = ep.gD.NONE_MONTH,
    eg = [w.pn.PLAN_SELECT, w.pn.REVIEW, w.pn.CONFIRM],
    eS = [w.pn.PLAN_SELECT, w.pn.ADD_PAYMENT_STEPS, w.pn.REVIEW, w.pn.CONFIRM];
async function ex(e, n) {
    await (0, g.CD)();
    let t = (0, Z.D$)(K.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function eb(e) {
    let {
        currentStep: n,
        isRefreshEnabled: t,
        backStep: l,
        handleStepChange: r,
        primaryButtonProps: a,
        secondaryButton: o,
        legacySubmitButton: u,
    } = e;
    return n === w.pn.CONFIRM
        ? null
        : n === w.pn.REVIEW
          ? (s()(null != a, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(j.lo, { onBackClick: null != l ? () => r(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(c.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: e_.intl.string(e_.t["13/7kX"]),
                                  onClick: () => r(l),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && n === w.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [o, u],
                        }),
                    ],
                }),
            });
}
function eI(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: c,
            analyticsLocations: d,
            analyticsLocation: g,
            analyticsSourceLocation: eI,
            guildId: eE,
            onSubscribeComplete: eA,
            totalNumberOfSlotsToAssign: ey = 1,
            disablePremiumUpsell: eP = !1,
            onSubscriptionConfirmation: eN,
            applicationId: ev,
            intent: eC,
        } = e,
        {
            activeSubscription: eT,
            blockedPayments: ej,
            startingFractionalPremiumEndsAtRef: eM,
            customCheckoutFlow: eL,
            hasAcceptedTerms: eR,
        } = (0, U.P5)(),
        eD = (0, M.sw)(),
        eU = (0, o.bG)([Q.A], () => Q.A.hasFetchedSubscriptions()),
        ew = null != eT ? eT.paymentSourceId : null,
        ek = (0, o.bG)([$.A], () => (null != eT ? (0, et.c9)(eT.planId) : null)),
        eO = (0, o.bG)([$.A], () => null == eT || null != $.A.get(eT.planId)),
        eG = (0, o.bG)([$.A], () => (null == ek ? $.A.get(eh) : ek)),
        eB = l.useRef((0, Z.D$)(K.A.boostSlots)).current,
        eF = (0, o.bG)([D.A], () => (null != eE ? D.A.getGuild(eE) : void 0), [eE]),
        eW = (0, o.bG)([J.A], () => J.A.defaultPaymentSourceId),
        eV = (0, H._V)(null != ew ? ew : eU ? eW : null),
        {
            paymentSources: eY,
            setPurchaseError: eH,
            paymentSourceId: ez,
            setIsSubmittingCurrentStep: eK,
            paymentAuthenticationState: eq,
            setPaymentSourceId: eJ,
            isSubmittingCurrentStep: e$,
            paymentError: eQ,
            purchaseError: eX,
            purchaseErrorBlockRef: eZ,
        } = eV,
        e0 = Object.keys(eY).length > 0,
        [e8, e9] = l.useState(ey - eB.length),
        e6 = (0, o.bG)([q.A], () => q.A.popupCallbackCalled),
        e1 = (0, y.Y)(),
        e4 = l.useMemo(
            () => (null != eT && eO && e1 ? (0, F.v)(eT, e8) : [{ planId: ep.gD.PREMIUM_MONTH_GUILD, quantity: e8 }]),
            [eT, eO, e8, e1],
        ),
        e3 = l.useMemo(() => (0, G.A)(), []),
        [e5, e2] = (0, x.A)(() => [e3 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e7 } = (0, E.Ay)(d, I.A.GUILD_BOOST_PURCHASE_MODAL),
        ne = l.useMemo(
            () =>
                e4.find((e) => {
                    let { planId: n } = e;
                    return ep.pW.has(n);
                })?.planId ?? ep.gD.PREMIUM_MONTH_GUILD,
            [e4],
        ),
        nn = (0, o.bG)([$.A], () => $.A.get(ne)?.skuId, [ne]),
        nt = l.useMemo(
            () => ({
                load_id: e5,
                payment_type: em.fr[em.VV.SUBSCRIPTION],
                sku_id: ep.pe.GUILD,
                subscription_type: ed.rzx.PREMIUM,
                subscription_plan_id: ne,
                quantity: e8,
                location: g,
                source: eI,
                location_stack: e7,
                checkout_flow: N.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e5, g, e7, eI, e8, ne],
        );
    l.useEffect(() => {
        (0, en.c_)(ez);
    }, [ez]);
    let [ni, nl] = l.useState(w.pn.PLAN_SELECT),
        nr = l.useMemo(() => Date.now(), [ni]),
        ns = l.useCallback(
            (e, n) => {
                nl(e), eH(null);
                let t = Date.now();
                X.default.track(ed.HAw.PAYMENT_FLOW_STEP, {
                    ...nt,
                    from_step: null != n ? n : ni,
                    to_step: e === w.pn.ADD_PAYMENT_STEPS ? w.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - nr,
                    flow_duration_ms: t - e2,
                    guild_id: eE,
                    application_id: ev,
                });
            },
            [eH, nt, ni, nr, e2, eE, ev],
        ),
        na = {
            baseAnalyticsData: nt,
            flowStartTime: e2,
            guildId: eE,
            handleStepChange: ns,
            onSubscribeComplete: eA,
            paymentSourceId: ez,
            setIsSubmittingCurrentStep: eK,
            setPurchaseError: eH,
        },
        no = l.useRef(na);
    l.useEffect(() => {
        no.current = na;
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
            } = no.current;
            (async () => {
                if (!0 === e6)
                    try {
                        if (null == q.A.redirectedPaymentId) return;
                        await (0, A.tn)(q.A.redirectedPaymentId),
                            i(w.pn.CONFIRM),
                            np(k.h.COMPLETED),
                            null != t && (await ex(t, null != eC)),
                            l?.();
                    } catch (t) {
                        np(k.h.FAIL),
                            a(t),
                            X.default.track(ed.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: ed.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, A.bl)();
                    }
            })();
        }, [e6, eC]),
        (0, b.Ay)(() => {
            Q.A.hasFetchedSubscriptions() || (0, A.hP)(),
                null == eE ||
                    null != z.A.getGuild(eE) ||
                    null != D.A.getGuild(eE) ||
                    D.A.isGuildFetching(eE) ||
                    (0, R.y)(eE),
                (0, L.b)({ ...nt, guild_id: eE, application_id: ev, custom_checkout_flow: eL }),
                null != eT &&
                    null != eT.renewalMutations &&
                    X.default.track(ed.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: g, guild_id: eE });
        });
    let [nc, nu] = l.useState(eg),
        [nd, np] = l.useState(k.h.WAITING),
        [nm, n_] = l.useState(!0),
        nf = () => {
            r(nd === k.h.COMPLETED);
        },
        nh = null != eT && eT.isPurchasedExternally;
    l.useEffect(() => {
        eq !== V.oc.PENDING &&
            ni !== w.pn.CONFIRM &&
            null != ew &&
            (nc !== eg && nu(eg), eg.includes(ni) || ni === w.pn.PREMIUM_UPSELL || ns(w.pn.REVIEW)),
            ni === w.pn.ADD_PAYMENT_STEPS && nc !== eS && nu(eS),
            nh && ni !== w.pn.PLAN_SELECT && nl(w.pn.PLAN_SELECT);
    }, [ni, ns, nh, eq, eT, ew, nc]),
        (0, V.b)(ni, eq, ns, np),
        (0, w.zT)(ni, nd, np);
    let ng = (0, W.n)("GuildBoostPurchaseModal"),
        nS = ng && (ni === w.pn.REVIEW || ni === w.pn.CONFIRM),
        nx = (0, es.A)(nS),
        [nb, nI] = l.useState(null),
        [nE, nA] = l.useState([]),
        [ny, nP] = l.useState(!1),
        nN = l.useMemo(() => JSON.stringify(nE), [nE]);
    l.useEffect(() => {
        let e;
        e1 &&
            (null != $.A.get(ep.gD.PREMIUM_MONTH_GUILD) && nA((e = (0, en._w)(ep.gD.PREMIUM_MONTH_GUILD, ez, !1))),
            null == ez && null != eT && null != eT.paymentSourceId ? nI(eT.currency) : null != e && nI(e[0]));
    }, [ez, eT, e1, nN]);
    let nv = (0, H.Y)({
        paymentModalArgs: eV,
        initialStep: w.pn.PAYMENT_TYPE,
        prependSteps: [w.pn.PLAN_SELECT],
        appendSteps: [w.pn.REVIEW, w.pn.CONFIRM],
        breadcrumpSteps: nc,
        currentBreadcrumpStep: ni,
        onReturn: () => {
            ns(Object.values(eY).length < 1 ? w.pn.PLAN_SELECT : w.pn.REVIEW, w.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            ns(w.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            X.default.track(ed.HAw.PAYMENT_FLOW_STEP, {
                ...nt,
                from_step: n,
                to_step: t,
                step_duration_ms: i - nr,
                flow_duration_ms: i - e2,
                guild_id: eE,
            });
        },
        shouldUseManaModal: !0,
    });
    if (ej) n = (0, i.jsx)(P.oO, {});
    else if (eU && eO && e1 && null != nb && "" !== nb)
        if (eT?.isPausedOrPausePending && !eT.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(u.c, {
                children: (0, i.jsx)("p", { className: ef.C, children: e_.intl.string(e_.t.mOWsF1) }),
            });
        else if (null != eT && null != eT.renewalMutations)
            n = (0, i.jsx)(u.c, {
                children: (0, i.jsx)("p", { className: ef.C, children: e_.intl.string(e_.t.npfhh0) }),
            });
        else if (ni === w.pn.PREMIUM_UPSELL) {
            s()(null != eG, "Missing nextPremiumSubscriptionPlan"), s()(nb, "Currency not defined");
            let e = null != ez ? { paymentSourceId: ez, currency: nb } : { currency: nb };
            n = (0, i.jsx)(eu.A, {
                premiumSubscriptionPlan: eG,
                analyticsLocation: g,
                analyticsSourceLocation: eI,
                onClose: nf,
                onBack: () => ns(w.pn.PLAN_SELECT),
                onSkip: () => ns(null != ew || e0 ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eN,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            s()(nb, "Currency not defined");
            let a = null != ez ? { paymentSourceId: ez, currency: nb } : { currency: nb },
                o = z.A.getGuild(eE),
                u = null == eF && null == o,
                d = null;
            switch (ni) {
                case w.pn.PLAN_SELECT:
                    s()(null != eE, "Missing guildId"),
                        s()(null != eG, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(ea.As, {
                            premiumSubscriptionPlan: eG,
                            numGuildBoosts: e8,
                            setNumGuildBoosts: e9,
                            setForceDisableSubmitButton: n_,
                            premiumSubscription: eT,
                            existingAvailableSlots: eB,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nf(), null != c && c(), (0, B.e)();
                            },
                            priceOptions: a,
                            isRefreshEnabled: ng,
                            refreshNextStepLabel: (0, w.Ir)(
                                nc.find((e) => e !== w.pn.PLAN_SELECT && e !== w.pn.CONFIRM) ?? w.pn.REVIEW,
                            ),
                        })),
                        nh && null != eT && null != eT.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: ef.xK,
                                  children: [
                                      (0, i.jsx)(_.w, {
                                          type: "critical",
                                          children: e_.intl.format(e_.t["/m3Y3s"], {
                                              paymentGatewayName: em.qm[eT.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !D.A.isGuildFetching(eE) &&
                              u &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(f.p, {
                                          messageType: f.Y.ERROR,
                                          className: ef.MR,
                                          children: e_.intl.string(e_.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = ng
                            ? (0, i.jsx)(h.$, {
                                  variant: "secondary",
                                  text: e_.intl.string(e_.t["ETE/oC"]),
                                  onClick: nf,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: e_.intl.string(e_.t.oEAioF),
                                  onClick: nf,
                                  variant: "secondary",
                              })),
                        (r = (0, i.jsx)(h.$, {
                            variant: "primary",
                            text: e_.intl.string(e_.t["3PatSz"]),
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
                                forceDisableSubmitButton: nm,
                                numGuildBoostsToPurchase: e8,
                                isDisabledBecauseExternalSubscription: nh,
                                isMissingGuildInformation: u,
                            }),
                            onClick: () => {
                                eP || (null != ek && ek.premiumSubscriptionType === ep.PremiumTypes.TIER_2)
                                    ? ns(null != ew || e0 ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS)
                                    : ns(w.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case w.pn.ADD_PAYMENT_STEPS:
                    break;
                case w.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(S.N, { className: ef.__invalid_body });
                    break;
                case w.pn.REVIEW:
                    s()(null != eG, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != eE, "Missing guildId"),
                        (e = (0, i.jsx)(ec.pc, {
                            guildId: eE,
                            paymentSources: eY,
                            priceOptions: a,
                            currentPremiumSubscription: eT,
                            premiumSubscriptionPaymentSourceId: ew,
                            premiumSubscriptionPlan: eG,
                            newAdditionalPlans: e4,
                            paymentSourceId: ez,
                            setPaymentSourceId: eJ,
                            onPaymentSourceAdd: () => {
                                ns(w.pn.ADD_PAYMENT_STEPS), eJ(null);
                            },
                        })),
                        (t = w.pn.PLAN_SELECT);
                    let m = async () => {
                        s()(null != e4, "Missing newAdditionalPlans");
                        let e = (0, O.W)(eY, ez);
                        eH(null);
                        try {
                            np(k.h.PURCHASING),
                                eK(!0),
                                s()(null != ez, "Missing paymentSourceId"),
                                s()(null != eD, "Missing invoicePreview");
                            let n = { amount: eD.total, currency: eD.currency },
                                t = a.currency ?? eD.currency,
                                i = (0, ee.U8)(eT, e4, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (X.default.track(ed.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...nt,
                                    duration_ms: Date.now() - e2,
                                    guild_id: eE,
                                    application_id: ev,
                                }),
                                ny)
                            )
                                return;
                            if (null == eT || null == ek) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, A.Ky)({
                                    items: e4,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nP(null != l.redirectURL);
                            } else {
                                let l = { items: (0, ee.aE)(eT, e4) };
                                (l.currency = eT.currency ?? t),
                                    (l.paymentSource = null != ew ? eY[ew] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let r = await (0, A.nV)(eT, l, n, i, e7);
                                if (r.redirectConfirmation) return void nP(null != r.redirectURL);
                            }
                            null == eC && ns(w.pn.CONFIRM),
                                np(k.h.COMPLETED),
                                null != eE && (await ex(eE, null != eC)),
                                null != eC && nf(),
                                eA?.();
                        } catch (n) {
                            np(k.h.FAIL),
                                eH(n),
                                X.default.track(ed.HAw.PAYMENT_FLOW_FAILED, {
                                    ...nt,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === ed.hes.CARD ? ed.kM_.STRIPE : ed.kM_.BRAINTREE) : null,
                                    payment_source_id: ez,
                                    duration_ms: Date.now() - e2,
                                });
                        } finally {
                            ny || eK(!1);
                        }
                    };
                    (d = {
                        text: e_.intl.string(e_.t.eUEeCt),
                        loading: e$,
                        disabled: !eR,
                        onClick: m,
                        variant: "active",
                    }),
                        (r = (0, i.jsx)(v.p, { ...d }));
                    break;
                case w.pn.CONFIRM:
                    let g = o?.name ?? eF?.name,
                        x = (0, O.g)(eY, ez),
                        b = (0, et.b2)(eM.current) && null != ek && !ep.YV.has(ek.id);
                    e = (0, i.jsx)(eo.W, {
                        guild: o,
                        guildBoostQuantity: e8 + eB.length,
                        onClose: nf,
                        withAnimation: !1,
                        paymentSourceType: x,
                        fallbackGuildName: g,
                        didPurchaseOnFractionalPremium: b,
                        customCheckoutFlow: eL,
                    });
            }
            let I = null != eQ && null == (0, w.ou)(eQ) ? eQ : eX;
            n =
                ni === w.pn.ADD_PAYMENT_STEPS
                    ? nv
                    : (0, i.jsx)(Y.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === w.pn.REVIEW || n === w.pn.CONFIRM || (t && n === w.pn.PLAN_SELECT);
                          })({ currentStep: ni, isBoostingPreCheckoutModalRefreshEnabled: ng }),
                          steps: nc,
                          currentStep: ni,
                          paymentError: I,
                          purchaseErrorBlockRef: eZ,
                          hasCurrencies: nE.length > 1,
                          body: e,
                          footer: (0, i.jsx)(eb, {
                              currentStep: ni,
                              isRefreshEnabled: ng,
                              backStep: t,
                              handleStepChange: ns,
                              primaryButtonProps: d,
                              secondaryButton: l,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: ef._5, children: (0, i.jsx)(m.y, {}) });
    let nC = (0, T.u)({ skuId: nn, step: ni }),
        nT = null;
    return (ej ||
        (ng && ni !== w.pn.PREMIUM_UPSELL
            ? (nT = ni === w.pn.REVIEW ? (0, i.jsx)(j.s3, { ...nC }) : (0, i.jsx)(j.s3, { title: nC.title }))
            : ni === w.pn.REVIEW
              ? (nT = (0, i.jsx)(j.s3, { ...nC }))
              : ni !== w.pn.PREMIUM_UPSELL &&
                (nT = (0, i.jsx)(ei.A, { onClose: nf, currentStep: ni, purchaseState: nd }))),
    ng && ni === w.pn.CONFIRM)
        ? (0, i.jsx)(er.A, {
              mediaUrls: nx.mediaUrls,
              isSuccess: nx.isSuccess,
              transitionState: t,
              onClose: () => (nf(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(el.A, {
                      transitionState: t,
                      guild: z.A.getGuild(eE),
                      guildBoostQuantity: e8 + eB.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(C.e0, {
              children: (0, i.jsxs)(j.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nf(), Promise.resolve()),
                  children: [nT, n],
              }),
          });
}
function eE(e) {
    let n = (0, o.bG)([Q.A], () => Q.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, E.Ay)(I.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(E.f5, {
        value: t,
        children: (0, i.jsx)(U.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: N.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(eI, { ...e }),
        }),
    });
}
