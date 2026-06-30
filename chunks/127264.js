"use strict";
n.d(t, { o: () => aC }), n(321073);
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
    C = n(211083),
    N = n(558620),
    v = n(584160),
    R = n(480642),
    O = n(46332),
    b = n(832286),
    D = n(958340),
    L = n(566980),
    w = n(615310),
    M = n(489254),
    P = n(251913),
    x = n(71393),
    k = n(178368),
    U = n(166403),
    G = n(473145),
    F = n(802790),
    V = n(636441),
    B = n(587491),
    j = n(285753),
    H = n(430993),
    Y = n(86379),
    W = n(545075),
    K = n(655857),
    $ = n(534479),
    z = n(277984);
function q() {
    let e = (0, g.bG)([U.A], () => U.A.hasFetchedSubscriptions());
    return (
        s.useEffect(() => {
            e || (0, z.hP)();
        }, [e]),
        e
    );
}
var Z = n(61299),
    X = n(295405),
    Q = n(786300);
let [J, ee, et] = (0, Q.A)();
function en(e) {
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
        I = (0, A.A)(() => (0, G.D$)(k.A.boostSlots).length),
        T = (0, O.t4)((e) => e.activeSubscription),
        S = (0, g.bG)([U.A], () => U.A.hasFetchedSubscriptions()),
        y = (0, g.bG)([X.A], () => X.A.defaultPaymentSourceId),
        C = null != T ? T.paymentSourceId : null,
        N = (0, Z._V)(null != C ? C : S ? y : null);
    return (0, r.jsx)(J.Provider, {
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
var ei = n(160946),
    er = n(253390),
    es = n(97352),
    ea = n(615396),
    eo = n(788868);
function el() {
    let e = (0, O.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = ee(),
        n = (0, g.bG)([es.A], () => null == e || null != es.A.get(e.planId)),
        i = (0, ei.Y)(),
        r = (0, g.bG)([es.A], () => (null != e ? (0, ea.c9)(e.planId) : null)),
        a = s.useMemo(
            () => (null != e && n && i ? (0, er.v)(e, t) : [{ planId: eo.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        o = s.useMemo(
            () =>
                a.find((e) => {
                    let { planId: t } = e;
                    return eo.pW.has(t);
                })?.planId ?? eo.gD.PREMIUM_MONTH_GUILD,
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
var eu = n(652215),
    ec = n(375708),
    ed = n(898640);
function e_(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.s3, { title: ec.intl.string(ec.t.q9EGps) }),
            (0, r.jsx)(H.c, { children: (0, r.jsx)("p", { className: ed.C, children: t }) }),
        ],
    });
}
var eh = n(482132),
    ef = n(216641),
    ep = n(879100);
function eE(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: i, paymentModalArgs: s, existingAvailableSlotCount: a } = ee(),
        {
            activeSubscription: o,
            startingFractionalPremiumEndsAt: l,
            customCheckoutFlow: u,
            paymentSourceId: c,
        } = (0, O.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        d = (0, g.bG)([D.A], () => (null != n ? D.A.getGuild(n) : void 0), [n]),
        _ = null != n ? x.A.getGuild(n) : null,
        h = (0, A.A)(() => (0, ea.b2)(l)),
        f = (0, g.bG)([es.A], () => (null != o ? (0, ea.c9)(o.planId) : null)),
        { paymentSources: p } = s,
        E = (0, ef.g)(p, c),
        m = null != _ ? _.name : null != d ? d.name : void 0,
        I = h && null != f && !eo.YV.has(f.id);
    return (0, r.jsx)(eh.dZ, {
        children: (0, r.jsx)(ep.W, {
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
var em = n(284009),
    eg = n.n(em),
    eA = n(683071),
    eI = n(512950),
    eT = n(821609),
    eS = n(123292),
    ey = n(529427),
    eC = n(87719);
let eN = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ev = n(503698),
    eR = n.n(ev),
    eO = n(661531),
    eb = n(990078),
    eD = n(408278),
    eL = n(834040),
    ew = n(499373),
    eM = n(834730),
    eP = n(403581),
    ex = n(663803),
    ek = n(320448),
    eU = n(534514),
    eG = n(104510),
    eF = n(695366),
    eV = n(289873),
    eB = n(726656),
    ej = n(688810),
    eH = n(531260),
    eY = n(666646),
    eW = n(404374),
    eK = n(543767),
    e$ = n(881489),
    ez = n(477421),
    eq = n(234419),
    eZ = n(363476),
    eX = n(531506),
    eQ = n(51465);
function eJ() {
    return (0, r.jsxs)("div", {
        className: eR()(eQ.dt, eQ.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eQ.qq,
            }),
            (0, r.jsx)(eM.E, {
                variant: "text-sm/medium",
                className: eQ.tD,
                children: ec.intl.format(ec.t.f5VHKm, {}),
            }),
        ],
    });
}
function e0(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: eQ.dt,
        children: [(0, r.jsx)(eP.t, { size: "md", className: eQ.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var e1 = n(773669),
    e2 = n(287809),
    e3 = n(975571),
    e6 = n(252424),
    e4 = n(428262),
    e5 = n(580630),
    e7 = n(155718),
    e8 = n(606267),
    e9 = n(376843),
    te = n(38785),
    tt = n(818824),
    tn = n(596034),
    ti = n(848584),
    tr = n(241989),
    ts = n(888751),
    ta = n(874638),
    to = n(458785),
    tl = n(818348),
    tu = n(327105),
    tc = n(7921);
function td(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: s,
            currency: a,
            startDate: o,
        } = e,
        { immediateDelivery: l } = (0, tt.U)();
    return (0, r.jsx)(tn._, {
        variant: {
            type: tn.I.Subscription,
            purchaseButtonText: ec.intl.string(ec.t.eUEeCt),
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
function t_(e) {
    return ec.intl.format(ec.t.IeaYqg, { endDate: e });
}
function th(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: tc.bU }),
            (0, r.jsx)(eM.E, { variant: "text-sm/normal", className: tc.b7, children: t }),
            (0, r.jsx)("div", { className: tc.bU }),
        ],
    });
}
function tf(e) {
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
                label: ec.intl.formatToPlainString(ec.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, e4.Mn)(n.id, !1, i),
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
            label: ec.intl.formatToPlainString(ec.t.ZSVged, { planName: (0, e4.RH)(i[0].subscriptionPlanId) }),
            tooltip: ec.intl.string(ec.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            l.push({
                id: "guild-boosting-adjustment",
                label: ec.intl.string(ec.t["+as5ZZ"]),
                tooltip: ec.intl.string(ec.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && l.push({ id: "tax", label: ec.intl.string(ec.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, ts.EA)({ id: "main-line-item", amount: t, ...o }),
        d = [...u, ...l];
    return (0, r.jsx)(ti.Vm, {
        defaultExpanded: !0,
        label: ec.intl.string(tu.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tp(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: s } = e;
    return null != n
        ? (0, r.jsx)(to.m0, { proratedInvoice: i, renewalInvoice: s, isUpdate: t })
        : (0, r.jsx)(to.m0, { renewalInvoice: s });
}
function tE(e) {
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
                o = (0, g.bG)([x.A, D.A], () => {
                    let e = x.A.getGuild(n);
                    return null != e ? e : D.A.isGuildFetching(n) ? null : D.A.getGuild(n);
                }, [n]),
                l = s.interval,
                u = s.intervalCount,
                c = (0, g.bG)([es.A], () => es.A.getForSkuAndInterval((0, e4.mH)(eo.pe.GUILD), l, u));
            eg()(null != c, "Missing guildBoostingSubscriptionPlan");
            let d = (0, e4.J$)(i.paymentSourceId),
                _ = (0, e$.ds)();
            t = null != r ? (0, e4.Om)(r, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: h } = (0, ej.Ay)(),
                [f, p] = (0, eK.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E, m] = (0, eK.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: T.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eY.OQ)({
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
        I = (0, e8.A)({ location: "GuildBoostReview", message: ec.intl.string(tu.default["tK8A/8"]) });
    if (null == m || null == A || null == f) return (0, r.jsx)(te.E, {});
    let S = (0, r.jsx)(tp, {
            isSubscriptionUpdate: h,
            premiumSubscription: s,
            checkoutInvoicePreview: m,
            renewalInvoicePreview: A,
        }),
        y = (0, r.jsx)(e9.n, {
            setPaymentSourceId: c,
            paymentSourceId: u,
            location: "GuildBoostReview",
            label: ec.intl.string(ec.t["u+Cw58"]),
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
                paymentSourceType: (0, ef.g)(s, a),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: r.total,
                currency: r.currency,
                startDate: (0, to.de)({ isSubscriptionUpdate: t, currentInvoice: r, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: A,
            checkoutInvoicePreview: m,
            paymentSources: n,
            paymentSourceId: u,
        }),
        N = (0, r.jsx)(td, { ...C }),
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
                return (0, ta.Z)(i.invoiceItems).find((t) => eo.pW.has(t.subscriptionPlanId) && e(t));
            }
            let h = _((e) => e.amount >= 0);
            eg()(null != h, "Missing guild boosting invoice item");
            let f = _((e) => e.amount < 0),
                p = null != f ? h.quantity - f.quantity : h.quantity,
                E = i.invoiceItems.filter((e) => (0, e4.xq)(e.subscriptionPlanId)),
                m = E.reduce((e, t) => e + t.amount, 0),
                g = (0, eK.sL)(h) * p,
                A = (0, e5.$g)(g, i.currency),
                I = (0, e5.CE)(A, c, d),
                T = (0, e5.$g)(i.total, i.currency) + (i.currency !== tl.Yr.USD ? "*" : ""),
                S = i.subtotal - g - m,
                y = h.discounts.map((e) => {
                    let t = e.amount / h.quantity;
                    return { ...e, amount: t * p };
                }),
                C = y.find((e) => e.type === e7.iS.SUBSCRIPTION_PLAN),
                N = y.find((e) => e.type === e7.iS.ENTITLEMENT),
                v = h.subscriptionPlanPrice * p;
            return {
                addedQuantity: p,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: l,
                isReverseTrial: u,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, e5.CE)((0, e5.$g)(v, i.currency), c, d),
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
        R = (0, r.jsx)(tf, { ...v }),
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
                label: ec.intl.formatToPlainString(ec.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, e4.Mn)(s.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, r.jsx)(tr.a6, {}),
                price: o,
                PriceIcon: c ? eP.t : void 0,
                priceTooltip: c ? ec.intl.string(tu.default.YUNJJa) : void 0,
                priceSubText: c ? l : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            f,
            v,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: t_(i.currentPeriodEnd) } : null;
            })({ isPrepaid: p, isReverseTrial: E, premiumSubscription: s }),
        ),
        b = (0, r.jsx)(tr.f7, { ...O });
    return (0, r.jsx)(te.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        purchaseItemContent: b,
        subscriptionDetailsContent: S,
        paymentMethodContent: y,
        invoiceSummaryContent: R,
        legalContent: N,
        invoiceTotalDueValue: v.formattedTotal,
        invoiceTotalDueLabel: ec.intl.string(tu.default.R0cZsM),
    });
}
var tm = n(406263);
function tg(e) {
    return "" === e || "-" === e;
}
function tA(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = s.useState(t);
    s.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof l;
    function d(e) {
        u(e), tg(e) || n(e);
    }
    return (0, r.jsxs)("div", {
        className: tm.U$,
        children: [
            (0, r.jsx)(eD.K, {
                variant: "secondary",
                size: "md",
                icon: eL.Q,
                onClick: () => {
                    c && !(l <= i) && d(l - 1);
                },
                "aria-label": ec.intl.string(ec.t["k+ohJm"]),
                disabled: !c || l <= i,
            }),
            (0, r.jsx)("div", {
                className: tm.WJ,
                children: (0, r.jsx)("input", {
                    className: tm.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        (function (e) {
                            if (tg(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        tg(l) && u(t);
                    },
                }),
            }),
            (0, r.jsx)(eD.K, {
                variant: "secondary",
                size: "md",
                icon: ew.T,
                onClick: () => {
                    c && !(l >= a) && d(l + 1);
                },
                "aria-label": ec.intl.string(ec.t.w8Sc4B),
                disabled: !c || l >= a,
            }),
        ],
    });
}
function tI(e) {
    let { message: t } = e;
    return (0, r.jsx)(eM.E, { variant: "text-xs/normal", color: "text-muted", className: tm.jH, children: t });
}
function tT(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: tm.Vk,
        children: [
            (0, r.jsx)("div", {
                className: tm.D0,
                children: (0, r.jsx)(eP.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: tm.ue,
                    color: eW.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: tm.yP, children: t }),
        ],
    });
}
function tS(e) {
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
                className: tc.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: tc.E6,
                        children: [
                            (0, r.jsx)(ex.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: tc.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: tc.$0, children: a }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eR()(tc.QK, { [tc.S]: t }), children: o }),
                ],
            }),
            (0, r.jsx)("div", { className: tc.J3 }),
            (0, r.jsxs)("div", {
                className: tc.mP,
                children: [
                    (0, r.jsx)(eM.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: ec.intl.string(ec.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", {
                        className: eR()(tc.__invalid_planSelectorSubtotalPrice, { [tc.S]: t }),
                        children: l,
                    }),
                ],
            }),
            E.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function ty(e) {
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
        className: tm.xY,
        children: [
            h,
            (0, r.jsxs)("div", {
                className: tm.K3,
                children: [
                    (0, r.jsx)(eM.E, {
                        variant: "text-md/medium",
                        className: tm.bk,
                        children: ec.intl.string(ec.t["r+SebU"]),
                    }),
                    (0, r.jsx)(ek._, { className: tm.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(eM.E, { variant: "text-md/medium", className: tm.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, r.jsxs)("div", {
                className: tm.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: tm.fX,
                        children: [
                            (0, r.jsx)(tA, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(eM.E, { variant: "text-md/medium", className: tm.ny, children: o }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eR()(tm.El, { [tc.S]: t }), children: l }),
                ],
            }),
            E,
            (0, r.jsxs)("div", {
                className: tm.fh,
                children: [
                    (0, r.jsx)(eU.D, {
                        variant: "heading-lg/semibold",
                        className: tm.O3,
                        children: ec.intl.string(ec.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: eR()(tm.BU, { [tc.S]: t }), children: c }),
                ],
            }),
            g.map((e, t) => (0, r.jsx)(s.Fragment, { children: e }, t)),
        ],
    });
}
function tC(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, r.jsxs)("div", {
        className: tc.Mv,
        children: [
            (0, r.jsx)(eG._, { className: tc.T5, color: eO.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    ec.intl.format(ec.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, r.jsx)(eb.m, {
                              text: ec.intl.formatToPlainString(ec.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(eF.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: tc.Y5,
                                  color: eO.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tN(e) {
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
            refreshNextStepLabel: h = ec.intl.string(ec.t.QBnNHq),
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
                    ((t = (0, g.bG)([U.A], () => U.A.getPremiumTypeSubscription())),
                    (0, g.bG)([X.A], () =>
                        t?.paymentSourceId != null ? X.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                f = i.interval,
                p = i.intervalCount,
                E = (0, g.bG)([es.A], () => es.A.getForSkuAndInterval((0, e4.mH)(eo.pe.GUILD), f, p)),
                m = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
                A = (0, eH.A)({ forceFetch: !1 });
            eg()(null != E, "Missing guildBoostingSubscriptionPlan");
            let I = [{ planId: E.id, quantity: 1 }],
                S = l?.items.find(
                    (e) => e.planId === eo.gD.PREMIUM_MONTH_TIER_2 || e.planId === eo.gD.PREMIUM_YEAR_TIER_2,
                );
            null != S && I.push(S);
            let y = l?.items.find(
                    (e) => e.planId === eo.gD.PREMIUM_MONTH_GUILD || e.planId === eo.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == h || !eo.uJ.has(h) || null == y,
                { analyticsLocations: N } = (0, ej.Ay)(),
                [v, R] = (0, eK.YV)({
                    subscriptionId: l?.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: l?.paymentSourceId,
                    currency: d.currency,
                    preventFetch: C,
                    analyticsLocations: N,
                    analyticsLocation: T.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eY.Tr)(v, R);
            let O = !C && null == v && null == R;
            s.useLayoutEffect(() => {
                o(O);
            }, [O, o]);
            let b = (0, eq.V)()?.subscription_trial?.sku_id === eo.pe.TIER_2,
                D = e4.Ay.hasBoostDiscount(m),
                L = D && null != l && e4.Ay.isPremiumAtLeast(e4.Ay.getPremiumType(l.planId), eo.PremiumTypes.TIER_1),
                w = v?.findInvoiceItemByPlanId(E.id),
                M =
                    null != w
                        ? { amount: w.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : e4.Ay.getPrice(E.id, D, !1, d),
                P = a * M.amount,
                x = (0, e$.ds)() && D && null != l,
                k = (function (e) {
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
                            showFractionalPremiumBanner: i === eo.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: c.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: x,
                    hasDiscountUpsell: L,
                    withTrialOfferCopyVariant: b,
                });
            "discount" === k.upsellVariant
                ? (eg()(null != l, "Missing premiumSubscription for discount upsell variant"),
                  (n = ec.intl.format(ec.t.hf6YOY, { planName: e4.Ay.getTierDisplayNameByPlanId(l.planId) })))
                : (n = ec.intl.format("upsell_trial" === k.upsellVariant ? ec.t.ba1L74 : ec.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, e6.l9)(e1.default.locale, eo.oX / 100),
                      freeSubscriptionCount: eo.M4,
                  }));
            let F = c.filter((e) => (0, G.I5)(e)).length,
                V = (0, e4.J$)(d.paymentSourceId),
                { ipCountryCode: B } = (0, ez.A)(),
                j = "HR" === B && M.currency === tl.Yr.EUR,
                H =
                    x && null != l
                        ? (0, r.jsx)(th, { text: t_(l.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: eR()(tc.hA, tc.G3), children: ec.intl.string(ec.t.jNY1FO) }),
                Y =
                    x && null != l
                        ? (0, r.jsx)(th, { text: t_(l.currentPeriodEnd), className: tc.jk })
                        : (0, r.jsx)(eM.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: tm._X,
                              children: ec.intl.string(ec.t.jNY1FO),
                          }),
                W = k.showExistingSlotNotice
                    ? (0, r.jsx)(tC, { existingAvailableSlots: c, canceledCount: F, premiumSubscription: l })
                    : null,
                K = k.showFractionalPremiumBanner ? (0, r.jsx)(eX.vi, { fractionalPremiumInfo: A }) : null,
                $ = V
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eo.WT.YEAR
                              ? ec.intl.string(ec.t.YDpAzZ)
                              : t === eo.WT.MONTH && 1 === n
                                ? ec.intl.string(ec.t["6ZR3By"])
                                : null;
                      })({ intervalType: f, intervalCount: p }) ?? ec.intl.string(ec.t.K9Bmze))
                    : ec.intl.string(ec.t.K9Bmze),
                z = O
                    ? (0, r.jsx)(eV.y, {})
                    : V
                      ? (0, e5.$g)(M.amount, M.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, e5.$g)(t, n);
                            return i === eo.WT.YEAR
                                ? ec.intl.formatToPlainString(ec.t["8M04YJ"], { price: s })
                                : i === eo.WT.MONTH && 1 === r
                                  ? ec.intl.formatToPlainString(ec.t.VStWCR, { price: s })
                                  : i === eo.WT.MONTH && r > 1
                                    ? ec.intl.formatToPlainString(ec.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: f, intervalCount: p, amount: M.amount, currency: M.currency }),
                q = O
                    ? (0, r.jsx)(eV.y, {})
                    : (0, r.jsx)(eZ.A, {
                          price: P,
                          currency: M.currency,
                          intervalType: f,
                          intervalCount: p,
                          isPrepaidPaymentSource: V,
                      }),
                Z = O
                    ? (0, r.jsx)(eV.y, {})
                    : _ && !V
                      ? (0, e5.CE)((0, e5.$g)(P, M.currency), f, p)
                      : (0, e5.$g)(P, M.currency),
                Q = [],
                J = [];
            if (j) {
                let e = (0, r.jsx)(
                    eB.A,
                    {
                        message: ec.intl.formatToPlainString(ec.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, e5.$g)(7.5345 * P, tl.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                Q.push(e), J.push(e);
            }
            let ee = ec.intl.format(ec.t.Om31w8, { documentationLink: e3.A.getArticleURL(eu.MVz.LOCALIZED_PRICING) });
            return (
                Q.push((0, r.jsx)(eB.A, { message: ee }, "localized-pricing")),
                J.push((0, r.jsx)(tI, { message: ee }, "localized-pricing")),
                {
                    isLoading: O,
                    planLabel: $,
                    planPriceContent: z,
                    subtotalContent: q,
                    refreshSubtotalContent: Z,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: Y,
                    existingSlotNotice: W,
                    fractionalBanner: K,
                    legacyPricingNotes: Q,
                    refreshPricingNotes: J,
                    discountCallout:
                        "reverse_trial" === k.upsellVariant
                            ? (0, r.jsx)(eJ, {})
                            : (0, r.jsx)(e0, { text: n, color: eW.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === k.upsellVariant ? (0, r.jsx)(eJ, {}) : (0, r.jsx)(tT, { text: n }),
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
    return (0, r.jsx)(d ? ty : tS, {
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
let tv = eo.gD.NONE_MONTH,
    tR = [eo.pe.GUILD];
function tO(e) {
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
        } = ee(),
        { paymentSourceId: f, activeSubscription: p } = (0, O.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: E } = (0, K.Jn)(),
        m = null != h || Object.keys(_.paymentSources).length > 0,
        I = (0, u.Ir)(m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS),
        T = (0, A.A)(() => (0, G.D$)(k.A.boostSlots)),
        S = (0, M.n)("GuildBoostPurchaseModal"),
        y = eN.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        C = S && y,
        N = (0, g.bG)([D.A], () => (null != a ? D.A.getGuild(a) : void 0), [a]),
        v = null != a ? x.A.getGuild(a) : null,
        R = null == N && null == v,
        b = null != p && p.isPurchasedExternally,
        L = Object.keys(_.paymentSources).length > 0,
        w = (0, g.bG)([es.A], () => (null != p ? (0, ea.c9)(p.planId) : null)),
        P = (0, g.bG)([es.A], () => (null == w ? es.A.get(tv) : w));
    if (null == a) throw new ey.vd({ message: "Missing guildId" });
    eg()(null != P, "Missing nextPremiumSubscriptionPlan");
    let U = (0, r.jsx)(tN, {
        premiumSubscriptionPlan: P,
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
            t(), null != o && o(), (0, eC.e)();
        },
        priceOptions:
            null != f ? { paymentSourceId: f, currency: null != E ? E : void 0 } : { currency: null != E ? E : void 0 },
        isRefreshEnabled: S,
        showRefreshSubtotalRate: C,
        refreshNextStepLabel: I,
    });
    return (
        b && null != p && null != p.paymentGateway
            ? (U = (0, r.jsxs)("div", {
                  className: ed.xK,
                  children: [
                      (0, r.jsx)(eA.w, {
                          type: "critical",
                          children: ec.intl.format(ec.t["/m3Y3s"], { paymentGatewayName: tl.qm[p.paymentGateway] }),
                      }),
                      U,
                  ],
              }))
            : null != a &&
              !D.A.isGuildFetching(a) &&
              R &&
              (U = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(eI.p, {
                          messageType: eI.Y.ERROR,
                          className: ed.MR,
                          children: ec.intl.string(ec.t.eAn6z2),
                      }),
                      U,
                  ],
              })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eh.dZ, { children: U }),
                (0, r.jsx)(eh.UX, {
                    children: (0, r.jsx)(ep._, {
                        currentStep: u.pn.PLAN_SELECT,
                        isRefreshEnabled: S,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: S
                            ? (0, r.jsx)(eT.$, {
                                  variant: "secondary",
                                  text: ec.intl.string(ec.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, r.jsx)(eS.Q, { text: ec.intl.string(ec.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, r.jsx)(eT.$, {
                            variant: "primary",
                            text: ec.intl.string(ec.t["3PatSz"]),
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
                                isDisabledBecauseExternalSubscription: b,
                                isMissingGuildInformation: R,
                            }),
                            onClick: () => {
                                l || (null != w && w.premiumSubscriptionType === eo.PremiumTypes.TIER_2)
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
var tb = n(364840),
    tD = n(460905),
    tL = n(183623),
    tw = n(95635),
    tM = n(935462),
    tP = n(331322),
    tx = n(532794),
    tk = n(811611),
    tU = n(901017),
    tG = n(403052);
function tF(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, g.bG)([e1.default], () => e1.default.locale);
    return (0, r.jsxs)("div", {
        className: tG.mH,
        children: [
            (0, r.jsx)(tU.A, {
                icon: eG._,
                iconClassName: tG.pl,
                description: ec.intl.formatToPlainString(ec.t.sQBgs2, { numFreeGuildSubscriptions: eo.M4 }),
                color: eO.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(tU.A, {
                icon: eG._,
                iconClassName: tG.pl,
                description: ec.intl.formatToPlainString(ec.t["1A6vXi"], { percent: (0, e6.l9)(n, eo.oX / 100) }),
                color: eO.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(tU.A, { icon: tD.n, iconClassName: tG.zO, description: ec.intl.string(ec.t.Z9b2x2) }) : null,
            (0, r.jsx)(tU.A, { icon: tL.F, iconClassName: tG.Kg, description: ec.intl.string(ec.t["8dqG5E"]) }),
            (0, r.jsx)(tU.A, { icon: tw.J, iconClassName: tG.$z, description: ec.intl.string(ec.t.cBorIy) }),
        ],
    });
}
function tV(e) {
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
        { analyticsLocations: d, sourceAnalyticsLocations: h } = (0, ej.Ay)(T.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        f = null == t || null == t.premiumSubscriptionType,
        p = e4.Ay.getPrice(eo.gD.PREMIUM_MONTH_TIER_2, !1, !1, c),
        E = (0, e5.$g)(p.amount, p.currency),
        m = (0, eq.V)(),
        g = m?.trial_id,
        A = m?.subscription_trial?.sku_id === eo.pe.TIER_2;
    return (
        s.useEffect(() => {
            _.default.track(eu.HAw.PREMIUM_UPSELL_VIEWED, { type: eo.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tM.s_, { "data-migration-pending": !0, onClick: n, className: tG.b }),
                (0, r.jsxs)(H.c, {
                    children: [
                        A && (0, r.jsx)(tk.Vq, { className: tG.Fg }),
                        (0, r.jsx)("div", { className: eR()(tG.Tn, { [tG.NH]: A }) }),
                        (0, r.jsx)(eM.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != g
                                    ? ec.intl.string(ec.t.AoSzEr)
                                    : ec.intl.format(ec.t["7vePZb"], { monthlyPrice: E }),
                        }),
                        (0, r.jsx)(tF, { shouldUpsellFromNoneTier: f }),
                    ],
                }),
                (0, r.jsx)(tb.j, {
                    children: (0, r.jsxs)(tP.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(eS.Q, {
                                text: ec.intl.string(ec.t["13/7kX"]),
                                onClick: i,
                                variant: "secondary",
                            }),
                            (0, r.jsxs)(tP.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(eS.Q, {
                                        text: ec.intl.string(ec.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(eT.$, {
                                        variant: "active",
                                        text: null != g ? ec.intl.string(ec.t["Gd/XHF"]) : ec.intl.string(ec.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tx.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eo.pe.TIER_2,
                                                    analyticsLocations: d,
                                                    analyticsObject: {
                                                        ...l,
                                                        section: eu.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function tB(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: i } = e,
        { paymentModalArgs: a, analyticsLocation: o, analyticsSourceLocation: l } = ee(),
        { paymentSourceId: c, activeSubscription: d } = (0, O.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: _ } = (0, K.Jn)(),
        h = (0, g.bG)([es.A], () => (null != d ? (0, ea.c9)(d.planId) : null)),
        f = (0, g.bG)([es.A], () => (null == h ? es.A.get(tv) : h));
    eg()(null != f, "Missing nextPremiumSubscriptionPlan"), eg()(null != _ && "" !== _, "Currency not defined");
    let { paymentSources: p } = a,
        E = null != d ? d.paymentSourceId : null,
        m = Object.keys(p).length > 0,
        A = s.useCallback(() => n(u.pn.PLAN_SELECT), [n]),
        I = s.useCallback(() => n(null != E || m ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS), [n, E, m]);
    return (0, r.jsx)(tV, {
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
var tj = n(364995),
    tH = n(820739);
async function tY(e, t) {
    await (0, tH.CD)();
    let n = (0, G.D$)(k.A.boostSlots);
    return (0, tH.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
let tW = [u.pn.PLAN_SELECT];
function tK() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: i } = ee(),
        { setIsSubmittingCurrentStep: r } = i,
        { paymentAuthenticationState: a } = (0, C.o)(),
        { setPurchaseState: o, setPurchaseError: l } = (0, O.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        u = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (a === P.oc.PENDING) {
                u.current = !0;
                return;
            }
            u.current &&
                ((u.current = !1),
                r(!1),
                a !== P.oc.NONE ||
                    null == e ||
                    (async () => {
                        try {
                            await tY(e, null != t), n?.();
                        } catch (e) {
                            o(L.h.FAIL), l(e);
                        }
                    })());
        }, [a, e, t, n, r, o, l]),
        null
    );
}
let t$ = [
        { key: u.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(tO, { ...e }), options: { renderHeader: !0 } },
        {
            key: u.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(tB, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    tz = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, O.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: a } = ee(),
                o = (0, Y.Hp)(),
                l = q(),
                { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, K.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: h } = el(),
                f = null != n && null != n.renewalMutations,
                p = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                E = !l || !c || !h || null == d || "" === d;
            return ((0, I.Ay)(() => {
                f && _.default.track(eu.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: i });
            }),
            s.useEffect(() => {
                E || o || p || f || t(u.pn.PLAN_SELECT);
            }, [E, o, p, f, t]),
            p)
                ? (0, r.jsx)(e_, { message: ec.intl.string(ec.t.mOWsF1) })
                : f
                  ? (0, r.jsx)(e_, { message: ec.intl.string(ec.t.npfhh0) })
                  : E
                    ? (0, r.jsx)($.A, {})
                    : o
                      ? (0, r.jsx)(W.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: t$,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                    { guildId: a, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: l } = ee(),
                    {
                        activeSubscription: c,
                        paymentSourceId: d,
                        setPaymentSourceId: h,
                    } = (0, O.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: f } = (0, K.Jn)();
                if (null == a) throw new ey.vd({ message: "Missing guildId" });
                eg()(null != f && "" !== f, "Currency not defined");
                let { paymentSources: p } = o,
                    { newAdditionalPlans: E, currentPremiumSubscriptionPlan: m } = el(),
                    A = (0, g.bG)([es.A], () => (null == m ? es.A.get(tv) : m));
                eg()(null != A, "Missing nextPremiumSubscriptionPlan");
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
                            } = ee(),
                            { displayCurrency: m } = (0, K.Jn)(),
                            { paymentSources: g, setIsSubmittingCurrentStep: A, isSubmittingCurrentStep: I } = a,
                            {
                                activeSubscription: T,
                                paymentSourceId: S,
                                setPurchaseError: y,
                                hasAcceptedTerms: C,
                                setPurchaseState: N,
                            } = (0, O.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                            })),
                            v = (0, eY.sw)(),
                            {
                                newAdditionalPlans: R,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: D,
                            } = el(),
                            w = (0, e8.A)({
                                location: "GuildBoostPurchaseModal",
                                message: ec.intl.string(tu.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: M } = (0, tj.t)(),
                            P = (0, e8.iB)({
                                checkoutPaymentSources: M,
                                paymentSourceId: S,
                                location: "GuildBoostPurchaseModal",
                            }),
                            x = s.useMemo(
                                () => ({
                                    ...i,
                                    location: c,
                                    source: d,
                                    subscription_plan_id: D,
                                    sku_id: (0, e4.mH)(eo.pe.GUILD),
                                    quantity: l,
                                }),
                                [i, c, d, l, D],
                            ),
                            k = s.useMemo(() => {
                                let { guild_id: e, ...t } = x;
                                return t;
                            }, [x]),
                            U = null != S ? { paymentSourceId: S, currency: m ?? void 0 } : { currency: m ?? void 0 },
                            G = async () => {
                                eg()(null != R, "Missing newAdditionalPlans");
                                let e = (0, ef.W)(g, S);
                                y(null);
                                let s = !1;
                                try {
                                    N(L.h.PURCHASING),
                                        A(!0),
                                        eg()(null != S, "Missing paymentSourceId"),
                                        eg()(null != v, "Missing invoicePreview");
                                    let a = { amount: v.total, currency: v.currency },
                                        l = U.currency ?? v.currency,
                                        c = (0, e4.U8)(T, R, l.toLowerCase(), U.paymentSourceId);
                                    if (
                                        (_.default.track(eu.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...x,
                                            duration_ms: Date.now() - h,
                                            guild_id: r ?? void 0,
                                            application_id: f,
                                        }),
                                        null == T || null == b)
                                    ) {
                                        eg()(null != e, "Missing paymentSource");
                                        let t = await (0, z.Ky)({
                                            items: R,
                                            paymentSource: e,
                                            currency: l,
                                            expectedInvoicePrice: a,
                                            expectedRenewalPrice: c,
                                        });
                                        if (t.redirectConfirmation) {
                                            s = !0;
                                            return;
                                        }
                                        if (t.pendingCustomerAction) return;
                                    } else {
                                        let t = { items: (0, e4.aE)(T, R) };
                                        (t.currency = T.currency ?? l),
                                            (t.paymentSource = null != o ? g[o] : void 0),
                                            null == t.paymentSource &&
                                                (eg()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = l));
                                        let n = await (0, z.nV)(T, t, a, c, i.location_stack);
                                        if (n.redirectConfirmation) {
                                            s = !0;
                                            return;
                                        }
                                        if (n.pendingCustomerAction) return;
                                    }
                                    null == p && t(u.pn.CONFIRM),
                                        N(L.h.COMPLETED),
                                        null != r && (await tY(r, null != p)),
                                        null != p && n(),
                                        E?.();
                                } catch (t) {
                                    N(L.h.FAIL),
                                        y(t),
                                        _.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
                                            ...k,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === eu.hes.CARD
                                                        ? eu.kM_.STRIPE
                                                        : eu.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: S,
                                            duration_ms: Date.now() - h,
                                        });
                                } finally {
                                    s || A(!1);
                                }
                            };
                        return {
                            text: ec.intl.string(ec.t.eUEeCt),
                            loading: I,
                            disabled: null == S || !C || null != w || P,
                            onClick: G,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: i }),
                    S = s.useCallback(() => {
                        t(u.pn.ADD_PAYMENT_STEPS), h(null);
                    }, [t, h]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eh.dZ, {
                            children: (0, r.jsx)(tE, {
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
                        (0, r.jsx)(eh.UX, {
                            children: (0, r.jsx)(R.lo, {
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
                        children: h,
                    } = e,
                    f = (0, g.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
                    p = (0, A.A)(() => n - (0, G.D$)(k.A.boostSlots).length);
                return (
                    (0, I.Ay)(() => {
                        null != D.A.getGuild(t) || D.A.isGuildFetching(t) || (0, b.y)(t);
                    }),
                    (0, r.jsx)(y.M, {
                        activeSubscription: f,
                        stepConfigs: d,
                        skuIDs: tR,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)(en, {
                            initialNumGuildBoostsToPurchase: p,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(tK, {}), h],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: a, existingAvailableSlotCount: o } = ee(),
                    l = (0, w.bB)(),
                    c = (0, O.t4)((e) => e.purchaseState),
                    d = (0, M.n)("GuildBoostUnifiedCheckout"),
                    _ = d && (l === u.pn.REVIEW || l === u.pn.CONFIRM),
                    h = (0, j.A)(_),
                    f = s.useMemo(() => ({ quantity: i }), [i]);
                return d && l === u.pn.CONFIRM
                    ? (0, r.jsx)(B.A, {
                          mediaUrls: h.mediaUrls,
                          isSuccess: h.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(c === L.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(V.A, {
                                  transitionState: t.transitionState,
                                  guild: x.A.getGuild(a),
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
                i = (0, M.n)("GuildBoostUnifiedCheckout"),
                s = (0, O.t4)((e) => e.purchaseState),
                a = (0, N.A)();
            if (n === u.pn.PREMIUM_UPSELL) return null;
            if (n === u.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, r.jsx)(R.s3, { ...(0, v.uO)({ skuId: e, step: n }) });
            }
            return i
                ? (0, r.jsx)(R.s3, { title: (0, v.uO)({ skuId: null, step: n }).title })
                : (0, r.jsx)(F.A, { onClose: () => t(s === L.h.COMPLETED), currentStep: n, purchaseState: s });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(eE, { ...e }), options: { renderHeader: !0 } },
    };
var tq = n(630303),
    tZ = n(871109);
let tX = s.createContext(void 0);
function tQ() {
    let e = s.useContext(tX);
    return eg()(null != e, "GuildProductPurchaseContext not found"), e;
}
function tJ(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([tZ.A], () => tZ.A.getGuildProduct(n));
    return (
        eg()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(tX.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function t0(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = tQ(),
        a = (0, eY.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            eg()(null != a, "invoicePreview cannot be null"),
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
var t1 = n(939249),
    t2 = n(789645),
    t3 = n(303612),
    t6 = n(916261),
    t4 = n(575650);
function t5(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(t1.D, {
        className: eR()(t6.cG, t),
        onClick: n,
        children: (0, r.jsx)(t2.P, { size: "xs", color: "currentColor", className: t6.yP }),
    });
}
function t7(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(tM.rQ, {
        className: eR()(t6.wx, t4.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(t3.A, { className: t6.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(t5, { className: t6.b, onClose: n }),
        ],
    });
}
var t8 = n(196617);
let t9 = {
    CHECKOUT_FLOW: ey.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [u.pn.REVIEW]: tq.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(tJ, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = tQ();
        return n === u.pn.CONFIRM
            ? null
            : (0, r.jsx)(t7, { guildProductListing: i, className: t8.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(t0, { ...e }) },
};
var ne = n(20742),
    nt = n(848149),
    nn = n(937008),
    ni = n(106778),
    nr = n(228366),
    ns = n(213530),
    na = n(966971),
    no = n(758836),
    nl = n(483764);
let nu = { sliderBodyClassName: nl.Bz };
function nc(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ni.Fk, { ref: n, className: nl.Lb, environment: t.current }),
            (0, r.jsx)(ns.K, { options: i, className: eR()(nl.Oh, { [nl.R]: !s }) }),
        ],
    });
}
var nd = n(702841),
    n_ = n(775602),
    nh = n(31823),
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
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, C.o)(),
        { application: c } = (0, nh.V)(),
        d = (0, nf.gU)(),
        _ = (0, nd.bG)([np.A], () => np.A.getProduct(i)),
        h = s.useRef(!1);
    eg()(null != i, "Expected selectedSkuId"), eg()(null != c, "Expected application");
    let f = d[i];
    eg()(null != f, "Expected sku");
    let p = null != u || null != a || null != o,
        E =
            l.length > 0
                ? ec.intl.formatToPlainString(ec.t.VuV3Td, { discountOfferAmount: l[0].discount.amount })
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
                purchaseType: no.gs.FIAT,
            }));
    }, [_, n, t, p, E]),
    p)
        ? (0, r.jsx)(eh.dZ, { children: (0, r.jsx)(nT.A, {}) })
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
        } = (0, nn.Pv)(),
        d = (0, nd.bG)([n_.Ay], () => n_.Ay.useReducedMotion),
        _ = s.useRef(null),
        h = (0, O.t4)((e) => e.selectedSkuId),
        f = (0, nd.bG)([np.A], () => np.A.getProduct(h)),
        { confettiColors: p } = (0, nE.A)(f?.styles);
    return (
        s.useEffect(() => {
            t &&
                null != o &&
                null != h &&
                (c === eo.vQ.USER_PROFILE_WISHLIST || c === eo.vQ.DM_CHANNEL_WISHLIST) &&
                nr.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: h, recipientId: o.id });
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
        { giftRecipient: u, giftRecipientError: c } = (0, nn.Pv)(),
        d = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
        _ = e4.Ay.canUseShopDiscounts(d),
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
                className: eR()(nB.QU, o),
                children: (0, r.jsx)(nR.D, {
                    label: ec.intl.string(ec.t.PpoJzt),
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
                                    return (0, r.jsx)(t1.D, {
                                        ...i,
                                        className: nB.Nx,
                                        innerRef: f,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(eM.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ec.intl.string(ec.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eR()(nB.i1, null != c ? nB.cN : nB.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: nB.Ug,
                        children: [
                            (0, r.jsx)(nG.O, { product: m }),
                            (0, r.jsxs)("div", {
                                className: nB.JZ,
                                children: [
                                    (0, r.jsx)(eM.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(eU.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === nv.R.BUNDLE
                                                ? null
                                                : T.type === nv.R.AVATAR_DECORATION
                                                  ? ec.intl.string(ec.t["7v0T9P"])
                                                  : T.type === nv.R.NAMEPLATE
                                                    ? ec.intl.string(ec.t.x5CoXR)
                                                    : T.type === nv.R.PROFILE_EFFECT
                                                      ? ec.intl.string(ec.t.wR5wOo)
                                                      : T.type === nv.R.PROFILE_FRAME
                                                        ? ec.intl.string(ec.t.GWrZOd)
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
                            children: (0, r.jsx)(eM.E, {
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
        { giftRecipient: a, setGiftRecipient: o } = (0, nn.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(nH.Z, {
                  selectionMode: "single",
                  label: ec.intl.string(ec.t.xFn72s),
                  placeholder: ec.intl.string(ec.t.R0vK0N),
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
        [e2.default],
        () =>
            n.reduce((e, t) => {
                let n = e2.default.getUser(t);
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
        { analyticsLocations: i } = (0, ej.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eS.Q, {
        text: ec.intl.string(ec.t.J82mpK),
        onClick: function () {
            t(),
                (0, o.closeAllModals)(),
                null == n
                    ? (0, nC.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, n2.pX)(`${eu.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
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
        { analyticsLocations: i } = (0, ej.Ay)();
    return (0, r.jsx)(ny, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
}
let n8 = {
    [u.pn.GIFT_CUSTOMIZATION]: () => ec.intl.string(ec.t["JCFN/y"]),
    [u.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => ec.intl.string(ec.t.lDbi6H),
    [u.pn.CONFIRM]: () => "",
};
function n9(e) {
    let { step: t } = e,
        n = n8[t];
    return null == n ? null : (0, r.jsx)(ne.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let ie = {
    CHECKOUT_FLOW: ey.CL.COLLECTIBLES_CHECKOUT,
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
                        } = (0, nn.Pv)(),
                        { selectedSkuId: h, checkoutInvoicePreview: f } = (0, O.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        p = (0, nf.gU)(),
                        E = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
                        m = nQ();
                    async function A(e, t) {
                        d(!0),
                            null != a && o(),
                            (await (0, nC.JJ)(e.id, t)) || o(ec.intl.string(ec.t["4kgVqQ"])),
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
                                (c !== eo.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(eu.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
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
                                return c === eo.vQ.USER_PROFILE_WISHLIST || c === eo.vQ.DM_CHANNEL_WISHLIST
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
                            ctaDisabled: null != a || null == u || u.id === E?.id || i.length > eo.Jo,
                            loading: l,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                u = s.useMemo(() => ({ loading: l, disabled: o }), [l, o]);
            return (0, r.jsx)(ey.Mw, {
                paymentModalStepProps: e,
                layout: ey.XZ.TWO_COLUMN,
                renderLeftColumn: i,
                renderRightColumn: a,
                primaryCTAButtonProps: u,
            });
        },
        [u.pn.REVIEW]: tq.p,
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
                        n = s.useRef(new ni.OH()),
                        [i, r] = s.useState(null),
                        [a, o] = s.useState(!1),
                        l = s.useMemo(() => (0, na.AB)({ purchaseType: no.gs.FIAT, skuId: t }), [t]);
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
                    (0, r.jsx)(nc, {
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
                        purchaseType: tl.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, r.jsx)(n4.Provider, { value: f, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: i, setCustomConfettiVisible: r } = n5(),
                { isGift: a } = (0, nn.Pv)(),
                o = (0, nt.J)(),
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
                                r(!1), n(e), nr.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
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
            return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: eu.FYj });
        },
        tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, nn.Pv)();
        return n ? (0, r.jsx)(n9, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(n7, { ...e }), options: nu },
};
var it = n(263050),
    ii = n(491057),
    ir = n(496142),
    is = n(877624),
    ia = n(554146),
    io = n(71804),
    il = n(426398),
    iu = n(841702),
    ic = n(367727),
    id = n(380619),
    i_ = n(709870),
    ih = n(374200),
    ip = n(771566),
    iE = n(625494),
    im = n(45938),
    ig = n(97808),
    iA = n(912140),
    iI = n(780898),
    iT = n(344346),
    iS = n(837015),
    iy = n(258915);
function iC(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
        o = (0, g.bG)([n_.Ay], () => n_.Ay.useReducedMotion),
        { analyticsLocations: l } = (0, ej.Ay)(),
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
                    : (0, iS.F)(f)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: f.skuId,
                                src: f.asset,
                                palette: (0, iI.H6)(f.palette ?? "sky"),
                                imgAlt: f.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nP.T)(f)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, iA.A)({
                                  legacyAssetId: f.asset,
                                  skuId: f.skuId,
                                  size: u,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [f, u, o],
        );
    return (0, r.jsx)(eh.UX, {
        children: (0, r.jsx)(tb.j, {
            children: (0, r.jsxs)("div", {
                className: iy.W,
                children: [
                    p && null != E
                        ? (0, r.jsx)("div", {
                              className: iy.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, r.jsx)(iT.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: _,
                              }),
                          })
                        : (0, r.jsx)(ig.Js, {
                              "aria-label": a?.username,
                              size: u,
                              src: a?.getAvatarURL(void 0, (0, nb.FT)(u), !o),
                              avatarDecoration: m,
                          }),
                    (0, r.jsx)(eT.$, {
                        variant: "primary",
                        text: ec.intl.string(ec.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, nA.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: l,
                                    purchaseType: no.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var iN = n(49999);
function iv(e) {
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
            checkoutInvoicePreview: C,
        } = (0, O.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        v = (0, N.A)(),
        R = (0, w.bB)(),
        {
            isGift: b,
            giftRecipient: D,
            giftCode: L,
            hasSentMessage: M,
            isSendingMessage: P,
            sendGiftMessage: x,
            claimableRewards: k,
            selectedGiftingPromotionReward: U,
            openGiftingBadgePostPurchaseModal: G,
        } = (0, nn.Pv)(),
        { confirmationFooter: F } = (0, ii.cG)(),
        V = (0, id.px)(v, b, k),
        B = (0, id.Mq)(v),
        j = (0, iu.Mv)(U, !1),
        H = (0, g.bG)([ih.A], () => ih.A.getGiftPromotion()?.id),
        Y = (0, g.bG)([ih.A], () => {
            let e = ih.A.getMarketingComponentByType(is.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        W = (0, ef.g)(f, A),
        K = b && null != U && null != j && B,
        $ = { selectedPlan: v, selectedSkuId: E, step: R };
    if (null == v) throw new io.v({ message: "Expected plan to be selected", extraSentryInformation: $ });
    if (null == E) throw new io.v({ message: "Expected selectedSkuId", extraSentryInformation: $ });
    if (null == R) throw new io.v({ message: "Step should be set", extraSentryInformation: $ });
    let z = s.useCallback(() => {
        i(), l?.();
    }, [i, l]);
    (0, I.Ay)(() => {
        T &&
            _.default.track(eu.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != m,
                has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                subscription_id: m?.id,
            });
    });
    let q = null != C ? C.orbsReward : null;
    s.useEffect(() => {
        function e() {
            if (T)
                if (null != m && m.hasAnyPremiumGroup) {
                    _.default.track(eu.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: m.id });
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
                                        iE._.dispatch(eu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                iE._.dispatch(eu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, o.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    _.default.track(eu.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != m,
                        has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                    }),
                        iE._.dispatch(eu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else null != q && q > 0 && (0, i_.$)({ orbsAmount: q });
        }
        return (
            iE._.subscribe(eu.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                iE._.unsubscribe(eu.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [T, m, q]),
        s.useEffect(() => {
            !b || null == D || null == L || M || P || (0, im.Ik)(D) || x({ onSubscriptionConfirmation: l });
        }, [x, b, D, L, M, P, l]),
        s.useEffect(() => {
            V &&
                null != Y &&
                null != H &&
                (0, ic.qr)(ia.M.GIFTING_PROMOTION_REMINDER, H, { dismissAction: iN.i.INDIRECT_ACTION });
        }, [Y, H, V]);
    let Z = null != h ? ip.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(v, z, m);
    else if (b) t = (0, r.jsx)(ip.fw, { planId: v.id, onClose: z });
    else {
        let e =
            S === v.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != p && (0, ea.vT)(p, v.id, a),
                  };
        t = (0, r.jsx)(ip.Ay, {
            planId: v.id,
            onClose: z,
            paymentSourceType: W,
            hideClose: null != F,
            startingFractionalPremiumEndsAt: y,
            customCTAType: Z,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(eh.dZ, { children: [(0, r.jsx)(nT.A, {}), t] }),
            null != F && F,
            K && null != U && (0, r.jsx)(iC, { rewardSkuId: U, onClose: z, onRewardModalClose: G }),
        ],
    });
}
let [iR, iO] = (0, Q.A)(),
    ib = {
        CHECKOUT_FLOW: ey.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: ir.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    a = s.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(iR.Provider, { value: a, children: (0, r.jsx)(ii.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = iO();
            return (0, r.jsx)(it.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iv, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var iD = n(73825),
    iL = n(960851),
    iw = n(607399),
    iM = n(795791),
    iP = n(344159),
    ix = n(561794),
    ik = n(811656),
    iU = n(187322),
    iG = n(890856),
    iF = n(947641),
    iV = n(713517),
    iB = n(929283),
    ij = n(761365),
    iH = n(267861);
function iY(e) {
    let t,
        n,
        { skuId: i, user: a, claimed: o, onSelect: l, selectedSkuId: u } = e,
        [c, d] = s.useState(null),
        _ = s.useCallback((e) => {
            d(e);
        }, []),
        h = s.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: f } = (0, iV.A)(h),
        p = !o && f,
        { product: E } = (0, nM.q)(i);
    if (null == E) return null;
    let m = E.items[0];
    return null == m
        ? null
        : ((0, nP.T)(m)
              ? ((n = nv.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(iB.i, { item: m, user: a, isHighlighted: p, avatarSize: nb._3.SIZE_96 })))
              : (0, iS.F)(m) &&
                ((n = nv.R.NAMEPLATE),
                (t = (0, r.jsx)(ij.A, { nameplate: m, user: a, isHighlighted: p, size: "small" }))),
          (0, r.jsx)(iU.vN, {
              children: (0, r.jsxs)(iG.s, {
                  ref: _,
                  "aria-label": E.name ?? "",
                  onClick: function () {
                      null == i || null == l || o || l(i);
                  },
                  className: eR()(iH._x, { [iH.Vp]: !o, [iH.mr]: p, [iH.md]: u === i }),
                  children: [
                      (0, r.jsx)("div", {
                          className: eR()(iH.VH, {
                              [iH._Q]: n === nv.R.AVATAR_DECORATION,
                              [iH.M4]: n === nv.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: eR()(iH.i1, { [iH.Sf]: o }), children: t }),
                                            o &&
                                                (0, r.jsx)(iF.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eO.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: iH.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: iH.tZ,
                          children: [
                              (0, r.jsx)(eU.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, r.jsx)(eM.E, {
                                  variant: "text-sm/normal",
                                  children: o ? ec.intl.string(ec.t["6cfuDj"]) : ec.intl.string(ec.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var iW = n(696208),
    iK = n(683433);
function i$(e) {
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
        f = (0, N.A)(),
        { isGift: p, claimableRewards: E } = (0, nn.Pv)();
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
                c = (0, g.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
                d = (0, N.A)(),
                _ = (0, w.bB)(),
                { hasEntitlements: h } = (0, iP.X)(n, i),
                f = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
            var p = a ? ec.intl.string(ec.t.PDTjLN) : ec.intl.string(ec.t.XqMe3N),
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
                    : [{ variant: "primary", text: ec.intl.string(ec.t.XqMe3N), disabled: !0 }],
            [m, A, I, T, n, l],
        );
    return (0, r.jsx)(iW.H, { leading: o && null != a ? (0, r.jsx)(iK.A, { onClick: a }) : void 0, actions: S });
}
var iz = n(328232);
function iq(e) {
    let { handleStepChange: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        i = (0, N.A)(),
        a = (0, w.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: l, claimableRewards: c } = (0, nn.Pv)(),
        d = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
        _ = (0, g.yK)([ih.A], () => ih.A.getGiftPromotionRewardSkuIds()),
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
                iY,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: S, selectedSkuId: f },
                e,
            ),
        ),
        C = (0, r.jsx)(eh.UX, {
            children: (0, r.jsx)(i$, {
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
            (0, r.jsx)(ne.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: ec.intl.string(ec.t.OEtqpm),
                subtitle: ec.intl.string(ec.t.h2nMp0),
            }),
            (0, r.jsx)(H.c, {
                children: (0, r.jsx)(tP.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", { className: iz.Dq, children: y }),
                }),
            }),
            C,
        ],
    });
}
var iZ = n(800471),
    iX = n(38405);
let iQ = function (e, t, n, i, r) {
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
                    iX.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        iX.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
var iJ = n(396533),
    i0 = n(463376),
    i1 = n(699595),
    i2 = n(442123),
    i3 = n(67948),
    i6 = n(807098),
    i4 = n(298305),
    i5 = n(387745);
function i7() {
    let e = (0, g.bG)([ih.A], () => {
            let e = ih.A.getMarketingComponentByType(is.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, nn.Pv)(),
        n = (0, i6.T)(e?.asset),
        i = (0, i6.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, id.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, id.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, id.x)(o, a),
        u = e?.assetVariant === i3.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: i5.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eR()([i5.my], { [i5.R_]: u }),
                      children: (0, r.jsx)(i4.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? nb._3.SIZE_72 : nb._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, r.jsx)(eM.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: ec.intl.string(ec.t.Abiuci),
                  }),
              ],
          });
}
var i8 = n(35587),
    i9 = n(410516),
    re = n(462887),
    rt = n(736653),
    rn = n(854627),
    ri = n(236834);
let rr = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, r.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, r.jsxs)("g", {
                    opacity: "0.6",
                    children: [
                        (0, r.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1558_55666)",
                        }),
                        (0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1558_55666)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1558_55666)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1558_55666)",
                            fillOpacity: "0.9",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1558_55666)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1558_55666)",
                        }),
                    ],
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "paint0_linear_1558_55666",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint1_linear_1558_55666",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint2_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint3_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint4_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint5_linear_1558_55666",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint6_linear_1558_55666",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint7_linear_1558_55666",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint8_linear_1558_55666",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint9_linear_1558_55666",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint10_linear_1558_55666",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint11_linear_1558_55666",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint12_linear_1558_55666",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsx)("clipPath", {
                            id: "clip0_1558_55666",
                            children: (0, r.jsx)("rect", {
                                width: "16.3534",
                                height: "16.3534",
                                fill: "white",
                                transform: "translate(39.6143 14.9869)",
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    rs = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, r.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, r.jsxs)("g", {
                    opacity: "0.4",
                    children: [
                        (0, r.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1521_51082)",
                        }),
                        (0, r.jsxs)("g", {
                            clipPath: "url(#clip0_1521_51082)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1521_51082)",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1521_51082)",
                            fillOpacity: "0.9",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1521_51082)",
                        }),
                        (0, r.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1521_51082)",
                        }),
                    ],
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "paint0_linear_1521_51082",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint1_linear_1521_51082",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint2_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint3_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint4_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint5_linear_1521_51082",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint6_linear_1521_51082",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint7_linear_1521_51082",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint8_linear_1521_51082",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint9_linear_1521_51082",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint10_linear_1521_51082",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint11_linear_1521_51082",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "paint12_linear_1521_51082",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, r.jsx)("clipPath", {
                            id: "clip0_1521_51082",
                            children: (0, r.jsx)("rect", {
                                width: "16.3534",
                                height: "16.3534",
                                fill: "white",
                                transform: "translate(39.6143 14.9869)",
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
var ra = n(577454);
let ro = function (e) {
    let { className: t } = e,
        n = (0, ri.A)(),
        { avatarSrc: i, eventHandlers: s } = (0, rn.A)({ userId: n?.id, size: nb._3.SIZE_32, animateOnHover: !0 }),
        a = (0, rt.DP)(),
        o = (0, re.q)(a),
        l = nW.Ay.getName(n);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: eR()(ra.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: ra.H,
                      children: (0, r.jsx)(ig.eu, { src: i, "aria-label": n.username, size: nb._3.SIZE_32, ...s }),
                  }),
                  (0, r.jsx)(eM.E, {
                      variant: "text-xs/bold",
                      className: ra.U_,
                      children: ec.intl.format(ec.t.oxhCOl, { userName: l }),
                  }),
                  (0, r.jsx)(o ? rr : rs, { className: ra.q3 }),
              ],
          });
};
var rl = n(361597),
    ru = n(69494),
    rc = n(622631),
    rd = n(597770),
    r_ = n(102741),
    rh = n(296589);
function rf(e) {
    let { giftMessage: t = ec.intl.string(ec.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, nn.Pv)();
    return !n || (0, im.Ik)(i)
        ? null
        : (0, r.jsx)(r_.A, {
              className: rh.z,
              iconSize: r_.A.Sizes.SMALL,
              icon: rd.o,
              color: null == t ? r_.A.Colors.PRIMARY : r_.A.Colors.SECONDARY,
              children: t,
          });
}
var rp = n(577381),
    rE = n(249872);
function rm(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: a, trialId: o, handleClose: l } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: _,
            defaultPlanId: h,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: f,
            isEligibleForTrial: p,
            isEligibleForDiscount: E,
            discountOffer: m,
            userTrialOffer: g,
        } = (0, i0.i)(),
        I = (0, i9.YJ)(m),
        T = (0, N.A)(),
        S = (0, w.bB)(),
        { isGift: y, giftRecipient: C, giftMessage: v, claimableRewards: R } = (0, nn.Pv)(),
        b = (0, id.Mq)(T),
        D = (0, nd.bG)([ih.A], () => {
            let e = ih.A.getMarketingComponentByType(is.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        L = y && b && null != R && R.length > 0 && D,
        M = (p || E) ?? !1,
        P = (0, i8.Wi)(eo.ZC),
        x = M || P,
        { monthlyDefaultSelected: k } = i2.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${y ? "" : " - DO NOT USE"}`,
        }),
        U = (0, A.A)(k),
        G = s.useMemo(() => {
            let e = h;
            return y && U && null != c && (e = eo.En[c]), (0, e4.Tm)({ skuId: c, isPremium: f, defaultPlanId: e });
        }, [c, f, h, y, U]),
        F = E && null != I && G.includes(I) ? I : G[0],
        V = (0, nd.bG)([es.A], () => es.A.get(F)),
        B = [{ planId: V?.id, quantity: 1 }],
        [j, H] = s.useState(M),
        [Y, W] = (0, eK.YV)({
            items: B,
            renewal: !1,
            preventFetch: !x,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    s.useEffect(() => {
        M && H(Y?.subscriptionPeriodEnd == null);
    }, [Y, M]),
        iQ(
            "Payment Modal Plan Select Step",
            j,
            5,
            { proratedInvoicePreview: Y, proratedInvoiceError: W, isEligibleForOffer: M },
            { tags: { app_context: "billing" } },
        );
    let K = W?.message ?? ec.intl.string(ec.t.R0RpRX),
        $ = M && null == W,
        z = M && null != W,
        q = $ && null == _ && Y?.subscriptionPeriodEnd == null;
    (0, i1.W)({ priceOptions: d, trialId: o, discountInvoicePreview: Y });
    let Z = (0, rp.i)({ planSkuId: V?.skuId, invoice: Y }),
        { ref: X, onTransitionEnd: Q } = (0, iJ.A)({ isExpanded: null != Z, minHeightOverride: 0 }),
        J = s.useMemo(
            () =>
                y || V?.skuId !== eo.pe.TIER_2 || g?.referrer_id == null
                    ? (0, r.jsx)("div", { ref: X, onTransitionEnd: Q, style: { overflow: "hidden" }, children: Z })
                    : (0, r.jsx)(ro, { className: rE.ZB }),
            [Z, y, V?.skuId, g?.referrer_id, X, Q],
        ),
        ee = s.useMemo(
            () => ({
                planOptions: G,
                selectedPlanId: T?.id,
                planGroup: i,
                subscriptionPeriodEnd: Y?.subscriptionPeriodEnd,
                useCompactGiftComponents: L,
                handleClose: l,
            }),
            [G, T?.id, i, Y?.subscriptionPeriodEnd, L, l],
        );
    if (q) return (0, r.jsx)(te.E, { className: rE.QW });
    eg()(null != S, "Step should be set"), eg()(G.length > 0, "Premium plan options should be set");
    let et = y
        ? (0, r.jsx)(rl.$p, { ...ee })
        : (0, r.jsx)(rc.X, { ...ee, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(rf, { giftMessage: v }),
            !(y && (0, im.Ik)(C)) && (0, r.jsx)(ru.A, { isEligibleForTrial: p }),
            (0, r.jsxs)(eh.dZ, {
                children: [
                    J,
                    (0, r.jsx)(nT.A, {}),
                    z ? (0, r.jsx)(eA.w, { type: "critical", children: K }) : et,
                    $ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eR()(rE.IM, rE.Go) }),
                                (0, r.jsx)(eM.E, {
                                    variant: "text-xs/normal",
                                    children: ec.intl.format(ec.t.BHtnqA, {
                                        link: e3.A.getArticleURL(eu.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(eh.UX, {
                children: [
                    L && (0, r.jsx)(i7, {}),
                    (0, r.jsx)(i$, {
                        onStepChange: t,
                        onBackClick: () => t(u.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: G,
                        shouldRenderUpdatedPaymentModal: $,
                        isTrial: p,
                    }),
                ],
            }),
        ],
    });
}
var rg = n(862990),
    rA = n(672525);
function rI(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, O.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, eq.V)(i);
    return !t && null != r && null != n && eo.TP[r.trial_id].skus.includes(n);
}
var rT = n(634378);
function rS(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: l,
            referralTrialOfferId: c,
        } = (0, O.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: d } = (0, il.jm)(),
        { isGift: _, claimableRewards: h } = (0, nn.Pv)(),
        f = _ && null != h && h.length > 0,
        p = (0, eq.V)(c);
    return (0, r.jsx)(ry, {
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
                    _ = (0, e4.aZ)(t);
                (_ !== eo.pe.TIER_1 && _ !== eo.pe.TIER_2) || n !== eo.pe.TIER_0 || s || (d = u.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && eo.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, iZ.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: l,
                    });
                d !== u.pn.WHAT_YOU_LOSE && f && ((d = u.pn.REVIEW), o((0, iZ.xT)(n, t, c))),
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
                r((0, e4.mH)(eo.pe.TIER_2)),
                    t(eo.gD.PREMIUM_GROUP_MONTH),
                    n(i ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: eo.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: _,
        priceOptions: s,
        showPromotionalGiftBanner: f,
    });
}
function ry(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, rg.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ne.rQ, { titleTextVariant: "heading-lg/semibold", title: ec.intl.string(ec.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(H.c, {
                      children: (0, r.jsx)("div", {
                          className: rT.eE,
                          children: (0, r.jsx)(rA.yS, {
                              onSelectSku: (e) => t((0, e4.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(H.c, {
                      children: (0, r.jsx)("div", {
                          className: rT.a2,
                          children: (0, r.jsx)(rA.Ay, {
                              onSelectSku: (e) => t((0, e4.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
var rC = n(825484),
    rN = n(137728);
function rv(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: s,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: l } = (0, nn.Pv)(),
        c = null != a ? (0, e4.EL)(a) : null,
        d = null != c ? (0, e4.RH)(c.planId) : null,
        _ = null != c ? (0, e4.m6)(c.planId) : null,
        h = (0, iZ.vT)({ isTrial: !1, isGift: l, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
    return (
        eg()(null != _, "Expected premium type"),
        (0, r.jsx)(rN.A, {
            premiumType: _,
            titleText: ec.intl.string(ec.t["7VcWW0"]),
            subtitleText: ec.intl.format(ec.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, r.jsxs)(rC.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(eT.$, {
                        variant: "primary",
                        text: ec.intl.string(ec.t["3PatSz"]),
                        onClick: () => {
                            h ? (s((0, iZ.xT)(i, a)), t(u.pn.REVIEW)) : t(u.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(eT.$, { variant: "secondary", onClick: n, text: ec.intl.string(ec.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var rR = n(242874),
    rO = n(573359),
    rb = n(165191),
    rD = n(237412),
    rL = n(865543);
let rw = [
        {
            key: u.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(rS, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(rv, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: u.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(rm, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, iZ.lp)(e) ? null : ec.intl.string(ec.t["r+SebU"])),
                sectionHeaderText: () => ec.intl.string(ec.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(iq, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    rM = {
        CustomHeaderComponent: function (e) {
            let { onClose: t } = e,
                { selectedSkuId: n, purchaseState: i } = (0, O.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                a = (0, g.bG)([rO.A], () => rO.A.isDisplayingWowMomentConfirmation),
                {
                    isPremium: o,
                    isPremiumGroupPurchase: l,
                    isEligibleForTrial: c,
                    isEligibleForDiscount: d,
                } = (0, i0.i)(),
                _ = (0, nf.S3)(),
                h = (0, w.bB)(),
                { isGift: f, selectedGiftStyle: p, giftRecipient: E } = (0, nn.Pv)(),
                m = _?.productLine === eu.EZt.COLLECTIBLES,
                A = _?.productLine === eu.EZt.SOCIAL_LAYER_GAME_ITEM,
                I = f && (0, im.Ik)(E) && h === u.pn.CONFIRM && null != p && !m && !A,
                T = [u.pn.SKU_SELECT, u.pn.SELECT_FREE_SKU],
                S = null != h && !T.includes(h) && null != n,
                y = s.useCallback(() => t(!1), [t]);
            return s.useMemo(() => {
                if (null == h) return;
                let e = null;
                return (
                    I
                        ? (e = (0, r.jsxs)("div", {
                              className: rL.kL,
                              children: [
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !0,
                                      style: { display: "contents" },
                                      children: (0, r.jsx)(rb.A, {
                                          defaultAnimationState: rR.oA.LOOP,
                                          giftStyle: p,
                                          className: rL.qq,
                                      }),
                                  }),
                                  (0, r.jsx)(tM.s_, { onClick: y, className: rL.b, "data-migration-pending": !0 }),
                              ],
                          }))
                        : S &&
                          (eg()(n in eo.WN, `invalid sku id: ${n}`),
                          (e = (0, r.jsx)(rD.A, {
                              currentStep: h ?? void 0,
                              purchaseState: i,
                              premiumType: eo.WN[n],
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
        STEPS_BEFORE_CHECKOUT: rw,
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
                    p = (0, g.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
                    E = (0, iL.cg)() ? eo.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: A } = _;
                if (null != o && !Object.values(eo.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, ix.tA)({ giftRecipient: A, isGift: m ?? !1 }),
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
                (0, iP.s)(C, () => h.onClose(), m ?? !1);
                let v = s.useMemo(() => [...eo.oz], []);
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
                    es.A.isLoadedForPremiumSKUs() || nr.h.wait(() => (0, iD.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, O.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    _ = (0, w.bB)(),
                    {
                        isGift: h,
                        selectedGiftingPromotionReward: f,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, nn.Pv)(),
                    E = s.useMemo(() => (h ? [u.pn.PLAN_SELECT] : []), [h]),
                    m = s.useCallback(
                        (e, t) => {
                            a(e, t), e && h && null == f && p();
                        },
                        [a, h, f, p],
                    ),
                    g = !h && c === eo.pe.TIER_2 && !iw.Ct && !iw.KY && null == (0, iM.uM)(),
                    A = d === L.h.PURCHASING;
                return (0, r.jsx)(ik.A, {
                    isConfirmationStep: _ === u.pn.CONFIRM && null == l && null == o,
                    isEligibleForWowMoment: g,
                    shouldPrefetchWowMoment: A,
                    children: n({
                        ...t,
                        onClose: m,
                        analyticsSubscriptionType: eu.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: eo.LE,
                        subscriptionTier: i,
                        skipUnifiedHeaderForSteps: E,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(iv, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var rP = n(143582),
    rx = n(241524),
    rk = n(19311),
    rU = n(4126);
let rG = "(max-width: 485px)";
var rF = n(702361),
    rV = n(938430);
function rB(e) {
    let { step: t, onClose: n } = e,
        i = (0, rx.A)("(max-height: 450px)");
    return t === u.pn.CONFIRM || t === u.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: eR()(rF.N1, t4.G),
              children: [
                  !i &&
                      (0, r.jsx)("div", {
                          className: rF.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rF.F0,
                          }),
                      }),
                  (0, r.jsx)(t1.D, {
                      className: rF.G3,
                      onClick: () => n(),
                      "aria-label": ec.intl.string(ec.t.cpT0Cq),
                      children: (0, r.jsx)(t2.P, { size: "md", color: "currentColor", className: rF.ut }),
                  }),
              ],
          });
}
function rj(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: s, title: a, subtitle: o, description: l } = e;
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: rF.RP,
              children: (0, r.jsxs)(rU.$K, {
                  children: [
                      (0, r.jsx)(rU.KF, { application: s, asset: t }),
                      (0, r.jsx)(rU.kj, { children: a }),
                      (0, r.jsx)(rU.ri, {}),
                      (0, r.jsx)(rU.Mx, { title: o, description: l }),
                      (0, r.jsx)(rU.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function rH(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rF.NV,
        children: [
            (0, r.jsx)("img", { src: rV, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(eU.D, {
                className: rF.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: ec.intl.format(ec.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(eM.E, {
                className: rF.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: ec.intl.format(ec.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsx)(eh.UX, {
                children: (0, r.jsx)(rk.Ay, {
                    onPrimary: n,
                    primaryCTA: rk.ti.CONTINUE,
                    primaryText: ec.intl.string(ec.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rY = n(967198);
let [rW, rK] = (0, Q.A)();
function r$(e) {
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
    return (0, r.jsx)(rW.Provider, { value: l, children: i });
}
n(938796);
var rz = n(266060),
    rq = n(163437),
    rZ = n(701273),
    rX = n(425013);
function rQ(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rX.RP,
        children: [
            (0, r.jsx)(eU.D, { className: rX.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(eM.E, { className: rX.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: rX.UD,
                children: [
                    o &&
                        (0, r.jsx)(eT.$, {
                            variant: "primary",
                            text: ec.intl.string(ec.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rZ.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(eT.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(eT.$, {
                            variant: "secondary",
                            text: ec.intl.string(ec.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function rJ(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rX.RP,
        children: [
            (0, r.jsx)(eU.D, {
                className: rX.RS,
                variant: "heading-lg/extrabold",
                children: ec.intl.format(ec.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(eM.E, {
                className: rX.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: ec.intl.format(ec.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rX.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rX.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eT.$, {
                            variant: "primary",
                            text: ec.intl.string(ec.t["8L5bZG"]),
                            onClick: () => (0, rZ.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eT.$, { variant: "secondary", text: ec.intl.string(ec.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function r0(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rz.K)(),
        { subscriptionMetadataRequest: a } = rK(),
        { application: o } = (0, nh.V)(),
        l = (0, nf.S3)(),
        c = (0, rx.A)(rG),
        d = (0, g.bG)([x.A], () => x.A.getGuild(a?.guild_id)),
        _ = s.useCallback(() => t(u.pn.REVIEW), [t]);
    if (null == l) return null;
    let h = (0, rq.bg)(l.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eh.dZ, {
                children: c
                    ? (0, r.jsx)(rQ, {
                          confirmCta: ec.intl.string(ec.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: ec.intl.format(ec.t["6n6oXA"], { tier: l.name }),
                          subtitle: h
                              ? ec.intl.string(ec.t.lzAoKB)
                              : ec.intl.formatToPlainString(ec.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rj, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: o ?? void 0,
                          title: ec.intl.format(ec.t.haiCxc, { tier: l.name }),
                          subtitle: h ? ec.intl.string(ec.t.RvtbP5) : ec.intl.string(ec.t.zY39Zu),
                          description: h
                              ? ec.intl.formatToPlainString(ec.t.QCe4rY, { applicationName: o?.name })
                              : ec.intl.string(ec.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, r.jsx)(eh.UX, {
                    children: (0, r.jsx)(rk.Ay, {
                        onBack: n,
                        backText: ec.intl.string(ec.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: rk.ti.CONTINUE,
                        primaryText: ec.intl.string(ec.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var r1 = n(21161);
function r2(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: a } = e,
        o = (0, rz.K)(),
        { application: l } = (0, nh.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, O.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, nf.S3)(),
        h = (0, rx.A)(rG),
        { createMultipleConfettiAt: f } = s.useContext(r1.x),
        p = _?.name ?? "";
    function E() {
        i(), a?.();
    }
    let m = c === u.pn.CONFIRM,
        g = (0, rq.bg)(_?.flags ?? 0),
        A =
            null != o && o.benefits.length > 0
                ? ec.intl.formatToPlainString(ec.t["+IQQVM"], { benefitCount: o.benefits.length })
                : null,
        { showBenefitsFirst: I } = rK();
    return (
        I
            ? (t = h
                  ? (0, r.jsx)(rJ, { tierName: p, onConfirm: E, subscription: d })
                  : (0, r.jsx)(rH, { tierName: p, onConfirm: E, subscription: d }))
            : h
              ? (t = (0, r.jsx)(rQ, {
                    title: ec.intl.format(ec.t.ea6tZr, { tierName: p }),
                    subtitle:
                        null != o && o.benefits.length > 0
                            ? ec.intl.formatToPlainString(ec.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: E,
                    confirmCta: ec.intl.string(ec.t.nlkywz),
                }))
              : ((t =
                    null != o && null != l
                        ? (0, r.jsx)(rj, {
                              icon: o.thumbnail,
                              storeListingBenefits: o.benefits,
                              application: l,
                              title: ec.intl.format(ec.t["Q+qktS"], { tier: p }),
                              subtitle: ec.intl.string(ec.t.ECKxXU),
                              description: g
                                  ? ec.intl.format(ec.t["MAtQk/"], { applicationName: l?.name })
                                  : ec.intl.format(ec.t.vHkMF4, { tier: p }),
                          })
                        : (0, r.jsx)($.A, {})),
                (n = (0, r.jsx)(rk.Ay, {
                    onPrimary: E,
                    primaryCTA: rk.ti.CONTINUE,
                    primaryText: ec.intl.string(ec.t["JtWl+a"]),
                }))),
        s.useEffect(() => {
            n_.Ay.useReducedMotion && m && f(window.innerWidth / 2, window.innerHeight / 2);
        }, [f, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(eh.dZ, { children: [(0, r.jsx)(nT.A, {}), t] }),
                null != n && (0, r.jsx)(eh.UX, { children: n }),
            ],
        })
    );
}
var r3 = n(304072),
    r6 = n(427858),
    r4 = n(166926),
    r5 = n(424517);
let r7 = {
    CHECKOUT_FLOW: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: i,
                setSelectedSkuId: a,
                setSelectedPlanId: o,
                priceOptions: l,
            } = (0, O.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: c,
                subscriptionPriceOptionsLoading: d,
                displayCurrency: _,
            } = (0, K.Jn)(),
            { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: p } = rK(),
            E = (0, Y.Hp)(),
            m = q(),
            g = (0, w.l)(),
            { isGift: A } = (0, nn.Pv)(),
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
            let e = null != t ? es.A.get(t) : null;
            T ||
                E ||
                (n((t) => {
                    let n = null != e ? (0, e4.y8)(e.id, !1, A, { paymentSourceId: l.paymentSourceId }) : void 0;
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
            ? (0, r.jsx)($.A, {})
            : E
              ? (0, r.jsx)(W.oO, {})
              : null;
    },
    CustomHeaderComponent: function (e) {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rB, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: u.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(r0, { ...e }),
            options: { useBreadcrumbLabel: () => ec.intl.string(ec.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [u.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: a, analyticsLocation: o } = e,
                {
                    purchaseState: l,
                    contextMetadata: c,
                    purchaseError: d,
                    activeSubscription: _,
                } = (0, O.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    activeSubscription: e.activeSubscription,
                })),
                { subscriptionMetadataRequest: h, showBenefitsFirst: f } = rK(),
                p = f ? u.pn.BENEFITS : void 0,
                E = (0, N.A)(),
                m = (0, nf.S3)();
            if (null == E)
                throw new io.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: E },
                });
            let g = s.useRef(null),
                [A, I] = (0, r3.A)(!1, 500),
                T = (0, eY.mx)(),
                S = (0, rq.bg)(m?.flags ?? 0);
            s.useEffect(() => {
                null != d && null != g.current && g.current.scrollIntoView({ behavior: "smooth" });
            }, [d]);
            let y = s.useRef(null),
                C = s.useCallback(() => {
                    t(u.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return l === L.h.PURCHASING
                ? (0, r.jsx)($.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eh.dZ, {
                              children:
                                  null == _
                                      ? (0, r.jsx)(r5._, {
                                            selectedPlan: E,
                                            verifiedPlanId: E.id,
                                            planGroup: n,
                                            handlePaymentSourceAdd: C,
                                            metadata: S ? void 0 : h,
                                        })
                                      : (0, r.jsx)(r6.A, {
                                            selectedPlan: E,
                                            verifiedPlanId: E.id,
                                            premiumSubscription: _,
                                            handlePaymentSourceAdd: C,
                                            planGroup: n,
                                            hasOpenInvoice: null != i,
                                            purchaseState: l,
                                        }),
                          }),
                          (0, r.jsx)(eh.UX, {
                              children: (0, r.jsx)(r4.U, {
                                  premiumSubscription: _ ?? null,
                                  onBack: () => null != p && t(p),
                                  handleStepChange: t,
                                  postPurchaseStep: u.pn.CONFIRM,
                                  legalTermsNodeRef: y,
                                  flashLegalTerms: () => I(!0),
                                  analyticsLocation: o,
                                  baseAnalyticsData: a,
                                  flowStartTime: c.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: S ? void 0 : h,
                                  backButtonEligible: !!f || void 0,
                                  invoiceError: T,
                                  disablePurchase: h?.guild_id == null && !S,
                                  onPaymentSourceAdd: C,
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
                children: (0, r.jsx)(r$, {
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
                                (z.hP(),
                                (0, rP.f5)(r),
                                null != o && o(),
                                null != r && (i || rY.A.getGuildId() !== r) && (0, n2.pX)(eu.BVt.CHANNEL(r)));
                    },
                    [a, o, i, r],
                );
            return n({ ...t, onClose: l, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(r2, { ...e }) },
};
var r8 = n(989553);
function r9(e) {
    let { handleClose: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nh.V)(),
        s = (0, nf.gU)(),
        { isGift: a, giftRecipient: o } = (0, nn.Pv)();
    eg()(null != n, "Expected selectedSkuId"), eg()(null != i, "Expected application");
    let l = s[n];
    eg()(null != l, "Expected sku");
    let u = a
        ? ec.intl.formatToPlainString(ec.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : ec.intl.formatToPlainString(ec.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(eh.dZ, {
        children: [
            (0, r.jsx)(nT.A, {}),
            (0, r.jsxs)("div", {
                className: r8.EL,
                children: [
                    (0, r.jsx)(eU.D, { variant: "heading-xxl/bold", className: r8.RS, children: "Success!" }),
                    (0, r.jsx)(eM.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: r8.yF }),
                    (0, r.jsx)(eT.$, { onClick: t, text: ec.intl.string(ec.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var se = n(67480),
    st = n(328968),
    sn = n(371794),
    si = n(565756);
u.pn.GIFT_CUSTOMIZATION;
let sr = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rB, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: ey.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, nn.Pv)(),
                a = (0, O.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
                l = (0, g.bG)([se.A], () => (null != a ? se.A.get(a) : null), [a]),
                u = nQ(),
                c = (0, g.bG)([st.A], () => (null != a ? st.A.getForSKU(a) : null), [a]),
                d =
                    c?.headerBackground != null && l?.applicationId != null
                        ? (0, sn.YE)(l.applicationId, c.headerBackground, 256)
                        : void 0;
            async function _(e, t) {}
            let h = null == i || i.id === o?.id || t.length > eo.Jo,
                f = s.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(ey.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: ey.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: si.P6,
                        children: [
                            l?.name != null &&
                                (0, r.jsx)(eU.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: l?.name ?? "", className: si.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: si.P6,
                        children: [
                            (0, r.jsx)(nK, { recipients: u, selectedSkuId: a, validateSelectedGift: _ }),
                            (0, r.jsx)(nJ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: si.iX,
                                innerClassName: si.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: f,
            });
        },
        [u.pn.REVIEW]: tq.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(r9, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var ss = n(429913),
    sa = n(733391),
    so = n(871123),
    sl = n(26594),
    su = n(510022),
    sc = n(317560),
    sd = n(275256),
    s_ = n(910200),
    sh = n(208733);
function sf(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, ej.Ay)(),
        { selectedSkuId: i, entitlementsGranted: a } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: o } = (0, nh.V)(),
        l = (0, nf.gU)(),
        { isGift: u, giftRecipient: c } = (0, nn.Pv)();
    eg()(null != i, "Expected selectedSkuId"), eg()(null != o, "Expected application");
    let d = l[i];
    eg()(null != d, "Expected sku");
    let _ = a.find((e) => e.sku_id === i),
        h = (0, sl.G)(_, { isGift: u });
    return (s.useEffect(() => {
        u || ((0, sc.j)(), t(), (0, su.n)({ sku: d, application: o, analyticsLocations: n, entitlement: _ }));
    }, [u, d, o, t, n, _]),
    u)
        ? (0, r.jsxs)(eh.dZ, {
              children: [
                  (0, r.jsx)(nT.A, {}),
                  (0, r.jsxs)("div", {
                      className: sh.EL,
                      children: [
                          (0, r.jsx)("div", {
                              className: sh.KD,
                              children: (0, r.jsx)(sd.default, {
                                  imageUrl: (0, so.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, so.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: h?.graphic,
                              }),
                          }),
                          (0, r.jsx)(eU.D, {
                              variant: "heading-xl/semibold",
                              className: sh.RS,
                              children: ec.intl.string(ec.t["5glWta"]),
                          }),
                          (0, r.jsx)(eM.E, {
                              variant: "text-md/normal",
                              children: ec.intl.formatToPlainString(ec.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != h &&
                              (0, r.jsx)("div", {
                                  className: sh.Is,
                                  children: (0, r.jsx)(s_.O0, { Icon: h.Icon, text: h.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: sh.UD,
                              children: (0, r.jsx)(eT.$, {
                                  onClick: t,
                                  text: ec.intl.string(ec.t.cpT0Cq),
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
var sp = n(889137),
    sE = n(742158),
    sm = n(313961),
    sg = n(238017),
    sA = n(650588),
    sI = n(117218),
    sT = n(763827),
    sS = n(403362),
    sy = n(832163),
    sC = n(31969),
    sN = n(44724),
    sv = n(980094),
    sR = n(366523),
    sO = n(806931),
    sb = n(107610);
function sD(e) {
    let { handleClose: t, sku: n, application: i } = e,
        a = s.useCallback(() => {
            (0, sN.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        l = s.useCallback(() => {
            t();
            let e = sy.A.getStorefrontState(n.applicationId)?.activePage;
            (0, so.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, o.closeAllModals)(),
                (0, sN.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: sb.$O,
        children: (0, r.jsx)(eS.Q, {
            text: ec.intl.string(ec.t.ImioFL),
            onMouseDown: a,
            onClick: l,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let sL = {
    CHECKOUT_FLOW: ey.CL.SLAYER_STOREFRONT_CHECKOUT,
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
                        } = (0, nn.Pv)(),
                        A = (0, O.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, nh.V)(),
                        T = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = nQ()),
                            (i = (function (e) {
                                let t = (0, g.bG)([sT.A], () => (sT.A.isConnected() ? sT.A.getChannelId() : null)),
                                    [n, i] = s.useState([]);
                                return (
                                    s.useEffect(() => {
                                        let n = null != t ? sm.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, sO.Xw)(t) && !(0, sO.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, sO.Ay)(e) && !(0, sO.Ay)(t)
                                                ? -1
                                                : (0, sO.Ay)(t) && !(0, sO.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (a = (0, g.yK)([e2.default], () => m?.map(e2.default.getUser).filter(sS.Vq) ?? [], [m])),
                            s.useMemo(
                                () =>
                                    nz().uniqWith(
                                        [...(null != d ? [d] : []), ...a, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, a, i, n],
                            )),
                        y = (0, g.bG)([se.A], () => (null != A ? se.A.get(A) : null), [A]),
                        { userPrice: C } = (0, sI.CD)({ sku: y, priceSetAssignmentPurchaseType: eu.lid.GIFT }),
                        N = (0, sC.F)("gift_customization", { applicationId: I?.id, skuId: y?.id }),
                        v = (0, so.fq)(y),
                        R = (0, so.xf)(y);
                    async function b(e, t) {}
                    let D = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        L = () =>
                            (0, r.jsxs)("div", {
                                className: sb.mT,
                                children: [
                                    null != v &&
                                        (0, r.jsx)(sR.A, {
                                            containerClassName: sb.T3,
                                            cardImage: v,
                                            cardBackgroundImage: R,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: sb._T,
                                        children: [
                                            (0, r.jsx)(sA.A, { sound: h, onSelect: D }),
                                            (0, r.jsx)(sg.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        w = () =>
                            (0, r.jsxs)("div", {
                                className: sb.Tc,
                                children: [
                                    null != d && (E === eo.vQ.USER_PROFILE_WISHLIST || E === eo.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(n1.Z, { giftRecipient: d })
                                        : (0, r.jsx)(nK, { selectedSkuId: A, validateSelectedGift: b, recipients: S }),
                                    (0, r.jsx)(nJ.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: u,
                                        currentText: u,
                                        disableThemedBackground: !0,
                                        className: sb.iX,
                                        innerClassName: sb.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: sb.AN,
                                              children: [
                                                  (0, r.jsx)(sE.z, {
                                                      className: sb.jr,
                                                      children: ec.intl.string(ec.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: sb.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: sb.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != v &&
                                                                  (0, r.jsx)(sR.A, {
                                                                      containerClassName: sb.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: R,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: sb.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(sv.Q, { application: I }),
                                                                  (0, r.jsx)(eM.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: y.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eM.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != y &&
                                        (0, so.Ri)(y) &&
                                        (0, r.jsx)(eA.w, { type: "info", children: ec.intl.string(ec.t.lORYb6) }),
                                    null != N &&
                                        (0, r.jsx)(s_.O0, {
                                            Icon: N.Icon,
                                            text: N.text,
                                            endDatetime: N.endsAt,
                                            tooltip: N.tooltip,
                                        }),
                                    null != y && (0, r.jsx)(sD, { handleClose: l, sku: y, application: I }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: sb.Du, children: [L(), w()] });
                        },
                        getLeftColumnComponent: L,
                        getRightColumnComponent: w,
                        onStepChange: o,
                        onBackClick: l,
                        disabled: null == d || d.id === T?.id || u.length > eo.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = s.useMemo(() => ({ disabled: a }), [a]);
            return (0, r.jsx)(ey.Mw, {
                paymentModalStepProps: e,
                layout: ey.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: o,
            });
        },
        [u.pn.REVIEW]: tq.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(sf, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: a, isGift: o, skuId: l, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, ss.h)(t);
                    s.useEffect(() => {
                        null == i ||
                            null == n ||
                            st.A.isFetchingForSKU(n) ||
                            null != se.A.get(n) ||
                            (0, sa.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: a, skuId: l }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [l],
                    purchaseType: tl.VV.ONE_TIME,
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
            n = (0, sp.YW)(t)
                .with(u.pn.GIFT_CUSTOMIZATION, () => ec.intl.string(ec.t["JCFN/y"]))
                .with(u.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => ec.intl.string(ec.t.lDbi6H))
                .with(u.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(ne.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var sw = n(46225),
    sM = n(587895),
    sP = n(872452),
    sx = n(977445),
    sk = n(211287),
    sU = n(623373),
    sG = n(739508),
    sF = n(715054);
(0, a.A)();
var sV = n(136857),
    sB = n(158317),
    sj = n(855104);
n(322076);
var sH =
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
    sY = n(318254),
    sW = n(576052),
    sK = n(120992),
    s$ = n(601144),
    sz = n(319820),
    sq = n(200766);
function sZ(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: s } = (0, sz.AO)({ sku: t }),
        a = (0, s$.oO)(i);
    s ? (a = ec.intl.string(tu.default.qwSlCO)) : (0, sU.Ab)(i) && (a = ec.intl.string(ec.t["0TmQRG"]));
    let o = (0, s$.dL)(t),
        l = (0, no.EZ)(t.id) ? sW.m[t.id].render({ className: sq.$ }) : (0, r.jsx)(tr.WH, { sku: t, product: i });
    return (0, r.jsx)(tr.f7, { label: o, description: a, graphic: l, price: null != n ? `${n}` : "", PriceIcon: sY.C });
}
function sX(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, sK.c)({ applicationId: (0, d.P)(t), skuIDs: [t] });
    let i = (0, nd.bG)([se.A], () => se.A.get(t), [t]);
    return null == i
        ? (0, r.jsx)(eV.y, { type: eV.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(sZ, { sku: i, orbPriceAmount: n });
}
function sQ(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(sP.vW, { label: ec.intl.string(ec.t.y0WGqP), value: null != t ? `${t}` : "", Icon: sY.C });
}
function sJ() {
    return ec.intl.string(ec.t.wmcDyu);
}
function s0(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, tt.U)(),
        i = (function (e) {
            let { skuId: t } = e,
                n = sJ(),
                i = (0, g.bG)([se.A], () => se.A.get(t), [t]),
                r = i?.productLine,
                s = i?.applicationId,
                a = (0, g.bG)([sM.A], () => (r === eu.EZt.SOCIAL_LAYER_GAME_ITEM ? sM.A.getApplication(s) : null), [
                    s,
                    r,
                ]),
                { fetched: o, hasAlreadyLinked: l } = (0, sw.RD)(a);
            return r !== eu.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: sP.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: sP.I0.GiftGameShop,
                      purchaseButtonText: n,
                      applicationName: a?.name,
                      applicationId: s,
                      shouldAppendDisclaimer: o && !l,
                  };
        })({ skuId: t });
    return (0, r.jsx)(sP._P, { variant: i, paymentSourceType: null, immediateDelivery: n });
}
let s1 = (0, s.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    analyticsSourceLocation: void 0,
});
function s2() {
    return (0, s.useContext)(s1);
}
let s3 = { payment_gateway: tl.kM.VIRTUAL_CURRENCY, currency: eu.Yri.DISCORD_ORB },
    s6 = {
        CHECKOUT_FLOW: ey.CL.ORB_CHECKOUT,
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
                    } = s2(),
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
                            { enabled: h } = sk.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: p, orderOrbPriceAmount: E } = (0, O.t4)((e) => {
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
                                    { analyticsLocations: l } = (0, ej.Ay)(),
                                    {
                                        selectedSkuId: c,
                                        setPurchaseState: h,
                                        firstConstraintReasonCode: p,
                                    } = (0, O.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    E = (0, sj.gN)(),
                                    m = (0, s.useRef)(E),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = (function (e) {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: a } = (0, nh.V)(),
                                            { hasPaymentSources: o } = (0, il.jm)(),
                                            {
                                                loadId: l,
                                                startTime: c,
                                                discoverySessionId: h,
                                            } = (0, O.t4)((e) => e.contextMetadata),
                                            p = (0, s.useMemo)(
                                                () => ({
                                                    load_id: l,
                                                    discovery_session_id: h,
                                                    application_id: (0, d.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: a,
                                                    payment_gateway: tl.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: eu.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: eu.frM[eu.VVm.ONE_TIME],
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
                                                    e === eu.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(eu.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...p,
                                                              has_saved_payment_source: o,
                                                              payment_gateway: tl.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === eu.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(eu.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...p,
                                                                has_saved_payment_source: o,
                                                                initial_step: u.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === eu.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(eu.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...p,
                                                                  duration_ms: n,
                                                              })
                                                            : e === eu.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(eu.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...p,
                                                                    duration_ms: n,
                                                                })
                                                              : e === eu.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(eu.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(eu.HAw.PAYMENT_FLOW_FAILED, {
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
                                        (g(eu.HAw.PAYMENT_FLOW_FAILED, i), (m.current = null));
                                }, [i, g]);
                                let A = (0, s.useCallback)(() => {
                                        (m.current = E),
                                            g(eu.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                h(L.h.COMPLETED), o(u.pn.CONFIRM, { fulfillment: { entitlements: e } });
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
                                                if (e instanceof sB.FY && null != t)
                                                    switch (t) {
                                                        case sH.INSUFFICIENT_ORB_BALANCE:
                                                            return ec.intl.string(ec.t.keFvXM);
                                                        case sH.SKU_ALREADY_OWNED:
                                                            return ec.intl.string(ec.t.m371Mx);
                                                        case sH.BUNDLE_PARTIALLY_OWNED:
                                                            return ec.intl.string(ec.t.v9oC0p);
                                                        default:
                                                            return ec.intl.string(ec.t.fqJZ11);
                                                    }
                                                return e instanceof sB.j2
                                                    ? ec.intl.string(ec.t["2BmwgV"])
                                                    : e.code === sV.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? ec.intl.string(ec.t.keFvXM)
                                                      : e.code === sV.tG.ALREADY_PURCHASED
                                                        ? ec.intl.string(ec.t.m371Mx)
                                                        : e.code === sV.tG.BILLING_ORDER_NOT_SIGNABLE
                                                          ? ec.intl.string(ec.t.ZHgEG7)
                                                          : ec.intl.string(ec.t.fqJZ11);
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
                            N = (0, g.bG)([se.A], () => se.A.get(t), [t]),
                            v = (0, sx.uS)(N?.applicationId),
                            {
                                disabled: R,
                                tooltipText: b,
                                text: D,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, s.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: ec.intl.string(ec.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: ec.intl.string(ec.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: a, text: sJ() };
                            })({ orbBalance: I, orbPriceAmount: h ? p : A, isInTestMode: v }),
                            w = (0, s.useMemo)(
                                () => ({ onClick: T, loading: a, text: D, disabled: R, tooltipText: b }),
                                [T, a, D, R, b],
                            ),
                            M = y ? ec.intl.format(ec.t.fsOXXO, {}) : null,
                            P = v ? ec.intl.string(ec.t.OvMyMd) : null;
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
                            purchaseItemContent: (0, r.jsx)(sX, { skuId: t, orbPriceAmount: h ? E : A }),
                            paymentMethodContent: (0, r.jsx)(sQ, { orbBalance: I }),
                            legalContent: (0, r.jsx)(s0, { skuId: t }),
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
                        (0, r.jsx)(eh.dZ, { children: (0, r.jsx)(te.T, { ...p }) }),
                        (0, r.jsx)(eh.UX, { children: (0, r.jsx)(R.lo, { primaryButtonProps: h }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: a } = e,
                    { order: o, setOrder: l } = (0, O.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: _,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: a } = e,
                            o = (0, g.bG)([e2.default], () => e4.Ay.canUseShopDiscounts(e2.default.getCurrentUser())),
                            l = (0, g.bG)([se.A], () => se.A.get(t), [t]),
                            u = (0, sI.JL)({ sku: l }),
                            { product: c } = (0, nM.q)(t),
                            d = (0, s.useMemo)(() => {
                                if (null != u) return { orbPriceAmount: u.amount };
                                if (null != c) {
                                    let e = (0, sU.CW)({ product: c, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [u, c, o]);
                        d?.orbPriceAmount == null &&
                            (0, sG.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, sF.Q)({ skuId: t, loadId: n, order: a, onSignFailure: r }),
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
                return (0, r.jsx)(s1.Provider, { value: h, children: a });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = s2(),
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
                    })({ orbProductContext: i, overrideAnalyticParams: s3 });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: s3,
        },
    },
    s4 = {
        [h.C.ORB_CHECKOUT]: {
            flowType: h.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: s6,
        },
        [h.C.COLLECTIBLES_CHECKOUT]: {
            flowType: h.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ie,
        },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sL,
        },
        [h.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rM,
        },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: sr,
        },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: r7,
        },
        [h.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t9,
            flowType: h.C.GUILD_PRODUCT_CHECKOUT,
        },
        [h.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: ib,
            purchaseType: eu.VVm.SUBSCRIPTION,
        },
        [h.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_BOOST_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: tz,
        },
    };
var s5 = n(735305);
function s7(e) {
    let { returnStep: t = u.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
        { purchaseType: a } = (0, O.t4)((e) => ({ purchaseType: e.purchaseType })),
        o = s.useCallback(
            () =>
                (function (e) {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = u.pn.REVIEW,
                        returnStepIfNoPaymentSources: i,
                        purchaseType: r,
                    } = e;
                    if (0 === Object.keys(X.A.paymentSources).length) {
                        if (null != i) return void t.handleStepChange(i);
                        r === tl.VV.SUBSCRIPTION
                            ? t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS })
                            : t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: a }),
            [t, n, i, a],
        );
    return (0, r.jsx)(s5.x, { ...i, onReturn: o });
}
function s8(e) {
    let { initialPlanId: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        i = (0, N.A)(),
        { isGift: a, claimableRewards: o } = (0, nn.Pv)(),
        l = rI({ isGift: a, skuId: n }),
        c = (0, iZ.lp)(l),
        d = (0, id.px)(i, a, o),
        _ = s.useMemo(() => {
            let e = null == t ? u.pn.PLAN_SELECT : u.pn.REVIEW;
            return c && (e = u.pn.REVIEW), d && (e = u.pn.SELECT_FREE_SKU), e;
        }, [c, d, t]);
    return (0, r.jsx)(s7, { paymentModalStepProps: e, returnStep: u.pn.REVIEW, returnStepIfNoPaymentSources: _ });
}
function s9(e) {
    let { checkoutFlow: t, returnStep: n = u.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: s } = e;
    return t === h.C.PREMIUM_CHECKOUT
        ? (0, r.jsx)(s8, { ...s })
        : (0, r.jsx)(s7, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
}
var ae = n(339048),
    at = n(469778),
    an = n(579151),
    ai = n(599062);
function ar() {
    let { refreshCategories: e } = (0, an.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ne.rQ, { title: ec.intl.string(ec.t["p8+qtU"]) }),
            (0, r.jsx)(H.c, { children: (0, r.jsx)(ai.h, { onRetry: e, errorOrigin: ai.A.GIFT_MODAL }) }),
        ],
    });
}
function as(e) {
    let { handleStepChange: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: a } = (0, il.jm)(),
        { application: o } = (0, nh.V)(),
        l = (0, Y.Hp)(),
        c = (0, nf.gU)(),
        d = (0, nf.Hu)(),
        { isGift: _ } = (0, nn.Pv)(),
        [h, f] = s.useState(!0),
        [p, E] = (0, nd.yK)([np.A], () => [np.A.isFetchingCategories, np.A.error]);
    return (s.useEffect(() => {
        let e = null != o;
        d && a && e && f(p);
    }, [d, a, o, p]),
    s.useEffect(() => {
        if (h || l || null == n) return;
        let e = c[n];
        _ &&
        (e?.productLine === eu.EZt.COLLECTIBLES ||
            e?.productLine === eu.EZt.APPLICATION ||
            e?.productLine === eu.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(u.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(u.pn.ADD_PAYMENT_STEPS)
              : t(u.pn.REVIEW);
    }, [h, l, t, i, _, c, n]),
    h)
        ? (0, r.jsx)($.A, {})
        : l
          ? (0, r.jsx)(W.oO, {})
          : null != E
            ? (0, r.jsx)(ar, {})
            : null;
}
function aa(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: a } = e,
        { hasPaymentSources: o } = (0, il.jm)(),
        {
            selectedSkuId: l,
            setSelectedPlanId: c,
            activeSubscription: d,
            defaultPlanId: _,
            startedPaymentFlowWithPaymentSources: h,
        } = (0, O.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        f = (0, Y.Hp)(),
        p = q(),
        { hasFetchedRelatedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m } = (0, K.Jn)(),
        { isGift: g } = (0, nn.Pv)(),
        A = rI({ isGift: g, skuId: l }),
        I = !p || !E || m,
        T = (0, nd.bG)([at.A], () => at.A.applicationIdsFetched.has(eo.tv));
    return (iQ(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m },
        { tags: { app_context: "billing" } },
    ),
    s.useEffect(() => {
        if ((T || (0, ae.LM)(eo.tv), I || f)) return;
        let e = (0, iZ.vT)({ isTrial: A, isGift: g, selectedSkuId: l, startedPaymentFlowWithPaymentSources: h });
        null != a
            ? i(u.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: a })
            : null != n
              ? n !== eo.gD.PREMIUM_GROUP_MONTH || o
                  ? i(u.pn.REVIEW)
                  : i(u.pn.ADD_PAYMENT_STEPS)
              : e
                ? (c((0, iZ.xT)(l, d, _)), i(u.pn.REVIEW))
                : null != t
                  ? i(u.pn.PLAN_SELECT)
                  : i(u.pn.SKU_SELECT);
    }, [a, d, f, T, n, I, i, t, l, c, A, _, g, h, o]),
    I)
        ? (0, r.jsx)($.A, {})
        : f
          ? (0, r.jsx)(W.oO, {})
          : null;
}
var ao = n(891197),
    al = n(293035);
function au() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ru.A, {}), (0, r.jsx)(eh.dZ, { children: (0, r.jsx)(ao.N, { className: al.D }) })],
    });
}
var ac = n(830382),
    ad = n(349288),
    a_ = n(94204);
function ah(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: a_.a,
            children: [
                (0, r.jsx)(eU.D, { variant: "heading-xl/bold", children: ec.intl.string(ec.t.Q03WWV) }),
                (0, r.jsxs)("p", {
                    children: [
                        (0, r.jsx)(eM.E, { variant: "text-md/normal", children: ec.intl.string(ec.t.BxPxhI) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(eM.E, { variant: "text-md/normal", children: ec.intl.string(ec.t.Y3fdOp) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(eM.E, {
                            variant: "text-md/normal",
                            children: [
                                ec.intl.string(ec.t.Paa4v4),
                                "\xa0",
                                n
                                    ? ec.intl.string(ec.t.StGVvC)
                                    : (0, r.jsx)(ad.Anchor, { onClick: i, children: ec.intl.string(ec.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function af() {
    let e = s.useMemo(() => [{ variant: "primary", text: ec.intl.string(ec.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(iW.H, { actions: e });
}
var ap = n(599961);
function aE() {
    let [e, t] = s.useState(!1);
    async function n() {
        t(!0), await (0, ac.lo)();
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ru.A, {}),
            (0, r.jsx)(eh.dZ, { children: (0, r.jsx)(ah, { className: ap.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(eh.UX, { children: (0, r.jsx)(af, {}) }),
        ],
    });
}
let am = { key: null, renderStep: (e) => (0, r.jsx)(as, { ...e }), options: { modalSizeGetter: () => "md" } },
    ag = { key: null, renderStep: (e) => (0, r.jsx)(aa, { ...e }) },
    aA = [
        { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(aE, {}) },
        { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(au, {}), options: { renderHeader: !0 } },
    ];
function aI(e) {
    let { paymentModalStepProps: t, defaultStep: n } = e,
        i = (0, s.useRef)(!1),
        a = (0, Y.Hp)(),
        { handleStepChange: o } = t;
    return ((0, s.useEffect)(() => {
        a || i.current || (o(n), (i.current = !0));
    }, [a, o, n]),
    a)
        ? (0, r.jsx)(W.oO, {})
        : null;
}
let aT = {
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
    aS = (0, s.lazy)(() =>
        Promise.all([n.e("11005"), n.e("54791"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    ay = (e) => (0, r.jsx)(aS, { ...e });
class aC {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = s4[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = aT[e]),
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
              ? am
              : "subscription" === t
                ? ag
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(aI, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(s9, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => ec.intl.string(ec.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => ec.intl.string(ec.t.QBnNHq) },
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
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : aA), l]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? eu.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? eo.tv
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
        _.default.track(eu.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: eu.frM[this.checkoutFlowConfiguration.purchaseType],
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
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: eu.rzx.PREMIUM } : {}),
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
            v = { current: null },
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
                    (N.current = e.id), (v.current = e);
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
                            (m({ checkoutSucceeded: w, order: v.current }),
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
                fallback: (0, r.jsx)(R.Jg, {
                    transitionState: l.ip.ENTERED,
                    onClose: eu.tEg,
                    size: "md",
                    isModalContentLoading: !0,
                }),
                children: (0, r.jsx)(ay, { ...M, paymentModalOnClose: e, renderModalProps: t }),
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
