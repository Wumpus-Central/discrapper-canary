t.d(n, { default: () => nR });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(835245),
    u = t(17928),
    o = t(364840),
    c = t(430993),
    d = t(331322),
    p = t(123292),
    m = t(289873),
    S = t(821609),
    g = t(820739),
    E = t(891197),
    h = t(444927),
    y = t(964486),
    P = t(793574),
    _ = t(688810),
    I = t(753390),
    f = t(160946),
    A = t(606267),
    x = t(545075),
    N = t(663288),
    b = t(981036),
    C = t(725836),
    j = t(364995),
    v = t(666646),
    T = t(584160),
    M = t(480642),
    L = t(94420),
    R = t(357669),
    D = t(832286),
    U = t(958340),
    G = t(834252),
    O = t(166532),
    w = t(566980),
    k = t(216641),
    B = t(925847),
    F = t(253390),
    Y = t(489254),
    V = t(251913),
    W = t(632638),
    H = t(61299),
    z = t(71393),
    $ = t(178368),
    J = t(825755),
    K = t(97352),
    q = t(166403),
    Q = t(174459),
    Z = t(473145),
    X = t(428262),
    ee = t(83617),
    en = t(615396),
    et = t(802790),
    ei = t(636441),
    el = t(587491),
    er = t(285753),
    es = t(295405);
let [ea, eu, eo] = (0, t(786300).A)();
function ec(e) {
    let {
            initialNumGuildBoostsToPurchase: n,
            disablePremiumUpsell: t = !1,
            closeGuildPerksModal: r,
            children: s,
            guildId: a,
        } = e,
        [o, c] = l.useState(n),
        [d, p] = l.useState(null),
        [m, S] = l.useState([]),
        { activeSubscription: g } = (0, G.P5)(),
        E = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        h = (0, u.bG)([es.A], () => es.A.defaultPaymentSourceId),
        y = null != g ? g.paymentSourceId : null,
        P = (0, H._V)(null != y ? y : E ? h : null);
    return (0, i.jsx)(ea.Provider, {
        value: {
            numGuildBoostsToPurchase: o,
            setNumGuildBoostsToPurchase: c,
            disablePremiumUpsell: t,
            closeGuildPerksModal: r,
            guildId: a,
            currency: d,
            setCurrency: p,
            currencies: m,
            setCurrencies: S,
            paymentModalArgs: P,
        },
        children: s,
    });
}
var ed = t(879100);
t(321073);
var ep = t(403581),
    em = t(834730),
    eS = t(155718),
    eg = t(61572),
    eE = t(717925),
    eh = t(596034),
    ey = t(848584),
    eP = t(241989),
    e_ = t(908419),
    eI = t(888751),
    ef = t(543767),
    eA = t(874638),
    ex = t(881489),
    eN = t(692440),
    eb = t(580630),
    eC = t(788868),
    ej = t(818348),
    ev = t(375708),
    eT = t(327105),
    eM = t(7921);
