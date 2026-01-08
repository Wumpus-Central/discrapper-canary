n.d(t, { default: () => ed }), n(388685), n(49124);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    o = n.n(r),
    a = n(512722),
    s = n.n(a),
    c = n(772848),
    u = n(442837),
    p = n(681715),
    d = n(780384),
    m = n(755721),
    b = n(481060),
    _ = n(355467),
    E = n(179360),
    P = n(723484),
    f = n(211266),
    h = n(493773),
    g = n(330726),
    S = n(100527),
    y = n(906732),
    I = n(15640),
    N = n(89057),
    O = n(600164),
    M = n(232127),
    T = n(31996),
    x = n(356264),
    k = n(563132),
    L = n(409813),
    C = n(45572),
    j = n(435020),
    A = n(845220),
    R = n(98278),
    v = n(431369),
    D = n(176919),
    w = n(3409),
    Z = n(185139),
    U = n(210887),
    G = n(430824),
    F = n(314884),
    B = n(975060),
    W = n(853872),
    z = n(509545),
    Y = n(78839),
    H = n(626135),
    V = n(267642),
    X = n(74538),
    K = n(212895),
    q = n(296848),
    $ = n(518062),
    Q = n(4434),
    J = n(333451),
    ee = n(981631),
    et = n(474936),
    en = n(231338),
    ei = n(388032),
    el = n(885910);
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = et.Xh.NONE_MONTH,
    es = [L.h8.PLAN_SELECT, L.h8.REVIEW, L.h8.CONFIRM],
    ec = [L.h8.PLAN_SELECT, L.h8.ADD_PAYMENT_STEPS, L.h8.REVIEW, L.h8.CONFIRM];
