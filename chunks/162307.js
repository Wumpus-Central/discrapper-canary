"use strict";
n.d(t, { o: () => a_ }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(192308),
    l = n(231723),
    u = n(166532),
    c = n(925847),
    d = n(310829),
    _ = n(174459),
    h = n(75304),
    f = n(145659),
    p = n(624210),
    E = n(26279);
async function m(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === E.Re.DRAFT)
        try {
            await (0, p.Nl)(n.id);
        } catch (e) {}
}
var g = n(17928),
    A = n(444927),
    I = n(964486),
    T = n(793574),
    S = n(120700),
    y = n(171835),
    C = n(558620),
    N = n(584160),
    v = n(169797),
    R = n(211159),
    O = n(832286),
    b = n(958340),
    D = n(566980),
    L = n(615310),
    w = n(489254),
    M = n(71393),
    P = n(178368),
    x = n(166403),
    k = n(473145),
    U = n(802790),
    G = n(636441),
    F = n(587491),
    V = n(285753),
    B = n(430993),
    j = n(86379),
    H = n(545075),
    Y = n(655857),
    W = n(534479),
    K = n(753390);
function $() {
    let e = (0, g.bG)([x.A], () => x.A.hasFetchedSubscriptions());
    return (
        s.useEffect(() => {
            e || (0, K.hP)();
        }, [e]),
        e
    );
}
var z = n(769160),
    q = n(295405),
    Z = n(786300);
let [X, Q, J] = (0, Z.A)();
function ee(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: i,
            children: a,
            guildId: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            applicationId: c,
            intent: d,
            onSubscribeComplete: _,
        } = e,
        [h, f] = s.useState(t),
        [p, E] = s.useState(!0),
        m = (0, A.A)(() => Date.now()),
        I = (0, A.A)(() => (0, k.D$)(P.A.boostSlots).length),
        T = (0, R.t4)((e) => e.activeSubscription),
        S = (0, g.bG)([x.A], () => x.A.hasFetchedSubscriptions()),
        y = (0, g.bG)([q.A], () => q.A.defaultPaymentSourceId),
        C = null != T ? T.paymentSourceId : null,
        N = (0, z._V)(null != C ? C : S ? y : null);
    return (0, r.jsx)(X.Provider, {
        value: {
            numGuildBoostsToPurchase: h,
            setNumGuildBoostsToPurchase: f,
            disablePremiumUpsell: n,
            closeGuildPerksModal: i,
            guildId: o,
            paymentModalArgs: N,
            premiumSubscriptionPaymentSourceId: C,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            forceDisableSubmitButton: p,
            setForceDisableSubmitButton: E,
            applicationId: c,
            intent: d,
            onSubscribeComplete: _,
            flowStartTime: m,
            existingAvailableSlotCount: I,
        },
        children: a,
    });
}
var et = n(160946),
    en = n(253390),
    ei = n(97352),
    er = n(615396),
    es = n(788868);
