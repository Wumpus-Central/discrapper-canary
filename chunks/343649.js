t.d(n, { default: () => eo }), t(47120), t(26686);
var r = t(200651),
    l = t(192379),
    i = t(120356),
    o = t.n(i),
    s = t(512722),
    a = t.n(s),
    c = t(772848),
    u = t(442837),
    p = t(780384),
    d = t(481060),
    _ = t(355467),
    m = t(179360),
    S = t(723484),
    f = t(211266),
    E = t(493773),
    b = t(330726),
    h = t(100527),
    P = t(906732),
    g = t(15640),
    I = t(89057),
    x = t(600164),
    N = t(232127),
    y = t(563132),
    T = t(409813),
    k = t(45572),
    C = t(98278),
    O = t(431369),
    M = t(176919),
    L = t(3409),
    j = t(185139),
    v = t(210887),
    R = t(430824),
    A = t(314884),
    D = t(975060),
    Z = t(853872),
    w = t(509545),
    W = t(78839),
    U = t(626135),
    G = t(267642),
    z = t(74538),
    B = t(212895),
    F = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    X = t(981631),
    q = t(474936),
    K = t(231338),
    J = t(388032),
    $ = t(838349);
function Q(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function ee(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let en = q.Xh.NONE_MONTH,
    et = [T.h8.PLAN_SELECT, T.h8.REVIEW, T.h8.CONFIRM],
    er = [T.h8.PLAN_SELECT, T.h8.ADD_PAYMENT_STEPS, T.h8.REVIEW, T.h8.CONFIRM];
async function el(e) {
    await (0, m.X8)();
    let n = (0, G.vx)(A.Z.boostSlots);
    return (0, m.W3)(
        e,
        n.map((e) => e.id)
    );
}
function ei(e) {
    let n,
        { transitionState: t, onClose: i, closeGuildPerksModal: s, analyticsLocations: m, analyticsLocation: ei, analyticsSourceLocation: eo, guildId: es, onSubscribeComplete: ea, totalNumberOfSlotsToAssign: ec = 1, disablePremiumUpsell: eu = !1, onSubscriptionConfirmation: ep, applicationId: ed } = e,
        { activeSubscription: e_, blockedPayments: em } = (0, y.JL)(),
        eS = (0, u.e7)([W.ZP], () => W.ZP.hasFetchedSubscriptions()),
        ef = null != e_ ? e_.paymentSourceId : null,
        eE = (0, u.e7)([w.Z], () => (null != e_ ? (0, F.oE)(e_.planId) : null)),
        eb = (0, u.e7)([w.Z], () => null == e_ || null != w.Z.get(e_.planId)),
        eh = (0, u.e7)([w.Z], () => (null == eE ? w.Z.get(en) : eE)),
        eP = (0, u.e7)([v.Z], () => v.Z.theme),
        eg = l.useRef((0, G.vx)(A.Z.boostSlots)).current,
        eI = (0, u.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
        ex = (0, L.fL)(null != ef ? ef : eS ? eI : null),
        { paymentSources: eN, setPurchaseError: ey, paymentSourceId: eT, setIsSubmittingCurrentStep: ek, paymentAuthenticationState: eC, setPaymentSourceId: eO, isSubmittingCurrentStep: eM, paymentError: eL, purchaseError: ej, purchaseErrorBlockRef: ev } = ex,
        eR = Object.keys(eN).length > 0,
        [eA, eD] = l.useState(ec - eg.length),
        [eZ, ew] = l.useState(!1),
        eW = (0, u.e7)([D.Z], () => D.Z.popupCallbackCalled),
        eU = (0, g.V)(),
        eG = l.useMemo(
            () =>
                null != e_ && eb && eU
                    ? (0, O.g)(e_, eA)
                    : [
                          {
                              planId: q.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eA
                          }
                      ],
            [e_, eb, eA, eU]
        ),
        [ez, eB] = (0, f.Z)(() => [(0, c.Z)(), Date.now()]),
        { analyticsLocations: eF } = (0, P.ZP)(m, h.Z.GUILD_BOOST_PURCHASE_MODAL),
        eY = l.useMemo(() => {
            var e, n;
            return {
                load_id: ez,
                payment_type: K.Zu[K.GZ.SUBSCRIPTION],
                sku_id: q.Si.GUILD,
                subscription_type: X.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eG.find((e) => {
                                    let { planId: n } = e;
                                    return q.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : q.Xh.PREMIUM_MONTH_GUILD,
                quantity: eA,
                location: ei,
                source: eo,
                location_stack: eF
            };
        }, [ez, ei, eF, eo, eG, eA]);
    l.useEffect(() => {
        (0, B.i1)(eT);
    }, [eT]);
    let [eH, eV] = l.useState(T.h8.PLAN_SELECT),
        eX = l.useMemo(() => Date.now(), [eH]),
        eq = l.useCallback(
            (e, n) => {
                eV(e), ey(null);
                let t = Date.now();
                U.default.track(
                    X.rMx.PAYMENT_FLOW_STEP,
                    ee(Q({}, eY), {
                        from_step: null != n ? n : eH,
                        to_step: e === T.h8.ADD_PAYMENT_STEPS ? T.h8.PAYMENT_TYPE : e,
                        step_duration_ms: t - eX,
                        flow_duration_ms: t - eB,
                        guild_id: es,
                        application_id: ed
                    })
                );
            },
            [ey, eY, eH, eX, eB, es, ed]
        ),
        eK = {
            baseAnalyticsData: eY,
            flowStartTime: eB,
            guildId: es,
            handleStepChange: eq,
            onSubscribeComplete: ea,
            paymentSourceId: eT,
            setIsSubmittingCurrentStep: ek,
            setPurchaseError: ey
        },
        eJ = l.useRef(eK);
    l.useEffect(() => {
        eJ.current = eK;
    }),
        l.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, guildId: t, handleStepChange: r, onSubscribeComplete: l, paymentSourceId: i, setIsSubmittingCurrentStep: o, setPurchaseError: s } = eJ.current;
            (async () => {
                if (!0 === eW)
                    try {
                        if (null == D.Z.redirectedPaymentId) return;
                        await (0, _.OP)(D.Z.redirectedPaymentId), r(T.h8.CONFIRM), e8(k.A.COMPLETED), null != t && (await el(t)), null != l && l();
                    } catch (t) {
                        e8(k.A.FAIL),
                            s(t),
                            U.default.track(
                                X.rMx.PAYMENT_FLOW_FAILED,
                                ee(Q({}, e), {
                                    payment_error_code: null == t ? void 0 : t.code,
                                    payment_gateway: X.gg$.STRIPE,
                                    payment_source_id: i,
                                    duration_ms: Date.now() - n
                                })
                            );
                    } finally {
                        o(!1), (0, _.K2)();
                    }
            })();
        }, [eW]),
        (0, E.ZP)(() => {
            W.ZP.hasFetchedSubscriptions() || (0, _.jg)(),
                (0, N.U)(
                    ee(Q({}, eY), {
                        guild_id: es,
                        application_id: ed
                    })
                ),
                null != e_ &&
                    null != e_.renewalMutations &&
                    U.default.track(X.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: ei,
                        guild_id: es
                    });
        });
    let [e$, eQ] = l.useState(et),
        [e0, e8] = l.useState(k.A.WAITING),
        [e4, e1] = l.useState(!0),
        e3 = () => {
            i(e0 === k.A.COMPLETED);
        },
        e5 = null != e_ && e_.isPurchasedExternally;
    l.useEffect(() => {
        eC === M.wr.PENDING || eH === T.h8.CONFIRM || null == ef || (e$ !== et && eQ(et), et.includes(eH) || eH === T.h8.PREMIUM_UPSELL || eq(T.h8.REVIEW)), eH === T.h8.ADD_PAYMENT_STEPS && e$ !== er && eQ(er), e5 && eH !== T.h8.PLAN_SELECT && eV(T.h8.PLAN_SELECT);
    }, [eH, eq, e5, eC, e_, ef, e$]),
        (0, M.bp)(eH, eC, eq, e8),
        (0, T.dZ)(eH, e0, e8);
    let e9 = l.useRef(null),
        [e6, e7] = (0, b.Z)(!1, 500),
        [e2, ne] = l.useState(null),
        [nn, nt] = l.useState([]),
        [nr, nl] = l.useState(!1),
        ni = l.useMemo(() => JSON.stringify(nn), [nn]);
    l.useEffect(() => {
        let e;
        eU && (null != w.Z.get(q.Xh.PREMIUM_MONTH_GUILD) && nt((e = (0, B.DE)(q.Xh.PREMIUM_MONTH_GUILD, eT, !1))), null == eT && null != e_ && null != e_.paymentSourceId ? ne(e_.currency) : null != e && ne(e[0]));
    }, [eT, e_, eU, ni]);
    let no = (0, L.vP)({
        paymentModalArgs: ex,
        initialStep: T.h8.PAYMENT_TYPE,
        prependSteps: [T.h8.PLAN_SELECT],
        appendSteps: [T.h8.REVIEW, T.h8.CONFIRM],
        breadcrumpSteps: e$,
        currentBreadcrumpStep: eH,
        onReturn: () => {
            eq(Object.values(eN).length < 1 ? T.h8.PLAN_SELECT : T.h8.REVIEW, T.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eq(T.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                r = Date.now();
            U.default.track(
                X.rMx.PAYMENT_FLOW_STEP,
                ee(Q({}, eY), {
                    from_step: n,
                    to_step: t,
                    step_duration_ms: r - eX,
                    flow_duration_ms: r - eB,
                    guild_id: es
                })
            );
        }
    });
    if (em) n = (0, r.jsx)(I.Vq, { onClose: e3 });
    else if (eS && eb && eU && null != e2 && '' !== e2) {
        if (null == e_ ? void 0 : e_.isPausedOrPausePending)
            n = (0, r.jsx)(d.hzk, {
                children: (0, r.jsx)('p', {
                    className: $.copy,
                    children: J.NW.string(J.t.mOWsFx)
                })
            });
        else if (null != e_ && null != e_.renewalMutations)
            n = (0, r.jsx)(d.hzk, {
                children: (0, r.jsx)('p', {
                    className: $.copy,
                    children: J.NW.string(J.t.npfhh4)
                })
            });
        else if (eH === T.h8.PREMIUM_UPSELL) {
            a()(null != eh, 'Missing nextPremiumSubscriptionPlan'), a()(e2, 'Currency not defined');
            let e =
                null != eT
                    ? {
                          paymentSourceId: eT,
                          currency: e2
                      }
                    : { currency: e2 };
            n = (0, r.jsx)(V.Z, {
                premiumSubscriptionPlan: eh,
                analyticsLocation: ei,
                analyticsSourceLocation: eo,
                onClose: e3,
                onBack: () => eq(T.h8.PLAN_SELECT),
                onSkip: () => eq(null != ef || eR ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ep,
                priceOptions: e
            });
        } else {
            let e, t, l, i;
            a()(e2, 'Currency not defined');
            let o =
                null != eT
                    ? {
                          paymentSourceId: eT,
                          currency: e2
                      }
                    : { currency: e2 };
            switch (eH) {
                case T.h8.PLAN_SELECT:
                    a()(null != es, 'Missing guildId'),
                        a()(null != eh, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(H.CP, {
                            premiumSubscriptionPlan: eh,
                            numGuildBoosts: eA,
                            setNumGuildBoosts: eD,
                            setForceDisableSubmitButton: e1,
                            premiumSubscription: e_,
                            existingAvailableSlots: eg,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e3(), null != s && s(), (0, C.z)();
                            },
                            guildId: es,
                            priceOptions: o
                        })),
                        e5 &&
                            null != e_ &&
                            null != e_.paymentGateway &&
                            (e = (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(d.kzN, {
                                        className: $.externalErrorBlock,
                                        children: J.NW.format(J.t['/m3Y3t'], { paymentGatewayName: K.Vz[e_.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (l = (0, r.jsx)(d.zxk, {
                            look: d.zxk.Looks.LINK,
                            color: (0, p.ap)(eP) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                            onClick: e3,
                            children: J.NW.string(J.t.oEAioK)
                        })),
                        (i = (0, r.jsx)(d.zxk, {
                            type: 'submit',
                            disabled: e4 || 0 === eA || e5,
                            onClick: () => {
                                if (!eu && (null == eE || eE.premiumSubscriptionType !== q.p9.TIER_2)) {
                                    eq(T.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eq(null != ef || eR ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS);
                            },
                            children: J.NW.string(J.t['3PatS0'])
                        }));
                    break;
                case T.h8.ADD_PAYMENT_STEPS:
                    break;
                case T.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(S.F, { className: $.__invalid_body });
                    break;
                case T.h8.REVIEW:
                    a()(null != eh, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(H.Gq, {
                            paymentSources: eN,
                            priceOptions: o,
                            currentPremiumSubscription: e_,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: eh,
                            newAdditionalPlans: eG,
                            onPaymentSourceChange: (e) => eO(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eq(T.h8.ADD_PAYMENT_STEPS), eO(null);
                            },
                            onPurchaseTermsChange: ew,
                            legalTermsNodeRef: e9,
                            hasLegalTermsFlash: e6
                        })),
                        (t = T.h8.PLAN_SELECT),
                        (i = eZ
                            ? (0, r.jsx)(d.zxk, {
                                  color: d.zxk.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eM,
                                  onClick: async () => {
                                      a()(null != eG, 'Missing newAdditionalPlans');
                                      let e = null != eT ? eN[eT] : null;
                                      ey(null);
                                      try {
                                          if (
                                              (e8(k.A.PURCHASING),
                                              ek(!0),
                                              a()(null != eT, 'Missing paymentSourceId'),
                                              U.default.track(
                                                  X.rMx.PAYMENT_FLOW_COMPLETED,
                                                  ee(Q({}, eY), {
                                                      duration_ms: Date.now() - eB,
                                                      guild_id: es,
                                                      application_id: ed
                                                  })
                                              ),
                                              nr)
                                          )
                                              return;
                                          if (null == e_ || null == eE) {
                                              a()(null != e, 'Missing paymentSource');
                                              let n = await (0, _.XW)({
                                                  items: eG,
                                                  paymentSource: e,
                                                  currency: o.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  nl(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, z.MY)(e_, eG) };
                                              (n.currency = e_.currency), null == n.currency && (n.currency = o.currency), (n.paymentSource = null != ef ? eN[ef] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = o.currency));
                                              let t = await (0, _.Mg)(e_, n, eF);
                                              if (t.redirectConfirmation) {
                                                  nl(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eq(T.h8.CONFIRM), e8(k.A.COMPLETED), null != es && (await el(es)), null != ea && ea();
                                      } catch (n) {
                                          e8(k.A.FAIL),
                                              ey(n),
                                              U.default.track(
                                                  X.rMx.PAYMENT_FLOW_FAILED,
                                                  ee(Q({}, eY), {
                                                      payment_error_code: null == n ? void 0 : n.code,
                                                      payment_gateway: null != e ? (e.type === X.HeQ.CARD ? X.gg$.STRIPE : X.gg$.BRAINTREE) : null,
                                                      payment_source_id: eT,
                                                      duration_ms: Date.now() - eB
                                                  })
                                              );
                                      } finally {
                                          nr || ek(!1);
                                      }
                                  },
                                  children: J.NW.string(J.t.eUEeCg)
                              })
                            : (0, r.jsx)(d.ua7, {
                                  text: J.NW.string(J.t.XdvBLS),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          d.zxk,
                                          ee(Q({}, e), {
                                              color: d.zxk.Colors.GREEN,
                                              onClick: () => {
                                                  null != e9.current && (e9.current.scrollIntoView({ behavior: 'smooth' }), e7(!0));
                                              },
                                              type: 'submit',
                                              children: J.NW.string(J.t.eUEeCg)
                                          })
                                      )
                              }));
                    break;
                case T.h8.CONFIRM:
                    var ns;
                    let c = R.Z.getGuild(es);
                    e = (0, r.jsx)(H.R7, {
                        guild: c,
                        guildBoostQuantity: eA + eg.length,
                        onClose: e3,
                        withAnimation: !1,
                        paymentSourceType: null === (ns = eN[null != eT ? eT : '']) || void 0 === ns ? void 0 : ns.type
                    });
            }
            let u = null != eL && null == (0, T.ly)(eL) ? eL : ej;
            n =
                eH === T.h8.ADD_PAYMENT_STEPS
                    ? no
                    : (0, r.jsx)(j.Z, {
                          hideBreadcrumbs: eH === T.h8.CONFIRM,
                          steps: e$,
                          currentStep: eH,
                          paymentError: u,
                          purchaseErrorBlockRef: ev,
                          hasCurrencies: nn.length > 1,
                          body: e,
                          footer:
                              eH !== T.h8.CONFIRM
                                  ? (0, r.jsxs)(d.mzw, {
                                        direction: x.Z.Direction.HORIZONTAL,
                                        align: x.Z.Align.CENTER,
                                        justify: x.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, r.jsx)('div', {
                                                      className: $.backStep,
                                                      children: (0, r.jsx)(d.zxk, {
                                                          color: (0, p.ap)(eP) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                                                          look: d.zxk.Looks.LINK,
                                                          size: d.zxk.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eq(t);
                                                          },
                                                          children: J.NW.string(J.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: $.footerRight,
                                                children: [l, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, r.jsx)('div', {
            className: $.loadingWrapper,
            children: (0, r.jsx)(d.$jN, {})
        });
    let na = null;
    return (
        em ||
            eH === T.h8.PREMIUM_UPSELL ||
            (na = (0, r.jsx)(Y.Z, {
                onClose: e3,
                currentStep: eH,
                purchaseState: e0
            })),
        (0, r.jsxs)(d.Y0X, {
            transitionState: t,
            className: o()({ [$.planSelectStep]: eH === T.h8.PLAN_SELECT }),
            children: [na, n]
        })
    );
}
function eo(e) {
    let n = (0, u.e7)([W.ZP], () => W.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, P.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(P.Gt, {
        value: t,
        children: (0, r.jsx)(y.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(ei, Q({}, e))
        })
    });
}
