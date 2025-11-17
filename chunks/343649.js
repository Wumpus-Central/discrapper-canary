n.d(t, {
    P: () => el,
    default: () => eh,
}),
    n(388685),
    n(49124);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(772848),
    u = n(442837),
    d = n(780384),
    f = n(755721),
    _ = n(481060),
    p = n(355467),
    h = n(179360),
    m = n(723484),
    g = n(211266),
    E = n(493773),
    b = n(330726),
    y = n(100527),
    O = n(906732),
    v = n(15640),
    I = n(89057),
    T = n(600164),
    S = n(232127),
    A = n(31996),
    C = n(356264),
    N = n(563132),
    R = n(409813),
    P = n(45572),
    D = n(435020),
    w = n(845220),
    x = n(98278),
    L = n(431369),
    M = n(176919),
    k = n(3409),
    j = n(185139),
    U = n(210887),
    G = n(430824),
    B = n(314884),
    Z = n(975060),
    F = n(853872),
    V = n(509545),
    H = n(78839),
    Y = n(626135),
    W = n(267642),
    K = n(74538),
    z = n(212895),
    q = n(296848),
    X = n(518062),
    Q = n(4434),
    J = n(333451),
    $ = n(981631),
    ee = n(474936),
    et = n(231338),
    en = n(388032),
    er = n(290136);
