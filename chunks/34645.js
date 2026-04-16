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
    x = t(304072),
    f = t(793574),
    h = t(688810),
    S = t(323082),
    g = t(160946),
    b = t(459793),
    I = t(589078),
    P = t(981036),
    y = t(725836),
    A = t(742810),
    E = t(584160),
    v = t(169797),
    C = t(94420),
    N = t(357669),
    j = t(832286),
    T = t(958340),
    M = t(156312),
    L = t(166532),
    R = t(566980),
    D = t(216641),
    U = t(925847),
    w = t(87719),
    k = t(253390),
    O = t(489254),
    G = t(251913),
    B = t(632638),
    W = t(480800),
    F = t(71393),
    Y = t(178368),
    V = t(825755),
    H = t(295405),
    K = t(97352),
    z = t(166403),
    q = t(954571),
    J = t(473145),
    $ = t(927578),
    Q = t(83617),
    X = t(615396),
    Z = t(802790),
    ee = t(636441),
    en = t(875022),
    et = t(458663),
    ei = t(595164),
    el = t(879100),
    er = t(599669),
    es = t(622501),
    ea = t(652215),
    eo = t(788868),
    ec = t(818348),
    eu = t(985018),
    ed = t(898640);
let ep = eo.gD.NONE_MONTH,
    em = [L.pn.PLAN_SELECT, L.pn.REVIEW, L.pn.CONFIRM],
    e_ = [L.pn.PLAN_SELECT, L.pn.ADD_PAYMENT_STEPS, L.pn.REVIEW, L.pn.CONFIRM];
