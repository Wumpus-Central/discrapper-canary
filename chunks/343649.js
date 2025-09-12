n.d(t, {
    P: () => eo,
    default: () => em,
}),
    n(388685),
    n(49124);
var l,
    i = n(951288),
    r = n(647438),
    s = n(120356),
    o = n.n(s),
    a = n(512722),
    c = n.n(a),
    u = n(772848),
    d = n(442837),
    p = n(780384),
    m = n(755721),
    E = n(481060),
    P = n(355467),
    _ = n(179360),
    h = n(723484),
    S = n(211266),
    y = n(493773),
    g = n(330726),
    f = n(100527),
    I = n(906732),
    N = n(15640),
    O = n(89057),
    b = n(600164),
    M = n(232127),
    x = n(31996),
    L = n(356264),
    T = n(563132),
    j = n(409813),
    C = n(45572),
    A = n(435020),
    k = n(845220),
    R = n(98278),
    v = n(431369),
    D = n(176919),
    Z = n(3409),
    w = n(185139),
    U = n(210887),
    G = n(430824),
    z = n(314884),
    F = n(975060),
    W = n(853872),
    Y = n(509545),
    B = n(78839),
    H = n(626135),
    V = n(267642),
    X = n(74538),
    K = n(212895),
    $ = n(296848),
    q = n(518062),
    J = n(4434),
    Q = n(333451),
    ee = n(981631),
    et = n(474936),
    en = n(231338),
    el = n(388032),
    ei = n(290136);
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var eo =
    12633 == n.j
        ? (((l = {})[(l.NONE = 0)] = "NONE"), (l[(l.LEVEL = 1)] = "LEVEL"), (l[(l.PERK = 2)] = "PERK"), l)
        : null;
let ea = et.Xh.NONE_MONTH,
    ec = [j.h8.PLAN_SELECT, j.h8.REVIEW, j.h8.CONFIRM],
    eu = [j.h8.PLAN_SELECT, j.h8.ADD_PAYMENT_STEPS, j.h8.REVIEW, j.h8.CONFIRM];