function ei(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var el = (function (e) {
    return (e[(e.NONE = 0)] = "NONE"), (e[(e.LEVEL = 1)] = "LEVEL"), (e[(e.PERK = 2)] = "PERK"), e;
})({});
let ec = ee.Xh.NONE_MONTH,
    eu = [R.h8.PLAN_SELECT, R.h8.REVIEW, R.h8.CONFIRM],
    ed = [R.h8.PLAN_SELECT, R.h8.ADD_PAYMENT_STEPS, R.h8.REVIEW, R.h8.CONFIRM],
    ef = 500;
async function e_(e, t) {
    await (0, h.X8)();
    let n = (0, W.vx)(B.Z.boostSlots);
    return (0, h.W3)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function ep(e) {
    let t,
        {
            transitionState: n,
            onClose: a,
            closeGuildPerksModal: s,
            analyticsLocations: h,
            analyticsLocation: ei,
            analyticsSourceLocation: eo,
            guildId: el,
            onSubscribeComplete: ep,
            totalNumberOfSlotsToAssign: eh = 1,
            disablePremiumUpsell: em = !1,
            onSubscriptionConfirmation: eg,
            applicationId: eE,
            intent: eb = 0,
        } = e,
        {
            activeSubscription: ey,
            blockedPayments: eO,
            startingFractionalPremiumEndsAtRef: ev,
            invoicePreview: eI,
            customCheckoutFlow: eT,
        } = (0, N.JL)(),
        eS = (0, u.e7)([H.Z], () => H.Z.hasFetchedSubscriptions()),
        eA = null != ey ? ey.paymentSourceId : null,
        eC = (0, u.e7)([V.Z], () => (null != ey ? (0, q.oE)(ey.planId) : null)),
        eN = (0, u.e7)([V.Z], () => null == ey || null != V.Z.get(ey.planId)),
        eR = (0, u.e7)([V.Z], () => (null == eC ? V.Z.get(ec) : eC)),
        eP = (0, u.e7)([U.Z], () => U.Z.theme),
        eD = i.useRef((0, W.vx)(B.Z.boostSlots)).current,
        ew = (0, u.e7)([C.Z], () => (null != el ? C.Z.getGuild(el) : void 0), [el]),
        ex = (0, u.e7)([F.Z], () => F.Z.defaultPaymentSourceId),
        eL = (0, k.fL)(null != eA ? eA : eS ? ex : null),
        {
            paymentSources: eM,
            setPurchaseError: ek,
            paymentSourceId: ej,
            setIsSubmittingCurrentStep: eU,
            paymentAuthenticationState: eG,
            setPaymentSourceId: eB,
            isSubmittingCurrentStep: eZ,
            paymentError: eF,
            purchaseError: eV,
            purchaseErrorBlockRef: eH,
        } = eL,
        eY = Object.keys(eM).length > 0,
        [eW, eK] = i.useState(eh - eD.length),
        [ez, eq] = i.useState(!1),
        eX = (0, u.e7)([Z.Z], () => Z.Z.popupCallbackCalled),
        eQ = (0, v.V)(),
        eJ = i.useMemo(
            () =>
                null != ey && eN && eQ
                    ? (0, L.g)(ey, eW)
                    : [
                          {
                              planId: ee.Xh.PREMIUM_MONTH_GUILD,
                              quantity: eW,
                          },
                      ],
            [ey, eN, eW, eQ],
        ),
        e$ = i.useMemo(() => (0, w.b)(), []),
        [e0, e1] = (0, g.Z)(() => [null != e$ ? e$ : (0, c.Z)(), Date.now()]),
        { analyticsLocations: e3 } = (0, O.ZP)(h, y.Z.GUILD_BOOST_PURCHASE_MODAL),
        e2 = i.useMemo(() => {
            var e, t;
            return {
                load_id: e0,
                payment_type: et.Zu[et.GZ.SUBSCRIPTION],
                sku_id: ee.Si.GUILD,
                subscription_type: $.NYc.PREMIUM,
                subscription_plan_id:
                    null !=
                    (t =
                        null ==
                        (e = eJ.find((e) => {
                            let { planId: t } = e;
                            return ee.Z1.has(t);
                        }))
                            ? void 0
                            : e.planId)
                        ? t
                        : ee.Xh.PREMIUM_MONTH_GUILD,
                quantity: eW,
                location: ei,
                source: eo,
                location_stack: e3,
            };
        }, [e0, ei, e3, eo, eJ, eW]);
    i.useEffect(() => {
        (0, z.i1)(ej);
    }, [ej]);
    let [e4, e5] = i.useState(R.h8.PLAN_SELECT),
        e8 = i.useMemo(() => Date.now(), [e4]),
        e6 = i.useCallback(
            (e, t) => {
                e5(e), ek(null);
                let n = Date.now();
                Y.default.track(
                    $.rMx.PAYMENT_FLOW_STEP,
                    es(ea({}, e2), {
                        from_step: null != t ? t : e4,
                        to_step: e === R.h8.ADD_PAYMENT_STEPS ? R.h8.PAYMENT_TYPE : e,
                        step_duration_ms: n - e8,
                        flow_duration_ms: n - e1,
                        guild_id: el,
                        application_id: eE,
                    }),
                );
            },
            [ek, e2, e4, e8, e1, el, eE],
        ),
        e7 = {
            baseAnalyticsData: e2,
            flowStartTime: e1,
            guildId: el,
            handleStepChange: e6,
            onSubscribeComplete: ep,
            paymentSourceId: ej,
            setIsSubmittingCurrentStep: eU,
            setPurchaseError: ek,
        },
        e9 = i.useRef(e7);
    i.useEffect(() => {
        e9.current = e7;
    }),
        i.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                guildId: n,
                handleStepChange: r,
                onSubscribeComplete: i,
                paymentSourceId: a,
                setIsSubmittingCurrentStep: o,
                setPurchaseError: s,
            } = e9.current;
            (async () => {
                if (!0 === eX)
                    try {
                        if (null == Z.Z.redirectedPaymentId) return;
                        await (0, p.OP)(Z.Z.redirectedPaymentId),
                            r(R.h8.CONFIRM),
                            tr(P.A.COMPLETED),
                            null != n && (await e_(n, 0 !== eb)),
                            null == i || i();
                    } catch (n) {
                        tr(P.A.FAIL),
                            s(n),
                            Y.default.track(
                                $.rMx.PAYMENT_FLOW_FAILED,
                                es(ea({}, e), {
                                    payment_error_code: null == n ? void 0 : n.code,
                                    payment_gateway: $.gg$.STRIPE,
                                    payment_source_id: a,
                                    duration_ms: Date.now() - t,
                                }),
                            );
                    } finally {
                        o(!1), (0, p.K2)();
                    }
            })();
        }, [eX, eb]),
        (0, E.ZP)(() => {
            H.Z.hasFetchedSubscriptions() || (0, p.jg)(),
                null == el ||
                    null != G.Z.getGuild(el) ||
                    null != C.Z.getGuild(el) ||
                    C.Z.isGuildFetching(el) ||
                    (0, A.Q)(el),
                (0, S.U)(
                    es(ea({}, e2), {
                        guild_id: el,
                        application_id: eE,
                        custom_checkout_flow: eT,
                    }),
                ),
                null != ey &&
                    null != ey.renewalMutations &&
                    Y.default.track($.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                        location: ei,
                        guild_id: el,
                    });
        });
    let [te, tt] = i.useState(eu),
        [tn, tr] = i.useState(P.A.WAITING),
        [ti, ta] = i.useState(!0),
        to = () => {
            a(tn === P.A.COMPLETED);
        },
        ts = null != ey && ey.isPurchasedExternally;
    i.useEffect(() => {
        eG !== M.wr.PENDING &&
            e4 !== R.h8.CONFIRM &&
            null != eA &&
            (te !== eu && tt(eu), eu.includes(e4) || e4 === R.h8.PREMIUM_UPSELL || e6(R.h8.REVIEW)),
            e4 === R.h8.ADD_PAYMENT_STEPS && te !== ed && tt(ed),
            ts && e4 !== R.h8.PLAN_SELECT && e5(R.h8.PLAN_SELECT);
    }, [e4, e6, ts, eG, ey, eA, te]),
        (0, M.bp)(e4, eG, e6, tr),
        (0, R.dZ)(e4, tn, tr);
    let tl = i.useRef(null),
        [tc, tu] = (0, b.Z)(!1, ef),
        [td, tf] = i.useState(null),
        [t_, tp] = i.useState([]),
        [th, tm] = i.useState(!1),
        tg = i.useMemo(() => JSON.stringify(t_), [t_]);
    i.useEffect(() => {
        let e;
        eQ &&
            (null != V.Z.get(ee.Xh.PREMIUM_MONTH_GUILD) && tp((e = (0, z.DE)(ee.Xh.PREMIUM_MONTH_GUILD, ej, !1))),
            null == ej && null != ey && null != ey.paymentSourceId ? tf(ey.currency) : null != e && tf(e[0]));
    }, [ej, ey, eQ, tg]);
    let tE = (0, k.vP)({
        paymentModalArgs: eL,
        initialStep: R.h8.PAYMENT_TYPE,
        prependSteps: [R.h8.PLAN_SELECT],
        appendSteps: [R.h8.REVIEW, R.h8.CONFIRM],
        breadcrumpSteps: te,
        currentBreadcrumpStep: e4,
        onReturn: () => {
            e6(Object.values(eM).length < 1 ? R.h8.PLAN_SELECT : R.h8.REVIEW, R.h8.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e6(R.h8.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                r = Date.now();
            Y.default.track(
                $.rMx.PAYMENT_FLOW_STEP,
                es(ea({}, e2), {
                    from_step: t,
                    to_step: n,
                    step_duration_ms: r - e8,
                    flow_duration_ms: r - e1,
                    guild_id: el,
                }),
            );
        },
    });
    if (eO) t = (0, r.jsx)(I.Vq, { onClose: to });
    else if (eS && eN && eQ && null != td && "" !== td)
        if ((null == ey ? void 0 : ey.isPausedOrPausePending) && !ey.isPausedAllowsUpdatesButNotResume)
            t = (0, r.jsx)(_.hzk, {
                "data-migration-pending": !0,
                children: (0, r.jsx)("p", {
                    className: er.copy,
                    children: en.intl.string(en.t.mOWsF1),
                }),
            });
        else if (null != ey && null != ey.renewalMutations)
            t = (0, r.jsx)(_.hzk, {
                "data-migration-pending": !0,
                children: (0, r.jsx)("p", {
                    className: er.copy,
                    children: en.intl.string(en.t.npfhh0),
                }),
            });
        else if (e4 === R.h8.PREMIUM_UPSELL) {
            l()(null != eR, "Missing nextPremiumSubscriptionPlan"), l()(td, "Currency not defined");
            let e =
                null != ej
                    ? {
                          paymentSourceId: ej,
                          currency: td,
                      }
                    : { currency: td };
            t = (0, r.jsx)(J.Z, {
                premiumSubscriptionPlan: eR,
                analyticsLocation: ei,
                analyticsSourceLocation: eo,
                onClose: to,
                onBack: () => e6(R.h8.PLAN_SELECT),
                onSkip: () => e6(null != eA || eY ? R.h8.REVIEW : R.h8.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eg,
                priceOptions: e,
            });
        } else {
            let e, n, i, a;
            l()(td, "Currency not defined");
            let o =
                    null != ej
                        ? {
                              paymentSourceId: ej,
                              currency: td,
                          }
                        : { currency: td },
                c = G.Z.getGuild(el),
                u = null == ew && null == c;
            switch (e4) {
                case R.h8.PLAN_SELECT:
                    l()(null != el, "Missing guildId"),
                        l()(null != eR, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, r.jsx)(Q.CP, {
                            premiumSubscriptionPlan: eR,
                            numGuildBoosts: eW,
                            setNumGuildBoosts: eK,
                            setForceDisableSubmitButton: ta,
                            premiumSubscription: ey,
                            existingAvailableSlots: eD,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                to(), null != s && s(), (0, x.z)();
                            },
                            priceOptions: o,
                        })),
                        ts && null != ey && null != ey.paymentGateway
                            ? (e = (0, r.jsxs)("div", {
                                  className: er.externalErrorBlock,
                                  children: [
                                      (0, r.jsx)(_.M14, {
                                          type: "critical",
                                          children: en.intl.format(en.t["/m3Y3s"], {
                                              paymentGatewayName: et.Vz[ey.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !C.Z.isGuildFetching(el) &&
                              u &&
                              (e = (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(_.Wn, {
                                          messageType: _.QYI.ERROR,
                                          className: er.helpMessageWrapper,
                                          children: en.intl.string(en.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (i = (0, r.jsx)(f.zx, {
                            "data-migration-pending": !0,
                            look: f.zx.Looks.LINK,
                            color: (0, d.ap)(eP) ? f.zx.Colors.PRIMARY : f.zx.Colors.WHITE,
                            onClick: to,
                            children: en.intl.string(en.t.oEAioF),
                        })),
                        (a = (0, r.jsx)(_.Button, {
                            variant: "primary",
                            text: en.intl.string(en.t["3PatSz"]),
                            type: "submit",
                            disabled: ti || 0 === eW || ts || u,
                            onClick: () => {
                                if (!em && (null == eC || eC.premiumSubscriptionType !== ee.PremiumTypes.TIER_2))
                                    return void e6(R.h8.PREMIUM_UPSELL);
                                e6(null != eA || eY ? R.h8.REVIEW : R.h8.ADD_PAYMENT_STEPS);
                            },
                        }));
                    break;
                case R.h8.ADD_PAYMENT_STEPS:
                    break;
                case R.h8.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(m.F, { className: er.__invalid_body });
                    break;
                case R.h8.REVIEW:
                    l()(null != eR, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, r.jsx)(Q.Gq, {
                            paymentSources: eM,
                            priceOptions: o,
                            currentPremiumSubscription: ey,
                            premiumSubscriptionPaymentSourceId: eA,
                            premiumSubscriptionPlan: eR,
                            newAdditionalPlans: eJ,
                            onPaymentSourceChange: (e) => eB(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e6(R.h8.ADD_PAYMENT_STEPS), eB(null);
                            },
                            onPurchaseTermsChange: eq,
                            legalTermsNodeRef: tl,
                            hasLegalTermsFlash: tc,
                        })),
                        (n = R.h8.PLAN_SELECT),
                        (a = ez
                            ? (0, r.jsx)(_.Button, {
                                  variant: "active",
                                  text: en.intl.string(en.t.eUEeCt),
                                  type: "submit",
                                  loading: eZ,
                                  onClick: async () => {
                                      l()(null != eJ, "Missing newAdditionalPlans");
                                      let e = (0, D.m)(eM, ej);
                                      ek(null);
                                      try {
                                          tr(P.A.PURCHASING),
                                              eU(!0),
                                              l()(null != ej, "Missing paymentSourceId"),
                                              l()(null != eI, "Missing invoicePreview");
                                          let t = {
                                                  amount: eI.total,
                                                  currency: eI.currency,
                                              },
                                              n = (0, K.sG)(ey, eJ, o.currency.toLowerCase(), o.paymentSourceId);
                                          if (
                                              (Y.default.track(
                                                  $.rMx.PAYMENT_FLOW_COMPLETED,
                                                  es(ea({}, e2), {
                                                      duration_ms: Date.now() - e1,
                                                      guild_id: el,
                                                      application_id: eE,
                                                  }),
                                              ),
                                              th)
                                          )
                                              return;
                                          if (null == ey || null == eC) {
                                              l()(null != e, "Missing paymentSource");
                                              let r = await (0, p.XW)({
                                                  items: eJ,
                                                  paymentSource: e,
                                                  currency: o.currency,
                                                  expectedInvoicePrice: t,
                                                  expectedRenewalPrice: n,
                                              });
                                              if (r.redirectConfirmation) return void tm(null != r.redirectURL);
                                          } else {
                                              let r = { items: (0, K.MY)(ey, eJ) };
                                              (r.currency = ey.currency),
                                                  null == r.currency && (r.currency = o.currency),
                                                  (r.paymentSource = null != eA ? eM[eA] : void 0),
                                                  null == r.paymentSource &&
                                                      (l()(null != e, "Missing paymentSource"),
                                                      (r.paymentSource = e),
                                                      (r.currency = o.currency));
                                              let i = await (0, p.Mg)(ey, r, t, n, e3);
                                              if (i.redirectConfirmation) return void tm(null != i.redirectURL);
                                          }
                                          0 === eb && e6(R.h8.CONFIRM),
                                              tr(P.A.COMPLETED),
                                              null != el && (await e_(el, 0 !== eb)),
                                              0 !== eb && to(),
                                              null == ep || ep();
                                      } catch (t) {
                                          tr(P.A.FAIL),
                                              ek(t),
                                              Y.default.track(
                                                  $.rMx.PAYMENT_FLOW_FAILED,
                                                  es(ea({}, e2), {
                                                      payment_error_code: null == t ? void 0 : t.code,
                                                      payment_gateway:
                                                          null != e
                                                              ? e.type === $.HeQ.CARD
                                                                  ? $.gg$.STRIPE
                                                                  : $.gg$.BRAINTREE
                                                              : null,
                                                      payment_source_id: ej,
                                                      duration_ms: Date.now() - e1,
                                                  }),
                                              );
                                      } finally {
                                          th || eU(!1);
                                      }
                                  },
                              })
                            : (0, r.jsx)(_.aML, {
                                  "data-migration-pending": !0,
                                  text: en.intl.string(en.t.XdvBLS),
                                  children: (e) =>
                                      (0, r.jsx)(
                                          _.Button,
                                          es(
                                              ea(
                                                  {
                                                      variant: "active",
                                                      text: en.intl.string(en.t.eUEeCt),
                                                  },
                                                  e,
                                              ),
                                              {
                                                  onClick: () => {
                                                      null != tl.current &&
                                                          (tl.current.scrollIntoView({ behavior: "smooth" }), tu(!0));
                                                  },
                                                  type: "submit",
                                              },
                                          ),
                                      ),
                              }));
                    break;
                case R.h8.CONFIRM:
                    var tb;
                    let h = null != (tb = null == c ? void 0 : c.name) ? tb : null == ew ? void 0 : ew.name,
                        g = (0, D.$)(eM, ej),
                        E = (0, q.qH)(ev.current) && null != eC && !ee.F$.has(eC.id);
                    e = (0, r.jsx)(Q.R7, {
                        guild: c,
                        guildBoostQuantity: eW + eD.length,
                        onClose: to,
                        withAnimation: !1,
                        paymentSourceType: g,
                        fallbackGuildName: h,
                        didPurchaseOnFractionalPremium: E,
                        customCheckoutFlow: eT,
                    });
            }
            let b = null != eF && null == (0, R.ly)(eF) ? eF : eV;
            t =
                e4 === R.h8.ADD_PAYMENT_STEPS
                    ? tE
                    : (0, r.jsx)(j.Z, {
                          hideBreadcrumbs: e4 === R.h8.CONFIRM,
                          steps: te,
                          currentStep: e4,
                          paymentError: b,
                          purchaseErrorBlockRef: eH,
                          hasCurrencies: t_.length > 1,
                          body: e,
                          footer:
                              e4 !== R.h8.CONFIRM
                                  ? (0, r.jsxs)(_.mzw, {
                                        "data-migration-pending": !0,
                                        direction: T.Z.Direction.HORIZONTAL,
                                        align: T.Z.Align.CENTER,
                                        justify: T.Z.Justify.END,
                                        children: [
                                            null != n
                                                ? (0, r.jsx)("div", {
                                                      className: er.backStep,
                                                      children: (0, r.jsx)(f.zx, {
                                                          "data-migration-pending": !0,
                                                          color: (0, d.ap)(eP)
                                                              ? f.zx.Colors.PRIMARY
                                                              : f.zx.Colors.WHITE,
                                                          look: f.zx.Looks.LINK,
                                                          size: f.zx.Sizes.NONE,
                                                          onClick: () => {
                                                              null != n && e6(n);
                                                          },
                                                          children: en.intl.string(en.t["13/7kX"]),
                                                      }),
                                                  })
                                                : null,
                                            (0, r.jsxs)("div", {
                                                className: er.footerRight,
                                                children: [i, a],
                                            }),
                                        ],
                                    })
                                  : null,
                      });
        }
    else
        t = (0, r.jsx)("div", {
            className: er.loadingWrapper,
            children: (0, r.jsx)(_.$jN, {}),
        });
    let ty = null;
    return (
        eO ||
            e4 === R.h8.PREMIUM_UPSELL ||
            (ty = (0, r.jsx)(X.Z, {
                onClose: to,
                currentStep: e4,
                purchaseState: tn,
            })),
        (0, r.jsxs)(_.Y0X, {
            "data-migration-pending": !0,
            transitionState: n,
            className: o()({ [er.planSelectStep]: e4 === R.h8.PLAN_SELECT }),
            parentComponent: "GuildBoostPurchaseModal",
            children: [ty, t],
        })
    );
}
function eh(e) {
    let t = (0, u.e7)([H.Z], () => H.Z.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, O.ZP)(y.Z.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(O.Gt, {
        value: n,
        children: (0, r.jsx)(N.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(ep, ea({}, e)),
        }),
    });
}
