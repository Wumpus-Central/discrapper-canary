n.d(t, { getApplicationPaymentSteps: () => ee });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    a = n(735305),
    s = n(7764);
n(938796);
var o = n(17928),
    c = n(241524),
    d = n(31823),
    u = n(266060),
    p = n(427675),
    m = n(163437),
    x = n(897904),
    h = n(821609),
    f = n(534514),
    S = n(834730),
    b = n(701273),
    g = n(375708),
    j = n(425013);
let A = (e) => {
    let { onConfirm: t, onCancel: n, title: l, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, i.jsxs)("div", {
        className: j.RP,
        children: [
            (0, i.jsx)(f.D, { className: j.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(S.E, { className: j.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: j.UD,
                children: [
                    s &&
                        (0, i.jsx)(h.$, {
                            variant: "primary",
                            text: g.intl.string(g.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, b.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(h.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(h.$, {
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
function C(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, i.jsxs)("div", {
        className: j.RP,
        children: [
            (0, i.jsx)(f.D, {
                className: j.RS,
                variant: "heading-lg/extrabold",
                children: g.intl.format(g.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(S.E, {
                className: j.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: g.intl.format(g.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: j.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: j.__invalid_openDiscordButton,
                        children: (0, i.jsx)(h.$, {
                            variant: "primary",
                            text: g.intl.string(g.t["8L5bZG"]),
                            onClick: () => (0, b.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(h.$, { variant: "secondary", text: g.intl.string(g.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var v = n(71393),
    y = n(19311),
    E = n(482132),
    k = n(975965),
    I = n(376747);
function N(e) {
    let { handleStepChange: t, handleClose: n } = e,
        a = (0, u.K)(),
        { subscriptionMetadataRequest: s } = (0, k.l)(),
        { application: h } = (0, d.V)(),
        f = (0, p.S3)(),
        S = (0, c.A)(I.Y),
        b = (0, o.bG)([v.A], () => v.A.getGuild(s?.guild_id)),
        j = l.useCallback(() => t(r.pn.REVIEW), [t]);
    if (null == f) return null;
    let C = (0, m.bg)(f.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.dZ, {
                children: S
                    ? (0, i.jsx)(A, {
                          confirmCta: g.intl.string(g.t.PBHFSq),
                          onConfirm: j,
                          onCancel: n,
                          title: g.intl.format(g.t["6n6oXA"], { tier: f.name }),
                          subtitle: C
                              ? g.intl.string(g.t.lzAoKB)
                              : g.intl.formatToPlainString(g.t["GqaY/j"], { guildName: b?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(x.Uf, {
                          icon: a?.thumbnail,
                          storeListingBenefits: a?.benefits,
                          application: h ?? void 0,
                          title: g.intl.format(g.t.haiCxc, { tier: f.name }),
                          subtitle: C ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                          description: C
                              ? g.intl.formatToPlainString(g.t.QCe4rY, { applicationName: h?.name })
                              : g.intl.string(g.t.n1Pu8C),
                      }),
            }),
            !S &&
                (0, i.jsx)(E.UX, {
                    children: (0, i.jsx)(y.Ay, {
                        onBack: n,
                        backText: g.intl.string(g.t.TQBY1J),
                        onPrimary: j,
                        primaryCTA: y.ti.CONTINUE,
                        primaryText: g.intl.string(g.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var T = n(775602),
    P = n(571878),
    _ = n(21161),
    R = n(534479),
    w = n(921925);
function B(e) {
    let t,
        n,
        { showBenefits: a, handleClose: s, onSubscriptionConfirmation: o } = e,
        h = (0, u.K)(),
        { application: f } = (0, d.V)(),
        { readySlideId: S, updatedSubscription: b } = (0, P.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        j = (0, p.S3)(),
        v = (0, c.A)(I.Y),
        { createMultipleConfettiAt: k } = l.useContext(_.x),
        N = j?.name ?? "",
        B = () => {
            s(), o?.();
        },
        F = S === r.pn.CONFIRM,
        U = (0, m.bg)(j?.flags ?? 0),
        D =
            null != h && h.benefits.length > 0
                ? g.intl.formatToPlainString(g.t["+IQQVM"], { benefitCount: h.benefits.length })
                : null;
    return (
        a
            ? v
                ? (t = (0, i.jsx)(A, {
                      title: g.intl.format(g.t.ea6tZr, { tierName: N }),
                      subtitle:
                          null != h && h.benefits.length > 0
                              ? g.intl.formatToPlainString(g.t.HNepft, { benefits: D })
                              : null,
                      onConfirm: B,
                      confirmCta: g.intl.string(g.t.nlkywz),
                  }))
                : ((t =
                      null != h && null != f
                          ? (0, i.jsx)(x.Uf, {
                                icon: h.thumbnail,
                                storeListingBenefits: h.benefits,
                                application: f,
                                title: g.intl.format(g.t["Q+qktS"], { tier: N }),
                                subtitle: g.intl.string(g.t.ECKxXU),
                                description: U
                                    ? g.intl.format(g.t["MAtQk/"], { applicationName: f?.name })
                                    : g.intl.format(g.t.vHkMF4, { tier: N }),
                            })
                          : (0, i.jsx)(R.A, {})),
                  (n = (0, i.jsx)(y.Ay, {
                      onPrimary: B,
                      primaryCTA: y.ti.CONTINUE,
                      primaryText: g.intl.string(g.t["JtWl+a"]),
                  })))
            : (t = v
                  ? (0, i.jsx)(C, { tierName: N, onConfirm: B, subscription: b })
                  : (0, i.jsx)(x.XG, { tierName: N, onConfirm: B, subscription: b })),
        l.useEffect(() => {
            T.A.useReducedMotion && F && k(window.innerWidth / 2, window.innerHeight / 2);
        }, [k, F]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(E.dZ, { children: [(0, i.jsx)(w.A, {}), t] }),
                null != n && (0, i.jsx)(E.UX, { children: n }),
            ],
        })
    );
}
var F = n(86379),
    U = n(545075),
    D = n(655857),
    M = n(97352),
    H = n(428262),
    O = n(937008),
    L = n(121005),
    G = n(615310);
function W(e) {
    let { initialStep: t, initialPlanId: n, guildId: r, setAnalyticsData: a } = e,
        {
            selectedSkuId: s,
            setSelectedSkuId: o,
            setSelectedPlanId: c,
            priceOptions: d,
        } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: u, subscriptionPriceOptionsLoading: p, displayCurrency: m } = (0, D.Jn)(),
        { setSubscriptionMetadataRequest: x } = (0, k.l)(),
        h = (0, F.Hp)(),
        f = (0, L.A)(),
        S = (0, G.l)(),
        { isGift: b } = (0, O.Pv)(),
        [g, j] = l.useState(!f || !u || p);
    return (l.useEffect(() => {
        j(!f || !u || p);
    }, [p, u, f]),
    l.useEffect(() => {
        null != r && x({ guild_id: r });
    }, [r, x]),
    l.useEffect(() => {
        c(n);
        let e = null != n ? M.A.get(n) : null;
        g ||
            h ||
            (a((t) => {
                let n = null != e ? (0, H.y8)(e.id, !1, b, { paymentSourceId: d.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: m };
            }),
            null != e && (o(e?.skuId), S(t)));
    }, [h, n, b, g, d, m, s, a, c, o, S, t]),
    g)
        ? (0, i.jsx)(R.A, {})
        : h
          ? (0, i.jsx)(U.oO, {})
          : null;
}
var Y = n(304072),
    V = n(71804),
    Z = n(426398),
    Q = n(666646),
    X = n(558620),
    z = n(427858),
    K = n(566980),
    $ = n(871084),
    q = n(367160);
function J(e) {
    let {
            backButtonEligible: t,
            prevStep: n,
            handleStepChange: a,
            planGroup: s,
            openInvoiceId: o,
            analyticsData: c,
            analyticsLocation: d,
            handleClose: u,
        } = e,
        {
            setHasAcceptedTerms: x,
            purchaseState: h,
            contextMetadata: f,
            purchaseError: S,
            setUpdatedSubscription: b,
            setCurrency: g,
            activeSubscription: j,
        } = (0, P.t4)((e) => ({
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            purchaseState: e.purchaseState,
            contextMetadata: e.contextMetadata,
            purchaseError: e.purchaseError,
            setUpdatedSubscription: e.setUpdatedSubscription,
            setCurrency: e.setCheckoutCurrency,
            activeSubscription: e.activeSubscription,
        })),
        { paymentSources: A } = (0, Z.jm)(),
        { dropdownCurrencies: C } = (0, D.Jn)(),
        { subscriptionMetadataRequest: v } = (0, k.l)(),
        y = (0, X.A)(),
        I = (0, p.S3)();
    if (null == y)
        throw new V.v({ message: "Expected plan to be selected", extraSentryInformation: { selectedPlan: y } });
    let N = l.useRef(null),
        [T, _] = (0, Y.A)(!1, 500),
        w = (0, Q.mx)(),
        B = (0, m.bg)(I?.flags ?? 0);
    l.useEffect(() => {
        null != S && null != N.current && N.current.scrollIntoView({ behavior: "smooth" });
    }, [S]);
    let F = l.useCallback(
            (e) => {
                b(e ?? null), a(r.pn.CONFIRM);
            },
            [a, b],
        ),
        U = l.useRef(null),
        M = l.useCallback(() => {
            a(r.pn.ADD_PAYMENT_STEPS);
        }, [a]);
    return h === K.h.PURCHASING
        ? (0, i.jsx)(R.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E.dZ, {
                      children:
                          null == j
                              ? (0, i.jsx)(q._, {
                                    selectedPlanId: y.id,
                                    planGroup: s,
                                    paymentSources: A,
                                    handlePaymentSourceAdd: M,
                                    metadata: B ? void 0 : v,
                                })
                              : (0, i.jsx)(z.A, {
                                    premiumSubscription: j,
                                    paymentSources: A,
                                    handlePaymentSourceAdd: M,
                                    planId: y.id,
                                    setHasAcceptedTerms: x,
                                    legalTermsNodeRef: U,
                                    hasLegalTermsFlash: T,
                                    planGroup: s,
                                    currencies: C,
                                    onCurrencyChange: (e) => g(e),
                                    hasOpenInvoice: null != o,
                                    purchaseState: h,
                                    handleClose: u,
                                    shouldUseUnifiedCheckoutUI: !0,
                                }),
                  }),
                  (0, i.jsx)(E.UX, {
                      children: (0, i.jsx)($.A, {
                          premiumSubscription: j ?? null,
                          onBack: () => null != n && a(n),
                          onNext: F,
                          legalTermsNodeRef: U,
                          flashLegalTerms: () => _(!0),
                          analyticsLocation: d,
                          baseAnalyticsData: c,
                          flowStartTime: f.startTime,
                          planGroup: s,
                          openInvoiceId: o,
                          metadata: B ? void 0 : v,
                          backButtonEligible: t,
                          invoiceError: w,
                          disablePurchase: v?.guild_id == null && !B,
                          onPaymentSourceAdd: M,
                      }),
                  }),
              ],
          });
}
function ee(e) {
    let { guildId: t, showBenefitsFirst: n } = e;
    return [
        {
            key: null,
            renderStep: (e) => (0, i.jsx)(W, { initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW, guildId: t, ...e }),
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
                (0, i.jsx)(J, { backButtonEligible: !!n || void 0, prevStep: n ? r.pn.BENEFITS : void 0, ...e }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(B, { showBenefits: !n, ...e }) },
    ];
}
