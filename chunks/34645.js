t.d(n, {
    default: () => ep,
}),
    t(896048),
    t(457529);
var l = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    o = t.n(a),
    c = t(835245),
    u = t(311907),
    d = t(435371),
    p = t(582754),
    m = t(421380),
    _ = t(397927),
    E = t(384904),
    b = t(923408),
    P = t(891197),
    A = t(444927),
    y = t(964486),
    f = t(304072),
    g = t(793574),
    S = t(688810),
    N = t(160946),
    I = t(459793),
    O = t(235986),
    M = t(357669),
    h = t(832286),
    j = t(958340),
    L = t(156312),
    T = t(166532),
    C = t(566980),
    x = t(216641),
    D = t(925847),
    R = t(87719),
    w = t(253390),
    v = t(251913),
    k = t(998678),
    G = t(632638),
    U = t(544028),
    F = t(71393),
    Y = t(178368),
    B = t(825755),
    H = t(295405),
    $ = t(97352),
    V = t(166403),
    W = t(954571),
    z = t(473145),
    K = t(927578),
    q = t(83617),
    J = t(615396),
    Q = t(802790),
    X = t(879100),
    Z = t(622501),
    ee = t(652215),
    en = t(788868),
    et = t(818348),
    el = t(985018),
    ei = t(314121);

function er(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}

