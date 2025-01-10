t.r(n),
    t.d(n, {
        GuildBoostPurchaseModal: function () {
            return el;
        },
        default: function () {
            return ei;
        }
    }),
    t(47120);
var o,
    l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(512722),
    c = t.n(s),
    u = t(772848),
    d = t(442837),
    p = t(780384),
    f = t(481060),
    m = t(355467),
    _ = t(179360),
    S = t(723484),
    E = t(211266),
    g = t(493773),
    h = t(330726),
    P = t(100527),
    T = t(906732),
    I = t(15640),
    b = t(89057),
    x = t(600164),
    y = t(232127),
    C = t(563132),
    N = t(409813),
    A = t(45572),
    M = t(98278),
    k = t(431369),
    v = t(176919),
    L = t(3409),
    R = t(185139),
    j = t(210887),
    B = t(430824),
    D = t(314884),
    Z = t(975060),
    O = t(853872),
    U = t(509545),
    w = t(78839),
    F = t(626135),
    W = t(267642),
    G = t(74538),
    Y = t(212895),
    H = t(296848),
    V = t(518062),
    z = t(4434),
    X = t(333451),
    $ = t(981631),
    K = t(474936),
    q = t(231338),
    J = t(388032),
    Q = t(122959);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let ee = K.Xh.NONE_MONTH,
    en = [N.h8.PLAN_SELECT, N.h8.REVIEW, N.h8.CONFIRM],
    et = [N.h8.PLAN_SELECT, N.h8.ADD_PAYMENT_STEPS, N.h8.REVIEW, N.h8.CONFIRM];