async function ex(e, n) {
    await (0, d.CD)();
    let t = (0, J.D$)(Y.A.boostSlots);
    return (0, d.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function ef(e) {
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
    return n === L.pn.CONFIRM
        ? null
        : t && n === L.pn.REVIEW
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
                                  text: eu.intl.string(eu.t["13/7kX"]),
                                  onClick: () => a(r),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(u.BJc, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(l && n === L.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [d, p],
                        }),
                    ],
                }),
            });
}
function eh(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: d,
            analyticsLocations: eh,
            analyticsLocation: eS,
            analyticsSourceLocation: eg,
            guildId: eb,
            onSubscribeComplete: eI,
            totalNumberOfSlotsToAssign: eP = 1,
            disablePremiumUpsell: ey = !1,
            onSubscriptionConfirmation: eA,
            applicationId: eE,
            intent: ev,
        } = e,
        {
            activeSubscription: eC,
            blockedPayments: eN,
            startingFractionalPremiumEndsAtRef: ej,
            customCheckoutFlow: eT,
        } = (0, M.P5)(),
        eM = (0, C.sw)(),
        eL = (0, o.bG)([z.A], () => z.A.hasFetchedSubscriptions()),
        eR = null != eC ? eC.paymentSourceId : null,
        eD = (0, o.bG)([K.A], () => (null != eC ? (0, X.c9)(eC.planId) : null)),
        eU = (0, o.bG)([K.A], () => null == eC || null != K.A.get(eC.planId)),
        ew = (0, o.bG)([K.A], () => (null == eD ? K.A.get(ep) : eD)),
        ek = l.useRef((0, J.D$)(Y.A.boostSlots)).current,
        eO = (0, o.bG)([T.A], () => (null != eb ? T.A.getGuild(eb) : void 0), [eb]),
        eG = (0, o.bG)([H.A], () => H.A.defaultPaymentSourceId),
        eB = (0, W._V)(null != eR ? eR : eL ? eG : null),
        {
            paymentSources: eW,
            setPurchaseError: eF,
            paymentSourceId: eY,
            setIsSubmittingCurrentStep: eV,
            paymentAuthenticationState: eH,
            setPaymentSourceId: eK,
            isSubmittingCurrentStep: ez,
            paymentError: eq,
            purchaseError: eJ,
            purchaseErrorBlockRef: e$,
        } = eB,
        eQ = Object.keys(eW).length > 0,
        [eX, eZ] = l.useState(eP - ek.length),
        { hasAcceptedTerms: e0, setHasAcceptedTerms: e9 } = (0, M.P5)(),
        e8 = (0, o.bG)([V.A], () => V.A.popupCallbackCalled),
        e6 = (0, g.Y)(),
        e4 = l.useMemo(
            () => (null != eC && eU && e6 ? (0, k.v)(eC, eX) : [{ planId: eo.gD.PREMIUM_MONTH_GUILD, quantity: eX }]),
            [eC, eU, eX, e6],
        ),
        e5 = l.useMemo(() => (0, U.A)(), []),
        [e1, e3] = (0, m.A)(() => [e5 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e7 } = (0, h.Ay)(eh, f.A.GUILD_BOOST_PURCHASE_MODAL),
        e2 = l.useMemo(
            () =>
                e4.find((e) => {
                    let { planId: n } = e;
                    return eo.pW.has(n);
                })?.planId ?? eo.gD.PREMIUM_MONTH_GUILD,
            [e4],
        ),
        ne = (0, o.bG)([K.A], () => K.A.get(e2)?.skuId, [e2]),
        nn = l.useMemo(
            () => ({
                load_id: e1,
                payment_type: ec.fr[ec.VV.SUBSCRIPTION],
                sku_id: eo.pe.GUILD,
                subscription_type: ea.rzx.PREMIUM,
                subscription_plan_id: e2,
                quantity: eX,
                location: eS,
                source: eg,
                location_stack: e7,
                checkout_flow: I.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e1, eS, e7, eg, eX, e2],
        );
    l.useEffect(() => {
        (0, Q.c_)(eY);
    }, [eY]);
    let [nt, ni] = l.useState(L.pn.PLAN_SELECT),
        nl = l.useMemo(() => Date.now(), [nt]),
        nr = l.useCallback(
            (e, n) => {
                ni(e), eF(null);
                let t = Date.now();
                q.default.track(ea.HAw.PAYMENT_FLOW_STEP, {
                    ...nn,
                    from_step: null != n ? n : nt,
                    to_step: e === L.pn.ADD_PAYMENT_STEPS ? L.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - nl,
                    flow_duration_ms: t - e3,
                    guild_id: eb,
                    application_id: eE,
                });
            },
            [eF, nn, nt, nl, e3, eb, eE],
        ),
        ns = {
            baseAnalyticsData: nn,
            flowStartTime: e3,
            guildId: eb,
            handleStepChange: nr,
            onSubscribeComplete: eI,
            paymentSourceId: eY,
            setIsSubmittingCurrentStep: eV,
            setPurchaseError: eF,
        },
        na = l.useRef(ns);
    l.useEffect(() => {
        na.current = ns;
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
            } = na.current;
            (async () => {
                if (!0 === e8)
                    try {
                        if (null == V.A.redirectedPaymentId) return;
                        await (0, S.tn)(V.A.redirectedPaymentId),
                            i(L.pn.CONFIRM),
                            nd(R.h.COMPLETED),
                            null != t && (await ex(t, null != ev)),
                            l?.();
                    } catch (t) {
                        nd(R.h.FAIL),
                            a(t),
                            q.default.track(ea.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: ea.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, S.bl)();
                    }
            })();
        }, [e8, ev]),
        (0, _.Ay)(() => {
            z.A.hasFetchedSubscriptions() || (0, S.hP)(),
                null == eb ||
                    null != F.A.getGuild(eb) ||
                    null != T.A.getGuild(eb) ||
                    T.A.isGuildFetching(eb) ||
                    (0, j.y)(eb),
                (0, N.b)({ ...nn, guild_id: eb, application_id: eE, custom_checkout_flow: eT }),
                null != eC &&
                    null != eC.renewalMutations &&
                    q.default.track(ea.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: eS, guild_id: eb });
        });
    let [no, nc] = l.useState(em),
        [nu, nd] = l.useState(R.h.WAITING),
        [np, nm] = l.useState(!0),
        n_ = () => {
            r(nu === R.h.COMPLETED);
        },
        nx = null != eC && eC.isPurchasedExternally;
    l.useEffect(() => {
        eH !== G.oc.PENDING &&
            nt !== L.pn.CONFIRM &&
            null != eR &&
            (no !== em && nc(em), em.includes(nt) || nt === L.pn.PREMIUM_UPSELL || nr(L.pn.REVIEW)),
            nt === L.pn.ADD_PAYMENT_STEPS && no !== e_ && nc(e_),
            nx && nt !== L.pn.PLAN_SELECT && ni(L.pn.PLAN_SELECT);
    }, [nt, nr, nx, eH, eC, eR, no]),
        (0, G.b)(nt, eH, nr, nd),
        (0, L.zT)(nt, nu, nd);
    let nf = l.useRef(null),
        [nh, nS] = (0, x.A)(!1, 500),
        ng = (0, A.D7)({ location: "GuildBoostPurchaseModal" }),
        nb = (0, O.n)("GuildBoostPurchaseModal"),
        nI = nb && (nt === L.pn.REVIEW || nt === L.pn.CONFIRM),
        nP = (0, et.A)(nI),
        [ny, nA] = l.useState(null),
        [nE, nv] = l.useState([]),
        [nC, nN] = l.useState(!1),
        nj = l.useMemo(() => JSON.stringify(nE), [nE]);
    l.useEffect(() => {
        let e;
        e6 &&
            (null != K.A.get(eo.gD.PREMIUM_MONTH_GUILD) && nv((e = (0, Q._w)(eo.gD.PREMIUM_MONTH_GUILD, eY, !1))),
            null == eY && null != eC && null != eC.paymentSourceId ? nA(eC.currency) : null != e && nA(e[0]));
    }, [eY, eC, e6, nj]);
    let nT = (0, W.Y)({
        paymentModalArgs: eB,
        initialStep: L.pn.PAYMENT_TYPE,
        prependSteps: [L.pn.PLAN_SELECT],
        appendSteps: [L.pn.REVIEW, L.pn.CONFIRM],
        breadcrumpSteps: no,
        currentBreadcrumpStep: nt,
        onReturn: () => {
            nr(Object.values(eW).length < 1 ? L.pn.PLAN_SELECT : L.pn.REVIEW, L.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            nr(L.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            q.default.track(ea.HAw.PAYMENT_FLOW_STEP, {
                ...nn,
                from_step: n,
                to_step: t,
                step_duration_ms: i - nl,
                flow_duration_ms: i - e3,
                guild_id: eb,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eN) n = (0, i.jsx)(b.oO, {});
    else if (eL && eU && e6 && null != ny && "" !== ny)
        if (eC?.isPausedOrPausePending && !eC.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.cwr, {
                children: (0, i.jsx)("p", { className: ed.C, children: eu.intl.string(eu.t.mOWsF1) }),
            });
        else if (null != eC && null != eC.renewalMutations)
            n = (0, i.jsx)(c.cwr, {
                children: (0, i.jsx)("p", { className: ed.C, children: eu.intl.string(eu.t.npfhh0) }),
            });
        else if (nt === L.pn.PREMIUM_UPSELL) {
            s()(null != ew, "Missing nextPremiumSubscriptionPlan"), s()(ny, "Currency not defined");
            let e = null != eY ? { paymentSourceId: eY, currency: ny } : { currency: ny };
            n = (0, i.jsx)(es.A, {
                premiumSubscriptionPlan: ew,
                analyticsLocation: eS,
                analyticsSourceLocation: eg,
                onClose: n_,
                onBack: () => nr(L.pn.PLAN_SELECT),
                onSkip: () => nr(null != eR || eQ ? L.pn.REVIEW : L.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eA,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            s()(ny, "Currency not defined");
            let a = null != eY ? { paymentSourceId: eY, currency: ny } : { currency: ny },
                o = F.A.getGuild(eb),
                c = null == eO && null == o,
                m = null;
            switch (nt) {
                case L.pn.PLAN_SELECT:
                    s()(null != eb, "Missing guildId"),
                        s()(null != ew, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(ei.As, {
                            premiumSubscriptionPlan: ew,
                            numGuildBoosts: eX,
                            setNumGuildBoosts: eZ,
                            setForceDisableSubmitButton: nm,
                            premiumSubscription: eC,
                            existingAvailableSlots: ek,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                n_(), null != d && d(), (0, w.e)();
                            },
                            priceOptions: a,
                            isRefreshEnabled: nb,
                            refreshNextStepLabel: (0, L.Ir)(
                                no.find((e) => e !== L.pn.PLAN_SELECT && e !== L.pn.CONFIRM) ?? L.pn.REVIEW,
                            ),
                        })),
                        nx && null != eC && null != eC.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: ed.xK,
                                  children: [
                                      (0, i.jsx)(u.wx6, {
                                          type: "critical",
                                          children: eu.intl.format(eu.t["/m3Y3s"], {
                                              paymentGatewayName: ec.qm[eC.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !T.A.isGuildFetching(eb) &&
                              c &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.po8, {
                                          messageType: u.YCn.ERROR,
                                          className: ed.MR,
                                          children: eu.intl.string(eu.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = nb
                            ? (0, i.jsx)(u.Button, {
                                  variant: "secondary",
                                  text: eu.intl.string(eu.t["ETE/oC"]),
                                  onClick: n_,
                              })
                            : (0, i.jsx)(u.QWc, {
                                  text: eu.intl.string(eu.t.oEAioF),
                                  onClick: n_,
                                  variant: "secondary",
                              })),
                        (r = (0, i.jsx)(u.Button, {
                            variant: "primary",
                            text: eu.intl.string(eu.t["3PatSz"]),
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
                                forceDisableSubmitButton: np,
                                numGuildBoostsToPurchase: eX,
                                isDisabledBecauseExternalSubscription: nx,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                ey || (null != eD && eD.premiumSubscriptionType === eo.PremiumTypes.TIER_2)
                                    ? nr(null != eR || eQ ? L.pn.REVIEW : L.pn.ADD_PAYMENT_STEPS)
                                    : nr(L.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case L.pn.ADD_PAYMENT_STEPS:
                    break;
                case L.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(p.N, { className: ed.__invalid_body });
                    break;
                case L.pn.REVIEW:
                    s()(null != ew, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != eb, "Missing guildId"),
                        (e = (0, i.jsx)(er.pc, {
                            guildId: eb,
                            paymentSources: eW,
                            priceOptions: a,
                            currentPremiumSubscription: eC,
                            premiumSubscriptionPaymentSourceId: eR,
                            premiumSubscriptionPlan: ew,
                            newAdditionalPlans: e4,
                            onPurchaseTermsChange: e9,
                            legalTermsNodeRef: nf,
                            hasLegalTermsFlash: nh,
                            setPaymentSourceId: eK,
                            onPaymentSourceAdd: () => {
                                nr(L.pn.ADD_PAYMENT_STEPS), eK(null);
                            },
                        })),
                        (t = L.pn.PLAN_SELECT);
                    let _ = async () => {
                        s()(null != e4, "Missing newAdditionalPlans");
                        let e = (0, D.W)(eW, eY);
                        eF(null);
                        try {
                            nd(R.h.PURCHASING),
                                eV(!0),
                                s()(null != eY, "Missing paymentSourceId"),
                                s()(null != eM, "Missing invoicePreview");
                            let n = { amount: eM.total, currency: eM.currency },
                                t = a.currency ?? eM.currency,
                                i = (0, $.U8)(eC, e4, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (q.default.track(ea.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...nn,
                                    duration_ms: Date.now() - e3,
                                    guild_id: eb,
                                    application_id: eE,
                                }),
                                nC)
                            )
                                return;
                            if (null == eC || null == eD) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, S.Ky)({
                                    items: e4,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nN(null != l.redirectURL);
                            } else {
                                let l = { items: (0, $.aE)(eC, e4) };
                                (l.currency = eC.currency ?? t),
                                    (l.paymentSource = null != eR ? eW[eR] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let r = await (0, S.nV)(eC, l, n, i, e7);
                                if (r.redirectConfirmation) return void nN(null != r.redirectURL);
                            }
                            null == ev && nr(L.pn.CONFIRM),
                                nd(R.h.COMPLETED),
                                null != eb && (await ex(eb, null != ev)),
                                null != ev && n_(),
                                eI?.();
                        } catch (n) {
                            nd(R.h.FAIL),
                                eF(n),
                                q.default.track(ea.HAw.PAYMENT_FLOW_FAILED, {
                                    ...nn,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === ea.hes.CARD ? ea.kM_.STRIPE : ea.kM_.BRAINTREE) : null,
                                    payment_source_id: eY,
                                    duration_ms: Date.now() - e3,
                                });
                        } finally {
                            nC || eV(!1);
                        }
                    };
                    (m = {
                        text: eu.intl.string(eu.t.eUEeCt),
                        loading: ez,
                        tooltipText: e0 ? void 0 : eu.intl.string(eu.t.XdvBLS),
                        onClick: e0
                            ? _
                            : () => {
                                  null != nf.current && (nf.current.scrollIntoView({ behavior: "smooth" }), nS(!0));
                              },
                        variant: "active",
                    }),
                        (r = (0, i.jsx)(P.p, { ...m }));
                    break;
                case L.pn.CONFIRM:
                    let x = o?.name ?? eO?.name,
                        f = (0, D.g)(eW, eY),
                        h = (0, X.b2)(ej.current) && null != eD && !eo.YV.has(eD.id);
                    e = (0, i.jsx)(el.W, {
                        guild: o,
                        guildBoostQuantity: eX + ek.length,
                        onClose: n_,
                        withAnimation: !1,
                        paymentSourceType: f,
                        fallbackGuildName: x,
                        didPurchaseOnFractionalPremium: h,
                        customCheckoutFlow: eT,
                    });
            }
            let g = null != eq && null == (0, L.ou)(eq) ? eq : eJ;
            n =
                nt === L.pn.ADD_PAYMENT_STEPS
                    ? nT
                    : (0, i.jsx)(B.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let {
                                  currentStep: n,
                                  isUnifiedCheckoutUIEnabled: t,
                                  isBoostingPreCheckoutModalRefreshEnabled: i,
                              } = e;
                              return (t && n === L.pn.REVIEW) || n === L.pn.CONFIRM || (i && n === L.pn.PLAN_SELECT);
                          })({
                              currentStep: nt,
                              isUnifiedCheckoutUIEnabled: ng,
                              isBoostingPreCheckoutModalRefreshEnabled: nb,
                          }),
                          steps: no,
                          currentStep: nt,
                          paymentError: g,
                          purchaseErrorBlockRef: e$,
                          hasCurrencies: nE.length > 1,
                          body: e,
                          footer: (0, i.jsx)(ef, {
                              currentStep: nt,
                              isUnifiedCheckoutUIEnabled: ng,
                              isRefreshEnabled: nb,
                              backStep: t,
                              handleStepChange: nr,
                              primaryButtonProps: m,
                              secondaryButton: l,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: ed._5, children: (0, i.jsx)(u.y$y, {}) });
    let nM = (0, E.u)({ skuId: ne, step: nt }),
        nL = null;
    if (!eN)
        if (nb && nt !== L.pn.PREMIUM_UPSELL)
            if (ng && nt === L.pn.REVIEW) nL = (0, i.jsx)(v.s3, { ...nM });
            else {
                let e = (0, i.jsx)(v.s3, { title: nM.title });
                nL = ng ? e : (0, i.jsx)(y.e0, { children: e });
            }
        else
            ng && nt === L.pn.REVIEW
                ? (nL = (0, i.jsx)(v.s3, { ...nM }))
                : nt !== L.pn.PREMIUM_UPSELL &&
                  (nL = (0, i.jsx)(Z.A, { onClose: n_, currentStep: nt, purchaseState: nu }));
    return nb && nt === L.pn.CONFIRM
        ? (0, i.jsx)(en.A, {
              mediaUrls: nP.mediaUrls,
              isSuccess: nP.isSuccess,
              transitionState: t,
              onClose: () => (n_(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ee.A, {
                      transitionState: t,
                      guild: F.A.getGuild(eb),
                      guildBoostQuantity: eX + ek.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : ng
          ? (0, i.jsx)(y.e0, {
                children: (0, i.jsxs)(v.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: () => (n_(), Promise.resolve()),
                    children: [nL, n],
                }),
            })
          : (0, i.jsxs)(u.dWK, { transitionState: t, onClose: () => (n_(), Promise.resolve()), children: [nL, n] });
}
function eS(e) {
    let n = (0, o.bG)([z.A], () => z.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, h.Ay)(f.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(h.f5, {
        value: t,
        children: (0, i.jsx)(M.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: I.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(eh, { ...e }),
        }),
    });
}
