n.d(t, { getApplicationPaymentSteps: () => q });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    s = n(735305),
    a = n(7764);
n(938796);
var o = n(17928),
    c = n(241524),
    d = n(266060),
    u = n(427675),
    p = n(163437),
    m = n(897904),
    x = n(821609),
    h = n(534514),
    f = n(834730),
    S = n(701273),
    b = n(375708),
    g = n(425013);
let j = (e) => {
    let { onConfirm: t, onCancel: n, title: l, subtitle: r, confirmCta: s, showOpenDiscord: a = !0 } = e;
    return (0, i.jsxs)("div", {
        className: g.RP,
        children: [
            (0, i.jsx)(h.D, { className: g.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(f.E, { className: g.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: g.UD,
                children: [
                    a &&
                        (0, i.jsx)(x.$, {
                            variant: "primary",
                            text: b.intl.string(b.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, S.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(x.$, { variant: "secondary", text: s, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(x.$, {
                            variant: "secondary",
                            text: b.intl.string(b.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function A(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, i.jsxs)("div", {
        className: g.RP,
        children: [
            (0, i.jsx)(h.D, {
                className: g.RS,
                variant: "heading-lg/extrabold",
                children: b.intl.format(b.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(f.E, {
                className: g.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: b.intl.format(b.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: g.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.__invalid_openDiscordButton,
                        children: (0, i.jsx)(x.$, {
                            variant: "primary",
                            text: b.intl.string(b.t["8L5bZG"]),
                            onClick: () => (0, S.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(x.$, { variant: "secondary", text: b.intl.string(b.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var C = n(71393),
    y = n(536302),
    E = n(19311),
    k = n(482132),
    v = n(376747);
function N(e) {
    let { handleStepChange: t, handleClose: n } = e,
        s = (0, d.K)(),
        { subscriptionMetadataRequest: a, application: x } = (0, y.P5)(),
        h = (0, u.S3)(),
        f = (0, c.A)(v.Y),
        S = (0, o.bG)([C.A], () => C.A.getGuild(a?.guild_id)),
        g = l.useCallback(() => t(r.pn.REVIEW), [t]);
    if (null == h) return null;
    let A = (0, p.bg)(h.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.dZ, {
                children: f
                    ? (0, i.jsx)(j, {
                          confirmCta: b.intl.string(b.t.PBHFSq),
                          onConfirm: g,
                          onCancel: n,
                          title: b.intl.format(b.t["6n6oXA"], { tier: h.name }),
                          subtitle: A
                              ? b.intl.string(b.t.lzAoKB)
                              : b.intl.formatToPlainString(b.t["GqaY/j"], { guildName: S?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(m.Uf, {
                          icon: s?.thumbnail,
                          storeListingBenefits: s?.benefits,
                          application: x ?? void 0,
                          title: b.intl.format(b.t.haiCxc, { tier: h.name }),
                          subtitle: A ? b.intl.string(b.t.RvtbP5) : b.intl.string(b.t.zY39Zu),
                          description: A
                              ? b.intl.formatToPlainString(b.t.QCe4rY, { applicationName: x?.name })
                              : b.intl.string(b.t.n1Pu8C),
                      }),
            }),
            !f &&
                (0, i.jsx)(k.UX, {
                    children: (0, i.jsx)(E.Ay, {
                        onBack: n,
                        backText: b.intl.string(b.t.TQBY1J),
                        onPrimary: g,
                        primaryCTA: E.ti.CONTINUE,
                        primaryText: b.intl.string(b.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var I = n(775602),
    P = n(722847),
    T = n(21161),
    _ = n(534479),
    R = n(921925);
function B(e) {
    let t,
        n,
        { showBenefits: s, handleClose: a, onSubscriptionConfirmation: o } = e,
        x = (0, d.K)(),
        { application: h } = (0, y.P5)(),
        { readySlideId: f, updatedSubscription: S } = (0, P.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        g = (0, u.S3)(),
        C = (0, c.A)(v.Y),
        { createMultipleConfettiAt: N } = l.useContext(T.x),
        B = g?.name ?? "",
        w = () => {
            a(), o?.();
        },
        F = f === r.pn.CONFIRM,
        U = (0, p.bg)(g?.flags ?? 0),
        D =
            null != x && x.benefits.length > 0
                ? b.intl.formatToPlainString(b.t["+IQQVM"], { benefitCount: x.benefits.length })
                : null;
    return (
        s
            ? C
                ? (t = (0, i.jsx)(j, {
                      title: b.intl.format(b.t.ea6tZr, { tierName: B }),
                      subtitle:
                          null != x && x.benefits.length > 0
                              ? b.intl.formatToPlainString(b.t.HNepft, { benefits: D })
                              : null,
                      onConfirm: w,
                      confirmCta: b.intl.string(b.t.nlkywz),
                  }))
                : ((t =
                      null != x && null != h
                          ? (0, i.jsx)(m.Uf, {
                                icon: x.thumbnail,
                                storeListingBenefits: x.benefits,
                                application: h,
                                title: b.intl.format(b.t["Q+qktS"], { tier: B }),
                                subtitle: b.intl.string(b.t.ECKxXU),
                                description: U
                                    ? b.intl.format(b.t["MAtQk/"], { applicationName: h?.name })
                                    : b.intl.format(b.t.vHkMF4, { tier: B }),
                            })
                          : (0, i.jsx)(_.A, {})),
                  (n = (0, i.jsx)(E.Ay, {
                      onPrimary: w,
                      primaryCTA: E.ti.CONTINUE,
                      primaryText: b.intl.string(b.t["JtWl+a"]),
                  })))
            : (t = C
                  ? (0, i.jsx)(A, { tierName: B, onConfirm: w, subscription: S })
                  : (0, i.jsx)(m.XG, { tierName: B, onConfirm: w, subscription: S })),
        l.useEffect(() => {
            I.A.useReducedMotion && F && N(window.innerWidth / 2, window.innerHeight / 2);
        }, [N, F]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(k.dZ, { children: [(0, i.jsx)(R.A, {}), t] }),
                null != n && (0, i.jsx)(k.UX, { children: n }),
            ],
        })
    );
}
var w = n(545075),
    F = n(655857),
    U = n(97352),
    D = n(428262),
    M = n(937008),
    O = n(615310);
function H(e) {
    let { initialStep: t, initialPlanId: n, guildId: r, setAnalyticsData: s } = e,
        {
            selectedSkuId: a,
            setSelectedSkuId: o,
            setSelectedPlanId: c,
            priceOptions: d,
        } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: u, subscriptionPriceOptionsLoading: p, displayCurrency: m } = (0, F.Jn)(),
        { blockedPayments: x, hasFetchedSubscriptions: h, setSubscriptionMetadataRequest: f } = (0, y.P5)(),
        S = (0, O.l)(),
        { isGift: b } = (0, M.Pv)(),
        [g, j] = l.useState(!h || !u || p);
    return (l.useEffect(() => {
        j(!h || !u || p);
    }, [p, u, h]),
    l.useEffect(() => {
        null != r && f({ guild_id: r });
    }, [r, f]),
    l.useEffect(() => {
        c(n);
        let e = null != n ? U.A.get(n) : null;
        g ||
            x ||
            (s((t) => {
                let n = null != e ? (0, D.y8)(e.id, !1, b, { paymentSourceId: d.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: m };
            }),
            null != e && (o(e?.skuId), S(t)));
    }, [x, n, b, g, d, m, a, s, c, o, S, t]),
    g)
        ? (0, i.jsx)(_.A, {})
        : x
          ? (0, i.jsx)(w.oO, {})
          : null;
}
var L = n(284009),
    G = n.n(L),
    W = n(304072),
    Y = n(426398),
    Z = n(666646),
    Q = n(558620),
    V = n(427858),
    X = n(566980),
    z = n(871084),
    K = n(367160);
function $(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: s,
            planGroup: a,
            openInvoiceId: o,
            analyticsData: c,
            analyticsLocation: d,
            handleClose: m,
        } = e,
        {
            setHasAcceptedTerms: x,
            purchaseState: h,
            contextMetadata: f,
            purchaseError: S,
            setUpdatedSubscription: b,
            setCurrency: g,
        } = (0, P.t4)((e) => ({
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
            setCurrency: e.setCheckoutCurrency,
        })),
        { paymentSources: j } = (0, Y.jm)(),
        { dropdownCurrencies: A } = (0, F.Jn)(),
        { activeSubscription: C, subscriptionMetadataRequest: E } = (0, y.P5)(),
        v = (0, Q.A)(),
        N = (0, u.S3)();
    G()(null != v, "Expected plan to be selected");
    let I = l.useRef(null),
        [T, R] = (0, W.A)(!1, 500),
        B = (0, Z.mx)(),
        w = (0, p.bg)(N?.flags ?? 0);
    l.useEffect(() => {
        null != S && null != I.current && I.current.scrollIntoView({ behavior: "smooth" });
    }, [S]);
    let U = l.useCallback(
            (e) => {
                b(e ?? null), s(r.pn.CONFIRM);
            },
            [s, b],
        ),
        D = l.useRef(null),
        M = l.useCallback(() => {
            s(r.pn.ADD_PAYMENT_STEPS);
        }, [s]);
    return h === X.h.PURCHASING
        ? (0, i.jsx)(_.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(k.dZ, {
                      children:
                          null == C
                              ? (0, i.jsx)(K._, {
                                    selectedPlanId: v.id,
                                    planGroup: a,
                                    paymentSources: j,
                                    handlePaymentSourceAdd: M,
                                    metadata: w ? void 0 : E,
                                })
                              : (0, i.jsx)(V.A, {
                                    premiumSubscription: C,
                                    paymentSources: j,
                                    handlePaymentSourceAdd: M,
                                    planId: v.id,
                                    setHasAcceptedTerms: x,
                                    legalTermsNodeRef: D,
                                    hasLegalTermsFlash: T,
                                    planGroup: a,
                                    currencies: A,
                                    onCurrencyChange: (e) => g(e),
                                    hasOpenInvoice: null != o,
                                    purchaseState: h,
                                    handleClose: m,
                                    shouldUseUnifiedCheckoutUI: !0,
                                }),
                  }),
                  (0, i.jsx)(k.UX, {
                      children: (0, i.jsx)(z.A, {
                          premiumSubscription: C ?? null,
                          onBack: () => null != n && s(n),
                          onNext: U,
                          legalTermsNodeRef: D,
                          flashLegalTerms: () => R(!0),
                          analyticsLocation: d,
                          baseAnalyticsData: c,
                          flowStartTime: f.startTime,
                          planGroup: a,
                          openInvoiceId: o,
                          metadata: w ? void 0 : E,
                          backButtonEligible: t,
                          invoiceError: B,
                          disablePurchase: E?.guild_id == null && !w,
                          onPaymentSourceAdd: M,
                      }),
                  }),
              ],
          });
}
function q(e) {
    let { guildId: t, showBenefitsFirst: n } = e;
    return [
        {
            key: null,
            renderStep: (e) => (0, i.jsx)(H, { initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW, guildId: t, ...e }),
        },
        {
            key: r.pn.BENEFITS,
            renderStep: (e) => (0, i.jsx)(N, { ...e }),
            options: { useBreadcrumbLabel: () => b.intl.string(b.t["5LD2+B"]) },
        },
        {
            key: r.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, i.jsx)(s.x, { ...e, breadcrumbSteps: [r.pn.ADD_PAYMENT_STEPS, r.pn.REVIEW, r.pn.CONFIRM] }),
            options: { renderHeader: !0 },
        },
        ...a.hh,
        {
            key: r.pn.REVIEW,
            renderStep: (e) =>
                (0, i.jsx)($, { backButtonEligible: !!n || void 0, prevStep: n ? r.pn.BENEFITS : void 0, ...e }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => b.intl.string(b.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(B, { showBenefits: !n, ...e }) },
    ];
}
