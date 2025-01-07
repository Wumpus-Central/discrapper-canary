t.r(n),
    t.d(n, {
        GuildBoostPurchaseModal: function () {
            return et;
        },
        default: function () {
            return eo;
        }
    }),
    t(47120);
var o,
    l = t(200651),
    i = t(192379),
    r = t(512722),
    a = t.n(r),
    s = t(772848),
    c = t(442837),
    u = t(780384),
    d = t(481060),
    p = t(355467),
    f = t(179360),
    m = t(723484),
    _ = t(211266),
    S = t(493773),
    g = t(330726),
    E = t(100527),
    h = t(906732),
    P = t(15640),
    T = t(89057),
    I = t(600164),
    b = t(232127),
    x = t(563132),
    C = t(409813),
    y = t(45572),
    N = t(98278),
    k = t(431369),
    A = t(176919),
    M = t(3409),
    v = t(185139),
    L = t(210887),
    R = t(430824),
    j = t(314884),
    B = t(975060),
    Z = t(853872),
    D = t(509545),
    O = t(78839),
    U = t(626135),
    w = t(267642),
    F = t(74538),
    W = t(212895),
    G = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    z = t(981631),
    X = t(474936),
    $ = t(231338),
    K = t(388032),
    q = t(122959);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = X.Xh.NONE_MONTH,
    Q = [C.h8.PLAN_SELECT, C.h8.REVIEW, C.h8.CONFIRM],
    ee = [C.h8.PLAN_SELECT, C.h8.ADD_PAYMENT_STEPS, C.h8.REVIEW, C.h8.CONFIRM];