function es(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let ea = en.gD.NONE_MONTH,
    eo = [T.pn.PLAN_SELECT, T.pn.REVIEW, T.pn.CONFIRM],
    ec = [T.pn.PLAN_SELECT, T.pn.ADD_PAYMENT_STEPS, T.pn.REVIEW, T.pn.CONFIRM];
async function eu(e, n) {
    await (0, b.CD)();
    let t = (0, z.D$)(Y.A.boostSlots);
    return (0, b.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}

function ed(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: a,
            analyticsLocations: b,
            analyticsLocation: ed,
            analyticsSourceLocation: ep,
            guildId: em,
            onSubscribeComplete: e_,
            totalNumberOfSlotsToAssign: eE = 1,
            disablePremiumUpsell: eb = !1,
            onSubscriptionConfirmation: eP,
            applicationId: eA,
            intent: ey,
        } = e,
        {
            activeSubscription: ef,
            blockedPayments: eg,
            startingFractionalPremiumEndsAtRef: eS,
            invoicePreview: eN,
            customCheckoutFlow: eI,
        } = (0, L.P5)(),
        eO = (0, u.bG)([V.A], () => V.A.hasFetchedSubscriptions()),
        eM = null != ef ? ef.paymentSourceId : null,
        eh = (0, u.bG)([$.A], () => (null != ef ? (0, J.c9)(ef.planId) : null)),
        ej = (0, u.bG)([$.A], () => null == ef || null != $.A.get(ef.planId)),
        eL = (0, u.bG)([$.A], () => (null == eh ? $.A.get(ea) : eh)),
        eT = (0, u.bG)([U.A], () => U.A.theme),
        eC = i.useRef((0, z.D$)(Y.A.boostSlots)).current,
        ex = (0, u.bG)([j.A], () => (null != em ? j.A.getGuild(em) : void 0), [em]),
        eD = (0, u.bG)([H.A], () => H.A.defaultPaymentSourceId),
        eR = (0, k.KP)(null != eM ? eM : eO ? eD : null),
        {
            paymentSources: ew,
            setPurchaseError: ev,
            paymentSourceId: ek,
            setIsSubmittingCurrentStep: eG,
            paymentAuthenticationState: eU,
            setPaymentSourceId: eF,
            isSubmittingCurrentStep: eY,
            paymentError: eB,
            purchaseError: eH,
            purchaseErrorBlockRef: e$,
        } = eR,
        eV = Object.keys(ew).length > 0,
        [eW, ez] = i.useState(eE - eC.length),
        [eK, eq] = i.useState(!1),
        eJ = (0, u.bG)([B.A], () => B.A.popupCallbackCalled),
        eQ = (0, N.Y)(),
        eX = i.useMemo(
            () =>
                null != ef && ej && eQ
                    ? (0, w.v)(ef, eW)
                    : [
                          {
                              planId: en.gD.PREMIUM_MONTH_GUILD,
                              quantity: eW,
                          },
                      ],
            [ef, ej, eW, eQ],
        ),
        eZ = i.useMemo(() => (0, D.A)(), []),
        [e0, e8] = (0, A.A)(() => [null != eZ ? eZ : (0, c.A)(), Date.now()]),
        { analyticsLocations: e1 } = (0, S.Ay)(b, g.A.GUILD_BOOST_PURCHASE_MODAL),
        e5 = i.useMemo(() => {
            var e, n;
            return {
                load_id: e0,
                payment_type: et.fr[et.VV.SUBSCRIPTION],
                sku_id: en.pe.GUILD,
                subscription_type: ee.rzx.PREMIUM,
                subscription_plan_id:
                    null !=
                    (e =
                        null ==
                        (n = eX.find((e) => {
                            let { planId: n } = e;
                            return en.pW.has(n);
                        }))
                            ? void 0
                            : n.planId)
                        ? e
                        : en.gD.PREMIUM_MONTH_GUILD,
                quantity: eW,
                location: ed,
                source: ep,
                location_stack: e1,
            };
        }, [e0, ed, e1, ep, eX, eW]);
    i.useEffect(() => {
        (0, q.c_)(ek);
    }, [ek]);
    let [e2, e9] = i.useState(T.pn.PLAN_SELECT),
        e4 = i.useMemo(() => Date.now(), [e2]),
        e7 = i.useCallback(
            (e, n) => {
                e9(e), ev(null);
                let t = Date.now();
                W.default.track(
                    ee.HAw.PAYMENT_FLOW_STEP,
                    es(er({}, e5), {
                        from_step: null != n ? n : e2,
                        to_step: e === T.pn.ADD_PAYMENT_STEPS ? T.pn.PAYMENT_TYPE : e,
                        step_duration_ms: t - e4,
                        flow_duration_ms: t - e8,
                        guild_id: em,
                        application_id: eA,
                    }),
                );
            },
            [ev, e5, e2, e4, e8, em, eA],
        ),
        e3 = {
            baseAnalyticsData: e5,
            flowStartTime: e8,
            guildId: em,
            handleStepChange: e7,
            onSubscribeComplete: e_,
            paymentSourceId: ek,
            setIsSubmittingCurrentStep: eG,
            setPurchaseError: ev,
        },
        e6 = i.useRef(e3);
    i.useEffect(() => {
        e6.current = e3;
    }),
        i.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: l,
                onSubscribeComplete: i,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: a,
            } = e6.current;
            (async () => {
                if (!0 === eJ)
                    try {
                        if (null == B.A.redirectedPaymentId) return;
                        await (0, E.tn)(B.A.redirectedPaymentId),
                            l(T.pn.CONFIRM),
                            nl(C.h.COMPLETED),
                            null != t && (await eu(t, null != ey)),
                            null == i || i();
                    } catch (t) {
                        nl(C.h.FAIL),
                            a(t),
                            W.default.track(
                                ee.HAw.PAYMENT_FLOW_FAILED,
                                es(er({}, e), {
                                    payment_error_code: null == t ? void 0 : t.code,
                                    payment_gateway: ee.kM_.STRIPE,
                                    payment_source_id: r,
                                    duration_ms: Date.now() - n,
                                }),
                            );
                    } finally {
                        s(!1), (0, E.bl)();
                    }
            })();
        }, [eJ, ey]),
        (0, y.Ay)(() => {
            V.A.hasFetchedSubscriptions() || (0, E.hP)(),
                null == em ||
                    null != F.A.getGuild(em) ||
                    null != j.A.getGuild(em) ||
                    j.A.isGuildFetching(em) ||
                    (0, h.y)(em),
                (0, M.b)(
                    es(er({}, e5), {
                        guild_id: em,
                        application_id: eA,
                        custom_checkout_flow: eI,
                    }),
                ),
                null != ef &&
                    null != ef.renewalMutations &&
                    W.default.track(ee.HAw.PREMIUM_GUILD_PENDING_MODAL, {
                        location: ed,
                        guild_id: em,
                    });
        });
    let [ne, nn] = i.useState(eo),
        [nt, nl] = i.useState(C.h.WAITING),
        [ni, nr] = i.useState(!0),
        ns = () => {
            r(nt === C.h.COMPLETED);
        },
        na = null != ef && ef.isPurchasedExternally;
    i.useEffect(() => {
        eU !== v.oc.PENDING &&
            e2 !== T.pn.CONFIRM &&
            null != eM &&
            (ne !== eo && nn(eo), eo.includes(e2) || e2 === T.pn.PREMIUM_UPSELL || e7(T.pn.REVIEW)),
            e2 === T.pn.ADD_PAYMENT_STEPS && ne !== ec && nn(ec),
            na && e2 !== T.pn.PLAN_SELECT && e9(T.pn.PLAN_SELECT);
    }, [e2, e7, na, eU, ef, eM, ne]),
        (0, v.b)(e2, eU, e7, nl),
        (0, T.zT)(e2, nt, nl);
    let no = i.useRef(null),
        [nc, nu] = (0, f.A)(!1, 500),
        [nd, np] = i.useState(null),
        [nm, n_] = i.useState([]),
        [nE, nb] = i.useState(!1),
        nP = i.useMemo(() => JSON.stringify(nm), [nm]);
    i.useEffect(() => {
        let e;
        eQ &&
            (null != $.A.get(en.gD.PREMIUM_MONTH_GUILD) && n_((e = (0, q._w)(en.gD.PREMIUM_MONTH_GUILD, ek, !1))),
            null == ek && null != ef && null != ef.paymentSourceId ? np(ef.currency) : null != e && np(e[0]));
    }, [ek, ef, eQ, nP]);
    let nA = (0, k.Y)({
        paymentModalArgs: eR,
        initialStep: T.pn.PAYMENT_TYPE,
        prependSteps: [T.pn.PLAN_SELECT],
        appendSteps: [T.pn.REVIEW, T.pn.CONFIRM],
        breadcrumpSteps: ne,
        currentBreadcrumpStep: e2,
        onReturn: () => {
            e7(Object.values(ew).length < 1 ? T.pn.PLAN_SELECT : T.pn.REVIEW, T.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e7(T.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            W.default.track(
                ee.HAw.PAYMENT_FLOW_STEP,
                es(er({}, e5), {
                    from_step: n,
                    to_step: t,
                    step_duration_ms: l - e4,
                    flow_duration_ms: l - e8,
                    guild_id: em,
                }),
            );
        },
    });
    if (eg)
        n = (0, l.jsx)(I.oO, {
            onClose: ns,
        });
    else if (eO && ej && eQ && null != nd && "" !== nd)
        if ((null == ef ? void 0 : ef.isPausedOrPausePending) && !ef.isPausedAllowsUpdatesButNotResume)
            n = (0, l.jsx)(_.$mQ, {
                "data-migration-pending": !0,
                children: (0, l.jsx)("p", {
                    className: ei.C,
                    children: el.intl.string(el.t.mOWsF1),
                }),
            });
        else if (null != ef && null != ef.renewalMutations)
            n = (0, l.jsx)(_.$mQ, {
                "data-migration-pending": !0,
                children: (0, l.jsx)("p", {
                    className: ei.C,
                    children: el.intl.string(el.t.npfhh0),
                }),
            });
        else if (e2 === T.pn.PREMIUM_UPSELL) {
            o()(null != eL, "Missing nextPremiumSubscriptionPlan"), o()(nd, "Currency not defined");
            let e =
                null != ek
                    ? {
                          paymentSourceId: ek,
                          currency: nd,
                      }
                    : {
                          currency: nd,
                      };
            n = (0, l.jsx)(Z.A, {
                premiumSubscriptionPlan: eL,
                analyticsLocation: ed,
                analyticsSourceLocation: ep,
                onClose: ns,
                onBack: () => e7(T.pn.PLAN_SELECT),
                onSkip: () => e7(null != eM || eV ? T.pn.REVIEW : T.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eP,
                priceOptions: e,
            });
        } else {
            let e, t, i, r;
            o()(nd, "Currency not defined");
            let s =
                    null != ek
                        ? {
                              paymentSourceId: ek,
                              currency: nd,
                          }
                        : {
                              currency: nd,
                          },
                c = F.A.getGuild(em),
                u = null == ex && null == c;
            switch (e2) {
                case T.pn.PLAN_SELECT:
                    o()(null != em, "Missing guildId"),
                        o()(null != eL, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(X.As, {
                            premiumSubscriptionPlan: eL,
                            numGuildBoosts: eW,
                            setNumGuildBoosts: ez,
                            setForceDisableSubmitButton: nr,
                            premiumSubscription: ef,
                            existingAvailableSlots: eC,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                ns(), null != a && a(), (0, R.Z)();
                            },
                            priceOptions: s,
                        })),
                        na && null != ef && null != ef.paymentGateway
                            ? (e = (0, l.jsxs)("div", {
                                  className: ei.xK,
                                  children: [
                                      (0, l.jsx)(_.wx6, {
                                          type: "critical",
                                          children: el.intl.format(el.t["/m3Y3s"], {
                                              paymentGatewayName: et.qm[ef.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !j.A.isGuildFetching(em) &&
                              u &&
                              (e = (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(_.po8, {
                                          messageType: _.YCn.ERROR,
                                          className: ei.MR,
                                          children: el.intl.string(el.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (i = (0, l.jsx)(m.$n, {
                            "data-migration-pending": !0,
                            look: m.$n.Looks.LINK,
                            color: (0, p.qB)(eT) ? m.$n.Colors.PRIMARY : m.$n.Colors.WHITE,
                            onClick: ns,
                            children: el.intl.string(el.t.oEAioF),
                        })),
                        (r = (0, l.jsx)(_.Button, {
                            variant: "primary",
                            text: el.intl.string(el.t["3PatSz"]),
                            type: "submit",
                            disabled: ni || 0 === eW || na || u,
                            onClick: () => {
                                eb || (null != eh && eh.premiumSubscriptionType === en.PremiumTypes.TIER_2)
                                    ? e7(null != eM || eV ? T.pn.REVIEW : T.pn.ADD_PAYMENT_STEPS)
                                    : e7(T.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case T.pn.ADD_PAYMENT_STEPS:
                    break;
                case T.pn.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(P.N, {
                        className: ei.__invalid_body,
                    });
                    break;
                case T.pn.REVIEW:
                    o()(null != eL, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(X.Xp, {
                            paymentSources: ew,
                            priceOptions: s,
                            currentPremiumSubscription: ef,
                            premiumSubscriptionPaymentSourceId: eM,
                            premiumSubscriptionPlan: eL,
                            newAdditionalPlans: eX,
                            onPaymentSourceChange: (e) => eF(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e7(T.pn.ADD_PAYMENT_STEPS), eF(null);
                            },
                            onPurchaseTermsChange: eq,
                            legalTermsNodeRef: no,
                            hasLegalTermsFlash: nc,
                        })),
                        (t = T.pn.PLAN_SELECT),
                        (r = eK
                            ? (0, l.jsx)(_.Button, {
                                  variant: "active",
                                  text: el.intl.string(el.t.eUEeCt),
                                  type: "submit",
                                  loading: eY,
                                  onClick: async () => {
                                      o()(null != eX, "Missing newAdditionalPlans");
                                      let e = (0, x.W)(ew, ek);
                                      ev(null);
                                      try {
                                          nl(C.h.PURCHASING),
                                              eG(!0),
                                              o()(null != ek, "Missing paymentSourceId"),
                                              o()(null != eN, "Missing invoicePreview");
                                          let n = {
                                                  amount: eN.total,
                                                  currency: eN.currency,
                                              },
                                              t = (0, K.U8)(ef, eX, s.currency.toLowerCase(), s.paymentSourceId);
                                          if (
                                              (W.default.track(
                                                  ee.HAw.PAYMENT_FLOW_COMPLETED,
                                                  es(er({}, e5), {
                                                      duration_ms: Date.now() - e8,
                                                      guild_id: em,
                                                      application_id: eA,
                                                  }),
                                              ),
                                              nE)
                                          )
                                              return;
                                          if (null == ef || null == eh) {
                                              o()(null != e, "Missing paymentSource");
                                              let l = await (0, E.Ky)({
                                                  items: eX,
                                                  paymentSource: e,
                                                  currency: s.currency,
                                                  expectedInvoicePrice: n,
                                                  expectedRenewalPrice: t,
                                              });
                                              if (l.redirectConfirmation) return void nb(null != l.redirectURL);
                                          } else {
                                              let l = {
                                                  items: (0, K.aE)(ef, eX),
                                              };
                                              (l.currency = ef.currency),
                                                  null == l.currency && (l.currency = s.currency),
                                                  (l.paymentSource = null != eM ? ew[eM] : void 0),
                                                  null == l.paymentSource &&
                                                      (o()(null != e, "Missing paymentSource"),
                                                      (l.paymentSource = e),
                                                      (l.currency = s.currency));
                                              let i = await (0, E.nV)(ef, l, n, t, e1);
                                              if (i.redirectConfirmation) return void nb(null != i.redirectURL);
                                          }
                                          null == ey && e7(T.pn.CONFIRM),
                                              nl(C.h.COMPLETED),
                                              null != em && (await eu(em, null != ey)),
                                              null != ey && ns(),
                                              null == e_ || e_();
                                      } catch (n) {
                                          nl(C.h.FAIL),
                                              ev(n),
                                              W.default.track(
                                                  ee.HAw.PAYMENT_FLOW_FAILED,
                                                  es(er({}, e5), {
                                                      payment_error_code: null == n ? void 0 : n.code,
                                                      payment_gateway:
                                                          null != e
                                                              ? e.type === ee.hes.CARD
                                                                  ? ee.kM_.STRIPE
                                                                  : ee.kM_.BRAINTREE
                                                              : null,
                                                      payment_source_id: ek,
                                                      duration_ms: Date.now() - e8,
                                                  }),
                                              );
                                      } finally {
                                          nE || eG(!1);
                                      }
                                  },
                              })
                            : (0, l.jsx)(d.m_, {
                                  text: el.intl.string(el.t.XdvBLS),
                                  children: (0, l.jsx)(_.Button, {
                                      variant: "active",
                                      text: el.intl.string(el.t.eUEeCt),
                                      onClick: () => {
                                          null != no.current &&
                                              (no.current.scrollIntoView({
                                                  behavior: "smooth",
                                              }),
                                              nu(!0));
                                      },
                                      type: "submit",
                                  }),
                              }));
                    break;
                case T.pn.CONFIRM:
                    var ny;
                    let b = null != (ny = null == c ? void 0 : c.name) ? ny : null == ex ? void 0 : ex.name,
                        A = (0, x.g)(ew, ek),
                        y = (0, J.b2)(eS.current) && null != eh && !en.YV.has(eh.id);
                    e = (0, l.jsx)(X.WE, {
                        guild: c,
                        guildBoostQuantity: eW + eC.length,
                        onClose: ns,
                        withAnimation: !1,
                        paymentSourceType: A,
                        fallbackGuildName: b,
                        didPurchaseOnFractionalPremium: y,
                        customCheckoutFlow: eI,
                    });
            }
            let f = null != eB && null == (0, T.ou)(eB) ? eB : eH;
            n =
                e2 === T.pn.ADD_PAYMENT_STEPS
                    ? nA
                    : (0, l.jsx)(G.A, {
                          hideBreadcrumbs: e2 === T.pn.CONFIRM,
                          steps: ne,
                          currentStep: e2,
                          paymentError: f,
                          purchaseErrorBlockRef: e$,
                          hasCurrencies: nm.length > 1,
                          body: e,
                          footer:
                              e2 !== T.pn.CONFIRM
                                  ? (0, l.jsxs)(_.jlY, {
                                        "data-migration-pending": !0,
                                        direction: O.A.Direction.HORIZONTAL,
                                        align: O.A.Align.CENTER,
                                        justify: O.A.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, l.jsx)("div", {
                                                      className: ei.uA,
                                                      children: (0, l.jsx)(m.$n, {
                                                          "data-migration-pending": !0,
                                                          color: (0, p.qB)(eT)
                                                              ? m.$n.Colors.PRIMARY
                                                              : m.$n.Colors.WHITE,
                                                          look: m.$n.Looks.LINK,
                                                          size: m.$n.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && e7(t);
                                                          },
                                                          children: el.intl.string(el.t["13/7kX"]),
                                                      }),
                                                  })
                                                : null,
                                            (0, l.jsxs)("div", {
                                                className: ei.wV,
                                                children: [i, r],
                                            }),
                                        ],
                                    })
                                  : null,
                      });
        }
    else
        n = (0, l.jsx)("div", {
            className: ei._5,
            children: (0, l.jsx)(_.y$y, {}),
        });
    let nf = null;
    return (
        eg ||
            e2 === T.pn.PREMIUM_UPSELL ||
            (nf = (0, l.jsx)(Q.A, {
                onClose: ns,
                currentStep: e2,
                purchaseState: nt,
            })),
        (0, l.jsxs)(_.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            className: s()({
                [ei.MZ]: e2 === T.pn.PLAN_SELECT,
            }),
            parentComponent: "GuildBoostPurchaseModal",
            children: [nf, n],
        })
    );
}

function ep(e) {
    let n = (0, u.bG)([V.A], () => V.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, S.Ay)(g.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(S.f5, {
        value: t,
        children: (0, l.jsx)(L.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(ed, er({}, e)),
        }),
    });
}
