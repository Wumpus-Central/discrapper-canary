t.d(n, {
    P: () => ea,
    default: () => em,
}),
    t(388685),
    t(49124);
var i,
    l = t(951288),
    r = t(647438),
    s = t(120356),
    a = t.n(s),
    o = t(512722),
    c = t.n(o),
    u = t(772848),
    d = t(442837),
    p = t(780384),
    m = t(755721),
    E = t(481060),
    P = t(355467),
    _ = t(179360),
    h = t(723484),
    S = t(211266),
    g = t(493773),
    y = t(330726),
    f = t(100527),
    I = t(906732),
    N = t(15640),
    O = t(89057),
    b = t(600164),
    x = t(232127),
    M = t(31996),
    T = t(356264),
    L = t(563132),
    j = t(409813),
    C = t(45572),
    A = t(435020),
    k = t(845220),
    R = t(98278),
    v = t(431369),
    D = t(176919),
    Z = t(3409),
    w = t(185139),
    U = t(210887),
    G = t(430824),
    z = t(314884),
    F = t(975060),
    W = t(853872),
    Y = t(509545),
    B = t(78839),
    H = t(626135),
    V = t(267642),
    X = t(74538),
    K = t(212895),
    $ = t(296848),
    q = t(518062),
    Q = t(4434),
    J = t(333451),
    ee = t(981631),
    en = t(474936),
    et = t(231338),
    ei = t(388032),
    el = t(290136);
function er(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function es(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
var ea =
    12633 == t.j
        ? (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.LEVEL = 1)] = "LEVEL"), (i[(i.PERK = 2)] = "PERK"), i)
        : null;
let eo = en.Xh.NONE_MONTH,
    ec = [j.h8.PLAN_SELECT, j.h8.REVIEW, j.h8.CONFIRM],
    eu = [j.h8.PLAN_SELECT, j.h8.ADD_PAYMENT_STEPS, j.h8.REVIEW, j.h8.CONFIRM];
