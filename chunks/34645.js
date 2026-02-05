t.d(n, { default: () => eu });
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    o = t.n(a),
    c = t(835245),
    u = t(311907),
    p = t(435371),
    _ = t(582754),
    d = t(421380),
    m = t(397927),
    E = t(384904),
    S = t(923408),
    A = t(891197),
    g = t(444927),
    P = t(964486),
    I = t(304072),
    b = t(793574),
    N = t(688810),
    f = t(160946),
    y = t(459793),
    T = t(235986),
    M = t(357669),
    C = t(832286),
    x = t(958340),
    L = t(156312),
    h = t(166532),
    R = t(566980),
    k = t(216641),
    D = t(925847),
    j = t(87719),
    O = t(253390),
    v = t(251913),
    w = t(998678),
    U = t(632638),
    G = t(544028),
    F = t(71393),
    B = t(178368),
    Y = t(825755),
    W = t(295405),
    V = t(97352),
    H = t(166403),
    $ = t(954571),
    q = t(473145),
    K = t(927578),
    z = t(83617),
    J = t(615396),
    Q = t(802790),
    X = t(879100),
    Z = t(622501),
    ee = t(652215),
    en = t(788868),
    et = t(818348),
    ei = t(985018),
    el = t(314121);
let er = en.gD.NONE_MONTH,
    es = [h.pn.PLAN_SELECT, h.pn.REVIEW, h.pn.CONFIRM],
    ea = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];
