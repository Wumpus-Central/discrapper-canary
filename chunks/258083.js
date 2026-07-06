n.d(t, { Y: () => aC });
var l,
    i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(444927),
    o = n(964486),
    u = n(793574),
    c = n(120700),
    d = n(171835),
    p = n(211083),
    m = n(558620),
    h = n(584160),
    C = n(169797),
    E = n(650170),
    A = n(832286),
    f = n(958340),
    S = n(166532),
    y = n(566980),
    P = n(615310),
    I = n(489254),
    T = n(251913),
    _ = n(71393),
    g = n(178368),
    v = n(166403),
    x = n(473145),
    N = n(802790),
    R = n(636441),
    b = n(587491),
    M = n(285753),
    O = n(430993),
    j = n(86379),
    L = n(682174),
    D = n(655857),
    U = n(534479),
    w = n(121005),
    k = n(174459),
    G = n(61299),
    F = n(295405),
    B = n(786300);
let [Y, H, W] = (0, B.A)();
function V(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: l,
            children: o,
            guildId: u,
            analyticsLocation: c,
            analyticsSourceLocation: d,
            applicationId: p,
            intent: m,
            onSubscribeComplete: h,
        } = e,
        [C, A] = r.useState(t),
        [f, S] = r.useState(!0),
        y = (0, s.A)(() => Date.now()),
        P = (0, s.A)(() => (0, x.D$)(g.A.boostSlots).length),
        I = (0, E.t4)((e) => e.activeSubscription),
        T = (0, a.bG)([v.A], () => v.A.hasFetchedSubscriptions()),
        _ = (0, a.bG)([F.A], () => F.A.defaultPaymentSourceId),
        N = null != I ? I.paymentSourceId : null,
        R = (0, G._V)(null != N ? N : T ? _ : null);
    return (0, i.jsx)(Y.Provider, {
        value: {
            numGuildBoostsToPurchase: C,
            setNumGuildBoostsToPurchase: A,
            disablePremiumUpsell: n,
            closeGuildPerksModal: l,
            guildId: u,
            paymentModalArgs: R,
            premiumSubscriptionPaymentSourceId: N,
            analyticsLocation: c,
            analyticsSourceLocation: d,
            forceDisableSubmitButton: f,
            setForceDisableSubmitButton: S,
            applicationId: p,
            intent: m,
            onSubscribeComplete: h,
            flowStartTime: y,
            existingAvailableSlotCount: P,
        },
        children: o,
    });
}
var K = n(160946),
    Z = n(253390),
    q = n(97352),
    z = n(615396),
    $ = n(202541);
function X() {
    let e = (0, E.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = H(),
        n = (0, a.bG)([q.A], () => null == e || null != q.A.get(e.planId)),
        l = (0, K.Y)(),
        i = (0, a.bG)([q.A], () => (null != e ? (0, z.c9)(e.planId) : null)),
        s = r.useMemo(
            () => (null != e && n && l ? (0, Z.v)(e, t) : [{ planId: $.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, l, t],
        ),
        o = r.useMemo(
            () =>
                s.find((e) => {
                    let { planId: t } = e;
                    return $.pW.has(t);
                })?.planId ?? $.gD.PREMIUM_MONTH_GUILD,
            [s],
        ),
        u = null == e || (n && l);
    return {
        newAdditionalPlans: s,
        currentPremiumSubscriptionPlan: i,
        hasFetchedPremiumSubscriptionPlan: n,
        hasFetchedAdditionalPlans: u,
        premiumGuildSubscriptionPlanId: o,
    };
}
var Q = n(652215),
    J = n(375708),
    ee = n(898640);
function et(e) {
    let { message: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.s3, { title: J.intl.string(J.t.q9EGps) }),
            (0, i.jsx)(O.c, { children: (0, i.jsx)("p", { className: ee.C, children: t }) }),
        ],
    });
}
function en(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.activeSubscription),
        { guildId: l, analyticsLocation: a } = H(),
        s = (0, j.Hp)(),
        u = (0, w.A)(),
        { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, D.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = X(),
        m = null != n && null != n.renewalMutations,
        h = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        C = !u || !c || !p || null == d || "" === d;
    return ((0, o.Ay)(() => {
        m && k.default.track(Q.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: l });
    }),
    r.useEffect(() => {
        C || s || h || m || t(S.pn.PLAN_SELECT);
    }, [C, s, h, m, t]),
    h)
        ? (0, i.jsx)(et, { message: J.intl.string(J.t.mOWsF1) })
        : m
          ? (0, i.jsx)(et, { message: J.intl.string(J.t.npfhh0) })
          : C
            ? (0, i.jsx)(U.A, {})
            : s
              ? (0, i.jsx)(L.oO, {})
              : null;
}
var el = n(482132),
    ei = n(216641),
    er = n(879100);
function ea(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: l, paymentModalArgs: r, existingAvailableSlotCount: o } = H(),
        {
            activeSubscription: u,
            startingFractionalPremiumEndsAt: c,
            customCheckoutFlow: d,
            paymentSourceId: p,
        } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
        })),
        m = (0, a.bG)([f.A], () => (null != n ? f.A.getGuild(n) : void 0), [n]),
        h = null != n ? _.A.getGuild(n) : null,
        C = (0, s.A)(() => (0, z.b2)(c)),
        A = (0, a.bG)([q.A], () => (null != u ? (0, z.c9)(u.planId) : null)),
        { paymentSources: S } = r,
        y = (0, ei.g)(S, p),
        P = null != h ? h.name : null != m ? m.name : void 0,
        I = C && null != A && !$.YV.has(A.id);
    return (0, i.jsx)(el.dZ, {
        children: (0, i.jsx)(er.W, {
            guild: h,
            guildBoostQuantity: l + o,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: y,
            fallbackGuildName: P,
            didPurchaseOnFractionalPremium: I,
            customCheckoutFlow: d,
        }),
    });
}
var es = n(284009),
    eo = n.n(es),
    eu = n(683071),
    ec = n(512950),
    ed = n(821609),
    ep = n(123292),
    em = n(529427),
    eh = n(87719);
let eC = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(321073);
var eE = n(503698),
    eA = n.n(eE),
    ef = n(661531),
    eS = n(990078),
    ey = n(408278),
    eP = n(834040),
    eI = n(499373),
    eT = n(834730),
    e_ = n(403581),
    eg = n(663803),
    ev = n(320448),
    ex = n(534514),
    eN = n(104510),
    eR = n(695366),
    eb = n(289873),
    eM = n(726656),
    eO = n(688810),
    ej = n(531260),
    eL = n(666646),
    eD = n(404374),
    eU = n(543767),
    ew = n(881489),
    ek = n(477421),
    eG = n(234419),
    eF = n(363476),
    eB = n(531506),
    eY = n(51465);
function eH() {
    return (0, i.jsxs)("div", {
        className: eA()(eY.dt, eY.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eY.qq,
            }),
            (0, i.jsx)(eT.E, { variant: "text-sm/medium", className: eY.tD, children: J.intl.format(J.t.f5VHKm, {}) }),
        ],
    });
}
function eW(e) {
    let { text: t, color: n } = e;
    return (0, i.jsxs)("div", {
        className: eY.dt,
        children: [(0, i.jsx)(e_.t, { size: "md", className: eY.YW, color: n }), (0, i.jsx)("div", { children: t })],
    });
}
var eV = n(773669),
    eK = n(287809),
    eZ = n(975571),
    eq = n(252424),
    ez = n(428262),
    e$ = n(580630),
    eX = n(155718),
    eQ = n(606267),
    eJ = n(319668),
    e0 = n(38785),
    e2 = n(818824),
    e1 = n(596034),
    e3 = n(270537),
    e4 = n(241989),
    e7 = n(888751),
    e6 = n(874638),
    e5 = n(458785),
    e8 = n(818348),
    e9 = n(327105),
    te = n(7921);
