n.d(t, {
    P: () => en,
    default: () => ec
}),
    n(47120),
    n(26686);
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
    N = n(493773),
    S = n(330726),
    y = n(100527),
    f = n(906732),
    I = n(15640),
    g = n(89057),
    b = n(600164),
    O = n(232127),
    x = n(563132),
    M = n(409813),
    L = n(45572),
    k = n(98278),
    T = n(431369),
    j = n(176919),
    C = n(3409),
    A = n(185139),
    R = n(210887),
    D = n(430824),
    v = n(314884),
    Z = n(975060),
    w = n(853872),
    U = n(509545),
    W = n(78839),
    z = n(626135),
    G = n(267642),
    F = n(74538),
    Y = n(212895),
    B = n(296848),
    H = n(518062),
    V = n(4434),
    X = n(333451),
    K = n(981631),
    q = n(474936),
    J = n(231338),
    $ = n(388032),
    Q = n(740064);
function ee(e) {
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
function et(e, t) {
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
var en = 12633 == n.j ? (((l = {})[(l.NONE = 0)] = 'NONE'), (l[(l.LEVEL = 1)] = 'LEVEL'), (l[(l.PERK = 2)] = 'PERK'), l) : null;
let el = q.Xh.NONE_MONTH,
    er = [M.h8.PLAN_SELECT, M.h8.REVIEW, M.h8.CONFIRM],
    ei = [M.h8.PLAN_SELECT, M.h8.ADD_PAYMENT_STEPS, M.h8.REVIEW, M.h8.CONFIRM];
async function es(e, t) {
    await (0, m.X8)();
    let n = (0, G.vx)(v.Z.boostSlots);
    return (0, m.W3)(
        e,
        n.map((e) => e.id),
        t
    );
}
function eo(e) {
    let t,
        { transitionState: n, onClose: l, closeGuildPerksModal: s, analyticsLocations: c, analyticsLocation: m, analyticsSourceLocation: en, guildId: eo, onSubscribeComplete: ec, totalNumberOfSlotsToAssign: ea = 1, disablePremiumUpsell: eu = !1, onSubscriptionConfirmation: ed, applicationId: ep, intent: eE = 0 } = e,
        { activeSubscription: eP, blockedPayments: em } = (0, x.JL)(),
        eh = (0, d.e7)([W.ZP], () => W.ZP.hasFetchedSubscriptions()),
        e_ = null != eP ? eP.paymentSourceId : null,
        eN = (0, d.e7)([U.Z], () => (null != eP ? (0, B.oE)(eP.planId) : null)),
        eS = (0, d.e7)([U.Z], () => null == eP || null != U.Z.get(eP.planId)),
        ey = (0, d.e7)([U.Z], () => (null == eN ? U.Z.get(el) : eN)),
        ef = (0, d.e7)([R.Z], () => R.Z.theme),
        eI = i.useRef((0, G.vx)(v.Z.boostSlots)).current,
        eg = (0, d.e7)([w.Z], () => w.Z.defaultPaymentSourceId),
        eb = (0, C.fL)(null != e_ ? e_ : eh ? eg : null),
        { paymentSources: eO, setPurchaseError: ex, paymentSourceId: eM, setIsSubmittingCurrentStep: eL, paymentAuthenticationState: ek, setPaymentSourceId: eT, isSubmittingCurrentStep: ej, paymentError: eC, purchaseError: eA, purchaseErrorBlockRef: eR } = eb,
        eD = Object.keys(eO).length > 0,
        [ev, eZ] = i.useState(ea - eI.length),
        [ew, eU] = i.useState(!1),
        eW = (0, d.e7)([Z.Z], () => Z.Z.popupCallbackCalled),
        ez = (0, I.V)(),
        eG = i.useMemo(
            () =>
                null != eP && eS && ez
                    ? (0, T.g)(eP, ev)
                    : [
                          {
                              planId: q.Xh.PREMIUM_MONTH_GUILD,
                              quantity: ev
                          }
                      ],
            [eP, eS, ev, ez]
        ),
        [eF, eY] = (0, _.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eB } = (0, f.ZP)(c, y.Z.GUILD_BOOST_PURCHASE_MODAL),
        eH = i.useMemo(() => {
            var e, t;
            return {
                load_id: eF,
                payment_type: J.Zu[J.GZ.SUBSCRIPTION],
                sku_id: q.Si.GUILD,
                subscription_type: K.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (t =
                            null ===
                                (e = eG.find((e) => {
                                    let { planId: t } = e;
                                    return q.Z1.has(t);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== t
                        ? t
                        : q.Xh.PREMIUM_MONTH_GUILD,
                quantity: ev,
                location: m,
                source: en,
                location_stack: eB
            };
        }, [eF, m, eB, en, eG, ev]);
    i.useEffect(() => {
        (0, Y.i1)(eM);
    }, [eM]);
    let [eV, eX] = i.useState(M.h8.PLAN_SELECT),
        eK = i.useMemo(() => Date.now(), [eV]),
        eq = i.useCallback(
            (e, t) => {
                eX(e), ex(null);
                let n = Date.now();
                z.default.track(
                    K.rMx.PAYMENT_FLOW_STEP,
                    et(ee({}, eH), {
                        from_step: null != t ? t : eV,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - eK,
                        flow_duration_ms: n - eY,
                        guild_id: eo,
                        application_id: ep
                    })
                );
            },
            [ex, eH, eV, eK, eY, eo, ep]
        ),
        eJ = {
            baseAnalyticsData: eH,
            flowStartTime: eY,
            guildId: eo,
            handleStepChange: eq,
            onSubscribeComplete: ec,
            paymentSourceId: eM,
            setIsSubmittingCurrentStep: eL,
            setPurchaseError: ex
        },
        e$ = i.useRef(eJ);
    i.useEffect(() => {
        e$.current = eJ;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: t, guildId: n, handleStepChange: l, onSubscribeComplete: r, paymentSourceId: i, setIsSubmittingCurrentStep: s, setPurchaseError: o } = e$.current;
            (async () => {
                if (!0 === eW)
                    try {
                        if (null == Z.Z.redirectedPaymentId) return;
                        await (0, P.OP)(Z.Z.redirectedPaymentId), l(M.h8.CONFIRM), e3(L.A.COMPLETED), null != n && (await es(n, 0 !== eE)), null == r || r();
                    } catch (n) {
                        e3(L.A.FAIL),
                            o(n),
                            z.default.track(
                                K.rMx.PAYMENT_FLOW_FAILED,
                                et(ee({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: K.gg$.STRIPE,
                                    payment_source_id: i,
                                    duration_ms: Date.now() - t
                                })
                            );
                    } finally {
                        s(!1), (0, P.K2)();
                    }
            })();
        }, [eW, eE]),
        (0, N.ZP)(() => {
            W.ZP.hasFetchedSubscriptions() || (0, P.jg)(),
                (0, O.U)(
                    et(ee({}, eH), {
                        guild_id: eo,
                        application_id: ep
                    })
                ),
                null != eP &&
                    null != eP.renewalMutations &&
                    z.default.track(K.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: m,
                        guild_id: eo
                    });
        });
    let [eQ, e0] = i.useState(er),
        [e8, e3] = i.useState(L.A.WAITING),
        [e1, e2] = i.useState(!0),
        e7 = () => {
            l(e8 === L.A.COMPLETED);
        },
        e6 = null != eP && eP.isPurchasedExternally;
    i.useEffect(() => {
        ek === j.wr.PENDING || eV === M.h8.CONFIRM || null == e_ || (eQ !== er && e0(er), er.includes(eV) || eV === M.h8.PREMIUM_UPSELL || eq(M.h8.REVIEW)), eV === M.h8.ADD_PAYMENT_STEPS && eQ !== ei && e0(ei), e6 && eV !== M.h8.PLAN_SELECT && eX(M.h8.PLAN_SELECT);
    }, [eV, eq, e6, ek, eP, e_, eQ]),
        (0, j.bp)(eV, ek, eq, e3),
        (0, M.dZ)(eV, e8, e3);
    let e4 = i.useRef(null),
        [e9, e5] = (0, S.Z)(!1, 500),
        [te, tt] = i.useState(null),
        [tn, tl] = i.useState([]),
        [tr, ti] = i.useState(!1),
        ts = i.useMemo(() => JSON.stringify(tn), [tn]);
    i.useEffect(() => {
        let e;
        ez && (null != U.Z.get(q.Xh.PREMIUM_MONTH_GUILD) && tl((e = (0, Y.DE)(q.Xh.PREMIUM_MONTH_GUILD, eM, !1))), null == eM && null != eP && null != eP.paymentSourceId ? tt(eP.currency) : null != e && tt(e[0]));
    }, [eM, eP, ez, ts]);
    let to = (0, C.vP)({
        paymentModalArgs: eb,
        initialStep: M.h8.PAYMENT_TYPE,
        prependSteps: [M.h8.PLAN_SELECT],
        appendSteps: [M.h8.REVIEW, M.h8.CONFIRM],
        breadcrumpSteps: eQ,
        currentBreadcrumpStep: eV,
        onReturn: () => {
            eq(Object.values(eO).length < 1 ? M.h8.PLAN_SELECT : M.h8.REVIEW, M.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eq(M.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                l = Date.now();
            z.default.track(
                K.rMx.PAYMENT_FLOW_STEP,
                et(ee({}, eH), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: l - eK,
                    flow_duration_ms: l - eY,
                    guild_id: eo
                })
            );
        }
    });
    if (em) t = (0, r.jsx)(g.Vq, { onClose: e7 });
    else if (eh && eS && ez && null != te && '' !== te) {
        if (null == eP ? void 0 : eP.isPausedOrPausePending)
            t = (0, r.jsx)(E.hzk, {
                children: (0, r.jsx)('p', {
                    className: Q.copy,
                    children: $.NW.string($.t.mOWsFx)
                })
            });
        else if (null != eP && null != eP.renewalMutations)
            t = (0, r.jsx)(E.hzk, {
                children: (0, r.jsx)('p', {
                    className: Q.copy,
                    children: $.NW.string($.t.npfhh4)
                })
            });
        else if (eV === M.h8.PREMIUM_UPSELL) {
            a()(null != ey, 'Missing nextPremiumSubscriptionPlan'), a()(te, 'Currency not defined');
            let e =
                null != eM
                    ? {
                          paymentSourceId: eM,
                          currency: te
                      }
                    : { currency: te };
            t = (0, r.jsx)(X.Z, {
                premiumSubscriptionPlan: ey,
                analyticsLocation: m,
                analyticsSourceLocation: en,
                onClose: e7,
                onBack: () => eq(M.h8.PLAN_SELECT),
                onSkip: () => eq(null != e_ || eD ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ed,
                priceOptions: e
            });
        } else {
            let e, n, l, i;
            a()(te, 'Currency not defined');
            let o =
                null != eM
                    ? {
                          paymentSourceId: eM,
                          currency: te
                      }
                    : { currency: te };
            switch (eV) {
                case M.h8.PLAN_SELECT:
                    a()(null != eo, 'Missing guildId'),
                        a()(null != ey, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(V.CP, {
                            premiumSubscriptionPlan: ey,
                            numGuildBoosts: ev,
                            setNumGuildBoosts: eZ,
                            setForceDisableSubmitButton: e2,
                            premiumSubscription: eP,
                            existingAvailableSlots: eI,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e7(), null != s && s(), (0, k.z)();
                            },
                            guildId: eo,
                            priceOptions: o
                        })),
                        e6 &&
                            null != eP &&
                            null != eP.paymentGateway &&
                            (e = (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(E.kzN, {
                                        className: Q.externalErrorBlock,
                                        children: $.NW.format($.t['/m3Y3t'], { paymentGatewayName: J.Vz[eP.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (l = (0, r.jsx)(E.zxk, {
                            look: E.zxk.Looks.LINK,
                            color: (0, p.ap)(ef) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                            onClick: e7,
                            children: $.NW.string($.t.oEAioK)
                        })),
                        (i = (0, r.jsx)(E.zxk, {
                            type: 'submit',
                            disabled: e1 || 0 === ev || e6,
                            onClick: () => {
                                if (!eu && (null == eN || eN.premiumSubscriptionType !== q.p9.TIER_2)) {
                                    eq(M.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eq(null != e_ || eD ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS);
                            },
                            children: $.NW.string($.t['3PatS0'])
                        }));
                    break;
                case M.h8.ADD_PAYMENT_STEPS:
                    break;
                case M.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(h.F, { className: Q.__invalid_body });
                    break;
                case M.h8.REVIEW:
                    a()(null != ey, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, r.jsx)(V.Gq, {
                            paymentSources: eO,
                            priceOptions: o,
                            currentPremiumSubscription: eP,
                            premiumSubscriptionPaymentSourceId: e_,
                            premiumSubscriptionPlan: ey,
                            newAdditionalPlans: eG,
                            onPaymentSourceChange: (e) => eT(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eq(M.h8.ADD_PAYMENT_STEPS), eT(null);
                            },
                            onPurchaseTermsChange: eU,
                            legalTermsNodeRef: e4,
                            hasLegalTermsFlash: e9
                        })),
                        (n = M.h8.PLAN_SELECT),
                        (i = ew
                            ? (0, r.jsx)(E.zxk, {
                                  color: E.zxk.Colors.GREEN,
                                  type: 'submit',
                                  submitting: ej,
                                  onClick: async () => {
                                      a()(null != eG, 'Missing newAdditionalPlans');
                                      let e = null != eM ? eO[eM] : null;
                                      ex(null);
                                      try {
                                          if (
                                              (e3(L.A.PURCHASING),
                                              eL(!0),
                                              a()(null != eM, 'Missing paymentSourceId'),
                                              z.default.track(
                                                  K.rMx.PAYMENT_FLOW_COMPLETED,
                                                  et(ee({}, eH), {
                                                      duration_ms: Date.now() - eY,
                                                      guild_id: eo,
                                                      application_id: ep
                                                  })
                                              ),
                                              tr)
                                          )
                                              return;
                                          if (null == eP || null == eN) {
                                              a()(null != e, 'Missing paymentSource');
                                              let t = await (0, P.XW)({
                                                  items: eG,
                                                  paymentSource: e,
                                                  currency: o.currency
                                              });
                                              if (t.redirectConfirmation) {
                                                  ti(null != t.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let t = { items: (0, F.MY)(eP, eG) };
                                              (t.currency = eP.currency), null == t.currency && (t.currency = o.currency), (t.paymentSource = null != e_ ? eO[e_] : void 0), null == t.paymentSource && (a()(null != e, 'Missing paymentSource'), (t.paymentSource = e), (t.currency = o.currency));
                                              let n = await (0, P.Mg)(eP, t, eB);
                                              if (n.redirectConfirmation) {
                                                  ti(null != n.redirectURL);
                                                  return;
                                              }
                                          }
                                          0 === eE && eq(M.h8.CONFIRM), e3(L.A.COMPLETED), null != eo && (await es(eo, 0 !== eE)), 0 !== eE && e7(), null == ec || ec();
                                      } catch (t) {
                                          e3(L.A.FAIL),
                                              ex(t),
                                              z.default.track(
                                                  K.rMx.PAYMENT_FLOW_FAILED,
                                                  et(ee({}, eH), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway: null != e ? (e.type === K.HeQ.CARD ? K.gg$.STRIPE : K.gg$.BRAINTREE) : null,
                                                      payment_source_id: eM,
                                                      duration_ms: Date.now() - eY
                                                  })
                                              );
                                      } finally {
                                          tr || eL(!1);
                                      }
                                  },
                                  children: $.NW.string($.t.eUEeCg)
                              })
                            : (0, r.jsx)(E.ua7, {
                                  text: $.NW.string($.t.XdvBLS),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          E.zxk,
                                          et(ee({}, e), {
                                              color: E.zxk.Colors.GREEN,
                                              onClick: () => {
                                                  null != e4.current && (e4.current.scrollIntoView({ behavior: 'smooth' }), e5(!0));
                                              },
                                              type: 'submit',
                                              children: $.NW.string($.t.eUEeCg)
                                          })
                                      )
                              }));
                    break;
                case M.h8.CONFIRM:
                    var tc;
                    let c = D.Z.getGuild(eo);
                    e = (0, r.jsx)(V.R7, {
                        guild: c,
                        guildBoostQuantity: ev + eI.length,
                        onClose: e7,
                        withAnimation: !1,
                        paymentSourceType: null === (tc = eO[null != eM ? eM : '']) || void 0 === tc ? void 0 : tc.type
                    });
            }
            let u = null != eC && null == (0, M.ly)(eC) ? eC : eA;
            t =
                eV === M.h8.ADD_PAYMENT_STEPS
                    ? to
                    : (0, r.jsx)(A.Z, {
                          hideBreadcrumbs: eV === M.h8.CONFIRM,
                          steps: eQ,
                          currentStep: eV,
                          paymentError: u,
                          purchaseErrorBlockRef: eR,
                          hasCurrencies: tn.length > 1,
                          body: e,
                          footer:
                              eV !== M.h8.CONFIRM
                                  ? (0, r.jsxs)(E.mzw, {
                                        direction: b.Z.Direction.HORIZONTAL,
                                        align: b.Z.Align.CENTER,
                                        justify: b.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, r.jsx)('div', {
                                                      className: Q.backStep,
                                                      children: (0, r.jsx)(E.zxk, {
                                                          color: (0, p.ap)(ef) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                                                          look: E.zxk.Looks.LINK,
                                                          size: E.zxk.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && eq(n);
                                                          },
                                                          children: $.NW.string($.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, r.jsxs)('div', {
                                                className: Q.footerRight,
                                                children: [l, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        t = (0, r.jsx)('div', {
            className: Q.loadingWrapper,
            children: (0, r.jsx)(E.$jN, {})
        });
    let ta = null;
    return (
        em ||
            eV === M.h8.PREMIUM_UPSELL ||
            (ta = (0, r.jsx)(H.Z, {
                onClose: e7,
                currentStep: eV,
                purchaseState: e8
            })),
        (0, r.jsxs)(E.Y0X, {
            transitionState: n,
            className: o()({ [Q.planSelectStep]: eV === M.h8.PLAN_SELECT }),
            children: [ta, t]
        })
    );
}
function ec(e) {
    let t = (0, d.e7)([W.ZP], () => W.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, f.ZP)(y.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(f.Gt, {
        value: n,
        children: (0, r.jsx)(x.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(eo, ee({}, e))
        })
    });
}
