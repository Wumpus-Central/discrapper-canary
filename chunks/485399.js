n.d(t, { default: () => tH });
var i = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(430993),
    s = n(289873),
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
    x = n(529427),
    I = n(197510),
    A = n(584160),
    b = n(480642),
    f = n(211159),
    P = n(832286),
    _ = n(958340),
    v = n(937008),
    E = n(166532),
    j = n(566980),
    C = n(314671),
    N = n(735305),
    T = n(343834),
    M = n(615310),
    L = n(925847),
    D = n(489254),
    G = n(71393),
    U = n(178368),
    R = n(97352),
    O = n(166403),
    k = n(174459),
    w = n(473145),
    B = n(83617),
    F = n(802790),
    H = n(636441),
    V = n(587491),
    Y = n(285753),
    W = n(482132),
    z = n(216641),
    q = n(615396),
    $ = n(61299),
    J = n(295405);
let [K, Z, Q] = (0, n(786300).A)();
function X(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: a,
            children: s,
            guildId: u,
            analyticsLocation: o,
            analyticsSourceLocation: d,
            applicationId: m,
            intent: p,
            onSubscribeComplete: S,
        } = e,
        [y, g] = l.useState(t),
        [h, x] = l.useState(null),
        [I, A] = l.useState([]),
        [b, P] = l.useState(!0),
        _ = (0, c.A)(() => Date.now()),
        v = (0, c.A)(() => (0, w.D$)(U.A.boostSlots).length),
        E = (0, f.t4)((e) => e.activeSubscription),
        j = (0, r.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        C = (0, r.bG)([J.A], () => J.A.defaultPaymentSourceId),
        N = null != E ? E.paymentSourceId : null,
        T = (0, $._V)(null != N ? N : j ? C : null);
    return (0, i.jsx)(K.Provider, {
        value: {
            numGuildBoostsToPurchase: y,
            setNumGuildBoostsToPurchase: g,
            disablePremiumUpsell: n,
            closeGuildPerksModal: a,
            guildId: u,
            currency: h,
            setCurrency: x,
            currencies: I,
            setCurrencies: A,
            paymentModalArgs: T,
            premiumSubscriptionPaymentSourceId: N,
            analyticsLocation: o,
            analyticsSourceLocation: d,
            forceDisableSubmitButton: b,
            setForceDisableSubmitButton: P,
            applicationId: m,
            intent: p,
            onSubscribeComplete: S,
            flowStartTime: _,
            existingAvailableSlotCount: v,
        },
        children: s,
    });
}
var ee = n(879100),
    et = n(788868);
function en(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: l, paymentModalArgs: a, existingAvailableSlotCount: s } = Z(),
        {
            activeSubscription: u,
            startingFractionalPremiumEndsAt: o,
            customCheckoutFlow: d,
            paymentSourceId: m,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        p = (0, r.bG)([_.A], () => (null != n ? _.A.getGuild(n) : void 0), [n]),
        S = null != n ? G.A.getGuild(n) : null,
        y = (0, c.A)(() => (0, q.b2)(o)),
        g = (0, r.bG)([R.A], () => (null != u ? (0, q.c9)(u.planId) : null)),
        { paymentSources: h } = a,
        x = (0, z.g)(h, m),
        I = null != S ? S.name : null != p ? p.name : void 0,
        A = y && null != g && !et.YV.has(g.id);
    return (0, i.jsx)(W.dZ, {
        children: (0, i.jsx)(ee.W, {
            guild: S,
            guildBoostQuantity: l + s,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: x,
            fallbackGuildName: I,
            didPurchaseOnFractionalPremium: A,
            customCheckoutFlow: d,
        }),
    });
}
var ei = n(284009),
    el = n.n(ei),
    er = n(683071),
    ea = n(512950),
    es = n(821609),
    eu = n(123292),
    eo = n(87719);
let ec = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(321073);
var ed = n(503698),
    em = n.n(ed),
    ep = n(661531),
    eS = n(990078),
    ey = n(408278),
    eg = n(834040),
    eh = n(499373),
    ex = n(834730),
    eI = n(403581),
    eA = n(663803),
    eb = n(320448),
    ef = n(534514),
    eP = n(104510),
    e_ = n(695366),
    ev = n(726656),
    eE = n(531260),
    ej = n(666646),
    eC = n(404374),
    eN = n(543767),
    eT = n(881489),
    eM = n(477421),
    eL = n(234419),
    eD = n(363476),
    eG = n(531506),
    eU = n(375708),
    eR = n(51465);
function eO() {
    return (0, i.jsxs)("div", {
        className: em()(eR.dt, eR.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eR.qq,
            }),
            (0, i.jsx)(ex.E, {
                variant: "text-sm/medium",
                className: eR.tD,
                children: eU.intl.format(eU.t.f5VHKm, {}),
            }),
        ],
    });
}
function ek(e) {
    let { text: t, color: n } = e;
    return (0, i.jsxs)("div", {
        className: eR.dt,
        children: [(0, i.jsx)(eI.t, { size: "md", className: eR.YW, color: n }), (0, i.jsx)("div", { children: t })],
    });
}
var ew = n(773669),
    eB = n(287809),
    eF = n(975571),
    eH = n(252424),
    eV = n(428262),
    eY = n(580630),
    eW = n(155718),
    ez = n(606267),
    eq = n(376843),
    e$ = n(274971),
    eJ = n(596034),
    eK = n(848584),
    eZ = n(241989),
    eQ = n(908419),
    eX = n(888751),
    e0 = n(874638),
    e1 = n(458785),
    e3 = n(818348),
    e4 = n(327105),
    e8 = n(7921);
