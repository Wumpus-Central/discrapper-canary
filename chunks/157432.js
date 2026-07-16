n.d(t, { Y: () => aC });
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
    C = n(169797),
    h = n(6938),
    E = n(832286),
    f = n(958340),
    A = n(166532),
    y = n(566980),
    S = n(615310),
    P = n(489254),
    I = n(251913),
    _ = n(71393),
    T = n(178368),
    g = n(166403),
    x = n(473145),
    v = n(802790),
    N = n(636441),
    M = n(587491),
    R = n(285753),
    b = n(430993),
    j = n(86379),
    O = n(682174),
    L = n(655857),
    w = n(534479),
    k = n(121005),
    D = n(174459),
    U = n(61299),
    G = n(295405),
    F = n(786300);
let [H, B, Y] = (0, F.A)();
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
            onSubscribeComplete: C,
        } = e,
        [E, f] = i.useState(!0),
        A = (0, a.A)(() => Date.now()),
        y = (0, a.A)(() => (0, x.D$)(T.A.boostSlots).length),
        {
            activeSubscription: S,
            setQuantity: P,
            selectedSkuId: I,
        } = (0, h.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            setQuantity: e.setQuantity,
            selectedSkuId: e.selectedSkuId,
        }));
    i.useEffect(() => {
        null != I && P(t);
    }, [I]);
    let _ = (0, r.bG)([g.A], () => g.A.hasFetchedSubscriptions()),
        v = (0, r.bG)([G.A], () => G.A.defaultPaymentSourceId),
        N = null != S ? S.paymentSourceId : null,
        M = (0, U._V)(null != N ? N : _ ? v : null);
    return (0, l.jsx)(H.Provider, {
        value: {
            disablePremiumUpsell: n,
            closeGuildPerksModal: s,
            guildId: u,
            paymentModalArgs: M,
            premiumSubscriptionPaymentSourceId: N,
            analyticsLocation: c,
            analyticsSourceLocation: d,
            forceDisableSubmitButton: E,
            setForceDisableSubmitButton: f,
            applicationId: p,
            intent: m,
            onSubscribeComplete: C,
            flowStartTime: A,
            existingAvailableSlotCount: y,
        },
        children: o,
    });
}
var V = n(160946),
    K = n(253390),
    Z = n(97352),
    q = n(615396),
    z = n(202541);
function Q() {
    let { activeSubscription: e, quantity: t } = (0, h.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
        })),
        n = (0, r.bG)([Z.A], () => null == e || null != Z.A.get(e.planId)),
        l = (0, V.Y)(),
        a = (0, r.bG)([Z.A], () => (null != e ? (0, q.c9)(e.planId) : null)),
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
var $ = n(652215),
    X = n(375708),
    J = n(898640);
