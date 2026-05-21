t.d(n, { default: () => nR });
var i = t(627968),
    l = t(64700),
    s = t(284009),
    r = t.n(s),
    a = t(835245),
    u = t(17928),
    o = t(364840),
    c = t(430993),
    d = t(331322),
    p = t(123292),
    m = t(289873),
    S = t(821609),
    g = t(820739),
    y = t(891197),
    h = t(444927),
    E = t(964486),
    P = t(793574),
    I = t(688810),
    _ = t(753390),
    f = t(160946),
    A = t(606267),
    x = t(545075),
    N = t(210561),
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
    k = t(566980),
    w = t(216641),
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
    es = t(285753),
    er = t(683071),
    ea = t(512950),
    eu = t(87719);
let eo = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ec = t(295405);
let [ed, ep, em] = (0, t(786300).A)();
function eS(e) {
    let {
            initialNumGuildBoostsToPurchase: n,
            disablePremiumUpsell: t = !1,
            closeGuildPerksModal: s,
            children: r,
            guildId: a,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        } = e,
        [d, p] = l.useState(n),
        [m, S] = l.useState(null),
        [g, y] = l.useState([]),
        { activeSubscription: h } = (0, G.P5)(),
        E = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        P = (0, u.bG)([ec.A], () => ec.A.defaultPaymentSourceId),
        I = null != h ? h.paymentSourceId : null,
        _ = (0, H._V)(null != I ? I : E ? P : null);
    return (0, i.jsx)(ed.Provider, {
        value: {
            numGuildBoostsToPurchase: d,
            setNumGuildBoostsToPurchase: p,
            disablePremiumUpsell: t,
            closeGuildPerksModal: s,
            guildId: a,
            currency: m,
            setCurrency: S,
            currencies: g,
            setCurrencies: y,
            paymentModalArgs: _,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        },
        children: r,
    });
}
t(321073);
var eg = t(503698),
    ey = t.n(eg),
    eh = t(661531),
    eE = t(990078),
    eP = t(408278),
    eI = t(834040),
    e_ = t(499373),
    ef = t(834730),
    eA = t(403581),
    ex = t(663803),
    eN = t(320448),
    eb = t(534514),
    eC = t(104510),
    ej = t(695366),
    ev = t(726656),
    eT = t(531260),
    eM = t(404374),
    eL = t(543767),
    eR = t(881489),
    eD = t(477421),
    eU = t(234419),
    eG = t(363476),
    eO = t(531506),
    ek = t(375708),
    ew = t(51465);
