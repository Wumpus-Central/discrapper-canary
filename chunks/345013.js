t.d(n, { default: () => nw });
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
    y = t(891197),
    h = t(444927),
    P = t(964486),
    I = t(793574),
    f = t(688810),
    A = t(753390),
    x = t(160946),
    E = t(606267),
    _ = t(545075),
    b = t(155506),
    N = t(981036),
    C = t(725836),
    j = t(364995),
    v = t(666646),
    T = t(584160),
    M = t(480642),
    L = t(722847),
    D = t(357669),
    R = t(832286),
    G = t(958340),
    U = t(937008),
    O = t(536302),
    k = t(166532),
    w = t(566980),
    B = t(216641),
    F = t(925847),
    V = t(489254),
    Y = t(251913),
    W = t(632638),
    H = t(71393),
    z = t(178368),
    $ = t(825755),
    J = t(97352),
    K = t(166403),
    q = t(174459),
    Q = t(473145),
    Z = t(428262),
    X = t(83617),
    ee = t(802790),
    en = t(636441),
    et = t(587491),
    ei = t(285753),
    el = t(735305);
function es(e) {
    let { setBodyNode: n, setFooterNode: t } = (0, O.P5)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(el.x, { ...e }),
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
var er = t(615396),
    ea = t(61299),
    eu = t(295405);
let [eo, ec, ed] = (0, t(786300).A)();
function ep(e) {
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
        [g, y] = l.useState([]),
        { activeSubscription: h } = (0, O.P5)(),
        P = (0, u.bG)([K.A], () => K.A.hasFetchedSubscriptions()),
        I = (0, u.bG)([eu.A], () => eu.A.defaultPaymentSourceId),
        f = null != h ? h.paymentSourceId : null,
        A = (0, ea._V)(null != f ? f : P ? I : null);
    return (0, i.jsx)(eo.Provider, {
        value: {
            numGuildBoostsToPurchase: d,
            setNumGuildBoostsToPurchase: p,
            disablePremiumUpsell: t,
            closeGuildPerksModal: s,
            guildId: a,
            currency: m,
            setCurrency: S,
            currencies: g,
            setCurrencies: y,
            paymentModalArgs: A,
            premiumSubscriptionPaymentSourceId: f,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        },
        children: r,
    });
}
var em = t(879100),
    eS = t(788868);
function eg(e) {
    let { handleClose: n, existingAvailableSlots: t } = e,
        { guildId: l, numGuildBoostsToPurchase: s, paymentModalArgs: r } = ec(),
        { activeSubscription: a, startingFractionalPremiumEndsAtRef: o, customCheckoutFlow: c } = (0, O.P5)(),
        d = (0, L.t4)((e) => e.paymentSourceId),
        p = (0, u.bG)([G.A], () => (null != l ? G.A.getGuild(l) : void 0), [l]),
        m = null != l ? H.A.getGuild(l) : null,
        S = (0, h.A)(() => (0, er.b2)(o.current)),
        g = (0, u.bG)([J.A], () => (null != a ? (0, er.c9)(a.planId) : null)),
        { paymentSources: y } = r,
        P = (0, B.g)(y, d),
        I = null != m ? m.name : null != p ? p.name : void 0,
        f = S && null != g && !eS.YV.has(g.id);
    return (0, i.jsx)(em.W, {
        guild: m,
        guildBoostQuantity: s + t.length,
        onClose: n,
        withAnimation: !1,
        paymentSourceType: P,
        fallbackGuildName: I,
        didPurchaseOnFractionalPremium: f,
        customCheckoutFlow: c,
    });
}
var ey = t(683071),
    eh = t(512950),
    eP = t(87719);
let eI = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
t(321073);
var ef = t(503698),
    eA = t.n(ef),
    ex = t(661531),
    eE = t(990078),
    e_ = t(408278),
    eb = t(834040),
    eN = t(499373),
    eC = t(834730),
    ej = t(403581),
    ev = t(663803),
    eT = t(320448),
    eM = t(534514),
    eL = t(104510),
    eD = t(695366),
    eR = t(726656),
    eG = t(531260),
    eU = t(404374),
    eO = t(543767),
    ek = t(881489),
    ew = t(477421),
    eB = t(234419),
    eF = t(363476),
    eV = t(531506),
    eY = t(375708),
    eW = t(51465);
function eH() {
    return (0, i.jsxs)("div", {
        className: eA()(eW.dt, eW.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eW.qq,
            }),
            (0, i.jsx)(eC.E, {
                variant: "text-sm/medium",
                className: eW.tD,
                children: eY.intl.format(eY.t.f5VHKm, {}),
            }),
        ],
    });
}
function ez(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: eW.dt,
        children: [(0, i.jsx)(ej.t, { size: "md", className: eW.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var e$ = t(773669),
    eJ = t(287809),
    eK = t(975571),
    eq = t(252424),
    eQ = t(580630),
    eZ = t(155718),
    eX = t(376843),
    e0 = t(717925),
    e1 = t(596034),
    e3 = t(848584),
    e5 = t(241989),
    e6 = t(908419),
    e8 = t(888751),
    e4 = t(874638),
    e2 = t(692440),
    e7 = t(818348),
    e9 = t(327105),
    ne = t(7921);
function nn(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e6.U)();
    return (0, i.jsx)(e1._, {
        variant: {
            type: e1.I.Subscription,
            purchaseButtonText: eY.intl.string(eY.t.eUEeCt),
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
function nt(e) {
    return eY.intl.format(eY.t.IeaYqg, { endDate: e });
}
function ni(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: ne.bU }),
            (0, i.jsx)(eC.E, { variant: "text-sm/normal", className: ne.b7, children: n }),
            (0, i.jsx)("div", { className: ne.bU }),
        ],
    });
}
function nl(e) {
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
                label: eY.intl.formatToPlainString(eY.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, Z.Mn)(t.id, !1, i),
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
            label: eY.intl.formatToPlainString(eY.t.ZSVged, { planName: (0, Z.RH)(l[0].subscriptionPlanId) }),
            tooltip: eY.intl.string(eY.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eY.intl.string(eY.t["+as5ZZ"]),
                tooltip: eY.intl.string(eY.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: eY.intl.string(eY.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, e8.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e3.Vm, {
        defaultExpanded: !0,
        label: eY.intl.string(e9.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function ns(e) {
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
        ? (0, i.jsx)(e2.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e2.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function nr(e) {
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
                o = (0, u.bG)([H.A, G.A], () => {
                    let e = H.A.getGuild(t);
                    return null != e ? e : G.A.isGuildFetching(t) ? null : G.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([J.A], () => J.A.getForSkuAndInterval((0, Z.mH)(eS.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, Z.J$)(i.paymentSourceId),
                S = (0, ek.ds)();
            n = null != l ? (0, Z.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, f.Ay)(),
                [y, h] = (0, eO.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P, A] = (0, eO.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, v.OQ)({
                    checkoutInvoicePreview: y,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: P,
                    renewalInvoiceError: A,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: y,
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
            isSubscriptionUpdate: y,
            guild: h,
            isPrepaid: P,
            isReverseTrial: A,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: _,
        } = g,
        b = (0, E.A)({ location: "GuildBoostReview", message: eY.intl.string(e9.default["tK8A/8"]) }),
        N = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == x || null == _ || null == h) return (0, i.jsx)(e0.E, {});
    let C = (0, i.jsx)(ns, {
            isSubscriptionUpdate: y,
            premiumSubscription: a,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: _,
            isPrepaid: P,
            isReverseTrial: A,
            priceOptions: s,
        }),
        j = (0, i.jsx)(eX.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eY.intl.string(eY.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            additionalPaymentSourceDropdownProps: N,
            premiumSubscriptionPaymentSourceId: o,
            hideCurrencySelect: null != o,
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
                paymentSourceType: (0, B.g)(s, r),
                premiumSubscriptionPlan: t,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, e2.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: y,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: _,
            checkoutInvoicePreview: x,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(nn, { ...T }),
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
                m = (e) => (0, e4.Z)(i.invoiceItems).find((n) => eS.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                y = null != g ? S.quantity - g.quantity : S.quantity,
                h = i.invoiceItems.filter((e) => (0, Z.xq)(e.subscriptionPlanId)),
                P = h.reduce((e, n) => e + n.amount, 0),
                I = (0, eO.sL)(S) * y,
                f = (0, eQ.$g)(I, i.currency),
                A = (0, eQ.CE)(f, d, p),
                x = (0, eQ.$g)(i.total, i.currency) + (i.currency !== e7.Yr.USD ? "*" : ""),
                E = i.subtotal - I - P,
                _ = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * y };
                }),
                b = _.find((e) => e.type === eZ.iS.SUBSCRIPTION_PLAN),
                N = _.find((e) => e.type === eZ.iS.ENTITLEMENT),
                C = S.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: f,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, eQ.CE)((0, eQ.$g)(C, i.currency), d, p),
                formattedTotal: x,
                basePlanAdjustment: P,
                basePlanInvoiceItems: h,
                guildBoostingAdjustment: E,
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
            checkoutInvoicePreview: x,
            renewalInvoicePreview: _,
            priceOptions: s,
            reviewState: g,
        }),
        D = (0, i.jsx)(nl, { ...L }),
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
                label: eY.intl.formatToPlainString(eY.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, Z.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(e5.a6, {}),
                price: a,
                PriceIcon: c ? ej.t : void 0,
                priceTooltip: c ? eY.intl.string(e9.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            h,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: nt(i.currentPeriodEnd) } : null;
            })({ isPrepaid: P, isReverseTrial: A, premiumSubscription: a }),
        ),
        U = (0, i.jsx)(e5.f7, { ...R });
    return (0, i.jsx)(e0.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: U,
        subscriptionDetailsContent: C,
        paymentMethodContent: j,
        invoiceSummaryContent: D,
        legalContent: M,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: eY.intl.string(e9.default.R0cZsM),
    });
}
var na = t(652215);
t(26279);
var nu = t(406263);
function no(e) {
    return "" === e || "-" === e;
}
function nc(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), no(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: nu.U$,
        children: [
            (0, i.jsx)(e_.K, {
                variant: "secondary",
                size: "md",
                icon: eb.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eY.intl.string(eY.t["k+ohJm"]),
                disabled: !c || u <= s,
            }),
            (0, i.jsx)("div", {
                className: nu.WJ,
                children: (0, i.jsx)("input", {
                    className: nu.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (no(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        no(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(e_.K, {
                variant: "secondary",
                size: "md",
                icon: eN.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eY.intl.string(eY.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function nd(e) {
    let { message: n } = e;
    return (0, i.jsx)(eC.E, { variant: "text-xs/normal", color: "text-muted", className: nu.jH, children: n });
}
function np(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: nu.Vk,
        children: [
            (0, i.jsx)("div", {
                className: nu.D0,
                children: (0, i.jsx)(ej.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: nu.ue,
                    color: eU.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: nu.yP, children: n }),
        ],
    });
}
function nm(e) {
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
        legacyPricingNotes: y,
        refreshPricingNotes: h,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: ne.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: ne.E6,
                        children: [
                            (0, i.jsx)(ev.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: ne.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: ne.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eA()(ne.QK, { [ne.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: ne.J3 }),
            (0, i.jsxs)("div", {
                className: ne.mP,
                children: [
                    (0, i.jsx)("div", { className: ne.xp, children: eY.intl.string(eY.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: eA()(ne.__invalid_planSelectorSubtotalPrice, { [ne.S]: n }),
                        children: u,
                    }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nS(e) {
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
        refreshDiscountCallout: y,
        legacyPricingNotes: h,
        refreshPricingNotes: P,
    } = e;
    return (0, i.jsxs)("div", {
        className: nu.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: nu.K3,
                children: [
                    (0, i.jsx)(eC.E, {
                        variant: "text-md/medium",
                        className: nu.bk,
                        children: eY.intl.string(eY.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eT._, { className: nu.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(eC.E, { variant: "text-md/medium", className: nu.kX, children: r }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: nu.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: nu.fX,
                        children: [
                            (0, i.jsx)(nc, {
                                value: t,
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(eC.E, { variant: "text-md/medium", className: nu.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eA()(nu.El, { [ne.S]: n }), children: u }),
                ],
            }),
            y,
            (0, i.jsxs)("div", {
                className: nu.fh,
                children: [
                    (0, i.jsx)(eM.D, {
                        variant: "heading-lg/semibold",
                        className: nu.O3,
                        children: eY.intl.string(eY.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: eA()(nu.BU, { [ne.S]: n }), children: c }),
                ],
            }),
            P.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function ng(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: ne.Mv,
        children: [
            (0, i.jsx)(eL._, { className: ne.T5, color: ex.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eY.intl.format(eY.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(eE.m, {
                              text: eY.intl.formatToPlainString(eY.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eD.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: ne.Y5,
                                  color: ex.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ny(e) {
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
            refreshNextStepLabel: y = eY.intl.string(eY.t.QBnNHq),
        } = e,
        h = (function (e) {
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
                y =
                    ((n = (0, u.bG)([K.A], () => K.A.getPremiumTypeSubscription())),
                    (0, u.bG)([eu.A], () =>
                        n?.paymentSourceId != null ? eu.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                h = s.interval,
                P = s.intervalCount,
                A = (0, u.bG)([J.A], () => J.A.getForSkuAndInterval((0, Z.mH)(eS.pe.GUILD), h, P)),
                x = (0, u.bG)([eJ.default], () => eJ.default.getCurrentUser()),
                E = (0, eG.A)({ forceFetch: !1 });
            r()(null != A, "Missing guildBoostingSubscriptionPlan");
            let _ = [{ planId: A.id, quantity: 1 }],
                b = c?.items.find(
                    (e) => e.planId === eS.gD.PREMIUM_MONTH_TIER_2 || e.planId === eS.gD.PREMIUM_YEAR_TIER_2,
                );
            null != b && _.push(b);
            let N = c?.items.find(
                    (e) => e.planId === eS.gD.PREMIUM_MONTH_GUILD || e.planId === eS.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == y || !eS.uJ.has(y) || null == N,
                { analyticsLocations: j } = (0, f.Ay)(),
                [T, M] = (0, eO.YV)({
                    subscriptionId: c?.id,
                    items: _,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: C,
                    analyticsLocations: j,
                    analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, v.Tr)(T, M);
            let L = !C && null == T && null == M;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let D = (0, eB.V)()?.subscription_trial?.sku_id === eS.pe.TIER_2,
                R = Z.Ay.hasBoostDiscount(x),
                G = R && null != c && Z.Ay.isPremiumAtLeast(Z.Ay.getPremiumType(c.planId), eS.PremiumTypes.TIER_1),
                U = T?.findInvoiceItemByPlanId(A.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: T.currency }
                        : Z.Ay.getPrice(A.id, R, !1, S),
                k = a * O.amount,
                w = (0, ek.ds)() && R && null != c,
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
                            showFractionalPremiumBanner: i === eS.xc.FP_SUB_PAUSED,
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
                  (t = eY.intl.format(eY.t.hf6YOY, { planName: Z.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eY.intl.format("upsell_trial" === B.upsellVariant ? eY.t.ba1L74 : eY.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eq.l9)(e$.default.locale, eS.oX / 100),
                      freeSubscriptionCount: eS.M4,
                  }));
            let F = p.filter((e) => (0, Q.I5)(e)).length,
                V = (0, Z.J$)(S.paymentSourceId),
                { ipCountryCode: Y } = (0, ew.A)(),
                W = "HR" === Y && O.currency === e7.Yr.EUR,
                H =
                    w && null != c
                        ? (0, i.jsx)(ni, { text: nt(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: eA()(ne.hA, ne.G3), children: eY.intl.string(eY.t.jNY1FO) }),
                z =
                    w && null != c
                        ? (0, i.jsx)(ni, { text: nt(c.currentPeriodEnd), className: ne.jk })
                        : (0, i.jsx)("div", { className: nu._X, children: eY.intl.string(eY.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(ng, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                q = B.showFractionalPremiumBanner ? (0, i.jsx)(eV.vi, { fractionalPremiumInfo: E }) : null,
                X = V
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eS.WT.YEAR
                              ? eY.intl.string(eY.t.YDpAzZ)
                              : n === eS.WT.MONTH && 1 === t
                                ? eY.intl.string(eY.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: P }) ?? eY.intl.string(eY.t.K9Bmze))
                    : eY.intl.string(eY.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : V
                      ? (0, eQ.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eQ.$g)(n, t);
                            return i === eS.WT.YEAR
                                ? eY.intl.formatToPlainString(eY.t["8M04YJ"], { price: s })
                                : i === eS.WT.MONTH && 1 === l
                                  ? eY.intl.formatToPlainString(eY.t.VStWCR, { price: s })
                                  : i === eS.WT.MONTH && l > 1
                                    ? eY.intl.formatToPlainString(eY.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: h, intervalCount: P, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eF.A, {
                          price: k,
                          currency: O.currency,
                          intervalType: h,
                          intervalCount: P,
                          isPrepaidPaymentSource: V,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !V
                      ? (0, eQ.CE)((0, eQ.$g)(k, O.currency), h, P)
                      : (0, eQ.$g)(k, O.currency),
                ei = [],
                el = [];
            if (W) {
                let e = (0, i.jsx)(
                    eR.A,
                    {
                        message: eY.intl.formatToPlainString(eY.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eQ.$g)(7.5345 * k, e7.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let es = eY.intl.format(eY.t.Om31w8, { documentationLink: eK.A.getArticleURL(na.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(eR.A, { message: es }, "localized-pricing")),
                el.push((0, i.jsx)(nd, { message: es }, "localized-pricing")),
                {
                    isLoading: L,
                    planLabel: X,
                    planPriceContent: ee,
                    subtotalContent: en,
                    refreshSubtotalContent: et,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: z,
                    existingSlotNotice: $,
                    fractionalBanner: q,
                    legacyPricingNotes: ei,
                    refreshPricingNotes: el,
                    discountCallout:
                        "reverse_trial" === B.upsellVariant
                            ? (0, i.jsx)(eH, {})
                            : (0, i.jsx)(ez, { text: t, color: eU.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(eH, {}) : (0, i.jsx)(np, { text: t }),
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
    return (0, i.jsx)(S ? nS : nm, {
        isLoading: h.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
        planLabel: h.planLabel,
        planPriceContent: h.planPriceContent,
        subtotalContent: h.subtotalContent,
        refreshSubtotalContent: h.refreshSubtotalContent,
        legacyDescriptionContent: h.legacyDescriptionContent,
        refreshDescriptionContent: h.refreshDescriptionContent,
        fractionalBanner: h.fractionalBanner,
        existingSlotNotice: h.existingSlotNotice,
        discountCallout: h.discountCallout,
        refreshDiscountCallout: h.refreshDiscountCallout,
        legacyPricingNotes: h.legacyPricingNotes,
        refreshPricingNotes: h.refreshPricingNotes,
        refreshNextStepLabel: y,
    });
}
let nh = eS.gD.NONE_MONTH;
var nP = t(898640);
function nI(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        { activeSubscription: s } = (0, O.P5)(),
        {
            numGuildBoostsToPurchase: a,
            setNumGuildBoostsToPurchase: o,
            guildId: c,
            currency: d,
            closeGuildPerksModal: p,
        } = ec(),
        m = (0, L.t4)((e) => e.paymentSourceId),
        S = (0, h.A)(() => (0, Q.D$)(z.A.boostSlots)),
        g = (0, V.n)("GuildBoostPurchaseModal"),
        y = eI.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        P = g && y,
        I = (0, u.bG)([G.A], () => (null != c ? G.A.getGuild(c) : void 0), [c]),
        f = null != c ? H.A.getGuild(c) : null,
        A = null != s && s.isPurchasedExternally,
        x = (0, u.bG)([J.A], () => (null != s ? (0, er.c9)(s.planId) : null)),
        E = (0, u.bG)([J.A], () => (null == x ? J.A.get(nh) : x));
    r()(null != c, "Missing guildId"), r()(null != E, "Missing nextPremiumSubscriptionPlan");
    let _ = (0, i.jsx)(ny, {
        premiumSubscriptionPlan: E,
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
            n(), null != p && p(), (0, eP.e)();
        },
        priceOptions:
            null != m ? { paymentSourceId: m, currency: null != d ? d : void 0 } : { currency: null != d ? d : void 0 },
        isRefreshEnabled: g,
        showRefreshSubtotalRate: P,
        refreshNextStepLabel: l,
    });
    return (
        A && null != s && null != s.paymentGateway
            ? (_ = (0, i.jsxs)("div", {
                  className: nP.xK,
                  children: [
                      (0, i.jsx)(ey.w, {
                          type: "critical",
                          children: eY.intl.format(eY.t["/m3Y3s"], { paymentGatewayName: e7.qm[s.paymentGateway] }),
                      }),
                      _,
                  ],
              }))
            : null == c ||
              G.A.isGuildFetching(c) ||
              null != I ||
              null != f ||
              (_ = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eh.p, {
                          messageType: eh.Y.ERROR,
                          className: nP.MR,
                          children: eY.intl.string(eY.t.eAn6z2),
                      }),
                      _,
                  ],
              })),
        _
    );
}
var nf = t(460905),
    nA = t(183623),
    nx = t(95635),
    nE = t(935462),
    n_ = t(532794),
    nb = t(811611),
    nN = t(901017),
    nC = t(403052);
function nj(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([e$.default], () => e$.default.locale);
    return (0, i.jsxs)("div", {
        className: nC.mH,
        children: [
            (0, i.jsx)(nN.A, {
                icon: eL._,
                iconClassName: nC.pl,
                description: eY.intl.formatToPlainString(eY.t.sQBgs2, { numFreeGuildSubscriptions: eS.M4 }),
                color: ex.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nN.A, {
                icon: eL._,
                iconClassName: nC.pl,
                description: eY.intl.formatToPlainString(eY.t["1A6vXi"], { percent: (0, eq.l9)(t, eS.oX / 100) }),
                color: ex.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nN.A, { icon: nf.n, iconClassName: nC.zO, description: eY.intl.string(eY.t.Z9b2x2) }) : null,
            (0, i.jsx)(nN.A, { icon: nA.F, iconClassName: nC.Kg, description: eY.intl.string(eY.t["8dqG5E"]) }),
            (0, i.jsx)(nN.A, { icon: nx.J, iconClassName: nC.$z, description: eY.intl.string(eY.t.cBorIy) }),
        ],
    });
}
function nv(e) {
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
        { analyticsLocations: y, sourceAnalyticsLocations: h } = (0, f.Ay)(I.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        P = null == n || null == n.premiumSubscriptionType,
        A = Z.Ay.getPrice(eS.gD.PREMIUM_MONTH_TIER_2, !1, !1, g),
        x = (0, eQ.$g)(A.amount, A.currency),
        E = (0, eB.V)(),
        _ = E?.trial_id,
        b = E?.subscription_trial?.sku_id === eS.pe.TIER_2;
    return (
        l.useEffect(() => {
            q.default.track(na.HAw.PREMIUM_UPSELL_VIEWED, { type: eS.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nE.s_, { "data-migration-pending": !0, onClick: t, className: nC.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        b && (0, i.jsx)(nb.Vq, { className: nC.Fg }),
                        (0, i.jsx)("div", { className: eA()(nC.Tn, { [nC.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: nC.G3,
                            children:
                                null != _
                                    ? eY.intl.string(eY.t.AoSzEr)
                                    : eY.intl.format(eY.t["7vePZb"], { monthlyPrice: x }),
                        }),
                        (0, i.jsx)(nj, { shouldUpsellFromNoneTier: P }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eY.intl.string(eY.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eY.intl.string(eY.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != _ ? eY.intl.string(eY.t["Gd/XHF"]) : eY.intl.string(eY.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, n_.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eS.pe.TIER_2,
                                                    analyticsLocations: y,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: na.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function nT(e) {
    let { handleClose: n, handleStepChange: t, onSubscriptionConfirmation: s } = e,
        { activeSubscription: a } = (0, O.P5)(),
        { currency: o, paymentModalArgs: c, analyticsLocation: d, analyticsSourceLocation: p } = ec(),
        m = (0, L.t4)((e) => e.paymentSourceId),
        S = (0, u.bG)([J.A], () => (null != a ? (0, er.c9)(a.planId) : null)),
        g = (0, u.bG)([J.A], () => (null == S ? J.A.get(nh) : S));
    r()(null != g, "Missing nextPremiumSubscriptionPlan"), r()(null != o && "" !== o, "Currency not defined");
    let { paymentSources: y } = c,
        h = null != a ? a.paymentSourceId : null,
        P = Object.keys(y).length > 0,
        I = l.useCallback(() => t(k.pn.PLAN_SELECT), [t]),
        f = l.useCallback(() => t(null != h || P ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS), [t, h, P]);
    return (0, i.jsx)(nv, {
        premiumSubscriptionPlan: g,
        analyticsLocation: d,
        analyticsSourceLocation: p,
        onClose: n,
        onBack: I,
        onSkip: f,
        onSubscriptionConfirmation: s,
        priceOptions: null != m ? { paymentSourceId: m, currency: o } : { currency: o },
    });
}
var nM = t(253390);
function nL() {
    let { activeSubscription: e } = (0, O.P5)(),
        { numGuildBoostsToPurchase: n } = ec(),
        t = (0, u.bG)([J.A], () => null == e || null != J.A.get(e.planId)),
        i = (0, x.Y)(),
        s = (0, u.bG)([J.A], () => (null != e ? (0, er.c9)(e.planId) : null));
    return {
        newAdditionalPlans: l.useMemo(
            () => (null != e && t && i ? (0, nM.v)(e, n) : [{ planId: eS.gD.PREMIUM_MONTH_GUILD, quantity: n }]),
            [e, t, i, n],
        ),
        currentPremiumSubscriptionPlan: s,
        hasFetchedPremiumSubscriptionPlan: t,
    };
}
function nD(e) {
    let { handleStepChange: n } = e,
        { activeSubscription: t } = (0, O.P5)(),
        { guildId: s, currency: a, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: c } = ec(),
        { paymentSourceId: d, setPaymentSourceId: p } = (0, L.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        }));
    r()(null != s, "Missing guildId"), r()(null != a && "" !== a, "Currency not defined");
    let { paymentSources: m } = o,
        { newAdditionalPlans: S, currentPremiumSubscriptionPlan: g } = nL(),
        y = (0, u.bG)([J.A], () => (null == g ? J.A.get(nh) : g));
    r()(null != y, "Missing nextPremiumSubscriptionPlan");
    let h = null != d ? { paymentSourceId: d, currency: a } : { currency: a },
        P = l.useCallback(() => {
            n(k.pn.ADD_PAYMENT_STEPS), p(null);
        }, [n, p]);
    return (0, i.jsx)(nr, {
        guildId: s,
        paymentSources: m,
        priceOptions: h,
        currentPremiumSubscription: t,
        premiumSubscriptionPaymentSourceId: c,
        premiumSubscriptionPlan: y,
        newAdditionalPlans: S,
        paymentSourceId: d,
        setPaymentSourceId: p,
        onPaymentSourceAdd: P,
    });
}
let nR = [k.pn.PLAN_SELECT, k.pn.REVIEW, k.pn.CONFIRM],
    nG = [k.pn.PLAN_SELECT, k.pn.ADD_PAYMENT_STEPS, k.pn.REVIEW, k.pn.CONFIRM];
async function nU(e, n) {
    await (0, g.CD)();
    let t = (0, Q.D$)(z.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nO(e) {
    let {
        currentStep: n,
        isRefreshEnabled: t,
        backStep: l,
        handleStepChange: s,
        primaryButtonProps: a,
        secondaryButton: u,
        legacySubmitButton: c,
    } = e;
    return n === k.pn.CONFIRM
        ? null
        : n === k.pn.REVIEW
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
                                  text: eY.intl.string(eY.t["13/7kX"]),
                                  onClick: () => s(l),
                                  variant: "secondary",
                              })
                            : null,
                        (0, i.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(t && n === k.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [u, c],
                        }),
                    ],
                }),
            });
}
function nk(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: g,
            guildId: U,
            onSubscribeComplete: el,
            onSubscriptionConfirmation: er,
            applicationId: ea,
            intent: eu,
        } = e,
        {
            numGuildBoostsToPurchase: eo,
            currency: ed,
            setCurrency: ep,
            currencies: em,
            setCurrencies: ey,
            paymentModalArgs: eh,
            premiumSubscriptionPaymentSourceId: eP,
            disablePremiumUpsell: eI,
        } = ec(),
        { activeSubscription: ef, blockedPayments: eA, customCheckoutFlow: ex } = (0, O.P5)(),
        eE = (0, L.t4)((e) => e.hasAcceptedTerms),
        e_ = (0, E.A)({ location: "GuildBoostPurchaseModal", message: eY.intl.string(e9.default["tK8A/8"]) }),
        eb = (0, v.sw)(),
        eN = (0, u.bG)([K.A], () => K.A.hasFetchedSubscriptions()),
        { newAdditionalPlans: eC, currentPremiumSubscriptionPlan: ej, hasFetchedPremiumSubscriptionPlan: ev } = nL(),
        eT = l.useRef((0, Q.D$)(z.A.boostSlots)).current,
        eM = (0, u.bG)([G.A], () => (null != U ? G.A.getGuild(U) : void 0), [U]),
        {
            paymentSources: eL,
            setIsSubmittingCurrentStep: eD,
            paymentAuthenticationState: eR,
            isSubmittingCurrentStep: eG,
            paymentError: eU,
            purchaseErrorBlockRef: eO,
        } = eh,
        { paymentSourceId: ek, setPurchaseError: ew } = (0, L.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
        })),
        eB = Object.keys(eL).length > 0,
        { checkoutPaymentSources: eF } = (0, j.t)(),
        eV = (0, E.iB)({ checkoutPaymentSources: eF, paymentSourceId: ek, location: "GuildBoostPurchaseModal" }),
        eW = (0, u.bG)([$.A], () => $.A.popupCallbackCalled),
        eH = (0, x.Y)(),
        ez = l.useMemo(() => (0, F.A)(), []),
        [e$, eJ] = (0, h.A)(() => [ez ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eK } = (0, f.Ay)(o, I.A.GUILD_BOOST_PURCHASE_MODAL),
        eq = l.useMemo(
            () =>
                eC.find((e) => {
                    let { planId: n } = e;
                    return eS.pW.has(n);
                })?.planId ?? eS.gD.PREMIUM_MONTH_GUILD,
            [eC],
        ),
        eQ = (0, u.bG)([J.A], () => J.A.get(eq)?.skuId, [eq]),
        eZ = l.useMemo(
            () => ({
                load_id: e$,
                payment_type: e7.fr[e7.VV.SUBSCRIPTION],
                sku_id: (0, Z.mH)(eS.pe.GUILD),
                subscription_type: na.rzx.PREMIUM,
                subscription_plan_id: eq,
                quantity: eo,
                location: d,
                source: g,
                location_stack: eK,
                checkout_flow: b.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
                guild_id: U,
            }),
            [e$, d, eK, g, U, eo, eq],
        ),
        eX = l.useMemo(() => {
            let { guild_id: e, ...n } = eZ;
            return n;
        }, [eZ]);
    l.useEffect(() => {
        (0, X.c_)(ek);
    }, [ek]);
    let [e0, e1] = l.useState(k.pn.PLAN_SELECT),
        e3 = l.useMemo(() => Date.now(), [e0]),
        e5 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e1(e), ew(null);
                let i = Date.now();
                q.default.track(na.HAw.PAYMENT_FLOW_STEP, {
                    ...eZ,
                    from_step: null != t ? t : e0,
                    to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e3,
                    flow_duration_ms: i - eJ,
                    guild_id: U,
                    application_id: ea,
                });
            },
            [ew, eZ, e0, e3, eJ, U, ea],
        ),
        e6 = {
            paymentFlowFailedAnalyticsData: eX,
            flowStartTime: eJ,
            guildId: U,
            handleStepChange: e5,
            onSubscribeComplete: el,
            paymentSourceId: ek,
            setIsSubmittingCurrentStep: eD,
            setPurchaseError: ew,
        },
        e8 = l.useRef(e6);
    l.useEffect(() => {
        e8.current = e6;
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
            } = e8.current;
            (async () => {
                if (!0 === eW)
                    try {
                        if (null == $.A.redirectedPaymentId) return;
                        await (0, A.tn)($.A.redirectedPaymentId),
                            i(k.pn.CONFIRM),
                            nn(w.h.COMPLETED),
                            null != t && (await nU(t, null != eu)),
                            l?.();
                    } catch (t) {
                        nn(w.h.FAIL),
                            a(t),
                            q.default.track(na.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: na.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, A.bl)();
                    }
            })();
        }, [eW, eu]),
        (0, P.Ay)(() => {
            K.A.hasFetchedSubscriptions() || (0, A.hP)(),
                null == U ||
                    null != H.A.getGuild(U) ||
                    null != G.A.getGuild(U) ||
                    G.A.isGuildFetching(U) ||
                    (0, R.y)(U),
                (0, D.b)({ ...eZ, guild_id: U, application_id: ea, custom_checkout_flow: ex }),
                null != ef &&
                    null != ef.renewalMutations &&
                    q.default.track(na.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: U });
        });
    let [e4, e2] = l.useState(nR),
        [ne, nn] = l.useState(w.h.WAITING),
        nt = () => {
            s(ne === w.h.COMPLETED);
        },
        ni = null != ef && ef.isPurchasedExternally;
    l.useEffect(() => {
        eR !== Y.oc.PENDING &&
            e0 !== k.pn.CONFIRM &&
            null != eP &&
            (e4 !== nR && e2(nR), nR.includes(e0) || e0 === k.pn.PREMIUM_UPSELL || e5(k.pn.REVIEW)),
            e0 === k.pn.ADD_PAYMENT_STEPS && e4 !== nG && e2(nG),
            ni && e0 !== k.pn.PLAN_SELECT && e1(k.pn.PLAN_SELECT);
    }, [e0, e5, ni, eR, ef, eP, e4]),
        (0, Y.b)(e0, eR, e5, nn),
        (0, k.zT)(e0, ne, nn);
    let nl = (0, V.n)("GuildBoostPurchaseModal"),
        ns = nl && (e0 === k.pn.REVIEW || e0 === k.pn.CONFIRM),
        nr = (0, ei.A)(ns),
        [nu, no] = l.useState(!1),
        [nc, nd] = l.useState(!0),
        np = l.useMemo(() => JSON.stringify(em), [em]);
    if (
        (l.useEffect(() => {
            let e;
            eH &&
                (null != J.A.get(eS.gD.PREMIUM_MONTH_GUILD) && ey((e = (0, X._w)(eS.gD.PREMIUM_MONTH_GUILD, ek, !1))),
                null == ek && null != ef && null != ef.paymentSourceId ? ep(ef.currency) : null != e && ep(e[0]));
        }, [ek, ef, eH, np, ep, ey]),
        eA)
    )
        n = (0, i.jsx)(_.oO, {});
    else if (eN && ev && eH && null != ed && "" !== ed)
        if (ef?.isPausedOrPausePending && !ef.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nP.C, children: eY.intl.string(eY.t.mOWsF1) }),
            });
        else if (null != ef && null != ef.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nP.C, children: eY.intl.string(eY.t.npfhh0) }),
            });
        else if (e0 === k.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nT, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: nt,
                handleStepChange: e5,
                analyticsData: eZ,
                setAnalyticsData: e7.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: er,
            });
        else {
            let e, t, l, s;
            r()(ed, "Currency not defined");
            let a = null != ek ? { paymentSourceId: ek, currency: ed } : { currency: ed },
                u = H.A.getGuild(U),
                o = null;
            switch (e0) {
                case k.pn.PLAN_SELECT:
                    r()(null != U, "Missing guildId"),
                        (e = (0, i.jsx)(nI, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: nt,
                            handleStepChange: e5,
                            analyticsData: eZ,
                            setAnalyticsData: e7.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: nd,
                            refreshNextStepLabel: (0, k.Ir)(
                                e4.find((e) => e !== k.pn.PLAN_SELECT && e !== k.pn.CONFIRM) ?? k.pn.REVIEW,
                            ),
                        })),
                        (l = nl
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: eY.intl.string(eY.t["ETE/oC"]),
                                  onClick: nt,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eY.intl.string(eY.t.oEAioF),
                                  onClick: nt,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(S.$, {
                            variant: "primary",
                            text: eY.intl.string(eY.t["3PatSz"]),
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
                                isMissingGuildInformation: null == eM && null == u,
                            }),
                            onClick: () => {
                                eI || (null != ej && ej.premiumSubscriptionType === eS.PremiumTypes.TIER_2)
                                    ? e5(null != eP || eB ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS)
                                    : e5(k.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case k.pn.ADD_PAYMENT_STEPS:
                    break;
                case k.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(y.N, { className: nP.__invalid_body });
                    break;
                case k.pn.REVIEW:
                    (e = (0, i.jsx)(nD, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nt,
                        handleStepChange: e5,
                        analyticsData: eZ,
                        setAnalyticsData: e7.tE,
                        skipConfirm: !1,
                    })),
                        (t = k.pn.PLAN_SELECT);
                    let c = async () => {
                        r()(null != eC, "Missing newAdditionalPlans");
                        let e = (0, B.W)(eL, ek);
                        ew(null);
                        try {
                            nn(w.h.PURCHASING),
                                eD(!0),
                                r()(null != ek, "Missing paymentSourceId"),
                                r()(null != eb, "Missing invoicePreview");
                            let n = { amount: eb.total, currency: eb.currency },
                                t = a.currency ?? eb.currency,
                                i = (0, Z.U8)(ef, eC, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (q.default.track(na.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...eZ,
                                    duration_ms: Date.now() - eJ,
                                    guild_id: U,
                                    application_id: ea,
                                }),
                                nu)
                            )
                                return;
                            if (null == ef || null == ej) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, A.Ky)({
                                    items: eC,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void no(null != l.redirectURL);
                            } else {
                                let l = { items: (0, Z.aE)(ef, eC) };
                                (l.currency = ef.currency ?? t),
                                    (l.paymentSource = null != eP ? eL[eP] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, A.nV)(ef, l, n, i, eK);
                                if (s.redirectConfirmation) return void no(null != s.redirectURL);
                            }
                            null == eu && e5(k.pn.CONFIRM),
                                nn(w.h.COMPLETED),
                                null != U && (await nU(U, null != eu)),
                                null != eu && nt(),
                                el?.();
                        } catch (n) {
                            nn(w.h.FAIL),
                                ew(n),
                                q.default.track(na.HAw.PAYMENT_FLOW_FAILED, {
                                    ...eX,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === na.hes.CARD ? na.kM_.STRIPE : na.kM_.BRAINTREE) : null,
                                    payment_source_id: ek,
                                    duration_ms: Date.now() - eJ,
                                });
                        } finally {
                            nu || eD(!1);
                        }
                    };
                    (o = {
                        text: eY.intl.string(eY.t.eUEeCt),
                        loading: eG,
                        disabled: null == ek || !eE || null != e_ || eV,
                        onClick: c,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(N.p, { ...o }));
                    break;
                case k.pn.CONFIRM:
                    e = (0, i.jsx)(eg, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nt,
                        handleStepChange: e5,
                        analyticsData: eZ,
                        setAnalyticsData: e7.tE,
                        skipConfirm: !1,
                        existingAvailableSlots: eT,
                    });
            }
            let d = null != eU && null == (0, k.ou)(eU) ? eU : null;
            n =
                e0 === k.pn.ADD_PAYMENT_STEPS
                    ? (0, i.jsx)(es, {
                          subscriptionTier: null,
                          planGroup: [],
                          initialPlanId: null,
                          handleClose: nt,
                          handleStepChange: e5,
                          analyticsData: eZ,
                          setAnalyticsData: e7.tE,
                          skipConfirm: !1,
                      })
                    : (0, i.jsx)(W.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === k.pn.REVIEW || n === k.pn.CONFIRM || (t && n === k.pn.PLAN_SELECT);
                          })({ currentStep: e0, isBoostingPreCheckoutModalRefreshEnabled: nl }),
                          steps: e4,
                          currentStep: e0,
                          paymentError: d,
                          purchaseErrorBlockRef: eO,
                          hasCurrencies: em.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nO, {
                              currentStep: e0,
                              isRefreshEnabled: nl,
                              backStep: t,
                              handleStepChange: e5,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nP._5, children: (0, i.jsx)(m.y, {}) });
    let nm = (0, T.u)({ skuId: eQ, step: e0 }),
        nS = null;
    return (eA ||
        (nl && e0 !== k.pn.PREMIUM_UPSELL
            ? (nS = e0 === k.pn.REVIEW ? (0, i.jsx)(M.s3, { ...nm }) : (0, i.jsx)(M.s3, { title: nm.title }))
            : e0 === k.pn.REVIEW
              ? (nS = (0, i.jsx)(M.s3, { ...nm }))
              : e0 !== k.pn.PREMIUM_UPSELL &&
                (nS = (0, i.jsx)(ee.A, { onClose: nt, currentStep: e0, purchaseState: ne }))),
    nl && e0 === k.pn.CONFIRM)
        ? (0, i.jsx)(et.A, {
              mediaUrls: nr.mediaUrls,
              isSuccess: nr.isSuccess,
              transitionState: t,
              onClose: () => (nt(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(en.A, {
                      transitionState: t,
                      guild: H.A.getGuild(U),
                      guildBoostQuantity: eo + eT.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(C.e0, {
              children: (0, i.jsxs)(M.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nt(), Promise.resolve()),
                  children: [nS, n],
              }),
          });
}
function nw(e) {
    let {
            totalNumberOfSlotsToAssign: n = 1,
            disablePremiumUpsell: t,
            closeGuildPerksModal: l,
            guildId: s,
            analyticsLocation: r,
            analyticsSourceLocation: a,
        } = e,
        o = (0, u.bG)([K.A], () => K.A.getPremiumTypeSubscription()),
        { analyticsLocations: c } = (0, f.Ay)(I.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, h.A)(() => n - (0, Q.D$)(z.A.boostSlots).length);
    return (0, i.jsx)(f.f5, {
        value: c,
        children: (0, i.jsx)(O.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: nB,
            skuIDs: [],
            unifiedCheckoutFlow: b.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(U.Mq, {
                children: (0, i.jsx)(ep, {
                    initialNumGuildBoostsToPurchase: d,
                    disablePremiumUpsell: t,
                    closeGuildPerksModal: l,
                    guildId: s ?? null,
                    analyticsLocation: r,
                    analyticsSourceLocation: a,
                    children: (0, i.jsx)(nk, { ...e }),
                }),
            }),
        }),
    });
}
let nB = [{ key: k.pn.ADD_PAYMENT_STEPS, renderStep: () => (0, i.jsx)("div", {}) }];