async function ed(e, n) {
    await (0, _.X8)();
    let t = (0, V.vx)(z.Z.boostSlots);
    return (0, _.W3)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function ep(e) {
    let n,
        {
            transitionState: t,
            onClose: i,
            closeGuildPerksModal: s,
            analyticsLocations: o,
            analyticsLocation: _,
            analyticsSourceLocation: ea,
            guildId: ep,
            onSubscribeComplete: em,
            totalNumberOfSlotsToAssign: eE = 1,
            disablePremiumUpsell: eP = !1,
            onSubscriptionConfirmation: e_,
            applicationId: eh,
            intent: eS = 0,
        } = e,
        {
            activeSubscription: eg,
            blockedPayments: ey,
            startingFractionalPremiumEndsAtRef: ef,
            invoicePreview: eI,
            customCheckoutFlow: eN,
        } = (0, L.JL)(),
        eO = (0, d.e7)([B.Z], () => B.Z.hasFetchedSubscriptions()),
        eb = null != eg ? eg.paymentSourceId : null,
        ex = (0, d.e7)([Y.Z], () => (null != eg ? (0, $.oE)(eg.planId) : null)),
        eM = (0, d.e7)([Y.Z], () => null == eg || null != Y.Z.get(eg.planId)),
        eT = (0, d.e7)([Y.Z], () => (null == ex ? Y.Z.get(eo) : ex)),
        eL = (0, d.e7)([U.Z], () => U.Z.theme),
        ej = r.useRef((0, V.vx)(z.Z.boostSlots)).current,
        eC = (0, d.e7)([T.Z], () => (null != ep ? T.Z.getGuild(ep) : void 0), [ep]),
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
                null != eg && eM && e$
                    ? (0, v.g)(eg, eB)
                    : [
                          {
                              planId: en.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eB,
                          },
                      ],
            [eg, eM, eB, e$],
        ),
        eQ = r.useMemo(() => (0, k.b)(), []),
        [eJ, e0] = (0, S.Z)(() => [null != eQ ? eQ : (0, u.Z)(), Date.now()]),
        { analyticsLocations: e8 } = (0, I.ZP)(o, f.Z.GUILD_BOOST_PURCHASE_MODAL),
        e3 = r.useMemo(() => {
            var e, n;
            return {
                load_id: eJ,
                payment_type: et.Zu[et.GZ.SUBSCRIPTION],
                sku_id: en.Si.GUILD,
                subscription_type: ee.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (n =
                        null ==
                        (e = eq.find((e) => {
                            let { planId: n } = e;
                            return en.Z1.has(n);
                        }))
                            ? void 0
                            : e.planId)
                        ? n
                        : en.Xh.PREMIUM_MONTH_GUILD,
                quantity: eB,
                location: _,
                source: ea,
                location_stack: e8,
            };
        }, [eJ, _, e8, ea, eq, eB]);
    r.useEffect(() => {
        (0, K.i1)(eD);
    }, [eD]);
    let [e1, e2] = r.useState(j.h8.PLAN_SELECT),
        e4 = r.useMemo(() => Date.now(), [e1]),
        e7 = r.useCallback(
            (e, n) => {
                e2(e), ev(null);
                let t = Date.now();
                H.default.track(
                    ee.rMx.PAYMENT_FLOW_STEP,
                    es(er({}, e3), {
                        from_step: null != n ? n : e1,
                        to_step: e === j.h8.ADD_PAYMENT_STEPS ? j.h8.PAYMENT_TYPE : e,
                        step_duration_ms: t - e4,
                        flow_duration_ms: t - e0,
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
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: a,
            } = e5.current;
            (async () => {
                if (!0 === eK)
                    try {
                        if (null == F.Z.redirectedPaymentId) return;
                        await (0, P.OP)(F.Z.redirectedPaymentId),
                            i(j.h8.CONFIRM),
                            nt(C.A.COMPLETED),
                            null != t && (await ed(t, 0 !== eS)),
                            null == l || l();
                    } catch (t) {
                        nt(C.A.FAIL),
                            a(t),
                            H.default.track(
                                ee.rMx.PAYMENT_FLOW_FAILED,
                                es(er({}, e), {
                                    payment_error_code: null == t ? void 0 : t.code,
                                    payment_gateway: ee.gg$.STRIPE,
                                    payment_source_id: r,
                                    duration_ms: Date.now() - n,
                                }),
                            );
                    } finally {
                        s(!1), (0, P.K2)();
                    }
            })();
        }, [eK, eS]),
        (0, g.ZP)(() => {
            B.Z.hasFetchedSubscriptions() || (0, P.jg)(),
                null != ep && null == G.Z.getGuild(ep) && null == T.Z.getGuild(ep) && (0, M.Q)(ep),
                (0, x.U)(
                    es(er({}, e3), {
                        guild_id: ep,
                        application_id: eh,
                        custom_checkout_flow: eN,
                    }),
                ),
                null != eg &&
                    null != eg.renewalMutations &&
                    H.default.track(ee.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: _,
                        guild_id: ep,
                    });
        });
    let [e9, ne] = r.useState(ec),
        [nn, nt] = r.useState(C.A.WAITING),
        [ni, nl] = r.useState(!0),
        nr = () => {
            i(nn === C.A.COMPLETED);
        },
        ns = null != eg && eg.isPurchasedExternally;
    r.useEffect(() => {
        ew !== D.wr.PENDING &&
            e1 !== j.h8.CONFIRM &&
            null != eb &&
            (e9 !== ec && ne(ec), ec.includes(e1) || e1 === j.h8.PREMIUM_UPSELL || e7(j.h8.REVIEW)),
            e1 === j.h8.ADD_PAYMENT_STEPS && e9 !== eu && ne(eu),
            ns && e1 !== j.h8.PLAN_SELECT && e2(j.h8.PLAN_SELECT);
    }, [e1, e7, ns, ew, eg, eb, e9]),
        (0, D.bp)(e1, ew, e7, nt),
        (0, j.dZ)(e1, nn, nt);
    let na = r.useRef(null),
        [no, nc] = (0, y.Z)(!1, 500),
        [nu, nd] = r.useState(null),
        [np, nm] = r.useState([]),
        [nE, nP] = r.useState(!1),
        n_ = r.useMemo(() => JSON.stringify(np), [np]);
    r.useEffect(() => {
        let e;
        e$ &&
            (null != Y.Z.get(en.Xh.PREMIUM_MONTH_GUILD) && nm((e = (0, K.DE)(en.Xh.PREMIUM_MONTH_GUILD, eD, !1))),
            null == eD && null != eg && null != eg.paymentSourceId ? nd(eg.currency) : null != e && nd(e[0]));
    }, [eD, eg, e$, n_]);
    let nh = (0, Z.vP)({
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
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            H.default.track(
                ee.rMx.PAYMENT_FLOW_STEP,
                es(er({}, e3), {
                    from_step: n,
                    to_step: t,
                    step_duration_ms: i - e4,
                    flow_duration_ms: i - e0,
                    guild_id: ep,
                }),
            );
        },
    });
    if (ey) n = (0, l.jsx)(O.Vq, { onClose: nr });
    else if (eO && eM && e$ && null != nu && "" !== nu)
        if ((null == eg ? void 0 : eg.isPausedOrPausePending) && !eg.isPausedAllowsUpdatesButNotResume)
            n = (0, l.jsx)(E.hzk, {
                "data-migration-pending": !0,
                children: (0, l.jsx)("p", {
                    className: el.copy,
                    children: ei.intl.string(ei.t.mOWsFx),
                }),
            });
        else if (null != eg && null != eg.renewalMutations)
            n = (0, l.jsx)(E.hzk, {
                "data-migration-pending": !0,
                children: (0, l.jsx)("p", {
                    className: el.copy,
                    children: ei.intl.string(ei.t.npfhh4),
                }),
            });
        else if (e1 === j.h8.PREMIUM_UPSELL) {
            c()(null != eT, "Missing nextPremiumSubscriptionPlan"), c()(nu, "Currency not defined");
            let e =
                null != eD
                    ? {
                          paymentSourceId: eD,
                          currency: nu,
                      }
                    : { currency: nu };
            n = (0, l.jsx)(J.Z, {
                premiumSubscriptionPlan: eT,
                analyticsLocation: _,
                analyticsSourceLocation: ea,
                onClose: nr,
                onBack: () => e7(j.h8.PLAN_SELECT),
                onSkip: () => e7(null != eb || eY ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: e_,
                priceOptions: e,
            });
        } else {
            let e, t, i, r;
            c()(nu, "Currency not defined");
            let a =
                    null != eD
                        ? {
                              paymentSourceId: eD,
                              currency: nu,
                          }
                        : { currency: nu },
                o = G.Z.getGuild(ep),
                u = null == eC && null == o;
            switch (e1) {
                case j.h8.PLAN_SELECT:
                    c()(null != ep, "Missing guildId"),
                        c()(null != eT, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(Q.CP, {
                            premiumSubscriptionPlan: eT,
                            numGuildBoosts: eB,
                            setNumGuildBoosts: eH,
                            setForceDisableSubmitButton: nl,
                            premiumSubscription: eg,
                            existingAvailableSlots: ej,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nr(), null != s && s(), (0, R.z)();
                            },
                            priceOptions: a,
                        })),
                        ns && null != eg && null != eg.paymentGateway
                            ? (e = (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(E.kzN, {
                                          className: el.externalErrorBlock,
                                          children: ei.intl.format(ei.t["/m3Y3t"], {
                                              paymentGatewayName: et.Vz[eg.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : u &&
                              (e = (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(E.Wn, {
                                          messageType: E.QYI.ERROR,
                                          className: el.helpMessageWrapper,
                                          children: ei.intl.string(ei.t.eAn6z8),
                                      }),
                                      e,
                                  ],
                              })),
                        (i = (0, l.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, p.ap)(eL) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
                            onClick: nr,
                            children: ei.intl.string(ei.t.oEAioK),
                        })),
                        (r = (0, l.jsx)(E.zxk, {
                            variant: "primary",
                            text: ei.intl.string(ei.t["3PatS0"]),
                            type: "submit",
                            disabled: ni || 0 === eB || ns || u,
                            onClick: () => {
                                if (!eP && (null == ex || ex.premiumSubscriptionType !== en.PremiumTypes.TIER_2))
                                    return void e7(j.h8.PREMIUM_UPSELL);
                                e7(null != eb || eY ? j.h8.REVIEW : j.h8.ADD_PAYMENT_STEPS);
                            },
                        }));
                    break;
                case j.h8.ADD_PAYMENT_STEPS:
                    break;
                case j.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(h.F, { className: el.__invalid_body });
                    break;
                case j.h8.REVIEW:
                    c()(null != eT, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(Q.Gq, {
                            paymentSources: eR,
                            priceOptions: a,
                            currentPremiumSubscription: eg,
                            premiumSubscriptionPaymentSourceId: eb,
                            premiumSubscriptionPlan: eT,
                            newAdditionalPlans: eq,
                            onPaymentSourceChange: (e) => eU(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e7(j.h8.ADD_PAYMENT_STEPS), eU(null);
                            },
                            onPurchaseTermsChange: eX,
                            legalTermsNodeRef: na,
                            hasLegalTermsFlash: no,
                        })),
                        (t = j.h8.PLAN_SELECT),
                        (r = eV
                            ? (0, l.jsx)(E.zxk, {
                                  variant: "active",
                                  text: ei.intl.string(ei.t.eUEeCg),
                                  type: "submit",
                                  loading: eG,
                                  onClick: async () => {
                                      c()(null != eq, "Missing newAdditionalPlans");
                                      let e = (0, A.m)(eR, eD);
                                      ev(null);
                                      try {
                                          nt(C.A.PURCHASING),
                                              eZ(!0),
                                              c()(null != eD, "Missing paymentSourceId"),
                                              c()(null != eI, "Missing invoicePreview");
                                          let n = {
                                                  amount: eI.total,
                                                  currency: eI.currency,
                                              },
                                              t = (0, X.sG)(eg, eq, a.currency.toLowerCase(), a.paymentSourceId);
                                          if (
                                              (H.default.track(
                                                  ee.rMx.PAYMENT_FLOW_COMPLETED,
                                                  es(er({}, e3), {
                                                      duration_ms: Date.now() - e0,
                                                      guild_id: ep,
                                                      application_id: eh,
                                                  }),
                                              ),
                                              nE)
                                          )
                                              return;
                                          if (null == eg || null == ex) {
                                              c()(null != e, "Missing paymentSource");
                                              let i = await (0, P.XW)({
                                                  items: eq,
                                                  paymentSource: e,
                                                  currency: a.currency,
                                                  expectedInvoicePrice: n,
                                                  expectedRenewalPrice: t,
                                              });
                                              if (i.redirectConfirmation) return void nP(null != i.redirectURL);
                                          } else {
                                              let i = { items: (0, X.MY)(eg, eq) };
                                              (i.currency = eg.currency),
                                                  null == i.currency && (i.currency = a.currency),
                                                  (i.paymentSource = null != eb ? eR[eb] : void 0),
                                                  null == i.paymentSource &&
                                                      (c()(null != e, "Missing paymentSource"),
                                                      (i.paymentSource = e),
                                                      (i.currency = a.currency));
                                              let l = await (0, P.Mg)(eg, i, n, t, e8);
                                              if (l.redirectConfirmation) return void nP(null != l.redirectURL);
                                          }
                                          0 === eS && e7(j.h8.CONFIRM),
                                              nt(C.A.COMPLETED),
                                              null != ep && (await ed(ep, 0 !== eS)),
                                              0 !== eS && nr(),
                                              null == em || em();
                                      } catch (n) {
                                          nt(C.A.FAIL),
                                              ev(n),
                                              H.default.track(
                                                  ee.rMx.PAYMENT_FLOW_FAILED,
                                                  es(er({}, e3), {
                                                      payment_error_code: null == n ? void 0 : n.code,
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
                                          nE || eZ(!1);
                                      }
                                  },
                              })
                            : (0, l.jsx)(E.ua7, {
                                  text: ei.intl.string(ei.t.XdvBLS),
                                  children: (e) =>
                                      (0, l.jsx)(
                                          E.zxk,
                                          es(
                                              er(
                                                  {
                                                      variant: "active",
                                                      text: ei.intl.string(ei.t.eUEeCg),
                                                  },
                                                  e,
                                              ),
                                              {
                                                  onClick: () => {
                                                      null != na.current &&
                                                          (na.current.scrollIntoView({ behavior: "smooth" }), nc(!0));
                                                  },
                                                  type: "submit",
                                              },
                                          ),
                                      ),
                              }));
                    break;
                case j.h8.CONFIRM:
                    var nS;
                    let d = null != (nS = null == o ? void 0 : o.name) ? nS : null == eC ? void 0 : eC.name,
                        _ = (0, A.$)(eR, eD),
                        S = (0, $.qH)(ef.current) && null != ex && !en.F$.has(ex.id);
                    e = (0, l.jsx)(Q.R7, {
                        guild: o,
                        guildBoostQuantity: eB + ej.length,
                        onClose: nr,
                        withAnimation: !1,
                        paymentSourceType: _,
                        fallbackGuildName: d,
                        didPurchaseOnFractionalPremium: S,
                        customCheckoutFlow: eN,
                    });
            }
            let g = null != ez && null == (0, j.ly)(ez) ? ez : eF;
            n =
                e1 === j.h8.ADD_PAYMENT_STEPS
                    ? nh
                    : (0, l.jsx)(w.Z, {
                          hideBreadcrumbs: e1 === j.h8.CONFIRM,
                          steps: e9,
                          currentStep: e1,
                          paymentError: g,
                          purchaseErrorBlockRef: eW,
                          hasCurrencies: np.length > 1,
                          body: e,
                          footer:
                              e1 !== j.h8.CONFIRM
                                  ? (0, l.jsxs)(E.mzw, {
                                        "data-migration-pending": !0,
                                        direction: b.Z.Direction.HORIZONTAL,
                                        align: b.Z.Align.CENTER,
                                        justify: b.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)("div", {
                                                      className: el.backStep,
                                                      children: (0, l.jsx)(m.zx, {
                                                          "data-migration-pending": !0,
                                                          color: (0, p.ap)(eL)
                                                              ? m.zx.Colors.PRIMARY
                                                              : m.zx.Colors.WHITE,
                                                          look: m.zx.Looks.LINK,
                                                          size: m.zx.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && e7(t);
                                                          },
                                                          children: ei.intl.string(ei.t["13/7kZ"]),
                                                      }),
                                                  })
                                                : null,
                                            (0, l.jsxs)("div", {
                                                className: el.footerRight,
                                                children: [i, r],
                                            }),
                                        ],
                                    })
                                  : null,
                      });
        }
    else
        n = (0, l.jsx)("div", {
            className: el.loadingWrapper,
            children: (0, l.jsx)(E.$jN, {}),
        });
    let ng = null;
    return (
        ey ||
            e1 === j.h8.PREMIUM_UPSELL ||
            (ng = (0, l.jsx)(q.Z, {
                onClose: nr,
                currentStep: e1,
                purchaseState: nn,
            })),
        (0, l.jsxs)(E.Y0X, {
            "data-migration-pending": !0,
            transitionState: t,
            className: a()({ [el.planSelectStep]: e1 === j.h8.PLAN_SELECT }),
            parentComponent: "GuildBoostPurchaseModal",
            children: [ng, n],
        })
    );
}
function em(e) {
    let n = (0, d.e7)([B.Z], () => B.Z.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, I.ZP)(f.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(I.Gt, {
        value: t,
        children: (0, l.jsx)(L.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(ep, er({}, e)),
        }),
    });
}