function ea() {
    let e = (0, R.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = Q(),
        n = (0, g.bG)([ei.A], () => null == e || null != ei.A.get(e.planId)),
        i = (0, et.Y)(),
        r = (0, g.bG)([ei.A], () => (null != e ? (0, er.c9)(e.planId) : null)),
        a = s.useMemo(
            () => (null != e && n && i ? (0, en.v)(e, t) : [{ planId: es.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        o = s.useMemo(
            () =>
                a.find((e) => {
                    let { planId: t } = e;
                    return es.pW.has(t);
                })?.planId ?? es.gD.PREMIUM_MONTH_GUILD,
            [a],
        ),
        l = null == e || (n && i);
    return {
        newAdditionalPlans: a,
        currentPremiumSubscriptionPlan: r,
        hasFetchedPremiumSubscriptionPlan: n,
        hasFetchedAdditionalPlans: l,
        premiumGuildSubscriptionPlanId: o,
    };
}
var eo = n(652215),
    el = n(375708),
    eu = n(898640);
function ec(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.s3, { title: el.intl.string(el.t.q9EGps) }),
            (0, r.jsx)(B.c, { children: (0, r.jsx)("p", { className: eu.C, children: t }) }),
        ],
    });
}
var ed = n(482132),
    e_ = n(216641),
    eh = n(879100);
function ef(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: i, paymentModalArgs: s, existingAvailableSlotCount: a } = Q(),
        {
            activeSubscription: o,
            startingFractionalPremiumEndsAt: l,
            customCheckoutFlow: u,
            paymentSourceId: c,
        } = (0, R.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        d = (0, g.bG)([b.A], () => (null != n ? b.A.getGuild(n) : void 0), [n]),
        _ = null != n ? M.A.getGuild(n) : null,
        h = (0, A.A)(() => (0, er.b2)(l)),
        f = (0, g.bG)([ei.A], () => (null != o ? (0, er.c9)(o.planId) : null)),
        { paymentSources: p } = s,
        E = (0, e_.g)(p, c),
        m = null != _ ? _.name : null != d ? d.name : void 0,
        I = h && null != f && !es.YV.has(f.id);
    return (0, r.jsx)(ed.dZ, {
        children: (0, r.jsx)(eh.W, {
            guild: _,
            guildBoostQuantity: i + a,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: E,
            fallbackGuildName: m,
            didPurchaseOnFractionalPremium: I,
            customCheckoutFlow: u,
        }),
    });
}
var ep = n(284009),
    eE = n.n(ep),
    em = n(683071),
    eg = n(512950),
    eA = n(821609),
    eI = n(123292),
    eT = n(529427),
    eS = n(87719);
let ey = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eC = n(503698),
    eN = n.n(eC),
    ev = n(661531),
    eR = n(990078),
    eO = n(408278),
    eb = n(834040),
    eD = n(499373),
    eL = n(834730),
    ew = n(403581),
    eM = n(663803),
    eP = n(320448),
    ex = n(534514),
    ek = n(104510),
    eU = n(695366),
    eG = n(289873),
    eF = n(726656),
    eV = n(688810),
    eB = n(531260),
    ej = n(666646),
    eH = n(404374),
    eY = n(543767),
    eW = n(881489),
    eK = n(477421),
    e$ = n(234419),
    ez = n(363476),
    eq = n(531506),
    eZ = n(51465);
function eX() {
    return (0, r.jsxs)("div", {
        className: eN()(eZ.dt, eZ.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eZ.qq,
            }),
            (0, r.jsx)(eL.E, {
                variant: "text-sm/medium",
                className: eZ.tD,
                children: el.intl.format(el.t.f5VHKm, {}),
            }),
        ],
    });
}
function eQ(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: eZ.dt,
        children: [(0, r.jsx)(ew.t, { size: "md", className: eZ.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var eJ = n(773669),
    e0 = n(287809),
    e1 = n(975571),
    e2 = n(252424),
    e3 = n(428262),
    e6 = n(580630),
    e4 = n(155718),
    e5 = n(606267),
    e7 = n(376843),
    e8 = n(38785),
    e9 = n(818824),
    te = n(596034),
    tt = n(270537),
    tn = n(241989),
    ti = n(888751),
    tr = n(874638),
    ts = n(458785),
    ta = n(818348),
    to = n(327105),
    tl = n(7921);
function tu(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: s,
            currency: a,
            startDate: o,
        } = e,
        { immediateDelivery: l } = (0, e9.U)();
    return (0, r.jsx)(te._, {
        variant: {
            type: te.I.Subscription,
            purchaseButtonText: el.intl.string(el.t.eUEeCt),
            totalDue: s,
            renewalPrice: i,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: o,
        },
        paymentSourceType: t,
        immediateDelivery: l,
    });
}
function tc(e) {
    return el.intl.format(el.t.IeaYqg, { endDate: e });
}
function td(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: tl.bU }),
            (0, r.jsx)(eL.E, { variant: "text-sm/normal", className: tl.b7, children: t }),
            (0, r.jsx)("div", { className: tl.bU }),
        ],
    });
}
function t_(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: i,
            guildBoostingAdjustment: s,
            checkoutInvoicePreview: a,
        } = e,
        o = (function (e) {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: r,
                formattedGuildBoostRate: s,
                subscriptionDiscount: a,
                entitlementDiscount: o,
                originalAmount: l,
                checkoutInvoicePreview: u,
            } = e;
            return {
                label: el.intl.formatToPlainString(el.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, e3.Mn)(n.id, !1, i),
                }),
                value: i ? r : s,
                subscriptionDiscount: a,
                entitlementDiscount: o,
                originalAmount: l,
                currency: u.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        l = [];
    0 !== n &&
        l.push({
            id: "base-plan-adjustment",
            label: el.intl.formatToPlainString(el.t.ZSVged, { planName: (0, e3.RH)(i[0].subscriptionPlanId) }),
            tooltip: el.intl.string(el.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            l.push({
                id: "guild-boosting-adjustment",
                label: el.intl.string(el.t["+as5ZZ"]),
                tooltip: el.intl.string(el.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && l.push({ id: "tax", label: el.intl.string(el.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, ti.EA)({ id: "main-line-item", amount: t, ...o }),
        d = [...u, ...l];
    return (0, r.jsx)(tt.Vm, {
        defaultExpanded: !0,
        label: el.intl.string(to.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function th(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: s } = e;
    return null != n
        ? (0, r.jsx)(ts.m0, { proratedInvoice: i, renewalInvoice: s, isUpdate: t })
        : (0, r.jsx)(ts.m0, { renewalInvoice: s });
}
function tf(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPaymentSourceId: a,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: l,
            paymentSourceId: u,
            setPaymentSourceId: c,
            onPaymentSourceAdd: d,
        } = e,
        _ = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                o = (0, g.bG)([M.A, b.A], () => {
                    let e = M.A.getGuild(n);
                    return null != e ? e : b.A.isGuildFetching(n) ? null : b.A.getGuild(n);
                }, [n]),
                l = s.interval,
                u = s.intervalCount,
                c = (0, g.bG)([ei.A], () => ei.A.getForSkuAndInterval((0, e3.mH)(es.pe.GUILD), l, u));
            eE()(null != c, "Missing guildBoostingSubscriptionPlan");
            let d = (0, e3.J$)(i.paymentSourceId),
                _ = (0, eW.ds)();
            t = null != r ? (0, e3.Om)(r, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: h } = (0, eV.Ay)(),
                [f, p] = (0, eY.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E, m] = (0, eY.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, ej.OQ)({
                    checkoutInvoicePreview: f,
                    checkoutInvoiceError: p,
                    renewalInvoicePreview: E,
                    renewalInvoiceError: m,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: c,
                    isPrepaid: d,
                    isReverseTrial: _,
                    checkoutInvoicePreview: f,
                    renewalInvoicePreview: E,
                    isSubscriptionUpdate: null != r,
                }
            );
        })({
            guildId: t,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: l,
        }),
        {
            isSubscriptionUpdate: h,
            guild: f,
            isPrepaid: p,
            isReverseTrial: E,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        } = _,
        I = (0, e5.A)({ location: "GuildBoostReview", message: el.intl.string(to.default["tK8A/8"]) });
    if (null == m || null == A || null == f) return (0, r.jsx)(e8.E, {});
    let S = (0, r.jsx)(th, {
            isSubscriptionUpdate: h,
            premiumSubscription: s,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        }),
        y = (0, r.jsx)(e7.n, {
            setPaymentSourceId: c,
            paymentSourceId: u,
            location: "GuildBoostReview",
            label: el.intl.string(el.t["u+Cw58"]),
            onPaymentSourceAdd: d,
            premiumSubscriptionPaymentSourceId: a,
            hideCurrencySelect: !0,
        }),
        C = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: r,
                paymentSources: s,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, e_.g)(s, a),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: r.total,
                currency: r.currency,
                startDate: (0, ts.de)({ isSubscriptionUpdate: t, currentInvoice: r, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: A,
            checkoutInvoicePreview: m,
            paymentSources: n,
            paymentSourceId: u,
        }),
        N = (0, r.jsx)(tu, { ...C }),
        v = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: s,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: o, isPrepaid: l, isReverseTrial: u } = a,
                c = n.interval,
                d = n.intervalCount;
            function _(e) {
                return (0, tr.Z)(i.invoiceItems).find((t) => es.pW.has(t.subscriptionPlanId) && e(t));
            }
            let h = _((e) => e.amount >= 0);
            eE()(null != h, "Missing guild boosting invoice item");
            let f = _((e) => e.amount < 0),
                p = null != f ? h.quantity - f.quantity : h.quantity,
                E = i.invoiceItems.filter((e) => (0, e3.xq)(e.subscriptionPlanId)),
                m = E.reduce((e, t) => e + t.amount, 0),
                g = (0, eY.sL)(h) * p,
                A = (0, e6.$g)(g, i.currency),
                I = (0, e6.CE)(A, c, d),
                T = (0, e6.$g)(i.total, i.currency) + (i.currency !== ta.Yr.USD ? "*" : ""),
                S = i.subtotal - g - m,
                y = h.discounts.map((e) => {
                    let t = e.amount / h.quantity;
                    return { ...e, amount: t * p };
                }),
                C = y.find((e) => e.type === e4.iS.SUBSCRIPTION_PLAN),
                N = y.find((e) => e.type === e4.iS.ENTITLEMENT),
                v = h.subscriptionPlanPrice * p;
            return {
                addedQuantity: p,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: l,
                isReverseTrial: u,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, e6.CE)((0, e6.$g)(v, i.currency), c, d),
                formattedTotal: T,
                basePlanAdjustment: m,
                basePlanInvoiceItems: E,
                guildBoostingAdjustment: S,
                subscriptionDiscount: C,
                entitlementDiscount: N,
                originalAmount: v,
                premiumSubscription: t,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: s,
            };
        })({
            premiumSubscription: s,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
            priceOptions: i,
            reviewState: _,
        }),
        R = (0, r.jsx)(t_, { ...v }),
        O = (function (e, t, n) {
            let {
                    addedQuantity: i,
                    guildBoostingSubscriptionPlan: s,
                    isPrepaid: a,
                    formattedGuildBoostRate: o,
                    formattedOriginalAmountGuildBoostRate: l,
                    subscriptionDiscount: u,
                } = t,
                c = null != u;
            return {
                label: el.intl.formatToPlainString(el.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, e3.Mn)(s.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, r.jsx)(tn.a6, {}),
                price: o,
                PriceIcon: c ? ew.t : void 0,
                priceTooltip: c ? el.intl.string(to.default.YUNJJa) : void 0,
                priceSubText: c ? l : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            v,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: tc(i.currentPeriodEnd) } : null;
            })({ isPrepaid: p, isReverseTrial: E, premiumSubscription: s }),
        ),
        D = (0, r.jsx)(tn.f7, { ...O });
    return (0, r.jsx)(e8.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        purchaseItemContent: D,
        subscriptionDetailsContent: S,
        paymentMethodContent: y,
        invoiceSummaryContent: R,
        legalContent: N,
        invoiceTotalDueValue: v.formattedTotal,
        invoiceTotalDueLabel: el.intl.string(to.default.R0cZsM),
    });
}
var tp = n(406263);
function tE(e) {
    return "" === e || "-" === e;
}
function tm(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = s.useState(t);
    s.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof l;
    function d(e) {
        u(e), tE(e) || n(e);
    }
    return (0, r.jsxs)("div", {
        className: tp.U$,
        children: [
            (0, r.jsx)(eO.K, {
                variant: "secondary",
                size: "md",
                icon: eb.Q,
                onClick: () => {
                    c && !(l <= i) && d(l - 1);
                },
                "aria-label": el.intl.string(el.t["k+ohJm"]),
                disabled: !c || l <= i,
            }),
            (0, r.jsx)("div", {
                className: tp.WJ,
                children: (0, r.jsx)("input", {
                    className: tp.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tE(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tE(l) && u(t);
                    },
                }),
            }),
            (0, r.jsx)(eO.K, {
                variant: "secondary",
                size: "md",
                icon: eD.T,
                onClick: () => {
                    c && !(l >= a) && d(l + 1);
                },
                "aria-label": el.intl.string(el.t.w8Sc4B),
                disabled: !c || l >= a,
            }),
        ],
    });
}
function tg(e) {
    let { message: t } = e;
    return (0, r.jsx)(eL.E, { variant: "text-xs/normal", color: "text-muted", className: tp.jH, children: t });
}
function tA(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: tp.Vk,
        children: [
            (0, r.jsx)("div", {
                className: tp.D0,
                children: (0, r.jsx)(ew.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tp.ue,
                    color: eH.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: tp.yP, children: t }),
        ],
    });
}
function tI(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: a,
        planPriceContent: o,
        subtotalContent: l,
        refreshSubtotalContent: u,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: _,
        existingSlotNotice: h,
        discountCallout: f,
        refreshDiscountCallout: p,
        legacyPricingNotes: E,
        refreshPricingNotes: m,
    } = e;
    return (0, r.jsxs)("div", {
        children: [
            _,
            c,
            h,
            (0, r.jsxs)("div", {
                className: tl.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: tl.E6,
                        children: [
                            (0, r.jsx)(eM.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: tl.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: tl.$0, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eN()(tl.QK, { [tl.S]: t }), children: o }),
                ],
            }),
            (0, r.jsx)("div", { className: tl.J3 }),
            (0, r.jsxs)("div", {
                className: tl.mP,
                children: [
                    (0, r.jsx)("div", { className: tl.xp, children: el.intl.string(el.t.RtA7nR) }),
                    (0, r.jsx)("div", {
                        className: eN()(tl.__invalid_planSelectorSubtotalPrice, { [tl.S]: t }),
                        children: l,
                    }),
                ],
            }),
            E.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function tT(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        refreshNextStepLabel: a,
        planLabel: o,
        planPriceContent: l,
        subtotalContent: u,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: _,
        fractionalBanner: h,
        existingSlotNotice: f,
        discountCallout: p,
        refreshDiscountCallout: E,
        legacyPricingNotes: m,
        refreshPricingNotes: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: tp.xY,
        children: [
            h,
            (0, r.jsxs)("div", {
                className: tp.K3,
                children: [
                    (0, r.jsx)(eL.E, {
                        variant: "text-md/medium",
                        className: tp.bk,
                        children: el.intl.string(el.t["r+SebU"]),
                    }),
                    (0, r.jsx)(eP._, { className: tp.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(eL.E, { variant: "text-md/medium", className: tp.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, r.jsxs)("div", {
                className: tp.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: tp.fX,
                        children: [
                            (0, r.jsx)(tm, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(eL.E, { variant: "text-md/medium", className: tp.ny, children: o }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eN()(tp.El, { [tl.S]: t }), children: l }),
                ],
            }),
            E,
            (0, r.jsxs)("div", {
                className: tp.fh,
                children: [
                    (0, r.jsx)(ex.D, {
                        variant: "heading-lg/semibold",
                        className: tp.O3,
                        children: el.intl.string(el.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: eN()(tp.BU, { [tl.S]: t }), children: c }),
                ],
            }),
            g.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
        ],
    });
}
function tS(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, r.jsxs)("div", {
        className: tl.Mv,
        children: [
            (0, r.jsx)(ek._, { className: tl.T5, color: ev.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    el.intl.format(el.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, r.jsx)(eR.m, {
                              text: el.intl.formatToPlainString(el.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(eU.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tl.Y5,
                                  color: ev.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ty(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: i,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: l,
            existingAvailableSlots: u = [],
            priceOptions: c,
            isRefreshEnabled: d = !1,
            showRefreshSubtotalRate: _ = !1,
            refreshNextStepLabel: h = el.intl.string(el.t.QBnNHq),
        } = e,
        f = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: i,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: l,
                    onClickPremiumSubscriptionLink: u,
                    existingAvailableSlots: c,
                    priceOptions: d,
                    showRefreshSubtotalRate: _,
                } = e,
                h =
                    ((t = (0, g.bG)([x.A], () => x.A.getPremiumTypeSubscription())),
                    (0, g.bG)([q.A], () =>
                        t?.paymentSourceId != null ? q.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                f = i.interval,
                p = i.intervalCount,
                E = (0, g.bG)([ei.A], () => ei.A.getForSkuAndInterval((0, e3.mH)(es.pe.GUILD), f, p)),
                m = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
                A = (0, eB.A)({ forceFetch: !1 });
            eE()(null != E, "Missing guildBoostingSubscriptionPlan");
            let I = [{ planId: E.id, quantity: 1 }],
                S = l?.items.find(
                    (e) => e.planId === es.gD.PREMIUM_MONTH_TIER_2 || e.planId === es.gD.PREMIUM_YEAR_TIER_2,
                );
            null != S && I.push(S);
            let y = l?.items.find(
                    (e) => e.planId === es.gD.PREMIUM_MONTH_GUILD || e.planId === es.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == h || !es.uJ.has(h) || null == y,
                { analyticsLocations: N } = (0, eV.Ay)(),
                [v, R] = (0, eY.YV)({
                    subscriptionId: l?.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l?.paymentSourceId,
                    currency: d.currency,
                    preventFetch: C,
                    analyticsLocations: N,
                    analyticsLocation: T.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, ej.Tr)(v, R);
            let O = !C && null == v && null == R;
            s.useLayoutEffect(() => {
                o(O);
            }, [O, o]);
            let b = (0, e$.V)()?.subscription_trial?.sku_id === es.pe.TIER_2,
                D = e3.Ay.hasBoostDiscount(m),
                L = D && null != l && e3.Ay.isPremiumAtLeast(e3.Ay.getPremiumType(l.planId), es.PremiumTypes.TIER_1),
                w = v?.findInvoiceItemByPlanId(E.id),
                M =
                    null != w
                        ? { amount: w.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : e3.Ay.getPrice(E.id, D, !1, d),
                P = a * M.amount,
                U = (0, eW.ds)() && D && null != l,
                G = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: r,
                            hasDiscountUpsell: s,
                            withTrialOfferCopyVariant: a,
                        } = e;
                    return (
                        (t = r ? "reverse_trial" : s ? "discount" : a ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: i === es.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: c.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: U,
                    hasDiscountUpsell: L,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === G.upsellVariant
                ? (eE()(null != l, "Missing premiumSubscription for discount upsell variant"),
                  (n = el.intl.format(el.t.hf6YOY, { planName: e3.Ay.getTierDisplayNameByPlanId(l.planId) })))
                : (n = el.intl.format("upsell_trial" === G.upsellVariant ? el.t.ba1L74 : el.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, e2.l9)(eJ.default.locale, es.oX / 100),
                      freeSubscriptionCount: es.M4,
                  }));
            let F = c.filter((e) => (0, k.I5)(e)).length,
                V = (0, e3.J$)(d.paymentSourceId),
                { ipCountryCode: B } = (0, eK.A)(),
                j = "HR" === B && M.currency === ta.Yr.EUR,
                H =
                    U && null != l
                        ? (0, r.jsx)(td, { text: tc(l.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: eN()(tl.hA, tl.G3), children: el.intl.string(el.t.jNY1FO) }),
                Y =
                    U && null != l
                        ? (0, r.jsx)(td, { text: tc(l.currentPeriodEnd), className: tl.jk })
                        : (0, r.jsx)("div", { className: tp._X, children: el.intl.string(el.t.jNY1FO) }),
                W = G.showExistingSlotNotice
                    ? (0, r.jsx)(tS, { existingAvailableSlots: c, canceledCount: F, premiumSubscription: l })
                    : null,
                K = G.showFractionalPremiumBanner ? (0, r.jsx)(eq.vi, { fractionalPremiumInfo: A }) : null,
                $ = V
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === es.WT.YEAR
                              ? el.intl.string(el.t.YDpAzZ)
                              : t === es.WT.MONTH && 1 === n
                                ? el.intl.string(el.t["6ZR3By"])
                                : null;
                      })({ intervalType: f, intervalCount: p }) ?? el.intl.string(el.t.K9Bmze))
                    : el.intl.string(el.t.K9Bmze),
                z = O
                    ? (0, r.jsx)(eG.y, {})
                    : V
                      ? (0, e6.$g)(M.amount, M.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, e6.$g)(t, n);
                            return i === es.WT.YEAR
                                ? el.intl.formatToPlainString(el.t["8M04YJ"], { price: s })
                                : i === es.WT.MONTH && 1 === r
                                  ? el.intl.formatToPlainString(el.t.VStWCR, { price: s })
                                  : i === es.WT.MONTH && r > 1
                                    ? el.intl.formatToPlainString(el.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: f, intervalCount: p, amount: M.amount, currency: M.currency }),
                Z = O
                    ? (0, r.jsx)(eG.y, {})
                    : (0, r.jsx)(ez.A, {
                          price: P,
                          currency: M.currency,
                          intervalType: f,
                          intervalCount: p,
                          isPrepaidPaymentSource: V,
                      }),
                X = O
                    ? (0, r.jsx)(eG.y, {})
                    : _ && !V
                      ? (0, e6.CE)((0, e6.$g)(P, M.currency), f, p)
                      : (0, e6.$g)(P, M.currency),
                Q = [],
                J = [];
            if (j) {
                let e = (0, r.jsx)(
                    eF.A,
                    {
                        message: el.intl.formatToPlainString(el.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, e6.$g)(7.5345 * P, ta.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                Q.push(e), J.push(e);
            }
            let ee = el.intl.format(el.t.Om31w8, { documentationLink: e1.A.getArticleURL(eo.MVz.LOCALIZED_PRICING) });
            return (
                Q.push((0, r.jsx)(eF.A, { message: ee }, "localized-pricing")),
                J.push((0, r.jsx)(tg, { message: ee }, "localized-pricing")),
                {
                    isLoading: O,
                    planLabel: $,
                    planPriceContent: z,
                    subtotalContent: Z,
                    refreshSubtotalContent: X,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: Y,
                    existingSlotNotice: W,
                    fractionalBanner: K,
                    legacyPricingNotes: Q,
                    refreshPricingNotes: J,
                    discountCallout:
                        "reverse_trial" === G.upsellVariant
                            ? (0, r.jsx)(eX, {})
                            : (0, r.jsx)(eQ, { text: n, color: eH.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === G.upsellVariant ? (0, r.jsx)(eX, {}) : (0, r.jsx)(tA, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: l,
            existingAvailableSlots: u,
            priceOptions: c,
            showRefreshSubtotalRate: _,
        });
    return (0, r.jsx)(d ? tT : tI, {
        isLoading: f.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: f.planLabel,
        planPriceContent: f.planPriceContent,
        subtotalContent: f.subtotalContent,
        refreshSubtotalContent: f.refreshSubtotalContent,
        legacyDescriptionContent: f.legacyDescriptionContent,
        refreshDescriptionContent: f.refreshDescriptionContent,
        fractionalBanner: f.fractionalBanner,
        existingSlotNotice: f.existingSlotNotice,
        discountCallout: f.discountCallout,
        refreshDiscountCallout: f.refreshDiscountCallout,
        legacyPricingNotes: f.legacyPricingNotes,
        refreshPricingNotes: f.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let tC = es.gD.NONE_MONTH,
    tN = [es.pe.GUILD];
function tv(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: i,
            setNumGuildBoostsToPurchase: s,
            guildId: a,
            closeGuildPerksModal: o,
            disablePremiumUpsell: l,
            setForceDisableSubmitButton: c,
            forceDisableSubmitButton: d,
            paymentModalArgs: _,
            premiumSubscriptionPaymentSourceId: h,
        } = Q(),
        { paymentSourceId: f, activeSubscription: p } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: E } = (0, Y.Jn)(),
        m = null != h || Object.keys(_.paymentSources).length > 0,
        I = (0, u.Ir)(m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS),
        T = (0, A.A)(() => (0, k.D$)(P.A.boostSlots)),
        S = (0, w.n)("GuildBoostPurchaseModal"),
        y = ey.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        C = S && y,
        N = (0, g.bG)([b.A], () => (null != a ? b.A.getGuild(a) : void 0), [a]),
        v = null != a ? M.A.getGuild(a) : null,
        O = null == N && null == v,
        D = null != p && p.isPurchasedExternally,
        L = Object.keys(_.paymentSources).length > 0,
        x = (0, g.bG)([ei.A], () => (null != p ? (0, er.c9)(p.planId) : null)),
        U = (0, g.bG)([ei.A], () => (null == x ? ei.A.get(tC) : x));
    if (null == a) throw new eT.vd({ message: "Missing guildId" });
    eE()(null != U, "Missing nextPremiumSubscriptionPlan");
    let G = (0, r.jsx)(ty, {
        premiumSubscriptionPlan: U,
        numGuildBoosts: i,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: c,
        premiumSubscription: p,
        existingAvailableSlots: T,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != o && o(), (0, eS.e)();
        },
        priceOptions:
            null != f ? { paymentSourceId: f, currency: null != E ? E : void 0 } : { currency: null != E ? E : void 0 },
        isRefreshEnabled: S,
        showRefreshSubtotalRate: C,
        refreshNextStepLabel: I,
    });
    return (
        D && null != p && null != p.paymentGateway
            ? (G = (0, r.jsxs)("div", {
                  className: eu.xK,
                  children: [
                      (0, r.jsx)(em.w, {
                          type: "critical",
                          children: el.intl.format(el.t["/m3Y3s"], { paymentGatewayName: ta.qm[p.paymentGateway] }),
                      }),
                      G,
                  ],
              }))
            : null != a &&
              !b.A.isGuildFetching(a) &&
              O &&
              (G = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(eg.p, {
                          messageType: eg.Y.ERROR,
                          className: eu.MR,
                          children: el.intl.string(el.t.eAn6z2),
                      }),
                      G,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ed.dZ, { children: G }),
                (0, r.jsx)(ed.UX, {
                    children: (0, r.jsx)(eh._, {
                        currentStep: u.pn.PLAN_SELECT,
                        isRefreshEnabled: S,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: S
                            ? (0, r.jsx)(eA.$, {
                                  variant: "secondary",
                                  text: el.intl.string(el.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, r.jsx)(eI.Q, { text: el.intl.string(el.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, r.jsx)(eA.$, {
                            variant: "primary",
                            text: el.intl.string(el.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: r,
                                } = e;
                                return t || 0 === n || i || r;
                            })({
                                forceDisableSubmitButton: d,
                                numGuildBoostsToPurchase: i,
                                isDisabledBecauseExternalSubscription: D,
                                isMissingGuildInformation: O,
                            }),
                            onClick: () => {
                                l || (null != x && x.premiumSubscriptionType === es.PremiumTypes.TIER_2)
                                    ? n(null != h || L ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS)
                                    : n(u.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tR = n(364840),
    tO = n(460905),
    tb = n(183623),
    tD = n(95635),
    tL = n(935462),
    tw = n(331322),
    tM = n(532794),
    tP = n(811611),
    tx = n(901017),
    tk = n(403052);
function tU(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, g.bG)([eJ.default], () => eJ.default.locale);
    return (0, r.jsxs)("div", {
        className: tk.mH,
        children: [
            (0, r.jsx)(tx.A, {
                icon: ek._,
                iconClassName: tk.pl,
                description: el.intl.formatToPlainString(el.t.sQBgs2, { numFreeGuildSubscriptions: es.M4 }),
                color: ev.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(tx.A, {
                icon: ek._,
                iconClassName: tk.pl,
                description: el.intl.formatToPlainString(el.t["1A6vXi"], { percent: (0, e2.l9)(n, es.oX / 100) }),
                color: ev.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(tx.A, { icon: tO.n, iconClassName: tk.zO, description: el.intl.string(el.t.Z9b2x2) }) : null,
            (0, r.jsx)(tx.A, { icon: tb.F, iconClassName: tk.Kg, description: el.intl.string(el.t["8dqG5E"]) }),
            (0, r.jsx)(tx.A, { icon: tD.J, iconClassName: tk.$z, description: el.intl.string(el.t.cBorIy) }),
        ],
    });
}
function tG(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: i,
            onSkip: a,
            onSubscriptionConfirmation: o,
            analyticsLocation: l,
            analyticsSourceLocation: u,
            priceOptions: c,
        } = e,
        { analyticsLocations: d, sourceAnalyticsLocations: h } = (0, eV.Ay)(T.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        f = null == t || null == t.premiumSubscriptionType,
        p = e3.Ay.getPrice(es.gD.PREMIUM_MONTH_TIER_2, !1, !1, c),
        E = (0, e6.$g)(p.amount, p.currency),
        m = (0, e$.V)(),
        g = m?.trial_id,
        A = m?.subscription_trial?.sku_id === es.pe.TIER_2;
    return (
        s.useEffect(() => {
            _.default.track(eo.HAw.PREMIUM_UPSELL_VIEWED, { type: es.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tL.s_, { "data-migration-pending": !0, onClick: n, className: tk.b }),
                (0, r.jsxs)(B.c, {
                    children: [
                        A && (0, r.jsx)(tP.Vq, { className: tk.Fg }),
                        (0, r.jsx)("div", { className: eN()(tk.Tn, { [tk.NH]: A }) }),
                        (0, r.jsx)("div", {
                            className: tk.G3,
                            children:
                                null != g
                                    ? el.intl.string(el.t.AoSzEr)
                                    : el.intl.format(el.t["7vePZb"], { monthlyPrice: E }),
                        }),
                        (0, r.jsx)(tU, { shouldUpsellFromNoneTier: f }),
                    ],
                }),
                (0, r.jsx)(tR.j, {
                    children: (0, r.jsxs)(tw.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(eI.Q, {
                                text: el.intl.string(el.t["13/7kX"]),
                                onClick: i,
                                variant: "secondary",
                            }),
                            (0, r.jsxs)(tw.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(eI.Q, {
                                        text: el.intl.string(el.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(eA.$, {
                                        variant: "active",
                                        text: null != g ? el.intl.string(el.t["Gd/XHF"]) : el.intl.string(el.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tM.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: es.pe.TIER_2,
                                                    analyticsLocations: d,
                                                    analyticsObject: {
                                                        ...l,
                                                        section: eo.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: u,
                                                    onSubscriptionConfirmation: o,
                                                    trialId: g,
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
function tF(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: i } = e,
        { paymentModalArgs: a, analyticsLocation: o, analyticsSourceLocation: l } = Q(),
        { paymentSourceId: c, activeSubscription: d } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: _ } = (0, Y.Jn)(),
        h = (0, g.bG)([ei.A], () => (null != d ? (0, er.c9)(d.planId) : null)),
        f = (0, g.bG)([ei.A], () => (null == h ? ei.A.get(tC) : h));
    eE()(null != f, "Missing nextPremiumSubscriptionPlan"), eE()(null != _ && "" !== _, "Currency not defined");
    let { paymentSources: p } = a,
        E = null != d ? d.paymentSourceId : null,
        m = Object.keys(p).length > 0,
        A = s.useCallback(() => n(u.pn.PLAN_SELECT), [n]),
        I = s.useCallback(() => n(null != E || m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS), [n, E, m]);
    return (0, r.jsx)(tG, {
        premiumSubscriptionPlan: f,
        analyticsLocation: o,
        analyticsSourceLocation: l,
        onClose: t,
        onBack: A,
        onSkip: I,
        onSubscriptionConfirmation: i,
        priceOptions: null != c ? { paymentSourceId: c, currency: _ } : { currency: _ },
    });
}
var tV = n(364995),
    tB = n(820739);
async function tj(e, t) {
    await (0, tB.CD)();
    let n = (0, k.D$)(P.A.boostSlots);
    return (0, tB.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
var tH = n(825755);
function tY(e) {
    let { onComplete: t } = e,
        {
            guildId: n,
            intent: i,
            onSubscribeComplete: r,
            flowStartTime: a,
            numGuildBoostsToPurchase: o,
            analyticsLocation: l,
            analyticsSourceLocation: c,
            paymentModalArgs: d,
        } = Q(),
        { setIsSubmittingCurrentStep: h, paymentSources: f } = d,
        { premiumGuildSubscriptionPlanId: p } = ea(),
        {
            paymentSourceId: E,
            setPurchaseState: m,
            setPurchaseError: A,
            loadId: I,
            startTime: T,
        } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            loadId: e.contextMetadata.loadId,
            startTime: e.contextMetadata.startTime,
        })),
        y = (0, L.l)(),
        C = (0, eV.Db)(),
        N = (0, g.bG)([tH.A], () => tH.A.popupCallbackCalled),
        v = {
            baseAnalyticsData: s.useMemo(
                () => ({
                    load_id: I,
                    payment_type: ta.fr[ta.VV.SUBSCRIPTION],
                    subscription_type: eo.rzx.PREMIUM,
                    subscription_plan_id: p,
                    sku_id: (0, e3.mH)(es.pe.GUILD),
                    quantity: o,
                    location: l,
                    source: c,
                    location_stack: C,
                    checkout_flow: S.C.GUILD_BOOST_CHECKOUT,
                    is_gift: !1,
                    eligible_for_trial: !1,
                    guild_id: n ?? void 0,
                }),
                [I, p, o, l, c, C, n],
            ),
            flowStartTime: a,
            startTime: T,
            guildId: n,
            onComplete: t,
            onSubscribeComplete: r,
            paymentSourceId: E,
            paymentSources: f,
            setIsSubmittingCurrentStep: h,
            setPurchaseError: A,
            setPurchaseState: m,
            setStep: y,
        },
        O = s.useRef(v);
    return (
        s.useEffect(() => {
            O.current = v;
        }),
        s.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                startTime: n,
                guildId: r,
                onComplete: s,
                onSubscribeComplete: a,
                paymentSourceId: o,
                paymentSources: l,
                setIsSubmittingCurrentStep: c,
                setPurchaseError: d,
                setPurchaseState: h,
                setStep: f,
            } = O.current;
            (async () => {
                if (!0 === N)
                    try {
                        if (null == tH.A.redirectedPaymentId) return;
                        await (0, K.tn)(tH.A.redirectedPaymentId),
                            _.default.track(eo.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                ...e,
                                duration_ms: Date.now() - n,
                                payment_source_type: (0, e_.g)(l, o) ?? void 0,
                            }),
                            d(null),
                            f(u.pn.CONFIRM),
                            h(D.h.COMPLETED),
                            null != r && (await tj(r, null != i)),
                            a?.(),
                            null != s && s();
                    } catch (r) {
                        h(D.h.FAIL), d(r);
                        let { guild_id: n, ...i } = e;
                        _.default.track(eo.HAw.PAYMENT_FLOW_FAILED, {
                            ...i,
                            payment_error_code: r?.code,
                            payment_gateway: eo.kM_.STRIPE,
                            payment_source_id: o,
                            duration_ms: Date.now() - t,
                        });
                    } finally {
                        c(!1), (0, K.bl)();
                    }
            })();
        }, [N, i]),
        null
    );
}
let tW = [u.pn.PLAN_SELECT],
    tK = [
        { key: u.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(tv, { ...e }), options: { renderHeader: !0 } },
        {
            key: u.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(tF, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    t$ = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, R.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: a } = Q(),
                o = (0, j.Hp)(),
                l = $(),
                { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, Y.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: h } = ea(),
                f = null != n && null != n.renewalMutations,
                p = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                E = !l || !c || !h || null == d || "" === d;
            return ((0, I.Ay)(() => {
                f && _.default.track(eo.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: i });
            }),
            s.useEffect(() => {
                E || o || p || f || t(u.pn.PLAN_SELECT);
            }, [E, o, p, f, t]),
            p)
                ? (0, r.jsx)(ec, { message: el.intl.string(el.t.mOWsF1) })
                : f
                  ? (0, r.jsx)(ec, { message: el.intl.string(el.t.npfhh0) })
                  : E
                    ? (0, r.jsx)(W.A, {})
                    : o
                      ? (0, r.jsx)(H.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: tK,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                    { guildId: a, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: l } = Q(),
                    {
                        activeSubscription: c,
                        paymentSourceId: d,
                        setPaymentSourceId: h,
                    } = (0, R.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: f } = (0, Y.Jn)();
                if (null == a) throw new eT.vd({ message: "Missing guildId" });
                eE()(null != f && "" !== f, "Currency not defined");
                let { paymentSources: p } = o,
                    { newAdditionalPlans: E, currentPremiumSubscriptionPlan: m } = ea(),
                    A = (0, g.bG)([ei.A], () => (null == m ? ei.A.get(tC) : m));
                eE()(null != A, "Missing nextPremiumSubscriptionPlan");
                let I = null != d ? { paymentSourceId: d, currency: f } : { currency: f },
                    T = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                            {
                                guildId: r,
                                paymentModalArgs: a,
                                premiumSubscriptionPaymentSourceId: o,
                                numGuildBoostsToPurchase: l,
                                analyticsLocation: c,
                                analyticsSourceLocation: d,
                                flowStartTime: h,
                                applicationId: f,
                                intent: p,
                                onSubscribeComplete: E,
                            } = Q(),
                            { displayCurrency: m } = (0, Y.Jn)(),
                            { paymentSources: g, setIsSubmittingCurrentStep: A, isSubmittingCurrentStep: I } = a,
                            {
                                activeSubscription: T,
                                paymentSourceId: S,
                                setPurchaseError: y,
                                hasAcceptedTerms: C,
                                setPurchaseState: N,
                            } = (0, R.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                            })),
                            v = (0, ej.sw)(),
                            {
                                newAdditionalPlans: O,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: L,
                            } = ea(),
                            w = (0, e5.A)({
                                location: "GuildBoostPurchaseModal",
                                message: el.intl.string(to.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: M } = (0, tV.t)(),
                            P = (0, e5.iB)({
                                checkoutPaymentSources: M,
                                paymentSourceId: S,
                                location: "GuildBoostPurchaseModal",
                            }),
                            x = s.useMemo(
                                () => ({
                                    ...i,
                                    location: c,
                                    source: d,
                                    subscription_plan_id: L,
                                    sku_id: (0, e3.mH)(es.pe.GUILD),
                                    quantity: l,
                                }),
                                [i, c, d, l, L],
                            ),
                            k = s.useMemo(() => {
                                let { guild_id: e, ...t } = x;
                                return t;
                            }, [x]),
                            [U, G] = s.useState(!1),
                            F = null != S ? { paymentSourceId: S, currency: m ?? void 0 } : { currency: m ?? void 0 },
                            V = async () => {
                                eE()(null != O, "Missing newAdditionalPlans");
                                let e = (0, e_.W)(g, S);
                                y(null);
                                try {
                                    N(D.h.PURCHASING),
                                        A(!0),
                                        eE()(null != S, "Missing paymentSourceId"),
                                        eE()(null != v, "Missing invoicePreview");
                                    let s = { amount: v.total, currency: v.currency },
                                        a = F.currency ?? v.currency,
                                        l = (0, e3.U8)(T, O, a.toLowerCase(), F.paymentSourceId);
                                    if (
                                        (_.default.track(eo.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...x,
                                            duration_ms: Date.now() - h,
                                            guild_id: r ?? void 0,
                                            application_id: f,
                                        }),
                                        U)
                                    )
                                        return;
                                    if (null == T || null == b) {
                                        eE()(null != e, "Missing paymentSource");
                                        let t = await (0, K.Ky)({
                                            items: O,
                                            paymentSource: e,
                                            currency: a,
                                            expectedInvoicePrice: s,
                                            expectedRenewalPrice: l,
                                        });
                                        if (t.redirectConfirmation) return void G(null != t.redirectURL);
                                    } else {
                                        let t = { items: (0, e3.aE)(T, O) };
                                        (t.currency = T.currency ?? a),
                                            (t.paymentSource = null != o ? g[o] : void 0),
                                            null == t.paymentSource &&
                                                (eE()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = a));
                                        let n = await (0, K.nV)(T, t, s, l, i.location_stack);
                                        if (n.redirectConfirmation) return void G(null != n.redirectURL);
                                    }
                                    null == p && t(u.pn.CONFIRM),
                                        N(D.h.COMPLETED),
                                        null != r && (await tj(r, null != p)),
                                        null != p && n(),
                                        E?.();
                                } catch (t) {
                                    N(D.h.FAIL),
                                        y(t),
                                        _.default.track(eo.HAw.PAYMENT_FLOW_FAILED, {
                                            ...k,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === eo.hes.CARD
                                                        ? eo.kM_.STRIPE
                                                        : eo.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: S,
                                            duration_ms: Date.now() - h,
                                        });
                                } finally {
                                    U || A(!1);
                                }
                            };
                        return {
                            text: el.intl.string(el.t.eUEeCt),
                            loading: I,
                            disabled: null == S || !C || null != w || P,
                            onClick: V,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    S = s.useCallback(() => {
                        t(u.pn.ADD_PAYMENT_STEPS), h(null);
                    }, [t, h]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ed.dZ, {
                            children: (0, r.jsx)(tf, {
                                guildId: a,
                                paymentSources: p,
                                priceOptions: I,
                                currentPremiumSubscription: c,
                                premiumSubscriptionPaymentSourceId: l,
                                premiumSubscriptionPlan: A,
                                newAdditionalPlans: E,
                                paymentSourceId: d,
                                setPaymentSourceId: h,
                                onPaymentSourceAdd: S,
                            }),
                        }),
                        (0, r.jsx)(ed.UX, {
                            children: (0, r.jsx)(v.lo, {
                                onBackClick: () => t(u.pn.PLAN_SELECT),
                                primaryButtonProps: T,
                            }),
                        }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            guildId: t,
                            totalNumberOfSlotsToAssign: n = 1,
                            intent: i,
                            disablePremiumUpsell: s,
                            onSubscribeComplete: a,
                            closeGuildPerksModal: o,
                            analyticsLocation: l,
                        },
                        applicationId: u,
                        analyticsSourceLocation: c,
                        stepConfigs: d,
                        loadId: _,
                        onComplete: h,
                        children: f,
                    } = e,
                    p = (0, g.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
                    E = (0, A.A)(() => n - (0, k.D$)(P.A.boostSlots).length);
                return (
                    (0, I.Ay)(() => {
                        null != b.A.getGuild(t) || b.A.isGuildFetching(t) || (0, O.y)(t);
                    }),
                    (0, r.jsx)(y.M, {
                        activeSubscription: p,
                        stepConfigs: d,
                        skuIDs: tN,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(ee, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(tY, { onComplete: h }), f],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: a, existingAvailableSlotCount: o } = Q(),
                    l = (0, L.bB)(),
                    c = (0, R.t4)((e) => e.purchaseState),
                    d = (0, w.n)("GuildBoostUnifiedCheckout"),
                    _ = d && (l === u.pn.REVIEW || l === u.pn.CONFIRM),
                    h = (0, V.A)(_),
                    f = s.useMemo(() => ({ quantity: i }), [i]);
                return d && l === u.pn.CONFIRM
                    ? (0, r.jsx)(F.A, {
                          mediaUrls: h.mediaUrls,
                          isSuccess: h.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(c === D.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(G.A, {
                                  transitionState: t.transitionState,
                                  guild: M.A.getGuild(a),
                                  guildBoostQuantity: i + o,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: f,
                          skipUnifiedHeaderForSteps: tW,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: T.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                i = (0, w.n)("GuildBoostUnifiedCheckout"),
                s = (0, R.t4)((e) => e.purchaseState),
                a = (0, C.A)();
            if (n === u.pn.PREMIUM_UPSELL) return null;
            if (n === u.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, r.jsx)(v.s3, { ...(0, N.uO)({ skuId: e, step: n }) });
            }
            return i
                ? (0, r.jsx)(v.s3, { title: (0, N.uO)({ skuId: null, step: n }).title })
                : (0, r.jsx)(U.A, { onClose: () => t(s === D.h.COMPLETED), currentStep: n, purchaseState: s });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(ef, { ...e }), options: { renderHeader: !0 } },
    };
var tz = n(630303),
    tq = n(871109);
let tZ = s.createContext(void 0);
function tX() {
    let e = s.useContext(tZ);
    return eE()(null != e, "GuildProductPurchaseContext not found"), e;
}
function tQ(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([tq.A], () => tq.A.getGuildProduct(n));
    return (
        eE()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(tZ.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function tJ(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = tX(),
        a = (0, ej.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            eE()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: i.id, invoicePreview: a }),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, r.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var t0 = n(939249),
    t1 = n(789645),
    t2 = n(303612),
    t3 = n(916261),
    t6 = n(575650);
function t4(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(t0.D, {
        className: eN()(t3.cG, t),
        onClick: n,
        children: (0, r.jsx)(t1.P, { size: "xs", color: "currentColor", className: t3.yP }),
    });
}
function t5(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(tL.rQ, {
        className: eN()(t3.wx, t6.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(t2.A, { className: t3.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(t4, { className: t3.b, onClose: n }),
        ],
    });
}
var t7 = n(196617);
let t8 = {
    CHECKOUT_FLOW: eT.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [u.pn.REVIEW]: tz.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(tQ, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = tX();
        return n === u.pn.CONFIRM
            ? null
            : (0, r.jsx)(t5, { guildProductListing: i, className: t7.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tJ, { ...e }) },
};
var t9 = n(20742),
    ne = n(848149),
    nt = n(937008),
    nn = n(106778),
    ni = n(228366),
    nr = n(213530),
    ns = n(966971),
    na = n(758836),
    no = n(483764);
let nl = { sliderBodyClassName: no.Bz };
function nu(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nn.Fk, { ref: n, className: no.Lb, environment: t.current }),
            (0, r.jsx)(nr.K, { options: i, className: eN()(no.Oh, { [no.R]: !s }) }),
        ],
    });
}
var nc = n(702841),
    nd = n(775602),
    n_ = n(31823),
    nh = n(211083),
    nf = n(427675),
    np = n(590180),
    nE = n(953150),
    nm = n(524246),
    ng = n(14368),
    nA = n(61750),
    nI = n(972607),
    nT = n(901930);
function nS(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: l,
        } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, nh.o)(),
        { application: c } = (0, n_.V)(),
        d = (0, nf.gU)(),
        _ = (0, nc.bG)([np.A], () => np.A.getProduct(i)),
        h = s.useRef(!1);
    eE()(null != i, "Expected selectedSkuId"), eE()(null != c, "Expected application");
    let f = d[i];
    eE()(null != f, "Expected sku");
    let p = null != u || null != a || null != o,
        E =
            l.length > 0
                ? el.intl.formatToPlainString(el.t.VuV3Td, { discountOfferAmount: l[0].discount.amount })
                : void 0;
    return (s.useEffect(() => {
        null == _ ||
            p ||
            h.current ||
            ((h.current = !0),
            (0, nA.A)({
                product: _,
                overrideTitle: E,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: na.gs.FIAT,
            }));
    }, [_, n, t, p, E]),
    p)
        ? (0, r.jsx)(ed.dZ, { children: (0, r.jsx)(nT.A, {}) })
        : null;
}
function ny(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftRecipient: o,
            giftMessageError: l,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, nt.Pv)(),
        d = (0, nc.bG)([nd.Ay], () => nd.Ay.useReducedMotion),
        _ = s.useRef(null),
        h = (0, R.t4)((e) => e.selectedSkuId),
        f = (0, nc.bG)([np.A], () => np.A.getProduct(h)),
        { confettiColors: p } = (0, nE.A)(f?.styles);
    return (
        s.useEffect(() => {
            t &&
                null != o &&
                null != h &&
                (c === es.vQ.USER_PROFILE_WISHLIST || c === es.vQ.DM_CHANNEL_WISHLIST) &&
                ni.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: h, recipientId: o.id });
        }, [t, o, h, c]),
        t
            ? (0, r.jsxs)("div", {
                  ref: _,
                  children: [
                      (0, r.jsx)(nI.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: a,
                          giftRecipient: o,
                          giftMessageError: l,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(nm.A, {
                              confettiTarget: _.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, ng.rA)(f?.categorySkuId),
                              colors: p?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(nS, { ...e })
    );
}
var nC = n(662388),
    nN = n(993408),
    nv = n(575593),
    nR = n(452027),
    nO = n(922016),
    nb = n(778712),
    nD = n(986687),
    nL = n(999291),
    nw = n(903209),
    nM = n(674658),
    nP = n(898461),
    nx = n(203632),
    nk = n(892118),
    nU = n(536572),
    nG = n(456839),
    nF = n(219103),
    nV = n(525723),
    nB = n(780651);
function nj(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: a,
            previewHeaderClassName: o,
            hideProfilePreview: l,
        } = e,
        { giftRecipient: u, giftRecipientError: c } = (0, nt.Pv)(),
        d = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
        _ = e3.Ay.canUseShopDiscounts(d),
        h = (0, nL.Ay)(u?.id),
        f = s.useRef(null),
        [p, E] = s.useState(!1),
        { product: m } = (0, nM.q)(t, !0),
        A = s.useMemo(() => (0, nN.fT)(m, _), [m, _]),
        I = (0, nV.V_)(m);
    if (null == m || 0 === m.items.length) return null;
    let [T] = m.items,
        S = (0, nU.VG)(m),
        y = null != u && u.id !== d?.id && m.type !== nv.R.BUNDLE && T.type !== nv.R.NAMEPLATE && !l;
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            (0, r.jsx)("div", {
                className: eN()(nB.QU, o),
                children: (0, r.jsx)(nR.D, {
                    label: el.intl.string(el.t.PpoJzt),
                    children:
                        y &&
                        (0, r.jsx)(
                            nO.Y,
                            {
                                targetElementRef: f,
                                align: "center",
                                shouldShow: p,
                                onRequestClose: () => E(!1),
                                preload: () => (0, nw.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(nD.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, nb.FT)(nb._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, nP.T)(T) ? T : null,
                                        pendingProfileEffect: (0, nx.C3)(T) ? T : null,
                                        pendingProfileFrame: (0, nk.s)(T) ? T : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(t0.D, {
                                        ...i,
                                        className: nB.Nx,
                                        innerRef: f,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(eL.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: el.intl.string(el.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eN()(nB.i1, null != c ? nB.cN : nB.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: nB.Ug,
                        children: [
                            (0, r.jsx)(nG.O, { product: m }),
                            (0, r.jsxs)("div", {
                                className: nB.JZ,
                                children: [
                                    (0, r.jsx)(eL.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === nv.R.BUNDLE
                                                ? null
                                                : T.type === nv.R.AVATAR_DECORATION
                                                  ? el.intl.string(el.t["7v0T9P"])
                                                  : T.type === nv.R.NAMEPLATE
                                                    ? el.intl.string(el.t.x5CoXR)
                                                    : T.type === nv.R.PROFILE_EFFECT
                                                      ? el.intl.string(el.t.wR5wOo)
                                                      : T.type === nv.R.PROFILE_FRAME
                                                        ? el.intl.string(el.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(nF.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: A,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, r.jsx)("div", {
                            className: nB.Wh,
                            children: (0, r.jsx)(eL.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: c,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var nH = n(783878),
    nY = n(966327),
    nW = n(427262);
let nK = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, nt.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(nH.Z, {
                  selectionMode: "single",
                  label: el.intl.string(el.t.xFn72s),
                  placeholder: el.intl.string(el.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${nW.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(nY.A, { user: e, size: nb._3.SIZE_20 }),
                  })),
              }),
          });
};
var n$ = n(735438),
    nz = n.n(n$),
    nq = n(427358),
    nZ = n(570287),
    nX = n(994500);
function nQ() {
    let e = (0, g.yK)([nX.A], () => nX.A.getFriendIDs()),
        t = (0, g.yK)([nq.A], () =>
            nq.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, nZ.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = s.useMemo(() => nz().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [e0.default],
        () =>
            n.reduce((e, t) => {
                let n = e0.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var nJ = n(871181),
    n0 = n(318007),
    n1 = n(285719),
    n2 = n(976860),
    n3 = n(353791);
function n6(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, eV.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eI.Q, {
        text: el.intl.string(el.t.J82mpK),
        onClick: function () {
            t(),
                (0, o.closeAllModals)(),
                null == n
                    ? (0, nC.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, n2.pX)(`${eo.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
let n4 = (0, s.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: !1,
    skuIDs: [],
});
function n5() {
    return (0, s.useContext)(n4);
}
function n7(e) {
    let { hideConfirmStepConfetti: t, confettiCanvas: n } = n5(),
        { analyticsLocations: i } = (0, eV.Ay)();
    return (0, r.jsx)(ny, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
}
let n8 = {
    [u.pn.GIFT_CUSTOMIZATION]: () => el.intl.string(el.t["JCFN/y"]),
    [u.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => el.intl.string(el.t.lDbi6H),
    [u.pn.CONFIRM]: () => "",
};
function n9(e) {
    let { step: t } = e,
        n = n8[t];
    return null == n ? null : (0, r.jsx)(t9.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let ie = {
    CHECKOUT_FLOW: eT.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    renderLeftColumn: i,
                    renderRightColumn: a,
                    ctaDisabled: o,
                    loading: l,
                } = (function (e) {
                    let { handleStepChange: t, handleClose: n } = e,
                        {
                            customGiftMessage: i = "",
                            setCustomGiftMessage: s,
                            giftRecipientError: a,
                            setGiftRecipientError: o,
                            validatingGiftRecipient: l,
                            giftRecipient: u,
                            giftingOrigin: c,
                            setValidatingGiftRecipient: d,
                        } = (0, nt.Pv)(),
                        { selectedSkuId: h, checkoutInvoicePreview: f } = (0, R.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        p = (0, nf.gU)(),
                        E = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
                        m = nQ();
                    async function A(e, t) {
                        d(!0),
                            null != a && o(),
                            (await (0, nC.JJ)(e.id, t)) || o(el.intl.string(el.t["4kgVqQ"])),
                            d(!1);
                    }
                    function T() {
                        return (0, r.jsx)(nJ.A, {
                            onTextChange: (e) => s?.(e),
                            pendingText: i,
                            currentText: i,
                            disableThemedBackground: !0,
                            className: n3.iX,
                            innerClassName: n3.pt,
                        });
                    }
                    return (
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (c !== es.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(eo.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                A(u, h));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, r.jsx)("div", {
                                    className: n3.qL,
                                    children: (0, r.jsx)(n0.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: () => {
                                let e = (0, nN.pA)({ invoicePreview: f, selectedSkuId: h, skusById: p });
                                return c === es.vQ.USER_PROFILE_WISHLIST || c === es.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(n1.Z, { giftRecipient: u }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(nj, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: n3.uW,
                                                      previewHeaderClassName: n3.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: n3.fi,
                                                  children: (0, r.jsx)(n6, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(nK, {
                                                  selectedSkuId: h,
                                                  recipients: m,
                                                  className: n3.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(nj, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: n3.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === E?.id || i.length > es.Jo,
                            loading: l,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                u = s.useMemo(() => ({ loading: l, disabled: o }), [l, o]);
            return (0, r.jsx)(eT.Mw, {
                paymentModalStepProps: e,
                layout: eT.XZ.TWO_COLUMN,
                renderLeftColumn: i,
                renderRightColumn: a,
                primaryCTAButtonProps: u,
            });
        },
        [u.pn.REVIEW]: tz.p,
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { skuId: t, children: n, ...i } = e,
                {
                    environment: a,
                    confettiCanvas: o,
                    setConfettiCanvas: l,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: c,
                    customConfettiDisplayOptions: d,
                    hideConfirmStepConfetti: _,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = s.useRef(new nn.OH()),
                        [i, r] = s.useState(null),
                        [a, o] = s.useState(!1),
                        l = s.useMemo(() => (0, ns.AB)({ purchaseType: na.gs.FIAT, skuId: t }), [t]);
                    return {
                        environment: n,
                        confettiCanvas: i,
                        setConfettiCanvas: r,
                        customConfettiVisible: a,
                        setCustomConfettiVisible: o,
                        customConfettiDisplayOptions: l,
                        hideConfirmStepConfetti: null != l,
                    };
                })({ skuId: t }),
                h = (function (e) {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                f = (0, s.useMemo)(
                    () => ({ skuIDs: h, setCustomConfettiVisible: c, hideConfirmStepConfetti: _, confettiCanvas: o }),
                    [h, c, _, o],
                );
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(nu, {
                        environment: a,
                        setConfettiCanvas: l,
                        customConfettiDisplayOptions: d,
                        customConfettiVisible: u,
                    }),
                    (0, r.jsx)(y.M, {
                        ...i,
                        skuIDs: h,
                        stepConfigs: i.stepConfigs,
                        activeSubscription: null,
                        purchaseType: ta.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(n4.Provider, { value: f, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: i, setCustomConfettiVisible: r } = n5(),
                { isGift: a } = (0, nt.Pv)(),
                o = (0, ne.J)(),
                {
                    paymentModalSkuId: l,
                    paymentModalOnClose: u,
                    paymentModalOnComplete: c,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                        a = t[0] ?? null,
                        o = s.useCallback(() => {
                            r(!0), i?.();
                        }, [i, r]);
                    return {
                        paymentModalSkuId: a,
                        paymentModalOnClose: s.useCallback(
                            (e) => {
                                r(!1), n(e), ni.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, r],
                        ),
                        paymentModalOnComplete: o,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                d = s.useCallback(
                    (e) => {
                        u(e), e && a && o();
                    },
                    [u, a, o],
                );
            return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: eo.FYj });
        },
        tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, nt.Pv)();
        return n ? (0, r.jsx)(n9, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(n7, { ...e }), options: nl },
};
var it = n(354033),
    ii = n(491057),
    ir = n(496142),
    is = n(877624),
    ia = n(554146),
    io = n(71804),
    il = n(426398),
    iu = n(841702),
    ic = n(367727),
    id = n(380619),
    i_ = n(374200),
    ih = n(771566),
    ip = n(625494),
    iE = n(45938),
    im = n(97808),
    ig = n(912140),
    iA = n(780898),
    iI = n(344346),
    iT = n(837015),
    iS = n(258915);
function iy(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
        o = (0, g.bG)([nd.Ay], () => nd.Ay.useReducedMotion),
        { analyticsLocations: l } = (0, eV.Ay)(),
        u = nb._3.SIZE_32,
        { product: c, isFetching: d } = (0, nM.q)(t),
        [_, h] = s.useState(!1),
        f = c?.items[0],
        {
            isNameplateReward: p,
            nameplateData: E,
            rewardAvatarDecorationSrc: m,
        } = s.useMemo(
            () =>
                null == f
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, iT.F)(f)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: f.skuId,
                                src: f.asset,
                                palette: (0, iA.H6)(f.palette ?? "sky"),
                                imgAlt: f.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nP.T)(f)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, ig.A)({
                                  legacyAssetId: f.asset,
                                  skuId: f.skuId,
                                  size: u,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [f, u, o],
        );
    return (0, r.jsx)(ed.UX, {
        children: (0, r.jsx)(tR.j, {
            children: (0, r.jsxs)("div", {
                className: iS.W,
                children: [
                    p && null != E
                        ? (0, r.jsx)("div", {
                              className: iS.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, r.jsx)(iI.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: _,
                              }),
                          })
                        : (0, r.jsx)(im.Js, {
                              "aria-label": a?.username,
                              size: u,
                              src: a?.getAvatarURL(void 0, (0, nb.FT)(u), !o),
                              avatarDecoration: m,
                          }),
                    (0, r.jsx)(eA.$, {
                        variant: "primary",
                        text: el.intl.string(el.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, nA.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: l,
                                    purchaseType: na.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var iC = n(49999);
function iN(e) {
    let t,
        {
            handleClose: i,
            planGroup: a,
            onSubscriptionConfirmation: l,
            renderPurchaseConfirmation: u,
            postSuccessGuild: c,
            followupSKUInfo: d,
            continueSessionToInitialStep: h,
        } = e,
        { paymentSources: f } = (0, il.jm)(),
        {
            activeSubscription: p,
            selectedSkuId: E,
            updatedSubscription: m,
            paymentSourceId: A,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: S,
            startingFractionalPremiumEndsAt: y,
        } = (0, R.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        N = (0, C.A)(),
        v = (0, L.bB)(),
        {
            isGift: O,
            giftRecipient: b,
            giftCode: D,
            hasSentMessage: w,
            isSendingMessage: M,
            sendGiftMessage: P,
            claimableRewards: x,
            selectedGiftingPromotionReward: k,
            openGiftingBadgePostPurchaseModal: U,
        } = (0, nt.Pv)(),
        { confirmationFooter: G } = (0, ii.cG)(),
        F = (0, id.px)(N, O, x),
        V = (0, id.Mq)(N),
        B = (0, iu.Mv)(k, !1),
        j = (0, g.bG)([i_.A], () => i_.A.getGiftPromotion()?.id),
        H = (0, g.bG)([i_.A], () => {
            let e = i_.A.getMarketingComponentByType(is.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        Y = (0, e_.g)(f, A),
        W = O && null != k && null != B && V,
        K = { selectedPlan: N, selectedSkuId: E, step: v };
    if (null == N) throw new io.v({ message: "Expected plan to be selected", extraSentryInformation: K });
    if (null == E) throw new io.v({ message: "Expected selectedSkuId", extraSentryInformation: K });
    if (null == v) throw new io.v({ message: "Step should be set", extraSentryInformation: K });
    let $ = s.useCallback(() => {
        i(), l?.();
    }, [i, l]);
    (0, I.Ay)(() => {
        T &&
            _.default.track(eo.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != m,
                has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                subscription_id: m?.id,
            });
    }),
        s.useEffect(() => {
            function e() {
                if (T)
                    if (null != m && m.hasAnyPremiumGroup) {
                        _.default.track(eo.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: m.id,
                        });
                        let e = (0, n$.uniqueId)("premium-group-purchase-flow-modal");
                        (0, o.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("17494"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        subscription: m,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            ip._.dispatch(eo.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    ip._.dispatch(eo.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, o.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        _.default.track(eo.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != m,
                            has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                        }),
                            ip._.dispatch(eo.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                ip._.subscribe(eo.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    ip._.unsubscribe(eo.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [T, m]),
        s.useEffect(() => {
            !O || null == b || null == D || w || M || (0, iE.Ik)(b) || P({ onSubscriptionConfirmation: l });
        }, [P, O, b, D, w, M, l]),
        s.useEffect(() => {
            F &&
                null != H &&
                null != j &&
                (0, ic.qr)(ia.M.GIFTING_PROMOTION_REMINDER, j, { dismissAction: iC.i.INDIRECT_ACTION });
        }, [H, j, F]);
    let z = null != h ? ih.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(N, $, m);
    else if (O) t = (0, r.jsx)(ih.fw, { planId: N.id, onClose: $ });
    else {
        let e =
            S === N.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != p && (0, er.vT)(p, N.id, a),
                  };
        t = (0, r.jsx)(ih.Ay, {
            planId: N.id,
            onClose: $,
            paymentSourceType: Y,
            hideClose: null != G,
            startingFractionalPremiumEndsAt: y,
            customCTAType: z,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(ed.dZ, { children: [(0, r.jsx)(nT.A, {}), t] }),
            null != G && G,
            W && null != k && (0, r.jsx)(iy, { rewardSkuId: k, onClose: $, onRewardModalClose: U }),
        ],
    });
}
let [iv, iR] = (0, Z.A)(),
    iO = {
        CHECKOUT_FLOW: eT.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: ir.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    a = s.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(iv.Provider, { value: a, children: (0, r.jsx)(ii.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = iR();
            return (0, r.jsx)(it.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iN, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ib = n(73825),
    iD = n(960851),
    iL = n(607399),
    iw = n(795791),
    iM = n(344159),
    iP = n(561794),
    ix = n(811656),
    ik = n(187322),
    iU = n(890856),
    iG = n(947641),
    iF = n(713517),
    iV = n(929283),
    iB = n(761365),
    ij = n(267861);
function iH(e) {
    let t,
        n,
        { skuId: i, user: a, claimed: o, onSelect: l, selectedSkuId: u } = e,
        [c, d] = s.useState(null),
        _ = s.useCallback((e) => {
            d(e);
        }, []),
        h = s.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: f } = (0, iF.A)(h),
        p = !o && f,
        { product: E } = (0, nM.q)(i);
    if (null == E) return null;
    let m = E.items[0];
    return null == m
        ? null
        : ((0, nP.T)(m)
              ? ((n = nv.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(iV.i, { item: m, user: a, isHighlighted: p, avatarSize: nb._3.SIZE_96 })))
              : (0, iT.F)(m) &&
                ((n = nv.R.NAMEPLATE),
                (t = (0, r.jsx)(iB.A, { nameplate: m, user: a, isHighlighted: p, size: "small" }))),
          (0, r.jsx)(ik.vN, {
              children: (0, r.jsxs)(iU.s, {
                  ref: _,
                  "aria-label": E.name ?? "",
                  onClick: function () {
                      null == i || null == l || o || l(i);
                  },
                  className: eN()(ij._x, { [ij.Vp]: !o, [ij.mr]: p, [ij.md]: u === i }),
                  children: [
                      (0, r.jsx)("div", {
                          className: eN()(ij.VH, {
                              [ij._Q]: n === nv.R.AVATAR_DECORATION,
                              [ij.M4]: n === nv.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: eN()(ij.i1, { [ij.Sf]: o }), children: t }),
                                            o &&
                                                (0, r.jsx)(iG.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: ev.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: ij.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: ij.tZ,
                          children: [
                              (0, r.jsx)(ex.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, r.jsx)(eL.E, {
                                  variant: "text-sm/normal",
                                  children: o ? el.intl.string(el.t["6cfuDj"]) : el.intl.string(el.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var iY = n(696208),
    iW = n(683433);
function iK(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: l,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: d,
            isNextDisabled: _ = !1,
        } = e,
        { paymentSources: h } = (0, il.jm)(),
        f = (0, C.A)(),
        { isGift: p, claimableRewards: E } = (0, nt.Pv)();
    i = i ?? h;
    let {
            variant: m,
            text: A,
            onClick: I,
            disabled: T,
        } = (function (e) {
            let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: i,
                    claimableRewards: r,
                    paymentSources: s,
                    shouldRenderUpdatedPaymentModal: a,
                    isTrial: o,
                    isNextDisabled: l = !1,
                } = e,
                c = (0, g.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
                d = (0, C.A)(),
                _ = (0, L.bB)(),
                { hasEntitlements: h } = (0, iM.X)(n, i),
                f = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
            var p = a ? el.intl.string(el.t.PDTjLN) : el.intl.string(el.t.XqMe3N),
                E = u.pn.ADD_PAYMENT_STEPS;
            return (
                f && (E = u.pn.REVIEW),
                (0, id.px)(d, i, r) && _ !== u.pn.SELECT_FREE_SKU && (E = u.pn.SELECT_FREE_SKU),
                { variant: "primary", text: p, onClick: () => t(E), disabled: l }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? f?.id),
            isGift: p,
            claimableRewards: E,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: _,
        }),
        S = s.useMemo(
            () =>
                null != n && l.includes(n)
                    ? [{ variant: m, text: A, onClick: I, disabled: T }]
                    : [{ variant: "primary", text: el.intl.string(el.t.XqMe3N), disabled: !0 }],
            [m, A, I, T, n, l],
        );
    return (0, r.jsx)(iY.H, { leading: o && null != a ? (0, r.jsx)(iW.A, { onClick: a }) : void 0, actions: S });
}
var i$ = n(328232);
function iz(e) {
    let { handleStepChange: t } = e,
        n = (0, R.t4)((e) => e.selectedSkuId),
        i = (0, C.A)(),
        a = (0, L.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: l, claimableRewards: c } = (0, nt.Pv)(),
        d = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
        _ = (0, g.yK)([i_.A], () => i_.A.getGiftPromotionRewardSkuIds()),
        h = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, l),
        [f, p] = s.useState(h),
        [E, m] = s.useState(!1);
    s.useEffect(() => {
        E || null != l || null == h || (o(h), p(h));
    }, [h, E, l, o]);
    let A = { selectedPlan: i, selectedSkuId: n, step: a };
    if (null == i) throw new io.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new io.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == a) throw new io.v({ message: "Step should be set", extraSentryInformation: A });
    let I = s.useMemo(() => null != f && (c ?? []).includes(f), [f, c]),
        T = s.useMemo(() => 0 === _.length || null == f || !I, [_, f, I]);
    function S(e) {
        o(e), p(e), m(!0);
    }
    s.useEffect(() => {
        if (0 === _.length) {
            p(void 0), o(void 0);
            return;
        }
        (null != f && I && _.includes(f)) || null == f || (p(void 0), o(void 0));
    }, [_, I, f, o]);
    let y = _.map((e) =>
            (0, r.jsx)(
                iH,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: S, selectedSkuId: f },
                e,
            ),
        ),
        N = (0, r.jsx)(ed.UX, {
            children: (0, r.jsx)(iK, {
                onStepChange: t,
                onBackClick: () => t(u.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: T,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t9.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: el.intl.string(el.t.OEtqpm),
                subtitle: el.intl.string(el.t.h2nMp0),
            }),
            (0, r.jsx)(B.c, {
                children: (0, r.jsx)(tw.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", { className: i$.Dq, children: y }),
                }),
            }),
            N,
        ],
    });
}
var iq = n(800471),
    iZ = n(38405);
let iX = function (e, t, n, i, r) {
    let a = (0, s.useRef)(!1),
        o = { componentName: e, sentryErrorOptions: r, stateToCapture: i },
        l = (0, s.useRef)(o);
    (0, s.useEffect)(() => {
        l.current = o;
    }),
        (0, s.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: r } = l.current;
            if (t && !a.current) {
                a.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    iZ.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        iZ.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
var iQ = n(463376),
    iJ = n(699595),
    i0 = n(442123),
    i1 = n(67948),
    i2 = n(807098),
    i3 = n(298305),
    i6 = n(387745);
function i4() {
    let e = (0, g.bG)([i_.A], () => {
            let e = i_.A.getMarketingComponentByType(is.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, nt.Pv)(),
        n = (0, i2.T)(e?.asset),
        i = (0, i2.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, id.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, id.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, id.x)(o, a),
        u = e?.assetVariant === i1.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: i6.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eN()([i6.my], { [i6.R_]: u }),
                      children: (0, r.jsx)(i3.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? nb._3.SIZE_72 : nb._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, r.jsx)(eL.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: el.intl.string(el.t.Abiuci),
                  }),
              ],
          });
}
var i5 = n(410516),
    i7 = n(361597),
    i8 = n(69494),
    i9 = n(622631),
    re = n(597770),
    rt = n(102741),
    rn = n(296589);
function ri(e) {
    let { giftMessage: t = el.intl.string(el.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, nt.Pv)();
    return !n || (0, iE.Ik)(i)
        ? null
        : (0, r.jsx)(rt.A, {
              className: rn.z,
              iconSize: rt.A.Sizes.SMALL,
              icon: re.o,
              color: null == t ? rt.A.Colors.PRIMARY : rt.A.Colors.SECONDARY,
              children: t,
          });
}
var rr = n(71867),
    rs = n(249872);
function ra(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: a, trialId: o, handleClose: l } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: _,
            defaultPlanId: h,
        } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: f, isEligibleForTrial: p, isEligibleForDiscount: E, discountOffer: m } = (0, iQ.i)(),
        g = (0, i5.YJ)(m),
        I = (0, C.A)(),
        T = (0, L.bB)(),
        { isGift: S, giftRecipient: y, giftMessage: N, claimableRewards: v } = (0, nt.Pv)(),
        O = (0, id.Mq)(I),
        b = (0, nc.bG)([i_.A], () => {
            let e = i_.A.getMarketingComponentByType(is.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        D = S && O && null != v && v.length > 0 && b,
        w = (p || E) ?? !1,
        { monthlyDefaultSelected: M } = i0.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${S ? "" : " - DO NOT USE"}`,
        }),
        P = (0, A.A)(M),
        x = s.useMemo(() => {
            let e = h;
            return S && P && null != c && (e = es.En[c]), (0, e3.Tm)({ skuId: c, isPremium: f, defaultPlanId: e });
        }, [c, f, h, S, P]),
        k = E && null != g && x.includes(g) ? g : x[0],
        U = (0, nc.bG)([ei.A], () => ei.A.get(k)),
        G = [{ planId: U?.id, quantity: 1 }],
        [F, V] = s.useState(w),
        [B, j] = (0, eY.YV)({
            items: G,
            renewal: !1,
            preventFetch: !w,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    s.useEffect(() => {
        w && V(B?.subscriptionPeriodEnd == null);
    }, [B, w]),
        iX(
            "Payment Modal Plan Select Step",
            F,
            5,
            { proratedInvoicePreview: B, proratedInvoiceError: j, isEligibleForOffer: w },
            { tags: { app_context: "billing" } },
        );
    let H = j?.message ?? el.intl.string(el.t.R0RpRX),
        Y = w && null == j,
        W = w && null != j,
        K = Y && null == _ && B?.subscriptionPeriodEnd == null;
    (0, iJ.W)({ priceOptions: d, trialId: o, discountInvoicePreview: B });
    let $ = s.useMemo(
        () => ({
            planOptions: x,
            selectedPlanId: I?.id,
            planGroup: i,
            subscriptionPeriodEnd: B?.subscriptionPeriodEnd,
            useCompactGiftComponents: D,
            handleClose: l,
        }),
        [x, I?.id, i, B?.subscriptionPeriodEnd, D, l],
    );
    if (K) return (0, r.jsx)(e8.E, { className: rs.QW });
    eE()(null != T, "Step should be set"), eE()(x.length > 0, "Premium plan options should be set");
    let z = S
        ? (0, r.jsx)(i7.$p, { ...$ })
        : (0, r.jsx)(i9.X, { ...$, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ri, { giftMessage: N }),
            !(S && (0, iE.Ik)(y)) && (0, r.jsx)(i8.A, { isEligibleForTrial: p }),
            (0, r.jsxs)(ed.dZ, {
                children: [
                    (0, r.jsx)(rr.P, { className: rs.ZB, planSkuId: U?.skuId }),
                    (0, r.jsx)(nT.A, {}),
                    W ? (0, r.jsx)(em.w, { type: "critical", children: H }) : z,
                    Y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eN()(rs.IM, rs.Go) }),
                                (0, r.jsx)(eL.E, {
                                    variant: "text-xs/normal",
                                    children: el.intl.format(el.t.BHtnqA, {
                                        link: e1.A.getArticleURL(eo.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(ed.UX, {
                children: [
                    D && (0, r.jsx)(i4, {}),
                    (0, r.jsx)(iK, {
                        onStepChange: t,
                        onBackClick: () => t(u.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: x,
                        shouldRenderUpdatedPaymentModal: Y,
                        isTrial: p,
                    }),
                ],
            }),
        ],
    });
}
var ro = n(862990),
    rl = n(672525);
function ru(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, R.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, e$.V)(i);
    return !t && null != r && null != n && es.TP[r.trial_id].skus.includes(n);
}
var rc = n(634378);
function rd(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: l,
            referralTrialOfferId: c,
        } = (0, R.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: d } = (0, il.jm)(),
        { isGift: _, claimableRewards: h } = (0, nt.Pv)(),
        f = _ && null != h && h.length > 0,
        p = (0, e$.V)(c);
    return (0, r.jsx)(r_, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: i,
                    handleStepChange: r,
                    isGift: s,
                    userTrialOffer: a,
                    setSelectedPlanId: o,
                    startedPaymentFlowWithPaymentSources: l,
                    defaultPlanId: c,
                } = e;
                i(n);
                let d = u.pn.PLAN_SELECT,
                    _ = (0, e3.aZ)(t);
                (_ !== es.pe.TIER_1 && _ !== es.pe.TIER_2) || n !== es.pe.TIER_0 || s || (d = u.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && es.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, iq.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: l,
                    });
                d !== u.pn.WHAT_YOU_LOSE && f && ((d = u.pn.REVIEW), o((0, iq.xT)(n, t, c))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: p,
                startedPaymentFlowWithPaymentSources: l,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: i, setSelectedSkuId: r } = e;
                r((0, e3.mH)(es.pe.TIER_2)),
                    t(es.gD.PREMIUM_GROUP_MONTH),
                    n(i ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: es.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: _,
        priceOptions: s,
        showPromotionalGiftBanner: f,
    });
}
function r_(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, ro.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t9.rQ, { titleTextVariant: "heading-lg/semibold", title: el.intl.string(el.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(B.c, {
                      children: (0, r.jsx)("div", {
                          className: rc.eE,
                          children: (0, r.jsx)(rl.yS, {
                              onSelectSku: (e) => t((0, e3.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(B.c, {
                      children: (0, r.jsx)("div", {
                          className: rc.a2,
                          children: (0, r.jsx)(rl.Ay, {
                              onSelectSku: (e) => t((0, e3.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
var rh = n(825484),
    rf = n(137728);
function rp(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: s,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: l } = (0, nt.Pv)(),
        c = null != a ? (0, e3.EL)(a) : null,
        d = null != c ? (0, e3.RH)(c.planId) : null,
        _ = null != c ? (0, e3.m6)(c.planId) : null,
        h = (0, iq.vT)({ isTrial: !1, isGift: l, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
    return (
        eE()(null != _, "Expected premium type"),
        (0, r.jsx)(rf.A, {
            premiumType: _,
            titleText: el.intl.string(el.t["7VcWW0"]),
            subtitleText: el.intl.format(el.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, r.jsxs)(rh.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(eA.$, {
                        variant: "primary",
                        text: el.intl.string(el.t["3PatSz"]),
                        onClick: () => {
                            h ? (s((0, iq.xT)(i, a)), t(u.pn.REVIEW)) : t(u.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(eA.$, { variant: "secondary", onClick: n, text: el.intl.string(el.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var rE = n(242874),
    rm = n(573359),
    rg = n(165191),
    rA = n(237412),
    rI = n(865543);
let rT = [
        {
            key: u.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(rd, { ...e }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                modalSizeGetter: (e) => {
                    let { canCurrentlyPurchasePremiumGroup: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(rp, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: u.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(ra, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, iq.lp)(e) ? null : el.intl.string(el.t["r+SebU"])),
                sectionHeaderText: () => el.intl.string(el.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(iz, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rS = {
        CustomHeaderComponent: function (e) {
            let { onClose: t } = e,
                { selectedSkuId: n, purchaseState: i } = (0, R.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                a = (0, g.bG)([rm.A], () => rm.A.isDisplayingWowMomentConfirmation),
                {
                    isPremium: o,
                    isPremiumGroupPurchase: l,
                    isEligibleForTrial: c,
                    isEligibleForDiscount: d,
                } = (0, iQ.i)(),
                _ = (0, nf.S3)(),
                h = (0, L.bB)(),
                { isGift: f, selectedGiftStyle: p, giftRecipient: E } = (0, nt.Pv)(),
                m = _?.productLine === eo.EZt.COLLECTIBLES,
                A = _?.productLine === eo.EZt.SOCIAL_LAYER_GAME_ITEM,
                I = f && (0, iE.Ik)(E) && h === u.pn.CONFIRM && null != p && !m && !A,
                T = [u.pn.SKU_SELECT, u.pn.SELECT_FREE_SKU],
                S = null != h && !T.includes(h) && null != n,
                y = s.useCallback(() => t(!1), [t]);
            return s.useMemo(() => {
                if (null == h) return;
                let e = null;
                return (
                    I
                        ? (e = (0, r.jsxs)("div", {
                              className: rI.kL,
                              children: [
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !0,
                                      style: { display: "contents" },
                                      children: (0, r.jsx)(rg.A, {
                                          defaultAnimationState: rE.oA.LOOP,
                                          giftStyle: p,
                                          className: rI.qq,
                                      }),
                                  }),
                                  (0, r.jsx)(tL.s_, { onClick: y, className: rI.b, "data-migration-pending": !0 }),
                              ],
                          }))
                        : S &&
                          (eE()(n in es.WN, `invalid sku id: ${n}`),
                          (e = (0, r.jsx)(rA.A, {
                              currentStep: h ?? void 0,
                              purchaseState: i,
                              premiumType: es.WN[n],
                              onClose: y,
                              showTrialBadge: c,
                              showDiscountBadge: d,
                              isGift: f,
                              giftRecipient: E,
                              isEligibleForTrial: c,
                              enablePremiumBrandRefresh: o,
                              isDisplayingWowMomentConfirmation: a,
                              isPremiumGroupPurchase: l,
                          }))),
                    e
                );
            }, [p, y, i, n, h, c, d, I, S, f, E, o, a, l]);
        },
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: rT,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: ir.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: i,
                            referralTrialOfferId: a,
                            subscriptionTier: o,
                            subscription: l,
                        },
                        stepConfigs: c,
                        loadId: d,
                        giftContextProps: _ = { isGift: !1, giftRecipient: null },
                        renderModalProps: h,
                        children: f,
                    } = e,
                    p = (0, g.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
                    E = (0, iD.cg)() ? es.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: A } = _;
                if (null != o && !Object.values(es.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, iP.tA)({ giftRecipient: A, isGift: m ?? !1 }),
                    T = s.useMemo(
                        () =>
                            I
                                ? c.map((e) =>
                                      e.key === u.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : c,
                        [c, I],
                    ),
                    C = null != l ? l : p,
                    N = !m && null != C && C.isPurchasedExternally && null != C.paymentGateway;
                (0, iM.s)(C, () => h.onClose(), m ?? !1);
                let v = s.useMemo(() => [...es.oz], []);
                return N
                    ? null
                    : (0, r.jsx)(y.M, {
                          loadId: d,
                          activeSubscription: C,
                          stepConfigs: T,
                          skuIDs: v,
                          isGift: m,
                          defaultPlanId: E ?? n,
                          referralCode: i,
                          referralTrialOfferId: a,
                          unifiedCheckoutFlow: S.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(ii.Qt, { confirmationFooter: t, children: f }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: i },
                    } = e,
                    { onClose: a, renderPurchaseConfirmation: o, continueSessionToInitialStep: l } = t;
                s.useEffect(() => {
                    ei.A.isLoadedForPremiumSKUs() || ni.h.wait(() => (0, ib.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, R.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    _ = (0, L.bB)(),
                    {
                        isGift: h,
                        selectedGiftingPromotionReward: f,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, nt.Pv)(),
                    E = s.useMemo(() => (h ? [u.pn.PLAN_SELECT] : []), [h]),
                    m = s.useCallback(
                        (e, t) => {
                            a(e, t), e && h && null == f && p();
                        },
                        [a, h, f, p],
                    ),
                    g = !h && c === es.pe.TIER_2 && !iL.Ct && !iL.KY && null == (0, iw.uM)(),
                    A = d === D.h.PURCHASING;
                return (0, r.jsx)(ix.A, {
                    isConfirmationStep: _ === u.pn.CONFIRM && null == l && null == o,
                    isEligibleForWowMoment: g,
                    shouldPrefetchWowMoment: A,
                    children: n({
                        ...t,
                        onClose: m,
                        analyticsSubscriptionType: eo.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: es.LE,
                        subscriptionTier: i,
                        skipUnifiedHeaderForSteps: E,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iN, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ry = n(143582),
    rC = n(241524),
    rN = n(19311),
    rv = n(4126);
let rR = "(max-width: 485px)";
var rO = n(702361),
    rb = n(938430);
function rD(e) {
    let { step: t, onClose: n } = e,
        i = (0, rC.A)("(max-height: 450px)");
    return t === u.pn.CONFIRM || t === u.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: eN()(rO.N1, t6.G),
              children: [
                  !i &&
                      (0, r.jsx)("div", {
                          className: rO.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rO.F0,
                          }),
                      }),
                  (0, r.jsx)(t0.D, {
                      className: rO.G3,
                      onClick: () => n(),
                      "aria-label": el.intl.string(el.t.cpT0Cq),
                      children: (0, r.jsx)(t1.P, { size: "md", color: "currentColor", className: rO.ut }),
                  }),
              ],
          });
}
function rL(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: s, title: a, subtitle: o, description: l } = e;
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: rO.RP,
              children: (0, r.jsxs)(rv.$K, {
                  children: [
                      (0, r.jsx)(rv.KF, { application: s, asset: t }),
                      (0, r.jsx)(rv.kj, { children: a }),
                      (0, r.jsx)(rv.ri, {}),
                      (0, r.jsx)(rv.Mx, { title: o, description: l }),
                      (0, r.jsx)(rv.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function rw(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rO.NV,
        children: [
            (0, r.jsx)("img", { src: rb, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(ex.D, {
                className: rO.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: el.intl.format(el.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(eL.E, {
                className: rO.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: el.intl.format(el.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsx)(ed.UX, {
                children: (0, r.jsx)(rN.Ay, {
                    onPrimary: n,
                    primaryCTA: rN.ti.CONTINUE,
                    primaryText: el.intl.string(el.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rM = n(967198);
let [rP, rx] = (0, Z.A)();
function rk(e) {
    let { guildId: t, showBenefitsFirst: n, children: i } = e,
        [a, o] = s.useState(null),
        l = s.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: a,
                setSubscriptionMetadataRequest: o,
            }),
            [t, n, a],
        );
    return (0, r.jsx)(rP.Provider, { value: l, children: i });
}
n(938796);
var rU = n(266060),
    rG = n(163437),
    rF = n(701273),
    rV = n(425013);
function rB(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rV.RP,
        children: [
            (0, r.jsx)(ex.D, { className: rV.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(eL.E, { className: rV.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: rV.UD,
                children: [
                    o &&
                        (0, r.jsx)(eA.$, {
                            variant: "primary",
                            text: el.intl.string(el.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rF.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(eA.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(eA.$, {
                            variant: "secondary",
                            text: el.intl.string(el.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function rj(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rV.RP,
        children: [
            (0, r.jsx)(ex.D, {
                className: rV.RS,
                variant: "heading-lg/extrabold",
                children: el.intl.format(el.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(eL.E, {
                className: rV.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: el.intl.format(el.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rV.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rV.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eA.$, {
                            variant: "primary",
                            text: el.intl.string(el.t["8L5bZG"]),
                            onClick: () => (0, rF.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eA.$, { variant: "secondary", text: el.intl.string(el.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rH(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rU.K)(),
        { subscriptionMetadataRequest: a } = rx(),
        { application: o } = (0, n_.V)(),
        l = (0, nf.S3)(),
        c = (0, rC.A)(rR),
        d = (0, g.bG)([M.A], () => M.A.getGuild(a?.guild_id)),
        _ = s.useCallback(() => t(u.pn.REVIEW), [t]);
    if (null == l) return null;
    let h = (0, rG.bg)(l.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ed.dZ, {
                children: c
                    ? (0, r.jsx)(rB, {
                          confirmCta: el.intl.string(el.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: el.intl.format(el.t["6n6oXA"], { tier: l.name }),
                          subtitle: h
                              ? el.intl.string(el.t.lzAoKB)
                              : el.intl.formatToPlainString(el.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rL, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: o ?? void 0,
                          title: el.intl.format(el.t.haiCxc, { tier: l.name }),
                          subtitle: h ? el.intl.string(el.t.RvtbP5) : el.intl.string(el.t.zY39Zu),
                          description: h
                              ? el.intl.formatToPlainString(el.t.QCe4rY, { applicationName: o?.name })
                              : el.intl.string(el.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, r.jsx)(ed.UX, {
                    children: (0, r.jsx)(rN.Ay, {
                        onBack: n,
                        backText: el.intl.string(el.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: rN.ti.CONTINUE,
                        primaryText: el.intl.string(el.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rY = n(21161);
function rW(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: a } = e,
        o = (0, rU.K)(),
        { application: l } = (0, n_.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, R.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, nf.S3)(),
        h = (0, rC.A)(rR),
        { createMultipleConfettiAt: f } = s.useContext(rY.x),
        p = _?.name ?? "";
    function E() {
        i(), a?.();
    }
    let m = c === u.pn.CONFIRM,
        g = (0, rG.bg)(_?.flags ?? 0),
        A =
            null != o && o.benefits.length > 0
                ? el.intl.formatToPlainString(el.t["+IQQVM"], { benefitCount: o.benefits.length })
                : null,
        { showBenefitsFirst: I } = rx();
    return (
        I
            ? (t = h
                  ? (0, r.jsx)(rj, { tierName: p, onConfirm: E, subscription: d })
                  : (0, r.jsx)(rw, { tierName: p, onConfirm: E, subscription: d }))
            : h
              ? (t = (0, r.jsx)(rB, {
                    title: el.intl.format(el.t.ea6tZr, { tierName: p }),
                    subtitle:
                        null != o && o.benefits.length > 0
                            ? el.intl.formatToPlainString(el.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: E,
                    confirmCta: el.intl.string(el.t.nlkywz),
                }))
              : ((t =
                    null != o && null != l
                        ? (0, r.jsx)(rL, {
                              icon: o.thumbnail,
                              storeListingBenefits: o.benefits,
                              application: l,
                              title: el.intl.format(el.t["Q+qktS"], { tier: p }),
                              subtitle: el.intl.string(el.t.ECKxXU),
                              description: g
                                  ? el.intl.format(el.t["MAtQk/"], { applicationName: l?.name })
                                  : el.intl.format(el.t.vHkMF4, { tier: p }),
                          })
                        : (0, r.jsx)(W.A, {})),
                (n = (0, r.jsx)(rN.Ay, {
                    onPrimary: E,
                    primaryCTA: rN.ti.CONTINUE,
                    primaryText: el.intl.string(el.t["JtWl+a"]),
                }))),
        s.useEffect(() => {
            nd.Ay.useReducedMotion && m && f(window.innerWidth / 2, window.innerHeight / 2);
        }, [f, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(ed.dZ, { children: [(0, r.jsx)(nT.A, {}), t] }),
                null != n && (0, r.jsx)(ed.UX, { children: n }),
            ],
        })
    );
}
var rK = n(304072),
    r$ = n(427858),
    rz = n(166926),
    rq = n(953761);
let rZ = {
    CHECKOUT_FLOW: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: i,
                setSelectedSkuId: a,
                setSelectedPlanId: o,
                priceOptions: l,
            } = (0, R.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: c,
                subscriptionPriceOptionsLoading: d,
                displayCurrency: _,
            } = (0, Y.Jn)(),
            { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: p } = rx(),
            E = (0, j.Hp)(),
            m = $(),
            g = (0, L.l)(),
            { isGift: A } = (0, nt.Pv)(),
            I = p ? u.pn.BENEFITS : u.pn.REVIEW,
            [T, S] = s.useState(!m || !c || d);
        return (s.useEffect(() => {
            S(!m || !c || d);
        }, [d, c, m]),
        s.useEffect(() => {
            null != f && h({ guild_id: f });
        }, [f, h]),
        s.useEffect(() => {
            o(t);
            let e = null != t ? ei.A.get(t) : null;
            T ||
                E ||
                (n((t) => {
                    let n = null != e ? (0, e3.y8)(e.id, !1, A, { paymentSourceId: l.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: _,
                    };
                }),
                null != e && (a(e?.skuId), g(I)));
        }, [E, t, A, T, l, _, i, n, o, a, g, I]),
        T)
            ? (0, r.jsx)(W.A, {})
            : E
              ? (0, r.jsx)(H.oO, {})
              : null;
    },
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rD, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: u.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(rH, { ...e }),
            options: { useBreadcrumbLabel: () => el.intl.string(el.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [u.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: a, analyticsLocation: o } = e,
                {
                    purchaseState: l,
                    contextMetadata: c,
                    purchaseError: d,
                    setCurrency: _,
                    activeSubscription: h,
                } = (0, R.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: f } = (0, il.jm)(),
                { dropdownCurrencies: p } = (0, Y.Jn)(),
                { subscriptionMetadataRequest: E, showBenefitsFirst: m } = rx(),
                g = m ? u.pn.BENEFITS : void 0,
                A = (0, C.A)(),
                I = (0, nf.S3)();
            if (null == A)
                throw new io.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let T = s.useRef(null),
                [S, y] = (0, rK.A)(!1, 500),
                N = (0, ej.mx)(),
                v = (0, rG.bg)(I?.flags ?? 0);
            s.useEffect(() => {
                null != d && null != T.current && T.current.scrollIntoView({ behavior: "smooth" });
            }, [d]);
            let O = s.useRef(null),
                b = s.useCallback(() => {
                    t(u.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return l === D.h.PURCHASING
                ? (0, r.jsx)(W.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(ed.dZ, {
                              children:
                                  null == h
                                      ? (0, r.jsx)(rq._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: b,
                                            metadata: v ? void 0 : E,
                                        })
                                      : (0, r.jsx)(r$.A, {
                                            premiumSubscription: h,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: b,
                                            planId: A.id,
                                            planGroup: n,
                                            currencies: p,
                                            onCurrencyChange: (e) => _(e),
                                            hasOpenInvoice: null != i,
                                            purchaseState: l,
                                        }),
                          }),
                          (0, r.jsx)(ed.UX, {
                              children: (0, r.jsx)(rz.U, {
                                  premiumSubscription: h ?? null,
                                  onBack: () => null != g && t(g),
                                  handleStepChange: t,
                                  postPurchaseStep: u.pn.CONFIRM,
                                  legalTermsNodeRef: O,
                                  flashLegalTerms: () => y(!0),
                                  analyticsLocation: o,
                                  baseAnalyticsData: a,
                                  flowStartTime: c.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: v ? void 0 : E,
                                  backButtonEligible: !!m || void 0,
                                  invoiceError: N,
                                  disablePurchase: E?.guild_id == null && !v,
                                  onPaymentSourceAdd: b,
                              }),
                          }),
                      ],
                  });
        },
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let {
                    loadId: t,
                    applicationId: n,
                    activeSubscription: i,
                    stepConfigs: s,
                    skuId: a,
                    tenantParams: o,
                    children: l,
                } = e,
                { guildId: u, showBenefitsFirst: c } = o;
            return (0, r.jsx)(y.M, {
                loadId: t,
                applicationId: n,
                activeSubscription: i,
                stepConfigs: s,
                skuIDs: [a],
                unifiedCheckoutFlow: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(rk, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(ii.Qt, { children: l }),
                }),
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let {
                    originalPaymentModalProps: t,
                    renderPaymentModal: n,
                    tenantParams: { forcesTransitionToGuild: i, guildId: r },
                } = e,
                a = t.onClose,
                o = t.onComplete,
                l = s.useCallback(
                    (e) => {
                        a(e),
                            e &&
                                null != r &&
                                (K.hP(),
                                (0, ry.f5)(r),
                                null != o && o(),
                                null != r && (i || rM.A.getGuildId() !== r) && (0, n2.pX)(eo.BVt.CHANNEL(r)));
                    },
                    [a, o, i, r],
                );
            return n({ ...t, onClose: l, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rW, { ...e }) },
};
var rX = n(989553);
function rQ(e) {
    let { handleClose: t } = e,
        n = (0, R.t4)((e) => e.selectedSkuId),
        { application: i } = (0, n_.V)(),
        s = (0, nf.gU)(),
        { isGift: a, giftRecipient: o } = (0, nt.Pv)();
    eE()(null != n, "Expected selectedSkuId"), eE()(null != i, "Expected application");
    let l = s[n];
    eE()(null != l, "Expected sku");
    let u = a
        ? el.intl.formatToPlainString(el.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : el.intl.formatToPlainString(el.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(ed.dZ, {
        children: [
            (0, r.jsx)(nT.A, {}),
            (0, r.jsxs)("div", {
                className: rX.EL,
                children: [
                    (0, r.jsx)(ex.D, { variant: "heading-xxl/bold", className: rX.RS, children: "Success!" }),
                    (0, r.jsx)(eL.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: rX.yF }),
                    (0, r.jsx)(eA.$, { onClick: t, text: el.intl.string(el.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var rJ = n(67480),
    r0 = n(328968),
    r1 = n(371794),
    r2 = n(565756);
u.pn.GIFT_CUSTOMIZATION;
let r3 = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rD, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: eT.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, nt.Pv)(),
                a = (0, R.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
                l = (0, g.bG)([rJ.A], () => (null != a ? rJ.A.get(a) : null), [a]),
                u = nQ(),
                c = (0, g.bG)([r0.A], () => (null != a ? r0.A.getForSKU(a) : null), [a]),
                d =
                    c?.headerBackground != null && l?.applicationId != null
                        ? (0, r1.YE)(l.applicationId, c.headerBackground, 256)
                        : void 0;
            async function _(e, t) {}
            let h = null == i || i.id === o?.id || t.length > es.Jo,
                f = s.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(eT.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: eT.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: r2.P6,
                        children: [
                            l?.name != null &&
                                (0, r.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: l?.name ?? "", className: r2.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: r2.P6,
                        children: [
                            (0, r.jsx)(nK, { recipients: u, selectedSkuId: a, validateSelectedGift: _ }),
                            (0, r.jsx)(nJ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: r2.iX,
                                innerClassName: r2.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: f,
            });
        },
        [u.pn.REVIEW]: tz.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rQ, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var r6 = n(429913),
    r4 = n(733391),
    r5 = n(26594),
    r7 = n(510022),
    r8 = n(317560),
    r9 = n(366523),
    se = n(910200),
    st = n(208733);
function sn(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eV.Ay)(),
        { selectedSkuId: i, entitlementsGranted: a } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: o } = (0, n_.V)(),
        l = (0, nf.gU)(),
        { isGift: u, giftRecipient: c } = (0, nt.Pv)();
    eE()(null != i, "Expected selectedSkuId"), eE()(null != o, "Expected application");
    let d = l[i];
    eE()(null != d, "Expected sku");
    let _ = a.find((e) => e.sku_id === i),
        h = (0, r5.G)(_, { isGift: u });
    return (s.useEffect(() => {
        u || ((0, r8.j)(), t(), (0, r7.n)({ sku: d, application: o, analyticsLocations: n, entitlement: _ }));
    }, [u, d, o, t, n, _]),
    u)
        ? (0, r.jsxs)(ed.dZ, {
              children: [
                  (0, r.jsx)(nT.A, {}),
                  (0, r.jsxs)("div", {
                      className: st.EL,
                      children: [
                          (0, r.jsx)(r9.e, { sku: d, shape: "square", containerClassName: st.LC }),
                          (0, r.jsx)(ex.D, {
                              variant: "heading-xl/semibold",
                              className: st.RS,
                              children: el.intl.string(el.t["5glWta"]),
                          }),
                          (0, r.jsx)(eL.E, {
                              variant: "text-md/normal",
                              children: el.intl.formatToPlainString(el.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != h &&
                              (0, r.jsx)("div", {
                                  className: st.Is,
                                  children: (0, r.jsx)(se.O, { Icon: h.Icon, text: h.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: st.UD,
                              children: (0, r.jsx)(eA.$, {
                                  onClick: t,
                                  text: el.intl.string(el.t.cpT0Cq),
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
n(801541);
var si = n(889137),
    sr = n(742158),
    ss = n(313961),
    sa = n(238017),
    so = n(650588),
    sl = n(117218),
    su = n(763827),
    sc = n(403362),
    sd = n(871123),
    s_ = n(832163),
    sh = n(31969),
    sf = n(44724),
    sp = n(980094),
    sE = n(806931),
    sm = n(107610);
function sg(e) {
    let { handleClose: t, sku: n, application: i } = e,
        a = s.useCallback(() => {
            (0, sf.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        l = s.useCallback(() => {
            t();
            let e = s_.A.getStorefrontState(n.applicationId)?.activePage;
            (0, sd.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, o.closeAllModals)(),
                (0, sf.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: sm.$O,
        children: (0, r.jsx)(eI.Q, {
            text: el.intl.string(el.t.ImioFL),
            onMouseDown: a,
            onClick: l,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let sA = {
    CHECKOUT_FLOW: eT.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: i, disabled: a } = (function (e) {
                    var t;
                    let n,
                        i,
                        a,
                        { handleStepChange: o, handleClose: l } = e,
                        {
                            customGiftMessage: u = "",
                            setCustomGiftMessage: c,
                            giftRecipient: d,
                            emojiConfetti: _,
                            soundEffect: h,
                            setEmojiConfetti: f,
                            setSoundEffect: p,
                            giftingOrigin: E,
                            additionalUserIds: m,
                        } = (0, nt.Pv)(),
                        A = (0, R.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, n_.V)(),
                        T = (0, g.bG)([e0.default], () => e0.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = nQ()),
                            (i = (function (e) {
                                let t = (0, g.bG)([su.A], () => (su.A.isConnected() ? su.A.getChannelId() : null)),
                                    [n, i] = s.useState([]);
                                return (
                                    s.useEffect(() => {
                                        let n = null != t ? ss.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, sE.Xw)(t) && !(0, sE.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, sE.Ay)(e) && !(0, sE.Ay)(t)
                                                ? -1
                                                : (0, sE.Ay)(t) && !(0, sE.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (a = (0, g.yK)([e0.default], () => m?.map(e0.default.getUser).filter(sc.Vq) ?? [], [m])),
                            s.useMemo(
                                () =>
                                    nz().uniqWith(
                                        [...(null != d ? [d] : []), ...a, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, a, i, n],
                            )),
                        y = (0, g.bG)([rJ.A], () => (null != A ? rJ.A.get(A) : null), [A]),
                        { userPrice: C } = (0, sl.CD)({ sku: y, priceSetAssignmentPurchaseType: eo.lid.GIFT }),
                        N = (0, sh.F)("gift_customization", { applicationId: I?.id, skuId: y?.id }),
                        v = (0, sd.fq)(y),
                        O = (0, sd.xf)(y);
                    async function b(e, t) {}
                    let D = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        L = () =>
                            (0, r.jsxs)("div", {
                                className: sm.mT,
                                children: [
                                    null != v &&
                                        (0, r.jsx)(r9.A, {
                                            containerClassName: sm.T3,
                                            cardImage: v,
                                            cardBackgroundImage: O,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: sm._T,
                                        children: [
                                            (0, r.jsx)(so.A, { sound: h, onSelect: D }),
                                            (0, r.jsx)(sa.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        w = () =>
                            (0, r.jsxs)("div", {
                                className: sm.Tc,
                                children: [
                                    null != d && (E === es.vQ.USER_PROFILE_WISHLIST || E === es.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(n1.Z, { giftRecipient: d })
                                        : (0, r.jsx)(nK, { selectedSkuId: A, validateSelectedGift: b, recipients: S }),
                                    (0, r.jsx)(nJ.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: u,
                                        currentText: u,
                                        disableThemedBackground: !0,
                                        className: sm.iX,
                                        innerClassName: sm.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: sm.AN,
                                              children: [
                                                  (0, r.jsx)(sr.z, {
                                                      className: sm.jr,
                                                      children: el.intl.string(el.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: sm.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: sm.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != v &&
                                                                  (0, r.jsx)(r9.A, {
                                                                      containerClassName: sm.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: O,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: sm.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(sp.Q, { application: I }),
                                                                  (0, r.jsx)(eL.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: y.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eL.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != y &&
                                        (0, sd.Ri)(y) &&
                                        (0, r.jsx)(em.w, { type: "info", children: el.intl.string(el.t.lORYb6) }),
                                    null != N &&
                                        (0, r.jsx)(se.O, {
                                            Icon: N.Icon,
                                            text: N.text,
                                            endDatetime: N.endsAt,
                                            tooltip: N.tooltip,
                                        }),
                                    null != y && (0, r.jsx)(sg, { handleClose: l, sku: y, application: I }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: sm.Du, children: [L(), w()] });
                        },
                        getLeftColumnComponent: L,
                        getRightColumnComponent: w,
                        onStepChange: o,
                        onBackClick: l,
                        disabled: null == d || d.id === T?.id || u.length > es.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = s.useMemo(() => ({ disabled: a }), [a]);
            return (0, r.jsx)(eT.Mw, {
                paymentModalStepProps: e,
                layout: eT.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: o,
            });
        },
        [u.pn.REVIEW]: tz.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(sn, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: a, isGift: o, skuId: l, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, r6.h)(t);
                    s.useEffect(() => {
                        null == i ||
                            null == n ||
                            r0.A.isFetchingForSKU(n) ||
                            null != rJ.A.get(n) ||
                            (0, r4.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: a, skuId: l }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [l],
                    purchaseType: ta.VV.ONE_TIME,
                    isGift: o,
                    ...u,
                    activeSubscription: null,
                    children: t,
                })
            );
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
            return n({ ...t, analyticsObject: t.analyticsSourceLocation });
        },
        tenantAnalyticsLocation: T.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, si.YW)(t)
                .with(u.pn.GIFT_CUSTOMIZATION, () => el.intl.string(el.t["JCFN/y"]))
                .with(u.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => el.intl.string(el.t.lDbi6H))
                .with(u.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(t9.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var sI = n(46225),
    sT = n(587895),
    sS = n(944355),
    sy = n(977445),
    sC = n(211287),
    sN = n(623373),
    sv = n(739508),
    sR = n(715054);
(0, a.A)();
var sO = n(136857),
    sb = n(158317),
    sD = n(855104);
n(322076);
var sL =
        (((i = {})[(i.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (i[(i.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (i[(i.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (i[(i.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (i[(i.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (i[(i.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (i[(i.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (i[(i.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (i[(i.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (i[(i.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (i[(i.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (i[(i.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (i[(i.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (i[(i.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        i),
    sw = n(318254),
    sM = n(576052),
    sP = n(120992),
    sx = n(194256),
    sk = n(319820),
    sU = n(200766);
function sG(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: s } = (0, sk.AO)({ sku: t }),
        a = (0, sx.oO)(i);
    s ? (a = el.intl.string(to.default.qwSlCO)) : (0, sN.Ab)(i) && (a = el.intl.string(el.t["0TmQRG"]));
    let o = (0, sx.dL)(t),
        l = (0, na.EZ)(t.id) ? sM.m[t.id].render({ className: sU.$ }) : (0, r.jsx)(tn.WH, { sku: t, product: i });
    return (0, r.jsx)(tn.f7, { label: o, description: a, graphic: l, price: null != n ? `${n}` : "", PriceIcon: sw.C });
}
function sF(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, sP.c)({ applicationId: (0, d.P)(t), skuIDs: [t] });
    let i = (0, nc.bG)([rJ.A], () => rJ.A.get(t), [t]);
    return null == i
        ? (0, r.jsx)(eG.y, { type: eG.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(sG, { sku: i, orbPriceAmount: n });
}
function sV(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(sS.vW, { label: el.intl.string(el.t.y0WGqP), value: null != t ? `${t}` : "", Icon: sw.C });
}
function sB() {
    return el.intl.string(el.t.wmcDyu);
}
function sj(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, e9.U)(),
        i = (function (e) {
            let { skuId: t } = e,
                n = sB(),
                i = (0, g.bG)([rJ.A], () => rJ.A.get(t), [t]),
                r = i?.productLine,
                s = i?.applicationId,
                a = (0, g.bG)([sT.A], () => (r === eo.EZt.SOCIAL_LAYER_GAME_ITEM ? sT.A.getApplication(s) : null), [
                    s,
                    r,
                ]),
                { fetched: o, hasAlreadyLinked: l } = (0, sI.RD)(a);
            return r !== eo.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: sS.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: sS.I0.GiftGameShop,
                      purchaseButtonText: n,
                      applicationName: a?.name,
                      applicationId: s,
                      shouldAppendDisclaimer: o && !l,
                  };
        })({ skuId: t });
    return (0, r.jsx)(sS._P, { variant: i, paymentSourceType: null, immediateDelivery: n });
}
let sH = (0, s.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    analyticsSourceLocation: void 0,
});
function sY() {
    return (0, s.useContext)(sH);
}
let sW = { payment_gateway: ta.kM.VIRTUAL_CURRENCY, currency: eo.Yri.DISCORD_ORB },
    sK = {
        CHECKOUT_FLOW: eT.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        skuId: l,
                        analyticsSourceLocation: c,
                    } = sY(),
                    { primaryButtonProps: h, ...p } = (function (e) {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: a,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: c,
                            } = e,
                            { enabled: h } = sC.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: p, orderOrbPriceAmount: E } = (0, R.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: m,
                                orbPriceAmount: A,
                                orbBalanceToDisplay: I,
                                onClickCheckout: T,
                                showCollectiblesDiscountWarning: y,
                                errorMessage: C,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: i,
                                        orbProductContext: r,
                                        analyticsSourceLocation: a,
                                        handleStepChange: o,
                                    } = e,
                                    { analyticsLocations: l } = (0, eV.Ay)(),
                                    {
                                        selectedSkuId: c,
                                        setPurchaseState: h,
                                        firstConstraintReasonCode: p,
                                    } = (0, R.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    E = (0, sD.gN)(),
                                    m = (0, s.useRef)(E),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = (function (e) {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: a } = (0, n_.V)(),
                                            { hasPaymentSources: o } = (0, il.jm)(),
                                            {
                                                loadId: l,
                                                startTime: c,
                                                discoverySessionId: h,
                                            } = (0, R.t4)((e) => e.contextMetadata),
                                            p = (0, s.useMemo)(
                                                () => ({
                                                    load_id: l,
                                                    discovery_session_id: h,
                                                    application_id: (0, d.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: a,
                                                    payment_gateway: ta.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eo.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: eo.frM[eo.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: f.r.UNIFIED,
                                                        checkout_flow: S.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [l, h, a, t, i, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, s.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - c;
                                                    e === eo.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(eo.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...p,
                                                              has_saved_payment_source: o,
                                                              payment_gateway: ta.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eo.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(eo.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...p,
                                                                has_saved_payment_source: o,
                                                                initial_step: u.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eo.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(eo.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...p,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eo.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(eo.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...p,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eo.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(eo.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(eo.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [c, p, o],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: l,
                                        analyticsSourceLocation: a,
                                    });
                                (0, s.useEffect)(() => {
                                    null != i &&
                                        null !== m.current &&
                                        (g(eo.HAw.PAYMENT_FLOW_FAILED, i), (m.current = null));
                                }, [i, g]);
                                let A = (0, s.useCallback)(() => {
                                        (m.current = E),
                                            g(eo.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                h(D.h.COMPLETED), o(u.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, h, E, g, o]),
                                    I = m.current ?? E,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, nV.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, s.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof sb.FY && null != t)
                                                    switch (t) {
                                                        case sL.INSUFFICIENT_ORB_BALANCE:
                                                            return el.intl.string(el.t.keFvXM);
                                                        case sL.SKU_ALREADY_OWNED:
                                                            return el.intl.string(el.t.m371Mx);
                                                        case sL.BUNDLE_PARTIALLY_OWNED:
                                                            return el.intl.string(el.t.v9oC0p);
                                                        default:
                                                            return el.intl.string(el.t.fqJZ11);
                                                    }
                                                return e instanceof sb.j2
                                                    ? el.intl.string(el.t["2BmwgV"])
                                                    : e.code === sO.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? el.intl.string(el.t.keFvXM)
                                                      : e.code === sO.tG.ALREADY_PURCHASED
                                                        ? el.intl.string(el.t.m371Mx)
                                                        : e.code === sO.tG.BILLING_ORDER_NOT_SIGNABLE
                                                          ? el.intl.string(el.t.ZHgEG7)
                                                          : el.intl.string(el.t.fqJZ11);
                                            })(i, p),
                                        [i, p],
                                    ),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: A,
                                    selectedSkuId: c,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: c,
                            }),
                            N = (0, g.bG)([rJ.A], () => rJ.A.get(t), [t]),
                            v = (0, sy.uS)(N?.applicationId),
                            {
                                disabled: O,
                                tooltipText: b,
                                text: L,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, s.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: el.intl.string(el.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: el.intl.string(el.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: a, text: sB() };
                            })({ orbBalance: I, orbPriceAmount: h ? p : A, isInTestMode: v }),
                            w = (0, s.useMemo)(
                                () => ({ onClick: T, loading: a, text: L, disabled: O, tooltipText: b }),
                                [T, a, L, O, b],
                            ),
                            M = y ? el.intl.format(el.t.fsOXXO, {}) : null,
                            P = v ? el.intl.string(el.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, s.useMemo)(() => {
                                if (null != P || null != M || null != C) {
                                    let e = [];
                                    return (
                                        null != P &&
                                            e.push({ type: "warning", message: P, key: "test-mode-warning-notice" }),
                                        null != M &&
                                            e.push({ type: "warning", message: M, key: "orb-checkout-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [P, M, C]),
                            purchaseItemContent: (0, r.jsx)(sF, { skuId: t, orbPriceAmount: h ? E : A }),
                            paymentMethodContent: (0, r.jsx)(sV, { orbBalance: I }),
                            legalContent: (0, r.jsx)(sj, { skuId: t }),
                            primaryButtonProps: w,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: l,
                        analyticsSourceLocation: c,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ed.dZ, { children: (0, r.jsx)(e8.T, { ...p }) }),
                        (0, r.jsx)(ed.UX, { children: (0, r.jsx)(v.lo, { primaryButtonProps: h }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: a } = e,
                    { order: o, setOrder: l } = (0, R.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: _,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: a } = e,
                            o = (0, g.bG)([e0.default], () => e3.Ay.canUseShopDiscounts(e0.default.getCurrentUser())),
                            l = (0, g.bG)([rJ.A], () => rJ.A.get(t), [t]),
                            u = (0, sl.JL)({ sku: l }),
                            { product: c } = (0, nM.q)(t),
                            d = (0, s.useMemo)(() => {
                                if (null != u) return { orbPriceAmount: u.amount };
                                if (null != c) {
                                    let e = (0, sN.CW)({ product: c, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [u, c, o]);
                        d?.orbPriceAmount == null &&
                            (0, sv.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, sR.Q)({ skuId: t, loadId: n, order: a, onSignFailure: r }),
                            p = (0, s.useCallback)(
                                (e) => {
                                    _(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, _, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: d,
                            onRedeemVirtualCurrency: p,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: l }),
                    h = (0, s.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: _,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [u, c, d, _, t, i],
                    );
                return (0, r.jsx)(sH.Provider, { value: h, children: a });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = sY(),
                    r = (function (e) {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, s.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: i, overrideAnalyticParams: sW });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: sW,
        },
    },
    s$ = {
        [h.C.ORB_CHECKOUT]: {
            flowType: h.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eo.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sK,
        },
        [h.C.COLLECTIBLES_CHECKOUT]: {
            flowType: h.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eo.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ie,
        },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eo.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sA,
        },
        [h.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_CHECKOUT,
            purchaseType: eo.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rS,
        },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eo.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: r3,
        },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: eo.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rZ,
        },
        [h.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: eo.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t8,
            flowType: h.C.GUILD_PRODUCT_CHECKOUT,
        },
        [h.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: iO,
            purchaseType: eo.VVm.SUBSCRIPTION,
        },
        [h.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_BOOST_CHECKOUT,
            purchaseType: eo.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: t$,
        },
    };
var sz = n(735305);
function sq(e) {
    let { returnStep: t = u.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
        { purchaseType: a } = (0, R.t4)((e) => ({ purchaseType: e.purchaseType })),
        o = s.useCallback(
            () =>
                (function (e) {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = u.pn.REVIEW,
                        returnStepIfNoPaymentSources: i,
                        purchaseType: r,
                    } = e;
                    if (0 === Object.keys(q.A.paymentSources).length) {
                        if (null != i) return void t.handleStepChange(i);
                        r === ta.VV.SUBSCRIPTION
                            ? t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS })
                            : t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: a }),
            [t, n, i, a],
        );
    return (0, r.jsx)(sz.x, { ...i, onReturn: o });
}
function sZ(e) {
    let { initialPlanId: t } = e,
        n = (0, R.t4)((e) => e.selectedSkuId),
        i = (0, C.A)(),
        { isGift: a, claimableRewards: o } = (0, nt.Pv)(),
        l = ru({ isGift: a, skuId: n }),
        c = (0, iq.lp)(l),
        d = (0, id.px)(i, a, o),
        _ = s.useMemo(() => {
            let e = null == t ? u.pn.PLAN_SELECT : u.pn.REVIEW;
            return c && (e = u.pn.REVIEW), d && (e = u.pn.SELECT_FREE_SKU), e;
        }, [c, d, t]);
    return (0, r.jsx)(sq, { paymentModalStepProps: e, returnStep: u.pn.REVIEW, returnStepIfNoPaymentSources: _ });
}
function sX(e) {
    let { checkoutFlow: t, returnStep: n = u.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: s } = e;
    return t === h.C.PREMIUM_CHECKOUT
        ? (0, r.jsx)(sZ, { ...s })
        : (0, r.jsx)(sq, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
}
var sQ = n(339048),
    sJ = n(469778),
    s0 = n(315949),
    s1 = n(599062);
function s2() {
    let { refreshCategories: e } = (0, s0.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t9.rQ, { title: el.intl.string(el.t["p8+qtU"]) }),
            (0, r.jsx)(B.c, { children: (0, r.jsx)(s1.h, { onRetry: e, errorOrigin: s1.A.GIFT_MODAL }) }),
        ],
    });
}
function s3(e) {
    let { handleStepChange: t } = e,
        n = (0, R.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: a } = (0, il.jm)(),
        { application: o } = (0, n_.V)(),
        l = (0, j.Hp)(),
        c = (0, nf.gU)(),
        d = (0, nf.Hu)(),
        { isGift: _ } = (0, nt.Pv)(),
        [h, f] = s.useState(!0),
        [p, E] = (0, nc.yK)([np.A], () => [np.A.isFetchingCategories, np.A.error]);
    return (s.useEffect(() => {
        let e = null != o;
        d && a && e && f(p);
    }, [d, a, o, p]),
    s.useEffect(() => {
        if (h || l || null == n) return;
        let e = c[n];
        _ &&
        (e?.productLine === eo.EZt.COLLECTIBLES ||
            e?.productLine === eo.EZt.APPLICATION ||
            e?.productLine === eo.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(u.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(u.pn.ADD_PAYMENT_STEPS)
              : t(u.pn.REVIEW);
    }, [h, l, t, i, _, c, n]),
    h)
        ? (0, r.jsx)(W.A, {})
        : l
          ? (0, r.jsx)(H.oO, {})
          : null != E
            ? (0, r.jsx)(s2, {})
            : null;
}
function s6(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: a } = e,
        { hasPaymentSources: o } = (0, il.jm)(),
        {
            selectedSkuId: l,
            setSelectedPlanId: c,
            activeSubscription: d,
            defaultPlanId: _,
            startedPaymentFlowWithPaymentSources: h,
        } = (0, R.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        f = (0, j.Hp)(),
        p = $(),
        { hasFetchedRelatedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m } = (0, Y.Jn)(),
        { isGift: g } = (0, nt.Pv)(),
        A = ru({ isGift: g, skuId: l }),
        I = !p || !E || m,
        T = (0, nc.bG)([sJ.A], () => sJ.A.applicationIdsFetched.has(es.tv));
    return (iX(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m },
        { tags: { app_context: "billing" } },
    ),
    s.useEffect(() => {
        if ((T || (0, sQ.LM)(es.tv), I || f)) return;
        let e = (0, iq.vT)({ isTrial: A, isGift: g, selectedSkuId: l, startedPaymentFlowWithPaymentSources: h });
        null != a
            ? i(u.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: a })
            : null != n
              ? n !== es.gD.PREMIUM_GROUP_MONTH || o
                  ? i(u.pn.REVIEW)
                  : i(u.pn.ADD_PAYMENT_STEPS)
              : e
                ? (c((0, iq.xT)(l, d, _)), i(u.pn.REVIEW))
                : null != t
                  ? i(u.pn.PLAN_SELECT)
                  : i(u.pn.SKU_SELECT);
    }, [a, d, f, T, n, I, i, t, l, c, A, _, g, h, o]),
    I)
        ? (0, r.jsx)(W.A, {})
        : f
          ? (0, r.jsx)(H.oO, {})
          : null;
}
var s4 = n(891197),
    s5 = n(293035);
function s7() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i8.A, {}), (0, r.jsx)(ed.dZ, { children: (0, r.jsx)(s4.N, { className: s5.D }) })],
    });
}
var s8 = n(830382),
    s9 = n(349288),
    ae = n(94204);
function at(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: ae.a,
            children: [
                (0, r.jsx)(ex.D, { variant: "heading-xl/bold", children: el.intl.string(el.t.Q03WWV) }),
                (0, r.jsxs)("p", {
                    children: [
                        (0, r.jsx)(eL.E, { variant: "text-md/normal", children: el.intl.string(el.t.BxPxhI) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(eL.E, { variant: "text-md/normal", children: el.intl.string(el.t.Y3fdOp) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(eL.E, {
                            variant: "text-md/normal",
                            children: [
                                el.intl.string(el.t.Paa4v4),
                                "\xa0",
                                n
                                    ? el.intl.string(el.t.StGVvC)
                                    : (0, r.jsx)(s9.Anchor, { onClick: i, children: el.intl.string(el.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function an() {
    let e = s.useMemo(() => [{ variant: "primary", text: el.intl.string(el.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(iY.H, { actions: e });
}
var ai = n(599961);
function ar() {
    let [e, t] = s.useState(!1);
    async function n() {
        t(!0), await (0, s8.lo)();
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i8.A, {}),
            (0, r.jsx)(ed.dZ, { children: (0, r.jsx)(at, { className: ai.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(ed.UX, { children: (0, r.jsx)(an, {}) }),
        ],
    });
}
let as = { key: null, renderStep: (e) => (0, r.jsx)(s3, { ...e }), options: { modalSizeGetter: () => "md" } },
    aa = { key: null, renderStep: (e) => (0, r.jsx)(s6, { ...e }) },
    ao = [
        { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(ar, {}) },
        { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(s7, {}), options: { renderHeader: !0 } },
    ];
function al(e) {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        i = (0, s.useRef)(!1),
        a = (0, j.Hp)(),
        { handleStepChange: o } = t;
    return ((0, s.useEffect)(() => {
        a || i.current || (o(n), (i.current = !0));
    }, [a, o, n]),
    a)
        ? (0, r.jsx)(H.oO, {})
        : null;
}
let au = {
        [h.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [h.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [h.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    ac = (0, s.lazy)(() =>
        Promise.all([n.e("11005"), n.e("54791"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    ad = (e) => (0, r.jsx)(ac, { ...e });
class a_ {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = s$[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = au[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e)
            return (t) => {
                let { handleClose: n, step: i } = t;
                return (0, r.jsx)(e, { onClose: n, step: i });
            };
    }
    getPredicateStepConfig() {
        let { CustomCheckoutPredicateStep: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: (t) => (0, r.jsx)(e, { ...t }) }
            : "one_time_payment" === t
              ? as
              : "subscription" === t
                ? aa
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(al, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(sX, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: u.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? u.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(u.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != i)
            return {
                key: u.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => el.intl.string(el.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => el.intl.string(el.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: i = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            s = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            l = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : ao), l]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? eo.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? es.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: i,
            applicationId: r,
            discoverySessionId: s,
            analyticsLocation: a,
            analyticsLocations: o,
            analyticsObject: l,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        _.default.track(eo.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: eo.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: i,
            application_id: r,
            location: a ?? l,
            location_stack: o,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: f.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: eo.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: i, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: _,
                    discoverySessionId: f,
                    applicationId: p,
                    activeSubscription: E,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: g, analyticsSourceLocation: A },
                forwardedPaymentModalProps: { analyticsObject: I, ...T } = {},
                tenantParams: S,
            } = e,
            y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            C = arguments.length > 2 ? arguments[2] : void 0,
            N = { current: (this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? (0, c.A)() : null) ?? (0, a.A)() },
            R = { current: null },
            { modalKey: O } = C,
            b = this.generateRenderHeader(),
            D = p ?? this.getApplicationId(d),
            L = !!(null != t && t.isGift),
            w = !1,
            M = {
                ...T,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: L }),
                onComplete: (e) => {
                    null != i && i(e), (w = !0);
                },
                onClose: u,
                renderHeader: b,
                skuId: d ?? null,
                tenantParams: S ?? {},
                loadId: N.current,
                onOrderCreated: function (e) {
                    (N.current = e.id), (R.current = e);
                },
                discoverySessionId: f,
                activeSubscription: E ?? null,
                applicationId: D,
                analyticsLocations: g,
                analyticsObject: I,
                analyticsSourceLocation: A,
                giftContextProps: t,
            };
        if ("modal" === y)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("11005"),
                        n.e("54791"),
                        n.e("25246"),
                        n.e("33319"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...M, renderModalProps: t });
                },
                {
                    ...C,
                    onCloseRequest: () => {
                        null != C.onCloseRequest && C.onCloseRequest(w, N.current),
                            C.skipCloseModalOnCloseRequest || (0, o.closeModal)(O);
                    },
                    onCloseCallback: () => {
                        w ||
                            (m({ checkoutSucceeded: w, order: R.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: N.current,
                                skuId: d,
                                skuProductLine: _,
                                applicationId: D,
                                discoverySessionId: f,
                                analyticsLocation: T.analyticsLocation,
                                analyticsLocations: g,
                                analyticsObject: I,
                                analyticsSourceLocation: A,
                                isGift: L,
                                eligibleForTrial: null != T.trialId,
                            })),
                            null != C.onCloseCallback && C.onCloseCallback(w),
                            null != u && u(w, d);
                    },
                    modalKey: O,
                },
            );
        {
            let e = T.paymentModalOnClose ?? u,
                t = { transitionState: l.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(s.Suspense, {
                fallback: (0, r.jsx)(v.Jg, {
                    transitionState: l.ip.ENTERED,
                    onClose: eo.tEg,
                    size: "md",
                    isModalContentLoading: !0,
                }),
                children: (0, r.jsx)(ad, { ...M, paymentModalOnClose: e, renderModalProps: t }),
            });
        }
    }
    openCheckoutModal(e) {
        let { modalAPIOptions: t } = e;
        return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e) {
        return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" });
    }
}