function ee(e) {
    let { message: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.s3, { title: X.intl.string(X.t.q9EGps) }),
            (0, l.jsx)(b.c, { children: (0, l.jsx)("p", { className: J.C, children: t }) }),
        ],
    });
}
function et(e) {
    let { handleStepChange: t } = e,
        n = (0, h.t4)((e) => e.activeSubscription),
        { guildId: r, analyticsLocation: a } = B(),
        o = (0, j.Hp)(),
        u = (0, k.A)(),
        { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, L.Jn)(),
        { hasFetchedPremiumSubscriptionPlan: p } = Q(),
        m = null != n && null != n.renewalMutations,
        C = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
        E = !u || !c || !p || null == d || "" === d;
    return ((0, s.Ay)(() => {
        m && D.default.track($.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: r });
    }),
    i.useEffect(() => {
        E || o || C || m || t(A.pn.PLAN_SELECT);
    }, [E, o, C, m, t]),
    C)
        ? (0, l.jsx)(ee, { message: X.intl.string(X.t.mOWsF1) })
        : m
          ? (0, l.jsx)(ee, { message: X.intl.string(X.t.npfhh0) })
          : E
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
        { guildId: n, paymentModalArgs: i, existingAvailableSlotCount: s } = B(),
        {
            activeSubscription: o,
            startingFractionalPremiumEndsAt: u,
            customCheckoutFlow: c,
            paymentSourceId: d,
            quantity: p,
        } = (0, h.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
            customCheckoutFlow: e.customCheckoutFlow,
            paymentSourceId: e.paymentSourceId,
            quantity: e.quantity,
        })),
        m = (0, r.bG)([f.A], () => (null != n ? f.A.getGuild(n) : void 0), [n]),
        C = null != n ? _.A.getGuild(n) : null,
        E = (0, a.A)(() => (0, q.b2)(u)),
        A = (0, r.bG)([Z.A], () => (null != o ? (0, q.c9)(o.planId) : null)),
        { paymentSources: y } = i,
        S = (0, el.g)(y, d),
        P = null != C ? C.name : null != m ? m.name : void 0,
        I = E && null != A && !z.YV.has(A.id);
    return (0, l.jsx)(en.dZ, {
        children: (0, l.jsx)(ei.W, {
            guild: C,
            guildBoostQuantity: p + s,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: S,
            fallbackGuildName: P,
            didPurchaseOnFractionalPremium: I,
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
    ep = n(529427),
    em = n(87719);
let eC = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n(321073);
var eh = n(503698),
    eE = n.n(eh),
    ef = n(661531),
    eA = n(990078),
    ey = n(408278),
    eS = n(834040),
    eP = n(499373),
    eI = n(834730),
    e_ = n(403581),
    eT = n(663803),
    eg = n(320448),
    ex = n(297264),
    ev = n(104510),
    eN = n(695366),
    eM = n(289873),
    eR = n(726656),
    eb = n(688810),
    ej = n(531260),
    eO = n(666646),
    eL = n(404374),
    ew = n(543767),
    ek = n(881489),
    eD = n(477421),
    eU = n(234419),
    eG = n(363476),
    eF = n(531506),
    eH = n(51465);
function eB() {
    return (0, l.jsxs)("div", {
        className: eE()(eH.dt, eH.dE),
        children: [
            (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eH.qq,
            }),
            (0, l.jsx)(eI.E, { variant: "text-sm/medium", className: eH.tD, children: X.intl.format(X.t.f5VHKm, {}) }),
        ],
    });
}
function eY(e) {
    let { text: t, color: n } = e;
    return (0, l.jsxs)("div", {
        className: eH.dt,
        children: [(0, l.jsx)(e_.t, { size: "md", className: eH.YW, color: n }), (0, l.jsx)("div", { children: t })],
    });
}
var eW = n(773669),
    eV = n(287809),
    eK = n(975571),
    eZ = n(252424),
    eq = n(428262),
    ez = n(580630),
    eQ = n(155718),
    e$ = n(606267),
    eX = n(319668),
    eJ = n(38785),
    e0 = n(818824),
    e1 = n(596034),
    e2 = n(270537),
    e3 = n(241989),
    e4 = n(888751),
    e6 = n(874638),
    e7 = n(692440),
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
    return (0, l.jsx)(e1._, {
        variant: {
            type: e1.I.Subscription,
            purchaseButtonText: X.intl.string(X.t.eUEeCt),
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
    return X.intl.format(X.t.IeaYqg, { endDate: e });
}
function tn(e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)("div", { className: e9.bU }),
            (0, l.jsx)(eI.E, { variant: "text-sm/normal", className: e9.b7, children: t }),
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
                label: X.intl.formatToPlainString(X.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, eq.Mn)(n.id, !1, l),
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
            label: X.intl.formatToPlainString(X.t.ZSVged, { planName: (0, eq.RH)(i[0].subscriptionPlanId) }),
            tooltip: X.intl.string(X.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            o.push({
                id: "guild-boosting-adjustment",
                label: X.intl.string(X.t["+as5ZZ"]),
                tooltip: X.intl.string(X.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && o.push({ id: "tax", label: X.intl.string(X.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, e4.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...u, ...o];
    return (0, l.jsx)(e2.Vm, {
        defaultExpanded: !0,
        label: X.intl.string(e8.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function ti(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: i, renewalInvoicePreview: r } = e;
    return null != n
        ? (0, l.jsx)(e7.Hc, { currentInvoice: i, renewalInvoice: r, isUpdate: t })
        : (0, l.jsx)(e7.Hc, { renewalInvoice: r });
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
        C = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: l,
                    currentPremiumSubscription: i,
                    premiumSubscriptionPlan: a,
                    newAdditionalPlans: s,
                } = e,
                u = (0, r.bG)([_.A, f.A], () => {
                    let e = _.A.getGuild(n);
                    return null != e ? e : f.A.isGuildFetching(n) ? null : f.A.getGuild(n);
                }, [n]),
                c = a.interval,
                d = a.intervalCount,
                p = (0, r.bG)([Z.A], () => Z.A.getForSkuAndInterval((0, eq.mH)(z.pe.GUILD), c, d));
            es()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, eq.J$)(l.paymentSourceId),
                C = (0, ek.ds)();
            t = null != i ? (0, eq.Om)(i, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: h } = (0, eb.Ay)(),
                [E, A] = (0, ew.YV)({
                    subscriptionId: i?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: o.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [y, S] = (0, ew.YV)({
                    subscriptionId: i?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: l.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: h,
                    analyticsLocation: o.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, eO.OQ)({
                    checkoutInvoicePreview: E,
                    checkoutInvoiceError: A,
                    renewalInvoicePreview: y,
                    renewalInvoiceError: S,
                }),
                {
                    guild: u ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: C,
                    checkoutInvoicePreview: E,
                    renewalInvoicePreview: y,
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
            isSubscriptionUpdate: h,
            guild: E,
            isPrepaid: A,
            isReverseTrial: y,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: P,
        } = C,
        I = (0, e$.A)({ location: "GuildBoostReview", message: X.intl.string(e8.default["tK8A/8"]) });
    if (null == S || null == P || null == E) return (0, l.jsx)(eJ.Ed, { shouldShowUnifiedHeader: !0 });
    let T = (0, l.jsx)(ti, {
            isSubscriptionUpdate: h,
            premiumSubscription: a,
            checkoutInvoicePreview: S,
            renewalInvoicePreview: P,
        }),
        g = (0, l.jsx)(eX.n, {
            setPaymentSourceId: p,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: X.intl.string(X.t["u+Cw58"]),
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
                startDate: (0, e7.de)({ isSubscriptionUpdate: t, currentInvoice: i, renewalInvoice: l }),
            };
        })({
            isSubscriptionUpdate: h,
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
                return (0, e6.Z)(l.invoiceItems).find((t) => z.pW.has(t.subscriptionPlanId) && e(t));
            }
            let m = p((e) => e.amount >= 0);
            es()(null != m, "Missing guild boosting invoice item");
            let C = p((e) => e.amount < 0),
                h = null != C ? m.quantity - C.quantity : m.quantity,
                E = l.invoiceItems.filter((e) => (0, eq.xq)(e.subscriptionPlanId)),
                f = E.reduce((e, t) => e + t.amount, 0),
                A = (0, ew.sL)(m) * h,
                y = (0, ez.$g)(A, l.currency),
                S = (0, ez.CE)(y, c, d),
                P = (0, ez.$g)(l.total, l.currency) + (l.currency !== e5.Yr.USD ? "*" : ""),
                I = l.subtotal - A - f,
                _ = m.discounts.map((e) => {
                    let t = e.amount / m.quantity;
                    return { ...e, amount: t * h };
                }),
                T = _.find((e) => e.type === eQ.iS.SUBSCRIPTION_PLAN),
                g = _.find((e) => e.type === eQ.iS.ENTITLEMENT),
                x = m.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: s,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: y,
                formattedGuildBoostRate: S,
                formattedOriginalAmountGuildBoostRate: (0, ez.CE)((0, ez.$g)(x, l.currency), c, d),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: E,
                guildBoostingAdjustment: I,
                subscriptionDiscount: T,
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
            reviewState: C,
        }),
        M = (0, l.jsx)(tl, { ...N }),
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
                label: X.intl.formatToPlainString(X.t.a3cAOg, {
                    numGuildSubscriptions: i,
                    planName: (0, eq.Mn)(r.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, l.jsx)(e3.a6, {}),
                price: s,
                PriceIcon: c ? e_.t : void 0,
                priceTooltip: c ? X.intl.string(e8.default.YUNJJa) : void 0,
                priceSubText: c ? o : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            E,
            N,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: l } = e;
                return !t && n && null != l ? { type: "reverseTrial", text: tt(l.currentPeriodEnd) } : null;
            })({ isPrepaid: A, isReverseTrial: y, premiumSubscription: a }),
        ),
        b = (0, l.jsx)(e3.f7, { ...R });
    return (0, l.jsx)(eJ.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: I,
        purchaseItemContent: b,
        subscriptionDetailsContent: T,
        paymentMethodContent: g,
        invoiceSummaryContent: M,
        legalContent: v,
        invoiceTotalDueValue: N.formattedTotal,
        invoiceTotalDueLabel: X.intl.string(e8.default.R0cZsM),
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
            (0, l.jsx)(ey.K, {
                variant: "secondary",
                size: "md",
                icon: eS.Q,
                onClick: () => {
                    c && !(o <= r) && d(o - 1);
                },
                "aria-label": X.intl.string(X.t["k+ohJm"]),
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
            (0, l.jsx)(ey.K, {
                variant: "secondary",
                size: "md",
                icon: eP.T,
                onClick: () => {
                    c && !(o >= a) && d(o + 1);
                },
                "aria-label": X.intl.string(X.t.w8Sc4B),
                disabled: !c || o >= a,
            }),
        ],
    });
}
function tu(e) {
    let { message: t } = e;
    return (0, l.jsx)(eI.E, { variant: "text-xs/normal", color: "text-muted", className: ta.jH, children: t });
}
function tc(e) {
    let { text: t } = e;
    return (0, l.jsxs)("div", {
        className: ta.Vk,
        children: [
            (0, l.jsx)("div", {
                className: ta.D0,
                children: (0, l.jsx)(e_.t, {
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
        discountCallout: C,
        refreshDiscountCallout: h,
        legacyPricingNotes: E,
        refreshPricingNotes: f,
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
                            (0, l.jsx)(eT.l, {
                                value: n,
                                onChange: (e) => r(e),
                                className: e9.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, l.jsx)("div", { className: e9.$0, children: a }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eE()(e9.QK, { [e9.S]: t }), children: s }),
                ],
            }),
            (0, l.jsx)("div", { className: e9.J3 }),
            (0, l.jsxs)("div", {
                className: e9.mP,
                children: [
                    (0, l.jsx)(eI.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: X.intl.string(X.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", {
                        className: eE()(e9.__invalid_planSelectorSubtotalPrice, { [e9.S]: t }),
                        children: o,
                    }),
                ],
            }),
            E.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t)),
            C,
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
        existingSlotNotice: C,
        discountCallout: h,
        refreshDiscountCallout: E,
        legacyPricingNotes: f,
        refreshPricingNotes: A,
    } = e;
    return (0, l.jsxs)("div", {
        className: ta.xY,
        children: [
            m,
            (0, l.jsxs)("div", {
                className: ta.K3,
                children: [
                    (0, l.jsx)(eI.E, {
                        variant: "text-md/medium",
                        className: ta.bk,
                        children: X.intl.string(X.t["r+SebU"]),
                    }),
                    (0, l.jsx)(eg._, { className: ta.bN, color: "currentColor", size: "xs" }),
                    (0, l.jsx)(eI.E, { variant: "text-md/medium", className: ta.kX, children: a }),
                ],
            }),
            p,
            C,
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
                            (0, l.jsx)(eI.E, { variant: "text-md/medium", className: ta.ny, children: s }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eE()(ta.El, { [e9.S]: t }), children: o }),
                ],
            }),
            E,
            (0, l.jsxs)("div", {
                className: ta.fh,
                children: [
                    (0, l.jsx)(ex.D, {
                        variant: "heading-lg/semibold",
                        className: ta.O3,
                        children: X.intl.string(X.t.RtA7nR),
                    }),
                    (0, l.jsx)("div", { className: eE()(ta.BU, { [e9.S]: t }), children: c }),
                ],
            }),
            A.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t)),
        ],
    });
}
function tm(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: i } = e;
    return (0, l.jsxs)("div", {
        className: e9.Mv,
        children: [
            (0, l.jsx)(ev._, { className: e9.T5, color: ef.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, l.jsxs)("div", {
                children: [
                    X.intl.format(X.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != i
                        ? (0, l.jsx)(eA.m, {
                              text: X.intl.formatToPlainString(X.t.SFpsCH, {
                                  canceledCount: n,
                                  date: i.currentPeriodEnd,
                              }),
                              children: (0, l.jsx)(eN.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e9.Y5,
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
            setNumGuildBoosts: a,
            setForceDisableSubmitButton: s,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: m = !1,
            showRefreshSubtotalRate: C = !1,
            refreshNextStepLabel: h = X.intl.string(X.t.QBnNHq),
        } = e,
        E = (function (e) {
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
                    showRefreshSubtotalRate: C,
                } = e,
                h =
                    ((t = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription())),
                    (0, r.bG)([G.A], () =>
                        t?.paymentSourceId != null ? G.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                E = a.interval,
                f = a.intervalCount,
                A = (0, r.bG)([Z.A], () => Z.A.getForSkuAndInterval((0, eq.mH)(z.pe.GUILD), E, f)),
                y = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                S = (0, ej.A)({ forceFetch: !1 });
            es()(null != A, "Missing guildBoostingSubscriptionPlan");
            let P = [{ planId: A.id, quantity: 1 }],
                I = c?.items.find(
                    (e) => e.planId === z.gD.PREMIUM_MONTH_TIER_2 || e.planId === z.gD.PREMIUM_YEAR_TIER_2,
                );
            null != I && P.push(I);
            let _ = c?.items.find((e) => e.planId === z.gD.PREMIUM_MONTH_GUILD || e.planId === z.gD.PREMIUM_YEAR_GUILD),
                T = null == h || !z.uJ.has(h) || null == _,
                { analyticsLocations: v } = (0, eb.Ay)(),
                [N, M] = (0, ew.YV)({
                    subscriptionId: c?.id,
                    items: P,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: m.currency,
                    preventFetch: T,
                    analyticsLocations: v,
                    analyticsLocation: o.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, eO.Tr)(N, M);
            let R = !T && null == N && null == M;
            i.useLayoutEffect(() => {
                u(R);
            }, [R, u]);
            let b = (0, eU.V)()?.subscription_trial?.sku_id === z.pe.TIER_2,
                j = eq.Ay.hasBoostDiscount(y),
                O = j && null != c && eq.Ay.isPremiumAtLeast(eq.Ay.getPremiumType(c.planId), z.PremiumTypes.TIER_1),
                L = N?.findInvoiceItemByPlanId(A.id),
                w =
                    null != L
                        ? { amount: L.amount, tax: 0, taxInclusive: !0, currency: N.currency }
                        : eq.Ay.getPrice(A.id, j, !1, m),
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
                    withTrialOfferCopyVariant: b,
                });
            "discount" === U.upsellVariant
                ? (es()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (n = X.intl.format(X.t.hf6YOY, { planName: eq.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = X.intl.format("upsell_trial" === U.upsellVariant ? X.t.ba1L74 : X.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eZ.l9)(eW.default.locale, z.oX / 100),
                      freeSubscriptionCount: z.M4,
                  }));
            let F = p.filter((e) => (0, x.I5)(e)).length,
                H = (0, eq.J$)(m.paymentSourceId),
                { ipCountryCode: B } = (0, eD.A)(),
                Y = "HR" === B && w.currency === e5.Yr.EUR,
                W =
                    D && null != c
                        ? (0, l.jsx)(tn, { text: tt(c.currentPeriodEnd) })
                        : (0, l.jsx)("div", { className: eE()(e9.hA, e9.G3), children: X.intl.string(X.t.jNY1FO) }),
                V =
                    D && null != c
                        ? (0, l.jsx)(tn, { text: tt(c.currentPeriodEnd), className: e9.jk })
                        : (0, l.jsx)(eI.E, {
                              variant: "text-md/medium",
                              color: "text-subtle",
                              className: ta._X,
                              children: X.intl.string(X.t.jNY1FO),
                          }),
                K = U.showExistingSlotNotice
                    ? (0, l.jsx)(tm, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                q = U.showFractionalPremiumBanner ? (0, l.jsx)(eF.vi, { fractionalPremiumInfo: S }) : null,
                Q = H
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === z.WT.YEAR
                              ? X.intl.string(X.t.YDpAzZ)
                              : t === z.WT.MONTH && 1 === n
                                ? X.intl.string(X.t["6ZR3By"])
                                : null;
                      })({ intervalType: E, intervalCount: f }) ?? X.intl.string(X.t.K9Bmze))
                    : X.intl.string(X.t.K9Bmze),
                J = R
                    ? (0, l.jsx)(eM.y, {})
                    : H
                      ? (0, ez.$g)(w.amount, w.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: l, intervalCount: i = 1 } = e,
                                r = (0, ez.$g)(t, n);
                            return l === z.WT.YEAR
                                ? X.intl.formatToPlainString(X.t["8M04YJ"], { price: r })
                                : l === z.WT.MONTH && 1 === i
                                  ? X.intl.formatToPlainString(X.t.VStWCR, { price: r })
                                  : l === z.WT.MONTH && i > 1
                                    ? X.intl.formatToPlainString(X.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: E, intervalCount: f, amount: w.amount, currency: w.currency }),
                ee = R
                    ? (0, l.jsx)(eM.y, {})
                    : (0, l.jsx)(eG.A, {
                          price: k,
                          currency: w.currency,
                          intervalType: E,
                          intervalCount: f,
                          isPrepaidPaymentSource: H,
                      }),
                et = R
                    ? (0, l.jsx)(eM.y, {})
                    : C && !H
                      ? (0, ez.CE)((0, ez.$g)(k, w.currency), E, f)
                      : (0, ez.$g)(k, w.currency),
                en = [],
                el = [];
            if (Y) {
                let e = (0, l.jsx)(
                    eR.A,
                    {
                        message: X.intl.formatToPlainString(X.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, ez.$g)(7.5345 * k, e5.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                en.push(e), el.push(e);
            }
            let ei = X.intl.format(X.t.Om31w8, { documentationLink: eK.A.getArticleURL($.MVz.LOCALIZED_PRICING) });
            return (
                en.push((0, l.jsx)(eR.A, { message: ei }, "localized-pricing")),
                el.push((0, l.jsx)(tu, { message: ei }, "localized-pricing")),
                {
                    isLoading: R,
                    planLabel: Q,
                    planPriceContent: J,
                    subtotalContent: ee,
                    refreshSubtotalContent: et,
                    legacyDescriptionContent: W,
                    refreshDescriptionContent: V,
                    existingSlotNotice: K,
                    fractionalBanner: q,
                    legacyPricingNotes: en,
                    refreshPricingNotes: el,
                    discountCallout:
                        "reverse_trial" === U.upsellVariant
                            ? (0, l.jsx)(eB, {})
                            : (0, l.jsx)(eY, { text: n, color: eL.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === U.upsellVariant ? (0, l.jsx)(eB, {}) : (0, l.jsx)(tc, { text: n }),
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
            showRefreshSubtotalRate: C,
        });
    return (0, l.jsx)(m ? tp : td, {
        isLoading: E.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: a,
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
        refreshNextStepLabel: h,
    });
}
let th = z.gD.NONE_MONTH,
    tE = [z.pe.GUILD];
function tf(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            guildId: i,
            closeGuildPerksModal: s,
            disablePremiumUpsell: o,
            setForceDisableSubmitButton: u,
            forceDisableSubmitButton: c,
            paymentModalArgs: d,
            premiumSubscriptionPaymentSourceId: p,
        } = B(),
        {
            paymentSourceId: m,
            activeSubscription: C,
            quantity: E,
            setQuantity: y,
        } = (0, h.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { displayCurrency: S } = (0, L.Jn)(),
        I = null != p || Object.keys(d.paymentSources).length > 0,
        g = (0, A.Ir)(I ? A.pn.REVIEW : A.pn.ADD_PAYMENT_STEPS),
        v = (0, a.A)(() => (0, x.D$)(T.A.boostSlots)),
        N = (0, P.n)("GuildBoostPurchaseModal"),
        M = eC.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        R = N && M,
        b = (0, r.bG)([f.A], () => (null != i ? f.A.getGuild(i) : void 0), [i]),
        j = null != i ? _.A.getGuild(i) : null,
        O = null == b && null == j,
        w = null != C && C.isPurchasedExternally,
        k = Object.keys(d.paymentSources).length > 0,
        D = (0, r.bG)([Z.A], () => (null != C ? (0, q.c9)(C.planId) : null)),
        U = (0, r.bG)([Z.A], () => (null == D ? Z.A.get(th) : D));
    if (null == i) throw new ep.vd({ message: "Missing guildId" });
    es()(null != U, "Missing nextPremiumSubscriptionPlan");
    let G = (0, l.jsx)(tC, {
        premiumSubscriptionPlan: U,
        numGuildBoosts: E,
        setNumGuildBoosts: y,
        setForceDisableSubmitButton: u,
        premiumSubscription: C,
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
        w && null != C && null != C.paymentGateway
            ? (G = (0, l.jsxs)("div", {
                  className: J.xK,
                  children: [
                      (0, l.jsx)(eo.w, {
                          type: "critical",
                          children: X.intl.format(X.t["/m3Y3s"], { paymentGatewayName: e5.qm[C.paymentGateway] }),
                      }),
                      G,
                  ],
              }))
            : null != i &&
              !f.A.isGuildFetching(i) &&
              O &&
              (G = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eu.p, {
                          messageType: eu.Y.ERROR,
                          className: J.MR,
                          children: X.intl.string(X.t.eAn6z2),
                      }),
                      G,
                  ],
              })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(en.dZ, { children: G }),
                (0, l.jsx)(en.UX, {
                    children: (0, l.jsx)(ei._, {
                        currentStep: A.pn.PLAN_SELECT,
                        isRefreshEnabled: N,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: N
                            ? (0, l.jsx)(ec.$, { variant: "secondary", text: X.intl.string(X.t["ETE/oC"]), onClick: t })
                            : (0, l.jsx)(ed.Q, { text: X.intl.string(X.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, l.jsx)(ec.$, {
                            variant: "primary",
                            text: X.intl.string(X.t["3PatSz"]),
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
                                numGuildBoostsToPurchase: E,
                                isDisabledBecauseExternalSubscription: w,
                                isMissingGuildInformation: O,
                            }),
                            onClick: () => {
                                o || (null != D && D.premiumSubscriptionType === z.PremiumTypes.TIER_2)
                                    ? n(null != p || k ? A.pn.REVIEW : A.pn.ADD_PAYMENT_STEPS)
                                    : n(A.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
var tA = n(364840),
    ty = n(460905),
    tS = n(183623),
    tP = n(95635),
    tI = n(935462),
    t_ = n(331322),
    tT = n(532794),
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
                description: X.intl.formatToPlainString(X.t.sQBgs2, { numFreeGuildSubscriptions: z.M4 }),
                color: ef.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, l.jsx)(tx.A, {
                icon: ev._,
                iconClassName: tv.pl,
                description: X.intl.formatToPlainString(X.t["1A6vXi"], { percent: (0, eZ.l9)(n, z.oX / 100) }),
                color: ef.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, l.jsx)(tx.A, { icon: ty.n, iconClassName: tv.zO, description: X.intl.string(X.t.Z9b2x2) }) : null,
            (0, l.jsx)(tx.A, { icon: tS.F, iconClassName: tv.Kg, description: X.intl.string(X.t["8dqG5E"]) }),
            (0, l.jsx)(tx.A, { icon: tP.J, iconClassName: tv.$z, description: X.intl.string(X.t.cBorIy) }),
        ],
    });
}
function tM(e) {
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
        { analyticsLocations: p, sourceAnalyticsLocations: m } = (0, eb.Ay)(o.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        C = null == t || null == t.premiumSubscriptionType,
        h = eq.Ay.getPrice(z.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        E = (0, ez.$g)(h.amount, h.currency),
        f = (0, eU.V)(),
        A = f?.trial_id,
        y = f?.subscription_trial?.sku_id === z.pe.TIER_2;
    return (
        i.useEffect(() => {
            D.default.track($.HAw.PREMIUM_UPSELL_VIEWED, { type: z.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: m });
        }, [m]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tI.s_, { "data-migration-pending": !0, onClick: n, className: tv.b }),
                (0, l.jsxs)(b.c, {
                    children: [
                        y && (0, l.jsx)(tg.Vq, { className: tv.Fg }),
                        (0, l.jsx)("div", { className: eE()(tv.Tn, { [tv.NH]: y }) }),
                        (0, l.jsx)(eI.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children:
                                null != A
                                    ? X.intl.string(X.t.AoSzEr)
                                    : X.intl.format(X.t["7vePZb"], { monthlyPrice: E }),
                        }),
                        (0, l.jsx)(tN, { shouldUpsellFromNoneTier: C }),
                    ],
                }),
                (0, l.jsx)(tA.j, {
                    children: (0, l.jsxs)(t_.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(ed.Q, { text: X.intl.string(X.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, l.jsxs)(t_.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, l.jsx)(ed.Q, {
                                        text: X.intl.string(X.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, l.jsx)(ec.$, {
                                        variant: "active",
                                        text: null != A ? X.intl.string(X.t["Gd/XHF"]) : X.intl.string(X.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tT.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: z.pe.TIER_2,
                                                    analyticsLocations: p,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: $.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: s,
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
function tR(e) {
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: a } = e,
        { paymentModalArgs: s, analyticsLocation: o, analyticsSourceLocation: u } = B(),
        { paymentSourceId: c, activeSubscription: d } = (0, h.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: p } = (0, L.Jn)(),
        m = (0, r.bG)([Z.A], () => (null != d ? (0, q.c9)(d.planId) : null)),
        C = (0, r.bG)([Z.A], () => (null == m ? Z.A.get(th) : m));
    es()(null != C, "Missing nextPremiumSubscriptionPlan"), es()(null != p && "" !== p, "Currency not defined");
    let { paymentSources: E } = s,
        f = null != d ? d.paymentSourceId : null,
        y = Object.keys(E).length > 0,
        S = i.useCallback(() => n(A.pn.PLAN_SELECT), [n]),
        P = i.useCallback(() => n(null != f || y ? A.pn.REVIEW : A.pn.ADD_PAYMENT_STEPS), [n, f, y]);
    return (0, l.jsx)(tM, {
        premiumSubscriptionPlan: C,
        analyticsLocation: o,
        analyticsSourceLocation: u,
        onClose: t,
        onBack: S,
        onSkip: P,
        onSubscriptionConfirmation: a,
        priceOptions: null != c ? { paymentSourceId: c, currency: p } : { currency: p },
    });
}
var tb = n(277984),
    tj = n(364995),
    tO = n(820739);
async function tL(e, t) {
    await (0, tO.CD)();
    let n = (0, x.D$)(T.A.boostSlots);
    return (0, tO.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function tw() {
    let { guildId: e, intent: t, onSubscribeComplete: n, paymentModalArgs: l } = B(),
        { setIsSubmittingCurrentStep: r } = l,
        { paymentAuthenticationState: a } = (0, d.o)(),
        { setPurchaseState: s, setPurchaseError: o } = (0, h.t4)((e) => ({
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
        })),
        u = i.useRef(!1);
    return (
        i.useEffect(() => {
            if (a === I.oc.PENDING) {
                u.current = !0;
                return;
            }
            u.current &&
                ((u.current = !1),
                r(!1),
                a !== I.oc.NONE ||
                    null == e ||
                    (async () => {
                        try {
                            await tL(e, null != t), n?.();
                        } catch (e) {
                            s(y.h.FAIL), o(e);
                        }
                    })());
        }, [a, e, t, n, r, s, o]),
        null
    );
}
let tk = [
        { key: A.pn.PLAN_SELECT, renderStep: (e) => (0, l.jsx)(tf, { ...e }), options: { renderHeader: !0 } },
        {
            key: A.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, l.jsx)(tR, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    tD = {
        CHECKOUT_FLOW: u.C.GUILD_BOOST_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(et, { ...e }) },
        STEPS_BEFORE_CHECKOUT: tk,
        CHECKOUT_STEPS: {
            [A.pn.REVIEW]: function (e) {
                let { handleStepChange: t, handleClose: n, analyticsData: a } = e,
                    { guildId: s, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: u } = B(),
                    {
                        activeSubscription: c,
                        paymentSourceId: d,
                        setPaymentSourceId: p,
                    } = (0, h.t4)((e) => ({
                        activeSubscription: e.activeSubscription,
                        paymentSourceId: e.paymentSourceId,
                        setPaymentSourceId: e.setPaymentSourceId,
                    })),
                    { displayCurrency: m } = (0, L.Jn)();
                if (null == s) throw new ep.vd({ message: "Missing guildId" });
                es()(null != m && "" !== m, "Currency not defined");
                let { paymentSources: E } = o,
                    { newAdditionalPlans: f, currentPremiumSubscriptionPlan: S } = Q(),
                    P = (0, r.bG)([Z.A], () => (null == S ? Z.A.get(th) : S));
                es()(null != P, "Missing nextPremiumSubscriptionPlan");
                let I = null != d ? { paymentSourceId: d, currency: m } : { currency: m },
                    _ = (function (e) {
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
                            } = B(),
                            { displayCurrency: C } = (0, L.Jn)(),
                            { paymentSources: E, setIsSubmittingCurrentStep: f, isSubmittingCurrentStep: S } = a,
                            {
                                activeSubscription: P,
                                paymentSourceId: I,
                                setPurchaseError: _,
                                hasAcceptedTerms: T,
                                setPurchaseState: g,
                                quantity: x,
                            } = (0, h.t4)((e) => ({
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
                                currentPremiumSubscriptionPlan: M,
                                premiumGuildSubscriptionPlanId: R,
                            } = Q(),
                            b = (0, e$.A)({
                                location: "GuildBoostPurchaseModal",
                                message: X.intl.string(e8.default["tK8A/8"]),
                            }),
                            { checkoutPaymentSources: j } = (0, tj.t)(),
                            O = (0, e$.iB)({
                                checkoutPaymentSources: j,
                                paymentSourceId: I,
                                location: "GuildBoostPurchaseModal",
                            }),
                            w = i.useMemo(
                                () => ({
                                    ...l,
                                    location: o,
                                    source: u,
                                    subscription_plan_id: R,
                                    sku_id: (0, eq.mH)(z.pe.GUILD),
                                    quantity: x,
                                }),
                                [l, o, u, x, R],
                            ),
                            k = i.useMemo(() => {
                                let { guild_id: e, ...t } = w;
                                return t;
                            }, [w]),
                            U = null != I ? { paymentSourceId: I, currency: C ?? void 0 } : { currency: C ?? void 0 },
                            G = async () => {
                                es()(null != N, "Missing newAdditionalPlans");
                                let e = (0, el.W)(E, I);
                                _(null);
                                let i = !1;
                                try {
                                    g(y.h.PURCHASING),
                                        f(!0),
                                        es()(null != I, "Missing paymentSourceId"),
                                        es()(null != v, "Missing invoicePreview");
                                    let a = { amount: v.total, currency: v.currency },
                                        o = U.currency ?? v.currency,
                                        u = (0, eq.U8)(P, N, o.toLowerCase(), U.paymentSourceId);
                                    if (
                                        (D.default.track($.HAw.PAYMENT_FLOW_COMPLETED, {
                                            ...w,
                                            duration_ms: Date.now() - c,
                                            guild_id: r ?? void 0,
                                            application_id: d,
                                        }),
                                        null == P || null == M)
                                    ) {
                                        es()(null != e, "Missing paymentSource");
                                        let t = await (0, tb.Ky)({
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
                                        let t = { items: (0, eq.aE)(P, N) };
                                        (t.currency = P.currency ?? o),
                                            (t.paymentSource = null != s ? E[s] : void 0),
                                            null == t.paymentSource &&
                                                (es()(null != e, "Missing paymentSource"),
                                                (t.paymentSource = e),
                                                (t.currency = o));
                                        let n = await (0, tb.nV)(P, t, a, u, l.location_stack);
                                        if (n.redirectConfirmation) {
                                            i = !0;
                                            return;
                                        }
                                        if (n.pendingCustomerAction) return;
                                    }
                                    null == p && t(A.pn.CONFIRM),
                                        g(y.h.COMPLETED),
                                        null != r && (await tL(r, null != p)),
                                        null != p && n(),
                                        m?.();
                                } catch (t) {
                                    g(y.h.FAIL),
                                        _(t),
                                        D.default.track($.HAw.PAYMENT_FLOW_FAILED, {
                                            ...k,
                                            payment_error_code: t?.code,
                                            payment_gateway:
                                                null != e
                                                    ? e.type === $.hes.CARD
                                                        ? $.kM_.STRIPE
                                                        : $.kM_.BRAINTREE
                                                    : null,
                                            payment_source_id: I,
                                            duration_ms: Date.now() - c,
                                        });
                                } finally {
                                    i || f(!1);
                                }
                            };
                        return {
                            text: X.intl.string(X.t.eUEeCt),
                            loading: S,
                            disabled: null == I || !T || null != b || O,
                            onClick: G,
                            variant: "active",
                        };
                    })({ handleStepChange: t, handleClose: n, analyticsData: a }),
                    T = i.useCallback(() => {
                        t(A.pn.ADD_PAYMENT_STEPS), p(null);
                    }, [t, p]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(en.dZ, {
                            children: (0, l.jsx)(tr, {
                                guildId: s,
                                paymentSources: E,
                                priceOptions: I,
                                currentPremiumSubscription: c,
                                premiumSubscriptionPaymentSourceId: u,
                                premiumSubscriptionPlan: P,
                                newAdditionalPlans: f,
                                paymentSourceId: d,
                                setPaymentSourceId: p,
                                onPaymentSourceAdd: T,
                            }),
                        }),
                        (0, l.jsx)(en.UX, {
                            children: (0, l.jsx)(C.lo, {
                                onBackClick: () => t(A.pn.PLAN_SELECT),
                                primaryButtonProps: _,
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
                        applicationId: C,
                        analyticsSourceLocation: h,
                        stepConfigs: A,
                        loadId: y,
                        children: S,
                    } = e,
                    P = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                    I = (0, a.A)(() => n - (0, x.D$)(T.A.boostSlots).length);
                return (
                    (0, s.Ay)(() => {
                        null != f.A.getGuild(t) || f.A.isGuildFetching(t) || (0, E.y)(t);
                    }),
                    (0, l.jsx)(c.M, {
                        activeSubscription: P,
                        stepConfigs: A,
                        skuIDs: tE,
                        loadId: y,
                        unifiedCheckoutFlow: u.C.GUILD_BOOST_CHECKOUT,
                        children: (0, l.jsxs)(W, {
                            initialNumGuildBoostsToPurchase: I,
                            disablePremiumUpsell: o,
                            closeGuildPerksModal: p,
                            guildId: t,
                            analyticsLocation: m,
                            analyticsSourceLocation: h,
                            applicationId: C,
                            intent: i,
                            onSubscribeComplete: d,
                            children: [(0, l.jsx)(tw, {}), S],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { guildId: r, existingAvailableSlotCount: a } = B(),
                    s = (0, S.bB)(),
                    { purchaseState: o, quantity: u } = (0, h.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        quantity: e.quantity,
                    })),
                    c = (0, P.n)("GuildBoostUnifiedCheckout"),
                    d = c && (s === A.pn.REVIEW || s === A.pn.CONFIRM),
                    p = (0, R.A)(d),
                    m = i.useMemo(() => ({ quantity: u }), [u]);
                return c && s === A.pn.CONFIRM
                    ? (0, l.jsx)(M.A, {
                          mediaUrls: p.mediaUrls,
                          isSuccess: p.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(o === y.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, l.jsx)(N.A, {
                                  transitionState: t.transitionState,
                                  guild: _.A.getGuild(r),
                                  guildBoostQuantity: u + a,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: m,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: o.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                i = (0, P.n)("GuildBoostUnifiedCheckout"),
                r = (0, h.t4)((e) => e.purchaseState),
                a = (0, p.A)();
            if (n === A.pn.PREMIUM_UPSELL) return null;
            if (n === A.pn.REVIEW) {
                let e = null != a ? a.skuId : null;
                return (0, l.jsx)(C.s3, { ...(0, m.u)({ skuId: e, step: n }) });
            }
            return i
                ? (0, l.jsx)(C.s3, { title: (0, m.u)({ skuId: null, step: n }).title })
                : (0, l.jsx)(v.A, { onClose: () => t(r === y.h.COMPLETED), currentStep: n, purchaseState: r });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(er, { ...e }), options: { renderHeader: !0 } },
    };
var tU = n(630303),
    tG = n(192308),
    tF = n(871109);
let tH = i.createContext(void 0);
function tB() {
    let e = i.useContext(tH);
    return es()(null != e, "GuildProductPurchaseContext not found"), e;
}
function tY(e) {
    let { children: t, skuId: n, ...i } = e,
        a = (0, r.bG)([tF.A], () => tF.A.getGuildProduct(n));
    return (
        es()(null != a, "guildProductListing cannot be null"),
        (0, l.jsx)(tH.Provider, { value: { guildProductListing: a, ...i }, children: t })
    );
}
function tW(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: r } = tB(),
        a = (0, eO.sw)();
    return (
        (0, s.Ay)(() => {
            var e;
            es()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: i.id, invoicePreview: a }),
                (0, tG.openModalLazy)(async () => {
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
var tV = n(939249),
    tK = n(789645),
    tZ = n(303612),
    tq = n(916261),
    tz = n(575650);
function tQ(e) {
    let { className: t, onClose: n } = e;
    return (0, l.jsx)(tV.D, {
        className: eE()(tq.cG, t),
        onClick: n,
        children: (0, l.jsx)(tK.P, { size: "xs", color: "currentColor", className: tq.yP }),
    });
}
function t$(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, l.jsxs)(tI.rQ, {
        className: eE()(tq.wx, tz.G, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, l.jsx)(tZ.A, { className: tq.F0, listing: t, imageSize: 500, alt: "" }),
            (0, l.jsx)(tQ, { className: tq.b, onClose: n }),
        ],
    });
}
var tX = n(196617);
let tJ = {
    CHECKOUT_FLOW: ep.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [A.pn.REVIEW]: tU.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, l.jsx)(tY, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: o.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = tB();
        return n === A.pn.CONFIRM
            ? null
            : (0, l.jsx)(t$, { guildProductListing: i, className: tX.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(tW, { ...e }) },
};
var t0 = n(20742),
    t1 = n(951305),
    t2 = n(106778),
    t3 = n(228366),
    t4 = n(213530),
    t6 = n(966971),
    t7 = n(758836),
    t5 = n(483764);
let t8 = { sliderBodyClassName: t5.Bz };
function t9(e) {
    let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t2.Fk, { ref: n, className: t5.Lb, environment: t.current }),
            (0, l.jsx)(t4.K, { options: i, className: eE()(t5.Oh, { [t5.R]: !r }) }),
        ],
    });
}
var ne = n(702841),
    nt = n(775602),
    nn = n(31823),
    nl = n(427675),
    ni = n(590180),
    nr = n(953150),
    na = n(524246),
    ns = n(14368),
    no = n(61750),
    nu = n(972607),
    nc = n(901930);
function nd(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: r,
            purchaseError: a,
            purchasePreviewError: s,
            appliedUserDiscounts: o,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, d.o)(),
        { application: c } = (0, nn.V)(),
        p = (0, nl.gU)(),
        m = (0, ne.bG)([ni.A], () => ni.A.getProduct(r)),
        C = i.useRef(!1);
    es()(null != r, "Expected selectedSkuId"), es()(null != c, "Expected application");
    let E = p[r];
    es()(null != E, "Expected sku");
    let f = null != u || null != a || null != s,
        A =
            o.length > 0
                ? X.intl.formatToPlainString(X.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == m ||
            f ||
            C.current ||
            ((C.current = !0),
            (0, no.A)({
                product: m,
                overrideTitle: A,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: t7.gs.FIAT,
            }));
    }, [m, n, t, f, A]),
    f)
        ? (0, l.jsx)(en.dZ, { children: (0, l.jsx)(nc.A, {}) })
        : null;
}
function np(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: r,
            hasSentMessage: a,
            giftRecipient: s,
            giftMessageError: o,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, t1.Pv)(),
        d = (0, ne.bG)([nt.Ay], () => nt.Ay.useReducedMotion),
        p = i.useRef(null),
        m = (0, h.t4)((e) => e.selectedSkuId),
        C = (0, ne.bG)([ni.A], () => ni.A.getProduct(m)),
        { confettiColors: E } = (0, nr.A)(C?.styles);
    return (
        i.useEffect(() => {
            t &&
                null != s &&
                null != m &&
                (c === z.vQ.USER_PROFILE_WISHLIST || c === z.vQ.DM_CHANNEL_WISHLIST) &&
                t3.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: m, recipientId: s.id });
        }, [t, s, m, c]),
        t
            ? (0, l.jsxs)("div", {
                  ref: p,
                  children: [
                      (0, l.jsx)(nu.A, {
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
                          (0, l.jsx)(na.A, {
                              confettiTarget: p.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, ns.rA)(C?.categorySkuId),
                              colors: E?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, l.jsx)(nd, { ...e })
    );
}
var nm = n(70283),
    nC = n(982240),
    nh = n(662388),
    nE = n(993408),
    nf = n(575593),
    nA = n(452027),
    ny = n(922016),
    nS = n(778712),
    nP = n(986687),
    nI = n(999291),
    n_ = n(903209),
    nT = n(674658),
    ng = n(898461),
    nx = n(203632),
    nv = n(892118),
    nN = n(536572),
    nM = n(14702),
    nR = n(219103),
    nb = n(525723),
    nj = n(780651);
function nO(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: a,
            className: s,
            previewHeaderClassName: o,
            hideProfilePreview: u,
        } = e,
        { giftRecipient: c, giftRecipientError: d } = (0, t1.Pv)(),
        p = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        m = eq.Ay.canUseShopDiscounts(p),
        C = (0, nI.Ay)(c?.id),
        h = i.useRef(null),
        [E, f] = i.useState(!1),
        { product: A } = (0, nT.q)(t, !0),
        y = i.useMemo(() => (0, nE.fT)(A, m), [A, m]),
        S = (0, nb.V_)(A);
    if (null == A || 0 === A.items.length) return null;
    let [P] = A.items,
        I = (0, nN.VG)(A),
        _ = null != c && c.id !== p?.id && A.type !== nf.R.BUNDLE && P.type !== nf.R.NAMEPLATE && !u;
    return (0, l.jsxs)("div", {
        className: s,
        children: [
            (0, l.jsx)("div", {
                className: eE()(nj.QU, o),
                children: (0, l.jsx)(nA.D, {
                    label: X.intl.string(X.t.PpoJzt),
                    children:
                        _ &&
                        (0, l.jsx)(
                            ny.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: E,
                                onRequestClose: () => f(!1),
                                preload: () => (0, n_.A)(c.id, c.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, l.jsx)(nP.A, {
                                        ...e,
                                        user: c,
                                        pendingAvatar: c.getAvatarURL(null, (0, nS.FT)(nS._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ng.T)(P) ? P : null,
                                        pendingProfileEffect: (0, nx.C3)(P) ? P : null,
                                        pendingProfileFrame: (0, nv.s)(P) ? P : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, l.jsx)(tV.D, {
                                        ...i,
                                        className: nj.Nx,
                                        innerRef: h,
                                        onClick: (e) => {
                                            f((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            E ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, l.jsx)(eI.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: X.intl.string(X.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, l.jsxs)("div", {
                className: eE()(nj.i1, null != d ? nj.cN : nj.no),
                children: [
                    (0, l.jsxs)("div", {
                        className: nj.Ug,
                        children: [
                            (0, l.jsx)(nM.O, { product: A }),
                            (0, l.jsxs)("div", {
                                className: nj.JZ,
                                children: [
                                    (0, l.jsx)(eI.E, { variant: "text-md/semibold", children: I }),
                                    (0, l.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            A?.type === nf.R.BUNDLE
                                                ? null
                                                : P.type === nf.R.AVATAR_DECORATION
                                                  ? X.intl.string(X.t["7v0T9P"])
                                                  : P.type === nf.R.NAMEPLATE
                                                    ? X.intl.string(X.t.x5CoXR)
                                                    : P.type === nf.R.PROFILE_EFFECT
                                                      ? X.intl.string(X.t.wR5wOo)
                                                      : P.type === nf.R.PROFILE_FRAME
                                                        ? X.intl.string(X.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(nR.x, {
                                priceAmount: n,
                                priceCurrency: a,
                                discount: y,
                                discountOfferAmount: S,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != d &&
                        (0, l.jsx)("div", {
                            className: nj.Wh,
                            children: (0, l.jsx)(eI.E, {
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
var nL = n(783878),
    nw = n(966327),
    nk = n(427262);
let nD = function (e) {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: r } = e,
        { giftRecipient: a, setGiftRecipient: s } = (0, t1.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: i,
              children: (0, l.jsx)(nL.Z, {
                  selectionMode: "single",
                  label: X.intl.string(X.t.xFn72s),
                  placeholder: X.intl.string(X.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), s(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${nk.Ay.getUserTag(e)}`,
                      leading: (0, l.jsx)(nw.A, { user: e, size: nS._3.SIZE_20 }),
                  })),
              }),
          });
};
var nU = n(435558),
    nG = n.n(nU),
    nF = n(427358),
    nH = n(570287),
    nB = n(994500);
function nY() {
    let e = (0, r.yK)([nB.A], () => nB.A.getFriendIDs()),
        t = (0, r.yK)([nF.A], () =>
            nF.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, nH.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = i.useMemo(() => nG().uniq([...e, ...t]), [e, t]);
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
var nW = n(611881),
    nV = n(492275),
    nK = n(871181),
    nZ = n(318007),
    nq = n(285719),
    nz = n(976860),
    nQ = n(353791);
function n$(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, eb.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, l.jsx)(ed.Q, {
        text: X.intl.string(X.t.J82mpK),
        onClick: function () {
            t(),
                (0, tG.closeAllModals)(),
                null == n
                    ? (0, nh.Cz)({ analyticsLocations: i, analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, nz.pX)(`${$.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
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
function nJ() {
    return (0, i.useContext)(nX);
}
function n0(e) {
    let { hideConfirmStepConfetti: t, confettiCanvas: n } = nJ(),
        { analyticsLocations: i } = (0, eb.Ay)();
    return (0, l.jsx)(np, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
}
let n1 = {
    [A.pn.GIFT_CUSTOMIZATION]: () => X.intl.string(X.t["JCFN/y"]),
    [A.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => X.intl.string(X.t.lDbi6H),
    [A.pn.CONFIRM]: () => "",
};
function n2(e) {
    let { step: t } = e,
        n = n1[t];
    return null == n ? null : (0, l.jsx)(t0.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
}
let n3 = {
    CHECKOUT_FLOW: ep.CL.COLLECTIBLES_CHECKOUT,
    CHECKOUT_STEPS: {
        [A.pn.GIFT_CUSTOMIZATION]: (e) => {
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
                            setValidatingGiftRecipient: C,
                        } = (0, t1.Pv)(),
                        { selectedSkuId: E, checkoutInvoicePreview: f } = (0, h.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                        })),
                        A = (0, nl.gU)(),
                        y = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                        S = nY(),
                        { analyticsLocations: P } = (0, eb.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL),
                        I = (0, nW.F5)("CollectiblesPaymentModalGiftCustomizationStep"),
                        { nextTier: _, giftsToNextTier: T } = (0, r.cf)([nC.Ay], () => ({
                            nextTier: nC.Ay.getNextTier(nm.$.GIFTING),
                            giftsToNextTier: nC.Ay.getRemainingToNextTier(nm.$.GIFTING),
                        })),
                        g = I && null != _;
                    async function x(e, t) {
                        C(!0), null != u && c(), (await (0, nh.JJ)(e.id, t)) || c(X.intl.string(X.t["4kgVqQ"])), C(!1);
                    }
                    function v() {
                        return (0, l.jsx)(nK.A, {
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
                            null != E &&
                                null != p &&
                                (m !== z.vQ.DM_CHANNEL_WISHLIST &&
                                    D.default.track($.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: E }),
                                x(p, E));
                        }),
                        {
                            renderLeftColumn: function () {
                                return (0, l.jsx)("div", {
                                    className: nQ.qL,
                                    children: (0, l.jsx)(nZ.t, { isShopGift: !0 }),
                                });
                            },
                            renderRightColumn: () => {
                                let e = (0, nE.pA)({ invoicePreview: f, selectedSkuId: E, skusById: A });
                                return m === z.vQ.USER_PROFILE_WISHLIST || m === z.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(nq.Z, { giftRecipient: p }),
                                              v(),
                                              null != e &&
                                                  null != E &&
                                                  (0, l.jsx)(nO, {
                                                      skuId: E,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: nQ.uW,
                                                      previewHeaderClassName: nQ.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, l.jsx)("div", {
                                                  className: nQ.fi,
                                                  children: (0, l.jsx)(n$, { handleClose: n, selectedSkuId: E }),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsxs)("div", {
                                          children: [
                                              (0, l.jsx)(nD, {
                                                  selectedSkuId: E,
                                                  recipients: S,
                                                  className: nQ.uh,
                                                  validateSelectedGift: x,
                                              }),
                                              v(),
                                              null != e &&
                                                  null != E &&
                                                  (0, l.jsx)(nO, {
                                                      skuId: E,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: nQ.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            renderBottomContent: () =>
                                g
                                    ? (0, l.jsx)(nV.A, {
                                          giftsToNextTier: T,
                                          nextTierName: _.name ?? "",
                                          nextTierIcon: _.simple_icon_url,
                                          analyticsLocations: P,
                                          className: nQ.qr,
                                      })
                                    : null,
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != u || null == p || p.id === y?.id || i.length > z.Jo,
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
        [A.pn.REVIEW]: tU.p,
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
                        n = i.useRef(new t2.OH()),
                        [l, r] = i.useState(null),
                        [a, s] = i.useState(!1),
                        o = i.useMemo(() => (0, t6.AB)({ purchaseType: t7.gs.FIAT, skuId: t }), [t]);
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
                C = (function (e) {
                    let { skuId: t } = e;
                    return null != t ? [t] : [];
                })({ skuId: t }),
                h = (0, i.useMemo)(
                    () => ({ skuIDs: C, setCustomConfettiVisible: d, hideConfirmStepConfetti: m, confettiCanvas: s }),
                    [C, d, m, s],
                );
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(t9, {
                        environment: a,
                        setConfettiCanvas: o,
                        customConfettiDisplayOptions: p,
                        customConfettiVisible: u,
                    }),
                    (0, l.jsx)(c.M, {
                        ...r,
                        skuIDs: C,
                        stepConfigs: r.stepConfigs,
                        activeSubscription: null,
                        purchaseType: e5.VV.ONE_TIME,
                        excludeSubscriptionPlansBySKU: !0,
                        children: (0, l.jsx)(nX.Provider, { value: h, children: n }),
                    }),
                ],
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                { skuIDs: l, setCustomConfettiVisible: r } = nJ(),
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
                                r(!1), n(e), t3.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                            },
                            [n, r],
                        ),
                        paymentModalOnComplete: s,
                    };
                })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r });
            return n({ ...t, skuId: a, onClose: s, onComplete: o, applicationId: $.FYj });
        },
        tenantAnalyticsLocation: o.A.COLLECTIBLES_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            { isGift: n } = (0, t1.Pv)();
        return n ? (0, l.jsx)(n2, { step: t }) : null;
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(n0, { ...e }), options: t8 },
};
var n4 = n(354033),
    n6 = n(491057),
    n7 = n(496142),
    n5 = n(877624),
    n8 = n(554146),
    n9 = n(71804),
    le = n(426398),
    lt = n(841702),
    ln = n(367727),
    ll = n(380619),
    li = n(709870),
    lr = n(412260),
    la = n(771566),
    ls = n(625494),
    lo = n(45938),
    lu = n(97808),
    lc = n(912140),
    ld = n(780898),
    lp = n(344346),
    lm = n(837015),
    lC = n(258915);
function lh(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: a } = e,
        s = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        o = (0, r.bG)([nt.Ay], () => nt.Ay.useReducedMotion),
        { analyticsLocations: u } = (0, eb.Ay)(),
        c = nS._3.SIZE_32,
        { product: d, isFetching: p } = (0, nT.q)(t),
        [m, C] = i.useState(!1),
        h = d?.items[0],
        {
            isNameplateReward: E,
            nameplateData: f,
            rewardAvatarDecorationSrc: A,
        } = i.useMemo(
            () =>
                null == h
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, lm.F)(h)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: h.skuId,
                                src: h.asset,
                                palette: (0, ld.H6)(h.palette ?? "sky"),
                                imgAlt: h.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, ng.T)(h)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, lc.A)({
                                  legacyAssetId: h.asset,
                                  skuId: h.skuId,
                                  size: c,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [h, c, o],
        );
    return (0, l.jsx)(en.UX, {
        children: (0, l.jsx)(tA.j, {
            children: (0, l.jsxs)("div", {
                className: lC.W,
                children: [
                    E && null != f
                        ? (0, l.jsx)("div", {
                              className: lC.D,
                              onMouseEnter: () => C(!0),
                              onMouseLeave: () => C(!1),
                              children: (0, l.jsx)(lp.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: f,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(lu.Js, {
                              "aria-label": s?.username,
                              size: c,
                              src: s?.getAvatarURL(void 0, (0, nS.FT)(c), !o),
                              avatarDecoration: A,
                          }),
                    (0, l.jsx)(ec.$, {
                        variant: "primary",
                        text: X.intl.string(X.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != d &&
                                (n(),
                                (0, no.A)({
                                    product: d,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: t7.gs.PROMOTIONAL,
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
function lf(e) {
    let t,
        {
            handleClose: a,
            planGroup: o,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: c,
            postSuccessGuild: d,
            followupSKUInfo: m,
            continueSessionToInitialStep: C,
        } = e,
        { paymentSources: E } = (0, le.jm)(),
        {
            activeSubscription: f,
            selectedSkuId: A,
            updatedSubscription: y,
            paymentSourceId: P,
            isPremiumGroupPurchase: I,
            startingPremiumSubscriptionPlanId: _,
            startingFractionalPremiumEndsAt: T,
            checkoutInvoicePreview: g,
        } = (0, h.t4)((e) => ({
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
            giftRecipient: M,
            giftCode: R,
            hasSentMessage: b,
            isSendingMessage: j,
            sendGiftMessage: O,
            claimableRewards: L,
            selectedGiftingPromotionReward: w,
            openGiftingBadgePostPurchaseModal: k,
        } = (0, t1.Pv)(),
        { confirmationFooter: U } = (0, n6.cG)(),
        G = (0, ll.px)(x, N, L),
        F = (0, ll.Mq)(x),
        H = (0, lt.Mv)(w, !1),
        B = (0, r.bG)([lr.A], () => lr.A.getGiftPromotion()?.id),
        Y = (0, r.bG)([lr.A], () => {
            let e = lr.A.getMarketingComponentByType(n5.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        W = (0, el.g)(E, P),
        V = N && null != w && null != H && F,
        K = { selectedPlan: x, selectedSkuId: A, step: v };
    if (null == x) throw new n9.v({ message: "Expected plan to be selected", extraSentryInformation: K });
    if (null == A) throw new n9.v({ message: "Expected selectedSkuId", extraSentryInformation: K });
    if (null == v) throw new n9.v({ message: "Step should be set", extraSentryInformation: K });
    let Z = i.useCallback(() => {
        a(), u?.();
    }, [a, u]);
    (0, s.Ay)(() => {
        I &&
            D.default.track($.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != y,
                has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                subscription_id: y?.id,
            });
    });
    let z = null != g ? g.orbsReward : null;
    i.useEffect(() => {
        function e() {
            if (I)
                if (null != y && y.hasAnyPremiumGroup) {
                    D.default.track($.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: y.id });
                    let e = (0, nU.uniqueId)("premium-group-purchase-flow-modal");
                    (0, tG.openModalLazy)(
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
                                    subscription: y,
                                    isFromPurchaseFlow: !0,
                                    onClose: async () => {
                                        ls._.dispatch($.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), await t.onClose();
                                    },
                                });
                        },
                        {
                            onCloseRequest: () => {
                                ls._.dispatch($.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, tG.closeModal)(e);
                            },
                            modalKey: e,
                        },
                    );
                } else
                    D.default.track($.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                        has_updated_subscription: null != y,
                        has_any_premium_group: y?.hasAnyPremiumGroup ?? !1,
                    }),
                        ls._.dispatch($.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            else null != z && z > 0 && (0, li.$)({ orbsAmount: z });
        }
        return (
            ls._.subscribe($.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                ls._.unsubscribe($.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [I, y, z]),
        i.useEffect(() => {
            !N || null == M || null == R || b || j || (0, lo.Ik)(M) || O({ onSubscriptionConfirmation: u });
        }, [O, N, M, R, b, j, u]),
        i.useEffect(() => {
            G &&
                null != Y &&
                null != B &&
                (0, ln.qr)(n8.M.GIFTING_PROMOTION_REMINDER, B, { dismissAction: lE.i.INDIRECT_ACTION });
        }, [Y, B, G]);
    let Q = null != C ? la.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != c) t = c(x, Z, y);
    else if (N) t = (0, l.jsx)(la.fw, { planId: x.id, onClose: Z });
    else {
        let e =
            _ === x.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: m,
                      startingPremiumSubscriptionPlanId: _,
                      isDowngrade: null != f && (0, q.vT)(f, x.id, o),
                  };
        t = (0, l.jsx)(la.Ay, {
            planId: x.id,
            onClose: Z,
            paymentSourceType: W,
            hideClose: null != U,
            startingFractionalPremiumEndsAt: T,
            customCTAType: Q,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(en.dZ, { children: [(0, l.jsx)(nc.A, {}), t] }),
            null != U && U,
            V && null != w && (0, l.jsx)(lh, { rewardSkuId: w, onClose: Z, onRewardModalClose: k }),
        ],
    });
}
let [lA, ly] = (0, F.A)(),
    lS = {
        CHECKOUT_FLOW: ep.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [A.pn.REVIEW]: n7.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: r,
                    } = e,
                    a = i.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, l.jsx)(lA.Provider, { value: a, children: (0, l.jsx)(n6.Qt, { children: r }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: function (e) {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: r } = ly();
            return (0, l.jsx)(n4.Y, { onClose: t, listing: r, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lf, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var lP = n(73825),
    lI = n(35587),
    l_ = n(607399),
    lT = n(795791),
    lg = n(344159),
    lx = n(561794),
    lv = n(811656),
    lN = n(187322),
    lM = n(890856),
    lR = n(947641),
    lb = n(713517),
    lj = n(929283),
    lO = n(761365),
    lL = n(267861);
function lw(e) {
    let t,
        n,
        { skuId: r, user: a, claimed: s, onSelect: o, selectedSkuId: u } = e,
        [c, d] = i.useState(null),
        p = i.useCallback((e) => {
            d(e);
        }, []),
        m = i.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: C } = (0, lb.A)(m),
        h = !s && C,
        { product: E } = (0, nT.q)(r);
    if (null == E) return null;
    let f = E.items[0];
    return null == f
        ? null
        : ((0, ng.T)(f)
              ? ((n = nf.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(lj.i, { item: f, user: a, isHighlighted: h, avatarSize: nS._3.SIZE_96 })))
              : (0, lm.F)(f) &&
                ((n = nf.R.NAMEPLATE),
                (t = (0, l.jsx)(lO.A, { nameplate: f, user: a, isHighlighted: h, size: "small" }))),
          (0, l.jsx)(lN.vN, {
              children: (0, l.jsxs)(lM.s, {
                  ref: p,
                  "aria-label": E.name ?? "",
                  onClick: function () {
                      null == r || null == o || s || o(r);
                  },
                  className: eE()(lL._x, { [lL.Vp]: !s, [lL.mr]: h, [lL.md]: u === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: eE()(lL.VH, {
                              [lL._Q]: n === nf.R.AVATAR_DECORATION,
                              [lL.M4]: n === nf.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: eE()(lL.i1, { [lL.Sf]: s }), children: t }),
                                            s &&
                                                (0, l.jsx)(lR.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: ef.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: lL.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: lL.tZ,
                          children: [
                              (0, l.jsx)(ex.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, l.jsx)(eI.E, {
                                  variant: "text-sm/normal",
                                  children: s ? X.intl.string(X.t["6cfuDj"]) : X.intl.string(X.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
}
var lk = n(696208),
    lD = n(683433);
function lU(e) {
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
        { paymentSources: C } = (0, le.jm)(),
        h = (0, p.A)(),
        { isGift: E, claimableRewards: f } = (0, t1.Pv)();
    a = a ?? C;
    let {
            variant: y,
            text: P,
            onClick: I,
            disabled: _,
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
                { hasEntitlements: C } = (0, lg.X)(n, l),
                h = (null != c && null != c.paymentSourceId) || Object.keys(a).length > 0 || (C && !o);
            var E = s ? X.intl.string(X.t.PDTjLN) : X.intl.string(X.t.XqMe3N),
                f = A.pn.ADD_PAYMENT_STEPS;
            return (
                h && (f = A.pn.REVIEW),
                (0, ll.px)(d, l, i) && m !== A.pn.SELECT_FREE_SKU && (f = A.pn.SELECT_FREE_SKU),
                { variant: "primary", text: E, onClick: () => t(f), disabled: u }
            );
        })({
            onStepChange: t,
            selectedPlanId: (n = n ?? h?.id),
            isGift: E,
            claimableRewards: f,
            paymentSources: a,
            shouldRenderUpdatedPaymentModal: c,
            isTrial: d,
            isNextDisabled: m,
        }),
        T = i.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: y, text: P, onClick: I, disabled: _ }]
                    : [{ variant: "primary", text: X.intl.string(X.t.XqMe3N), disabled: !0 }],
            [y, P, I, _, n, u],
        );
    return (0, l.jsx)(lk.H, { leading: o && null != s ? (0, l.jsx)(lD.A, { onClick: s }) : void 0, actions: T });
}
var lG = n(328232);
function lF(e) {
    let { handleStepChange: t } = e,
        n = (0, h.t4)((e) => e.selectedSkuId),
        a = (0, p.A)(),
        s = (0, S.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: u, claimableRewards: c } = (0, t1.Pv)(),
        d = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        m = (0, r.yK)([lr.A], () => lr.A.getGiftPromotionRewardSkuIds()),
        C = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, u),
        [E, f] = i.useState(C),
        [y, P] = i.useState(!1);
    i.useEffect(() => {
        y || null != u || null == C || (o(C), f(C));
    }, [C, y, u, o]);
    let I = { selectedPlan: a, selectedSkuId: n, step: s };
    if (null == a) throw new n9.v({ message: "Expected plan to be selected", extraSentryInformation: I });
    if (null == n) throw new n9.v({ message: "Expected selectedSkuId", extraSentryInformation: I });
    if (null == s) throw new n9.v({ message: "Step should be set", extraSentryInformation: I });
    let _ = i.useMemo(() => null != E && (c ?? []).includes(E), [E, c]),
        T = i.useMemo(() => 0 === m.length || null == E || !_, [m, E, _]);
    function g(e) {
        o(e), f(e), P(!0);
    }
    i.useEffect(() => {
        if (0 === m.length) {
            f(void 0), o(void 0);
            return;
        }
        (null != E && _ && m.includes(E)) || null == E || (f(void 0), o(void 0));
    }, [m, _, E, o]);
    let x = m.map((e) =>
            (0, l.jsx)(
                lw,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: g, selectedSkuId: E },
                e,
            ),
        ),
        v = (0, l.jsx)(en.UX, {
            children: (0, l.jsx)(lU, {
                onStepChange: t,
                onBackClick: () => t(A.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [a.id],
                selectedPlanId: a.id,
                isNextDisabled: T,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t0.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: X.intl.string(X.t.OEtqpm),
                subtitle: X.intl.string(X.t.h2nMp0),
            }),
            (0, l.jsx)(b.c, {
                children: (0, l.jsx)(t_.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: lG.Dq, children: x }),
                }),
            }),
            v,
        ],
    });
}
var lH = n(800471),
    lB = n(428644),
    lY = n(396533),
    lW = n(463376),
    lV = n(699595),
    lK = n(664504),
    lZ = n(67948),
    lq = n(807098),
    lz = n(298305),
    lQ = n(387745);
function l$() {
    let e = (0, r.bG)([lr.A], () => {
            let e = lr.A.getMarketingComponentByType(n5.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, t1.Pv)(),
        n = (0, lq.T)(e?.asset),
        i = (0, lq.T)(e?.backgroundAsset),
        a = e?.gradient,
        s =
            null != a && null != a.colors && a.colors.length >= 2
                ? (0, ll.K5)({ gradient: a.colors, angle: a.angle ?? void 0 })
                : void 0,
        o = (0, ll.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let u = (0, ll.x)(o, s),
        c = e?.assetVariant === lZ.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: lQ.qD,
              style: u,
              children: [
                  (0, l.jsx)("div", {
                      className: eE()([lQ.my], { [lQ.R_]: c }),
                      children: (0, l.jsx)(lz.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: c ? nS._3.SIZE_72 : nS._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eI.E, {
                      variant: "text-md/medium",
                      color: "text-overlay-light",
                      children: X.intl.string(X.t.Abiuci),
                  }),
              ],
          });
}
var lX = n(410516),
    lJ = n(462887),
    l0 = n(736653),
    l1 = n(854627),
    l2 = n(236834);
let l3 = (e) => {
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
    l4 = (e) => {
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
let l7 = function (e) {
    let { className: t } = e,
        n = (0, l2.A)(),
        { avatarSrc: i, eventHandlers: r } = (0, l1.A)({ userId: n?.id, size: nS._3.SIZE_32, animateOnHover: !0 }),
        a = (0, l0.DP)(),
        s = (0, lJ.q)(a),
        o = nk.Ay.getName(n);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: eE()(l6.$6, t),
              children: [
                  (0, l.jsx)("div", {
                      className: l6.H,
                      children: (0, l.jsx)(lu.eu, { src: i, "aria-label": n.username, size: nS._3.SIZE_32, ...r }),
                  }),
                  (0, l.jsx)(eI.E, {
                      variant: "text-xs/bold",
                      className: l6.U_,
                      children: X.intl.format(X.t.oxhCOl, { userName: o }),
                  }),
                  (0, l.jsx)(s ? l3 : l4, { className: l6.q3 }),
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
    let { giftMessage: t = X.intl.string(X.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, t1.Pv)();
    return !n || (0, lo.Ik)(i)
        ? null
        : (0, l.jsx)(it.A, {
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
    let { handleStepChange: t, initialPlanId: n, planGroup: s, subscriptionTier: o, trialId: u, handleClose: c } = e,
        {
            selectedSkuId: d,
            priceOptions: m,
            activeSubscription: C,
            defaultPlanId: E,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        {
            isPremium: f,
            isEligibleForTrial: y,
            isEligibleForDiscount: P,
            discountOffer: I,
            userTrialOffer: _,
        } = (0, lW.i)(),
        T = (0, lX.YJ)(I),
        g = (0, p.A)(),
        x = (0, S.bB)(),
        { isGift: v, giftRecipient: N, giftMessage: M, claimableRewards: R } = (0, t1.Pv)(),
        b = (0, ll.Mq)(g),
        j = (0, ne.bG)([lr.A], () => {
            let e = lr.A.getMarketingComponentByType(n5.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = v && b && null != R && R.length > 0 && j,
        L = (0, nW.F5)("PremiumPaymentPlanSelectStep"),
        { nextTier: w, giftsToNextTier: k } = (0, r.cf)([nC.Ay], () => ({
            nextTier: nC.Ay.getNextTier(nm.$.GIFTING),
            giftsToNextTier: nC.Ay.getRemainingToNextTier(nm.$.GIFTING),
        })),
        D = v && L && null != w,
        U = !(0, lx.tA)({ isGift: v, giftRecipient: N }),
        G = null;
    O
        ? (G = (0, l.jsx)(l$, {}))
        : D &&
          (G = (0, l.jsx)("div", {
              className: eE()(ia.v$, U ? ia.CC : ia.RV),
              children: (0, l.jsx)(nV.A, {
                  giftsToNextTier: k,
                  nextTierName: w.name ?? "",
                  nextTierIcon: w.simple_icon_url,
              }),
          }));
    let F = (y || P) ?? !1,
        H = (0, lI.Wi)(z.ZC),
        B = F || H,
        { monthlyDefaultSelected: Y } = lK.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${v ? "" : " - DO NOT USE"}`,
        }),
        W = (0, a.A)(Y),
        V = i.useMemo(() => {
            let e = E;
            return v && W && null != d && (e = z.En[d]), (0, eq.Tm)({ skuId: d, isPremium: f, defaultPlanId: e });
        }, [d, f, E, v, W]),
        K = P && null != T && V.includes(T) ? T : V[0],
        q = (0, ne.bG)([Z.A], () => Z.A.get(K)),
        Q = [{ planId: q?.id, quantity: 1 }],
        [J, ee] = i.useState(F),
        [et, el] = (0, ew.YV)({
            items: Q,
            renewal: !1,
            preventFetch: !B,
            applyEntitlements: !0,
            trialId: u,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
        });
    i.useEffect(() => {
        F && ee(et?.subscriptionPeriodEnd == null);
    }, [et, F]),
        (0, lB.A)(
            "Payment Modal Plan Select Step",
            J,
            5,
            { proratedInvoicePreview: et, proratedInvoiceError: el, isEligibleForOffer: F },
            { tags: { app_context: "billing" } },
        );
    let ei = el?.message ?? X.intl.string(X.t.R0RpRX),
        er = F && null == el,
        ea = F && null != el,
        eu = er && null == C && et?.subscriptionPeriodEnd == null;
    (0, lV.W)({ priceOptions: m, trialId: u, discountInvoicePreview: et });
    let ec = (0, ir.i)({ planSkuId: q?.skuId, invoice: et }),
        { ref: ed, onTransitionEnd: ep } = (0, lY.A)({ isExpanded: null != ec, minHeightOverride: 0 }),
        em = i.useMemo(
            () =>
                v || q?.skuId !== z.pe.TIER_2 || _?.referrer_id == null
                    ? (0, l.jsx)("div", { ref: ed, onTransitionEnd: ep, style: { overflow: "hidden" }, children: ec })
                    : (0, l.jsx)(l7, { className: ia.ZB }),
            [ec, v, q?.skuId, _?.referrer_id, ed, ep],
        ),
        eC = i.useMemo(
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
    if (eu) return (0, l.jsx)(eJ.Ed, { className: ia.QW });
    es()(null != x, "Step should be set"), es()(V.length > 0, "Premium plan options should be set");
    let eh = v
        ? (0, l.jsx)(l5.$p, { ...eC })
        : (0, l.jsx)(l9.X, { ...eC, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ii, { giftMessage: M }),
            !(v && (0, lo.Ik)(N)) && (0, l.jsx)(l8.A, { isEligibleForTrial: y }),
            (0, l.jsxs)(en.dZ, {
                children: [
                    em,
                    (0, l.jsx)(nc.A, { className: ia.tg }),
                    ea ? (0, l.jsx)(eo.w, { type: "critical", children: ei }) : eh,
                    er &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: eE()(ia.IM, ia.Go) }),
                                (0, l.jsx)(eI.E, {
                                    variant: "text-xs/normal",
                                    children: X.intl.format(X.t.BHtnqA, {
                                        link: eK.A.getArticleURL($.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(en.UX, {
                children: [
                    G,
                    (0, l.jsx)(lU, {
                        onStepChange: t,
                        onBackClick: () => t(A.pn.SKU_SELECT),
                        showBackButton: null == n && null == o,
                        planOptions: V,
                        shouldRenderUpdatedPaymentModal: er,
                        isTrial: y,
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
            setSelectedPlanId: i,
            priceOptions: r,
            activeSubscription: a,
            defaultPlanId: s,
            startedPaymentFlowWithPaymentSources: o,
            referralTrialOfferId: u,
        } = (0, h.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: c } = (0, le.jm)(),
        { isGift: d, claimableRewards: p } = (0, t1.Pv)(),
        m = d && null != p && p.length > 0,
        C = (0, eU.V)(u);
    return (0, l.jsx)(im, {
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
                let c = A.pn.PLAN_SELECT,
                    d = (0, eq.aZ)(t);
                (d !== z.pe.TIER_1 && d !== z.pe.TIER_2) || n !== z.pe.TIER_0 || r || (c = A.pn.WHAT_YOU_LOSE);
                let p = (0, ic.t)({ userTrialOffer: a, isGift: r, skuId: n }),
                    m = (0, lH.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                c !== A.pn.WHAT_YOU_LOSE && m && ((c = A.pn.REVIEW), s((0, lH.xT)(n, t, u))),
                    i(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: d,
                userTrialOffer: C,
                startedPaymentFlowWithPaymentSources: o,
                setSelectedPlanId: i,
                defaultPlanId: s,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, eq.mH)(z.pe.TIER_2)),
                    t(z.gD.PREMIUM_GROUP_MONTH),
                    n(l ? A.pn.REVIEW : A.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: z.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: c, setSelectedSkuId: n }),
        isGift: d,
        priceOptions: r,
        showPromotionalGiftBanner: m,
    });
}
function im(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: a } = e,
        s = (0, io.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(t0.rQ, { titleTextVariant: "heading-lg/semibold", title: X.intl.string(X.t["r+SebU"]) }),
            s
                ? (0, l.jsx)(b.c, {
                      children: (0, l.jsx)("div", {
                          className: id.eE,
                          children: (0, l.jsx)(iu.yS, {
                              onSelectSku: (e) => t((0, eq.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(b.c, {
                      children: (0, l.jsx)("div", {
                          className: id.a2,
                          children: (0, l.jsx)(iu.Ay, {
                              onSelectSku: (e) => t((0, eq.mH)(e)),
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
    ih = n(137728);
function iE(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: s,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: o } = (0, t1.Pv)(),
        u = null != a ? (0, eq.EL)(a) : null,
        c = null != u ? (0, eq.RH)(u.planId) : null,
        d = null != u ? (0, eq.m6)(u.planId) : null,
        p = (0, lH.vT)({ isTrial: !1, isGift: o, selectedSkuId: i, startedPaymentFlowWithPaymentSources: s });
    return (
        es()(null != d, "Expected premium type"),
        (0, l.jsx)(ih.A, {
            premiumType: d,
            titleText: X.intl.string(X.t["7VcWW0"]),
            subtitleText: X.intl.format(X.t.Qk34Ik, { subscriptionName: c }),
            footer: (0, l.jsxs)(iC.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(ec.$, {
                        variant: "primary",
                        text: X.intl.string(X.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, lH.xT)(i, a)), t(A.pn.REVIEW)) : t(A.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(ec.$, { variant: "secondary", onClick: n, text: X.intl.string(X.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
var iA = n(750532);
let iy = [
        {
            key: A.pn.SKU_SELECT,
            renderStep: (e) => (0, l.jsx)(ip, { ...e }),
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
            key: A.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, l.jsx)(iE, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: A.pn.PLAN_SELECT,
            renderStep: (e) => (0, l.jsx)(is, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, lH.lp)(e) ? null : X.intl.string(X.t["r+SebU"])),
                sectionHeaderText: () => X.intl.string(X.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: A.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, l.jsx)(lF, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    iS = {
        CustomHeaderComponent: iA.kc,
        CHECKOUT_FLOW: u.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: iy,
        CHECKOUT_STEPS: { [A.pn.REVIEW]: n7.E },
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
                        giftContextProps: C = { isGift: !1, giftRecipient: null },
                        renderModalProps: h,
                        children: E,
                    } = e,
                    f = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                    y = (0, lI.Sq)() ? z.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: S, giftRecipient: P } = C;
                if (null != o && !Object.values(z.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, lx.tA)({ giftRecipient: P, isGift: S ?? !1 }),
                    _ = i.useMemo(
                        () =>
                            I
                                ? p.map((e) =>
                                      e.key === A.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : p,
                        [p, I],
                    ),
                    T = null != d ? d : f,
                    x = !S && null != T && T.isPurchasedExternally && null != T.paymentGateway;
                (0, lg.s)(T, () => h.onClose(), S ?? !1);
                let v = i.useMemo(() => [...z.oz], []);
                return x
                    ? null
                    : (0, l.jsx)(c.M, {
                          loadId: m,
                          activeSubscription: T,
                          stepConfigs: _,
                          skuIDs: v,
                          isGift: S,
                          defaultPlanId: y ?? n,
                          referralCode: a,
                          referralTrialOfferId: s,
                          unifiedCheckoutFlow: u.C.PREMIUM_CHECKOUT,
                          children: (0, l.jsx)(n6.Qt, { confirmationFooter: t, children: E }),
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
                    Z.A.isLoadedForPremiumSKUs() || t3.h.wait(() => (0, lP.zS)());
                }, []);
                let { selectedSkuId: u, purchaseState: c } = (0, h.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, S.bB)(),
                    { isGift: p } = (0, t1.Pv)(),
                    m = !p && u === z.pe.TIER_2 && !l_.Ct && !l_.KY && null == (0, lT.uM)(),
                    C = c === y.h.PURCHASING;
                return (0, l.jsx)(lv.A, {
                    isConfirmationStep: d === A.pn.CONFIRM && null == o && null == s,
                    isEligibleForWowMoment: m,
                    shouldPrefetchWowMoment: C,
                    children: n({
                        ...t,
                        onClose: a,
                        analyticsSubscriptionType: $.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: z.LE,
                        subscriptionTier: r,
                    }),
                });
            },
            tenantAnalyticsLocation: o.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(lf, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var iP = n(143582),
    iI = n(241524),
    i_ = n(19311),
    iT = n(4126);
let ig = "(max-width: 485px)";
var ix = n(702361),
    iv = n(938430);
function iN(e) {
    let { step: t, onClose: n } = e,
        i = (0, iI.A)("(max-height: 450px)");
    return t === A.pn.CONFIRM || t === A.pn.BENEFITS
        ? (0, l.jsx)("div", {})
        : (0, l.jsxs)("div", {
              className: eE()(ix.N1, tz.G),
              children: [
                  !i &&
                      (0, l.jsx)("div", {
                          className: ix.oZ,
                          "aria-hidden": "true",
                          children: (0, l.jsx)("img", {
                              src: "/assets/6a6a49ffafe96618.svg",
                              alt: "",
                              className: ix.F0,
                          }),
                      }),
                  (0, l.jsx)(tV.D, {
                      className: ix.G3,
                      onClick: () => n(),
                      "aria-label": X.intl.string(X.t.cpT0Cq),
                      children: (0, l.jsx)(tK.P, { size: "md", color: "currentColor", className: ix.ut }),
                  }),
              ],
          });
}
function iM(e) {
    let { icon: t, storeListingBenefits: n, skuBenefits: i, application: r, title: a, subtitle: s, description: o } = e;
    return null == r
        ? null
        : (0, l.jsx)("div", {
              className: ix.RP,
              children: (0, l.jsxs)(iT.$K, {
                  children: [
                      (0, l.jsx)(iT.KF, { application: r, asset: t }),
                      (0, l.jsx)(iT.kj, { children: a }),
                      (0, l.jsx)(iT.ri, {}),
                      (0, l.jsx)(iT.Mx, { title: s, description: o }),
                      (0, l.jsx)(iT.iH, { applicationId: r.id, storeListingBenefits: n, skuBenefits: i }),
                  ],
              }),
          });
}
function iR(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: ix.NV,
        children: [
            (0, l.jsx)("img", { src: iv, alt: "", width: 300, height: 126 }),
            (0, l.jsx)(ex.D, {
                className: ix.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: X.intl.format(X.t.wLFT6z, { tier: t }),
            }),
            (0, l.jsx)(eI.E, {
                className: ix.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: X.intl.format(X.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsx)(en.UX, {
                children: (0, l.jsx)(i_.Ay, {
                    onPrimary: n,
                    primaryCTA: i_.ti.CONTINUE,
                    primaryText: X.intl.string(X.t["JtWl+a"]),
                }),
            }),
        ],
    });
}
var ib = n(967198);
let [ij, iO] = (0, F.A)();
function iL(e) {
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
    return (0, l.jsx)(ij.Provider, { value: o, children: r });
}
n(938796);
var iw = n(266060),
    ik = n(163437),
    iD = n(701273),
    iU = n(425013);
function iG(e) {
    let { onConfirm: t, onCancel: n, title: i, subtitle: r, confirmCta: a, showOpenDiscord: s = !0 } = e;
    return (0, l.jsxs)("div", {
        className: iU.RP,
        children: [
            (0, l.jsx)(ex.D, { className: iU.RS, variant: "heading-lg/extrabold", children: i }),
            null != r
                ? (0, l.jsx)(eI.E, { className: iU.sT, variant: "text-sm/normal", color: "text-default", children: r })
                : null,
            (0, l.jsxs)("div", {
                className: iU.UD,
                children: [
                    s &&
                        (0, l.jsx)(ec.$, {
                            variant: "primary",
                            text: X.intl.string(X.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, iD.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, l.jsx)(ec.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, l.jsx)(ec.$, {
                            variant: "secondary",
                            text: X.intl.string(X.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
function iF(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, l.jsxs)("div", {
        className: iU.RP,
        children: [
            (0, l.jsx)(ex.D, {
                className: iU.RS,
                variant: "heading-lg/extrabold",
                children: X.intl.format(X.t.wLFT6z, { tier: n }),
            }),
            (0, l.jsx)(eI.E, {
                className: iU.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: X.intl.format(X.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, l.jsxs)("div", {
                className: iU.UD,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: iU.__invalid_openDiscordButton,
                        children: (0, l.jsx)(ec.$, {
                            variant: "primary",
                            text: X.intl.string(X.t["8L5bZG"]),
                            onClick: () => (0, iD.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, l.jsx)(ec.$, { variant: "secondary", text: X.intl.string(X.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
function iH(e) {
    let { handleStepChange: t, handleClose: n } = e,
        a = (0, iw.K)(),
        { subscriptionMetadataRequest: s } = iO(),
        { application: o } = (0, nn.V)(),
        u = (0, nl.S3)(),
        c = (0, iI.A)(ig),
        d = (0, r.bG)([_.A], () => _.A.getGuild(s?.guild_id)),
        p = i.useCallback(() => t(A.pn.REVIEW), [t]);
    if (null == u) return null;
    let m = (0, ik.bg)(u.flags);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(en.dZ, {
                children: c
                    ? (0, l.jsx)(iG, {
                          confirmCta: X.intl.string(X.t.PBHFSq),
                          onConfirm: p,
                          onCancel: n,
                          title: X.intl.format(X.t["6n6oXA"], { tier: u.name }),
                          subtitle: m
                              ? X.intl.string(X.t.lzAoKB)
                              : X.intl.formatToPlainString(X.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, l.jsx)(iM, {
                          icon: a?.thumbnail,
                          storeListingBenefits: a?.benefits,
                          application: o ?? void 0,
                          title: X.intl.format(X.t.haiCxc, { tier: u.name }),
                          subtitle: m ? X.intl.string(X.t.RvtbP5) : X.intl.string(X.t.zY39Zu),
                          description: m
                              ? X.intl.formatToPlainString(X.t.QCe4rY, { applicationName: o?.name })
                              : X.intl.string(X.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, l.jsx)(en.UX, {
                    children: (0, l.jsx)(i_.Ay, {
                        onBack: n,
                        backText: X.intl.string(X.t.TQBY1J),
                        onPrimary: p,
                        primaryCTA: i_.ti.CONTINUE,
                        primaryText: X.intl.string(X.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var iB = n(21161);
function iY(e) {
    let t,
        n,
        { handleClose: r, onSubscriptionConfirmation: a } = e,
        s = (0, iw.K)(),
        { application: o } = (0, nn.V)(),
        { readySlideId: u, updatedSubscription: c } = (0, h.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        d = (0, nl.S3)(),
        p = (0, iI.A)(ig),
        { createMultipleConfettiAt: m } = i.useContext(iB.x),
        C = d?.name ?? "";
    function E() {
        r(), a?.();
    }
    let f = u === A.pn.CONFIRM,
        y = (0, ik.bg)(d?.flags ?? 0),
        S =
            null != s && s.benefits.length > 0
                ? X.intl.formatToPlainString(X.t["+IQQVM"], { benefitCount: s.benefits.length })
                : null,
        { showBenefitsFirst: P } = iO();
    return (
        P
            ? (t = p
                  ? (0, l.jsx)(iF, { tierName: C, onConfirm: E, subscription: c })
                  : (0, l.jsx)(iR, { tierName: C, onConfirm: E, subscription: c }))
            : p
              ? (t = (0, l.jsx)(iG, {
                    title: X.intl.format(X.t.ea6tZr, { tierName: C }),
                    subtitle:
                        null != s && s.benefits.length > 0
                            ? X.intl.formatToPlainString(X.t.HNepft, { benefits: S })
                            : null,
                    onConfirm: E,
                    confirmCta: X.intl.string(X.t.nlkywz),
                }))
              : ((t =
                    null != s && null != o
                        ? (0, l.jsx)(iM, {
                              icon: s.thumbnail,
                              storeListingBenefits: s.benefits,
                              application: o,
                              title: X.intl.format(X.t["Q+qktS"], { tier: C }),
                              subtitle: X.intl.string(X.t.ECKxXU),
                              description: y
                                  ? X.intl.format(X.t["MAtQk/"], { applicationName: o?.name })
                                  : X.intl.format(X.t.vHkMF4, { tier: C }),
                          })
                        : (0, l.jsx)(w.A, {})),
                (n = (0, l.jsx)(i_.Ay, {
                    onPrimary: E,
                    primaryCTA: i_.ti.CONTINUE,
                    primaryText: X.intl.string(X.t["JtWl+a"]),
                }))),
        i.useEffect(() => {
            nt.Ay.useReducedMotion && f && m(window.innerWidth / 2, window.innerHeight / 2);
        }, [m, f]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(en.dZ, { children: [(0, l.jsx)(nc.A, {}), t] }),
                null != n && (0, l.jsx)(en.UX, { children: n }),
            ],
        })
    );
}
function iW(e) {
    let { initialPlanId: t, setAnalyticsData: n } = e,
        {
            selectedSkuId: r,
            setSelectedSkuId: a,
            setSelectedPlanId: s,
            priceOptions: o,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { hasFetchedRelatedSubscriptionPlans: u, subscriptionPriceOptionsLoading: c, displayCurrency: d } = (0, L.Jn)(),
        { setSubscriptionMetadataRequest: p, guildId: m, showBenefitsFirst: C } = iO(),
        E = (0, j.Hp)(),
        f = (0, k.A)(),
        y = (0, S.l)(),
        { isGift: P } = (0, t1.Pv)(),
        I = C ? A.pn.BENEFITS : A.pn.REVIEW,
        [_, T] = i.useState(!f || !u || c);
    return (i.useEffect(() => {
        T(!f || !u || c);
    }, [c, u, f]),
    i.useEffect(() => {
        null != m && p({ guild_id: m });
    }, [m, p]),
    i.useEffect(() => {
        s(t);
        let e = null != t ? Z.A.get(t) : null;
        _ ||
            E ||
            (n((t) => {
                let n = null != e ? (0, eq.y8)(e.id, !1, P, { paymentSourceId: o.paymentSourceId }) : void 0;
                return { ...t, subscription_plan_id: e?.id, price: n?.amount, regular_price: e?.price, currency: d };
            }),
            null != e && (a(e?.skuId), y(I)));
    }, [E, t, P, _, o, d, r, n, s, a, y, I]),
    _)
        ? (0, l.jsx)(w.A, {})
        : E
          ? (0, l.jsx)(O.oO, {})
          : null;
}
var iV = n(427858),
    iK = n(295413),
    iZ = n(424517);
let iq = (e) => {
        let { onReviewButtonClick: t, loading: n, disabled: l } = e;
        return {
            variant: "active",
            text: X.intl.string(X.t.YScQSF),
            dataTestId: "purchase",
            onClick: t,
            loading: n,
            disabled: l,
        };
    },
    iz = {
        CHECKOUT_FLOW: u.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(iW, { ...e }) },
        CustomHeaderComponent: function (e) {
            let { step: t, onClose: n } = e,
                r = i.useCallback(() => n(!1), [n]);
            return (0, l.jsx)(iN, { step: t, onClose: r });
        },
        STEPS_BEFORE_CHECKOUT: [
            {
                key: A.pn.BENEFITS,
                renderStep: (e) => (0, l.jsx)(iH, { ...e }),
                options: { useBreadcrumbLabel: () => X.intl.string(X.t["5LD2+B"]) },
            },
        ],
        CHECKOUT_STEPS: {
            [A.pn.REVIEW]: function (e) {
                let { handleStepChange: t, planGroup: n, openInvoiceId: r, analyticsData: a, analyticsLocation: s } = e,
                    {
                        purchaseState: o,
                        contextMetadata: u,
                        purchaseError: c,
                        activeSubscription: d,
                    } = (0, h.t4)((e) => ({
                        purchaseState: e.purchaseState,
                        contextMetadata: e.contextMetadata,
                        purchaseError: e.purchaseError,
                        activeSubscription: e.activeSubscription,
                    })),
                    { subscriptionMetadataRequest: m, showBenefitsFirst: C } = iO(),
                    E = C ? A.pn.BENEFITS : void 0,
                    f = (0, p.A)(),
                    S = (0, nl.S3)();
                if (null == f)
                    throw new n9.v({
                        message: "Expected plan to be selected",
                        extraSentryInformation: { selectedPlan: f },
                    });
                let P = i.useRef(null),
                    I = (0, ik.bg)(S?.flags ?? 0);
                i.useEffect(() => {
                    null != c && null != P.current && P.current.scrollIntoView({ behavior: "smooth" });
                }, [c]);
                let _ = i.useCallback(() => {
                    t(A.pn.ADD_PAYMENT_STEPS);
                }, [t]);
                return o === y.h.PURCHASING
                    ? (0, l.jsx)(w.A, {})
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(en.dZ, {
                                  children:
                                      null == d
                                          ? (0, l.jsx)(iZ._, {
                                                selectedPlan: f,
                                                verifiedPlanId: f.id,
                                                planGroup: n,
                                                handlePaymentSourceAdd: _,
                                                metadata: I ? void 0 : m,
                                            })
                                          : (0, l.jsx)(iV.A, {
                                                selectedPlan: f,
                                                verifiedPlanId: f.id,
                                                handlePaymentSourceAdd: _,
                                                planGroup: n,
                                                hasOpenInvoice: null != r,
                                                purchaseState: o,
                                            }),
                              }),
                              (0, l.jsx)(en.UX, {
                                  children: (0, l.jsx)(iK.U, {
                                      resolveTenantReviewButtonProps: iq,
                                      onBack: () => null != E && t(E),
                                      handleStepChange: t,
                                      postPurchaseStep: A.pn.CONFIRM,
                                      analyticsLocation: s,
                                      baseAnalyticsData: a,
                                      flowStartTime: u.startTime,
                                      planGroup: n,
                                      openInvoiceId: r,
                                      metadata: I ? void 0 : m,
                                      backButtonEligible: !!C || void 0,
                                      disablePurchase: m?.guild_id == null && !I,
                                      onPaymentSourceAdd: _,
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
                return (0, l.jsx)(iL, {
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
                                    (tb.hP(),
                                    (0, iP.f5)(r),
                                    null != s && s(),
                                    null != r && (l || ib.A.getGuildId() !== r) && (0, nz.pX)($.BVt.CHANNEL(r)));
                        },
                        [a, s, l, r],
                    );
                return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
            },
            tenantAnalyticsLocation: o.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(iY, { ...e }) },
    };
var iQ = n(237412),
    i$ = n(132500),
    iX = n(869038),
    iJ = n(852218),
    i0 = n(7133),
    i1 = n(83617);
let [i2, i3] = (0, F.A)();
function i4(e) {
    let { code: t, onClose: n, children: s } = e,
        o = (0, r.bG)([g.A], () => g.A.getMostRecentPremiumTypeSubscription()),
        c = (0, r.bG)([g.A], () => g.A.hasFetchedMostRecentPremiumTypeSubscription()),
        d = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        [p, m] = i.useState(!1),
        [C, E] = i.useState(null),
        [f, P] = i.useState(null),
        [_, T] = i.useState(!1),
        [x, v] = i.useState(!1);
    i.useEffect(() => {
        p ||
            (0, lo.GM)(t, !1, !0)
                .then((e) => {
                    let t = i0.A.createFromServer(e);
                    E(t), m(!0), T(t.promotion?.promotionType === iJ.pt.THIRD_PARTY_DIRECT_FULFILLMENT);
                })
                .catch((e) => {
                    P(e), m(!0);
                }),
            c || (0, tb.I8)();
    }, [t, c, p]);
    let N = (0, U._V)(),
        { paymentSources: M, paymentSourceId: R, paymentAuthenticationState: b, setIsSubmittingCurrentStep: j } = N,
        O = (0, S.l)(),
        w = (0, S.bB)(),
        k = (0, h.t4)((e) => e.setPurchaseState),
        G = (0, h.t4)((e) => e.setPurchaseError),
        F = (0, h.t4)((e) => e.purchaseState),
        { displayCurrency: H } = (0, L.Jn)(),
        B = (0, eO.sw)(),
        Y = C?.subscriptionPlan,
        W = C?.promotion,
        V = C?.subscriptionTrial,
        K = null != Y ? (0, i1._w)(Y, R, !1) : [],
        Z = B?.currency ?? H ?? K[0],
        q = i.useMemo(() => (null != R ? { paymentSourceId: R, currency: Z } : { currency: Z }), [R, Z]),
        [z] = (0, a.A)(() => [(0, i$.A)()]),
        Q = i.useMemo(
            () => ({
                load_id: z,
                location: $.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                subscription_type: $.rzx.PREMIUM,
                payment_type: e5.fr[e5.VV.SUBSCRIPTION],
                subscription_plan_id: Y?.id,
                sku_id: Y?.skuId,
                checkout_flow: u.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
            }),
            [z, Y?.id, Y?.skuId],
        ),
        X = i.useCallback(() => {
            n?.(F === y.h.COMPLETED);
        }, [n, F]),
        J = i.useCallback(async () => {
            let e = (0, el.W)(M, R);
            if (null == e) return !1;
            j(!0), G(null), k(y.h.PURCHASING);
            try {
                return (
                    await iX.A.redeemGiftCode({ code: t, options: { paymentSource: e } }),
                    k(y.h.COMPLETED),
                    D.default.track($.HAw.PAYMENT_FLOW_COMPLETED, { ...Q }),
                    !0
                );
            } catch (t) {
                return (
                    k(y.h.FAIL),
                    G(t),
                    D.default.track($.HAw.PAYMENT_FLOW_FAILED, {
                        ...Q,
                        payment_error_code: t?.code,
                        payment_source_id: e.id,
                    }),
                    !1
                );
            } finally {
                j(!1);
            }
        }, [Q, t, R, M, j, G, k]),
        ee = i.useRef(!1),
        et = i.useCallback(() => {
            ee.current ||
                ((ee.current = !0),
                J()
                    .then((e) => {
                        O(e ? A.pn.CONFIRM : A.pn.REVIEW);
                    })
                    .finally(() => {
                        ee.current = !1;
                    }));
        }, [J, O]);
    return (
        (0, I.QR)(b),
        (0, I.b)(w, b, O, k, !0, et),
        (0, l.jsx)(i2.Provider, {
            value: {
                code: t,
                giftCode: C,
                plan: Y,
                promotion: W,
                trial: V,
                isDirectFulfillment: _,
                hasResolvedGiftCode: p,
                giftCodeResolveError: f,
                hasFetchedMostRecentPremiumTypeSubscription: c,
                recentSubscription: o,
                premiumSubscription: d,
                paymentModalArgs: N,
                priceOptions: q,
                analyticsData: Q,
                handleClose: X,
                redeemPromotion: J,
                confirmedUpgrade: x,
                setConfirmedUpgrade: v,
            },
            children: s,
        })
    );
}
var i6 = n(830215),
    i7 = n(264779),
    i5 = n(636745),
    i8 = n(554632);
function i9(e) {
    let { user: t, code: n, className: i } = e;
    return (0, l.jsx)(eI.E, {
        className: eE()(i, i5.iZ),
        variant: "text-md/normal",
        children: X.intl.format(X.t["TcA3+W"], {
            avatarHook: function (e, n) {
                return (0, l.jsx)(
                    lu.eu,
                    {
                        className: i5.FL,
                        size: nS._3.SIZE_24,
                        src: t.getAvatarURL(null, 24),
                        "aria-label": nk.Ay.getUserTag(t, { decoration: "never" }),
                    },
                    n,
                );
            },
            tag: nk.Ay.getUserTag(t),
            logoutHook: () => {
                i6.A.logout("inbound_promotion_redemption_modal", $.BVt.BILLING_PROMOTION_REDEMPTION(n));
            },
        }),
    });
}
function re(e) {
    let { promotion: t, code: n, isDirectFulfillment: i } = e,
        a = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        s = (0, l0.Ay)(),
        o = (0, i7.WD)(t.id, s);
    return (0, l.jsxs)("div", {
        className: i5.rN,
        children: [
            (0, l.jsxs)("div", {
                className: i5.u5,
                children: [
                    (0, l.jsx)("img", { alt: "", src: o, className: i5.hb }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(ex.D, {
                                variant: "heading-xl/bold",
                                className: i5.DD,
                                children: t.inboundHeaderText,
                            }),
                            (0, l.jsx)(eI.E, {
                                variant: "text-sm/normal",
                                className: i5.G3,
                                children: t.inboundBodyText,
                            }),
                        ],
                    }),
                ],
            }),
            i || null == a ? null : (0, l.jsx)(i9, { className: i5.KZ, user: a, code: n }),
        ],
    });
}
function rt(e) {
    let { title: t, bodyText: n, helpCenterLink: r, showUser: a = !1, user: s, code: o, handleClose: u } = e,
        c = i.useMemo(() => ({ text: X.intl.string(X.t.BddRzS), onClick: u }), [u]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: i5.t4,
                children: [
                    (0, l.jsx)("img", { alt: "", src: i8, className: i5.M6 }),
                    (0, l.jsx)(ex.D, { variant: "heading-lg/semibold", className: i5.DD, children: t }),
                    (0, l.jsx)(eI.E, { variant: "text-md/normal", className: i5.G3, children: n }),
                    null != r
                        ? (0, l.jsx)(eI.E, {
                              variant: "text-md/normal",
                              className: i5.G3,
                              children: X.intl.format(X.t["4uSp2y"], { helpCenterLink: r }),
                          })
                        : null,
                    a && null != s ? (0, l.jsx)(i9, { className: i5.EF, user: s, code: o }) : null,
                ],
            }),
            (0, l.jsx)(C.lo, { primaryButtonProps: c }),
        ],
    });
}
function rn(e) {
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
            recentSubscription: C,
        } = i3(),
        h = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
        E = (0, j.Hp)(),
        f = !d || !m,
        y = (function (e) {
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
                    title: X.intl.string(X.t.ARIsMA),
                    body: X.intl.string(X.t.oDWkjN),
                    showUser: !0,
                    errorCode: z.JR.USER_NOT_VERIFIED,
                };
            if (null != l && l.code === $.t02.INVALID_GIFT_REDEMPTION_PREVIOUSLY_OWNED)
                return {
                    title: X.intl.string(X.t.BHxy59),
                    body: X.intl.string(X.t["1wokFq"]),
                    errorCode: z.JR.PREVIOUS_SUBSCRIBER,
                };
            if (null == n)
                return {
                    title: X.intl.string(X.t.ARIsMA),
                    body:
                        null != l && l.code === $.t02.INVALID_GIFT_REDEMPTION_INCORRECT_USER
                            ? X.intl.string(X.t.S8TNKh)
                            : X.intl.string(X.t["1AceQR"]),
                    errorCode: z.JR.NO_CODE_BODY,
                };
            if (null != l || null == a || null == s || null == r)
                return {
                    title: X.intl.string(X.t.ARIsMA),
                    body: X.intl.string(X.t["3u+6q7"]),
                    errorCode: z.JR.NO_PROMOTION,
                };
            if (n.isClaimed)
                return {
                    title: X.intl.string(X.t.ARIsMA),
                    body: X.intl.string(X.t.u9IQuM),
                    errorCode: z.JR.CODE_CLAIMED,
                };
            if (null == i) return null;
            let o = (0, eq.EL)(i)?.planId;
            return null != o && i.status === $.Dmq.ACTIVE && eq.Ay.getPremiumType(o) === z.PremiumTypes.TIER_2
                ? {
                      title: X.intl.string(X.t.BHxy59),
                      body: X.intl.formatToPlainString(X.t.wpwuoV, {
                          months: s.intervalCount,
                          planName: (0, eq.RH)(r.id),
                      }),
                      errorCode: z.JR.EXISTING_SUBSCRIBER,
                  }
                : null;
        })({ user: h, giftCode: s, giftCodeResolveError: p, recentSubscription: C, plan: o, promotion: u, trial: c });
    return (i.useEffect(() => {
        f ||
            D.default.track($.HAw.INBOUND_PROMOTION_ELIGIBILITY_CHECKED, {
                is_eligible: null == y && !E,
                error_code: null != y ? y.errorCode : E ? z.JR.BLOCKED_PAYMENT : null,
                promotion_id: s?.promotion?.id,
            });
    }, [f, y, E, s]),
    i.useEffect(() => {
        f || null != y || E || t(A.pn.PROMOTION_INFO);
    }, [f, y, E, t]),
    f)
        ? (0, l.jsx)(w.A, {})
        : null != y
          ? (0, l.jsx)(rt, {
                title: y.title,
                bodyText: y.body,
                helpCenterLink: u?.inboundHelpCenterLink ?? "",
                showUser: y.showUser,
                handleClose: n,
                user: h ?? void 0,
                code: a,
            })
          : E
            ? (0, l.jsx)(O.oO, {})
            : null;
}
function rl(e) {
    let { plan: t, isDirectFulfillment: n, paymentModalArgs: i, handleClose: r } = i3();
    es()(null != t, "Missing plan");
    let { paymentSources: a, paymentSourceId: s } = i,
        o = (0, el.g)(a, s);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(en.dZ, {
                children: (0, l.jsx)(la.Ay, { hideClose: !0, planId: t.id, onClose: r, paymentSourceType: o }),
            }),
            n
                ? (0, l.jsx)(en.UX, {
                      children: (0, l.jsx)(lk.H, {
                          actions: [{ text: X.intl.string(X.t.UQvCf7), variant: "primary", onClick: r, size: "md" }],
                      }),
                  })
                : null,
        ],
    });
}
function ri(e) {
    let { handleStepChange: t } = e,
        { promotion: n, code: i, isDirectFulfillment: r } = i3();
    return (
        es()(null != n, "Missing promotion"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(en.dZ, { children: (0, l.jsx)(re, { promotion: n, code: i, isDirectFulfillment: r }) }),
                (0, l.jsx)(en.UX, {
                    children: (0, l.jsx)(C.lo, {
                        primaryButtonProps: { text: X.intl.string(X.t.PDTjLN), onClick: () => t(A.pn.REVIEW) },
                    }),
                }),
            ],
        })
    );
}
var rr = n(732159),
    ra = n(944355),
    rs = n(262427),
    ro = n(299301),
    ru = n(134638);
let rc = { headerBadgePreset: "trial" };
function rd(e) {
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
                    ? [X.intl.string(e8.default.R0cZsM), void 0]
                    : [X.intl.string(e8.default.R0cZsM), (0, ez.$g)(0, n.currency)],
            [n],
        );
    if (null == n) return (0, l.jsx)(eJ.Ed, { shouldShowUnifiedHeader: !0 });
    let p = a
            ? [{ key: "fractional-premium-notice", directContent: (0, l.jsx)(rp, { fractionalPremiumInfo: s }) }]
            : null,
        m = (0, l.jsx)(rm, { plan: t, renewalInvoicePreview: n }),
        C = (0, l.jsx)(rC, { renewalInvoicePreview: n, subscriptionTrial: r });
    return (0, l.jsx)(eJ.T_, {
        shouldShowGlobalNotices: !0,
        headerBadgeConfig: rc,
        upperInlineNoticeProps: p,
        purchaseItemContent: m,
        subscriptionDetailsContent: C,
        invoiceSummaryContent: null,
        paymentMethodContent: o,
        legalContent: u,
        invoiceTotalDueLabel: c,
        invoiceTotalDueValue: d,
        promotionalNoticeContent:
            null != r &&
            (0, l.jsx)(rs.J, {
                text: X.intl.format(X.t.A1MiZN, { months: r.intervalCount, planName: (0, eq.RH)(t.id) }),
            }),
    });
}
function rp(e) {
    let { fractionalPremiumInfo: t } = e,
        n = (0, eF.NQ)({ fractionalPremiumInfo: t, variant: eF.uA.TRIAL });
    return null != n && "" !== n ? (0, l.jsx)(eo.w, { type: "info", children: n }) : null;
}
function rm(e) {
    let { plan: t, renewalInvoicePreview: n } = e;
    return (0, l.jsx)(ru._, {
        type: ro.N$.PREMIUM_WITH_TRIAL,
        invoicePreview: n,
        subscriptionPlan: t,
        isPrepaidPaymentSource: !1,
    });
}
function rC(e) {
    let { renewalInvoicePreview: t, subscriptionTrial: n } = e;
    if (null == t) return (0, l.jsx)(eM.y, {});
    let i = (0, e4.Gj)(null, t, n, { isSubscriptionUpdate: !1 });
    return (0, l.jsx)(ra._D, { ...i, defaultExpanded: !0 });
}
let rh = [...z.oz],
    rE = [
        {
            key: A.pn.PROMOTION_INFO,
            renderStep: (e) => (0, l.jsx)(ri, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    ],
    rf = {
        CHECKOUT_FLOW: u.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        CUSTOM_PREDICATE_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rn, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
        STEPS_BEFORE_CHECKOUT: rE,
        CHECKOUT_STEPS: {
            [A.pn.REVIEW]: function (e) {
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
                        handleClose: E,
                    } = i3();
                es()(null != a && null != s, "Missing plan or trial");
                let { paymentSources: f, paymentSourceId: y, setPaymentSourceId: S, isSubmittingCurrentStep: P } = c,
                    I = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
                    { analyticsLocations: _ } = (0, eb.Ay)(),
                    T = (0, h.t4)((e) => e.hasAcceptedTerms),
                    x = (0, ej.A)(),
                    { immediateDelivery: v } = (0, e0.U)(),
                    [N, M] = (0, ew.YV)({
                        items: [{ planId: a.id, quantity: 1 }],
                        renewal: !0,
                        paymentSourceId: y,
                        code: n,
                        subscriptionId: I?.id,
                        analyticsLocations: _,
                        analyticsLocation: $.ThZ.INBOUND_PARTNER_PROMOTION_REDEMPTION_MODAL,
                    });
                (0, eO.F0)(N, M);
                let R = (0, eO.sw)(),
                    b = i.useCallback(async () => {
                        null == I || p || null == s || null == o
                            ? (await d()) && t(A.pn.CONFIRM)
                            : (0, tG.openModal)((e) => {
                                  let n;
                                  if (null == R) n = (0, l.jsx)(eM.y, { className: i5.wG });
                                  else {
                                      let e = (0, eq.y8)(a.id, !1, !1, u);
                                      n = (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(eI.E, {
                                                  className: i5.ex,
                                                  variant: "text-md/normal",
                                                  children: X.intl.format(X.t.DLsu0k, {
                                                      lineItemsHook: function (e, t) {
                                                          return (0, l.jsx)(
                                                              "ul",
                                                              {
                                                                  children: I.items.map((e) => {
                                                                      let t = z.hd[e.planId],
                                                                          n = X.intl.formatToPlainString(X.t.G0EnAP, {
                                                                              quantity: e.quantity,
                                                                              lineItem: t.name,
                                                                          });
                                                                      return (0, l.jsx)(
                                                                          "li",
                                                                          { children: n },
                                                                          `${I.id}-${e.planId}`,
                                                                      );
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      },
                                                      newPlanName: z.hd[a.id].name,
                                                  }),
                                              }),
                                              (0, l.jsx)(eI.E, {
                                                  className: i5.ex,
                                                  variant: "text-sm/normal",
                                                  children: X.intl.format(X.t.KHvyu5, {
                                                      newPlanName: z.hd[a.id].name,
                                                      trialMonths: s.intervalCount,
                                                      helpCenterLink:
                                                          o.inboundHelpCenterLink ?? eK.A.getArticleURL($.MVz.BILLING),
                                                      planPrice: (0, ez.$g)(e.amount, R.currency),
                                                  }),
                                              }),
                                          ],
                                      });
                                  }
                                  return (0, l.jsx)(rr.ConfirmModal, {
                                      onConfirm: async () => {
                                          m(!0), (await d()) && t(A.pn.CONFIRM);
                                      },
                                      title: X.intl.string(X.t.MaZ28z),
                                      cancelText: X.intl.string(X.t["ETE/oC"]),
                                      confirmText: X.intl.string(X.t["wfx/Hp"]),
                                      ...e,
                                      variant: "primary",
                                      children: n,
                                  });
                              });
                    }, [t, I, p, s, o, a, u, R, d, m]),
                    j = (0, le.kc)(),
                    O = (0, e$.iB)({
                        checkoutPaymentSources: j,
                        paymentSourceId: y,
                        location: "InboundPromotionReviewStep",
                    }),
                    L = (0, V.Y)(),
                    w = (0, el.W)(f, y),
                    k = i.useMemo(
                        () => ({
                            prependOption:
                                0 === Object.keys(f).length ? { label: X.intl.string(X.t.iA5vA1), value: null } : null,
                            isTrial: !0,
                        }),
                        [f],
                    );
                if (null != M && null == R)
                    return (0, l.jsx)(rt, {
                        title: X.intl.string(X.t.ARIsMA),
                        bodyText: X.intl.string(X.t["3u+6q7"]),
                        helpCenterLink: o?.inboundHelpCenterLink ?? "",
                        handleClose: E,
                        user: void 0,
                        code: n,
                    });
                if (!L || null == R) return (0, l.jsx)(eM.y, {});
                let D = (0, l.jsx)(eX.N, {
                        setPaymentSourceId: S,
                        paymentSourceId: y,
                        location: "InboundPromotionReview",
                        label: X.intl.string(X.t["mmDvV+"]),
                        additionalPaymentSourceDropdownProps: k,
                        onPaymentSourceAdd: () => t(A.pn.ADD_PAYMENT_STEPS),
                        hideCurrencySelect: !0,
                    }),
                    { renewalPrice: U } = (0, e4.Go)(R, a, null),
                    G = X.intl.formatToPlainString(X.t.BQPav6, { planPremiumType: eq.Ay.getDisplayName(a.id) }),
                    F = (0, l.jsx)(ra._P, {
                        variant: {
                            type: ra.I0.SubscriptionTrial,
                            purchaseButtonText: G,
                            totalDue: 0,
                            renewalPrice: U,
                            currency: R.currency,
                            interval: a.interval,
                            intervalCount: a.intervalCount,
                            startDate: (0, e7.de)({ renewalInvoice: R, isSubscriptionUpdate: !1 }),
                        },
                        paymentSourceType: (0, el.W)(f, y)?.type ?? null,
                        immediateDelivery: v,
                    }),
                    H = null;
                return (
                    null == w ? (H = X.intl.string(X.t.L7jbQV)) : T || (H = X.intl.string(X.t.XdvBLS)),
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(en.dZ, {
                                children: [
                                    (0, l.jsx)(nc.A, {}),
                                    (0, l.jsx)(rd, {
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
                                children: (0, l.jsx)(C.lo, {
                                    onBackClick: () => t(A.pn.PROMOTION_INFO),
                                    primaryButtonProps: {
                                        text: G,
                                        tooltipText: H ?? void 0,
                                        disabled: null == w || !w.canRedeemTrial() || O || !T,
                                        loading: P,
                                        onClick: () => {
                                            if (null != w && T) return b();
                                        },
                                        variant: (0, i_.CY)(i_.ti.PURCHASE),
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
                    skuIDs: rh,
                    loadId: i,
                    unifiedCheckoutFlow: u.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
                    children: (0, l.jsx)(n6.Qt, { children: (0, l.jsx)(i4, { code: t, onClose: a, children: s }) }),
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
                return n({ ...t, shakeWhilePurchasing: !0, tenantManagesPaymentAuth: !0 });
            },
        },
        CustomHeaderComponent: function (e) {
            let { step: t } = e,
                { plan: n, handleClose: i } = i3(),
                r = (0, h.t4)((e) => e.purchaseState);
            return (0, l.jsx)(iQ.A, {
                enablePremiumBrandRefresh: !0,
                forceBrandRefreshHeader: !0,
                premiumType: n?.premiumSubscriptionType ?? z.PremiumTypes.TIER_2,
                className: i5.X9,
                currentStep: t,
                purchaseState: r,
                hideCloseButton: !0,
                onClose: i,
            });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, l.jsx)(rl, { ...e }),
            options: { renderHeader: !0, modalSizeGetter: () => "md" },
        },
    };
var rA = n(989553);
function ry(e) {
    let { handleClose: t } = e,
        n = (0, h.t4)((e) => e.selectedSkuId),
        { application: i } = (0, nn.V)(),
        r = (0, nl.gU)(),
        { isGift: a, giftRecipient: s } = (0, t1.Pv)();
    es()(null != n, "Expected selectedSkuId"), es()(null != i, "Expected application");
    let o = r[n];
    es()(null != o, "Expected sku");
    let u = a
        ? X.intl.formatToPlainString(X.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : X.intl.formatToPlainString(X.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(en.dZ, {
        children: [
            (0, l.jsx)(nc.A, {}),
            (0, l.jsxs)("div", {
                className: rA.EL,
                children: [
                    (0, l.jsx)(ex.D, { variant: "heading-xxl/bold", className: rA.RS, children: "Success!" }),
                    (0, l.jsx)(eI.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: rA.yF }),
                    (0, l.jsx)(ec.$, { onClick: t, text: X.intl.string(X.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var rS = n(67480),
    rP = n(328968),
    rI = n(371794),
    r_ = n(565756);
A.pn.GIFT_CUSTOMIZATION;
let rT = {
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            r = i.useCallback(() => n(!1), [n]);
        return (0, l.jsx)(iN, { step: t, onClose: r });
    },
    CHECKOUT_FLOW: ep.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [A.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: a } = (0, t1.Pv)(),
                s = (0, h.t4)((e) => e.selectedSkuId),
                o = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                u = (0, r.bG)([rS.A], () => (null != s ? rS.A.get(s) : null), [s]),
                c = nY(),
                d = (0, r.bG)([rP.A], () => (null != s ? rP.A.getForSKU(s) : null), [s]),
                p =
                    d?.headerBackground != null && u?.applicationId != null
                        ? (0, rI.YE)(u.applicationId, d.headerBackground, 256)
                        : void 0;
            async function m(e, t) {}
            let C = null == a || a.id === o?.id || t.length > z.Jo,
                E = i.useMemo(() => ({ disabled: C }), [C]);
            return (0, l.jsx)(ep.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: ep.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, l.jsxs)("div", {
                        className: r_.P6,
                        children: [
                            u?.name != null &&
                                (0, l.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                            null != p && (0, l.jsx)("img", { src: p, alt: u?.name ?? "", className: r_.LC }),
                        ],
                    }),
                renderRightColumn: function () {
                    return (0, l.jsxs)("div", {
                        className: r_.P6,
                        children: [
                            (0, l.jsx)(nD, { recipients: c, selectedSkuId: s, validateSelectedGift: m }),
                            (0, l.jsx)(nK.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: r_.iX,
                                innerClassName: r_.pt,
                            }),
                        ],
                    });
                },
                primaryCTAButtonProps: E,
            });
        },
        [A.pn.REVIEW]: tU.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(ry, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: o.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var rg = n(429913),
    rx = n(733391),
    rv = n(871123),
    rN = n(26594),
    rM = n(510022),
    rR = n(317560),
    rb = n(275256),
    rj = n(910200),
    rO = n(208733);
function rL(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eb.Ay)(),
        { selectedSkuId: r, entitlementsGranted: a } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, nn.V)(),
        o = (0, nl.gU)(),
        { isGift: u, giftRecipient: c } = (0, t1.Pv)();
    es()(null != r, "Expected selectedSkuId"), es()(null != s, "Expected application");
    let d = o[r];
    es()(null != d, "Expected sku");
    let p = a.find((e) => e.sku_id === r),
        m = (0, rN.G)(p, { isGift: u });
    return (i.useEffect(() => {
        u || ((0, rR.j)(), t(), (0, rM.n)({ sku: d, application: s, analyticsLocations: n, entitlement: p }));
    }, [u, d, s, t, n, p]),
    u)
        ? (0, l.jsxs)(en.dZ, {
              children: [
                  (0, l.jsx)(nc.A, {}),
                  (0, l.jsxs)("div", {
                      className: rO.EL,
                      children: [
                          (0, l.jsx)("div", {
                              className: rO.KD,
                              children: (0, l.jsx)(rb.default, {
                                  imageUrl: (0, rv.fq)(d) ?? void 0,
                                  backgroundImageUrl: (0, rv.xf)(d),
                                  altText: d.name,
                                  rewardGraphic: m?.graphic,
                              }),
                          }),
                          (0, l.jsx)(ex.D, {
                              variant: "heading-xl/semibold",
                              className: rO.RS,
                              children: X.intl.string(X.t["5glWta"]),
                          }),
                          (0, l.jsx)(eI.E, {
                              variant: "text-md/normal",
                              children: X.intl.formatToPlainString(X.t["2VjPTw"], {
                                  itemName: d.name,
                                  giftRecipient: c?.username ?? "your recipient",
                              }),
                          }),
                          null != m &&
                              (0, l.jsx)("div", {
                                  className: rO.Is,
                                  children: (0, l.jsx)(rj.O0, { Icon: m.Icon, text: m.text }),
                              }),
                          (0, l.jsx)("div", {
                              className: rO.UD,
                              children: (0, l.jsx)(ec.$, {
                                  onClick: t,
                                  text: X.intl.string(X.t.cpT0Cq),
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
var rw = n(889137),
    rk = n(742158),
    rD = n(313961),
    rU = n(238017),
    rG = n(650588),
    rF = n(993046),
    rH = n(763827),
    rB = n(403362),
    rY = n(832163),
    rW = n(31969),
    rV = n(44724),
    rK = n(980094),
    rZ = n(366523),
    rq = n(806931),
    rz = n(107610);
function rQ(e) {
    let { handleClose: t, sku: n, application: r } = e,
        a = i.useCallback(() => {
            (0, rV.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = i.useCallback(() => {
            t();
            let e = rY.A.getStorefrontState(n.applicationId)?.activePage;
            (0, rv.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: r?.guildId,
                skuId: n.id,
            }) ||
                ((0, tG.closeAllModals)(),
                (0, rV.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, r]);
    return (0, l.jsx)("div", {
        className: rz.$O,
        children: (0, l.jsx)(ed.Q, {
            text: X.intl.string(X.t.ImioFL),
            onMouseDown: a,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let r$ = {
    CHECKOUT_FLOW: ep.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [A.pn.GIFT_CUSTOMIZATION]: (e) => {
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
                            soundEffect: C,
                            setEmojiConfetti: E,
                            setSoundEffect: f,
                            giftingOrigin: A,
                            additionalUserIds: y,
                        } = (0, t1.Pv)(),
                        S = (0, h.t4)((e) => e.selectedSkuId),
                        { application: P } = (0, nn.V)(),
                        I = (0, r.bG)([eV.default], () => eV.default.getCurrentUser()),
                        _ =
                            ((t = I?.id),
                            (n = nY()),
                            (a = (function (e) {
                                let t = (0, r.bG)([rH.A], () => (rH.A.isConnected() ? rH.A.getChannelId() : null)),
                                    [n, l] = i.useState([]);
                                return (
                                    i.useEffect(() => {
                                        let n = null != t ? rD.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, rq.Xw)(t) && !(0, rq.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, rq.Ay)(e) && !(0, rq.Ay)(t)
                                                ? -1
                                                : (0, rq.Ay)(t) && !(0, rq.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (s = (0, r.yK)([eV.default], () => y?.map(eV.default.getUser).filter(rB.Vq) ?? [], [y])),
                            i.useMemo(
                                () =>
                                    nG().uniqWith(
                                        [...(null != p ? [p] : []), ...s, ...a, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [p, s, a, n],
                            )),
                        T = (0, r.bG)([rS.A], () => (null != S ? rS.A.get(S) : null), [S]),
                        { userPrice: g } = (0, rF.CD)({ sku: T, priceSetAssignmentPurchaseType: $.lid.GIFT }),
                        x = (0, rW.F)("gift_customization", { applicationId: P?.id, skuId: T?.id }),
                        v = (0, rv.fq)(T),
                        N = (0, rv.xf)(T);
                    async function M(e, t) {}
                    let R = (e) => {
                            null != f && f(null == e ? void 0 : e);
                        },
                        b = () =>
                            (0, l.jsxs)("div", {
                                className: rz.mT,
                                children: [
                                    null != v &&
                                        (0, l.jsx)(rZ.A, {
                                            containerClassName: rz.T3,
                                            cardImage: v,
                                            cardBackgroundImage: N,
                                            altText: T?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, l.jsxs)("div", {
                                        className: rz._T,
                                        children: [
                                            (0, l.jsx)(rG.A, { sound: C, onSelect: R }),
                                            (0, l.jsx)(rU.A, {
                                                setEmojiConfetti: E,
                                                emojiConfetti: null == m ? void 0 : m,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        j = () =>
                            (0, l.jsxs)("div", {
                                className: rz.Tc,
                                children: [
                                    null != p && (A === z.vQ.USER_PROFILE_WISHLIST || A === z.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, l.jsx)(nq.Z, { giftRecipient: p })
                                        : (0, l.jsx)(nD, { selectedSkuId: S, validateSelectedGift: M, recipients: _ }),
                                    (0, l.jsx)(nK.A, {
                                        onTextChange: (e) => d?.(e),
                                        pendingText: c,
                                        currentText: c,
                                        disableThemedBackground: !0,
                                        className: rz.iX,
                                        innerClassName: rz.pt,
                                    }),
                                    null == T
                                        ? null
                                        : (0, l.jsxs)("div", {
                                              className: rz.AN,
                                              children: [
                                                  (0, l.jsx)(rk.z, {
                                                      className: rz.jr,
                                                      children: X.intl.string(X.t.PpoJzt),
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: rz.Wx,
                                                      children: [
                                                          (0, l.jsx)("div", {
                                                              className: rz.Xb,
                                                              children:
                                                                  null != T &&
                                                                  null != v &&
                                                                  (0, l.jsx)(rZ.A, {
                                                                      containerClassName: rz.Iy,
                                                                      cardImage: v,
                                                                      cardBackgroundImage: N,
                                                                      altText: T.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, l.jsxs)("div", {
                                                              className: rz.vz,
                                                              children: [
                                                                  null != P && (0, l.jsx)(rK.Q, { application: P }),
                                                                  (0, l.jsx)(eI.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: T.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, l.jsx)(eI.E, {
                                                              variant: "text-md/semibold",
                                                              children: g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != T &&
                                        (0, rv.Ri)(T) &&
                                        (0, l.jsx)(eo.w, { type: "info", children: X.intl.string(X.t.lORYb6) }),
                                    null != x &&
                                        (0, l.jsx)(rj.O0, {
                                            Icon: x.Icon,
                                            text: x.text,
                                            endDatetime: x.endsAt,
                                            tooltip: x.tooltip,
                                        }),
                                    null != T && (0, l.jsx)(rQ, { handleClose: u, sku: T, application: P }),
                                ],
                            });
                    return {
                        renderStepBody: function () {
                            return (0, l.jsxs)("div", { className: rz.Du, children: [b(), j()] });
                        },
                        getLeftColumnComponent: b,
                        getRightColumnComponent: j,
                        onStepChange: o,
                        onBackClick: u,
                        disabled: null == p || p.id === I?.id || c.length > z.Jo,
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
        [A.pn.REVIEW]: tU.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, l.jsx)(rL, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: r, applicationId: a, isGift: s, skuId: o, ...u } = e;
            return (
                !(function (e) {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, rg.h)(t);
                    i.useEffect(() => {
                        null == l ||
                            null == n ||
                            rP.A.isFetchingForSKU(n) ||
                            null != rS.A.get(n) ||
                            (0, rx.Pp)(l.id, n);
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
            n = (0, rw.YW)(t)
                .with(A.pn.GIFT_CUSTOMIZATION, () => X.intl.string(X.t["JCFN/y"]))
                .with(A.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => X.intl.string(X.t.lDbi6H))
                .with(A.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, l.jsx)(t0.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var rX = n(977445),
    rJ = n(52635),
    r0 = n(211287),
    r1 = n(855104),
    r2 = n(623373),
    r3 = n(739508),
    r4 = n(310829),
    r6 = n(715054);
(0, i$.A)();
var r7 = n(457008),
    r5 = n(145659);
n(322076);
var r8 = n(318254),
    r9 = n(132198),
    ae = n(120992),
    at = n(630934),
    an = n(319820),
    al = n(200766);
function ai(e) {
    let { sku: t, orbPriceAmount: n } = e,
        { product: i, isSocialLayerGameItem: r } = (0, an.AO)({ sku: t }),
        a = (0, at.oO)(i);
    r ? (a = X.intl.string(e8.default.qwSlCO)) : (0, r2.Ab)(i) && (a = X.intl.string(X.t["0TmQRG"]));
    let s = (0, at.dL)(t),
        o = (0, t7.EZ)(t.id) ? r9.m[t.id].render({ className: al.$ }) : (0, l.jsx)(e3.WH, { sku: t, product: i });
    return (0, l.jsx)(e3.f7, { label: s, description: a, graphic: o, price: null != n ? `${n}` : "", PriceIcon: r8.C });
}
function ar(e) {
    let { skuId: t, orbPriceAmount: n } = e;
    (0, ae.c)({ applicationId: (0, r4.P)(t), skuIDs: [t] });
    let i = (0, ne.bG)([rS.A], () => rS.A.get(t), [t]);
    return null == i
        ? (0, l.jsx)(eM.y, { type: eM.y.Type.PULSING_ELLIPSIS })
        : (0, l.jsx)(ai, { sku: i, orbPriceAmount: n });
}
function aa(e) {
    let { orbBalance: t } = e;
    return (0, l.jsx)(ra.vW, { label: X.intl.string(X.t.y0WGqP), value: null != t ? `${t}` : "", Icon: r8.C });
}
function as() {
    return X.intl.string(X.t.wmcDyu);
}
function ao() {
    let { immediateDelivery: e } = (0, e0.U)(),
        { skuProductLine: t, skuId: n } = ac(),
        r = as(),
        a = (0, i.useMemo)(() => ({ type: ra.I0.OrbsRedemption, purchaseButtonText: r }), [r]);
    return t === $.EZt.SOCIAL_LAYER_GAME_ITEM
        ? (0, l.jsx)(rJ.EB, { skuId: n, purchaseButtonText: r, checkoutLegalType: ra.I0.OrbsGameShop })
        : (0, l.jsx)(ra._P, { variant: a, paymentSourceType: null, immediateDelivery: e });
}
let au = (0, i.createContext)({
    isRedeeming: !1,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    skuId: "",
    skuProductLine: null,
    skuApplicationId: void 0,
    analyticsSourceLocation: void 0,
});
function ac() {
    return (0, i.useContext)(au);
}
let ad = { payment_gateway: e5.kM.VIRTUAL_CURRENCY, currency: $.Yri.DISCORD_ORB },
    ap = {
        CHECKOUT_FLOW: ep.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [A.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    { primaryButtonProps: n, ...r } = (function (e) {
                        let { handleStepChange: t } = e,
                            { isRedeeming: n, skuId: r, skuApplicationId: a } = ac(),
                            { enabled: s } = r0.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: o, orderOrbPriceAmount: c } = (0, h.t4)((e) => {
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
                                onClickCheckout: C,
                                showCollectiblesDiscountWarning: E,
                                errorMessage: f,
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
                                    } = ac(),
                                    { analyticsLocations: d } = (0, eb.Ay)(),
                                    { setPurchaseState: p, firstConstraintReasonCode: m } = (0, h.t4)((e) => ({
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, r1.gN)(),
                                    E = (0, i.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: f } = (function (e) {
                                        let {
                                                skuId: t,
                                                skuApplicationId: n,
                                                skuProductLine: l,
                                                orbProductContext: r,
                                                analyticsLocations: a,
                                                analyticsSourceLocation: s,
                                            } = e,
                                            { activitySessionId: o } = (0, nn.V)(),
                                            { hasPaymentSources: c } = (0, le.jm)(),
                                            {
                                                loadId: d,
                                                startTime: p,
                                                discoverySessionId: m,
                                            } = (0, h.t4)((e) => e.contextMetadata),
                                            C = (0, i.useMemo)(
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
                                                    currency: $.Yri.DISCORD_ORB,
                                                    ...(null != s && { source: s }),
                                                    ...{
                                                        payment_type: $.frM[$.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: r5.r.UNIFIED,
                                                        checkout_flow: u.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [d, m, o, t, n, l, a, s, r],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, i.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - p;
                                                    e === $.HAw.PAYMENT_FLOW_STARTED
                                                        ? D.default.track($.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...C,
                                                              has_saved_payment_source: c,
                                                              payment_gateway: e5.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === $.HAw.PAYMENT_FLOW_LOADED
                                                          ? D.default.track($.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...C,
                                                                has_saved_payment_source: c,
                                                                initial_step: A.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === $.HAw.PAYMENT_FLOW_CANCELED
                                                            ? D.default.track($.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...C,
                                                                  duration_ms: n,
                                                              })
                                                            : e === $.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? D.default.track($.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...C,
                                                                    duration_ms: n,
                                                                })
                                                              : e === $.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? D.default.track($.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                  })
                                                                : D.default.track($.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...C,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [p, C, c],
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
                                        null !== E.current &&
                                        (f($.HAw.PAYMENT_FLOW_FAILED, l), (E.current = null));
                                }, [l, f]);
                                let S = (0, i.useCallback)(() => {
                                        (E.current = C),
                                            f($.HAw.PAYMENT_FLOW_COMPLETED),
                                            r((e) => {
                                                p(y.h.COMPLETED), t(A.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [r, p, C, f, t]),
                                    P = E.current ?? C,
                                    I = null != n ? n.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == n,
                                    showCollectiblesDiscountWarning: (0, nb.vw)({ skuId: a, isOrbsPurchase: !0 }),
                                    errorMessage: (0, i.useMemo)(() => (0, r7.$9)(l, m), [l, m]),
                                    orbPriceAmount: I,
                                    orbBalanceToDisplay: P,
                                    onClickCheckout: S,
                                };
                            })({ handleStepChange: t }),
                            S = (0, rX.uS)(a),
                            {
                                disabled: P,
                                tooltipText: I,
                                text: _,
                            } = (function (e) {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, i.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: X.intl.string(X.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: X.intl.string(X.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: a, text: as() };
                            })({ orbBalance: m, orbPriceAmount: s ? o : p, isInTestMode: S }),
                            T = (0, i.useMemo)(
                                () => ({ onClick: C, loading: n, text: _, disabled: P, tooltipText: I }),
                                [C, n, _, P, I],
                            ),
                            g = E ? X.intl.format(X.t.fsOXXO, {}) : null,
                            x = S ? X.intl.string(X.t.OvMyMd) : null;
                        return {
                            isStepLoading: d,
                            upperInlineNoticeProps: (0, i.useMemo)(() => {
                                if (null != x || null != g || null != f) {
                                    let e = [];
                                    return (
                                        null != x &&
                                            e.push({ type: "warning", message: x, key: "test-mode-warning-notice" }),
                                        null != g &&
                                            e.push({ type: "warning", message: g, key: "orb-checkout-warning-notice" }),
                                        null != f &&
                                            e.push({ type: "critical", message: f, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [x, g, f]),
                            purchaseItemContent: (0, l.jsx)(ar, { skuId: r, orbPriceAmount: s ? c : p }),
                            paymentMethodContent: (0, l.jsx)(aa, { orbBalance: m }),
                            legalContent: (0, l.jsx)(ao, {}),
                            primaryButtonProps: T,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({ handleStepChange: t });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(en.dZ, { children: (0, l.jsx)(eJ.T_, { ...r }) }),
                        (0, l.jsx)(en.UX, { children: (0, l.jsx)(C.lo, { primaryButtonProps: n }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: a, children: s } = e,
                    { order: o, setOrder: u } = (0, h.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: c,
                        isRedeeming: d,
                        orbRedemptionError: p,
                        onRedeemVirtualCurrency: m,
                        skuProductLine: C,
                        skuApplicationId: E,
                    } = (function (e) {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: a, order: s } = e,
                            o = (0, r.bG)([eV.default], () => eq.Ay.canUseShopDiscounts(eV.default.getCurrentUser())),
                            u = (0, r.bG)([rS.A], () => rS.A.get(t), [t]),
                            c = null != u ? u.productLine : null,
                            d = u?.applicationId ?? (0, r4.P)(t),
                            p = (0, rF.JL)({ sku: u }),
                            { product: m } = (0, nT.q)(t),
                            C = (0, i.useMemo)(() => {
                                if (null != p) return { orbPriceAmount: p.amount };
                                if (null != m) {
                                    let e = (0, r2.CW)({ product: m, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [p, m, o]);
                        C?.orbPriceAmount == null &&
                            (0, r3.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: h,
                                isSubmitting: E,
                                error: f,
                            } = (0, r6.Q)({ skuId: t, loadId: n, order: s, onSignFailure: a }),
                            A = (0, i.useCallback)(
                                (e) => {
                                    h(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, h, l],
                            );
                        return {
                            skuId: t,
                            skuProductLine: c,
                            skuApplicationId: d,
                            loadId: n,
                            orbProductContext: C,
                            onRedeemVirtualCurrency: A,
                            isRedeeming: E,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: u }),
                    f = (0, i.useMemo)(
                        () => ({
                            orbProductContext: c,
                            isRedeeming: d,
                            orbRedemptionError: p,
                            onRedeemVirtualCurrency: m,
                            skuId: t,
                            skuProductLine: C,
                            skuApplicationId: E,
                            analyticsSourceLocation: a,
                        }),
                        [c, d, p, m, t, C, E, a],
                    );
                return (0, l.jsx)(au.Provider, { value: f, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l, skuProductLine: r } = ac(),
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
                    })({ orbProductContext: l, skuProductLine: r, overrideAnalyticParams: ad });
                return n({ ...t, ...a });
            },
            overrideAnalyticParams: ad,
        },
    };
var am = n(75304);
let aC = {
    [am.C.ORB_CHECKOUT]: {
        flowType: am.C.ORB_CHECKOUT,
        implemented: !0,
        purchaseType: $.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: ap,
    },
    [am.C.COLLECTIBLES_CHECKOUT]: {
        flowType: am.C.COLLECTIBLES_CHECKOUT,
        implemented: !0,
        purchaseType: $.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: n3,
    },
    [am.C.SLAYER_STOREFRONT_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.SLAYER_STOREFRONT_CHECKOUT,
        purchaseType: $.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: r$,
    },
    [am.C.PREMIUM_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.PREMIUM_CHECKOUT,
        purchaseType: $.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: iS,
    },
    [am.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT,
        purchaseType: $.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: rf,
    },
    [am.C.PREMIUM_APPS_OTP_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.PREMIUM_APPS_OTP_CHECKOUT,
        purchaseType: $.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: rT,
    },
    [am.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
        purchaseType: $.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: iz,
    },
    [am.C.GUILD_PRODUCT_CHECKOUT]: {
        implemented: !0,
        purchaseType: $.VVm.ONE_TIME,
        TENANT_CHECKOUT_FLOW_CONFIG: tJ,
        flowType: am.C.GUILD_PRODUCT_CHECKOUT,
    },
    [am.C.GUILD_ROLE_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.GUILD_ROLE_CHECKOUT,
        TENANT_CHECKOUT_FLOW_CONFIG: lS,
        purchaseType: $.VVm.SUBSCRIPTION,
    },
    [am.C.GUILD_BOOST_CHECKOUT]: {
        implemented: !0,
        flowType: am.C.GUILD_BOOST_CHECKOUT,
        purchaseType: $.VVm.SUBSCRIPTION,
        TENANT_CHECKOUT_FLOW_CONFIG: tD,
    },
};
