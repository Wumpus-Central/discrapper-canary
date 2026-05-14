n.d(t, { getApplicationPaymentSteps: () => z });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    a = n(735305),
    s = n(939220);
n(938796);
var o = n(17928),
    d = n(241524),
    c = n(427675),
    u = n(163437),
    p = n(897904),
    m = n(821609),
    x = n(534514),
    f = n(834730),
    h = n(701273),
    S = n(375708),
    b = n(425013);
let g = (e) => {
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
                            text: S.intl.string(S.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, h.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(m.$, {
                            variant: "secondary",
                            text: S.intl.string(S.t.iAfxo3),
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
                children: S.intl.format(S.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(f.E, {
                className: b.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: S.intl.format(S.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: b.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.__invalid_openDiscordButton,
                        children: (0, i.jsx)(m.$, {
                            variant: "primary",
                            text: S.intl.string(S.t["8L5bZG"]),
                            onClick: () => (0, h.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: S.intl.string(S.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var A = n(71393),
    C = n(834252),
    v = n(19311),
    y = n(482132),
    E = n(376747);
function N(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: a, selectedStoreListing: s, application: m } = (0, C.P5)(),
        x = (0, c.S3)(),
        f = (0, d.A)(E.Y),
        h = (0, o.bG)([A.A], () => A.A.getGuild(a?.guild_id)),
        b = l.useCallback(() => t(r.pn.REVIEW), [t]);
    if (null == x) return null;
    let j = (0, u.bg)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.dZ, {
                children: f
                    ? (0, i.jsx)(g, {
                          confirmCta: S.intl.string(S.t.PBHFSq),
                          onConfirm: b,
                          onCancel: n,
                          title: S.intl.format(S.t["6n6oXA"], { tier: x.name }),
                          subtitle: j
                              ? S.intl.string(S.t.lzAoKB)
                              : S.intl.formatToPlainString(S.t["GqaY/j"], { guildName: h?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(p.Uf, {
                          icon: s?.thumbnail,
                          storeListingBenefits: s?.benefits,
                          application: m ?? void 0,
                          title: S.intl.format(S.t.haiCxc, { tier: x.name }),
                          subtitle: j ? S.intl.string(S.t.RvtbP5) : S.intl.string(S.t.zY39Zu),
                          description: j
                              ? S.intl.formatToPlainString(S.t.QCe4rY, { applicationName: m?.name })
                              : S.intl.string(S.t.n1Pu8C),
                      }),
            }),
            !f &&
                (0, i.jsx)(y.UX, {
                    children: (0, i.jsx)(v.Ay, {
                        onBack: n,
                        backText: S.intl.string(S.t.TQBY1J),
                        onPrimary: b,
                        primaryCTA: v.ti.CONTINUE,
                        primaryText: S.intl.string(S.t["gZhF+3"]),
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
        { selectedStoreListing: m, application: x } = (0, C.P5)(),
        { readySlideId: f, updatedSubscription: h } = (0, k.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        b = (0, c.S3)(),
        A = (0, d.A)(E.Y),
        { createMultipleConfettiAt: N } = l.useContext(T.x),
        R = b?.name ?? "",
        B = () => {
            s(), o?.();
        },
        w = f === r.pn.CONFIRM,
        U = (0, u.bg)(b?.flags ?? 0),
        F =
            null != m && m.benefits.length > 0
                ? S.intl.formatToPlainString(S.t["+IQQVM"], { benefitCount: m.benefits.length })
                : null;
    return (
        a
            ? A
                ? (t = (0, i.jsx)(g, {
                      title: S.intl.format(S.t.ea6tZr, { tierName: R }),
                      subtitle:
                          null != m && m.benefits.length > 0
                              ? S.intl.formatToPlainString(S.t.HNepft, { benefits: F })
                              : null,
                      onConfirm: B,
                      confirmCta: S.intl.string(S.t.nlkywz),
                  }))
                : ((t =
                      null != m && null != x
                          ? (0, i.jsx)(p.Uf, {
                                icon: m.thumbnail,
                                storeListingBenefits: m.benefits,
                                application: x,
                                title: S.intl.format(S.t["Q+qktS"], { tier: R }),
                                subtitle: S.intl.string(S.t.ECKxXU),
                                description: U
                                    ? S.intl.format(S.t["MAtQk/"], { applicationName: x?.name })
                                    : S.intl.format(S.t.vHkMF4, { tier: R }),
                            })
                          : (0, i.jsx)(P.A, {})),
                  (n = (0, i.jsx)(v.Ay, {
                      onPrimary: B,
                      primaryCTA: v.ti.CONTINUE,
                      primaryText: S.intl.string(S.t["JtWl+a"]),
                  })))
            : (t = A
                  ? (0, i.jsx)(j, { tierName: R, onConfirm: B, subscription: h })
                  : (0, i.jsx)(p.XG, { tierName: R, onConfirm: B, subscription: h })),
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
    U = n(428262),
    F = n(937008),
    D = n(615310);
function M(e) {
    let { initialStep: t, initialPlanId: n, guildId: r, setAnalyticsData: a } = e,
        {
            selectedSkuId: s,
            setSelectedSkuId: o,
            setSelectedPlanId: d,
        } = (0, k.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            blockedPayments: c,
            hasFetchedSubscriptions: u,
            hasFetchedSubscriptionPlans: p,
            currencyLoading: m,
            priceOptions: x,
            setSubscriptionMetadataRequest: f,
            displayCurrency: h,
        } = (0, C.P5)(),
        S = (0, D.l)(),
        { isGift: b } = (0, F.Pv)(),
        [g, j] = l.useState(!u || !p || m);
    return (l.useEffect(() => {
        j(!u || !p || m);
    }, [m, p, u]),
    l.useEffect(() => {
        null != r && f({ guild_id: r });
    }, [r, f]),
    l.useEffect(() => {
        d(n);
        let e = null != n ? w.A.get(n) : null;
        g ||
            c ||
            (a((t) => {
                let n = null != e ? (0, U.y8)(e.id, !1, b, { paymentSourceId: x.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: h };
            }),
            null != e && (o(e?.skuId), S(t)));
    }, [c, n, b, g, x, h, s, a, d, o, S, t]),
    g)
        ? (0, i.jsx)(P.A, {})
        : c
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
            analyticsData: d,
            analyticsLocation: p,
            handleClose: m,
        } = e,
        {
            setHasAcceptedTerms: x,
            purchaseState: f,
            contextMetadata: h,
            setUpdatedSubscription: S,
        } = (0, k.t4)((e) => ({
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            setUpdatedSubscription: e.setUpdatedSubscription,
        })),
        {
            activeSubscription: b,
            currencies: g,
            paymentSources: j,
            priceOptions: A,
            purchaseError: v,
            setCurrency: E,
            subscriptionMetadataRequest: N,
        } = (0, C.P5)(),
        I = (0, W.A)(),
        T = (0, c.S3)();
    H()(null != I, "Expected plan to be selected");
    let _ = l.useRef(null),
        [R, B] = (0, L.A)(!1, 500),
        w = (0, G.mx)(),
        U = (0, u.bg)(T?.flags ?? 0);
    l.useEffect(() => {
        null != v && null != _.current && _.current.scrollIntoView({ behavior: "smooth" });
    }, [v]);
    let F = l.useCallback(
            (e) => {
                S(e ?? null), a(r.pn.CONFIRM);
            },
            [a, S],
        ),
        D = l.useRef(null),
        M = l.useCallback(() => {
            a(r.pn.ADD_PAYMENT_STEPS);
        }, [a]);
    return f === Z.h.PURCHASING
        ? (0, i.jsx)(P.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(y.dZ, {
                      children:
                          null == b
                              ? (0, i.jsx)(V._, {
                                    selectedPlanId: I.id,
                                    planGroup: s,
                                    paymentSources: j,
                                    priceOptions: A,
                                    handlePaymentSourceAdd: M,
                                    metadata: U ? void 0 : N,
                                })
                              : (0, i.jsx)(Y.A, {
                                    premiumSubscription: b,
                                    paymentSources: j,
                                    priceOptions: A,
                                    handlePaymentSourceAdd: M,
                                    planId: I.id,
                                    setHasAcceptedTerms: x,
                                    legalTermsNodeRef: D,
                                    hasLegalTermsFlash: R,
                                    planGroup: s,
                                    currencies: g,
                                    onCurrencyChange: (e) => E(e),
                                    hasOpenInvoice: null != o,
                                    purchaseState: f,
                                    handleClose: m,
                                    shouldUseUnifiedCheckoutUI: !0,
                                }),
                  }),
                  (0, i.jsx)(y.UX, {
                      children: (0, i.jsx)(Q.A, {
                          premiumSubscription: b ?? null,
                          onBack: () => null != n && a(n),
                          onNext: F,
                          legalTermsNodeRef: D,
                          flashLegalTerms: () => B(!0),
                          analyticsLocation: p,
                          baseAnalyticsData: d,
                          flowStartTime: h.startTime,
                          planGroup: s,
                          openInvoiceId: o,
                          metadata: U ? void 0 : N,
                          backButtonEligible: t,
                          invoiceError: w,
                          disablePurchase: N?.guild_id == null && !U,
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
            options: { useBreadcrumbLabel: () => S.intl.string(S.t["5LD2+B"]) },
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
            options: { renderHeader: !0, useBreadcrumbLabel: () => S.intl.string(S.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(R, { showBenefits: !n, ...e }) },
    ];
}
