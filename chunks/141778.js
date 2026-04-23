n.d(e, { getApplicationPaymentSteps: () => V });
var i = n(627968),
    l = n(64700),
    r = n(166532),
    a = n(735305),
    s = n(939220);
n(938796);
var o = n(17928),
    c = n(241524),
    u = n(427675),
    d = n(163437),
    p = n(490744),
    m = n(821609),
    f = n(534514),
    x = n(834730),
    g = n(701273),
    h = n(985018),
    S = n(425013);
let b = (t) => {
    let { onConfirm: e, onCancel: n, title: l, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = t;
    return (0, i.jsxs)("div", {
        className: S.RP,
        children: [
            (0, i.jsx)(f.D, { className: S.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(x.E, { className: S.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: S.UD,
                children: [
                    s &&
                        (0, i.jsx)(m.$, {
                            variant: "primary",
                            text: h.intl.string(h.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, g.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: a, fullWidth: !0, onClick: e }),
                    null != n &&
                        (0, i.jsx)(m.$, {
                            variant: "secondary",
                            text: h.intl.string(h.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function A(t) {
    let { onConfirm: e, tierName: n, subscription: l } = t;
    return (0, i.jsxs)("div", {
        className: S.RP,
        children: [
            (0, i.jsx)(f.D, {
                className: S.RS,
                variant: "heading-lg/extrabold",
                children: h.intl.format(h.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(x.E, {
                className: S.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: h.intl.format(h.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: S.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: S.__invalid_openDiscordButton,
                        children: (0, i.jsx)(m.$, {
                            variant: "primary",
                            text: h.intl.string(h.t["8L5bZG"]),
                            onClick: () => (0, g.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(m.$, { variant: "secondary", text: h.intl.string(h.t.nlkywz), onClick: e }),
                ],
            }),
        ],
    });
}
var j = n(71393),
    E = n(156312),
    C = n(19311),
    v = n(482132),
    y = n(376747);
function I(t) {
    let { handleStepChange: e, handleClose: n } = t,
        { subscriptionMetadataRequest: a, selectedStoreListing: s, application: m } = (0, E.P5)(),
        f = (0, u.S3)(),
        x = (0, c.A)(y.Y),
        g = (0, o.bG)([j.A], () => j.A.getGuild(a?.guild_id)),
        S = l.useCallback(() => e(r.pn.REVIEW), [e]);
    if (null == f) return null;
    let A = (0, d.bg)(f.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.dZ, {
                children: x
                    ? (0, i.jsx)(b, {
                          confirmCta: h.intl.string(h.t.PBHFSq),
                          onConfirm: S,
                          onCancel: n,
                          title: h.intl.format(h.t["6n6oXA"], { tier: f.name }),
                          subtitle: A
                              ? h.intl.string(h.t.lzAoKB)
                              : h.intl.formatToPlainString(h.t["GqaY/j"], { guildName: g?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(p.Uf, {
                          icon: s?.thumbnail,
                          storeListingBenefits: s?.benefits,
                          application: m ?? void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: f.name }),
                          subtitle: A ? h.intl.string(h.t.RvtbP5) : h.intl.string(h.t.zY39Zu),
                          description: A
                              ? h.intl.formatToPlainString(h.t.QCe4rY, { applicationName: m?.name })
                              : h.intl.string(h.t.n1Pu8C),
                      }),
            }),
            !x &&
                (0, i.jsx)(v.UX, {
                    children: (0, i.jsx)(C.Ay, {
                        onBack: n,
                        backText: h.intl.string(h.t.TQBY1J),
                        onPrimary: S,
                        primaryCTA: C.ti.CONTINUE,
                        primaryText: h.intl.string(h.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var N = n(775602),
    P = n(21161),
    _ = n(534479),
    k = n(921925);
function T(t) {
    let e,
        n,
        { showBenefits: a, handleClose: s, onSubscriptionConfirmation: o } = t,
        { updatedSubscription: m, readySlideId: f, selectedStoreListing: x, application: g } = (0, E.P5)(),
        S = (0, u.S3)(),
        j = (0, c.A)(y.Y),
        { createMultipleConfettiAt: I } = l.useContext(P.x),
        T = S?.name ?? "",
        R = () => {
            s(), o?.();
        },
        w = f === r.pn.CONFIRM,
        B = (0, d.bg)(S?.flags ?? 0),
        D =
            null != x && x.benefits.length > 0
                ? h.intl.formatToPlainString(h.t["+IQQVM"], { benefitCount: x.benefits.length })
                : null;
    return (
        a
            ? j
                ? (e = (0, i.jsx)(b, {
                      title: h.intl.format(h.t.ea6tZr, { tierName: T }),
                      subtitle:
                          null != x && x.benefits.length > 0
                              ? h.intl.formatToPlainString(h.t.HNepft, { benefits: D })
                              : null,
                      onConfirm: R,
                      confirmCta: h.intl.string(h.t.nlkywz),
                  }))
                : ((e =
                      null != x && null != g
                          ? (0, i.jsx)(p.Uf, {
                                icon: x.thumbnail,
                                storeListingBenefits: x.benefits,
                                application: g,
                                title: h.intl.format(h.t["Q+qktS"], { tier: T }),
                                subtitle: h.intl.string(h.t.ECKxXU),
                                description: B
                                    ? h.intl.format(h.t["MAtQk/"], { applicationName: g?.name })
                                    : h.intl.format(h.t.vHkMF4, { tier: T }),
                            })
                          : (0, i.jsx)(_.A, {})),
                  (n = (0, i.jsx)(C.Ay, {
                      onPrimary: R,
                      primaryCTA: C.ti.CONTINUE,
                      primaryText: h.intl.string(h.t["JtWl+a"]),
                  })))
            : (e = j
                  ? (0, i.jsx)(A, { tierName: T, onConfirm: R, subscription: m })
                  : (0, i.jsx)(p.XG, { tierName: T, onConfirm: R, subscription: m })),
        l.useEffect(() => {
            N.A.useReducedMotion && w && I(window.innerWidth / 2, window.innerHeight / 2);
        }, [I, w]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(v.dZ, { children: [(0, i.jsx)(k.A, {}), e] }),
                null != n && (0, i.jsx)(v.UX, { children: n }),
            ],
        })
    );
}
var R = n(545075),
    w = n(94420),
    B = n(97352),
    D = n(927578),
    F = n(937008),
    U = n(615310);
function L(t) {
    let { initialStep: e, initialPlanId: n, guildId: r, setAnalyticsData: a } = t,
        {
            selectedSkuId: s,
            setSelectedSkuId: o,
            setSelectedPlanId: c,
        } = (0, w.t4)((t) => ({
            selectedSkuId: t.selectedSkuId,
            setSelectedSkuId: t.setSelectedSkuId,
            setSelectedPlanId: t.setSelectedPlanId,
        })),
        {
            blockedPayments: u,
            hasFetchedSubscriptions: d,
            hasFetchedSubscriptionPlans: p,
            currencyLoading: m,
            priceOptions: f,
            setSubscriptionMetadataRequest: x,
            displayCurrency: g,
        } = (0, E.P5)(),
        h = (0, U.l)(),
        { isGift: S } = (0, F.Pv)(),
        [b, A] = l.useState(!d || !p || m);
    return (l.useEffect(() => {
        A(!d || !p || m);
    }, [m, p, d]),
    l.useEffect(() => {
        null != r && x({ guild_id: r });
    }, [r, x]),
    l.useEffect(() => {
        c(n);
        let t = null != n ? B.A.get(n) : null;
        b ||
            u ||
            (a((e) => {
                let n = null != t ? (0, D.y8)(t.id, !1, S, { paymentSourceId: f.paymentSourceId }) : void 0;
                return { ...e, subscription_plan_id: t?.id, price: n?.amount, regular_price: t?.price, currency: g };
            }),
            null != t && (o(t?.skuId), h(e)));
    }, [u, n, S, b, f, g, s, a, c, o, h, e]),
    b)
        ? (0, i.jsx)(_.A, {})
        : u
          ? (0, i.jsx)(R.oO, {})
          : null;
}
var O = n(284009),
    H = n.n(O),
    M = n(304072),
    G = n(558620),
    Y = n(427858),
    W = n(566980),
    Q = n(871084),
    Z = n(367160);
function X(t) {
    let {
            backButtonEligible: e,
            prevStep: n,
            handleStepChange: a,
            planGroup: s,
            openInvoiceId: o,
            analyticsData: c,
            analyticsLocation: p,
            handleClose: m,
        } = t,
        {
            activeSubscription: f,
            setUpdatedSubscription: x,
            contextMetadata: g,
            currencies: h,
            paymentSources: S,
            priceOptions: b,
            purchaseError: A,
            setCurrency: j,
            setPurchaseState: C,
            purchaseState: y,
            subscriptionMetadataRequest: I,
            setHasAcceptedTerms: N,
        } = (0, E.P5)(),
        P = (0, G.A)(),
        k = (0, u.S3)();
    H()(null != P, "Expected plan to be selected");
    let T = l.useRef(null),
        [R, w] = (0, M.A)(!1, 500),
        [B, D] = l.useState(null),
        F = (0, d.bg)(k?.flags ?? 0);
    l.useEffect(() => {
        null != A && null != T.current && T.current.scrollIntoView({ behavior: "smooth" });
    }, [A]);
    let U = l.useCallback(
            (t) => {
                x(t), a(r.pn.CONFIRM);
            },
            [a, x],
        ),
        L = l.useRef(null);
    if (y === W.h.PURCHASING) return (0, i.jsx)(_.A, {});
    let O = () => {
        a(r.pn.ADD_PAYMENT_STEPS);
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.dZ, {
                children:
                    null == f
                        ? (0, i.jsx)(Z._, {
                              selectedPlanId: P.id,
                              planGroup: s,
                              paymentSources: S,
                              priceOptions: b,
                              currencies: h,
                              onCurrencyChange: (t) => j(t),
                              handlePaymentSourceAdd: () => a(r.pn.ADD_PAYMENT_STEPS),
                              metadata: F ? void 0 : I,
                          })
                        : (0, i.jsx)(Y.A, {
                              premiumSubscription: f,
                              paymentSources: S,
                              priceOptions: b,
                              onPaymentSourceAdd: O,
                              planId: P.id,
                              setHasAcceptedTerms: N,
                              legalTermsNodeRef: L,
                              hasLegalTermsFlash: R,
                              invoiceError: B,
                              onInvoiceError: (t) => {
                                  D(t);
                              },
                              planGroup: s,
                              currencies: h,
                              onCurrencyChange: (t) => j(t),
                              hasOpenInvoice: null != o,
                              purchaseState: y,
                              handleClose: m,
                              shouldUseUnifiedCheckoutUI: !0,
                          }),
            }),
            (0, i.jsx)(v.UX, {
                children: (0, i.jsx)(Q.A, {
                    premiumSubscription: f ?? null,
                    setPurchaseState: C,
                    onBack: () => null != n && a(n),
                    onNext: U,
                    legalTermsNodeRef: L,
                    flashLegalTerms: () => w(!0),
                    analyticsLocation: p,
                    baseAnalyticsData: c,
                    flowStartTime: g.startTime,
                    planGroup: s,
                    openInvoiceId: o,
                    metadata: F ? void 0 : I,
                    backButtonEligible: e,
                    invoiceError: B,
                    disablePurchase: I?.guild_id == null && !F,
                    onPaymentSourceAdd: O,
                }),
            }),
        ],
    });
}
function V(t) {
    let { guildId: e, showBenefitsFirst: n } = t;
    return [
        {
            key: null,
            renderStep: (t) => (0, i.jsx)(L, { initialStep: n ? r.pn.BENEFITS : r.pn.REVIEW, guildId: e, ...t }),
        },
        {
            key: r.pn.BENEFITS,
            renderStep: (t) => (0, i.jsx)(I, { ...t }),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t["5LD2+B"]) },
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
                (0, i.jsx)(X, { backButtonEligible: !!n || void 0, prevStep: n ? r.pn.BENEFITS : void 0, ...t }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
        },
        { key: r.pn.CONFIRM, renderStep: (t) => (0, i.jsx)(T, { showBenefits: !n, ...t }) },
    ];
}
