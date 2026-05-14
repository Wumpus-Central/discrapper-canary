n.d(t, { getApplicationPaymentSteps: () => z });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    a = n(735305),
    s = n(939220);
n(938796);
var o = n(17928),
    c = n(241524),
    d = n(427675),
    u = n(163437),
    p = n(897904),
    m = n(821609),
    x = n(534514),
    f = n(834730),
    h = n(701273),
    g = n(375708),
    S = n(425013);
let b = (e) => {
    let { onConfirm: t, onCancel: n, title: l, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, i.jsxs)("div", {
        className: S.RP,
        children: [
            (0, i.jsx)(x.D, { className: S.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(f.E, { className: S.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: S.UD,
                children: [
                    s &&
                        (0, i.jsx)(m.$, {
                            variant: "primary",
                            text: g.intl.string(g.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, h.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(m.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function j(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, i.jsxs)("div", {
        className: S.RP,
        children: [
            (0, i.jsx)(x.D, {
                className: S.RS,
                variant: "heading-lg/extrabold",
                children: g.intl.format(g.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(f.E, {
                className: S.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: g.intl.format(g.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: S.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.__invalid_openDiscordButton,
                        children: (0, i.jsx)(m.$, {
                            variant: "primary",
                            text: g.intl.string(g.t["8L5bZG"]),
                            onClick: () => (0, h.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: g.intl.string(g.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var A = n(71393),
    C = n(49960),
    v = n(19311),
    y = n(482132),
    E = n(376747);
function N(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: a, selectedStoreListing: s, application: m } = (0, C.P5)(),
        x = (0, d.S3)(),
        f = (0, c.A)(E.Y),
        h = (0, o.bG)([A.A], () => A.A.getGuild(a?.guild_id)),
        S = l.useCallback(() => t(r.pn.REVIEW), [t]);
    if (null == x) return null;
    let j = (0, u.bg)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.dZ, {
                children: f
                    ? (0, i.jsx)(b, {
                          confirmCta: g.intl.string(g.t.PBHFSq),
                          onConfirm: S,
                          onCancel: n,
                          title: g.intl.format(g.t["6n6oXA"], { tier: x.name }),
                          subtitle: j
                              ? g.intl.string(g.t.lzAoKB)
                              : g.intl.formatToPlainString(g.t["GqaY/j"], { guildName: h?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(p.Uf, {
                          icon: s?.thumbnail,
                          storeListingBenefits: s?.benefits,
                          application: m ?? void 0,
                          title: g.intl.format(g.t.haiCxc, { tier: x.name }),
                          subtitle: j ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                          description: j
                              ? g.intl.formatToPlainString(g.t.QCe4rY, { applicationName: m?.name })
                              : g.intl.string(g.t.n1Pu8C),
                      }),
            }),
            !f &&
                (0, i.jsx)(y.UX, {
                    children: (0, i.jsx)(v.Ay, {
                        onBack: n,
                        backText: g.intl.string(g.t.TQBY1J),
                        onPrimary: S,
                        primaryCTA: v.ti.CONTINUE,
                        primaryText: g.intl.string(g.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var I = n(775602),
    k = n(94420),
    T = n(21161),
    P = n(534479),
    _ = n(921925);
function R(e) {
    let t,
        n,
        { showBenefits: a, handleClose: s, onSubscriptionConfirmation: o } = e,
        { updatedSubscription: m, selectedStoreListing: x, application: f } = (0, C.P5)(),
        { readySlideId: h } = (0, k.t4)((e) => ({ readySlideId: e.readySlideId })),
        S = (0, d.S3)(),
        A = (0, c.A)(E.Y),
        { createMultipleConfettiAt: N } = l.useContext(T.x),
        R = S?.name ?? "",
        B = () => {
            s(), o?.();
        },
        w = h === r.pn.CONFIRM,
        F = (0, u.bg)(S?.flags ?? 0),
        D =
            null != x && x.benefits.length > 0
                ? g.intl.formatToPlainString(g.t["+IQQVM"], { benefitCount: x.benefits.length })
                : null;
    return (
        a
            ? A
                ? (t = (0, i.jsx)(b, {
                      title: g.intl.format(g.t.ea6tZr, { tierName: R }),
                      subtitle:
                          null != x && x.benefits.length > 0
                              ? g.intl.formatToPlainString(g.t.HNepft, { benefits: D })
                              : null,
                      onConfirm: B,
                      confirmCta: g.intl.string(g.t.nlkywz),
                  }))
                : ((t =
                      null != x && null != f
                          ? (0, i.jsx)(p.Uf, {
                                icon: x.thumbnail,
                                storeListingBenefits: x.benefits,
                                application: f,
                                title: g.intl.format(g.t["Q+qktS"], { tier: R }),
                                subtitle: g.intl.string(g.t.ECKxXU),
                                description: F
                                    ? g.intl.format(g.t["MAtQk/"], { applicationName: f?.name })
                                    : g.intl.format(g.t.vHkMF4, { tier: R }),
                            })
                          : (0, i.jsx)(P.A, {})),
                  (n = (0, i.jsx)(v.Ay, {
                      onPrimary: B,
                      primaryCTA: v.ti.CONTINUE,
                      primaryText: g.intl.string(g.t["JtWl+a"]),
                  })))
            : (t = A
                  ? (0, i.jsx)(j, { tierName: R, onConfirm: B, subscription: m })
                  : (0, i.jsx)(p.XG, { tierName: R, onConfirm: B, subscription: m })),
        l.useEffect(() => {
            I.A.useReducedMotion && w && N(window.innerWidth / 2, window.innerHeight / 2);
        }, [N, w]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(y.dZ, { children: [(0, i.jsx)(_.A, {}), t] }),
                null != n && (0, i.jsx)(y.UX, { children: n }),
            ],
        })
    );
}
var B = n(545075),
    w = n(97352),
    F = n(927578),
    D = n(937008),
    U = n(615310);
function M(e) {
    let { initialStep: t, initialPlanId: n, guildId: r, setAnalyticsData: a } = e,
        {
            selectedSkuId: s,
            setSelectedSkuId: o,
            setSelectedPlanId: c,
        } = (0, k.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            blockedPayments: d,
            hasFetchedSubscriptions: u,
            hasFetchedSubscriptionPlans: p,
            currencyLoading: m,
            priceOptions: x,
            setSubscriptionMetadataRequest: f,
            displayCurrency: h,
        } = (0, C.P5)(),
        g = (0, U.l)(),
        { isGift: S } = (0, D.Pv)(),
        [b, j] = l.useState(!u || !p || m);
    return (l.useEffect(() => {
        j(!u || !p || m);
    }, [m, p, u]),
    l.useEffect(() => {
        null != r && f({ guild_id: r });
    }, [r, f]),
    l.useEffect(() => {
        c(n);
        let e = null != n ? w.A.get(n) : null;
        b ||
            d ||
            (a((t) => {
                let n = null != e ? (0, F.y8)(e.id, !1, S, { paymentSourceId: x.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: h };
            }),
            null != e && (o(e?.skuId), g(t)));
    }, [d, n, S, b, x, h, s, a, c, o, g, t]),
    b)
        ? (0, i.jsx)(P.A, {})
        : d
          ? (0, i.jsx)(B.oO, {})
          : null;
}
var O = n(284009),
    H = n.n(O),
    L = n(304072),
    G = n(666646),
    W = n(558620),
    Y = n(427858),
    Z = n(566980),
    Q = n(871084),
    V = n(367160);
function X(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: a,
            planGroup: s,
            openInvoiceId: o,
            analyticsData: c,
            analyticsLocation: p,
            handleClose: m,
        } = e,
        {
            setHasAcceptedTerms: x,
            purchaseState: f,
            contextMetadata: h,
        } = (0, k.t4)((e) => ({
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
        })),
        {
            activeSubscription: g,
            setUpdatedSubscription: S,
            currencies: b,
            paymentSources: j,
            priceOptions: A,
            purchaseError: v,
            setCurrency: E,
            subscriptionMetadataRequest: N,
        } = (0, C.P5)(),
        I = (0, W.A)(),
        T = (0, d.S3)();
    H()(null != I, "Expected plan to be selected");
    let _ = l.useRef(null),
        [R, B] = (0, L.A)(!1, 500),
        w = (0, G.mx)(),
        F = (0, u.bg)(T?.flags ?? 0);
    l.useEffect(() => {
        null != v && null != _.current && _.current.scrollIntoView({ behavior: "smooth" });
    }, [v]);
    let D = l.useCallback(
            (e) => {
                S(e), a(r.pn.CONFIRM);
            },
            [a, S],
        ),
        U = l.useRef(null),
        M = l.useCallback(() => {
            a(r.pn.ADD_PAYMENT_STEPS);
        }, [a]);
    return f === Z.h.PURCHASING
        ? (0, i.jsx)(P.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(y.dZ, {
                      children:
                          null == g
                              ? (0, i.jsx)(V._, {
                                    selectedPlanId: I.id,
                                    planGroup: s,
                                    paymentSources: j,
                                    priceOptions: A,
                                    handlePaymentSourceAdd: M,
                                    metadata: F ? void 0 : N,
                                })
                              : (0, i.jsx)(Y.A, {
                                    premiumSubscription: g,
                                    paymentSources: j,
                                    priceOptions: A,
                                    handlePaymentSourceAdd: M,
                                    planId: I.id,
                                    setHasAcceptedTerms: x,
                                    legalTermsNodeRef: U,
                                    hasLegalTermsFlash: R,
                                    planGroup: s,
                                    currencies: b,
                                    onCurrencyChange: (e) => E(e),
                                    hasOpenInvoice: null != o,
                                    purchaseState: f,
                                    handleClose: m,
                                    shouldUseUnifiedCheckoutUI: !0,
                                }),
                  }),
                  (0, i.jsx)(y.UX, {
                      children: (0, i.jsx)(Q.A, {
                          premiumSubscription: g ?? null,
                          onBack: () => null != n && a(n),
                          onNext: D,
                          legalTermsNodeRef: U,
                          flashLegalTerms: () => B(!0),
                          analyticsLocation: p,
                          baseAnalyticsData: c,
                          flowStartTime: h.startTime,
                          planGroup: s,
                          openInvoiceId: o,
                          metadata: F ? void 0 : N,
                          backButtonEligible: t,
                          invoiceError: w,
                          disablePurchase: N?.guild_id == null && !F,
                          onPaymentSourceAdd: M,
                      }),
                  }),
              ],
          });
}
function z(e) {
    let { guildId: t, showBenefitsFirst: n } = e;
    return [
        {
            key: null,
            renderStep: (e) => (0, i.jsx)(M, { initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW, guildId: t, ...e }),
        },
        {
            key: r.pn.BENEFITS,
            renderStep: (e) => (0, i.jsx)(N, { ...e }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t["5LD2+B"]) },
        },
        {
            key: r.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, i.jsx)(a.x, { ...e, breadcrumbSteps: [r.pn.ADD_PAYMENT_STEPS, r.pn.REVIEW, r.pn.CONFIRM] }),
            options: { renderHeader: !0 },
        },
        ...s.hh,
        {
            key: r.pn.REVIEW,
            renderStep: (e) =>
                (0, i.jsx)(X, { backButtonEligible: !!n || void 0, prevStep: n ? r.pn.BENEFITS : void 0, ...e }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(R, { showBenefits: !n, ...e }) },
    ];
}
