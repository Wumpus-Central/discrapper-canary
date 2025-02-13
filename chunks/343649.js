t.d(n, { default: () => ei }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    o = t.n(r),
    s = t(512722),
    a = t.n(s),
    c = t(772848),
    u = t(442837),
    p = t(780384),
    d = t(481060),
    _ = t(355467),
    S = t(179360),
    m = t(723484),
    E = t(211266),
    h = t(493773),
    I = t(330726),
    x = t(100527),
    f = t(906732),
    P = t(15640),
    g = t(89057),
    T = t(600164),
    k = t(232127),
    N = t(563132),
    b = t(409813),
    C = t(45572),
    M = t(98278),
    y = t(431369),
    L = t(176919),
    R = t(3409),
    A = t(185139),
    v = t(210887),
    Z = t(430824),
    j = t(314884),
    D = t(975060),
    O = t(853872),
    U = t(509545),
    w = t(78839),
    G = t(626135),
    z = t(267642),
    W = t(74538),
    B = t(212895),
    F = t(296848),
    Y = t(518062),
    H = t(4434),
    V = t(333451),
    X = t(981631),
    q = t(474936),
    K = t(231338),
    J = t(388032),
    $ = t(675643);
let Q = q.Xh.NONE_MONTH,
    ee = [b.h8.PLAN_SELECT, b.h8.REVIEW, b.h8.CONFIRM],
    en = [b.h8.PLAN_SELECT, b.h8.ADD_PAYMENT_STEPS, b.h8.REVIEW, b.h8.CONFIRM];
async function et(e) {
    await (0, S.X8)();
    let n = (0, z.vx)(j.Z.boostSlots);
    return (0, S.W3)(
        e,
        n.map((e) => e.id)
    );
}
function el(e) {
    let n,
        { transitionState: t, onClose: r, closeGuildPerksModal: s, analyticsLocations: S, analyticsLocation: el, analyticsSourceLocation: ei, guildId: er, onSubscribeComplete: eo, totalNumberOfSlotsToAssign: es = 1, disablePremiumUpsell: ea = !1, onSubscriptionConfirmation: ec, applicationId: eu } = e,
        { activeSubscription: ep, blockedPayments: ed } = (0, N.JL)(),
        e_ = (0, u.e7)([w.ZP], () => w.ZP.hasFetchedSubscriptions()),
        eS = null != ep ? ep.paymentSourceId : null,
        em = (0, u.e7)([U.Z], () => (null != ep ? (0, F.oE)(ep.planId) : null)),
        eE = (0, u.e7)([U.Z], () => null == ep || null != U.Z.get(ep.planId)),
        eh = (0, u.e7)([U.Z], () => (null == em ? U.Z.get(Q) : em)),
        eI = (0, u.e7)([v.Z], () => v.Z.theme),
        ex = i.useRef((0, z.vx)(j.Z.boostSlots)).current,
        ef = (0, u.e7)([O.Z], () => O.Z.defaultPaymentSourceId),
        eP = (0, R.fL)(null != eS ? eS : e_ ? ef : null),
        { paymentSources: eg, setPurchaseError: eT, paymentSourceId: ek, setIsSubmittingCurrentStep: eN, paymentAuthenticationState: eb, setPaymentSourceId: eC, isSubmittingCurrentStep: eM, paymentError: ey, purchaseError: eL, purchaseErrorBlockRef: eR } = eP,
        eA = Object.keys(eg).length > 0,
        [ev, eZ] = i.useState(es - ex.length),
        [ej, eD] = i.useState(!1),
        eO = (0, u.e7)([D.Z], () => D.Z.popupCallbackCalled),
        eU = (0, P.V)(),
        ew = i.useMemo(
            () =>
                null != ep && eE && eU
                    ? (0, y.g)(ep, ev)
                    : [
                          {
                              planId: q.Xh.PREMIUM_MONTH_GUILD,
                              quantity: ev
                          }
                      ],
            [ep, eE, ev, eU]
        ),
        [eG, ez] = (0, E.Z)(() => [(0, c.Z)(), Date.now()]),
        { analyticsLocations: eW } = (0, f.ZP)(S, x.Z.GUILD_BOOST_PURCHASE_MODAL),
        eB = i.useMemo(() => {
            var e, n;
            return {
                load_id: eG,
                payment_type: K.Zu[K.GZ.SUBSCRIPTION],
                sku_id: q.Si.GUILD,
                subscription_type: X.NYc.PREMIUM,
                subscription_plan_id:
                    null !==
                        (n =
                            null ===
                                (e = ew.find((e) => {
                                    let { planId: n } = e;
                                    return q.Z1.has(n);
                                })) || void 0 === e
                                ? void 0
                                : e.planId) && void 0 !== n
                        ? n
                        : q.Xh.PREMIUM_MONTH_GUILD,
                quantity: ev,
                location: el,
                source: ei,
                location_stack: eW
            };
        }, [eG, el, eW, ei, ew, ev]);
    i.useEffect(() => {
        (0, B.i1)(ek);
    }, [ek]);
    let [eF, eY] = i.useState(b.h8.PLAN_SELECT),
        eH = i.useMemo(() => Date.now(), [eF]),
        eV = i.useCallback(
            (e, n) => {
                eY(e), eT(null);
                let t = Date.now();
                G.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                    ...eB,
                    from_step: null != n ? n : eF,
                    to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eH,
                    flow_duration_ms: t - ez,
                    guild_id: er,
                    application_id: eu
                });
            },
            [eT, eB, eF, eH, ez, er, eu]
        ),
        eX = {
            baseAnalyticsData: eB,
            flowStartTime: ez,
            guildId: er,
            handleStepChange: eV,
            onSubscribeComplete: eo,
            paymentSourceId: ek,
            setIsSubmittingCurrentStep: eN,
            setPurchaseError: eT
        },
        eq = i.useRef(eX);
    i.useEffect(() => {
        eq.current = eX;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, guildId: t, handleStepChange: l, onSubscribeComplete: i, paymentSourceId: r, setIsSubmittingCurrentStep: o, setPurchaseError: s } = eq.current;
            (async () => {
                if (!0 === eO)
                    try {
                        if (null == D.Z.redirectedPaymentId) return;
                        await (0, _.OP)(D.Z.redirectedPaymentId), l(b.h8.CONFIRM), eQ(C.A.COMPLETED), null != t && (await et(t)), null != i && i();
                    } catch (t) {
                        eQ(C.A.FAIL),
                            s(t),
                            G.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: null == t ? void 0 : t.code,
                                payment_gateway: X.gg$.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n
                            });
                    } finally {
                        o(!1), (0, _.K2)();
                    }
            })();
        }, [eO]),
        (0, h.ZP)(() => {
            w.ZP.hasFetchedSubscriptions() || (0, _.jg)(),
                (0, k.U)({
                    ...eB,
                    guild_id: er,
                    application_id: eu
                }),
                null != ep &&
                    null != ep.renewalMutations &&
                    G.default.track(X.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: el,
                        guild_id: er
                    });
        });
    let [eK, eJ] = i.useState(ee),
        [e$, eQ] = i.useState(C.A.WAITING),
        [e0, e8] = i.useState(!0),
        e4 = () => {
            r(e$ === C.A.COMPLETED);
        },
        e1 = null != ep && ep.isPurchasedExternally;
    i.useEffect(() => {
        eb === L.wr.PENDING || eF === b.h8.CONFIRM || null == eS || (eK !== ee && eJ(ee), ee.includes(eF) || eF === b.h8.PREMIUM_UPSELL || eV(b.h8.REVIEW)), eF === b.h8.ADD_PAYMENT_STEPS && eK !== en && eJ(en), e1 && eF !== b.h8.PLAN_SELECT && eY(b.h8.PLAN_SELECT);
    }, [eF, eV, e1, eb, ep, eS, eK]),
        (0, L.bp)(eF, eb, eV, eQ),
        (0, b.dZ)(eF, e$, eQ);
    let e3 = i.useRef(null),
        [e5, e9] = (0, I.Z)(!1, 500),
        [e7, e6] = i.useState(null),
        [e2, ne] = i.useState([]),
        [nn, nt] = i.useState(!1),
        nl = i.useMemo(() => JSON.stringify(e2), [e2]);
    i.useEffect(() => {
        let e;
        eU && (null != U.Z.get(q.Xh.PREMIUM_MONTH_GUILD) && ne((e = (0, B.DE)(q.Xh.PREMIUM_MONTH_GUILD, ek, !1))), null == ek && null != ep && null != ep.paymentSourceId ? e6(ep.currency) : null != e && e6(e[0]));
    }, [ek, ep, eU, nl]);
    let ni = (0, R.vP)({
        paymentModalArgs: eP,
        initialStep: b.h8.PAYMENT_TYPE,
        prependSteps: [b.h8.PLAN_SELECT],
        appendSteps: [b.h8.REVIEW, b.h8.CONFIRM],
        breadcrumpSteps: eK,
        currentBreadcrumpStep: eF,
        onReturn: () => {
            eV(Object.values(eg).length < 1 ? b.h8.PLAN_SELECT : b.h8.REVIEW, b.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eV(b.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            G.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                ...eB,
                from_step: n,
                to_step: t,
                step_duration_ms: l - eH,
                flow_duration_ms: l - ez,
                guild_id: er
            });
        }
    });
    if (ed) n = (0, l.jsx)(g.Vq, { onClose: e4 });
    else if (e_ && eE && eU && null != e7 && '' !== e7) {
        if (null == ep ? void 0 : ep.isPausedOrPausePending)
            n = (0, l.jsx)(d.hzk, {
                children: (0, l.jsx)('p', {
                    className: $.copy,
                    children: J.intl.string(J.t.mOWsFx)
                })
            });
        else if (null != ep && null != ep.renewalMutations)
            n = (0, l.jsx)(d.hzk, {
                children: (0, l.jsx)('p', {
                    className: $.copy,
                    children: J.intl.string(J.t.npfhh4)
                })
            });
        else if (eF === b.h8.PREMIUM_UPSELL) {
            a()(null != eh, 'Missing nextPremiumSubscriptionPlan'), a()(e7, 'Currency not defined');
            let e =
                null != ek
                    ? {
                          paymentSourceId: ek,
                          currency: e7
                      }
                    : { currency: e7 };
            n = (0, l.jsx)(V.Z, {
                premiumSubscriptionPlan: eh,
                analyticsLocation: el,
                analyticsSourceLocation: ei,
                onClose: e4,
                onBack: () => eV(b.h8.PLAN_SELECT),
                onSkip: () => eV(null != eS || eA ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ec,
                priceOptions: e
            });
        } else {
            let e, t, i, r;
            a()(e7, 'Currency not defined');
            let o =
                null != ek
                    ? {
                          paymentSourceId: ek,
                          currency: e7
                      }
                    : { currency: e7 };
            switch (eF) {
                case b.h8.PLAN_SELECT:
                    a()(null != er, 'Missing guildId'),
                        a()(null != eh, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.CP, {
                            premiumSubscriptionPlan: eh,
                            numGuildBoosts: ev,
                            setNumGuildBoosts: eZ,
                            setForceDisableSubmitButton: e8,
                            premiumSubscription: ep,
                            existingAvailableSlots: ex,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e4(), null != s && s(), (0, M.z)();
                            },
                            guildId: er,
                            priceOptions: o
                        })),
                        e1 &&
                            null != ep &&
                            null != ep.paymentGateway &&
                            (e = (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(d.kzN, {
                                        className: $.externalErrorBlock,
                                        children: J.intl.format(J.t['/m3Y3t'], { paymentGatewayName: K.Vz[ep.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (i = (0, l.jsx)(d.zxk, {
                            look: d.zxk.Looks.LINK,
                            color: (0, p.ap)(eI) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                            onClick: e4,
                            children: J.intl.string(J.t.oEAioK)
                        })),
                        (r = (0, l.jsx)(d.zxk, {
                            type: 'submit',
                            disabled: e0 || 0 === ev || e1,
                            onClick: () => {
                                if (!ea && (null == em || em.premiumSubscriptionType !== q.p9.TIER_2)) {
                                    eV(b.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eV(null != eS || eA ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS);
                            },
                            children: J.intl.string(J.t['3PatS0'])
                        }));
                    break;
                case b.h8.ADD_PAYMENT_STEPS:
                    break;
                case b.h8.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(m.F, { className: $.__invalid_body });
                    break;
                case b.h8.REVIEW:
                    a()(null != eh, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(H.Gq, {
                            paymentSources: eg,
                            priceOptions: o,
                            currentPremiumSubscription: ep,
                            premiumSubscriptionPaymentSourceId: eS,
                            premiumSubscriptionPlan: eh,
                            newAdditionalPlans: ew,
                            onPaymentSourceChange: (e) => eC(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eV(b.h8.ADD_PAYMENT_STEPS), eC(null);
                            },
                            onPurchaseTermsChange: eD,
                            legalTermsNodeRef: e3,
                            hasLegalTermsFlash: e5
                        })),
                        (t = b.h8.PLAN_SELECT),
                        (r = ej
                            ? (0, l.jsx)(d.zxk, {
                                  color: d.zxk.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eM,
                                  onClick: async () => {
                                      a()(null != ew, 'Missing newAdditionalPlans');
                                      let e = null != ek ? eg[ek] : null;
                                      eT(null);
                                      try {
                                          if (
                                              (eQ(C.A.PURCHASING),
                                              eN(!0),
                                              a()(null != ek, 'Missing paymentSourceId'),
                                              G.default.track(X.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eB,
                                                  duration_ms: Date.now() - ez,
                                                  guild_id: er,
                                                  application_id: eu
                                              }),
                                              nn)
                                          )
                                              return;
                                          if (null == ep || null == em) {
                                              a()(null != e, 'Missing paymentSource');
                                              let n = await (0, _.XW)({
                                                  items: ew,
                                                  paymentSource: e,
                                                  currency: o.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  nt(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, W.MY)(ep, ew) };
                                              (n.currency = ep.currency), null == n.currency && (n.currency = o.currency), (n.paymentSource = null != eS ? eg[eS] : void 0), null == n.paymentSource && (a()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = o.currency));
                                              let t = await (0, _.Mg)(ep, n, eW);
                                              if (t.redirectConfirmation) {
                                                  nt(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eV(b.h8.CONFIRM), eQ(C.A.COMPLETED), null != er && (await et(er)), null != eo && eo();
                                      } catch (n) {
                                          eQ(C.A.FAIL),
                                              eT(n),
                                              G.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eB,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === X.HeQ.CARD ? X.gg$.STRIPE : X.gg$.BRAINTREE) : null,
                                                  payment_source_id: ek,
                                                  duration_ms: Date.now() - ez
                                              });
                                      } finally {
                                          nn || eN(!1);
                                      }
                                  },
                                  children: J.intl.string(J.t.eUEeCg)
                              })
                            : (0, l.jsx)(d.ua7, {
                                  text: J.intl.string(J.t.XdvBLS),
                                  children: (e) =>
                                      (0, l.jsx)(d.zxk, {
                                          ...e,
                                          color: d.zxk.Colors.GREEN,
                                          onClick: () => {
                                              null != e3.current && (e3.current.scrollIntoView({ behavior: 'smooth' }), e9(!0));
                                          },
                                          type: 'submit',
                                          children: J.intl.string(J.t.eUEeCg)
                                      })
                              }));
                    break;
                case b.h8.CONFIRM:
                    var nr;
                    let c = Z.Z.getGuild(er);
                    e = (0, l.jsx)(H.R7, {
                        guild: c,
                        guildBoostQuantity: ev + ex.length,
                        onClose: e4,
                        withAnimation: !1,
                        paymentSourceType: null === (nr = eg[null != ek ? ek : '']) || void 0 === nr ? void 0 : nr.type
                    });
            }
            let u = null != ey && null == (0, b.ly)(ey) ? ey : eL;
            n =
                eF === b.h8.ADD_PAYMENT_STEPS
                    ? ni
                    : (0, l.jsx)(A.Z, {
                          hideBreadcrumbs: eF === b.h8.CONFIRM,
                          steps: eK,
                          currentStep: eF,
                          paymentError: u,
                          purchaseErrorBlockRef: eR,
                          hasCurrencies: e2.length > 1,
                          body: e,
                          footer:
                              eF !== b.h8.CONFIRM
                                  ? (0, l.jsxs)(d.mzw, {
                                        direction: T.Z.Direction.HORIZONTAL,
                                        align: T.Z.Align.CENTER,
                                        justify: T.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)('div', {
                                                      className: $.backStep,
                                                      children: (0, l.jsx)(d.zxk, {
                                                          color: (0, p.ap)(eI) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                                                          look: d.zxk.Looks.LINK,
                                                          size: d.zxk.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eV(t);
                                                          },
                                                          children: J.intl.string(J.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, l.jsxs)('div', {
                                                className: $.footerRight,
                                                children: [i, r]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, l.jsx)('div', {
            className: $.loadingWrapper,
            children: (0, l.jsx)(d.$jN, {})
        });
    let no = null;
    return (
        ed ||
            eF === b.h8.PREMIUM_UPSELL ||
            (no = (0, l.jsx)(Y.Z, {
                onClose: e4,
                currentStep: eF,
                purchaseState: e$
            })),
        (0, l.jsxs)(d.Y0X, {
            transitionState: t,
            className: o()({ [$.planSelectStep]: eF === b.h8.PLAN_SELECT }),
            children: [no, n]
        })
    );
}
function ei(e) {
    let n = (0, u.e7)([w.ZP], () => w.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, f.ZP)(x.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(f.Gt, {
        value: t,
        children: (0, l.jsx)(N.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(el, { ...e })
        })
    });
}
