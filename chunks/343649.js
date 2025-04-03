n.d(t, {
    P: () => er,
    default: () => ea
}),
    n(47120),
    n(26686);
var r,
    l = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    a = n.n(c),
    u = n(772848),
    p = n(442837),
    d = n(780384),
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
    ee = n(104274);
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
var er = (((r = {})[(r.NONE = 0)] = 'NONE'), (r[(r.LEVEL = 1)] = 'LEVEL'), (r[(r.PERK = 2)] = 'PERK'), r);
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
        { transitionState: n, onClose: r, closeGuildPerksModal: s, analyticsLocations: c, analyticsLocation: m, analyticsSourceLocation: er, guildId: ec, onSubscribeComplete: ea, totalNumberOfSlotsToAssign: eu = 1, disablePremiumUpsell: ep = !1, onSubscriptionConfirmation: ed, applicationId: eE, intent: eP = 0 } = e,
        { activeSubscription: em, blockedPayments: eh } = (0, x.JL)(),
        e_ = (0, p.e7)([z.ZP], () => z.ZP.hasFetchedSubscriptions()),
        eN = null != em ? em.paymentSourceId : null,
        eS = (0, p.e7)([W.Z], () => (null != em ? (0, H.oE)(em.planId) : null)),
        ey = (0, p.e7)([W.Z], () => null == em || null != W.Z.get(em.planId)),
        ef = (0, p.e7)([W.Z], () => (null == eS ? W.Z.get(el) : eS)),
        eI = (0, p.e7)([D.Z], () => D.Z.theme),
        eg = i.useRef((0, F.vx)(v.Z.boostSlots)).current,
        eb = (0, p.e7)([U.Z], () => U.Z.defaultPaymentSourceId),
        eO = (0, A.fL)(null != eN ? eN : e_ ? eb : null),
        { paymentSources: ex, setPurchaseError: eM, paymentSourceId: eL, setIsSubmittingCurrentStep: ek, paymentAuthenticationState: eT, setPaymentSourceId: ej, isSubmittingCurrentStep: eC, paymentError: eA, purchaseError: eR, purchaseErrorBlockRef: eD } = eO,
        eZ = Object.keys(ex).length > 0,
        [ev, ew] = i.useState(eu - eg.length),
        [eU, eW] = i.useState(!1),
        ez = (0, p.e7)([w.Z], () => w.Z.popupCallbackCalled),
        eG = (0, I.V)(),
        eF = i.useMemo(
            () =>
                null != em && ey && eG
                    ? (0, j.g)(em, ev)
                    : [
                          {
                              planId: $.Xh.PREMIUM_MONTH_GUILD,
                              quantity: ev
                          }
                      ],
            [em, ey, ev, eG]
        ),
        [eY, eB] = (0, _.Z)(() => [(0, u.Z)(), Date.now()]),
        { analyticsLocations: eH } = (0, f.ZP)(c, y.Z.GUILD_BOOST_PURCHASE_MODAL),
        eV = i.useMemo(() => {
            var e, t;
            return {
                load_id: eY,
                payment_type: J.Zu[J.GZ.SUBSCRIPTION],
                sku_id: $.Si.GUILD,
                subscription_type: q.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eF.find((e) => {
                            let { planId: t } = e;
                            return $.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : $.Xh.PREMIUM_MONTH_GUILD,
                quantity: ev,
                location: m,
                source: er,
                location_stack: eH
            };
        }, [eY, m, eH, er, eF, ev]);
    i.useEffect(() => {
        (0, B.i1)(eL);
    }, [eL]);
    let [eX, eK] = i.useState(M.h8.PLAN_SELECT),
        eq = i.useMemo(() => Date.now(), [eX]),
        e$ = i.useCallback(
            (e, t) => {
                eK(e), eM(null);
                let n = Date.now();
                G.default.track(
                    q.rMx.PAYMENT_FLOW_STEP,
                    en(et({}, eV), {
                        from_step: null != t ? t : eX,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - eq,
                        flow_duration_ms: n - eB,
                        guild_id: ec,
                        application_id: eE
                    })
                );
            },
            [eM, eV, eX, eq, eB, ec, eE]
        ),
        eJ = {
            baseAnalyticsData: eV,
            flowStartTime: eB,
            guildId: ec,
            handleStepChange: e$,
            onSubscribeComplete: ea,
            paymentSourceId: eL,
            setIsSubmittingCurrentStep: ek,
            setPurchaseError: eM
        },
        eQ = i.useRef(eJ);
    i.useEffect(() => {
        eQ.current = eJ;
    }),
        i.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: t, guildId: n, handleStepChange: r, onSubscribeComplete: l, paymentSourceId: i, setIsSubmittingCurrentStep: s, setPurchaseError: o } = eQ.current;
            (async () => {
                if (!0 === ez)
                    try {
                        if (null == w.Z.redirectedPaymentId) return;
                        await (0, P.OP)(w.Z.redirectedPaymentId), r(M.h8.CONFIRM), e1(L.A.COMPLETED), null != n && (await eo(n, 0 !== eP)), null == l || l();
                    } catch (n) {
                        e1(L.A.FAIL),
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
        }, [ez, eP]),
        (0, N.ZP)(() => {
            z.ZP.hasFetchedSubscriptions() || (0, P.jg)(),
                (0, O.U)(
                    en(et({}, eV), {
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
    let [e0, e8] = i.useState(ei),
        [e3, e1] = i.useState(L.A.WAITING),
        [e2, e7] = i.useState(!0),
        e4 = () => {
            r(e3 === L.A.COMPLETED);
        },
        e6 = null != em && em.isPurchasedExternally;
    i.useEffect(() => {
        eT !== C.wr.PENDING && eX !== M.h8.CONFIRM && null != eN && (e0 !== ei && e8(ei), ei.includes(eX) || eX === M.h8.PREMIUM_UPSELL || e$(M.h8.REVIEW)), eX === M.h8.ADD_PAYMENT_STEPS && e0 !== es && e8(es), e6 && eX !== M.h8.PLAN_SELECT && eK(M.h8.PLAN_SELECT);
    }, [eX, e$, e6, eT, em, eN, e0]),
        (0, C.bp)(eX, eT, e$, e1),
        (0, M.dZ)(eX, e3, e1);
    let e9 = i.useRef(null),
        [e5, te] = (0, S.Z)(!1, 500),
        [tt, tn] = i.useState(null),
        [tr, tl] = i.useState([]),
        [ti, ts] = i.useState(!1),
        to = i.useMemo(() => JSON.stringify(tr), [tr]);
    i.useEffect(() => {
        let e;
        eG && (null != W.Z.get($.Xh.PREMIUM_MONTH_GUILD) && tl((e = (0, B.DE)($.Xh.PREMIUM_MONTH_GUILD, eL, !1))), null == eL && null != em && null != em.paymentSourceId ? tn(em.currency) : null != e && tn(e[0]));
    }, [eL, em, eG, to]);
    let tc = (0, A.vP)({
        paymentModalArgs: eO,
        initialStep: M.h8.PAYMENT_TYPE,
        prependSteps: [M.h8.PLAN_SELECT],
        appendSteps: [M.h8.REVIEW, M.h8.CONFIRM],
        breadcrumpSteps: e0,
        currentBreadcrumpStep: eX,
        onReturn: () => {
            e$(Object.values(ex).length < 1 ? M.h8.PLAN_SELECT : M.h8.REVIEW, M.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e$(M.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                r = Date.now();
            G.default.track(
                q.rMx.PAYMENT_FLOW_STEP,
                en(et({}, eV), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: r - eq,
                    flow_duration_ms: r - eB,
                    guild_id: ec
                })
            );
        }
    });
    if (eh) t = (0, l.jsx)(g.Vq, { onClose: e4 });
    else if (e_ && ey && eG && null != tt && '' !== tt)
        if (null == em ? void 0 : em.isPausedOrPausePending)
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
        else if (eX === M.h8.PREMIUM_UPSELL) {
            a()(null != ef, 'Missing nextPremiumSubscriptionPlan'), a()(tt, 'Currency not defined');
            let e =
                null != eL
                    ? {
                          paymentSourceId: eL,
                          currency: tt
                      }
                    : { currency: tt };
            t = (0, l.jsx)(K.Z, {
                premiumSubscriptionPlan: ef,
                analyticsLocation: m,
                analyticsSourceLocation: er,
                onClose: e4,
                onBack: () => e$(M.h8.PLAN_SELECT),
                onSkip: () => e$(null != eN || eZ ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ed,
                priceOptions: e
            });
        } else {
            let e, n, r, i;
            a()(tt, 'Currency not defined');
            let o =
                null != eL
                    ? {
                          paymentSourceId: eL,
                          currency: tt
                      }
                    : { currency: tt };
            switch (eX) {
                case M.h8.PLAN_SELECT:
                    a()(null != ec, 'Missing guildId'),
                        a()(null != ef, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(X.CP, {
                            premiumSubscriptionPlan: ef,
                            numGuildBoosts: ev,
                            setNumGuildBoosts: ew,
                            setForceDisableSubmitButton: e7,
                            premiumSubscription: em,
                            existingAvailableSlots: eg,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = 'discord://app/settings/nitro';
                                    return;
                                }
                                e4(), null != s && s(), (0, T.z)();
                            },
                            guildId: ec,
                            priceOptions: o
                        })),
                        e6 &&
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
                            color: (0, d.ap)(eI) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                            onClick: e4,
                            children: Q.NW.string(Q.t.oEAioK)
                        })),
                        (i = (0, l.jsx)(E.zxk, {
                            type: 'submit',
                            disabled: e2 || 0 === ev || e6,
                            onClick: () => {
                                if (!ep && (null == eS || eS.premiumSubscriptionType !== $.p9.TIER_2)) return void e$(M.h8.PREMIUM_UPSELL);
                                e$(null != eN || eZ ? M.h8.REVIEW : M.h8.ADD_PAYMENT_STEPS);
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
                    a()(null != ef, 'Missing nextPremiumSubscriptionPlan'),
                        (e = (0, l.jsx)(X.Gq, {
                            paymentSources: ex,
                            priceOptions: o,
                            currentPremiumSubscription: em,
                            premiumSubscriptionPaymentSourceId: eN,
                            premiumSubscriptionPlan: ef,
                            newAdditionalPlans: eF,
                            onPaymentSourceChange: (e) => ej(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e$(M.h8.ADD_PAYMENT_STEPS), ej(null);
                            },
                            onPurchaseTermsChange: eW,
                            legalTermsNodeRef: e9,
                            hasLegalTermsFlash: e5
                        })),
                        (n = M.h8.PLAN_SELECT),
                        (i = eU
                            ? (0, l.jsx)(E.zxk, {
                                  color: E.zxk.Colors.GREEN,
                                  type: 'submit',
                                  submitting: eC,
                                  onClick: async () => {
                                      a()(null != eF, 'Missing newAdditionalPlans');
                                      let e = (0, k.m)(ex, eL);
                                      eM(null);
                                      try {
                                          if (
                                              (e1(L.A.PURCHASING),
                                              ek(!0),
                                              a()(null != eL, 'Missing paymentSourceId'),
                                              G.default.track(
                                                  q.rMx.PAYMENT_FLOW_COMPLETED,
                                                  en(et({}, eV), {
                                                      duration_ms: Date.now() - eB,
                                                      guild_id: ec,
                                                      application_id: eE
                                                  })
                                              ),
                                              ti)
                                          )
                                              return;
                                          if (null == em || null == eS) {
                                              a()(null != e, 'Missing paymentSource');
                                              let t = await (0, P.XW)({
                                                  items: eF,
                                                  paymentSource: e,
                                                  currency: o.currency
                                              });
                                              if (t.redirectConfirmation) return void ts(null != t.redirectURL);
                                          } else {
                                              let t = { items: (0, Y.MY)(em, eF) };
                                              (t.currency = em.currency), null == t.currency && (t.currency = o.currency), (t.paymentSource = null != eN ? ex[eN] : void 0), null == t.paymentSource && (a()(null != e, 'Missing paymentSource'), (t.paymentSource = e), (t.currency = o.currency));
                                              let n = await (0, P.Mg)(em, t, eH);
                                              if (n.redirectConfirmation) return void ts(null != n.redirectURL);
                                          }
                                          0 === eP && e$(M.h8.CONFIRM), e1(L.A.COMPLETED), null != ec && (await eo(ec, 0 !== eP)), 0 !== eP && e4(), null == ea || ea();
                                      } catch (t) {
                                          e1(L.A.FAIL),
                                              eM(t),
                                              G.default.track(
                                                  q.rMx.PAYMENT_FLOW_FAILED,
                                                  en(et({}, eV), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway: null != e ? (e.type === q.HeQ.CARD ? q.gg$.STRIPE : q.gg$.BRAINTREE) : null,
                                                      payment_source_id: eL,
                                                      duration_ms: Date.now() - eB
                                                  })
                                              );
                                      } finally {
                                          ti || ek(!1);
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
                                                  null != e9.current && (e9.current.scrollIntoView({ behavior: 'smooth' }), te(!0));
                                              },
                                              type: 'submit',
                                              children: Q.NW.string(Q.t.eUEeCg)
                                          })
                                      )
                              }));
                    break;
                case M.h8.CONFIRM:
                    let c = Z.Z.getGuild(ec),
                        u = (0, k.$)(ex, eL);
                    e = (0, l.jsx)(X.R7, {
                        guild: c,
                        guildBoostQuantity: ev + eg.length,
                        onClose: e4,
                        withAnimation: !1,
                        paymentSourceType: u
                    });
            }
            let p = null != eA && null == (0, M.ly)(eA) ? eA : eR;
            t =
                eX === M.h8.ADD_PAYMENT_STEPS
                    ? tc
                    : (0, l.jsx)(R.Z, {
                          hideBreadcrumbs: eX === M.h8.CONFIRM,
                          steps: e0,
                          currentStep: eX,
                          paymentError: p,
                          purchaseErrorBlockRef: eD,
                          hasCurrencies: tr.length > 1,
                          body: e,
                          footer:
                              eX !== M.h8.CONFIRM
                                  ? (0, l.jsxs)(E.mzw, {
                                        direction: b.Z.Direction.HORIZONTAL,
                                        align: b.Z.Align.CENTER,
                                        justify: b.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, l.jsx)('div', {
                                                      className: ee.backStep,
                                                      children: (0, l.jsx)(E.zxk, {
                                                          color: (0, d.ap)(eI) ? E.zxk.Colors.PRIMARY : E.zxk.Colors.WHITE,
                                                          look: E.zxk.Looks.LINK,
                                                          size: E.zxk.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && e$(n);
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
    let ta = null;
    return (
        eh ||
            eX === M.h8.PREMIUM_UPSELL ||
            (ta = (0, l.jsx)(V.Z, {
                onClose: e4,
                currentStep: eX,
                purchaseState: e3
            })),
        (0, l.jsxs)(E.Y0X, {
            transitionState: n,
            className: o()({ [ee.planSelectStep]: eX === M.h8.PLAN_SELECT }),
            children: [ta, t]
        })
    );
}
function ea(e) {
    let t = (0, p.e7)([z.ZP], () => z.ZP.getPremiumTypeSubscription()),
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
