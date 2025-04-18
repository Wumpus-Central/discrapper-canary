n.d(t, {
    P: () => er,
    default: () => ea
}),
    n(388685),
    n(49124);
var r,
    l = n(200651),
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
    N = n(211266),
    _ = n(493773),
    S = n(330726),
    y = n(100527),
    f = n(906732),
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
    W = n(509545),
    z = n(78839),
    G = n(626135),
    F = n(267642),
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
    ee = n(822681);
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var er = 12633 == n.j ? (((r = {})[(r.NONE = 0)] = 'NONE'), (r[(r.LEVEL = 1)] = 'LEVEL'), (r[(r.PERK = 2)] = 'PERK'), r) : null;
let el = $.Xh.NONE_MONTH,
    ei = [M.h8.PLAN_SELECT, M.h8.REVIEW, M.h8.CONFIRM],
    es = [M.h8.PLAN_SELECT, M.h8.ADD_PAYMENT_STEPS, M.h8.REVIEW, M.h8.CONFIRM];
async function eo(e, t) {
    await (0, m.X8)();
    let n = (0, F.vx)(v.Z.boostSlots);
    return (0, m.W3)(
        e,
        n.map((e) => e.id),
        t
    );
}
function ec(e) {
    let t,
        { transitionState: n, onClose: r, closeGuildPerksModal: s, analyticsLocations: c, analyticsLocation: m, analyticsSourceLocation: er, guildId: ec, onSubscribeComplete: ea, totalNumberOfSlotsToAssign: eu = 1, disablePremiumUpsell: ed = !1, onSubscriptionConfirmation: ep, applicationId: eE, intent: eP = 0 } = e,
        { activeSubscription: em, blockedPayments: eh, startingFractionalPremiumEndsAtRef: eN } = (0, x.JL)(),
        e_ = (0, d.e7)([z.ZP], () => z.ZP.hasFetchedSubscriptions()),
        eS = null != em ? em.paymentSourceId : null,
        ey = (0, d.e7)([W.Z], () => (null != em ? (0, H.oE)(em.planId) : null)),
        ef = (0, d.e7)([W.Z], () => null == em || null != W.Z.get(em.planId)),
        eI = (0, d.e7)([W.Z], () => (null == ey ? W.Z.get(el) : ey)),
        eg = (0, d.e7)([D.Z], () => D.Z.theme),
        eO = i.useRef((0, F.vx)(v.Z.boostSlots)).current,
        eb = (0, d.e7)([U.Z], () => U.Z.defaultPaymentSourceId),
        ex = (0, A.fL)(null != eS ? eS : e_ ? eb : null),
        { paymentSources: eM, setPurchaseError: eL, paymentSourceId: ek, setIsSubmittingCurrentStep: eT, paymentAuthenticationState: ej, setPaymentSourceId: eC, isSubmittingCurrentStep: eA, paymentError: eR, purchaseError: eD, purchaseErrorBlockRef: eZ } = ex,
        ev = Object.keys(eM).length > 0,
        [ew, eU] = i.useState(eu - eO.length),
        [eW, ez] = i.useState(!1),
        eG = (0, d.e7)([w.Z], () => w.Z.popupCallbackCalled),
        eF = (0, I.V)(),
        eY = i.useMemo(
            () =>
                null != em && ef && eF
                    ? (0, j.g)(em, ew)
                    : [
                          {
                              planId: $.Xh.PREMIUM_MONTH_GUILD,
                              quantity: ew
                          }
                      ],
            [em, ef, ew, eF]
        ),
        [eB, eH] = (0, N.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eV } = (0, f.ZP)(c, y.Z.GUILD_BOOST_PURCHASE_MODAL),
        eX = i.useMemo(() => {
            var e, t;
            return {
                load_id: eB,
                payment_type: J.Zu[J.GZ.SUBSCRIPTION],
                sku_id: $.Si.GUILD,
                subscription_type: q.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eY.find((e) => {
                            let { planId: t } = e;
                            return $.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : $.Xh.PREMIUM_MONTH_GUILD,
                quantity: ew,
                location: m,
                source: er,
                location_stack: eV
            };
        }, [eB, m, eV, er, eY, ew]);
    i.useEffect(() => {
        (0, B.i1)(ek);
    }, [ek]);
    let [eK, eq] = i.useState(M.h8.PLAN_SELECT),
        e$ = i.useMemo(() => Date.now(), [eK]),
        eJ = i.useCallback(
            (e, t) => {
                eq(e), eL(null);
                let n = Date.now();
                G.default.track(
                    q.rMx.PAYMENT_FLOW_STEP,
                    en(et({}, eX), {
                        from_step: null != t ? t : eK,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - e$,
                        flow_duration_ms: n - eH,
                        guild_id: ec,
                        application_id: eE
                    })
                );
            },
            [eL, eX, eK, e$, eH, ec, eE]
        ),
        eQ = {
            baseAnalyticsData: eX,
            flowStartTime: eH,
            guildId: ec,
            handleStepChange: eJ,
            onSubscribeComplete: ea,
            paymentSourceId: ek,
            setIsSubmittingCurrentStep: eT,
            setPurchaseError: eL
        },
        e0 = i.useRef(eQ);
    i.useEffect(() => {
        e0.current = eQ;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: t, guildId: n, handleStepChange: r, onSubscribeComplete: l, paymentSourceId: i, setIsSubmittingCurrentStep: s, setPurchaseError: o } = e0.current;
            (async () => {
                if (!0 === eG)
                    try {
                        if (null == w.Z.redirectedPaymentId) return;
                        await (0, P.OP)(w.Z.redirectedPaymentId), r(M.h8.CONFIRM), e2(L.A.COMPLETED), null != n && (await eo(n, 0 !== eP)), null == l || l();
                    } catch (n) {
                        e2(L.A.FAIL),
                            o(n),
                            G.default.track(
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
        }, [eG, eP]),
        (0, _.ZP)(() => {
            z.ZP.hasFetchedSubscriptions() || (0, P.jg)(),
                (0, b.U)(
                    en(et({}, eX), {
                        guild_id: ec,
                        application_id: eE
                    })
                ),
                null != em &&
                    null != em.renewalMutations &&
                    G.default.track(q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: m,
                        guild_id: ec
                    });
        });
    let [e8, e3] = i.useState(ei),
        [e1, e2] = i.useState(L.A.WAITING),
        [e7, e4] = i.useState(!0),
        e6 = () => {
            r(e1 === L.A.COMPLETED);
        },
        e5 = null != em && em.isPurchasedExternally;
    i.useEffect(() => {
        ej !== C.wr.PENDING && eK !== M.h8.CONFIRM && null != eS && (e8 !== ei && e3(ei), ei.includes(eK) || eK === M.h8.PREMIUM_UPSELL || eJ(M.h8.REVIEW)), eK === M.h8.ADD_PAYMENT_STEPS && e8 !== es && e3(es), e5 && eK !== M.h8.PLAN_SELECT && eq(M.h8.PLAN_SELECT);
    }, [eK, eJ, e5, ej, em, eS, e8]),
        (0, C.bp)(eK, ej, eJ, e2),
        (0, M.dZ)(eK, e1, e2);
    let e9 = i.useRef(null),
        [te, tt] = (0, S.Z)(!1, 500),
        [tn, tr] = i.useState(null),
        [tl, ti] = i.useState([]),
        [ts, to] = i.useState(!1),
        tc = i.useMemo(() => JSON.stringify(tl), [tl]);
    i.useEffect(() => {
        let e;
        eF && (null != W.Z.get($.Xh.PREMIUM_MONTH_GUILD) && ti((e = (0, B.DE)($.Xh.PREMIUM_MONTH_GUILD, ek, !1))), null == ek && null != em && null != em.paymentSourceId ? tr(em.currency) : null != e && tr(e[0]));
    }, [ek, em, eF, tc]);
    let ta = (0, A.vP)({
        paymentModalArgs: ex,
        initialStep: M.h8.PAYMENT_TYPE,
        prependSteps: [M.h8.PLAN_SELECT],
        appendSteps: [M.h8.REVIEW, M.h8.CONFIRM],
        breadcrumpSteps: e8,
        currentBreadcrumpStep: eK,
        onReturn: () => {
            eJ(Object.values(eM).length < 1 ? M.h8.PLAN_SELECT : M.h8.REVIEW, M.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eJ(M.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                r = Date.now();
            G.default.track(
                q.rMx.PAYMENT_FLOW_STEP,
                en(et({}, eX), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: r - e$,
                    flow_duration_ms: r - eH,
                    guild_id: ec
                })
            );
        }
    });
    if (eh) t = (0, l.jsx)(g.Vq, { onClose: e6 });
    else if (e_ && ef && eF && null != tn && '' !== tn)
        if ((null == em ? void 0 : em.isPausedOrPausePending) && !em.isPausedAllowsUpdatesButNotResume)
            t = (0, l.jsx)(E.hzk, {
                children: (0, l.jsx)('p', {
                    className: ee.copy,
                    children: Q.NW.string(Q.t.mOWsFx)
                })
            });
        else if (null != em && null != em.renewalMutations)
            t = (0, l.jsx)(E.hzk, {
                children: (0, l.jsx)('p', {
                    className: ee.copy,
                    children: Q.NW.string(Q.t.npfhh4)
                })
            });
        else if (eK === M.h8.PREMIUM_UPSELL) {
            a()(null != eI, 'Missing nextPremiumSubscriptionPlan'), a()(tn, 'Currency not defined');
            let e =
                null != ek
                    ? {
                          paymentSourceId: ek,
                          currency: tn
                      }
                    : { currency: tn };
            t = (0, l.jsx)(K.Z, {
                premiumSubscriptionPlan: eI,
                analyticsLocation: m,
                analyticsSourceLocation: er,
                onClose: e6,
                onBack: () => eJ(M.h8.PLAN_SELECT),
                onSkip: () => eJ(null != eS || ev ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ep,
                priceOptions: e
            });
        } else {
            let e, n, r, i;
            a()(tn, 'Currency not defined');
            let o =
                null != ek
                    ? {
                          paymentSourceId: ek,
                          currency: tn
                      }
                    : { currency: tn };
            switch (eK) {
                case M.h8.PLAN_SELECT:
                    a()(null != ec, 'Missing guildId'),
                        a()(null != eI, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(X.CP, {
                            premiumSubscriptionPlan: eI,
                            numGuildBoosts: ew,
                            setNumGuildBoosts: eU,
                            setForceDisableSubmitButton: e4,
                            premiumSubscription: em,
                            existingAvailableSlots: eO,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e6(), null != s && s(), (0, T.z)();
                            },
                            guildId: ec,
                            priceOptions: o
                        })),
                        e5 &&
                            null != em &&
                            null != em.paymentGateway &&
                            (e = (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(E.kzN, {
                                        className: ee.externalErrorBlock,
                                        children: Q.NW.format(Q.t['/m3Y3t'], { paymentGatewayName: J.Vz[em.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (r = (0, l.jsx)(E.zxk, {
                            look: E.zxk.Looks.LINK,
                            color: (0, p.ap)(eg) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                            onClick: e6,
                            children: Q.NW.string(Q.t.oEAioK)
                        })),
                        (i = (0, l.jsx)(E.zxk, {
                            type: 'submit',
                            disabled: e7 || 0 === ew || e5,
                            onClick: () => {
                                if (!ed && (null == ey || ey.premiumSubscriptionType !== $.p9.TIER_2)) return void eJ(M.h8.PREMIUM_UPSELL);
                                eJ(null != eS || ev ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS);
                            },
                            children: Q.NW.string(Q.t['3PatS0'])
                        }));
                    break;
                case M.h8.ADD_PAYMENT_STEPS:
                    break;
                case M.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(h.F, { className: ee.__invalid_body });
                    break;
                case M.h8.REVIEW:
                    a()(null != eI, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(X.Gq, {
                            paymentSources: eM,
                            priceOptions: o,
                            currentPremiumSubscription: em,
                            premiumSubscriptionPaymentSourceId: eS,
                            premiumSubscriptionPlan: eI,
                            newAdditionalPlans: eY,
                            onPaymentSourceChange: (e) => eC(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eJ(M.h8.ADD_PAYMENT_STEPS), eC(null);
                            },
                            onPurchaseTermsChange: ez,
                            legalTermsNodeRef: e9,
                            hasLegalTermsFlash: te
                        })),
                        (n = M.h8.PLAN_SELECT),
                        (i = eW
                            ? (0, l.jsx)(E.zxk, {
                                  color: E.zxk.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eA,
                                  onClick: async () => {
                                      a()(null != eY, 'Missing newAdditionalPlans');
                                      let e = (0, k.m)(eM, ek);
                                      eL(null);
                                      try {
                                          if (
                                              (e2(L.A.PURCHASING),
                                              eT(!0),
                                              a()(null != ek, 'Missing paymentSourceId'),
                                              G.default.track(
                                                  q.rMx.PAYMENT_FLOW_COMPLETED,
                                                  en(et({}, eX), {
                                                      duration_ms: Date.now() - eH,
                                                      guild_id: ec,
                                                      application_id: eE
                                                  })
                                              ),
                                              ts)
                                          )
                                              return;
                                          if (null == em || null == ey) {
                                              a()(null != e, 'Missing paymentSource');
                                              let t = await (0, P.XW)({
                                                  items: eY,
                                                  paymentSource: e,
                                                  currency: o.currency
                                              });
                                              if (t.redirectConfirmation) return void to(null != t.redirectURL);
                                          } else {
                                              let t = { items: (0, Y.MY)(em, eY) };
                                              (t.currency = em.currency), null == t.currency && (t.currency = o.currency), (t.paymentSource = null != eS ? eM[eS] : void 0), null == t.paymentSource && (a()(null != e, 'Missing paymentSource'), (t.paymentSource = e), (t.currency = o.currency));
                                              let n = await (0, P.Mg)(em, t, eV);
                                              if (n.redirectConfirmation) return void to(null != n.redirectURL);
                                          }
                                          0 === eP && eJ(M.h8.CONFIRM), e2(L.A.COMPLETED), null != ec && (await eo(ec, 0 !== eP)), 0 !== eP && e6(), null == ea || ea();
                                      } catch (t) {
                                          e2(L.A.FAIL),
                                              eL(t),
                                              G.default.track(
                                                  q.rMx.PAYMENT_FLOW_FAILED,
                                                  en(et({}, eX), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway: null != e ? (e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE) : null,
                                                      payment_source_id: ek,
                                                      duration_ms: Date.now() - eH
                                                  })
                                              );
                                      } finally {
                                          ts || eT(!1);
                                      }
                                  },
                                  children: Q.NW.string(Q.t.eUEeCg)
                              })
                            : (0, l.jsx)(E.ua7, {
                                  text: Q.NW.string(Q.t.XdvBLS),
                                  children: (e) =>
                                      (0, l.jsx)(
                                          E.zxk,
                                          en(et({}, e), {
                                              color: E.zxk.Colors.GREEN,
                                              onClick: () => {
                                                  null != e9.current && (e9.current.scrollIntoView({ behavior: 'smooth' }), tt(!0));
                                              },
                                              type: 'submit',
                                              children: Q.NW.string(Q.t.eUEeCg)
                                          })
                                      )
                              }));
                    break;
                case M.h8.CONFIRM:
                    let c = Z.Z.getGuild(ec),
                        u = (0, k.$)(eM, ek),
                        d = (0, H.qH)(eN.current);
                    e = (0, l.jsx)(X.R7, {
                        guild: c,
                        guildBoostQuantity: ew + eO.length,
                        onClose: e6,
                        withAnimation: !1,
                        paymentSourceType: u,
                        didPurchaseOnFractionalPremium: d
                    });
            }
            let m = null != eR && null == (0, M.ly)(eR) ? eR : eD;
            t =
                eK === M.h8.ADD_PAYMENT_STEPS
                    ? ta
                    : (0, l.jsx)(R.Z, {
                          hideBreadcrumbs: eK === M.h8.CONFIRM,
                          steps: e8,
                          currentStep: eK,
                          paymentError: m,
                          purchaseErrorBlockRef: eZ,
                          hasCurrencies: tl.length > 1,
                          body: e,
                          footer:
                              eK !== M.h8.CONFIRM
                                  ? (0, l.jsxs)(E.mzw, {
                                        direction: O.Z.Direction.HORIZONTAL,
                                        align: O.Z.Align.CENTER,
                                        justify: O.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, l.jsx)('div', {
                                                      className: ee.backStep,
                                                      children: (0, l.jsx)(E.zxk, {
                                                          color: (0, p.ap)(eg) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                                                          look: E.zxk.Looks.LINK,
                                                          size: E.zxk.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && eJ(n);
                                                          },
                                                          children: Q.NW.string(Q.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, l.jsxs)('div', {
                                                className: ee.footerRight,
                                                children: [r, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    else
        t = (0, l.jsx)('div', {
            className: ee.loadingWrapper,
            children: (0, l.jsx)(E.$jN, {})
        });
    let tu = null;
    return (
        eh ||
            eK === M.h8.PREMIUM_UPSELL ||
            (tu = (0, l.jsx)(V.Z, {
                onClose: e6,
                currentStep: eK,
                purchaseState: e1
            })),
        (0, l.jsxs)(E.Y0X, {
            transitionState: n,
            className: o()({ [ee.planSelectStep]: eK === M.h8.PLAN_SELECT }),
            children: [tu, t]
        })
    );
}
function ea(e) {
    let t = (0, d.e7)([z.ZP], () => z.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, f.ZP)(y.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(f.Gt, {
        value: n,
        children: (0, l.jsx)(x.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(ec, et({}, e))
        })
    });
}
