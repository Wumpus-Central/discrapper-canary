n.d(t, {
    P: () => el,
    default: () => ea
}),
    n(388685),
    n(49124);
var l,
    r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    a = n.n(c),
    u = n(772848),
    d = n(442837),
    p = n(780384),
    E = n(481060),
    P = n(355467),
    m = n(179360),
    h = n(723484),
    _ = n(211266),
    S = n(493773),
    y = n(330726),
    f = n(100527),
    N = n(906732),
    I = n(15640),
    g = n(89057),
    O = n(600164),
    b = n(232127),
    x = n(563132),
    M = n(409813),
    L = n(45572),
    k = n(435020),
    T = n(98278),
    j = n(431369),
    C = n(176919),
    A = n(3409),
    R = n(185139),
    D = n(210887),
    Z = n(430824),
    v = n(314884),
    w = n(975060),
    U = n(853872),
    G = n(509545),
    z = n(78839),
    F = n(626135),
    W = n(267642),
    Y = n(74538),
    B = n(212895),
    H = n(296848),
    V = n(518062),
    X = n(4434),
    K = n(333451),
    q = n(981631),
    $ = n(474936),
    J = n(231338),
    Q = n(388032),
    ee = n(104274);
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function en(e, t) {
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
var el = 12633 == n.j ? (((l = {})[(l.NONE = 0)] = 'NONE'), (l[(l.LEVEL = 1)] = 'LEVEL'), (l[(l.PERK = 2)] = 'PERK'), l) : null;
let er = $.Xh.NONE_MONTH,
    ei = [M.h8.PLAN_SELECT, M.h8.REVIEW, M.h8.CONFIRM],
    es = [M.h8.PLAN_SELECT, M.h8.ADD_PAYMENT_STEPS, M.h8.REVIEW, M.h8.CONFIRM];
async function eo(e, t) {
    await (0, m.X8)();
    let n = (0, W.vx)(v.Z.boostSlots);
    return (0, m.W3)(
        e,
        n.map((e) => e.id),
        t
    );
}
function ec(e) {
    let t,
        { transitionState: n, onClose: l, closeGuildPerksModal: s, analyticsLocations: c, analyticsLocation: m, analyticsSourceLocation: el, guildId: ec, onSubscribeComplete: ea, totalNumberOfSlotsToAssign: eu = 1, disablePremiumUpsell: ed = !1, onSubscriptionConfirmation: ep, applicationId: eE, intent: eP = 0 } = e,
        { activeSubscription: em, blockedPayments: eh, startingFractionalPremiumEndsAtRef: e_, invoicePreview: eS } = (0, x.JL)(),
        ey = (0, d.e7)([z.ZP], () => z.ZP.hasFetchedSubscriptions()),
        ef = null != em ? em.paymentSourceId : null,
        eN = (0, d.e7)([G.Z], () => (null != em ? (0, H.oE)(em.planId) : null)),
        eI = (0, d.e7)([G.Z], () => null == em || null != G.Z.get(em.planId)),
        eg = (0, d.e7)([G.Z], () => (null == eN ? G.Z.get(er) : eN)),
        eO = (0, d.e7)([D.Z], () => D.Z.theme),
        eb = i.useRef((0, W.vx)(v.Z.boostSlots)).current,
        ex = (0, d.e7)([U.Z], () => U.Z.defaultPaymentSourceId),
        eM = (0, A.fL)(null != ef ? ef : ey ? ex : null),
        { paymentSources: eL, setPurchaseError: ek, paymentSourceId: eT, setIsSubmittingCurrentStep: ej, paymentAuthenticationState: eC, setPaymentSourceId: eA, isSubmittingCurrentStep: eR, paymentError: eD, purchaseError: eZ, purchaseErrorBlockRef: ev } = eM,
        ew = Object.keys(eL).length > 0,
        [eU, eG] = i.useState(eu - eb.length),
        [ez, eF] = i.useState(!1),
        eW = (0, d.e7)([w.Z], () => w.Z.popupCallbackCalled),
        eY = (0, I.V)(),
        eB = i.useMemo(
            () =>
                null != em && eI && eY
                    ? (0, j.g)(em, eU)
                    : [
                          {
                              planId: $.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eU
                          }
                      ],
            [em, eI, eU, eY]
        ),
        [eH, eV] = (0, _.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eX } = (0, N.ZP)(c, f.Z.GUILD_BOOST_PURCHASE_MODAL),
        eK = i.useMemo(() => {
            var e, t;
            return {
                load_id: eH,
                payment_type: J.Zu[J.GZ.SUBSCRIPTION],
                sku_id: $.Si.GUILD,
                subscription_type: q.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eB.find((e) => {
                            let { planId: t } = e;
                            return $.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : $.Xh.PREMIUM_MONTH_GUILD,
                quantity: eU,
                location: m,
                source: el,
                location_stack: eX
            };
        }, [eH, m, eX, el, eB, eU]);
    i.useEffect(() => {
        (0, B.i1)(eT);
    }, [eT]);
    let [eq, e$] = i.useState(M.h8.PLAN_SELECT),
        eJ = i.useMemo(() => Date.now(), [eq]),
        eQ = i.useCallback(
            (e, t) => {
                e$(e), ek(null);
                let n = Date.now();
                F.default.track(
                    q.rMx.PAYMENT_FLOW_STEP,
                    en(et({}, eK), {
                        from_step: null != t ? t : eq,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - eJ,
                        flow_duration_ms: n - eV,
                        guild_id: ec,
                        application_id: eE
                    })
                );
            },
            [ek, eK, eq, eJ, eV, ec, eE]
        ),
        e0 = {
            baseAnalyticsData: eK,
            flowStartTime: eV,
            guildId: ec,
            handleStepChange: eQ,
            onSubscribeComplete: ea,
            paymentSourceId: eT,
            setIsSubmittingCurrentStep: ej,
            setPurchaseError: ek
        },
        e8 = i.useRef(e0);
    i.useEffect(() => {
        e8.current = e0;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: t, guildId: n, handleStepChange: l, onSubscribeComplete: r, paymentSourceId: i, setIsSubmittingCurrentStep: s, setPurchaseError: o } = e8.current;
            (async () => {
                if (!0 === eW)
                    try {
                        if (null == w.Z.redirectedPaymentId) return;
                        await (0, P.OP)(w.Z.redirectedPaymentId), l(M.h8.CONFIRM), e4(L.A.COMPLETED), null != n && (await eo(n, 0 !== eP)), null == r || r();
                    } catch (n) {
                        e4(L.A.FAIL),
                            o(n),
                            F.default.track(
                                q.rMx.PAYMENT_FLOW_FAILED,
                                en(et({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: q.gg$.STRIPE,
                                    payment_source_id: i,
                                    duration_ms: Date.now() - t
                                })
                            );
                    } finally {
                        s(!1), (0, P.K2)();
                    }
            })();
        }, [eW, eP]),
        (0, S.ZP)(() => {
            z.ZP.hasFetchedSubscriptions() || (0, P.jg)(),
                (0, b.U)(
                    en(et({}, eK), {
                        guild_id: ec,
                        application_id: eE
                    })
                ),
                null != em &&
                    null != em.renewalMutations &&
                    F.default.track(q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: m,
                        guild_id: ec
                    });
        });
    let [e3, e1] = i.useState(ei),
        [e2, e4] = i.useState(L.A.WAITING),
        [e7, e6] = i.useState(!0),
        e5 = () => {
            l(e2 === L.A.COMPLETED);
        },
        e9 = null != em && em.isPurchasedExternally;
    i.useEffect(() => {
        eC !== C.wr.PENDING && eq !== M.h8.CONFIRM && null != ef && (e3 !== ei && e1(ei), ei.includes(eq) || eq === M.h8.PREMIUM_UPSELL || eQ(M.h8.REVIEW)), eq === M.h8.ADD_PAYMENT_STEPS && e3 !== es && e1(es), e9 && eq !== M.h8.PLAN_SELECT && e$(M.h8.PLAN_SELECT);
    }, [eq, eQ, e9, eC, em, ef, e3]),
        (0, C.bp)(eq, eC, eQ, e4),
        (0, M.dZ)(eq, e2, e4);
    let te = i.useRef(null),
        [tt, tn] = (0, y.Z)(!1, 500),
        [tl, tr] = i.useState(null),
        [ti, ts] = i.useState([]),
        [to, tc] = i.useState(!1),
        ta = i.useMemo(() => JSON.stringify(ti), [ti]);
    i.useEffect(() => {
        let e;
        eY && (null != G.Z.get($.Xh.PREMIUM_MONTH_GUILD) && ts((e = (0, B.DE)($.Xh.PREMIUM_MONTH_GUILD, eT, !1))), null == eT && null != em && null != em.paymentSourceId ? tr(em.currency) : null != e && tr(e[0]));
    }, [eT, em, eY, ta]);
    let tu = (0, A.vP)({
        paymentModalArgs: eM,
        initialStep: M.h8.PAYMENT_TYPE,
        prependSteps: [M.h8.PLAN_SELECT],
        appendSteps: [M.h8.REVIEW, M.h8.CONFIRM],
        breadcrumpSteps: e3,
        currentBreadcrumpStep: eq,
        onReturn: () => {
            eQ(Object.values(eL).length < 1 ? M.h8.PLAN_SELECT : M.h8.REVIEW, M.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eQ(M.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                l = Date.now();
            F.default.track(
                q.rMx.PAYMENT_FLOW_STEP,
                en(et({}, eK), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: l - eJ,
                    flow_duration_ms: l - eV,
                    guild_id: ec
                })
            );
        }
    });
    if (eh) t = (0, r.jsx)(g.Vq, { onClose: e5 });
    else if (ey && eI && eY && null != tl && '' !== tl)
        if ((null == em ? void 0 : em.isPausedOrPausePending) && !em.isPausedAllowsUpdatesButNotResume)
            t = (0, r.jsx)(E.hzk, {
                children: (0, r.jsx)('p', {
                    className: ee.copy,
                    children: Q.intl.string(Q.t.mOWsFx)
                })
            });
        else if (null != em && null != em.renewalMutations)
            t = (0, r.jsx)(E.hzk, {
                children: (0, r.jsx)('p', {
                    className: ee.copy,
                    children: Q.intl.string(Q.t.npfhh4)
                })
            });
        else if (eq === M.h8.PREMIUM_UPSELL) {
            a()(null != eg, 'Missing nextPremiumSubscriptionPlan'), a()(tl, 'Currency not defined');
            let e =
                null != eT
                    ? {
                          paymentSourceId: eT,
                          currency: tl
                      }
                    : { currency: tl };
            t = (0, r.jsx)(K.Z, {
                premiumSubscriptionPlan: eg,
                analyticsLocation: m,
                analyticsSourceLocation: el,
                onClose: e5,
                onBack: () => eQ(M.h8.PLAN_SELECT),
                onSkip: () => eQ(null != ef || ew ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ep,
                priceOptions: e
            });
        } else {
            let e, n, l, i;
            a()(tl, 'Currency not defined');
            let o =
                null != eT
                    ? {
                          paymentSourceId: eT,
                          currency: tl
                      }
                    : { currency: tl };
            switch (eq) {
                case M.h8.PLAN_SELECT:
                    a()(null != ec, 'Missing guildId'),
                        a()(null != eg, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(X.CP, {
                            premiumSubscriptionPlan: eg,
                            numGuildBoosts: eU,
                            setNumGuildBoosts: eG,
                            setForceDisableSubmitButton: e6,
                            premiumSubscription: em,
                            existingAvailableSlots: eb,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e5(), null != s && s(), (0, T.z)();
                            },
                            guildId: ec,
                            priceOptions: o
                        })),
                        e9 &&
                            null != em &&
                            null != em.paymentGateway &&
                            (e = (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(E.kzN, {
                                        className: ee.externalErrorBlock,
                                        children: Q.intl.format(Q.t['/m3Y3t'], { paymentGatewayName: J.Vz[em.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (l = (0, r.jsx)(E.zxk, {
                            look: E.zxk.Looks.LINK,
                            color: (0, p.ap)(eO) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                            onClick: e5,
                            children: Q.intl.string(Q.t.oEAioK)
                        })),
                        (i = (0, r.jsx)(E.zxk, {
                            type: 'submit',
                            disabled: e7 || 0 === eU || e9,
                            onClick: () => {
                                if (!ed && (null == eN || eN.premiumSubscriptionType !== $.p9.TIER_2)) return void eQ(M.h8.PREMIUM_UPSELL);
                                eQ(null != ef || ew ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS);
                            },
                            children: Q.intl.string(Q.t['3PatS0'])
                        }));
                    break;
                case M.h8.ADD_PAYMENT_STEPS:
                    break;
                case M.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(h.F, { className: ee.__invalid_body });
                    break;
                case M.h8.REVIEW:
                    a()(null != eg, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(X.Gq, {
                            paymentSources: eL,
                            priceOptions: o,
                            currentPremiumSubscription: em,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: eg,
                            newAdditionalPlans: eB,
                            onPaymentSourceChange: (e) => eA(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eQ(M.h8.ADD_PAYMENT_STEPS), eA(null);
                            },
                            onPurchaseTermsChange: eF,
                            legalTermsNodeRef: te,
                            hasLegalTermsFlash: tt
                        })),
                        (n = M.h8.PLAN_SELECT),
                        (i = ez
                            ? (0, r.jsx)(E.zxk, {
                                  color: E.zxk.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eR,
                                  onClick: async () => {
                                      a()(null != eB, 'Missing newAdditionalPlans');
                                      let e = (0, k.m)(eL, eT);
                                      ek(null);
                                      try {
                                          e4(L.A.PURCHASING), ej(!0), a()(null != eT, 'Missing paymentSourceId'), a()(null != eS, 'Missing invoicePreview');
                                          let t = {
                                                  amount: eS.total,
                                                  currency: eS.currency
                                              },
                                              n = (0, Y.sG)(em, eB, o.currency.toLowerCase());
                                          if (
                                              (F.default.track(
                                                  q.rMx.PAYMENT_FLOW_COMPLETED,
                                                  en(et({}, eK), {
                                                      duration_ms: Date.now() - eV,
                                                      guild_id: ec,
                                                      application_id: eE
                                                  })
                                              ),
                                              to)
                                          )
                                              return;
                                          if (null == em || null == eN) {
                                              a()(null != e, 'Missing paymentSource');
                                              let l = await (0, P.XW)({
                                                  items: eB,
                                                  paymentSource: e,
                                                  currency: o.currency,
                                                  expectedInvoicePrice: t,
                                                  expectedRenewalPrice: n
                                              });
                                              if (l.redirectConfirmation) return void tc(null != l.redirectURL);
                                          } else {
                                              let l = { items: (0, Y.MY)(em, eB) };
                                              (l.currency = em.currency), null == l.currency && (l.currency = o.currency), (l.paymentSource = null != ef ? eL[ef] : void 0), null == l.paymentSource && (a()(null != e, 'Missing paymentSource'), (l.paymentSource = e), (l.currency = o.currency));
                                              let r = await (0, P.Mg)(em, l, t, n, eX);
                                              if (r.redirectConfirmation) return void tc(null != r.redirectURL);
                                          }
                                          0 === eP && eQ(M.h8.CONFIRM), e4(L.A.COMPLETED), null != ec && (await eo(ec, 0 !== eP)), 0 !== eP && e5(), null == ea || ea();
                                      } catch (t) {
                                          e4(L.A.FAIL),
                                              ek(t),
                                              F.default.track(
                                                  q.rMx.PAYMENT_FLOW_FAILED,
                                                  en(et({}, eK), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway: null != e ? (e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE) : null,
                                                      payment_source_id: eT,
                                                      duration_ms: Date.now() - eV
                                                  })
                                              );
                                      } finally {
                                          to || ej(!1);
                                      }
                                  },
                                  children: Q.intl.string(Q.t.eUEeCg)
                              })
                            : (0, r.jsx)(E.ua7, {
                                  text: Q.intl.string(Q.t.XdvBLS),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          E.zxk,
                                          en(et({}, e), {
                                              color: E.zxk.Colors.GREEN,
                                              onClick: () => {
                                                  null != te.current && (te.current.scrollIntoView({ behavior: 'smooth' }), tn(!0));
                                              },
                                              type: 'submit',
                                              children: Q.intl.string(Q.t.eUEeCg)
                                          })
                                      )
                              }));
                    break;
                case M.h8.CONFIRM:
                    let c = Z.Z.getGuild(ec),
                        u = (0, k.$)(eL, eT),
                        d = (0, H.qH)(e_.current) && null != eN && !$.F$.has(eN.id);
                    e = (0, r.jsx)(X.R7, {
                        guild: c,
                        guildBoostQuantity: eU + eb.length,
                        onClose: e5,
                        withAnimation: !1,
                        paymentSourceType: u,
                        didPurchaseOnFractionalPremium: d
                    });
            }
            let m = null != eD && null == (0, M.ly)(eD) ? eD : eZ;
            t =
                eq === M.h8.ADD_PAYMENT_STEPS
                    ? tu
                    : (0, r.jsx)(R.Z, {
                          hideBreadcrumbs: eq === M.h8.CONFIRM,
                          steps: e3,
                          currentStep: eq,
                          paymentError: m,
                          purchaseErrorBlockRef: ev,
                          hasCurrencies: ti.length > 1,
                          body: e,
                          footer:
                              eq !== M.h8.CONFIRM
                                  ? (0, r.jsxs)(E.mzw, {
                                        direction: O.Z.Direction.HORIZONTAL,
                                        align: O.Z.Align.CENTER,
                                        justify: O.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, r.jsx)('div', {
                                                      className: ee.backStep,
                                                      children: (0, r.jsx)(E.zxk, {
                                                          color: (0, p.ap)(eO) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                                                          look: E.zxk.Looks.LINK,
                                                          size: E.zxk.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && eQ(n);
                                                          },
                                                          children: Q.intl.string(Q.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: ee.footerRight,
                                                children: [l, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    else
        t = (0, r.jsx)('div', {
            className: ee.loadingWrapper,
            children: (0, r.jsx)(E.$jN, {})
        });
    let td = null;
    return (
        eh ||
            eq === M.h8.PREMIUM_UPSELL ||
            (td = (0, r.jsx)(V.Z, {
                onClose: e5,
                currentStep: eq,
                purchaseState: e2
            })),
        (0, r.jsxs)(E.Y0X, {
            transitionState: n,
            className: o()({ [ee.planSelectStep]: eq === M.h8.PLAN_SELECT }),
            children: [td, t]
        })
    );
}
function ea(e) {
    let t = (0, d.e7)([z.ZP], () => z.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, N.ZP)(f.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(N.Gt, {
        value: n,
        children: (0, r.jsx)(x.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(ec, et({}, e))
        })
    });
}