async function ed(e, t) {
    await (0, _.X8)();
    let n = (0, V.vx)(z.Z.boostSlots);
    return (0, _.W3)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function ep(e) {
    let t,
        {
            transitionState: n,
            onClose: l,
            closeGuildPerksModal: s,
            analyticsLocations: a,
            analyticsLocation: _,
            analyticsSourceLocation: eo,
            guildId: ep,
            onSubscribeComplete: em,
            totalNumberOfSlotsToAssign: eE = 1,
            disablePremiumUpsell: eP = !1,
            onSubscriptionConfirmation: e_,
            applicationId: eh,
            intent: eS = 0,
        } = e,
        {
            activeSubscription: ey,
            blockedPayments: eg,
            startingFractionalPremiumEndsAtRef: ef,
            invoicePreview: eI,
            customCheckoutFlow: eN,
        } = (0, T.JL)(),
        eO = (0, d.e7)([B.Z], () => B.Z.hasFetchedSubscriptions()),
        eb = null != ey ? ey.paymentSourceId : null,
        eM = (0, d.e7)([Y.Z], () => (null != ey ? (0, $.oE)(ey.planId) : null)),
        ex = (0, d.e7)([Y.Z], () => null == ey || null != Y.Z.get(ey.planId)),
        eL = (0, d.e7)([Y.Z], () => (null == eM ? Y.Z.get(ea) : eM)),
        eT = (0, d.e7)([U.Z], () => U.Z.theme),
        ej = r.useRef((0, V.vx)(z.Z.boostSlots)).current,
        eC = (0, d.e7)([L.Z], () => (null != ep ? L.Z.getGuild(ep) : void 0), [ep]),
        eA = (0, d.e7)([W.Z], () => W.Z.defaultPaymentSourceId),
        ek = (0, Z.fL)(null != eb ? eb : eO ? eA : null),
        {
            paymentSources: eR,
            setPurchaseError: ev,
            paymentSourceId: eD,
            setIsSubmittingCurrentStep: eZ,
            paymentAuthenticationState: ew,
            setPaymentSourceId: eU,
            isSubmittingCurrentStep: eG,
            paymentError: ez,
            purchaseError: eF,
            purchaseErrorBlockRef: eW,
        } = ek,
        eY = Object.keys(eR).length > 0,
        [eB, eH] = r.useState(eE - ej.length),
        [eV, eX] = r.useState(!1),
        eK = (0, d.e7)([F.Z], () => F.Z.popupCallbackCalled),
        e$ = (0, N.V)(),
        eq = r.useMemo(
            () =>
                null != ey && ex && e$
                    ? (0, v.g)(ey, eB)
                    : [
                          {
                              planId: et.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eB,
                          },
                      ],
            [ey, ex, eB, e$],
        ),
        eJ = r.useMemo(() => (0, k.b)(), []),
        [eQ, e0] = (0, S.Z)(() => [null != eJ ? eJ : (0, u.Z)(), Date.now()]),
        { analyticsLocations: e8 } = (0, I.ZP)(a, f.Z.GUILD_BOOST_PURCHASE_MODAL),
        e3 = r.useMemo(() => {
            var e, t;
            return {
                load_id: eQ,
                payment_type: en.Zu[en.GZ.SUBSCRIPTION],
                sku_id: et.Si.GUILD,
                subscription_type: ee.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eq.find((e) => {
                            let { planId: t } = e;
                            return et.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : et.Xh.PREMIUM_MONTH_GUILD,
                quantity: eB,
                location: _,
                source: eo,
                location_stack: e8,
            };
        }, [eQ, _, e8, eo, eq, eB]);
    r.useEffect(() => {
        (0, K.i1)(eD);
    }, [eD]);
    let [e1, e2] = r.useState(j.h8.PLAN_SELECT),
        e4 = r.useMemo(() => Date.now(), [e1]),
        e7 = r.useCallback(
            (e, t) => {
                e2(e), ev(null);
                let n = Date.now();
                H.default.track(
                    ee.rMx.PAYMENT_FLOW_STEP,
                    es(er({}, e3), {
                        from_step: null != t ? t : e1,
                        to_step: e === j.h8.ADD_PAYMENT_STEPS ? j.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - e4,
                        flow_duration_ms: n - e0,
                        guild_id: ep,
                        application_id: eh,
                    }),
                );
            },
            [ev, e3, e1, e4, e0, ep, eh],
        ),
        e6 = {
            baseAnalyticsData: e3,
            flowStartTime: e0,
            guildId: ep,
            handleStepChange: e7,
            onSubscribeComplete: em,
            paymentSourceId: eD,
            setIsSubmittingCurrentStep: eZ,
            setPurchaseError: ev,
        },
        e5 = r.useRef(e6);
    r.useEffect(() => {
        e5.current = e6;
    }),
        r.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                guildId: n,
                handleStepChange: l,
                onSubscribeComplete: i,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: o,
            } = e5.current;
            (async () => {
                if (!0 === eK)
                    try {
                        if (null == F.Z.redirectedPaymentId) return;
                        await (0, P.OP)(F.Z.redirectedPaymentId),
                            l(j.h8.CONFIRM),
                            tn(C.A.COMPLETED),
                            null != n && (await ed(n, 0 !== eS)),
                            null == i || i();
                    } catch (n) {
                        tn(C.A.FAIL),
                            o(n),
                            H.default.track(
                                ee.rMx.PAYMENT_FLOW_FAILED,
                                es(er({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: ee.gg$.STRIPE,
                                    payment_source_id: r,
                                    duration_ms: Date.now() - t,
                                }),
                            );
                    } finally {
                        s(!1), (0, P.K2)();
                    }
            })();
        }, [eK, eS]),
        (0, y.ZP)(() => {
            B.Z.hasFetchedSubscriptions() || (0, P.jg)(),
                null != ep && null == G.Z.getGuild(ep) && null == L.Z.getGuild(ep) && (0, x.Q)(ep),
                (0, M.U)(
                    es(er({}, e3), {
                        guild_id: ep,
                        application_id: eh,
                        custom_checkout_flow: eN,
                    }),
                ),
                null != ey &&
                    null != ey.renewalMutations &&
                    H.default.track(ee.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: _,
                        guild_id: ep,
                    });
        });
    let [e9, te] = r.useState(ec),
        [tt, tn] = r.useState(C.A.WAITING),
        [tl, ti] = r.useState(!0),
        tr = () => {
            l(tt === C.A.COMPLETED);
        },
        ts = null != ey && ey.isPurchasedExternally;
    r.useEffect(() => {
        ew !== D.wr.PENDING &&
            e1 !== j.h8.CONFIRM &&
            null != eb &&
            (e9 !== ec && te(ec), ec.includes(e1) || e1 === j.h8.PREMIUM_UPSELL || e7(j.h8.REVIEW)),
            e1 === j.h8.ADD_PAYMENT_STEPS && e9 !== eu && te(eu),
            ts && e1 !== j.h8.PLAN_SELECT && e2(j.h8.PLAN_SELECT);
    }, [e1, e7, ts, ew, ey, eb, e9]),
        (0, D.bp)(e1, ew, e7, tn),
        (0, j.dZ)(e1, tt, tn);
    let to = r.useRef(null),
        [ta, tc] = (0, g.Z)(!1, 500),
        [tu, td] = r.useState(null),
        [tp, tm] = r.useState([]),
        [tE, tP] = r.useState(!1),
        t_ = r.useMemo(() => JSON.stringify(tp), [tp]);
    r.useEffect(() => {
        let e;
        e$ &&
            (null != Y.Z.get(et.Xh.PREMIUM_MONTH_GUILD) && tm((e = (0, K.DE)(et.Xh.PREMIUM_MONTH_GUILD, eD, !1))),
            null == eD && null != ey && null != ey.paymentSourceId ? td(ey.currency) : null != e && td(e[0]));
    }, [eD, ey, e$, t_]);
    let th = (0, Z.vP)({
        paymentModalArgs: ek,
        initialStep: j.h8.PAYMENT_TYPE,
        prependSteps: [j.h8.PLAN_SELECT],
        appendSteps: [j.h8.REVIEW, j.h8.CONFIRM],
        breadcrumpSteps: e9,
        currentBreadcrumpStep: e1,
        onReturn: () => {
            e7(Object.values(eR).length < 1 ? j.h8.PLAN_SELECT : j.h8.REVIEW, j.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e7(j.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                l = Date.now();
            H.default.track(
                ee.rMx.PAYMENT_FLOW_STEP,
                es(er({}, e3), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: l - e4,
                    flow_duration_ms: l - e0,
                    guild_id: ep,
                }),
            );
        },
    });
    if (eg) t = (0, i.jsx)(O.Vq, { onClose: tr });
    else if (eO && ex && e$ && null != tu && "" !== tu)
        if ((null == ey ? void 0 : ey.isPausedOrPausePending) && !ey.isPausedAllowsUpdatesButNotResume)
            t = (0, i.jsx)(E.hzk, {
                "data-migration-pending": !0,
                children: (0, i.jsx)("p", {
                    className: ei.copy,
                    children: el.intl.string(el.t.mOWsFx),
                }),
            });
        else if (null != ey && null != ey.renewalMutations)
            t = (0, i.jsx)(E.hzk, {
                "data-migration-pending": !0,
                children: (0, i.jsx)("p", {
                    className: ei.copy,
                    children: el.intl.string(el.t.npfhh4),
                }),
            });
        else if (e1 === j.h8.PREMIUM_UPSELL) {
            c()(null != eL, "Missing nextPremiumSubscriptionPlan"), c()(tu, "Currency not defined");
            let e =
                null != eD
                    ? {
                          paymentSourceId: eD,
                          currency: tu,
                      }
                    : { currency: tu };
            t = (0, i.jsx)(Q.Z, {
                premiumSubscriptionPlan: eL,
                analyticsLocation: _,
                analyticsSourceLocation: eo,
                onClose: tr,
                onBack: () => e7(j.h8.PLAN_SELECT),
                onSkip: () => e7(null != eb || eY ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: e_,
                priceOptions: e,
            });
        } else {
            let e, n, l, r;
            c()(tu, "Currency not defined");
            let o =
                null != eD
                    ? {
                          paymentSourceId: eD,
                          currency: tu,
                      }
                    : { currency: tu };
            switch (e1) {
                case j.h8.PLAN_SELECT:
                    c()(null != ep, "Missing guildId"),
                        c()(null != eL, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(J.CP, {
                            premiumSubscriptionPlan: eL,
                            numGuildBoosts: eB,
                            setNumGuildBoosts: eH,
                            setForceDisableSubmitButton: ti,
                            premiumSubscription: ey,
                            existingAvailableSlots: ej,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                tr(), null != s && s(), (0, R.z)();
                            },
                            priceOptions: o,
                        })),
                        ts &&
                            null != ey &&
                            null != ey.paymentGateway &&
                            (e = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(E.kzN, {
                                        className: ei.externalErrorBlock,
                                        children: el.intl.format(el.t["/m3Y3t"], {
                                            paymentGatewayName: en.Vz[ey.paymentGateway],
                                        }),
                                    }),
                                    e,
                                ],
                            })),
                        (l = (0, i.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, p.ap)(eT) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
                            onClick: tr,
                            children: el.intl.string(el.t.oEAioK),
                        })),
                        (r = (0, i.jsx)(E.zxk, {
                            variant: "primary",
                            text: el.intl.string(el.t["3PatS0"]),
                            type: "submit",
                            disabled: tl || 0 === eB || ts,
                            onClick: () => {
                                if (!eP && (null == eM || eM.premiumSubscriptionType !== et.p9.TIER_2))
                                    return void e7(j.h8.PREMIUM_UPSELL);
                                e7(null != eb || eY ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS);
                            },
                        }));
                    break;
                case j.h8.ADD_PAYMENT_STEPS:
                    break;
                case j.h8.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(h.F, { className: ei.__invalid_body });
                    break;
                case j.h8.REVIEW:
                    c()(null != eL, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(J.Gq, {
                            paymentSources: eR,
                            priceOptions: o,
                            currentPremiumSubscription: ey,
                            premiumSubscriptionPaymentSourceId: eb,
                            premiumSubscriptionPlan: eL,
                            newAdditionalPlans: eq,
                            onPaymentSourceChange: (e) => eU(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e7(j.h8.ADD_PAYMENT_STEPS), eU(null);
                            },
                            onPurchaseTermsChange: eX,
                            legalTermsNodeRef: to,
                            hasLegalTermsFlash: ta,
                        })),
                        (n = j.h8.PLAN_SELECT),
                        (r = eV
                            ? (0, i.jsx)(E.zxk, {
                                  variant: "active",
                                  text: el.intl.string(el.t.eUEeCg),
                                  type: "submit",
                                  loading: eG,
                                  onClick: async () => {
                                      c()(null != eq, "Missing newAdditionalPlans");
                                      let e = (0, A.m)(eR, eD);
                                      ev(null);
                                      try {
                                          tn(C.A.PURCHASING),
                                              eZ(!0),
                                              c()(null != eD, "Missing paymentSourceId"),
                                              c()(null != eI, "Missing invoicePreview");
                                          let t = {
                                                  amount: eI.total,
                                                  currency: eI.currency,
                                              },
                                              n = (0, X.sG)(ey, eq, o.currency.toLowerCase(), o.paymentSourceId);
                                          if (
                                              (H.default.track(
                                                  ee.rMx.PAYMENT_FLOW_COMPLETED,
                                                  es(er({}, e3), {
                                                      duration_ms: Date.now() - e0,
                                                      guild_id: ep,
                                                      application_id: eh,
                                                  }),
                                              ),
                                              tE)
                                          )
                                              return;
                                          if (null == ey || null == eM) {
                                              c()(null != e, "Missing paymentSource");
                                              let l = await (0, P.XW)({
                                                  items: eq,
                                                  paymentSource: e,
                                                  currency: o.currency,
                                                  expectedInvoicePrice: t,
                                                  expectedRenewalPrice: n,
                                              });
                                              if (l.redirectConfirmation) return void tP(null != l.redirectURL);
                                          } else {
                                              let l = { items: (0, X.MY)(ey, eq) };
                                              (l.currency = ey.currency),
                                                  null == l.currency && (l.currency = o.currency),
                                                  (l.paymentSource = null != eb ? eR[eb] : void 0),
                                                  null == l.paymentSource &&
                                                      (c()(null != e, "Missing paymentSource"),
                                                      (l.paymentSource = e),
                                                      (l.currency = o.currency));
                                              let i = await (0, P.Mg)(ey, l, t, n, e8);
                                              if (i.redirectConfirmation) return void tP(null != i.redirectURL);
                                          }
                                          0 === eS && e7(j.h8.CONFIRM),
                                              tn(C.A.COMPLETED),
                                              null != ep && (await ed(ep, 0 !== eS)),
                                              0 !== eS && tr(),
                                              null == em || em();
                                      } catch (t) {
                                          tn(C.A.FAIL),
                                              ev(t),
                                              H.default.track(
                                                  ee.rMx.PAYMENT_FLOW_FAILED,
                                                  es(er({}, e3), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway:
                                                          null != e
                                                              ? e.type === ee.HeQ.CARD
                                                                  ? ee.gg$.STRIPE
                                                                  : ee.gg$.BRAINTREE
                                                              : null,
                                                      payment_source_id: eD,
                                                      duration_ms: Date.now() - e0,
                                                  }),
                                              );
                                      } finally {
                                          tE || eZ(!1);
                                      }
                                  },
                              })
                            : (0, i.jsx)(E.ua7, {
                                  text: el.intl.string(el.t.XdvBLS),
                                  children: (e) =>
                                      (0, i.jsx)(
                                          E.zxk,
                                          es(
                                              er(
                                                  {
                                                      variant: "active",
                                                      text: el.intl.string(el.t.eUEeCg),
                                                  },
                                                  e,
                                              ),
                                              {
                                                  onClick: () => {
                                                      null != to.current &&
                                                          (to.current.scrollIntoView({ behavior: "smooth" }), tc(!0));
                                                  },
                                                  type: "submit",
                                              },
                                          ),
                                      ),
                              }));
                    break;
                case j.h8.CONFIRM:
                    var tS;
                    let a = G.Z.getGuild(ep),
                        u = null != (tS = null == a ? void 0 : a.name) ? tS : null == eC ? void 0 : eC.name,
                        d = (0, A.$)(eR, eD),
                        _ = (0, $.qH)(ef.current) && null != eM && !et.F$.has(eM.id);
                    e = (0, i.jsx)(J.R7, {
                        guild: a,
                        guildBoostQuantity: eB + ej.length,
                        onClose: tr,
                        withAnimation: !1,
                        paymentSourceType: d,
                        fallbackGuildName: u,
                        didPurchaseOnFractionalPremium: _,
                        customCheckoutFlow: eN,
                    });
            }
            let S = null != ez && null == (0, j.ly)(ez) ? ez : eF;
            t =
                e1 === j.h8.ADD_PAYMENT_STEPS
                    ? th
                    : (0, i.jsx)(w.Z, {
                          hideBreadcrumbs: e1 === j.h8.CONFIRM,
                          steps: e9,
                          currentStep: e1,
                          paymentError: S,
                          purchaseErrorBlockRef: eW,
                          hasCurrencies: tp.length > 1,
                          body: e,
                          footer:
                              e1 !== j.h8.CONFIRM
                                  ? (0, i.jsxs)(E.mzw, {
                                        "data-migration-pending": !0,
                                        direction: b.Z.Direction.HORIZONTAL,
                                        align: b.Z.Align.CENTER,
                                        justify: b.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, i.jsx)("div", {
                                                      className: ei.backStep,
                                                      children: (0, i.jsx)(m.zx, {
                                                          "data-migration-pending": !0,
                                                          color: (0, p.ap)(eT)
                                                              ? m.zx.Colors.PRIMARY
                                                              : m.zx.Colors.WHITE,
                                                          look: m.zx.Looks.LINK,
                                                          size: m.zx.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && e7(n);
                                                          },
                                                          children: el.intl.string(el.t["13/7kZ"]),
                                                      }),
                                                  })
                                                : null,
                                            (0, i.jsxs)("div", {
                                                className: ei.footerRight,
                                                children: [l, r],
                                            }),
                                        ],
                                    })
                                  : null,
                      });
        }
    else
        t = (0, i.jsx)("div", {
            className: ei.loadingWrapper,
            children: (0, i.jsx)(E.$jN, {}),
        });
    let ty = null;
    return (
        eg ||
            e1 === j.h8.PREMIUM_UPSELL ||
            (ty = (0, i.jsx)(q.Z, {
                onClose: tr,
                currentStep: e1,
                purchaseState: tt,
            })),
        (0, i.jsxs)(E.Y0X, {
            "data-migration-pending": !0,
            transitionState: n,
            className: o()({ [ei.planSelectStep]: e1 === j.h8.PLAN_SELECT }),
            parentComponent: "GuildBoostPurchaseModal",
            children: [ty, t],
        })
    );
}
function em(e) {
    let t = (0, d.e7)([B.Z], () => B.Z.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, I.ZP)(f.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(I.Gt, {
        value: n,
        children: (0, i.jsx)(T.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(ep, er({}, e)),
        }),
    });
}
