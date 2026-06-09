n.d(e, { getApplicationPaymentSteps: () => tt });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    a = n(735305),
    s = n(7764);
n(938796);
var o = n(17928),
    c = n(241524),
    u = n(31823),
    d = n(266060),
    p = n(427675),
    m = n(163437),
    x = n(897904),
    f = n(821609),
    h = n(534514),
    S = n(834730),
    b = n(701273),
    g = n(375708),
    j = n(425013);
let v = (t) => {
    let { onConfirm: e, onCancel: n, title: l, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = t;
    return (0, i.jsxs)("div", {
        className: j.RP,
        children: [
            (0, i.jsx)(h.D, { className: j.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(S.E, { className: j.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: j.UD,
                children: [
                    s &&
                        (0, i.jsx)(f.$, {
                            variant: "primary",
                            text: g.intl.string(g.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, b.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(f.$, { variant: "secondary", text: a, fullWidth: !0, onClick: e }),
                    null != n &&
                        (0, i.jsx)(f.$, {
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
function y(t) {
    let { onConfirm: e, tierName: n, subscription: l } = t;
    return (0, i.jsxs)("div", {
        className: j.RP,
        children: [
            (0, i.jsx)(h.D, {
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
                        children: (0, i.jsx)(f.$, {
                            variant: "primary",
                            text: g.intl.string(g.t["8L5bZG"]),
                            onClick: () => (0, b.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(f.$, { variant: "secondary", text: g.intl.string(g.t.nlkywz), onClick: e }),
                ],
            }),
        ],
    });
}
var A = n(71393),
    C = n(19311),
    E = n(482132),
    k = n(975965),
    I = n(376747);
function N(t) {
    let { handleStepChange: e, handleClose: n } = t,
        a = (0, d.K)(),
        { subscriptionMetadataRequest: s } = (0, k.l)(),
        { application: f } = (0, u.V)(),
        h = (0, p.S3)(),
        S = (0, c.A)(I.Y),
        b = (0, o.bG)([A.A], () => A.A.getGuild(s?.guild_id)),
        j = l.useCallback(() => e(r.pn.REVIEW), [e]);
    if (null == h) return null;
    let y = (0, m.bg)(h.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.dZ, {
                children: S
                    ? (0, i.jsx)(v, {
                          confirmCta: g.intl.string(g.t.PBHFSq),
                          onConfirm: j,
                          onCancel: n,
                          title: g.intl.format(g.t["6n6oXA"], { tier: h.name }),
                          subtitle: y
                              ? g.intl.string(g.t.lzAoKB)
                              : g.intl.formatToPlainString(g.t["GqaY/j"], { guildName: b?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(x.Uf, {
                          icon: a?.thumbnail,
                          storeListingBenefits: a?.benefits,
                          application: f ?? void 0,
                          title: g.intl.format(g.t.haiCxc, { tier: h.name }),
                          subtitle: y ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                          description: y
                              ? g.intl.formatToPlainString(g.t.QCe4rY, { applicationName: f?.name })
                              : g.intl.string(g.t.n1Pu8C),
                      }),
            }),
            !S &&
                (0, i.jsx)(E.UX, {
                    children: (0, i.jsx)(C.Ay, {
                        onBack: n,
                        backText: g.intl.string(g.t.TQBY1J),
                        onPrimary: j,
                        primaryCTA: C.ti.CONTINUE,
                        primaryText: g.intl.string(g.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var P = n(775602),
    T = n(211159),
    _ = n(21161),
    w = n(534479),
    R = n(921925);
function B(t) {
    let e,
        n,
        { showBenefits: a, handleClose: s, onSubscriptionConfirmation: o } = t,
        f = (0, d.K)(),
        { application: h } = (0, u.V)(),
        { readySlideId: S, updatedSubscription: b } = (0, T.t4)((t) => ({
            readySlideId: t.readySlideId,
            updatedSubscription: t.updatedSubscription,
        })),
        j = (0, p.S3)(),
        A = (0, c.A)(I.Y),
        { createMultipleConfettiAt: k } = l.useContext(_.x),
        N = j?.name ?? "",
        B = () => {
            s(), o?.();
        },
        F = S === r.pn.CONFIRM,
        D = (0, m.bg)(j?.flags ?? 0),
        M =
            null != f && f.benefits.length > 0
                ? g.intl.formatToPlainString(g.t["+IQQVM"], { benefitCount: f.benefits.length })
                : null;
    return (
        a
            ? A
                ? (e = (0, i.jsx)(v, {
                      title: g.intl.format(g.t.ea6tZr, { tierName: N }),
                      subtitle:
                          null != f && f.benefits.length > 0
                              ? g.intl.formatToPlainString(g.t.HNepft, { benefits: M })
                              : null,
                      onConfirm: B,
                      confirmCta: g.intl.string(g.t.nlkywz),
                  }))
                : ((e =
                      null != f && null != h
                          ? (0, i.jsx)(x.Uf, {
                                icon: f.thumbnail,
                                storeListingBenefits: f.benefits,
                                application: h,
                                title: g.intl.format(g.t["Q+qktS"], { tier: N }),
                                subtitle: g.intl.string(g.t.ECKxXU),
                                description: D
                                    ? g.intl.format(g.t["MAtQk/"], { applicationName: h?.name })
                                    : g.intl.format(g.t.vHkMF4, { tier: N }),
                            })
                          : (0, i.jsx)(w.A, {})),
                  (n = (0, i.jsx)(C.Ay, {
                      onPrimary: B,
                      primaryCTA: C.ti.CONTINUE,
                      primaryText: g.intl.string(g.t["JtWl+a"]),
                  })))
            : (e = A
                  ? (0, i.jsx)(y, { tierName: N, onConfirm: B, subscription: b })
                  : (0, i.jsx)(x.XG, { tierName: N, onConfirm: B, subscription: b })),
        l.useEffect(() => {
            P.A.useReducedMotion && F && k(window.innerWidth / 2, window.innerHeight / 2);
        }, [k, F]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(E.dZ, { children: [(0, i.jsx)(R.A, {}), e] }),
                null != n && (0, i.jsx)(E.UX, { children: n }),
            ],
        })
    );
}
var F = n(86379),
    D = n(545075),
    M = n(655857),
    U = n(97352),
    O = n(428262),
    G = n(937008),
    L = n(121005),
    H = n(615310);
function W(t) {
    let { initialStep: e, initialPlanId: n, guildId: r, setAnalyticsData: a } = t,
        {
            selectedSkuId: s,
            setSelectedSkuId: o,
            setSelectedPlanId: c,
            priceOptions: u,
        } = (0, T.t4)((t) => ({
            selectedSkuId: t.selectedSkuId,
            setSelectedSkuId: t.setSelectedSkuId,
            setSelectedPlanId: t.setSelectedPlanId,
            priceOptions: t.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: d, subscriptionPriceOptionsLoading: p, displayCurrency: m } = (0, M.Jn)(),
        { setSubscriptionMetadataRequest: x } = (0, k.l)(),
        f = (0, F.Hp)(),
        h = (0, L.A)(),
        S = (0, H.l)(),
        { isGift: b } = (0, G.Pv)(),
        [g, j] = l.useState(!h || !d || p);
    return (l.useEffect(() => {
        j(!h || !d || p);
    }, [p, d, h]),
    l.useEffect(() => {
        null != r && x({ guild_id: r });
    }, [r, x]),
    l.useEffect(() => {
        c(n);
        let t = null != n ? U.A.get(n) : null;
        g ||
            f ||
            (a((e) => {
                let n = null != t ? (0, O.y8)(t.id, !1, b, { paymentSourceId: u.paymentSourceId }) : void 0;
                return { ...e, subscription_plan_id: t?.id, price: n?.amount, regular_price: t?.price, currency: m };
            }),
            null != t && (o(t?.skuId), S(e)));
    }, [f, n, b, g, u, m, s, a, c, o, S, e]),
    g)
        ? (0, i.jsx)(w.A, {})
        : f
          ? (0, i.jsx)(D.oO, {})
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
    q = n(953761);
function J(t) {
    let {
            backButtonEligible: e,
            prevStep: n,
            handleStepChange: a,
            planGroup: s,
            openInvoiceId: o,
            analyticsData: c,
            analyticsLocation: u,
        } = t,
        {
            purchaseState: d,
            contextMetadata: x,
            purchaseError: f,
            setUpdatedSubscription: h,
            setCurrency: S,
            activeSubscription: b,
        } = (0, T.t4)((t) => ({
            purchaseState: t.purchaseState,
            contextMetadata: t.contextMetadata,
            purchaseError: t.purchaseError,
            setUpdatedSubscription: t.setUpdatedSubscription,
            setCurrency: t.setCheckoutCurrency,
            activeSubscription: t.activeSubscription,
        })),
        { paymentSources: g } = (0, Z.jm)(),
        { dropdownCurrencies: j } = (0, M.Jn)(),
        { subscriptionMetadataRequest: v } = (0, k.l)(),
        y = (0, X.A)(),
        A = (0, p.S3)();
    if (null == y)
        throw new V.v({ message: "Expected plan to be selected", extraSentryInformation: { selectedPlan: y } });
    let C = l.useRef(null),
        [I, N] = (0, Y.A)(!1, 500),
        P = (0, Q.mx)(),
        _ = (0, m.bg)(A?.flags ?? 0);
    l.useEffect(() => {
        null != f && null != C.current && C.current.scrollIntoView({ behavior: "smooth" });
    }, [f]);
    let R = l.useCallback(
            (t) => {
                h(t ?? null), a(r.pn.CONFIRM);
            },
            [a, h],
        ),
        B = l.useRef(null),
        F = l.useCallback(() => {
            a(r.pn.ADD_PAYMENT_STEPS);
        }, [a]);
    return d === K.h.PURCHASING
        ? (0, i.jsx)(w.A, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(E.dZ, {
                      children:
                          null == b
                              ? (0, i.jsx)(q._, {
                                    selectedPlanId: y.id,
                                    planGroup: s,
                                    paymentSources: g,
                                    handlePaymentSourceAdd: F,
                                    metadata: _ ? void 0 : v,
                                })
                              : (0, i.jsx)(z.A, {
                                    premiumSubscription: b,
                                    paymentSources: g,
                                    handlePaymentSourceAdd: F,
                                    planId: y.id,
                                    planGroup: s,
                                    currencies: j,
                                    onCurrencyChange: (t) => S(t),
                                    hasOpenInvoice: null != o,
                                    purchaseState: d,
                                }),
                  }),
                  (0, i.jsx)(E.UX, {
                      children: (0, i.jsx)($.A, {
                          premiumSubscription: b ?? null,
                          onBack: () => null != n && a(n),
                          onNext: R,
                          legalTermsNodeRef: B,
                          flashLegalTerms: () => N(!0),
                          analyticsLocation: u,
                          baseAnalyticsData: c,
                          flowStartTime: x.startTime,
                          planGroup: s,
                          openInvoiceId: o,
                          metadata: _ ? void 0 : v,
                          backButtonEligible: e,
                          invoiceError: P,
                          disablePurchase: v?.guild_id == null && !_,
                          onPaymentSourceAdd: F,
                      }),
                  }),
              ],
          });
}
function tt(t) {
    let { guildId: e, showBenefitsFirst: n } = t;
    return [
        {
            key: null,
            renderStep: (t) => (0, i.jsx)(W, { initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW, guildId: e, ...t }),
        },
        {
            key: r.pn.BENEFITS,
            renderStep: (t) => (0, i.jsx)(N, { ...t }),
            options: { useBreadcrumbLabel: () => g.intl.string(g.t["5LD2+B"]) },
        },
        {
            key: r.pn.ADD_PAYMENT_STEPS,
            renderStep: (t) =>
                (0, i.jsx)(a.x, { ...t, breadcrumbSteps: [r.pn.ADD_PAYMENT_STEPS, r.pn.REVIEW, r.pn.CONFIRM] }),
            options: { renderHeader: !0 },
        },
        ...s.hh,
        {
            key: r.pn.REVIEW,
            renderStep: (t) =>
                (0, i.jsx)(J, { backButtonEligible: !!n || void 0, prevStep: n ? r.pn.BENEFITS : void 0, ...t }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (t) => (0, i.jsx)(B, { showBenefits: !n, ...t }) },
    ];
}
