t.d(n, { default: () => nB });
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
    x = t(86379),
    E = t(160946),
    _ = t(606267),
    b = t(545075),
    N = t(892656),
    C = t(981036),
    j = t(725836),
    v = t(364995),
    T = t(666646),
    M = t(584160),
    L = t(480642),
    D = t(722847),
    R = t(357669),
    G = t(832286),
    U = t(958340),
    O = t(937008),
    k = t(768050),
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
    es = t(735305);
function er(e) {
    let { setBodyNode: n, setFooterNode: t } = (0, k.P5)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(es.x, { ...e }),
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
var ea = t(615396),
    eu = t(61299),
    eo = t(295405);
let [ec, ed, ep] = (0, t(786300).A)();
function em(e) {
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
        { activeSubscription: h } = (0, k.P5)(),
        P = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        I = (0, u.bG)([eo.A], () => eo.A.defaultPaymentSourceId),
        f = null != h ? h.paymentSourceId : null,
        A = (0, eu._V)(null != f ? f : P ? I : null);
    return (0, i.jsx)(ec.Provider, {
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
var eS = t(879100),
    eg = t(788868);
function ey(e) {
    let { handleClose: n, existingAvailableSlots: t } = e,
        { guildId: l, numGuildBoostsToPurchase: s, paymentModalArgs: r } = ed(),
        { activeSubscription: a, startingFractionalPremiumEndsAtRef: o, customCheckoutFlow: c } = (0, k.P5)(),
        d = (0, D.t4)((e) => e.paymentSourceId),
        p = (0, u.bG)([U.A], () => (null != l ? U.A.getGuild(l) : void 0), [l]),
        m = null != l ? z.A.getGuild(l) : null,
        S = (0, h.A)(() => (0, ea.b2)(o.current)),
        g = (0, u.bG)([K.A], () => (null != a ? (0, ea.c9)(a.planId) : null)),
        { paymentSources: y } = r,
        P = (0, F.g)(y, d),
        I = null != m ? m.name : null != p ? p.name : void 0,
        f = S && null != g && !eg.YV.has(g.id);
    return (0, i.jsx)(eS.W, {
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
var eh = t(683071),
    eP = t(512950),
    eI = t(87719);
let ef = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
t(321073);
var eA = t(503698),
    ex = t.n(eA),
    eE = t(661531),
    e_ = t(990078),
    eb = t(408278),
    eN = t(834040),
    eC = t(499373),
    ej = t(834730),
    ev = t(403581),
    eT = t(663803),
    eM = t(320448),
    eL = t(534514),
    eD = t(104510),
    eR = t(695366),
    eG = t(726656),
    eU = t(531260),
    eO = t(404374),
    ek = t(543767),
    ew = t(881489),
    eB = t(477421),
    eF = t(234419),
    eV = t(363476),
    eY = t(531506),
    eW = t(375708),
    eH = t(51465);
function ez() {
    return (0, i.jsxs)("div", {
        className: ex()(eH.dt, eH.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eH.qq,
            }),
            (0, i.jsx)(ej.E, {
                variant: "text-sm/medium",
                className: eH.tD,
                children: eW.intl.format(eW.t.f5VHKm, {}),
            }),
        ],
    });
}
function e$(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: eH.dt,
        children: [(0, i.jsx)(ev.t, { size: "md", className: eH.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var eJ = t(773669),
    eK = t(287809),
    eq = t(975571),
    eQ = t(252424),
    eZ = t(580630),
    eX = t(155718),
    e0 = t(376843),
    e1 = t(717925),
    e3 = t(596034),
    e6 = t(848584),
    e8 = t(241989),
    e5 = t(908419),
    e4 = t(888751),
    e2 = t(874638),
    e7 = t(692440),
    e9 = t(818348),
    ne = t(327105),
    nn = t(7921);
function nt(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e5.U)();
    return (0, i.jsx)(e3._, {
        variant: {
            type: e3.I.Subscription,
            purchaseButtonText: eW.intl.string(eW.t.eUEeCt),
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
function ni(e) {
    return eW.intl.format(eW.t.IeaYqg, { endDate: e });
}
function nl(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: nn.bU }),
            (0, i.jsx)(ej.E, { variant: "text-sm/normal", className: nn.b7, children: n }),
            (0, i.jsx)("div", { className: nn.bU }),
        ],
    });
}
function ns(e) {
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
                label: eW.intl.formatToPlainString(eW.t.a3cAOg, {
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
            label: eW.intl.formatToPlainString(eW.t.ZSVged, { planName: (0, X.RH)(l[0].subscriptionPlanId) }),
            tooltip: eW.intl.string(eW.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eW.intl.string(eW.t["+as5ZZ"]),
                tooltip: eW.intl.string(eW.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: eW.intl.string(eW.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, e4.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e6.Vm, {
        defaultExpanded: !0,
        label: eW.intl.string(ne.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function nr(e) {
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
        ? (0, i.jsx)(e7.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e7.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function na(e) {
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
                o = (0, u.bG)([z.A, U.A], () => {
                    let e = z.A.getGuild(t);
                    return null != e ? e : U.A.isGuildFetching(t) ? null : U.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eg.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                S = (0, ew.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, f.Ay)(),
                [y, h] = (0, ek.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P, A] = (0, ek.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, T.OQ)({
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
            renewalInvoicePreview: E,
        } = g,
        b = (0, _.A)({ location: "GuildBoostReview", message: eW.intl.string(ne.default["tK8A/8"]) }),
        N = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == x || null == E || null == h) return (0, i.jsx)(e1.E, {});
    let C = (0, i.jsx)(nr, {
            isSubscriptionUpdate: y,
            premiumSubscription: a,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: E,
            isPrepaid: P,
            isReverseTrial: A,
            priceOptions: s,
        }),
        j = (0, i.jsx)(e0.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eW.intl.string(eW.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            additionalPaymentSourceDropdownProps: N,
            premiumSubscriptionPaymentSourceId: o,
            hideCurrencySelect: null != o,
        }),
        v = (function (e) {
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
                startDate: (0, e7.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: y,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: E,
            checkoutInvoicePreview: x,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(nt, { ...v }),
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
                m = (e) => (0, e2.Z)(i.invoiceItems).find((n) => eg.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                y = null != g ? S.quantity - g.quantity : S.quantity,
                h = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                P = h.reduce((e, n) => e + n.amount, 0),
                I = (0, ek.sL)(S) * y,
                f = (0, eZ.$g)(I, i.currency),
                A = (0, eZ.CE)(f, d, p),
                x = (0, eZ.$g)(i.total, i.currency) + (i.currency !== e9.Yr.USD ? "*" : ""),
                E = i.subtotal - I - P,
                _ = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * y };
                }),
                b = _.find((e) => e.type === eX.iS.SUBSCRIPTION_PLAN),
                N = _.find((e) => e.type === eX.iS.ENTITLEMENT),
                C = S.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: f,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, eZ.CE)((0, eZ.$g)(C, i.currency), d, p),
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
            renewalInvoicePreview: E,
            priceOptions: s,
            reviewState: g,
        }),
        D = (0, i.jsx)(ns, { ...L }),
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
                label: eW.intl.formatToPlainString(eW.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, X.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(e8.a6, {}),
                price: a,
                PriceIcon: c ? ev.t : void 0,
                priceTooltip: c ? eW.intl.string(ne.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            h,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: ni(i.currentPeriodEnd) } : null;
            })({ isPrepaid: P, isReverseTrial: A, premiumSubscription: a }),
        ),
        G = (0, i.jsx)(e8.f7, { ...R });
    return (0, i.jsx)(e1.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: G,
        subscriptionDetailsContent: C,
        paymentMethodContent: j,
        invoiceSummaryContent: D,
        legalContent: M,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: eW.intl.string(ne.default.R0cZsM),
    });
}
var nu = t(652215);
t(26279);
var no = t(406263);
function nc(e) {
    return "" === e || "-" === e;
}
function nd(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), nc(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: no.U$,
        children: [
            (0, i.jsx)(eb.K, {
                variant: "secondary",
                size: "md",
                icon: eN.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eW.intl.string(eW.t["k+ohJm"]),
                disabled: !c || u <= s,
            }),
            (0, i.jsx)("div", {
                className: no.WJ,
                children: (0, i.jsx)("input", {
                    className: no.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (nc(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        nc(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(eb.K, {
                variant: "secondary",
                size: "md",
                icon: eC.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eW.intl.string(eW.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function np(e) {
    let { message: n } = e;
    return (0, i.jsx)(ej.E, { variant: "text-xs/normal", color: "text-muted", className: no.jH, children: n });
}
function nm(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: no.Vk,
        children: [
            (0, i.jsx)("div", {
                className: no.D0,
                children: (0, i.jsx)(ev.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: no.ue,
                    color: eO.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: no.yP, children: n }),
        ],
    });
}
function nS(e) {
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
                className: nn.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: nn.E6,
                        children: [
                            (0, i.jsx)(eT.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: nn.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: nn.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ex()(nn.QK, { [nn.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: nn.J3 }),
            (0, i.jsxs)("div", {
                className: nn.mP,
                children: [
                    (0, i.jsx)("div", { className: nn.xp, children: eW.intl.string(eW.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: ex()(nn.__invalid_planSelectorSubtotalPrice, { [nn.S]: n }),
                        children: u,
                    }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function ng(e) {
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
        className: no.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: no.K3,
                children: [
                    (0, i.jsx)(ej.E, {
                        variant: "text-md/medium",
                        className: no.bk,
                        children: eW.intl.string(eW.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eM._, { className: no.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ej.E, { variant: "text-md/medium", className: no.kX, children: r }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: no.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: no.fX,
                        children: [
                            (0, i.jsx)(nd, {
                                value: t,
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(ej.E, { variant: "text-md/medium", className: no.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ex()(no.El, { [nn.S]: n }), children: u }),
                ],
            }),
            y,
            (0, i.jsxs)("div", {
                className: no.fh,
                children: [
                    (0, i.jsx)(eL.D, {
                        variant: "heading-lg/semibold",
                        className: no.O3,
                        children: eW.intl.string(eW.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: ex()(no.BU, { [nn.S]: n }), children: c }),
                ],
            }),
            P.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function ny(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: nn.Mv,
        children: [
            (0, i.jsx)(eD._, { className: nn.T5, color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eW.intl.format(eW.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(e_.m, {
                              text: eW.intl.formatToPlainString(eW.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eR.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: nn.Y5,
                                  color: eE.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function nh(e) {
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
            refreshNextStepLabel: y = eW.intl.string(eW.t.QBnNHq),
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
                    ((n = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription())),
                    (0, u.bG)([eo.A], () =>
                        n?.paymentSourceId != null ? eo.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                h = s.interval,
                P = s.intervalCount,
                A = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eg.pe.GUILD), h, P)),
                x = (0, u.bG)([eK.default], () => eK.default.getCurrentUser()),
                E = (0, eU.A)({ forceFetch: !1 });
            r()(null != A, "Missing guildBoostingSubscriptionPlan");
            let _ = [{ planId: A.id, quantity: 1 }],
                b = c?.items.find(
                    (e) => e.planId === eg.gD.PREMIUM_MONTH_TIER_2 || e.planId === eg.gD.PREMIUM_YEAR_TIER_2,
                );
            null != b && _.push(b);
            let N = c?.items.find(
                    (e) => e.planId === eg.gD.PREMIUM_MONTH_GUILD || e.planId === eg.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == y || !eg.uJ.has(y) || null == N,
                { analyticsLocations: j } = (0, f.Ay)(),
                [v, M] = (0, ek.YV)({
                    subscriptionId: c?.id,
                    items: _,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: C,
                    analyticsLocations: j,
                    analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, T.Tr)(v, M);
            let L = !C && null == v && null == M;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let D = (0, eF.V)()?.subscription_trial?.sku_id === eg.pe.TIER_2,
                R = X.Ay.hasBoostDiscount(x),
                G = R && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), eg.PremiumTypes.TIER_1),
                U = v?.findInvoiceItemByPlanId(A.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : X.Ay.getPrice(A.id, R, !1, S),
                k = a * O.amount,
                w = (0, ew.ds)() && R && null != c,
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
                            showFractionalPremiumBanner: i === eg.xc.FP_SUB_PAUSED,
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
                  (t = eW.intl.format(eW.t.hf6YOY, { planName: X.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eW.intl.format("upsell_trial" === B.upsellVariant ? eW.t.ba1L74 : eW.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eQ.l9)(eJ.default.locale, eg.oX / 100),
                      freeSubscriptionCount: eg.M4,
                  }));
            let F = p.filter((e) => (0, Z.I5)(e)).length,
                V = (0, X.J$)(S.paymentSourceId),
                { ipCountryCode: Y } = (0, eB.A)(),
                W = "HR" === Y && O.currency === e9.Yr.EUR,
                H =
                    w && null != c
                        ? (0, i.jsx)(nl, { text: ni(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: ex()(nn.hA, nn.G3), children: eW.intl.string(eW.t.jNY1FO) }),
                z =
                    w && null != c
                        ? (0, i.jsx)(nl, { text: ni(c.currentPeriodEnd), className: nn.jk })
                        : (0, i.jsx)("div", { className: no._X, children: eW.intl.string(eW.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(ny, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eY.vi, { fractionalPremiumInfo: E }) : null,
                Q = V
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eg.WT.YEAR
                              ? eW.intl.string(eW.t.YDpAzZ)
                              : n === eg.WT.MONTH && 1 === t
                                ? eW.intl.string(eW.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: P }) ?? eW.intl.string(eW.t.K9Bmze))
                    : eW.intl.string(eW.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : V
                      ? (0, eZ.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eZ.$g)(n, t);
                            return i === eg.WT.YEAR
                                ? eW.intl.formatToPlainString(eW.t["8M04YJ"], { price: s })
                                : i === eg.WT.MONTH && 1 === l
                                  ? eW.intl.formatToPlainString(eW.t.VStWCR, { price: s })
                                  : i === eg.WT.MONTH && l > 1
                                    ? eW.intl.formatToPlainString(eW.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: h, intervalCount: P, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eV.A, {
                          price: k,
                          currency: O.currency,
                          intervalType: h,
                          intervalCount: P,
                          isPrepaidPaymentSource: V,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !V
                      ? (0, eZ.CE)((0, eZ.$g)(k, O.currency), h, P)
                      : (0, eZ.$g)(k, O.currency),
                ei = [],
                el = [];
            if (W) {
                let e = (0, i.jsx)(
                    eG.A,
                    {
                        message: eW.intl.formatToPlainString(eW.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eZ.$g)(7.5345 * k, e9.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let es = eW.intl.format(eW.t.Om31w8, { documentationLink: eq.A.getArticleURL(nu.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(eG.A, { message: es }, "localized-pricing")),
                el.push((0, i.jsx)(np, { message: es }, "localized-pricing")),
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
                            ? (0, i.jsx)(ez, {})
                            : (0, i.jsx)(e$, { text: t, color: eO.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(ez, {}) : (0, i.jsx)(nm, { text: t }),
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
    return (0, i.jsx)(S ? ng : nS, {
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
let nP = eg.gD.NONE_MONTH;
var nI = t(898640);
function nf(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        { activeSubscription: s } = (0, k.P5)(),
        {
            numGuildBoostsToPurchase: a,
            setNumGuildBoostsToPurchase: o,
            guildId: c,
            currency: d,
            closeGuildPerksModal: p,
        } = ed(),
        m = (0, D.t4)((e) => e.paymentSourceId),
        S = (0, h.A)(() => (0, Z.D$)($.A.boostSlots)),
        g = (0, Y.n)("GuildBoostPurchaseModal"),
        y = ef.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        P = g && y,
        I = (0, u.bG)([U.A], () => (null != c ? U.A.getGuild(c) : void 0), [c]),
        f = null != c ? z.A.getGuild(c) : null,
        A = null != s && s.isPurchasedExternally,
        x = (0, u.bG)([K.A], () => (null != s ? (0, ea.c9)(s.planId) : null)),
        E = (0, u.bG)([K.A], () => (null == x ? K.A.get(nP) : x));
    r()(null != c, "Missing guildId"), r()(null != E, "Missing nextPremiumSubscriptionPlan");
    let _ = (0, i.jsx)(nh, {
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
            n(), null != p && p(), (0, eI.e)();
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
                  className: nI.xK,
                  children: [
                      (0, i.jsx)(eh.w, {
                          type: "critical",
                          children: eW.intl.format(eW.t["/m3Y3s"], { paymentGatewayName: e9.qm[s.paymentGateway] }),
                      }),
                      _,
                  ],
              }))
            : null == c ||
              U.A.isGuildFetching(c) ||
              null != I ||
              null != f ||
              (_ = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eP.p, {
                          messageType: eP.Y.ERROR,
                          className: nI.MR,
                          children: eW.intl.string(eW.t.eAn6z2),
                      }),
                      _,
                  ],
              })),
        _
    );
}
var nA = t(460905),
    nx = t(183623),
    nE = t(95635),
    n_ = t(935462),
    nb = t(532794),
    nN = t(811611),
    nC = t(901017),
    nj = t(403052);
function nv(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eJ.default], () => eJ.default.locale);
    return (0, i.jsxs)("div", {
        className: nj.mH,
        children: [
            (0, i.jsx)(nC.A, {
                icon: eD._,
                iconClassName: nj.pl,
                description: eW.intl.formatToPlainString(eW.t.sQBgs2, { numFreeGuildSubscriptions: eg.M4 }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nC.A, {
                icon: eD._,
                iconClassName: nj.pl,
                description: eW.intl.formatToPlainString(eW.t["1A6vXi"], { percent: (0, eQ.l9)(t, eg.oX / 100) }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nC.A, { icon: nA.n, iconClassName: nj.zO, description: eW.intl.string(eW.t.Z9b2x2) }) : null,
            (0, i.jsx)(nC.A, { icon: nx.F, iconClassName: nj.Kg, description: eW.intl.string(eW.t["8dqG5E"]) }),
            (0, i.jsx)(nC.A, { icon: nE.J, iconClassName: nj.$z, description: eW.intl.string(eW.t.cBorIy) }),
        ],
    });
}
function nT(e) {
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
        A = X.Ay.getPrice(eg.gD.PREMIUM_MONTH_TIER_2, !1, !1, g),
        x = (0, eZ.$g)(A.amount, A.currency),
        E = (0, eF.V)(),
        _ = E?.trial_id,
        b = E?.subscription_trial?.sku_id === eg.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(nu.HAw.PREMIUM_UPSELL_VIEWED, { type: eg.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n_.s_, { "data-migration-pending": !0, onClick: t, className: nj.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        b && (0, i.jsx)(nN.Vq, { className: nj.Fg }),
                        (0, i.jsx)("div", { className: ex()(nj.Tn, { [nj.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: nj.G3,
                            children:
                                null != _
                                    ? eW.intl.string(eW.t.AoSzEr)
                                    : eW.intl.format(eW.t["7vePZb"], { monthlyPrice: x }),
                        }),
                        (0, i.jsx)(nv, { shouldUpsellFromNoneTier: P }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eW.intl.string(eW.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eW.intl.string(eW.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(S.$, {
                                        variant: "active",
                                        text: null != _ ? eW.intl.string(eW.t["Gd/XHF"]) : eW.intl.string(eW.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nb.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eg.pe.TIER_2,
                                                    analyticsLocations: y,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: nu.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
function nM(e) {
    let { handleClose: n, handleStepChange: t, onSubscriptionConfirmation: s } = e,
        { activeSubscription: a } = (0, k.P5)(),
        { currency: o, paymentModalArgs: c, analyticsLocation: d, analyticsSourceLocation: p } = ed(),
        m = (0, D.t4)((e) => e.paymentSourceId),
        S = (0, u.bG)([K.A], () => (null != a ? (0, ea.c9)(a.planId) : null)),
        g = (0, u.bG)([K.A], () => (null == S ? K.A.get(nP) : S));
    r()(null != g, "Missing nextPremiumSubscriptionPlan"), r()(null != o && "" !== o, "Currency not defined");
    let { paymentSources: y } = c,
        h = null != a ? a.paymentSourceId : null,
        P = Object.keys(y).length > 0,
        I = l.useCallback(() => t(w.pn.PLAN_SELECT), [t]),
        f = l.useCallback(() => t(null != h || P ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS), [t, h, P]);
    return (0, i.jsx)(nT, {
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
var nL = t(253390);
function nD() {
    let { activeSubscription: e } = (0, k.P5)(),
        { numGuildBoostsToPurchase: n } = ed(),
        t = (0, u.bG)([K.A], () => null == e || null != K.A.get(e.planId)),
        i = (0, E.Y)(),
        s = (0, u.bG)([K.A], () => (null != e ? (0, ea.c9)(e.planId) : null));
    return {
        newAdditionalPlans: l.useMemo(
            () => (null != e && t && i ? (0, nL.v)(e, n) : [{ planId: eg.gD.PREMIUM_MONTH_GUILD, quantity: n }]),
            [e, t, i, n],
        ),
        currentPremiumSubscriptionPlan: s,
        hasFetchedPremiumSubscriptionPlan: t,
    };
}
function nR(e) {
    let { handleStepChange: n } = e,
        { activeSubscription: t } = (0, k.P5)(),
        { guildId: s, currency: a, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: c } = ed(),
        { paymentSourceId: d, setPaymentSourceId: p } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        }));
    r()(null != s, "Missing guildId"), r()(null != a && "" !== a, "Currency not defined");
    let { paymentSources: m } = o,
        { newAdditionalPlans: S, currentPremiumSubscriptionPlan: g } = nD(),
        y = (0, u.bG)([K.A], () => (null == g ? K.A.get(nP) : g));
    r()(null != y, "Missing nextPremiumSubscriptionPlan");
    let h = null != d ? { paymentSourceId: d, currency: a } : { currency: a },
        P = l.useCallback(() => {
            n(w.pn.ADD_PAYMENT_STEPS), p(null);
        }, [n, p]);
    return (0, i.jsx)(na, {
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
let nG = [w.pn.PLAN_SELECT, w.pn.REVIEW, w.pn.CONFIRM],
    nU = [w.pn.PLAN_SELECT, w.pn.ADD_PAYMENT_STEPS, w.pn.REVIEW, w.pn.CONFIRM];
async function nO(e, n) {
    await (0, g.CD)();
    let t = (0, Z.D$)($.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nk(e) {
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
            (0, i.jsx)(L.lo, { onBackClick: null != l ? () => s(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: eW.intl.string(eW.t["13/7kX"]),
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
function nw(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: g,
            guildId: O,
            onSubscribeComplete: es,
            onSubscriptionConfirmation: ea,
            applicationId: eu,
            intent: eo,
        } = e,
        {
            numGuildBoostsToPurchase: ec,
            currency: ep,
            setCurrency: em,
            currencies: eS,
            setCurrencies: eh,
            paymentModalArgs: eP,
            premiumSubscriptionPaymentSourceId: eI,
            disablePremiumUpsell: ef,
        } = ed(),
        { activeSubscription: eA, customCheckoutFlow: ex } = (0, k.P5)(),
        eE = (0, x.Hp)(),
        e_ = (0, D.t4)((e) => e.hasAcceptedTerms),
        eb = (0, _.A)({ location: "GuildBoostPurchaseModal", message: eW.intl.string(ne.default["tK8A/8"]) }),
        eN = (0, T.sw)(),
        eC = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        { newAdditionalPlans: ej, currentPremiumSubscriptionPlan: ev, hasFetchedPremiumSubscriptionPlan: eT } = nD(),
        eM = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        eL = (0, u.bG)([U.A], () => (null != O ? U.A.getGuild(O) : void 0), [O]),
        {
            paymentSources: eD,
            setIsSubmittingCurrentStep: eR,
            paymentAuthenticationState: eG,
            isSubmittingCurrentStep: eU,
            paymentError: eO,
            purchaseErrorBlockRef: ek,
        } = eP,
        { paymentSourceId: ew, setPurchaseError: eB } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
        })),
        eF = Object.keys(eD).length > 0,
        { checkoutPaymentSources: eV } = (0, v.t)(),
        eY = (0, _.iB)({ checkoutPaymentSources: eV, paymentSourceId: ew, location: "GuildBoostPurchaseModal" }),
        eH = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        ez = (0, E.Y)(),
        e$ = l.useMemo(() => (0, V.A)(), []),
        [eJ, eK] = (0, h.A)(() => [e$ ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eq } = (0, f.Ay)(o, I.A.GUILD_BOOST_PURCHASE_MODAL),
        eQ = l.useMemo(
            () =>
                ej.find((e) => {
                    let { planId: n } = e;
                    return eg.pW.has(n);
                })?.planId ?? eg.gD.PREMIUM_MONTH_GUILD,
            [ej],
        ),
        eZ = (0, u.bG)([K.A], () => K.A.get(eQ)?.skuId, [eQ]),
        eX = l.useMemo(
            () => ({
                load_id: eJ,
                payment_type: e9.fr[e9.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(eg.pe.GUILD),
                subscription_type: nu.rzx.PREMIUM,
                subscription_plan_id: eQ,
                quantity: ec,
                location: d,
                source: g,
                location_stack: eq,
                checkout_flow: N.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
                guild_id: O,
            }),
            [eJ, d, eq, g, O, ec, eQ],
        ),
        e0 = l.useMemo(() => {
            let { guild_id: e, ...n } = eX;
            return n;
        }, [eX]);
    l.useEffect(() => {
        (0, ee.c_)(ew);
    }, [ew]);
    let [e1, e3] = l.useState(w.pn.PLAN_SELECT),
        e6 = l.useMemo(() => Date.now(), [e1]),
        e8 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e3(e), eB(null);
                let i = Date.now();
                Q.default.track(nu.HAw.PAYMENT_FLOW_STEP, {
                    ...eX,
                    from_step: null != t ? t : e1,
                    to_step: e === w.pn.ADD_PAYMENT_STEPS ? w.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e6,
                    flow_duration_ms: i - eK,
                    guild_id: O,
                    application_id: eu,
                });
            },
            [eB, eX, e1, e6, eK, O, eu],
        ),
        e5 = {
            paymentFlowFailedAnalyticsData: e0,
            flowStartTime: eK,
            guildId: O,
            handleStepChange: e8,
            onSubscribeComplete: es,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: eR,
            setPurchaseError: eB,
        },
        e4 = l.useRef(e5);
    l.useEffect(() => {
        e4.current = e5;
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
                if (!0 === eH)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, A.tn)(J.A.redirectedPaymentId),
                            i(w.pn.CONFIRM),
                            nt(B.h.COMPLETED),
                            null != t && (await nO(t, null != eo)),
                            l?.();
                    } catch (t) {
                        nt(B.h.FAIL),
                            a(t),
                            Q.default.track(nu.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: nu.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, A.bl)();
                    }
            })();
        }, [eH, eo]),
        (0, P.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, A.hP)(),
                null == O ||
                    null != z.A.getGuild(O) ||
                    null != U.A.getGuild(O) ||
                    U.A.isGuildFetching(O) ||
                    (0, G.y)(O),
                (0, R.b)({ ...eX, guild_id: O, application_id: eu, custom_checkout_flow: ex }),
                null != eA &&
                    null != eA.renewalMutations &&
                    Q.default.track(nu.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: O });
        });
    let [e2, e7] = l.useState(nG),
        [nn, nt] = l.useState(B.h.WAITING),
        ni = () => {
            s(nn === B.h.COMPLETED);
        },
        nl = null != eA && eA.isPurchasedExternally;
    l.useEffect(() => {
        eG !== W.oc.PENDING &&
            e1 !== w.pn.CONFIRM &&
            null != eI &&
            (e2 !== nG && e7(nG), nG.includes(e1) || e1 === w.pn.PREMIUM_UPSELL || e8(w.pn.REVIEW)),
            e1 === w.pn.ADD_PAYMENT_STEPS && e2 !== nU && e7(nU),
            nl && e1 !== w.pn.PLAN_SELECT && e3(w.pn.PLAN_SELECT);
    }, [e1, e8, nl, eG, eA, eI, e2]),
        (0, W.b)(e1, eG, e8, nt),
        (0, w.zT)(e1, nn, nt);
    let ns = (0, Y.n)("GuildBoostPurchaseModal"),
        nr = ns && (e1 === w.pn.REVIEW || e1 === w.pn.CONFIRM),
        na = (0, el.A)(nr),
        [no, nc] = l.useState(!1),
        [nd, np] = l.useState(!0),
        nm = l.useMemo(() => JSON.stringify(eS), [eS]);
    if (
        (l.useEffect(() => {
            let e;
            ez &&
                (null != K.A.get(eg.gD.PREMIUM_MONTH_GUILD) && eh((e = (0, ee._w)(eg.gD.PREMIUM_MONTH_GUILD, ew, !1))),
                null == ew && null != eA && null != eA.paymentSourceId ? em(eA.currency) : null != e && em(e[0]));
        }, [ew, eA, ez, nm, em, eh]),
        eE)
    )
        n = (0, i.jsx)(b.oO, {});
    else if (eC && eT && ez && null != ep && "" !== ep)
        if (eA?.isPausedOrPausePending && !eA.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nI.C, children: eW.intl.string(eW.t.mOWsF1) }),
            });
        else if (null != eA && null != eA.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nI.C, children: eW.intl.string(eW.t.npfhh0) }),
            });
        else if (e1 === w.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nM, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: ni,
                handleStepChange: e8,
                analyticsData: eX,
                setAnalyticsData: e9.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: ea,
            });
        else {
            let e, t, l, s;
            r()(ep, "Currency not defined");
            let a = null != ew ? { paymentSourceId: ew, currency: ep } : { currency: ep },
                u = z.A.getGuild(O),
                o = null;
            switch (e1) {
                case w.pn.PLAN_SELECT:
                    r()(null != O, "Missing guildId"),
                        (e = (0, i.jsx)(nf, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: ni,
                            handleStepChange: e8,
                            analyticsData: eX,
                            setAnalyticsData: e9.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: np,
                            refreshNextStepLabel: (0, w.Ir)(
                                e2.find((e) => e !== w.pn.PLAN_SELECT && e !== w.pn.CONFIRM) ?? w.pn.REVIEW,
                            ),
                        })),
                        (l = ns
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: eW.intl.string(eW.t["ETE/oC"]),
                                  onClick: ni,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eW.intl.string(eW.t.oEAioF),
                                  onClick: ni,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(S.$, {
                            variant: "primary",
                            text: eW.intl.string(eW.t["3PatSz"]),
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
                                forceDisableSubmitButton: nd,
                                numGuildBoostsToPurchase: ec,
                                isDisabledBecauseExternalSubscription: nl,
                                isMissingGuildInformation: null == eL && null == u,
                            }),
                            onClick: () => {
                                ef || (null != ev && ev.premiumSubscriptionType === eg.PremiumTypes.TIER_2)
                                    ? e8(null != eI || eF ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS)
                                    : e8(w.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case w.pn.ADD_PAYMENT_STEPS:
                    break;
                case w.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(y.N, { className: nI.__invalid_body });
                    break;
                case w.pn.REVIEW:
                    (e = (0, i.jsx)(nR, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: ni,
                        handleStepChange: e8,
                        analyticsData: eX,
                        setAnalyticsData: e9.tE,
                        skipConfirm: !1,
                    })),
                        (t = w.pn.PLAN_SELECT);
                    let c = async () => {
                        r()(null != ej, "Missing newAdditionalPlans");
                        let e = (0, F.W)(eD, ew);
                        eB(null);
                        try {
                            nt(B.h.PURCHASING),
                                eR(!0),
                                r()(null != ew, "Missing paymentSourceId"),
                                r()(null != eN, "Missing invoicePreview");
                            let n = { amount: eN.total, currency: eN.currency },
                                t = a.currency ?? eN.currency,
                                i = (0, X.U8)(eA, ej, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(nu.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...eX,
                                    duration_ms: Date.now() - eK,
                                    guild_id: O,
                                    application_id: eu,
                                }),
                                no)
                            )
                                return;
                            if (null == eA || null == ev) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, A.Ky)({
                                    items: ej,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nc(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(eA, ej) };
                                (l.currency = eA.currency ?? t),
                                    (l.paymentSource = null != eI ? eD[eI] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, A.nV)(eA, l, n, i, eq);
                                if (s.redirectConfirmation) return void nc(null != s.redirectURL);
                            }
                            null == eo && e8(w.pn.CONFIRM),
                                nt(B.h.COMPLETED),
                                null != O && (await nO(O, null != eo)),
                                null != eo && ni(),
                                es?.();
                        } catch (n) {
                            nt(B.h.FAIL),
                                eB(n),
                                Q.default.track(nu.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e0,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === nu.hes.CARD ? nu.kM_.STRIPE : nu.kM_.BRAINTREE) : null,
                                    payment_source_id: ew,
                                    duration_ms: Date.now() - eK,
                                });
                        } finally {
                            no || eR(!1);
                        }
                    };
                    (o = {
                        text: eW.intl.string(eW.t.eUEeCt),
                        loading: eU,
                        disabled: null == ew || !e_ || null != eb || eY,
                        onClick: c,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(C.p, { ...o }));
                    break;
                case w.pn.CONFIRM:
                    e = (0, i.jsx)(ey, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: ni,
                        handleStepChange: e8,
                        analyticsData: eX,
                        setAnalyticsData: e9.tE,
                        skipConfirm: !1,
                        existingAvailableSlots: eM,
                    });
            }
            let d = null != eO && null == (0, w.ou)(eO) ? eO : null;
            n =
                e1 === w.pn.ADD_PAYMENT_STEPS
                    ? (0, i.jsx)(er, {
                          subscriptionTier: null,
                          planGroup: [],
                          initialPlanId: null,
                          handleClose: ni,
                          handleStepChange: e8,
                          analyticsData: eX,
                          setAnalyticsData: e9.tE,
                          skipConfirm: !1,
                      })
                    : (0, i.jsx)(H.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === w.pn.REVIEW || n === w.pn.CONFIRM || (t && n === w.pn.PLAN_SELECT);
                          })({ currentStep: e1, isBoostingPreCheckoutModalRefreshEnabled: ns }),
                          steps: e2,
                          currentStep: e1,
                          paymentError: d,
                          purchaseErrorBlockRef: ek,
                          hasCurrencies: eS.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nk, {
                              currentStep: e1,
                              isRefreshEnabled: ns,
                              backStep: t,
                              handleStepChange: e8,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nI._5, children: (0, i.jsx)(m.y, {}) });
    let nS = (0, M.u)({ skuId: eZ, step: e1 }),
        ng = null;
    return (eE ||
        (ns && e1 !== w.pn.PREMIUM_UPSELL
            ? (ng = e1 === w.pn.REVIEW ? (0, i.jsx)(L.s3, { ...nS }) : (0, i.jsx)(L.s3, { title: nS.title }))
            : e1 === w.pn.REVIEW
              ? (ng = (0, i.jsx)(L.s3, { ...nS }))
              : e1 !== w.pn.PREMIUM_UPSELL &&
                (ng = (0, i.jsx)(en.A, { onClose: ni, currentStep: e1, purchaseState: nn }))),
    ns && e1 === w.pn.CONFIRM)
        ? (0, i.jsx)(ei.A, {
              mediaUrls: na.mediaUrls,
              isSuccess: na.isSuccess,
              transitionState: t,
              onClose: () => (ni(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(et.A, {
                      transitionState: t,
                      guild: z.A.getGuild(O),
                      guildBoostQuantity: ec + eM.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(j.e0, {
              children: (0, i.jsxs)(L.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (ni(), Promise.resolve()),
                  children: [ng, n],
              }),
          });
}
function nB(e) {
    let {
            totalNumberOfSlotsToAssign: n = 1,
            disablePremiumUpsell: t,
            closeGuildPerksModal: l,
            guildId: s,
            analyticsLocation: r,
            analyticsSourceLocation: a,
        } = e,
        o = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: c } = (0, f.Ay)(I.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, h.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(f.f5, {
        value: c,
        children: (0, i.jsx)(k.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: nF,
            skuIDs: [],
            unifiedCheckoutFlow: N.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(O.Mq, {
                children: (0, i.jsx)(em, {
                    initialNumGuildBoostsToPurchase: d,
                    disablePremiumUpsell: t,
                    closeGuildPerksModal: l,
                    guildId: s ?? null,
                    analyticsLocation: r,
                    analyticsSourceLocation: a,
                    children: (0, i.jsx)(nw, { ...e }),
                }),
            }),
        }),
    });
}
let nF = [{ key: w.pn.ADD_PAYMENT_STEPS, renderStep: () => (0, i.jsx)("div", {}) }];