async function eo(e, n) {
    await (0, S.CD)();
    let t = (0, q.D$)(B.A.boostSlots);
    return (0, S.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function ec(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: a,
            analyticsLocations: S,
            analyticsLocation: ec,
            analyticsSourceLocation: eu,
            guildId: ep,
            onSubscribeComplete: e_,
            totalNumberOfSlotsToAssign: ed = 1,
            disablePremiumUpsell: em = !1,
            onSubscriptionConfirmation: eE,
            applicationId: eS,
            intent: eA,
        } = e,
        {
            activeSubscription: eg,
            blockedPayments: eP,
            startingFractionalPremiumEndsAtRef: eI,
            invoicePreview: eb,
            customCheckoutFlow: eN,
        } = (0, L.P5)(),
        ef = (0, u.bG)([H.A], () => H.A.hasFetchedSubscriptions()),
        ey = null != eg ? eg.paymentSourceId : null,
        eT = (0, u.bG)([V.A], () => (null != eg ? (0, J.c9)(eg.planId) : null)),
        eM = (0, u.bG)([V.A], () => null == eg || null != V.A.get(eg.planId)),
        eC = (0, u.bG)([V.A], () => (null == eT ? V.A.get(er) : eT)),
        ex = (0, u.bG)([G.A], () => G.A.theme),
        eL = l.useRef((0, q.D$)(B.A.boostSlots)).current,
        eh = (0, u.bG)([x.A], () => (null != ep ? x.A.getGuild(ep) : void 0), [ep]),
        eR = (0, u.bG)([W.A], () => W.A.defaultPaymentSourceId),
        ek = (0, w.KP)(null != ey ? ey : ef ? eR : null),
        {
            paymentSources: eD,
            setPurchaseError: ej,
            paymentSourceId: eO,
            setIsSubmittingCurrentStep: ev,
            paymentAuthenticationState: ew,
            setPaymentSourceId: eU,
            isSubmittingCurrentStep: eG,
            paymentError: eF,
            purchaseError: eB,
            purchaseErrorBlockRef: eY,
        } = ek,
        eW = Object.keys(eD).length > 0,
        [eV, eH] = l.useState(ed - eL.length),
        [e$, eq] = l.useState(!1),
        eK = (0, u.bG)([Y.A], () => Y.A.popupCallbackCalled),
        ez = (0, f.Y)(),
        eJ = l.useMemo(
            () => (null != eg && eM && ez ? (0, O.v)(eg, eV) : [{ planId: en.gD.PREMIUM_MONTH_GUILD, quantity: eV }]),
            [eg, eM, eV, ez],
        ),
        eQ = l.useMemo(() => (0, D.A)(), []),
        [eX, eZ] = (0, g.A)(() => [eQ ?? (0, c.A)(), Date.now()]),
        { analyticsLocations: e0 } = (0, N.Ay)(S, b.A.GUILD_BOOST_PURCHASE_MODAL),
        e5 = l.useMemo(
            () => ({
                load_id: eX,
                payment_type: et.fr[et.VV.SUBSCRIPTION],
                sku_id: en.pe.GUILD,
                subscription_type: ee.rzx.PREMIUM,
                subscription_plan_id:
                    eJ.find((e) => {
                        let { planId: n } = e;
                        return en.pW.has(n);
                    })?.planId ?? en.gD.PREMIUM_MONTH_GUILD,
                quantity: eV,
                location: ec,
                source: eu,
                location_stack: e0,
            }),
            [eX, ec, e0, eu, eJ, eV],
        );
    l.useEffect(() => {
        (0, z.c_)(eO);
    }, [eO]);
    let [e8, e9] = l.useState(h.pn.PLAN_SELECT),
        e4 = l.useMemo(() => Date.now(), [e8]),
        e1 = l.useCallback(
            (e, n) => {
                e9(e), ej(null);
                let t = Date.now();
                $.default.track(ee.HAw.PAYMENT_FLOW_STEP, {
                    ...e5,
                    from_step: null != n ? n : e8,
                    to_step: e === h.pn.ADD_PAYMENT_STEPS ? h.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - e4,
                    flow_duration_ms: t - eZ,
                    guild_id: ep,
                    application_id: eS,
                });
            },
            [ej, e5, e8, e4, eZ, ep, eS],
        ),
        e7 = {
            baseAnalyticsData: e5,
            flowStartTime: eZ,
            guildId: ep,
            handleStepChange: e1,
            onSubscribeComplete: e_,
            paymentSourceId: eO,
            setIsSubmittingCurrentStep: ev,
            setPurchaseError: ej,
        },
        e2 = l.useRef(e7);
    l.useEffect(() => {
        e2.current = e7;
    }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: a,
            } = e2.current;
            (async () => {
                if (!0 === eK)
                    try {
                        if (null == Y.A.redirectedPaymentId) return;
                        await (0, E.tn)(Y.A.redirectedPaymentId),
                            i(h.pn.CONFIRM),
                            nn(R.h.COMPLETED),
                            null != t && (await eo(t, null != eA)),
                            l?.();
                    } catch (t) {
                        nn(R.h.FAIL),
                            a(t),
                            $.default.track(ee.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: ee.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, E.bl)();
                    }
            })();
        }, [eK, eA]),
        (0, P.Ay)(() => {
            H.A.hasFetchedSubscriptions() || (0, E.hP)(),
                null == ep ||
                    null != F.A.getGuild(ep) ||
                    null != x.A.getGuild(ep) ||
                    x.A.isGuildFetching(ep) ||
                    (0, C.y)(ep),
                (0, M.b)({ ...e5, guild_id: ep, application_id: eS, custom_checkout_flow: eN }),
                null != eg &&
                    null != eg.renewalMutations &&
                    $.default.track(ee.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: ec, guild_id: ep });
        });
    let [e3, e6] = l.useState(es),
        [ne, nn] = l.useState(R.h.WAITING),
        [nt, ni] = l.useState(!0),
        nl = () => {
            r(ne === R.h.COMPLETED);
        },
        nr = null != eg && eg.isPurchasedExternally;
    l.useEffect(() => {
        ew !== v.oc.PENDING &&
            e8 !== h.pn.CONFIRM &&
            null != ey &&
            (e3 !== es && e6(es), es.includes(e8) || e8 === h.pn.PREMIUM_UPSELL || e1(h.pn.REVIEW)),
            e8 === h.pn.ADD_PAYMENT_STEPS && e3 !== ea && e6(ea),
            nr && e8 !== h.pn.PLAN_SELECT && e9(h.pn.PLAN_SELECT);
    }, [e8, e1, nr, ew, eg, ey, e3]),
        (0, v.b)(e8, ew, e1, nn),
        (0, h.zT)(e8, ne, nn);
    let ns = l.useRef(null),
        [na, no] = (0, I.A)(!1, 500),
        [nc, nu] = l.useState(null),
        [np, n_] = l.useState([]),
        [nd, nm] = l.useState(!1),
        nE = l.useMemo(() => JSON.stringify(np), [np]);
    l.useEffect(() => {
        let e;
        ez &&
            (null != V.A.get(en.gD.PREMIUM_MONTH_GUILD) && n_((e = (0, z._w)(en.gD.PREMIUM_MONTH_GUILD, eO, !1))),
            null == eO && null != eg && null != eg.paymentSourceId ? nu(eg.currency) : null != e && nu(e[0]));
    }, [eO, eg, ez, nE]);
    let nS = (0, w.Y)({
        paymentModalArgs: ek,
        initialStep: h.pn.PAYMENT_TYPE,
        prependSteps: [h.pn.PLAN_SELECT],
        appendSteps: [h.pn.REVIEW, h.pn.CONFIRM],
        breadcrumpSteps: e3,
        currentBreadcrumpStep: e8,
        onReturn: () => {
            e1(Object.values(eD).length < 1 ? h.pn.PLAN_SELECT : h.pn.REVIEW, h.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            e1(h.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            $.default.track(ee.HAw.PAYMENT_FLOW_STEP, {
                ...e5,
                from_step: n,
                to_step: t,
                step_duration_ms: i - e4,
                flow_duration_ms: i - eZ,
                guild_id: ep,
            });
        },
    });
    if (eP) n = (0, i.jsx)(y.oO, { onClose: nl });
    else if (ef && eM && ez && null != nc && "" !== nc)
        if (eg?.isPausedOrPausePending && !eg.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(m.$mQ, {
                "data-migration-pending": !0,
                children: (0, i.jsx)("p", { className: el.C, children: ei.intl.string(ei.t.mOWsF1) }),
            });
        else if (null != eg && null != eg.renewalMutations)
            n = (0, i.jsx)(m.$mQ, {
                "data-migration-pending": !0,
                children: (0, i.jsx)("p", { className: el.C, children: ei.intl.string(ei.t.npfhh0) }),
            });
        else if (e8 === h.pn.PREMIUM_UPSELL) {
            o()(null != eC, "Missing nextPremiumSubscriptionPlan"), o()(nc, "Currency not defined");
            let e = null != eO ? { paymentSourceId: eO, currency: nc } : { currency: nc };
            n = (0, i.jsx)(Z.A, {
                premiumSubscriptionPlan: eC,
                analyticsLocation: ec,
                analyticsSourceLocation: eu,
                onClose: nl,
                onBack: () => e1(h.pn.PLAN_SELECT),
                onSkip: () => e1(null != ey || eW ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            o()(nc, "Currency not defined");
            let s = null != eO ? { paymentSourceId: eO, currency: nc } : { currency: nc },
                c = F.A.getGuild(ep),
                u = null == eh && null == c;
            switch (e8) {
                case h.pn.PLAN_SELECT:
                    o()(null != ep, "Missing guildId"),
                        o()(null != eC, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(X.As, {
                            premiumSubscriptionPlan: eC,
                            numGuildBoosts: eV,
                            setNumGuildBoosts: eH,
                            setForceDisableSubmitButton: ni,
                            premiumSubscription: eg,
                            existingAvailableSlots: eL,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nl(), null != a && a(), (0, j.e)();
                            },
                            priceOptions: s,
                        })),
                        nr && null != eg && null != eg.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: el.xK,
                                  children: [
                                      (0, i.jsx)(m.wx6, {
                                          type: "critical",
                                          children: ei.intl.format(ei.t["/m3Y3s"], {
                                              paymentGatewayName: et.qm[eg.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !x.A.isGuildFetching(ep) &&
                              u &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(m.po8, {
                                          messageType: m.YCn.ERROR,
                                          className: el.MR,
                                          children: ei.intl.string(ei.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = (0, i.jsx)(d.$n, {
                            "data-migration-pending": !0,
                            look: d.$n.Looks.LINK,
                            color: (0, _.qB)(ex) ? d.$n.Colors.PRIMARY : d.$n.Colors.WHITE,
                            onClick: nl,
                            children: ei.intl.string(ei.t.oEAioF),
                        })),
                        (r = (0, i.jsx)(m.Button, {
                            variant: "primary",
                            text: ei.intl.string(ei.t["3PatSz"]),
                            type: "submit",
                            disabled: nt || 0 === eV || nr || u,
                            onClick: () => {
                                em || (null != eT && eT.premiumSubscriptionType === en.PremiumTypes.TIER_2)
                                    ? e1(null != ey || eW ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS)
                                    : e1(h.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case h.pn.ADD_PAYMENT_STEPS:
                    break;
                case h.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(A.N, { className: el.__invalid_body });
                    break;
                case h.pn.REVIEW:
                    o()(null != eC, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(X.Xp, {
                            paymentSources: eD,
                            priceOptions: s,
                            currentPremiumSubscription: eg,
                            premiumSubscriptionPaymentSourceId: ey,
                            premiumSubscriptionPlan: eC,
                            newAdditionalPlans: eJ,
                            onPaymentSourceChange: (e) => eU(null != e ? e.id : null),
                            onPaymentSourceAdd: () => {
                                e1(h.pn.ADD_PAYMENT_STEPS), eU(null);
                            },
                            onPurchaseTermsChange: eq,
                            legalTermsNodeRef: ns,
                            hasLegalTermsFlash: na,
                        })),
                        (t = h.pn.PLAN_SELECT),
                        (r = e$
                            ? (0, i.jsx)(m.Button, {
                                  variant: "active",
                                  text: ei.intl.string(ei.t.eUEeCt),
                                  type: "submit",
                                  loading: eG,
                                  onClick: async () => {
                                      o()(null != eJ, "Missing newAdditionalPlans");
                                      let e = (0, k.W)(eD, eO);
                                      ej(null);
                                      try {
                                          nn(R.h.PURCHASING),
                                              ev(!0),
                                              o()(null != eO, "Missing paymentSourceId"),
                                              o()(null != eb, "Missing invoicePreview");
                                          let n = { amount: eb.total, currency: eb.currency },
                                              t = (0, K.U8)(eg, eJ, s.currency.toLowerCase(), s.paymentSourceId);
                                          if (
                                              ($.default.track(ee.HAw.PAYMENT_FLOW_COMPLETED, {
                                                  ...e5,
                                                  duration_ms: Date.now() - eZ,
                                                  guild_id: ep,
                                                  application_id: eS,
                                              }),
                                              nd)
                                          )
                                              return;
                                          if (null == eg || null == eT) {
                                              o()(null != e, "Missing paymentSource");
                                              let i = await (0, E.Ky)({
                                                  items: eJ,
                                                  paymentSource: e,
                                                  currency: s.currency,
                                                  expectedInvoicePrice: n,
                                                  expectedRenewalPrice: t,
                                              });
                                              if (i.redirectConfirmation) return void nm(null != i.redirectURL);
                                          } else {
                                              let i = { items: (0, K.aE)(eg, eJ) };
                                              (i.currency = eg.currency),
                                                  null == i.currency && (i.currency = s.currency),
                                                  (i.paymentSource = null != ey ? eD[ey] : void 0),
                                                  null == i.paymentSource &&
                                                      (o()(null != e, "Missing paymentSource"),
                                                      (i.paymentSource = e),
                                                      (i.currency = s.currency));
                                              let l = await (0, E.nV)(eg, i, n, t, e0);
                                              if (l.redirectConfirmation) return void nm(null != l.redirectURL);
                                          }
                                          null == eA && e1(h.pn.CONFIRM),
                                              nn(R.h.COMPLETED),
                                              null != ep && (await eo(ep, null != eA)),
                                              null != eA && nl(),
                                              e_?.();
                                      } catch (n) {
                                          nn(R.h.FAIL),
                                              ej(n),
                                              $.default.track(ee.HAw.PAYMENT_FLOW_FAILED, {
                                                  ...e5,
                                                  payment_error_code: n?.code,
                                                  payment_gateway:
                                                      null != e
                                                          ? e.type === ee.hes.CARD
                                                              ? ee.kM_.STRIPE
                                                              : ee.kM_.BRAINTREE
                                                          : null,
                                                  payment_source_id: eO,
                                                  duration_ms: Date.now() - eZ,
                                              });
                                      } finally {
                                          nd || ev(!1);
                                      }
                                  },
                              })
                            : (0, i.jsx)(p.m_, {
                                  text: ei.intl.string(ei.t.XdvBLS),
                                  children: (0, i.jsx)(m.Button, {
                                      variant: "active",
                                      text: ei.intl.string(ei.t.eUEeCt),
                                      onClick: () => {
                                          null != ns.current &&
                                              (ns.current.scrollIntoView({ behavior: "smooth" }), no(!0));
                                      },
                                      type: "submit",
                                  }),
                              }));
                    break;
                case h.pn.CONFIRM:
                    let S = c?.name ?? eh?.name,
                        g = (0, k.g)(eD, eO),
                        P = (0, J.b2)(eI.current) && null != eT && !en.YV.has(eT.id);
                    e = (0, i.jsx)(X.WE, {
                        guild: c,
                        guildBoostQuantity: eV + eL.length,
                        onClose: nl,
                        withAnimation: !1,
                        paymentSourceType: g,
                        fallbackGuildName: S,
                        didPurchaseOnFractionalPremium: P,
                        customCheckoutFlow: eN,
                    });
            }
            let I = null != eF && null == (0, h.ou)(eF) ? eF : eB;
            n =
                e8 === h.pn.ADD_PAYMENT_STEPS
                    ? nS
                    : (0, i.jsx)(U.A, {
                          hideBreadcrumbs: e8 === h.pn.CONFIRM,
                          steps: e3,
                          currentStep: e8,
                          paymentError: I,
                          purchaseErrorBlockRef: eY,
                          hasCurrencies: np.length > 1,
                          body: e,
                          footer:
                              e8 !== h.pn.CONFIRM
                                  ? (0, i.jsxs)(m.jlY, {
                                        "data-migration-pending": !0,
                                        direction: T.A.Direction.HORIZONTAL,
                                        align: T.A.Align.CENTER,
                                        justify: T.A.Justify.END,
                                        children: [
                                            null != t
                                                ? (0, i.jsx)("div", {
                                                      className: el.uA,
                                                      children: (0, i.jsx)(d.$n, {
                                                          "data-migration-pending": !0,
                                                          color: (0, _.qB)(ex)
                                                              ? d.$n.Colors.PRIMARY
                                                              : d.$n.Colors.WHITE,
                                                          look: d.$n.Looks.LINK,
                                                          size: d.$n.Sizes.NONE,
                                                          onClick: () => {
                                                              null != t && e1(t);
                                                          },
                                                          children: ei.intl.string(ei.t["13/7kX"]),
                                                      }),
                                                  })
                                                : null,
                                            (0, i.jsxs)("div", { className: el.wV, children: [l, r] }),
                                        ],
                                    })
                                  : null,
                      });
        }
    else n = (0, i.jsx)("div", { className: el._5, children: (0, i.jsx)(m.y$y, {}) });
    let nA = null;
    return (
        eP || e8 === h.pn.PREMIUM_UPSELL || (nA = (0, i.jsx)(Q.A, { onClose: nl, currentStep: e8, purchaseState: ne })),
        (0, i.jsxs)(m.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            className: s()({ [el.MZ]: e8 === h.pn.PLAN_SELECT }),
            parentComponent: "GuildBoostPurchaseModal",
            children: [nA, n],
        })
    );
}
function eu(e) {
    let n = (0, u.bG)([H.A], () => H.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, N.Ay)(b.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(N.f5, {
        value: t,
        children: (0, i.jsx)(L.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(ec, { ...e }),
        }),
    });
}
