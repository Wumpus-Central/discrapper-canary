t.d(n, { default: () => nF });
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
    I = t(964486),
    f = t(793574),
    A = t(688810),
    P = t(753390),
    x = t(86379),
    E = t(160946),
    _ = t(606267),
    b = t(545075),
    C = t(813730),
    N = t(197510),
    v = t(981036),
    j = t(725836),
    T = t(364995),
    M = t(666646),
    L = t(584160),
    D = t(480642),
    R = t(571878),
    G = t(357669),
    U = t(832286),
    O = t(958340),
    k = t(937008),
    w = t(166532),
    B = t(566980),
    F = t(216641),
    V = t(925847),
    Y = t(489254),
    W = t(251913),
    H = t(632638),
    z = t(71393),
    $ = t(178368),
    J = t(825755),
    K = t(97352),
    q = t(166403),
    Q = t(174459),
    Z = t(473145),
    X = t(428262),
    ee = t(83617),
    en = t(802790),
    et = t(636441),
    ei = t(587491),
    el = t(285753),
    es = t(738909),
    er = t(735305);
function ea(e) {
    let { setBodyNode: n, setFooterNode: t } = (0, es.Gm)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(er.x, { ...e }),
            (0, i.jsx)(c.c, {
                children: (0, i.jsx)("div", {
                    ref: (e) => {
                        n(e);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                ref: (e) => {
                    t(e);
                },
            }),
        ],
    });
}
var eu = t(615396),
    eo = t(61299),
    ec = t(295405);
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
        [g, h] = l.useState([]),
        y = (0, R.t4)((e) => e.activeSubscription),
        I = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        f = (0, u.bG)([ec.A], () => ec.A.defaultPaymentSourceId),
        A = null != y ? y.paymentSourceId : null,
        P = (0, eo._V)(null != A ? A : I ? f : null);
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
            setCurrencies: h,
            paymentModalArgs: P,
            premiumSubscriptionPaymentSourceId: A,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        },
        children: r,
    });
}
var eg = t(879100),
    eh = t(788868);
function ey(e) {
    let { handleClose: n, existingAvailableSlots: t } = e,
        { guildId: l, numGuildBoostsToPurchase: s, paymentModalArgs: r } = ep(),
        {
            paymentSourceId: a,
            activeSubscription: o,
            customCheckoutFlow: c,
            startingFractionalPremiumEndsAt: d,
        } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        p = (0, u.bG)([O.A], () => (null != l ? O.A.getGuild(l) : void 0), [l]),
        m = null != l ? z.A.getGuild(l) : null,
        S = (0, y.A)(() => (0, eu.b2)(d)),
        g = (0, u.bG)([K.A], () => (null != o ? (0, eu.c9)(o.planId) : null)),
        { paymentSources: h } = r,
        I = (0, F.g)(h, a),
        f = null != m ? m.name : null != p ? p.name : void 0,
        A = S && null != g && !eh.YV.has(g.id);
    return (0, i.jsx)(eg.W, {
        guild: m,
        guildBoostQuantity: s + t.length,
        onClose: n,
        withAnimation: !1,
        paymentSourceType: I,
        fallbackGuildName: f,
        didPurchaseOnFractionalPremium: A,
        customCheckoutFlow: c,
    });
}
var eI = t(683071),
    ef = t(512950),
    eA = t(87719);
let eP = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
t(321073);
var ex = t(503698),
    eE = t.n(ex),
    e_ = t(661531),
    eb = t(990078),
    eC = t(408278),
    eN = t(834040),
    ev = t(499373),
    ej = t(834730),
    eT = t(403581),
    eM = t(663803),
    eL = t(320448),
    eD = t(534514),
    eR = t(104510),
    eG = t(695366),
    eU = t(726656),
    eO = t(531260),
    ek = t(404374),
    ew = t(543767),
    eB = t(881489),
    eF = t(477421),
    eV = t(234419),
    eY = t(363476),
    eW = t(531506),
    eH = t(375708),
    ez = t(51465);