function tt(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: l,
            totalDue: r,
            currency: a,
            startDate: s,
        } = e,
        { immediateDelivery: o } = (0, e2.U)();
    return (0, i.jsx)(e1._, {
        variant: {
            type: e1.I.Subscription,
            purchaseButtonText: J.intl.string(J.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: o,
    });
}
function tn(e) {
    return J.intl.format(J.t.IeaYqg, { endDate: e });
}
function tl(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: te.bU }),
            (0, i.jsx)(eT.E, { variant: "text-sm/normal", className: te.b7, children: t }),
            (0, i.jsx)("div", { className: te.bU }),
        ],
    });
}
function ti(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: r,
            checkoutInvoicePreview: a,
        } = e,
        s = (function (e) {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: l,
                formattedGuildBoostPrice: i,
                formattedGuildBoostRate: r,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: o,
                checkoutInvoicePreview: u,
            } = e;
            return {
                label: J.intl.formatToPlainString(J.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, ez.Mn)(n.id, !1, l),
                }),
                value: l ? i : r,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: o,
                currency: u.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        o = [];
    0 !== n &&
        o.push({
            id: "base-plan-adjustment",
            label: J.intl.formatToPlainString(J.t.ZSVged, { planName: (0, ez.RH)(l[0].subscriptionPlanId) }),
            tooltip: J.intl.string(J.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            o.push({
                id: "guild-boosting-adjustment",
                label: J.intl.string(J.t["+as5ZZ"]),
                tooltip: J.intl.string(J.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && o.push({ id: "tax", label: J.intl.string(J.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, e7.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, i.jsx)(e3.Vm, {
        defaultExpanded: !0,
        label: J.intl.string(e9.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function tr(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: l, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, i.jsx)(e5.m0, { proratedInvoice: l, renewalInvoice: r, isUpdate: t })
        : (0, i.jsx)(e5.m0, { renewalInvoice: r });
}
function ta(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: r,
            premiumSubscriptionPaymentSourceId: s,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: c,
            paymentSourceId: d,
            setPaymentSourceId: p,
            onPaymentSourceAdd: m,
        } = e,
        h = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: l,
                    currentPremiumSubscription: i,
                    premiumSubscriptionPlan: r,
                    newAdditionalPlans: s,
                } = e,
                o = (0, a.bG)([_.A, f.A], () => {
                    let e = _.A.getGuild(n);
                    return null != e ? e : f.A.isGuildFetching(n) ? null : f.A.getGuild(n);
                }, [n]),
                c = r.interval,
                d = r.intervalCount,
                p = (0, a.bG)([q.A], () => q.A.getForSkuAndInterval((0, ez.mH)($.pe.GUILD), c, d));
            eo()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, ez.J$)(l.paymentSourceId),
                h = (0, ew.ds)();
            t = null != i ? (0, ez.Om)(i, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: C } = (0, eO.Ay)(),
                [E, A] = (0, eU.YV)({
                    subscriptionId: i?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: u.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [S, y] = (0, eU.YV)({
                    subscriptionId: i?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: u.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eL.OQ)({
                    checkoutInvoicePreview: E,
                    checkoutInvoiceError: A,
                    renewalInvoicePreview: S,
                    renewalInvoiceError: y,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: h,
                    checkoutInvoicePreview: E,
                    renewalInvoicePreview: S,
                    isSubscriptionUpdate: null != i,
                }
            );
        })({
            guildId: t,
            priceOptions: l,
            currentPremiumSubscription: r,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: c,
        }),
        {
            isSubscriptionUpdate: C,
            guild: E,
            isPrepaid: A,
            isReverseTrial: S,
            checkoutInvoicePreview: y,
            renewalInvoicePreview: P,
        } = h,
        I = (0, eQ.A)({ location: "GuildBoostReview", message: J.intl.string(e9.default["tK8A/8"]) });
    if (null == y || null == P || null == E) return (0, i.jsx)(e0.E, {});
    let T = (0, i.jsx)(tr, {
            isSubscriptionUpdate: C,
            premiumSubscription: r,
            checkoutInvoicePreview: y,
            renewalInvoicePreview: P,
        }),
        g = (0, i.jsx)(eJ.n, {
            setPaymentSourceId: p,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: J.intl.string(J.t["u+Cw58"]),
            onPaymentSourceAdd: m,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        v = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: l,
                checkoutInvoicePreview: i,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, ei.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, e5.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: C,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: P,
            checkoutInvoicePreview: y,
            paymentSources: n,
            paymentSourceId: d,
        }),
        x = (0, i.jsx)(tt, { ...v }),
        N = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: l,
                    renewalInvoicePreview: i,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: s, isPrepaid: o, isReverseTrial: u } = a,
                c = n.interval,
                d = n.intervalCount;
            function p(e) {
                return (0, e6.Z)(l.invoiceItems).find((t) => $.pW.has(t.subscriptionPlanId) && e(t));
            }
            let m = p((e) => e.amount >= 0);
            eo()(null != m, "Missing guild boosting invoice item");
            let h = p((e) => e.amount < 0),
                C = null != h ? m.quantity - h.quantity : m.quantity,
                E = l.invoiceItems.filter((e) => (0, ez.xq)(e.subscriptionPlanId)),
                A = E.reduce((e, t) => e + t.amount, 0),
                f = (0, eU.sL)(m) * C,
                S = (0, e$.$g)(f, l.currency),
                y = (0, e$.CE)(S, c, d),
                P = (0, e$.$g)(l.total, l.currency) + (l.currency !== e8.Yr.USD ? "*" : ""),
                I = l.subtotal - f - A,
                T = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * C };
                }),
                _ = T.find((e) => e.type === eX.iS.SUBSCRIPTION_PLAN),
                g = T.find((e) => e.type === eX.iS.ENTITLEMENT),
                v = m.subscriptionPlanPrice * C;
            return {
                addedQuantity: C,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: S,
                formattedGuildBoostRate: y,
                formattedOriginalAmountGuildBoostRate: (0, e$.CE)((0, e$.$g)(v, l.currency), c, d),
                formattedTotal: P,
                basePlanAdjustment: A,
                basePlanInvoiceItems: E,
                guildBoostingAdjustment: I,
                subscriptionDiscount: _,
                entitlementDiscount: g,
                originalAmount: v,
                premiumSubscription: t,
                checkoutInvoicePreview: l,
                renewalInvoicePreview: i,
                priceOptions: r,
            };
        })({
            premiumSubscription: r,
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: y,
            renewalInvoicePreview: P,
            priceOptions: l,
            reviewState: h,
        }),
        R = (0, i.jsx)(ti, { ...N }),
        b = (function (e, t, n) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: a,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: o,
                    subscriptionDiscount: u,
                } = t,
                c = null != u;
            return {
                label: J.intl.formatToPlainString(J.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, ez.Mn)(r.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(e4.a6, {}),
                price: s,
                PriceIcon: c ? e_.t : void 0,
                priceTooltip: c ? J.intl.string(e9.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            E,
            N,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tn(l.currentPeriodEnd) } : null;
            })({ isPrepaid: A, isReverseTrial: S, premiumSubscription: r }),
        ),
        M = (0, i.jsx)(e4.f7, { ...b });
    return (0, i.jsx)(e0.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        purchaseItemContent: M,
        subscriptionDetailsContent: T,
        paymentMethodContent: g,
        invoiceSummaryContent: R,
        legalContent: x,
        invoiceTotalDueValue: N.formattedTotal,
        invoiceTotalDueLabel: J.intl.string(e9.default.R0cZsM),
    });
}
n(26279);
var ts = n(406263);
function to(e) {
    return "" === e || "-" === e;
}
function tu(e) {
    let { value: t, onChange: n, minValue: l = 1, maxValue: a = 30, ariaLabel: s } = e,
        [o, u] = r.useState(t);
    r.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof o;
    function d(e) {
        u(e), to(e) || n(e);
    }
    return (0, i.jsxs)("div", {
        className: ts.U$,
        children: [
            (0, i.jsx)(ey.K, {
                variant: "secondary",
                size: "md",
                icon: eP.Q,
                onClick: () => {
                    c && !(o <= l) && d(o - 1);
                },
                "aria-label": J.intl.string(J.t["k+ohJm"]),
                disabled: !c || o <= l,
            }),
            (0, i.jsx)("div", {
                className: ts.WJ,
                children: (0, i.jsx)("input", {
                    className: ts.Zh,
                    "aria-label": s,
                    inputMode: "numeric",
                    value: `${o}`,
                    onChange: (e) =>
                        (function (e) {
                            if (to(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= l) return void d(l);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        to(o) && u(t);
                    },
                }),
            }),
            (0, i.jsx)(ey.K, {
                variant: "secondary",
                size: "md",
                icon: eI.T,
                onClick: () => {
                    c && !(o >= a) && d(o + 1);
                },
                "aria-label": J.intl.string(J.t.w8Sc4B),
                disabled: !c || o >= a,
            }),
        ],
    });
}
function tc(e) {
    let { message: t } = e;
    return (0, i.jsx)(eT.E, { variant: "text-xs/normal", color: "text-muted", className: ts.jH, children: t });
}
function td(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: ts.Vk,
        children: [
            (0, i.jsx)("div", {
                className: ts.D0,
                children: (0, i.jsx)(e_.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: ts.ue,
                    color: eD.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: ts.yP, children: t }),
        ],
    });
}
function tp(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
        planLabel: a,
        planPriceContent: s,
        subtotalContent: o,
        refreshSubtotalContent: u,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: h,
        refreshDiscountCallout: C,
        legacyPricingNotes: E,
        refreshPricingNotes: A,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: te.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: te.E6,
                        children: [
                            (0, i.jsx)(eg.l, {
                                value: n,
                                onChange: (e) => l(e),
                                className: te.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: te.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eA()(te.QK, { [te.S]: t }), children: s }),
                ],
            }),
            (0, i.jsx)("div", { className: te.J3 }),
            (0, i.jsxs)("div", {
                className: te.mP,
                children: [
                    (0, i.jsx)(eT.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: J.intl.string(J.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", {
                        className: eA()(te.__invalid_planSelectorSubtotalPrice, { [te.S]: t }),
                        children: o,
                    }),
                ],
            }),
            E.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
            h,
        ],
    });
}
function tm(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
        refreshNextStepLabel: a,
        planLabel: s,
        planPriceContent: o,
        subtotalContent: u,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: h,
        discountCallout: C,
        refreshDiscountCallout: E,
        legacyPricingNotes: A,
        refreshPricingNotes: f,
    } = e;
    return (0, i.jsxs)("div", {
        className: ts.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: ts.K3,
                children: [
                    (0, i.jsx)(eT.E, {
                        variant: "text-md/medium",
                        className: ts.bk,
                        children: J.intl.string(J.t["r+SebU"]),
                    }),
                    (0, i.jsx)(ev._, { className: ts.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(eT.E, { variant: "text-md/medium", className: ts.kX, children: a }),
                ],
            }),
            p,
            h,
            (0, i.jsxs)("div", {
                className: ts.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: ts.fX,
                        children: [
                            (0, i.jsx)(tu, {
                                value: n,
                                onChange: (e) => l(e),
                                ariaLabel: s,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(eT.E, { variant: "text-md/medium", className: ts.ny, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eA()(ts.El, { [te.S]: t }), children: o }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: ts.fh,
                children: [
                    (0, i.jsx)(ex.D, {
                        variant: "heading-lg/semibold",
                        className: ts.O3,
                        children: J.intl.string(J.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: eA()(ts.BU, { [te.S]: t }), children: c }),
                ],
            }),
            f.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
        ],
    });
}
function th(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: te.Mv,
        children: [
            (0, i.jsx)(eN._, { className: te.T5, color: ef.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    J.intl.format(J.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != l
                        ? (0, i.jsx)(eS.m, {
                              text: J.intl.formatToPlainString(J.t.SFpsCH, {
                                  canceledCount: n,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eR.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: te.Y5,
                                  color: ef.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tC(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: l,
            setForceDisableSubmitButton: s,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: m = !1,
            showRefreshSubtotalRate: h = !1,
            refreshNextStepLabel: C = J.intl.string(J.t.QBnNHq),
        } = e,
        E = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: l,
                    numGuildBoosts: s,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: m,
                    showRefreshSubtotalRate: h,
                } = e,
                C =
                    ((t = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription())),
                    (0, a.bG)([F.A], () =>
                        t?.paymentSourceId != null ? F.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                E = l.interval,
                A = l.intervalCount,
                f = (0, a.bG)([q.A], () => q.A.getForSkuAndInterval((0, ez.mH)($.pe.GUILD), E, A)),
                S = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
                y = (0, ej.A)({ forceFetch: !1 });
            eo()(null != f, "Missing guildBoostingSubscriptionPlan");
            let P = [{ planId: f.id, quantity: 1 }],
                I = c?.items.find(
                    (e) => e.planId === $.gD.PREMIUM_MONTH_TIER_2 || e.planId === $.gD.PREMIUM_YEAR_TIER_2,
                );
            null != I && P.push(I);
            let T = c?.items.find((e) => e.planId === $.gD.PREMIUM_MONTH_GUILD || e.planId === $.gD.PREMIUM_YEAR_GUILD),
                _ = null == C || !$.uJ.has(C) || null == T,
                { analyticsLocations: g } = (0, eO.Ay)(),
                [N, R] = (0, eU.YV)({
                    subscriptionId: c?.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: m.currency,
                    preventFetch: _,
                    analyticsLocations: g,
                    analyticsLocation: u.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eL.Tr)(N, R);
            let b = !_ && null == N && null == R;
            r.useLayoutEffect(() => {
                o(b);
            }, [b, o]);
            let M = (0, eG.V)()?.subscription_trial?.sku_id === $.pe.TIER_2,
                O = ez.Ay.hasBoostDiscount(S),
                j = O && null != c && ez.Ay.isPremiumAtLeast(ez.Ay.getPremiumType(c.planId), $.PremiumTypes.TIER_1),
                L = N?.findInvoiceItemByPlanId(f.id),
                D =
                    null != L
                        ? { amount: L.amount, tax: 0, taxInclusive: !0, currency: N.currency }
                        : ez.Ay.getPrice(f.id, O, !1, m),
                U = s * D.amount,
                w = (0, ew.ds)() && O && null != c,
                k = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: l,
                            isReverseTrial: i,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: a,
                        } = e;
                    return (
                        (t = i ? "reverse_trial" : r ? "discount" : a ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: l === $.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: y.fractionalState,
                    isReverseTrial: w,
                    hasDiscountUpsell: j,
                    withTrialOfferCopyVariant: M,
                });
            "discount" === k.upsellVariant
                ? (eo()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (n = J.intl.format(J.t.hf6YOY, { planName: ez.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = J.intl.format("upsell_trial" === k.upsellVariant ? J.t.ba1L74 : J.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eq.l9)(eV.default.locale, $.oX / 100),
                      freeSubscriptionCount: $.M4,
                  }));
            let G = p.filter((e) => (0, x.I5)(e)).length,
                B = (0, ez.J$)(m.paymentSourceId),
                { ipCountryCode: Y } = (0, ek.A)(),
                H = "HR" === Y && D.currency === e8.Yr.EUR,
                W =
                    w && null != c
                        ? (0, i.jsx)(tl, { text: tn(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: eA()(te.hA, te.G3), children: J.intl.string(J.t.jNY1FO) }),
                V =
                    w && null != c
                        ? (0, i.jsx)(tl, { text: tn(c.currentPeriodEnd), className: te.jk })
                        : (0, i.jsx)(eT.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: ts._X,
                              children: J.intl.string(J.t.jNY1FO),
                          }),
                K = k.showExistingSlotNotice
                    ? (0, i.jsx)(th, { existingAvailableSlots: p, canceledCount: G, premiumSubscription: c })
                    : null,
                Z = k.showFractionalPremiumBanner ? (0, i.jsx)(eB.vi, { fractionalPremiumInfo: y }) : null,
                z = B
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === $.WT.YEAR
                              ? J.intl.string(J.t.YDpAzZ)
                              : t === $.WT.MONTH && 1 === n
                                ? J.intl.string(J.t["6ZR3By"])
                                : null;
                      })({ intervalType: E, intervalCount: A }) ?? J.intl.string(J.t.K9Bmze))
                    : J.intl.string(J.t.K9Bmze),
                X = b
                    ? (0, i.jsx)(eb.y, {})
                    : B
                      ? (0, e$.$g)(D.amount, D.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, e$.$g)(t, n);
                            return l === $.WT.YEAR
                                ? J.intl.formatToPlainString(J.t["8M04YJ"], { price: r })
                                : l === $.WT.MONTH && 1 === i
                                  ? J.intl.formatToPlainString(J.t.VStWCR, { price: r })
                                  : l === $.WT.MONTH && i > 1
                                    ? J.intl.formatToPlainString(J.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: E, intervalCount: A, amount: D.amount, currency: D.currency }),
                ee = b
                    ? (0, i.jsx)(eb.y, {})
                    : (0, i.jsx)(eF.A, {
                          price: U,
                          currency: D.currency,
                          intervalType: E,
                          intervalCount: A,
                          isPrepaidPaymentSource: B,
                      }),
                et = b
                    ? (0, i.jsx)(eb.y, {})
                    : h && !B
                      ? (0, e$.CE)((0, e$.$g)(U, D.currency), E, A)
                      : (0, e$.$g)(U, D.currency),
                en = [],
                el = [];
            if (H) {
                let e = (0, i.jsx)(
                    eM.A,
                    {
                        message: J.intl.formatToPlainString(J.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, e$.$g)(7.5345 * U, e8.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                en.push(e), el.push(e);
            }
            let ei = J.intl.format(J.t.Om31w8, { documentationLink: eZ.A.getArticleURL(Q.MVz.LOCALIZED_PRICING) });
            return (
                en.push((0, i.jsx)(eM.A, { message: ei }, "localized-pricing")),
                el.push((0, i.jsx)(tc, { message: ei }, "localized-pricing")),
                {
                    isLoading: b,
                    planLabel: z,
                    planPriceContent: X,
                    subtotalContent: ee,
                    refreshSubtotalContent: et,
                    legacyDescriptionContent: W,
                    refreshDescriptionContent: V,
                    existingSlotNotice: K,
                    fractionalBanner: Z,
                    legacyPricingNotes: en,
                    refreshPricingNotes: el,
                    discountCallout:
                        "reverse_trial" === k.upsellVariant
                            ? (0, i.jsx)(eH, {})
                            : (0, i.jsx)(eW, { text: n, color: eD.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === k.upsellVariant ? (0, i.jsx)(eH, {}) : (0, i.jsx)(td, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: s,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d,
            priceOptions: p,
            showRefreshSubtotalRate: h,
        });
    return (0, i.jsx)(m ? tm : tp, {
        isLoading: E.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: l,
        planLabel: E.planLabel,
        planPriceContent: E.planPriceContent,
        subtotalContent: E.subtotalContent,
        refreshSubtotalContent: E.refreshSubtotalContent,
        legacyDescriptionContent: E.legacyDescriptionContent,
        refreshDescriptionContent: E.refreshDescriptionContent,
        fractionalBanner: E.fractionalBanner,
        existingSlotNotice: E.existingSlotNotice,
        discountCallout: E.discountCallout,
        refreshDiscountCallout: E.refreshDiscountCallout,
        legacyPricingNotes: E.legacyPricingNotes,
        refreshPricingNotes: E.refreshPricingNotes,
        refreshNextStepLabel: C,
    });
}
let tE = $.gD.NONE_MONTH,
    tA = [$.pe.GUILD];
function tf(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: l,
            setNumGuildBoostsToPurchase: r,
            guildId: o,
            closeGuildPerksModal: u,
            disablePremiumUpsell: c,
            setForceDisableSubmitButton: d,
            forceDisableSubmitButton: p,
            paymentModalArgs: m,
            premiumSubscriptionPaymentSourceId: h,
        } = H(),
        { paymentSourceId: C, activeSubscription: A } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: y } = (0, D.Jn)(),
        P = null != h || Object.keys(m.paymentSources).length > 0,
        T = (0, S.Ir)(P ? S.pn.REVIEW : S.pn.ADD_PAYMENT_STEPS),
        v = (0, s.A)(() => (0, x.D$)(g.A.boostSlots)),
        N = (0, I.n)("GuildBoostPurchaseModal"),
        R = eC.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        b = N && R,
        M = (0, a.bG)([f.A], () => (null != o ? f.A.getGuild(o) : void 0), [o]),
        O = null != o ? _.A.getGuild(o) : null,
        j = null == M && null == O,
        L = null != A && A.isPurchasedExternally,
        U = Object.keys(m.paymentSources).length > 0,
        w = (0, a.bG)([q.A], () => (null != A ? (0, z.c9)(A.planId) : null)),
        k = (0, a.bG)([q.A], () => (null == w ? q.A.get(tE) : w));
    if (null == o) throw new em.vd({ message: "Missing guildId" });
    eo()(null != k, "Missing nextPremiumSubscriptionPlan");
    let G = (0, i.jsx)(tC, {
        premiumSubscriptionPlan: k,
        numGuildBoosts: l,
        setNumGuildBoosts: r,
        setForceDisableSubmitButton: d,
        premiumSubscription: A,
        existingAvailableSlots: v,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != u && u(), (0, eh.e)();
        },
        priceOptions:
            null != C ? { paymentSourceId: C, currency: null != y ? y : void 0 } : { currency: null != y ? y : void 0 },
        isRefreshEnabled: N,
        showRefreshSubtotalRate: b,
        refreshNextStepLabel: T,
    });
    return (
        L && null != A && null != A.paymentGateway
            ? (G = (0, i.jsxs)("div", {
                  className: ee.xK,
                  children: [
                      (0, i.jsx)(eu.w, {
                          type: "critical",
                          children: J.intl.format(J.t["/m3Y3s"], { paymentGatewayName: e8.qm[A.paymentGateway] }),
                      }),
                      G,
                  ],
              }))
            : null != o &&
              !f.A.isGuildFetching(o) &&
              j &&
              (G = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ec.p, {
                          messageType: ec.Y.ERROR,
                          className: ee.MR,
                          children: J.intl.string(J.t.eAn6z2),
                      }),
                      G,
                  ],
              })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(el.dZ, { children: G }),
                (0, i.jsx)(el.UX, {
                    children: (0, i.jsx)(er._, {
                        currentStep: S.pn.PLAN_SELECT,
                        isRefreshEnabled: N,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: N
                            ? (0, i.jsx)(ed.$, { variant: "secondary", text: J.intl.string(J.t["ETE/oC"]), onClick: t })
                            : (0, i.jsx)(ep.Q, { text: J.intl.string(J.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(ed.$, {
                            variant: "primary",
                            text: J.intl.string(J.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: l,
                                    isMissingGuildInformation: i,
                                } = e;
                                return t || 0 === n || l || i;
                            })({
                                forceDisableSubmitButton: p,
                                numGuildBoostsToPurchase: l,
                                isDisabledBecauseExternalSubscription: L,
                                isMissingGuildInformation: j,
                            }),
                            onClick: () => {
                                c || (null != w && w.premiumSubscriptionType === $.PremiumTypes.TIER_2)
                                    ? n(null != h || U ? S.pn.REVIEW : S.pn.ADD_PAYMENT_STEPS)
                                    : n(S.pn.PREMIUM_UPSELL);
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
    tP = n(183623),
    tI = n(95635),
    tT = n(935462),
    t_ = n(331322),
    tg = n(532794),
    tv = n(811611),
    tx = n(901017),
    tN = n(403052);
function tR(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, a.bG)([eV.default], () => eV.default.locale);
    return (0, i.jsxs)("div", {
        className: tN.mH,
        children: [
            (0, i.jsx)(tx.A, {
                icon: eN._,
                iconClassName: tN.pl,
                description: J.intl.formatToPlainString(J.t.sQBgs2, { numFreeGuildSubscriptions: $.M4 }),
                color: ef.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(tx.A, {
                icon: eN._,
                iconClassName: tN.pl,
                description: J.intl.formatToPlainString(J.t["1A6vXi"], { percent: (0, eq.l9)(n, $.oX / 100) }),
                color: ef.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, i.jsx)(tx.A, { icon: ty.n, iconClassName: tN.zO, description: J.intl.string(J.t.Z9b2x2) }) : null,
            (0, i.jsx)(tx.A, { icon: tP.F, iconClassName: tN.Kg, description: J.intl.string(J.t["8dqG5E"]) }),
            (0, i.jsx)(tx.A, { icon: tI.J, iconClassName: tN.$z, description: J.intl.string(J.t.cBorIy) }),
        ],
    });
}
function tb(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: l,
            onSkip: a,
            onSubscriptionConfirmation: s,
            analyticsLocation: o,
            analyticsSourceLocation: c,
            priceOptions: d,
        } = e,
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, eO.Ay)(u.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        h = null == t || null == t.premiumSubscriptionType,
        C = ez.Ay.getPrice($.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        E = (0, e$.$g)(C.amount, C.currency),
        A = (0, eG.V)(),
        f = A?.trial_id,
        S = A?.subscription_trial?.sku_id === $.pe.TIER_2;
    return (
        r.useEffect(() => {
            k.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, { type: $.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: m });
        }, [m]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tT.s_, { "data-migration-pending": !0, onClick: n, className: tN.b }),
                (0, i.jsxs)(O.c, {
                    children: [
                        S && (0, i.jsx)(tv.Vq, { className: tN.Fg }),
                        (0, i.jsx)("div", { className: eA()(tN.Tn, { [tN.NH]: S }) }),
                        (0, i.jsx)(eT.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != f
                                    ? J.intl.string(J.t.AoSzEr)
                                    : J.intl.format(J.t["7vePZb"], { monthlyPrice: E }),
                        }),
                        (0, i.jsx)(tR, { shouldUpsellFromNoneTier: h }),
                    ],
                }),
                (0, i.jsx)(tS.j, {
                    children: (0, i.jsxs)(t_.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(ep.Q, { text: J.intl.string(J.t["13/7kX"]), onClick: l, variant: "secondary" }),
                            (0, i.jsxs)(t_.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(ep.Q, {
                                        text: J.intl.string(J.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(ed.$, {
                                        variant: "active",
                                        text: null != f ? J.intl.string(J.t["Gd/XHF"]) : J.intl.string(J.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tg.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: $.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: Q.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: s,
                                                    trialId: f,
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
function tM(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: l } = e,
        { paymentModalArgs: s, analyticsLocation: o, analyticsSourceLocation: u } = H(),
        { paymentSourceId: c, activeSubscription: d } = (0, E.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, D.Jn)(),
        m = (0, a.bG)([q.A], () => (null != d ? (0, z.c9)(d.planId) : null)),
        h = (0, a.bG)([q.A], () => (null == m ? q.A.get(tE) : m));
    eo()(null != h, "Missing nextPremiumSubscriptionPlan"), eo()(null != p && "" !== p, "Currency not defined");
    let { paymentSources: C } = s,
        A = null != d ? d.paymentSourceId : null,
        f = Object.keys(C).length > 0,
        y = r.useCallback(() => n(S.pn.PLAN_SELECT), [n]),
        P = r.useCallback(() => n(null != A || f ? S.pn.REVIEW : S.pn.ADD_PAYMENT_STEPS), [n, A, f]);
    return (0, i.jsx)(tb, {
        premiumSubscriptionPlan: h,
        analyticsLocation: o,
        analyticsSourceLocation: u,
        onClose: t,
        onBack: y,
        onSkip: P,
        onSubscriptionConfirmation: l,
        priceOptions: null != c ? { paymentSourceId: c, currency: p } : { currency: p },
    });
}
var tO = n(277984),
    tj = n(364995),
    tL = n(820739);
async function tD(e, t) {
    await (0, tL.CD)();
    let n = (0, x.D$)(g.A.boostSlots);
    return (0, tL.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
let tU = [S.pn.PLAN_SELECT];
function tw() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = H(),
        { setIsSubmittingCurrentStep: i } = l,
        { paymentAuthenticationState: a } = (0, p.o)(),
        { setPurchaseState: s, setPurchaseError: o } = (0, E.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        u = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (a === T.oc.PENDING) {
                u.current = !0;
                return;
            }
            u.current &&
                ((u.current = !1),
                i(!1),
                a !== T.oc.NONE ||
                    null == e ||
                    (async () => {
                        try {
                            await tD(e, null != t), n?.();
                        } catch (e) {
                            s(y.h.FAIL), o(e);
                        }
                    })());
        }, [a, e, t, n, i, s, o]),
        null
    );
}
let tk = [
        { key: S.pn.PLAN_SELECT, renderStep: (e) => (0, i.jsx)(tf, { ...e }), options: { renderHeader: !0 } },
        {
            key: S.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, i.jsx)(tM, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    tG = {
        CHECKOUT_FLOW: c.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(en, { ...e }) },
        STEPS_BEFORE_CHECKOUT: tk,
        CHECKOUT_STEPS: {
            [S.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                    { guildId: s, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: u } = H(),
                    {
                        activeSubscription: c,
                        paymentSourceId: d,
                        setPaymentSourceId: p,
                    } = (0, E.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: m } = (0, D.Jn)();
                if (null == s) throw new em.vd({ message: "Missing guildId" });
                eo()(null != m && "" !== m, "Currency not defined");
                let { paymentSources: h } = o,
                    { newAdditionalPlans: A, currentPremiumSubscriptionPlan: f } = X(),
                    P = (0, a.bG)([q.A], () => (null == f ? q.A.get(tE) : f));
                eo()(null != P, "Missing nextPremiumSubscriptionPlan");
                let I = null != d ? { paymentSourceId: d, currency: m } : { currency: m },
                    T = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                            {
                                guildId: i,
                                paymentModalArgs: a,
                                premiumSubscriptionPaymentSourceId: s,
                                numGuildBoostsToPurchase: o,
                                analyticsLocation: u,
                                analyticsSourceLocation: c,
                                flowStartTime: d,
                                applicationId: p,
                                intent: m,
                                onSubscribeComplete: h,
                            } = H(),
                            { displayCurrency: C } = (0, D.Jn)(),
                            { paymentSources: A, setIsSubmittingCurrentStep: f, isSubmittingCurrentStep: P } = a,
                            {
                                activeSubscription: I,
                                paymentSourceId: T,
                                setPurchaseError: _,
                                hasAcceptedTerms: g,
                                setPurchaseState: v,
                            } = (0, E.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                            })),
                            x = (0, eL.sw)(),
                            {
                                newAdditionalPlans: N,
                                currentPremiumSubscriptionPlan: R,
                                premiumGuildSubscriptionPlanId: b,
                            } = X(),
                            M = (0, eQ.A)({
                                location: "GuildBoostPurchaseModal",
                                message: J.intl.string(e9.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: O } = (0, tj.t)(),
                            j = (0, eQ.iB)({
                                checkoutPaymentSources: O,
                                paymentSourceId: T,
                                location: "GuildBoostPurchaseModal",
                            }),
                            L = r.useMemo(
                                () => ({
                                    ...l,
                                    location: u,
                                    source: c,
                                    subscription_plan_id: b,
                                    sku_id: (0, ez.mH)($.pe.GUILD),
                                    quantity: o,
                                }),
                                [l, u, c, o, b],
                            ),
                            U = r.useMemo(() => {
                                let { guild_id: e, ...t } = L;
                                return t;
                            }, [L]),
                            w = null != T ? { paymentSourceId: T, currency: C ?? void 0 } : { currency: C ?? void 0 },
                            G = async () => {
                                eo()(null != N, "Missing newAdditionalPlans");
                                let e = (0, ei.W)(A, T);
                                _(null);
                                let r = !1;
                                try {
                                    v(y.h.PURCHASING),
                                        f(!0),
                                        eo()(null != T, "Missing paymentSourceId"),
                                        eo()(null != x, "Missing invoicePreview");
                                    let a = { amount: x.total, currency: x.currency },
                                        o = w.currency ?? x.currency,
                                        u = (0, ez.U8)(I, N, o.toLowerCase(), w.paymentSourceId);
                                    if (
                                        (k.default.track(Q.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...L,
                                            duration_ms: Date.now() - d,
                                            guild_id: i ?? void 0,
                                            application_id: p,
                                        }),
                                        null == I || null == R)
                                    ) {
                                        eo()(null != e, "Missing paymentSource");
                                        let t = await (0, tO.Ky)({
                                            items: N,
                                            paymentSource: e,
                                            currency: o,
                                            expectedInvoicePrice: a,
                                            expectedRenewalPrice: u,
                                        });
                                        if (t.redirectConfirmation) {
                                            r = !0;
                                            return;
                                        }
                                        if (t.pendingCustomerAction) return;
                                    } else {
                                        let t = { items: (0, ez.aE)(I, N) };
                                        (t.currency = I.currency ?? o),
                                            (t.paymentSource = null != s ? A[s] : void 0),
                                            null == t.paymentSource &&
                                                (eo()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = o));
                                        let n = await (0, tO.nV)(I, t, a, u, l.location_stack);
                                        if (n.redirectConfirmation) {
                                            r = !0;
                                            return;
                                        }
                                        if (n.pendingCustomerAction) return;
                                    }
                                    null == m && t(S.pn.CONFIRM),
                                        v(y.h.COMPLETED),
                                        null != i && (await tD(i, null != m)),
                                        null != m && n(),
                                        h?.();
                                } catch (t) {
                                    v(y.h.FAIL),
                                        _(t),
                                        k.default.track(Q.HAw.PAYMENT_FLOW_FAILED, {
                                            ...U,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === Q.hes.CARD
                                                        ? Q.kM_.STRIPE
                                                        : Q.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: T,
                                            duration_ms: Date.now() - d,
                                        });
                                } finally {
                                    r || f(!1);
                                }
                            };
                        return {
                            text: J.intl.string(J.t.eUEeCt),
                            loading: P,
                            disabled: null == T || !g || null != M || j,
                            onClick: G,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: l }),
                    _ = r.useCallback(() => {
                        t(S.pn.ADD_PAYMENT_STEPS), p(null);
                    }, [t, p]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(el.dZ, {
                            children: (0, i.jsx)(ta, {
                                guildId: s,
                                paymentSources: h,
                                priceOptions: I,
                                currentPremiumSubscription: c,
                                premiumSubscriptionPaymentSourceId: u,
                                premiumSubscriptionPlan: P,
                                newAdditionalPlans: A,
                                paymentSourceId: d,
                                setPaymentSourceId: p,
                                onPaymentSourceAdd: _,
                            }),
                        }),
                        (0, i.jsx)(el.UX, {
                            children: (0, i.jsx)(C.lo, {
                                onBackClick: () => t(S.pn.PLAN_SELECT),
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
                            intent: l,
                            disablePremiumUpsell: r,
                            onSubscribeComplete: u,
                            closeGuildPerksModal: p,
                            analyticsLocation: m,
                        },
                        applicationId: h,
                        analyticsSourceLocation: C,
                        stepConfigs: E,
                        loadId: S,
                        children: y,
                    } = e,
                    P = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
                    I = (0, s.A)(() => n - (0, x.D$)(g.A.boostSlots).length);
                return (
                    (0, o.Ay)(() => {
                        null != f.A.getGuild(t) || f.A.isGuildFetching(t) || (0, A.y)(t);
                    }),
                    (0, i.jsx)(d.M, {
                        activeSubscription: P,
                        stepConfigs: E,
                        skuIDs: tA,
                        loadId: S,
                        unifiedCheckoutFlow: c.C.GUILD_BOOST_CHECKOUT,
                        children: (0, i.jsxs)(V, {
                            initialNumGuildBoostsToPurchase: I,
                            disablePremiumUpsell: r,
                            closeGuildPerksModal: p,
                            guildId: t,
                            analyticsLocation: m,
                            analyticsSourceLocation: C,
                            applicationId: h,
                            intent: l,
                            onSubscribeComplete: u,
                            children: [(0, i.jsx)(tw, {}), y],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: l, guildId: a, existingAvailableSlotCount: s } = H(),
                    o = (0, P.bB)(),
                    u = (0, E.t4)((e) => e.purchaseState),
                    c = (0, I.n)("GuildBoostUnifiedCheckout"),
                    d = c && (o === S.pn.REVIEW || o === S.pn.CONFIRM),
                    p = (0, M.A)(d),
                    m = r.useMemo(() => ({ quantity: l }), [l]);
                return c && o === S.pn.CONFIRM
                    ? (0, i.jsx)(b.A, {
                          mediaUrls: p.mediaUrls,
                          isSuccess: p.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(u === y.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, i.jsx)(R.A, {
                                  transitionState: t.transitionState,
                                  guild: _.A.getGuild(a),
                                  guildBoostQuantity: l + s,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: m,
                          skipUnifiedHeaderForSteps: tU,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: u.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                l = (0, I.n)("GuildBoostUnifiedCheckout"),
                r = (0, E.t4)((e) => e.purchaseState),
                a = (0, m.A)();
            if (n === S.pn.PREMIUM_UPSELL) return null;
            if (n === S.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, i.jsx)(C.s3, { ...(0, h.uO)({ skuId: e, step: n }) });
            }
            return l
                ? (0, i.jsx)(C.s3, { title: (0, h.uO)({ skuId: null, step: n }).title })
                : (0, i.jsx)(N.A, { onClose: () => t(r === y.h.COMPLETED), currentStep: n, purchaseState: r });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(ea, { ...e }), options: { renderHeader: !0 } },
    };
var tF = n(630303),
    tB = n(192308),
    tY = n(871109);
let tH = r.createContext(void 0);
function tW() {
    let e = r.useContext(tH);
    return eo()(null != e, "GuildProductPurchaseContext not found"), e;
}
function tV(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, a.bG)([tY.A], () => tY.A.getGuildProduct(n));
    return (
        eo()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(tH.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function tK(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = tW(),
        a = (0, eL.sw)();
    return (
        (0, o.Ay)(() => {
            var e;
            eo()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: a }),
                (0, tB.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
                        n.e("34691"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, i.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var tZ = n(939249),
    tq = n(789645),
    tz = n(303612),
    t$ = n(916261),
    tX = n(575650);
function tQ(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(tZ.D, {
        className: eA()(t$.cG, t),
        onClick: n,
        children: (0, i.jsx)(tq.P, { size: "xs", color: "currentColor", className: t$.yP }),
    });
}
function tJ(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(tT.rQ, {
        className: eA()(t$.wx, tX.G, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(tz.A, { className: t$.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(tQ, { className: t$.b, onClose: n }),
        ],
    });
}
var t0 = n(196617);
let t2 = {
    CHECKOUT_FLOW: em.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [S.pn.REVIEW]: tF.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(tV, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: u.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = tW();
        return n === S.pn.CONFIRM
            ? null
            : (0, i.jsx)(tJ, { guildProductListing: l, className: t0.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(tK, { ...e }) },
};
var t1 = n(20742),
    t3 = n(848149),
    t4 = n(937008),
    t7 = n(106778),
    t6 = n(228366),
    t5 = n(213530),
    t8 = n(966971),
    t9 = n(758836),
    ne = n(483764);
let nt = { sliderBodyClassName: ne.Bz };
function nn(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(t7.Fk, { ref: n, className: ne.Lb, environment: t.current }),
            (0, i.jsx)(t5.K, { options: l, className: eA()(ne.Oh, { [ne.R]: !r }) }),
        ],
    });
}
var nl = n(702841),
    ni = n(775602),
    nr = n(31823),
    na = n(427675),
    ns = n(590180),
    no = n(953150),
    nu = n(524246),
    nc = n(14368),
    nd = n(61750),
    np = n(972607),
    nm = n(901930);
function nh(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: a,
            purchasePreviewError: s,
            appliedUserDiscounts: o,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, p.o)(),
        { application: c } = (0, nr.V)(),
        d = (0, na.gU)(),
        m = (0, nl.bG)([ns.A], () => ns.A.getProduct(l)),
        h = r.useRef(!1);
    eo()(null != l, "Expected selectedSkuId"), eo()(null != c, "Expected application");
    let C = d[l];
    eo()(null != C, "Expected sku");
    let A = null != u || null != a || null != s,
        f =
            o.length > 0
                ? J.intl.formatToPlainString(J.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (r.useEffect(() => {
        null == m ||
            A ||
            h.current ||
            ((h.current = !0),
            (0, nd.A)({
                product: m,
                overrideTitle: f,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: t9.gs.FIAT,
            }));
    }, [m, n, t, A, f]),
    A)
        ? (0, i.jsx)(el.dZ, { children: (0, i.jsx)(nm.A, {}) })
        : null;
}
function nC(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: a,
            giftRecipient: s,
            giftMessageError: o,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, t4.Pv)(),
        d = (0, nl.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        p = r.useRef(null),
        m = (0, E.t4)((e) => e.selectedSkuId),
        h = (0, nl.bG)([ns.A], () => ns.A.getProduct(m)),
        { confettiColors: C } = (0, no.A)(h?.styles);
    return (
        r.useEffect(() => {
            t &&
                null != s &&
                null != m &&
                (c === $.vQ.USER_PROFILE_WISHLIST || c === $.vQ.DM_CHANNEL_WISHLIST) &&
                t6.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: s.id });
        }, [t, s, m, c]),
        t
            ? (0, i.jsxs)("div", {
                  ref: p,
                  children: [
                      (0, i.jsx)(np.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: a,
                          giftRecipient: s,
                          giftMessageError: o,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, i.jsx)(nu.A, {
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, nc.rA)(h?.categorySkuId),
                              colors: C?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(nh, { ...e })
    );
}
var nE = n(662388),
    nA = n(993408),
    nf = n(575593),
    nS = n(452027),
    ny = n(922016),
    nP = n(778712),
    nI = n(986687),
    nT = n(999291),
    n_ = n(903209),
    ng = n(674658),
    nv = n(898461),
    nx = n(203632),
    nN = n(892118),
    nR = n(536572),
    nb = n(456839),
    nM = n(219103),
    nO = n(525723),
    nj = n(780651);
function nL(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: s,
            previewHeaderClassName: o,
            hideProfilePreview: u,
        } = e,
        { giftRecipient: c, giftRecipientError: d } = (0, t4.Pv)(),
        p = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
        m = ez.Ay.canUseShopDiscounts(p),
        h = (0, nT.Ay)(c?.id),
        C = r.useRef(null),
        [E, A] = r.useState(!1),
        { product: f } = (0, ng.q)(t, !0),
        S = r.useMemo(() => (0, nA.fT)(f, m), [f, m]),
        y = (0, nO.V_)(f);
    if (null == f || 0 === f.items.length) return null;
    let [P] = f.items,
        I = (0, nR.VG)(f),
        T = null != c && c.id !== p?.id && f.type !== nf.R.BUNDLE && P.type !== nf.R.NAMEPLATE && !u;
    return (0, i.jsxs)("div", {
        className: s,
        children: [
            (0, i.jsx)("div", {
                className: eA()(nj.QU, o),
                children: (0, i.jsx)(nS.D, {
                    label: J.intl.string(J.t.PpoJzt),
                    children:
                        T &&
                        (0, i.jsx)(
                            ny.Y,
                            {
                                targetElementRef: C,
                                align: "center",
                                shouldShow: E,
                                onRequestClose: () => A(!1),
                                preload: () => (0, n_.A)(c.id, c.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(nI.A, {
                                        ...e,
                                        user: c,
                                        pendingAvatar: c.getAvatarURL(null, (0, nP.FT)(nP._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, nv.T)(P) ? P : null,
                                        pendingProfileEffect: (0, nx.C3)(P) ? P : null,
                                        pendingProfileFrame: (0, nN.s)(P) ? P : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(tZ.D, {
                                        ...l,
                                        className: nj.Nx,
                                        innerRef: C,
                                        onClick: (e) => {
                                            A((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            E ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eT.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: J.intl.string(J.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: eA()(nj.i1, null != d ? nj.cN : nj.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: nj.Ug,
                        children: [
                            (0, i.jsx)(nb.O, { product: f }),
                            (0, i.jsxs)("div", {
                                className: nj.JZ,
                                children: [
                                    (0, i.jsx)(eT.E, { variant: "text-md/semibold", children: I }),
                                    (0, i.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            f?.type === nf.R.BUNDLE
                                                ? null
                                                : P.type === nf.R.AVATAR_DECORATION
                                                  ? J.intl.string(J.t["7v0T9P"])
                                                  : P.type === nf.R.NAMEPLATE
                                                    ? J.intl.string(J.t.x5CoXR)
                                                    : P.type === nf.R.PROFILE_EFFECT
                                                      ? J.intl.string(J.t.wR5wOo)
                                                      : P.type === nf.R.PROFILE_FRAME
                                                        ? J.intl.string(J.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(nM.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: S,
                                discountOfferAmount: y,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != d &&
                        (0, i.jsx)("div", {
                            className: nj.Wh,
                            children: (0, i.jsx)(eT.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: d,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var nD = n(783878),
    nU = n(966327),
    nw = n(427262);
let nk = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, t4.Pv)();
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)(nD.Z, {
                  selectionMode: "single",
                  label: J.intl.string(J.t.xFn72s),
                  placeholder: J.intl.string(J.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), s(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${nw.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(nU.A, { user: e, size: nP._3.SIZE_20 }),
                  })),
              }),
          });
};
var nG = n(735438),
    nF = n.n(nG),
    nB = n(427358),
    nY = n(570287),
    nH = n(994500);
function nW() {
    let e = (0, a.yK)([nH.A], () => nH.A.getFriendIDs()),
        t = (0, a.yK)([nB.A], () =>
            nB.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, nY.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = r.useMemo(() => nF().uniq([...e, ...t]), [e, t]);
    return (0, a.yK)(
        [eK.default],
        () =>
            n.reduce((e, t) => {
                let n = eK.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var nV = n(871181),
    nK = n(318007),
    nZ = n(285719),
    nq = n(976860),
    nz = n(353791);
function n$(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, eO.Ay)(u.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(ep.Q, {
        text: J.intl.string(J.t.J82mpK),
        onClick: function () {
            t(),
                (0, tB.closeAllModals)(),
                null == n
                    ? (0, nE.Cz)({ analyticsLocations: l, analyticsSource: u.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, nq.pX)(`${Q.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
let nX = (0, r.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: !1,
    skuIDs: [],
});
function nQ() {
    return (0, r.useContext)(nX);
}
function nJ(e) {
    let { hideConfirmStepConfetti: t, confettiCanvas: n } = nQ(),
        { analyticsLocations: l } = (0, eO.Ay)();
    return (0, i.jsx)(nC, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
}
let n0 = {
    [S.pn.GIFT_CUSTOMIZATION]: () => J.intl.string(J.t["JCFN/y"]),
    [S.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => J.intl.string(J.t.lDbi6H),
    [S.pn.CONFIRM]: () => "",
};
function n2(e) {
    let { step: t } = e,
        n = n0[t];
    return null == n ? null : (0, i.jsx)(t1.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let n1 = {
    CHECKOUT_FLOW: em.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [S.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    renderLeftColumn: l,
                    renderRightColumn: s,
                    ctaDisabled: u,
                    loading: c,
                } = (function (e) {
                    let { handleStepChange: t, handleClose: n } = e,
                        {
                            customGiftMessage: l = "",
                            setCustomGiftMessage: r,
                            giftRecipientError: s,
                            setGiftRecipientError: u,
                            validatingGiftRecipient: c,
                            giftRecipient: d,
                            giftingOrigin: p,
                            setValidatingGiftRecipient: m,
                        } = (0, t4.Pv)(),
                        { selectedSkuId: h, checkoutInvoicePreview: C } = (0, E.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        A = (0, na.gU)(),
                        f = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
                        S = nW();
                    async function y(e, t) {
                        m(!0), null != s && u(), (await (0, nE.JJ)(e.id, t)) || u(J.intl.string(J.t["4kgVqQ"])), m(!1);
                    }
                    function P() {
                        return (0, i.jsx)(nV.A, {
                            onTextChange: (e) => r?.(e),
                            pendingText: l,
                            currentText: l,
                            disableThemedBackground: !0,
                            className: nz.iX,
                            innerClassName: nz.pt,
                        });
                    }
                    return (
                        (0, o.Ay)(() => {
                            null != h &&
                                null != d &&
                                (p !== $.vQ.DM_CHANNEL_WISHLIST &&
                                    k.default.track(Q.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                y(d, h));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, i.jsx)("div", {
                                    className: nz.qL,
                                    children: (0, i.jsx)(nK.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: () => {
                                let e = (0, nA.pA)({ invoicePreview: C, selectedSkuId: h, skusById: A });
                                return p === $.vQ.USER_PROFILE_WISHLIST || p === $.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(nZ.Z, { giftRecipient: d }),
                                              P(),
                                              null != e &&
                                                  null != h &&
                                                  (0, i.jsx)(nL, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: nz.uW,
                                                      previewHeaderClassName: nz.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: nz.fi,
                                                  children: (0, i.jsx)(n$, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(nk, {
                                                  selectedSkuId: h,
                                                  recipients: S,
                                                  className: nz.uh,
                                                  validateSelectedGift: y,
                                              }),
                                              P(),
                                              null != e &&
                                                  null != h &&
                                                  (0, i.jsx)(nL, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: nz.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == d || d.id === f?.id || l.length > $.Jo,
                            loading: c,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                d = r.useMemo(() => ({ loading: c, disabled: u }), [c, u]);
            return (0, i.jsx)(em.Mw, {
                paymentModalStepProps: e,
                layout: em.XZ.TWO_COLUMN,
                renderLeftColumn: l,
                renderRightColumn: s,
                primaryCTAButtonProps: d,
            });
        },
        [S.pn.REVIEW]: tF.p,
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { skuId: t, children: n, ...l } = e,
                {
                    environment: a,
                    confettiCanvas: s,
                    setConfettiCanvas: o,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: c,
                    customConfettiDisplayOptions: p,
                    hideConfirmStepConfetti: m,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = r.useRef(new t7.OH()),
                        [l, i] = r.useState(null),
                        [a, s] = r.useState(!1),
                        o = r.useMemo(() => (0, t8.AB)({ purchaseType: t9.gs.FIAT, skuId: t }), [t]);
                    return {
                        environment: n,
                        confettiCanvas: l,
                        setConfettiCanvas: i,
                        customConfettiVisible: a,
                        setCustomConfettiVisible: s,
                        customConfettiDisplayOptions: o,
                        hideConfirmStepConfetti: null != o,
                    };
                })({ skuId: t }),
                h = (function (e) {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                C = (0, r.useMemo)(
                    () => ({ skuIDs: h, setCustomConfettiVisible: c, hideConfirmStepConfetti: m, confettiCanvas: s }),
                    [h, c, m, s],
                );
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(nn, {
                        environment: a,
                        setConfettiCanvas: o,
                        customConfettiDisplayOptions: p,
                        customConfettiVisible: u,
                    }),
                    (0, i.jsx)(d.M, {
                        ...l,
                        skuIDs: h,
                        stepConfigs: l.stepConfigs,
                        activeSubscription: null,
                        purchaseType: e8.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, i.jsx)(nX.Provider, { value: C, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: i } = nQ(),
                { isGift: a } = (0, t4.Pv)(),
                s = (0, t3.J)(),
                {
                    paymentModalSkuId: o,
                    paymentModalOnClose: u,
                    paymentModalOnComplete: c,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                        a = t[0] ?? null,
                        s = r.useCallback(() => {
                            i(!0), l?.();
                        }, [l, i]);
                    return {
                        paymentModalSkuId: a,
                        paymentModalOnClose: r.useCallback(
                            (e) => {
                                i(!1), n(e), t6.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, i],
                        ),
                        paymentModalOnComplete: s,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: i }),
                d = r.useCallback(
                    (e) => {
                        u(e), e && a && s();
                    },
                    [u, a, s],
                );
            return n({ ...t, skuId: o, onClose: d, onComplete: c, applicationId: Q.FYj });
        },
        tenantAnalyticsLocation: u.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, t4.Pv)();
        return n ? (0, i.jsx)(n2, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(nJ, { ...e }), options: nt },
};
var n3 = n(354033),
    n4 = n(491057),
    n7 = n(496142),
    n6 = n(877624),
    n5 = n(554146),
    n8 = n(71804),
    n9 = n(426398),
    le = n(841702),
    lt = n(367727),
    ln = n(380619),
    ll = n(709870),
    li = n(374200),
    lr = n(771566),
    la = n(625494),
    ls = n(45938),
    lo = n(97808),
    lu = n(912140),
    lc = n(780898),
    ld = n(344346),
    lp = n(837015),
    lm = n(258915);
function lh(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: l } = e,
        s = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
        o = (0, a.bG)([ni.Ay], () => ni.Ay.useReducedMotion),
        { analyticsLocations: u } = (0, eO.Ay)(),
        c = nP._3.SIZE_32,
        { product: d, isFetching: p } = (0, ng.q)(t),
        [m, h] = r.useState(!1),
        C = d?.items[0],
        {
            isNameplateReward: E,
            nameplateData: A,
            rewardAvatarDecorationSrc: f,
        } = r.useMemo(
            () =>
                null == C
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, lp.F)(C)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: C.skuId,
                                src: C.asset,
                                palette: (0, lc.H6)(C.palette ?? "sky"),
                                imgAlt: C.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nv.T)(C)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, lu.A)({
                                  legacyAssetId: C.asset,
                                  skuId: C.skuId,
                                  size: c,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [C, c, o],
        );
    return (0, i.jsx)(el.UX, {
        children: (0, i.jsx)(tS.j, {
            children: (0, i.jsxs)("div", {
                className: lm.W,
                children: [
                    E && null != A
                        ? (0, i.jsx)("div", {
                              className: lm.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, i.jsx)(ld.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: A,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, i.jsx)(lo.Js, {
                              "aria-label": s?.username,
                              size: c,
                              src: s?.getAvatarURL(void 0, (0, nP.FT)(c), !o),
                              avatarDecoration: f,
                          }),
                    (0, i.jsx)(ed.$, {
                        variant: "primary",
                        text: J.intl.string(J.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, nd.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: t9.gs.PROMOTIONAL,
                                    onCloseCallback: l,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var lC = n(49999);
function lE(e) {
    let t,
        {
            handleClose: l,
            planGroup: s,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: c,
            postSuccessGuild: d,
            followupSKUInfo: p,
            continueSessionToInitialStep: h,
        } = e,
        { paymentSources: C } = (0, n9.jm)(),
        {
            activeSubscription: A,
            selectedSkuId: f,
            updatedSubscription: S,
            paymentSourceId: y,
            isPremiumGroupPurchase: I,
            startingPremiumSubscriptionPlanId: T,
            startingFractionalPremiumEndsAt: _,
            checkoutInvoicePreview: g,
        } = (0, E.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        v = (0, m.A)(),
        x = (0, P.bB)(),
        {
            isGift: N,
            giftRecipient: R,
            giftCode: b,
            hasSentMessage: M,
            isSendingMessage: O,
            sendGiftMessage: j,
            claimableRewards: L,
            selectedGiftingPromotionReward: D,
            openGiftingBadgePostPurchaseModal: U,
        } = (0, t4.Pv)(),
        { confirmationFooter: w } = (0, n4.cG)(),
        G = (0, ln.px)(v, N, L),
        F = (0, ln.Mq)(v),
        B = (0, le.Mv)(D, !1),
        Y = (0, a.bG)([li.A], () => li.A.getGiftPromotion()?.id),
        H = (0, a.bG)([li.A], () => {
            let e = li.A.getMarketingComponentByType(n6.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        W = (0, ei.g)(C, y),
        V = N && null != D && null != B && F,
        K = { selectedPlan: v, selectedSkuId: f, step: x };
    if (null == v) throw new n8.v({ message: "Expected plan to be selected", extraSentryInformation: K });
    if (null == f) throw new n8.v({ message: "Expected selectedSkuId", extraSentryInformation: K });
    if (null == x) throw new n8.v({ message: "Step should be set", extraSentryInformation: K });
    let Z = r.useCallback(() => {
        l(), u?.();
    }, [l, u]);
    (0, o.Ay)(() => {
        I &&
            k.default.track(Q.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != S,
                has_any_premium_group: S?.hasAnyPremiumGroup ?? !1,
                subscription_id: S?.id,
            });
    });
    let q = null != g ? g.orbsReward : null;
    r.useEffect(() => {
        function e() {
            if (I)
                if (null != S && S.hasAnyPremiumGroup) {
                    k.default.track(Q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: S.id });
                    let e = (0, nG.uniqueId)("premium-group-purchase-flow-modal");
                    (0, tB.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("3515"),
                                n.e("44616"),
                                n.e("74630"),
                                n.e("48948"),
                                n.e("85579"),
                            ]).then(n.bind(n, 785606));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    subscription: S,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        la._.dispatch(Q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                la._.dispatch(Q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, tB.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    k.default.track(Q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != S,
                        has_any_premium_group: S?.hasAnyPremiumGroup ?? !1,
                    }),
                        la._.dispatch(Q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else null != q && q > 0 && (0, ll.$)({ orbsAmount: q });
        }
        return (
            la._.subscribe(Q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                la._.unsubscribe(Q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [I, S, q]),
        r.useEffect(() => {
            !N || null == R || null == b || M || O || (0, ls.Ik)(R) || j({ onSubscriptionConfirmation: u });
        }, [j, N, R, b, M, O, u]),
        r.useEffect(() => {
            G &&
                null != H &&
                null != Y &&
                (0, lt.qr)(n5.M.GIFTING_PROMOTION_REMINDER, Y, { dismissAction: lC.i.INDIRECT_ACTION });
        }, [H, Y, G]);
    let $ = null != h ? lr.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != c) t = c(v, Z, S);
    else if (N) t = (0, i.jsx)(lr.fw, { planId: v.id, onClose: Z });
    else {
        let e =
            T === v.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: p,
                      startingPremiumSubscriptionPlanId: T,
                      isDowngrade: null != A && (0, z.vT)(A, v.id, s),
                  };
        t = (0, i.jsx)(lr.Ay, {
            planId: v.id,
            onClose: Z,
            paymentSourceType: W,
            hideClose: null != w,
            startingFractionalPremiumEndsAt: _,
            customCTAType: $,
            ...e,
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(el.dZ, { children: [(0, i.jsx)(nm.A, {}), t] }),
            null != w && w,
            V && null != D && (0, i.jsx)(lh, { rewardSkuId: D, onClose: Z, onRewardModalClose: U }),
        ],
    });
}
let [lA, lf] = (0, B.A)(),
    lS = {
        CHECKOUT_FLOW: em.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [S.pn.REVIEW]: n7.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    a = r.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, i.jsx)(lA.Provider, { value: a, children: (0, i.jsx)(n4.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: r } = lf();
            return (0, i.jsx)(n3.Y, { onClose: t, listing: r, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(lE, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ly = n(73825),
    lP = n(960851),
    lI = n(607399),
    lT = n(795791),
    l_ = n(344159),
    lg = n(561794),
    lv = n(811656),
    lx = n(187322),
    lN = n(890856),
    lR = n(947641),
    lb = n(713517),
    lM = n(929283),
    lO = n(761365),
    lj = n(267861);
function lL(e) {
    let t,
        n,
        { skuId: l, user: a, claimed: s, onSelect: o, selectedSkuId: u } = e,
        [c, d] = r.useState(null),
        p = r.useCallback((e) => {
            d(e);
        }, []),
        m = r.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: h } = (0, lb.A)(m),
        C = !s && h,
        { product: E } = (0, ng.q)(l);
    if (null == E) return null;
    let A = E.items[0];
    return null == A
        ? null
        : ((0, nv.T)(A)
              ? ((n = nf.R.AVATAR_DECORATION),
                (t = (0, i.jsx)(lM.i, { item: A, user: a, isHighlighted: C, avatarSize: nP._3.SIZE_96 })))
              : (0, lp.F)(A) &&
                ((n = nf.R.NAMEPLATE),
                (t = (0, i.jsx)(lO.A, { nameplate: A, user: a, isHighlighted: C, size: "small" }))),
          (0, i.jsx)(lx.vN, {
              children: (0, i.jsxs)(lN.s, {
                  ref: p,
                  "aria-label": E.name ?? "",
                  onClick: function () {
                      null == l || null == o || s || o(l);
                  },
                  className: eA()(lj._x, { [lj.Vp]: !s, [lj.mr]: C, [lj.md]: u === l }),
                  children: [
                      (0, i.jsx)("div", {
                          className: eA()(lj.VH, {
                              [lj._Q]: n === nf.R.AVATAR_DECORATION,
                              [lj.M4]: n === nf.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: eA()(lj.i1, { [lj.Sf]: s }), children: t }),
                                            s &&
                                                (0, i.jsx)(lR.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: ef.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: lj.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, i.jsxs)("div", {
                          className: lj.tZ,
                          children: [
                              (0, i.jsx)(ex.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, i.jsx)(eT.E, {
                                  variant: "text-sm/normal",
                                  children: s ? J.intl.string(J.t["6cfuDj"]) : J.intl.string(J.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var lD = n(696208),
    lU = n(683433);
function lw(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: l,
            onBackClick: s,
            showBackButton: o,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: d,
            isNextDisabled: p = !1,
        } = e,
        { paymentSources: h } = (0, n9.jm)(),
        C = (0, m.A)(),
        { isGift: E, claimableRewards: A } = (0, t4.Pv)();
    l = l ?? h;
    let {
            variant: f,
            text: y,
            onClick: I,
            disabled: T,
        } = (function (e) {
            let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: l,
                    claimableRewards: i,
                    paymentSources: r,
                    shouldRenderUpdatedPaymentModal: s,
                    isTrial: o,
                    isNextDisabled: u = !1,
                } = e,
                c = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
                d = (0, m.A)(),
                p = (0, P.bB)(),
                { hasEntitlements: h } = (0, l_.X)(n, l),
                C = (null != c && null != c.paymentSourceId) || Object.keys(r).length > 0 || (h && !o);
            var E = s ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t.XqMe3N),
                A = S.pn.ADD_PAYMENT_STEPS;
            return (
                C && (A = S.pn.REVIEW),
                (0, ln.px)(d, l, i) && p !== S.pn.SELECT_FREE_SKU && (A = S.pn.SELECT_FREE_SKU),
                { variant: "primary", text: E, onClick: () => t(A), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? C?.id),
            isGift: E,
            claimableRewards: A,
            paymentSources: l,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: p,
        }),
        _ = r.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: f, text: y, onClick: I, disabled: T }]
                    : [{ variant: "primary", text: J.intl.string(J.t.XqMe3N), disabled: !0 }],
            [f, y, I, T, n, u],
        );
    return (0, i.jsx)(lD.H, { leading: o && null != s ? (0, i.jsx)(lU.A, { onClick: s }) : void 0, actions: _ });
}
var lk = n(328232);
function lG(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        l = (0, m.A)(),
        s = (0, P.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: u, claimableRewards: c } = (0, t4.Pv)(),
        d = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
        p = (0, a.yK)([li.A], () => li.A.getGiftPromotionRewardSkuIds()),
        h = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, u),
        [C, A] = r.useState(h),
        [f, y] = r.useState(!1);
    r.useEffect(() => {
        f || null != u || null == h || (o(h), A(h));
    }, [h, f, u, o]);
    let I = { selectedPlan: l, selectedSkuId: n, step: s };
    if (null == l) throw new n8.v({ message: "Expected plan to be selected", extraSentryInformation: I });
    if (null == n) throw new n8.v({ message: "Expected selectedSkuId", extraSentryInformation: I });
    if (null == s) throw new n8.v({ message: "Step should be set", extraSentryInformation: I });
    let T = r.useMemo(() => null != C && (c ?? []).includes(C), [C, c]),
        _ = r.useMemo(() => 0 === p.length || null == C || !T, [p, C, T]);
    function g(e) {
        o(e), A(e), y(!0);
    }
    r.useEffect(() => {
        if (0 === p.length) {
            A(void 0), o(void 0);
            return;
        }
        (null != C && T && p.includes(C)) || null == C || (A(void 0), o(void 0));
    }, [p, T, C, o]);
    let v = p.map((e) =>
            (0, i.jsx)(
                lL,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: g, selectedSkuId: C },
                e,
            ),
        ),
        x = (0, i.jsx)(el.UX, {
            children: (0, i.jsx)(lw, {
                onStepChange: t,
                onBackClick: () => t(S.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [l.id],
                selectedPlanId: l.id,
                isNextDisabled: _,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(t1.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: J.intl.string(J.t.OEtqpm),
                subtitle: J.intl.string(J.t.h2nMp0),
            }),
            (0, i.jsx)(O.c, {
                children: (0, i.jsx)(t_.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: lk.Dq, children: v }),
                }),
            }),
            x,
        ],
    });
}
var lF = n(800471),
    lB = n(428644),
    lY = n(396533),
    lH = n(463376),
    lW = n(699595),
    lV = n(442123),
    lK = n(67948),
    lZ = n(807098),
    lq = n(298305),
    lz = n(387745);
function l$() {
    let e = (0, a.bG)([li.A], () => {
            let e = li.A.getMarketingComponentByType(n6.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, t4.Pv)(),
        n = (0, lZ.T)(e?.asset),
        l = (0, lZ.T)(e?.backgroundAsset),
        r = e?.gradient,
        s =
            null != r && null != r.colors && r.colors.length >= 2
                ? (0, ln.K5)({ gradient: r.colors, angle: r.angle ?? void 0 })
                : void 0,
        o = (0, ln.gc)(l);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let u = (0, ln.x)(o, s),
        c = e?.assetVariant === lK.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, i.jsxs)("div", {
              className: lz.qD,
              style: u,
              children: [
                  (0, i.jsx)("div", {
                      className: eA()([lz.my], { [lz.R_]: c }),
                      children: (0, i.jsx)(lq.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: c ? nP._3.SIZE_72 : nP._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, i.jsx)(eT.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: J.intl.string(J.t.Abiuci),
                  }),
              ],
          });
}
var lX = n(35587),
    lQ = n(410516),
    lJ = n(462887),
    l0 = n(736653),
    l2 = n(854627),
    l1 = n(236834);
let l3 = (e) => {
        let { className: t, width: n = 83, height: l = 45 } = e;
        return (0, i.jsxs)("svg", {
            width: n,
            height: l,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, i.jsxs)("g", {
                    opacity: "0.6",
                    children: [
                        (0, i.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1558_55666)",
                        }),
                        (0, i.jsxs)("g", {
                            clipPath: "url(#clip0_1558_55666)",
                            children: [
                                (0, i.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1558_55666)",
                                }),
                                (0, i.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, i.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1558_55666)",
                                }),
                                (0, i.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, i.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1558_55666)",
                                }),
                                (0, i.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, i.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, i.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, i.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1558_55666)",
                            fillOpacity: "0.9",
                        }),
                        (0, i.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1558_55666)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1558_55666)",
                        }),
                    ],
                }),
                (0, i.jsxs)("defs", {
                    children: [
                        (0, i.jsxs)("linearGradient", {
                            id: "paint0_linear_1558_55666",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint1_linear_1558_55666",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint2_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint3_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint4_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint5_linear_1558_55666",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint6_linear_1558_55666",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint7_linear_1558_55666",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint8_linear_1558_55666",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint9_linear_1558_55666",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint10_linear_1558_55666",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint11_linear_1558_55666",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint12_linear_1558_55666",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsx)("clipPath", {
                            id: "clip0_1558_55666",
                            children: (0, i.jsx)("rect", {
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
    l4 = (e) => {
        let { className: t, width: n = 83, height: l = 45 } = e;
        return (0, i.jsxs)("svg", {
            width: n,
            height: l,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, i.jsxs)("g", {
                    opacity: "0.4",
                    children: [
                        (0, i.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1521_51082)",
                        }),
                        (0, i.jsxs)("g", {
                            clipPath: "url(#clip0_1521_51082)",
                            children: [
                                (0, i.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1521_51082)",
                                }),
                                (0, i.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, i.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1521_51082)",
                                }),
                                (0, i.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, i.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1521_51082)",
                                }),
                                (0, i.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, i.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, i.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, i.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1521_51082)",
                            fillOpacity: "0.9",
                        }),
                        (0, i.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1521_51082)",
                        }),
                        (0, i.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1521_51082)",
                        }),
                    ],
                }),
                (0, i.jsxs)("defs", {
                    children: [
                        (0, i.jsxs)("linearGradient", {
                            id: "paint0_linear_1521_51082",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint1_linear_1521_51082",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint2_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint3_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint4_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint5_linear_1521_51082",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint6_linear_1521_51082",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint7_linear_1521_51082",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint8_linear_1521_51082",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint9_linear_1521_51082",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint10_linear_1521_51082",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint11_linear_1521_51082",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsxs)("linearGradient", {
                            id: "paint12_linear_1521_51082",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, i.jsx)("clipPath", {
                            id: "clip0_1521_51082",
                            children: (0, i.jsx)("rect", {
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
var l7 = n(577454);
let l6 = function (e) {
    let { className: t } = e,
        n = (0, l1.A)(),
        { avatarSrc: l, eventHandlers: r } = (0, l2.A)({ userId: n?.id, size: nP._3.SIZE_32, animateOnHover: !0 }),
        a = (0, l0.DP)(),
        s = (0, lJ.q)(a),
        o = nw.Ay.getName(n);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: eA()(l7.$6, t),
              children: [
                  (0, i.jsx)("div", {
                      className: l7.H,
                      children: (0, i.jsx)(lo.eu, { src: l, "aria-label": n.username, size: nP._3.SIZE_32, ...r }),
                  }),
                  (0, i.jsx)(eT.E, {
                      variant: "text-xs/bold",
                      className: l7.U_,
                      children: J.intl.format(J.t.oxhCOl, { userName: o }),
                  }),
                  (0, i.jsx)(s ? l3 : l4, { className: l7.q3 }),
              ],
          });
};
var l5 = n(361597),
    l8 = n(69494),
    l9 = n(845012),
    ie = n(597770),
    it = n(102741),
    il = n(296589);
function ii(e) {
    let { giftMessage: t = J.intl.string(J.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: l } = (0, t4.Pv)();
    return !n || (0, ls.Ik)(l)
        ? null
        : (0, i.jsx)(it.A, {
              className: il.z,
              iconSize: it.A.Sizes.SMALL,
              icon: ie.o,
              color: null == t ? it.A.Colors.PRIMARY : it.A.Colors.SECONDARY,
              children: t,
          });
}
var ir = n(577381),
    ia = n(249872);
function is(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: l, subscriptionTier: a, trialId: o, handleClose: u } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: p,
            defaultPlanId: h,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: C,
            isEligibleForTrial: A,
            isEligibleForDiscount: f,
            discountOffer: y,
            userTrialOffer: I,
        } = (0, lH.i)(),
        T = (0, lQ.YJ)(y),
        _ = (0, m.A)(),
        g = (0, P.bB)(),
        { isGift: v, giftRecipient: x, giftMessage: N, claimableRewards: R } = (0, t4.Pv)(),
        b = (0, ln.Mq)(_),
        M = (0, nl.bG)([li.A], () => {
            let e = li.A.getMarketingComponentByType(n6.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = v && b && null != R && R.length > 0 && M,
        j = (A || f) ?? !1,
        L = (0, lX.Wi)($.ZC),
        D = j || L,
        { monthlyDefaultSelected: U } = lV.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${v ? "" : " - DO NOT USE"}`,
        }),
        w = (0, s.A)(U),
        k = r.useMemo(() => {
            let e = h;
            return v && w && null != c && (e = $.En[c]), (0, ez.Tm)({ skuId: c, isPremium: C, defaultPlanId: e });
        }, [c, C, h, v, w]),
        G = f && null != T && k.includes(T) ? T : k[0],
        F = (0, nl.bG)([q.A], () => q.A.get(G)),
        B = [{ planId: F?.id, quantity: 1 }],
        [Y, H] = r.useState(j),
        [W, V] = (0, eU.YV)({
            items: B,
            renewal: !1,
            preventFetch: !D,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    r.useEffect(() => {
        j && H(W?.subscriptionPeriodEnd == null);
    }, [W, j]),
        (0, lB.A)(
            "Payment Modal Plan Select Step",
            Y,
            5,
            { proratedInvoicePreview: W, proratedInvoiceError: V, isEligibleForOffer: j },
            { tags: { app_context: "billing" } },
        );
    let K = V?.message ?? J.intl.string(J.t.R0RpRX),
        Z = j && null == V,
        z = j && null != V,
        X = Z && null == p && W?.subscriptionPeriodEnd == null;
    (0, lW.W)({ priceOptions: d, trialId: o, discountInvoicePreview: W });
    let ee = (0, ir.i)({ planSkuId: F?.skuId, invoice: W }),
        { ref: et, onTransitionEnd: en } = (0, lY.A)({ isExpanded: null != ee, minHeightOverride: 0 }),
        ei = r.useMemo(
            () =>
                v || F?.skuId !== $.pe.TIER_2 || I?.referrer_id == null
                    ? (0, i.jsx)("div", { ref: et, onTransitionEnd: en, style: { overflow: "hidden" }, children: ee })
                    : (0, i.jsx)(l6, { className: ia.ZB }),
            [ee, v, F?.skuId, I?.referrer_id, et, en],
        ),
        er = r.useMemo(
            () => ({
                planOptions: k,
                selectedPlanId: _?.id,
                planGroup: l,
                subscriptionPeriodEnd: W?.subscriptionPeriodEnd,
                useCompactGiftComponents: O,
                handleClose: u,
            }),
            [k, _?.id, l, W?.subscriptionPeriodEnd, O, u],
        );
    if (X) return (0, i.jsx)(e0.E, { className: ia.QW });
    eo()(null != g, "Step should be set"), eo()(k.length > 0, "Premium plan options should be set");
    let ea = v
        ? (0, i.jsx)(l5.$p, { ...er })
        : (0, i.jsx)(l9.X, { ...er, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ii, { giftMessage: N }),
            !(v && (0, ls.Ik)(x)) && (0, i.jsx)(l8.A, { isEligibleForTrial: A }),
            (0, i.jsxs)(el.dZ, {
                children: [
                    ei,
                    (0, i.jsx)(nm.A, { className: ia.tg }),
                    z ? (0, i.jsx)(eu.w, { type: "critical", children: K }) : ea,
                    Z &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("hr", { className: eA()(ia.IM, ia.Go) }),
                                (0, i.jsx)(eT.E, {
                                    variant: "text-xs/normal",
                                    children: J.intl.format(J.t.BHtnqA, {
                                        link: eZ.A.getArticleURL(Q.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(el.UX, {
                children: [
                    O && (0, i.jsx)(l$, {}),
                    (0, i.jsx)(lw, {
                        onStepChange: t,
                        onBackClick: () => t(S.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: k,
                        shouldRenderUpdatedPaymentModal: Z,
                        isTrial: A,
                    }),
                ],
            }),
        ],
    });
}
var io = n(862990),
    iu = n(672525),
    ic = n(169801),
    id = n(634378);
function ip(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: l,
            priceOptions: r,
            activeSubscription: a,
            defaultPlanId: s,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: u,
        } = (0, E.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: c } = (0, n9.jm)(),
        { isGift: d, claimableRewards: p } = (0, t4.Pv)(),
        m = d && null != p && p.length > 0,
        h = (0, eG.V)(u);
    return (0, i.jsx)(im, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: a,
                    setSelectedPlanId: s,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: u,
                } = e;
                l(n);
                let c = S.pn.PLAN_SELECT,
                    d = (0, ez.aZ)(t);
                (d !== $.pe.TIER_1 && d !== $.pe.TIER_2) || n !== $.pe.TIER_0 || r || (c = S.pn.WHAT_YOU_LOSE);
                let p = (0, ic.t)({ userTrialOffer: a, isGift: r, skuId: n }),
                    m = (0, lF.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                c !== S.pn.WHAT_YOU_LOSE && m && ((c = S.pn.REVIEW), s((0, lF.xT)(n, t, u))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: d,
                userTrialOffer: h,
                startedPaymentFlowWithPaymentSources: o,
                setSelectedPlanId: l,
                defaultPlanId: s,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, ez.mH)($.pe.TIER_2)),
                    t($.gD.PREMIUM_GROUP_MONTH),
                    n(l ? S.pn.REVIEW : S.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: $.pe.TIER_2 } });
            })({ setSelectedPlanId: l, handleStepChange: t, hasPaymentSources: c, setSelectedSkuId: n }),
        isGift: d,
        priceOptions: r,
        showPromotionalGiftBanner: m,
    });
}
function im(e) {
    let { selectSku: t, isGift: n, priceOptions: l, showPromotionalGiftBanner: r, onSelectPremiumGroup: a } = e,
        s = (0, io.FY)({ isGift: n });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(t1.rQ, { titleTextVariant: "heading-lg/semibold", title: J.intl.string(J.t["r+SebU"]) }),
            s
                ? (0, i.jsx)(O.c, {
                      children: (0, i.jsx)("div", {
                          className: id.eE,
                          children: (0, i.jsx)(iu.yS, {
                              onSelectSku: (e) => t((0, ez.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: l,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, i.jsx)(O.c, {
                      children: (0, i.jsx)("div", {
                          className: id.a2,
                          children: (0, i.jsx)(iu.Ay, {
                              onSelectSku: (e) => t((0, ez.mH)(e)),
                              isGift: n,
                              priceOptions: l,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var ih = n(825484),
    iC = n(137728);
function iE(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: l,
            setSelectedPlanId: r,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: s,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: o } = (0, t4.Pv)(),
        u = null != a ? (0, ez.EL)(a) : null,
        c = null != u ? (0, ez.RH)(u.planId) : null,
        d = null != u ? (0, ez.m6)(u.planId) : null,
        p = (0, lF.vT)({ isTrial: !1, isGift: o, selectedSkuId: l, startedPaymentFlowWithPaymentSources: s });
    return (
        eo()(null != d, "Expected premium type"),
        (0, i.jsx)(iC.A, {
            premiumType: d,
            titleText: J.intl.string(J.t["7VcWW0"]),
            subtitleText: J.intl.format(J.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, i.jsxs)(ih.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, i.jsx)(ed.$, {
                        variant: "primary",
                        text: J.intl.string(J.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, lF.xT)(l, a)), t(S.pn.REVIEW)) : t(S.pn.PLAN_SELECT);
                        },
                    }),
                    (0, i.jsx)(ed.$, { variant: "secondary", onClick: n, text: J.intl.string(J.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var iA = n(242874),
    iS = n(573359),
    iy = n(75825),
    iP = n(237412),
    iI = n(865543);
let iT = [
        {
            key: S.pn.SKU_SELECT,
            renderStep: (e) => (0, i.jsx)(ip, { ...e }),
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
            key: S.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, i.jsx)(iE, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: S.pn.PLAN_SELECT,
            renderStep: (e) => (0, i.jsx)(is, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, lF.lp)(e) ? null : J.intl.string(J.t["r+SebU"])),
                sectionHeaderText: () => J.intl.string(J.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: S.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, i.jsx)(lG, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    i_ = {
        CustomHeaderComponent: function (e) {
            let { onClose: t } = e,
                { selectedSkuId: n, purchaseState: l } = (0, E.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                s = (0, a.bG)([iS.A], () => iS.A.isDisplayingWowMomentConfirmation),
                {
                    isPremium: o,
                    isPremiumGroupPurchase: u,
                    isEligibleForTrial: c,
                    isEligibleForDiscount: d,
                } = (0, lH.i)(),
                p = (0, na.S3)(),
                m = (0, P.bB)(),
                { isGift: h, selectedGiftStyle: C, giftRecipient: A } = (0, t4.Pv)(),
                f = p?.productLine === Q.EZt.COLLECTIBLES,
                y = p?.productLine === Q.EZt.SOCIAL_LAYER_GAME_ITEM,
                I = h && (0, ls.Ik)(A) && m === S.pn.CONFIRM && null != C && !f && !y,
                T = [S.pn.SKU_SELECT, S.pn.SELECT_FREE_SKU],
                _ = null != m && !T.includes(m) && null != n,
                g = r.useCallback(() => t(!1), [t]);
            return r.useMemo(() => {
                if (null == m) return;
                let e = null;
                return (
                    I
                        ? (e = (0, i.jsxs)("div", {
                              className: iI.kL,
                              children: [
                                  (0, i.jsx)("div", {
                                      "aria-hidden": !0,
                                      style: { display: "contents" },
                                      children: (0, i.jsx)(iy.A, {
                                          defaultAnimationState: iA.oA.LOOP,
                                          giftStyle: C,
                                          className: iI.qq,
                                      }),
                                  }),
                                  (0, i.jsx)(tT.s_, { onClick: g, className: iI.b, "data-migration-pending": !0 }),
                              ],
                          }))
                        : _ &&
                          (eo()(n in $.WN, `invalid sku id: ${n}`),
                          (e = (0, i.jsx)(iP.A, {
                              currentStep: m ?? void 0,
                              purchaseState: l,
                              premiumType: $.WN[n],
                              onClose: g,
                              showTrialBadge: c,
                              showDiscountBadge: d,
                              isGift: h,
                              giftRecipient: A,
                              isEligibleForTrial: c,
                              enablePremiumBrandRefresh: o,
                              isDisplayingWowMomentConfirmation: s,
                              isPremiumGroupPurchase: u,
                          }))),
                    e
                );
            }, [C, g, l, n, m, c, d, I, _, h, A, o, s, u]);
        },
        CHECKOUT_FLOW: c.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: iT,
        CHECKOUT_STEPS: { [S.pn.REVIEW]: n7.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: l,
                            referralTrialOfferId: s,
                            subscriptionTier: o,
                            subscription: u,
                        },
                        stepConfigs: p,
                        loadId: m,
                        giftContextProps: h = { isGift: !1, giftRecipient: null },
                        renderModalProps: C,
                        children: E,
                    } = e,
                    A = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
                    f = (0, lP.cg)() ? $.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: y, giftRecipient: P } = h;
                if (null != o && !Object.values($.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, lg.tA)({ giftRecipient: P, isGift: y ?? !1 }),
                    T = r.useMemo(
                        () =>
                            I
                                ? p.map((e) =>
                                      e.key === S.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : p,
                        [p, I],
                    ),
                    _ = null != u ? u : A,
                    g = !y && null != _ && _.isPurchasedExternally && null != _.paymentGateway;
                (0, l_.s)(_, () => C.onClose(), y ?? !1);
                let x = r.useMemo(() => [...$.oz], []);
                return g
                    ? null
                    : (0, i.jsx)(d.M, {
                          loadId: m,
                          activeSubscription: _,
                          stepConfigs: T,
                          skuIDs: x,
                          isGift: y,
                          defaultPlanId: f ?? n,
                          referralCode: l,
                          referralTrialOfferId: s,
                          unifiedCheckoutFlow: c.C.PREMIUM_CHECKOUT,
                          children: (0, i.jsx)(n4.Qt, { confirmationFooter: t, children: E }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: l },
                    } = e,
                    { onClose: a, renderPurchaseConfirmation: s, continueSessionToInitialStep: o } = t;
                r.useEffect(() => {
                    q.A.isLoadedForPremiumSKUs() || t6.h.wait(() => (0, ly.zS)());
                }, []);
                let { selectedSkuId: u, purchaseState: c } = (0, E.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, P.bB)(),
                    {
                        isGift: p,
                        selectedGiftingPromotionReward: m,
                        openGiftingBadgePostPurchaseModal: h,
                    } = (0, t4.Pv)(),
                    C = r.useMemo(() => (p ? [S.pn.PLAN_SELECT] : []), [p]),
                    A = r.useCallback(
                        (e, t) => {
                            a(e, t), e && p && null == m && h();
                        },
                        [a, p, m, h],
                    ),
                    f = !p && u === $.pe.TIER_2 && !lI.Ct && !lI.KY && null == (0, lT.uM)(),
                    I = c === y.h.PURCHASING;
                return (0, i.jsx)(lv.A, {
                    isConfirmationStep: d === S.pn.CONFIRM && null == o && null == s,
                    isEligibleForWowMoment: f,
                    shouldPrefetchWowMoment: I,
                    children: n({
                        ...t,
                        onClose: A,
                        analyticsSubscriptionType: Q.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: $.LE,
                        subscriptionTier: l,
                        skipUnifiedHeaderForSteps: C,
                    }),
                });
            },
            tenantAnalyticsLocation: u.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(lE, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ig = n(143582),
    iv = n(241524),
    ix = n(19311),
    iN = n(4126);
let iR = "(max-width: 485px)";
var ib = n(702361),
    iM = n(938430);
function iO(e) {
    let { step: t, onClose: n } = e,
        l = (0, iv.A)("(max-height: 450px)");
    return t === S.pn.CONFIRM || t === S.pn.BENEFITS
        ? (0, i.jsx)("div", {})
        : (0, i.jsxs)("div", {
              className: eA()(ib.N1, tX.G),
              children: [
                  !l &&
                      (0, i.jsx)("div", {
                          className: ib.oZ,
                          "aria-hidden": "true",
                          children: (0, i.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: ib.F0,
                          }),
                      }),
                  (0, i.jsx)(tZ.D, {
                      className: ib.G3,
                      onClick: () => n(),
                      "aria-label": J.intl.string(J.t.cpT0Cq),
                      children: (0, i.jsx)(tq.P, { size: "md", color: "currentColor", className: ib.ut }),
                  }),
              ],
          });
}
function ij(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: l, application: r, title: a, subtitle: s, description: o } = e;
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: ib.RP,
              children: (0, i.jsxs)(iN.$K, {
                  children: [
                      (0, i.jsx)(iN.KF, { application: r, asset: t }),
                      (0, i.jsx)(iN.kj, { children: a }),
                      (0, i.jsx)(iN.ri, {}),
                      (0, i.jsx)(iN.Mx, { title: s, description: o }),
                      (0, i.jsx)(iN.iH, { applicationId: r.id, storeListingBenefits: n, skuBenefits: l }),
                  ],
              }),
          });
}
function iL(e) {
    let { tierName: t, onConfirm: n, subscription: l } = e;
    return (0, i.jsxs)("div", {
        className: ib.NV,
        children: [
            (0, i.jsx)("img", { src: iM, alt: "", width: 300, height: 126 }),
            (0, i.jsx)(ex.D, {
                className: ib.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: J.intl.format(J.t.wLFT6z, { tier: t }),
            }),
            (0, i.jsx)(eT.E, {
                className: ib.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: J.intl.format(J.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsx)(el.UX, {
                children: (0, i.jsx)(ix.Ay, {
                    onPrimary: n,
                    primaryCTA: ix.ti.CONTINUE,
                    primaryText: J.intl.string(J.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var iD = n(967198);
let [iU, iw] = (0, B.A)();
function ik(e) {
    let { guildId: t, showBenefitsFirst: n, children: l } = e,
        [a, s] = r.useState(null),
        o = r.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: a,
                setSubscriptionMetadataRequest: s,
            }),
            [t, n, a],
        );
    return (0, i.jsx)(iU.Provider, { value: o, children: l });
}
n(938796);
var iG = n(266060),
    iF = n(163437),
    iB = n(701273),
    iY = n(425013);
function iH(e) {
    let { onConfirm: t, onCancel: n, title: l, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, i.jsxs)("div", {
        className: iY.RP,
        children: [
            (0, i.jsx)(ex.D, { className: iY.RS, variant: "heading-lg/extrabold", children: l }),
            null != r
                ? (0, i.jsx)(eT.E, { className: iY.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, i.jsxs)("div", {
                className: iY.UD,
                children: [
                    s &&
                        (0, i.jsx)(ed.$, {
                            variant: "primary",
                            text: J.intl.string(J.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, iB.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, i.jsx)(ed.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, i.jsx)(ed.$, {
                            variant: "secondary",
                            text: J.intl.string(J.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function iW(e) {
    let { onConfirm: t, tierName: n, subscription: l } = e;
    return (0, i.jsxs)("div", {
        className: iY.RP,
        children: [
            (0, i.jsx)(ex.D, {
                className: iY.RS,
                variant: "heading-lg/extrabold",
                children: J.intl.format(J.t.wLFT6z, { tier: n }),
            }),
            (0, i.jsx)(eT.E, {
                className: iY.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: J.intl.format(J.t.OsAK9h, { timestamp: l?.currentPeriodEnd }),
            }),
            (0, i.jsxs)("div", {
                className: iY.UD,
                children: [
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: iY.__invalid_openDiscordButton,
                        children: (0, i.jsx)(ed.$, {
                            variant: "primary",
                            text: J.intl.string(J.t["8L5bZG"]),
                            onClick: () => (0, iB.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, i.jsx)(ed.$, { variant: "secondary", text: J.intl.string(J.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function iV(e) {
    let { handleStepChange: t, handleClose: n } = e,
        l = (0, iG.K)(),
        { subscriptionMetadataRequest: s } = iw(),
        { application: o } = (0, nr.V)(),
        u = (0, na.S3)(),
        c = (0, iv.A)(iR),
        d = (0, a.bG)([_.A], () => _.A.getGuild(s?.guild_id)),
        p = r.useCallback(() => t(S.pn.REVIEW), [t]);
    if (null == u) return null;
    let m = (0, iF.bg)(u.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(el.dZ, {
                children: c
                    ? (0, i.jsx)(iH, {
                          confirmCta: J.intl.string(J.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: J.intl.format(J.t["6n6oXA"], { tier: u.name }),
                          subtitle: m
                              ? J.intl.string(J.t.lzAoKB)
                              : J.intl.formatToPlainString(J.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(ij, {
                          icon: l?.thumbnail,
                          storeListingBenefits: l?.benefits,
                          application: o ?? void 0,
                          title: J.intl.format(J.t.haiCxc, { tier: u.name }),
                          subtitle: m ? J.intl.string(J.t.RvtbP5) : J.intl.string(J.t.zY39Zu),
                          description: m
                              ? J.intl.formatToPlainString(J.t.QCe4rY, { applicationName: o?.name })
                              : J.intl.string(J.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, i.jsx)(el.UX, {
                    children: (0, i.jsx)(ix.Ay, {
                        onBack: n,
                        backText: J.intl.string(J.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: ix.ti.CONTINUE,
                        primaryText: J.intl.string(J.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var iK = n(21161);
function iZ(e) {
    let t,
        n,
        { handleClose: l, onSubscriptionConfirmation: a } = e,
        s = (0, iG.K)(),
        { application: o } = (0, nr.V)(),
        { readySlideId: u, updatedSubscription: c } = (0, E.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        d = (0, na.S3)(),
        p = (0, iv.A)(iR),
        { createMultipleConfettiAt: m } = r.useContext(iK.x),
        h = d?.name ?? "";
    function C() {
        l(), a?.();
    }
    let A = u === S.pn.CONFIRM,
        f = (0, iF.bg)(d?.flags ?? 0),
        y =
            null != s && s.benefits.length > 0
                ? J.intl.formatToPlainString(J.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: P } = iw();
    return (
        P
            ? (t = p
                  ? (0, i.jsx)(iW, { tierName: h, onConfirm: C, subscription: c })
                  : (0, i.jsx)(iL, { tierName: h, onConfirm: C, subscription: c }))
            : p
              ? (t = (0, i.jsx)(iH, {
                    title: J.intl.format(J.t.ea6tZr, { tierName: h }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? J.intl.formatToPlainString(J.t.HNepft, { benefits: y })
                            : null,
                    onConfirm: C,
                    confirmCta: J.intl.string(J.t.nlkywz),
                }))
              : ((t =
                    null != s && null != o
                        ? (0, i.jsx)(ij, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: o,
                              title: J.intl.format(J.t["Q+qktS"], { tier: h }),
                              subtitle: J.intl.string(J.t.ECKxXU),
                              description: f
                                  ? J.intl.format(J.t["MAtQk/"], { applicationName: o?.name })
                                  : J.intl.format(J.t.vHkMF4, { tier: h }),
                          })
                        : (0, i.jsx)(U.A, {})),
                (n = (0, i.jsx)(ix.Ay, {
                    onPrimary: C,
                    primaryCTA: ix.ti.CONTINUE,
                    primaryText: J.intl.string(J.t["JtWl+a"]),
                }))),
        r.useEffect(() => {
            ni.Ay.useReducedMotion && A && m(window.innerWidth / 2, window.innerHeight / 2);
        }, [m, A]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(el.dZ, { children: [(0, i.jsx)(nm.A, {}), t] }),
                null != n && (0, i.jsx)(el.UX, { children: n }),
            ],
        })
    );
}
function iq(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: l,
            setSelectedSkuId: a,
            setSelectedPlanId: s,
            priceOptions: o,
        } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: u, subscriptionPriceOptionsLoading: c, displayCurrency: d } = (0, D.Jn)(),
        { setSubscriptionMetadataRequest: p, guildId: m, showBenefitsFirst: h } = iw(),
        C = (0, j.Hp)(),
        A = (0, w.A)(),
        f = (0, P.l)(),
        { isGift: y } = (0, t4.Pv)(),
        I = h ? S.pn.BENEFITS : S.pn.REVIEW,
        [T, _] = r.useState(!A || !u || c);
    return (r.useEffect(() => {
        _(!A || !u || c);
    }, [c, u, A]),
    r.useEffect(() => {
        null != m && p({ guild_id: m });
    }, [m, p]),
    r.useEffect(() => {
        s(t);
        let e = null != t ? q.A.get(t) : null;
        T ||
            C ||
            (n((t) => {
                let n = null != e ? (0, ez.y8)(e.id, !1, y, { paymentSourceId: o.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: d };
            }),
            null != e && (a(e?.skuId), f(I)));
    }, [C, t, y, T, o, d, l, n, s, a, f, I]),
    T)
        ? (0, i.jsx)(U.A, {})
        : C
          ? (0, i.jsx)(L.oO, {})
          : null;
}
var iz = n(304072),
    i$ = n(427858),
    iX = n(295413),
    iQ = n(424517);
let iJ = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: J.intl.string(J.t.YScQSF),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    },
    i0 = {
        CHECKOUT_FLOW: c.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(iq, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                l = r.useCallback(() => n(!1), [n]);
            return (0, i.jsx)(iO, { step: t, onClose: l });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: S.pn.BENEFITS,
                renderStep: (e) => (0, i.jsx)(iV, { ...e }),
                options: { useBreadcrumbLabel: () => J.intl.string(J.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [S.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: l, analyticsData: a, analyticsLocation: s } = e,
                    {
                        purchaseState: o,
                        contextMetadata: u,
                        purchaseError: c,
                        activeSubscription: d,
                    } = (0, E.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                    })),
                    { subscriptionMetadataRequest: p, showBenefitsFirst: h } = iw(),
                    C = h ? S.pn.BENEFITS : void 0,
                    A = (0, m.A)(),
                    f = (0, na.S3)();
                if (null == A)
                    throw new n8.v({
                        message: "Expected plan to be selected",
                        extraSentryInformation: { selectedPlan: A },
                    });
                let P = r.useRef(null),
                    [I, T] = (0, iz.A)(!1, 500),
                    _ = (0, iF.bg)(f?.flags ?? 0);
                r.useEffect(() => {
                    null != c && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
                }, [c]);
                let g = r.useRef(null),
                    v = r.useCallback(() => {
                        t(S.pn.ADD_PAYMENT_STEPS);
                    }, [t]);
                return o === y.h.PURCHASING
                    ? (0, i.jsx)(U.A, {})
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(el.dZ, {
                                  children:
                                      null == d
                                          ? (0, i.jsx)(iQ._, {
                                                selectedPlan: A,
                                                verifiedPlanId: A.id,
                                                planGroup: n,
                                                handlePaymentSourceAdd: v,
                                                metadata: _ ? void 0 : p,
                                            })
                                          : (0, i.jsx)(i$.A, {
                                                selectedPlan: A,
                                                verifiedPlanId: A.id,
                                                handlePaymentSourceAdd: v,
                                                planGroup: n,
                                                hasOpenInvoice: null != l,
                                                purchaseState: o,
                                            }),
                              }),
                              (0, i.jsx)(el.UX, {
                                  children: (0, i.jsx)(iX.U, {
                                      resolveTenantReviewButtonProps: iJ,
                                      onBack: () => null != C && t(C),
                                      handleStepChange: t,
                                      postPurchaseStep: S.pn.CONFIRM,
                                      legalTermsNodeRef: g,
                                      flashLegalTerms: () => T(!0),
                                      analyticsLocation: s,
                                      baseAnalyticsData: a,
                                      flowStartTime: u.startTime,
                                      planGroup: n,
                                      openInvoiceId: l,
                                      metadata: _ ? void 0 : p,
                                      backButtonEligible: !!h || void 0,
                                      disablePurchase: p?.guild_id == null && !_,
                                      onPaymentSourceAdd: v,
                                  }),
                              }),
                          ],
                      });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { tenantParams: t, children: n } = e,
                    { guildId: l, showBenefitsFirst: r } = t;
                return (0, i.jsx)(ik, {
                    guildId: l,
                    showBenefitsFirst: r,
                    children: (0, i.jsx)(n4.Qt, { children: n }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { forcesTransitionToGuild: l, guildId: i },
                    } = e,
                    a = t.onClose,
                    s = t.onComplete,
                    o = r.useCallback(
                        (e) => {
                            a(e),
                                e &&
                                    null != i &&
                                    (tO.hP(),
                                    (0, ig.f5)(i),
                                    null != s && s(),
                                    null != i && (l || iD.A.getGuildId() !== i) && (0, nq.pX)(Q.BVt.CHANNEL(i)));
                        },
                        [a, s, l, i],
                    );
                return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: u.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(iZ, { ...e }) },
    };
var i2 = n(835245),
    i1 = n(869038),
    i3 = n(852218),
    i4 = n(7133),
    i7 = n(83617);
let [i6, i5] = (0, B.A)();
function i8(e) {
    let { code: t, onClose: n, children: l } = e,
        o = (0, a.bG)([v.A], () => v.A.getMostRecentPremiumTypeSubscription()),
        u = (0, a.bG)([v.A], () => v.A.hasFetchedMostRecentPremiumTypeSubscription()),
        d = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        [p, m] = r.useState(!1),
        [h, C] = r.useState(null),
        [A, f] = r.useState(null),
        [I, _] = r.useState(!1),
        [g, x] = r.useState(!1);
    r.useEffect(() => {
        p ||
            (0, ls.GM)(t, !1, !0)
                .then((e) => {
                    let t = i4.A.createFromServer(e);
                    C(t), m(!0), _(t.promotion?.promotionType === i3.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    f(e), m(!0);
                }),
            u || (0, tO.I8)();
    }, [t, u, p]);
    let N = (0, G._V)(),
        { paymentSources: R, paymentSourceId: b, paymentAuthenticationState: M, setIsSubmittingCurrentStep: O } = N,
        j = (0, P.l)(),
        L = (0, P.bB)(),
        U = (0, E.t4)((e) => e.setPurchaseState),
        w = (0, E.t4)((e) => e.setPurchaseError),
        F = (0, E.t4)((e) => e.purchaseState),
        { displayCurrency: B } = (0, D.Jn)(),
        Y = (0, eL.sw)(),
        H = h?.subscriptionPlan,
        W = h?.promotion,
        V = h?.subscriptionTrial,
        K = null != H ? (0, i7._w)(H, b, !1) : [],
        Z = Y?.currency ?? B ?? K[0],
        q = r.useMemo(() => (null != b ? { paymentSourceId: b, currency: Z } : { currency: Z }), [b, Z]),
        [z] = (0, s.A)(() => [(0, i2.A)()]),
        $ = r.useMemo(
            () => ({
                load_id: z,
                location: Q.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: Q.rzx.PREMIUM,
                payment_type: e8.fr[e8.VV.SUBSCRIPTION],
                subscription_plan_id: H?.id,
                sku_id: H?.skuId,
                checkout_flow: c.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [z, H?.id, H?.skuId],
        ),
        X = r.useCallback(() => {
            n?.(F === y.h.COMPLETED);
        }, [n, F]),
        J = r.useCallback(async () => {
            let e = (0, ei.W)(R, b);
            if (null == e) return !1;
            O(!0), w(null), U(y.h.PURCHASING);
            try {
                return (
                    await i1.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    U(y.h.COMPLETED),
                    k.default.track(Q.HAw.PAYMENT_FLOW_COMPLETED, { ...$ }),
                    !0
                );
            } catch (t) {
                return (
                    U(y.h.FAIL),
                    w(t),
                    k.default.track(Q.HAw.PAYMENT_FLOW_FAILED, {
                        ...$,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                O(!1);
            }
        }, [$, t, b, R, O, w, U]),
        ee = r.useRef(!1),
        et = r.useCallback(() => {
            ee.current ||
                ((ee.current = !0),
                J()
                    .then((e) => {
                        j(e ? S.pn.CONFIRM : S.pn.REVIEW);
                    })
                    .finally(() => {
                        ee.current = !1;
                    }));
        }, [J, j]);
    return (
        (0, T.QR)(M),
        (0, T.b)(L, M, j, U, !0, et),
        (0, i.jsx)(i6.Provider, {
            value: {
                code: t,
                giftCode: h,
                plan: H,
                promotion: W,
                trial: V,
                isDirectFulfillment: I,
                hasResolvedGiftCode: p,
                giftCodeResolveError: A,
                hasFetchedMostRecentPremiumTypeSubscription: u,
                recentSubscription: o,
                premiumSubscription: d,
                paymentModalArgs: N,
                priceOptions: q,
                analyticsData: $,
                handleClose: X,
                redeemPromotion: J,
                confirmedUpgrade: g,
                setConfirmedUpgrade: x,
            },
            children: l,
        })
    );
}
var i9 = n(830215),
    re = n(264779),
    rt = n(636745),
    rn = n(554632);
function rl(e) {
    let { user: t, code: n, className: l } = e;
    return (0, i.jsx)(eT.E, {
        className: eA()(l, rt.iZ),
        variant: "text-md/normal",
        children: J.intl.format(J.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, i.jsx)(
                    lo.eu,
                    {
                        className: rt.FL,
                        size: nP._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": nw.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: nw.Ay.getUserTag(t),
            logoutHook: () => {
                i9.A.logout("inbound_promotion_redemption_modal", Q.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function ri(e) {
    let { promotion: t, code: n, isDirectFulfillment: l } = e,
        r = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
        s = (0, l0.Ay)(),
        o = (0, re.WD)(t.id, s);
    return (0, i.jsxs)("div", {
        className: rt.rN,
        children: [
            (0, i.jsxs)("div", {
                className: rt.u5,
                children: [
                    (0, i.jsx)("img", { alt: "", src: o, className: rt.hb }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(ex.D, {
                                variant: "heading-xl/bold",
                                className: rt.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, i.jsx)(eT.E, {
                                variant: "text-sm/normal",
                                className: rt.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            l || null == r ? null : (0, i.jsx)(rl, { className: rt.KZ, user: r, code: n }),
        ],
    });
}
function rr(e) {
    let { title: t, bodyText: n, helpCenterLink: l, showUser: a = !1, user: s, code: o, handleClose: u } = e,
        c = r.useMemo(() => ({ text: J.intl.string(J.t.BddRzS), onClick: u }), [u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rt.t4,
                children: [
                    (0, i.jsx)("img", { alt: "", src: rn, className: rt.M6 }),
                    (0, i.jsx)(ex.D, { variant: "heading-lg/semibold", className: rt.DD, children: t }),
                    (0, i.jsx)(eT.E, { variant: "text-md/normal", className: rt.G3, children: n }),
                    null != l
                        ? (0, i.jsx)(eT.E, {
                              variant: "text-md/normal",
                              className: rt.G3,
                              children: J.intl.format(J.t["4uSp2y"], { helpCenterLink: l }),
                          })
                        : null,
                    a && null != s ? (0, i.jsx)(rl, { className: rt.EF, user: s, code: o }) : null,
                ],
            }),
            (0, i.jsx)(C.lo, { primaryButtonProps: c }),
        ],
    });
}
function ra(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: l,
            giftCode: s,
            plan: o,
            promotion: u,
            trial: c,
            hasResolvedGiftCode: d,
            giftCodeResolveError: p,
            hasFetchedMostRecentPremiumTypeSubscription: m,
            recentSubscription: h,
        } = i5(),
        C = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
        E = (0, j.Hp)(),
        A = !d || !m,
        f = (function (e) {
            let {
                user: t,
                giftCode: n,
                giftCodeResolveError: l,
                recentSubscription: i,
                plan: r,
                promotion: a,
                trial: s,
            } = e;
            if (null != t && !t.verified)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body: J.intl.string(J.t.oDWkjN),
                    showUser: !0,
                    errorCode: $.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === Q.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: J.intl.string(J.t.BHxy59),
                    body: J.intl.string(J.t["1wokFq"]),
                    errorCode: $.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body:
                        null != l && l.code === Q.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? J.intl.string(J.t.S8TNKh)
                            : J.intl.string(J.t["1AceQR"]),
                    errorCode: $.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body: J.intl.string(J.t["3u+6q7"]),
                    errorCode: $.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body: J.intl.string(J.t.u9IQuM),
                    errorCode: $.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, ez.EL)(i)?.planId;
            return null != o && i.status === Q.Dmq.ACTIVE && ez.Ay.getPremiumType(o) === $.PremiumTypes.TIER_2
                ? {
                      title: J.intl.string(J.t.BHxy59),
                      body: J.intl.formatToPlainString(J.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, ez.RH)(r.id),
                      }),
                      errorCode: $.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: C, giftCode: s, giftCodeResolveError: p, recentSubscription: h, plan: o, promotion: u, trial: c });
    return (r.useEffect(() => {
        A ||
            k.default.track(Q.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == f && !E,
                error_code: null != f ? f.errorCode : E ? $.JR.BLOCKED_PAYMENT : null,
                promotion_id: s?.promotion?.id,
            });
    }, [A, f, E, s]),
    r.useEffect(() => {
        A || null != f || E || t(S.pn.PROMOTION_INFO);
    }, [A, f, E, t]),
    A)
        ? (0, i.jsx)(U.A, {})
        : null != f
          ? (0, i.jsx)(rr, {
                title: f.title,
                bodyText: f.body,
                helpCenterLink: u?.inboundHelpCenterLink ?? "",
                showUser: f.showUser,
                handleClose: n,
                user: C ?? void 0,
                code: l,
            })
          : E
            ? (0, i.jsx)(L.oO, {})
            : null;
}
function rs(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: l, handleClose: r } = i5();
    eo()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = l,
        o = (0, ei.g)(a, s);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(el.dZ, {
                children: (0, i.jsx)(lr.Ay, { hideClose: !0, planId: t.id, onClose: r, paymentSourceType: o }),
            }),
            n
                ? (0, i.jsx)(el.UX, {
                      children: (0, i.jsx)(lD.H, {
                          actions: [{ text: J.intl.string(J.t.UQvCf7), variant: "primary", onClick: r, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function ro(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: l, isDirectFulfillment: r } = i5();
    return (
        eo()(null != n, "Missing promotion"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(el.dZ, { children: (0, i.jsx)(ri, { promotion: n, code: l, isDirectFulfillment: r }) }),
                (0, i.jsx)(el.UX, {
                    children: (0, i.jsx)(C.lo, {
                        primaryButtonProps: { text: J.intl.string(J.t.PDTjLN), onClick: () => t(S.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var ru = n(732159),
    rc = n(944355),
    rd = n(927305);
let rp = [...$.oz],
    rm = new Set([...h.MU]),
    rh = [
        {
            key: S.pn.PROMOTION_INFO,
            renderStep: (e) => (0, i.jsx)(ro, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    rC = {
        CHECKOUT_FLOW: c.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(ra, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: rh,
        CHECKOUT_STEPS: {
            [S.pn.REVIEW]: function (e) {
                let { handleStepChange: t } = e,
                    {
                        code: n,
                        plan: l,
                        trial: s,
                        promotion: o,
                        priceOptions: u,
                        paymentModalArgs: c,
                        redeemPromotion: d,
                        confirmedUpgrade: p,
                        setConfirmedUpgrade: m,
                        handleClose: h,
                    } = i5();
                eo()(null != l && null != s, "Missing plan or trial");
                let { paymentSources: A, paymentSourceId: f, setPaymentSourceId: y, isSubmittingCurrentStep: P } = c,
                    I = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
                    { analyticsLocations: T } = (0, eO.Ay)(),
                    _ = (0, E.t4)((e) => e.hasAcceptedTerms),
                    g = (0, ej.A)(),
                    { immediateDelivery: x } = (0, e2.U)(),
                    [N, R] = (0, eU.YV)({
                        items: [{ planId: l.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: f,
                        code: n,
                        subscriptionId: I?.id,
                        analyticsLocations: T,
                        analyticsLocation: Q.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, eL.F0)(N, R);
                let b = (0, eL.sw)(),
                    M = r.useCallback(async () => {
                        null == I || p || null == s || null == o
                            ? (await d()) && t(S.pn.CONFIRM)
                            : (0, tB.openModal)((e) => {
                                  let n;
                                  if (null == b) n = (0, i.jsx)(eb.y, { className: rt.wG });
                                  else {
                                      let e = (0, ez.y8)(l.id, !1, !1, u);
                                      n = (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eT.E, {
                                                  className: rt.ex,
                                                  variant: "text-md/normal",
                                                  children: J.intl.format(J.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, i.jsx)(
                                                              "ul",
                                                              {
                                                                  children: I.items.map((e) => {
                                                                      let t = $.hd[e.planId],
                                                                          n = J.intl.formatToPlainString(J.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, i.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${I.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: $.hd[l.id].name,
                                                  }),
                                              }),
                                              (0, i.jsx)(eT.E, {
                                                  className: rt.ex,
                                                  variant: "text-sm/normal",
                                                  children: J.intl.format(J.t.KHvyu5, {
                                                      newPlanName: $.hd[l.id].name,
                                                      trialMonths: s.intervalCount,
                                                      helpCenterLink:
                                                          o.inboundHelpCenterLink ?? eZ.A.getArticleURL(Q.MVz.BILLING),
                                                      planPrice: (0, e$.$g)(e.amount, b.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, i.jsx)(ru.ConfirmModal, {
                                      onConfirm: async () => {
                                          m(!0), (await d()) && t(S.pn.CONFIRM);
                                      },
                                      title: J.intl.string(J.t.MaZ28z),
                                      cancelText: J.intl.string(J.t["ETE/oC"]),
                                      confirmText: J.intl.string(J.t["wfx/Hp"]),
                                      ...e,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, I, p, s, o, l, u, b, d, m]),
                    O = (0, n9.kc)(),
                    j = (0, eQ.iB)({
                        checkoutPaymentSources: O,
                        paymentSourceId: f,
                        location: "InboundPromotionReviewStep",
                    }),
                    L = (0, K.Y)(),
                    D = (0, ei.W)(A, f),
                    U = r.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(A).length ? { label: J.intl.string(J.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [A],
                    );
                if (null != R && null == b)
                    return (0, i.jsx)(rr, {
                        title: J.intl.string(J.t.ARIsMA),
                        bodyText: J.intl.string(J.t["3u+6q7"]),
                        helpCenterLink: o?.inboundHelpCenterLink ?? "",
                        handleClose: h,
                        user: void 0,
                        code: n,
                    });
                if (!L || null == b) return (0, i.jsx)(eb.y, {});
                let w = (0, i.jsx)(eJ.N, {
                        setPaymentSourceId: y,
                        paymentSourceId: f,
                        location: "InboundPromotionReview",
                        label: J.intl.string(J.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: U,
                        onPaymentSourceAdd: () => t(S.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    { renewalPrice: k } = (0, e7.Go)(b, l, null),
                    G = J.intl.formatToPlainString(J.t.BQPav6, { planPremiumType: ez.Ay.getDisplayName(l.id) }),
                    F = (0, i.jsx)(rc._P, {
                        variant: {
                            type: rc.I0.SubscriptionTrial,
                            purchaseButtonText: G,
                            totalDue: 0,
                            renewalPrice: k,
                            currency: b.currency,
                            interval: l.interval,
                            intervalCount: l.intervalCount,
                            startDate: (0, e5.de)({ renewalInvoice: b, isSubscriptionUpdate: !1 }),
                        },
                        paymentSourceType: (0, ei.W)(A, f)?.type ?? null,
                        immediateDelivery: x,
                    }),
                    B = null;
                return (
                    null == D ? (B = J.intl.string(J.t.L7jbQV)) : _ || (B = J.intl.string(J.t.XdvBLS)),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(el.dZ, {
                                children: [
                                    (0, i.jsx)(nm.A, {}),
                                    (0, i.jsx)(rd.K, {
                                        plan: l,
                                        renewalInvoicePreview: b,
                                        subscriptionTrial: s,
                                        shouldShowFractionalPremiumBanner: g.isFractionalPremiumActive,
                                        fractionalPremiumInfo: g,
                                        paymentMethodContent: w,
                                        legalContent: F,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(el.UX, {
                                children: (0, i.jsx)(C.lo, {
                                    onBackClick: () => t(S.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: G,
                                        tooltipText: B ?? void 0,
                                        disabled: null == D || !D.canRedeemTrial() || j || !_,
                                        loading: P,
                                        onClick: () => {
                                            if (null != D && _) return M();
                                        },
                                        variant: (0, ix.CY)(ix.ti.PURCHASE),
                                    },
                                }),
                            }),
                        ],
                    })
                );
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { code: t },
                        stepConfigs: n,
                        loadId: l,
                        onClose: r,
                        children: s,
                    } = e,
                    o = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription());
                return (0, i.jsx)(d.M, {
                    activeSubscription: o,
                    stepConfigs: n,
                    skuIDs: rp,
                    loadId: l,
                    unifiedCheckoutFlow: c.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, i.jsx)(n4.Qt, { children: (0, i.jsx)(i8, { code: t, onClose: r, children: s }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: l } = i5(),
                r = (0, E.t4)((e) => e.purchaseState),
                a = null != n ? n.skuId : null;
            return rm.has(t)
                ? (0, i.jsx)(C.s3, {
                      ...(0, h.uO)({ skuId: a, step: t, headerBadgePreset: t === S.pn.REVIEW ? "trial" : void 0 }),
                  })
                : (0, i.jsx)(iP.A, {
                      enablePremiumBrandRefresh: !0,
                      forceBrandRefreshHeader: !0,
                      premiumType: n?.premiumSubscriptionType ?? $.PremiumTypes.TIER_2,
                      className: rt.X9,
                      currentStep: t,
                      purchaseState: r,
                      hideCloseButton: !0,
                      onClose: l,
                  });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(rs, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var rE = n(989553);
function rA(e) {
    let { handleClose: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { application: l } = (0, nr.V)(),
        r = (0, na.gU)(),
        { isGift: a, giftRecipient: s } = (0, t4.Pv)();
    eo()(null != n, "Expected selectedSkuId"), eo()(null != l, "Expected application");
    let o = r[n];
    eo()(null != o, "Expected sku");
    let u = a
        ? J.intl.formatToPlainString(J.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : J.intl.formatToPlainString(J.t.wK0IbP, { applicationName: l.name, itemName: o.name });
    return (0, i.jsxs)(el.dZ, {
        children: [
            (0, i.jsx)(nm.A, {}),
            (0, i.jsxs)("div", {
                className: rE.EL,
                children: [
                    (0, i.jsx)(ex.D, { variant: "heading-xxl/bold", className: rE.RS, children: "Success!" }),
                    (0, i.jsx)(eT.E, { variant: "text-md/normal", children: u }),
                    (0, i.jsx)("div", { className: rE.yF }),
                    (0, i.jsx)(ed.$, { onClick: t, text: J.intl.string(J.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var rf = n(67480),
    rS = n(328968),
    ry = n(371794),
    rP = n(565756);
S.pn.GIFT_CUSTOMIZATION;
let rI = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            l = r.useCallback(() => n(!1), [n]);
        return (0, i.jsx)(iO, { step: t, onClose: l });
    },
    CHECKOUT_FLOW: em.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [S.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, t4.Pv)(),
                s = (0, E.t4)((e) => e.selectedSkuId),
                o = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
                u = (0, a.bG)([rf.A], () => (null != s ? rf.A.get(s) : null), [s]),
                c = nW(),
                d = (0, a.bG)([rS.A], () => (null != s ? rS.A.getForSKU(s) : null), [s]),
                p =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, ry.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let h = null == l || l.id === o?.id || t.length > $.Jo,
                C = r.useMemo(() => ({ disabled: h }), [h]);
            return (0, i.jsx)(em.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: em.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: rP.P6,
                        children: [
                            u?.name != null &&
                                (0, i.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                            null != p && (0, i.jsx)("img", { src: p, alt: u?.name ?? "", className: rP.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, i.jsxs)("div", {
                        className: rP.P6,
                        children: [
                            (0, i.jsx)(nk, { recipients: c, selectedSkuId: s, validateSelectedGift: m }),
                            (0, i.jsx)(nV.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: rP.iX,
                                innerClassName: rP.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: C,
            });
        },
        [S.pn.REVIEW]: tF.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(rA, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: u.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var rT = n(429913),
    r_ = n(733391),
    rg = n(871123),
    rv = n(26594),
    rx = n(510022),
    rN = n(317560),
    rR = n(275256),
    rb = n(910200),
    rM = n(208733);
function rO(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eO.Ay)(),
        { selectedSkuId: l, entitlementsGranted: a } = (0, E.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, nr.V)(),
        o = (0, na.gU)(),
        { isGift: u, giftRecipient: c } = (0, t4.Pv)();
    eo()(null != l, "Expected selectedSkuId"), eo()(null != s, "Expected application");
    let d = o[l];
    eo()(null != d, "Expected sku");
    let p = a.find((e) => e.sku_id === l),
        m = (0, rv.G)(p, { isGift: u });
    return (r.useEffect(() => {
        u || ((0, rN.j)(), t(), (0, rx.n)({ sku: d, application: s, analyticsLocations: n, entitlement: p }));
    }, [u, d, s, t, n, p]),
    u)
        ? (0, i.jsxs)(el.dZ, {
              children: [
                  (0, i.jsx)(nm.A, {}),
                  (0, i.jsxs)("div", {
                      className: rM.EL,
                      children: [
                          (0, i.jsx)("div", {
                              className: rM.KD,
                              children: (0, i.jsx)(rR.default, {
                                  imageUrl: (0, rg.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, rg.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: m?.graphic,
                              }),
                          }),
                          (0, i.jsx)(ex.D, {
                              variant: "heading-xl/semibold",
                              className: rM.RS,
                              children: J.intl.string(J.t["5glWta"]),
                          }),
                          (0, i.jsx)(eT.E, {
                              variant: "text-md/normal",
                              children: J.intl.formatToPlainString(J.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != m &&
                              (0, i.jsx)("div", {
                                  className: rM.Is,
                                  children: (0, i.jsx)(rb.O0, { Icon: m.Icon, text: m.text }),
                              }),
                          (0, i.jsx)("div", {
                              className: rM.UD,
                              children: (0, i.jsx)(ed.$, {
                                  onClick: t,
                                  text: J.intl.string(J.t.cpT0Cq),
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
var rj = n(889137),
    rL = n(742158),
    rD = n(313961),
    rU = n(238017),
    rw = n(650588),
    rk = n(117218),
    rG = n(763827),
    rF = n(403362),
    rB = n(832163),
    rY = n(31969),
    rH = n(44724),
    rW = n(980094),
    rV = n(366523),
    rK = n(806931),
    rZ = n(107610);
function rq(e) {
    let { handleClose: t, sku: n, application: l } = e,
        a = r.useCallback(() => {
            (0, rH.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = r.useCallback(() => {
            t();
            let e = rB.A.getStorefrontState(n.applicationId)?.activePage;
            (0, rg.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, tB.closeAllModals)(),
                (0, rH.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, i.jsx)("div", {
        className: rZ.$O,
        children: (0, i.jsx)(ep.Q, {
            text: J.intl.string(J.t.ImioFL),
            onMouseDown: a,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let rz = {
    CHECKOUT_FLOW: em.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [S.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: s } = (function (e) {
                    var t;
                    let n,
                        l,
                        s,
                        { handleStepChange: o, handleClose: u } = e,
                        {
                            customGiftMessage: c = "",
                            setCustomGiftMessage: d,
                            giftRecipient: p,
                            emojiConfetti: m,
                            soundEffect: h,
                            setEmojiConfetti: C,
                            setSoundEffect: A,
                            giftingOrigin: f,
                            additionalUserIds: S,
                        } = (0, t4.Pv)(),
                        y = (0, E.t4)((e) => e.selectedSkuId),
                        { application: P } = (0, nr.V)(),
                        I = (0, a.bG)([eK.default], () => eK.default.getCurrentUser()),
                        T =
                            ((t = I?.id),
                            (n = nW()),
                            (l = (function (e) {
                                let t = (0, a.bG)([rG.A], () => (rG.A.isConnected() ? rG.A.getChannelId() : null)),
                                    [n, l] = r.useState([]);
                                return (
                                    r.useEffect(() => {
                                        let n = null != t ? rD.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, rK.Xw)(t) && !(0, rK.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, rK.Ay)(e) && !(0, rK.Ay)(t)
                                                ? -1
                                                : (0, rK.Ay)(t) && !(0, rK.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (s = (0, a.yK)([eK.default], () => S?.map(eK.default.getUser).filter(rF.Vq) ?? [], [S])),
                            r.useMemo(
                                () =>
                                    nF().uniqWith(
                                        [...(null != p ? [p] : []), ...s, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [p, s, l, n],
                            )),
                        _ = (0, a.bG)([rf.A], () => (null != y ? rf.A.get(y) : null), [y]),
                        { userPrice: g } = (0, rk.CD)({ sku: _, priceSetAssignmentPurchaseType: Q.lid.GIFT }),
                        v = (0, rY.F)("gift_customization", { applicationId: P?.id, skuId: _?.id }),
                        x = (0, rg.fq)(_),
                        N = (0, rg.xf)(_);
                    async function R(e, t) {}
                    let b = (e) => {
                            null != A && A(null == e ? void 0 : e);
                        },
                        M = () =>
                            (0, i.jsxs)("div", {
                                className: rZ.mT,
                                children: [
                                    null != x &&
                                        (0, i.jsx)(rV.A, {
                                            containerClassName: rZ.T3,
                                            cardImage: x,
                                            cardBackgroundImage: N,
                                            altText: _?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: rZ._T,
                                        children: [
                                            (0, i.jsx)(rw.A, { sound: h, onSelect: b }),
                                            (0, i.jsx)(rU.A, {
                                                setEmojiConfetti: C,
                                                emojiConfetti: null == m ? void 0 : m,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        O = () =>
                            (0, i.jsxs)("div", {
                                className: rZ.Tc,
                                children: [
                                    null != p && (f === $.vQ.USER_PROFILE_WISHLIST || f === $.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(nZ.Z, { giftRecipient: p })
                                        : (0, i.jsx)(nk, { selectedSkuId: y, validateSelectedGift: R, recipients: T }),
                                    (0, i.jsx)(nV.A, {
                                        onTextChange: (e) => d?.(e),
                                        pendingText: c,
                                        currentText: c,
                                        disableThemedBackground: !0,
                                        className: rZ.iX,
                                        innerClassName: rZ.pt,
                                    }),
                                    null == _
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: rZ.AN,
                                              children: [
                                                  (0, i.jsx)(rL.z, {
                                                      className: rZ.jr,
                                                      children: J.intl.string(J.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: rZ.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: rZ.Xb,
                                                              children:
                                                                  null != _ &&
                                                                  null != x &&
                                                                  (0, i.jsx)(rV.A, {
                                                                      containerClassName: rZ.Iy,
                                                                      cardImage: x,
                                                                      cardBackgroundImage: N,
                                                                      altText: _.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: rZ.vz,
                                                              children: [
                                                                  null != P && (0, i.jsx)(rW.Q, { application: P }),
                                                                  (0, i.jsx)(eT.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: _.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eT.E, {
                                                              variant: "text-md/semibold",
                                                              children: g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != _ &&
                                        (0, rg.Ri)(_) &&
                                        (0, i.jsx)(eu.w, { type: "info", children: J.intl.string(J.t.lORYb6) }),
                                    null != v &&
                                        (0, i.jsx)(rb.O0, {
                                            Icon: v.Icon,
                                            text: v.text,
                                            endDatetime: v.endsAt,
                                            tooltip: v.tooltip,
                                        }),
                                    null != _ && (0, i.jsx)(rq, { handleClose: u, sku: _, application: P }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, i.jsxs)("div", { className: rZ.Du, children: [M(), O()] });
                        },
                        getLeftColumnComponent: M,
                        getRightColumnComponent: O,
                        onStepChange: o,
                        onBackClick: u,
                        disabled: null == p || p.id === I?.id || c.length > $.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = r.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(em.Mw, {
                paymentModalStepProps: e,
                layout: em.XZ.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: o,
            });
        },
        [S.pn.REVIEW]: tF.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(rO, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: a, isGift: s, skuId: o, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, rT.h)(t);
                    r.useEffect(() => {
                        null == l ||
                            null == n ||
                            rS.A.isFetchingForSKU(n) ||
                            null != rf.A.get(n) ||
                            (0, r_.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: a, skuId: o }),
                (0, i.jsx)(d.M, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [o],
                    purchaseType: e8.VV.ONE_TIME,
                    isGift: s,
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
        tenantAnalyticsLocation: u.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, rj.YW)(t)
                .with(S.pn.GIFT_CUSTOMIZATION, () => J.intl.string(J.t["JCFN/y"]))
                .with(S.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => J.intl.string(J.t.lDbi6H))
                .with(S.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(t1.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var r$ = n(206828),
    rX = n(587895),
    rQ = n(977445),
    rJ = n(211287),
    r0 = n(623373),
    r2 = n(739508),
    r1 = n(715054);
(0, i2.A)();
var r3 = n(136857),
    r4 = n(158317),
    r7 = n(855104),
    r6 = n(145659),
    r5 = n(310829);
n(322076);
var r8 =
        (((l = {})[(l.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (l[(l.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (l[(l.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (l[(l.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (l[(l.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (l[(l.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (l[(l.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (l[(l.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (l[(l.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (l[(l.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (l[(l.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (l[(l.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (l[(l.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (l[(l.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        l),
    r9 = n(318254),
    ae = n(576052),
    at = n(120992),
    an = n(999968),
    al = n(319820),
    ai = n(200766);
function ar(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: l, isSocialLayerGameItem: r } = (0, al.AO)({ sku: t }),
        a = (0, an.oO)(l);
    r ? (a = J.intl.string(e9.default.qwSlCO)) : (0, r0.Ab)(l) && (a = J.intl.string(J.t["0TmQRG"]));
    let s = (0, an.dL)(t),
        o = (0, t9.EZ)(t.id) ? ae.m[t.id].render({ className: ai.$ }) : (0, i.jsx)(e4.WH, { sku: t, product: l });
    return (0, i.jsx)(e4.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: r9.C });
}
function aa(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, at.c)({ applicationId: (0, r5.P)(t), skuIDs: [t] });
    let l = (0, nl.bG)([rf.A], () => rf.A.get(t), [t]);
    return null == l
        ? (0, i.jsx)(eb.y, { type: eb.y.Type.PULSING_ELLIPSIS })
        : (0, i.jsx)(ar, { sku: l, orbPriceAmount: n });
}
function as(e) {
    let { orbBalance: t } = e;
    return (0, i.jsx)(rc.vW, { label: J.intl.string(J.t.y0WGqP), value: null != t ? `${t}` : "", Icon: r9.C });
}
function ao() {
    return J.intl.string(J.t.wmcDyu);
}
function au(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, e2.U)(),
        l = (function (e) {
            let { skuId: t } = e,
                n = ao(),
                l = (0, a.bG)([rf.A], () => rf.A.get(t), [t]),
                i = l?.productLine,
                r = l?.applicationId,
                s = (0, a.bG)([rX.A], () => (i === Q.EZt.SOCIAL_LAYER_GAME_ITEM ? rX.A.getApplication(r) : null), [
                    r,
                    i,
                ]),
                { fetched: o, hasAlreadyLinked: u } = (0, r$.RD)(s);
            return i !== Q.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: rc.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: rc.I0.OrbsGameShop,
                      purchaseButtonText: n,
                      applicationName: s?.name,
                      applicationId: r,
                      shouldAppendDisclaimer: o && !u,
                  };
        })({ skuId: t });
    return (0, i.jsx)(rc._P, { variant: l, paymentSourceType: null, immediateDelivery: n });
}
let ac = (0, r.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    analyticsSourceLocation: void 0,
});
function ad() {
    return (0, r.useContext)(ac);
}
let ap = { payment_gateway: e8.kM.VIRTUAL_CURRENCY, currency: Q.Yri.DISCORD_ORB },
    am = {
        CHECKOUT_FLOW: em.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [S.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: o,
                        skuId: u,
                        analyticsSourceLocation: d,
                    } = ad(),
                    { primaryButtonProps: p, ...m } = (function (e) {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: s,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: u,
                                handleStepChange: d,
                            } = e,
                            { enabled: p } = rJ.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: m, orderOrbPriceAmount: h } = (0, E.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: C,
                                orbPriceAmount: A,
                                orbBalanceToDisplay: f,
                                onClickCheckout: P,
                                showCollectiblesDiscountWarning: I,
                                errorMessage: T,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: i,
                                        analyticsSourceLocation: a,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: o } = (0, eO.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: d,
                                        firstConstraintReasonCode: p,
                                    } = (0, E.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    m = (0, r7.gN)(),
                                    h = (0, r.useRef)(m),
                                    { emitOrbCheckoutPaymentFlowEvent: C } = (function (e) {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: a } = (0, nr.V)(),
                                            { hasPaymentSources: s } = (0, n9.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: d,
                                            } = (0, E.t4)((e) => e.contextMetadata),
                                            p = (0, r.useMemo)(
                                                () => ({
                                                    load_id: o,
                                                    discovery_session_id: d,
                                                    application_id: (0, r5.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: a,
                                                    payment_gateway: e8.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: Q.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...{
                                                        payment_type: Q.frM[Q.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: r6.r.UNIFIED,
                                                        checkout_flow: c.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [o, d, a, t, l, i, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === Q.HAw.PAYMENT_FLOW_STARTED
                                                        ? k.default.track(Q.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...p,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e8.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === Q.HAw.PAYMENT_FLOW_LOADED
                                                          ? k.default.track(Q.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...p,
                                                                has_saved_payment_source: s,
                                                                initial_step: S.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === Q.HAw.PAYMENT_FLOW_CANCELED
                                                            ? k.default.track(Q.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...p,
                                                                  duration_ms: n,
                                                              })
                                                            : e === Q.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? k.default.track(Q.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...p,
                                                                    duration_ms: n,
                                                                })
                                                              : e === Q.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? k.default.track(Q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                  })
                                                                : k.default.track(Q.HAw.PAYMENT_FLOW_FAILED, {
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
                                                [u, p, s],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: i,
                                        analyticsLocations: o,
                                        analyticsSourceLocation: a,
                                    });
                                (0, r.useEffect)(() => {
                                    null != l &&
                                        null !== h.current &&
                                        (C(Q.HAw.PAYMENT_FLOW_FAILED, l), (h.current = null));
                                }, [l, C]);
                                let A = (0, r.useCallback)(() => {
                                        (h.current = m),
                                            C(Q.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                d(y.h.COMPLETED), s(S.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, d, m, C, s]),
                                    f = h.current ?? m,
                                    P = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, nO.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, r.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof r4.FY && null != t)
                                                    switch (t) {
                                                        case r8.INSUFFICIENT_ORB_BALANCE:
                                                            return J.intl.string(J.t.keFvXM);
                                                        case r8.SKU_ALREADY_OWNED:
                                                            return J.intl.string(J.t.m371Mx);
                                                        case r8.BUNDLE_PARTIALLY_OWNED:
                                                            return J.intl.string(J.t.v9oC0p);
                                                        default:
                                                            return J.intl.string(J.t.fqJZ11);
                                                    }
                                                return e instanceof r4.j2
                                                    ? J.intl.string(J.t["2BmwgV"])
                                                    : e.code === r3.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? J.intl.string(J.t.keFvXM)
                                                      : e.code === r3.tG.ALREADY_PURCHASED
                                                        ? J.intl.string(J.t.m371Mx)
                                                        : e.code === r3.tG.BILLING_ORDER_NOT_SIGNABLE
                                                          ? J.intl.string(J.t.ZHgEG7)
                                                          : J.intl.string(J.t.fqJZ11);
                                            })(l, p),
                                        [l, p],
                                    ),
                                    orbPriceAmount: P,
                                    orbBalanceToDisplay: f,
                                    onClickCheckout: A,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: u,
                                handleStepChange: d,
                            }),
                            _ = (0, a.bG)([rf.A], () => rf.A.get(t), [t]),
                            g = (0, rQ.uS)(_?.applicationId),
                            {
                                disabled: v,
                                tooltipText: x,
                                text: N,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: a } = (0, r.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: J.intl.string(J.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: J.intl.string(J.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: a, text: ao() };
                            })({ orbBalance: f, orbPriceAmount: p ? m : A, isInTestMode: g }),
                            R = (0, r.useMemo)(
                                () => ({ onClick: P, loading: s, text: N, disabled: v, tooltipText: x }),
                                [P, s, N, v, x],
                            ),
                            b = I ? J.intl.format(J.t.fsOXXO, {}) : null,
                            M = g ? J.intl.string(J.t.OvMyMd) : null;
                        return {
                            isStepLoading: C,
                            upperInlineNoticeProps: (0, r.useMemo)(() => {
                                if (null != M || null != b || null != T) {
                                    let e = [];
                                    return (
                                        null != M &&
                                            e.push({ type: "warning", message: M, key: "test-mode-warning-notice" }),
                                        null != b &&
                                            e.push({ type: "warning", message: b, key: "orb-checkout-warning-notice" }),
                                        null != T &&
                                            e.push({ type: "critical", message: T, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [M, b, T]),
                            purchaseItemContent: (0, i.jsx)(aa, { skuId: t, orbPriceAmount: p ? h : A }),
                            paymentMethodContent: (0, i.jsx)(as, { orbBalance: f }),
                            legalContent: (0, i.jsx)(au, { skuId: t }),
                            primaryButtonProps: R,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: u,
                        analyticsSourceLocation: d,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: o,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(el.dZ, { children: (0, i.jsx)(e0.T, { ...m }) }),
                        (0, i.jsx)(el.UX, { children: (0, i.jsx)(C.lo, { primaryButtonProps: p }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: s } = e,
                    { order: o, setOrder: u } = (0, E.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: c,
                        isRedeeming: d,
                        orbRedemptionError: p,
                        onRedeemVirtualCurrency: m,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: s } = e,
                            o = (0, a.bG)([eK.default], () => ez.Ay.canUseShopDiscounts(eK.default.getCurrentUser())),
                            u = (0, a.bG)([rf.A], () => rf.A.get(t), [t]),
                            c = (0, rk.JL)({ sku: u }),
                            { product: d } = (0, ng.q)(t),
                            p = (0, r.useMemo)(() => {
                                if (null != c) return { orbPriceAmount: c.amount };
                                if (null != d) {
                                    let e = (0, r0.CW)({ product: d, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [c, d, o]);
                        p?.orbPriceAmount == null &&
                            (0, r2.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: m,
                                isSubmitting: h,
                                error: C,
                            } = (0, r1.Q)({ skuId: t, loadId: n, order: s, onSignFailure: i }),
                            E = (0, r.useCallback)(
                                (e) => {
                                    m(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, m, l],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: p,
                            onRedeemVirtualCurrency: E,
                            isRedeeming: h,
                            orbRedemptionError: C,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: u }),
                    h = (0, r.useMemo)(
                        () => ({
                            orbProductContext: c,
                            isRedeeming: d,
                            orbRedemptionError: p,
                            onRedeemVirtualCurrency: m,
                            skuId: t,
                            analyticsSourceLocation: l,
                        }),
                        [c, d, p, m, t, l],
                    );
                return (0, i.jsx)(ac.Provider, { value: h, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l } = ad(),
                    i = (function (e) {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, r.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: l, overrideAnalyticParams: ap });
                return n({ ...t, ...i });
            },
            overrideAnalyticParams: ap,
        },
    };
var ah = n(75304);
let aC = {
    [ah.C.ORB_CHECKOUT]: {
        flowType: ah.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: am,
    },
    [ah.C.COLLECTIBLES_CHECKOUT]: {
        flowType: ah.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: n1,
    },
    [ah.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: rz,
    },
    [ah.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.PREMIUM_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: i_,
    },
    [ah.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rC,
    },
    [ah.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: rI,
    },
    [ah.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: i0,
    },
    [ah.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: t2,
        flowType: ah.C.GUILD_PRODUCT_CHECKOUT,
    },
    [ah.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: lS,
        purchaseType: Q.VVm.SUBSCRIPTION,
    },
    [ah.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: ah.C.GUILD_BOOST_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: tG,
    },
};
