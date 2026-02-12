t.d(n, { default: () => er });
var l = t(627968),
    i = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(835245),
    o = t(311907),
    c = t(435371),
    u = t(732955),
    p = t(397927),
    _ = t(384904),
    d = t(923408),
    m = t(891197),
    S = t(444927),
    E = t(964486),
    A = t(304072),
    P = t(793574),
    b = t(688810),
    g = t(160946),
    I = t(459793),
    y = t(357669),
    f = t(832286),
    x = t(958340),
    T = t(156312),
    M = t(166532),
    N = t(566980),
    h = t(216641),
    C = t(925847),
    L = t(87719),
    R = t(253390),
    j = t(251913),
    D = t(998678),
    k = t(632638),
    v = t(71393),
    w = t(178368),
    O = t(825755),
    U = t(295405),
    G = t(97352),
    F = t(166403),
    W = t(954571),
    B = t(473145),
    Y = t(927578),
    V = t(83617),
    H = t(615396),
    z = t(802790),
    q = t(879100),
    K = t(622501),
    J = t(652215),
    Q = t(788868),
    X = t(818348),
    $ = t(985018),
    Z = t(314121);
let ee = Q.gD.NONE_MONTH,
    en = [M.pn.PLAN_SELECT, M.pn.REVIEW, M.pn.CONFIRM],
    et = [M.pn.PLAN_SELECT, M.pn.ADD_PAYMENT_STEPS, M.pn.REVIEW, M.pn.CONFIRM];
