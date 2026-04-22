"use strict";
n.d(t, { default: () => eI });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(835245),
    o = n(311907),
    c = n(364840),
    d = n(430993),
    u = n(331322),
    _ = n(123292),
    p = n(289873),
    m = n(683071),
    h = n(512950),
    f = n(821609),
    b = n(923408),
    g = n(891197),
    A = n(444927),
    E = n(964486),
    x = n(793574),
    I = n(688810),
    v = n(323082),
    S = n(160946),
    C = n(459793),
    T = n(589078),
    y = n(981036),
    N = n(725836),
    R = n(584160),
    P = n(169797),
    w = n(94420),
    L = n(357669),
    O = n(832286),
    M = n(958340),
    j = n(156312),
    U = n(166532),
    D = n(566980),
    k = n(216641),
    F = n(925847),
    B = n(87719),
    G = n(253390),
    V = n(489254),
    W = n(251913),
    H = n(632638),
    Y = n(480800),
    Z = n(71393),
    z = n(178368),
    J = n(825755),
    K = n(295405),
    $ = n(97352),
    q = n(166403),
    X = n(954571),
    Q = n(473145),
    ee = n(927578),
    et = n(83617),
    en = n(615396),
    ei = n(802790),
    er = n(636441),
    ea = n(875022),
    el = n(458663),
    es = n(595164),
    eo = n(879100),
    ec = n(599669),
    ed = n(622501),
    eu = n(652215),
    e_ = n(788868),
    ep = n(818348),
    em = n(985018),
    eh = n(898640);
let ef = e_.gD.NONE_MONTH,
    eb = [U.pn.PLAN_SELECT, U.pn.REVIEW, U.pn.CONFIRM],
    eg = [U.pn.PLAN_SELECT, U.pn.ADD_PAYMENT_STEPS, U.pn.REVIEW, U.pn.CONFIRM];