async function en(e) {
    await (0, f.X8)();
    let n = (0, w.vx)(j.Z.boostSlots);
    return (0, f.W3)(
        e,
        n.map((e) => e.id)
    );
}
function et(e) {
    let n,
        { transitionState: t, onClose: o, closeGuildPerksModal: r, analyticsLocations: f, analyticsLocation: et, analyticsSourceLocation: eo, guildId: el, onSubscribeComplete: ei, totalNumberOfSlotsToAssign: er = 1, disablePremiumUpsell: ea = !1, onSubscriptionConfirmation: es, applicationId: ec } = e,
        { activeSubscription: eu, blockedPayments: ed } = (0, x.usePaymentContext)(),
        ep = (0, c.e7)([O.ZP], () => O.ZP.hasFetchedSubscriptions()),
        ef = null != eu ? eu.paymentSourceId : null,
        em = (0, c.e7)([D.Z], () => (null != eu ? (0, G.oE)(eu.planId) : null)),
        e_ = (0, c.e7)([D.Z], () => null == eu || null != D.Z.get(eu.planId)),
        eS = (0, c.e7)([D.Z], () => (null == em ? D.Z.get(J) : em)),
        eg = (0, c.e7)([L.Z], () => L.Z.theme),
        eE = i.useRef((0, w.vx)(j.Z.boostSlots)).current,
        eh = (0, c.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
        eP = (0, M.fL)(null != ef ? ef : ep ? eh : null),
        { paymentSources: eT, setPurchaseError: eI, paymentSourceId: eb, setIsSubmittingCurrentStep: ex, paymentAuthenticationState: eC, setPaymentSourceId: ey, isSubmittingCurrentStep: eN, paymentError: ek, purchaseError: eA, purchaseErrorBlockRef: eM } = eP,
        ev = Object.keys(eT).length > 0,
        [eL, eR] = i.useState(er - eE.length),
        [ej, eB] = i.useState(!1),
        eZ = (0, c.e7)([B.Z], () => B.Z.popupCallbackCalled),
        eD = (0, P.V)(),
        eO = i.useMemo(
            () =>
                null != eu && e_ && eD
                    ? (0, k.g)(eu, eL)
                    : [
                          {
                              planId: X.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eL
                          }
                      ],
            [eu, e_, eL, eD]
        ),
        [eU, ew] = (0, _.Z)(() => [(0, s.Z)(), Date.now()]),
        { analyticsLocations: eF } = (0, h.ZP)(f, E.Z.GUILD_BOOST_PURCHASE_MODAL),
        eW = i.useMemo(() => {
            var e, n;
            return {
                load_id: eU,
                payment_type: $.Zu[$.GZ.SUBSCRIPTION],
                sku_id: X.Si.GUILD,
                subscription_type: z.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eO.find((e) => {
                                    let { planId: n } = e;
                                    return X.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : X.Xh.PREMIUM_MONTH_GUILD,
                quantity: eL,
                location: et,
                source: eo,
                location_stack: eF
            };
        }, [eU, et, eF, eo, eO, eL]);
    i.useEffect(() => {
        (0, W.i1)(eb);
    }, [eb]);
    let [eG, eY] = i.useState(C.h8.PLAN_SELECT),
        eH = i.useMemo(() => Date.now(), [eG]),
        eV = i.useCallback(
            (e, n) => {
                eY(e), eI(null);
                let t = Date.now();
                U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
                    ...eW,
                    from_step: null != n ? n : eG,
                    to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eH,
                    flow_duration_ms: t - ew,
                    guild_id: el,
                    application_id: ec
                });
            },
            [eI, eW, eG, eH, ew, el, ec]
        ),
        ez = {
            baseAnalyticsData: eW,
            flowStartTime: ew,
            guildId: el,
            handleStepChange: eV,
            onSubscribeComplete: ei,
            paymentSourceId: eb,
            setIsSubmittingCurrentStep: ex,
            setPurchaseError: eI
        },
        eX = i.useRef(ez);
    i.useEffect(() => {
        eX.current = ez;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, guildId: t, handleStepChange: o, onSubscribeComplete: l, paymentSourceId: i, setIsSubmittingCurrentStep: r, setPurchaseError: a } = eX.current;
            (async () => {
                if (!0 === eZ)
                    try {
                        if (null == B.Z.redirectedPaymentId) return;
                        await (0, p.OP)(B.Z.redirectedPaymentId), o(C.h8.CONFIRM), eJ(y.A.COMPLETED), null != t && (await en(t)), null != l && l();
                    } catch (t) {
                        eJ(y.A.FAIL),
                            a(t),
                            U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: null == t ? void 0 : t.code,
                                payment_gateway: z.gg$.STRIPE,
                                payment_source_id: i,
                                duration_ms: Date.now() - n
                            });
                    } finally {
                        r(!1), (0, p.K2)();
                    }
            })();
        }, [eZ]),
        (0, S.Z)(() => {
            !O.ZP.hasFetchedSubscriptions() && (0, p.jg)(),
                (0, b.U)({
                    ...eW,
                    guild_id: el,
                    application_id: ec
                }),
                null != eu &&
                    null != eu.renewalMutations &&
                    U.default.track(z.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: et,
                        guild_id: el
                    });
        });
    let [e$, eK] = i.useState(Q),
        [eq, eJ] = i.useState(y.A.WAITING),
        [eQ, e0] = i.useState(!0),
        e8 = () => {
            o(eq === y.A.COMPLETED);
        },
        e2 = null != eu && eu.isPurchasedExternally;
    i.useEffect(() => {
        eC !== A.wr.PENDING && eG !== C.h8.CONFIRM && null != ef && (e$ !== Q && eK(Q), !Q.includes(eG) && eG !== C.h8.PREMIUM_UPSELL && eV(C.h8.REVIEW)), eG === C.h8.ADD_PAYMENT_STEPS && e$ !== ee && eK(ee), e2 && eG !== C.h8.PLAN_SELECT && eY(C.h8.PLAN_SELECT);
    }, [eG, eV, e2, eC, eu, ef, e$]),
        (0, A.bp)(eG, eC, eV, eJ),
        (0, C.dZ)(eG, eq, eJ);
    let e1 = i.useRef(null),
        [e7, e9] = (0, g.Z)(!1, 500),
        [e3, e5] = i.useState(null),
        [e6, e4] = i.useState([]),
        [ne, nn] = i.useState(!1),
        nt = i.useMemo(() => JSON.stringify(e6), [e6]);
    i.useEffect(() => {
        let e;
        if (!!eD) null != D.Z.get(X.Xh.PREMIUM_MONTH_GUILD) && e4((e = (0, W.DE)(X.Xh.PREMIUM_MONTH_GUILD, eb, !1))), null == eb && null != eu && null != eu.paymentSourceId ? e5(eu.currency) : null != e && e5(e[0]);
    }, [eb, eu, eD, nt]);
    let no = (0, M.vP)({
        paymentModalArgs: eP,
        initialStep: C.h8.PAYMENT_TYPE,
        prependSteps: [C.h8.PLAN_SELECT],
        appendSteps: [C.h8.REVIEW, C.h8.CONFIRM],
        breadcrumpSteps: e$,
        currentBreadcrumpStep: eG,
        onReturn: () => {
            eV(Object.values(eT).length < 1 ? C.h8.PLAN_SELECT : C.h8.REVIEW, C.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eV(C.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                o = Date.now();
            U.default.track(z.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: n,
                to_step: t,
                step_duration_ms: o - eH,
                flow_duration_ms: o - ew,
                guild_id: el
            });
        }
    });
    if (ed) n = (0, l.jsx)(T.Vq, { onClose: e8 });
    else if (ep && e_ && eD && null != e3 && '' !== e3) {
        if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, l.jsx)(d.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: q.copy,
                    children: K.intl.string(K.t.mOWsFx)
                })
            });
        else if (null != eu && null != eu.renewalMutations)
            n = (0, l.jsx)(d.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: q.copy,
                    children: K.intl.string(K.t.npfhh4)
                })
            });
        else if (eG === C.h8.PREMIUM_UPSELL) {
            a()(null != eS, 'Missing nextPremiumSubscriptionPlan'), a()(e3, 'Currency not defined');
            let e =
                null != eb
                    ? {
                          paymentSourceId: eb,
                          currency: e3
                      }
                    : { currency: e3 };
            n = (0, l.jsx)(V.Z, {
                premiumSubscriptionPlan: eS,
                analyticsLocation: et,
                analyticsSourceLocation: eo,
                onClose: e8,
                onBack: () => eV(C.h8.PLAN_SELECT),
                onSkip: () => eV(null != ef || ev ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: es,
                priceOptions: e
            });
        } else {
            let e, t, o, i;
            a()(e3, 'Currency not defined');
            let s =
                null != eb
                    ? {
                          paymentSourceId: eb,
                          currency: e3
                      }
                    : { currency: e3 };
            switch (eG) {
                case C.h8.PLAN_SELECT:
                    a()(null != el, 'Missing guildId'),
                        a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.CP, {
                            premiumSubscriptionPlan: eS,
                            numGuildBoosts: eL,
                            setNumGuildBoosts: eR,
                            setForceDisableSubmitButton: e0,
                            premiumSubscription: eu,
                            existingAvailableSlots: eE,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e8(), null != r && r(), (0, N.z)();
                            },
                            guildId: el,
                            priceOptions: s
                        })),
                        e2 &&
                            null != eu &&
                            null != eu.paymentGateway &&
                            (e = (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(d.FormErrorBlock, {
                                        className: q.externalErrorBlock,
                                        children: K.intl.format(K.t['/m3Y3t'], { paymentGatewayName: $.Vz[eu.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (o = (0, l.jsx)(d.Button, {
                            look: d.Button.Looks.LINK,
                            color: (0, u.ap)(eg) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                            onClick: e8,
                            children: K.intl.string(K.t.oEAioK)
                        })),
                        (i = (0, l.jsx)(d.Button, {
                            type: 'submit',
                            disabled: eQ || 0 === eL || e2,
                            onClick: () => {
                                if (!ea && (null == em || em.premiumSubscriptionType !== X.p9.TIER_2)) {
                                    eV(C.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eV(null != ef || ev ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS);
                            },
                            children: K.intl.string(K.t['3PatS0'])
                        }));
                    break;
                case C.h8.ADD_PAYMENT_STEPS:
                    break;
                case C.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(m.F, { className: q.__invalid_body });
                    break;
                case C.h8.REVIEW:
                    a()(null != eS, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.Gq, {
                            paymentSources: eT,
                            priceOptions: s,
                            currentPremiumSubscription: eu,
                            premiumSubscriptionPaymentSourceId: ef,
                            premiumSubscriptionPlan: eS,
                            newAdditionalPlans: eO,
                            onPaymentSourceChange: (e) => ey(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eV(C.h8.ADD_PAYMENT_STEPS), ey(null);
                            },
                            onPurchaseTermsChange: eB,
                            legalTermsNodeRef: e1,
                            hasLegalTermsFlash: e7
                        })),
                        (t = C.h8.PLAN_SELECT),
                        (i = ej
                            ? (0, l.jsx)(d.Button, {
                                  color: d.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eN,
                                  onClick: async () => {
                                      a()(null != eO, 'Missing newAdditionalPlans');
                                      let e = null != eb ? eT[eb] : null;
                                      eI(null);
                                      try {
                                          if (
                                              (eJ(y.A.PURCHASING),
                                              ex(!0),
                                              a()(null != eb, 'Missing paymentSourceId'),
                                              U.default.track(z.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eW,
                                                  duration_ms: Date.now() - ew,
                                                  guild_id: el,
                                                  application_id: ec
                                              }),
                                              ne)
                                          )
                                              return;
                                          if (null == eu || null == em) {
                                              a()(null != e, 'Missing paymentSource');
                                              let n = await (0, p.XW)({
                                                  items: eO,
                                                  paymentSource: e,
                                                  currency: s.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  nn(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, F.MY)(eu, eO) };
                                              (n.currency = eu.currency), null == n.currency && (n.currency = s.currency), (n.paymentSource = null != ef ? eT[ef] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = s.currency));
                                              let t = await (0, p.Mg)(eu, n, eF);
                                              if (t.redirectConfirmation) {
                                                  nn(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eV(C.h8.CONFIRM), eJ(y.A.COMPLETED), null != el && (await en(el)), null != ei && ei();
                                      } catch (n) {
                                          eJ(y.A.FAIL),
                                              eI(n),
                                              U.default.track(z.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eW,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === z.HeQ.CARD ? z.gg$.STRIPE : z.gg$.BRAINTREE) : null,
                                                  payment_source_id: eb,
                                                  duration_ms: Date.now() - ew
                                              });
                                      } finally {
                                          !ne && ex(!1);
                                      }
                                  },
                                  children: K.intl.string(K.t.eUEeCg)
                              })
                            : (0, l.jsx)(d.Tooltip, {
                                  text: K.intl.string(K.t.XdvBLS),
                                  children: (e) =>
                                      (0, l.jsx)(d.Button, {
                                          ...e,
                                          color: d.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e1.current && (e1.current.scrollIntoView({ behavior: 'smooth' }), e9(!0));
                                          },
                                          type: 'submit',
                                          children: K.intl.string(K.t.eUEeCg)
                                      })
                              }));
                    break;
                case C.h8.CONFIRM:
                    var nl;
                    let c = R.Z.getGuild(el);
                    e = (0, l.jsx)(H.R7, {
                        guild: c,
                        guildBoostQuantity: eL + eE.length,
                        onClose: e8,
                        withAnimation: !1,
                        paymentSourceType: null === (nl = eT[null != eb ? eb : '']) || void 0 === nl ? void 0 : nl.type
                    });
            }
            let f = null != ek && null == (0, C.ly)(ek) ? ek : eA;
            n =
                eG === C.h8.ADD_PAYMENT_STEPS
                    ? no
                    : (0, l.jsx)(v.Z, {
                          hideBreadcrumbs: eG === C.h8.CONFIRM,
                          steps: e$,
                          currentStep: eG,
                          paymentError: f,
                          purchaseErrorBlockRef: eM,
                          hasCurrencies: e6.length > 1,
                          body: e,
                          footer:
                              eG !== C.h8.CONFIRM
                                  ? (0, l.jsxs)(d.ModalFooter, {
                                        direction: I.Z.Direction.HORIZONTAL,
                                        align: I.Z.Align.CENTER,
                                        justify: I.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)('div', {
                                                      className: q.backStep,
                                                      children: (0, l.jsx)(d.Button, {
                                                          color: (0, u.ap)(eg) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                                                          look: d.Button.Looks.LINK,
                                                          size: d.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eV(t);
                                                          },
                                                          children: K.intl.string(K.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, l.jsxs)('div', {
                                                className: q.footerRight,
                                                children: [o, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, l.jsx)('div', {
            className: q.loadingWrapper,
            children: (0, l.jsx)(d.Spinner, {})
        });
    let ni = null;
    return (
        !ed &&
            eG !== C.h8.PREMIUM_UPSELL &&
            (ni = (0, l.jsx)(Y.Z, {
                onClose: e8,
                currentStep: eG,
                purchaseState: eq
            })),
        (0, l.jsxs)(d.ModalRoot, {
            transitionState: t,
            children: [ni, n]
        })
    );
}
function eo(e) {
    let n = (0, c.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, h.ZP)(E.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(h.Gt, {
        value: t,
        children: (0, l.jsx)(x.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(et, { ...e })
        })
    });
}