function e6(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: l,
            totalDue: r,
            currency: a,
            startDate: s,
        } = e,
        { immediateDelivery: u } = (0, eQ.U)();
    return (0, i.jsx)(eJ._, {
        variant: {
            type: eJ.I.Subscription,
            purchaseButtonText: eU.intl.string(eU.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: u,
    });
}
function e2(e) {
    return eU.intl.format(eU.t.IeaYqg, { endDate: e });
}
function e5(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: e8.bU }),
            (0, i.jsx)(ex.E, { variant: "text-sm/normal", className: e8.b7, children: t }),
            (0, i.jsx)("div", { className: e8.bU }),
        ],
    });
}
function e9(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: r,
            checkoutInvoicePreview: a,
        } = e,
        s = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: u,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: eU.intl.formatToPlainString(eU.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, eV.Mn)(n.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: a,
                entitlementDiscount: s,
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
            label: eU.intl.formatToPlainString(eU.t.ZSVged, { planName: (0, eV.RH)(l[0].subscriptionPlanId) }),
            tooltip: eU.intl.string(eU.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eU.intl.string(eU.t["+as5ZZ"]),
                tooltip: eU.intl.string(eU.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && u.push({ id: "tax", label: eU.intl.string(eU.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, eX.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...o, ...u];
    return (0, i.jsx)(eK.Vm, {
        defaultExpanded: !0,
        label: eU.intl.string(e4.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function e7(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: l, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, i.jsx)(e1.m0, { proratedInvoice: l, renewalInvoice: r, isUpdate: t })
        : (0, i.jsx)(e1.m0, { renewalInvoice: r });
}
function te(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: s,
            premiumSubscriptionPlan: u,
            newAdditionalPlans: o,
            paymentSourceId: c,
            setPaymentSourceId: d,
            onPaymentSourceAdd: S,
        } = e,
        y = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: a,
                    newAdditionalPlans: s,
                } = e,
                u = (0, r.bG)([G.A, _.A], () => {
                    let e = G.A.getGuild(n);
                    return null != e ? e : _.A.isGuildFetching(n) ? null : _.A.getGuild(n);
                }, [n]),
                o = a.interval,
                c = a.intervalCount,
                d = (0, r.bG)([R.A], () => R.A.getForSkuAndInterval((0, eV.mH)(et.pe.GUILD), o, c));
            el()(null != d, "Missing guildBoostingSubscriptionPlan");
            let S = (0, eV.J$)(i.paymentSourceId),
                y = (0, eT.ds)();
            t = null != l ? (0, eV.Om)(l, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: g } = (0, p.Ay)(),
                [h, x] = (0, eN.YV)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [I, A] = (0, eN.YV)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, ej.OQ)({
                    checkoutInvoicePreview: h,
                    checkoutInvoiceError: x,
                    renewalInvoicePreview: I,
                    renewalInvoiceError: A,
                }),
                {
                    guild: u ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: S,
                    isReverseTrial: y,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: I,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: t,
            priceOptions: l,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: u,
            newAdditionalPlans: o,
        }),
        {
            isSubscriptionUpdate: g,
            guild: h,
            isPrepaid: x,
            isReverseTrial: I,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: b,
        } = y,
        f = (0, ez.A)({ location: "GuildBoostReview", message: eU.intl.string(e4.default["tK8A/8"]) });
    if (null == A || null == b || null == h) return (0, i.jsx)(e$.E, {});
    let P = (0, i.jsx)(e7, {
            isSubscriptionUpdate: g,
            premiumSubscription: a,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: b,
        }),
        v = (0, i.jsx)(eq.n, {
            setPaymentSourceId: d,
            paymentSourceId: c,
            location: "GuildBoostReview",
            label: eU.intl.string(eU.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        E = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: l,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, z.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, e1.de)({ isSubscriptionUpdate: t, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: g,
            premiumSubscriptionPlan: u,
            renewalInvoicePreview: b,
            checkoutInvoicePreview: A,
            paymentSources: n,
            paymentSourceId: c,
        }),
        j = (0, i.jsx)(e6, { ...E }),
        C = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: s, isPrepaid: u, isReverseTrial: o } = a,
                c = n.interval,
                d = n.intervalCount,
                m = (e) => (0, e0.Z)(i.invoiceItems).find((t) => et.pW.has(t.subscriptionPlanId) && e(t)),
                p = m((e) => e.amount >= 0);
            el()(null != p, "Missing guild boosting invoice item");
            let S = m((e) => e.amount < 0),
                y = null != S ? p.quantity - S.quantity : p.quantity,
                g = i.invoiceItems.filter((e) => (0, eV.xq)(e.subscriptionPlanId)),
                h = g.reduce((e, t) => e + t.amount, 0),
                x = (0, eN.sL)(p) * y,
                I = (0, eY.$g)(x, i.currency),
                A = (0, eY.CE)(I, c, d),
                b = (0, eY.$g)(i.total, i.currency) + (i.currency !== e3.Yr.USD ? "*" : ""),
                f = i.subtotal - x - h,
                P = p.discounts.map((e) => {
                    let t = e.amount / p.quantity;
                    return { ...e, amount: t * y };
                }),
                _ = P.find((e) => e.type === eW.iS.SUBSCRIPTION_PLAN),
                v = P.find((e) => e.type === eW.iS.ENTITLEMENT),
                E = p.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: u,
                isReverseTrial: o,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, eY.CE)((0, eY.$g)(E, i.currency), c, d),
                formattedTotal: b,
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
            premiumSubscriptionPlan: u,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: b,
            priceOptions: l,
            reviewState: y,
        }),
        N = (0, i.jsx)(e9, { ...C }),
        T = (function (e, t, n) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: a,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: o,
                } = t,
                c = null != o;
            return {
                label: eU.intl.formatToPlainString(eU.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, eV.Mn)(r.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eZ.a6, {}),
                price: s,
                PriceIcon: c ? eI.t : void 0,
                priceTooltip: c ? eU.intl.string(e4.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            h,
            C,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: e2(i.currentPeriodEnd) } : null;
            })({ isPrepaid: x, isReverseTrial: I, premiumSubscription: a }),
        ),
        M = (0, i.jsx)(eZ.f7, { ...T });
    return (0, i.jsx)(e$.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: f,
        purchaseItemContent: M,
        subscriptionDetailsContent: P,
        paymentMethodContent: v,
        invoiceSummaryContent: N,
        legalContent: j,
        invoiceTotalDueValue: C.formattedTotal,
        invoiceTotalDueLabel: eU.intl.string(e4.default.R0cZsM),
    });
}
var tt = n(652215);
n(26279);
var tn = n(406263);
function ti(e) {
    return "" === e || "-" === e;
}
function tl(e) {
    let { value: t, onChange: n, minValue: r = 1, maxValue: a = 30, ariaLabel: s } = e,
        [u, o] = l.useState(t);
    l.useEffect(() => {
        o(t);
    }, [t]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), ti(e) || n(e);
        };
    return (0, i.jsxs)("div", {
        className: tn.U$,
        children: [
            (0, i.jsx)(ey.K, {
                variant: "secondary",
                size: "md",
                icon: eg.Q,
                onClick: () => {
                    c && !(u <= r) && d(u - 1);
                },
                "aria-label": eU.intl.string(eU.t["k+ohJm"]),
                disabled: !c || u <= r,
            }),
            (0, i.jsx)("div", {
                className: tn.WJ,
                children: (0, i.jsx)("input", {
                    className: tn.Zh,
                    "aria-label": s,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (ti(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= r) return void d(r);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        ti(u) && o(t);
                    },
                }),
            }),
            (0, i.jsx)(ey.K, {
                variant: "secondary",
                size: "md",
                icon: eh.T,
                onClick: () => {
                    c && !(u >= a) && d(u + 1);
                },
                "aria-label": eU.intl.string(eU.t.w8Sc4B),
                disabled: !c || u >= a,
            }),
        ],
    });
}
function tr(e) {
    let { message: t } = e;
    return (0, i.jsx)(ex.E, { variant: "text-xs/normal", color: "text-muted", className: tn.jH, children: t });
}
function ta(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: tn.Vk,
        children: [
            (0, i.jsx)("div", {
                className: tn.D0,
                children: (0, i.jsx)(eI.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tn.ue,
                    color: eC.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: tn.yP, children: t }),
        ],
    });
}
function ts(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        planLabel: a,
        planPriceContent: s,
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
                className: e8.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: e8.E6,
                        children: [
                            (0, i.jsx)(eA.l, {
                                value: n,
                                onChange: (e) => r(e),
                                className: e8.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e8.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: em()(e8.QK, { [e8.S]: t }), children: s }),
                ],
            }),
            (0, i.jsx)("div", { className: e8.J3 }),
            (0, i.jsxs)("div", {
                className: e8.mP,
                children: [
                    (0, i.jsx)("div", { className: e8.xp, children: eU.intl.string(eU.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: em()(e8.__invalid_planSelectorSubtotalPrice, { [e8.S]: t }),
                        children: u,
                    }),
                ],
            }),
            g.map((e, t) => (0, i.jsx)(l.Fragment, { children: e }, t)),
            S,
        ],
    });
}
function tu(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        refreshNextStepLabel: a,
        planLabel: s,
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
        refreshPricingNotes: x,
    } = e;
    return (0, i.jsxs)("div", {
        className: tn.xY,
        children: [
            p,
            (0, i.jsxs)("div", {
                className: tn.K3,
                children: [
                    (0, i.jsx)(ex.E, {
                        variant: "text-md/medium",
                        className: tn.bk,
                        children: eU.intl.string(eU.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eb._, { className: tn.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ex.E, { variant: "text-md/medium", className: tn.kX, children: a }),
                ],
            }),
            m,
            S,
            (0, i.jsxs)("div", {
                className: tn.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: tn.fX,
                        children: [
                            (0, i.jsx)(tl, {
                                value: n,
                                onChange: (e) => r(e),
                                ariaLabel: s,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(ex.E, { variant: "text-md/medium", className: tn.ny, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: em()(tn.El, { [e8.S]: t }), children: u }),
                ],
            }),
            g,
            (0, i.jsxs)("div", {
                className: tn.fh,
                children: [
                    (0, i.jsx)(ef.D, {
                        variant: "heading-lg/semibold",
                        className: tn.O3,
                        children: eU.intl.string(eU.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: em()(tn.BU, { [e8.S]: t }), children: c }),
                ],
            }),
            x.map((e, t) => (0, i.jsx)(l.Fragment, { children: e }, t)),
        ],
    });
}
function to(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e8.Mv,
        children: [
            (0, i.jsx)(eP._, { className: e8.T5, color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eU.intl.format(eU.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != l
                        ? (0, i.jsx)(eS.m, {
                              text: eU.intl.formatToPlainString(eU.t.SFpsCH, {
                                  canceledCount: n,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(e_.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e8.Y5,
                                  color: ep.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tc(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: a,
            setForceDisableSubmitButton: u,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: S,
            isRefreshEnabled: y = !1,
            showRefreshSubtotalRate: g = !1,
            refreshNextStepLabel: h = eU.intl.string(eU.t.QBnNHq),
        } = e,
        x = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: a,
                    numGuildBoosts: u,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: S,
                    priceOptions: y,
                    showRefreshSubtotalRate: g,
                } = e,
                h =
                    ((t = (0, r.bG)([O.A], () => O.A.getPremiumTypeSubscription())),
                    (0, r.bG)([J.A], () =>
                        t?.paymentSourceId != null ? J.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                x = a.interval,
                I = a.intervalCount,
                A = (0, r.bG)([R.A], () => R.A.getForSkuAndInterval((0, eV.mH)(et.pe.GUILD), x, I)),
                b = (0, r.bG)([eB.default], () => eB.default.getCurrentUser()),
                f = (0, eE.A)({ forceFetch: !1 });
            el()(null != A, "Missing guildBoostingSubscriptionPlan");
            let P = [{ planId: A.id, quantity: 1 }],
                _ = c?.items.find(
                    (e) => e.planId === et.gD.PREMIUM_MONTH_TIER_2 || e.planId === et.gD.PREMIUM_YEAR_TIER_2,
                );
            null != _ && P.push(_);
            let v = c?.items.find(
                    (e) => e.planId === et.gD.PREMIUM_MONTH_GUILD || e.planId === et.gD.PREMIUM_YEAR_GUILD,
                ),
                E = null == h || !et.uJ.has(h) || null == v,
                { analyticsLocations: j } = (0, p.Ay)(),
                [C, N] = (0, eN.YV)({
                    subscriptionId: c?.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: y.currency,
                    preventFetch: E,
                    analyticsLocations: j,
                    analyticsLocation: m.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, ej.Tr)(C, N);
            let T = !E && null == C && null == N;
            l.useLayoutEffect(() => {
                o(T);
            }, [T, o]);
            let M = (0, eL.V)()?.subscription_trial?.sku_id === et.pe.TIER_2,
                L = eV.Ay.hasBoostDiscount(b),
                D = L && null != c && eV.Ay.isPremiumAtLeast(eV.Ay.getPremiumType(c.planId), et.PremiumTypes.TIER_1),
                G = C?.findInvoiceItemByPlanId(A.id),
                U =
                    null != G
                        ? { amount: G.amount, tax: 0, taxInclusive: !0, currency: C.currency }
                        : eV.Ay.getPrice(A.id, L, !1, y),
                k = u * U.amount,
                B = (0, eT.ds)() && L && null != c,
                F = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: a,
                        } = e;
                    return (
                        (t = l ? "reverse_trial" : r ? "discount" : a ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: i === et.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: S.length,
                    fractionalPremiumState: f.fractionalState,
                    isReverseTrial: B,
                    hasDiscountUpsell: D,
                    withTrialOfferCopyVariant: M,
                });
            "discount" === F.upsellVariant
                ? (el()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (n = eU.intl.format(eU.t.hf6YOY, { planName: eV.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = eU.intl.format("upsell_trial" === F.upsellVariant ? eU.t.ba1L74 : eU.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eH.l9)(ew.default.locale, et.oX / 100),
                      freeSubscriptionCount: et.M4,
                  }));
            let H = S.filter((e) => (0, w.I5)(e)).length,
                V = (0, eV.J$)(y.paymentSourceId),
                { ipCountryCode: Y } = (0, eM.A)(),
                W = "HR" === Y && U.currency === e3.Yr.EUR,
                z =
                    B && null != c
                        ? (0, i.jsx)(e5, { text: e2(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: em()(e8.hA, e8.G3), children: eU.intl.string(eU.t.jNY1FO) }),
                q =
                    B && null != c
                        ? (0, i.jsx)(e5, { text: e2(c.currentPeriodEnd), className: e8.jk })
                        : (0, i.jsx)("div", { className: tn._X, children: eU.intl.string(eU.t.jNY1FO) }),
                $ = F.showExistingSlotNotice
                    ? (0, i.jsx)(to, { existingAvailableSlots: S, canceledCount: H, premiumSubscription: c })
                    : null,
                K = F.showFractionalPremiumBanner ? (0, i.jsx)(eG.vi, { fractionalPremiumInfo: f }) : null,
                Z = V
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === et.WT.YEAR
                              ? eU.intl.string(eU.t.YDpAzZ)
                              : t === et.WT.MONTH && 1 === n
                                ? eU.intl.string(eU.t["6ZR3By"])
                                : null;
                      })({ intervalType: x, intervalCount: I }) ?? eU.intl.string(eU.t.K9Bmze))
                    : eU.intl.string(eU.t.K9Bmze),
                Q = T
                    ? (0, i.jsx)(s.y, {})
                    : V
                      ? (0, eY.$g)(U.amount, U.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: l = 1 } = e,
                                r = (0, eY.$g)(t, n);
                            return i === et.WT.YEAR
                                ? eU.intl.formatToPlainString(eU.t["8M04YJ"], { price: r })
                                : i === et.WT.MONTH && 1 === l
                                  ? eU.intl.formatToPlainString(eU.t.VStWCR, { price: r })
                                  : i === et.WT.MONTH && l > 1
                                    ? eU.intl.formatToPlainString(eU.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: x, intervalCount: I, amount: U.amount, currency: U.currency }),
                X = T
                    ? (0, i.jsx)(s.y, {})
                    : (0, i.jsx)(eD.A, {
                          price: k,
                          currency: U.currency,
                          intervalType: x,
                          intervalCount: I,
                          isPrepaidPaymentSource: V,
                      }),
                ee = T
                    ? (0, i.jsx)(s.y, {})
                    : g && !V
                      ? (0, eY.CE)((0, eY.$g)(k, U.currency), x, I)
                      : (0, eY.$g)(k, U.currency),
                en = [],
                ei = [];
            if (W) {
                let e = (0, i.jsx)(
                    ev.A,
                    {
                        message: eU.intl.formatToPlainString(eU.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eY.$g)(7.5345 * k, e3.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                en.push(e), ei.push(e);
            }
            let er = eU.intl.format(eU.t.Om31w8, { documentationLink: eF.A.getArticleURL(tt.MVz.LOCALIZED_PRICING) });
            return (
                en.push((0, i.jsx)(ev.A, { message: er }, "localized-pricing")),
                ei.push((0, i.jsx)(tr, { message: er }, "localized-pricing")),
                {
                    isLoading: T,
                    planLabel: Z,
                    planPriceContent: Q,
                    subtotalContent: X,
                    refreshSubtotalContent: ee,
                    legacyDescriptionContent: z,
                    refreshDescriptionContent: q,
                    existingSlotNotice: $,
                    fractionalBanner: K,
                    legacyPricingNotes: en,
                    refreshPricingNotes: ei,
                    discountCallout:
                        "reverse_trial" === F.upsellVariant
                            ? (0, i.jsx)(eO, {})
                            : (0, i.jsx)(ek, { text: n, color: eC.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === F.upsellVariant ? (0, i.jsx)(eO, {}) : (0, i.jsx)(ta, { text: n }),
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
    return (0, i.jsx)(y ? tu : ts, {
        isLoading: x.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: a,
        planLabel: x.planLabel,
        planPriceContent: x.planPriceContent,
        subtotalContent: x.subtotalContent,
        refreshSubtotalContent: x.refreshSubtotalContent,
        legacyDescriptionContent: x.legacyDescriptionContent,
        refreshDescriptionContent: x.refreshDescriptionContent,
        fractionalBanner: x.fractionalBanner,
        existingSlotNotice: x.existingSlotNotice,
        discountCallout: x.discountCallout,
        refreshDiscountCallout: x.refreshDiscountCallout,
        legacyPricingNotes: x.legacyPricingNotes,
        refreshPricingNotes: x.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let td = et.gD.NONE_MONTH;
var tm = n(898640);
function tp(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: l,
            setNumGuildBoostsToPurchase: a,
            guildId: s,
            currency: u,
            closeGuildPerksModal: o,
            disablePremiumUpsell: d,
            setForceDisableSubmitButton: m,
            forceDisableSubmitButton: p,
            paymentModalArgs: S,
            premiumSubscriptionPaymentSourceId: y,
        } = Z(),
        { paymentSourceId: g, activeSubscription: h } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        x = null != y || Object.keys(S.paymentSources).length > 0,
        I = (0, E.Ir)(x ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS),
        A = (0, c.A)(() => (0, w.D$)(U.A.boostSlots)),
        b = (0, D.n)("GuildBoostPurchaseModal"),
        P = ec.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = b && P,
        j = (0, r.bG)([_.A], () => (null != s ? _.A.getGuild(s) : void 0), [s]),
        C = null != s ? G.A.getGuild(s) : null,
        N = null == j && null == C,
        T = null != h && h.isPurchasedExternally,
        M = Object.keys(S.paymentSources).length > 0,
        L = (0, r.bG)([R.A], () => (null != h ? (0, q.c9)(h.planId) : null)),
        O = (0, r.bG)([R.A], () => (null == L ? R.A.get(td) : L));
    el()(null != s, "Missing guildId"), el()(null != O, "Missing nextPremiumSubscriptionPlan");
    let k = (0, i.jsx)(tc, {
        premiumSubscriptionPlan: O,
        numGuildBoosts: l,
        setNumGuildBoosts: a,
        setForceDisableSubmitButton: m,
        premiumSubscription: h,
        existingAvailableSlots: A,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != o && o(), (0, eo.e)();
        },
        priceOptions:
            null != g ? { paymentSourceId: g, currency: null != u ? u : void 0 } : { currency: null != u ? u : void 0 },
        isRefreshEnabled: b,
        showRefreshSubtotalRate: v,
        refreshNextStepLabel: I,
    });
    return (
        T && null != h && null != h.paymentGateway
            ? (k = (0, i.jsxs)("div", {
                  className: tm.xK,
                  children: [
                      (0, i.jsx)(er.w, {
                          type: "critical",
                          children: eU.intl.format(eU.t["/m3Y3s"], { paymentGatewayName: e3.qm[h.paymentGateway] }),
                      }),
                      k,
                  ],
              }))
            : null != s &&
              !_.A.isGuildFetching(s) &&
              N &&
              (k = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ea.p, {
                          messageType: ea.Y.ERROR,
                          className: tm.MR,
                          children: eU.intl.string(eU.t.eAn6z2),
                      }),
                      k,
                  ],
              })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(W.dZ, { children: k }),
                (0, i.jsx)(W.UX, {
                    children: (0, i.jsx)(ee._, {
                        currentStep: E.pn.PLAN_SELECT,
                        isRefreshEnabled: b,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: b
                            ? (0, i.jsx)(es.$, {
                                  variant: "secondary",
                                  text: eU.intl.string(eU.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, i.jsx)(eu.Q, { text: eU.intl.string(eU.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(es.$, {
                            variant: "primary",
                            text: eU.intl.string(eU.t["3PatSz"]),
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
                                d || (null != L && L.premiumSubscriptionType === et.PremiumTypes.TIER_2)
                                    ? n(null != y || M ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS)
                                    : n(E.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tS = n(364840),
    ty = n(460905),
    tg = n(183623),
    th = n(95635),
    tx = n(935462),
    tI = n(331322),
    tA = n(532794),
    tb = n(811611),
    tf = n(901017),
    tP = n(403052);
function t_(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, r.bG)([ew.default], () => ew.default.locale);
    return (0, i.jsxs)("div", {
        className: tP.mH,
        children: [
            (0, i.jsx)(tf.A, {
                icon: eP._,
                iconClassName: tP.pl,
                description: eU.intl.formatToPlainString(eU.t.sQBgs2, { numFreeGuildSubscriptions: et.M4 }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(tf.A, {
                icon: eP._,
                iconClassName: tP.pl,
                description: eU.intl.formatToPlainString(eU.t["1A6vXi"], { percent: (0, eH.l9)(n, et.oX / 100) }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, i.jsx)(tf.A, { icon: ty.n, iconClassName: tP.zO, description: eU.intl.string(eU.t.Z9b2x2) }) : null,
            (0, i.jsx)(tf.A, { icon: tg.F, iconClassName: tP.Kg, description: eU.intl.string(eU.t["8dqG5E"]) }),
            (0, i.jsx)(tf.A, { icon: th.J, iconClassName: tP.$z, description: eU.intl.string(eU.t.cBorIy) }),
        ],
    });
}
function tv(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: r,
            onSkip: s,
            onSubscriptionConfirmation: u,
            analyticsLocation: o,
            analyticsSourceLocation: c,
            priceOptions: d,
        } = e,
        { analyticsLocations: S, sourceAnalyticsLocations: y } = (0, p.Ay)(m.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        g = null == t || null == t.premiumSubscriptionType,
        h = eV.Ay.getPrice(et.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        x = (0, eY.$g)(h.amount, h.currency),
        I = (0, eL.V)(),
        A = I?.trial_id,
        b = I?.subscription_trial?.sku_id === et.pe.TIER_2;
    return (
        l.useEffect(() => {
            k.default.track(tt.HAw.PREMIUM_UPSELL_VIEWED, { type: et.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: y });
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tx.s_, { "data-migration-pending": !0, onClick: n, className: tP.b }),
                (0, i.jsxs)(a.c, {
                    children: [
                        b && (0, i.jsx)(tb.Vq, { className: tP.Fg }),
                        (0, i.jsx)("div", { className: em()(tP.Tn, { [tP.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: tP.G3,
                            children:
                                null != A
                                    ? eU.intl.string(eU.t.AoSzEr)
                                    : eU.intl.format(eU.t["7vePZb"], { monthlyPrice: x }),
                        }),
                        (0, i.jsx)(t_, { shouldUpsellFromNoneTier: g }),
                    ],
                }),
                (0, i.jsx)(tS.j, {
                    children: (0, i.jsxs)(tI.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(eu.Q, {
                                text: eU.intl.string(eU.t["13/7kX"]),
                                onClick: r,
                                variant: "secondary",
                            }),
                            (0, i.jsxs)(tI.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(eu.Q, {
                                        text: eU.intl.string(eU.t["SI/adm"]),
                                        onClick: s,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(es.$, {
                                        variant: "active",
                                        text: null != A ? eU.intl.string(eU.t["Gd/XHF"]) : eU.intl.string(eU.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tA.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: et.pe.TIER_2,
                                                    analyticsLocations: S,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: tt.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: u,
                                                    trialId: A,
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
function tE(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: a } = e,
        { currency: s, paymentModalArgs: u, analyticsLocation: o, analyticsSourceLocation: c } = Z(),
        { paymentSourceId: d, activeSubscription: m } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        p = (0, r.bG)([R.A], () => (null != m ? (0, q.c9)(m.planId) : null)),
        S = (0, r.bG)([R.A], () => (null == p ? R.A.get(td) : p));
    el()(null != S, "Missing nextPremiumSubscriptionPlan"), el()(null != s && "" !== s, "Currency not defined");
    let { paymentSources: y } = u,
        g = null != m ? m.paymentSourceId : null,
        h = Object.keys(y).length > 0,
        x = l.useCallback(() => n(E.pn.PLAN_SELECT), [n]),
        I = l.useCallback(() => n(null != g || h ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS), [n, g, h]);
    return (0, i.jsx)(tv, {
        premiumSubscriptionPlan: S,
        analyticsLocation: o,
        analyticsSourceLocation: c,
        onClose: t,
        onBack: x,
        onSkip: I,
        onSubscriptionConfirmation: a,
        priceOptions: null != d ? { paymentSourceId: d, currency: s } : { currency: s },
    });
}
var tj = n(253390);
function tC() {
    let e = (0, f.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = Z(),
        n = (0, r.bG)([R.A], () => null == e || null != R.A.get(e.planId)),
        i = (0, g.Y)(),
        a = (0, r.bG)([R.A], () => (null != e ? (0, q.c9)(e.planId) : null)),
        s = l.useMemo(
            () => (null != e && n && i ? (0, tj.v)(e, t) : [{ planId: et.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        u = l.useMemo(
            () =>
                s.find((e) => {
                    let { planId: t } = e;
                    return et.pW.has(t);
                })?.planId ?? et.gD.PREMIUM_MONTH_GUILD,
            [s],
        );
    return {
        newAdditionalPlans: s,
        currentPremiumSubscriptionPlan: a,
        hasFetchedPremiumSubscriptionPlan: n,
        premiumGuildSubscriptionPlanId: u,
    };
}
var tN = n(364995),
    tT = n(820739);
async function tM(e, t) {
    await (0, tT.CD)();
    let n = (0, w.D$)(U.A.boostSlots);
    return (0, tT.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function tL(e) {
    let { handleStepChange: t, handleClose: n, analyticsData: a } = e,
        { guildId: s, currency: u, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: c } = Z(),
        {
            activeSubscription: d,
            paymentSourceId: m,
            setPaymentSourceId: p,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        }));
    el()(null != s, "Missing guildId"), el()(null != u && "" !== u, "Currency not defined");
    let { paymentSources: y } = o,
        { newAdditionalPlans: g, currentPremiumSubscriptionPlan: h } = tC(),
        x = (0, r.bG)([R.A], () => (null == h ? R.A.get(td) : h));
    el()(null != x, "Missing nextPremiumSubscriptionPlan");
    let I = null != m ? { paymentSourceId: m, currency: u } : { currency: u },
        A = (function (e) {
            let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                {
                    guildId: r,
                    currency: a,
                    paymentModalArgs: s,
                    premiumSubscriptionPaymentSourceId: u,
                    numGuildBoostsToPurchase: o,
                    analyticsLocation: c,
                    analyticsSourceLocation: d,
                    flowStartTime: m,
                    applicationId: p,
                    intent: y,
                    onSubscribeComplete: g,
                } = Z(),
                { paymentSources: h, setIsSubmittingCurrentStep: x, isSubmittingCurrentStep: I } = s,
                {
                    activeSubscription: A,
                    paymentSourceId: b,
                    setPurchaseError: P,
                    hasAcceptedTerms: _,
                    setPurchaseState: v,
                } = (0, f.t4)((e) => ({
                    activeSubscription: e.activeSubscription,
                    paymentSourceId: e.paymentSourceId,
                    setPurchaseError: e.setPurchaseError,
                    hasAcceptedTerms: e.hasAcceptedTerms,
                    setPurchaseState: e.setPurchaseState,
                })),
                C = (0, ej.sw)(),
                { newAdditionalPlans: N, currentPremiumSubscriptionPlan: T, premiumGuildSubscriptionPlanId: M } = tC(),
                L = (0, ez.A)({ location: "GuildBoostPurchaseModal", message: eU.intl.string(e4.default["tK8A/8"]) }),
                { checkoutPaymentSources: D } = (0, tN.t)(),
                G = (0, ez.iB)({ checkoutPaymentSources: D, paymentSourceId: b, location: "GuildBoostPurchaseModal" }),
                U = l.useMemo(
                    () => ({
                        ...i,
                        location: c,
                        source: d,
                        subscription_plan_id: M,
                        sku_id: (0, eV.mH)(et.pe.GUILD),
                        quantity: o,
                    }),
                    [i, c, d, o, M],
                ),
                R = l.useMemo(() => {
                    let { guild_id: e, ...t } = U;
                    return t;
                }, [U]),
                [O, w] = l.useState(!1),
                B = null != b ? { paymentSourceId: b, currency: a ?? void 0 } : { currency: a ?? void 0 },
                F = async () => {
                    el()(null != N, "Missing newAdditionalPlans");
                    let e = (0, z.W)(h, b);
                    P(null);
                    try {
                        v(j.h.PURCHASING),
                            x(!0),
                            el()(null != b, "Missing paymentSourceId"),
                            el()(null != C, "Missing invoicePreview");
                        let l = { amount: C.total, currency: C.currency },
                            a = B.currency ?? C.currency,
                            s = (0, eV.U8)(A, N, a.toLowerCase(), B.paymentSourceId);
                        if (
                            (k.default.track(tt.HAw.PAYMENT_FLOW_COMPLETED, {
                                ...U,
                                duration_ms: Date.now() - m,
                                guild_id: r ?? void 0,
                                application_id: p,
                            }),
                            O)
                        )
                            return;
                        if (null == A || null == T) {
                            el()(null != e, "Missing paymentSource");
                            let t = await (0, S.Ky)({
                                items: N,
                                paymentSource: e,
                                currency: a,
                                expectedInvoicePrice: l,
                                expectedRenewalPrice: s,
                            });
                            if (t.redirectConfirmation) return void w(null != t.redirectURL);
                        } else {
                            let t = { items: (0, eV.aE)(A, N) };
                            (t.currency = A.currency ?? a),
                                (t.paymentSource = null != u ? h[u] : void 0),
                                null == t.paymentSource &&
                                    (el()(null != e, "Missing paymentSource"), (t.paymentSource = e), (t.currency = a));
                            let n = await (0, S.nV)(A, t, l, s, i.location_stack);
                            if (n.redirectConfirmation) return void w(null != n.redirectURL);
                        }
                        null == y && t(E.pn.CONFIRM),
                            v(j.h.COMPLETED),
                            null != r && (await tM(r, null != y)),
                            null != y && n(),
                            g?.();
                    } catch (t) {
                        v(j.h.FAIL),
                            P(t),
                            k.default.track(tt.HAw.PAYMENT_FLOW_FAILED, {
                                ...R,
                                payment_error_code: t?.code,
                                payment_gateway:
                                    null != e ? (e.type === tt.hes.CARD ? tt.kM_.STRIPE : tt.kM_.BRAINTREE) : null,
                                payment_source_id: b,
                                duration_ms: Date.now() - m,
                            });
                    } finally {
                        O || x(!1);
                    }
                };
            return {
                text: eU.intl.string(eU.t.eUEeCt),
                loading: I,
                disabled: null == b || !_ || null != L || G,
                onClick: F,
                variant: "active",
            };
        })({ handleStepChange: t, handleClose: n, analyticsData: a }),
        P = l.useCallback(() => {
            t(E.pn.ADD_PAYMENT_STEPS), p(null);
        }, [t, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W.dZ, {
                children: (0, i.jsx)(te, {
                    guildId: s,
                    paymentSources: y,
                    priceOptions: I,
                    currentPremiumSubscription: d,
                    premiumSubscriptionPaymentSourceId: c,
                    premiumSubscriptionPlan: x,
                    newAdditionalPlans: g,
                    paymentSourceId: m,
                    setPaymentSourceId: p,
                    onPaymentSourceAdd: P,
                }),
            }),
            (0, i.jsx)(W.UX, {
                children: (0, i.jsx)(b.lo, { onBackClick: () => t(E.pn.PLAN_SELECT), primaryButtonProps: A }),
            }),
        ],
    });
}
var tD = n(825755);
function tG() {
    let {
            guildId: e,
            intent: t,
            onSubscribeComplete: n,
            flowStartTime: i,
            numGuildBoostsToPurchase: a,
            analyticsLocation: s,
            analyticsSourceLocation: u,
            paymentModalArgs: o,
        } = Z(),
        { setIsSubmittingCurrentStep: c, paymentSources: d } = o,
        { premiumGuildSubscriptionPlanId: m } = tC(),
        {
            paymentSourceId: y,
            setPurchaseState: g,
            setPurchaseError: h,
            loadId: I,
            startTime: A,
        } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            loadId: e.contextMetadata.loadId,
            startTime: e.contextMetadata.startTime,
        })),
        b = (0, M.l)(),
        P = (0, p.Db)(),
        _ = (0, r.bG)([tD.A], () => tD.A.popupCallbackCalled),
        v = {
            baseAnalyticsData: l.useMemo(
                () => ({
                    load_id: I,
                    payment_type: e3.fr[e3.VV.SUBSCRIPTION],
                    subscription_type: tt.rzx.PREMIUM,
                    subscription_plan_id: m,
                    sku_id: (0, eV.mH)(et.pe.GUILD),
                    quantity: a,
                    location: s,
                    source: u,
                    location_stack: P,
                    checkout_flow: x.CL.GUILD_BOOST_CHECKOUT,
                    is_gift: !1,
                    eligible_for_trial: !1,
                    guild_id: e ?? void 0,
                }),
                [I, m, a, s, u, P, e],
            ),
            flowStartTime: i,
            startTime: A,
            guildId: e,
            onSubscribeComplete: n,
            paymentSourceId: y,
            paymentSources: d,
            setIsSubmittingCurrentStep: c,
            setPurchaseError: h,
            setPurchaseState: g,
            setStep: b,
        },
        C = l.useRef(v);
    return (
        l.useEffect(() => {
            C.current = v;
        }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                startTime: i,
                guildId: l,
                onSubscribeComplete: r,
                paymentSourceId: a,
                paymentSources: s,
                setIsSubmittingCurrentStep: u,
                setPurchaseError: o,
                setPurchaseState: c,
                setStep: d,
            } = C.current;
            (async () => {
                if (!0 === _)
                    try {
                        if (null == tD.A.redirectedPaymentId) return;
                        await (0, S.tn)(tD.A.redirectedPaymentId),
                            k.default.track(tt.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                ...e,
                                duration_ms: Date.now() - i,
                                payment_source_type: (0, z.g)(s, a) ?? void 0,
                            }),
                            o(null),
                            d(E.pn.CONFIRM),
                            c(j.h.COMPLETED),
                            null != l && (await tM(l, null != t)),
                            r?.();
                    } catch (l) {
                        c(j.h.FAIL), o(l);
                        let { guild_id: t, ...i } = e;
                        k.default.track(tt.HAw.PAYMENT_FLOW_FAILED, {
                            ...i,
                            payment_error_code: l?.code,
                            payment_gateway: tt.kM_.STRIPE,
                            payment_source_id: a,
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
function tU(e) {
    let { transitionState: t, message: n, onClose: l } = e;
    return (0, i.jsxs)(b.Jg, {
        transitionState: t,
        size: "md",
        onClose: l,
        "aria-label": eU.intl.string(eU.t.q9EGps),
        children: [
            (0, i.jsx)(b.s3, { title: eU.intl.string(eU.t.q9EGps) }),
            (0, i.jsx)(a.c, { children: (0, i.jsx)("p", { className: tm.C, children: n }) }),
        ],
    });
}
function tR(e) {
    let { transitionState: t, onClose: n, onSubscriptionConfirmation: a, analyticsLocations: c } = e,
        {
            numGuildBoostsToPurchase: x,
            currency: I,
            setCurrency: A,
            setCurrencies: v,
            guildId: E,
            applicationId: N,
            analyticsLocation: T,
            analyticsSourceLocation: M,
        } = Z(),
        { analyticsLocations: L } = (0, p.Ay)(c, m.A.GUILD_BOOST_PURCHASE_MODAL),
        {
            activeSubscription: D,
            paymentSourceId: U,
            purchaseState: w,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            purchaseState: e.purchaseState,
        })),
        F = (0, y.Hp)(),
        H = (0, r.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        V = (0, g.Y)(),
        { hasFetchedPremiumSubscriptionPlan: Y, premiumGuildSubscriptionPlanId: W } = tC(),
        z = (0, r.bG)([R.A], () => R.A.get(W)?.skuId, [W]);
    (0, d.Ay)(() => {
        O.A.hasFetchedSubscriptions() || (0, S.hP)(),
            R.A.isLoadedForPremiumSKUs() || u.h.wait(() => (0, o.zS)()),
            null == E || null != G.A.getGuild(E) || null != _.A.getGuild(E) || _.A.isGuildFetching(E) || (0, P.y)(E),
            null != D &&
                null != D.renewalMutations &&
                k.default.track(tt.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: T, guild_id: E });
    }),
        l.useEffect(() => {
            (0, B.c_)(U);
        }, [U]),
        l.useEffect(() => {
            let e;
            V &&
                (null != R.A.get(et.gD.PREMIUM_MONTH_GUILD) && v((e = (0, B._w)(et.gD.PREMIUM_MONTH_GUILD, U, !1))),
                null == U && null != D && null != D.paymentSourceId ? A(D.currency) : null != e && A(e[0]));
        }, [U, D, V, A, v]);
    let q = l.useMemo(() => ({ quantity: x }), [x]),
        $ = l.useCallback(() => (n(w === j.h.COMPLETED), Promise.resolve()), [n, w]);
    return F
        ? (0, i.jsx)(b.Jg, {
              transitionState: t,
              size: "md",
              onClose: $,
              "aria-label": eU.intl.string(eU.t.q9EGps),
              children: (0, i.jsx)(h.oO, {}),
          })
        : null != D && D.isPausedOrPausePending && !D.isPausedAllowsUpdatesButNotResume
          ? (0, i.jsx)(tU, { transitionState: t, message: eU.intl.string(eU.t.mOWsF1), onClose: $ })
          : null != D && null != D.renewalMutations
            ? (0, i.jsx)(tU, { transitionState: t, message: eU.intl.string(eU.t.npfhh0), onClose: $ })
            : H && Y && null != I && "" !== I
              ? (0, i.jsx)(tO, {
                    transitionState: t,
                    onClose: n,
                    children: (0, i.jsx)(C.PaymentModal, {
                        analyticsLocations: L,
                        analyticsObject: T,
                        analyticsSourceLocation: M,
                        transitionState: t,
                        onClose: n,
                        initialPlanId: null,
                        subscriptionTier: null,
                        planGroup: [],
                        skuId: z ?? null,
                        applicationId: N,
                        guildId: E ?? void 0,
                        onSubscriptionConfirmation: a,
                        renderHeader: tw,
                        skipUnifiedHeaderForSteps: tB,
                        disableUnsupportedExternalSubscriptionHandler: !0,
                        isMediumModal: !0,
                        analyticsDataOverride: q,
                    }),
                })
              : (0, i.jsx)(b.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: $,
                    "aria-label": eU.intl.string(eU.t.q9EGps),
                    children: (0, i.jsx)("div", { className: tm._5, children: (0, i.jsx)(s.y, {}) }),
                });
}
function tO(e) {
    let { transitionState: t, onClose: n, children: l } = e,
        { numGuildBoostsToPurchase: r, guildId: a, existingAvailableSlotCount: s } = Z(),
        u = (0, f.t4)((e) => e.purchaseState),
        o = (0, M.bB)(),
        c = (0, D.n)("GuildBoostPurchaseModal"),
        d = c && (o === E.pn.REVIEW || o === E.pn.CONFIRM),
        m = (0, Y.A)(d);
    return c && o === E.pn.CONFIRM
        ? (0, i.jsx)(V.A, {
              mediaUrls: m.mediaUrls,
              isSuccess: m.isSuccess,
              transitionState: t,
              onClose: () => (n(u === j.h.COMPLETED), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(H.A, {
                      transitionState: t,
                      guild: G.A.getGuild(a),
                      guildBoostQuantity: r + s,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : l;
}
function tk(e) {
    let { step: t, onClose: n } = e,
        l = (0, D.n)("GuildBoostPurchaseModal"),
        r = (0, f.t4)((e) => e.purchaseState);
    return l
        ? (0, i.jsx)(b.s3, { title: (0, A.u)({ skuId: null, step: t }).title })
        : (0, i.jsx)(F.A, { onClose: () => n(r === j.h.COMPLETED), currentStep: t, purchaseState: r });
}
let tw = (e, t, n) =>
        n === E.pn.PREMIUM_UPSELL
            ? null
            : n === E.pn.REVIEW
              ? (0, i.jsx)(b.s3, { ...(0, A.u)({ skuId: e?.skuId ?? null, step: n }) })
              : (0, i.jsx)(tk, { step: n, onClose: t }),
    tB = [E.pn.PLAN_SELECT];
function tF(e) {
    return (0, i.jsx)(tR, { ...e });
}
function tH(e) {
    let {
            totalNumberOfSlotsToAssign: t = 1,
            disablePremiumUpsell: n,
            closeGuildPerksModal: a,
            guildId: s,
            analyticsLocation: u,
            analyticsSourceLocation: o,
            applicationId: d,
            intent: S,
            onSubscribeComplete: y,
        } = e,
        g = (0, r.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        { analyticsLocations: h } = (0, p.Ay)(m.A.GUILD_BOOST_PURCHASE_MODAL),
        A = (0, c.A)(() => t - (0, w.D$)(U.A.boostSlots).length),
        b = l.useMemo(() => (0, L.A)() ?? void 0, []);
    return (0, i.jsx)(p.f5, {
        value: h,
        children: (0, i.jsx)(I.CheckoutRootProvider, {
            activeSubscription: g,
            stepConfigs: tV,
            skuIDs: [],
            loadId: b,
            unifiedCheckoutFlow: x.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(v.Mq, {
                children: (0, i.jsxs)(X, {
                    initialNumGuildBoostsToPurchase: A,
                    disablePremiumUpsell: n,
                    closeGuildPerksModal: a,
                    guildId: s ?? null,
                    analyticsLocation: u,
                    analyticsSourceLocation: o,
                    applicationId: d,
                    intent: S,
                    onSubscribeComplete: y,
                    children: [(0, i.jsx)(tG, {}), (0, i.jsx)(tF, { ...e })],
                }),
            }),
        }),
    });
}
let tV = [
    { key: E.pn.PLAN_SELECT, renderStep: (e) => (0, i.jsx)(tp, { ...e }), options: { renderHeader: !0 } },
    {
        key: E.pn.PREMIUM_UPSELL,
        renderStep: (e) => (0, i.jsx)(tE, { ...e }),
        options: { renderHeader: !1, hideSlider: !0 },
    },
    { key: E.pn.ADD_PAYMENT_STEPS, renderStep: (e) => (0, i.jsx)(N.x, { ...e }), options: { renderHeader: !0 } },
    { key: E.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(T.A, {}), options: { renderHeader: !0 } },
    { key: E.pn.REVIEW, renderStep: (e) => (0, i.jsx)(tL, { ...e }), options: { renderHeader: !0 } },
    { key: E.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(en, { ...e }), options: { renderHeader: !0 } },
];
