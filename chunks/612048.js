t.d(n, { default: () => nG });
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
    h = t(891197),
    y = t(444927),
    P = t(964486),
    E = t(793574),
    I = t(688810),
    A = t(753390),
    f = t(160946),
    _ = t(606267),
    x = t(545075),
    b = t(155506),
    N = t(981036),
    C = t(725836),
    j = t(364995),
    v = t(666646),
    T = t(584160),
    M = t(480642),
    L = t(671744),
    D = t(357669),
    R = t(832286),
    G = t(958340),
    U = t(834252),
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
    er = t(295405);
let [ea, eu, eo] = (0, t(786300).A)();
function ec(e) {
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
        [g, h] = l.useState([]),
        { activeSubscription: y } = (0, U.P5)(),
        P = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        E = (0, u.bG)([er.A], () => er.A.defaultPaymentSourceId),
        I = null != y ? y.paymentSourceId : null,
        A = (0, H._V)(null != I ? I : P ? E : null);
    return (0, i.jsx)(ea.Provider, {
        value: {
            numGuildBoostsToPurchase: d,
            setNumGuildBoostsToPurchase: p,
            disablePremiumUpsell: t,
            closeGuildPerksModal: s,
            guildId: a,
            currency: m,
            setCurrency: S,
            currencies: g,
            setCurrencies: h,
            paymentModalArgs: A,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        },
        children: r,
    });
}
var ed = t(879100),
    ep = t(788868);
function em(e) {
    let { handleClose: n, existingAvailableSlots: t } = e,
        { guildId: l, numGuildBoostsToPurchase: s, paymentModalArgs: r } = eu(),
        { activeSubscription: a, startingFractionalPremiumEndsAtRef: o, customCheckoutFlow: c } = (0, U.P5)(),
        d = (0, u.bG)([G.A], () => (null != l ? G.A.getGuild(l) : void 0), [l]),
        p = null != l ? z.A.getGuild(l) : null,
        m = (0, y.A)(() => (0, en.b2)(o.current)),
        S = (0, u.bG)([K.A], () => (null != a ? (0, en.c9)(a.planId) : null)),
        { paymentSources: g, paymentSourceId: h } = r,
        P = (0, w.g)(g, h),
        E = null != p ? p.name : null != d ? d.name : void 0,
        I = m && null != S && !ep.YV.has(S.id);
    return (0, i.jsx)(ed.W, {
        guild: p,
        guildBoostQuantity: s + t.length,
        onClose: n,
        withAnimation: !1,
        paymentSourceType: P,
        fallbackGuildName: E,
        didPurchaseOnFractionalPremium: I,
        customCheckoutFlow: c,
    });
}
var eS = t(683071),
    eg = t(512950),
    eh = t(87719);
let ey = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
t(321073);
var eP = t(503698),
    eE = t.n(eP),
    eI = t(661531),
    eA = t(990078),
    ef = t(408278),
    e_ = t(834040),
    ex = t(499373),
    eb = t(834730),
    eN = t(403581),
    eC = t(663803),
    ej = t(320448),
    ev = t(534514),
    eT = t(104510),
    eM = t(695366),
    eL = t(726656),
    eD = t(531260),
    eR = t(404374),
    eG = t(543767),
    eU = t(881489),
    eO = t(477421),
    ek = t(234419),
    ew = t(363476),
    eB = t(531506),
    eF = t(375708),
    eY = t(51465);
