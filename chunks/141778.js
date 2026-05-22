n.d(t, { getApplicationPaymentSteps: () => q });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    s = n(735305),
    a = n(7764);
n(938796);
var o = n(17928),
    c = n(241524),
    d = n(427675),
    u = n(163437),
    p = n(897904),
    m = n(821609),
    x = n(534514),
    h = n(834730),
    f = n(701273),
    S = n(375708),
    b = n(425013);
let g = (e) => {
    let { onConfirm: t, onCancel: n, title: l, subtitle: r, confirmCta: s, showOpenDiscord: a = !0 } = e;
    return (0, i.jsxs)("div", {
        className: b.RP,
        children: [
            (0, i.jsx)(x.D, { className: b.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(h.E, { className: b.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: b.UD,
                children: [
                    a &&
                        (0, i.jsx)(m.$, {
                            variant: "primary",
                            text: S.intl.string(S.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, f.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: s, fullWidth: !0, onClick: t }),
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
            (0, i.jsx)(h.E, {
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
                            onClick: () => (0, f.A)("application_sub_mweb_success_modal"),
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
    y = n(19311),
    E = n(482132),
    k = n(376747);
function v(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: s, selectedStoreListing: a, application: m } = (0, C.P5)(),
        x = (0, d.S3)(),
        h = (0, c.A)(k.Y),
        f = (0, o.bG)([A.A], () => A.A.getGuild(s?.guild_id)),
        b = l.useCallback(() => t(r.pn.REVIEW), [t]);
    if (null == x) return null;
    let j = (0, u.bg)(x.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.dZ, {
                children: h
                    ? (0, i.jsx)(g, {
                          confirmCta: S.intl.string(S.t.PBHFSq),
                          onConfirm: b,
                          onCancel: n,
                          title: S.intl.format(S.t["6n6oXA"], { tier: x.name }),
                          subtitle: j
                              ? S.intl.string(S.t.lzAoKB)
                              : S.intl.formatToPlainString(S.t["GqaY/j"], { guildName: f?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(p.Uf, {
                          icon: a?.thumbnail,
                          storeListingBenefits: a?.benefits,
                          application: m ?? void 0,
                          title: S.intl.format(S.t.haiCxc, { tier: x.name }),
                          subtitle: j ? S.intl.string(S.t.RvtbP5) : S.intl.string(S.t.zY39Zu),
                          description: j
                              ? S.intl.formatToPlainString(S.t.QCe4rY, { applicationName: m?.name })
                              : S.intl.string(S.t.n1Pu8C),
                      }),
            }),
            !h &&
                (0, i.jsx)(E.UX, {
                    children: (0, i.jsx)(y.Ay, {
                        onBack: n,
                        backText: S.intl.string(S.t.TQBY1J),
                        onPrimary: b,
                        primaryCTA: y.ti.CONTINUE,
                        primaryText: S.intl.string(S.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var N = n(775602),
    I = n(671744),
    P = n(21161),
    T = n(534479),
    _ = n(921925);
function R(e) {
    let t,
        n,
        { showBenefits: s, handleClose: a, onSubscriptionConfirmation: o } = e,
        { selectedStoreListing: m, application: x } = (0, C.P5)(),
        { readySlideId: h, updatedSubscription: f } = (0, I.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        b = (0, d.S3)(),
        A = (0, c.A)(k.Y),
        { createMultipleConfettiAt: v } = l.useContext(P.x),
        R = b?.name ?? "",
        B = () => {
            a(), o?.();
        },
        w = h === r.pn.CONFIRM,
        F = (0, u.bg)(b?.flags ?? 0),
        U =
            null != m && m.benefits.length > 0
                ? S.intl.formatToPlainString(S.t["+IQQVM"], { benefitCount: m.benefits.length })
                : null;
    return (
        s
            ? A
                ? (t = (0, i.jsx)(g, {
                      title: S.intl.format(S.t.ea6tZr, { tierName: R }),
                      subtitle:
                          null != m && m.benefits.length > 0
                              ? S.intl.formatToPlainString(S.t.HNepft, { benefits: U })
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
                                description: F
                                    ? S.intl.format(S.t["MAtQk/"], { applicationName: x?.name })
                                    : S.intl.format(S.t.vHkMF4, { tier: R }),
                            })
                          : (0, i.jsx)(T.A, {})),
                  (n = (0, i.jsx)(y.Ay, {
                      onPrimary: B,
                      primaryCTA: y.ti.CONTINUE,
                      primaryText: S.intl.string(S.t["JtWl+a"]),
                  })))
            : (t = A
                  ? (0, i.jsx)(j, { tierName: R, onConfirm: B, subscription: f })
                  : (0, i.jsx)(p.XG, { tierName: R, onConfirm: B, subscription: f })),
        l.useEffect(() => {
            N.A.useReducedMotion && w && v(window.innerWidth / 2, window.innerHeight / 2);
        }, [v, w]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(E.dZ, { children: [(0, i.jsx)(_.A, {}), t] }),
                null != n && (0, i.jsx)(E.UX, { children: n }),
            ],
        })
    );
}
var B = n(545075),
    w = n(655857),
    F = n(97352),
    U = n(428262),
    D = n(937008),
    M = n(615310);
function O(e) {
    let { initialStep: t, initialPlanId: n, guildId: r, setAnalyticsData: s } = e,
        {
            selectedSkuId: a,
            setSelectedSkuId: o,
            setSelectedPlanId: c,
            priceOptions: d,
        } = (0, I.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: u, subscriptionPriceOptionsLoading: p, displayCurrency: m } = (0, w.Jn)(),
        { blockedPayments: x, hasFetchedSubscriptions: h, setSubscriptionMetadataRequest: f } = (0, C.P5)(),
        S = (0, M.l)(),
        { isGift: b } = (0, D.Pv)(),
        [g, j] = l.useState(!h || !u || p);
    return (l.useEffect(() => {
        j(!h || !u || p);
    }, [p, u, h]),
    l.useEffect(() => {
        null != r && f({ guild_id: r });
    }, [r, f]),
    l.useEffect(() => {
        c(n);
        let e = null != n ? F.A.get(n) : null;
        g ||
            x ||
            (s((t) => {
                let n = null != e ? (0, U.y8)(e.id, !1, b, { paymentSourceId: d.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: m };
            }),
            null != e && (o(e?.skuId), S(t)));
    }, [x, n, b, g, d, m, a, s, c, o, S, t]),
    g)
        ? (0, i.jsx)(T.A, {})
        : x
          ? (0, i.jsx)(B.oO, {})
          : null;
}
var H = n(284009),
    L = n.n(H),
    G = n(304072),
    W = n(426398),
    Y = n(666646),
    Z = n(558620),
    Q = n(427858),
    V = n(566980),
    X = n(871084),
    z = n(367160);
function $(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: s,
            planGroup: a,
            openInvoiceId: o,
            analyticsData: c,
            analyticsLocation: p,
            handleClose: m,
        } = e,
        {
            setHasAcceptedTerms: x,
            purchaseState: h,
            contextMetadata: f,
            purchaseError: S,
            setUpdatedSubscription: b,
            setCurrency: g,
        } = (0, I.t4)((e) => ({
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
            setCurrency: e.setCheckoutCurrency,
        })),
        { paymentSources: j } = (0, W.jm)(),
        { dropdownCurrencies: A } = (0, w.Jn)(),
        { activeSubscription: y, subscriptionMetadataRequest: k } = (0, C.P5)(),
        v = (0, Z.A)(),
        N = (0, d.S3)();
    L()(null != v, "Expected plan to be selected");
    let P = l.useRef(null),
        [_, R] = (0, G.A)(!1, 500),
        B = (0, Y.mx)(),
        F = (0, u.bg)(N?.flags ?? 0);
    l.useEffect(() => {
        null != S && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
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
    return h === V.h.PURCHASING
        ? (0, i.jsx)(T.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E.dZ, {
                      children:
                          null == y
                              ? (0, i.jsx)(z._, {
                                    selectedPlanId: v.id,
                                    planGroup: a,
                                    paymentSources: j,
                                    handlePaymentSourceAdd: M,
                                    metadata: F ? void 0 : k,
                                })
                              : (0, i.jsx)(Q.A, {
                                    premiumSubscription: y,
                                    paymentSources: j,
                                    handlePaymentSourceAdd: M,
                                    planId: v.id,
                                    setHasAcceptedTerms: x,
                                    legalTermsNodeRef: D,
                                    hasLegalTermsFlash: _,
                                    planGroup: a,
                                    currencies: A,
                                    onCurrencyChange: (e) => g(e),
                                    hasOpenInvoice: null != o,
                                    purchaseState: h,
                                    handleClose: m,
                                    shouldUseUnifiedCheckoutUI: !0,
                                }),
                  }),
                  (0, i.jsx)(E.UX, {
                      children: (0, i.jsx)(X.A, {
                          premiumSubscription: y ?? null,
                          onBack: () => null != n && s(n),
                          onNext: U,
                          legalTermsNodeRef: D,
                          flashLegalTerms: () => R(!0),
                          analyticsLocation: p,
                          baseAnalyticsData: c,
                          flowStartTime: f.startTime,
                          planGroup: a,
                          openInvoiceId: o,
                          metadata: F ? void 0 : k,
                          backButtonEligible: t,
                          invoiceError: B,
                          disablePurchase: k?.guild_id == null && !F,
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
            renderStep: (e) => (0, i.jsx)(O, { initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW, guildId: t, ...e }),
        },
        {
            key: r.pn.BENEFITS,
            renderStep: (e) => (0, i.jsx)(v, { ...e }),
            options: { useBreadcrumbLabel: () => S.intl.string(S.t["5LD2+B"]) },
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
            options: { renderHeader: !0, useBreadcrumbLabel: () => S.intl.string(S.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(R, { showBenefits: !n, ...e }) },
    ];
}
