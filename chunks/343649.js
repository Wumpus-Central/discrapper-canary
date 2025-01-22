t.r(n),
    t.d(n, {
        GuildBoostPurchaseModal: function () {
            return ei;
        },
        default: function () {
            return eo;
        }
    }),
    t(47120);
var l,
    i = t(200651),
    o = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(512722),
    c = t.n(s),
    u = t(772848),
    d = t(442837),
    p = t(780384),
    f = t(481060),
    _ = t(355467),
    S = t(179360),
    m = t(723484),
    E = t(211266),
    h = t(493773),
    I = t(330726),
    P = t(100527),
    g = t(906732),
    T = t(15640),
    x = t(89057),
    N = t(600164),
    C = t(232127),
    M = t(563132),
    y = t(409813),
    L = t(45572),
    k = t(98278),
    R = t(431369),
    A = t(176919),
    b = t(3409),
    v = t(185139),
    Z = t(210887),
    D = t(430824),
    j = t(314884),
    B = t(975060),
    O = t(853872),
    U = t(509545),
    w = t(78839),
    G = t(626135),
    W = t(267642),
    F = t(74538),
    Y = t(212895),
    H = t(296848),
    V = t(518062),
    X = t(4434),
    z = t(333451),
    q = t(981631),
    K = t(474936),
    J = t(231338),
    Q = t(388032),
    $ = t(122959);
(l || (l = {})).PREMIUM = 'discord://app/settings/nitro';
let ee = K.Xh.NONE_MONTH,
    en = [y.h8.PLAN_SELECT, y.h8.REVIEW, y.h8.CONFIRM],
    et = [y.h8.PLAN_SELECT, y.h8.ADD_PAYMENT_STEPS, y.h8.REVIEW, y.h8.CONFIRM];