async function el(e, n) {
    await (0, d.CD)();
    let t = (0, B.D$)(w.A.boostSlots);
    return (0, d.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function ei(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: d,
            analyticsLocations: ei,
            analyticsLocation: er,
            analyticsSourceLocation: es,
            guildId: ea,
            onSubscribeComplete: eo,
            totalNumberOfSlotsToAssign: ec = 1,
            disablePremiumUpsell: eu = !1,
            onSubscriptionConfirmation: ep,
            applicationId: e_,
            intent: ed,
        } = e,
        {
            activeSubscription: em,
            blockedPayments: eS,
            startingFractionalPremiumEndsAtRef: eE,
            invoicePreview: eA,
            customCheckoutFlow: eP,
        } = (0, T.P5)(),
        eb = (0, o.bG)([F.A], () => F.A.hasFetchedSubscriptions()),
        eg = null != em ? em.paymentSourceId : null,
        eI = (0, o.bG)([G.A], () => (null != em ? (0, H.c9)(em.planId) : null)),
        ey = (0, o.bG)([G.A], () => null == em || null != G.A.get(em.planId)),
        ef = (0, o.bG)([G.A], () => (null == eI ? G.A.get(ee) : eI)),
        ex = i.useRef((0, B.D$)(w.A.boostSlots)).current,
        eT = (0, o.bG)([x.A], () => (null != ea ? x.A.getGuild(ea) : void 0), [ea]),
        eM = (0, o.bG)([U.A], () => U.A.defaultPaymentSourceId),
        eN = (0, D.KP)(null != eg ? eg : eb ? eM : null),
        {
            paymentSources: eh,
            setPurchaseError: eC,
            paymentSourceId: eL,
            setIsSubmittingCurrentStep: eR,
            paymentAuthenticationState: ej,
            setPaymentSourceId: eD,
            isSubmittingCurrentStep: ek,
            paymentError: ev,
            purchaseError: ew,
            purchaseErrorBlockRef: eO,
        } = eN,
        eU = Object.keys(eh).length > 0,
        [eG, eF] = i.useState(ec - ex.length),
        [eW, eB] = i.useState(!1),
        eY = (0, o.bG)([O.A], () => O.A.popupCallbackCalled),
        eV = (0, g.Y)(),
        eH = i.useMemo(
            () => (null != em && ey && eV ? (0, R.v)(em, eG) : [{ planId: Q.gD.PREMIUM_MONTH_GUILD, quantity: eG }]),
            [em, ey, eG, eV],
        ),
        ez = i.useMemo(() => (0, C.A)(), []),
        [eq, eK] = (0, S.A)(() => [ez ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eJ } = (0, b.Ay)(ei, P.A.GUILD_BOOST_PURCHASE_MODAL),
        eQ = i.useMemo(
            () => ({
                load_id: eq,
                payment_type: X.fr[X.VV.SUBSCRIPTION],
                sku_id: Q.pe.GUILD,
                subscription_type: J.rzx.PREMIUM,
                subscription_plan_id:
                    eH.find((e) => {
                        let { planId: n } = e;
                        return Q.pW.has(n);
                    })?.planId ?? Q.gD.PREMIUM_MONTH_GUILD,
                quantity: eG,
                location: er,
                source: es,
                location_stack: eJ,
            }),
            [eq, er, eJ, es, eH, eG],
        );
    i.useEffect(() => {
        (0, V.c_)(eL);
    }, [eL]);
    let [eX, e$] = i.useState(M.pn.PLAN_SELECT),
        eZ = i.useMemo(() => Date.now(), [eX]),
        e0 = i.useCallback(
            (e, n) => {
                e$(e), eC(null);
                let t = Date.now();
                W.default.track(J.HAw.PAYMENT_FLOW_STEP, {
                    ...eQ,
                    from_step: null != n ? n : eX,
                    to_step: e === M.pn.ADD_PAYMENT_STEPS ? M.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - eZ,
                    flow_duration_ms: t - eK,
                    guild_id: ea,
                    application_id: e_,
                });
            },
            [eC, eQ, eX, eZ, eK, ea, e_],
        ),
        e5 = {
            baseAnalyticsData: eQ,
            flowStartTime: eK,
            guildId: ea,
            handleStepChange: e0,
            onSubscribeComplete: eo,
            paymentSourceId: eL,
            setIsSubmittingCurrentStep: eR,
            setPurchaseError: eC,
        },
        e8 = i.useRef(e5);
    i.useEffect(() => {
        e8.current = e5;
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
            } = e8.current;
            (async () => {
                if (!0 === eY)
                    try {
                        if (null == O.A.redirectedPaymentId) return;
                        await (0, _.tn)(O.A.redirectedPaymentId),
                            l(M.pn.CONFIRM),
                            e7(N.h.COMPLETED),
                            null != t && (await el(t, null != ed)),
                            i?.();
                    } catch (t) {
                        e7(N.h.FAIL),
                            a(t),
                            W.default.track(J.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: J.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, _.bl)();
                    }
            })();
        }, [eY, ed]),
        (0, E.Ay)(() => {
            F.A.hasFetchedSubscriptions() || (0, _.hP)(),
                null == ea ||
                    null != v.A.getGuild(ea) ||
                    null != x.A.getGuild(ea) ||
                    x.A.isGuildFetching(ea) ||
                    (0, f.y)(ea),
                (0, y.b)({ ...eQ, guild_id: ea, application_id: e_, custom_checkout_flow: eP }),
                null != em &&
                    null != em.renewalMutations &&
                    W.default.track(J.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: er, guild_id: ea });
        });
    let [e9, e1] = i.useState(en),
        [e4, e7] = i.useState(N.h.WAITING),
        [e2, e3] = i.useState(!0),
        e6 = () => {
            r(e4 === N.h.COMPLETED);
        },
        ne = null != em && em.isPurchasedExternally;
    i.useEffect(() => {
        ej !== j.oc.PENDING &&
            eX !== M.pn.CONFIRM &&
            null != eg &&
            (e9 !== en && e1(en), en.includes(eX) || eX === M.pn.PREMIUM_UPSELL || e0(M.pn.REVIEW)),
            eX === M.pn.ADD_PAYMENT_STEPS && e9 !== et && e1(et),
            ne && eX !== M.pn.PLAN_SELECT && e$(M.pn.PLAN_SELECT);
    }, [eX, e0, ne, ej, em, eg, e9]),
        (0, j.b)(eX, ej, e0, e7),
        (0, M.zT)(eX, e4, e7);
    let nn = i.useRef(null),
        [nt, nl] = (0, A.A)(!1, 500),
        [ni, nr] = i.useState(null),
        [ns, na] = i.useState([]),
        [no, nc] = i.useState(!1),
        nu = i.useMemo(() => JSON.stringify(ns), [ns]);
    i.useEffect(() => {
        let e;
        eV &&
            (null != G.A.get(Q.gD.PREMIUM_MONTH_GUILD) && na((e = (0, V._w)(Q.gD.PREMIUM_MONTH_GUILD, eL, !1))),
            null == eL && null != em && null != em.paymentSourceId ? nr(em.currency) : null != e && nr(e[0]));
    }, [eL, em, eV, nu]);
    let np = (0, D.Y)({
        paymentModalArgs: eN,
        initialStep: M.pn.PAYMENT_TYPE,
        prependSteps: [M.pn.PLAN_SELECT],
        appendSteps: [M.pn.REVIEW, M.pn.CONFIRM],
        breadcrumpSteps: e9,
        currentBreadcrumpStep: eX,
        onReturn: () => {
            e0(Object.values(eh).length < 1 ? M.pn.PLAN_SELECT : M.pn.REVIEW, M.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e0(M.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                l = Date.now();
            W.default.track(J.HAw.PAYMENT_FLOW_STEP, {
                ...eQ,
                from_step: n,
                to_step: t,
                step_duration_ms: l - eZ,
                flow_duration_ms: l - eK,
                guild_id: ea,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eS) n = (0, l.jsx)(I.oO, { onClose: e6 });
    else if (eb && ey && eV && null != ni && "" !== ni)
        if (em?.isPausedOrPausePending && !em.isPausedAllowsUpdatesButNotResume)
            n = (0, l.jsx)(u.cwr, {
                children: (0, l.jsx)("p", { className: Z.C, children: $.intl.string($.t.mOWsF1) }),
            });
        else if (null != em && null != em.renewalMutations)
            n = (0, l.jsx)(u.cwr, {
                children: (0, l.jsx)("p", { className: Z.C, children: $.intl.string($.t.npfhh0) }),
            });
        else if (eX === M.pn.PREMIUM_UPSELL) {
            s()(null != ef, "Missing nextPremiumSubscriptionPlan"), s()(ni, "Currency not defined");
            let e = null != eL ? { paymentSourceId: eL, currency: ni } : { currency: ni };
            n = (0, l.jsx)(K.A, {
                premiumSubscriptionPlan: ef,
                analyticsLocation: er,
                analyticsSourceLocation: es,
                onClose: e6,
                onBack: () => e0(M.pn.PLAN_SELECT),
                onSkip: () => e0(null != eg || eU ? M.pn.REVIEW : M.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ep,
                priceOptions: e,
            });
        } else {
            let e, t, i, r;
            s()(ni, "Currency not defined");
            let a = null != eL ? { paymentSourceId: eL, currency: ni } : { currency: ni },
                o = v.A.getGuild(ea),
                S = null == eT && null == o;
            switch (eX) {
                case M.pn.PLAN_SELECT:
                    s()(null != ea, "Missing guildId"),
                        s()(null != ef, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(q.As, {
                            premiumSubscriptionPlan: ef,
                            numGuildBoosts: eG,
                            setNumGuildBoosts: eF,
                            setForceDisableSubmitButton: e3,
                            premiumSubscription: em,
                            existingAvailableSlots: ex,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                e6(), null != d && d(), (0, L.e)();
                            },
                            priceOptions: a,
                        })),
                        ne && null != em && null != em.paymentGateway
                            ? (e = (0, l.jsxs)("div", {
                                  className: Z.xK,
                                  children: [
                                      (0, l.jsx)(p.wx6, {
                                          type: "critical",
                                          children: $.intl.format($.t["/m3Y3s"], {
                                              paymentGatewayName: X.qm[em.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !x.A.isGuildFetching(ea) &&
                              S &&
                              (e = (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(p.po8, {
                                          messageType: p.YCn.ERROR,
                                          className: Z.MR,
                                          children: $.intl.string($.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (i = (0, l.jsx)(p.QWc, { text: $.intl.string($.t.oEAioF), onClick: e6, variant: "secondary" })),
                        (r = (0, l.jsx)(p.Button, {
                            variant: "primary",
                            text: $.intl.string($.t["3PatSz"]),
                            type: "submit",
                            disabled: e2 || 0 === eG || ne || S,
                            onClick: () => {
                                eu || (null != eI && eI.premiumSubscriptionType === Q.PremiumTypes.TIER_2)
                                    ? e0(null != eg || eU ? M.pn.REVIEW : M.pn.ADD_PAYMENT_STEPS)
                                    : e0(M.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case M.pn.ADD_PAYMENT_STEPS:
                    break;
                case M.pn.AWAITING_AUTHENTICATION:
                    e = (0, l.jsx)(m.N, { className: Z.__invalid_body });
                    break;
                case M.pn.REVIEW:
                    s()(null != ef, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, l.jsx)(q.Xp, {
                            paymentSources: eh,
                            priceOptions: a,
                            currentPremiumSubscription: em,
                            premiumSubscriptionPaymentSourceId: eg,
                            premiumSubscriptionPlan: ef,
                            newAdditionalPlans: eH,
                            onPaymentSourceChange: (e) => eD(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e0(M.pn.ADD_PAYMENT_STEPS), eD(null);
                            },
                            onPurchaseTermsChange: eB,
                            legalTermsNodeRef: nn,
                            hasLegalTermsFlash: nt,
                        })),
                        (t = M.pn.PLAN_SELECT),
                        (r = eW
                            ? (0, l.jsx)(p.Button, {
                                  variant: "active",
                                  text: $.intl.string($.t.eUEeCt),
                                  type: "submit",
                                  loading: ek,
                                  onClick: async () => {
                                      s()(null != eH, "Missing newAdditionalPlans");
                                      let e = (0, h.W)(eh, eL);
                                      eC(null);
                                      try {
                                          e7(N.h.PURCHASING),
                                              eR(!0),
                                              s()(null != eL, "Missing paymentSourceId"),
                                              s()(null != eA, "Missing invoicePreview");
                                          let n = { amount: eA.total, currency: eA.currency },
                                              t = (0, Y.U8)(em, eH, a.currency.toLowerCase(), a.paymentSourceId);
                                          if (
                                              (W.default.track(J.HAw.PAYMENT_FLOW_COMPLETED, {
                                                  ...eQ,
                                                  duration_ms: Date.now() - eK,
                                                  guild_id: ea,
                                                  application_id: e_,
                                              }),
                                              no)
                                          )
                                              return;
                                          if (null == em || null == eI) {
                                              s()(null != e, "Missing paymentSource");
                                              let l = await (0, _.Ky)({
                                                  items: eH,
                                                  paymentSource: e,
                                                  currency: a.currency,
                                                  expectedInvoicePrice: n,
                                                  expectedRenewalPrice: t,
                                              });
                                              if (l.redirectConfirmation) return void nc(null != l.redirectURL);
                                          } else {
                                              let l = { items: (0, Y.aE)(em, eH) };
                                              (l.currency = em.currency),
                                                  null == l.currency && (l.currency = a.currency),
                                                  (l.paymentSource = null != eg ? eh[eg] : void 0),
                                                  null == l.paymentSource &&
                                                      (s()(null != e, "Missing paymentSource"),
                                                      (l.paymentSource = e),
                                                      (l.currency = a.currency));
                                              let i = await (0, _.nV)(em, l, n, t, eJ);
                                              if (i.redirectConfirmation) return void nc(null != i.redirectURL);
                                          }
                                          null == ed && e0(M.pn.CONFIRM),
                                              e7(N.h.COMPLETED),
                                              null != ea && (await el(ea, null != ed)),
                                              null != ed && e6(),
                                              eo?.();
                                      } catch (n) {
                                          e7(N.h.FAIL),
                                              eC(n),
                                              W.default.track(J.HAw.PAYMENT_FLOW_FAILED, {
                                                  ...eQ,
                                                  payment_error_code: n?.code,
                                                  payment_gateway:
                                                      null != e
                                                          ? e.type === J.hes.CARD
                                                              ? J.kM_.STRIPE
                                                              : J.kM_.BRAINTREE
                                                          : null,
                                                  payment_source_id: eL,
                                                  duration_ms: Date.now() - eK,
                                              });
                                      } finally {
                                          no || eR(!1);
                                      }
                                  },
                              })
                            : (0, l.jsx)(c.m_, {
                                  text: $.intl.string($.t.XdvBLS),
                                  children: (0, l.jsx)(p.Button, {
                                      variant: "active",
                                      text: $.intl.string($.t.eUEeCt),
                                      onClick: () => {
                                          null != nn.current &&
                                              (nn.current.scrollIntoView({ behavior: "smooth" }), nl(!0));
                                      },
                                      type: "submit",
                                  }),
                              }));
                    break;
                case M.pn.CONFIRM:
                    let E = o?.name ?? eT?.name,
                        A = (0, h.g)(eh, eL),
                        P = (0, H.b2)(eE.current) && null != eI && !Q.YV.has(eI.id);
                    e = (0, l.jsx)(q.WE, {
                        guild: o,
                        guildBoostQuantity: eG + ex.length,
                        onClose: e6,
                        withAnimation: !1,
                        paymentSourceType: A,
                        fallbackGuildName: E,
                        didPurchaseOnFractionalPremium: P,
                        customCheckoutFlow: eP,
                    });
            }
            let b = null != ev && null == (0, M.ou)(ev) ? ev : ew;
            n =
                eX === M.pn.ADD_PAYMENT_STEPS
                    ? np
                    : (0, l.jsx)(k.A, {
                          hideBreadcrumbs: eX === M.pn.CONFIRM,
                          steps: e9,
                          currentStep: eX,
                          paymentError: b,
                          purchaseErrorBlockRef: eO,
                          hasCurrencies: ns.length > 1,
                          body: e,
                          footer:
                              eX !== M.pn.CONFIRM
                                  ? (0, l.jsx)(u.jlY, {
                                        children: (0, l.jsxs)(p.BJc, {
                                            direction: "horizontal",
                                            align: "center",
                                            justify: null != t ? "space-between" : "end",
                                            fullWidth: !0,
                                            children: [
                                                null != t
                                                    ? (0, l.jsx)(p.QWc, {
                                                          text: $.intl.string($.t["13/7kX"]),
                                                          onClick: () => {
                                                              null != t && e0(t);
                                                          },
                                                          variant: "secondary",
                                                      })
                                                    : null,
                                                (0, l.jsxs)(p.BJc, {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    fullWidth: !1,
                                                    children: [i, r],
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                      });
        }
    else n = (0, l.jsx)("div", { className: Z._5, children: (0, l.jsx)(p.y$y, {}) });
    let n_ = null;
    return (
        eS || eX === M.pn.PREMIUM_UPSELL || (n_ = (0, l.jsx)(z.A, { onClose: e6, currentStep: eX, purchaseState: e4 })),
        (0, l.jsxs)(p.dWK, { transitionState: t, onClose: () => (e6(), Promise.resolve()), children: [n_, n] })
    );
}
function er(e) {
    let n = (0, o.bG)([F.A], () => F.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, b.Ay)(P.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, l.jsx)(b.f5, {
        value: t,
        children: (0, l.jsx)(T.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(ei, { ...e }),
        }),
    });
}