function eV() {
    return (0, i.jsxs)("div", {
        className: eE()(eY.dt, eY.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eY.qq,
            }),
            (0, i.jsx)(eb.E, {
                variant: "text-sm/medium",
                className: eY.tD,
                children: eF.intl.format(eF.t.f5VHKm, {}),
            }),
        ],
    });
}
function eW(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: eY.dt,
        children: [(0, i.jsx)(eN.t, { size: "md", className: eY.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var eH = t(773669),
    ez = t(287809),
    e$ = t(975571),
    eJ = t(252424),
    eK = t(580630),
    eq = t(155718),
    eQ = t(682481),
    eZ = t(61572),
    eX = t(717925),
    e0 = t(596034),
    e1 = t(848584),
    e3 = t(241989),
    e6 = t(908419),
    e8 = t(888751),
    e2 = t(874638),
    e5 = t(692440),
    e4 = t(818348),
    e7 = t(327105),
    e9 = t(7921);
function ne(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e6.U)();
    return (0, i.jsx)(e0._, {
        variant: {
            type: e0.I.Subscription,
            purchaseButtonText: eF.intl.string(eF.t.eUEeCt),
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
function nn(e) {
    return eF.intl.format(eF.t.IeaYqg, { endDate: e });
}
function nt(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: e9.bU }),
            (0, i.jsx)(eb.E, { variant: "text-sm/normal", className: e9.b7, children: n }),
            (0, i.jsx)("div", { className: e9.bU }),
        ],
    });
}
function ni(e) {
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
                label: eF.intl.formatToPlainString(eF.t.a3cAOg, {
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
            label: eF.intl.formatToPlainString(eF.t.ZSVged, { planName: (0, X.RH)(l[0].subscriptionPlanId) }),
            tooltip: eF.intl.string(eF.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eF.intl.string(eF.t["+as5ZZ"]),
                tooltip: eF.intl.string(eF.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: eF.intl.string(eF.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, e8.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e1.Vm, {
        defaultExpanded: !0,
        label: eF.intl.string(e7.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function nl(e) {
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
        ? (0, i.jsx)(e5.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e5.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function ns(e) {
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
                o = (0, u.bG)([z.A, G.A], () => {
                    let e = z.A.getGuild(t);
                    return null != e ? e : G.A.isGuildFetching(t) ? null : G.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(ep.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                S = (0, eU.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, I.Ay)(),
                [h, y] = (0, eG.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: E.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P, A] = (0, eG.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: E.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, v.OQ)({
                    checkoutInvoicePreview: h,
                    checkoutInvoiceError: y,
                    renewalInvoicePreview: P,
                    renewalInvoiceError: A,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: P,
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
            isSubscriptionUpdate: h,
            guild: y,
            isPrepaid: P,
            isReverseTrial: A,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
        } = g,
        b = (0, _.A)({ location: "GuildBoostReview", message: eF.intl.string(e7.default["tK8A/8"]) }),
        N = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == f || null == x || null == y) return (0, i.jsx)(eX.E, {});
    let C = (0, i.jsx)(nl, {
            isSubscriptionUpdate: h,
            premiumSubscription: a,
            checkoutInvoicePreview: f,
            renewalInvoicePreview: x,
            isPrepaid: P,
            isReverseTrial: A,
            priceOptions: s,
        }),
        j = (0, i.jsx)(eQ.y, {
            children: (0, i.jsx)(eZ.n, {
                setPaymentSourceId: m,
                paymentSourceId: p,
                location: "GuildBoostReview",
                label: eF.intl.string(eF.t["u+Cw58"]),
                onPaymentSourceAdd: S,
                additionalPaymentSourceDropdownProps: N,
                premiumSubscriptionPaymentSourceId: o,
                hideCurrencySelect: null != o,
            }),
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
                startDate: (0, e5.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: x,
            checkoutInvoicePreview: f,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(ne, { ...T }),
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
                m = (e) => (0, e2.Z)(i.invoiceItems).find((n) => ep.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                h = null != g ? S.quantity - g.quantity : S.quantity,
                y = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                P = y.reduce((e, n) => e + n.amount, 0),
                E = (0, eG.sL)(S) * h,
                I = (0, eK.$g)(E, i.currency),
                A = (0, eK.CE)(I, d, p),
                f = (0, eK.$g)(i.total, i.currency) + (i.currency !== e4.Yr.USD ? "*" : ""),
                _ = i.subtotal - E - P,
                x = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * h };
                }),
                b = x.find((e) => e.type === eq.iS.SUBSCRIPTION_PLAN),
                N = x.find((e) => e.type === eq.iS.ENTITLEMENT),
                C = S.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, eK.CE)((0, eK.$g)(C, i.currency), d, p),
                formattedTotal: f,
                basePlanAdjustment: P,
                basePlanInvoiceItems: y,
                guildBoostingAdjustment: _,
                subscriptionDiscount: b,
                entitlementDiscount: N,
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
        D = (0, i.jsx)(ni, { ...L }),
        R = (function (e, n, t) {
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
                label: eF.intl.formatToPlainString(eF.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, X.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(e3.a6, {}),
                price: a,
                PriceIcon: c ? eN.t : void 0,
                priceTooltip: c ? eF.intl.string(e7.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            y,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: nn(i.currentPeriodEnd) } : null;
            })({ isPrepaid: P, isReverseTrial: A, premiumSubscription: a }),
        ),
        U = (0, i.jsx)(e3.f7, { ...R });
    return (0, i.jsx)(eX.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: U,
        subscriptionDetailsContent: C,
        paymentMethodContent: j,
        invoiceSummaryContent: D,
        legalContent: M,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: eF.intl.string(e7.default.R0cZsM),
    });
}
var nr = t(652215);
t(26279);
var na = t(406263);
function nu(e) {
    return "" === e || "-" === e;
}
function no(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), nu(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: na.U$,
        children: [
            (0, i.jsx)(ef.K, {
                variant: "secondary",
                size: "md",
                icon: e_.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eF.intl.string(eF.t["k+ohJm"]),
                disabled: !c || u <= s,
            }),
            (0, i.jsx)("div", {
                className: na.WJ,
                children: (0, i.jsx)("input", {
                    className: na.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (nu(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        nu(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(ef.K, {
                variant: "secondary",
                size: "md",
                icon: ex.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eF.intl.string(eF.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function nc(e) {
    let { message: n } = e;
    return (0, i.jsx)(eb.E, { variant: "text-xs/normal", color: "text-muted", className: na.jH, children: n });
}
function nd(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: na.Vk,
        children: [
            (0, i.jsx)("div", {
                className: na.D0,
                children: (0, i.jsx)(eN.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: na.ue,
                    color: eR.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: na.yP, children: n }),
        ],
    });
}
function np(e) {
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
        legacyPricingNotes: h,
        refreshPricingNotes: y,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: e9.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: e9.E6,
                        children: [
                            (0, i.jsx)(eC.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: e9.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e9.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eE()(e9.QK, { [e9.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: e9.J3 }),
            (0, i.jsxs)("div", {
                className: e9.mP,
                children: [
                    (0, i.jsx)("div", { className: e9.xp, children: eF.intl.string(eF.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: eE()(e9.__invalid_planSelectorSubtotalPrice, { [e9.S]: n }),
                        children: u,
                    }),
                ],
            }),
            h.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nm(e) {
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
        refreshDiscountCallout: h,
        legacyPricingNotes: y,
        refreshPricingNotes: P,
    } = e;
    return (0, i.jsxs)("div", {
        className: na.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: na.K3,
                children: [
                    (0, i.jsx)(eb.E, {
                        variant: "text-md/medium",
                        className: na.bk,
                        children: eF.intl.string(eF.t["r+SebU"]),
                    }),
                    (0, i.jsx)(ej._, { className: na.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(eb.E, { variant: "text-md/medium", className: na.kX, children: r }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: na.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: na.fX,
                        children: [
                            (0, i.jsx)(no, {
                                value: t,
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(eb.E, { variant: "text-md/medium", className: na.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eE()(na.El, { [e9.S]: n }), children: u }),
                ],
            }),
            h,
            (0, i.jsxs)("div", {
                className: na.fh,
                children: [
                    (0, i.jsx)(ev.D, {
                        variant: "heading-lg/semibold",
                        className: na.O3,
                        children: eF.intl.string(eF.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: eE()(na.BU, { [e9.S]: n }), children: c }),
                ],
            }),
            P.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function nS(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e9.Mv,
        children: [
            (0, i.jsx)(eT._, { className: e9.T5, color: eI.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eF.intl.format(eF.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(eA.m, {
                              text: eF.intl.formatToPlainString(eF.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eM.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e9.Y5,
                                  color: eI.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ng(e) {
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
            refreshNextStepLabel: h = eF.intl.string(eF.t.QBnNHq),
        } = e,
        y = (function (e) {
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
                h =
                    ((n = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription())),
                    (0, u.bG)([er.A], () =>
                        n?.paymentSourceId != null ? er.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                y = s.interval,
                P = s.intervalCount,
                A = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(ep.pe.GUILD), y, P)),
                f = (0, u.bG)([ez.default], () => ez.default.getCurrentUser()),
                _ = (0, eD.A)({ forceFetch: !1 });
            r()(null != A, "Missing guildBoostingSubscriptionPlan");
            let x = [{ planId: A.id, quantity: 1 }],
                b = c?.items.find(
                    (e) => e.planId === ep.gD.PREMIUM_MONTH_TIER_2 || e.planId === ep.gD.PREMIUM_YEAR_TIER_2,
                );
            null != b && x.push(b);
            let N = c?.items.find(
                    (e) => e.planId === ep.gD.PREMIUM_MONTH_GUILD || e.planId === ep.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == h || !ep.uJ.has(h) || null == N,
                { analyticsLocations: j } = (0, I.Ay)(),
                [T, M] = (0, eG.YV)({
                    subscriptionId: c?.id,
                    items: x,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: C,
                    analyticsLocations: j,
                    analyticsLocation: E.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, v.Tr)(T, M);
            let L = !C && null == T && null == M;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let D = (0, ek.V)()?.subscription_trial?.sku_id === ep.pe.TIER_2,
                R = X.Ay.hasBoostDiscount(f),
                G = R && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), ep.PremiumTypes.TIER_1),
                U = T?.findInvoiceItemByPlanId(A.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: T.currency }
                        : X.Ay.getPrice(A.id, R, !1, S),
                k = a * O.amount,
                w = (0, eU.ds)() && R && null != c,
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
                            showFractionalPremiumBanner: i === ep.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: _.fractionalState,
                    isReverseTrial: w,
                    hasDiscountUpsell: G,
                    withTrialOfferCopyVariant: D,
                });
            "discount" === B.upsellVariant
                ? (r()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = eF.intl.format(eF.t.hf6YOY, { planName: X.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eF.intl.format("upsell_trial" === B.upsellVariant ? eF.t.ba1L74 : eF.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eJ.l9)(eH.default.locale, ep.oX / 100),
                      freeSubscriptionCount: ep.M4,
                  }));
            let F = p.filter((e) => (0, Z.I5)(e)).length,
                Y = (0, X.J$)(S.paymentSourceId),
                { ipCountryCode: V } = (0, eO.A)(),
                W = "HR" === V && O.currency === e4.Yr.EUR,
                H =
                    w && null != c
                        ? (0, i.jsx)(nt, { text: nn(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: eE()(e9.hA, e9.G3), children: eF.intl.string(eF.t.jNY1FO) }),
                z =
                    w && null != c
                        ? (0, i.jsx)(nt, { text: nn(c.currentPeriodEnd), className: e9.jk })
                        : (0, i.jsx)("div", { className: na._X, children: eF.intl.string(eF.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(nS, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eB.vi, { fractionalPremiumInfo: _ }) : null,
                Q = Y
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === ep.WT.YEAR
                              ? eF.intl.string(eF.t.YDpAzZ)
                              : n === ep.WT.MONTH && 1 === t
                                ? eF.intl.string(eF.t["6ZR3By"])
                                : null;
                      })({ intervalType: y, intervalCount: P }) ?? eF.intl.string(eF.t.K9Bmze))
                    : eF.intl.string(eF.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : Y
                      ? (0, eK.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eK.$g)(n, t);
                            return i === ep.WT.YEAR
                                ? eF.intl.formatToPlainString(eF.t["8M04YJ"], { price: s })
                                : i === ep.WT.MONTH && 1 === l
                                  ? eF.intl.formatToPlainString(eF.t.VStWCR, { price: s })
                                  : i === ep.WT.MONTH && l > 1
                                    ? eF.intl.formatToPlainString(eF.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: y, intervalCount: P, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(ew.A, {
                          price: k,
                          currency: O.currency,
                          intervalType: y,
                          intervalCount: P,
                          isPrepaidPaymentSource: Y,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !Y
                      ? (0, eK.CE)((0, eK.$g)(k, O.currency), y, P)
                      : (0, eK.$g)(k, O.currency),
                ei = [],
                el = [];
            if (W) {
                let e = (0, i.jsx)(
                    eL.A,
                    {
                        message: eF.intl.formatToPlainString(eF.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eK.$g)(7.5345 * k, e4.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let es = eF.intl.format(eF.t.Om31w8, { documentationLink: e$.A.getArticleURL(nr.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(eL.A, { message: es }, "localized-pricing")),
                el.push((0, i.jsx)(nc, { message: es }, "localized-pricing")),
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
                            ? (0, i.jsx)(eV, {})
                            : (0, i.jsx)(eW, { text: t, color: eR.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(eV, {}) : (0, i.jsx)(nd, { text: t }),
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
    return (0, i.jsx)(S ? nm : np, {
        isLoading: y.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
        planLabel: y.planLabel,
        planPriceContent: y.planPriceContent,
        subtotalContent: y.subtotalContent,
        refreshSubtotalContent: y.refreshSubtotalContent,
        legacyDescriptionContent: y.legacyDescriptionContent,
        refreshDescriptionContent: y.refreshDescriptionContent,
        fractionalBanner: y.fractionalBanner,
        existingSlotNotice: y.existingSlotNotice,
        discountCallout: y.discountCallout,
        refreshDiscountCallout: y.refreshDiscountCallout,
        legacyPricingNotes: y.legacyPricingNotes,
        refreshPricingNotes: y.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let nh = ep.gD.NONE_MONTH;
var ny = t(898640);
function nP(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        { activeSubscription: s } = (0, U.P5)(),
        {
            numGuildBoostsToPurchase: a,
            setNumGuildBoostsToPurchase: o,
            guildId: c,
            currency: d,
            closeGuildPerksModal: p,
            paymentModalArgs: m,
        } = eu(),
        S = (0, y.A)(() => (0, Z.D$)($.A.boostSlots)),
        g = (0, Y.n)("GuildBoostPurchaseModal"),
        h = ey.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        P = g && h,
        E = (0, u.bG)([G.A], () => (null != c ? G.A.getGuild(c) : void 0), [c]),
        I = null != c ? z.A.getGuild(c) : null,
        A = null != s && s.isPurchasedExternally,
        f = d ?? void 0,
        _ = null == m.paymentSourceId ? { currency: f } : { paymentSourceId: m.paymentSourceId, currency: f },
        x = (0, u.bG)([K.A], () => (null != s ? (0, en.c9)(s.planId) : null)),
        b = (0, u.bG)([K.A], () => (null == x ? K.A.get(nh) : x));
    r()(null != c, "Missing guildId"), r()(null != b, "Missing nextPremiumSubscriptionPlan");
    let N = (0, i.jsx)(ng, {
        premiumSubscriptionPlan: b,
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
            n(), null != p && p(), (0, eh.e)();
        },
        priceOptions: _,
        isRefreshEnabled: g,
        showRefreshSubtotalRate: P,
        refreshNextStepLabel: l,
    });
    return (
        A && null != s && null != s.paymentGateway
            ? (N = (0, i.jsxs)("div", {
                  className: ny.xK,
                  children: [
                      (0, i.jsx)(eS.w, {
                          type: "critical",
                          children: eF.intl.format(eF.t["/m3Y3s"], { paymentGatewayName: e4.qm[s.paymentGateway] }),
                      }),
                      N,
                  ],
              }))
            : null == c ||
              G.A.isGuildFetching(c) ||
              null != E ||
              null != I ||
              (N = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eg.p, {
                          messageType: eg.Y.ERROR,
                          className: ny.MR,
                          children: eF.intl.string(eF.t.eAn6z2),
                      }),
                      N,
                  ],
              })),
        N
    );
}
var nE = t(460905),
    nI = t(183623),
    nA = t(95635),
    nf = t(935462),
    n_ = t(532794),
    nx = t(811611),
    nb = t(901017),
    nN = t(403052);
function nC(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eH.default], () => eH.default.locale);
    return (0, i.jsxs)("div", {
        className: nN.mH,
        children: [
            (0, i.jsx)(nb.A, {
                icon: eT._,
                iconClassName: nN.pl,
                description: eF.intl.formatToPlainString(eF.t.sQBgs2, { numFreeGuildSubscriptions: ep.M4 }),
                color: eI.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nb.A, {
                icon: eT._,
                iconClassName: nN.pl,
                description: eF.intl.formatToPlainString(eF.t["1A6vXi"], { percent: (0, eJ.l9)(t, ep.oX / 100) }),
                color: eI.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nb.A, { icon: nE.n, iconClassName: nN.zO, description: eF.intl.string(eF.t.Z9b2x2) }) : null,
            (0, i.jsx)(nb.A, { icon: nI.F, iconClassName: nN.Kg, description: eF.intl.string(eF.t["8dqG5E"]) }),
            (0, i.jsx)(nb.A, { icon: nA.J, iconClassName: nN.$z, description: eF.intl.string(eF.t.cBorIy) }),
        ],
    });
}
function nj(e) {
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
        { analyticsLocations: h, sourceAnalyticsLocations: y } = (0, I.Ay)(E.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        P = null == n || null == n.premiumSubscriptionType,
        A = X.Ay.getPrice(ep.gD.PREMIUM_MONTH_TIER_2, !1, !1, g),
        f = (0, eK.$g)(A.amount, A.currency),
        _ = (0, ek.V)(),
        x = _?.trial_id,
        b = _?.subscription_trial?.sku_id === ep.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(nr.HAw.PREMIUM_UPSELL_VIEWED, { type: ep.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: y });
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nf.s_, { "data-migration-pending": !0, onClick: t, className: nN.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        b && (0, i.jsx)(nx.Vq, { className: nN.Fg }),
                        (0, i.jsx)("div", { className: eE()(nN.Tn, { [nN.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: nN.G3,
                            children:
                                null != x
                                    ? eF.intl.string(eF.t.AoSzEr)
                                    : eF.intl.format(eF.t["7vePZb"], { monthlyPrice: f }),
                        }),
                        (0, i.jsx)(nC, { shouldUpsellFromNoneTier: P }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eF.intl.string(eF.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eF.intl.string(eF.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != x ? eF.intl.string(eF.t["Gd/XHF"]) : eF.intl.string(eF.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, n_.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: ep.pe.TIER_2,
                                                    analyticsLocations: h,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: nr.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function nv(e) {
    let { handleClose: n, handleStepChange: t, onSubscriptionConfirmation: s } = e,
        { activeSubscription: a } = (0, U.P5)(),
        { currency: o, paymentModalArgs: c, analyticsLocation: d, analyticsSourceLocation: p } = eu(),
        m = (0, u.bG)([K.A], () => (null != a ? (0, en.c9)(a.planId) : null)),
        S = (0, u.bG)([K.A], () => (null == m ? K.A.get(nh) : m));
    r()(null != S, "Missing nextPremiumSubscriptionPlan"), r()(null != o && "" !== o, "Currency not defined");
    let { paymentSourceId: g, paymentSources: h } = c,
        y = null != a ? a.paymentSourceId : null,
        P = Object.keys(h).length > 0,
        E = l.useCallback(() => t(O.pn.PLAN_SELECT), [t]),
        I = l.useCallback(() => t(null != y || P ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS), [t, y, P]);
    return (0, i.jsx)(nj, {
        premiumSubscriptionPlan: S,
        analyticsLocation: d,
        analyticsSourceLocation: p,
        onClose: n,
        onBack: E,
        onSkip: I,
        onSubscriptionConfirmation: s,
        priceOptions: null == g ? { currency: o } : { paymentSourceId: g, currency: o },
    });
}
let nT = [O.pn.PLAN_SELECT, O.pn.REVIEW, O.pn.CONFIRM],
    nM = [O.pn.PLAN_SELECT, O.pn.ADD_PAYMENT_STEPS, O.pn.REVIEW, O.pn.CONFIRM];
async function nL(e, n) {
    await (0, g.CD)();
    let t = (0, Z.D$)($.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nD(e) {
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
                                  text: eF.intl.string(eF.t["13/7kX"]),
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
function nR(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: g,
            guildId: er,
            onSubscribeComplete: ea,
            onSubscriptionConfirmation: eo,
            applicationId: ec,
            intent: ed,
        } = e,
        {
            numGuildBoostsToPurchase: eS,
            currency: eg,
            setCurrency: eh,
            currencies: ey,
            setCurrencies: eP,
            paymentModalArgs: eE,
            disablePremiumUpsell: eI,
        } = eu(),
        { activeSubscription: eA, blockedPayments: ef, customCheckoutFlow: e_ } = (0, U.P5)(),
        ex = (0, L.t4)((e) => e.hasAcceptedTerms),
        eb = (0, _.A)({ location: "GuildBoostPurchaseModal", message: eF.intl.string(e7.default["tK8A/8"]) }),
        eN = (0, v.sw)(),
        eC = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        ej = null != eA ? eA.paymentSourceId : null,
        ev = (0, u.bG)([K.A], () => (null != eA ? (0, en.c9)(eA.planId) : null)),
        eT = (0, u.bG)([K.A], () => null == eA || null != K.A.get(eA.planId)),
        eM = (0, u.bG)([K.A], () => (null == ev ? K.A.get(nh) : ev)),
        eL = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        eD = (0, u.bG)([G.A], () => (null != er ? G.A.getGuild(er) : void 0), [er]),
        {
            paymentSources: eR,
            setPurchaseError: eG,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eO,
            paymentAuthenticationState: ek,
            setPaymentSourceId: ew,
            isSubmittingCurrentStep: eB,
            paymentError: eY,
            purchaseError: eV,
            purchaseErrorBlockRef: eW,
        } = eE,
        eH = Object.keys(eR).length > 0,
        { checkoutPaymentSources: ez } = (0, j.t)(),
        e$ = (0, _.iB)({ checkoutPaymentSources: ez, paymentSourceId: eU, location: "GuildBoostPurchaseModal" }),
        eJ = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        eK = (0, f.Y)(),
        eq = l.useMemo(
            () => (null != eA && eT && eK ? (0, F.v)(eA, eS) : [{ planId: ep.gD.PREMIUM_MONTH_GUILD, quantity: eS }]),
            [eA, eT, eS, eK],
        ),
        eQ = l.useMemo(() => (0, B.A)(), []),
        [eZ, eX] = (0, y.A)(() => [eQ ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e0 } = (0, I.Ay)(o, E.A.GUILD_BOOST_PURCHASE_MODAL),
        e1 = l.useMemo(
            () =>
                eq.find((e) => {
                    let { planId: n } = e;
                    return ep.pW.has(n);
                })?.planId ?? ep.gD.PREMIUM_MONTH_GUILD,
            [eq],
        ),
        e3 = (0, u.bG)([K.A], () => K.A.get(e1)?.skuId, [e1]),
        e6 = l.useMemo(
            () => ({
                load_id: eZ,
                payment_type: e4.fr[e4.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(ep.pe.GUILD),
                subscription_type: nr.rzx.PREMIUM,
                subscription_plan_id: e1,
                quantity: eS,
                location: d,
                source: g,
                location_stack: e0,
                checkout_flow: b.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
            }),
            [eZ, d, e0, g, eS, e1],
        );
    l.useEffect(() => {
        (0, ee.c_)(eU);
    }, [eU]);
    let [e8, e2] = l.useState(O.pn.PLAN_SELECT),
        e5 = l.useMemo(() => Date.now(), [e8]),
        e9 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e2(e), eG(null);
                let i = Date.now();
                Q.default.track(nr.HAw.PAYMENT_FLOW_STEP, {
                    ...e6,
                    from_step: null != t ? t : e8,
                    to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e5,
                    flow_duration_ms: i - eX,
                    guild_id: er,
                    application_id: ec,
                });
            },
            [eG, e6, e8, e5, eX, er, ec],
        ),
        ne = {
            baseAnalyticsData: e6,
            flowStartTime: eX,
            guildId: er,
            handleStepChange: e9,
            onSubscribeComplete: ea,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eO,
            setPurchaseError: eG,
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
                if (!0 === eJ)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, A.tn)(J.A.redirectedPaymentId),
                            i(O.pn.CONFIRM),
                            na(k.h.COMPLETED),
                            null != t && (await nL(t, null != ed)),
                            l?.();
                    } catch (t) {
                        na(k.h.FAIL),
                            a(t),
                            Q.default.track(nr.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: nr.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, A.bl)();
                    }
            })();
        }, [eJ, ed]),
        (0, P.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, A.hP)(),
                null == er ||
                    null != z.A.getGuild(er) ||
                    null != G.A.getGuild(er) ||
                    G.A.isGuildFetching(er) ||
                    (0, R.y)(er),
                (0, D.b)({ ...e6, guild_id: er, application_id: ec, custom_checkout_flow: e_ }),
                null != eA &&
                    null != eA.renewalMutations &&
                    Q.default.track(nr.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: er });
        });
    let [nt, ni] = l.useState(nT),
        [nl, na] = l.useState(k.h.WAITING),
        nu = () => {
            s(nl === k.h.COMPLETED);
        },
        no = null != eA && eA.isPurchasedExternally;
    l.useEffect(() => {
        ek !== V.oc.PENDING &&
            e8 !== O.pn.CONFIRM &&
            null != ej &&
            (nt !== nT && ni(nT), nT.includes(e8) || e8 === O.pn.PREMIUM_UPSELL || e9(O.pn.REVIEW)),
            e8 === O.pn.ADD_PAYMENT_STEPS && nt !== nM && ni(nM),
            no && e8 !== O.pn.PLAN_SELECT && e2(O.pn.PLAN_SELECT);
    }, [e8, e9, no, ek, eA, ej, nt]),
        (0, V.b)(e8, ek, e9, na),
        (0, O.zT)(e8, nl, na);
    let nc = (0, Y.n)("GuildBoostPurchaseModal"),
        nd = nc && (e8 === O.pn.REVIEW || e8 === O.pn.CONFIRM),
        np = (0, es.A)(nd),
        [nm, nS] = l.useState(!1),
        [ng, nE] = l.useState(!0),
        nI = l.useMemo(() => JSON.stringify(ey), [ey]);
    l.useEffect(() => {
        let e;
        eK &&
            (null != K.A.get(ep.gD.PREMIUM_MONTH_GUILD) && eP((e = (0, ee._w)(ep.gD.PREMIUM_MONTH_GUILD, eU, !1))),
            null == eU && null != eA && null != eA.paymentSourceId ? eh(eA.currency) : null != e && eh(e[0]));
    }, [eU, eA, eK, nI, eh, eP]);
    let nA = (0, H.Y)({
        paymentModalArgs: eE,
        initialStep: O.pn.PAYMENT_TYPE,
        prependSteps: [O.pn.PLAN_SELECT],
        appendSteps: [O.pn.REVIEW, O.pn.CONFIRM],
        breadcrumpSteps: nt,
        currentBreadcrumpStep: e8,
        onReturn: () => {
            e9(Object.values(eR).length < 1 ? O.pn.PLAN_SELECT : O.pn.REVIEW, { trackedFromStep: O.pn.PAYMENT_TYPE });
        },
        onComplete: (e) => {
            e9(O.pn.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            Q.default.track(nr.HAw.PAYMENT_FLOW_STEP, {
                ...e6,
                from_step: n,
                to_step: t,
                step_duration_ms: i - e5,
                flow_duration_ms: i - eX,
                guild_id: er,
            });
        },
        shouldUseManaModal: !0,
    });
    if (ef) n = (0, i.jsx)(x.oO, {});
    else if (eC && eT && eK && null != eg && "" !== eg)
        if (eA?.isPausedOrPausePending && !eA.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: ny.C, children: eF.intl.string(eF.t.mOWsF1) }),
            });
        else if (null != eA && null != eA.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: ny.C, children: eF.intl.string(eF.t.npfhh0) }),
            });
        else if (e8 === O.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nv, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: nu,
                handleStepChange: e9,
                analyticsData: e6,
                setAnalyticsData: e4.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: eo,
            });
        else {
            let e, t, l, s;
            r()(eg, "Currency not defined");
            let a = null != eU ? { paymentSourceId: eU, currency: eg } : { currency: eg },
                u = z.A.getGuild(er),
                o = null;
            switch (e8) {
                case O.pn.PLAN_SELECT:
                    r()(null != er, "Missing guildId"),
                        (e = (0, i.jsx)(nP, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: nu,
                            handleStepChange: e9,
                            analyticsData: e6,
                            setAnalyticsData: e4.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: nE,
                            refreshNextStepLabel: (0, O.Ir)(
                                nt.find((e) => e !== O.pn.PLAN_SELECT && e !== O.pn.CONFIRM) ?? O.pn.REVIEW,
                            ),
                        })),
                        (l = nc
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: eF.intl.string(eF.t["ETE/oC"]),
                                  onClick: nu,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eF.intl.string(eF.t.oEAioF),
                                  onClick: nu,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(S.$, {
                            variant: "primary",
                            text: eF.intl.string(eF.t["3PatSz"]),
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
                                forceDisableSubmitButton: ng,
                                numGuildBoostsToPurchase: eS,
                                isDisabledBecauseExternalSubscription: no,
                                isMissingGuildInformation: null == eD && null == u,
                            }),
                            onClick: () => {
                                eI || (null != ev && ev.premiumSubscriptionType === ep.PremiumTypes.TIER_2)
                                    ? e9(null != ej || eH ? O.pn.REVIEW : O.pn.ADD_PAYMENT_STEPS)
                                    : e9(O.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case O.pn.ADD_PAYMENT_STEPS:
                    break;
                case O.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(h.N, { className: ny.__invalid_body });
                    break;
                case O.pn.REVIEW:
                    r()(null != eM, "Missing nextPremiumSubscriptionPlan"),
                        r()(null != er, "Missing guildId"),
                        (e = (0, i.jsx)(ns, {
                            guildId: er,
                            paymentSources: eR,
                            priceOptions: a,
                            currentPremiumSubscription: eA,
                            premiumSubscriptionPaymentSourceId: ej,
                            premiumSubscriptionPlan: eM,
                            newAdditionalPlans: eq,
                            paymentSourceId: eU,
                            setPaymentSourceId: ew,
                            onPaymentSourceAdd: () => {
                                e9(O.pn.ADD_PAYMENT_STEPS), ew(null);
                            },
                        })),
                        (t = O.pn.PLAN_SELECT);
                    let c = async () => {
                        r()(null != eq, "Missing newAdditionalPlans");
                        let e = (0, w.W)(eR, eU);
                        eG(null);
                        try {
                            na(k.h.PURCHASING),
                                eO(!0),
                                r()(null != eU, "Missing paymentSourceId"),
                                r()(null != eN, "Missing invoicePreview");
                            let n = { amount: eN.total, currency: eN.currency },
                                t = a.currency ?? eN.currency,
                                i = (0, X.U8)(eA, eq, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(nr.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e6,
                                    duration_ms: Date.now() - eX,
                                    guild_id: er,
                                    application_id: ec,
                                }),
                                nm)
                            )
                                return;
                            if (null == eA || null == ev) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, A.Ky)({
                                    items: eq,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nS(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(eA, eq) };
                                (l.currency = eA.currency ?? t),
                                    (l.paymentSource = null != ej ? eR[ej] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, A.nV)(eA, l, n, i, e0);
                                if (s.redirectConfirmation) return void nS(null != s.redirectURL);
                            }
                            null == ed && e9(O.pn.CONFIRM),
                                na(k.h.COMPLETED),
                                null != er && (await nL(er, null != ed)),
                                null != ed && nu(),
                                ea?.();
                        } catch (n) {
                            na(k.h.FAIL),
                                eG(n),
                                Q.default.track(nr.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e6,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === nr.hes.CARD ? nr.kM_.STRIPE : nr.kM_.BRAINTREE) : null,
                                    payment_source_id: eU,
                                    duration_ms: Date.now() - eX,
                                });
                        } finally {
                            nm || eO(!1);
                        }
                    };
                    (o = {
                        text: eF.intl.string(eF.t.eUEeCt),
                        loading: eB,
                        disabled: null == eU || !ex || null != eb || e$,
                        onClick: c,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(N.p, { ...o }));
                    break;
                case O.pn.CONFIRM:
                    e = (0, i.jsx)(em, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nu,
                        handleStepChange: e9,
                        analyticsData: e6,
                        setAnalyticsData: e4.tE,
                        skipConfirm: !1,
                        existingAvailableSlots: eL,
                    });
            }
            let d = null != eY && null == (0, O.ou)(eY) ? eY : eV;
            n =
                e8 === O.pn.ADD_PAYMENT_STEPS
                    ? nA
                    : (0, i.jsx)(W.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === O.pn.REVIEW || n === O.pn.CONFIRM || (t && n === O.pn.PLAN_SELECT);
                          })({ currentStep: e8, isBoostingPreCheckoutModalRefreshEnabled: nc }),
                          steps: nt,
                          currentStep: e8,
                          paymentError: d,
                          purchaseErrorBlockRef: eW,
                          hasCurrencies: ey.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nD, {
                              currentStep: e8,
                              isRefreshEnabled: nc,
                              backStep: t,
                              handleStepChange: e9,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: ny._5, children: (0, i.jsx)(m.y, {}) });
    let nf = (0, T.u)({ skuId: e3, step: e8 }),
        n_ = null;
    return (ef ||
        (nc && e8 !== O.pn.PREMIUM_UPSELL
            ? (n_ = e8 === O.pn.REVIEW ? (0, i.jsx)(M.s3, { ...nf }) : (0, i.jsx)(M.s3, { title: nf.title }))
            : e8 === O.pn.REVIEW
              ? (n_ = (0, i.jsx)(M.s3, { ...nf }))
              : e8 !== O.pn.PREMIUM_UPSELL &&
                (n_ = (0, i.jsx)(et.A, { onClose: nu, currentStep: e8, purchaseState: nl }))),
    nc && e8 === O.pn.CONFIRM)
        ? (0, i.jsx)(el.A, {
              mediaUrls: np.mediaUrls,
              isSuccess: np.isSuccess,
              transitionState: t,
              onClose: () => (nu(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ei.A, {
                      transitionState: t,
                      guild: z.A.getGuild(er),
                      guildBoostQuantity: eS + eL.length,
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
                  children: [n_, n],
              }),
          });
}
function nG(e) {
    let {
            totalNumberOfSlotsToAssign: n = 1,
            disablePremiumUpsell: t,
            closeGuildPerksModal: l,
            guildId: s,
            analyticsLocation: r,
            analyticsSourceLocation: a,
        } = e,
        o = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: c } = (0, I.Ay)(E.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, y.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(I.f5, {
        value: c,
        children: (0, i.jsx)(U.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: b.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(ec, {
                initialNumGuildBoostsToPurchase: d,
                disablePremiumUpsell: t,
                closeGuildPerksModal: l,
                guildId: s ?? null,
                analyticsLocation: r,
                analyticsSourceLocation: a,
                children: (0, i.jsx)(nR, { ...e }),
            }),
        }),
    });
}