function eL(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: r,
            currency: s,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e_.U)();
    return (0, i.jsx)(eh._, {
        variant: {
            type: eh.I.Subscription,
            purchaseButtonText: ev.intl.string(ev.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: s,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: a,
        },
        paymentSourceType: n,
        immediateDelivery: u,
    });
}
function eR(e) {
    return ev.intl.format(ev.t.IeaYqg, { endDate: e });
}
function eD(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: eM.bU }),
            (0, i.jsx)(em.E, { variant: "text-sm/normal", className: eM.b7, children: n }),
            (0, i.jsx)("div", { className: eM.bU }),
        ],
    });
}
function eU(e) {
    let {
            originalAmount: n,
            basePlanAdjustment: t,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: r,
            checkoutInvoicePreview: s,
        } = e,
        a = ((e) => {
            let {
                addedQuantity: n,
                guildBoostingSubscriptionPlan: t,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: u,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: ev.intl.formatToPlainString(ev.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, X.Mn)(t.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: u,
                currency: o.currency,
                interval: t.interval,
                intervalCount: t.intervalCount,
            };
        })(e),
        u = [];
    0 !== t &&
        u.push({
            id: "base-plan-adjustment",
            label: ev.intl.formatToPlainString(ev.t.ZSVged, { planName: (0, X.RH)(l[0].subscriptionPlanId) }),
            tooltip: ev.intl.string(ev.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            u.push({
                id: "guild-boosting-adjustment",
                label: ev.intl.string(ev.t["+as5ZZ"]),
                tooltip: ev.intl.string(ev.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== s.tax && u.push({ id: "tax", label: ev.intl.string(ev.t.jiRvC7), amount: s.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, eI.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(ey.Vm, {
        defaultExpanded: !0,
        label: ev.intl.string(eT.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function eG(e) {
    let {
        isSubscriptionUpdate: n,
        premiumSubscription: t,
        checkoutInvoicePreview: l,
        renewalInvoicePreview: r,
        isPrepaid: s,
        isReverseTrial: a,
        priceOptions: u,
    } = e;
    return null != t
        ? (0, i.jsx)(eN.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: r,
              isUpdate: n,
              isPrepaidPaymentSource: s,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(eN.m0, {
              renewalInvoice: r,
              priceOptions: u,
              isPrepaidPaymentSource: s,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function eO(e) {
    let {
            guildId: n,
            paymentSources: t,
            priceOptions: r,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: o,
            premiumSubscriptionPlan: c,
            newAdditionalPlans: d,
            paymentSourceId: p,
            setPaymentSourceId: m,
            onPaymentSourceAdd: S,
        } = e,
        g = (function (e) {
            let n,
                {
                    guildId: t,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: r,
                    newAdditionalPlans: a,
                } = e,
                o = (0, u.bG)([z.A, U.A], () => {
                    let e = z.A.getGuild(t);
                    return null != e ? e : U.A.isGuildFetching(t) ? null : U.A.getGuild(t);
                }, [t]),
                c = r.interval,
                d = r.intervalCount,
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eC.pe.GUILD), c, d));
            s()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                S = (0, ex.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, _.Ay)(),
                [E, h] = (0, ef.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: P.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [y, I] = (0, ef.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: P.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, v.OQ)({
                    checkoutInvoicePreview: E,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: y,
                    renewalInvoiceError: I,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: E,
                    renewalInvoicePreview: y,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: n,
            priceOptions: r,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: c,
            newAdditionalPlans: d,
        }),
        {
            isSubscriptionUpdate: E,
            guild: h,
            isPrepaid: y,
            isReverseTrial: I,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
        } = g,
        N = (0, A.A)({ location: "GuildBoostReview", message: ev.intl.string(eT.default["tK8A/8"]) }),
        b = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == f || null == x || null == h) return (0, i.jsx)(eE.E, {});
    let C = (0, i.jsx)(eG, {
            isSubscriptionUpdate: E,
            premiumSubscription: a,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
            isPrepaid: y,
            isReverseTrial: I,
            priceOptions: r,
        }),
        j = (0, i.jsx)(eg.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: ev.intl.string(ev.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            additionalPaymentSourceDropdownProps: b,
            premiumSubscriptionPaymentSourceId: o,
            hideCurrencySelect: null != o,
        }),
        T = (function (e) {
            let {
                isSubscriptionUpdate: n,
                premiumSubscriptionPlan: t,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: l,
                paymentSources: r,
                paymentSourceId: s,
            } = e;
            return {
                paymentSourceType: (0, k.g)(r, s),
                premiumSubscriptionPlan: t,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, eN.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: E,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: x,
            checkoutInvoicePreview: f,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(eL, { ...T }),
        L = (function (e) {
            let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: u, isPrepaid: o, isReverseTrial: c } = a,
                d = t.interval,
                p = t.intervalCount,
                m = (e) => (0, eA.Z)(i.invoiceItems).find((n) => eC.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            s()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                E = null != g ? S.quantity - g.quantity : S.quantity,
                h = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                y = h.reduce((e, n) => e + n.amount, 0),
                P = (0, ef.sL)(S) * E,
                _ = (0, eb.$g)(P, i.currency),
                I = (0, eb.CE)(_, d, p),
                f = (0, eb.$g)(i.total, i.currency) + (i.currency !== ej.Yr.USD ? "*" : ""),
                A = i.subtotal - P - y,
                x = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * E };
                }),
                N = x.find((e) => e.type === eS.iS.SUBSCRIPTION_PLAN),
                b = x.find((e) => e.type === eS.iS.ENTITLEMENT),
                C = S.subscriptionPlanPrice * E;
            return {
                addedQuantity: E,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: _,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, eb.CE)((0, eb.$g)(C, i.currency), d, p),
                formattedTotal: f,
                basePlanAdjustment: y,
                basePlanInvoiceItems: h,
                guildBoostingAdjustment: A,
                subscriptionDiscount: N,
                entitlementDiscount: b,
                originalAmount: C,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
            priceOptions: r,
            reviewState: g,
        }),
        R = (0, i.jsx)(eU, { ...L }),
        D = (function (e, n, t) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: s,
                    formattedGuildBoostRate: a,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: o,
                } = n,
                c = null != o;
            return {
                label: ev.intl.formatToPlainString(ev.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, X.Mn)(r.id, !1, s),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eP.a6, {}),
                price: a,
                PriceIcon: c ? ep.t : void 0,
                priceTooltip: c ? ev.intl.string(eT.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            h,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: eR(i.currentPeriodEnd) } : null;
            })({ isPrepaid: y, isReverseTrial: I, premiumSubscription: a }),
        ),
        G = (0, i.jsx)(eP.f7, { ...D });
    return (0, i.jsx)(eE.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: N,
        purchaseItemContent: G,
        subscriptionDetailsContent: C,
        paymentSelectContent: j,
        invoiceSummaryContent: R,
        legalContent: M,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: ev.intl.string(eT.default.R0cZsM),
    });
}
var ew = t(683071),
    ek = t(512950),
    eB = t(87719);
let eF = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eY = t(503698),
    eV = t.n(eY),
    eW = t(661531),
    eH = t(990078),
    ez = t(408278),
    e$ = t(834040),
    eJ = t(499373),
    eK = t(663803),
    eq = t(320448),
    eQ = t(534514),
    eZ = t(104510),
    eX = t(695366),
    e0 = t(726656),
    e1 = t(531260),
    e3 = t(404374),
    e8 = t(477421),
    e6 = t(234419),
    e2 = t(363476),
    e5 = t(531506),
    e4 = t(51465);
function e7() {
    return (0, i.jsxs)("div", {
        className: eV()(e4.dt, e4.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: e4.qq,
            }),
            (0, i.jsx)(em.E, {
                variant: "text-sm/medium",
                className: e4.tD,
                children: ev.intl.format(ev.t.f5VHKm, {}),
            }),
        ],
    });
}
function e9(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: e4.dt,
        children: [(0, i.jsx)(ep.t, { size: "md", className: e4.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var ne = t(773669),
    nn = t(287809),
    nt = t(975571),
    ni = t(252424),
    nl = t(652215);
t(26279);
var nr = t(406263);
function ns(e) {
    return "" === e || "-" === e;
}
function na(e) {
    let { value: n, onChange: t, minValue: r = 1, maxValue: s = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), ns(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: nr.U$,
        children: [
            (0, i.jsx)(ez.K, {
                variant: "secondary",
                size: "md",
                icon: e$.Q,
                onClick: () => {
                    c && !(u <= r) && d(u - 1);
                },
                "aria-label": ev.intl.string(ev.t["k+ohJm"]),
                disabled: !c || u <= r,
            }),
            (0, i.jsx)("div", {
                className: nr.WJ,
                children: (0, i.jsx)("input", {
                    className: nr.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (ns(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= r) return void d(r);
                                if (n >= s) return void d(s);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        ns(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(ez.K, {
                variant: "secondary",
                size: "md",
                icon: eJ.T,
                onClick: () => {
                    c && !(u >= s) && d(u + 1);
                },
                "aria-label": ev.intl.string(ev.t.w8Sc4B),
                disabled: !c || u >= s,
            }),
        ],
    });
}
function nu(e) {
    let { message: n } = e;
    return (0, i.jsx)(em.E, { variant: "text-xs/normal", color: "text-muted", className: nr.jH, children: n });
}
function no(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: nr.Vk,
        children: [
            (0, i.jsx)("div", {
                className: nr.D0,
                children: (0, i.jsx)(ep.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: nr.ue,
                    color: e3.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: nr.yP, children: n }),
        ],
    });
}
function nc(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: s,
        planPriceContent: a,
        subtotalContent: u,
        refreshSubtotalContent: o,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: S,
        refreshDiscountCallout: g,
        legacyPricingNotes: E,
        refreshPricingNotes: h,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: eM.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: eM.E6,
                        children: [
                            (0, i.jsx)(eK.l, {
                                value: t,
                                onChange: (e) => r(e),
                                className: eM.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: eM.$0, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eV()(eM.QK, { [eM.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: eM.J3 }),
            (0, i.jsxs)("div", {
                className: eM.mP,
                children: [
                    (0, i.jsx)("div", { className: eM.xp, children: ev.intl.string(ev.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: eV()(eM.__invalid_planSelectorSubtotalPrice, { [eM.S]: n }),
                        children: u,
                    }),
                ],
            }),
            E.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nd(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        refreshNextStepLabel: s,
        planLabel: a,
        planPriceContent: u,
        subtotalContent: o,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: S,
        discountCallout: g,
        refreshDiscountCallout: E,
        legacyPricingNotes: h,
        refreshPricingNotes: y,
    } = e;
    return (0, i.jsxs)("div", {
        className: nr.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: nr.K3,
                children: [
                    (0, i.jsx)(em.E, {
                        variant: "text-md/medium",
                        className: nr.bk,
                        children: ev.intl.string(ev.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eq._, { className: nr.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(em.E, { variant: "text-md/medium", className: nr.kX, children: s }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: nr.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: nr.fX,
                        children: [
                            (0, i.jsx)(na, {
                                value: t,
                                onChange: (e) => r(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(em.E, { variant: "text-md/medium", className: nr.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eV()(nr.El, { [eM.S]: n }), children: u }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: nr.fh,
                children: [
                    (0, i.jsx)(eQ.D, {
                        variant: "heading-lg/semibold",
                        className: nr.O3,
                        children: ev.intl.string(ev.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: eV()(nr.BU, { [eM.S]: n }), children: c }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function np(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: eM.Mv,
        children: [
            (0, i.jsx)(eZ._, { className: eM.T5, color: eW.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    ev.intl.format(ev.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(eH.m, {
                              text: ev.intl.formatToPlainString(ev.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eX.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: eM.Y5,
                                  color: eW.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function nm(e) {
    let {
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: S = !1,
            showRefreshSubtotalRate: g = !1,
            refreshNextStepLabel: E = ev.intl.string(ev.t.QBnNHq),
        } = e,
        h = (function (e) {
            let n,
                t,
                {
                    premiumSubscriptionPlan: r,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: S,
                    showRefreshSubtotalRate: g,
                } = e,
                E =
                    ((n = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription())),
                    (0, u.bG)([es.A], () =>
                        n?.paymentSourceId != null ? es.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                h = r.interval,
                y = r.intervalCount,
                I = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eC.pe.GUILD), h, y)),
                f = (0, u.bG)([nn.default], () => nn.default.getCurrentUser()),
                A = (0, e1.A)({ forceFetch: !1 });
            s()(null != I, "Missing guildBoostingSubscriptionPlan");
            let x = [{ planId: I.id, quantity: 1 }],
                N = c?.items.find(
                    (e) => e.planId === eC.gD.PREMIUM_MONTH_TIER_2 || e.planId === eC.gD.PREMIUM_YEAR_TIER_2,
                );
            null != N && x.push(N);
            let b = c?.items.find(
                    (e) => e.planId === eC.gD.PREMIUM_MONTH_GUILD || e.planId === eC.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == E || !eC.uJ.has(E) || null == b,
                { analyticsLocations: j } = (0, _.Ay)(),
                [T, M] = (0, ef.YV)({
                    subscriptionId: c?.id,
                    items: x,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: C,
                    analyticsLocations: j,
                    analyticsLocation: P.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, v.Tr)(T, M);
            let L = !C && null == T && null == M;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let R = (0, e6.V)()?.subscription_trial?.sku_id === eC.pe.TIER_2,
                D = X.Ay.hasBoostDiscount(f),
                U = D && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), eC.PremiumTypes.TIER_1),
                G = T?.findInvoiceItemByPlanId(I.id),
                O =
                    null != G
                        ? { amount: G.amount, tax: 0, taxInclusive: !0, currency: T.currency }
                        : X.Ay.getPrice(I.id, D, !1, S),
                w = a * O.amount,
                k = (0, ex.ds)() && D && null != c,
                B = (function (e) {
                    let n,
                        {
                            existingAvailableSlotsCount: t,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: s,
                        } = e;
                    return (
                        (n = l ? "reverse_trial" : r ? "discount" : s ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: t > 0,
                            showFractionalPremiumBanner: i === eC.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: k,
                    hasDiscountUpsell: U,
                    withTrialOfferCopyVariant: R,
                });
            "discount" === B.upsellVariant
                ? (s()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = ev.intl.format(ev.t.hf6YOY, { planName: X.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = ev.intl.format("upsell_trial" === B.upsellVariant ? ev.t.ba1L74 : ev.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, ni.l9)(ne.default.locale, eC.oX / 100),
                      freeSubscriptionCount: eC.M4,
                  }));
            let F = p.filter((e) => (0, Z.I5)(e)).length,
                Y = (0, X.J$)(S.paymentSourceId),
                { ipCountryCode: V } = (0, e8.A)(),
                W = "HR" === V && O.currency === ej.Yr.EUR,
                H =
                    k && null != c
                        ? (0, i.jsx)(eD, { text: eR(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: eV()(eM.hA, eM.G3), children: ev.intl.string(ev.t.jNY1FO) }),
                z =
                    k && null != c
                        ? (0, i.jsx)(eD, { text: eR(c.currentPeriodEnd), className: eM.jk })
                        : (0, i.jsx)("div", { className: nr._X, children: ev.intl.string(ev.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(np, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(e5.vi, { fractionalPremiumInfo: A }) : null,
                Q = Y
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eC.WT.YEAR
                              ? ev.intl.string(ev.t.YDpAzZ)
                              : n === eC.WT.MONTH && 1 === t
                                ? ev.intl.string(ev.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: y }) ?? ev.intl.string(ev.t.K9Bmze))
                    : ev.intl.string(ev.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : Y
                      ? (0, eb.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                r = (0, eb.$g)(n, t);
                            return i === eC.WT.YEAR
                                ? ev.intl.formatToPlainString(ev.t["8M04YJ"], { price: r })
                                : i === eC.WT.MONTH && 1 === l
                                  ? ev.intl.formatToPlainString(ev.t.VStWCR, { price: r })
                                  : i === eC.WT.MONTH && l > 1
                                    ? ev.intl.formatToPlainString(ev.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: h, intervalCount: y, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(e2.A, {
                          price: w,
                          currency: O.currency,
                          intervalType: h,
                          intervalCount: y,
                          isPrepaidPaymentSource: Y,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !Y
                      ? (0, eb.CE)((0, eb.$g)(w, O.currency), h, y)
                      : (0, eb.$g)(w, O.currency),
                ei = [],
                el = [];
            if (W) {
                let e = (0, i.jsx)(
                    e0.A,
                    {
                        message: ev.intl.formatToPlainString(ev.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eb.$g)(7.5345 * w, ej.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let er = ev.intl.format(ev.t.Om31w8, { documentationLink: nt.A.getArticleURL(nl.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(e0.A, { message: er }, "localized-pricing")),
                el.push((0, i.jsx)(nu, { message: er }, "localized-pricing")),
                {
                    isLoading: L,
                    planLabel: Q,
                    planPriceContent: ee,
                    subtotalContent: en,
                    refreshSubtotalContent: et,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: z,
                    existingSlotNotice: $,
                    fractionalBanner: J,
                    legacyPricingNotes: ei,
                    refreshPricingNotes: el,
                    discountCallout:
                        "reverse_trial" === B.upsellVariant
                            ? (0, i.jsx)(e7, {})
                            : (0, i.jsx)(e9, { text: t, color: e3.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(e7, {}) : (0, i.jsx)(no, { text: t }),
                }
            );
        })({
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d,
            priceOptions: p,
            showRefreshSubtotalRate: g,
        });
    return (0, i.jsx)(S ? nd : nc, {
        isLoading: h.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: h.planLabel,
        planPriceContent: h.planPriceContent,
        subtotalContent: h.subtotalContent,
        refreshSubtotalContent: h.refreshSubtotalContent,
        legacyDescriptionContent: h.legacyDescriptionContent,
        refreshDescriptionContent: h.refreshDescriptionContent,
        fractionalBanner: h.fractionalBanner,
        existingSlotNotice: h.existingSlotNotice,
        discountCallout: h.discountCallout,
        refreshDiscountCallout: h.refreshDiscountCallout,
        legacyPricingNotes: h.legacyPricingNotes,
        refreshPricingNotes: h.refreshPricingNotes,
        refreshNextStepLabel: E,
    });
}
var nS = t(898640);
let ng = eC.gD.NONE_MONTH;
function nE(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        { activeSubscription: r } = (0, G.P5)(),
        {
            numGuildBoostsToPurchase: a,
            setNumGuildBoostsToPurchase: o,
            guildId: c,
            currency: d,
            closeGuildPerksModal: p,
            paymentModalArgs: m,
        } = eu(),
        S = (0, h.A)(() => (0, Z.D$)($.A.boostSlots)),
        g = (0, Y.n)("GuildBoostPurchaseModal"),
        E = eF.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        y = g && E,
        P = (0, u.bG)([U.A], () => (null != c ? U.A.getGuild(c) : void 0), [c]),
        _ = null != c ? z.A.getGuild(c) : null,
        I = null != r && r.isPurchasedExternally,
        f = d ?? void 0,
        A = null == m.paymentSourceId ? { currency: f } : { paymentSourceId: m.paymentSourceId, currency: f },
        x = (0, u.bG)([K.A], () => (null != r ? (0, en.c9)(r.planId) : null)),
        N = (0, u.bG)([K.A], () => (null == x ? K.A.get(ng) : x));
    s()(null != c, "Missing guildId"), s()(null != N, "Missing nextPremiumSubscriptionPlan");
    let b = (0, i.jsx)(nm, {
        premiumSubscriptionPlan: N,
        numGuildBoosts: a,
        setNumGuildBoosts: o,
        setForceDisableSubmitButton: t,
        premiumSubscription: r,
        existingAvailableSlots: S,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            n(), null != p && p(), (0, eB.e)();
        },
        priceOptions: A,
        isRefreshEnabled: g,
        showRefreshSubtotalRate: y,
        refreshNextStepLabel: l,
    });
    return (
        I && null != r && null != r.paymentGateway
            ? (b = (0, i.jsxs)("div", {
                  className: nS.xK,
                  children: [
                      (0, i.jsx)(ew.w, {
                          type: "critical",
                          children: ev.intl.format(ev.t["/m3Y3s"], { paymentGatewayName: ej.qm[r.paymentGateway] }),
                      }),
                      b,
                  ],
              }))
            : null == c ||
              U.A.isGuildFetching(c) ||
              null != P ||
              null != _ ||
              (b = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ek.p, {
                          messageType: ek.Y.ERROR,
                          className: nS.MR,
                          children: ev.intl.string(ev.t.eAn6z2),
                      }),
                      b,
                  ],
              })),
        b
    );
}
var nh = t(460905),
    ny = t(183623),
    nP = t(95635),
    n_ = t(935462),
    nI = t(532794),
    nf = t(811611),
    nA = t(901017),
    nx = t(213178);
function nN(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([ne.default], () => ne.default.locale);
    return (0, i.jsxs)("div", {
        className: nx.mH,
        children: [
            (0, i.jsx)(nA.A, {
                icon: eZ._,
                iconClassName: nx.pl,
                description: ev.intl.formatToPlainString(ev.t.sQBgs2, { numFreeGuildSubscriptions: eC.M4 }),
                color: eW.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nA.A, {
                icon: eZ._,
                iconClassName: nx.pl,
                description: ev.intl.formatToPlainString(ev.t["1A6vXi"], { percent: (0, ni.l9)(t, eC.oX / 100) }),
                color: eW.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nA.A, { icon: nh.n, iconClassName: nx.zO, description: ev.intl.string(ev.t.Z9b2x2) }) : null,
            (0, i.jsx)(nA.A, { icon: ny.F, iconClassName: nx.Kg, description: ev.intl.string(ev.t["8dqG5E"]) }),
            (0, i.jsx)(nA.A, { icon: nP.J, iconClassName: nx.$z, description: ev.intl.string(ev.t.cBorIy) }),
        ],
    });
}
function nb(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: r,
            onSkip: s,
            onSubscriptionConfirmation: a,
            analyticsLocation: u,
            analyticsSourceLocation: m,
            priceOptions: g,
        } = e,
        { analyticsLocations: E, sourceAnalyticsLocations: h } = (0, _.Ay)(P.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        y = null == n || null == n.premiumSubscriptionType,
        I = X.Ay.getPrice(eC.gD.PREMIUM_MONTH_TIER_2, !1, !1, g),
        f = (0, eb.$g)(I.amount, I.currency),
        A = (0, e6.V)(),
        x = A?.trial_id,
        N = A?.subscription_trial?.sku_id === eC.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(nl.HAw.PREMIUM_UPSELL_VIEWED, { type: eC.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n_.s_, { "data-migration-pending": !0, onClick: t, className: nx.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        N && (0, i.jsx)(nf.Vq, { className: nx.Fg }),
                        (0, i.jsx)("div", { className: eV()(nx.Tn, { [nx.NH]: N }) }),
                        (0, i.jsx)("div", {
                            className: nx.G3,
                            children:
                                null != x
                                    ? ev.intl.string(ev.t.AoSzEr)
                                    : ev.intl.format(ev.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, i.jsx)(nN, { shouldUpsellFromNoneTier: y }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: ev.intl.string(ev.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: ev.intl.string(ev.t["SI/adm"]),
                                        onClick: s,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != x ? ev.intl.string(ev.t["Gd/XHF"]) : ev.intl.string(ev.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nI.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eC.pe.TIER_2,
                                                    analyticsLocations: E,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: nl.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: m,
                                                    onSubscriptionConfirmation: a,
                                                    trialId: x,
                                                });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
let nC = eC.gD.NONE_MONTH,
    nj = [O.pn.PLAN_SELECT, O.pn.REVIEW, O.pn.CONFIRM],
    nv = [O.pn.PLAN_SELECT, O.pn.ADD_PAYMENT_STEPS, O.pn.REVIEW, O.pn.CONFIRM];
async function nT(e, n) {
    await (0, g.CD)();
    let t = (0, Z.D$)($.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nM(e) {
    let {
        currentStep: n,
        isRefreshEnabled: t,
        backStep: l,
        handleStepChange: r,
        primaryButtonProps: a,
        secondaryButton: u,
        legacySubmitButton: c,
    } = e;
    return n === O.pn.CONFIRM
        ? null
        : n === O.pn.REVIEW
          ? (s()(null != a, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(M.lo, { onBackClick: null != l ? () => r(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: ev.intl.string(ev.t["13/7kX"]),
                                  onClick: () => r(l),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && n === O.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [u, c],
                        }),
                    ],
                }),
            });
}
function nL(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: g,
            guildId: es,
            onSubscribeComplete: ea,
            onSubscriptionConfirmation: eo,
            applicationId: ec,
            intent: ep,
        } = e,
        {
            numGuildBoostsToPurchase: em,
            currency: eS,
            setCurrency: eg,
            currencies: eE,
            setCurrencies: eh,
            paymentModalArgs: ey,
            disablePremiumUpsell: eP,
        } = eu(),
        {
            activeSubscription: e_,
            blockedPayments: eI,
            startingFractionalPremiumEndsAtRef: ef,
            customCheckoutFlow: eA,
        } = (0, G.P5)(),
        ex = (0, L.t4)((e) => e.hasAcceptedTerms),
        eN = (0, A.A)({ location: "GuildBoostPurchaseModal", message: ev.intl.string(eT.default["tK8A/8"]) }),
        eb = (0, v.sw)(),
        eM = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        eL = null != e_ ? e_.paymentSourceId : null,
        eR = (0, u.bG)([K.A], () => (null != e_ ? (0, en.c9)(e_.planId) : null)),
        eD = (0, u.bG)([K.A], () => null == e_ || null != K.A.get(e_.planId)),
        eU = (0, u.bG)([K.A], () => (null == eR ? K.A.get(nC) : eR)),
        eG = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        ew = (0, u.bG)([U.A], () => (null != es ? U.A.getGuild(es) : void 0), [es]),
        {
            paymentSources: ek,
            setPurchaseError: eB,
            paymentSourceId: eF,
            setIsSubmittingCurrentStep: eY,
            paymentAuthenticationState: eV,
            setPaymentSourceId: eW,
            isSubmittingCurrentStep: eH,
            paymentError: ez,
            purchaseError: e$,
            purchaseErrorBlockRef: eJ,
        } = ey,
        eK = Object.keys(ek).length > 0,
        { checkoutPaymentSources: eq } = (0, j.t)(),
        eQ = (0, A.iB)({ checkoutPaymentSources: eq, paymentSourceId: eF, location: "GuildBoostPurchaseModal" }),
        eZ = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        eX = (0, f.Y)(),
        e0 = l.useMemo(
            () => (null != e_ && eD && eX ? (0, F.v)(e_, em) : [{ planId: eC.gD.PREMIUM_MONTH_GUILD, quantity: em }]),
            [e_, eD, em, eX],
        ),
        e1 = l.useMemo(() => (0, B.A)(), []),
        [e3, e8] = (0, h.A)(() => [e1 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e6 } = (0, _.Ay)(o, P.A.GUILD_BOOST_PURCHASE_MODAL),
        e2 = l.useMemo(
            () =>
                e0.find((e) => {
                    let { planId: n } = e;
                    return eC.pW.has(n);
                })?.planId ?? eC.gD.PREMIUM_MONTH_GUILD,
            [e0],
        ),
        e5 = (0, u.bG)([K.A], () => K.A.get(e2)?.skuId, [e2]),
        e4 = l.useMemo(
            () => ({
                load_id: e3,
                payment_type: ej.fr[ej.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(eC.pe.GUILD),
                subscription_type: nl.rzx.PREMIUM,
                subscription_plan_id: e2,
                quantity: em,
                location: d,
                source: g,
                location_stack: e6,
                checkout_flow: N.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e3, d, e6, g, em, e2],
        );
    l.useEffect(() => {
        (0, ee.c_)(eF);
    }, [eF]);
    let [e7, e9] = l.useState(O.pn.PLAN_SELECT),
        ne = l.useMemo(() => Date.now(), [e7]),
        nn = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e9(e), eB(null);
                let i = Date.now();
                Q.default.track(nl.HAw.PAYMENT_FLOW_STEP, {
                    ...e4,
                    from_step: null != t ? t : e7,
                    to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - ne,
                    flow_duration_ms: i - e8,
                    guild_id: es,
                    application_id: ec,
                });
            },
            [eB, e4, e7, ne, e8, es, ec],
        ),
        nt = {
            baseAnalyticsData: e4,
            flowStartTime: e8,
            guildId: es,
            handleStepChange: nn,
            onSubscribeComplete: ea,
            paymentSourceId: eF,
            setIsSubmittingCurrentStep: eY,
            setPurchaseError: eB,
        },
        ni = l.useRef(nt);
    l.useEffect(() => {
        ni.current = nt;
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
            } = ni.current;
            (async () => {
                if (!0 === eZ)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, I.tn)(J.A.redirectedPaymentId),
                            i(O.pn.CONFIRM),
                            nu(w.h.COMPLETED),
                            null != t && (await nT(t, null != ep)),
                            l?.();
                    } catch (t) {
                        nu(w.h.FAIL),
                            a(t),
                            Q.default.track(nl.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: nl.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, I.bl)();
                    }
            })();
        }, [eZ, ep]),
        (0, y.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, I.hP)(),
                null == es ||
                    null != z.A.getGuild(es) ||
                    null != U.A.getGuild(es) ||
                    U.A.isGuildFetching(es) ||
                    (0, D.y)(es),
                (0, R.b)({ ...e4, guild_id: es, application_id: ec, custom_checkout_flow: eA }),
                null != e_ &&
                    null != e_.renewalMutations &&
                    Q.default.track(nl.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: es });
        });
    let [nr, ns] = l.useState(nj),
        [na, nu] = l.useState(w.h.WAITING),
        no = () => {
            r(na === w.h.COMPLETED);
        },
        nc = null != e_ && e_.isPurchasedExternally;
    l.useEffect(() => {
        eV !== V.oc.PENDING &&
            e7 !== O.pn.CONFIRM &&
            null != eL &&
            (nr !== nj && ns(nj), nj.includes(e7) || e7 === O.pn.PREMIUM_UPSELL || nn(O.pn.REVIEW)),
            e7 === O.pn.ADD_PAYMENT_STEPS && nr !== nv && ns(nv),
            nc && e7 !== O.pn.PLAN_SELECT && e9(O.pn.PLAN_SELECT);
    }, [e7, nn, nc, eV, e_, eL, nr]),
        (0, V.b)(e7, eV, nn, nu),
        (0, O.zT)(e7, na, nu);
    let nd = (0, Y.n)("GuildBoostPurchaseModal"),
        np = nd && (e7 === O.pn.REVIEW || e7 === O.pn.CONFIRM),
        nm = (0, er.A)(np),
        [ng, nh] = l.useState(!1),
        [ny, nP] = l.useState(!0),
        n_ = l.useMemo(() => JSON.stringify(eE), [eE]);
    l.useEffect(() => {
        let e;
        eX &&
            (null != K.A.get(eC.gD.PREMIUM_MONTH_GUILD) && eh((e = (0, ee._w)(eC.gD.PREMIUM_MONTH_GUILD, eF, !1))),
            null == eF && null != e_ && null != e_.paymentSourceId ? eg(e_.currency) : null != e && eg(e[0]));
    }, [eF, e_, eX, n_, eg, eh]);
    let nI = (0, H.Y)({
        paymentModalArgs: ey,
        initialStep: O.pn.PAYMENT_TYPE,
        prependSteps: [O.pn.PLAN_SELECT],
        appendSteps: [O.pn.REVIEW, O.pn.CONFIRM],
        breadcrumpSteps: nr,
        currentBreadcrumpStep: e7,
        onReturn: () => {
            nn(Object.values(ek).length < 1 ? O.pn.PLAN_SELECT : O.pn.REVIEW, { trackedFromStep: O.pn.PAYMENT_TYPE });
        },
        onComplete: (e) => {
            nn(O.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            Q.default.track(nl.HAw.PAYMENT_FLOW_STEP, {
                ...e4,
                from_step: n,
                to_step: t,
                step_duration_ms: i - ne,
                flow_duration_ms: i - e8,
                guild_id: es,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eI) n = (0, i.jsx)(x.oO, {});
    else if (eM && eD && eX && null != eS && "" !== eS)
        if (e_?.isPausedOrPausePending && !e_.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nS.C, children: ev.intl.string(ev.t.mOWsF1) }),
            });
        else if (null != e_ && null != e_.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nS.C, children: ev.intl.string(ev.t.npfhh0) }),
            });
        else if (e7 === O.pn.PREMIUM_UPSELL) {
            s()(null != eU, "Missing nextPremiumSubscriptionPlan"), s()(eS, "Currency not defined");
            let e = null != eF ? { paymentSourceId: eF, currency: eS } : { currency: eS };
            n = (0, i.jsx)(nb, {
                premiumSubscriptionPlan: eU,
                analyticsLocation: d,
                analyticsSourceLocation: g,
                onClose: no,
                onBack: () => nn(O.pn.PLAN_SELECT),
                onSkip: () => nn(null != eL || eK ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eo,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            s()(eS, "Currency not defined");
            let a = null != eF ? { paymentSourceId: eF, currency: eS } : { currency: eS },
                u = z.A.getGuild(es),
                o = null,
                c = null == ew && null == u;
            switch (e7) {
                case O.pn.PLAN_SELECT:
                    s()(null != es, "Missing guildId"),
                        (e = (0, i.jsx)(nE, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: no,
                            handleStepChange: nn,
                            analyticsData: { ...e4, is_gift: !1, eligible_for_trial: !1 },
                            setAnalyticsData: ej.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: nP,
                            refreshNextStepLabel: (0, O.Ir)(
                                nr.find((e) => e !== O.pn.PLAN_SELECT && e !== O.pn.CONFIRM) ?? O.pn.REVIEW,
                            ),
                        })),
                        (l = nd
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: ev.intl.string(ev.t["ETE/oC"]),
                                  onClick: no,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: ev.intl.string(ev.t.oEAioF),
                                  onClick: no,
                                  variant: "secondary",
                              })),
                        (r = (0, i.jsx)(S.$, {
                            variant: "primary",
                            text: ev.intl.string(ev.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: n,
                                    numGuildBoostsToPurchase: t,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: l,
                                } = e;
                                return n || 0 === t || i || l;
                            })({
                                forceDisableSubmitButton: ny,
                                numGuildBoostsToPurchase: em,
                                isDisabledBecauseExternalSubscription: nc,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                eP || (null != eR && eR.premiumSubscriptionType === eC.PremiumTypes.TIER_2)
                                    ? nn(null != eL || eK ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS)
                                    : nn(O.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case O.pn.ADD_PAYMENT_STEPS:
                    break;
                case O.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(E.N, { className: nS.__invalid_body });
                    break;
                case O.pn.REVIEW:
                    s()(null != eU, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != es, "Missing guildId"),
                        (e = (0, i.jsx)(eO, {
                            guildId: es,
                            paymentSources: ek,
                            priceOptions: a,
                            currentPremiumSubscription: e_,
                            premiumSubscriptionPaymentSourceId: eL,
                            premiumSubscriptionPlan: eU,
                            newAdditionalPlans: e0,
                            paymentSourceId: eF,
                            setPaymentSourceId: eW,
                            onPaymentSourceAdd: () => {
                                nn(O.pn.ADD_PAYMENT_STEPS), eW(null);
                            },
                        })),
                        (t = O.pn.PLAN_SELECT);
                    let d = async () => {
                        s()(null != e0, "Missing newAdditionalPlans");
                        let e = (0, k.W)(ek, eF);
                        eB(null);
                        try {
                            nu(w.h.PURCHASING),
                                eY(!0),
                                s()(null != eF, "Missing paymentSourceId"),
                                s()(null != eb, "Missing invoicePreview");
                            let n = { amount: eb.total, currency: eb.currency },
                                t = a.currency ?? eb.currency,
                                i = (0, X.U8)(e_, e0, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(nl.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e4,
                                    duration_ms: Date.now() - e8,
                                    guild_id: es,
                                    application_id: ec,
                                }),
                                ng)
                            )
                                return;
                            if (null == e_ || null == eR) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, I.Ky)({
                                    items: e0,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nh(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(e_, e0) };
                                (l.currency = e_.currency ?? t),
                                    (l.paymentSource = null != eL ? ek[eL] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let r = await (0, I.nV)(e_, l, n, i, e6);
                                if (r.redirectConfirmation) return void nh(null != r.redirectURL);
                            }
                            null == ep && nn(O.pn.CONFIRM),
                                nu(w.h.COMPLETED),
                                null != es && (await nT(es, null != ep)),
                                null != ep && no(),
                                ea?.();
                        } catch (n) {
                            nu(w.h.FAIL),
                                eB(n),
                                Q.default.track(nl.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e4,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === nl.hes.CARD ? nl.kM_.STRIPE : nl.kM_.BRAINTREE) : null,
                                    payment_source_id: eF,
                                    duration_ms: Date.now() - e8,
                                });
                        } finally {
                            ng || eY(!1);
                        }
                    };
                    (o = {
                        text: ev.intl.string(ev.t.eUEeCt),
                        loading: eH,
                        disabled: null == eF || !ex || null != eN || eQ,
                        onClick: d,
                        variant: "active",
                    }),
                        (r = (0, i.jsx)(b.p, { ...o }));
                    break;
                case O.pn.CONFIRM:
                    let m = u?.name ?? ew?.name,
                        g = (0, k.g)(ek, eF),
                        h = (0, en.b2)(ef.current) && null != eR && !eC.YV.has(eR.id);
                    e = (0, i.jsx)(ed.W, {
                        guild: u,
                        guildBoostQuantity: em + eG.length,
                        onClose: no,
                        withAnimation: !1,
                        paymentSourceType: g,
                        fallbackGuildName: m,
                        didPurchaseOnFractionalPremium: h,
                        customCheckoutFlow: eA,
                    });
            }
            let y = null != ez && null == (0, O.ou)(ez) ? ez : e$;
            n =
                e7 === O.pn.ADD_PAYMENT_STEPS
                    ? nI
                    : (0, i.jsx)(W.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === O.pn.REVIEW || n === O.pn.CONFIRM || (t && n === O.pn.PLAN_SELECT);
                          })({ currentStep: e7, isBoostingPreCheckoutModalRefreshEnabled: nd }),
                          steps: nr,
                          currentStep: e7,
                          paymentError: y,
                          purchaseErrorBlockRef: eJ,
                          hasCurrencies: eE.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nM, {
                              currentStep: e7,
                              isRefreshEnabled: nd,
                              backStep: t,
                              handleStepChange: nn,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nS._5, children: (0, i.jsx)(m.y, {}) });
    let nf = (0, T.u)({ skuId: e5, step: e7 }),
        nA = null;
    return (eI ||
        (nd && e7 !== O.pn.PREMIUM_UPSELL
            ? (nA = e7 === O.pn.REVIEW ? (0, i.jsx)(M.s3, { ...nf }) : (0, i.jsx)(M.s3, { title: nf.title }))
            : e7 === O.pn.REVIEW
              ? (nA = (0, i.jsx)(M.s3, { ...nf }))
              : e7 !== O.pn.PREMIUM_UPSELL &&
                (nA = (0, i.jsx)(et.A, { onClose: no, currentStep: e7, purchaseState: na }))),
    nd && e7 === O.pn.CONFIRM)
        ? (0, i.jsx)(el.A, {
              mediaUrls: nm.mediaUrls,
              isSuccess: nm.isSuccess,
              transitionState: t,
              onClose: () => (no(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ei.A, {
                      transitionState: t,
                      guild: z.A.getGuild(es),
                      guildBoostQuantity: em + eG.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(C.e0, {
              children: (0, i.jsxs)(M.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (no(), Promise.resolve()),
                  children: [nA, n],
              }),
          });
}
function nR(e) {
    let { totalNumberOfSlotsToAssign: n = 1, disablePremiumUpsell: t, closeGuildPerksModal: l, guildId: r } = e,
        s = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: a } = (0, _.Ay)(P.A.GUILD_BOOST_PURCHASE_MODAL),
        o = (0, h.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(_.f5, {
        value: a,
        children: (0, i.jsx)(G.PaymentContextProvider, {
            activeSubscription: s,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: N.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(ec, {
                initialNumGuildBoostsToPurchase: o,
                disablePremiumUpsell: t,
                closeGuildPerksModal: l,
                guildId: r ?? null,
                children: (0, i.jsx)(nL, { ...e }),
            }),
        }),
    });
}
