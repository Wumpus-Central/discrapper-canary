"use strict";
n.d(t, { o: () => ah }), n(321073);
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
    ed = n(782224);
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
    eQ = n(453769);
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
    tu = n(982772),
    tc = n(703345);
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
var tm = n(52407);
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
    tG = n(286636);
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
                                        if (
                                            (eg()(null != e, "Missing paymentSource"),
                                            (
                                                await (0, z.Ky)({
                                                    items: R,
                                                    paymentSource: e,
                                                    currency: l,
                                                    expectedInvoicePrice: a,
                                                    expectedRenewalPrice: c,
                                                })
                                            ).redirectConfirmation)
                                        ) {
                                            s = !0;
                                            return;
                                        }
                                    } else {
                                        let t = { items: (0, e4.aE)(T, R) };
                                        if (
                                            ((t.currency = T.currency ?? l),
                                            (t.paymentSource = null != o ? g[o] : void 0),
                                            null == t.paymentSource &&
                                                (eg()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = l)),
                                            (await (0, z.nV)(T, t, a, c, i.location_stack)).redirectConfirmation)
                                        ) {
                                            s = !0;
                                            return;
                                        }
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
                        n.e("18306"),
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
    t6 = n(58597),
    t4 = n(948642);
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
var t8 = n(270025);
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
    nl = n(589684);
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
    nB = n(555563);
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
    n3 = n(269951);
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
    iy = n(177443);
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
                                n.e("78046"),
                                n.e("5040"),
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
    iH = n(444629);
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
var iz = n(470568);
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
var iJ = n(463376),
    i0 = n(699595),
    i1 = n(442123),
    i2 = n(67948),
    i3 = n(807098),
    i6 = n(298305),
    i4 = n(599521);