async function eA(e, t) {
    await (0, b.CD)();
    let n = (0, Q.D$)(z.A.boostSlots);
    return (0, b.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function eE(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: r,
        handleStepChange: a,
        primaryButtonProps: s,
        secondaryButton: o,
        legacySubmitButton: d,
    } = e;
    return t === U.pn.CONFIRM
        ? null
        : t === U.pn.REVIEW
          ? (l()(null != s, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(P.lo, { onBackClick: null != r ? () => a(r) : void 0, primaryButtonProps: s }))
          : (0, i.jsx)(c.j, {
                children: (0, i.jsxs)(u.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != r ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != r
                            ? (0, i.jsx)(_.Q, {
                                  text: em.intl.string(em.t["13/7kX"]),
                                  onClick: () => a(r),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(u.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === U.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [o, d],
                        }),
                    ],
                }),
            });
}
function ex(e) {
    let t,
        {
            transitionState: n,
            onClose: a,
            closeGuildPerksModal: c,
            analyticsLocations: u,
            analyticsLocation: b,
            analyticsSourceLocation: ex,
            guildId: eI,
            onSubscribeComplete: ev,
            totalNumberOfSlotsToAssign: eS = 1,
            disablePremiumUpsell: eC = !1,
            onSubscriptionConfirmation: eT,
            applicationId: ey,
            intent: eN,
        } = e,
        {
            activeSubscription: eR,
            blockedPayments: eP,
            startingFractionalPremiumEndsAtRef: ew,
            customCheckoutFlow: eL,
            hasAcceptedTerms: eO,
        } = (0, j.P5)(),
        eM = (0, w.sw)(),
        ej = (0, o.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        eU = null != eR ? eR.paymentSourceId : null,
        eD = (0, o.bG)([$.A], () => (null != eR ? (0, en.c9)(eR.planId) : null)),
        ek = (0, o.bG)([$.A], () => null == eR || null != $.A.get(eR.planId)),
        eF = (0, o.bG)([$.A], () => (null == eD ? $.A.get(ef) : eD)),
        eB = r.useRef((0, Q.D$)(z.A.boostSlots)).current,
        eG = (0, o.bG)([M.A], () => (null != eI ? M.A.getGuild(eI) : void 0), [eI]),
        eV = (0, o.bG)([K.A], () => K.A.defaultPaymentSourceId),
        eW = (0, Y._V)(null != eU ? eU : ej ? eV : null),
        {
            paymentSources: eH,
            setPurchaseError: eY,
            paymentSourceId: eZ,
            setIsSubmittingCurrentStep: ez,
            paymentAuthenticationState: eJ,
            setPaymentSourceId: eK,
            isSubmittingCurrentStep: e$,
            paymentError: eq,
            purchaseError: eX,
            purchaseErrorBlockRef: eQ,
        } = eW,
        e0 = Object.keys(eH).length > 0,
        [e1, e7] = r.useState(eS - eB.length),
        e2 = (0, o.bG)([J.A], () => J.A.popupCallbackCalled),
        e4 = (0, S.Y)(),
        e3 = r.useMemo(
            () => (null != eR && ek && e4 ? (0, G.v)(eR, e1) : [{ planId: e_.gD.PREMIUM_MONTH_GUILD, quantity: e1 }]),
            [eR, ek, e1, e4],
        ),
        e8 = r.useMemo(() => (0, F.A)(), []),
        [e9, e5] = (0, A.A)(() => [e8 ?? (0, s.A)(), Date.now()]),
        { analyticsLocations: e6 } = (0, I.Ay)(u, x.A.GUILD_BOOST_PURCHASE_MODAL),
        te = r.useMemo(
            () =>
                e3.find((e) => {
                    let { planId: t } = e;
                    return e_.pW.has(t);
                })?.planId ?? e_.gD.PREMIUM_MONTH_GUILD,
            [e3],
        ),
        tt = (0, o.bG)([$.A], () => $.A.get(te)?.skuId, [te]),
        tn = r.useMemo(
            () => ({
                load_id: e9,
                payment_type: ep.fr[ep.VV.SUBSCRIPTION],
                sku_id: e_.pe.GUILD,
                subscription_type: eu.rzx.PREMIUM,
                subscription_plan_id: te,
                quantity: e1,
                location: b,
                source: ex,
                location_stack: e6,
                checkout_flow: T.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e9, b, e6, ex, e1, te],
        );
    r.useEffect(() => {
        (0, et.c_)(eZ);
    }, [eZ]);
    let [ti, tr] = r.useState(U.pn.PLAN_SELECT),
        ta = r.useMemo(() => Date.now(), [ti]),
        tl = r.useCallback(
            (e, t) => {
                tr(e), eY(null);
                let n = Date.now();
                X.default.track(eu.HAw.PAYMENT_FLOW_STEP, {
                    ...tn,
                    from_step: null != t ? t : ti,
                    to_step: e === U.pn.ADD_PAYMENT_STEPS ? U.pn.PAYMENT_TYPE : e,
                    step_duration_ms: n - ta,
                    flow_duration_ms: n - e5,
                    guild_id: eI,
                    application_id: ey,
                });
            },
            [eY, tn, ti, ta, e5, eI, ey],
        ),
        ts = {
            baseAnalyticsData: tn,
            flowStartTime: e5,
            guildId: eI,
            handleStepChange: tl,
            onSubscribeComplete: ev,
            paymentSourceId: eZ,
            setIsSubmittingCurrentStep: ez,
            setPurchaseError: eY,
        },
        to = r.useRef(ts);
    r.useEffect(() => {
        to.current = ts;
    }),
        r.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                guildId: n,
                handleStepChange: i,
                onSubscribeComplete: r,
                paymentSourceId: a,
                setIsSubmittingCurrentStep: l,
                setPurchaseError: s,
            } = to.current;
            (async () => {
                if (!0 === e2)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, v.tn)(J.A.redirectedPaymentId),
                            i(U.pn.CONFIRM),
                            t_(D.h.COMPLETED),
                            null != n && (await eA(n, null != eN)),
                            r?.();
                    } catch (n) {
                        t_(D.h.FAIL),
                            s(n),
                            X.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: n?.code,
                                payment_gateway: eu.kM_.STRIPE,
                                payment_source_id: a,
                                duration_ms: Date.now() - t,
                            });
                    } finally {
                        l(!1), (0, v.bl)();
                    }
            })();
        }, [e2, eN]),
        (0, E.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, v.hP)(),
                null == eI ||
                    null != Z.A.getGuild(eI) ||
                    null != M.A.getGuild(eI) ||
                    M.A.isGuildFetching(eI) ||
                    (0, O.y)(eI),
                (0, L.b)({ ...tn, guild_id: eI, application_id: ey, custom_checkout_flow: eL }),
                null != eR &&
                    null != eR.renewalMutations &&
                    X.default.track(eu.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: b, guild_id: eI });
        });
    let [tc, td] = r.useState(eb),
        [tu, t_] = r.useState(D.h.WAITING),
        [tp, tm] = r.useState(!0),
        th = () => {
            a(tu === D.h.COMPLETED);
        },
        tf = null != eR && eR.isPurchasedExternally;
    r.useEffect(() => {
        eJ !== W.oc.PENDING &&
            ti !== U.pn.CONFIRM &&
            null != eU &&
            (tc !== eb && td(eb), eb.includes(ti) || ti === U.pn.PREMIUM_UPSELL || tl(U.pn.REVIEW)),
            ti === U.pn.ADD_PAYMENT_STEPS && tc !== eg && td(eg),
            tf && ti !== U.pn.PLAN_SELECT && tr(U.pn.PLAN_SELECT);
    }, [ti, tl, tf, eJ, eR, eU, tc]),
        (0, W.b)(ti, eJ, tl, t_),
        (0, U.zT)(ti, tu, t_);
    let tb = (0, V.n)("GuildBoostPurchaseModal"),
        tg = tb && (ti === U.pn.REVIEW || ti === U.pn.CONFIRM),
        tA = (0, el.A)(tg),
        [tE, tx] = r.useState(null),
        [tI, tv] = r.useState([]),
        [tS, tC] = r.useState(!1),
        tT = r.useMemo(() => JSON.stringify(tI), [tI]);
    r.useEffect(() => {
        let e;
        e4 &&
            (null != $.A.get(e_.gD.PREMIUM_MONTH_GUILD) && tv((e = (0, et._w)(e_.gD.PREMIUM_MONTH_GUILD, eZ, !1))),
            null == eZ && null != eR && null != eR.paymentSourceId ? tx(eR.currency) : null != e && tx(e[0]));
    }, [eZ, eR, e4, tT]);
    let ty = (0, Y.Y)({
        paymentModalArgs: eW,
        initialStep: U.pn.PAYMENT_TYPE,
        prependSteps: [U.pn.PLAN_SELECT],
        appendSteps: [U.pn.REVIEW, U.pn.CONFIRM],
        breadcrumpSteps: tc,
        currentBreadcrumpStep: ti,
        onReturn: () => {
            tl(Object.values(eH).length < 1 ? U.pn.PLAN_SELECT : U.pn.REVIEW, U.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            tl(U.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                i = Date.now();
            X.default.track(eu.HAw.PAYMENT_FLOW_STEP, {
                ...tn,
                from_step: t,
                to_step: n,
                step_duration_ms: i - ta,
                flow_duration_ms: i - e5,
                guild_id: eI,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eP) t = (0, i.jsx)(C.oO, {});
    else if (ej && ek && e4 && null != tE && "" !== tE)
        if (eR?.isPausedOrPausePending && !eR.isPausedAllowsUpdatesButNotResume)
            t = (0, i.jsx)(d.c, {
                children: (0, i.jsx)("p", { className: eh.C, children: em.intl.string(em.t.mOWsF1) }),
            });
        else if (null != eR && null != eR.renewalMutations)
            t = (0, i.jsx)(d.c, {
                children: (0, i.jsx)("p", { className: eh.C, children: em.intl.string(em.t.npfhh0) }),
            });
        else if (ti === U.pn.PREMIUM_UPSELL) {
            l()(null != eF, "Missing nextPremiumSubscriptionPlan"), l()(tE, "Currency not defined");
            let e = null != eZ ? { paymentSourceId: eZ, currency: tE } : { currency: tE };
            t = (0, i.jsx)(ed.A, {
                premiumSubscriptionPlan: eF,
                analyticsLocation: b,
                analyticsSourceLocation: ex,
                onClose: th,
                onBack: () => tl(U.pn.PLAN_SELECT),
                onSkip: () => tl(null != eU || e0 ? U.pn.REVIEW : U.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eT,
                priceOptions: e,
            });
        } else {
            let e, n, r, a;
            l()(tE, "Currency not defined");
            let s = null != eZ ? { paymentSourceId: eZ, currency: tE } : { currency: tE },
                o = Z.A.getGuild(eI),
                d = null == eG && null == o,
                u = null;
            switch (ti) {
                case U.pn.PLAN_SELECT:
                    l()(null != eI, "Missing guildId"),
                        l()(null != eF, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(es.As, {
                            premiumSubscriptionPlan: eF,
                            numGuildBoosts: e1,
                            setNumGuildBoosts: e7,
                            setForceDisableSubmitButton: tm,
                            premiumSubscription: eR,
                            existingAvailableSlots: eB,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                th(), null != c && c(), (0, B.e)();
                            },
                            priceOptions: s,
                            isRefreshEnabled: tb,
                            refreshNextStepLabel: (0, U.Ir)(
                                tc.find((e) => e !== U.pn.PLAN_SELECT && e !== U.pn.CONFIRM) ?? U.pn.REVIEW,
                            ),
                        })),
                        tf && null != eR && null != eR.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: eh.xK,
                                  children: [
                                      (0, i.jsx)(m.w, {
                                          type: "critical",
                                          children: em.intl.format(em.t["/m3Y3s"], {
                                              paymentGatewayName: ep.qm[eR.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !M.A.isGuildFetching(eI) &&
                              d &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.p, {
                                          messageType: h.Y.ERROR,
                                          className: eh.MR,
                                          children: em.intl.string(em.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (r = tb
                            ? (0, i.jsx)(f.$, {
                                  variant: "secondary",
                                  text: em.intl.string(em.t["ETE/oC"]),
                                  onClick: th,
                              })
                            : (0, i.jsx)(_.Q, {
                                  text: em.intl.string(em.t.oEAioF),
                                  onClick: th,
                                  variant: "secondary",
                              })),
                        (a = (0, i.jsx)(f.$, {
                            variant: "primary",
                            text: em.intl.string(em.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: r,
                                } = e;
                                return t || 0 === n || i || r;
                            })({
                                forceDisableSubmitButton: tp,
                                numGuildBoostsToPurchase: e1,
                                isDisabledBecauseExternalSubscription: tf,
                                isMissingGuildInformation: d,
                            }),
                            onClick: () => {
                                eC || (null != eD && eD.premiumSubscriptionType === e_.PremiumTypes.TIER_2)
                                    ? tl(null != eU || e0 ? U.pn.REVIEW : U.pn.ADD_PAYMENT_STEPS)
                                    : tl(U.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case U.pn.ADD_PAYMENT_STEPS:
                    break;
                case U.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(g.N, { className: eh.__invalid_body });
                    break;
                case U.pn.REVIEW:
                    l()(null != eF, "Missing nextPremiumSubscriptionPlan"),
                        l()(null != eI, "Missing guildId"),
                        (e = (0, i.jsx)(ec.pc, {
                            guildId: eI,
                            paymentSources: eH,
                            priceOptions: s,
                            currentPremiumSubscription: eR,
                            premiumSubscriptionPaymentSourceId: eU,
                            premiumSubscriptionPlan: eF,
                            newAdditionalPlans: e3,
                            paymentSourceId: eZ,
                            setPaymentSourceId: eK,
                            onPaymentSourceAdd: () => {
                                tl(U.pn.ADD_PAYMENT_STEPS), eK(null);
                            },
                        })),
                        (n = U.pn.PLAN_SELECT);
                    let p = async () => {
                        l()(null != e3, "Missing newAdditionalPlans");
                        let e = (0, k.W)(eH, eZ);
                        eY(null);
                        try {
                            t_(D.h.PURCHASING),
                                ez(!0),
                                l()(null != eZ, "Missing paymentSourceId"),
                                l()(null != eM, "Missing invoicePreview");
                            let t = { amount: eM.total, currency: eM.currency },
                                n = s.currency ?? eM.currency,
                                i = (0, ee.U8)(eR, e3, n.toLowerCase(), s.paymentSourceId);
                            if (
                                (X.default.track(eu.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...tn,
                                    duration_ms: Date.now() - e5,
                                    guild_id: eI,
                                    application_id: ey,
                                }),
                                tS)
                            )
                                return;
                            if (null == eR || null == eD) {
                                l()(null != e, "Missing paymentSource");
                                let r = await (0, v.Ky)({
                                    items: e3,
                                    paymentSource: e,
                                    currency: n,
                                    expectedInvoicePrice: t,
                                    expectedRenewalPrice: i,
                                });
                                if (r.redirectConfirmation) return void tC(null != r.redirectURL);
                            } else {
                                let r = { items: (0, ee.aE)(eR, e3) };
                                (r.currency = eR.currency ?? n),
                                    (r.paymentSource = null != eU ? eH[eU] : void 0),
                                    null == r.paymentSource &&
                                        (l()(null != e, "Missing paymentSource"),
                                        (r.paymentSource = e),
                                        (r.currency = n));
                                let a = await (0, v.nV)(eR, r, t, i, e6);
                                if (a.redirectConfirmation) return void tC(null != a.redirectURL);
                            }
                            null == eN && tl(U.pn.CONFIRM),
                                t_(D.h.COMPLETED),
                                null != eI && (await eA(eI, null != eN)),
                                null != eN && th(),
                                ev?.();
                        } catch (t) {
                            t_(D.h.FAIL),
                                eY(t),
                                X.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
                                    ...tn,
                                    payment_error_code: t?.code,
                                    payment_gateway:
                                        null != e ? (e.type === eu.hes.CARD ? eu.kM_.STRIPE : eu.kM_.BRAINTREE) : null,
                                    payment_source_id: eZ,
                                    duration_ms: Date.now() - e5,
                                });
                        } finally {
                            tS || ez(!1);
                        }
                    };
                    (u = {
                        text: em.intl.string(em.t.eUEeCt),
                        loading: e$,
                        disabled: !eO,
                        onClick: p,
                        variant: "active",
                    }),
                        (a = (0, i.jsx)(y.p, { ...u }));
                    break;
                case U.pn.CONFIRM:
                    let b = o?.name ?? eG?.name,
                        A = (0, k.g)(eH, eZ),
                        E = (0, en.b2)(ew.current) && null != eD && !e_.YV.has(eD.id);
                    e = (0, i.jsx)(eo.W, {
                        guild: o,
                        guildBoostQuantity: e1 + eB.length,
                        onClose: th,
                        withAnimation: !1,
                        paymentSourceType: A,
                        fallbackGuildName: b,
                        didPurchaseOnFractionalPremium: E,
                        customCheckoutFlow: eL,
                    });
            }
            let x = null != eq && null == (0, U.ou)(eq) ? eq : eX;
            t =
                ti === U.pn.ADD_PAYMENT_STEPS
                    ? ty
                    : (0, i.jsx)(H.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: t, isBoostingPreCheckoutModalRefreshEnabled: n } = e;
                              return t === U.pn.REVIEW || t === U.pn.CONFIRM || (n && t === U.pn.PLAN_SELECT);
                          })({ currentStep: ti, isBoostingPreCheckoutModalRefreshEnabled: tb }),
                          steps: tc,
                          currentStep: ti,
                          paymentError: x,
                          purchaseErrorBlockRef: eQ,
                          hasCurrencies: tI.length > 1,
                          body: e,
                          footer: (0, i.jsx)(eE, {
                              currentStep: ti,
                              isRefreshEnabled: tb,
                              backStep: n,
                              handleStepChange: tl,
                              primaryButtonProps: u,
                              secondaryButton: r,
                              legacySubmitButton: a,
                          }),
                      });
        }
    else t = (0, i.jsx)("div", { className: eh._5, children: (0, i.jsx)(p.y, {}) });
    let tN = (0, R.u)({ skuId: tt, step: ti }),
        tR = null;
    return (eP ||
        (tb && ti !== U.pn.PREMIUM_UPSELL
            ? (tR = ti === U.pn.REVIEW ? (0, i.jsx)(P.s3, { ...tN }) : (0, i.jsx)(P.s3, { title: tN.title }))
            : ti === U.pn.REVIEW
              ? (tR = (0, i.jsx)(P.s3, { ...tN }))
              : ti !== U.pn.PREMIUM_UPSELL &&
                (tR = (0, i.jsx)(ei.A, { onClose: th, currentStep: ti, purchaseState: tu }))),
    tb && ti === U.pn.CONFIRM)
        ? (0, i.jsx)(ea.A, {
              mediaUrls: tA.mediaUrls,
              isSuccess: tA.isSuccess,
              transitionState: n,
              onClose: () => (th(), Promise.resolve()),
              children: (e, t) =>
                  (0, i.jsx)(er.A, {
                      transitionState: n,
                      guild: Z.A.getGuild(eI),
                      guildBoostQuantity: e1 + eB.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: t,
                  }),
          })
        : (0, i.jsx)(N.e0, {
              children: (0, i.jsxs)(P.Jg, {
                  transitionState: n,
                  size: "md",
                  onClose: () => (th(), Promise.resolve()),
                  children: [tR, t],
              }),
          });
}
function eI(e) {
    let t = (0, o.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, I.Ay)(x.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(I.f5, {
        value: n,
        children: (0, i.jsx)(j.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: T.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(ex, { ...e }),
        }),
    });
}
