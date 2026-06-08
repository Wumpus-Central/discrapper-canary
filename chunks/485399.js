n.d(t, { default: () => tV });
var i = n(627968),
    l = n(64700),
    r = n(17928),
    s = n(430993),
    a = n(289873),
    u = n(228366),
    o = n(73825),
    c = n(444927),
    d = n(964486),
    m = n(793574),
    p = n(688810),
    S = n(753390),
    y = n(86379),
    g = n(160946),
    h = n(545075),
    I = n(95250),
    x = n(197510),
    P = n(725836),
    A = n(584160),
    f = n(480642),
    b = n(571878),
    _ = n(832286),
    v = n(958340),
    E = n(937008),
    j = n(166532),
    C = n(566980),
    N = n(314671),
    T = n(735305),
    M = n(343834),
    L = n(615310),
    D = n(925847),
    G = n(489254),
    U = n(71393),
    R = n(178368),
    O = n(97352),
    k = n(166403),
    w = n(174459),
    B = n(473145),
    F = n(83617),
    H = n(802790),
    V = n(636441),
    Y = n(587491),
    W = n(285753),
    z = n(482132),
    q = n(216641),
    $ = n(615396),
    J = n(61299),
    K = n(295405);
let [Z, Q, X] = (0, n(786300).A)();
function ee(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: s,
            children: a,
            guildId: u,
            analyticsLocation: o,
            analyticsSourceLocation: d,
            applicationId: m,
            intent: p,
            onSubscribeComplete: S,
        } = e,
        [y, g] = l.useState(t),
        [h, I] = l.useState(null),
        [x, P] = l.useState([]),
        [A, f] = l.useState(!0),
        _ = (0, c.A)(() => Date.now()),
        v = (0, c.A)(() => (0, B.D$)(R.A.boostSlots).length),
        E = (0, b.t4)((e) => e.activeSubscription),
        j = (0, r.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        C = (0, r.bG)([K.A], () => K.A.defaultPaymentSourceId),
        N = null != E ? E.paymentSourceId : null,
        T = (0, J._V)(null != N ? N : j ? C : null);
    return (0, i.jsx)(Z.Provider, {
        value: {
            numGuildBoostsToPurchase: y,
            setNumGuildBoostsToPurchase: g,
            disablePremiumUpsell: n,
            closeGuildPerksModal: s,
            guildId: u,
            currency: h,
            setCurrency: I,
            currencies: x,
            setCurrencies: P,
            paymentModalArgs: T,
            premiumSubscriptionPaymentSourceId: N,
            analyticsLocation: o,
            analyticsSourceLocation: d,
            forceDisableSubmitButton: A,
            setForceDisableSubmitButton: f,
            applicationId: m,
            intent: p,
            onSubscribeComplete: S,
            flowStartTime: _,
            existingAvailableSlotCount: v,
        },
        children: a,
    });
}
var et = n(879100),
    en = n(788868);
function ei(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: l, paymentModalArgs: s, existingAvailableSlotCount: a } = Q(),
        {
            activeSubscription: u,
            startingFractionalPremiumEndsAt: o,
            customCheckoutFlow: d,
            paymentSourceId: m,
        } = (0, b.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        p = (0, r.bG)([v.A], () => (null != n ? v.A.getGuild(n) : void 0), [n]),
        S = null != n ? U.A.getGuild(n) : null,
        y = (0, c.A)(() => (0, $.b2)(o)),
        g = (0, r.bG)([O.A], () => (null != u ? (0, $.c9)(u.planId) : null)),
        { paymentSources: h } = s,
        I = (0, q.g)(h, m),
        x = null != S ? S.name : null != p ? p.name : void 0,
        P = y && null != g && !en.YV.has(g.id);
    return (0, i.jsx)(z.dZ, {
        children: (0, i.jsx)(et.W, {
            guild: S,
            guildBoostQuantity: l + a,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: I,
            fallbackGuildName: x,
            didPurchaseOnFractionalPremium: P,
            customCheckoutFlow: d,
        }),
    });
}
var el = n(284009),
    er = n.n(el),
    es = n(683071),
    ea = n(512950),
    eu = n(821609),
    eo = n(123292),
    ec = n(87719);
let ed = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(321073);
var em = n(503698),
    ep = n.n(em),
    eS = n(661531),
    ey = n(990078),
    eg = n(408278),
    eh = n(834040),
    eI = n(499373),
    ex = n(834730),
    eP = n(403581),
    eA = n(663803),
    ef = n(320448),
    eb = n(534514),
    e_ = n(104510),
    ev = n(695366),
    eE = n(726656),
    ej = n(531260),
    eC = n(666646),
    eN = n(404374),
    eT = n(543767),
    eM = n(881489),
    eL = n(477421),
    eD = n(234419),
    eG = n(363476),
    eU = n(531506),
    eR = n(375708),
    eO = n(51465);
function ek() {
    return (0, i.jsxs)("div", {
        className: ep()(eO.dt, eO.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eO.qq,
            }),
            (0, i.jsx)(ex.E, {
                variant: "text-sm/medium",
                className: eO.tD,
                children: eR.intl.format(eR.t.f5VHKm, {}),
            }),
        ],
    });
}
function ew(e) {
    let { text: t, color: n } = e;
    return (0, i.jsxs)("div", {
        className: eO.dt,
        children: [(0, i.jsx)(eP.t, { size: "md", className: eO.YW, color: n }), (0, i.jsx)("div", { children: t })],
    });
}
var eB = n(773669),
    eF = n(287809),
    eH = n(975571),
    eV = n(252424),
    eY = n(428262),
    eW = n(580630),
    ez = n(155718),
    eq = n(606267),
    e$ = n(376843),
    eJ = n(717925),
    eK = n(596034),
    eZ = n(848584),
    eQ = n(241989),
    eX = n(908419),
    e0 = n(888751),
    e1 = n(874638),
    e3 = n(692440),
    e4 = n(818348),
    e8 = n(327105),
    e6 = n(7921);