async function eo(e) {
    await (0, _.X8)();
    let n = (0, W.vx)(D.Z.boostSlots);
    return (0, _.W3)(
        e,
        n.map((e) => e.id)
    );
}
function el(e) {
    let n,
        { transitionState: t, onClose: o, closeGuildPerksModal: r, analyticsLocations: s, analyticsLocation: _, analyticsSourceLocation: el, guildId: ei, onSubscribeComplete: er, totalNumberOfSlotsToAssign: ea = 1, disablePremiumUpsell: es = !1, onSubscriptionConfirmation: ec, applicationId: eu } = e,
        { activeSubscription: ed, blockedPayments: ep } = (0, C.usePaymentContext)(),
        ef = (0, d.e7)([w.ZP], () => w.ZP.hasFetchedSubscriptions()),
        em = null != ed ? ed.paymentSourceId : null,
        e_ = (0, d.e7)([U.Z], () => (null != ed ? (0, H.oE)(ed.planId) : null)),
        eS = (0, d.e7)([U.Z], () => null == ed || null != U.Z.get(ed.planId)),
        eE = (0, d.e7)([U.Z], () => (null == e_ ? U.Z.get(ee) : e_)),
        eg = (0, d.e7)([j.Z], () => j.Z.theme),
        eh = i.useRef((0, W.vx)(D.Z.boostSlots)).current,
        eP = (0, d.e7)([O.Z], () => O.Z.defaultPaymentSourceId),
        eT = (0, L.fL)(null != em ? em : ef ? eP : null),
        { paymentSources: eI, setPurchaseError: eb, paymentSourceId: ex, setIsSubmittingCurrentStep: ey, paymentAuthenticationState: eC, setPaymentSourceId: eN, isSubmittingCurrentStep: eA, paymentError: eM, purchaseError: ek, purchaseErrorBlockRef: ev } = eT,
        eL = Object.keys(eI).length > 0,
        [eR, ej] = i.useState(ea - eh.length),
        [eB, eD] = i.useState(!1),
        eZ = (0, d.e7)([Z.Z], () => Z.Z.popupCallbackCalled),
        eO = (0, I.V)(),
        eU = i.useMemo(
            () =>
                null != ed && eS && eO
                    ? (0, k.g)(ed, eR)
                    : [
                          {
                              planId: K.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eR
                          }
                      ],
            [ed, eS, eR, eO]
        ),
        [ew, eF] = (0, E.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eW } = (0, T.ZP)(s, P.Z.GUILD_BOOST_PURCHASE_MODAL),
        eG = i.useMemo(() => {
            var e, n;
            return {
                load_id: ew,
                payment_type: q.Zu[q.GZ.SUBSCRIPTION],
                sku_id: K.Si.GUILD,
                subscription_type: $.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = eU.find((e) => {
                                    let { planId: n } = e;
                                    return K.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : K.Xh.PREMIUM_MONTH_GUILD,
                quantity: eR,
                location: _,
                source: el,
                location_stack: eW
            };
        }, [ew, _, eW, el, eU, eR]);
    i.useEffect(() => {
        (0, Y.i1)(ex);
    }, [ex]);
    let [eY, eH] = i.useState(N.h8.PLAN_SELECT),
        eV = i.useMemo(() => Date.now(), [eY]),
        ez = i.useCallback(
            (e, n) => {
                eH(e), eb(null);
                let t = Date.now();
                F.default.track($.rMx.PAYMENT_FLOW_STEP, {
                    ...eG,
                    from_step: null != n ? n : eY,
                    to_step: e === N.h8.ADD_PAYMENT_STEPS ? N.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eV,
                    flow_duration_ms: t - eF,
                    guild_id: ei,
                    application_id: eu
                });
            },
            [eb, eG, eY, eV, eF, ei, eu]
        ),
        eX = {
            baseAnalyticsData: eG,
            flowStartTime: eF,
            guildId: ei,
            handleStepChange: ez,
            onSubscribeComplete: er,
            paymentSourceId: ex,
            setIsSubmittingCurrentStep: ey,
            setPurchaseError: eb
        },
        e$ = i.useRef(eX);
    i.useEffect(() => {
        e$.current = eX;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, guildId: t, handleStepChange: o, onSubscribeComplete: l, paymentSourceId: i, setIsSubmittingCurrentStep: r, setPurchaseError: a } = e$.current;
            (async () => {
                if (!0 === eZ)
                    try {
                        if (null == Z.Z.redirectedPaymentId) return;
                        await (0, m.OP)(Z.Z.redirectedPaymentId), o(N.h8.CONFIRM), eQ(A.A.COMPLETED), null != t && (await eo(t)), null != l && l();
                    } catch (t) {
                        eQ(A.A.FAIL),
                            a(t),
                            F.default.track($.rMx.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: null == t ? void 0 : t.code,
                                payment_gateway: $.gg$.STRIPE,
                                payment_source_id: i,
                                duration_ms: Date.now() - n
                            });
                    } finally {
                        r(!1), (0, m.K2)();
                    }
            })();
        }, [eZ]),
        (0, g.Z)(() => {
            !w.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
                (0, y.U)({
                    ...eG,
                    guild_id: ei,
                    application_id: eu
                }),
                null != ed &&
                    null != ed.renewalMutations &&
                    F.default.track($.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: _,
                        guild_id: ei
                    });
        });
    let [eK, eq] = i.useState(en),
        [eJ, eQ] = i.useState(A.A.WAITING),
        [e0, e8] = i.useState(!0),
        e2 = () => {
            o(eJ === A.A.COMPLETED);
        },
        e1 = null != ed && ed.isPurchasedExternally;
    i.useEffect(() => {
        eC !== v.wr.PENDING && eY !== N.h8.CONFIRM && null != em && (eK !== en && eq(en), !en.includes(eY) && eY !== N.h8.PREMIUM_UPSELL && ez(N.h8.REVIEW)), eY === N.h8.ADD_PAYMENT_STEPS && eK !== et && eq(et), e1 && eY !== N.h8.PLAN_SELECT && eH(N.h8.PLAN_SELECT);
    }, [eY, ez, e1, eC, ed, em, eK]),
        (0, v.bp)(eY, eC, ez, eQ),
        (0, N.dZ)(eY, eJ, eQ);
    let e7 = i.useRef(null),
        [e9, e3] = (0, h.Z)(!1, 500),
        [e5, e6] = i.useState(null),
        [e4, ne] = i.useState([]),
        [nn, nt] = i.useState(!1),
        no = i.useMemo(() => JSON.stringify(e4), [e4]);
    i.useEffect(() => {
        let e;
        if (!!eO) null != U.Z.get(K.Xh.PREMIUM_MONTH_GUILD) && ne((e = (0, Y.DE)(K.Xh.PREMIUM_MONTH_GUILD, ex, !1))), null == ex && null != ed && null != ed.paymentSourceId ? e6(ed.currency) : null != e && e6(e[0]);
    }, [ex, ed, eO, no]);
    let nl = (0, L.vP)({
        paymentModalArgs: eT,
        initialStep: N.h8.PAYMENT_TYPE,
        prependSteps: [N.h8.PLAN_SELECT],
        appendSteps: [N.h8.REVIEW, N.h8.CONFIRM],
        breadcrumpSteps: eK,
        currentBreadcrumpStep: eY,
        onReturn: () => {
            ez(Object.values(eI).length < 1 ? N.h8.PLAN_SELECT : N.h8.REVIEW, N.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            ez(N.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                o = Date.now();
            F.default.track($.rMx.PAYMENT_FLOW_STEP, {
                ...eG,
                from_step: n,
                to_step: t,
                step_duration_ms: o - eV,
                flow_duration_ms: o - eF,
                guild_id: ei
            });
        }
    });
    if (ep) n = (0, l.jsx)(b.Vq, { onClose: e2 });
    else if (ef && eS && eO && null != e5 && '' !== e5) {
        if (null == ed ? void 0 : ed.isPausedOrPausePending)
            n = (0, l.jsx)(f.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: Q.copy,
                    children: J.intl.string(J.t.mOWsFx)
                })
            });
        else if (null != ed && null != ed.renewalMutations)
            n = (0, l.jsx)(f.ModalContent, {
                children: (0, l.jsx)('p', {
                    className: Q.copy,
                    children: J.intl.string(J.t.npfhh4)
                })
            });
        else if (eY === N.h8.PREMIUM_UPSELL) {
            c()(null != eE, 'Missing nextPremiumSubscriptionPlan'), c()(e5, 'Currency not defined');
            let e =
                null != ex
                    ? {
                          paymentSourceId: ex,
                          currency: e5
                      }
                    : { currency: e5 };
            n = (0, l.jsx)(X.Z, {
                premiumSubscriptionPlan: eE,
                analyticsLocation: _,
                analyticsSourceLocation: el,
                onClose: e2,
                onBack: () => ez(N.h8.PLAN_SELECT),
                onSkip: () => ez(null != em || eL ? N.h8.REVIEW : N.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ec,
                priceOptions: e
            });
        } else {
            let e, t, o, i;
            c()(e5, 'Currency not defined');
            let a =
                null != ex
                    ? {
                          paymentSourceId: ex,
                          currency: e5
                      }
                    : { currency: e5 };
            switch (eY) {
                case N.h8.PLAN_SELECT:
                    c()(null != ei, 'Missing guildId'),
                        c()(null != eE, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(z.CP, {
                            premiumSubscriptionPlan: eE,
                            numGuildBoosts: eR,
                            setNumGuildBoosts: ej,
                            setForceDisableSubmitButton: e8,
                            premiumSubscription: ed,
                            existingAvailableSlots: eh,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e2(), null != r && r(), (0, M.z)();
                            },
                            guildId: ei,
                            priceOptions: a
                        })),
                        e1 &&
                            null != ed &&
                            null != ed.paymentGateway &&
                            (e = (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(f.FormErrorBlock, {
                                        className: Q.externalErrorBlock,
                                        children: J.intl.format(J.t['/m3Y3t'], { paymentGatewayName: q.Vz[ed.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (o = (0, l.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: (0, p.ap)(eg) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                            onClick: e2,
                            children: J.intl.string(J.t.oEAioK)
                        })),
                        (i = (0, l.jsx)(f.Button, {
                            type: 'submit',
                            disabled: e0 || 0 === eR || e1,
                            onClick: () => {
                                if (!es && (null == e_ || e_.premiumSubscriptionType !== K.p9.TIER_2)) {
                                    ez(N.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                ez(null != em || eL ? N.h8.REVIEW : N.h8.ADD_PAYMENT_STEPS);
                            },
                            children: J.intl.string(J.t['3PatS0'])
                        }));
                    break;
                case N.h8.ADD_PAYMENT_STEPS:
                    break;
                case N.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(S.F, { className: Q.__invalid_body });
                    break;
                case N.h8.REVIEW:
                    c()(null != eE, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(z.Gq, {
                            paymentSources: eI,
                            priceOptions: a,
                            currentPremiumSubscription: ed,
                            premiumSubscriptionPaymentSourceId: em,
                            premiumSubscriptionPlan: eE,
                            newAdditionalPlans: eU,
                            onPaymentSourceChange: (e) => eN(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                ez(N.h8.ADD_PAYMENT_STEPS), eN(null);
                            },
                            onPurchaseTermsChange: eD,
                            legalTermsNodeRef: e7,
                            hasLegalTermsFlash: e9
                        })),
                        (t = N.h8.PLAN_SELECT),
                        (i = eB
                            ? (0, l.jsx)(f.Button, {
                                  color: f.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eA,
                                  onClick: async () => {
                                      c()(null != eU, 'Missing newAdditionalPlans');
                                      let e = null != ex ? eI[ex] : null;
                                      eb(null);
                                      try {
                                          if (
                                              (eQ(A.A.PURCHASING),
                                              ey(!0),
                                              c()(null != ex, 'Missing paymentSourceId'),
                                              F.default.track($.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eG,
                                                  duration_ms: Date.now() - eF,
                                                  guild_id: ei,
                                                  application_id: eu
                                              }),
                                              nn)
                                          )
                                              return;
                                          if (null == ed || null == e_) {
                                              c()(null != e, 'Missing paymentSource');
                                              let n = await (0, m.XW)({
                                                  items: eU,
                                                  paymentSource: e,
                                                  currency: a.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  nt(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, G.MY)(ed, eU) };
                                              (n.currency = ed.currency), null == n.currency && (n.currency = a.currency), (n.paymentSource = null != em ? eI[em] : void 0), null == n.paymentSource && (c()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = a.currency));
                                              let t = await (0, m.Mg)(ed, n, eW);
                                              if (t.redirectConfirmation) {
                                                  nt(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          ez(N.h8.CONFIRM), eQ(A.A.COMPLETED), null != ei && (await eo(ei)), null != er && er();
                                      } catch (n) {
                                          eQ(A.A.FAIL),
                                              eb(n),
                                              F.default.track($.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eG,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === $.HeQ.CARD ? $.gg$.STRIPE : $.gg$.BRAINTREE) : null,
                                                  payment_source_id: ex,
                                                  duration_ms: Date.now() - eF
                                              });
                                      } finally {
                                          !nn && ey(!1);
                                      }
                                  },
                                  children: J.intl.string(J.t.eUEeCg)
                              })
                            : (0, l.jsx)(f.Tooltip, {
                                  text: J.intl.string(J.t.XdvBLS),
                                  children: (e) =>
                                      (0, l.jsx)(f.Button, {
                                          ...e,
                                          color: f.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e7.current && (e7.current.scrollIntoView({ behavior: 'smooth' }), e3(!0));
                                          },
                                          type: 'submit',
                                          children: J.intl.string(J.t.eUEeCg)
                                      })
                              }));
                    break;
                case N.h8.CONFIRM:
                    var ni;
                    let s = B.Z.getGuild(ei);
                    e = (0, l.jsx)(z.R7, {
                        guild: s,
                        guildBoostQuantity: eR + eh.length,
                        onClose: e2,
                        withAnimation: !1,
                        paymentSourceType: null === (ni = eI[null != ex ? ex : '']) || void 0 === ni ? void 0 : ni.type
                    });
            }
            let u = null != eM && null == (0, N.ly)(eM) ? eM : ek;
            n =
                eY === N.h8.ADD_PAYMENT_STEPS
                    ? nl
                    : (0, l.jsx)(R.Z, {
                          hideBreadcrumbs: eY === N.h8.CONFIRM,
                          steps: eK,
                          currentStep: eY,
                          paymentError: u,
                          purchaseErrorBlockRef: ev,
                          hasCurrencies: e4.length > 1,
                          body: e,
                          footer:
                              eY !== N.h8.CONFIRM
                                  ? (0, l.jsxs)(f.ModalFooter, {
                                        direction: x.Z.Direction.HORIZONTAL,
                                        align: x.Z.Align.CENTER,
                                        justify: x.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)('div', {
                                                      className: Q.backStep,
                                                      children: (0, l.jsx)(f.Button, {
                                                          color: (0, p.ap)(eg) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                                                          look: f.Button.Looks.LINK,
                                                          size: f.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && ez(t);
                                                          },
                                                          children: J.intl.string(J.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, l.jsxs)('div', {
                                                className: Q.footerRight,
                                                children: [o, i]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, l.jsx)('div', {
            className: Q.loadingWrapper,
            children: (0, l.jsx)(f.Spinner, {})
        });
    let nr = null;
    return (
        !ep &&
            eY !== N.h8.PREMIUM_UPSELL &&
            (nr = (0, l.jsx)(V.Z, {
                onClose: e2,
                currentStep: eY,
                purchaseState: eJ
            })),
        (0, l.jsxs)(f.ModalRoot, {
            transitionState: t,
            className: a()({ [Q.planSelectStep]: eY === N.h8.PLAN_SELECT }),
            children: [nr, n]
        })
    );
}
function ei(e) {
    let n = (0, d.e7)([w.ZP], () => w.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, T.ZP)(P.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(T.Gt, {
        value: t,
        children: (0, l.jsx)(C.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(el, { ...e })
        })
    });
}
