(n.d(t, {
    P: () => ei,
    default: () => eu
}),
    n(388685),
    n(49124));
var l,
    i = n(255367),
    r = n(73800),
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
    h = n(179360),
    _ = n(723484),
    S = n(211266),
    y = n(493773),
    f = n(330726),
    I = n(100527),
    N = n(906732),
    g = n(15640),
    O = n(89057),
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
    v = n(185139),
    D = n(210887),
    Z = n(430824),
    w = n(314884),
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
    q = n(333451),
    $ = n(981631),
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
var ei = 12633 == n.j ? (((l = {})[(l.NONE = 0)] = 'NONE'), (l[(l.LEVEL = 1)] = 'LEVEL'), (l[(l.PERK = 2)] = 'PERK'), l) : null;
let er = J.Xh.NONE_MONTH,
    es = [L.h8.PLAN_SELECT, L.h8.REVIEW, L.h8.CONFIRM],
    eo = [L.h8.PLAN_SELECT, L.h8.ADD_PAYMENT_STEPS, L.h8.REVIEW, L.h8.CONFIRM];
async function ea(e, t) {
    await (0, h.X8)();
    let n = (0, Y.vx)(w.Z.boostSlots);
    return (0, h.W3)(
        e,
        n.map((e) => e.id),
        t
    );
}
function ec(e) {
    let t,
        { transitionState: n, onClose: l, closeGuildPerksModal: s, analyticsLocations: a, analyticsLocation: h, analyticsSourceLocation: ei, guildId: ec, onSubscribeComplete: eu, totalNumberOfSlotsToAssign: ep = 1, disablePremiumUpsell: ed = !1, onSubscriptionConfirmation: eE, applicationId: em, intent: eP = 0 } = e,
        { activeSubscription: eh, blockedPayments: e_, startingFractionalPremiumEndsAtRef: eS, invoicePreview: ey } = (0, M.JL)(),
        ef = (0, p.e7)([F.Z], () => F.Z.hasFetchedSubscriptions()),
        eI = null != eh ? eh.paymentSourceId : null,
        eN = (0, p.e7)([z.Z], () => (null != eh ? (0, V.oE)(eh.planId) : null)),
        eg = (0, p.e7)([z.Z], () => null == eh || null != z.Z.get(eh.planId)),
        eO = (0, p.e7)([z.Z], () => (null == eN ? z.Z.get(er) : eN)),
        eb = (0, p.e7)([D.Z], () => D.Z.theme),
        ex = r.useRef((0, Y.vx)(w.Z.boostSlots)).current,
        eM = (0, p.e7)([G.Z], () => G.Z.defaultPaymentSourceId),
        eL = (0, R.fL)(null != eI ? eI : ef ? eM : null),
        { paymentSources: eT, setPurchaseError: ej, paymentSourceId: eC, setIsSubmittingCurrentStep: eA, paymentAuthenticationState: ek, setPaymentSourceId: eR, isSubmittingCurrentStep: ev, paymentError: eD, purchaseError: eZ, purchaseErrorBlockRef: ew } = eL,
        eU = Object.keys(eT).length > 0,
        [eG, ez] = r.useState(ep - ex.length),
        [eF, eW] = r.useState(!1),
        eY = (0, p.e7)([U.Z], () => U.Z.popupCallbackCalled),
        eB = (0, g.V)(),
        eH = r.useMemo(
            () =>
                null != eh && eg && eB
                    ? (0, A.g)(eh, eG)
                    : [
                          {
                              planId: J.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eG
                          }
                      ],
            [eh, eg, eG, eB]
        ),
        [eV, eX] = (0, S.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eK } = (0, N.ZP)(a, I.Z.GUILD_BOOST_PURCHASE_MODAL),
        eq = r.useMemo(() => {
            var e, t;
            return {
                load_id: eV,
                payment_type: Q.Zu[Q.GZ.SUBSCRIPTION],
                sku_id: J.Si.GUILD,
                subscription_type: $.NYc.PREMIUM,
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
                location: h,
                source: ei,
                location_stack: eK
            };
        }, [eV, h, eK, ei, eH, eG]);
    r.useEffect(() => {
        (0, H.i1)(eC);
    }, [eC]);
    let [e$, eJ] = r.useState(L.h8.PLAN_SELECT),
        eQ = r.useMemo(() => Date.now(), [e$]),
        e0 = r.useCallback(
            (e, t) => {
                (eJ(e), ej(null));
                let n = Date.now();
                W.default.track(
                    $.rMx.PAYMENT_FLOW_STEP,
                    el(en({}, eq), {
                        from_step: null != t ? t : e$,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - eQ,
                        flow_duration_ms: n - eX,
                        guild_id: ec,
                        application_id: em
                    })
                );
            },
            [ej, eq, e$, eQ, eX, ec, em]
        ),
        e8 = {
            baseAnalyticsData: eq,
            flowStartTime: eX,
            guildId: ec,
            handleStepChange: e0,
            onSubscribeComplete: eu,
            paymentSourceId: eC,
            setIsSubmittingCurrentStep: eA,
            setPurchaseError: ej
        },
        e3 = r.useRef(e8);
    (r.useEffect(() => {
        e3.current = e8;
    }),
        r.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: t, guildId: n, handleStepChange: l, onSubscribeComplete: i, paymentSourceId: r, setIsSubmittingCurrentStep: s, setPurchaseError: o } = e3.current;
            (async () => {
                if (!0 === eY)
                    try {
                        if (null == U.Z.redirectedPaymentId) return;
                        (await (0, P.OP)(U.Z.redirectedPaymentId), l(L.h8.CONFIRM), e4(T.A.COMPLETED), null != n && (await ea(n, 0 !== eP)), null == i || i());
                    } catch (n) {
                        (e4(T.A.FAIL),
                            o(n),
                            W.default.track(
                                $.rMx.PAYMENT_FLOW_FAILED,
                                el(en({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: $.gg$.STRIPE,
                                    payment_source_id: r,
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
                    el(en({}, eq), {
                        guild_id: ec,
                        application_id: em
                    })
                ),
                null != eh &&
                    null != eh.renewalMutations &&
                    W.default.track($.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: h,
                        guild_id: ec
                    }));
        }));
    let [e1, e2] = r.useState(es),
        [e7, e4] = r.useState(T.A.WAITING),
        [e5, e6] = r.useState(!0),
        e9 = () => {
            l(e7 === T.A.COMPLETED);
        },
        te = null != eh && eh.isPurchasedExternally;
    (r.useEffect(() => {
        (ek !== k.wr.PENDING && e$ !== L.h8.CONFIRM && null != eI && (e1 !== es && e2(es), es.includes(e$) || e$ === L.h8.PREMIUM_UPSELL || e0(L.h8.REVIEW)), e$ === L.h8.ADD_PAYMENT_STEPS && e1 !== eo && e2(eo), te && e$ !== L.h8.PLAN_SELECT && eJ(L.h8.PLAN_SELECT));
    }, [e$, e0, te, ek, eh, eI, e1]),
        (0, k.bp)(e$, ek, e0, e4),
        (0, L.dZ)(e$, e7, e4));
    let tt = r.useRef(null),
        [tn, tl] = (0, f.Z)(!1, 500),
        [ti, tr] = r.useState(null),
        [ts, to] = r.useState([]),
        [ta, tc] = r.useState(!1),
        tu = r.useMemo(() => JSON.stringify(ts), [ts]);
    r.useEffect(() => {
        let e;
        eB && (null != z.Z.get(J.Xh.PREMIUM_MONTH_GUILD) && to((e = (0, H.DE)(J.Xh.PREMIUM_MONTH_GUILD, eC, !1))), null == eC && null != eh && null != eh.paymentSourceId ? tr(eh.currency) : null != e && tr(e[0]));
    }, [eC, eh, eB, tu]);
    let tp = (0, R.vP)({
        paymentModalArgs: eL,
        initialStep: L.h8.PAYMENT_TYPE,
        prependSteps: [L.h8.PLAN_SELECT],
        appendSteps: [L.h8.REVIEW, L.h8.CONFIRM],
        breadcrumpSteps: e1,
        currentBreadcrumpStep: e$,
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
                $.rMx.PAYMENT_FLOW_STEP,
                el(en({}, eq), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: l - eQ,
                    flow_duration_ms: l - eX,
                    guild_id: ec
                })
            );
        }
    });
    if (e_) t = (0, i.jsx)(O.Vq, { onClose: e9 });
    else if (ef && eg && eB && null != ti && '' !== ti)
        if ((null == eh ? void 0 : eh.isPausedOrPausePending) && !eh.isPausedAllowsUpdatesButNotResume)
            t = (0, i.jsx)(m.hzk, {
                children: (0, i.jsx)('p', {
                    className: et.copy,
                    children: ee.intl.string(ee.t.mOWsFx)
                })
            });
        else if (null != eh && null != eh.renewalMutations)
            t = (0, i.jsx)(m.hzk, {
                children: (0, i.jsx)('p', {
                    className: et.copy,
                    children: ee.intl.string(ee.t.npfhh4)
                })
            });
        else if (e$ === L.h8.PREMIUM_UPSELL) {
            (c()(null != eO, 'Missing nextPremiumSubscriptionPlan'), c()(ti, 'Currency not defined'));
            let e =
                null != eC
                    ? {
                          paymentSourceId: eC,
                          currency: ti
                      }
                    : { currency: ti };
            t = (0, i.jsx)(q.Z, {
                premiumSubscriptionPlan: eO,
                analyticsLocation: h,
                analyticsSourceLocation: ei,
                onClose: e9,
                onBack: () => e0(L.h8.PLAN_SELECT),
                onSkip: () => e0(null != eI || eU ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e
            });
        } else {
            let e, n, l, r;
            c()(ti, 'Currency not defined');
            let o =
                null != eC
                    ? {
                          paymentSourceId: eC,
                          currency: ti
                      }
                    : { currency: ti };
            switch (e$) {
                case L.h8.PLAN_SELECT:
                    (c()(null != ec, 'Missing guildId'),
                        c()(null != eO, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, i.jsx)(K.CP, {
                            premiumSubscriptionPlan: eO,
                            numGuildBoosts: eG,
                            setNumGuildBoosts: ez,
                            setForceDisableSubmitButton: e6,
                            premiumSubscription: eh,
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
                            null != eh &&
                            null != eh.paymentGateway &&
                            (e = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(m.kzN, {
                                        className: et.externalErrorBlock,
                                        children: ee.intl.format(ee.t['/m3Y3t'], { paymentGatewayName: Q.Vz[eh.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (l = (0, i.jsx)(E.zx, {
                            look: E.zx.Looks.LINK,
                            color: (0, d.ap)(eb) ? E.zx.Colors.PRIMARY : E.zx.Colors.WHITE,
                            onClick: e9,
                            children: ee.intl.string(ee.t.oEAioK)
                        })),
                        (r = (0, i.jsx)(m.zxk, {
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
                    e = (0, i.jsx)(_.F, { className: et.__invalid_body });
                    break;
                case L.h8.REVIEW:
                    (c()(null != eO, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, i.jsx)(K.Gq, {
                            paymentSources: eT,
                            priceOptions: o,
                            currentPremiumSubscription: eh,
                            premiumSubscriptionPaymentSourceId: eI,
                            premiumSubscriptionPlan: eO,
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
                        (r = eF
                            ? (0, i.jsx)(m.zxk, {
                                  variant: 'active',
                                  text: ee.intl.string(ee.t.eUEeCg),
                                  type: 'submit',
                                  loading: ev,
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
                                              n = (0, B.sG)(eh, eH, o.currency.toLowerCase(), o.paymentSourceId);
                                          if (
                                              (W.default.track(
                                                  $.rMx.PAYMENT_FLOW_COMPLETED,
                                                  el(en({}, eq), {
                                                      duration_ms: Date.now() - eX,
                                                      guild_id: ec,
                                                      application_id: em
                                                  })
                                              ),
                                              ta)
                                          )
                                              return;
                                          if (null == eh || null == eN) {
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
                                              let l = { items: (0, B.MY)(eh, eH) };
                                              ((l.currency = eh.currency), null == l.currency && (l.currency = o.currency), (l.paymentSource = null != eI ? eT[eI] : void 0), null == l.paymentSource && (c()(null != e, 'Missing paymentSource'), (l.paymentSource = e), (l.currency = o.currency)));
                                              let i = await (0, P.Mg)(eh, l, t, n, eK);
                                              if (i.redirectConfirmation) return void tc(null != i.redirectURL);
                                          }
                                          (0 === eP && e0(L.h8.CONFIRM), e4(T.A.COMPLETED), null != ec && (await ea(ec, 0 !== eP)), 0 !== eP && e9(), null == eu || eu());
                                      } catch (t) {
                                          (e4(T.A.FAIL),
                                              ej(t),
                                              W.default.track(
                                                  $.rMx.PAYMENT_FLOW_FAILED,
                                                  el(en({}, eq), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway: null != e ? (e.type === $.HeQ.CARD ? $.gg$.STRIPE : $.gg$.BRAINTREE) : null,
                                                      payment_source_id: eC,
                                                      duration_ms: Date.now() - eX
                                                  })
                                              ));
                                      } finally {
                                          ta || eA(!1);
                                      }
                                  }
                              })
                            : (0, i.jsx)(m.ua7, {
                                  text: ee.intl.string(ee.t.XdvBLS),
                                  children: (e) =>
                                      (0, i.jsx)(
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
                    let a = Z.Z.getGuild(ec),
                        u = (0, j.$)(eT, eC),
                        p = (0, V.qH)(eS.current) && null != eN && !J.F$.has(eN.id);
                    e = (0, i.jsx)(K.R7, {
                        guild: a,
                        guildBoostQuantity: eG + ex.length,
                        onClose: e9,
                        withAnimation: !1,
                        paymentSourceType: u,
                        didPurchaseOnFractionalPremium: p
                    });
            }
            let h = null != eD && null == (0, L.ly)(eD) ? eD : eZ;
            t =
                e$ === L.h8.ADD_PAYMENT_STEPS
                    ? tp
                    : (0, i.jsx)(v.Z, {
                          hideBreadcrumbs: e$ === L.h8.CONFIRM,
                          steps: e1,
                          currentStep: e$,
                          paymentError: h,
                          purchaseErrorBlockRef: ew,
                          hasCurrencies: ts.length > 1,
                          body: e,
                          footer:
                              e$ !== L.h8.CONFIRM
                                  ? (0, i.jsxs)(m.mzw, {
                                        direction: b.Z.Direction.HORIZONTAL,
                                        align: b.Z.Align.CENTER,
                                        justify: b.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, i.jsx)('div', {
                                                      className: et.backStep,
                                                      children: (0, i.jsx)(E.zx, {
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
                                            (0, i.jsxs)('div', {
                                                className: et.footerRight,
                                                children: [l, r]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    else
        t = (0, i.jsx)('div', {
            className: et.loadingWrapper,
            children: (0, i.jsx)(m.$jN, {})
        });
    let td = null;
    return (
        e_ ||
            e$ === L.h8.PREMIUM_UPSELL ||
            (td = (0, i.jsx)(X.Z, {
                onClose: e9,
                currentStep: e$,
                purchaseState: e7
            })),
        (0, i.jsxs)(m.Y0X, {
            transitionState: n,
            className: o()({ [et.planSelectStep]: e$ === L.h8.PLAN_SELECT }),
            parentComponent: 'GuildBoostPurchaseModal',
            children: [td, t]
        })
    );
}
function eu(e) {
    let t = (0, p.e7)([F.Z], () => F.Z.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, N.ZP)(I.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(N.Gt, {
        value: n,
        children: (0, i.jsx)(M.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(ec, en({}, e))
        })
    });
}