async function eu(e, t) {
    await (0, E.X8)();
    let n = (0, V.vx)(F.Z.boostSlots);
    return (0, E.W3)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function ep(e) {
    let t,
        {
            transitionState: n,
            onClose: r,
            closeGuildPerksModal: a,
            analyticsLocations: E,
            analyticsLocation: ep,
            analyticsSourceLocation: ed,
            guildId: em,
            onSubscribeComplete: eb,
            totalNumberOfSlotsToAssign: e_ = 1,
            disablePremiumUpsell: eE = !1,
            onSubscriptionConfirmation: eP,
            applicationId: ef,
            intent: eh,
        } = e,
        {
            activeSubscription: eg,
            blockedPayments: eS,
            startingFractionalPremiumEndsAtRef: ey,
            invoicePreview: eI,
            customCheckoutFlow: eN,
        } = (0, k.JL)(),
        eO = (0, u.e7)([Y.Z], () => Y.Z.hasFetchedSubscriptions()),
        eM = null != eg ? eg.paymentSourceId : null,
        eT = (0, u.e7)([z.Z], () => (null != eg ? (0, q.oE)(eg.planId) : null)),
        ex = (0, u.e7)([z.Z], () => null == eg || null != z.Z.get(eg.planId)),
        ek = (0, u.e7)([z.Z], () => (null == eT ? z.Z.get(ea) : eT)),
        eL = (0, u.e7)([U.Z], () => U.Z.theme),
        eC = l.useRef((0, V.vx)(F.Z.boostSlots)).current,
        ej = (0, u.e7)([x.Z], () => (null != em ? x.Z.getGuild(em) : void 0), [em]),
        eA = (0, u.e7)([W.Z], () => W.Z.defaultPaymentSourceId),
        eR = (0, w.fL)(null != eM ? eM : eO ? eA : null),
        {
            paymentSources: ev,
            setPurchaseError: eD,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: eZ,
            paymentAuthenticationState: eU,
            setPaymentSourceId: eG,
            isSubmittingCurrentStep: eF,
            paymentError: eB,
            purchaseError: eW,
            purchaseErrorBlockRef: ez,
        } = eR,
        eY = Object.keys(ev).length > 0,
        [eH, eV] = l.useState(e_ - eC.length),
        [eX, eK] = l.useState(!1),
        eq = (0, u.e7)([B.Z], () => B.Z.popupCallbackCalled),
        e$ = (0, I.V)(),
        eQ = l.useMemo(
            () =>
                null != eg && ex && e$
                    ? (0, v.g)(eg, eH)
                    : [
                          {
                              planId: et.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eH,
                          },
                      ],
            [eg, ex, eH, e$],
        ),
        eJ = l.useMemo(() => (0, A.b)(), []),
        [e0, e3] = (0, f.Z)(() => [null != eJ ? eJ : (0, c.Z)(), Date.now()]),
        { analyticsLocations: e8 } = (0, y.ZP)(E, S.Z.GUILD_BOOST_PURCHASE_MODAL),
        e4 = l.useMemo(() => {
            var e, t;
            return {
                load_id: e0,
                payment_type: en.Zu[en.GZ.SUBSCRIPTION],
                sku_id: et.Si.GUILD,
                subscription_type: ee.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eQ.find((e) => {
                            let { planId: t } = e;
                            return et.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : et.Xh.PREMIUM_MONTH_GUILD,
                quantity: eH,
                location: ep,
                source: ed,
                location_stack: e8,
            };
        }, [e0, ep, e8, ed, eQ, eH]);
    l.useEffect(() => {
        (0, K.i1)(ew);
    }, [ew]);
    let [e1, e7] = l.useState(L.h8.PLAN_SELECT),
        e5 = l.useMemo(() => Date.now(), [e1]),
        e2 = l.useCallback(
            (e, t) => {
                e7(e), eD(null);
                let n = Date.now();
                H.default.track(
                    ee.rMx.PAYMENT_FLOW_STEP,
                    eo(er({}, e4), {
                        from_step: null != t ? t : e1,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - e5,
                        flow_duration_ms: n - e3,
                        guild_id: em,
                        application_id: ef,
                    }),
                );
            },
            [eD, e4, e1, e5, e3, em, ef],
        ),
        e6 = {
            baseAnalyticsData: e4,
            flowStartTime: e3,
            guildId: em,
            handleStepChange: e2,
            onSubscribeComplete: eb,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: eZ,
            setPurchaseError: eD,
        },
        e9 = l.useRef(e6);
    l.useEffect(() => {
        e9.current = e6;
    }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                guildId: n,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: o,
                setPurchaseError: a,
            } = e9.current;
            (async () => {
                if (!0 === eq)
                    try {
                        if (null == B.Z.redirectedPaymentId) return;
                        await (0, _.OP)(B.Z.redirectedPaymentId),
                            i(L.h8.CONFIRM),
                            ti(C.A.COMPLETED),
                            null != n && (await eu(n, null != eh)),
                            null == l || l();
                    } catch (n) {
                        ti(C.A.FAIL),
                            a(n),
                            H.default.track(
                                ee.rMx.PAYMENT_FLOW_FAILED,
                                eo(er({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: ee.gg$.STRIPE,
                                    payment_source_id: r,
                                    duration_ms: Date.now() - t,
                                }),
                            );
                    } finally {
                        o(!1), (0, _.K2)();
                    }
            })();
        }, [eq, eh]),
        (0, h.ZP)(() => {
            Y.Z.hasFetchedSubscriptions() || (0, _.jg)(),
                null == em ||
                    null != G.Z.getGuild(em) ||
                    null != x.Z.getGuild(em) ||
                    x.Z.isGuildFetching(em) ||
                    (0, T.Q)(em),
                (0, M.U)(
                    eo(er({}, e4), {
                        guild_id: em,
                        application_id: ef,
                        custom_checkout_flow: eN,
                    }),
                ),
                null != eg &&
                    null != eg.renewalMutations &&
                    H.default.track(ee.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: ep,
                        guild_id: em,
                    });
        });
    let [te, tt] = l.useState(es),
        [tn, ti] = l.useState(C.A.WAITING),
        [tl, tr] = l.useState(!0),
        to = () => {
            r(tn === C.A.COMPLETED);
        },
        ta = null != eg && eg.isPurchasedExternally;
    l.useEffect(() => {
        eU !== D.wr.PENDING &&
            e1 !== L.h8.CONFIRM &&
            null != eM &&
            (te !== es && tt(es), es.includes(e1) || e1 === L.h8.PREMIUM_UPSELL || e2(L.h8.REVIEW)),
            e1 === L.h8.ADD_PAYMENT_STEPS && te !== ec && tt(ec),
            ta && e1 !== L.h8.PLAN_SELECT && e7(L.h8.PLAN_SELECT);
    }, [e1, e2, ta, eU, eg, eM, te]),
        (0, D.bp)(e1, eU, e2, ti),
        (0, L.dZ)(e1, tn, ti);
    let ts = l.useRef(null),
        [tc, tu] = (0, g.Z)(!1, 500),
        [tp, td] = l.useState(null),
        [tm, tb] = l.useState([]),
        [t_, tE] = l.useState(!1),
        tP = l.useMemo(() => JSON.stringify(tm), [tm]);
    l.useEffect(() => {
        let e;
        e$ &&
            (null != z.Z.get(et.Xh.PREMIUM_MONTH_GUILD) && tb((e = (0, K.DE)(et.Xh.PREMIUM_MONTH_GUILD, ew, !1))),
            null == ew && null != eg && null != eg.paymentSourceId ? td(eg.currency) : null != e && td(e[0]));
    }, [ew, eg, e$, tP]);
    let tf = (0, w.vP)({
        paymentModalArgs: eR,
        initialStep: L.h8.PAYMENT_TYPE,
        prependSteps: [L.h8.PLAN_SELECT],
        appendSteps: [L.h8.REVIEW, L.h8.CONFIRM],
        breadcrumpSteps: te,
        currentBreadcrumpStep: e1,
        onReturn: () => {
            e2(Object.values(ev).length < 1 ? L.h8.PLAN_SELECT : L.h8.REVIEW, L.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e2(L.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                i = Date.now();
            H.default.track(
                ee.rMx.PAYMENT_FLOW_STEP,
                eo(er({}, e4), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: i - e5,
                    flow_duration_ms: i - e3,
                    guild_id: em,
                }),
            );
        },
    });
    if (eS) t = (0, i.jsx)(N.Vq, { onClose: to });
    else if (eO && ex && e$ && null != tp && "" !== tp)
        if ((null == eg ? void 0 : eg.isPausedOrPausePending) && !eg.isPausedAllowsUpdatesButNotResume)
            t = (0, i.jsx)(b.hzk, {
                "data-migration-pending": !0,
                children: (0, i.jsx)("p", {
                    className: el.copy,
                    children: ei.intl.string(ei.t.mOWsF1),
                }),
            });
        else if (null != eg && null != eg.renewalMutations)
            t = (0, i.jsx)(b.hzk, {
                "data-migration-pending": !0,
                children: (0, i.jsx)("p", {
                    className: el.copy,
                    children: ei.intl.string(ei.t.npfhh0),
                }),
            });
        else if (e1 === L.h8.PREMIUM_UPSELL) {
            s()(null != ek, "Missing nextPremiumSubscriptionPlan"), s()(tp, "Currency not defined");
            let e =
                null != ew
                    ? {
                          paymentSourceId: ew,
                          currency: tp,
                      }
                    : { currency: tp };
            t = (0, i.jsx)(J.Z, {
                premiumSubscriptionPlan: ek,
                analyticsLocation: ep,
                analyticsSourceLocation: ed,
                onClose: to,
                onBack: () => e2(L.h8.PLAN_SELECT),
                onSkip: () => e2(null != eM || eY ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eP,
                priceOptions: e,
            });
        } else {
            let e, n, l, r;
            s()(tp, "Currency not defined");
            let o =
                    null != ew
                        ? {
                              paymentSourceId: ew,
                              currency: tp,
                          }
                        : { currency: tp },
                c = G.Z.getGuild(em),
                u = null == ej && null == c;
            switch (e1) {
                case L.h8.PLAN_SELECT:
                    s()(null != em, "Missing guildId"),
                        s()(null != ek, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(Q.CP, {
                            premiumSubscriptionPlan: ek,
                            numGuildBoosts: eH,
                            setNumGuildBoosts: eV,
                            setForceDisableSubmitButton: tr,
                            premiumSubscription: eg,
                            existingAvailableSlots: eC,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                to(), null != a && a(), (0, R.z)();
                            },
                            priceOptions: o,
                        })),
                        ta && null != eg && null != eg.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: el.externalErrorBlock,
                                  children: [
                                      (0, i.jsx)(b.M14, {
                                          type: "critical",
                                          children: ei.intl.format(ei.t["/m3Y3s"], {
                                              paymentGatewayName: en.Vz[eg.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !x.Z.isGuildFetching(em) &&
                              u &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(b.Wn, {
                                          messageType: b.QYI.ERROR,
                                          className: el.helpMessageWrapper,
                                          children: ei.intl.string(ei.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = (0, i.jsx)(m.zx, {
                            "data-migration-pending": !0,
                            look: m.zx.Looks.LINK,
                            color: (0, d.ap)(eL) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
                            onClick: to,
                            children: ei.intl.string(ei.t.oEAioF),
                        })),
                        (r = (0, i.jsx)(b.Button, {
                            variant: "primary",
                            text: ei.intl.string(ei.t["3PatSz"]),
                            type: "submit",
                            disabled: tl || 0 === eH || ta || u,
                            onClick: () => {
                                if (!eE && (null == eT || eT.premiumSubscriptionType !== et.PremiumTypes.TIER_2))
                                    return void e2(L.h8.PREMIUM_UPSELL);
                                e2(null != eM || eY ? L.h8.REVIEW : L.h8.ADD_PAYMENT_STEPS);
                            },
                        }));
                    break;
                case L.h8.ADD_PAYMENT_STEPS:
                    break;
                case L.h8.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(P.F, { className: el.__invalid_body });
                    break;
                case L.h8.REVIEW:
                    s()(null != ek, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(Q.Gq, {
                            paymentSources: ev,
                            priceOptions: o,
                            currentPremiumSubscription: eg,
                            premiumSubscriptionPaymentSourceId: eM,
                            premiumSubscriptionPlan: ek,
                            newAdditionalPlans: eQ,
                            onPaymentSourceChange: (e) => eG(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e2(L.h8.ADD_PAYMENT_STEPS), eG(null);
                            },
                            onPurchaseTermsChange: eK,
                            legalTermsNodeRef: ts,
                            hasLegalTermsFlash: tc,
                        })),
                        (n = L.h8.PLAN_SELECT),
                        (r = eX
                            ? (0, i.jsx)(b.Button, {
                                  variant: "active",
                                  text: ei.intl.string(ei.t.eUEeCt),
                                  type: "submit",
                                  loading: eF,
                                  onClick: async () => {
                                      s()(null != eQ, "Missing newAdditionalPlans");
                                      let e = (0, j.m)(ev, ew);
                                      eD(null);
                                      try {
                                          ti(C.A.PURCHASING),
                                              eZ(!0),
                                              s()(null != ew, "Missing paymentSourceId"),
                                              s()(null != eI, "Missing invoicePreview");
                                          let t = {
                                                  amount: eI.total,
                                                  currency: eI.currency,
                                              },
                                              n = (0, X.sG)(eg, eQ, o.currency.toLowerCase(), o.paymentSourceId);
                                          if (
                                              (H.default.track(
                                                  ee.rMx.PAYMENT_FLOW_COMPLETED,
                                                  eo(er({}, e4), {
                                                      duration_ms: Date.now() - e3,
                                                      guild_id: em,
                                                      application_id: ef,
                                                  }),
                                              ),
                                              t_)
                                          )
                                              return;
                                          if (null == eg || null == eT) {
                                              s()(null != e, "Missing paymentSource");
                                              let i = await (0, _.XW)({
                                                  items: eQ,
                                                  paymentSource: e,
                                                  currency: o.currency,
                                                  expectedInvoicePrice: t,
                                                  expectedRenewalPrice: n,
                                              });
                                              if (i.redirectConfirmation) return void tE(null != i.redirectURL);
                                          } else {
                                              let i = { items: (0, X.MY)(eg, eQ) };
                                              (i.currency = eg.currency),
                                                  null == i.currency && (i.currency = o.currency),
                                                  (i.paymentSource = null != eM ? ev[eM] : void 0),
                                                  null == i.paymentSource &&
                                                      (s()(null != e, "Missing paymentSource"),
                                                      (i.paymentSource = e),
                                                      (i.currency = o.currency));
                                              let l = await (0, _.Mg)(eg, i, t, n, e8);
                                              if (l.redirectConfirmation) return void tE(null != l.redirectURL);
                                          }
                                          null == eh && e2(L.h8.CONFIRM),
                                              ti(C.A.COMPLETED),
                                              null != em && (await eu(em, null != eh)),
                                              null != eh && to(),
                                              null == eb || eb();
                                      } catch (t) {
                                          ti(C.A.FAIL),
                                              eD(t),
                                              H.default.track(
                                                  ee.rMx.PAYMENT_FLOW_FAILED,
                                                  eo(er({}, e4), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway:
                                                          null != e
                                                              ? e.type === ee.HeQ.CARD
                                                                  ? ee.gg$.STRIPE
                                                                  : ee.gg$.BRAINTREE
                                                              : null,
                                                      payment_source_id: ew,
                                                      duration_ms: Date.now() - e3,
                                                  }),
                                              );
                                      } finally {
                                          t_ || eZ(!1);
                                      }
                                  },
                              })
                            : (0, i.jsx)(p.u, {
                                  text: ei.intl.string(ei.t.XdvBLS),
                                  children: (0, i.jsx)(b.Button, {
                                      variant: "active",
                                      text: ei.intl.string(ei.t.eUEeCt),
                                      onClick: () => {
                                          null != ts.current &&
                                              (ts.current.scrollIntoView({ behavior: "smooth" }), tu(!0));
                                      },
                                      type: "submit",
                                  }),
                              }));
                    break;
                case L.h8.CONFIRM:
                    var th;
                    let E = null != (th = null == c ? void 0 : c.name) ? th : null == ej ? void 0 : ej.name,
                        f = (0, j.$)(ev, ew),
                        h = (0, q.qH)(ey.current) && null != eT && !et.F$.has(eT.id);
                    e = (0, i.jsx)(Q.R7, {
                        guild: c,
                        guildBoostQuantity: eH + eC.length,
                        onClose: to,
                        withAnimation: !1,
                        paymentSourceType: f,
                        fallbackGuildName: E,
                        didPurchaseOnFractionalPremium: h,
                        customCheckoutFlow: eN,
                    });
            }
            let g = null != eB && null == (0, L.ly)(eB) ? eB : eW;
            t =
                e1 === L.h8.ADD_PAYMENT_STEPS
                    ? tf
                    : (0, i.jsx)(Z.Z, {
                          hideBreadcrumbs: e1 === L.h8.CONFIRM,
                          steps: te,
                          currentStep: e1,
                          paymentError: g,
                          purchaseErrorBlockRef: ez,
                          hasCurrencies: tm.length > 1,
                          body: e,
                          footer:
                              e1 !== L.h8.CONFIRM
                                  ? (0, i.jsxs)(b.mzw, {
                                        "data-migration-pending": !0,
                                        direction: O.Z.Direction.HORIZONTAL,
                                        align: O.Z.Align.CENTER,
                                        justify: O.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, i.jsx)("div", {
                                                      className: el.backStep,
                                                      children: (0, i.jsx)(m.zx, {
                                                          "data-migration-pending": !0,
                                                          color: (0, d.ap)(eL)
                                                              ? m.zx.Colors.PRIMARY
                                                              : m.zx.Colors.WHITE,
                                                          look: m.zx.Looks.LINK,
                                                          size: m.zx.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && e2(n);
                                                          },
                                                          children: ei.intl.string(ei.t["13/7kX"]),
                                                      }),
                                                  })
                                                : null,
                                            (0, i.jsxs)("div", {
                                                className: el.footerRight,
                                                children: [l, r],
                                            }),
                                        ],
                                    })
                                  : null,
                      });
        }
    else
        t = (0, i.jsx)("div", {
            className: el.loadingWrapper,
            children: (0, i.jsx)(b.$jN, {}),
        });
    let tg = null;
    return (
        eS ||
            e1 === L.h8.PREMIUM_UPSELL ||
            (tg = (0, i.jsx)($.Z, {
                onClose: to,
                currentStep: e1,
                purchaseState: tn,
            })),
        (0, i.jsxs)(b.Y0X, {
            "data-migration-pending": !0,
            transitionState: n,
            className: o()({ [el.planSelectStep]: e1 === L.h8.PLAN_SELECT }),
            parentComponent: "GuildBoostPurchaseModal",
            children: [tg, t],
        })
    );
}
function ed(e) {
    let t = (0, u.e7)([Y.Z], () => Y.Z.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, y.ZP)(S.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(y.Gt, {
        value: n,
        children: (0, i.jsx)(k.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(ep, er({}, e)),
        }),
    });
}