function i5() {
    let e = (0, g.bG)([ih.A], () => {
            let e = ih.A.getMarketingComponentByType(is.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, nn.Pv)(),
        n = (0, i3.T)(e?.asset),
        i = (0, i3.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, id.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, id.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, id.x)(o, a),
        u = e?.assetVariant === i2.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: i4.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eR()([i4.my], { [i4.R_]: u }),
                      children: (0, r.jsx)(i6.A, {
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
var i7 = n(410516),
    i8 = n(361597),
    i9 = n(69494),
    re = n(622631),
    rt = n(597770),
    rn = n(102741),
    ri = n(669581);
function rr(e) {
    let { giftMessage: t = ec.intl.string(ec.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, nn.Pv)();
    return !n || (0, im.Ik)(i)
        ? null
        : (0, r.jsx)(rn.A, {
              className: ri.z,
              iconSize: rn.A.Sizes.SMALL,
              icon: rt.o,
              color: null == t ? rn.A.Colors.PRIMARY : rn.A.Colors.SECONDARY,
              children: t,
          });
}
var rs = n(71867),
    ra = n(515024);
function ro(e) {
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
        { isPremium: f, isEligibleForTrial: p, isEligibleForDiscount: E, discountOffer: m } = (0, iJ.i)(),
        g = (0, i7.YJ)(m),
        I = (0, N.A)(),
        T = (0, w.bB)(),
        { isGift: S, giftRecipient: y, giftMessage: C, claimableRewards: v } = (0, nn.Pv)(),
        R = (0, id.Mq)(I),
        b = (0, nd.bG)([ih.A], () => {
            let e = ih.A.getMarketingComponentByType(is.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        D = S && R && null != v && v.length > 0 && b,
        L = (p || E) ?? !1,
        { monthlyDefaultSelected: M } = i1.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${S ? "" : " - DO NOT USE"}`,
        }),
        P = (0, A.A)(M),
        x = s.useMemo(() => {
            let e = h;
            return S && P && null != c && (e = eo.En[c]), (0, e4.Tm)({ skuId: c, isPremium: f, defaultPlanId: e });
        }, [c, f, h, S, P]),
        k = E && null != g && x.includes(g) ? g : x[0],
        U = (0, nd.bG)([es.A], () => es.A.get(k)),
        G = [{ planId: U?.id, quantity: 1 }],
        [F, V] = s.useState(L),
        [B, j] = (0, eK.YV)({
            items: G,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    s.useEffect(() => {
        L && V(B?.subscriptionPeriodEnd == null);
    }, [B, L]),
        iQ(
            "Payment Modal Plan Select Step",
            F,
            5,
            { proratedInvoicePreview: B, proratedInvoiceError: j, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let H = j?.message ?? ec.intl.string(ec.t.R0RpRX),
        Y = L && null == j,
        W = L && null != j,
        K = Y && null == _ && B?.subscriptionPeriodEnd == null;
    (0, i0.W)({ priceOptions: d, trialId: o, discountInvoicePreview: B });
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
    if (K) return (0, r.jsx)(te.E, { className: ra.QW });
    eg()(null != T, "Step should be set"), eg()(x.length > 0, "Premium plan options should be set");
    let z = S
        ? (0, r.jsx)(i8.$p, { ...$ })
        : (0, r.jsx)(re.X, { ...$, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(rr, { giftMessage: C }),
            !(S && (0, im.Ik)(y)) && (0, r.jsx)(i9.A, { isEligibleForTrial: p }),
            (0, r.jsxs)(eh.dZ, {
                children: [
                    (0, r.jsx)(rs.P, { className: ra.ZB, planSkuId: U?.skuId }),
                    (0, r.jsx)(nT.A, {}),
                    W ? (0, r.jsx)(eA.w, { type: "critical", children: H }) : z,
                    Y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eR()(ra.IM, ra.Go) }),
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
                    D && (0, r.jsx)(i5, {}),
                    (0, r.jsx)(i$, {
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
var rl = n(862990),
    ru = n(672525);
function rc(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, O.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, eq.V)(i);
    return !t && null != r && null != n && eo.TP[r.trial_id].skus.includes(n);
}
var rd = n(327498);
function r_(e) {
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
    return (0, r.jsx)(rh, {
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
function rh(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, rl.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ne.rQ, { titleTextVariant: "heading-lg/semibold", title: ec.intl.string(ec.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(H.c, {
                      children: (0, r.jsx)("div", {
                          className: rd.eE,
                          children: (0, r.jsx)(ru.yS, {
                              onSelectSku: (e) => t((0, e4.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(H.c, {
                      children: (0, r.jsx)("div", {
                          className: rd.a2,
                          children: (0, r.jsx)(ru.Ay, {
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
var rf = n(825484),
    rp = n(137728);
function rE(e) {
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
        (0, r.jsx)(rp.A, {
            premiumType: _,
            titleText: ec.intl.string(ec.t["7VcWW0"]),
            subtitleText: ec.intl.format(ec.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, r.jsxs)(rf.e, {
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
var rm = n(242874),
    rg = n(573359),
    rA = n(165191),
    rI = n(237412),
    rT = n(300423);
let rS = [
        {
            key: u.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(r_, { ...e }),
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
            renderStep: (e) => (0, r.jsx)(rE, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: u.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(ro, { ...e }),
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
    ry = {
        CustomHeaderComponent: function (e) {
            let { onClose: t } = e,
                { selectedSkuId: n, purchaseState: i } = (0, O.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                a = (0, g.bG)([rg.A], () => rg.A.isDisplayingWowMomentConfirmation),
                {
                    isPremium: o,
                    isPremiumGroupPurchase: l,
                    isEligibleForTrial: c,
                    isEligibleForDiscount: d,
                } = (0, iJ.i)(),
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
                              className: rT.kL,
                              children: [
                                  (0, r.jsx)("div", {
                                      "aria-hidden": !0,
                                      style: { display: "contents" },
                                      children: (0, r.jsx)(rA.A, {
                                          defaultAnimationState: rm.oA.LOOP,
                                          giftStyle: p,
                                          className: rT.qq,
                                      }),
                                  }),
                                  (0, r.jsx)(tM.s_, { onClick: y, className: rT.b, "data-migration-pending": !0 }),
                              ],
                          }))
                        : S &&
                          (eg()(n in eo.WN, `invalid sku id: ${n}`),
                          (e = (0, r.jsx)(rI.A, {
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
        STEPS_BEFORE_CHECKOUT: rS,
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
var rC = n(143582),
    rN = n(241524),
    rv = n(19311),
    rR = n(4126);
let rO = "(max-width: 485px)";
var rb = n(955289),
    rD = n(938430);
function rL(e) {
    let { step: t, onClose: n } = e,
        i = (0, rN.A)("(max-height: 450px)");
    return t === u.pn.CONFIRM || t === u.pn.BENEFITS
        ? (0, r.jsx)("div", {})
        : (0, r.jsxs)("div", {
              className: eR()(rb.N1, t4.G),
              children: [
                  !i &&
                      (0, r.jsx)("div", {
                          className: rb.oZ,
                          "aria-hidden": "true",
                          children: (0, r.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: rb.F0,
                          }),
                      }),
                  (0, r.jsx)(t1.D, {
                      className: rb.G3,
                      onClick: () => n(),
                      "aria-label": ec.intl.string(ec.t.cpT0Cq),
                      children: (0, r.jsx)(t2.P, { size: "md", color: "currentColor", className: rb.ut }),
                  }),
              ],
          });
}
function rw(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: s, title: a, subtitle: o, description: l } = e;
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: rb.RP,
              children: (0, r.jsxs)(rR.$K, {
                  children: [
                      (0, r.jsx)(rR.KF, { application: s, asset: t }),
                      (0, r.jsx)(rR.kj, { children: a }),
                      (0, r.jsx)(rR.ri, {}),
                      (0, r.jsx)(rR.Mx, { title: o, description: l }),
                      (0, r.jsx)(rR.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function rM(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rb.NV,
        children: [
            (0, r.jsx)("img", { src: rD, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(eU.D, {
                className: rb.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: ec.intl.format(ec.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(eM.E, {
                className: rb.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: ec.intl.format(ec.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsx)(eh.UX, {
                children: (0, r.jsx)(rv.Ay, {
                    onPrimary: n,
                    primaryCTA: rv.ti.CONTINUE,
                    primaryText: ec.intl.string(ec.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var rP = n(967198);
let [rx, rk] = (0, Q.A)();
function rU(e) {
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
    return (0, r.jsx)(rx.Provider, { value: l, children: i });
}
n(938796);
var rG = n(266060),
    rF = n(163437),
    rV = n(701273),
    rB = n(705077);
function rj(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: rB.RP,
        children: [
            (0, r.jsx)(eU.D, { className: rB.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(eM.E, { className: rB.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: rB.UD,
                children: [
                    o &&
                        (0, r.jsx)(eT.$, {
                            variant: "primary",
                            text: ec.intl.string(ec.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, rV.A)("application_sub_mweb_success_modal"),
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
function rH(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: rB.RP,
        children: [
            (0, r.jsx)(eU.D, {
                className: rB.RS,
                variant: "heading-lg/extrabold",
                children: ec.intl.format(ec.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(eM.E, {
                className: rB.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: ec.intl.format(ec.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: rB.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: rB.__invalid_openDiscordButton,
                        children: (0, r.jsx)(eT.$, {
                            variant: "primary",
                            text: ec.intl.string(ec.t["8L5bZG"]),
                            onClick: () => (0, rV.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(eT.$, { variant: "secondary", text: ec.intl.string(ec.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function rY(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, rG.K)(),
        { subscriptionMetadataRequest: a } = rk(),
        { application: o } = (0, nh.V)(),
        l = (0, nf.S3)(),
        c = (0, rN.A)(rO),
        d = (0, g.bG)([x.A], () => x.A.getGuild(a?.guild_id)),
        _ = s.useCallback(() => t(u.pn.REVIEW), [t]);
    if (null == l) return null;
    let h = (0, rF.bg)(l.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eh.dZ, {
                children: c
                    ? (0, r.jsx)(rj, {
                          confirmCta: ec.intl.string(ec.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: ec.intl.format(ec.t["6n6oXA"], { tier: l.name }),
                          subtitle: h
                              ? ec.intl.string(ec.t.lzAoKB)
                              : ec.intl.formatToPlainString(ec.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(rw, {
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
                    children: (0, r.jsx)(rv.Ay, {
                        onBack: n,
                        backText: ec.intl.string(ec.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: rv.ti.CONTINUE,
                        primaryText: ec.intl.string(ec.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var rW = n(21161);
function rK(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: a } = e,
        o = (0, rG.K)(),
        { application: l } = (0, nh.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, O.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, nf.S3)(),
        h = (0, rN.A)(rO),
        { createMultipleConfettiAt: f } = s.useContext(rW.x),
        p = _?.name ?? "";
    function E() {
        i(), a?.();
    }
    let m = c === u.pn.CONFIRM,
        g = (0, rF.bg)(_?.flags ?? 0),
        A =
            null != o && o.benefits.length > 0
                ? ec.intl.formatToPlainString(ec.t["+IQQVM"], { benefitCount: o.benefits.length })
                : null,
        { showBenefitsFirst: I } = rk();
    return (
        I
            ? (t = h
                  ? (0, r.jsx)(rH, { tierName: p, onConfirm: E, subscription: d })
                  : (0, r.jsx)(rM, { tierName: p, onConfirm: E, subscription: d }))
            : h
              ? (t = (0, r.jsx)(rj, {
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
                        ? (0, r.jsx)(rw, {
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
                (n = (0, r.jsx)(rv.Ay, {
                    onPrimary: E,
                    primaryCTA: rv.ti.CONTINUE,
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
var r$ = n(304072),
    rz = n(427858),
    rq = n(166926),
    rZ = n(424517);
let rX = {
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
            { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: p } = rk(),
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
        return (0, r.jsx)(rL, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: u.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(rY, { ...e }),
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
                { subscriptionMetadataRequest: h, showBenefitsFirst: f } = rk(),
                p = f ? u.pn.BENEFITS : void 0,
                E = (0, N.A)(),
                m = (0, nf.S3)();
            if (null == E)
                throw new io.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: E },
                });
            let g = s.useRef(null),
                [A, I] = (0, r$.A)(!1, 500),
                T = (0, eY.mx)(),
                S = (0, rF.bg)(m?.flags ?? 0);
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
                                      ? (0, r.jsx)(rZ._, {
                                            selectedPlan: E,
                                            verifiedPlanId: E.id,
                                            planGroup: n,
                                            handlePaymentSourceAdd: C,
                                            metadata: S ? void 0 : h,
                                        })
                                      : (0, r.jsx)(rz.A, {
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
                              children: (0, r.jsx)(rq.U, {
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
                children: (0, r.jsx)(rU, {
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
                                (0, rC.f5)(r),
                                null != o && o(),
                                null != r && (i || rP.A.getGuildId() !== r) && (0, n2.pX)(eu.BVt.CHANNEL(r)));
                    },
                    [a, o, i, r],
                );
            return n({ ...t, onClose: l, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rK, { ...e }) },
};
var rQ = n(931313);
function rJ(e) {
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
                className: rQ.EL,
                children: [
                    (0, r.jsx)(eU.D, { variant: "heading-xxl/bold", className: rQ.RS, children: "Success!" }),
                    (0, r.jsx)(eM.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: rQ.yF }),
                    (0, r.jsx)(eT.$, { onClick: t, text: ec.intl.string(ec.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var r0 = n(67480),
    r1 = n(328968),
    r2 = n(371794),
    r3 = n(310844);
u.pn.GIFT_CUSTOMIZATION;
let r6 = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(rL, { step: t, onClose: i });
    },
    CHECKOUT_FLOW: ey.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, nn.Pv)(),
                a = (0, O.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([e2.default], () => e2.default.getCurrentUser()),
                l = (0, g.bG)([r0.A], () => (null != a ? r0.A.get(a) : null), [a]),
                u = nQ(),
                c = (0, g.bG)([r1.A], () => (null != a ? r1.A.getForSKU(a) : null), [a]),
                d =
                    c?.headerBackground != null && l?.applicationId != null
                        ? (0, r2.YE)(l.applicationId, c.headerBackground, 256)
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
                        className: r3.P6,
                        children: [
                            l?.name != null &&
                                (0, r.jsx)(eU.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: l?.name ?? "", className: r3.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, r.jsxs)("div", {
                        className: r3.P6,
                        children: [
                            (0, r.jsx)(nK, { recipients: u, selectedSkuId: a, validateSelectedGift: _ }),
                            (0, r.jsx)(nJ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: r3.iX,
                                innerClassName: r3.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: f,
            });
        },
        [u.pn.REVIEW]: tq.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(rJ, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var r4 = n(429913),
    r5 = n(733391),
    r7 = n(26594),
    r8 = n(510022),
    r9 = n(317560),
    se = n(366523),
    st = n(910200),
    sn = n(578909);
function si(e) {
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
        h = (0, r7.G)(_, { isGift: u });
    return (s.useEffect(() => {
        u || ((0, r9.j)(), t(), (0, r8.n)({ sku: d, application: o, analyticsLocations: n, entitlement: _ }));
    }, [u, d, o, t, n, _]),
    u)
        ? (0, r.jsxs)(eh.dZ, {
              children: [
                  (0, r.jsx)(nT.A, {}),
                  (0, r.jsxs)("div", {
                      className: sn.EL,
                      children: [
                          (0, r.jsx)(se.e, { sku: d, shape: "square", containerClassName: sn.LC }),
                          (0, r.jsx)(eU.D, {
                              variant: "heading-xl/semibold",
                              className: sn.RS,
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
                                  className: sn.Is,
                                  children: (0, r.jsx)(st.O, { Icon: h.Icon, text: h.text }),
                              }),
                          (0, r.jsx)("div", {
                              className: sn.UD,
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
var sr = n(889137),
    ss = n(742158),
    sa = n(313961),
    so = n(238017),
    sl = n(650588),
    su = n(117218),
    sc = n(763827),
    sd = n(403362),
    s_ = n(871123),
    sh = n(832163),
    sf = n(31969),
    sp = n(44724),
    sE = n(980094),
    sm = n(806931),
    sg = n(809114);
function sA(e) {
    let { handleClose: t, sku: n, application: i } = e,
        a = s.useCallback(() => {
            (0, sp.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        l = s.useCallback(() => {
            t();
            let e = sh.A.getStorefrontState(n.applicationId)?.activePage;
            (0, s_.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, o.closeAllModals)(),
                (0, sp.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: sg.$O,
        children: (0, r.jsx)(eS.Q, {
            text: ec.intl.string(ec.t.ImioFL),
            onMouseDown: a,
            onClick: l,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let sI = {
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
                                let t = (0, g.bG)([sc.A], () => (sc.A.isConnected() ? sc.A.getChannelId() : null)),
                                    [n, i] = s.useState([]);
                                return (
                                    s.useEffect(() => {
                                        let n = null != t ? sa.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, sm.Xw)(t) && !(0, sm.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, sm.Ay)(e) && !(0, sm.Ay)(t)
                                                ? -1
                                                : (0, sm.Ay)(t) && !(0, sm.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (a = (0, g.yK)([e2.default], () => m?.map(e2.default.getUser).filter(sd.Vq) ?? [], [m])),
                            s.useMemo(
                                () =>
                                    nz().uniqWith(
                                        [...(null != d ? [d] : []), ...a, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, a, i, n],
                            )),
                        y = (0, g.bG)([r0.A], () => (null != A ? r0.A.get(A) : null), [A]),
                        { userPrice: C } = (0, su.CD)({ sku: y, priceSetAssignmentPurchaseType: eu.lid.GIFT }),
                        N = (0, sf.F)("gift_customization", { applicationId: I?.id, skuId: y?.id }),
                        v = (0, s_.fq)(y),
                        R = (0, s_.xf)(y);
                    async function b(e, t) {}
                    let D = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        L = () =>
                            (0, r.jsxs)("div", {
                                className: sg.mT,
                                children: [
                                    null != v &&
                                        (0, r.jsx)(se.A, {
                                            containerClassName: sg.T3,
                                            cardImage: v,
                                            cardBackgroundImage: R,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: sg._T,
                                        children: [
                                            (0, r.jsx)(sl.A, { sound: h, onSelect: D }),
                                            (0, r.jsx)(so.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        w = () =>
                            (0, r.jsxs)("div", {
                                className: sg.Tc,
                                children: [
                                    null != d && (E === eo.vQ.USER_PROFILE_WISHLIST || E === eo.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(n1.Z, { giftRecipient: d })
                                        : (0, r.jsx)(nK, { selectedSkuId: A, validateSelectedGift: b, recipients: S }),
                                    (0, r.jsx)(nJ.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: u,
                                        currentText: u,
                                        disableThemedBackground: !0,
                                        className: sg.iX,
                                        innerClassName: sg.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: sg.AN,
                                              children: [
                                                  (0, r.jsx)(ss.z, {
                                                      className: sg.jr,
                                                      children: ec.intl.string(ec.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: sg.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: sg.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != v &&
                                                                  (0, r.jsx)(se.A, {
                                                                      containerClassName: sg.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: R,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: sg.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(sE.Q, { application: I }),
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
                                        (0, s_.Ri)(y) &&
                                        (0, r.jsx)(eA.w, { type: "info", children: ec.intl.string(ec.t.lORYb6) }),
                                    null != N &&
                                        (0, r.jsx)(st.O, {
                                            Icon: N.Icon,
                                            text: N.text,
                                            endDatetime: N.endsAt,
                                            tooltip: N.tooltip,
                                        }),
                                    null != y && (0, r.jsx)(sA, { handleClose: l, sku: y, application: I }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, r.jsxs)("div", { className: sg.Du, children: [L(), w()] });
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
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(si, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: a, isGift: o, skuId: l, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, r4.h)(t);
                    s.useEffect(() => {
                        null == i ||
                            null == n ||
                            r1.A.isFetchingForSKU(n) ||
                            null != r0.A.get(n) ||
                            (0, r5.Pp)(i.id, n);
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
            n = (0, sr.YW)(t)
                .with(u.pn.GIFT_CUSTOMIZATION, () => ec.intl.string(ec.t["JCFN/y"]))
                .with(u.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => ec.intl.string(ec.t.lDbi6H))
                .with(u.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(ne.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var sT = n(46225),
    sS = n(587895),
    sy = n(872452),
    sC = n(977445),
    sN = n(211287),
    sv = n(623373),
    sR = n(739508),
    sO = n(715054);
(0, a.A)();
var sb = n(136857),
    sD = n(158317),
    sL = n(855104);
n(322076);
var sw =
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
    sM = n(318254),
    sP = n(576052),
    sx = n(120992),
    sk = n(601144),
    sU = n(319820),
    sG = n(625982);
function sF(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: s } = (0, sU.AO)({ sku: t }),
        a = (0, sk.oO)(i);
    s ? (a = ec.intl.string(tu.default.qwSlCO)) : (0, sv.Ab)(i) && (a = ec.intl.string(ec.t["0TmQRG"]));
    let o = (0, sk.dL)(t),
        l = (0, no.EZ)(t.id) ? sP.m[t.id].render({ className: sG.$ }) : (0, r.jsx)(tr.WH, { sku: t, product: i });
    return (0, r.jsx)(tr.f7, { label: o, description: a, graphic: l, price: null != n ? `${n}` : "", PriceIcon: sM.C });
}
function sV(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, sx.c)({ applicationId: (0, d.P)(t), skuIDs: [t] });
    let i = (0, nd.bG)([r0.A], () => r0.A.get(t), [t]);
    return null == i
        ? (0, r.jsx)(eV.y, { type: eV.y.Type.PULSING_ELLIPSIS })
        : (0, r.jsx)(sF, { sku: i, orbPriceAmount: n });
}
function sB(e) {
    let { orbBalance: t } = e;
    return (0, r.jsx)(sy.vW, { label: ec.intl.string(ec.t.y0WGqP), value: null != t ? `${t}` : "", Icon: sM.C });
}
function sj() {
    return ec.intl.string(ec.t.wmcDyu);
}
function sH(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, tt.U)(),
        i = (function (e) {
            let { skuId: t } = e,
                n = sj(),
                i = (0, g.bG)([r0.A], () => r0.A.get(t), [t]),
                r = i?.productLine,
                s = i?.applicationId,
                a = (0, g.bG)([sS.A], () => (r === eu.EZt.SOCIAL_LAYER_GAME_ITEM ? sS.A.getApplication(s) : null), [
                    s,
                    r,
                ]),
                { fetched: o, hasAlreadyLinked: l } = (0, sT.RD)(a);
            return r !== eu.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: sy.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: sy.I0.GiftGameShop,
                      purchaseButtonText: n,
                      applicationName: a?.name,
                      applicationId: s,
                      shouldAppendDisclaimer: o && !l,
                  };
        })({ skuId: t });
    return (0, r.jsx)(sy._P, { variant: i, paymentSourceType: null, immediateDelivery: n });
}
let sY = (0, s.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    analyticsSourceLocation: void 0,
});
function sW() {
    return (0, s.useContext)(sY);
}
let sK = { payment_gateway: tl.kM.VIRTUAL_CURRENCY, currency: eu.Yri.DISCORD_ORB },
    s$ = {
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
                    } = sW(),
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
                            { enabled: h } = sN.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                    E = (0, sL.gN)(),
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
                                                if (e instanceof sD.FY && null != t)
                                                    switch (t) {
                                                        case sw.INSUFFICIENT_ORB_BALANCE:
                                                            return ec.intl.string(ec.t.keFvXM);
                                                        case sw.SKU_ALREADY_OWNED:
                                                            return ec.intl.string(ec.t.m371Mx);
                                                        case sw.BUNDLE_PARTIALLY_OWNED:
                                                            return ec.intl.string(ec.t.v9oC0p);
                                                        default:
                                                            return ec.intl.string(ec.t.fqJZ11);
                                                    }
                                                return e instanceof sD.j2
                                                    ? ec.intl.string(ec.t["2BmwgV"])
                                                    : e.code === sb.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? ec.intl.string(ec.t.keFvXM)
                                                      : e.code === sb.tG.ALREADY_PURCHASED
                                                        ? ec.intl.string(ec.t.m371Mx)
                                                        : e.code === sb.tG.BILLING_ORDER_NOT_SIGNABLE
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
                            N = (0, g.bG)([r0.A], () => r0.A.get(t), [t]),
                            v = (0, sC.uS)(N?.applicationId),
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
                                return { disabled: r, tooltipText: a, text: sj() };
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
                            purchaseItemContent: (0, r.jsx)(sV, { skuId: t, orbPriceAmount: h ? E : A }),
                            paymentMethodContent: (0, r.jsx)(sB, { orbBalance: I }),
                            legalContent: (0, r.jsx)(sH, { skuId: t }),
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
                            l = (0, g.bG)([r0.A], () => r0.A.get(t), [t]),
                            u = (0, su.JL)({ sku: l }),
                            { product: c } = (0, nM.q)(t),
                            d = (0, s.useMemo)(() => {
                                if (null != u) return { orbPriceAmount: u.amount };
                                if (null != c) {
                                    let e = (0, sv.CW)({ product: c, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [u, c, o]);
                        d?.orbPriceAmount == null &&
                            (0, sR.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, sO.Q)({ skuId: t, loadId: n, order: a, onSignFailure: r }),
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
                return (0, r.jsx)(sY.Provider, { value: h, children: a });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = sW(),
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
                    })({ orbProductContext: i, overrideAnalyticParams: sK });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: sK,
        },
    },
    sz = {
        [h.C.ORB_CHECKOUT]: {
            flowType: h.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: s$,
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
            TENANT_CHECKOUT_FLOW_CONFIG: sI,
        },
        [h.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: ry,
        },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: eu.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: r6,
        },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: eu.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: rX,
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
var sq = n(735305);
function sZ(e) {
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
    return (0, r.jsx)(sq.x, { ...i, onReturn: o });
}
function sX(e) {
    let { initialPlanId: t } = e,
        n = (0, O.t4)((e) => e.selectedSkuId),
        i = (0, N.A)(),
        { isGift: a, claimableRewards: o } = (0, nn.Pv)(),
        l = rc({ isGift: a, skuId: n }),
        c = (0, iZ.lp)(l),
        d = (0, id.px)(i, a, o),
        _ = s.useMemo(() => {
            let e = null == t ? u.pn.PLAN_SELECT : u.pn.REVIEW;
            return c && (e = u.pn.REVIEW), d && (e = u.pn.SELECT_FREE_SKU), e;
        }, [c, d, t]);
    return (0, r.jsx)(sZ, { paymentModalStepProps: e, returnStep: u.pn.REVIEW, returnStepIfNoPaymentSources: _ });
}
function sQ(e) {
    let { checkoutFlow: t, returnStep: n = u.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: s } = e;
    return t === h.C.PREMIUM_CHECKOUT
        ? (0, r.jsx)(sX, { ...s })
        : (0, r.jsx)(sZ, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
}
var sJ = n(339048),
    s0 = n(469778),
    s1 = n(579151),
    s2 = n(599062);
function s3() {
    let { refreshCategories: e } = (0, s1.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ne.rQ, { title: ec.intl.string(ec.t["p8+qtU"]) }),
            (0, r.jsx)(H.c, { children: (0, r.jsx)(s2.h, { onRetry: e, errorOrigin: s2.A.GIFT_MODAL }) }),
        ],
    });
}
function s6(e) {
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
            ? (0, r.jsx)(s3, {})
            : null;
}
function s4(e) {
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
        A = rc({ isGift: g, skuId: l }),
        I = !p || !E || m,
        T = (0, nd.bG)([s0.A], () => s0.A.applicationIdsFetched.has(eo.tv));
    return (iQ(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m },
        { tags: { app_context: "billing" } },
    ),
    s.useEffect(() => {
        if ((T || (0, sJ.LM)(eo.tv), I || f)) return;
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
var s5 = n(891197),
    s7 = n(520171);
function s8() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i9.A, {}), (0, r.jsx)(eh.dZ, { children: (0, r.jsx)(s5.N, { className: s7.D }) })],
    });
}
var s9 = n(830382),
    ae = n(349288),
    at = n(236540);
function an(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: at.a,
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
                                    : (0, r.jsx)(ae.Anchor, { onClick: i, children: ec.intl.string(ec.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ai() {
    let e = s.useMemo(() => [{ variant: "primary", text: ec.intl.string(ec.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(iW.H, { actions: e });
}
var ar = n(411097);
function as() {
    let [e, t] = s.useState(!1);
    async function n() {
        t(!0), await (0, s9.lo)();
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i9.A, {}),
            (0, r.jsx)(eh.dZ, { children: (0, r.jsx)(an, { className: ar.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(eh.UX, { children: (0, r.jsx)(ai, {}) }),
        ],
    });
}
let aa = { key: null, renderStep: (e) => (0, r.jsx)(s6, { ...e }), options: { modalSizeGetter: () => "md" } },
    ao = { key: null, renderStep: (e) => (0, r.jsx)(s4, { ...e }) },
    al = [
        { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(as, {}) },
        { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(s8, {}), options: { renderHeader: !0 } },
    ];
function au(e) {
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
let ac = {
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
    ad = (0, s.lazy)(() =>
        Promise.all([n.e("33041"), n.e("54791"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    a_ = (e) => (0, r.jsx)(ad, { ...e });
class ah {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = sz[e];
        if (
            !(function (e, t) {
                return null != t && t.implemented && t.flowType === e;
            })(e, t)
        )
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = ac[e]),
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
              ? aa
              : "subscription" === t
                ? ao
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(au, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(sQ, {
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
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : al), l]);
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
                        n.e("33041"),
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
                children: (0, r.jsx)(a_, { ...M, paymentModalOnClose: e, renderModalProps: t }),
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
