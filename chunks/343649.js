(n.d(t, {
    P: () => er,
    default: () => eu
}),
    n(388685),
    n(49124));
var l,
    r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(512722),
    c = n.n(a),
    u = n(772848),
    p = n(442837),
    d = n(780384),
    E = n(755721),
    m = n(481060),
    P = n(355467),
    _ = n(179360),
    h = n(723484),
    S = n(211266),
    y = n(493773),
    f = n(330726),
    I = n(100527),
    N = n(906732),
    O = n(15640),
    g = n(89057),
    b = n(600164),
    x = n(232127),
    M = n(563132),
    L = n(409813),
    T = n(45572),
    j = n(435020),
    C = n(98278),
    A = n(431369),
    k = n(176919),
    R = n(3409),
    D = n(185139),
    v = n(210887),
    w = n(430824),
    Z = n(314884),
    U = n(975060),
    G = n(853872),
    z = n(509545),
    F = n(78839),
    W = n(626135),
    Y = n(267642),
    B = n(74538),
    H = n(212895),
    V = n(296848),
    X = n(518062),
    K = n(4434),
    $ = n(333451),
    q = n(981631),
    J = n(474936),
    Q = n(231338),
    ee = n(388032),
    et = n(104274);
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function el(e, t) {
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
var er = 12633 == n.j ? (((l = {})[(l.NONE = 0)] = 'NONE'), (l[(l.LEVEL = 1)] = 'LEVEL'), (l[(l.PERK = 2)] = 'PERK'), l) : null;
let ei = J.Xh.NONE_MONTH,
    es = [L.h8.PLAN_SELECT, L.h8.REVIEW, L.h8.CONFIRM],
    eo = [L.h8.PLAN_SELECT, L.h8.ADD_PAYMENT_STEPS, L.h8.REVIEW, L.h8.CONFIRM];
async function ea(e, t) {
    await (0, _.X8)();
    let n = (0, Y.vx)(Z.Z.boostSlots);
    return (0, _.W3)(
        e,
        n.map((e) => e.id),
        t
    );
}
function ec(e) {
    let t,
        { transitionState: n, onClose: l, closeGuildPerksModal: s, analyticsLocations: a, analyticsLocation: _, analyticsSourceLocation: er, guildId: ec, onSubscribeComplete: eu, totalNumberOfSlotsToAssign: ep = 1, disablePremiumUpsell: ed = !1, onSubscriptionConfirmation: eE, applicationId: em, intent: eP = 0 } = e,
        { activeSubscription: e_, blockedPayments: eh, startingFractionalPremiumEndsAtRef: eS, invoicePreview: ey } = (0, M.JL)(),
        ef = (0, p.e7)([F.Z], () => F.Z.hasFetchedSubscriptions()),
        eI = null != e_ ? e_.paymentSourceId : null,
        eN = (0, p.e7)([z.Z], () => (null != e_ ? (0, V.oE)(e_.planId) : null)),
        eO = (0, p.e7)([z.Z], () => null == e_ || null != z.Z.get(e_.planId)),
        eg = (0, p.e7)([z.Z], () => (null == eN ? z.Z.get(ei) : eN)),
        eb = (0, p.e7)([v.Z], () => v.Z.theme),
        ex = i.useRef((0, Y.vx)(Z.Z.boostSlots)).current,
        eM = (0, p.e7)([G.Z], () => G.Z.defaultPaymentSourceId),
        eL = (0, R.fL)(null != eI ? eI : ef ? eM : null),
        { paymentSources: eT, setPurchaseError: ej, paymentSourceId: eC, setIsSubmittingCurrentStep: eA, paymentAuthenticationState: ek, setPaymentSourceId: eR, isSubmittingCurrentStep: eD, paymentError: ev, purchaseError: ew, purchaseErrorBlockRef: eZ } = eL,
        eU = Object.keys(eT).length > 0,
        [eG, ez] = i.useState(ep - ex.length),
        [eF, eW] = i.useState(!1),
        eY = (0, p.e7)([U.Z], () => U.Z.popupCallbackCalled),
        eB = (0, O.V)(),
        eH = i.useMemo(
            () =>
                null != e_ && eO && eB
                    ? (0, A.g)(e_, eG)
                    : [
                          {
                              planId: J.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eG
                          }
                      ],
            [e_, eO, eG, eB]
        ),
        [eV, eX] = (0, S.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eK } = (0, N.ZP)(a, I.Z.GUILD_BOOST_PURCHASE_MODAL),
        e$ = i.useMemo(() => {
            var e, t;
            return {
                load_id: eV,
                payment_type: Q.Zu[Q.GZ.SUBSCRIPTION],
                sku_id: J.Si.GUILD,
                subscription_type: q.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eH.find((e) => {
                            let { planId: t } = e;
                            return J.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : J.Xh.PREMIUM_MONTH_GUILD,
                quantity: eG,
                location: _,
                source: er,
                location_stack: eK
            };
        }, [eV, _, eK, er, eH, eG]);
    i.useEffect(() => {
        (0, H.i1)(eC);
    }, [eC]);
    let [eq, eJ] = i.useState(L.h8.PLAN_SELECT),
        eQ = i.useMemo(() => Date.now(), [eq]),
        e0 = i.useCallback(
            (e, t) => {
                (eJ(e), ej(null));
                let n = Date.now();
                W.default.track(
                    q.rMx.PAYMENT_FLOW_STEP,
                    el(en({}, e$), {
                        from_step: null != t ? t : eq,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - eQ,
                        flow_duration_ms: n - eX,
                        guild_id: ec,
                        application_id: em
                    })
                );
            },
            [ej, e$, eq, eQ, eX, ec, em]
        ),
        e8 = {
            baseAnalyticsData: e$,
            flowStartTime: eX,
            guildId: ec,
            handleStepChange: e0,
            onSubscribeComplete: eu,
            paymentSourceId: eC,
            setIsSubmittingCurrentStep: eA,
            setPurchaseError: ej
        },
        e3 = i.useRef(e8);
    (i.useEffect(() => {
        e3.current = e8;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: t, guildId: n, handleStepChange: l, onSubscribeComplete: r, paymentSourceId: i, setIsSubmittingCurrentStep: s, setPurchaseError: o } = e3.current;
            (async () => {
                if (!0 === eY)
                    try {
                        if (null == U.Z.redirectedPaymentId) return;
                        (await (0, P.OP)(U.Z.redirectedPaymentId), l(L.h8.CONFIRM), e4(T.A.COMPLETED), null != n && (await ea(n, 0 !== eP)), null == r || r());
                    } catch (n) {
                        (e4(T.A.FAIL),
                            o(n),
                            W.default.track(
                                q.rMx.PAYMENT_FLOW_FAILED,
                                el(en({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: q.gg$.STRIPE,
                                    payment_source_id: i,
                                    duration_ms: Date.now() - t
                                })
                            ));
                    } finally {
                        (s(!1), (0, P.K2)());
                    }
            })();
        }, [eY, eP]),
        (0, y.ZP)(() => {
            (F.Z.hasFetchedSubscriptions() || (0, P.jg)(),
                (0, x.U)(
                    el(en({}, e$), {
                        guild_id: ec,
                        application_id: em
                    })
                ),
                null != e_ &&
                    null != e_.renewalMutations &&
                    W.default.track(q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: _,
                        guild_id: ec
                    }));
        }));
    let [e1, e2] = i.useState(es),
        [e7, e4] = i.useState(T.A.WAITING),
        [e5, e6] = i.useState(!0),
        e9 = () => {
            l(e7 === T.A.COMPLETED);
        },
        te = null != e_ && e_.isPurchasedExternally;
    (i.useEffect(() => {
        (ek !== k.wr.PENDING && eq !== L.h8.CONFIRM && null != eI && (e1 !== es && e2(es), es.includes(eq) || eq === L.h8.PREMIUM_UPSELL || e0(L.h8.REVIEW)), eq === L.h8.ADD_PAYMENT_STEPS && e1 !== eo && e2(eo), te && eq !== L.h8.PLAN_SELECT && eJ(L.h8.PLAN_SELECT));
    }, [eq, e0, te, ek, e_, eI, e1]),
        (0, k.bp)(eq, ek, e0, e4),
        (0, L.dZ)(eq, e7, e4));
    let tt = i.useRef(null),
        [tn, tl] = (0, f.Z)(!1, 500),
        [tr, ti] = i.useState(null),
        [ts, to] = i.useState([]),
        [ta, tc] = i.useState(!1),
        tu = i.useMemo(() => JSON.stringify(ts), [ts]);
    i.useEffect(() => {
        let e;
        eB && (null != z.Z.get(J.Xh.PREMIUM_MONTH_GUILD) && to((e = (0, H.DE)(J.Xh.PREMIUM_MONTH_GUILD, eC, !1))), null == eC && null != e_ && null != e_.paymentSourceId ? ti(e_.currency) : null != e && ti(e[0]));
    }, [eC, e_, eB, tu]);
    let tp = (0, R.vP)({
        paymentModalArgs: eL,
        initialStep: L.h8.PAYMENT_TYPE,
        prependSteps: [L.h8.PLAN_SELECT],
        appendSteps: [L.h8.REVIEW, L.h8.CONFIRM],
        breadcrumpSteps: e1,
        currentBreadcrumpStep: eq,
        onReturn: () => {
            e0(Object.values(eT).length < 1 ? L.h8.PLAN_SELECT : L.h8.REVIEW, L.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e0(L.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                l = Date.now();
            W.default.track(
                q.rMx.PAYMENT_FLOW_STEP,
                el(en({}, e$), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: l - eQ,
                    flow_duration_ms: l - eX,
                    guild_id: ec
                })
            );
        }
    });
    if (eh) t = (0, r.jsx)(g.Vq, { onClose: e9 });
    else if (ef && eO && eB && null != tr && '' !== tr)
        if ((null == e_ ? void 0 : e_.isPausedOrPausePending) && !e_.isPausedAllowsUpdatesButNotResume)
            t = (0, r.jsx)(m.hzk, {
                children: (0, r.jsx)('p', {
                    className: et.copy,
                    children: ee.intl.string(ee.t.mOWsFx)
                })
            });
        else if (null != e_ && null != e_.renewalMutations)
            t = (0, r.jsx)(m.hzk, {
                children: (0, r.jsx)('p', {
                    className: et.copy,
                    children: ee.intl.string(ee.t.npfhh4)
                })
            });
        else if (eq === L.h8.PREMIUM_UPSELL) {
            (c()(null != eg, 'Missing nextPremiumSubscriptionPlan'), c()(tr, 'Currency not defined'));
            let e =
                null != eC
                    ? {
                          paymentSourceId: eC,
                          currency: tr
                      }
                    : { currency: tr };
            t = (0, r.jsx)($.Z, {
                premiumSubscriptionPlan: eg,
                analyticsLocation: _,
                analyticsSourceLocation: er,
                onClose: e9,
                onBack: () => e0(L.h8.PLAN_SELECT),
                onSkip: () => e0(null != eI || eU ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e
            });
        } else {
            let e, n, l, i;
            c()(tr, 'Currency not defined');
            let o =
                null != eC
                    ? {
                          paymentSourceId: eC,
                          currency: tr
                      }
                    : { currency: tr };
            switch (eq) {
                case L.h8.PLAN_SELECT:
                    (c()(null != ec, 'Missing guildId'),
                        c()(null != eg, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(K.CP, {
                            premiumSubscriptionPlan: eg,
                            numGuildBoosts: eG,
                            setNumGuildBoosts: ez,
                            setForceDisableSubmitButton: e6,
                            premiumSubscription: e_,
                            existingAvailableSlots: ex,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                (e9(), null != s && s(), (0, C.z)());
                            },
                            guildId: ec,
                            priceOptions: o
                        })),
                        te &&
                            null != e_ &&
                            null != e_.paymentGateway &&
                            (e = (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.kzN, {
                                        className: et.externalErrorBlock,
                                        children: ee.intl.format(ee.t['/m3Y3t'], { paymentGatewayName: Q.Vz[e_.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (l = (0, r.jsx)(E.zx, {
                            look: E.zx.Looks.LINK,
                            color: (0, d.ap)(eb) ? E.zx.Colors.PRIMARY : E.zx.Colors.WHITE,
                            onClick: e9,
                            children: ee.intl.string(ee.t.oEAioK)
                        })),
                        (i = (0, r.jsx)(m.zxk, {
                            variant: 'primary',
                            text: ee.intl.string(ee.t['3PatS0']),
                            type: 'submit',
                            disabled: e5 || 0 === eG || te,
                            onClick: () => {
                                if (!ed && (null == eN || eN.premiumSubscriptionType !== J.p9.TIER_2)) return void e0(L.h8.PREMIUM_UPSELL);
                                e0(null != eI || eU ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS);
                            }
                        })));
                    break;
                case L.h8.ADD_PAYMENT_STEPS:
                    break;
                case L.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(h.F, { className: et.__invalid_body });
                    break;
                case L.h8.REVIEW:
                    (c()(null != eg, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(K.Gq, {
                            paymentSources: eT,
                            priceOptions: o,
                            currentPremiumSubscription: e_,
                            premiumSubscriptionPaymentSourceId: eI,
                            premiumSubscriptionPlan: eg,
                            newAdditionalPlans: eH,
                            onPaymentSourceChange: (e) => eR(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                (e0(L.h8.ADD_PAYMENT_STEPS), eR(null));
                            },
                            onPurchaseTermsChange: eW,
                            legalTermsNodeRef: tt,
                            hasLegalTermsFlash: tn
                        })),
                        (n = L.h8.PLAN_SELECT),
                        (i = eF
                            ? (0, r.jsx)(m.zxk, {
                                  variant: 'active',
                                  text: ee.intl.string(ee.t.eUEeCg),
                                  type: 'submit',
                                  loading: eD,
                                  onClick: async () => {
                                      c()(null != eH, 'Missing newAdditionalPlans');
                                      let e = (0, j.m)(eT, eC);
                                      ej(null);
                                      try {
                                          (e4(T.A.PURCHASING), eA(!0), c()(null != eC, 'Missing paymentSourceId'), c()(null != ey, 'Missing invoicePreview'));
                                          let t = {
                                                  amount: ey.total,
                                                  currency: ey.currency
                                              },
                                              n = (0, B.sG)(e_, eH, o.currency.toLowerCase(), o.paymentSourceId);
                                          if (
                                              (W.default.track(
                                                  q.rMx.PAYMENT_FLOW_COMPLETED,
                                                  el(en({}, e$), {
                                                      duration_ms: Date.now() - eX,
                                                      guild_id: ec,
                                                      application_id: em
                                                  })
                                              ),
                                              ta)
                                          )
                                              return;
                                          if (null == e_ || null == eN) {
                                              c()(null != e, 'Missing paymentSource');
                                              let l = await (0, P.XW)({
                                                  items: eH,
                                                  paymentSource: e,
                                                  currency: o.currency,
                                                  expectedInvoicePrice: t,
                                                  expectedRenewalPrice: n
                                              });
                                              if (l.redirectConfirmation) return void tc(null != l.redirectURL);
                                          } else {
                                              let l = { items: (0, B.MY)(e_, eH) };
                                              ((l.currency = e_.currency), null == l.currency && (l.currency = o.currency), (l.paymentSource = null != eI ? eT[eI] : void 0), null == l.paymentSource && (c()(null != e, 'Missing paymentSource'), (l.paymentSource = e), (l.currency = o.currency)));
                                              let r = await (0, P.Mg)(e_, l, t, n, eK);
                                              if (r.redirectConfirmation) return void tc(null != r.redirectURL);
                                          }
                                          (0 === eP && e0(L.h8.CONFIRM), e4(T.A.COMPLETED), null != ec && (await ea(ec, 0 !== eP)), 0 !== eP && e9(), null == eu || eu());
                                      } catch (t) {
                                          (e4(T.A.FAIL),
                                              ej(t),
                                              W.default.track(
                                                  q.rMx.PAYMENT_FLOW_FAILED,
                                                  el(en({}, e$), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway: null != e ? (e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE) : null,
                                                      payment_source_id: eC,
                                                      duration_ms: Date.now() - eX
                                                  })
                                              ));
                                      } finally {
                                          ta || eA(!1);
                                      }
                                  }
                              })
                            : (0, r.jsx)(m.ua7, {
                                  text: ee.intl.string(ee.t.XdvBLS),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          m.zxk,
                                          el(
                                              en(
                                                  {
                                                      variant: 'active',
                                                      text: ee.intl.string(ee.t.eUEeCg)
                                                  },
                                                  e
                                              ),
                                              {
                                                  onClick: () => {
                                                      null != tt.current && (tt.current.scrollIntoView({ behavior: 'smooth' }), tl(!0));
                                                  },
                                                  type: 'submit'
                                              }
                                          )
                                      )
                              })));
                    break;
                case L.h8.CONFIRM:
                    let a = w.Z.getGuild(ec),
                        u = (0, j.$)(eT, eC),
                        p = (0, V.qH)(eS.current) && null != eN && !J.F$.has(eN.id);
                    e = (0, r.jsx)(K.R7, {
                        guild: a,
                        guildBoostQuantity: eG + ex.length,
                        onClose: e9,
                        withAnimation: !1,
                        paymentSourceType: u,
                        didPurchaseOnFractionalPremium: p
                    });
            }
            let _ = null != ev && null == (0, L.ly)(ev) ? ev : ew;
            t =
                eq === L.h8.ADD_PAYMENT_STEPS
                    ? tp
                    : (0, r.jsx)(D.Z, {
                          hideBreadcrumbs: eq === L.h8.CONFIRM,
                          steps: e1,
                          currentStep: eq,
                          paymentError: _,
                          purchaseErrorBlockRef: eZ,
                          hasCurrencies: ts.length > 1,
                          body: e,
                          footer:
                              eq !== L.h8.CONFIRM
                                  ? (0, r.jsxs)(m.mzw, {
                                        direction: b.Z.Direction.HORIZONTAL,
                                        align: b.Z.Align.CENTER,
                                        justify: b.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, r.jsx)('div', {
                                                      className: et.backStep,
                                                      children: (0, r.jsx)(E.zx, {
                                                          color: (0, d.ap)(eb) ? E.zx.Colors.PRIMARY : E.zx.Colors.WHITE,
                                                          look: E.zx.Looks.LINK,
                                                          size: E.zx.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && e0(n);
                                                          },
                                                          children: ee.intl.string(ee.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: et.footerRight,
                                                children: [l, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    else
        t = (0, r.jsx)('div', {
            className: et.loadingWrapper,
            children: (0, r.jsx)(m.$jN, {})
        });
    let td = null;
    return (
        eh ||
            eq === L.h8.PREMIUM_UPSELL ||
            (td = (0, r.jsx)(X.Z, {
                onClose: e9,
                currentStep: eq,
                purchaseState: e7
            })),
        (0, r.jsxs)(m.Y0X, {
            transitionState: n,
            className: o()({ [et.planSelectStep]: eq === L.h8.PLAN_SELECT }),
            parentComponent: 'GuildBoostPurchaseModal',
            children: [td, t]
        })
    );
}
function eu(e) {
    let t = (0, p.e7)([F.Z], () => F.Z.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, N.ZP)(I.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(N.Gt, {
        value: n,
        children: (0, r.jsx)(M.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(ec, en({}, e))
        })
    });
}