function e$() {
    return (0, i.jsxs)("div", {
        className: eE()(ez.dt, ez.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: ez.qq,
            }),
            (0, i.jsx)(ej.E, {
                variant: "text-sm/medium",
                className: ez.tD,
                children: eH.intl.format(eH.t.f5VHKm, {}),
            }),
        ],
    });
}
function eJ(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: ez.dt,
        children: [(0, i.jsx)(eT.t, { size: "md", className: ez.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var eK = t(773669),
    eq = t(287809),
    eQ = t(975571),
    eZ = t(252424),
    eX = t(580630),
    e0 = t(155718),
    e1 = t(376843),
    e3 = t(717925),
    e8 = t(596034),
    e6 = t(848584),
    e4 = t(241989),
    e2 = t(908419),
    e5 = t(888751),
    e7 = t(874638),
    e9 = t(692440),
    ne = t(818348),
    nn = t(327105),
    nt = t(7921);
function ni(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e2.U)();
    return (0, i.jsx)(e8._, {
        variant: {
            type: e8.I.Subscription,
            purchaseButtonText: eH.intl.string(eH.t.eUEeCt),
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
function nl(e) {
    return eH.intl.format(eH.t.IeaYqg, { endDate: e });
}
function ns(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: nt.bU }),
            (0, i.jsx)(ej.E, { variant: "text-sm/normal", className: nt.b7, children: n }),
            (0, i.jsx)("div", { className: nt.bU }),
        ],
    });
}
function nr(e) {
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
                label: eH.intl.formatToPlainString(eH.t.a3cAOg, {
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
            label: eH.intl.formatToPlainString(eH.t.ZSVged, { planName: (0, X.RH)(l[0].subscriptionPlanId) }),
            tooltip: eH.intl.string(eH.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eH.intl.string(eH.t["+as5ZZ"]),
                tooltip: eH.intl.string(eH.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: eH.intl.string(eH.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, e5.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e6.Vm, {
        defaultExpanded: !0,
        label: eH.intl.string(nn.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function na(e) {
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
        ? (0, i.jsx)(e9.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e9.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function nu(e) {
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
                o = (0, u.bG)([z.A, O.A], () => {
                    let e = z.A.getGuild(t);
                    return null != e ? e : O.A.isGuildFetching(t) ? null : O.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eh.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                S = (0, eB.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, A.Ay)(),
                [h, y] = (0, ew.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: f.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [I, P] = (0, ew.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: f.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, M.OQ)({
                    checkoutInvoicePreview: h,
                    checkoutInvoiceError: y,
                    renewalInvoicePreview: I,
                    renewalInvoiceError: P,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: I,
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
            isPrepaid: I,
            isReverseTrial: P,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: E,
        } = g,
        b = (0, _.A)({ location: "GuildBoostReview", message: eH.intl.string(nn.default["tK8A/8"]) }),
        C = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == x || null == E || null == y) return (0, i.jsx)(e3.E, {});
    let N = (0, i.jsx)(na, {
            isSubscriptionUpdate: h,
            premiumSubscription: a,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: E,
            isPrepaid: I,
            isReverseTrial: P,
            priceOptions: s,
        }),
        v = (0, i.jsx)(e1.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eH.intl.string(eH.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            additionalPaymentSourceDropdownProps: C,
            premiumSubscriptionPaymentSourceId: o,
            hideCurrencySelect: !0,
        }),
        j = (function (e) {
            let {
                isSubscriptionUpdate: n,
                premiumSubscriptionPlan: t,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: l,
                paymentSources: s,
                paymentSourceId: r,
            } = e;
            return {
                paymentSourceType: (0, F.g)(s, r),
                premiumSubscriptionPlan: t,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, e9.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: E,
            checkoutInvoicePreview: x,
            paymentSources: t,
            paymentSourceId: p,
        }),
        T = (0, i.jsx)(ni, { ...j }),
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
                m = (e) => (0, e7.Z)(i.invoiceItems).find((n) => eh.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                h = null != g ? S.quantity - g.quantity : S.quantity,
                y = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                I = y.reduce((e, n) => e + n.amount, 0),
                f = (0, ew.sL)(S) * h,
                A = (0, eX.$g)(f, i.currency),
                P = (0, eX.CE)(A, d, p),
                x = (0, eX.$g)(i.total, i.currency) + (i.currency !== ne.Yr.USD ? "*" : ""),
                E = i.subtotal - f - I,
                _ = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * h };
                }),
                b = _.find((e) => e.type === e0.iS.SUBSCRIPTION_PLAN),
                C = _.find((e) => e.type === e0.iS.ENTITLEMENT),
                N = S.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: P,
                formattedOriginalAmountGuildBoostRate: (0, eX.CE)((0, eX.$g)(N, i.currency), d, p),
                formattedTotal: x,
                basePlanAdjustment: I,
                basePlanInvoiceItems: y,
                guildBoostingAdjustment: E,
                subscriptionDiscount: b,
                entitlementDiscount: C,
                originalAmount: N,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: s,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: E,
            priceOptions: s,
            reviewState: g,
        }),
        D = (0, i.jsx)(nr, { ...L }),
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
                label: eH.intl.formatToPlainString(eH.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, X.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(e4.a6, {}),
                price: a,
                PriceIcon: c ? eT.t : void 0,
                priceTooltip: c ? eH.intl.string(nn.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            y,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: nl(i.currentPeriodEnd) } : null;
            })({ isPrepaid: I, isReverseTrial: P, premiumSubscription: a }),
        ),
        G = (0, i.jsx)(e4.f7, { ...R });
    return (0, i.jsx)(e3.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: G,
        subscriptionDetailsContent: N,
        paymentMethodContent: v,
        invoiceSummaryContent: D,
        legalContent: T,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: eH.intl.string(nn.default.R0cZsM),
    });
}
var no = t(652215);
t(26279);
var nc = t(406263);
function nd(e) {
    return "" === e || "-" === e;
}
function np(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), nd(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: nc.U$,
        children: [
            (0, i.jsx)(eC.K, {
                variant: "secondary",
                size: "md",
                icon: eN.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eH.intl.string(eH.t["k+ohJm"]),
                disabled: !c || u <= s,
            }),
            (0, i.jsx)("div", {
                className: nc.WJ,
                children: (0, i.jsx)("input", {
                    className: nc.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (nd(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        nd(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(eC.K, {
                variant: "secondary",
                size: "md",
                icon: ev.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eH.intl.string(eH.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function nm(e) {
    let { message: n } = e;
    return (0, i.jsx)(ej.E, { variant: "text-xs/normal", color: "text-muted", className: nc.jH, children: n });
}
function nS(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: nc.Vk,
        children: [
            (0, i.jsx)("div", {
                className: nc.D0,
                children: (0, i.jsx)(eT.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: nc.ue,
                    color: ek.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: nc.yP, children: n }),
        ],
    });
}
function ng(e) {
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
                className: nt.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: nt.E6,
                        children: [
                            (0, i.jsx)(eM.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: nt.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: nt.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eE()(nt.QK, { [nt.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: nt.J3 }),
            (0, i.jsxs)("div", {
                className: nt.mP,
                children: [
                    (0, i.jsx)("div", { className: nt.xp, children: eH.intl.string(eH.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: eE()(nt.__invalid_planSelectorSubtotalPrice, { [nt.S]: n }),
                        children: u,
                    }),
                ],
            }),
            h.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nh(e) {
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
        refreshPricingNotes: I,
    } = e;
    return (0, i.jsxs)("div", {
        className: nc.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: nc.K3,
                children: [
                    (0, i.jsx)(ej.E, {
                        variant: "text-md/medium",
                        className: nc.bk,
                        children: eH.intl.string(eH.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eL._, { className: nc.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ej.E, { variant: "text-md/medium", className: nc.kX, children: r }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: nc.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: nc.fX,
                        children: [
                            (0, i.jsx)(np, {
                                value: t,
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(ej.E, { variant: "text-md/medium", className: nc.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eE()(nc.El, { [nt.S]: n }), children: u }),
                ],
            }),
            h,
            (0, i.jsxs)("div", {
                className: nc.fh,
                children: [
                    (0, i.jsx)(eD.D, {
                        variant: "heading-lg/semibold",
                        className: nc.O3,
                        children: eH.intl.string(eH.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: eE()(nc.BU, { [nt.S]: n }), children: c }),
                ],
            }),
            I.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function ny(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: nt.Mv,
        children: [
            (0, i.jsx)(eR._, { className: nt.T5, color: e_.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eH.intl.format(eH.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(eb.m, {
                              text: eH.intl.formatToPlainString(eH.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eG.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: nt.Y5,
                                  color: e_.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function nI(e) {
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
            refreshNextStepLabel: h = eH.intl.string(eH.t.QBnNHq),
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
                    (0, u.bG)([ec.A], () =>
                        n?.paymentSourceId != null ? ec.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                y = s.interval,
                I = s.intervalCount,
                P = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eh.pe.GUILD), y, I)),
                x = (0, u.bG)([eq.default], () => eq.default.getCurrentUser()),
                E = (0, eO.A)({ forceFetch: !1 });
            r()(null != P, "Missing guildBoostingSubscriptionPlan");
            let _ = [{ planId: P.id, quantity: 1 }],
                b = c?.items.find(
                    (e) => e.planId === eh.gD.PREMIUM_MONTH_TIER_2 || e.planId === eh.gD.PREMIUM_YEAR_TIER_2,
                );
            null != b && _.push(b);
            let C = c?.items.find(
                    (e) => e.planId === eh.gD.PREMIUM_MONTH_GUILD || e.planId === eh.gD.PREMIUM_YEAR_GUILD,
                ),
                N = null == h || !eh.uJ.has(h) || null == C,
                { analyticsLocations: v } = (0, A.Ay)(),
                [j, T] = (0, ew.YV)({
                    subscriptionId: c?.id,
                    items: _,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: N,
                    analyticsLocations: v,
                    analyticsLocation: f.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, M.Tr)(j, T);
            let L = !N && null == j && null == T;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let D = (0, eV.V)()?.subscription_trial?.sku_id === eh.pe.TIER_2,
                R = X.Ay.hasBoostDiscount(x),
                G = R && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), eh.PremiumTypes.TIER_1),
                U = j?.findInvoiceItemByPlanId(P.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: j.currency }
                        : X.Ay.getPrice(P.id, R, !1, S),
                k = a * O.amount,
                w = (0, eB.ds)() && R && null != c,
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
                            showFractionalPremiumBanner: i === eh.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: E.fractionalState,
                    isReverseTrial: w,
                    hasDiscountUpsell: G,
                    withTrialOfferCopyVariant: D,
                });
            "discount" === B.upsellVariant
                ? (r()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = eH.intl.format(eH.t.hf6YOY, { planName: X.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eH.intl.format("upsell_trial" === B.upsellVariant ? eH.t.ba1L74 : eH.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eZ.l9)(eK.default.locale, eh.oX / 100),
                      freeSubscriptionCount: eh.M4,
                  }));
            let F = p.filter((e) => (0, Z.I5)(e)).length,
                V = (0, X.J$)(S.paymentSourceId),
                { ipCountryCode: Y } = (0, eF.A)(),
                W = "HR" === Y && O.currency === ne.Yr.EUR,
                H =
                    w && null != c
                        ? (0, i.jsx)(ns, { text: nl(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: eE()(nt.hA, nt.G3), children: eH.intl.string(eH.t.jNY1FO) }),
                z =
                    w && null != c
                        ? (0, i.jsx)(ns, { text: nl(c.currentPeriodEnd), className: nt.jk })
                        : (0, i.jsx)("div", { className: nc._X, children: eH.intl.string(eH.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(ny, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eW.vi, { fractionalPremiumInfo: E }) : null,
                Q = V
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eh.WT.YEAR
                              ? eH.intl.string(eH.t.YDpAzZ)
                              : n === eh.WT.MONTH && 1 === t
                                ? eH.intl.string(eH.t["6ZR3By"])
                                : null;
                      })({ intervalType: y, intervalCount: I }) ?? eH.intl.string(eH.t.K9Bmze))
                    : eH.intl.string(eH.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : V
                      ? (0, eX.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eX.$g)(n, t);
                            return i === eh.WT.YEAR
                                ? eH.intl.formatToPlainString(eH.t["8M04YJ"], { price: s })
                                : i === eh.WT.MONTH && 1 === l
                                  ? eH.intl.formatToPlainString(eH.t.VStWCR, { price: s })
                                  : i === eh.WT.MONTH && l > 1
                                    ? eH.intl.formatToPlainString(eH.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: y, intervalCount: I, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eY.A, {
                          price: k,
                          currency: O.currency,
                          intervalType: y,
                          intervalCount: I,
                          isPrepaidPaymentSource: V,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !V
                      ? (0, eX.CE)((0, eX.$g)(k, O.currency), y, I)
                      : (0, eX.$g)(k, O.currency),
                ei = [],
                el = [];
            if (W) {
                let e = (0, i.jsx)(
                    eU.A,
                    {
                        message: eH.intl.formatToPlainString(eH.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eX.$g)(7.5345 * k, ne.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let es = eH.intl.format(eH.t.Om31w8, { documentationLink: eQ.A.getArticleURL(no.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(eU.A, { message: es }, "localized-pricing")),
                el.push((0, i.jsx)(nm, { message: es }, "localized-pricing")),
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
                            ? (0, i.jsx)(e$, {})
                            : (0, i.jsx)(eJ, { text: t, color: ek.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(e$, {}) : (0, i.jsx)(nS, { text: t }),
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
    return (0, i.jsx)(S ? nh : ng, {
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
let nf = eh.gD.NONE_MONTH;
var nA = t(898640);
function nP(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        {
            numGuildBoostsToPurchase: s,
            setNumGuildBoostsToPurchase: a,
            guildId: o,
            currency: c,
            closeGuildPerksModal: d,
        } = ep(),
        { paymentSourceId: p, activeSubscription: m } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        S = (0, y.A)(() => (0, Z.D$)($.A.boostSlots)),
        g = (0, Y.n)("GuildBoostPurchaseModal"),
        h = eP.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        I = g && h,
        f = (0, u.bG)([O.A], () => (null != o ? O.A.getGuild(o) : void 0), [o]),
        A = null != o ? z.A.getGuild(o) : null,
        P = null != m && m.isPurchasedExternally,
        x = (0, u.bG)([K.A], () => (null != m ? (0, eu.c9)(m.planId) : null)),
        E = (0, u.bG)([K.A], () => (null == x ? K.A.get(nf) : x));
    r()(null != o, "Missing guildId"), r()(null != E, "Missing nextPremiumSubscriptionPlan");
    let _ = (0, i.jsx)(nI, {
        premiumSubscriptionPlan: E,
        numGuildBoosts: s,
        setNumGuildBoosts: a,
        setForceDisableSubmitButton: t,
        premiumSubscription: m,
        existingAvailableSlots: S,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            n(), null != d && d(), (0, eA.e)();
        },
        priceOptions:
            null != p ? { paymentSourceId: p, currency: null != c ? c : void 0 } : { currency: null != c ? c : void 0 },
        isRefreshEnabled: g,
        showRefreshSubtotalRate: I,
        refreshNextStepLabel: l,
    });
    return (
        P && null != m && null != m.paymentGateway
            ? (_ = (0, i.jsxs)("div", {
                  className: nA.xK,
                  children: [
                      (0, i.jsx)(eI.w, {
                          type: "critical",
                          children: eH.intl.format(eH.t["/m3Y3s"], { paymentGatewayName: ne.qm[m.paymentGateway] }),
                      }),
                      _,
                  ],
              }))
            : null == o ||
              O.A.isGuildFetching(o) ||
              null != f ||
              null != A ||
              (_ = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ef.p, {
                          messageType: ef.Y.ERROR,
                          className: nA.MR,
                          children: eH.intl.string(eH.t.eAn6z2),
                      }),
                      _,
                  ],
              })),
        _
    );
}
var nx = t(460905),
    nE = t(183623),
    n_ = t(95635),
    nb = t(935462),
    nC = t(532794),
    nN = t(811611),
    nv = t(901017),
    nj = t(403052);
function nT(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eK.default], () => eK.default.locale);
    return (0, i.jsxs)("div", {
        className: nj.mH,
        children: [
            (0, i.jsx)(nv.A, {
                icon: eR._,
                iconClassName: nj.pl,
                description: eH.intl.formatToPlainString(eH.t.sQBgs2, { numFreeGuildSubscriptions: eh.M4 }),
                color: e_.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nv.A, {
                icon: eR._,
                iconClassName: nj.pl,
                description: eH.intl.formatToPlainString(eH.t["1A6vXi"], { percent: (0, eZ.l9)(t, eh.oX / 100) }),
                color: e_.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nv.A, { icon: nx.n, iconClassName: nj.zO, description: eH.intl.string(eH.t.Z9b2x2) }) : null,
            (0, i.jsx)(nv.A, { icon: nE.F, iconClassName: nj.Kg, description: eH.intl.string(eH.t["8dqG5E"]) }),
            (0, i.jsx)(nv.A, { icon: n_.J, iconClassName: nj.$z, description: eH.intl.string(eH.t.cBorIy) }),
        ],
    });
}
function nM(e) {
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
        { analyticsLocations: h, sourceAnalyticsLocations: y } = (0, A.Ay)(f.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        I = null == n || null == n.premiumSubscriptionType,
        P = X.Ay.getPrice(eh.gD.PREMIUM_MONTH_TIER_2, !1, !1, g),
        x = (0, eX.$g)(P.amount, P.currency),
        E = (0, eV.V)(),
        _ = E?.trial_id,
        b = E?.subscription_trial?.sku_id === eh.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(no.HAw.PREMIUM_UPSELL_VIEWED, { type: eh.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: y });
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nb.s_, { "data-migration-pending": !0, onClick: t, className: nj.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        b && (0, i.jsx)(nN.Vq, { className: nj.Fg }),
                        (0, i.jsx)("div", { className: eE()(nj.Tn, { [nj.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: nj.G3,
                            children:
                                null != _
                                    ? eH.intl.string(eH.t.AoSzEr)
                                    : eH.intl.format(eH.t["7vePZb"], { monthlyPrice: x }),
                        }),
                        (0, i.jsx)(nT, { shouldUpsellFromNoneTier: I }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eH.intl.string(eH.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eH.intl.string(eH.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != _ ? eH.intl.string(eH.t["Gd/XHF"]) : eH.intl.string(eH.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nC.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eh.pe.TIER_2,
                                                    analyticsLocations: h,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: no.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: m,
                                                    onSubscriptionConfirmation: a,
                                                    trialId: _,
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
function nL(e) {
    let { handleClose: n, handleStepChange: t, onSubscriptionConfirmation: s } = e,
        { currency: a, paymentModalArgs: o, analyticsLocation: c, analyticsSourceLocation: d } = ep(),
        { paymentSourceId: p, activeSubscription: m } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        S = (0, u.bG)([K.A], () => (null != m ? (0, eu.c9)(m.planId) : null)),
        g = (0, u.bG)([K.A], () => (null == S ? K.A.get(nf) : S));
    r()(null != g, "Missing nextPremiumSubscriptionPlan"), r()(null != a && "" !== a, "Currency not defined");
    let { paymentSources: h } = o,
        y = null != m ? m.paymentSourceId : null,
        I = Object.keys(h).length > 0,
        f = l.useCallback(() => t(w.pn.PLAN_SELECT), [t]),
        A = l.useCallback(() => t(null != y || I ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS), [t, y, I]);
    return (0, i.jsx)(nM, {
        premiumSubscriptionPlan: g,
        analyticsLocation: c,
        analyticsSourceLocation: d,
        onClose: n,
        onBack: f,
        onSkip: A,
        onSubscriptionConfirmation: s,
        priceOptions: null != p ? { paymentSourceId: p, currency: a } : { currency: a },
    });
}
var nD = t(253390);
function nR() {
    let e = (0, R.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: n } = ep(),
        t = (0, u.bG)([K.A], () => null == e || null != K.A.get(e.planId)),
        i = (0, E.Y)(),
        s = (0, u.bG)([K.A], () => (null != e ? (0, eu.c9)(e.planId) : null));
    return {
        newAdditionalPlans: l.useMemo(
            () => (null != e && t && i ? (0, nD.v)(e, n) : [{ planId: eh.gD.PREMIUM_MONTH_GUILD, quantity: n }]),
            [e, t, i, n],
        ),
        currentPremiumSubscriptionPlan: s,
        hasFetchedPremiumSubscriptionPlan: t,
    };
}
function nG(e) {
    let { handleStepChange: n } = e,
        { guildId: t, currency: s, paymentModalArgs: a, premiumSubscriptionPaymentSourceId: o } = ep(),
        {
            paymentSourceId: c,
            setPaymentSourceId: d,
            premiumSubscription: p,
        } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            premiumSubscription: e.activeSubscription,
        }));
    r()(null != t, "Missing guildId"), r()(null != s && "" !== s, "Currency not defined");
    let { paymentSources: m } = a,
        { newAdditionalPlans: S, currentPremiumSubscriptionPlan: g } = nR(),
        h = (0, u.bG)([K.A], () => (null == g ? K.A.get(nf) : g));
    r()(null != h, "Missing nextPremiumSubscriptionPlan");
    let y = null != c ? { paymentSourceId: c, currency: s } : { currency: s },
        I = l.useCallback(() => {
            n(w.pn.ADD_PAYMENT_STEPS), d(null);
        }, [n, d]);
    return (0, i.jsx)(nu, {
        guildId: t,
        paymentSources: m,
        priceOptions: y,
        currentPremiumSubscription: p,
        premiumSubscriptionPaymentSourceId: o,
        premiumSubscriptionPlan: h,
        newAdditionalPlans: S,
        paymentSourceId: c,
        setPaymentSourceId: d,
        onPaymentSourceAdd: I,
    });
}
let nU = [w.pn.PLAN_SELECT, w.pn.REVIEW, w.pn.CONFIRM],
    nO = [w.pn.PLAN_SELECT, w.pn.ADD_PAYMENT_STEPS, w.pn.REVIEW, w.pn.CONFIRM];
async function nk(e, n) {
    await (0, g.CD)();
    let t = (0, Z.D$)($.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nw(e) {
    let {
        currentStep: n,
        isRefreshEnabled: t,
        backStep: l,
        handleStepChange: s,
        primaryButtonProps: a,
        secondaryButton: u,
        legacySubmitButton: c,
    } = e;
    return n === w.pn.CONFIRM
        ? null
        : n === w.pn.REVIEW
          ? (r()(null != a, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(D.lo, { onBackClick: null != l ? () => s(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: eH.intl.string(eH.t["13/7kX"]),
                                  onClick: () => s(l),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && n === w.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [u, c],
                        }),
                    ],
                }),
            });
}
function nB(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: g,
            guildId: N,
            onSubscribeComplete: k,
            onSubscriptionConfirmation: es,
            applicationId: er,
            intent: eu,
        } = e,
        {
            numGuildBoostsToPurchase: eo,
            currency: ec,
            setCurrency: ed,
            currencies: em,
            setCurrencies: eS,
            paymentModalArgs: eg,
            premiumSubscriptionPaymentSourceId: eI,
            disablePremiumUpsell: ef,
        } = ep(),
        eA = (0, x.Hp)(),
        eP = (0, R.t4)((e) => e.hasAcceptedTerms),
        ex = (0, _.A)({ location: "GuildBoostPurchaseModal", message: eH.intl.string(nn.default["tK8A/8"]) }),
        eE = (0, M.sw)(),
        e_ = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        { newAdditionalPlans: eb, currentPremiumSubscriptionPlan: eC, hasFetchedPremiumSubscriptionPlan: eN } = nR(),
        ev = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        ej = (0, u.bG)([O.A], () => (null != N ? O.A.getGuild(N) : void 0), [N]),
        {
            paymentSources: eT,
            setIsSubmittingCurrentStep: eM,
            paymentAuthenticationState: eL,
            isSubmittingCurrentStep: eD,
            paymentError: eR,
            purchaseErrorBlockRef: eG,
        } = eg,
        {
            paymentSourceId: eU,
            setPurchaseError: eO,
            premiumSubscription: ek,
            customCheckoutFlow: ew,
        } = (0, R.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
            premiumSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
        })),
        eB = Object.keys(eT).length > 0,
        { checkoutPaymentSources: eF } = (0, T.t)(),
        eV = (0, _.iB)({ checkoutPaymentSources: eF, paymentSourceId: eU, location: "GuildBoostPurchaseModal" }),
        eY = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        eW = (0, E.Y)(),
        ez = l.useMemo(() => (0, V.A)(), []),
        [e$, eJ] = (0, y.A)(() => [ez ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eK } = (0, A.Ay)(o, f.A.GUILD_BOOST_PURCHASE_MODAL),
        eq = l.useMemo(
            () =>
                eb.find((e) => {
                    let { planId: n } = e;
                    return eh.pW.has(n);
                })?.planId ?? eh.gD.PREMIUM_MONTH_GUILD,
            [eb],
        ),
        eQ = (0, u.bG)([K.A], () => K.A.get(eq)?.skuId, [eq]),
        eZ = l.useMemo(
            () => ({
                load_id: e$,
                payment_type: ne.fr[ne.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(eh.pe.GUILD),
                subscription_type: no.rzx.PREMIUM,
                subscription_plan_id: eq,
                quantity: eo,
                location: d,
                source: g,
                location_stack: eK,
                checkout_flow: C.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
                guild_id: N,
            }),
            [e$, d, eK, g, N, eo, eq],
        ),
        eX = l.useMemo(() => {
            let { guild_id: e, ...n } = eZ;
            return n;
        }, [eZ]);
    l.useEffect(() => {
        (0, ee.c_)(eU);
    }, [eU]);
    let [e0, e1] = l.useState(w.pn.PLAN_SELECT),
        e3 = l.useMemo(() => Date.now(), [e0]),
        e8 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e1(e), eO(null);
                let i = Date.now();
                Q.default.track(no.HAw.PAYMENT_FLOW_STEP, {
                    ...eZ,
                    from_step: null != t ? t : e0,
                    to_step: e === w.pn.ADD_PAYMENT_STEPS ? w.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e3,
                    flow_duration_ms: i - eJ,
                    guild_id: N,
                    application_id: er,
                });
            },
            [eO, eZ, e0, e3, eJ, N, er],
        ),
        e6 = {
            paymentFlowFailedAnalyticsData: eX,
            flowStartTime: eJ,
            guildId: N,
            handleStepChange: e8,
            onSubscribeComplete: k,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eM,
            setPurchaseError: eO,
        },
        e4 = l.useRef(e6);
    l.useEffect(() => {
        e4.current = e6;
    }),
        l.useEffect(() => {
            let {
                paymentFlowFailedAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: s,
                setIsSubmittingCurrentStep: r,
                setPurchaseError: a,
            } = e4.current;
            (async () => {
                if (!0 === eY)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, P.tn)(J.A.redirectedPaymentId),
                            i(w.pn.CONFIRM),
                            e9(B.h.COMPLETED),
                            null != t && (await nk(t, null != eu)),
                            l?.();
                    } catch (t) {
                        e9(B.h.FAIL),
                            a(t),
                            Q.default.track(no.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: no.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, P.bl)();
                    }
            })();
        }, [eY, eu]),
        (0, I.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, P.hP)(),
                null == N ||
                    null != z.A.getGuild(N) ||
                    null != O.A.getGuild(N) ||
                    O.A.isGuildFetching(N) ||
                    (0, U.y)(N),
                (0, G.b)({ ...eZ, guild_id: N, application_id: er, custom_checkout_flow: ew }),
                null != ek &&
                    null != ek.renewalMutations &&
                    Q.default.track(no.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: N });
        });
    let [e2, e5] = l.useState(nU),
        [e7, e9] = l.useState(B.h.WAITING),
        nt = () => {
            s(e7 === B.h.COMPLETED);
        },
        ni = null != ek && ek.isPurchasedExternally;
    l.useEffect(() => {
        eL !== W.oc.PENDING &&
            e0 !== w.pn.CONFIRM &&
            null != eI &&
            (e2 !== nU && e5(nU), nU.includes(e0) || e0 === w.pn.PREMIUM_UPSELL || e8(w.pn.REVIEW)),
            e0 === w.pn.ADD_PAYMENT_STEPS && e2 !== nO && e5(nO),
            ni && e0 !== w.pn.PLAN_SELECT && e1(w.pn.PLAN_SELECT);
    }, [e0, e8, ni, eL, ek, eI, e2]),
        (0, W.b)(e0, eL, e8, e9),
        (0, w.zT)(e0, e7, e9);
    let nl = (0, Y.n)("GuildBoostPurchaseModal"),
        ns = nl && (e0 === w.pn.REVIEW || e0 === w.pn.CONFIRM),
        nr = (0, el.A)(ns),
        [na, nu] = l.useState(!1),
        [nc, nd] = l.useState(!0),
        np = l.useMemo(() => JSON.stringify(em), [em]);
    if (
        (l.useEffect(() => {
            let e;
            eW &&
                (null != K.A.get(eh.gD.PREMIUM_MONTH_GUILD) && eS((e = (0, ee._w)(eh.gD.PREMIUM_MONTH_GUILD, eU, !1))),
                null == eU && null != ek && null != ek.paymentSourceId ? ed(ek.currency) : null != e && ed(e[0]));
        }, [eU, ek, eW, np, ed, eS]),
        eA)
    )
        n = (0, i.jsx)(b.oO, {});
    else if (e_ && eN && eW && null != ec && "" !== ec)
        if (ek?.isPausedOrPausePending && !ek.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nA.C, children: eH.intl.string(eH.t.mOWsF1) }),
            });
        else if (null != ek && null != ek.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nA.C, children: eH.intl.string(eH.t.npfhh0) }),
            });
        else if (e0 === w.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nL, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: nt,
                handleStepChange: e8,
                analyticsData: eZ,
                setAnalyticsData: ne.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: es,
            });
        else {
            let e, t, l, s;
            r()(ec, "Currency not defined");
            let a = null != eU ? { paymentSourceId: eU, currency: ec } : { currency: ec },
                u = z.A.getGuild(N),
                o = null;
            switch (e0) {
                case w.pn.PLAN_SELECT:
                    r()(null != N, "Missing guildId"),
                        (e = (0, i.jsx)(nP, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: nt,
                            handleStepChange: e8,
                            analyticsData: eZ,
                            setAnalyticsData: ne.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: nd,
                            refreshNextStepLabel: (0, w.Ir)(
                                e2.find((e) => e !== w.pn.PLAN_SELECT && e !== w.pn.CONFIRM) ?? w.pn.REVIEW,
                            ),
                        })),
                        (l = nl
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: eH.intl.string(eH.t["ETE/oC"]),
                                  onClick: nt,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eH.intl.string(eH.t.oEAioF),
                                  onClick: nt,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(S.$, {
                            variant: "primary",
                            text: eH.intl.string(eH.t["3PatSz"]),
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
                                forceDisableSubmitButton: nc,
                                numGuildBoostsToPurchase: eo,
                                isDisabledBecauseExternalSubscription: ni,
                                isMissingGuildInformation: null == ej && null == u,
                            }),
                            onClick: () => {
                                ef || (null != eC && eC.premiumSubscriptionType === eh.PremiumTypes.TIER_2)
                                    ? e8(null != eI || eB ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS)
                                    : e8(w.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case w.pn.ADD_PAYMENT_STEPS:
                    break;
                case w.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(h.N, { className: nA.__invalid_body });
                    break;
                case w.pn.REVIEW:
                    (e = (0, i.jsx)(nG, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nt,
                        handleStepChange: e8,
                        analyticsData: eZ,
                        setAnalyticsData: ne.tE,
                        skipConfirm: !1,
                    })),
                        (t = w.pn.PLAN_SELECT);
                    let c = async () => {
                        r()(null != eb, "Missing newAdditionalPlans");
                        let e = (0, F.W)(eT, eU);
                        eO(null);
                        try {
                            e9(B.h.PURCHASING),
                                eM(!0),
                                r()(null != eU, "Missing paymentSourceId"),
                                r()(null != eE, "Missing invoicePreview");
                            let n = { amount: eE.total, currency: eE.currency },
                                t = a.currency ?? eE.currency,
                                i = (0, X.U8)(ek, eb, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(no.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...eZ,
                                    duration_ms: Date.now() - eJ,
                                    guild_id: N,
                                    application_id: er,
                                }),
                                na)
                            )
                                return;
                            if (null == ek || null == eC) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, P.Ky)({
                                    items: eb,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nu(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(ek, eb) };
                                (l.currency = ek.currency ?? t),
                                    (l.paymentSource = null != eI ? eT[eI] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, P.nV)(ek, l, n, i, eK);
                                if (s.redirectConfirmation) return void nu(null != s.redirectURL);
                            }
                            null == eu && e8(w.pn.CONFIRM),
                                e9(B.h.COMPLETED),
                                null != N && (await nk(N, null != eu)),
                                null != eu && nt(),
                                k?.();
                        } catch (n) {
                            e9(B.h.FAIL),
                                eO(n),
                                Q.default.track(no.HAw.PAYMENT_FLOW_FAILED, {
                                    ...eX,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === no.hes.CARD ? no.kM_.STRIPE : no.kM_.BRAINTREE) : null,
                                    payment_source_id: eU,
                                    duration_ms: Date.now() - eJ,
                                });
                        } finally {
                            na || eM(!1);
                        }
                    };
                    (o = {
                        text: eH.intl.string(eH.t.eUEeCt),
                        loading: eD,
                        disabled: null == eU || !eP || null != ex || eV,
                        onClick: c,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(v.p, { ...o }));
                    break;
                case w.pn.CONFIRM:
                    e = (0, i.jsx)(ey, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nt,
                        handleStepChange: e8,
                        analyticsData: eZ,
                        setAnalyticsData: ne.tE,
                        skipConfirm: !1,
                        existingAvailableSlots: ev,
                    });
            }
            let d = null != eR && null == (0, w.ou)(eR) ? eR : null;
            n =
                e0 === w.pn.ADD_PAYMENT_STEPS
                    ? (0, i.jsx)(ea, {
                          subscriptionTier: null,
                          planGroup: [],
                          initialPlanId: null,
                          handleClose: nt,
                          handleStepChange: e8,
                          analyticsData: eZ,
                          setAnalyticsData: ne.tE,
                          skipConfirm: !1,
                      })
                    : (0, i.jsx)(H.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === w.pn.REVIEW || n === w.pn.CONFIRM || (t && n === w.pn.PLAN_SELECT);
                          })({ currentStep: e0, isBoostingPreCheckoutModalRefreshEnabled: nl }),
                          steps: e2,
                          currentStep: e0,
                          paymentError: d,
                          purchaseErrorBlockRef: eG,
                          hasCurrencies: em.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nw, {
                              currentStep: e0,
                              isRefreshEnabled: nl,
                              backStep: t,
                              handleStepChange: e8,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nA._5, children: (0, i.jsx)(m.y, {}) });
    let nm = (0, L.u)({ skuId: eQ, step: e0 }),
        nS = null;
    return (eA ||
        (nl && e0 !== w.pn.PREMIUM_UPSELL
            ? (nS = e0 === w.pn.REVIEW ? (0, i.jsx)(D.s3, { ...nm }) : (0, i.jsx)(D.s3, { title: nm.title }))
            : e0 === w.pn.REVIEW
              ? (nS = (0, i.jsx)(D.s3, { ...nm }))
              : e0 !== w.pn.PREMIUM_UPSELL &&
                (nS = (0, i.jsx)(en.A, { onClose: nt, currentStep: e0, purchaseState: e7 }))),
    nl && e0 === w.pn.CONFIRM)
        ? (0, i.jsx)(ei.A, {
              mediaUrls: nr.mediaUrls,
              isSuccess: nr.isSuccess,
              transitionState: t,
              onClose: () => (nt(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(et.A, {
                      transitionState: t,
                      guild: z.A.getGuild(N),
                      guildBoostQuantity: eo + ev.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(j.e0, {
              children: (0, i.jsxs)(D.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nt(), Promise.resolve()),
                  children: [nS, n],
              }),
          });
}
function nF(e) {
    let {
            totalNumberOfSlotsToAssign: n = 1,
            disablePremiumUpsell: t,
            closeGuildPerksModal: l,
            guildId: s,
            analyticsLocation: r,
            analyticsSourceLocation: a,
        } = e,
        o = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: c } = (0, A.Ay)(f.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, y.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(A.f5, {
        value: c,
        children: (0, i.jsx)(N.CheckoutRootProvider, {
            activeSubscription: o,
            stepConfigs: nV,
            skuIDs: [],
            unifiedCheckoutFlow: C.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(k.Mq, {
                children: (0, i.jsx)(eS, {
                    initialNumGuildBoostsToPurchase: d,
                    disablePremiumUpsell: t,
                    closeGuildPerksModal: l,
                    guildId: s ?? null,
                    analyticsLocation: r,
                    analyticsSourceLocation: a,
                    children: (0, i.jsx)(nB, { ...e }),
                }),
            }),
        }),
    });
}
let nV = [{ key: w.pn.ADD_PAYMENT_STEPS, renderStep: () => (0, i.jsx)("div", {}) }];
