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
    b = n(425013);
let S = (e) => {
    let { onConfirm: t, onCancel: n, title: l, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, i.jsxs)("div", {
        className: b.RP,
        children: [
            (0, i.jsx)(x.D, { className: b.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(f.E, { className: b.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: b.UD,
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
        className: b.RP,
        children: [
            (0, i.jsx)(x.D, {
                className: b.RS,
                variant: "heading-lg/extrabold",
                children: g.intl.format(g.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(f.E, {
                className: b.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: g.intl.format(g.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: b.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.__invalid_openDiscordButton,
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
    E = n(482132),
    N = n(376747);
function y(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: a, selectedStoreListing: s, application: m } = (0, C.P5)(),
        x = (0, d.S3)(),
        f = (0, c.A)(N.Y),
        h = (0, o.bG)([A.A], () => A.A.getGuild(a?.guild_id)),
        b = l.useCallback(() => t(r.pn.REVIEW), [t]);
    if (null == x) return null;
    let j = (0, u.bg)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.dZ, {
                children: f
                    ? (0, i.jsx)(S, {
                          confirmCta: g.intl.string(g.t.PBHFSq),
                          onConfirm: b,
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
                (0, i.jsx)(E.UX, {
                    children: (0, i.jsx)(v.Ay, {
                        onBack: n,
                        backText: g.intl.string(g.t.TQBY1J),
                        onPrimary: b,
                        primaryCTA: v.ti.CONTINUE,
                        primaryText: g.intl.string(g.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var k = n(775602),
    T = n(21161),
    I = n(534479),
    P = n(921925);
function _(e) {
    let t,
        n,
        { showBenefits: a, handleClose: s, onSubscriptionConfirmation: o } = e,
        { updatedSubscription: m, readySlideId: x, selectedStoreListing: f, application: h } = (0, C.P5)(),
        b = (0, d.S3)(),
        A = (0, c.A)(N.Y),
        { createMultipleConfettiAt: y } = l.useContext(T.x),
        _ = b?.name ?? "",
        R = () => {
            s(), o?.();
        },
        B = x === r.pn.CONFIRM,
        w = (0, u.bg)(b?.flags ?? 0),
        F =
            null != f && f.benefits.length > 0
                ? g.intl.formatToPlainString(g.t["+IQQVM"], { benefitCount: f.benefits.length })
                : null;
    return (
        a
            ? A
                ? (t = (0, i.jsx)(S, {
                      title: g.intl.format(g.t.ea6tZr, { tierName: _ }),
                      subtitle:
                          null != f && f.benefits.length > 0
                              ? g.intl.formatToPlainString(g.t.HNepft, { benefits: F })
                              : null,
                      onConfirm: R,
                      confirmCta: g.intl.string(g.t.nlkywz),
                  }))
                : ((t =
                      null != f && null != h
                          ? (0, i.jsx)(p.Uf, {
                                icon: f.thumbnail,
                                storeListingBenefits: f.benefits,
                                application: h,
                                title: g.intl.format(g.t["Q+qktS"], { tier: _ }),
                                subtitle: g.intl.string(g.t.ECKxXU),
                                description: w
                                    ? g.intl.format(g.t["MAtQk/"], { applicationName: h?.name })
                                    : g.intl.format(g.t.vHkMF4, { tier: _ }),
                            })
                          : (0, i.jsx)(I.A, {})),
                  (n = (0, i.jsx)(v.Ay, {
                      onPrimary: R,
                      primaryCTA: v.ti.CONTINUE,
                      primaryText: g.intl.string(g.t["JtWl+a"]),
                  })))
            : (t = A
                  ? (0, i.jsx)(j, { tierName: _, onConfirm: R, subscription: m })
                  : (0, i.jsx)(p.XG, { tierName: _, onConfirm: R, subscription: m })),
        l.useEffect(() => {
            k.A.useReducedMotion && B && y(window.innerWidth / 2, window.innerHeight / 2);
        }, [y, B]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(E.dZ, { children: [(0, i.jsx)(P.A, {}), t] }),
                null != n && (0, i.jsx)(E.UX, { children: n }),
            ],
        })
    );
}
var R = n(545075),
    B = n(94420),
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
        } = (0, B.t4)((e) => ({
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
        { isGift: b } = (0, D.Pv)(),
        [S, j] = l.useState(!u || !p || m);
    return (l.useEffect(() => {
        j(!u || !p || m);
    }, [m, p, u]),
    l.useEffect(() => {
        null != r && f({ guild_id: r });
    }, [r, f]),
    l.useEffect(() => {
        c(n);
        let e = null != n ? w.A.get(n) : null;
        S ||
            d ||
            (a((t) => {
                let n = null != e ? (0, F.y8)(e.id, !1, b, { paymentSourceId: x.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: h };
            }),
            null != e && (o(e?.skuId), g(t)));
    }, [d, n, b, S, x, h, s, a, c, o, g, t]),
    S)
        ? (0, i.jsx)(I.A, {})
        : d
          ? (0, i.jsx)(R.oO, {})
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
        } = (0, B.t4)((e) => ({
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
        })),
        {
            activeSubscription: g,
            setUpdatedSubscription: b,
            currencies: S,
            paymentSources: j,
            priceOptions: A,
            purchaseError: v,
            setCurrency: N,
            subscriptionMetadataRequest: y,
        } = (0, C.P5)(),
        k = (0, W.A)(),
        T = (0, d.S3)();
    H()(null != k, "Expected plan to be selected");
    let P = l.useRef(null),
        [_, R] = (0, L.A)(!1, 500),
        w = (0, G.mx)(),
        F = (0, u.bg)(T?.flags ?? 0);
    l.useEffect(() => {
        null != v && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
    }, [v]);
    let D = l.useCallback(
            (e) => {
                b(e), a(r.pn.CONFIRM);
            },
            [a, b],
        ),
        U = l.useRef(null),
        M = l.useCallback(() => {
            a(r.pn.ADD_PAYMENT_STEPS);
        }, [a]);
    return f === Z.h.PURCHASING
        ? (0, i.jsx)(I.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E.dZ, {
                      children:
                          null == g
                              ? (0, i.jsx)(V._, {
                                    selectedPlanId: k.id,
                                    planGroup: s,
                                    paymentSources: j,
                                    priceOptions: A,
                                    currencies: S,
                                    onCurrencyChange: (e) => N(e),
                                    handlePaymentSourceAdd: M,
                                    metadata: F ? void 0 : y,
                                })
                              : (0, i.jsx)(Y.A, {
                                    premiumSubscription: g,
                                    paymentSources: j,
                                    priceOptions: A,
                                    handlePaymentSourceAdd: M,
                                    planId: k.id,
                                    setHasAcceptedTerms: x,
                                    legalTermsNodeRef: U,
                                    hasLegalTermsFlash: _,
                                    planGroup: s,
                                    currencies: S,
                                    onCurrencyChange: (e) => N(e),
                                    hasOpenInvoice: null != o,
                                    purchaseState: f,
                                    handleClose: m,
                                    shouldUseUnifiedCheckoutUI: !0,
                                }),
                  }),
                  (0, i.jsx)(E.UX, {
                      children: (0, i.jsx)(Q.A, {
                          premiumSubscription: g ?? null,
                          onBack: () => null != n && a(n),
                          onNext: D,
                          legalTermsNodeRef: U,
                          flashLegalTerms: () => R(!0),
                          analyticsLocation: p,
                          baseAnalyticsData: c,
                          flowStartTime: h.startTime,
                          planGroup: s,
                          openInvoiceId: o,
                          metadata: F ? void 0 : y,
                          backButtonEligible: t,
                          invoiceError: w,
                          disablePurchase: y?.guild_id == null && !F,
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
            renderStep: (e) => (0, i.jsx)(y, { ...e }),
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
        { key: r.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(_, { showBenefits: !n, ...e }) },
    ];
}
