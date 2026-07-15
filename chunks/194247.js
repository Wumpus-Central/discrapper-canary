n.d(t, { Y: () => ay });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(444927),
    s = n(964486),
    o = n(793574),
    u = n(120700),
    c = n(171835),
    d = n(211083),
    p = n(558620),
    m = n(584160),
    h = n(169797),
    C = n(6938),
    A = n(832286),
    E = n(958340),
    y = n(166532),
    f = n(566980),
    S = n(615310),
    P = n(489254),
    T = n(251913),
    I = n(71393),
    _ = n(178368),
    g = n(166403),
    x = n(473145),
    v = n(802790),
    N = n(636441),
    b = n(587491),
    R = n(285753),
    M = n(430993),
    j = n(86379),
    O = n(682174),
    L = n(655857),
    w = n(534479),
    k = n(121005),
    D = n(174459),
    U = n(61299),
    G = n(295405),
    F = n(786300);
let [B, Y, H] = (0, F.A)();
function W(e) {
    let {
            initialNumGuildBoostsToPurchase: t,
            disablePremiumUpsell: n = !1,
            closeGuildPerksModal: s,
            children: o,
            guildId: u,
            analyticsLocation: c,
            analyticsSourceLocation: d,
            applicationId: p,
            intent: m,
            onSubscribeComplete: h,
        } = e,
        [A, E] = i.useState(!0),
        y = (0, a.A)(() => Date.now()),
        f = (0, a.A)(() => (0, x.D$)(_.A.boostSlots).length),
        {
            activeSubscription: S,
            setQuantity: P,
            selectedSkuId: T,
        } = (0, C.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    i.useEffect(() => {
        null != T && P(t);
    }, [T]);
    let I = (0, r.bG)([g.A], () => g.A.hasFetchedSubscriptions()),
        v = (0, r.bG)([G.A], () => G.A.defaultPaymentSourceId),
        N = null != S ? S.paymentSourceId : null,
        b = (0, U._V)(null != N ? N : I ? v : null);
    return (0, l.jsx)(B.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: s,
            guildId: u,
            paymentModalArgs: b,
            premiumSubscriptionPaymentSourceId: N,
            analyticsLocation: c,
            analyticsSourceLocation: d,
            forceDisableSubmitButton: A,
            setForceDisableSubmitButton: E,
            applicationId: p,
            intent: m,
            onSubscribeComplete: h,
            flowStartTime: y,
            existingAvailableSlotCount: f,
        },
        children: o,
    });
}
var V = n(160946),
    K = n(253390),
    q = n(97352),
    Z = n(615396),
    z = n(202541);
function $() {
    let { activeSubscription: e, quantity: t } = (0, C.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, r.bG)([q.A], () => null == e || null != q.A.get(e.planId)),
        l = (0, V.Y)(),
        a = (0, r.bG)([q.A], () => (null != e ? (0, Z.c9)(e.planId) : null)),
        s = i.useMemo(
            () => (null != e && n && l ? (0, K.v)(e, t) : [{ planId: z.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, l, t],
        ),
        o = i.useMemo(
            () =>
                s.find((e) => {
                    let { planId: t } = e;
                    return z.pW.has(t);
                })?.planId ?? z.gD.PREMIUM_MONTH_GUILD,
            [s],
        ),
        u = null == e || (n && l);
    return {
        newAdditionalPlans: s,
        currentPremiumSubscriptionPlan: a,
        hasFetchedPremiumSubscriptionPlan: n,
        hasFetchedAdditionalPlans: u,
        premiumGuildSubscriptionPlanId: o,
    };
}
var Q = n(652215),
    J = n(375708),
    X = n(898640);
function ee(e) {
    let { message: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.s3, { title: J.intl.string(J.t.q9EGps) }),
            (0, l.jsx)(M.c, { children: (0, l.jsx)("p", { className: X.C, children: t }) }),
        ],
    });
}
function et(e) {
    let { handleStepChange: t } = e,
        n = (0, C.t4)((e) => e.activeSubscription),
        { guildId: r, analyticsLocation: a } = Y(),
        o = (0, j.Hp)(),
        u = (0, k.A)(),
        { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, L.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = $(),
        m = null != n && null != n.renewalMutations,
        h = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        A = !u || !c || !p || null == d || "" === d;
    return ((0, s.Ay)(() => {
        m && D.default.track(Q.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: r });
    }),
    i.useEffect(() => {
        A || o || h || m || t(y.pn.PLAN_SELECT);
    }, [A, o, h, m, t]),
    h)
        ? (0, l.jsx)(ee, { message: J.intl.string(J.t.mOWsF1) })
        : m
          ? (0, l.jsx)(ee, { message: J.intl.string(J.t.npfhh0) })
          : A
            ? (0, l.jsx)(w.A, {})
            : o
              ? (0, l.jsx)(O.oO, {})
              : null;
}
var en = n(482132),
    el = n(216641),
    ei = n(879100);
function er(e) {
    let { handleClose: t } = e,
        { guildId: n, paymentModalArgs: i, existingAvailableSlotCount: s } = Y(),
        {
            activeSubscription: o,
            startingFractionalPremiumEndsAt: u,
            customCheckoutFlow: c,
            paymentSourceId: d,
            quantity: p,
        } = (0, C.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
            quantity: e.quantity,
        })),
        m = (0, r.bG)([E.A], () => (null != n ? E.A.getGuild(n) : void 0), [n]),
        h = null != n ? I.A.getGuild(n) : null,
        A = (0, a.A)(() => (0, Z.b2)(u)),
        y = (0, r.bG)([q.A], () => (null != o ? (0, Z.c9)(o.planId) : null)),
        { paymentSources: f } = i,
        S = (0, el.g)(f, d),
        P = null != h ? h.name : null != m ? m.name : void 0,
        T = A && null != y && !z.YV.has(y.id);
    return (0, l.jsx)(en.dZ, {
        children: (0, l.jsx)(ei.W, {
            guild: h,
            guildBoostQuantity: p + s,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: S,
            fallbackGuildName: P,
            didPurchaseOnFractionalPremium: T,
            customCheckoutFlow: c,
        }),
    });
}
var ea = n(284009),
    es = n.n(ea),
    eo = n(683071),
    eu = n(512950),
    ec = n(821609),
    ed = n(123292),
    ep = n(589078),
    em = n(87719);
let eh = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(321073);
var eC = n(503698),
    eA = n.n(eC),
    eE = n(661531),
    ey = n(990078),
    ef = n(408278),
    eS = n(834040),
    eP = n(499373),
    eT = n(834730),
    eI = n(403581),
    e_ = n(663803),
    eg = n(320448),
    ex = n(297264),
    ev = n(104510),
    eN = n(695366),
    eb = n(289873),
    eR = n(726656),
    eM = n(688810),
    ej = n(531260),
    eO = n(666646),
    eL = n(404374),
    ew = n(543767),
    ek = n(881489),
    eD = n(477421),
    eU = n(234419),
    eG = n(363476),
    eF = n(531506),
    eB = n(51465);
function eY() {
    return (0, l.jsxs)("div", {
        className: eA()(eB.dt, eB.dE),
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eB.qq,
            }),
            (0, l.jsx)(eT.E, { variant: "text-sm/medium", className: eB.tD, children: J.intl.format(J.t.f5VHKm, {}) }),
        ],
    });
}
function eH(e) {
    let { text: t, color: n } = e;
    return (0, l.jsxs)("div", {
        className: eB.dt,
        children: [(0, l.jsx)(eI.t, { size: "md", className: eB.YW, color: n }), (0, l.jsx)("div", { children: t })],
    });
}
var eW = n(773669),
    eV = n(287809),
    eK = n(975571),
    eq = n(252424),
    eZ = n(428262),
    ez = n(580630),
    e$ = n(155718),
    eQ = n(606267),
    eJ = n(319668),
    eX = n(38785),
    e0 = n(818824),
    e2 = n(596034),
    e3 = n(270537),
    e1 = n(241989),
    e4 = n(888751),
    e7 = n(874638),
    e6 = n(692440),
    e5 = n(818348),
    e8 = n(327105),
    e9 = n(7921);