async function el(e) {
    await (0, S.X8)();
    let n = (0, W.vx)(j.Z.boostSlots);
    return (0, S.W3)(
        e,
        n.map((e) => e.id)
    );
}
function ei(e) {
    let n,
        { transitionState: t, onClose: l, closeGuildPerksModal: r, analyticsLocations: s, analyticsLocation: S, analyticsSourceLocation: ei, guildId: eo, onSubscribeComplete: er, totalNumberOfSlotsToAssign: ea = 1, disablePremiumUpsell: es = !1, onSubscriptionConfirmation: ec, applicationId: eu } = e,
        { activeSubscription: ed, blockedPayments: ep } = (0, M.usePaymentContext)(),
        ef = (0, d.e7)([w.ZP], () => w.ZP.hasFetchedSubscriptions()),
        e_ = null != ed ? ed.paymentSourceId : null,
        eS = (0, d.e7)([U.Z], () => (null != ed ? (0, H.oE)(ed.planId) : null)),
        em = (0, d.e7)([U.Z], () => null == ed || null != U.Z.get(ed.planId)),
        eE = (0, d.e7)([U.Z], () => (null == eS ? U.Z.get(ee) : eS)),
        eh = (0, d.e7)([Z.Z], () => Z.Z.theme),
        eI = o.useRef((0, W.vx)(j.Z.boostSlots)).current,
        eP = (0, d.e7)([O.Z], () => O.Z.defaultPaymentSourceId),
        eg = (0, b.fL)(null != e_ ? e_ : ef ? eP : null),
        { paymentSources: eT, setPurchaseError: ex, paymentSourceId: eN, setIsSubmittingCurrentStep: eC, paymentAuthenticationState: eM, setPaymentSourceId: ey, isSubmittingCurrentStep: eL, paymentError: ek, purchaseError: eR, purchaseErrorBlockRef: eA } = eg,
        eb = Object.keys(eT).length > 0,
        [ev, eZ] = o.useState(ea - eI.length),
        [eD, ej] = o.useState(!1),
        eB = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
        eO = (0, T.V)(),
        eU = o.useMemo(
            () =>
                null != ed && em && eO
                    ? (0, R.g)(ed, ev)
                    : [
                          {
                              planId: K.Xh.PREMIUM_MONTH_GUILD,
                              quantity: ev
                          }
                      ],
            [ed, em, ev, eO]
        ),
        [ew, eG] = (0, E.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eW } = (0, g.ZP)(s, P.Z.GUILD_BOOST_PURCHASE_MODAL),
        eF = o.useMemo(() => {
            var e, n;
            return {
                load_id: ew,
                payment_type: J.Zu[J.GZ.SUBSCRIPTION],
                sku_id: K.Si.GUILD,
                subscription_type: q.NYc.PREMIUM,
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
                quantity: ev,
                location: S,
                source: ei,
                location_stack: eW
            };
        }, [ew, S, eW, ei, eU, ev]);
    o.useEffect(() => {
        (0, Y.i1)(eN);
    }, [eN]);
    let [eY, eH] = o.useState(y.h8.PLAN_SELECT),
        eV = o.useMemo(() => Date.now(), [eY]),
        eX = o.useCallback(
            (e, n) => {
                eH(e), ex(null);
                let t = Date.now();
                G.default.track(q.rMx.PAYMENT_FLOW_STEP, {
                    ...eF,
                    from_step: null != n ? n : eY,
                    to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                    step_duration_ms: t - eV,
                    flow_duration_ms: t - eG,
                    guild_id: eo,
                    application_id: eu
                });
            },
            [ex, eF, eY, eV, eG, eo, eu]
        ),
        ez = {
            baseAnalyticsData: eF,
            flowStartTime: eG,
            guildId: eo,
            handleStepChange: eX,
            onSubscribeComplete: er,
            paymentSourceId: eN,
            setIsSubmittingCurrentStep: eC,
            setPurchaseError: ex
        },
        eq = o.useRef(ez);
    o.useEffect(() => {
        eq.current = ez;
    }),
        o.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, guildId: t, handleStepChange: l, onSubscribeComplete: i, paymentSourceId: o, setIsSubmittingCurrentStep: r, setPurchaseError: a } = eq.current;
            (async () => {
                if (!0 === eB)
                    try {
                        if (null == B.Z.redirectedPaymentId) return;
                        await (0, _.OP)(B.Z.redirectedPaymentId), l(y.h8.CONFIRM), e$(L.A.COMPLETED), null != t && (await el(t)), null != i && i();
                    } catch (t) {
                        e$(L.A.FAIL),
                            a(t),
                            G.default.track(q.rMx.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: null == t ? void 0 : t.code,
                                payment_gateway: q.gg$.STRIPE,
                                payment_source_id: o,
                                duration_ms: Date.now() - n
                            });
                    } finally {
                        r(!1), (0, _.K2)();
                    }
            })();
        }, [eB]),
        (0, h.Z)(() => {
            !w.ZP.hasFetchedSubscriptions() && (0, _.jg)(),
                (0, C.U)({
                    ...eF,
                    guild_id: eo,
                    application_id: eu
                }),
                null != ed &&
                    null != ed.renewalMutations &&
                    G.default.track(q.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: S,
                        guild_id: eo
                    });
        });
    let [eK, eJ] = o.useState(en),
        [eQ, e$] = o.useState(L.A.WAITING),
        [e0, e8] = o.useState(!0),
        e7 = () => {
            l(eQ === L.A.COMPLETED);
        },
        e2 = null != ed && ed.isPurchasedExternally;
    o.useEffect(() => {
        eM !== A.wr.PENDING && eY !== y.h8.CONFIRM && null != e_ && (eK !== en && eJ(en), !en.includes(eY) && eY !== y.h8.PREMIUM_UPSELL && eX(y.h8.REVIEW)), eY === y.h8.ADD_PAYMENT_STEPS && eK !== et && eJ(et), e2 && eY !== y.h8.PLAN_SELECT && eH(y.h8.PLAN_SELECT);
    }, [eY, eX, e2, eM, ed, e_, eK]),
        (0, A.bp)(eY, eM, eX, e$),
        (0, y.dZ)(eY, eQ, e$);
    let e1 = o.useRef(null),
        [e3, e4] = (0, I.Z)(!1, 500),
        [e9, e5] = o.useState(null),
        [e6, ne] = o.useState([]),
        [nn, nt] = o.useState(!1),
        nl = o.useMemo(() => JSON.stringify(e6), [e6]);
    o.useEffect(() => {
        let e;
        if (!!eO) null != U.Z.get(K.Xh.PREMIUM_MONTH_GUILD) && ne((e = (0, Y.DE)(K.Xh.PREMIUM_MONTH_GUILD, eN, !1))), null == eN && null != ed && null != ed.paymentSourceId ? e5(ed.currency) : null != e && e5(e[0]);
    }, [eN, ed, eO, nl]);
    let ni = (0, b.vP)({
        paymentModalArgs: eg,
        initialStep: y.h8.PAYMENT_TYPE,
        prependSteps: [y.h8.PLAN_SELECT],
        appendSteps: [y.h8.REVIEW, y.h8.CONFIRM],
        breadcrumpSteps: eK,
        currentBreadcrumpStep: eY,
        onReturn: () => {
            eX(Object.values(eT).length < 1 ? y.h8.PLAN_SELECT : y.h8.REVIEW, y.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            eX(y.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            G.default.track(q.rMx.PAYMENT_FLOW_STEP, {
                ...eF,
                from_step: n,
                to_step: t,
                step_duration_ms: l - eV,
                flow_duration_ms: l - eG,
                guild_id: eo
            });
        }
    });
    if (ep) n = (0, i.jsx)(x.Vq, { onClose: e7 });
    else if (ef && em && eO && null != e9 && '' !== e9) {
        if (null == ed ? void 0 : ed.isPausedOrPausePending)
            n = (0, i.jsx)(f.ModalContent, {
                children: (0, i.jsx)('p', {
                    className: $.copy,
                    children: Q.intl.string(Q.t.mOWsFx)
                })
            });
        else if (null != ed && null != ed.renewalMutations)
            n = (0, i.jsx)(f.ModalContent, {
                children: (0, i.jsx)('p', {
                    className: $.copy,
                    children: Q.intl.string(Q.t.npfhh4)
                })
            });
        else if (eY === y.h8.PREMIUM_UPSELL) {
            c()(null != eE, 'Missing nextPremiumSubscriptionPlan'), c()(e9, 'Currency not defined');
            let e =
                null != eN
                    ? {
                          paymentSourceId: eN,
                          currency: e9
                      }
                    : { currency: e9 };
            n = (0, i.jsx)(z.Z, {
                premiumSubscriptionPlan: eE,
                analyticsLocation: S,
                analyticsSourceLocation: ei,
                onClose: e7,
                onBack: () => eX(y.h8.PLAN_SELECT),
                onSkip: () => eX(null != e_ || eb ? y.h8.REVIEW : y.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ec,
                priceOptions: e
            });
        } else {
            let e, t, l, o;
            c()(e9, 'Currency not defined');
            let a =
                null != eN
                    ? {
                          paymentSourceId: eN,
                          currency: e9
                      }
                    : { currency: e9 };
            switch (eY) {
                case y.h8.PLAN_SELECT:
                    c()(null != eo, 'Missing guildId'),
                        c()(null != eE, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, i.jsx)(X.CP, {
                            premiumSubscriptionPlan: eE,
                            numGuildBoosts: ev,
                            setNumGuildBoosts: eZ,
                            setForceDisableSubmitButton: e8,
                            premiumSubscription: ed,
                            existingAvailableSlots: eI,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e7(), null != r && r(), (0, k.z)();
                            },
                            guildId: eo,
                            priceOptions: a
                        })),
                        e2 &&
                            null != ed &&
                            null != ed.paymentGateway &&
                            (e = (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(f.FormErrorBlock, {
                                        className: $.externalErrorBlock,
                                        children: Q.intl.format(Q.t['/m3Y3t'], { paymentGatewayName: J.Vz[ed.paymentGateway] })
                                    }),
                                    e
                                ]
                            })),
                        (l = (0, i.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: (0, p.ap)(eh) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                            onClick: e7,
                            children: Q.intl.string(Q.t.oEAioK)
                        })),
                        (o = (0, i.jsx)(f.Button, {
                            type: 'submit',
                            disabled: e0 || 0 === ev || e2,
                            onClick: () => {
                                if (!es && (null == eS || eS.premiumSubscriptionType !== K.p9.TIER_2)) {
                                    eX(y.h8.PREMIUM_UPSELL);
                                    return;
                                }
                                eX(null != e_ || eb ? y.h8.REVIEW : y.h8.ADD_PAYMENT_STEPS);
                            },
                            children: Q.intl.string(Q.t['3PatS0'])
                        }));
                    break;
                case y.h8.ADD_PAYMENT_STEPS:
                    break;
                case y.h8.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(m.F, { className: $.__invalid_body });
                    break;
                case y.h8.REVIEW:
                    c()(null != eE, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, i.jsx)(X.Gq, {
                            paymentSources: eT,
                            priceOptions: a,
                            currentPremiumSubscription: ed,
                            premiumSubscriptionPaymentSourceId: e_,
                            premiumSubscriptionPlan: eE,
                            newAdditionalPlans: eU,
                            onPaymentSourceChange: (e) => ey(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                eX(y.h8.ADD_PAYMENT_STEPS), ey(null);
                            },
                            onPurchaseTermsChange: ej,
                            legalTermsNodeRef: e1,
                            hasLegalTermsFlash: e3
                        })),
                        (t = y.h8.PLAN_SELECT),
                        (o = eD
                            ? (0, i.jsx)(f.Button, {
                                  color: f.Button.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eL,
                                  onClick: async () => {
                                      c()(null != eU, 'Missing newAdditionalPlans');
                                      let e = null != eN ? eT[eN] : null;
                                      ex(null);
                                      try {
                                          if (
                                              (e$(L.A.PURCHASING),
                                              eC(!0),
                                              c()(null != eN, 'Missing paymentSourceId'),
                                              G.default.track(q.rMx.PAYMENT_FLOW_COMPLETED, {
                                                  ...eF,
                                                  duration_ms: Date.now() - eG,
                                                  guild_id: eo,
                                                  application_id: eu
                                              }),
                                              nn)
                                          )
                                              return;
                                          if (null == ed || null == eS) {
                                              c()(null != e, 'Missing paymentSource');
                                              let n = await (0, _.XW)({
                                                  items: eU,
                                                  paymentSource: e,
                                                  currency: a.currency
                                              });
                                              if (n.redirectConfirmation) {
                                                  nt(null != n.redirectURL);
                                                  return;
                                              }
                                          } else {
                                              let n = { items: (0, F.MY)(ed, eU) };
                                              (n.currency = ed.currency), null == n.currency && (n.currency = a.currency), (n.paymentSource = null != e_ ? eT[e_] : void 0), null == n.paymentSource && (c()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = a.currency));
                                              let t = await (0, _.Mg)(ed, n, eW);
                                              if (t.redirectConfirmation) {
                                                  nt(null != t.redirectURL);
                                                  return;
                                              }
                                          }
                                          eX(y.h8.CONFIRM), e$(L.A.COMPLETED), null != eo && (await el(eo)), null != er && er();
                                      } catch (n) {
                                          e$(L.A.FAIL),
                                              ex(n),
                                              G.default.track(q.rMx.PAYMENT_FLOW_FAILED, {
                                                  ...eF,
                                                  payment_error_code: null == n ? void 0 : n.code,
                                                  payment_gateway: null != e ? (e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE) : null,
                                                  payment_source_id: eN,
                                                  duration_ms: Date.now() - eG
                                              });
                                      } finally {
                                          !nn && eC(!1);
                                      }
                                  },
                                  children: Q.intl.string(Q.t.eUEeCg)
                              })
                            : (0, i.jsx)(f.Tooltip, {
                                  text: Q.intl.string(Q.t.XdvBLS),
                                  children: (e) =>
                                      (0, i.jsx)(f.Button, {
                                          ...e,
                                          color: f.Button.Colors.GREEN,
                                          onClick: () => {
                                              null != e1.current && (e1.current.scrollIntoView({ behavior: 'smooth' }), e4(!0));
                                          },
                                          type: 'submit',
                                          children: Q.intl.string(Q.t.eUEeCg)
                                      })
                              }));
                    break;
                case y.h8.CONFIRM:
                    var no;
                    let s = D.Z.getGuild(eo);
                    e = (0, i.jsx)(X.R7, {
                        guild: s,
                        guildBoostQuantity: ev + eI.length,
                        onClose: e7,
                        withAnimation: !1,
                        paymentSourceType: null === (no = eT[null != eN ? eN : '']) || void 0 === no ? void 0 : no.type
                    });
            }
            let u = null != ek && null == (0, y.ly)(ek) ? ek : eR;
            n =
                eY === y.h8.ADD_PAYMENT_STEPS
                    ? ni
                    : (0, i.jsx)(v.Z, {
                          hideBreadcrumbs: eY === y.h8.CONFIRM,
                          steps: eK,
                          currentStep: eY,
                          paymentError: u,
                          purchaseErrorBlockRef: eA,
                          hasCurrencies: e6.length > 1,
                          body: e,
                          footer:
                              eY !== y.h8.CONFIRM
                                  ? (0, i.jsxs)(f.ModalFooter, {
                                        direction: N.Z.Direction.HORIZONTAL,
                                        align: N.Z.Align.CENTER,
                                        justify: N.Z.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, i.jsx)('div', {
                                                      className: $.backStep,
                                                      children: (0, i.jsx)(f.Button, {
                                                          color: (0, p.ap)(eh) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
                                                          look: f.Button.Looks.LINK,
                                                          size: f.Button.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && eX(t);
                                                          },
                                                          children: Q.intl.string(Q.t['13/7kZ'])
                                                      })
                                                  })
                                                : null,
                                            (0, i.jsxs)('div', {
                                                className: $.footerRight,
                                                children: [l, o]
                                            })
                                        ]
                                    })
                                  : null
                      });
        }
    } else
        n = (0, i.jsx)('div', {
            className: $.loadingWrapper,
            children: (0, i.jsx)(f.Spinner, {})
        });
    let nr = null;
    return (
        !ep &&
            eY !== y.h8.PREMIUM_UPSELL &&
            (nr = (0, i.jsx)(V.Z, {
                onClose: e7,
                currentStep: eY,
                purchaseState: eQ
            })),
        (0, i.jsxs)(f.ModalRoot, {
            transitionState: t,
            className: a()({ [$.planSelectStep]: eY === y.h8.PLAN_SELECT }),
            children: [nr, n]
        })
    );
}
function eo(e) {
    let n = (0, d.e7)([w.ZP], () => w.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, g.ZP)(P.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(g.Gt, {
        value: t,
        children: (0, i.jsx)(M.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(ei, { ...e })
        })
    });
}