function eB() {
    return (0, i.jsxs)("div", {
        className: ey()(ew.dt, ew.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: ew.qq,
            }),
            (0, i.jsx)(ef.E, {
                variant: "text-sm/medium",
                className: ew.tD,
                children: ek.intl.format(ek.t.f5VHKm, {}),
            }),
        ],
    });
}
function eF(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: ew.dt,
        children: [(0, i.jsx)(eA.t, { size: "md", className: ew.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var eY = t(773669),
    eV = t(287809),
    eW = t(975571),
    eH = t(252424),
    ez = t(580630),
    e$ = t(155718),
    eJ = t(61572),
    eK = t(717925),
    eq = t(596034),
    eQ = t(848584),
    eZ = t(241989),
    eX = t(908419),
    e0 = t(888751),
    e1 = t(874638),
    e3 = t(692440),
    e6 = t(788868),
    e8 = t(818348),
    e2 = t(327105),
    e5 = t(7921);
function e4(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, eX.U)();
    return (0, i.jsx)(eq._, {
        variant: {
            type: eq.I.Subscription,
            purchaseButtonText: ek.intl.string(ek.t.eUEeCt),
            totalDue: s,
            renewalPrice: l,
            currency: r,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: a,
        },
        paymentSourceType: n,
        immediateDelivery: u,
    });
}
function e9(e) {
    return ek.intl.format(ek.t.IeaYqg, { endDate: e });
}
function e7(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: e5.bU }),
            (0, i.jsx)(ef.E, { variant: "text-sm/normal", className: e5.b7, children: n }),
            (0, i.jsx)("div", { className: e5.bU }),
        ],
    });
}
function ne(e) {
    let {
            originalAmount: n,
            basePlanAdjustment: t,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: s,
            checkoutInvoicePreview: r,
        } = e,
        a = ((e) => {
            let {
                addedQuantity: n,
                guildBoostingSubscriptionPlan: t,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: s,
                subscriptionDiscount: r,
                entitlementDiscount: a,
                originalAmount: u,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: ek.intl.formatToPlainString(ek.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, X.Mn)(t.id, !1, i),
                }),
                value: i ? l : s,
                subscriptionDiscount: r,
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
            label: ek.intl.formatToPlainString(ek.t.ZSVged, { planName: (0, X.RH)(l[0].subscriptionPlanId) }),
            tooltip: ek.intl.string(ek.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: ek.intl.string(ek.t["+as5ZZ"]),
                tooltip: ek.intl.string(ek.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: ek.intl.string(ek.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, e0.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(eQ.Vm, {
        defaultExpanded: !0,
        label: ek.intl.string(e2.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function nn(e) {
    let {
        isSubscriptionUpdate: n,
        premiumSubscription: t,
        checkoutInvoicePreview: l,
        renewalInvoicePreview: s,
        isPrepaid: r,
        isReverseTrial: a,
        priceOptions: u,
    } = e;
    return null != t
        ? (0, i.jsx)(e3.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e3.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function nt(e) {
    let {
            guildId: n,
            paymentSources: t,
            priceOptions: s,
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
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                o = (0, u.bG)([z.A, U.A], () => {
                    let e = z.A.getGuild(t);
                    return null != e ? e : U.A.isGuildFetching(t) ? null : U.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(e6.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                S = (0, eR.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, I.Ay)(),
                [y, h] = (0, eL.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: P.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E, _] = (0, eL.YV)({
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
                    checkoutInvoicePreview: y,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: E,
                    renewalInvoiceError: _,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: y,
                    renewalInvoicePreview: E,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: n,
            priceOptions: s,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: c,
            newAdditionalPlans: d,
        }),
        {
            isSubscriptionUpdate: y,
            guild: h,
            isPrepaid: E,
            isReverseTrial: _,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
        } = g,
        N = (0, A.A)({ location: "GuildBoostReview", message: ek.intl.string(e2.default["tK8A/8"]) }),
        b = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == f || null == x || null == h) return (0, i.jsx)(eK.E, {});
    let C = (0, i.jsx)(nn, {
            isSubscriptionUpdate: y,
            premiumSubscription: a,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
            isPrepaid: E,
            isReverseTrial: _,
            priceOptions: s,
        }),
        j = (0, i.jsx)(eJ.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: ek.intl.string(ek.t["u+Cw58"]),
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
                paymentSources: s,
                paymentSourceId: r,
            } = e;
            return {
                paymentSourceType: (0, w.g)(s, r),
                premiumSubscriptionPlan: t,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, e3.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: y,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: x,
            checkoutInvoicePreview: f,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(e4, { ...T }),
        L = (function (e) {
            let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: s,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: u, isPrepaid: o, isReverseTrial: c } = a,
                d = t.interval,
                p = t.intervalCount,
                m = (e) => (0, e1.Z)(i.invoiceItems).find((n) => e6.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                y = null != g ? S.quantity - g.quantity : S.quantity,
                h = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                E = h.reduce((e, n) => e + n.amount, 0),
                P = (0, eL.sL)(S) * y,
                I = (0, ez.$g)(P, i.currency),
                _ = (0, ez.CE)(I, d, p),
                f = (0, ez.$g)(i.total, i.currency) + (i.currency !== e8.Yr.USD ? "*" : ""),
                A = i.subtotal - P - E,
                x = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * y };
                }),
                N = x.find((e) => e.type === e$.iS.SUBSCRIPTION_PLAN),
                b = x.find((e) => e.type === e$.iS.ENTITLEMENT),
                C = S.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: _,
                formattedOriginalAmountGuildBoostRate: (0, ez.CE)((0, ez.$g)(C, i.currency), d, p),
                formattedTotal: f,
                basePlanAdjustment: E,
                basePlanInvoiceItems: h,
                guildBoostingAdjustment: A,
                subscriptionDiscount: N,
                entitlementDiscount: b,
                originalAmount: C,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: s,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
            priceOptions: s,
            reviewState: g,
        }),
        R = (0, i.jsx)(ne, { ...L }),
        D = (function (e, n, t) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: s,
                    isPrepaid: r,
                    formattedGuildBoostRate: a,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: o,
                } = n,
                c = null != o;
            return {
                label: ek.intl.formatToPlainString(ek.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, X.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eZ.a6, {}),
                price: a,
                PriceIcon: c ? eA.t : void 0,
                priceTooltip: c ? ek.intl.string(e2.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            h,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: e9(i.currentPeriodEnd) } : null;
            })({ isPrepaid: E, isReverseTrial: _, premiumSubscription: a }),
        ),
        G = (0, i.jsx)(eZ.f7, { ...D });
    return (0, i.jsx)(eK.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: N,
        purchaseItemContent: G,
        subscriptionDetailsContent: C,
        paymentSelectContent: j,
        invoiceSummaryContent: R,
        legalContent: M,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: ek.intl.string(e2.default.R0cZsM),
    });
}
var ni = t(652215);
t(26279);
var nl = t(406263);
function ns(e) {
    return "" === e || "-" === e;
}
function nr(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), ns(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: nl.U$,
        children: [
            (0, i.jsx)(eP.K, {
                variant: "secondary",
                size: "md",
                icon: eI.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": ek.intl.string(ek.t["k+ohJm"]),
                disabled: !c || u <= s,
            }),
            (0, i.jsx)("div", {
                className: nl.WJ,
                children: (0, i.jsx)("input", {
                    className: nl.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (ns(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        ns(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(eP.K, {
                variant: "secondary",
                size: "md",
                icon: e_.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": ek.intl.string(ek.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function na(e) {
    let { message: n } = e;
    return (0, i.jsx)(ef.E, { variant: "text-xs/normal", color: "text-muted", className: nl.jH, children: n });
}
function nu(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: nl.Vk,
        children: [
            (0, i.jsx)("div", {
                className: nl.D0,
                children: (0, i.jsx)(eA.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: nl.ue,
                    color: eM.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: nl.yP, children: n }),
        ],
    });
}
function no(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
        planLabel: r,
        planPriceContent: a,
        subtotalContent: u,
        refreshSubtotalContent: o,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: S,
        refreshDiscountCallout: g,
        legacyPricingNotes: y,
        refreshPricingNotes: h,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: e5.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: e5.E6,
                        children: [
                            (0, i.jsx)(ex.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: e5.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e5.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ey()(e5.QK, { [e5.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: e5.J3 }),
            (0, i.jsxs)("div", {
                className: e5.mP,
                children: [
                    (0, i.jsx)("div", { className: e5.xp, children: ek.intl.string(ek.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: ey()(e5.__invalid_planSelectorSubtotalPrice, { [e5.S]: n }),
                        children: u,
                    }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nc(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
        refreshNextStepLabel: r,
        planLabel: a,
        planPriceContent: u,
        subtotalContent: o,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: S,
        discountCallout: g,
        refreshDiscountCallout: y,
        legacyPricingNotes: h,
        refreshPricingNotes: E,
    } = e;
    return (0, i.jsxs)("div", {
        className: nl.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: nl.K3,
                children: [
                    (0, i.jsx)(ef.E, {
                        variant: "text-md/medium",
                        className: nl.bk,
                        children: ek.intl.string(ek.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eN._, { className: nl.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ef.E, { variant: "text-md/medium", className: nl.kX, children: r }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: nl.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: nl.fX,
                        children: [
                            (0, i.jsx)(nr, {
                                value: t,
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(ef.E, { variant: "text-md/medium", className: nl.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ey()(nl.El, { [e5.S]: n }), children: u }),
                ],
            }),
            y,
            (0, i.jsxs)("div", {
                className: nl.fh,
                children: [
                    (0, i.jsx)(eb.D, {
                        variant: "heading-lg/semibold",
                        className: nl.O3,
                        children: ek.intl.string(ek.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: ey()(nl.BU, { [e5.S]: n }), children: c }),
                ],
            }),
            E.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function nd(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e5.Mv,
        children: [
            (0, i.jsx)(eC._, { className: e5.T5, color: eh.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    ek.intl.format(ek.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(eE.m, {
                              text: ek.intl.formatToPlainString(ek.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(ej.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e5.Y5,
                                  color: eh.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function np(e) {
    let {
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setNumGuildBoosts: s,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: S = !1,
            showRefreshSubtotalRate: g = !1,
            refreshNextStepLabel: y = ek.intl.string(ek.t.QBnNHq),
        } = e,
        h = (function (e) {
            let n,
                t,
                {
                    premiumSubscriptionPlan: s,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: S,
                    showRefreshSubtotalRate: g,
                } = e,
                y =
                    ((n = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription())),
                    (0, u.bG)([ec.A], () =>
                        n?.paymentSourceId != null ? ec.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                h = s.interval,
                E = s.intervalCount,
                _ = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(e6.pe.GUILD), h, E)),
                f = (0, u.bG)([eV.default], () => eV.default.getCurrentUser()),
                A = (0, eT.A)({ forceFetch: !1 });
            r()(null != _, "Missing guildBoostingSubscriptionPlan");
            let x = [{ planId: _.id, quantity: 1 }],
                N = c?.items.find(
                    (e) => e.planId === e6.gD.PREMIUM_MONTH_TIER_2 || e.planId === e6.gD.PREMIUM_YEAR_TIER_2,
                );
            null != N && x.push(N);
            let b = c?.items.find(
                    (e) => e.planId === e6.gD.PREMIUM_MONTH_GUILD || e.planId === e6.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == y || !e6.uJ.has(y) || null == b,
                { analyticsLocations: j } = (0, I.Ay)(),
                [T, M] = (0, eL.YV)({
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
            let R = (0, eU.V)()?.subscription_trial?.sku_id === e6.pe.TIER_2,
                D = X.Ay.hasBoostDiscount(f),
                U = D && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), e6.PremiumTypes.TIER_1),
                G = T?.findInvoiceItemByPlanId(_.id),
                O =
                    null != G
                        ? { amount: G.amount, tax: 0, taxInclusive: !0, currency: T.currency }
                        : X.Ay.getPrice(_.id, D, !1, S),
                k = a * O.amount,
                w = (0, eR.ds)() && D && null != c,
                B = (function (e) {
                    let n,
                        {
                            existingAvailableSlotsCount: t,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: s,
                            withTrialOfferCopyVariant: r,
                        } = e;
                    return (
                        (n = l ? "reverse_trial" : s ? "discount" : r ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: t > 0,
                            showFractionalPremiumBanner: i === e6.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: w,
                    hasDiscountUpsell: U,
                    withTrialOfferCopyVariant: R,
                });
            "discount" === B.upsellVariant
                ? (r()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = ek.intl.format(ek.t.hf6YOY, { planName: X.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = ek.intl.format("upsell_trial" === B.upsellVariant ? ek.t.ba1L74 : ek.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eH.l9)(eY.default.locale, e6.oX / 100),
                      freeSubscriptionCount: e6.M4,
                  }));
            let F = p.filter((e) => (0, Z.I5)(e)).length,
                Y = (0, X.J$)(S.paymentSourceId),
                { ipCountryCode: V } = (0, eD.A)(),
                W = "HR" === V && O.currency === e8.Yr.EUR,
                H =
                    w && null != c
                        ? (0, i.jsx)(e7, { text: e9(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: ey()(e5.hA, e5.G3), children: ek.intl.string(ek.t.jNY1FO) }),
                z =
                    w && null != c
                        ? (0, i.jsx)(e7, { text: e9(c.currentPeriodEnd), className: e5.jk })
                        : (0, i.jsx)("div", { className: nl._X, children: ek.intl.string(ek.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(nd, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eO.vi, { fractionalPremiumInfo: A }) : null,
                Q = Y
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === e6.WT.YEAR
                              ? ek.intl.string(ek.t.YDpAzZ)
                              : n === e6.WT.MONTH && 1 === t
                                ? ek.intl.string(ek.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: E }) ?? ek.intl.string(ek.t.K9Bmze))
                    : ek.intl.string(ek.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : Y
                      ? (0, ez.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, ez.$g)(n, t);
                            return i === e6.WT.YEAR
                                ? ek.intl.formatToPlainString(ek.t["8M04YJ"], { price: s })
                                : i === e6.WT.MONTH && 1 === l
                                  ? ek.intl.formatToPlainString(ek.t.VStWCR, { price: s })
                                  : i === e6.WT.MONTH && l > 1
                                    ? ek.intl.formatToPlainString(ek.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: h, intervalCount: E, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eG.A, {
                          price: k,
                          currency: O.currency,
                          intervalType: h,
                          intervalCount: E,
                          isPrepaidPaymentSource: Y,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !Y
                      ? (0, ez.CE)((0, ez.$g)(k, O.currency), h, E)
                      : (0, ez.$g)(k, O.currency),
                ei = [],
                el = [];
            if (W) {
                let e = (0, i.jsx)(
                    ev.A,
                    {
                        message: ek.intl.formatToPlainString(ek.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, ez.$g)(7.5345 * k, e8.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let es = ek.intl.format(ek.t.Om31w8, { documentationLink: eW.A.getArticleURL(ni.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(ev.A, { message: es }, "localized-pricing")),
                el.push((0, i.jsx)(na, { message: es }, "localized-pricing")),
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
                            ? (0, i.jsx)(eB, {})
                            : (0, i.jsx)(eF, { text: t, color: eM.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(eB, {}) : (0, i.jsx)(nu, { text: t }),
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
    return (0, i.jsx)(S ? nc : no, {
        isLoading: h.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
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
        refreshNextStepLabel: y,
    });
}
let nm = e6.gD.NONE_MONTH;
var nS = t(898640);
function ng(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        { activeSubscription: s } = (0, G.P5)(),
        {
            numGuildBoostsToPurchase: a,
            setNumGuildBoostsToPurchase: o,
            guildId: c,
            currency: d,
            closeGuildPerksModal: p,
            paymentModalArgs: m,
        } = ep(),
        S = (0, h.A)(() => (0, Z.D$)($.A.boostSlots)),
        g = (0, Y.n)("GuildBoostPurchaseModal"),
        y = eo.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        E = g && y,
        P = (0, u.bG)([U.A], () => (null != c ? U.A.getGuild(c) : void 0), [c]),
        I = null != c ? z.A.getGuild(c) : null,
        _ = null != s && s.isPurchasedExternally,
        f = d ?? void 0,
        A = null == m.paymentSourceId ? { currency: f } : { paymentSourceId: m.paymentSourceId, currency: f },
        x = (0, u.bG)([K.A], () => (null != s ? (0, en.c9)(s.planId) : null)),
        N = (0, u.bG)([K.A], () => (null == x ? K.A.get(nm) : x));
    r()(null != c, "Missing guildId"), r()(null != N, "Missing nextPremiumSubscriptionPlan");
    let b = (0, i.jsx)(np, {
        premiumSubscriptionPlan: N,
        numGuildBoosts: a,
        setNumGuildBoosts: o,
        setForceDisableSubmitButton: t,
        premiumSubscription: s,
        existingAvailableSlots: S,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            n(), null != p && p(), (0, eu.e)();
        },
        priceOptions: A,
        isRefreshEnabled: g,
        showRefreshSubtotalRate: E,
        refreshNextStepLabel: l,
    });
    return (
        _ && null != s && null != s.paymentGateway
            ? (b = (0, i.jsxs)("div", {
                  className: nS.xK,
                  children: [
                      (0, i.jsx)(er.w, {
                          type: "critical",
                          children: ek.intl.format(ek.t["/m3Y3s"], { paymentGatewayName: e8.qm[s.paymentGateway] }),
                      }),
                      b,
                  ],
              }))
            : null == c ||
              U.A.isGuildFetching(c) ||
              null != P ||
              null != I ||
              (b = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ea.p, {
                          messageType: ea.Y.ERROR,
                          className: nS.MR,
                          children: ek.intl.string(ek.t.eAn6z2),
                      }),
                      b,
                  ],
              })),
        b
    );
}
var ny = t(460905),
    nh = t(183623),
    nE = t(95635),
    nP = t(935462),
    nI = t(532794),
    n_ = t(811611),
    nf = t(901017),
    nA = t(403052);
function nx(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eY.default], () => eY.default.locale);
    return (0, i.jsxs)("div", {
        className: nA.mH,
        children: [
            (0, i.jsx)(nf.A, {
                icon: eC._,
                iconClassName: nA.pl,
                description: ek.intl.formatToPlainString(ek.t.sQBgs2, { numFreeGuildSubscriptions: e6.M4 }),
                color: eh.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nf.A, {
                icon: eC._,
                iconClassName: nA.pl,
                description: ek.intl.formatToPlainString(ek.t["1A6vXi"], { percent: (0, eH.l9)(t, e6.oX / 100) }),
                color: eh.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nf.A, { icon: ny.n, iconClassName: nA.zO, description: ek.intl.string(ek.t.Z9b2x2) }) : null,
            (0, i.jsx)(nf.A, { icon: nh.F, iconClassName: nA.Kg, description: ek.intl.string(ek.t["8dqG5E"]) }),
            (0, i.jsx)(nf.A, { icon: nE.J, iconClassName: nA.$z, description: ek.intl.string(ek.t.cBorIy) }),
        ],
    });
}
function nN(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: s,
            onSkip: r,
            onSubscriptionConfirmation: a,
            analyticsLocation: u,
            analyticsSourceLocation: m,
            priceOptions: g,
        } = e,
        { analyticsLocations: y, sourceAnalyticsLocations: h } = (0, I.Ay)(P.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        E = null == n || null == n.premiumSubscriptionType,
        _ = X.Ay.getPrice(e6.gD.PREMIUM_MONTH_TIER_2, !1, !1, g),
        f = (0, ez.$g)(_.amount, _.currency),
        A = (0, eU.V)(),
        x = A?.trial_id,
        N = A?.subscription_trial?.sku_id === e6.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(ni.HAw.PREMIUM_UPSELL_VIEWED, { type: e6.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nP.s_, { "data-migration-pending": !0, onClick: t, className: nA.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        N && (0, i.jsx)(n_.Vq, { className: nA.Fg }),
                        (0, i.jsx)("div", { className: ey()(nA.Tn, { [nA.NH]: N }) }),
                        (0, i.jsx)("div", {
                            className: nA.G3,
                            children:
                                null != x
                                    ? ek.intl.string(ek.t.AoSzEr)
                                    : ek.intl.format(ek.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, i.jsx)(nx, { shouldUpsellFromNoneTier: E }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: ek.intl.string(ek.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: ek.intl.string(ek.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != x ? ek.intl.string(ek.t["Gd/XHF"]) : ek.intl.string(ek.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nI.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: e6.pe.TIER_2,
                                                    analyticsLocations: y,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: ni.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function nb(e) {
    let { handleClose: n, handleStepChange: t, onSubscriptionConfirmation: s } = e,
        { activeSubscription: a } = (0, G.P5)(),
        { currency: o, paymentModalArgs: c, analyticsLocation: d, analyticsSourceLocation: p } = ep(),
        m = (0, u.bG)([K.A], () => (null != a ? (0, en.c9)(a.planId) : null)),
        S = (0, u.bG)([K.A], () => (null == m ? K.A.get(nm) : m));
    r()(null != S, "Missing nextPremiumSubscriptionPlan"), r()(null != o && "" !== o, "Currency not defined");
    let { paymentSourceId: g, paymentSources: y } = c,
        h = null != a ? a.paymentSourceId : null,
        E = Object.keys(y).length > 0,
        P = l.useCallback(() => t(O.pn.PLAN_SELECT), [t]),
        I = l.useCallback(() => t(null != h || E ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS), [t, h, E]);
    return (0, i.jsx)(nN, {
        premiumSubscriptionPlan: S,
        analyticsLocation: d,
        analyticsSourceLocation: p,
        onClose: n,
        onBack: P,
        onSkip: I,
        onSubscriptionConfirmation: s,
        priceOptions: null == g ? { currency: o } : { paymentSourceId: g, currency: o },
    });
}
var nC = t(879100);
let nj = [O.pn.PLAN_SELECT, O.pn.REVIEW, O.pn.CONFIRM],
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
        handleStepChange: s,
        primaryButtonProps: a,
        secondaryButton: u,
        legacySubmitButton: c,
    } = e;
    return n === O.pn.CONFIRM
        ? null
        : n === O.pn.REVIEW
          ? (r()(null != a, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(M.lo, { onBackClick: null != l ? () => s(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: ek.intl.string(ek.t["13/7kX"]),
                                  onClick: () => s(l),
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
            onClose: s,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: g,
            guildId: er,
            onSubscribeComplete: ea,
            onSubscriptionConfirmation: eu,
            applicationId: eo,
            intent: ec,
        } = e,
        {
            numGuildBoostsToPurchase: ed,
            currency: em,
            setCurrency: eS,
            currencies: eg,
            setCurrencies: ey,
            paymentModalArgs: eh,
            disablePremiumUpsell: eE,
        } = ep(),
        {
            activeSubscription: eP,
            blockedPayments: eI,
            startingFractionalPremiumEndsAtRef: e_,
            customCheckoutFlow: ef,
        } = (0, G.P5)(),
        eA = (0, L.t4)((e) => e.hasAcceptedTerms),
        ex = (0, A.A)({ location: "GuildBoostPurchaseModal", message: ek.intl.string(e2.default["tK8A/8"]) }),
        eN = (0, v.sw)(),
        eb = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        eC = null != eP ? eP.paymentSourceId : null,
        ej = (0, u.bG)([K.A], () => (null != eP ? (0, en.c9)(eP.planId) : null)),
        ev = (0, u.bG)([K.A], () => null == eP || null != K.A.get(eP.planId)),
        eT = (0, u.bG)([K.A], () => (null == ej ? K.A.get(nm) : ej)),
        eM = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        eL = (0, u.bG)([U.A], () => (null != er ? U.A.getGuild(er) : void 0), [er]),
        {
            paymentSources: eR,
            setPurchaseError: eD,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eG,
            paymentAuthenticationState: eO,
            setPaymentSourceId: ew,
            isSubmittingCurrentStep: eB,
            paymentError: eF,
            purchaseError: eY,
            purchaseErrorBlockRef: eV,
        } = eh,
        eW = Object.keys(eR).length > 0,
        { checkoutPaymentSources: eH } = (0, j.t)(),
        ez = (0, A.iB)({ checkoutPaymentSources: eH, paymentSourceId: eU, location: "GuildBoostPurchaseModal" }),
        e$ = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        eJ = (0, f.Y)(),
        eK = l.useMemo(
            () => (null != eP && ev && eJ ? (0, F.v)(eP, ed) : [{ planId: e6.gD.PREMIUM_MONTH_GUILD, quantity: ed }]),
            [eP, ev, ed, eJ],
        ),
        eq = l.useMemo(() => (0, B.A)(), []),
        [eQ, eZ] = (0, h.A)(() => [eq ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eX } = (0, I.Ay)(o, P.A.GUILD_BOOST_PURCHASE_MODAL),
        e0 = l.useMemo(
            () =>
                eK.find((e) => {
                    let { planId: n } = e;
                    return e6.pW.has(n);
                })?.planId ?? e6.gD.PREMIUM_MONTH_GUILD,
            [eK],
        ),
        e1 = (0, u.bG)([K.A], () => K.A.get(e0)?.skuId, [e0]),
        e3 = l.useMemo(
            () => ({
                load_id: eQ,
                payment_type: e8.fr[e8.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(e6.pe.GUILD),
                subscription_type: ni.rzx.PREMIUM,
                subscription_plan_id: e0,
                quantity: ed,
                location: d,
                source: g,
                location_stack: eX,
                checkout_flow: N.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
            }),
            [eQ, d, eX, g, ed, e0],
        );
    l.useEffect(() => {
        (0, ee.c_)(eU);
    }, [eU]);
    let [e5, e4] = l.useState(O.pn.PLAN_SELECT),
        e9 = l.useMemo(() => Date.now(), [e5]),
        e7 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e4(e), eD(null);
                let i = Date.now();
                Q.default.track(ni.HAw.PAYMENT_FLOW_STEP, {
                    ...e3,
                    from_step: null != t ? t : e5,
                    to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e9,
                    flow_duration_ms: i - eZ,
                    guild_id: er,
                    application_id: eo,
                });
            },
            [eD, e3, e5, e9, eZ, er, eo],
        ),
        ne = {
            baseAnalyticsData: e3,
            flowStartTime: eZ,
            guildId: er,
            handleStepChange: e7,
            onSubscribeComplete: ea,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eG,
            setPurchaseError: eD,
        },
        nn = l.useRef(ne);
    l.useEffect(() => {
        nn.current = ne;
    }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: s,
                setIsSubmittingCurrentStep: r,
                setPurchaseError: a,
            } = nn.current;
            (async () => {
                if (!0 === e$)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, _.tn)(J.A.redirectedPaymentId),
                            i(O.pn.CONFIRM),
                            na(k.h.COMPLETED),
                            null != t && (await nT(t, null != ec)),
                            l?.();
                    } catch (t) {
                        na(k.h.FAIL),
                            a(t),
                            Q.default.track(ni.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: ni.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, _.bl)();
                    }
            })();
        }, [e$, ec]),
        (0, E.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, _.hP)(),
                null == er ||
                    null != z.A.getGuild(er) ||
                    null != U.A.getGuild(er) ||
                    U.A.isGuildFetching(er) ||
                    (0, D.y)(er),
                (0, R.b)({ ...e3, guild_id: er, application_id: eo, custom_checkout_flow: ef }),
                null != eP &&
                    null != eP.renewalMutations &&
                    Q.default.track(ni.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: er });
        });
    let [nl, ns] = l.useState(nj),
        [nr, na] = l.useState(k.h.WAITING),
        nu = () => {
            s(nr === k.h.COMPLETED);
        },
        no = null != eP && eP.isPurchasedExternally;
    l.useEffect(() => {
        eO !== V.oc.PENDING &&
            e5 !== O.pn.CONFIRM &&
            null != eC &&
            (nl !== nj && ns(nj), nj.includes(e5) || e5 === O.pn.PREMIUM_UPSELL || e7(O.pn.REVIEW)),
            e5 === O.pn.ADD_PAYMENT_STEPS && nl !== nv && ns(nv),
            no && e5 !== O.pn.PLAN_SELECT && e4(O.pn.PLAN_SELECT);
    }, [e5, e7, no, eO, eP, eC, nl]),
        (0, V.b)(e5, eO, e7, na),
        (0, O.zT)(e5, nr, na);
    let nc = (0, Y.n)("GuildBoostPurchaseModal"),
        nd = nc && (e5 === O.pn.REVIEW || e5 === O.pn.CONFIRM),
        np = (0, es.A)(nd),
        [ny, nh] = l.useState(!1),
        [nE, nP] = l.useState(!0),
        nI = l.useMemo(() => JSON.stringify(eg), [eg]);
    l.useEffect(() => {
        let e;
        eJ &&
            (null != K.A.get(e6.gD.PREMIUM_MONTH_GUILD) && ey((e = (0, ee._w)(e6.gD.PREMIUM_MONTH_GUILD, eU, !1))),
            null == eU && null != eP && null != eP.paymentSourceId ? eS(eP.currency) : null != e && eS(e[0]));
    }, [eU, eP, eJ, nI, eS, ey]);
    let n_ = (0, H.Y)({
        paymentModalArgs: eh,
        initialStep: O.pn.PAYMENT_TYPE,
        prependSteps: [O.pn.PLAN_SELECT],
        appendSteps: [O.pn.REVIEW, O.pn.CONFIRM],
        breadcrumpSteps: nl,
        currentBreadcrumpStep: e5,
        onReturn: () => {
            e7(Object.values(eR).length < 1 ? O.pn.PLAN_SELECT : O.pn.REVIEW, { trackedFromStep: O.pn.PAYMENT_TYPE });
        },
        onComplete: (e) => {
            e7(O.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            Q.default.track(ni.HAw.PAYMENT_FLOW_STEP, {
                ...e3,
                from_step: n,
                to_step: t,
                step_duration_ms: i - e9,
                flow_duration_ms: i - eZ,
                guild_id: er,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eI) n = (0, i.jsx)(x.oO, {});
    else if (eb && ev && eJ && null != em && "" !== em)
        if (eP?.isPausedOrPausePending && !eP.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nS.C, children: ek.intl.string(ek.t.mOWsF1) }),
            });
        else if (null != eP && null != eP.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nS.C, children: ek.intl.string(ek.t.npfhh0) }),
            });
        else if (e5 === O.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nb, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: nu,
                handleStepChange: e7,
                analyticsData: e3,
                setAnalyticsData: e8.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: eu,
            });
        else {
            let e, t, l, s;
            r()(em, "Currency not defined");
            let a = null != eU ? { paymentSourceId: eU, currency: em } : { currency: em },
                u = z.A.getGuild(er),
                o = null,
                c = null == eL && null == u;
            switch (e5) {
                case O.pn.PLAN_SELECT:
                    r()(null != er, "Missing guildId"),
                        (e = (0, i.jsx)(ng, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: nu,
                            handleStepChange: e7,
                            analyticsData: e3,
                            setAnalyticsData: e8.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: nP,
                            refreshNextStepLabel: (0, O.Ir)(
                                nl.find((e) => e !== O.pn.PLAN_SELECT && e !== O.pn.CONFIRM) ?? O.pn.REVIEW,
                            ),
                        })),
                        (l = nc
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: ek.intl.string(ek.t["ETE/oC"]),
                                  onClick: nu,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: ek.intl.string(ek.t.oEAioF),
                                  onClick: nu,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(S.$, {
                            variant: "primary",
                            text: ek.intl.string(ek.t["3PatSz"]),
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
                                forceDisableSubmitButton: nE,
                                numGuildBoostsToPurchase: ed,
                                isDisabledBecauseExternalSubscription: no,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                eE || (null != ej && ej.premiumSubscriptionType === e6.PremiumTypes.TIER_2)
                                    ? e7(null != eC || eW ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS)
                                    : e7(O.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case O.pn.ADD_PAYMENT_STEPS:
                    break;
                case O.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(y.N, { className: nS.__invalid_body });
                    break;
                case O.pn.REVIEW:
                    r()(null != eT, "Missing nextPremiumSubscriptionPlan"),
                        r()(null != er, "Missing guildId"),
                        (e = (0, i.jsx)(nt, {
                            guildId: er,
                            paymentSources: eR,
                            priceOptions: a,
                            currentPremiumSubscription: eP,
                            premiumSubscriptionPaymentSourceId: eC,
                            premiumSubscriptionPlan: eT,
                            newAdditionalPlans: eK,
                            paymentSourceId: eU,
                            setPaymentSourceId: ew,
                            onPaymentSourceAdd: () => {
                                e7(O.pn.ADD_PAYMENT_STEPS), ew(null);
                            },
                        })),
                        (t = O.pn.PLAN_SELECT);
                    let d = async () => {
                        r()(null != eK, "Missing newAdditionalPlans");
                        let e = (0, w.W)(eR, eU);
                        eD(null);
                        try {
                            na(k.h.PURCHASING),
                                eG(!0),
                                r()(null != eU, "Missing paymentSourceId"),
                                r()(null != eN, "Missing invoicePreview");
                            let n = { amount: eN.total, currency: eN.currency },
                                t = a.currency ?? eN.currency,
                                i = (0, X.U8)(eP, eK, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(ni.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e3,
                                    duration_ms: Date.now() - eZ,
                                    guild_id: er,
                                    application_id: eo,
                                }),
                                ny)
                            )
                                return;
                            if (null == eP || null == ej) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, _.Ky)({
                                    items: eK,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nh(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(eP, eK) };
                                (l.currency = eP.currency ?? t),
                                    (l.paymentSource = null != eC ? eR[eC] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, _.nV)(eP, l, n, i, eX);
                                if (s.redirectConfirmation) return void nh(null != s.redirectURL);
                            }
                            null == ec && e7(O.pn.CONFIRM),
                                na(k.h.COMPLETED),
                                null != er && (await nT(er, null != ec)),
                                null != ec && nu(),
                                ea?.();
                        } catch (n) {
                            na(k.h.FAIL),
                                eD(n),
                                Q.default.track(ni.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e3,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === ni.hes.CARD ? ni.kM_.STRIPE : ni.kM_.BRAINTREE) : null,
                                    payment_source_id: eU,
                                    duration_ms: Date.now() - eZ,
                                });
                        } finally {
                            ny || eG(!1);
                        }
                    };
                    (o = {
                        text: ek.intl.string(ek.t.eUEeCt),
                        loading: eB,
                        disabled: null == eU || !eA || null != ex || ez,
                        onClick: d,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(b.p, { ...o }));
                    break;
                case O.pn.CONFIRM:
                    let m = u?.name ?? eL?.name,
                        g = (0, w.g)(eR, eU),
                        h = (0, en.b2)(e_.current) && null != ej && !e6.YV.has(ej.id);
                    e = (0, i.jsx)(nC.W, {
                        guild: u,
                        guildBoostQuantity: ed + eM.length,
                        onClose: nu,
                        withAnimation: !1,
                        paymentSourceType: g,
                        fallbackGuildName: m,
                        didPurchaseOnFractionalPremium: h,
                        customCheckoutFlow: ef,
                    });
            }
            let E = null != eF && null == (0, O.ou)(eF) ? eF : eY;
            n =
                e5 === O.pn.ADD_PAYMENT_STEPS
                    ? n_
                    : (0, i.jsx)(W.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === O.pn.REVIEW || n === O.pn.CONFIRM || (t && n === O.pn.PLAN_SELECT);
                          })({ currentStep: e5, isBoostingPreCheckoutModalRefreshEnabled: nc }),
                          steps: nl,
                          currentStep: e5,
                          paymentError: E,
                          purchaseErrorBlockRef: eV,
                          hasCurrencies: eg.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nM, {
                              currentStep: e5,
                              isRefreshEnabled: nc,
                              backStep: t,
                              handleStepChange: e7,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nS._5, children: (0, i.jsx)(m.y, {}) });
    let nf = (0, T.u)({ skuId: e1, step: e5 }),
        nA = null;
    return (eI ||
        (nc && e5 !== O.pn.PREMIUM_UPSELL
            ? (nA = e5 === O.pn.REVIEW ? (0, i.jsx)(M.s3, { ...nf }) : (0, i.jsx)(M.s3, { title: nf.title }))
            : e5 === O.pn.REVIEW
              ? (nA = (0, i.jsx)(M.s3, { ...nf }))
              : e5 !== O.pn.PREMIUM_UPSELL &&
                (nA = (0, i.jsx)(et.A, { onClose: nu, currentStep: e5, purchaseState: nr }))),
    nc && e5 === O.pn.CONFIRM)
        ? (0, i.jsx)(el.A, {
              mediaUrls: np.mediaUrls,
              isSuccess: np.isSuccess,
              transitionState: t,
              onClose: () => (nu(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ei.A, {
                      transitionState: t,
                      guild: z.A.getGuild(er),
                      guildBoostQuantity: ed + eM.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(C.e0, {
              children: (0, i.jsxs)(M.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nu(), Promise.resolve()),
                  children: [nA, n],
              }),
          });
}
function nR(e) {
    let {
            totalNumberOfSlotsToAssign: n = 1,
            disablePremiumUpsell: t,
            closeGuildPerksModal: l,
            guildId: s,
            analyticsLocation: r,
            analyticsSourceLocation: a,
        } = e,
        o = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: c } = (0, I.Ay)(P.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, h.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(I.f5, {
        value: c,
        children: (0, i.jsx)(G.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: N.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(eS, {
                initialNumGuildBoostsToPurchase: d,
                disablePremiumUpsell: t,
                closeGuildPerksModal: l,
                guildId: s ?? null,
                analyticsLocation: r,
                analyticsSourceLocation: a,
                children: (0, i.jsx)(nL, { ...e }),
            }),
        }),
    });
}