function te(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: i,
            totalDue: r,
            currency: a,
            startDate: s,
        } = e,
        { immediateDelivery: o } = (0, e0.U)();
    return (0, l.jsx)(e2._, {
        variant: {
            type: e2.I.Subscription,
            purchaseButtonText: J.intl.string(J.t.eUEeCt),
            totalDue: r,
            renewalPrice: i,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: o,
    });
}
function tt(e) {
    return J.intl.format(J.t.IeaYqg, { endDate: e });
}
function tn(e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)("div", { className: e9.bU }),
            (0, l.jsx)(eT.E, { variant: "text-sm/normal", className: e9.b7, children: t }),
            (0, l.jsx)("div", { className: e9.bU }),
        ],
    });
}
function tl(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: i,
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
                    planName: (0, eZ.Mn)(n.id, !1, l),
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
            label: J.intl.formatToPlainString(J.t.ZSVged, { planName: (0, eZ.RH)(i[0].subscriptionPlanId) }),
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
    let { lineItems: u, currency: c } = (0, e4.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, l.jsx)(e3.Vm, {
        defaultExpanded: !0,
        label: J.intl.string(e8.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function ti(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, l.jsx)(e6.m0, { proratedInvoice: i, renewalInvoice: r, isUpdate: t })
        : (0, l.jsx)(e6.m0, { renewalInvoice: r });
}
function tr(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: i,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: s,
            premiumSubscriptionPlan: u,
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
                    premiumSubscriptionPlan: a,
                    newAdditionalPlans: s,
                } = e,
                u = (0, r.bG)([I.A, E.A], () => {
                    let e = I.A.getGuild(n);
                    return null != e ? e : E.A.isGuildFetching(n) ? null : E.A.getGuild(n);
                }, [n]),
                c = a.interval,
                d = a.intervalCount,
                p = (0, r.bG)([q.A], () => q.A.getForSkuAndInterval((0, eZ.mH)(z.pe.GUILD), c, d));
            es()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, eZ.J$)(l.paymentSourceId),
                h = (0, ek.ds)();
            t = null != i ? (0, eZ.Om)(i, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: C } = (0, eM.Ay)(),
                [A, y] = (0, ew.YV)({
                    subscriptionId: i?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: o.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [f, S] = (0, ew.YV)({
                    subscriptionId: i?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: C,
                    analyticsLocation: o.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eO.OQ)({
                    checkoutInvoicePreview: A,
                    checkoutInvoiceError: y,
                    renewalInvoicePreview: f,
                    renewalInvoiceError: S,
                }),
                {
                    guild: u ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: h,
                    checkoutInvoicePreview: A,
                    renewalInvoicePreview: f,
                    isSubscriptionUpdate: null != i,
                }
            );
        })({
            guildId: t,
            priceOptions: i,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: u,
            newAdditionalPlans: c,
        }),
        {
            isSubscriptionUpdate: C,
            guild: A,
            isPrepaid: y,
            isReverseTrial: f,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: P,
        } = h,
        T = (0, eQ.A)({ location: "GuildBoostReview", message: J.intl.string(e8.default["tK8A/8"]) });
    if (null == S || null == P || null == A) return (0, l.jsx)(eX.Ed, {});
    let _ = (0, l.jsx)(ti, {
            isSubscriptionUpdate: C,
            premiumSubscription: a,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: P,
        }),
        g = (0, l.jsx)(eJ.n, {
            setPaymentSourceId: p,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: J.intl.string(J.t["u+Cw58"]),
            onPaymentSourceAdd: m,
            premiumSubscriptionPaymentSourceId: s,
            hideCurrencySelect: !0,
        }),
        x = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: l,
                checkoutInvoicePreview: i,
                paymentSources: r,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, el.g)(r, a),
                premiumSubscriptionPlan: n,
                renewalPrice: l.subtotal,
                totalDue: i.total,
                currency: i.currency,
                startDate: (0, e6.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: C,
            premiumSubscriptionPlan: u,
            renewalInvoicePreview: P,
            checkoutInvoicePreview: S,
            paymentSources: n,
            paymentSourceId: d,
        }),
        v = (0, l.jsx)(te, { ...x }),
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
                return (0, e7.Z)(l.invoiceItems).find((t) => z.pW.has(t.subscriptionPlanId) && e(t));
            }
            let m = p((e) => e.amount >= 0);
            es()(null != m, "Missing guild boosting invoice item");
            let h = p((e) => e.amount < 0),
                C = null != h ? m.quantity - h.quantity : m.quantity,
                A = l.invoiceItems.filter((e) => (0, eZ.xq)(e.subscriptionPlanId)),
                E = A.reduce((e, t) => e + t.amount, 0),
                y = (0, ew.sL)(m) * C,
                f = (0, ez.$g)(y, l.currency),
                S = (0, ez.CE)(f, c, d),
                P = (0, ez.$g)(l.total, l.currency) + (l.currency !== e5.Yr.USD ? "*" : ""),
                T = l.subtotal - y - E,
                I = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * C };
                }),
                _ = I.find((e) => e.type === e$.iS.SUBSCRIPTION_PLAN),
                g = I.find((e) => e.type === e$.iS.ENTITLEMENT),
                x = m.subscriptionPlanPrice * C;
            return {
                addedQuantity: C,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: f,
                formattedGuildBoostRate: S,
                formattedOriginalAmountGuildBoostRate: (0, ez.CE)((0, ez.$g)(x, l.currency), c, d),
                formattedTotal: P,
                basePlanAdjustment: E,
                basePlanInvoiceItems: A,
                guildBoostingAdjustment: T,
                subscriptionDiscount: _,
                entitlementDiscount: g,
                originalAmount: x,
                premiumSubscription: t,
                checkoutInvoicePreview: l,
                renewalInvoicePreview: i,
                priceOptions: r,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: u,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: P,
            priceOptions: i,
            reviewState: h,
        }),
        b = (0, l.jsx)(tl, { ...N }),
        R = (function (e, t, n) {
            let {
                    addedQuantity: i,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: a,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: o,
                    subscriptionDiscount: u,
                } = t,
                c = null != u;
            return {
                label: J.intl.formatToPlainString(J.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, eZ.Mn)(r.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, l.jsx)(e1.a6, {}),
                price: s,
                PriceIcon: c ? eI.t : void 0,
                priceTooltip: c ? J.intl.string(e8.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            A,
            N,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tt(l.currentPeriodEnd) } : null;
            })({ isPrepaid: y, isReverseTrial: f, premiumSubscription: a }),
        ),
        M = (0, l.jsx)(e1.f7, { ...R });
    return (0, l.jsx)(eX.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: T,
        purchaseItemContent: M,
        subscriptionDetailsContent: _,
        paymentMethodContent: g,
        invoiceSummaryContent: b,
        legalContent: v,
        invoiceTotalDueValue: N.formattedTotal,
        invoiceTotalDueLabel: J.intl.string(e8.default.R0cZsM),
    });
}
n(26279);
var ta = n(406263);
function ts(e) {
    return "" === e || "-" === e;
}
function to(e) {
    let { value: t, onChange: n, minValue: r = 1, maxValue: a = 30, ariaLabel: s } = e,
        [o, u] = i.useState(t);
    i.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof o;
    function d(e) {
        u(e), ts(e) || n(e);
    }
    return (0, l.jsxs)("div", {
        className: ta.U$,
        children: [
            (0, l.jsx)(ef.K, {
                variant: "secondary",
                size: "md",
                icon: eS.Q,
                onClick: () => {
                    c && !(o <= r) && d(o - 1);
                },
                "aria-label": J.intl.string(J.t["k+ohJm"]),
                disabled: !c || o <= r,
            }),
            (0, l.jsx)("div", {
                className: ta.WJ,
                children: (0, l.jsx)("input", {
                    className: ta.Zh,
                    "aria-label": s,
                    inputMode: "numeric",
                    value: `${o}`,
                    onChange: (e) =>
                        (function (e) {
                            if (ts(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= r) return void d(r);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: function () {
                        ts(o) && u(t);
                    },
                }),
            }),
            (0, l.jsx)(ef.K, {
                variant: "secondary",
                size: "md",
                icon: eP.T,
                onClick: () => {
                    c && !(o >= a) && d(o + 1);
                },
                "aria-label": J.intl.string(J.t.w8Sc4B),
                disabled: !c || o >= a,
            }),
        ],
    });
}
function tu(e) {
    let { message: t } = e;
    return (0, l.jsx)(eT.E, { variant: "text-xs/normal", color: "text-muted", className: ta.jH, children: t });
}
function tc(e) {
    let { text: t } = e;
    return (0, l.jsxs)("div", {
        className: ta.Vk,
        children: [
            (0, l.jsx)("div", {
                className: ta.D0,
                children: (0, l.jsx)(eI.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: ta.ue,
                    color: eL.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, l.jsx)("div", { className: ta.yP, children: t }),
        ],
    });
}
function td(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
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
        legacyPricingNotes: A,
        refreshPricingNotes: E,
    } = e;
    return (0, l.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, l.jsxs)("div", {
                className: e9.mP,
                children: [
                    (0, l.jsxs)("div", {
                        className: e9.E6,
                        children: [
                            (0, l.jsx)(e_.l, {
                                value: n,
                                onChange: (e) => r(e),
                                className: e9.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)("div", { className: e9.$0, children: a }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eA()(e9.QK, { [e9.S]: t }), children: s }),
                ],
            }),
            (0, l.jsx)("div", { className: e9.J3 }),
            (0, l.jsxs)("div", {
                className: e9.mP,
                children: [
                    (0, l.jsx)(eT.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: J.intl.string(J.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", {
                        className: eA()(e9.__invalid_planSelectorSubtotalPrice, { [e9.S]: t }),
                        children: o,
                    }),
                ],
            }),
            A.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t)),
            h,
        ],
    });
}
function tp(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
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
        refreshDiscountCallout: A,
        legacyPricingNotes: E,
        refreshPricingNotes: y,
    } = e;
    return (0, l.jsxs)("div", {
        className: ta.xY,
        children: [
            m,
            (0, l.jsxs)("div", {
                className: ta.K3,
                children: [
                    (0, l.jsx)(eT.E, {
                        variant: "text-md/medium",
                        className: ta.bk,
                        children: J.intl.string(J.t["r+SebU"]),
                    }),
                    (0, l.jsx)(eg._, { className: ta.bN, color: "currentColor", size: "xs" }),
                    (0, l.jsx)(eT.E, { variant: "text-md/medium", className: ta.kX, children: a }),
                ],
            }),
            p,
            h,
            (0, l.jsxs)("div", {
                className: ta.fh,
                children: [
                    (0, l.jsxs)("div", {
                        className: ta.fX,
                        children: [
                            (0, l.jsx)(to, {
                                value: n,
                                onChange: (e) => r(e),
                                ariaLabel: s,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)(eT.E, { variant: "text-md/medium", className: ta.ny, children: s }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eA()(ta.El, { [e9.S]: t }), children: o }),
                ],
            }),
            A,
            (0, l.jsxs)("div", {
                className: ta.fh,
                children: [
                    (0, l.jsx)(ex.D, {
                        variant: "heading-lg/semibold",
                        className: ta.O3,
                        children: J.intl.string(J.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", { className: eA()(ta.BU, { [e9.S]: t }), children: c }),
                ],
            }),
            y.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t)),
        ],
    });
}
function tm(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, l.jsxs)("div", {
        className: e9.Mv,
        children: [
            (0, l.jsx)(ev._, { className: e9.T5, color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, l.jsxs)("div", {
                children: [
                    J.intl.format(J.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, l.jsx)(ey.m, {
                              text: J.intl.formatToPlainString(J.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, l.jsx)(eN.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e9.Y5,
                                  color: eE.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function th(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: a,
            setForceDisableSubmitButton: s,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: m = !1,
            showRefreshSubtotalRate: h = !1,
            refreshNextStepLabel: C = J.intl.string(J.t.QBnNHq),
        } = e,
        A = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: a,
                    numGuildBoosts: s,
                    setForceDisableSubmitButton: u,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: m,
                    showRefreshSubtotalRate: h,
                } = e,
                C =
                    ((t = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription())),
                    (0, r.bG)([G.A], () =>
                        t?.paymentSourceId != null ? G.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                A = a.interval,
                E = a.intervalCount,
                y = (0, r.bG)([q.A], () => q.A.getForSkuAndInterval((0, eZ.mH)(z.pe.GUILD), A, E)),
                f = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                S = (0, ej.A)({ forceFetch: !1 });
            es()(null != y, "Missing guildBoostingSubscriptionPlan");
            let P = [{ planId: y.id, quantity: 1 }],
                T = c?.items.find(
                    (e) => e.planId === z.gD.PREMIUM_MONTH_TIER_2 || e.planId === z.gD.PREMIUM_YEAR_TIER_2,
                );
            null != T && P.push(T);
            let I = c?.items.find((e) => e.planId === z.gD.PREMIUM_MONTH_GUILD || e.planId === z.gD.PREMIUM_YEAR_GUILD),
                _ = null == C || !z.uJ.has(C) || null == I,
                { analyticsLocations: v } = (0, eM.Ay)(),
                [N, b] = (0, ew.YV)({
                    subscriptionId: c?.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: m.currency,
                    preventFetch: _,
                    analyticsLocations: v,
                    analyticsLocation: o.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eO.Tr)(N, b);
            let R = !_ && null == N && null == b;
            i.useLayoutEffect(() => {
                u(R);
            }, [R, u]);
            let M = (0, eU.V)()?.subscription_trial?.sku_id === z.pe.TIER_2,
                j = eZ.Ay.hasBoostDiscount(f),
                O = j && null != c && eZ.Ay.isPremiumAtLeast(eZ.Ay.getPremiumType(c.planId), z.PremiumTypes.TIER_1),
                L = N?.findInvoiceItemByPlanId(y.id),
                w =
                    null != L
                        ? { amount: L.amount, tax: 0, taxInclusive: !0, currency: N.currency }
                        : eZ.Ay.getPrice(y.id, j, !1, m),
                k = s * w.amount,
                D = (0, ek.ds)() && j && null != c,
                U = (function (e) {
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
                            showFractionalPremiumBanner: l === z.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: S.fractionalState,
                    isReverseTrial: D,
                    hasDiscountUpsell: O,
                    withTrialOfferCopyVariant: M,
                });
            "discount" === U.upsellVariant
                ? (es()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (n = J.intl.format(J.t.hf6YOY, { planName: eZ.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = J.intl.format("upsell_trial" === U.upsellVariant ? J.t.ba1L74 : J.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eq.l9)(eW.default.locale, z.oX / 100),
                      freeSubscriptionCount: z.M4,
                  }));
            let F = p.filter((e) => (0, x.I5)(e)).length,
                B = (0, eZ.J$)(m.paymentSourceId),
                { ipCountryCode: Y } = (0, eD.A)(),
                H = "HR" === Y && w.currency === e5.Yr.EUR,
                W =
                    D && null != c
                        ? (0, l.jsx)(tn, { text: tt(c.currentPeriodEnd) })
                        : (0, l.jsx)("div", { className: eA()(e9.hA, e9.G3), children: J.intl.string(J.t.jNY1FO) }),
                V =
                    D && null != c
                        ? (0, l.jsx)(tn, { text: tt(c.currentPeriodEnd), className: e9.jk })
                        : (0, l.jsx)(eT.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: ta._X,
                              children: J.intl.string(J.t.jNY1FO),
                          }),
                K = U.showExistingSlotNotice
                    ? (0, l.jsx)(tm, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                Z = U.showFractionalPremiumBanner ? (0, l.jsx)(eF.vi, { fractionalPremiumInfo: S }) : null,
                $ = B
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === z.WT.YEAR
                              ? J.intl.string(J.t.YDpAzZ)
                              : t === z.WT.MONTH && 1 === n
                                ? J.intl.string(J.t["6ZR3By"])
                                : null;
                      })({ intervalType: A, intervalCount: E }) ?? J.intl.string(J.t.K9Bmze))
                    : J.intl.string(J.t.K9Bmze),
                X = R
                    ? (0, l.jsx)(eb.y, {})
                    : B
                      ? (0, ez.$g)(w.amount, w.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, ez.$g)(t, n);
                            return l === z.WT.YEAR
                                ? J.intl.formatToPlainString(J.t["8M04YJ"], { price: r })
                                : l === z.WT.MONTH && 1 === i
                                  ? J.intl.formatToPlainString(J.t.VStWCR, { price: r })
                                  : l === z.WT.MONTH && i > 1
                                    ? J.intl.formatToPlainString(J.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: A, intervalCount: E, amount: w.amount, currency: w.currency }),
                ee = R
                    ? (0, l.jsx)(eb.y, {})
                    : (0, l.jsx)(eG.A, {
                          price: k,
                          currency: w.currency,
                          intervalType: A,
                          intervalCount: E,
                          isPrepaidPaymentSource: B,
                      }),
                et = R
                    ? (0, l.jsx)(eb.y, {})
                    : h && !B
                      ? (0, ez.CE)((0, ez.$g)(k, w.currency), A, E)
                      : (0, ez.$g)(k, w.currency),
                en = [],
                el = [];
            if (H) {
                let e = (0, l.jsx)(
                    eR.A,
                    {
                        message: J.intl.formatToPlainString(J.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, ez.$g)(7.5345 * k, e5.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                en.push(e), el.push(e);
            }
            let ei = J.intl.format(J.t.Om31w8, { documentationLink: eK.A.getArticleURL(Q.MVz.LOCALIZED_PRICING) });
            return (
                en.push((0, l.jsx)(eR.A, { message: ei }, "localized-pricing")),
                el.push((0, l.jsx)(tu, { message: ei }, "localized-pricing")),
                {
                    isLoading: R,
                    planLabel: $,
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
                        "reverse_trial" === U.upsellVariant
                            ? (0, l.jsx)(eY, {})
                            : (0, l.jsx)(eH, { text: n, color: eL.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === U.upsellVariant ? (0, l.jsx)(eY, {}) : (0, l.jsx)(tc, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: s,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d,
            priceOptions: p,
            showRefreshSubtotalRate: h,
        });
    return (0, l.jsx)(m ? tp : td, {
        isLoading: A.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: a,
        planLabel: A.planLabel,
        planPriceContent: A.planPriceContent,
        subtotalContent: A.subtotalContent,
        refreshSubtotalContent: A.refreshSubtotalContent,
        legacyDescriptionContent: A.legacyDescriptionContent,
        refreshDescriptionContent: A.refreshDescriptionContent,
        fractionalBanner: A.fractionalBanner,
        existingSlotNotice: A.existingSlotNotice,
        discountCallout: A.discountCallout,
        refreshDiscountCallout: A.refreshDiscountCallout,
        legacyPricingNotes: A.legacyPricingNotes,
        refreshPricingNotes: A.refreshPricingNotes,
        refreshNextStepLabel: C,
    });
}
let tC = z.gD.NONE_MONTH,
    tA = [z.pe.GUILD];
function tE(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: i,
            closeGuildPerksModal: s,
            disablePremiumUpsell: o,
            setForceDisableSubmitButton: u,
            forceDisableSubmitButton: c,
            paymentModalArgs: d,
            premiumSubscriptionPaymentSourceId: p,
        } = Y(),
        {
            paymentSourceId: m,
            activeSubscription: h,
            quantity: A,
            setQuantity: f,
        } = (0, C.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: S } = (0, L.Jn)(),
        T = null != p || Object.keys(d.paymentSources).length > 0,
        g = (0, y.Ir)(T ? y.pn.REVIEW : y.pn.ADD_PAYMENT_STEPS),
        v = (0, a.A)(() => (0, x.D$)(_.A.boostSlots)),
        N = (0, P.n)("GuildBoostPurchaseModal"),
        b = eh.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        R = N && b,
        M = (0, r.bG)([E.A], () => (null != i ? E.A.getGuild(i) : void 0), [i]),
        j = null != i ? I.A.getGuild(i) : null,
        O = null == M && null == j,
        w = null != h && h.isPurchasedExternally,
        k = Object.keys(d.paymentSources).length > 0,
        D = (0, r.bG)([q.A], () => (null != h ? (0, Z.c9)(h.planId) : null)),
        U = (0, r.bG)([q.A], () => (null == D ? q.A.get(tC) : D));
    if (null == i) throw new ep.vd({ message: "Missing guildId" });
    es()(null != U, "Missing nextPremiumSubscriptionPlan");
    let G = (0, l.jsx)(th, {
        premiumSubscriptionPlan: U,
        numGuildBoosts: A,
        setNumGuildBoosts: f,
        setForceDisableSubmitButton: u,
        premiumSubscription: h,
        existingAvailableSlots: v,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != s && s(), (0, em.e)();
        },
        priceOptions:
            null != m ? { paymentSourceId: m, currency: null != S ? S : void 0 } : { currency: null != S ? S : void 0 },
        isRefreshEnabled: N,
        showRefreshSubtotalRate: R,
        refreshNextStepLabel: g,
    });
    return (
        w && null != h && null != h.paymentGateway
            ? (G = (0, l.jsxs)("div", {
                  className: X.xK,
                  children: [
                      (0, l.jsx)(eo.w, {
                          type: "critical",
                          children: J.intl.format(J.t["/m3Y3s"], { paymentGatewayName: e5.qm[h.paymentGateway] }),
                      }),
                      G,
                  ],
              }))
            : null != i &&
              !E.A.isGuildFetching(i) &&
              O &&
              (G = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eu.p, {
                          messageType: eu.Y.ERROR,
                          className: X.MR,
                          children: J.intl.string(J.t.eAn6z2),
                      }),
                      G,
                  ],
              })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(en.dZ, { children: G }),
                (0, l.jsx)(en.UX, {
                    children: (0, l.jsx)(ei._, {
                        currentStep: y.pn.PLAN_SELECT,
                        isRefreshEnabled: N,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: N
                            ? (0, l.jsx)(ec.$, { variant: "secondary", text: J.intl.string(J.t["ETE/oC"]), onClick: t })
                            : (0, l.jsx)(ed.Q, { text: J.intl.string(J.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, l.jsx)(ec.$, {
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
                                forceDisableSubmitButton: c,
                                numGuildBoostsToPurchase: A,
                                isDisabledBecauseExternalSubscription: w,
                                isMissingGuildInformation: O,
                            }),
                            onClick: () => {
                                o || (null != D && D.premiumSubscriptionType === z.PremiumTypes.TIER_2)
                                    ? n(null != p || k ? y.pn.REVIEW : y.pn.ADD_PAYMENT_STEPS)
                                    : n(y.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var ty = n(364840),
    tf = n(460905),
    tS = n(183623),
    tP = n(95635),
    tT = n(935462),
    tI = n(331322),
    t_ = n(532794),
    tg = n(811611),
    tx = n(901017),
    tv = n(403052);
function tN(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, r.bG)([eW.default], () => eW.default.locale);
    return (0, l.jsxs)("div", {
        className: tv.mH,
        children: [
            (0, l.jsx)(tx.A, {
                icon: ev._,
                iconClassName: tv.pl,
                description: J.intl.formatToPlainString(J.t.sQBgs2, { numFreeGuildSubscriptions: z.M4 }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, l.jsx)(tx.A, {
                icon: ev._,
                iconClassName: tv.pl,
                description: J.intl.formatToPlainString(J.t["1A6vXi"], { percent: (0, eq.l9)(n, z.oX / 100) }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, l.jsx)(tx.A, { icon: tf.n, iconClassName: tv.zO, description: J.intl.string(J.t.Z9b2x2) }) : null,
            (0, l.jsx)(tx.A, { icon: tS.F, iconClassName: tv.Kg, description: J.intl.string(J.t["8dqG5E"]) }),
            (0, l.jsx)(tx.A, { icon: tP.J, iconClassName: tv.$z, description: J.intl.string(J.t.cBorIy) }),
        ],
    });
}
function tb(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: s,
            analyticsLocation: u,
            analyticsSourceLocation: c,
            priceOptions: d,
        } = e,
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, eM.Ay)(o.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        h = null == t || null == t.premiumSubscriptionType,
        C = eZ.Ay.getPrice(z.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        A = (0, ez.$g)(C.amount, C.currency),
        E = (0, eU.V)(),
        y = E?.trial_id,
        f = E?.subscription_trial?.sku_id === z.pe.TIER_2;
    return (
        i.useEffect(() => {
            D.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, { type: z.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: m });
        }, [m]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tT.s_, { "data-migration-pending": !0, onClick: n, className: tv.b }),
                (0, l.jsxs)(M.c, {
                    children: [
                        f && (0, l.jsx)(tg.Vq, { className: tv.Fg }),
                        (0, l.jsx)("div", { className: eA()(tv.Tn, { [tv.NH]: f }) }),
                        (0, l.jsx)(eT.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != y
                                    ? J.intl.string(J.t.AoSzEr)
                                    : J.intl.format(J.t["7vePZb"], { monthlyPrice: A }),
                        }),
                        (0, l.jsx)(tN, { shouldUpsellFromNoneTier: h }),
                    ],
                }),
                (0, l.jsx)(ty.j, {
                    children: (0, l.jsxs)(tI.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(ed.Q, { text: J.intl.string(J.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, l.jsxs)(tI.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, l.jsx)(ed.Q, {
                                        text: J.intl.string(J.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, l.jsx)(ec.$, {
                                        variant: "active",
                                        text: null != y ? J.intl.string(J.t["Gd/XHF"]) : J.intl.string(J.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, t_.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: z.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: Q.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: s,
                                                    trialId: y,
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
function tR(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: a } = e,
        { paymentModalArgs: s, analyticsLocation: o, analyticsSourceLocation: u } = Y(),
        { paymentSourceId: c, activeSubscription: d } = (0, C.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, L.Jn)(),
        m = (0, r.bG)([q.A], () => (null != d ? (0, Z.c9)(d.planId) : null)),
        h = (0, r.bG)([q.A], () => (null == m ? q.A.get(tC) : m));
    es()(null != h, "Missing nextPremiumSubscriptionPlan"), es()(null != p && "" !== p, "Currency not defined");
    let { paymentSources: A } = s,
        E = null != d ? d.paymentSourceId : null,
        f = Object.keys(A).length > 0,
        S = i.useCallback(() => n(y.pn.PLAN_SELECT), [n]),
        P = i.useCallback(() => n(null != E || f ? y.pn.REVIEW : y.pn.ADD_PAYMENT_STEPS), [n, E, f]);
    return (0, l.jsx)(tb, {
        premiumSubscriptionPlan: h,
        analyticsLocation: o,
        analyticsSourceLocation: u,
        onClose: t,
        onBack: S,
        onSkip: P,
        onSubscriptionConfirmation: a,
        priceOptions: null != c ? { paymentSourceId: c, currency: p } : { currency: p },
    });
}
var tM = n(277984),
    tj = n(364995),
    tO = n(820739);
async function tL(e, t) {
    await (0, tO.CD)();
    let n = (0, x.D$)(_.A.boostSlots);
    return (0, tO.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
let tw = [y.pn.PLAN_SELECT];
function tk() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = Y(),
        { setIsSubmittingCurrentStep: r } = l,
        { paymentAuthenticationState: a } = (0, d.o)(),
        { setPurchaseState: s, setPurchaseError: o } = (0, C.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        u = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (a === T.oc.PENDING) {
                u.current = !0;
                return;
            }
            u.current &&
                ((u.current = !1),
                r(!1),
                a !== T.oc.NONE ||
                    null == e ||
                    (async () => {
                        try {
                            await tL(e, null != t), n?.();
                        } catch (e) {
                            s(f.h.FAIL), o(e);
                        }
                    })());
        }, [a, e, t, n, r, s, o]),
        null
    );
}
let tD = [
        { key: y.pn.PLAN_SELECT, renderStep: (e) => (0, l.jsx)(tE, { ...e }), options: { renderHeader: !0 } },
        {
            key: y.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, l.jsx)(tR, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    tU = {
        CHECKOUT_FLOW: u.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(et, { ...e }) },
        STEPS_BEFORE_CHECKOUT: tD,
        CHECKOUT_STEPS: {
            [y.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: a } = e,
                    { guildId: s, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: u } = Y(),
                    {
                        activeSubscription: c,
                        paymentSourceId: d,
                        setPaymentSourceId: p,
                    } = (0, C.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: m } = (0, L.Jn)();
                if (null == s) throw new ep.vd({ message: "Missing guildId" });
                es()(null != m && "" !== m, "Currency not defined");
                let { paymentSources: A } = o,
                    { newAdditionalPlans: E, currentPremiumSubscriptionPlan: S } = $(),
                    P = (0, r.bG)([q.A], () => (null == S ? q.A.get(tC) : S));
                es()(null != P, "Missing nextPremiumSubscriptionPlan");
                let T = null != d ? { paymentSourceId: d, currency: m } : { currency: m },
                    I = (function (e) {
                        let { handleStepChange: t, handleClose: n, analyticsData: l } = e,
                            {
                                guildId: r,
                                paymentModalArgs: a,
                                premiumSubscriptionPaymentSourceId: s,
                                analyticsLocation: o,
                                analyticsSourceLocation: u,
                                flowStartTime: c,
                                applicationId: d,
                                intent: p,
                                onSubscribeComplete: m,
                            } = Y(),
                            { displayCurrency: h } = (0, L.Jn)(),
                            { paymentSources: A, setIsSubmittingCurrentStep: E, isSubmittingCurrentStep: S } = a,
                            {
                                activeSubscription: P,
                                paymentSourceId: T,
                                setPurchaseError: I,
                                hasAcceptedTerms: _,
                                setPurchaseState: g,
                                quantity: x,
                            } = (0, C.t4)((e) => ({
                                activeSubscription: e.activeSubscription,
                                paymentSourceId: e.paymentSourceId,
                                setPurchaseError: e.setPurchaseError,
                                hasAcceptedTerms: e.hasAcceptedTerms,
                                setPurchaseState: e.setPurchaseState,
                                quantity: e.quantity,
                            })),
                            v = (0, eO.sw)(),
                            {
                                newAdditionalPlans: N,
                                currentPremiumSubscriptionPlan: b,
                                premiumGuildSubscriptionPlanId: R,
                            } = $(),
                            M = (0, eQ.A)({
                                location: "GuildBoostPurchaseModal",
                                message: J.intl.string(e8.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: j } = (0, tj.t)(),
                            O = (0, eQ.iB)({
                                checkoutPaymentSources: j,
                                paymentSourceId: T,
                                location: "GuildBoostPurchaseModal",
                            }),
                            w = i.useMemo(
                                () => ({
                                    ...l,
                                    location: o,
                                    source: u,
                                    subscription_plan_id: R,
                                    sku_id: (0, eZ.mH)(z.pe.GUILD),
                                    quantity: x,
                                }),
                                [l, o, u, x, R],
                            ),
                            k = i.useMemo(() => {
                                let { guild_id: e, ...t } = w;
                                return t;
                            }, [w]),
                            U = null != T ? { paymentSourceId: T, currency: h ?? void 0 } : { currency: h ?? void 0 },
                            G = async () => {
                                es()(null != N, "Missing newAdditionalPlans");
                                let e = (0, el.W)(A, T);
                                I(null);
                                let i = !1;
                                try {
                                    g(f.h.PURCHASING),
                                        E(!0),
                                        es()(null != T, "Missing paymentSourceId"),
                                        es()(null != v, "Missing invoicePreview");
                                    let a = { amount: v.total, currency: v.currency },
                                        o = U.currency ?? v.currency,
                                        u = (0, eZ.U8)(P, N, o.toLowerCase(), U.paymentSourceId);
                                    if (
                                        (D.default.track(Q.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...w,
                                            duration_ms: Date.now() - c,
                                            guild_id: r ?? void 0,
                                            application_id: d,
                                        }),
                                        null == P || null == b)
                                    ) {
                                        es()(null != e, "Missing paymentSource");
                                        let t = await (0, tM.Ky)({
                                            items: N,
                                            paymentSource: e,
                                            currency: o,
                                            expectedInvoicePrice: a,
                                            expectedRenewalPrice: u,
                                        });
                                        if (t.redirectConfirmation) {
                                            i = !0;
                                            return;
                                        }
                                        if (t.pendingCustomerAction) return;
                                    } else {
                                        let t = { items: (0, eZ.aE)(P, N) };
                                        (t.currency = P.currency ?? o),
                                            (t.paymentSource = null != s ? A[s] : void 0),
                                            null == t.paymentSource &&
                                                (es()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = o));
                                        let n = await (0, tM.nV)(P, t, a, u, l.location_stack);
                                        if (n.redirectConfirmation) {
                                            i = !0;
                                            return;
                                        }
                                        if (n.pendingCustomerAction) return;
                                    }
                                    null == p && t(y.pn.CONFIRM),
                                        g(f.h.COMPLETED),
                                        null != r && (await tL(r, null != p)),
                                        null != p && n(),
                                        m?.();
                                } catch (t) {
                                    g(f.h.FAIL),
                                        I(t),
                                        D.default.track(Q.HAw.PAYMENT_FLOW_FAILED, {
                                            ...k,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === Q.hes.CARD
                                                        ? Q.kM_.STRIPE
                                                        : Q.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: T,
                                            duration_ms: Date.now() - c,
                                        });
                                } finally {
                                    i || E(!1);
                                }
                            };
                        return {
                            text: J.intl.string(J.t.eUEeCt),
                            loading: S,
                            disabled: null == T || !_ || null != M || O,
                            onClick: G,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: a }),
                    _ = i.useCallback(() => {
                        t(y.pn.ADD_PAYMENT_STEPS), p(null);
                    }, [t, p]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(en.dZ, {
                            children: (0, l.jsx)(tr, {
                                guildId: s,
                                paymentSources: A,
                                priceOptions: T,
                                currentPremiumSubscription: c,
                                premiumSubscriptionPaymentSourceId: u,
                                premiumSubscriptionPlan: P,
                                newAdditionalPlans: E,
                                paymentSourceId: d,
                                setPaymentSourceId: p,
                                onPaymentSourceAdd: _,
                            }),
                        }),
                        (0, l.jsx)(en.UX, {
                            children: (0, l.jsx)(h.lo, {
                                onBackClick: () => t(y.pn.PLAN_SELECT),
                                primaryButtonProps: I,
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
                            disablePremiumUpsell: o,
                            onSubscribeComplete: d,
                            closeGuildPerksModal: p,
                            analyticsLocation: m,
                        },
                        applicationId: h,
                        analyticsSourceLocation: C,
                        stepConfigs: y,
                        loadId: f,
                        children: S,
                    } = e,
                    P = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                    T = (0, a.A)(() => n - (0, x.D$)(_.A.boostSlots).length);
                return (
                    (0, s.Ay)(() => {
                        null != E.A.getGuild(t) || E.A.isGuildFetching(t) || (0, A.y)(t);
                    }),
                    (0, l.jsx)(c.M, {
                        activeSubscription: P,
                        stepConfigs: y,
                        skuIDs: tA,
                        loadId: f,
                        unifiedCheckoutFlow: u.C.GUILD_BOOST_CHECKOUT,
                        children: (0, l.jsxs)(W, {
                            initialNumGuildBoostsToPurchase: T,
                            disablePremiumUpsell: o,
                            closeGuildPerksModal: p,
                            guildId: t,
                            analyticsLocation: m,
                            analyticsSourceLocation: C,
                            applicationId: h,
                            intent: i,
                            onSubscribeComplete: d,
                            children: [(0, l.jsx)(tk, {}), S],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: r, existingAvailableSlotCount: a } = Y(),
                    s = (0, S.bB)(),
                    { purchaseState: o, quantity: u } = (0, C.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    c = (0, P.n)("GuildBoostUnifiedCheckout"),
                    d = c && (s === y.pn.REVIEW || s === y.pn.CONFIRM),
                    p = (0, R.A)(d),
                    m = i.useMemo(() => ({ quantity: u }), [u]);
                return c && s === y.pn.CONFIRM
                    ? (0, l.jsx)(b.A, {
                          mediaUrls: p.mediaUrls,
                          isSuccess: p.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(o === f.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, l.jsx)(N.A, {
                                  transitionState: t.transitionState,
                                  guild: I.A.getGuild(r),
                                  guildBoostQuantity: u + a,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: m,
                          skipUnifiedHeaderForSteps: tw,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: o.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                i = (0, P.n)("GuildBoostUnifiedCheckout"),
                r = (0, C.t4)((e) => e.purchaseState),
                a = (0, p.A)();
            if (n === y.pn.PREMIUM_UPSELL) return null;
            if (n === y.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, l.jsx)(h.s3, { ...(0, m.uO)({ skuId: e, step: n }) });
            }
            return i
                ? (0, l.jsx)(h.s3, { title: (0, m.uO)({ skuId: null, step: n }).title })
                : (0, l.jsx)(v.A, { onClose: () => t(r === f.h.COMPLETED), currentStep: n, purchaseState: r });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(er, { ...e }), options: { renderHeader: !0 } },
    };
var tG = n(630303),
    tF = n(192308),
    tB = n(871109);
let tY = i.createContext(void 0);
function tH() {
    let e = i.useContext(tY);
    return es()(null != e, "GuildProductPurchaseContext not found"), e;
}
function tW(e) {
    let { children: t, skuId: n, ...i } = e,
        a = (0, r.bG)([tB.A], () => tB.A.getGuildProduct(n));
    return (
        es()(null != a, "guildProductListing cannot be null"),
        (0, l.jsx)(tY.Provider, { value: { guildProductListing: a, ...i }, children: t })
    );
}
function tV(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: r } = tH(),
        a = (0, eO.sw)();
    return (
        (0, s.Ay)(() => {
            var e;
            es()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: i.id, invoicePreview: a }),
                (0, tF.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, l.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var tK = n(939249),
    tq = n(789645),
    tZ = n(303612),
    tz = n(916261),
    t$ = n(575650);
function tQ(e) {
    let { className: t, onClose: n } = e;
    return (0, l.jsx)(tK.D, {
        className: eA()(tz.cG, t),
        onClick: n,
        children: (0, l.jsx)(tq.P, { size: "xs", color: "currentColor", className: tz.yP }),
    });
}
function tJ(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, l.jsxs)(tT.rQ, {
        className: eA()(tz.wx, t$.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, l.jsx)(tZ.A, { className: tz.F0, listing: t, imageSize: 500, alt: "" }),
            (0, l.jsx)(tQ, { className: tz.b, onClose: n }),
        ],
    });
}
var tX = n(196617);
let t0 = {
    CHECKOUT_FLOW: ep.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [y.pn.REVIEW]: tG.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, l.jsx)(tW, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: o.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = tH();
        return n === y.pn.CONFIRM
            ? null
            : (0, l.jsx)(tJ, { guildProductListing: i, className: tX.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(tV, { ...e }) },
};
var t2 = n(20742),
    t3 = n(951305),
    t1 = n(106778),
    t4 = n(228366),
    t7 = n(213530),
    t6 = n(966971),
    t5 = n(758836),
    t8 = n(483764);
let t9 = { sliderBodyClassName: t8.Bz };
function ne(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t1.Fk, { ref: n, className: t8.Lb, environment: t.current }),
            (0, l.jsx)(t7.K, { options: i, className: eA()(t8.Oh, { [t8.R]: !r }) }),
        ],
    });
}
var nt = n(702841),
    nn = n(775602),
    nl = n(31823),
    ni = n(427675),
    nr = n(590180),
    na = n(953150),
    ns = n(524246),
    no = n(14368),
    nu = n(61750),
    nc = n(972607),
    nd = n(901930);
function np(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: r,
            purchaseError: a,
            purchasePreviewError: s,
            appliedUserDiscounts: o,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, d.o)(),
        { application: c } = (0, nl.V)(),
        p = (0, ni.gU)(),
        m = (0, nt.bG)([nr.A], () => nr.A.getProduct(r)),
        h = i.useRef(!1);
    es()(null != r, "Expected selectedSkuId"), es()(null != c, "Expected application");
    let A = p[r];
    es()(null != A, "Expected sku");
    let E = null != u || null != a || null != s,
        y =
            o.length > 0
                ? J.intl.formatToPlainString(J.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == m ||
            E ||
            h.current ||
            ((h.current = !0),
            (0, nu.A)({
                product: m,
                overrideTitle: y,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: t5.gs.FIAT,
            }));
    }, [m, n, t, E, y]),
    E)
        ? (0, l.jsx)(en.dZ, { children: (0, l.jsx)(nd.A, {}) })
        : null;
}
function nm(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: r,
            hasSentMessage: a,
            giftRecipient: s,
            giftMessageError: o,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, t3.Pv)(),
        d = (0, nt.bG)([nn.Ay], () => nn.Ay.useReducedMotion),
        p = i.useRef(null),
        m = (0, C.t4)((e) => e.selectedSkuId),
        h = (0, nt.bG)([nr.A], () => nr.A.getProduct(m)),
        { confettiColors: A } = (0, na.A)(h?.styles);
    return (
        i.useEffect(() => {
            t &&
                null != s &&
                null != m &&
                (c === z.vQ.USER_PROFILE_WISHLIST || c === z.vQ.DM_CHANNEL_WISHLIST) &&
                t4.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: s.id });
        }, [t, s, m, c]),
        t
            ? (0, l.jsxs)("div", {
                  ref: p,
                  children: [
                      (0, l.jsx)(nc.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: r,
                          hasSentMessage: a,
                          giftRecipient: s,
                          giftMessageError: o,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, l.jsx)(ns.A, {
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, no.rA)(h?.categorySkuId),
                              colors: A?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, l.jsx)(np, { ...e })
    );
}
var nh = n(70283),
    nC = n(982240),
    nA = n(662388),
    nE = n(993408),
    ny = n(575593),
    nf = n(452027),
    nS = n(922016),
    nP = n(778712),
    nT = n(986687),
    nI = n(999291),
    n_ = n(903209),
    ng = n(674658),
    nx = n(898461),
    nv = n(203632),
    nN = n(892118),
    nb = n(536572),
    nR = n(14702),
    nM = n(219103),
    nj = n(525723),
    nO = n(780651);
function nL(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: a,
            className: s,
            previewHeaderClassName: o,
            hideProfilePreview: u,
        } = e,
        { giftRecipient: c, giftRecipientError: d } = (0, t3.Pv)(),
        p = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        m = eZ.Ay.canUseShopDiscounts(p),
        h = (0, nI.Ay)(c?.id),
        C = i.useRef(null),
        [A, E] = i.useState(!1),
        { product: y } = (0, ng.q)(t, !0),
        f = i.useMemo(() => (0, nE.fT)(y, m), [y, m]),
        S = (0, nj.V_)(y);
    if (null == y || 0 === y.items.length) return null;
    let [P] = y.items,
        T = (0, nb.VG)(y),
        I = null != c && c.id !== p?.id && y.type !== ny.R.BUNDLE && P.type !== ny.R.NAMEPLATE && !u;
    return (0, l.jsxs)("div", {
        className: s,
        children: [
            (0, l.jsx)("div", {
                className: eA()(nO.QU, o),
                children: (0, l.jsx)(nf.D, {
                    label: J.intl.string(J.t.PpoJzt),
                    children:
                        I &&
                        (0, l.jsx)(
                            nS.Y,
                            {
                                targetElementRef: C,
                                align: "center",
                                shouldShow: A,
                                onRequestClose: () => E(!1),
                                preload: () => (0, n_.A)(c.id, c.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, l.jsx)(nT.A, {
                                        ...e,
                                        user: c,
                                        pendingAvatar: c.getAvatarURL(null, (0, nP.FT)(nP._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, nx.T)(P) ? P : null,
                                        pendingProfileEffect: (0, nv.C3)(P) ? P : null,
                                        pendingProfileFrame: (0, nN.s)(P) ? P : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, l.jsx)(tK.D, {
                                        ...i,
                                        className: nO.Nx,
                                        innerRef: C,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            A ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, l.jsx)(eT.E, {
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
            (0, l.jsxs)("div", {
                className: eA()(nO.i1, null != d ? nO.cN : nO.no),
                children: [
                    (0, l.jsxs)("div", {
                        className: nO.Ug,
                        children: [
                            (0, l.jsx)(nR.O, { product: y }),
                            (0, l.jsxs)("div", {
                                className: nO.JZ,
                                children: [
                                    (0, l.jsx)(eT.E, { variant: "text-md/semibold", children: T }),
                                    (0, l.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            y?.type === ny.R.BUNDLE
                                                ? null
                                                : P.type === ny.R.AVATAR_DECORATION
                                                  ? J.intl.string(J.t["7v0T9P"])
                                                  : P.type === ny.R.NAMEPLATE
                                                    ? J.intl.string(J.t.x5CoXR)
                                                    : P.type === ny.R.PROFILE_EFFECT
                                                      ? J.intl.string(J.t.wR5wOo)
                                                      : P.type === ny.R.PROFILE_FRAME
                                                        ? J.intl.string(J.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(nM.x, {
                                priceAmount: n,
                                priceCurrency: a,
                                discount: f,
                                discountOfferAmount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != d &&
                        (0, l.jsx)("div", {
                            className: nO.Wh,
                            children: (0, l.jsx)(eT.E, {
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
var nw = n(783878),
    nk = n(966327),
    nD = n(427262);
let nU = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: r } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, t3.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: i,
              children: (0, l.jsx)(nw.Z, {
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
                      label: `${nD.Ay.getUserTag(e)}`,
                      leading: (0, l.jsx)(nk.A, { user: e, size: nP._3.SIZE_20 }),
                  })),
              }),
          });
};
var nG = n(435558),
    nF = n.n(nG),
    nB = n(427358),
    nY = n(570287),
    nH = n(994500);
function nW() {
    let e = (0, r.yK)([nH.A], () => nH.A.getFriendIDs()),
        t = (0, r.yK)([nB.A], () =>
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
        n = i.useMemo(() => nF().uniq([...e, ...t]), [e, t]);
    return (0, r.yK)(
        [eV.default],
        () =>
            n.reduce((e, t) => {
                let n = eV.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var nV = n(611881),
    nK = n(492275),
    nq = n(871181),
    nZ = n(318007),
    nz = n(285719),
    n$ = n(976860),
    nQ = n(353791);
function nJ(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, eM.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, l.jsx)(ed.Q, {
        text: J.intl.string(J.t.J82mpK),
        onClick: function () {
            t(),
                (0, tF.closeAllModals)(),
                null == n
                    ? (0, nA.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, n$.pX)(`${Q.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
let nX = (0, i.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: !1,
    skuIDs: [],
});
function n0() {
    return (0, i.useContext)(nX);
}
function n2(e) {
    let { hideConfirmStepConfetti: t, confettiCanvas: n } = n0(),
        { analyticsLocations: i } = (0, eM.Ay)();
    return (0, l.jsx)(nm, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
}
let n3 = {
    [y.pn.GIFT_CUSTOMIZATION]: () => J.intl.string(J.t["JCFN/y"]),
    [y.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => J.intl.string(J.t.lDbi6H),
    [y.pn.CONFIRM]: () => "",
};
function n1(e) {
    let { step: t } = e,
        n = n3[t];
    return null == n ? null : (0, l.jsx)(t2.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let n4 = {
    CHECKOUT_FLOW: ep.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [y.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                {
                    renderLeftColumn: a,
                    renderRightColumn: u,
                    renderBottomContent: c,
                    ctaDisabled: d,
                    loading: p,
                } = (function (e) {
                    let { handleStepChange: t, handleClose: n } = e,
                        {
                            customGiftMessage: i = "",
                            setCustomGiftMessage: a,
                            giftRecipientError: u,
                            setGiftRecipientError: c,
                            validatingGiftRecipient: d,
                            giftRecipient: p,
                            giftingOrigin: m,
                            setValidatingGiftRecipient: h,
                        } = (0, t3.Pv)(),
                        { selectedSkuId: A, checkoutInvoicePreview: E } = (0, C.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        y = (0, ni.gU)(),
                        f = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                        S = nW(),
                        { analyticsLocations: P } = (0, eM.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        T = (0, nV.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: I, giftsToNextTier: _ } = (0, r.cf)([nC.Ay], () => ({
                            nextTier: nC.Ay.getNextTier(nh.$.GIFTING),
                            giftsToNextTier: nC.Ay.getRemainingToNextTier(nh.$.GIFTING),
                        })),
                        g = T && null != I;
                    async function x(e, t) {
                        h(!0), null != u && c(), (await (0, nA.JJ)(e.id, t)) || c(J.intl.string(J.t["4kgVqQ"])), h(!1);
                    }
                    function v() {
                        return (0, l.jsx)(nq.A, {
                            onTextChange: (e) => a?.(e),
                            pendingText: i,
                            currentText: i,
                            disableThemedBackground: !0,
                            className: nQ.iX,
                            innerClassName: nQ.pt,
                        });
                    }
                    return (
                        (0, s.Ay)(() => {
                            null != A &&
                                null != p &&
                                (m !== z.vQ.DM_CHANNEL_WISHLIST &&
                                    D.default.track(Q.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: A }),
                                x(p, A));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, l.jsx)("div", {
                                    className: nQ.qL,
                                    children: (0, l.jsx)(nZ.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: () => {
                                let e = (0, nE.pA)({ invoicePreview: E, selectedSkuId: A, skusById: y });
                                return m === z.vQ.USER_PROFILE_WISHLIST || m === z.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(nz.Z, { giftRecipient: p }),
                                              v(),
                                              null != e &&
                                                  null != A &&
                                                  (0, l.jsx)(nL, {
                                                      skuId: A,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: nQ.uW,
                                                      previewHeaderClassName: nQ.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, l.jsx)("div", {
                                                  className: nQ.fi,
                                                  children: (0, l.jsx)(nJ, { handleClose: n, selectedSkuId: A }),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(nU, {
                                                  selectedSkuId: A,
                                                  recipients: S,
                                                  className: nQ.uh,
                                                  validateSelectedGift: x,
                                              }),
                                              v(),
                                              null != e &&
                                                  null != A &&
                                                  (0, l.jsx)(nL, {
                                                      skuId: A,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: nQ.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: () =>
                                g
                                    ? (0, l.jsx)(nK.A, {
                                          giftsToNextTier: _,
                                          nextTierName: I.name ?? "",
                                          nextTierIcon: I.simple_icon_url,
                                          analyticsLocations: P,
                                          className: nQ.qr,
                                      })
                                    : null,
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != u || null == p || p.id === f?.id || i.length > z.Jo,
                            loading: d,
                        }
                    );
                })({ handleStepChange: t, handleClose: n }),
                m = i.useMemo(() => ({ loading: p, disabled: d }), [p, d]);
            return (0, l.jsx)(ep.Mw, {
                paymentModalStepProps: e,
                layout: ep.XZ.TWO_COLUMN,
                renderLeftColumn: a,
                renderRightColumn: u,
                renderBottomContent: c,
                primaryCTAButtonProps: m,
            });
        },
        [y.pn.REVIEW]: tG.p,
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { skuId: t, children: n, ...r } = e,
                {
                    environment: a,
                    confettiCanvas: s,
                    setConfettiCanvas: o,
                    customConfettiVisible: u,
                    setCustomConfettiVisible: d,
                    customConfettiDisplayOptions: p,
                    hideConfirmStepConfetti: m,
                } = (function (e) {
                    let { skuId: t } = e,
                        n = i.useRef(new t1.OH()),
                        [l, r] = i.useState(null),
                        [a, s] = i.useState(!1),
                        o = i.useMemo(() => (0, t6.AB)({ purchaseType: t5.gs.FIAT, skuId: t }), [t]);
                    return {
                        environment: n,
                        confettiCanvas: l,
                        setConfettiCanvas: r,
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
                C = (0, i.useMemo)(
                    () => ({ skuIDs: h, setCustomConfettiVisible: d, hideConfirmStepConfetti: m, confettiCanvas: s }),
                    [h, d, m, s],
                );
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ne, {
                        environment: a,
                        setConfettiCanvas: o,
                        customConfettiDisplayOptions: p,
                        customConfettiVisible: u,
                    }),
                    (0, l.jsx)(c.M, {
                        ...r,
                        skuIDs: h,
                        stepConfigs: r.stepConfigs,
                        activeSubscription: null,
                        purchaseType: e5.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, l.jsx)(nX.Provider, { value: C, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: r } = n0(),
                {
                    paymentModalSkuId: a,
                    paymentModalOnClose: s,
                    paymentModalOnComplete: o,
                } = (function (e) {
                    let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                        a = t[0] ?? null,
                        s = i.useCallback(() => {
                            r(!0), l?.();
                        }, [l, r]);
                    return {
                        paymentModalSkuId: a,
                        paymentModalOnClose: i.useCallback(
                            (e) => {
                                r(!1), n(e), t4.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, r],
                        ),
                        paymentModalOnComplete: s,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r });
            return n({ ...t, skuId: a, onClose: s, onComplete: o, applicationId: Q.FYj });
        },
        tenantAnalyticsLocation: o.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, t3.Pv)();
        return n ? (0, l.jsx)(n1, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(n2, { ...e }), options: t9 },
};
var n7 = n(354033),
    n6 = n(491057),
    n5 = n(496142),
    n8 = n(877624),
    n9 = n(554146),
    le = n(71804),
    lt = n(426398),
    ln = n(841702),
    ll = n(367727),
    li = n(380619),
    lr = n(709870),
    la = n(412260),
    ls = n(771566),
    lo = n(625494),
    lu = n(45938),
    lc = n(97808),
    ld = n(912140),
    lp = n(780898),
    lm = n(344346),
    lh = n(837015),
    lC = n(258915);
function lA(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: a } = e,
        s = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        o = (0, r.bG)([nn.Ay], () => nn.Ay.useReducedMotion),
        { analyticsLocations: u } = (0, eM.Ay)(),
        c = nP._3.SIZE_32,
        { product: d, isFetching: p } = (0, ng.q)(t),
        [m, h] = i.useState(!1),
        C = d?.items[0],
        {
            isNameplateReward: A,
            nameplateData: E,
            rewardAvatarDecorationSrc: y,
        } = i.useMemo(
            () =>
                null == C
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, lh.F)(C)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: C.skuId,
                                src: C.asset,
                                palette: (0, lp.H6)(C.palette ?? "sky"),
                                imgAlt: C.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, nx.T)(C)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, ld.A)({
                                  legacyAssetId: C.asset,
                                  skuId: C.skuId,
                                  size: c,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [C, c, o],
        );
    return (0, l.jsx)(en.UX, {
        children: (0, l.jsx)(ty.j, {
            children: (0, l.jsxs)("div", {
                className: lC.W,
                children: [
                    A && null != E
                        ? (0, l.jsx)("div", {
                              className: lC.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, l.jsx)(lm.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(lc.Js, {
                              "aria-label": s?.username,
                              size: c,
                              src: s?.getAvatarURL(void 0, (0, nP.FT)(c), !o),
                              avatarDecoration: y,
                          }),
                    (0, l.jsx)(ec.$, {
                        variant: "primary",
                        text: J.intl.string(J.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, nu.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: t5.gs.PROMOTIONAL,
                                    onCloseCallback: a,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var lE = n(49999);
function ly(e) {
    let t,
        {
            handleClose: a,
            planGroup: o,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: c,
            postSuccessGuild: d,
            followupSKUInfo: m,
            continueSessionToInitialStep: h,
        } = e,
        { paymentSources: A } = (0, lt.jm)(),
        {
            activeSubscription: E,
            selectedSkuId: y,
            updatedSubscription: f,
            paymentSourceId: P,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: I,
            startingFractionalPremiumEndsAt: _,
            checkoutInvoicePreview: g,
        } = (0, C.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
        })),
        x = (0, p.A)(),
        v = (0, S.bB)(),
        {
            isGift: N,
            giftRecipient: b,
            giftCode: R,
            hasSentMessage: M,
            isSendingMessage: j,
            sendGiftMessage: O,
            claimableRewards: L,
            selectedGiftingPromotionReward: w,
            openGiftingBadgePostPurchaseModal: k,
        } = (0, t3.Pv)(),
        { confirmationFooter: U } = (0, n6.cG)(),
        G = (0, li.px)(x, N, L),
        F = (0, li.Mq)(x),
        B = (0, ln.Mv)(w, !1),
        Y = (0, r.bG)([la.A], () => la.A.getGiftPromotion()?.id),
        H = (0, r.bG)([la.A], () => {
            let e = la.A.getMarketingComponentByType(n8.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        W = (0, el.g)(A, P),
        V = N && null != w && null != B && F,
        K = { selectedPlan: x, selectedSkuId: y, step: v };
    if (null == x) throw new le.v({ message: "Expected plan to be selected", extraSentryInformation: K });
    if (null == y) throw new le.v({ message: "Expected selectedSkuId", extraSentryInformation: K });
    if (null == v) throw new le.v({ message: "Step should be set", extraSentryInformation: K });
    let q = i.useCallback(() => {
        a(), u?.();
    }, [a, u]);
    (0, s.Ay)(() => {
        T &&
            D.default.track(Q.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != f,
                has_any_premium_group: f?.hasAnyPremiumGroup ?? !1,
                subscription_id: f?.id,
            });
    });
    let z = null != g ? g.orbsReward : null;
    i.useEffect(() => {
        function e() {
            if (T)
                if (null != f && f.hasAnyPremiumGroup) {
                    D.default.track(Q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: f.id });
                    let e = (0, nG.uniqueId)("premium-group-purchase-flow-modal");
                    (0, tF.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("3515"),
                                n.e("44616"),
                                n.e("74630"),
                                n.e("48948"),
                                n.e("85579"),
                            ]).then(n.bind(n, 785606));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    subscription: f,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        lo._.dispatch(Q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                lo._.dispatch(Q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, tF.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    D.default.track(Q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != f,
                        has_any_premium_group: f?.hasAnyPremiumGroup ?? !1,
                    }),
                        lo._.dispatch(Q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else null != z && z > 0 && (0, lr.$)({ orbsAmount: z });
        }
        return (
            lo._.subscribe(Q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                lo._.unsubscribe(Q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [T, f, z]),
        i.useEffect(() => {
            !N || null == b || null == R || M || j || (0, lu.Ik)(b) || O({ onSubscriptionConfirmation: u });
        }, [O, N, b, R, M, j, u]),
        i.useEffect(() => {
            G &&
                null != H &&
                null != Y &&
                (0, ll.qr)(n9.M.GIFTING_PROMOTION_REMINDER, Y, { dismissAction: lE.i.INDIRECT_ACTION });
        }, [H, Y, G]);
    let $ = null != h ? ls.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != c) t = c(x, q, f);
    else if (N) t = (0, l.jsx)(ls.fw, { planId: x.id, onClose: q });
    else {
        let e =
            I === x.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: m,
                      startingPremiumSubscriptionPlanId: I,
                      isDowngrade: null != E && (0, Z.vT)(E, x.id, o),
                  };
        t = (0, l.jsx)(ls.Ay, {
            planId: x.id,
            onClose: q,
            paymentSourceType: W,
            hideClose: null != U,
            startingFractionalPremiumEndsAt: _,
            customCTAType: $,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(en.dZ, { children: [(0, l.jsx)(nd.A, {}), t] }),
            null != U && U,
            V && null != w && (0, l.jsx)(lA, { rewardSkuId: w, onClose: q, onRewardModalClose: k }),
        ],
    });
}
let [lf, lS] = (0, F.A)(),
    lP = {
        CHECKOUT_FLOW: ep.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [y.pn.REVIEW]: n5.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: r,
                    } = e,
                    a = i.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, l.jsx)(lf.Provider, { value: a, children: (0, l.jsx)(n6.Qt, { children: r }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: r } = lS();
            return (0, l.jsx)(n7.Y, { onClose: t, listing: r, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(ly, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var lT = n(73825),
    lI = n(35587),
    l_ = n(607399),
    lg = n(795791),
    lx = n(344159),
    lv = n(561794),
    lN = n(811656),
    lb = n(187322),
    lR = n(890856),
    lM = n(947641),
    lj = n(713517),
    lO = n(929283),
    lL = n(761365),
    lw = n(267861);
function lk(e) {
    let t,
        n,
        { skuId: r, user: a, claimed: s, onSelect: o, selectedSkuId: u } = e,
        [c, d] = i.useState(null),
        p = i.useCallback((e) => {
            d(e);
        }, []),
        m = i.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: h } = (0, lj.A)(m),
        C = !s && h,
        { product: A } = (0, ng.q)(r);
    if (null == A) return null;
    let E = A.items[0];
    return null == E
        ? null
        : ((0, nx.T)(E)
              ? ((n = ny.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(lO.i, { item: E, user: a, isHighlighted: C, avatarSize: nP._3.SIZE_96 })))
              : (0, lh.F)(E) &&
                ((n = ny.R.NAMEPLATE),
                (t = (0, l.jsx)(lL.A, { nameplate: E, user: a, isHighlighted: C, size: "small" }))),
          (0, l.jsx)(lb.vN, {
              children: (0, l.jsxs)(lR.s, {
                  ref: p,
                  "aria-label": A.name ?? "",
                  onClick: function () {
                      null == r || null == o || s || o(r);
                  },
                  className: eA()(lw._x, { [lw.Vp]: !s, [lw.mr]: C, [lw.md]: u === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: eA()(lw.VH, {
                              [lw._Q]: n === ny.R.AVATAR_DECORATION,
                              [lw.M4]: n === ny.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: eA()(lw.i1, { [lw.Sf]: s }), children: t }),
                                            s &&
                                                (0, l.jsx)(lM.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eE.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: lw.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: lw.tZ,
                          children: [
                              (0, l.jsx)(ex.D, { variant: "heading-md/extrabold", children: A.name }),
                              (0, l.jsx)(eT.E, {
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
function lG(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: a,
            onBackClick: s,
            showBackButton: o,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: c = !1,
            isTrial: d,
            isNextDisabled: m = !1,
        } = e,
        { paymentSources: h } = (0, lt.jm)(),
        C = (0, p.A)(),
        { isGift: A, claimableRewards: E } = (0, t3.Pv)();
    a = a ?? h;
    let {
            variant: f,
            text: P,
            onClick: T,
            disabled: I,
        } = (function (e) {
            let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: l,
                    claimableRewards: i,
                    paymentSources: a,
                    shouldRenderUpdatedPaymentModal: s,
                    isTrial: o,
                    isNextDisabled: u = !1,
                } = e,
                c = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                d = (0, p.A)(),
                m = (0, S.bB)(),
                { hasEntitlements: h } = (0, lx.X)(n, l),
                C = (null != c && null != c.paymentSourceId) || Object.keys(a).length > 0 || (h && !o);
            var A = s ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t.XqMe3N),
                E = y.pn.ADD_PAYMENT_STEPS;
            return (
                C && (E = y.pn.REVIEW),
                (0, li.px)(d, l, i) && m !== y.pn.SELECT_FREE_SKU && (E = y.pn.SELECT_FREE_SKU),
                { variant: "primary", text: A, onClick: () => t(E), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? C?.id),
            isGift: A,
            claimableRewards: E,
            paymentSources: a,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: m,
        }),
        _ = i.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: f, text: P, onClick: T, disabled: I }]
                    : [{ variant: "primary", text: J.intl.string(J.t.XqMe3N), disabled: !0 }],
            [f, P, T, I, n, u],
        );
    return (0, l.jsx)(lD.H, { leading: o && null != s ? (0, l.jsx)(lU.A, { onClick: s }) : void 0, actions: _ });
}
var lF = n(328232);
function lB(e) {
    let { handleStepChange: t } = e,
        n = (0, C.t4)((e) => e.selectedSkuId),
        a = (0, p.A)(),
        s = (0, S.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: u, claimableRewards: c } = (0, t3.Pv)(),
        d = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        m = (0, r.yK)([la.A], () => la.A.getGiftPromotionRewardSkuIds()),
        h = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, u),
        [A, E] = i.useState(h),
        [f, P] = i.useState(!1);
    i.useEffect(() => {
        f || null != u || null == h || (o(h), E(h));
    }, [h, f, u, o]);
    let T = { selectedPlan: a, selectedSkuId: n, step: s };
    if (null == a) throw new le.v({ message: "Expected plan to be selected", extraSentryInformation: T });
    if (null == n) throw new le.v({ message: "Expected selectedSkuId", extraSentryInformation: T });
    if (null == s) throw new le.v({ message: "Step should be set", extraSentryInformation: T });
    let I = i.useMemo(() => null != A && (c ?? []).includes(A), [A, c]),
        _ = i.useMemo(() => 0 === m.length || null == A || !I, [m, A, I]);
    function g(e) {
        o(e), E(e), P(!0);
    }
    i.useEffect(() => {
        if (0 === m.length) {
            E(void 0), o(void 0);
            return;
        }
        (null != A && I && m.includes(A)) || null == A || (E(void 0), o(void 0));
    }, [m, I, A, o]);
    let x = m.map((e) =>
            (0, l.jsx)(
                lk,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: g, selectedSkuId: A },
                e,
            ),
        ),
        v = (0, l.jsx)(en.UX, {
            children: (0, l.jsx)(lG, {
                onStepChange: t,
                onBackClick: () => t(y.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [a.id],
                selectedPlanId: a.id,
                isNextDisabled: _,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t2.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: J.intl.string(J.t.OEtqpm),
                subtitle: J.intl.string(J.t.h2nMp0),
            }),
            (0, l.jsx)(M.c, {
                children: (0, l.jsx)(tI.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: lF.Dq, children: x }),
                }),
            }),
            v,
        ],
    });
}
var lY = n(800471),
    lH = n(428644),
    lW = n(396533),
    lV = n(463376),
    lK = n(699595),
    lq = n(664504),
    lZ = n(67948),
    lz = n(807098),
    l$ = n(298305),
    lQ = n(387745);
function lJ() {
    let e = (0, r.bG)([la.A], () => {
            let e = la.A.getMarketingComponentByType(n8.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, t3.Pv)(),
        n = (0, lz.T)(e?.asset),
        i = (0, lz.T)(e?.backgroundAsset),
        a = e?.gradient,
        s =
            null != a && null != a.colors && a.colors.length >= 2
                ? (0, li.K5)({ gradient: a.colors, angle: a.angle ?? void 0 })
                : void 0,
        o = (0, li.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let u = (0, li.x)(o, s),
        c = e?.assetVariant === lZ.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: lQ.qD,
              style: u,
              children: [
                  (0, l.jsx)("div", {
                      className: eA()([lQ.my], { [lQ.R_]: c }),
                      children: (0, l.jsx)(l$.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: c ? nP._3.SIZE_72 : nP._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eT.E, {
                      variant: "text-md/medium",
                      color: "text-overlay-light",
                      children: J.intl.string(J.t.Abiuci),
                  }),
              ],
          });
}
var lX = n(410516),
    l0 = n(462887),
    l2 = n(736653),
    l3 = n(854627),
    l1 = n(236834);
let l4 = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, l.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, l.jsxs)("g", {
                    opacity: "0.6",
                    children: [
                        (0, l.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1558_55666)",
                        }),
                        (0, l.jsxs)("g", {
                            clipPath: "url(#clip0_1558_55666)",
                            children: [
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1558_55666)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1558_55666)",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1558_55666)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1558_55666)",
                            fillOpacity: "0.9",
                        }),
                        (0, l.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1558_55666)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1558_55666)",
                        }),
                    ],
                }),
                (0, l.jsxs)("defs", {
                    children: [
                        (0, l.jsxs)("linearGradient", {
                            id: "paint0_linear_1558_55666",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint1_linear_1558_55666",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint2_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint3_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint4_linear_1558_55666",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint5_linear_1558_55666",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint6_linear_1558_55666",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint7_linear_1558_55666",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint8_linear_1558_55666",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint9_linear_1558_55666",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint10_linear_1558_55666",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint11_linear_1558_55666",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint12_linear_1558_55666",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsx)("clipPath", {
                            id: "clip0_1558_55666",
                            children: (0, l.jsx)("rect", {
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
    l7 = (e) => {
        let { className: t, width: n = 83, height: i = 45 } = e;
        return (0, l.jsxs)("svg", {
            width: n,
            height: i,
            viewBox: "0 0 83 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
                (0, l.jsxs)("g", {
                    opacity: "0.4",
                    children: [
                        (0, l.jsx)("path", {
                            opacity: "0.3",
                            d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                            fill: "url(#paint0_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                            fill: "url(#paint1_linear_1521_51082)",
                        }),
                        (0, l.jsxs)("g", {
                            clipPath: "url(#clip0_1521_51082)",
                            children: [
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "url(#paint2_linear_1521_51082)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "url(#paint3_linear_1521_51082)",
                                }),
                                (0, l.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                                    fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "url(#paint4_linear_1521_51082)",
                                }),
                                (0, l.jsx)("path", {
                                    d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                                    fill: "white",
                                }),
                            ],
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "url(#paint5_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "url(#paint6_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                            fill: "url(#paint7_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                            fill: "url(#paint8_linear_1521_51082)",
                            fillOpacity: "0.9",
                        }),
                        (0, l.jsx)("path", {
                            d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                            fill: "url(#paint9_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                            fill: "url(#paint10_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                            fill: "url(#paint11_linear_1521_51082)",
                        }),
                        (0, l.jsx)("path", {
                            d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                            fill: "url(#paint12_linear_1521_51082)",
                        }),
                    ],
                }),
                (0, l.jsxs)("defs", {
                    children: [
                        (0, l.jsxs)("linearGradient", {
                            id: "paint0_linear_1521_51082",
                            x1: "0",
                            y1: "23.8981",
                            x2: "92.5783",
                            y2: "23.8981",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint1_linear_1521_51082",
                            x1: "19.5205",
                            y1: "23.9092",
                            x2: "77.3871",
                            y2: "23.9092",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint2_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint3_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint4_linear_1521_51082",
                            x1: "40.2959",
                            y1: "23.1636",
                            x2: "55.2865",
                            y2: "23.1636",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint5_linear_1521_51082",
                            x1: "22.6953",
                            y1: "23.8106",
                            x2: "74.5438",
                            y2: "23.8106",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint6_linear_1521_51082",
                            x1: "33.8516",
                            y1: "23.5132",
                            x2: "64.6392",
                            y2: "23.5132",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint7_linear_1521_51082",
                            x1: "73.1357",
                            y1: "5.12062",
                            x2: "80.0428",
                            y2: "5.12062",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint8_linear_1521_51082",
                            x1: "72.3398",
                            y1: "1.21667",
                            x2: "74.7929",
                            y2: "1.21667",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint9_linear_1521_51082",
                            x1: "13.3486",
                            y1: "34.3352",
                            x2: "17.4625",
                            y2: "34.3352",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint10_linear_1521_51082",
                            x1: "74.4932",
                            y1: "40.3635",
                            x2: "78.607",
                            y2: "40.3635",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint11_linear_1521_51082",
                            x1: "17.4795",
                            y1: "35.8773",
                            x2: "19.9325",
                            y2: "35.8773",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                            id: "paint12_linear_1521_51082",
                            x1: "78.625",
                            y1: "41.9056",
                            x2: "81.078",
                            y2: "41.9056",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, l.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, l.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, l.jsx)("clipPath", {
                            id: "clip0_1521_51082",
                            children: (0, l.jsx)("rect", {
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
var l6 = n(577454);
let l5 = function (e) {
    let { className: t } = e,
        n = (0, l1.A)(),
        { avatarSrc: i, eventHandlers: r } = (0, l3.A)({ userId: n?.id, size: nP._3.SIZE_32, animateOnHover: !0 }),
        a = (0, l2.DP)(),
        s = (0, l0.q)(a),
        o = nD.Ay.getName(n);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: eA()(l6.$6, t),
              children: [
                  (0, l.jsx)("div", {
                      className: l6.H,
                      children: (0, l.jsx)(lc.eu, { src: i, "aria-label": n.username, size: nP._3.SIZE_32, ...r }),
                  }),
                  (0, l.jsx)(eT.E, {
                      variant: "text-xs/bold",
                      className: l6.U_,
                      children: J.intl.format(J.t.oxhCOl, { userName: o }),
                  }),
                  (0, l.jsx)(s ? l4 : l7, { className: l6.q3 }),
              ],
          });
};
var l8 = n(361597),
    l9 = n(69494),
    ie = n(845012),
    it = n(597770),
    il = n(102741),
    ii = n(296589);
function ir(e) {
    let { giftMessage: t = J.intl.string(J.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, t3.Pv)();
    return !n || (0, lu.Ik)(i)
        ? null
        : (0, l.jsx)(il.A, {
              className: ii.z,
              iconSize: il.A.Sizes.SMALL,
              icon: it.o,
              color: null == t ? il.A.Colors.PRIMARY : il.A.Colors.SECONDARY,
              children: t,
          });
}
var ia = n(577381),
    is = n(249872);
function io(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: s, subscriptionTier: o, trialId: u, handleClose: c } = e,
        {
            selectedSkuId: d,
            priceOptions: m,
            activeSubscription: h,
            defaultPlanId: A,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: E,
            isEligibleForTrial: f,
            isEligibleForDiscount: P,
            discountOffer: T,
            userTrialOffer: I,
        } = (0, lV.i)(),
        _ = (0, lX.YJ)(T),
        g = (0, p.A)(),
        x = (0, S.bB)(),
        { isGift: v, giftRecipient: N, giftMessage: b, claimableRewards: R } = (0, t3.Pv)(),
        M = (0, li.Mq)(g),
        j = (0, nt.bG)([la.A], () => {
            let e = la.A.getMarketingComponentByType(n8.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = v && M && null != R && R.length > 0 && j,
        L = (0, nV.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: w, giftsToNextTier: k } = (0, r.cf)([nC.Ay], () => ({
            nextTier: nC.Ay.getNextTier(nh.$.GIFTING),
            giftsToNextTier: nC.Ay.getRemainingToNextTier(nh.$.GIFTING),
        })),
        D = v && L && null != w,
        U = !(0, lv.tA)({ isGift: v, giftRecipient: N }),
        G = null;
    O
        ? (G = (0, l.jsx)(lJ, {}))
        : D &&
          (G = (0, l.jsx)("div", {
              className: eA()(is.v$, U ? is.CC : is.RV),
              children: (0, l.jsx)(nK.A, {
                  giftsToNextTier: k,
                  nextTierName: w.name ?? "",
                  nextTierIcon: w.simple_icon_url,
              }),
          }));
    let F = (f || P) ?? !1,
        B = (0, lI.Wi)(z.ZC),
        Y = F || B,
        { monthlyDefaultSelected: H } = lq.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${v ? "" : " - DO NOT USE"}`,
        }),
        W = (0, a.A)(H),
        V = i.useMemo(() => {
            let e = A;
            return v && W && null != d && (e = z.En[d]), (0, eZ.Tm)({ skuId: d, isPremium: E, defaultPlanId: e });
        }, [d, E, A, v, W]),
        K = P && null != _ && V.includes(_) ? _ : V[0],
        Z = (0, nt.bG)([q.A], () => q.A.get(K)),
        $ = [{ planId: Z?.id, quantity: 1 }],
        [X, ee] = i.useState(F),
        [et, el] = (0, ew.YV)({
            items: $,
            renewal: !1,
            preventFetch: !Y,
            applyEntitlements: !0,
            trialId: u,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
        });
    i.useEffect(() => {
        F && ee(et?.subscriptionPeriodEnd == null);
    }, [et, F]),
        (0, lH.A)(
            "Payment Modal Plan Select Step",
            X,
            5,
            { proratedInvoicePreview: et, proratedInvoiceError: el, isEligibleForOffer: F },
            { tags: { app_context: "billing" } },
        );
    let ei = el?.message ?? J.intl.string(J.t.R0RpRX),
        er = F && null == el,
        ea = F && null != el,
        eu = er && null == h && et?.subscriptionPeriodEnd == null;
    (0, lK.W)({ priceOptions: m, trialId: u, discountInvoicePreview: et });
    let ec = (0, ia.i)({ planSkuId: Z?.skuId, invoice: et }),
        { ref: ed, onTransitionEnd: ep } = (0, lW.A)({ isExpanded: null != ec, minHeightOverride: 0 }),
        em = i.useMemo(
            () =>
                v || Z?.skuId !== z.pe.TIER_2 || I?.referrer_id == null
                    ? (0, l.jsx)("div", { ref: ed, onTransitionEnd: ep, style: { overflow: "hidden" }, children: ec })
                    : (0, l.jsx)(l5, { className: is.ZB }),
            [ec, v, Z?.skuId, I?.referrer_id, ed, ep],
        ),
        eh = i.useMemo(
            () => ({
                planOptions: V,
                selectedPlanId: g?.id,
                planGroup: s,
                subscriptionPeriodEnd: et?.subscriptionPeriodEnd,
                useCompactGiftComponents: O,
                handleClose: c,
            }),
            [V, g?.id, s, et?.subscriptionPeriodEnd, O, c],
        );
    if (eu) return (0, l.jsx)(eX.Ed, { className: is.QW });
    es()(null != x, "Step should be set"), es()(V.length > 0, "Premium plan options should be set");
    let eC = v
        ? (0, l.jsx)(l8.$p, { ...eh })
        : (0, l.jsx)(ie.X, { ...eh, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ir, { giftMessage: b }),
            !(v && (0, lu.Ik)(N)) && (0, l.jsx)(l9.A, { isEligibleForTrial: f }),
            (0, l.jsxs)(en.dZ, {
                children: [
                    em,
                    (0, l.jsx)(nd.A, { className: is.tg }),
                    ea ? (0, l.jsx)(eo.w, { type: "critical", children: ei }) : eC,
                    er &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: eA()(is.IM, is.Go) }),
                                (0, l.jsx)(eT.E, {
                                    variant: "text-xs/normal",
                                    children: J.intl.format(J.t.BHtnqA, {
                                        link: eK.A.getArticleURL(Q.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(en.UX, {
                children: [
                    G,
                    (0, l.jsx)(lG, {
                        onStepChange: t,
                        onBackClick: () => t(y.pn.SKU_SELECT),
                        showBackButton: null == n && null == o,
                        planOptions: V,
                        shouldRenderUpdatedPaymentModal: er,
                        isTrial: f,
                    }),
                ],
            }),
        ],
    });
}
var iu = n(862990),
    ic = n(672525),
    id = n(169801),
    ip = n(634378);
function im(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: r,
            activeSubscription: a,
            defaultPlanId: s,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: u,
        } = (0, C.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: c } = (0, lt.jm)(),
        { isGift: d, claimableRewards: p } = (0, t3.Pv)(),
        m = d && null != p && p.length > 0,
        h = (0, eU.V)(u);
    return (0, l.jsx)(ih, {
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
                let c = y.pn.PLAN_SELECT,
                    d = (0, eZ.aZ)(t);
                (d !== z.pe.TIER_1 && d !== z.pe.TIER_2) || n !== z.pe.TIER_0 || r || (c = y.pn.WHAT_YOU_LOSE);
                let p = (0, id.t)({ userTrialOffer: a, isGift: r, skuId: n }),
                    m = (0, lY.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                c !== y.pn.WHAT_YOU_LOSE && m && ((c = y.pn.REVIEW), s((0, lY.xT)(n, t, u))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: d,
                userTrialOffer: h,
                startedPaymentFlowWithPaymentSources: o,
                setSelectedPlanId: i,
                defaultPlanId: s,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, eZ.mH)(z.pe.TIER_2)),
                    t(z.gD.PREMIUM_GROUP_MONTH),
                    n(l ? y.pn.REVIEW : y.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: z.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: c, setSelectedSkuId: n }),
        isGift: d,
        priceOptions: r,
        showPromotionalGiftBanner: m,
    });
}
function ih(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: a } = e,
        s = (0, iu.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t2.rQ, { titleTextVariant: "heading-lg/semibold", title: J.intl.string(J.t["r+SebU"]) }),
            s
                ? (0, l.jsx)(M.c, {
                      children: (0, l.jsx)("div", {
                          className: ip.eE,
                          children: (0, l.jsx)(ic.yS, {
                              onSelectSku: (e) => t((0, eZ.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(M.c, {
                      children: (0, l.jsx)("div", {
                          className: ip.a2,
                          children: (0, l.jsx)(ic.Ay, {
                              onSelectSku: (e) => t((0, eZ.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var iC = n(825484),
    iA = n(137728);
function iE(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: s,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: o } = (0, t3.Pv)(),
        u = null != a ? (0, eZ.EL)(a) : null,
        c = null != u ? (0, eZ.RH)(u.planId) : null,
        d = null != u ? (0, eZ.m6)(u.planId) : null,
        p = (0, lY.vT)({ isTrial: !1, isGift: o, selectedSkuId: i, startedPaymentFlowWithPaymentSources: s });
    return (
        es()(null != d, "Expected premium type"),
        (0, l.jsx)(iA.A, {
            premiumType: d,
            titleText: J.intl.string(J.t["7VcWW0"]),
            subtitleText: J.intl.format(J.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, l.jsxs)(iC.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(ec.$, {
                        variant: "primary",
                        text: J.intl.string(J.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, lY.xT)(i, a)), t(y.pn.REVIEW)) : t(y.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(ec.$, { variant: "secondary", onClick: n, text: J.intl.string(J.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var iy = n(242874),
    iS = n(573359),
    iP = n(75825),
    iT = n(237412),
    iI = n(865543);
let i_ = [
        {
            key: y.pn.SKU_SELECT,
            renderStep: (e) => (0, l.jsx)(im, { ...e }),
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
            key: y.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, l.jsx)(iE, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: y.pn.PLAN_SELECT,
            renderStep: (e) => (0, l.jsx)(io, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, lY.lp)(e) ? null : J.intl.string(J.t["r+SebU"])),
                sectionHeaderText: () => J.intl.string(J.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: y.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, l.jsx)(lB, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    ig = {
        CustomHeaderComponent: function (e) {
            let { onClose: t } = e,
                { selectedSkuId: n, purchaseState: a } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                s = (0, r.bG)([iS.A], () => iS.A.isDisplayingWowMomentConfirmation),
                {
                    isPremium: o,
                    isPremiumGroupPurchase: u,
                    isEligibleForTrial: c,
                    isEligibleForDiscount: d,
                } = (0, lV.i)(),
                p = (0, ni.S3)(),
                m = (0, S.bB)(),
                { isGift: h, selectedGiftStyle: A, giftRecipient: E } = (0, t3.Pv)(),
                f = p?.productLine === Q.EZt.COLLECTIBLES,
                P = p?.productLine === Q.EZt.SOCIAL_LAYER_GAME_ITEM,
                T = h && (0, lu.Ik)(E) && m === y.pn.CONFIRM && null != A && !f && !P,
                I = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
                _ = null != m && !I.includes(m) && null != n,
                g = i.useCallback(() => t(!1), [t]);
            return i.useMemo(() => {
                if (null == m) return;
                let e = null;
                return (
                    T
                        ? (e = (0, l.jsxs)("div", {
                              className: iI.kL,
                              children: [
                                  (0, l.jsx)("div", {
                                      "aria-hidden": !0,
                                      style: { display: "contents" },
                                      children: (0, l.jsx)(iP.A, {
                                          defaultAnimationState: iy.oA.LOOP,
                                          giftStyle: A,
                                          className: iI.qq,
                                      }),
                                  }),
                                  (0, l.jsx)(tT.s_, { onClick: g, className: iI.b, "data-migration-pending": !0 }),
                              ],
                          }))
                        : _ &&
                          (es()(n in z.WN, `invalid sku id: ${n}`),
                          (e = (0, l.jsx)(iT.A, {
                              currentStep: m ?? void 0,
                              purchaseState: a,
                              premiumType: z.WN[n],
                              onClose: g,
                              showTrialBadge: c,
                              showDiscountBadge: d,
                              isGift: h,
                              giftRecipient: E,
                              isEligibleForTrial: c,
                              enablePremiumBrandRefresh: o,
                              isDisplayingWowMomentConfirmation: s,
                              isPremiumGroupPurchase: u,
                          }))),
                    e
                );
            }, [A, g, a, n, m, c, d, T, _, h, E, o, s, u]);
        },
        CHECKOUT_FLOW: u.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: i_,
        CHECKOUT_STEPS: { [y.pn.REVIEW]: n5.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: a,
                            referralTrialOfferId: s,
                            subscriptionTier: o,
                            subscription: d,
                        },
                        stepConfigs: p,
                        loadId: m,
                        giftContextProps: h = { isGift: !1, giftRecipient: null },
                        renderModalProps: C,
                        children: A,
                    } = e,
                    E = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                    f = (0, lI.Sq)() ? z.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: S, giftRecipient: P } = h;
                if (null != o && !Object.values(z.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let T = (0, lv.tA)({ giftRecipient: P, isGift: S ?? !1 }),
                    I = i.useMemo(
                        () =>
                            T
                                ? p.map((e) =>
                                      e.key === y.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : p,
                        [p, T],
                    ),
                    _ = null != d ? d : E,
                    x = !S && null != _ && _.isPurchasedExternally && null != _.paymentGateway;
                (0, lx.s)(_, () => C.onClose(), S ?? !1);
                let v = i.useMemo(() => [...z.oz], []);
                return x
                    ? null
                    : (0, l.jsx)(c.M, {
                          loadId: m,
                          activeSubscription: _,
                          stepConfigs: I,
                          skuIDs: v,
                          isGift: S,
                          defaultPlanId: f ?? n,
                          referralCode: a,
                          referralTrialOfferId: s,
                          unifiedCheckoutFlow: u.C.PREMIUM_CHECKOUT,
                          children: (0, l.jsx)(n6.Qt, { confirmationFooter: t, children: A }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: r },
                    } = e,
                    { onClose: a, renderPurchaseConfirmation: s, continueSessionToInitialStep: o } = t;
                i.useEffect(() => {
                    q.A.isLoadedForPremiumSKUs() || t4.h.wait(() => (0, lT.zS)());
                }, []);
                let { selectedSkuId: u, purchaseState: c } = (0, C.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, S.bB)(),
                    { isGift: p } = (0, t3.Pv)(),
                    m = i.useMemo(() => (p ? [y.pn.PLAN_SELECT] : []), [p]),
                    h = !p && u === z.pe.TIER_2 && !l_.Ct && !l_.KY && null == (0, lg.uM)(),
                    A = c === f.h.PURCHASING;
                return (0, l.jsx)(lN.A, {
                    isConfirmationStep: d === y.pn.CONFIRM && null == o && null == s,
                    isEligibleForWowMoment: h,
                    shouldPrefetchWowMoment: A,
                    children: n({
                        ...t,
                        onClose: a,
                        analyticsSubscriptionType: Q.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: z.LE,
                        subscriptionTier: r,
                        skipUnifiedHeaderForSteps: m,
                    }),
                });
            },
            tenantAnalyticsLocation: o.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(ly, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var ix = n(143582),
    iv = n(241524),
    iN = n(19311),
    ib = n(4126);
let iR = "(max-width: 485px)";
var iM = n(702361),
    ij = n(938430);
function iO(e) {
    let { step: t, onClose: n } = e,
        i = (0, iv.A)("(max-height: 450px)");
    return t === y.pn.CONFIRM || t === y.pn.BENEFITS
        ? (0, l.jsx)("div", {})
        : (0, l.jsxs)("div", {
              className: eA()(iM.N1, t$.G),
              children: [
                  !i &&
                      (0, l.jsx)("div", {
                          className: iM.oZ,
                          "aria-hidden": "true",
                          children: (0, l.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: iM.F0,
                          }),
                      }),
                  (0, l.jsx)(tK.D, {
                      className: iM.G3,
                      onClick: () => n(),
                      "aria-label": J.intl.string(J.t.cpT0Cq),
                      children: (0, l.jsx)(tq.P, { size: "md", color: "currentColor", className: iM.ut }),
                  }),
              ],
          });
}
function iL(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: r, title: a, subtitle: s, description: o } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: iM.RP,
              children: (0, l.jsxs)(ib.$K, {
                  children: [
                      (0, l.jsx)(ib.KF, { application: r, asset: t }),
                      (0, l.jsx)(ib.kj, { children: a }),
                      (0, l.jsx)(ib.ri, {}),
                      (0, l.jsx)(ib.Mx, { title: s, description: o }),
                      (0, l.jsx)(ib.iH, { applicationId: r.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function iw(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: iM.NV,
        children: [
            (0, l.jsx)("img", { src: ij, alt: "", width: 300, height: 126 }),
            (0, l.jsx)(ex.D, {
                className: iM.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: J.intl.format(J.t.wLFT6z, { tier: t }),
            }),
            (0, l.jsx)(eT.E, {
                className: iM.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: J.intl.format(J.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsx)(en.UX, {
                children: (0, l.jsx)(iN.Ay, {
                    onPrimary: n,
                    primaryCTA: iN.ti.CONTINUE,
                    primaryText: J.intl.string(J.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var ik = n(967198);
let [iD, iU] = (0, F.A)();
function iG(e) {
    let { guildId: t, showBenefitsFirst: n, children: r } = e,
        [a, s] = i.useState(null),
        o = i.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: a,
                setSubscriptionMetadataRequest: s,
            }),
            [t, n, a],
        );
    return (0, l.jsx)(iD.Provider, { value: o, children: r });
}
n(938796);
var iF = n(266060),
    iB = n(163437),
    iY = n(701273),
    iH = n(425013);
function iW(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, l.jsxs)("div", {
        className: iH.RP,
        children: [
            (0, l.jsx)(ex.D, { className: iH.RS, variant: "heading-lg/extrabold", children: i }),
            null != r
                ? (0, l.jsx)(eT.E, { className: iH.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, l.jsxs)("div", {
                className: iH.UD,
                children: [
                    s &&
                        (0, l.jsx)(ec.$, {
                            variant: "primary",
                            text: J.intl.string(J.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, iY.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, l.jsx)(ec.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, l.jsx)(ec.$, {
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
function iV(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: iH.RP,
        children: [
            (0, l.jsx)(ex.D, {
                className: iH.RS,
                variant: "heading-lg/extrabold",
                children: J.intl.format(J.t.wLFT6z, { tier: n }),
            }),
            (0, l.jsx)(eT.E, {
                className: iH.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: J.intl.format(J.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsxs)("div", {
                className: iH.UD,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: iH.__invalid_openDiscordButton,
                        children: (0, l.jsx)(ec.$, {
                            variant: "primary",
                            text: J.intl.string(J.t["8L5bZG"]),
                            onClick: () => (0, iY.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, l.jsx)(ec.$, { variant: "secondary", text: J.intl.string(J.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function iK(e) {
    let { handleStepChange: t, handleClose: n } = e,
        a = (0, iF.K)(),
        { subscriptionMetadataRequest: s } = iU(),
        { application: o } = (0, nl.V)(),
        u = (0, ni.S3)(),
        c = (0, iv.A)(iR),
        d = (0, r.bG)([I.A], () => I.A.getGuild(s?.guild_id)),
        p = i.useCallback(() => t(y.pn.REVIEW), [t]);
    if (null == u) return null;
    let m = (0, iB.bg)(u.flags);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(en.dZ, {
                children: c
                    ? (0, l.jsx)(iW, {
                          confirmCta: J.intl.string(J.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: J.intl.format(J.t["6n6oXA"], { tier: u.name }),
                          subtitle: m
                              ? J.intl.string(J.t.lzAoKB)
                              : J.intl.formatToPlainString(J.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, l.jsx)(iL, {
                          icon: a?.thumbnail,
                          storeListingBenefits: a?.benefits,
                          application: o ?? void 0,
                          title: J.intl.format(J.t.haiCxc, { tier: u.name }),
                          subtitle: m ? J.intl.string(J.t.RvtbP5) : J.intl.string(J.t.zY39Zu),
                          description: m
                              ? J.intl.formatToPlainString(J.t.QCe4rY, { applicationName: o?.name })
                              : J.intl.string(J.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, l.jsx)(en.UX, {
                    children: (0, l.jsx)(iN.Ay, {
                        onBack: n,
                        backText: J.intl.string(J.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: iN.ti.CONTINUE,
                        primaryText: J.intl.string(J.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var iq = n(21161);
function iZ(e) {
    let t,
        n,
        { handleClose: r, onSubscriptionConfirmation: a } = e,
        s = (0, iF.K)(),
        { application: o } = (0, nl.V)(),
        { readySlideId: u, updatedSubscription: c } = (0, C.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        d = (0, ni.S3)(),
        p = (0, iv.A)(iR),
        { createMultipleConfettiAt: m } = i.useContext(iq.x),
        h = d?.name ?? "";
    function A() {
        r(), a?.();
    }
    let E = u === y.pn.CONFIRM,
        f = (0, iB.bg)(d?.flags ?? 0),
        S =
            null != s && s.benefits.length > 0
                ? J.intl.formatToPlainString(J.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: P } = iU();
    return (
        P
            ? (t = p
                  ? (0, l.jsx)(iV, { tierName: h, onConfirm: A, subscription: c })
                  : (0, l.jsx)(iw, { tierName: h, onConfirm: A, subscription: c }))
            : p
              ? (t = (0, l.jsx)(iW, {
                    title: J.intl.format(J.t.ea6tZr, { tierName: h }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? J.intl.formatToPlainString(J.t.HNepft, { benefits: S })
                            : null,
                    onConfirm: A,
                    confirmCta: J.intl.string(J.t.nlkywz),
                }))
              : ((t =
                    null != s && null != o
                        ? (0, l.jsx)(iL, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: o,
                              title: J.intl.format(J.t["Q+qktS"], { tier: h }),
                              subtitle: J.intl.string(J.t.ECKxXU),
                              description: f
                                  ? J.intl.format(J.t["MAtQk/"], { applicationName: o?.name })
                                  : J.intl.format(J.t.vHkMF4, { tier: h }),
                          })
                        : (0, l.jsx)(w.A, {})),
                (n = (0, l.jsx)(iN.Ay, {
                    onPrimary: A,
                    primaryCTA: iN.ti.CONTINUE,
                    primaryText: J.intl.string(J.t["JtWl+a"]),
                }))),
        i.useEffect(() => {
            nn.Ay.useReducedMotion && E && m(window.innerWidth / 2, window.innerHeight / 2);
        }, [m, E]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(en.dZ, { children: [(0, l.jsx)(nd.A, {}), t] }),
                null != n && (0, l.jsx)(en.UX, { children: n }),
            ],
        })
    );
}
function iz(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: r,
            setSelectedSkuId: a,
            setSelectedPlanId: s,
            priceOptions: o,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: u, subscriptionPriceOptionsLoading: c, displayCurrency: d } = (0, L.Jn)(),
        { setSubscriptionMetadataRequest: p, guildId: m, showBenefitsFirst: h } = iU(),
        A = (0, j.Hp)(),
        E = (0, k.A)(),
        f = (0, S.l)(),
        { isGift: P } = (0, t3.Pv)(),
        T = h ? y.pn.BENEFITS : y.pn.REVIEW,
        [I, _] = i.useState(!E || !u || c);
    return (i.useEffect(() => {
        _(!E || !u || c);
    }, [c, u, E]),
    i.useEffect(() => {
        null != m && p({ guild_id: m });
    }, [m, p]),
    i.useEffect(() => {
        s(t);
        let e = null != t ? q.A.get(t) : null;
        I ||
            A ||
            (n((t) => {
                let n = null != e ? (0, eZ.y8)(e.id, !1, P, { paymentSourceId: o.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: d };
            }),
            null != e && (a(e?.skuId), f(T)));
    }, [A, t, P, I, o, d, r, n, s, a, f, T]),
    I)
        ? (0, l.jsx)(w.A, {})
        : A
          ? (0, l.jsx)(O.oO, {})
          : null;
}
var i$ = n(427858),
    iQ = n(295413),
    iJ = n(424517);
let iX = (e) => {
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
        CHECKOUT_FLOW: u.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(iz, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                r = i.useCallback(() => n(!1), [n]);
            return (0, l.jsx)(iO, { step: t, onClose: r });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: y.pn.BENEFITS,
                renderStep: (e) => (0, l.jsx)(iK, { ...e }),
                options: { useBreadcrumbLabel: () => J.intl.string(J.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [y.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: r, analyticsData: a, analyticsLocation: s } = e,
                    {
                        purchaseState: o,
                        contextMetadata: u,
                        purchaseError: c,
                        activeSubscription: d,
                    } = (0, C.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                    })),
                    { subscriptionMetadataRequest: m, showBenefitsFirst: h } = iU(),
                    A = h ? y.pn.BENEFITS : void 0,
                    E = (0, p.A)(),
                    S = (0, ni.S3)();
                if (null == E)
                    throw new le.v({
                        message: "Expected plan to be selected",
                        extraSentryInformation: { selectedPlan: E },
                    });
                let P = i.useRef(null),
                    T = (0, iB.bg)(S?.flags ?? 0);
                i.useEffect(() => {
                    null != c && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
                }, [c]);
                let I = i.useCallback(() => {
                    t(y.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return o === f.h.PURCHASING
                    ? (0, l.jsx)(w.A, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(en.dZ, {
                                  children:
                                      null == d
                                          ? (0, l.jsx)(iJ._, {
                                                selectedPlan: E,
                                                verifiedPlanId: E.id,
                                                planGroup: n,
                                                handlePaymentSourceAdd: I,
                                                metadata: T ? void 0 : m,
                                            })
                                          : (0, l.jsx)(i$.A, {
                                                selectedPlan: E,
                                                verifiedPlanId: E.id,
                                                handlePaymentSourceAdd: I,
                                                planGroup: n,
                                                hasOpenInvoice: null != r,
                                                purchaseState: o,
                                            }),
                              }),
                              (0, l.jsx)(en.UX, {
                                  children: (0, l.jsx)(iQ.U, {
                                      resolveTenantReviewButtonProps: iX,
                                      onBack: () => null != A && t(A),
                                      handleStepChange: t,
                                      postPurchaseStep: y.pn.CONFIRM,
                                      analyticsLocation: s,
                                      baseAnalyticsData: a,
                                      flowStartTime: u.startTime,
                                      planGroup: n,
                                      openInvoiceId: r,
                                      metadata: T ? void 0 : m,
                                      backButtonEligible: !!h || void 0,
                                      disablePurchase: m?.guild_id == null && !T,
                                      onPaymentSourceAdd: I,
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
                    { guildId: i, showBenefitsFirst: r } = t;
                return (0, l.jsx)(iG, {
                    guildId: i,
                    showBenefitsFirst: r,
                    children: (0, l.jsx)(n6.Qt, { children: n }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { forcesTransitionToGuild: l, guildId: r },
                    } = e,
                    a = t.onClose,
                    s = t.onComplete,
                    o = i.useCallback(
                        (e) => {
                            a(e),
                                e &&
                                    null != r &&
                                    (tM.hP(),
                                    (0, ix.f5)(r),
                                    null != s && s(),
                                    null != r && (l || ik.A.getGuildId() !== r) && (0, n$.pX)(Q.BVt.CHANNEL(r)));
                        },
                        [a, s, l, r],
                    );
                return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: o.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(iZ, { ...e }) },
    };
var i2 = n(132500),
    i3 = n(869038),
    i1 = n(852218),
    i4 = n(7133),
    i7 = n(83617);
let [i6, i5] = (0, F.A)();
function i8(e) {
    let { code: t, onClose: n, children: s } = e,
        o = (0, r.bG)([g.A], () => g.A.getMostRecentPremiumTypeSubscription()),
        c = (0, r.bG)([g.A], () => g.A.hasFetchedMostRecentPremiumTypeSubscription()),
        d = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        [p, m] = i.useState(!1),
        [h, A] = i.useState(null),
        [E, P] = i.useState(null),
        [I, _] = i.useState(!1),
        [x, v] = i.useState(!1);
    i.useEffect(() => {
        p ||
            (0, lu.GM)(t, !1, !0)
                .then((e) => {
                    let t = i4.A.createFromServer(e);
                    A(t), m(!0), _(t.promotion?.promotionType === i1.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    P(e), m(!0);
                }),
            c || (0, tM.I8)();
    }, [t, c, p]);
    let N = (0, U._V)(),
        { paymentSources: b, paymentSourceId: R, paymentAuthenticationState: M, setIsSubmittingCurrentStep: j } = N,
        O = (0, S.l)(),
        w = (0, S.bB)(),
        k = (0, C.t4)((e) => e.setPurchaseState),
        G = (0, C.t4)((e) => e.setPurchaseError),
        F = (0, C.t4)((e) => e.purchaseState),
        { displayCurrency: B } = (0, L.Jn)(),
        Y = (0, eO.sw)(),
        H = h?.subscriptionPlan,
        W = h?.promotion,
        V = h?.subscriptionTrial,
        K = null != H ? (0, i7._w)(H, R, !1) : [],
        q = Y?.currency ?? B ?? K[0],
        Z = i.useMemo(() => (null != R ? { paymentSourceId: R, currency: q } : { currency: q }), [R, q]),
        [z] = (0, a.A)(() => [(0, i2.A)()]),
        $ = i.useMemo(
            () => ({
                load_id: z,
                location: Q.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: Q.rzx.PREMIUM,
                payment_type: e5.fr[e5.VV.SUBSCRIPTION],
                subscription_plan_id: H?.id,
                sku_id: H?.skuId,
                checkout_flow: u.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [z, H?.id, H?.skuId],
        ),
        J = i.useCallback(() => {
            n?.(F === f.h.COMPLETED);
        }, [n, F]),
        X = i.useCallback(async () => {
            let e = (0, el.W)(b, R);
            if (null == e) return !1;
            j(!0), G(null), k(f.h.PURCHASING);
            try {
                return (
                    await i3.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    k(f.h.COMPLETED),
                    D.default.track(Q.HAw.PAYMENT_FLOW_COMPLETED, { ...$ }),
                    !0
                );
            } catch (t) {
                return (
                    k(f.h.FAIL),
                    G(t),
                    D.default.track(Q.HAw.PAYMENT_FLOW_FAILED, {
                        ...$,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                j(!1);
            }
        }, [$, t, R, b, j, G, k]),
        ee = i.useRef(!1),
        et = i.useCallback(() => {
            ee.current ||
                ((ee.current = !0),
                X()
                    .then((e) => {
                        O(e ? y.pn.CONFIRM : y.pn.REVIEW);
                    })
                    .finally(() => {
                        ee.current = !1;
                    }));
        }, [X, O]);
    return (
        (0, T.QR)(M),
        (0, T.b)(w, M, O, k, !0, et),
        (0, l.jsx)(i6.Provider, {
            value: {
                code: t,
                giftCode: h,
                plan: H,
                promotion: W,
                trial: V,
                isDirectFulfillment: I,
                hasResolvedGiftCode: p,
                giftCodeResolveError: E,
                hasFetchedMostRecentPremiumTypeSubscription: c,
                recentSubscription: o,
                premiumSubscription: d,
                paymentModalArgs: N,
                priceOptions: Z,
                analyticsData: $,
                handleClose: J,
                redeemPromotion: X,
                confirmedUpgrade: x,
                setConfirmedUpgrade: v,
            },
            children: s,
        })
    );
}
var i9 = n(830215),
    re = n(264779),
    rt = n(636745),
    rn = n(554632);
function rl(e) {
    let { user: t, code: n, className: i } = e;
    return (0, l.jsx)(eT.E, {
        className: eA()(i, rt.iZ),
        variant: "text-md/normal",
        children: J.intl.format(J.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    lc.eu,
                    {
                        className: rt.FL,
                        size: nP._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": nD.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: nD.Ay.getUserTag(t),
            logoutHook: () => {
                i9.A.logout("inbound_promotion_redemption_modal", Q.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function ri(e) {
    let { promotion: t, code: n, isDirectFulfillment: i } = e,
        a = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        s = (0, l2.Ay)(),
        o = (0, re.WD)(t.id, s);
    return (0, l.jsxs)("div", {
        className: rt.rN,
        children: [
            (0, l.jsxs)("div", {
                className: rt.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: o, className: rt.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(ex.D, {
                                variant: "heading-xl/bold",
                                className: rt.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(eT.E, {
                                variant: "text-sm/normal",
                                className: rt.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            i || null == a ? null : (0, l.jsx)(rl, { className: rt.KZ, user: a, code: n }),
        ],
    });
}
function rr(e) {
    let { title: t, bodyText: n, helpCenterLink: r, showUser: a = !1, user: s, code: o, handleClose: u } = e,
        c = i.useMemo(() => ({ text: J.intl.string(J.t.BddRzS), onClick: u }), [u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: rt.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: rn, className: rt.M6 }),
                    (0, l.jsx)(ex.D, { variant: "heading-lg/semibold", className: rt.DD, children: t }),
                    (0, l.jsx)(eT.E, { variant: "text-md/normal", className: rt.G3, children: n }),
                    null != r
                        ? (0, l.jsx)(eT.E, {
                              variant: "text-md/normal",
                              className: rt.G3,
                              children: J.intl.format(J.t["4uSp2y"], { helpCenterLink: r }),
                          })
                        : null,
                    a && null != s ? (0, l.jsx)(rl, { className: rt.EF, user: s, code: o }) : null,
                ],
            }),
            (0, l.jsx)(h.lo, { primaryButtonProps: c }),
        ],
    });
}
function ra(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            code: a,
            giftCode: s,
            plan: o,
            promotion: u,
            trial: c,
            hasResolvedGiftCode: d,
            giftCodeResolveError: p,
            hasFetchedMostRecentPremiumTypeSubscription: m,
            recentSubscription: h,
        } = i5(),
        C = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        A = (0, j.Hp)(),
        E = !d || !m,
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
                    errorCode: z.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === Q.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: J.intl.string(J.t.BHxy59),
                    body: J.intl.string(J.t["1wokFq"]),
                    errorCode: z.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body:
                        null != l && l.code === Q.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? J.intl.string(J.t.S8TNKh)
                            : J.intl.string(J.t["1AceQR"]),
                    errorCode: z.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body: J.intl.string(J.t["3u+6q7"]),
                    errorCode: z.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: J.intl.string(J.t.ARIsMA),
                    body: J.intl.string(J.t.u9IQuM),
                    errorCode: z.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, eZ.EL)(i)?.planId;
            return null != o && i.status === Q.Dmq.ACTIVE && eZ.Ay.getPremiumType(o) === z.PremiumTypes.TIER_2
                ? {
                      title: J.intl.string(J.t.BHxy59),
                      body: J.intl.formatToPlainString(J.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, eZ.RH)(r.id),
                      }),
                      errorCode: z.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: C, giftCode: s, giftCodeResolveError: p, recentSubscription: h, plan: o, promotion: u, trial: c });
    return (i.useEffect(() => {
        E ||
            D.default.track(Q.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == f && !A,
                error_code: null != f ? f.errorCode : A ? z.JR.BLOCKED_PAYMENT : null,
                promotion_id: s?.promotion?.id,
            });
    }, [E, f, A, s]),
    i.useEffect(() => {
        E || null != f || A || t(y.pn.PROMOTION_INFO);
    }, [E, f, A, t]),
    E)
        ? (0, l.jsx)(w.A, {})
        : null != f
          ? (0, l.jsx)(rr, {
                title: f.title,
                bodyText: f.body,
                helpCenterLink: u?.inboundHelpCenterLink ?? "",
                showUser: f.showUser,
                handleClose: n,
                user: C ?? void 0,
                code: a,
            })
          : A
            ? (0, l.jsx)(O.oO, {})
            : null;
}
function rs(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: i, handleClose: r } = i5();
    es()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = i,
        o = (0, el.g)(a, s);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(en.dZ, {
                children: (0, l.jsx)(ls.Ay, { hideClose: !0, planId: t.id, onClose: r, paymentSourceType: o }),
            }),
            n
                ? (0, l.jsx)(en.UX, {
                      children: (0, l.jsx)(lD.H, {
                          actions: [{ text: J.intl.string(J.t.UQvCf7), variant: "primary", onClick: r, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function ro(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: i, isDirectFulfillment: r } = i5();
    return (
        es()(null != n, "Missing promotion"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(en.dZ, { children: (0, l.jsx)(ri, { promotion: n, code: i, isDirectFulfillment: r }) }),
                (0, l.jsx)(en.UX, {
                    children: (0, l.jsx)(h.lo, {
                        primaryButtonProps: { text: J.intl.string(J.t.PDTjLN), onClick: () => t(y.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var ru = n(732159),
    rc = n(944355),
    rd = n(262427),
    rp = n(299301),
    rm = n(134638);
function rh(e) {
    let {
            plan: t,
            renewalInvoicePreview: n,
            subscriptionTrial: r,
            shouldShowFractionalPremiumBanner: a,
            fractionalPremiumInfo: s,
            paymentMethodContent: o,
            legalContent: u,
        } = e,
        [c, d] = i.useMemo(
            () =>
                null == n
                    ? [J.intl.string(e8.default.R0cZsM), void 0]
                    : [J.intl.string(e8.default.R0cZsM), (0, ez.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, l.jsx)(eX.Ed, {});
    let p = a
            ? [{ key: "fractional-premium-notice", directContent: (0, l.jsx)(rC, { fractionalPremiumInfo: s }) }]
            : null,
        m = (0, l.jsx)(rA, { plan: t, renewalInvoicePreview: n }),
        h = (0, l.jsx)(rE, { renewalInvoicePreview: n, subscriptionTrial: r });
    return (0, l.jsx)(eX.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: p,
        purchaseItemContent: m,
        subscriptionDetailsContent: h,
        invoiceSummaryContent: null,
        paymentMethodContent: o,
        legalContent: u,
        invoiceTotalDueLabel: c,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != r &&
            (0, l.jsx)(rd.J, {
                text: J.intl.format(J.t.A1MiZN, { months: r.intervalCount, planName: (0, eZ.RH)(t.id) }),
            }),
    });
}
function rC(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, eF.NQ)({ fractionalPremiumInfo: t, variant: eF.uA.TRIAL });
    return null != n && "" !== n ? (0, l.jsx)(eo.w, { type: "info", children: n }) : null;
}
function rA(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, l.jsx)(rm._, {
        type: rp.N$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function rE(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, l.jsx)(eb.y, {});
    let i = (0, e4.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, l.jsx)(rc._D, { ...i, defaultExpanded: !0 });
}
let ry = [...z.oz],
    rf = new Set([...m.MU]),
    rS = [
        {
            key: y.pn.PROMOTION_INFO,
            renderStep: (e) => (0, l.jsx)(ro, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    rP = {
        CHECKOUT_FLOW: u.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(ra, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: rS,
        CHECKOUT_STEPS: {
            [y.pn.REVIEW]: function (e) {
                let { handleStepChange: t } = e,
                    {
                        code: n,
                        plan: a,
                        trial: s,
                        promotion: o,
                        priceOptions: u,
                        paymentModalArgs: c,
                        redeemPromotion: d,
                        confirmedUpgrade: p,
                        setConfirmedUpgrade: m,
                        handleClose: A,
                    } = i5();
                es()(null != a && null != s, "Missing plan or trial");
                let { paymentSources: E, paymentSourceId: f, setPaymentSourceId: S, isSubmittingCurrentStep: P } = c,
                    T = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                    { analyticsLocations: I } = (0, eM.Ay)(),
                    _ = (0, C.t4)((e) => e.hasAcceptedTerms),
                    x = (0, ej.A)(),
                    { immediateDelivery: v } = (0, e0.U)(),
                    [N, b] = (0, ew.YV)({
                        items: [{ planId: a.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: f,
                        code: n,
                        subscriptionId: T?.id,
                        analyticsLocations: I,
                        analyticsLocation: Q.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, eO.F0)(N, b);
                let R = (0, eO.sw)(),
                    M = i.useCallback(async () => {
                        null == T || p || null == s || null == o
                            ? (await d()) && t(y.pn.CONFIRM)
                            : (0, tF.openModal)((e) => {
                                  let n;
                                  if (null == R) n = (0, l.jsx)(eb.y, { className: rt.wG });
                                  else {
                                      let e = (0, eZ.y8)(a.id, !1, !1, u);
                                      n = (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(eT.E, {
                                                  className: rt.ex,
                                                  variant: "text-md/normal",
                                                  children: J.intl.format(J.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, l.jsx)(
                                                              "ul",
                                                              {
                                                                  children: T.items.map((e) => {
                                                                      let t = z.hd[e.planId],
                                                                          n = J.intl.formatToPlainString(J.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, l.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${T.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: z.hd[a.id].name,
                                                  }),
                                              }),
                                              (0, l.jsx)(eT.E, {
                                                  className: rt.ex,
                                                  variant: "text-sm/normal",
                                                  children: J.intl.format(J.t.KHvyu5, {
                                                      newPlanName: z.hd[a.id].name,
                                                      trialMonths: s.intervalCount,
                                                      helpCenterLink:
                                                          o.inboundHelpCenterLink ?? eK.A.getArticleURL(Q.MVz.BILLING),
                                                      planPrice: (0, ez.$g)(e.amount, R.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, l.jsx)(ru.ConfirmModal, {
                                      onConfirm: async () => {
                                          m(!0), (await d()) && t(y.pn.CONFIRM);
                                      },
                                      title: J.intl.string(J.t.MaZ28z),
                                      cancelText: J.intl.string(J.t["ETE/oC"]),
                                      confirmText: J.intl.string(J.t["wfx/Hp"]),
                                      ...e,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, T, p, s, o, a, u, R, d, m]),
                    j = (0, lt.kc)(),
                    O = (0, eQ.iB)({
                        checkoutPaymentSources: j,
                        paymentSourceId: f,
                        location: "InboundPromotionReviewStep",
                    }),
                    L = (0, V.Y)(),
                    w = (0, el.W)(E, f),
                    k = i.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(E).length ? { label: J.intl.string(J.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [E],
                    );
                if (null != b && null == R)
                    return (0, l.jsx)(rr, {
                        title: J.intl.string(J.t.ARIsMA),
                        bodyText: J.intl.string(J.t["3u+6q7"]),
                        helpCenterLink: o?.inboundHelpCenterLink ?? "",
                        handleClose: A,
                        user: void 0,
                        code: n,
                    });
                if (!L || null == R) return (0, l.jsx)(eb.y, {});
                let D = (0, l.jsx)(eJ.N, {
                        setPaymentSourceId: S,
                        paymentSourceId: f,
                        location: "InboundPromotionReview",
                        label: J.intl.string(J.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: k,
                        onPaymentSourceAdd: () => t(y.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    { renewalPrice: U } = (0, e4.Go)(R, a, null),
                    G = J.intl.formatToPlainString(J.t.BQPav6, { planPremiumType: eZ.Ay.getDisplayName(a.id) }),
                    F = (0, l.jsx)(rc._P, {
                        variant: {
                            type: rc.I0.SubscriptionTrial,
                            purchaseButtonText: G,
                            totalDue: 0,
                            renewalPrice: U,
                            currency: R.currency,
                            interval: a.interval,
                            intervalCount: a.intervalCount,
                            startDate: (0, e6.de)({ renewalInvoice: R, isSubscriptionUpdate: !1 }),
                        },
                        paymentSourceType: (0, el.W)(E, f)?.type ?? null,
                        immediateDelivery: v,
                    }),
                    B = null;
                return (
                    null == w ? (B = J.intl.string(J.t.L7jbQV)) : _ || (B = J.intl.string(J.t.XdvBLS)),
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(en.dZ, {
                                children: [
                                    (0, l.jsx)(nd.A, {}),
                                    (0, l.jsx)(rh, {
                                        plan: a,
                                        renewalInvoicePreview: R,
                                        subscriptionTrial: s,
                                        shouldShowFractionalPremiumBanner: x.isFractionalPremiumActive,
                                        fractionalPremiumInfo: x,
                                        paymentMethodContent: D,
                                        legalContent: F,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(en.UX, {
                                children: (0, l.jsx)(h.lo, {
                                    onBackClick: () => t(y.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: G,
                                        tooltipText: B ?? void 0,
                                        disabled: null == w || !w.canRedeemTrial() || O || !_,
                                        loading: P,
                                        onClick: () => {
                                            if (null != w && _) return M();
                                        },
                                        variant: (0, iN.CY)(iN.ti.PURCHASE),
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
                        loadId: i,
                        onClose: a,
                        children: s,
                    } = e,
                    o = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription());
                return (0, l.jsx)(c.M, {
                    activeSubscription: o,
                    stepConfigs: n,
                    skuIDs: ry,
                    loadId: i,
                    unifiedCheckoutFlow: u.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, l.jsx)(n6.Qt, { children: (0, l.jsx)(i8, { code: t, onClose: a, children: s }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: i } = i5(),
                r = (0, C.t4)((e) => e.purchaseState),
                a = null != n ? n.skuId : null;
            return rf.has(t)
                ? (0, l.jsx)(h.s3, {
                      ...(0, m.uO)({ skuId: a, step: t, headerBadgePreset: t === y.pn.REVIEW ? "trial" : void 0 }),
                  })
                : (0, l.jsx)(iT.A, {
                      enablePremiumBrandRefresh: !0,
                      forceBrandRefreshHeader: !0,
                      premiumType: n?.premiumSubscriptionType ?? z.PremiumTypes.TIER_2,
                      className: rt.X9,
                      currentStep: t,
                      purchaseState: r,
                      hideCloseButton: !0,
                      onClose: i,
                  });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rs, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var rT = n(989553);
function rI(e) {
    let { handleClose: t } = e,
        n = (0, C.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nl.V)(),
        r = (0, ni.gU)(),
        { isGift: a, giftRecipient: s } = (0, t3.Pv)();
    es()(null != n, "Expected selectedSkuId"), es()(null != i, "Expected application");
    let o = r[n];
    es()(null != o, "Expected sku");
    let u = a
        ? J.intl.formatToPlainString(J.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : J.intl.formatToPlainString(J.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(en.dZ, {
        children: [
            (0, l.jsx)(nd.A, {}),
            (0, l.jsxs)("div", {
                className: rT.EL,
                children: [
                    (0, l.jsx)(ex.D, { variant: "heading-xxl/bold", className: rT.RS, children: "Success!" }),
                    (0, l.jsx)(eT.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: rT.yF }),
                    (0, l.jsx)(ec.$, { onClick: t, text: J.intl.string(J.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var r_ = n(67480),
    rg = n(328968),
    rx = n(371794),
    rv = n(565756);
y.pn.GIFT_CUSTOMIZATION;
let rN = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            r = i.useCallback(() => n(!1), [n]);
        return (0, l.jsx)(iO, { step: t, onClose: r });
    },
    CHECKOUT_FLOW: ep.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [y.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: a } = (0, t3.Pv)(),
                s = (0, C.t4)((e) => e.selectedSkuId),
                o = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                u = (0, r.bG)([r_.A], () => (null != s ? r_.A.get(s) : null), [s]),
                c = nW(),
                d = (0, r.bG)([rg.A], () => (null != s ? rg.A.getForSKU(s) : null), [s]),
                p =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, rx.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let h = null == a || a.id === o?.id || t.length > z.Jo,
                A = i.useMemo(() => ({ disabled: h }), [h]);
            return (0, l.jsx)(ep.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: ep.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, l.jsxs)("div", {
                        className: rv.P6,
                        children: [
                            u?.name != null &&
                                (0, l.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                            null != p && (0, l.jsx)("img", { src: p, alt: u?.name ?? "", className: rv.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: rv.P6,
                        children: [
                            (0, l.jsx)(nU, { recipients: c, selectedSkuId: s, validateSelectedGift: m }),
                            (0, l.jsx)(nq.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: rv.iX,
                                innerClassName: rv.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: A,
            });
        },
        [y.pn.REVIEW]: tG.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rI, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: o.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var rb = n(429913),
    rR = n(733391),
    rM = n(871123),
    rj = n(26594),
    rO = n(510022),
    rL = n(317560),
    rw = n(275256),
    rk = n(910200),
    rD = n(208733);
function rU(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eM.Ay)(),
        { selectedSkuId: r, entitlementsGranted: a } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, nl.V)(),
        o = (0, ni.gU)(),
        { isGift: u, giftRecipient: c } = (0, t3.Pv)();
    es()(null != r, "Expected selectedSkuId"), es()(null != s, "Expected application");
    let d = o[r];
    es()(null != d, "Expected sku");
    let p = a.find((e) => e.sku_id === r),
        m = (0, rj.G)(p, { isGift: u });
    return (i.useEffect(() => {
        u || ((0, rL.j)(), t(), (0, rO.n)({ sku: d, application: s, analyticsLocations: n, entitlement: p }));
    }, [u, d, s, t, n, p]),
    u)
        ? (0, l.jsxs)(en.dZ, {
              children: [
                  (0, l.jsx)(nd.A, {}),
                  (0, l.jsxs)("div", {
                      className: rD.EL,
                      children: [
                          (0, l.jsx)("div", {
                              className: rD.KD,
                              children: (0, l.jsx)(rw.default, {
                                  imageUrl: (0, rM.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, rM.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: m?.graphic,
                              }),
                          }),
                          (0, l.jsx)(ex.D, {
                              variant: "heading-xl/semibold",
                              className: rD.RS,
                              children: J.intl.string(J.t["5glWta"]),
                          }),
                          (0, l.jsx)(eT.E, {
                              variant: "text-md/normal",
                              children: J.intl.formatToPlainString(J.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != m &&
                              (0, l.jsx)("div", {
                                  className: rD.Is,
                                  children: (0, l.jsx)(rk.O0, { Icon: m.Icon, text: m.text }),
                              }),
                          (0, l.jsx)("div", {
                              className: rD.UD,
                              children: (0, l.jsx)(ec.$, {
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
var rG = n(889137),
    rF = n(742158),
    rB = n(313961),
    rY = n(238017),
    rH = n(650588),
    rW = n(993046),
    rV = n(763827),
    rK = n(403362),
    rq = n(832163),
    rZ = n(31969),
    rz = n(44724),
    r$ = n(980094),
    rQ = n(366523),
    rJ = n(806931),
    rX = n(107610);
function r0(e) {
    let { handleClose: t, sku: n, application: r } = e,
        a = i.useCallback(() => {
            (0, rz.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = i.useCallback(() => {
            t();
            let e = rq.A.getStorefrontState(n.applicationId)?.activePage;
            (0, rM.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: r?.guildId,
                skuId: n.id,
            }) ||
                ((0, tF.closeAllModals)(),
                (0, rz.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, r]);
    return (0, l.jsx)("div", {
        className: rX.$O,
        children: (0, l.jsx)(ed.Q, {
            text: J.intl.string(J.t.ImioFL),
            onMouseDown: a,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let r2 = {
    CHECKOUT_FLOW: ep.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [y.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: a, disabled: s } = (function (e) {
                    var t;
                    let n,
                        a,
                        s,
                        { handleStepChange: o, handleClose: u } = e,
                        {
                            customGiftMessage: c = "",
                            setCustomGiftMessage: d,
                            giftRecipient: p,
                            emojiConfetti: m,
                            soundEffect: h,
                            setEmojiConfetti: A,
                            setSoundEffect: E,
                            giftingOrigin: y,
                            additionalUserIds: f,
                        } = (0, t3.Pv)(),
                        S = (0, C.t4)((e) => e.selectedSkuId),
                        { application: P } = (0, nl.V)(),
                        T = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                        I =
                            ((t = T?.id),
                            (n = nW()),
                            (a = (function (e) {
                                let t = (0, r.bG)([rV.A], () => (rV.A.isConnected() ? rV.A.getChannelId() : null)),
                                    [n, l] = i.useState([]);
                                return (
                                    i.useEffect(() => {
                                        let n = null != t ? rB.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, rJ.Xw)(t) && !(0, rJ.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, rJ.Ay)(e) && !(0, rJ.Ay)(t)
                                                ? -1
                                                : (0, rJ.Ay)(t) && !(0, rJ.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (s = (0, r.yK)([eV.default], () => f?.map(eV.default.getUser).filter(rK.Vq) ?? [], [f])),
                            i.useMemo(
                                () =>
                                    nF().uniqWith(
                                        [...(null != p ? [p] : []), ...s, ...a, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [p, s, a, n],
                            )),
                        _ = (0, r.bG)([r_.A], () => (null != S ? r_.A.get(S) : null), [S]),
                        { userPrice: g } = (0, rW.CD)({ sku: _, priceSetAssignmentPurchaseType: Q.lid.GIFT }),
                        x = (0, rZ.F)("gift_customization", { applicationId: P?.id, skuId: _?.id }),
                        v = (0, rM.fq)(_),
                        N = (0, rM.xf)(_);
                    async function b(e, t) {}
                    let R = (e) => {
                            null != E && E(null == e ? void 0 : e);
                        },
                        M = () =>
                            (0, l.jsxs)("div", {
                                className: rX.mT,
                                children: [
                                    null != v &&
                                        (0, l.jsx)(rQ.A, {
                                            containerClassName: rX.T3,
                                            cardImage: v,
                                            cardBackgroundImage: N,
                                            altText: _?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, l.jsxs)("div", {
                                        className: rX._T,
                                        children: [
                                            (0, l.jsx)(rH.A, { sound: h, onSelect: R }),
                                            (0, l.jsx)(rY.A, {
                                                setEmojiConfetti: A,
                                                emojiConfetti: null == m ? void 0 : m,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        j = () =>
                            (0, l.jsxs)("div", {
                                className: rX.Tc,
                                children: [
                                    null != p && (y === z.vQ.USER_PROFILE_WISHLIST || y === z.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, l.jsx)(nz.Z, { giftRecipient: p })
                                        : (0, l.jsx)(nU, { selectedSkuId: S, validateSelectedGift: b, recipients: I }),
                                    (0, l.jsx)(nq.A, {
                                        onTextChange: (e) => d?.(e),
                                        pendingText: c,
                                        currentText: c,
                                        disableThemedBackground: !0,
                                        className: rX.iX,
                                        innerClassName: rX.pt,
                                    }),
                                    null == _
                                        ? null
                                        : (0, l.jsxs)("div", {
                                              className: rX.AN,
                                              children: [
                                                  (0, l.jsx)(rF.z, {
                                                      className: rX.jr,
                                                      children: J.intl.string(J.t.PpoJzt),
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: rX.Wx,
                                                      children: [
                                                          (0, l.jsx)("div", {
                                                              className: rX.Xb,
                                                              children:
                                                                  null != _ &&
                                                                  null != v &&
                                                                  (0, l.jsx)(rQ.A, {
                                                                      containerClassName: rX.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: N,
                                                                      altText: _.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, l.jsxs)("div", {
                                                              className: rX.vz,
                                                              children: [
                                                                  null != P && (0, l.jsx)(r$.Q, { application: P }),
                                                                  (0, l.jsx)(eT.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: _.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, l.jsx)(eT.E, {
                                                              variant: "text-md/semibold",
                                                              children: g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != _ &&
                                        (0, rM.Ri)(_) &&
                                        (0, l.jsx)(eo.w, { type: "info", children: J.intl.string(J.t.lORYb6) }),
                                    null != x &&
                                        (0, l.jsx)(rk.O0, {
                                            Icon: x.Icon,
                                            text: x.text,
                                            endDatetime: x.endsAt,
                                            tooltip: x.tooltip,
                                        }),
                                    null != _ && (0, l.jsx)(r0, { handleClose: u, sku: _, application: P }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, l.jsxs)("div", { className: rX.Du, children: [M(), j()] });
                        },
                        getLeftColumnComponent: M,
                        getRightColumnComponent: j,
                        onStepChange: o,
                        onBackClick: u,
                        disabled: null == p || p.id === T?.id || c.length > z.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = i.useMemo(() => ({ disabled: s }), [s]);
            return (0, l.jsx)(ep.Mw, {
                paymentModalStepProps: e,
                layout: ep.XZ.CUSTOM_STEP_BODY,
                renderStepBody: a,
                primaryCTAButtonProps: o,
            });
        },
        [y.pn.REVIEW]: tG.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rU, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: r, applicationId: a, isGift: s, skuId: o, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, rb.h)(t);
                    i.useEffect(() => {
                        null == l ||
                            null == n ||
                            rg.A.isFetchingForSKU(n) ||
                            null != r_.A.get(n) ||
                            (0, rR.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: a, skuId: o }),
                (0, l.jsx)(c.M, {
                    loadId: r,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [o],
                    purchaseType: e5.VV.ONE_TIME,
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
        tenantAnalyticsLocation: o.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, rG.YW)(t)
                .with(y.pn.GIFT_CUSTOMIZATION, () => J.intl.string(J.t["JCFN/y"]))
                .with(y.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => J.intl.string(J.t.lDbi6H))
                .with(y.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, l.jsx)(t2.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var r3 = n(977445),
    r1 = n(52635),
    r4 = n(211287),
    r7 = n(855104),
    r6 = n(623373),
    r5 = n(739508),
    r8 = n(310829),
    r9 = n(715054);
(0, i2.A)();
var ae = n(457008),
    at = n(145659);
n(322076);
var an = n(318254),
    al = n(132198),
    ai = n(120992),
    ar = n(630934),
    aa = n(319820),
    as = n(200766);
function ao(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: r } = (0, aa.AO)({ sku: t }),
        a = (0, ar.oO)(i);
    r ? (a = J.intl.string(e8.default.qwSlCO)) : (0, r6.Ab)(i) && (a = J.intl.string(J.t["0TmQRG"]));
    let s = (0, ar.dL)(t),
        o = (0, t5.EZ)(t.id) ? al.m[t.id].render({ className: as.$ }) : (0, l.jsx)(e1.WH, { sku: t, product: i });
    return (0, l.jsx)(e1.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: an.C });
}
function au(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, ai.c)({ applicationId: (0, r8.P)(t), skuIDs: [t] });
    let i = (0, nt.bG)([r_.A], () => r_.A.get(t), [t]);
    return null == i
        ? (0, l.jsx)(eb.y, { type: eb.y.Type.PULSING_ELLIPSIS })
        : (0, l.jsx)(ao, { sku: i, orbPriceAmount: n });
}
function ac(e) {
    let { orbBalance: t } = e;
    return (0, l.jsx)(rc.vW, { label: J.intl.string(J.t.y0WGqP), value: null != t ? `${t}` : "", Icon: an.C });
}
function ad() {
    return J.intl.string(J.t.wmcDyu);
}
function ap() {
    let { immediateDelivery: e } = (0, e0.U)(),
        { skuProductLine: t, skuId: n } = ah(),
        r = ad(),
        a = (0, i.useMemo)(() => ({ type: rc.I0.OrbsRedemption, purchaseButtonText: r }), [r]);
    return t === Q.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, l.jsx)(r1.EB, { skuId: n, purchaseButtonText: r, checkoutLegalType: rc.I0.OrbsGameShop })
        : (0, l.jsx)(rc._P, { variant: a, paymentSourceType: null, immediateDelivery: e });
}
let am = (0, i.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function ah() {
    return (0, i.useContext)(am);
}
let aC = { payment_gateway: e5.kM.VIRTUAL_CURRENCY, currency: Q.Yri.DISCORD_ORB },
    aA = {
        CHECKOUT_FLOW: ep.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [y.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...r } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: r, skuApplicationId: a } = ah(),
                            { enabled: s } = r4.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: o, orderOrbPriceAmount: c } = (0, C.t4)((e) => {
                                let t = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != t ? t.total : null,
                                    orderOrbPriceAmount:
                                        null != t ? t.getInvoicePreviewLineItemUnitPriceForSku(r) : null,
                                };
                            }),
                            {
                                isStepLoading: d,
                                orbPriceAmount: p,
                                orbBalanceToDisplay: m,
                                onClickCheckout: h,
                                showCollectiblesDiscountWarning: A,
                                errorMessage: E,
                            } = ((e) => {
                                let { handleStepChange: t } = e,
                                    {
                                        orbProductContext: n,
                                        orbRedemptionError: l,
                                        onRedeemVirtualCurrency: r,
                                        skuId: a,
                                        skuApplicationId: s,
                                        skuProductLine: o,
                                        analyticsSourceLocation: c,
                                    } = ah(),
                                    { analyticsLocations: d } = (0, eM.Ay)(),
                                    { setPurchaseState: p, firstConstraintReasonCode: m } = (0, C.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    h = (0, r7.gN)(),
                                    A = (0, i.useRef)(h),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: r,
                                                analyticsLocations: a,
                                                analyticsSourceLocation: s,
                                            } = e,
                                            { activitySessionId: o } = (0, nl.V)(),
                                            { hasPaymentSources: c } = (0, lt.jm)(),
                                            {
                                                loadId: d,
                                                startTime: p,
                                                discoverySessionId: m,
                                            } = (0, C.t4)((e) => e.contextMetadata),
                                            h = (0, i.useMemo)(
                                                () => ({
                                                    load_id: d,
                                                    discovery_session_id: m,
                                                    application_id: n,
                                                    sku_product_line: l,
                                                    location: a,
                                                    location_stack: a,
                                                    sku_id: t,
                                                    activity_session_id: o,
                                                    payment_gateway: e5.ps.VIRTUAL_CURRENCY,
                                                    ...(null != r && {
                                                        price: r.orbPriceAmount ?? void 0,
                                                        regular_price: r.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: Q.Yri.DISCORD_ORB,
                                                    ...(null != s && { source: s }),
                                                    ...{
                                                        payment_type: Q.frM[Q.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: at.r.UNIFIED,
                                                        checkout_flow: u.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, m, o, t, n, l, a, s, r],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, i.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === Q.HAw.PAYMENT_FLOW_STARTED
                                                        ? D.default.track(Q.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...h,
                                                              has_saved_payment_source: c,
                                                              payment_gateway: e5.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === Q.HAw.PAYMENT_FLOW_LOADED
                                                          ? D.default.track(Q.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...h,
                                                                has_saved_payment_source: c,
                                                                initial_step: y.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === Q.HAw.PAYMENT_FLOW_CANCELED
                                                            ? D.default.track(Q.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...h,
                                                                  duration_ms: n,
                                                              })
                                                            : e === Q.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? D.default.track(Q.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...h,
                                                                    duration_ms: n,
                                                                })
                                                              : e === Q.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? D.default.track(Q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...h,
                                                                      duration_ms: n,
                                                                  })
                                                                : D.default.track(Q.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...h,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [p, h, c],
                                            ),
                                        };
                                    })({
                                        skuId: a,
                                        skuApplicationId: s,
                                        skuProductLine: o,
                                        orbProductContext: n,
                                        analyticsLocations: d,
                                        analyticsSourceLocation: c,
                                    });
                                (0, i.useEffect)(() => {
                                    null != l &&
                                        null !== A.current &&
                                        (E(Q.HAw.PAYMENT_FLOW_FAILED, l), (A.current = null));
                                }, [l, E]);
                                let S = (0, i.useCallback)(() => {
                                        (A.current = h),
                                            E(Q.HAw.PAYMENT_FLOW_COMPLETED),
                                            r((e) => {
                                                p(f.h.COMPLETED), t(y.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [r, p, h, E, t]),
                                    P = A.current ?? h,
                                    T = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    showCollectiblesDiscountWarning: (0, nj.vw)({ skuId: a, isOrbsPurchase: !0 }),
                                    errorMessage: (0, i.useMemo)(() => (0, ae.$9)(l, m), [l, m]),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: P,
                                    onClickCheckout: S,
                                };
                            })({ handleStepChange: t }),
                            S = (0, r3.uS)(a),
                            {
                                disabled: P,
                                tooltipText: T,
                                text: I,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, i.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: J.intl.string(J.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: J.intl.string(J.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: a, text: ad() };
                            })({ orbBalance: m, orbPriceAmount: s ? o : p, isInTestMode: S }),
                            _ = (0, i.useMemo)(
                                () => ({ onClick: h, loading: n, text: I, disabled: P, tooltipText: T }),
                                [h, n, I, P, T],
                            ),
                            g = A ? J.intl.format(J.t.fsOXXO, {}) : null,
                            x = S ? J.intl.string(J.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, i.useMemo)(() => {
                                if (null != x || null != g || null != E) {
                                    let e = [];
                                    return (
                                        null != x &&
                                            e.push({ type: "warning", message: x, key: "test-mode-warning-notice" }),
                                        null != g &&
                                            e.push({ type: "warning", message: g, key: "orb-checkout-warning-notice" }),
                                        null != E &&
                                            e.push({ type: "critical", message: E, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [x, g, E]),
                            purchaseItemContent: (0, l.jsx)(au, { skuId: r, orbPriceAmount: s ? c : p }),
                            paymentMethodContent: (0, l.jsx)(ac, { orbBalance: m }),
                            legalContent: (0, l.jsx)(ap, {}),
                            primaryButtonProps: _,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(en.dZ, { children: (0, l.jsx)(eX.T_, { ...r }) }),
                        (0, l.jsx)(en.UX, { children: (0, l.jsx)(h.lo, { primaryButtonProps: n }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: a, children: s } = e,
                    { order: o, setOrder: u } = (0, C.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: c,
                        isRedeeming: d,
                        orbRedemptionError: p,
                        onRedeemVirtualCurrency: m,
                        skuProductLine: h,
                        skuApplicationId: A,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: a, order: s } = e,
                            o = (0, r.bG)([eV.default], () => eZ.Ay.canUseShopDiscounts(eV.default.getCurrentUser())),
                            u = (0, r.bG)([r_.A], () => r_.A.get(t), [t]),
                            c = null != u ? u.productLine : null,
                            d = u?.applicationId ?? (0, r8.P)(t),
                            p = (0, rW.JL)({ sku: u }),
                            { product: m } = (0, ng.q)(t),
                            h = (0, i.useMemo)(() => {
                                if (null != p) return { orbPriceAmount: p.amount };
                                if (null != m) {
                                    let e = (0, r6.CW)({ product: m, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [p, m, o]);
                        h?.orbPriceAmount == null &&
                            (0, r5.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: C,
                                isSubmitting: A,
                                error: E,
                            } = (0, r9.Q)({ skuId: t, loadId: n, order: s, onSignFailure: a }),
                            y = (0, i.useCallback)(
                                (e) => {
                                    C(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, C, l],
                            );
                        return {
                            skuId: t,
                            skuProductLine: c,
                            skuApplicationId: d,
                            loadId: n,
                            orbProductContext: h,
                            onRedeemVirtualCurrency: y,
                            isRedeeming: A,
                            orbRedemptionError: E,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: u }),
                    E = (0, i.useMemo)(
                        () => ({
                            orbProductContext: c,
                            isRedeeming: d,
                            orbRedemptionError: p,
                            onRedeemVirtualCurrency: m,
                            skuId: t,
                            skuProductLine: h,
                            skuApplicationId: A,
                            analyticsSourceLocation: a,
                        }),
                        [c, d, p, m, t, h, A, a],
                    );
                return (0, l.jsx)(am.Provider, { value: E, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: r } = ah(),
                    a = (function (e) {
                        let { orbProductContext: t, skuProductLine: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, i.useMemo)(
                                () => ({
                                    ...l,
                                    sku_product_line: n ?? void 0,
                                    ...(null != t && {
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    }),
                                }),
                                [t, n, l],
                            ),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: l, skuProductLine: r, overrideAnalyticParams: aC });
                return n({ ...t, ...a });
            },
            overrideAnalyticParams: aC,
        },
    };
var aE = n(75304);
let ay = {
    [aE.C.ORB_CHECKOUT]: {
        flowType: aE.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: aA,
    },
    [aE.C.COLLECTIBLES_CHECKOUT]: {
        flowType: aE.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: n4,
    },
    [aE.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r2,
    },
    [aE.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.PREMIUM_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: ig,
    },
    [aE.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rP,
    },
    [aE.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: rN,
    },
    [aE.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: i0,
    },
    [aE.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: Q.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: t0,
        flowType: aE.C.GUILD_PRODUCT_CHECKOUT,
    },
    [aE.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: lP,
        purchaseType: Q.VVm.SUBSCRIPTION,
    },
    [aE.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: aE.C.GUILD_BOOST_CHECKOUT,
        purchaseType: Q.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: tU,
    },
};