function e2(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: l,
            totalDue: r,
            currency: s,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, eX.U)();
    return (0, i.jsx)(eK._, {
        variant: {
            type: eK.I.Subscription,
            purchaseButtonText: eR.intl.string(eR.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: s,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: a,
        },
        paymentSourceType: t,
        immediateDelivery: u,
    });
}
function e5(e) {
    return eR.intl.format(eR.t.IeaYqg, { endDate: e });
}
function e9(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: e6.bU }),
            (0, i.jsx)(ex.E, { variant: "text-sm/normal", className: e6.b7, children: t }),
            (0, i.jsx)("div", { className: e6.bU }),
        ],
    });
}
function e7(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: r,
            checkoutInvoicePreview: s,
        } = e,
        a = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: u,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: eR.intl.formatToPlainString(eR.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, eY.Mn)(n.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: u,
                currency: o.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        u = [];
    0 !== n &&
        u.push({
            id: "base-plan-adjustment",
            label: eR.intl.formatToPlainString(eR.t.ZSVged, { planName: (0, eY.RH)(l[0].subscriptionPlanId) }),
            tooltip: eR.intl.string(eR.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eR.intl.string(eR.t["+as5ZZ"]),
                tooltip: eR.intl.string(eR.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== s.tax && u.push({ id: "tax", label: eR.intl.string(eR.t.jiRvC7), amount: s.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, e0.EA)({ id: "main-line-item", amount: t, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(eZ.Vm, {
        defaultExpanded: !0,
        label: eR.intl.string(e8.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function te(e) {
    let {
        isSubscriptionUpdate: t,
        premiumSubscription: n,
        checkoutInvoicePreview: l,
        renewalInvoicePreview: r,
        isPrepaid: s,
        isReverseTrial: a,
        priceOptions: u,
    } = e;
    return null != n
        ? (0, i.jsx)(e3.m0, {
              premiumSubscription: n,
              proratedInvoice: l,
              renewalInvoice: r,
              isUpdate: t,
              isPrepaidPaymentSource: s,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e3.m0, {
              renewalInvoice: r,
              priceOptions: u,
              isPrepaidPaymentSource: s,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function tt(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: s,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: u,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: c,
            paymentSourceId: d,
            setPaymentSourceId: S,
            onPaymentSourceAdd: y,
        } = e,
        g = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                u = (0, r.bG)([U.A, v.A], () => {
                    let e = U.A.getGuild(n);
                    return null != e ? e : v.A.isGuildFetching(n) ? null : v.A.getGuild(n);
                }, [n]),
                o = s.interval,
                c = s.intervalCount,
                d = (0, r.bG)([O.A], () => O.A.getForSkuAndInterval((0, eY.mH)(en.pe.GUILD), o, c));
            er()(null != d, "Missing guildBoostingSubscriptionPlan");
            let S = (0, eY.J$)(i.paymentSourceId),
                y = (0, eM.ds)();
            t = null != l ? (0, eY.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, p.Ay)(),
                [h, I] = (0, eT.YV)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [x, P] = (0, eT.YV)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eC.OQ)({
                    checkoutInvoicePreview: h,
                    checkoutInvoiceError: I,
                    renewalInvoicePreview: x,
                    renewalInvoiceError: P,
                }),
                {
                    guild: u ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: S,
                    isReverseTrial: y,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: x,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: t,
            priceOptions: s,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: c,
        }),
        {
            isSubscriptionUpdate: h,
            guild: I,
            isPrepaid: x,
            isReverseTrial: P,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: f,
        } = g,
        b = (0, eq.A)({ location: "GuildBoostReview", message: eR.intl.string(e8.default["tK8A/8"]) }),
        _ = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == A || null == f || null == I) return (0, i.jsx)(eJ.E, {});
    let E = (0, i.jsx)(te, {
            isSubscriptionUpdate: h,
            premiumSubscription: a,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: f,
            isPrepaid: x,
            isReverseTrial: P,
            priceOptions: s,
        }),
        j = (0, i.jsx)(e$.n, {
            setPaymentSourceId: S,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: eR.intl.string(eR.t["u+Cw58"]),
            onPaymentSourceAdd: y,
            additionalPaymentSourceDropdownProps: _,
            premiumSubscriptionPaymentSourceId: u,
            hideCurrencySelect: !0,
        }),
        C = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: l,
                paymentSources: r,
                paymentSourceId: s,
            } = e;
            return {
                paymentSourceType: (0, q.g)(r, s),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, e3.de)({ isSubscriptionUpdate: t, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: f,
            checkoutInvoicePreview: A,
            paymentSources: n,
            paymentSourceId: d,
        }),
        N = (0, i.jsx)(e2, { ...C }),
        T = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: a, isPrepaid: u, isReverseTrial: o } = s,
                c = n.interval,
                d = n.intervalCount,
                m = (e) => (0, e1.Z)(i.invoiceItems).find((t) => en.pW.has(t.subscriptionPlanId) && e(t)),
                p = m((e) => e.amount >= 0);
            er()(null != p, "Missing guild boosting invoice item");
            let S = m((e) => e.amount < 0),
                y = null != S ? p.quantity - S.quantity : p.quantity,
                g = i.invoiceItems.filter((e) => (0, eY.xq)(e.subscriptionPlanId)),
                h = g.reduce((e, t) => e + t.amount, 0),
                I = (0, eT.sL)(p) * y,
                x = (0, eW.$g)(I, i.currency),
                P = (0, eW.CE)(x, c, d),
                A = (0, eW.$g)(i.total, i.currency) + (i.currency !== e4.Yr.USD ? "*" : ""),
                f = i.subtotal - I - h,
                b = p.discounts.map((e) => {
                    let t = e.amount / p.quantity;
                    return { ...e, amount: t * y };
                }),
                _ = b.find((e) => e.type === ez.iS.SUBSCRIPTION_PLAN),
                v = b.find((e) => e.type === ez.iS.ENTITLEMENT),
                E = p.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: a,
                isPrepaid: u,
                isReverseTrial: o,
                formattedGuildBoostPrice: x,
                formattedGuildBoostRate: P,
                formattedOriginalAmountGuildBoostRate: (0, eW.CE)((0, eW.$g)(E, i.currency), c, d),
                formattedTotal: A,
                basePlanAdjustment: h,
                basePlanInvoiceItems: g,
                guildBoostingAdjustment: f,
                subscriptionDiscount: _,
                entitlementDiscount: v,
                originalAmount: E,
                premiumSubscription: t,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: f,
            priceOptions: s,
            reviewState: g,
        }),
        M = (0, i.jsx)(e7, { ...T }),
        L = (function (e, t, n) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: s,
                    formattedGuildBoostRate: a,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: o,
                } = t,
                c = null != o;
            return {
                label: eR.intl.formatToPlainString(eR.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, eY.Mn)(r.id, !1, s),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eQ.a6, {}),
                price: a,
                PriceIcon: c ? eP.t : void 0,
                priceTooltip: c ? eR.intl.string(e8.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            I,
            T,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: e5(i.currentPeriodEnd) } : null;
            })({ isPrepaid: x, isReverseTrial: P, premiumSubscription: a }),
        ),
        D = (0, i.jsx)(eQ.f7, { ...L });
    return (0, i.jsx)(eJ.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: D,
        subscriptionDetailsContent: E,
        paymentMethodContent: j,
        invoiceSummaryContent: M,
        legalContent: N,
        invoiceTotalDueValue: T.formattedTotal,
        invoiceTotalDueLabel: eR.intl.string(e8.default.R0cZsM),
    });
}
var tn = n(652215);
n(26279);
var ti = n(406263);
function tl(e) {
    return "" === e || "-" === e;
}
function tr(e) {
    let { value: t, onChange: n, minValue: r = 1, maxValue: s = 30, ariaLabel: a } = e,
        [u, o] = l.useState(t);
    l.useEffect(() => {
        o(t);
    }, [t]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), tl(e) || n(e);
        };
    return (0, i.jsxs)("div", {
        className: ti.U$,
        children: [
            (0, i.jsx)(eg.K, {
                variant: "secondary",
                size: "md",
                icon: eh.Q,
                onClick: () => {
                    c && !(u <= r) && d(u - 1);
                },
                "aria-label": eR.intl.string(eR.t["k+ohJm"]),
                disabled: !c || u <= r,
            }),
            (0, i.jsx)("div", {
                className: ti.WJ,
                children: (0, i.jsx)("input", {
                    className: ti.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (tl(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= r) return void d(r);
                                if (t >= s) return void d(s);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        tl(u) && o(t);
                    },
                }),
            }),
            (0, i.jsx)(eg.K, {
                variant: "secondary",
                size: "md",
                icon: eI.T,
                onClick: () => {
                    c && !(u >= s) && d(u + 1);
                },
                "aria-label": eR.intl.string(eR.t.w8Sc4B),
                disabled: !c || u >= s,
            }),
        ],
    });
}
function ts(e) {
    let { message: t } = e;
    return (0, i.jsx)(ex.E, { variant: "text-xs/normal", color: "text-muted", className: ti.jH, children: t });
}
function ta(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: ti.Vk,
        children: [
            (0, i.jsx)("div", {
                className: ti.D0,
                children: (0, i.jsx)(eP.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: ti.ue,
                    color: eN.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: ti.yP, children: t }),
        ],
    });
}
function tu(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        planLabel: s,
        planPriceContent: a,
        subtotalContent: u,
        refreshSubtotalContent: o,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: m,
        existingSlotNotice: p,
        discountCallout: S,
        refreshDiscountCallout: y,
        legacyPricingNotes: g,
        refreshPricingNotes: h,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            m,
            c,
            p,
            (0, i.jsxs)("div", {
                className: e6.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: e6.E6,
                        children: [
                            (0, i.jsx)(eA.l, {
                                value: n,
                                onChange: (e) => r(e),
                                className: e6.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e6.$0, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ep()(e6.QK, { [e6.S]: t }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: e6.J3 }),
            (0, i.jsxs)("div", {
                className: e6.mP,
                children: [
                    (0, i.jsx)("div", { className: e6.xp, children: eR.intl.string(eR.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: ep()(e6.__invalid_planSelectorSubtotalPrice, { [e6.S]: t }),
                        children: u,
                    }),
                ],
            }),
            g.map((e, t) => (0, i.jsx)(l.Fragment, { children: e }, t)),
            S,
        ],
    });
}
function to(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        refreshNextStepLabel: s,
        planLabel: a,
        planPriceContent: u,
        subtotalContent: o,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: m,
        fractionalBanner: p,
        existingSlotNotice: S,
        discountCallout: y,
        refreshDiscountCallout: g,
        legacyPricingNotes: h,
        refreshPricingNotes: I,
    } = e;
    return (0, i.jsxs)("div", {
        className: ti.xY,
        children: [
            p,
            (0, i.jsxs)("div", {
                className: ti.K3,
                children: [
                    (0, i.jsx)(ex.E, {
                        variant: "text-md/medium",
                        className: ti.bk,
                        children: eR.intl.string(eR.t["r+SebU"]),
                    }),
                    (0, i.jsx)(ef._, { className: ti.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ex.E, { variant: "text-md/medium", className: ti.kX, children: s }),
                ],
            }),
            m,
            S,
            (0, i.jsxs)("div", {
                className: ti.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: ti.fX,
                        children: [
                            (0, i.jsx)(tr, {
                                value: n,
                                onChange: (e) => r(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(ex.E, { variant: "text-md/medium", className: ti.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ep()(ti.El, { [e6.S]: t }), children: u }),
                ],
            }),
            g,
            (0, i.jsxs)("div", {
                className: ti.fh,
                children: [
                    (0, i.jsx)(eb.D, {
                        variant: "heading-lg/semibold",
                        className: ti.O3,
                        children: eR.intl.string(eR.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: ep()(ti.BU, { [e6.S]: t }), children: c }),
                ],
            }),
            I.map((e, t) => (0, i.jsx)(l.Fragment, { children: e }, t)),
        ],
    });
}
function tc(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e6.Mv,
        children: [
            (0, i.jsx)(e_._, { className: e6.T5, color: eS.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eR.intl.format(eR.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != l
                        ? (0, i.jsx)(ey.m, {
                              text: eR.intl.formatToPlainString(eR.t.SFpsCH, {
                                  canceledCount: n,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(ev.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e6.Y5,
                                  color: eS.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function td(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: s,
            setForceDisableSubmitButton: u,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: S,
            isRefreshEnabled: y = !1,
            showRefreshSubtotalRate: g = !1,
            refreshNextStepLabel: h = eR.intl.string(eR.t.QBnNHq),
        } = e,
        I = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: s,
                    numGuildBoosts: u,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: S,
                    priceOptions: y,
                    showRefreshSubtotalRate: g,
                } = e,
                h =
                    ((t = (0, r.bG)([k.A], () => k.A.getPremiumTypeSubscription())),
                    (0, r.bG)([K.A], () =>
                        t?.paymentSourceId != null ? K.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                I = s.interval,
                x = s.intervalCount,
                P = (0, r.bG)([O.A], () => O.A.getForSkuAndInterval((0, eY.mH)(en.pe.GUILD), I, x)),
                A = (0, r.bG)([eF.default], () => eF.default.getCurrentUser()),
                f = (0, ej.A)({ forceFetch: !1 });
            er()(null != P, "Missing guildBoostingSubscriptionPlan");
            let b = [{ planId: P.id, quantity: 1 }],
                _ = c?.items.find(
                    (e) => e.planId === en.gD.PREMIUM_MONTH_TIER_2 || e.planId === en.gD.PREMIUM_YEAR_TIER_2,
                );
            null != _ && b.push(_);
            let v = c?.items.find(
                    (e) => e.planId === en.gD.PREMIUM_MONTH_GUILD || e.planId === en.gD.PREMIUM_YEAR_GUILD,
                ),
                E = null == h || !en.uJ.has(h) || null == v,
                { analyticsLocations: j } = (0, p.Ay)(),
                [C, N] = (0, eT.YV)({
                    subscriptionId: c?.id,
                    items: b,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: y.currency,
                    preventFetch: E,
                    analyticsLocations: j,
                    analyticsLocation: m.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eC.Tr)(C, N);
            let T = !E && null == C && null == N;
            l.useLayoutEffect(() => {
                o(T);
            }, [T, o]);
            let M = (0, eD.V)()?.subscription_trial?.sku_id === en.pe.TIER_2,
                L = eY.Ay.hasBoostDiscount(A),
                D = L && null != c && eY.Ay.isPremiumAtLeast(eY.Ay.getPremiumType(c.planId), en.PremiumTypes.TIER_1),
                G = C?.findInvoiceItemByPlanId(P.id),
                U =
                    null != G
                        ? { amount: G.amount, tax: 0, taxInclusive: !0, currency: C.currency }
                        : eY.Ay.getPrice(P.id, L, !1, y),
                R = u * U.amount,
                w = (0, eM.ds)() && L && null != c,
                F = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: s,
                        } = e;
                    return (
                        (t = l ? "reverse_trial" : r ? "discount" : s ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: i === en.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: S.length,
                    fractionalPremiumState: f.fractionalState,
                    isReverseTrial: w,
                    hasDiscountUpsell: D,
                    withTrialOfferCopyVariant: M,
                });
            "discount" === F.upsellVariant
                ? (er()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (n = eR.intl.format(eR.t.hf6YOY, { planName: eY.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = eR.intl.format("upsell_trial" === F.upsellVariant ? eR.t.ba1L74 : eR.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eV.l9)(eB.default.locale, en.oX / 100),
                      freeSubscriptionCount: en.M4,
                  }));
            let H = S.filter((e) => (0, B.I5)(e)).length,
                V = (0, eY.J$)(y.paymentSourceId),
                { ipCountryCode: Y } = (0, eL.A)(),
                W = "HR" === Y && U.currency === e4.Yr.EUR,
                z =
                    w && null != c
                        ? (0, i.jsx)(e9, { text: e5(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: ep()(e6.hA, e6.G3), children: eR.intl.string(eR.t.jNY1FO) }),
                q =
                    w && null != c
                        ? (0, i.jsx)(e9, { text: e5(c.currentPeriodEnd), className: e6.jk })
                        : (0, i.jsx)("div", { className: ti._X, children: eR.intl.string(eR.t.jNY1FO) }),
                $ = F.showExistingSlotNotice
                    ? (0, i.jsx)(tc, { existingAvailableSlots: S, canceledCount: H, premiumSubscription: c })
                    : null,
                J = F.showFractionalPremiumBanner ? (0, i.jsx)(eU.vi, { fractionalPremiumInfo: f }) : null,
                Z = V
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === en.WT.YEAR
                              ? eR.intl.string(eR.t.YDpAzZ)
                              : t === en.WT.MONTH && 1 === n
                                ? eR.intl.string(eR.t["6ZR3By"])
                                : null;
                      })({ intervalType: I, intervalCount: x }) ?? eR.intl.string(eR.t.K9Bmze))
                    : eR.intl.string(eR.t.K9Bmze),
                Q = T
                    ? (0, i.jsx)(a.y, {})
                    : V
                      ? (0, eW.$g)(U.amount, U.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: l = 1 } = e,
                                r = (0, eW.$g)(t, n);
                            return i === en.WT.YEAR
                                ? eR.intl.formatToPlainString(eR.t["8M04YJ"], { price: r })
                                : i === en.WT.MONTH && 1 === l
                                  ? eR.intl.formatToPlainString(eR.t.VStWCR, { price: r })
                                  : i === en.WT.MONTH && l > 1
                                    ? eR.intl.formatToPlainString(eR.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: I, intervalCount: x, amount: U.amount, currency: U.currency }),
                X = T
                    ? (0, i.jsx)(a.y, {})
                    : (0, i.jsx)(eG.A, {
                          price: R,
                          currency: U.currency,
                          intervalType: I,
                          intervalCount: x,
                          isPrepaidPaymentSource: V,
                      }),
                ee = T
                    ? (0, i.jsx)(a.y, {})
                    : g && !V
                      ? (0, eW.CE)((0, eW.$g)(R, U.currency), I, x)
                      : (0, eW.$g)(R, U.currency),
                et = [],
                ei = [];
            if (W) {
                let e = (0, i.jsx)(
                    eE.A,
                    {
                        message: eR.intl.formatToPlainString(eR.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eW.$g)(7.5345 * R, e4.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                et.push(e), ei.push(e);
            }
            let el = eR.intl.format(eR.t.Om31w8, { documentationLink: eH.A.getArticleURL(tn.MVz.LOCALIZED_PRICING) });
            return (
                et.push((0, i.jsx)(eE.A, { message: el }, "localized-pricing")),
                ei.push((0, i.jsx)(ts, { message: el }, "localized-pricing")),
                {
                    isLoading: T,
                    planLabel: Z,
                    planPriceContent: Q,
                    subtotalContent: X,
                    refreshSubtotalContent: ee,
                    legacyDescriptionContent: z,
                    refreshDescriptionContent: q,
                    existingSlotNotice: $,
                    fractionalBanner: J,
                    legacyPricingNotes: et,
                    refreshPricingNotes: ei,
                    discountCallout:
                        "reverse_trial" === F.upsellVariant
                            ? (0, i.jsx)(ek, {})
                            : (0, i.jsx)(ew, { text: n, color: eN.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === F.upsellVariant ? (0, i.jsx)(ek, {}) : (0, i.jsx)(ta, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: u,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d,
            priceOptions: S,
            showRefreshSubtotalRate: g,
        });
    return (0, i.jsx)(y ? to : tu, {
        isLoading: I.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: s,
        planLabel: I.planLabel,
        planPriceContent: I.planPriceContent,
        subtotalContent: I.subtotalContent,
        refreshSubtotalContent: I.refreshSubtotalContent,
        legacyDescriptionContent: I.legacyDescriptionContent,
        refreshDescriptionContent: I.refreshDescriptionContent,
        fractionalBanner: I.fractionalBanner,
        existingSlotNotice: I.existingSlotNotice,
        discountCallout: I.discountCallout,
        refreshDiscountCallout: I.refreshDiscountCallout,
        legacyPricingNotes: I.legacyPricingNotes,
        refreshPricingNotes: I.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let tm = en.gD.NONE_MONTH;
var tp = n(898640);
function tS(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: l,
            setNumGuildBoostsToPurchase: s,
            guildId: a,
            currency: u,
            closeGuildPerksModal: o,
            disablePremiumUpsell: d,
            setForceDisableSubmitButton: m,
            forceDisableSubmitButton: p,
            paymentModalArgs: S,
            premiumSubscriptionPaymentSourceId: y,
        } = Q(),
        { paymentSourceId: g, activeSubscription: h } = (0, b.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        I = null != y || Object.keys(S.paymentSources).length > 0,
        x = (0, j.Ir)(I ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS),
        P = (0, c.A)(() => (0, B.D$)(R.A.boostSlots)),
        A = (0, G.n)("GuildBoostPurchaseModal"),
        f = ed.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        _ = A && f,
        E = (0, r.bG)([v.A], () => (null != a ? v.A.getGuild(a) : void 0), [a]),
        C = null != a ? U.A.getGuild(a) : null,
        N = null == E && null == C,
        T = null != h && h.isPurchasedExternally,
        M = Object.keys(S.paymentSources).length > 0,
        L = (0, r.bG)([O.A], () => (null != h ? (0, $.c9)(h.planId) : null)),
        D = (0, r.bG)([O.A], () => (null == L ? O.A.get(tm) : L));
    er()(null != a, "Missing guildId"), er()(null != D, "Missing nextPremiumSubscriptionPlan");
    let k = (0, i.jsx)(td, {
        premiumSubscriptionPlan: D,
        numGuildBoosts: l,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: m,
        premiumSubscription: h,
        existingAvailableSlots: P,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != o && o(), (0, ec.e)();
        },
        priceOptions:
            null != g ? { paymentSourceId: g, currency: null != u ? u : void 0 } : { currency: null != u ? u : void 0 },
        isRefreshEnabled: A,
        showRefreshSubtotalRate: _,
        refreshNextStepLabel: x,
    });
    return (
        T && null != h && null != h.paymentGateway
            ? (k = (0, i.jsxs)("div", {
                  className: tp.xK,
                  children: [
                      (0, i.jsx)(es.w, {
                          type: "critical",
                          children: eR.intl.format(eR.t["/m3Y3s"], { paymentGatewayName: e4.qm[h.paymentGateway] }),
                      }),
                      k,
                  ],
              }))
            : null != a &&
              !v.A.isGuildFetching(a) &&
              N &&
              (k = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ea.p, {
                          messageType: ea.Y.ERROR,
                          className: tp.MR,
                          children: eR.intl.string(eR.t.eAn6z2),
                      }),
                      k,
                  ],
              })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(z.dZ, { children: k }),
                (0, i.jsx)(z.UX, {
                    children: (0, i.jsx)(et._, {
                        currentStep: j.pn.PLAN_SELECT,
                        isRefreshEnabled: A,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: A
                            ? (0, i.jsx)(eu.$, {
                                  variant: "secondary",
                                  text: eR.intl.string(eR.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, i.jsx)(eo.Q, { text: eR.intl.string(eR.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(eu.$, {
                            variant: "primary",
                            text: eR.intl.string(eR.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: l,
                                } = e;
                                return t || 0 === n || i || l;
                            })({
                                forceDisableSubmitButton: p,
                                numGuildBoostsToPurchase: l,
                                isDisabledBecauseExternalSubscription: T,
                                isMissingGuildInformation: N,
                            }),
                            onClick: () => {
                                d || (null != L && L.premiumSubscriptionType === en.PremiumTypes.TIER_2)
                                    ? n(null != y || M ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS)
                                    : n(j.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var ty = n(364840),
    tg = n(460905),
    th = n(183623),
    tI = n(95635),
    tx = n(935462),
    tP = n(331322),
    tA = n(532794),
    tf = n(811611),
    tb = n(901017),
    t_ = n(403052);
function tv(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, r.bG)([eB.default], () => eB.default.locale);
    return (0, i.jsxs)("div", {
        className: t_.mH,
        children: [
            (0, i.jsx)(tb.A, {
                icon: e_._,
                iconClassName: t_.pl,
                description: eR.intl.formatToPlainString(eR.t.sQBgs2, { numFreeGuildSubscriptions: en.M4 }),
                color: eS.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(tb.A, {
                icon: e_._,
                iconClassName: t_.pl,
                description: eR.intl.formatToPlainString(eR.t["1A6vXi"], { percent: (0, eV.l9)(n, en.oX / 100) }),
                color: eS.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, i.jsx)(tb.A, { icon: tg.n, iconClassName: t_.zO, description: eR.intl.string(eR.t.Z9b2x2) }) : null,
            (0, i.jsx)(tb.A, { icon: th.F, iconClassName: t_.Kg, description: eR.intl.string(eR.t["8dqG5E"]) }),
            (0, i.jsx)(tb.A, { icon: tI.J, iconClassName: t_.$z, description: eR.intl.string(eR.t.cBorIy) }),
        ],
    });
}
function tE(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: u,
            analyticsLocation: o,
            analyticsSourceLocation: c,
            priceOptions: d,
        } = e,
        { analyticsLocations: S, sourceAnalyticsLocations: y } = (0, p.Ay)(m.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        g = null == t || null == t.premiumSubscriptionType,
        h = eY.Ay.getPrice(en.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        I = (0, eW.$g)(h.amount, h.currency),
        x = (0, eD.V)(),
        P = x?.trial_id,
        A = x?.subscription_trial?.sku_id === en.pe.TIER_2;
    return (
        l.useEffect(() => {
            w.default.track(tn.HAw.PREMIUM_UPSELL_VIEWED, { type: en.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: y });
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tx.s_, { "data-migration-pending": !0, onClick: n, className: t_.b }),
                (0, i.jsxs)(s.c, {
                    children: [
                        A && (0, i.jsx)(tf.Vq, { className: t_.Fg }),
                        (0, i.jsx)("div", { className: ep()(t_.Tn, { [t_.NH]: A }) }),
                        (0, i.jsx)("div", {
                            className: t_.G3,
                            children:
                                null != P
                                    ? eR.intl.string(eR.t.AoSzEr)
                                    : eR.intl.format(eR.t["7vePZb"], { monthlyPrice: I }),
                        }),
                        (0, i.jsx)(tv, { shouldUpsellFromNoneTier: g }),
                    ],
                }),
                (0, i.jsx)(ty.j, {
                    children: (0, i.jsxs)(tP.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(eo.Q, {
                                text: eR.intl.string(eR.t["13/7kX"]),
                                onClick: r,
                                variant: "secondary",
                            }),
                            (0, i.jsxs)(tP.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(eo.Q, {
                                        text: eR.intl.string(eR.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(eu.$, {
                                        variant: "active",
                                        text: null != P ? eR.intl.string(eR.t["Gd/XHF"]) : eR.intl.string(eR.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tA.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: en.pe.TIER_2,
                                                    analyticsLocations: S,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: tn.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: u,
                                                    trialId: P,
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
function tj(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: s } = e,
        { currency: a, paymentModalArgs: u, analyticsLocation: o, analyticsSourceLocation: c } = Q(),
        { paymentSourceId: d, activeSubscription: m } = (0, b.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        p = (0, r.bG)([O.A], () => (null != m ? (0, $.c9)(m.planId) : null)),
        S = (0, r.bG)([O.A], () => (null == p ? O.A.get(tm) : p));
    er()(null != S, "Missing nextPremiumSubscriptionPlan"), er()(null != a && "" !== a, "Currency not defined");
    let { paymentSources: y } = u,
        g = null != m ? m.paymentSourceId : null,
        h = Object.keys(y).length > 0,
        I = l.useCallback(() => n(j.pn.PLAN_SELECT), [n]),
        x = l.useCallback(() => n(null != g || h ? j.pn.REVIEW : j.pn.ADD_PAYMENT_STEPS), [n, g, h]);
    return (0, i.jsx)(tE, {
        premiumSubscriptionPlan: S,
        analyticsLocation: o,
        analyticsSourceLocation: c,
        onClose: t,
        onBack: I,
        onSkip: x,
        onSubscriptionConfirmation: s,
        priceOptions: null != d ? { paymentSourceId: d, currency: a } : { currency: a },
    });
}
var tC = n(253390);
function tN() {
    let e = (0, b.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = Q(),
        n = (0, r.bG)([O.A], () => null == e || null != O.A.get(e.planId)),
        i = (0, g.Y)(),
        s = (0, r.bG)([O.A], () => (null != e ? (0, $.c9)(e.planId) : null)),
        a = l.useMemo(
            () => (null != e && n && i ? (0, tC.v)(e, t) : [{ planId: en.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        u = l.useMemo(
            () =>
                a.find((e) => {
                    let { planId: t } = e;
                    return en.pW.has(t);
                })?.planId ?? en.gD.PREMIUM_MONTH_GUILD,
            [a],
        );
    return {
        newAdditionalPlans: a,
        currentPremiumSubscriptionPlan: s,
        hasFetchedPremiumSubscriptionPlan: n,
        premiumGuildSubscriptionPlanId: u,
    };
}
var tT = n(364995),
    tM = n(820739);
async function tL(e, t) {
    await (0, tM.CD)();
    let n = (0, B.D$)(R.A.boostSlots);
    return (0, tM.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function tD(e) {
    let { handleStepChange: t, handleClose: n, analyticsData: s } = e,
        { guildId: a, currency: u, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: c } = Q(),
        {
            activeSubscription: d,
            paymentSourceId: m,
            setPaymentSourceId: p,
        } = (0, b.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        }));
    er()(null != a, "Missing guildId"), er()(null != u && "" !== u, "Currency not defined");
    let { paymentSources: y } = o,
        { newAdditionalPlans: g, currentPremiumSubscriptionPlan: h } = tN(),
        I = (0, r.bG)([O.A], () => (null == h ? O.A.get(tm) : h));
    er()(null != I, "Missing nextPremiumSubscriptionPlan");
    let x = null != m ? { paymentSourceId: m, currency: u } : { currency: u },
        P = (function (e) {
            let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                {
                    guildId: r,
                    currency: s,
                    paymentModalArgs: a,
                    premiumSubscriptionPaymentSourceId: u,
                    numGuildBoostsToPurchase: o,
                    analyticsLocation: c,
                    analyticsSourceLocation: d,
                    flowStartTime: m,
                    applicationId: p,
                    intent: y,
                    onSubscribeComplete: g,
                } = Q(),
                { paymentSources: h, setIsSubmittingCurrentStep: I, isSubmittingCurrentStep: x } = a,
                {
                    activeSubscription: P,
                    paymentSourceId: A,
                    setPurchaseError: f,
                    hasAcceptedTerms: _,
                    setPurchaseState: v,
                } = (0, b.t4)((e) => ({
                    activeSubscription: e.activeSubscription,
                    paymentSourceId: e.paymentSourceId,
                    setPurchaseError: e.setPurchaseError,
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    setPurchaseState: e.setPurchaseState,
                })),
                E = (0, eC.sw)(),
                { newAdditionalPlans: N, currentPremiumSubscriptionPlan: T, premiumGuildSubscriptionPlanId: M } = tN(),
                L = (0, eq.A)({ location: "GuildBoostPurchaseModal", message: eR.intl.string(e8.default["tK8A/8"]) }),
                { checkoutPaymentSources: D } = (0, tT.t)(),
                G = (0, eq.iB)({ checkoutPaymentSources: D, paymentSourceId: A, location: "GuildBoostPurchaseModal" }),
                U = l.useMemo(
                    () => ({
                        ...i,
                        location: c,
                        source: d,
                        subscription_plan_id: M,
                        sku_id: (0, eY.mH)(en.pe.GUILD),
                        quantity: o,
                    }),
                    [i, c, d, o, M],
                ),
                R = l.useMemo(() => {
                    let { guild_id: e, ...t } = U;
                    return t;
                }, [U]),
                [O, k] = l.useState(!1),
                B = null != A ? { paymentSourceId: A, currency: s ?? void 0 } : { currency: s ?? void 0 },
                F = async () => {
                    er()(null != N, "Missing newAdditionalPlans");
                    let e = (0, q.W)(h, A);
                    f(null);
                    try {
                        v(C.h.PURCHASING),
                            I(!0),
                            er()(null != A, "Missing paymentSourceId"),
                            er()(null != E, "Missing invoicePreview");
                        let l = { amount: E.total, currency: E.currency },
                            s = B.currency ?? E.currency,
                            a = (0, eY.U8)(P, N, s.toLowerCase(), B.paymentSourceId);
                        if (
                            (w.default.track(tn.HAw.PAYMENT_FLOW_COMPLETED, {
                                ...U,
                                duration_ms: Date.now() - m,
                                guild_id: r ?? void 0,
                                application_id: p,
                            }),
                            O)
                        )
                            return;
                        if (null == P || null == T) {
                            er()(null != e, "Missing paymentSource");
                            let t = await (0, S.Ky)({
                                items: N,
                                paymentSource: e,
                                currency: s,
                                expectedInvoicePrice: l,
                                expectedRenewalPrice: a,
                            });
                            if (t.redirectConfirmation) return void k(null != t.redirectURL);
                        } else {
                            let t = { items: (0, eY.aE)(P, N) };
                            (t.currency = P.currency ?? s),
                                (t.paymentSource = null != u ? h[u] : void 0),
                                null == t.paymentSource &&
                                    (er()(null != e, "Missing paymentSource"), (t.paymentSource = e), (t.currency = s));
                            let n = await (0, S.nV)(P, t, l, a, i.location_stack);
                            if (n.redirectConfirmation) return void k(null != n.redirectURL);
                        }
                        null == y && t(j.pn.CONFIRM),
                            v(C.h.COMPLETED),
                            null != r && (await tL(r, null != y)),
                            null != y && n(),
                            g?.();
                    } catch (t) {
                        v(C.h.FAIL),
                            f(t),
                            w.default.track(tn.HAw.PAYMENT_FLOW_FAILED, {
                                ...R,
                                payment_error_code: t?.code,
                                payment_gateway:
                                    null != e ? (e.type === tn.hes.CARD ? tn.kM_.STRIPE : tn.kM_.BRAINTREE) : null,
                                payment_source_id: A,
                                duration_ms: Date.now() - m,
                            });
                    } finally {
                        O || I(!1);
                    }
                };
            return {
                text: eR.intl.string(eR.t.eUEeCt),
                loading: x,
                disabled: null == A || !_ || null != L || G,
                onClick: F,
                variant: "active",
            };
        })({ handleStepChange: t, handleClose: n, analyticsData: s }),
        A = l.useCallback(() => {
            t(j.pn.ADD_PAYMENT_STEPS), p(null);
        }, [t, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(z.dZ, {
                children: (0, i.jsx)(tt, {
                    guildId: a,
                    paymentSources: y,
                    priceOptions: x,
                    currentPremiumSubscription: d,
                    premiumSubscriptionPaymentSourceId: c,
                    premiumSubscriptionPlan: I,
                    newAdditionalPlans: g,
                    paymentSourceId: m,
                    setPaymentSourceId: p,
                    onPaymentSourceAdd: A,
                }),
            }),
            (0, i.jsx)(z.UX, {
                children: (0, i.jsx)(f.lo, { onBackClick: () => t(j.pn.PLAN_SELECT), primaryButtonProps: P }),
            }),
        ],
    });
}
var tG = n(825755);
function tU() {
    let {
            guildId: e,
            intent: t,
            onSubscribeComplete: n,
            flowStartTime: i,
            numGuildBoostsToPurchase: s,
            analyticsLocation: a,
            analyticsSourceLocation: u,
            paymentModalArgs: o,
        } = Q(),
        { setIsSubmittingCurrentStep: c, paymentSources: d } = o,
        { premiumGuildSubscriptionPlanId: m } = tN(),
        {
            paymentSourceId: y,
            setPurchaseState: g,
            setPurchaseError: h,
            loadId: x,
            startTime: P,
        } = (0, b.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            loadId: e.contextMetadata.loadId,
            startTime: e.contextMetadata.startTime,
        })),
        A = (0, L.l)(),
        f = (0, p.Db)(),
        _ = (0, r.bG)([tG.A], () => tG.A.popupCallbackCalled),
        v = {
            baseAnalyticsData: l.useMemo(
                () => ({
                    load_id: x,
                    payment_type: e4.fr[e4.VV.SUBSCRIPTION],
                    subscription_type: tn.rzx.PREMIUM,
                    subscription_plan_id: m,
                    sku_id: (0, eY.mH)(en.pe.GUILD),
                    quantity: s,
                    location: a,
                    source: u,
                    location_stack: f,
                    checkout_flow: I.CL.GUILD_BOOST_CHECKOUT,
                    is_gift: !1,
                    eligible_for_trial: !1,
                    guild_id: e ?? void 0,
                }),
                [x, m, s, a, u, f, e],
            ),
            flowStartTime: i,
            startTime: P,
            guildId: e,
            onSubscribeComplete: n,
            paymentSourceId: y,
            paymentSources: d,
            setIsSubmittingCurrentStep: c,
            setPurchaseError: h,
            setPurchaseState: g,
            setStep: A,
        },
        E = l.useRef(v);
    return (
        l.useEffect(() => {
            E.current = v;
        }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                startTime: i,
                guildId: l,
                onSubscribeComplete: r,
                paymentSourceId: s,
                paymentSources: a,
                setIsSubmittingCurrentStep: u,
                setPurchaseError: o,
                setPurchaseState: c,
                setStep: d,
            } = E.current;
            (async () => {
                if (!0 === _)
                    try {
                        if (null == tG.A.redirectedPaymentId) return;
                        await (0, S.tn)(tG.A.redirectedPaymentId),
                            w.default.track(tn.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                ...e,
                                duration_ms: Date.now() - i,
                                payment_source_type: (0, q.g)(a, s) ?? void 0,
                            }),
                            o(null),
                            d(j.pn.CONFIRM),
                            c(C.h.COMPLETED),
                            null != l && (await tL(l, null != t)),
                            r?.();
                    } catch (l) {
                        c(C.h.FAIL), o(l);
                        let { guild_id: t, ...i } = e;
                        w.default.track(tn.HAw.PAYMENT_FLOW_FAILED, {
                            ...i,
                            payment_error_code: l?.code,
                            payment_gateway: tn.kM_.STRIPE,
                            payment_source_id: s,
                            duration_ms: Date.now() - n,
                        });
                    } finally {
                        u(!1), (0, S.bl)();
                    }
            })();
        }, [_, t]),
        null
    );
}
function tR(e) {
    let { transitionState: t, message: n, onClose: l } = e;
    return (0, i.jsx)(f.Jg, {
        transitionState: t,
        size: "md",
        onClose: l,
        "aria-label": eR.intl.string(eR.t.q9EGps),
        children: (0, i.jsxs)(P.e0, {
            children: [
                (0, i.jsx)(f.s3, { title: eR.intl.string(eR.t.q9EGps) }),
                (0, i.jsx)(s.c, { children: (0, i.jsx)("p", { className: tp.C, children: n }) }),
            ],
        }),
    });
}
function tO(e) {
    let { transitionState: t, onClose: n, onSubscriptionConfirmation: s, analyticsLocations: c } = e,
        {
            numGuildBoostsToPurchase: I,
            currency: x,
            setCurrency: P,
            setCurrencies: A,
            guildId: E,
            applicationId: j,
            analyticsLocation: T,
            analyticsSourceLocation: M,
        } = Q(),
        { analyticsLocations: L } = (0, p.Ay)(c, m.A.GUILD_BOOST_PURCHASE_MODAL),
        {
            activeSubscription: D,
            paymentSourceId: G,
            purchaseState: R,
        } = (0, b.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            purchaseState: e.purchaseState,
        })),
        B = (0, y.Hp)(),
        H = (0, r.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        V = (0, g.Y)(),
        { hasFetchedPremiumSubscriptionPlan: Y, premiumGuildSubscriptionPlanId: W } = tN(),
        z = (0, r.bG)([O.A], () => O.A.get(W)?.skuId, [W]);
    (0, d.Ay)(() => {
        k.A.hasFetchedSubscriptions() || (0, S.hP)(),
            O.A.isLoadedForPremiumSKUs() || u.h.wait(() => (0, o.zS)()),
            null == E || null != U.A.getGuild(E) || null != v.A.getGuild(E) || v.A.isGuildFetching(E) || (0, _.y)(E),
            null != D &&
                null != D.renewalMutations &&
                w.default.track(tn.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: T, guild_id: E });
    }),
        l.useEffect(() => {
            (0, F.c_)(G);
        }, [G]),
        l.useEffect(() => {
            let e;
            V &&
                (null != O.A.get(en.gD.PREMIUM_MONTH_GUILD) && A((e = (0, F._w)(en.gD.PREMIUM_MONTH_GUILD, G, !1))),
                null == G && null != D && null != D.paymentSourceId ? P(D.currency) : null != e && P(e[0]));
        }, [G, D, V, P, A]);
    let q = l.useMemo(() => ({ quantity: I }), [I]),
        $ = l.useCallback(() => (n(R === C.h.COMPLETED), Promise.resolve()), [n, R]);
    return B
        ? (0, i.jsx)(f.Jg, {
              transitionState: t,
              size: "md",
              onClose: $,
              "aria-label": eR.intl.string(eR.t.q9EGps),
              children: (0, i.jsx)(h.oO, {}),
          })
        : null != D && D.isPausedOrPausePending && !D.isPausedAllowsUpdatesButNotResume
          ? (0, i.jsx)(tR, { transitionState: t, message: eR.intl.string(eR.t.mOWsF1), onClose: $ })
          : null != D && null != D.renewalMutations
            ? (0, i.jsx)(tR, { transitionState: t, message: eR.intl.string(eR.t.npfhh0), onClose: $ })
            : H && Y && null != x && "" !== x
              ? (0, i.jsx)(tk, {
                    transitionState: t,
                    onClose: n,
                    children: (0, i.jsx)(N.PaymentModal, {
                        analyticsLocations: L,
                        analyticsObject: T,
                        analyticsSourceLocation: M,
                        transitionState: t,
                        onClose: n,
                        initialPlanId: null,
                        subscriptionTier: null,
                        planGroup: [],
                        skuId: z ?? null,
                        applicationId: j,
                        guildId: E ?? void 0,
                        onSubscriptionConfirmation: s,
                        renderHeader: tB,
                        skipUnifiedHeaderForSteps: tF,
                        disableUnsupportedExternalSubscriptionHandler: !0,
                        isMediumModal: !0,
                        analyticsDataOverride: q,
                    }),
                })
              : (0, i.jsx)(f.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: $,
                    "aria-label": eR.intl.string(eR.t.q9EGps),
                    children: (0, i.jsx)("div", { className: tp._5, children: (0, i.jsx)(a.y, {}) }),
                });
}
function tk(e) {
    let { transitionState: t, onClose: n, children: l } = e,
        { numGuildBoostsToPurchase: r, guildId: s, existingAvailableSlotCount: a } = Q(),
        u = (0, b.t4)((e) => e.purchaseState),
        o = (0, L.bB)(),
        c = (0, G.n)("GuildBoostPurchaseModal"),
        d = c && (o === j.pn.REVIEW || o === j.pn.CONFIRM),
        m = (0, W.A)(d);
    return c && o === j.pn.CONFIRM
        ? (0, i.jsx)(Y.A, {
              mediaUrls: m.mediaUrls,
              isSuccess: m.isSuccess,
              transitionState: t,
              onClose: () => (n(u === C.h.COMPLETED), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(V.A, {
                      transitionState: t,
                      guild: U.A.getGuild(s),
                      guildBoostQuantity: r + a,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : l;
}
function tw(e) {
    let { step: t, onClose: n } = e,
        l = (0, G.n)("GuildBoostPurchaseModal"),
        r = (0, b.t4)((e) => e.purchaseState);
    return l
        ? (0, i.jsx)(f.s3, { title: (0, A.u)({ skuId: null, step: t }).title })
        : (0, i.jsx)(H.A, { onClose: () => n(r === C.h.COMPLETED), currentStep: t, purchaseState: r });
}
let tB = (e, t, n) =>
        n === j.pn.PREMIUM_UPSELL
            ? null
            : n === j.pn.REVIEW
              ? (0, i.jsx)(f.s3, { ...(0, A.u)({ skuId: e?.skuId ?? null, step: n }) })
              : (0, i.jsx)(tw, { step: n, onClose: t }),
    tF = [j.pn.PLAN_SELECT];
function tH(e) {
    return (0, i.jsx)(tO, { ...e });
}
function tV(e) {
    let {
            totalNumberOfSlotsToAssign: t = 1,
            disablePremiumUpsell: n,
            closeGuildPerksModal: s,
            guildId: a,
            analyticsLocation: u,
            analyticsSourceLocation: o,
            applicationId: d,
            intent: S,
            onSubscribeComplete: y,
        } = e,
        g = (0, r.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        { analyticsLocations: h } = (0, p.Ay)(m.A.GUILD_BOOST_PURCHASE_MODAL),
        P = (0, c.A)(() => t - (0, B.D$)(R.A.boostSlots).length),
        A = l.useMemo(() => (0, D.A)() ?? void 0, []);
    return (0, i.jsx)(p.f5, {
        value: h,
        children: (0, i.jsx)(x.CheckoutRootProvider, {
            activeSubscription: g,
            stepConfigs: tY,
            skuIDs: [],
            loadId: A,
            unifiedCheckoutFlow: I.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(E.Mq, {
                children: (0, i.jsxs)(ee, {
                    initialNumGuildBoostsToPurchase: P,
                    disablePremiumUpsell: n,
                    closeGuildPerksModal: s,
                    guildId: a ?? null,
                    analyticsLocation: u,
                    analyticsSourceLocation: o,
                    applicationId: d,
                    intent: S,
                    onSubscribeComplete: y,
                    children: [(0, i.jsx)(tU, {}), (0, i.jsx)(tH, { ...e })],
                }),
            }),
        }),
    });
}
let tY = [
    { key: j.pn.PLAN_SELECT, renderStep: (e) => (0, i.jsx)(tS, { ...e }), options: { renderHeader: !0 } },
    {
        key: j.pn.PREMIUM_UPSELL,
        renderStep: (e) => (0, i.jsx)(tj, { ...e }),
        options: { renderHeader: !1, hideSlider: !0 },
    },
    { key: j.pn.ADD_PAYMENT_STEPS, renderStep: (e) => (0, i.jsx)(T.x, { ...e }), options: { renderHeader: !0 } },
    { key: j.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(M.A, {}), options: { renderHeader: !0 } },
    { key: j.pn.REVIEW, renderStep: (e) => (0, i.jsx)(tD, { ...e }), options: { renderHeader: !0 } },
    { key: j.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(ei, { ...e }), options: { renderHeader: !0 } },
];
