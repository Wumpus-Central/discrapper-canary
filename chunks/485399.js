n.d(t, { default: () => tH });
var i = n(627968),
    l = n(64700),
    r = n(17928),
    s = n(430993),
    a = n(289873),
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
    I = n(813730),
    x = n(197510),
    P = n(584160),
    A = n(480642),
    f = n(571878),
    b = n(832286),
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
            closeGuildPerksModal: s,
            children: a,
            guildId: u,
            analyticsLocation: o,
            analyticsSourceLocation: d,
            applicationId: m,
            intent: p,
            onSubscribeComplete: S,
        } = e,
        [y, g] = l.useState(t),
        [h, I] = l.useState(null),
        [x, P] = l.useState([]),
        [A, b] = l.useState(!0),
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
            closeGuildPerksModal: s,
            guildId: u,
            currency: h,
            setCurrency: I,
            currencies: x,
            setCurrencies: P,
            paymentModalArgs: T,
            premiumSubscriptionPaymentSourceId: N,
            analyticsLocation: o,
            analyticsSourceLocation: d,
            forceDisableSubmitButton: A,
            setForceDisableSubmitButton: b,
            applicationId: m,
            intent: p,
            onSubscribeComplete: S,
            flowStartTime: _,
            existingAvailableSlotCount: v,
        },
        children: a,
    });
}
var ee = n(879100),
    et = n(788868);
function en(e) {
    let { handleClose: t } = e,
        { guildId: n, numGuildBoostsToPurchase: l, paymentModalArgs: s, existingAvailableSlotCount: a } = Z(),
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
        { paymentSources: h } = s,
        I = (0, z.g)(h, m),
        x = null != S ? S.name : null != p ? p.name : void 0,
        P = y && null != g && !et.YV.has(g.id);
    return (0, i.jsx)(W.dZ, {
        children: (0, i.jsx)(ee.W, {
            guild: S,
            guildBoostQuantity: l + a,
            onClose: t,
            withAnimation: !1,
            paymentSourceType: I,
            fallbackGuildName: x,
            didPurchaseOnFractionalPremium: P,
            customCheckoutFlow: d,
        }),
    });
}
var ei = n(284009),
    el = n.n(ei),
    er = n(683071),
    es = n(512950),
    ea = n(821609),
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
    eI = n(834730),
    ex = n(403581),
    eP = n(663803),
    eA = n(320448),
    ef = n(534514),
    eb = n(104510),
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
            (0, i.jsx)(eI.E, {
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
        children: [(0, i.jsx)(ex.t, { size: "md", className: eR.YW, color: n }), (0, i.jsx)("div", { children: t })],
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
    e$ = n(717925),
    eJ = n(596034),
    eK = n(848584),
    eZ = n(241989),
    eQ = n(908419),
    eX = n(888751),
    e0 = n(874638),
    e1 = n(692440),
    e3 = n(818348),
    e4 = n(327105),
    e8 = n(7921);
function e6(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: l,
            totalDue: r,
            currency: s,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, eQ.U)();
    return (0, i.jsx)(eJ._, {
        variant: {
            type: eJ.I.Subscription,
            purchaseButtonText: eU.intl.string(eU.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: s,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: a,
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
            (0, i.jsx)(eI.E, { variant: "text-sm/normal", className: e8.b7, children: t }),
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
            checkoutInvoicePreview: s,
        } = e,
        a = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: u,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: eU.intl.formatToPlainString(eU.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, eV.Mn)(n.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
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
        0 !== s.tax && u.push({ id: "tax", label: eU.intl.string(eU.t.jiRvC7), amount: s.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, eX.EA)({ id: "main-line-item", amount: t, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(eK.Vm, {
        defaultExpanded: !0,
        label: eU.intl.string(e4.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function e7(e) {
    let {
        isSubscriptionUpdate: t,
        premiumSubscription: n,
        checkoutInvoicePreview: l,
        renewalInvoicePreview: r,
        isPrepaid: s,
        isReverseTrial: a,
        priceOptions: u,
    } = e;
    return null != n
        ? (0, i.jsx)(e1.m0, {
              premiumSubscription: n,
              proratedInvoice: l,
              renewalInvoice: r,
              isUpdate: t,
              isPrepaidPaymentSource: s,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(e1.m0, {
              renewalInvoice: r,
              priceOptions: u,
              isPrepaidPaymentSource: s,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function te(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: s,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: u,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: c,
            paymentSourceId: d,
            setPaymentSourceId: S,
            onPaymentSourceAdd: y,
        } = e,
        g = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                u = (0, r.bG)([G.A, _.A], () => {
                    let e = G.A.getGuild(n);
                    return null != e ? e : _.A.isGuildFetching(n) ? null : _.A.getGuild(n);
                }, [n]),
                o = s.interval,
                c = s.intervalCount,
                d = (0, r.bG)([R.A], () => R.A.getForSkuAndInterval((0, eV.mH)(et.pe.GUILD), o, c));
            el()(null != d, "Missing guildBoostingSubscriptionPlan");
            let S = (0, eV.J$)(i.paymentSourceId),
                y = (0, eT.ds)();
            t = null != l ? (0, eV.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, p.Ay)(),
                [h, I] = (0, eN.YV)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [x, P] = (0, eN.YV)({
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
                    checkoutInvoiceError: I,
                    renewalInvoicePreview: x,
                    renewalInvoiceError: P,
                }),
                {
                    guild: u ?? null,
                    guildBoostingSubscriptionPlan: d,
                    isPrepaid: S,
                    isReverseTrial: y,
                    checkoutInvoicePreview: h,
                    renewalInvoicePreview: x,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: t,
            priceOptions: s,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: o,
            newAdditionalPlans: c,
        }),
        {
            isSubscriptionUpdate: h,
            guild: I,
            isPrepaid: x,
            isReverseTrial: P,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: f,
        } = g,
        b = (0, ez.A)({ location: "GuildBoostReview", message: eU.intl.string(e4.default["tK8A/8"]) }),
        v = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == A || null == f || null == I) return (0, i.jsx)(e$.E, {});
    let E = (0, i.jsx)(e7, {
            isSubscriptionUpdate: h,
            premiumSubscription: a,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: f,
            isPrepaid: x,
            isReverseTrial: P,
            priceOptions: s,
        }),
        j = (0, i.jsx)(eq.n, {
            setPaymentSourceId: S,
            paymentSourceId: d,
            location: "GuildBoostReview",
            label: eU.intl.string(eU.t["u+Cw58"]),
            onPaymentSourceAdd: y,
            additionalPaymentSourceDropdownProps: v,
            premiumSubscriptionPaymentSourceId: u,
            hideCurrencySelect: !0,
        }),
        C = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: l,
                paymentSources: r,
                paymentSourceId: s,
            } = e;
            return {
                paymentSourceType: (0, z.g)(r, s),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, e1.de)({ isSubscriptionUpdate: t, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: h,
            premiumSubscriptionPlan: o,
            renewalInvoicePreview: f,
            checkoutInvoicePreview: A,
            paymentSources: n,
            paymentSourceId: d,
        }),
        N = (0, i.jsx)(e6, { ...C }),
        T = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: a, isPrepaid: u, isReverseTrial: o } = s,
                c = n.interval,
                d = n.intervalCount,
                m = (e) => (0, e0.Z)(i.invoiceItems).find((t) => et.pW.has(t.subscriptionPlanId) && e(t)),
                p = m((e) => e.amount >= 0);
            el()(null != p, "Missing guild boosting invoice item");
            let S = m((e) => e.amount < 0),
                y = null != S ? p.quantity - S.quantity : p.quantity,
                g = i.invoiceItems.filter((e) => (0, eV.xq)(e.subscriptionPlanId)),
                h = g.reduce((e, t) => e + t.amount, 0),
                I = (0, eN.sL)(p) * y,
                x = (0, eY.$g)(I, i.currency),
                P = (0, eY.CE)(x, c, d),
                A = (0, eY.$g)(i.total, i.currency) + (i.currency !== e3.Yr.USD ? "*" : ""),
                f = i.subtotal - I - h,
                b = p.discounts.map((e) => {
                    let t = e.amount / p.quantity;
                    return { ...e, amount: t * y };
                }),
                _ = b.find((e) => e.type === eW.iS.SUBSCRIPTION_PLAN),
                v = b.find((e) => e.type === eW.iS.ENTITLEMENT),
                E = p.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: a,
                isPrepaid: u,
                isReverseTrial: o,
                formattedGuildBoostPrice: x,
                formattedGuildBoostRate: P,
                formattedOriginalAmountGuildBoostRate: (0, eY.CE)((0, eY.$g)(E, i.currency), c, d),
                formattedTotal: A,
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
            premiumSubscriptionPlan: o,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: f,
            priceOptions: s,
            reviewState: g,
        }),
        M = (0, i.jsx)(e9, { ...T }),
        L = (function (e, t, n) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: s,
                    formattedGuildBoostRate: a,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: o,
                } = t,
                c = null != o;
            return {
                label: eU.intl.formatToPlainString(eU.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, eV.Mn)(r.id, !1, s),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eZ.a6, {}),
                price: a,
                PriceIcon: c ? ex.t : void 0,
                priceTooltip: c ? eU.intl.string(e4.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            I,
            T,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: e2(i.currentPeriodEnd) } : null;
            })({ isPrepaid: x, isReverseTrial: P, premiumSubscription: a }),
        ),
        D = (0, i.jsx)(eZ.f7, { ...L });
    return (0, i.jsx)(e$.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: D,
        subscriptionDetailsContent: E,
        paymentMethodContent: j,
        invoiceSummaryContent: M,
        legalContent: N,
        invoiceTotalDueValue: T.formattedTotal,
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
    let { value: t, onChange: n, minValue: r = 1, maxValue: s = 30, ariaLabel: a } = e,
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
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (ti(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= r) return void d(r);
                                if (t >= s) return void d(s);
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
                    c && !(u >= s) && d(u + 1);
                },
                "aria-label": eU.intl.string(eU.t.w8Sc4B),
                disabled: !c || u >= s,
            }),
        ],
    });
}
function tr(e) {
    let { message: t } = e;
    return (0, i.jsx)(eI.E, { variant: "text-xs/normal", color: "text-muted", className: tn.jH, children: t });
}
function ts(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: tn.Vk,
        children: [
            (0, i.jsx)("div", {
                className: tn.D0,
                children: (0, i.jsx)(ex.t, {
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
function ta(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: r,
        planLabel: s,
        planPriceContent: a,
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
                            (0, i.jsx)(eP.l, {
                                value: n,
                                onChange: (e) => r(e),
                                className: e8.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e8.$0, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: em()(e8.QK, { [e8.S]: t }), children: a }),
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
        refreshNextStepLabel: s,
        planLabel: a,
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
        refreshPricingNotes: I,
    } = e;
    return (0, i.jsxs)("div", {
        className: tn.xY,
        children: [
            p,
            (0, i.jsxs)("div", {
                className: tn.K3,
                children: [
                    (0, i.jsx)(eI.E, {
                        variant: "text-md/medium",
                        className: tn.bk,
                        children: eU.intl.string(eU.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eA._, { className: tn.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(eI.E, { variant: "text-md/medium", className: tn.kX, children: s }),
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
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(eI.E, { variant: "text-md/medium", className: tn.ny, children: a }),
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
            I.map((e, t) => (0, i.jsx)(l.Fragment, { children: e }, t)),
        ],
    });
}
function to(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e8.Mv,
        children: [
            (0, i.jsx)(eb._, { className: e8.T5, color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
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
            setNumGuildBoosts: s,
            setForceDisableSubmitButton: u,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: S,
            isRefreshEnabled: y = !1,
            showRefreshSubtotalRate: g = !1,
            refreshNextStepLabel: h = eU.intl.string(eU.t.QBnNHq),
        } = e,
        I = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: s,
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
                I = s.interval,
                x = s.intervalCount,
                P = (0, r.bG)([R.A], () => R.A.getForSkuAndInterval((0, eV.mH)(et.pe.GUILD), I, x)),
                A = (0, r.bG)([eB.default], () => eB.default.getCurrentUser()),
                f = (0, eE.A)({ forceFetch: !1 });
            el()(null != P, "Missing guildBoostingSubscriptionPlan");
            let b = [{ planId: P.id, quantity: 1 }],
                _ = c?.items.find(
                    (e) => e.planId === et.gD.PREMIUM_MONTH_TIER_2 || e.planId === et.gD.PREMIUM_YEAR_TIER_2,
                );
            null != _ && b.push(_);
            let v = c?.items.find(
                    (e) => e.planId === et.gD.PREMIUM_MONTH_GUILD || e.planId === et.gD.PREMIUM_YEAR_GUILD,
                ),
                E = null == h || !et.uJ.has(h) || null == v,
                { analyticsLocations: j } = (0, p.Ay)(),
                [C, N] = (0, eN.YV)({
                    subscriptionId: c?.id,
                    items: b,
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
                L = eV.Ay.hasBoostDiscount(A),
                D = L && null != c && eV.Ay.isPremiumAtLeast(eV.Ay.getPremiumType(c.planId), et.PremiumTypes.TIER_1),
                G = C?.findInvoiceItemByPlanId(P.id),
                U =
                    null != G
                        ? { amount: G.amount, tax: 0, taxInclusive: !0, currency: C.currency }
                        : eV.Ay.getPrice(P.id, L, !1, y),
                k = u * U.amount,
                B = (0, eT.ds)() && L && null != c,
                F = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: s,
                        } = e;
                    return (
                        (t = l ? "reverse_trial" : r ? "discount" : s ? "upsell_trial" : "upsell"),
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
                      })({ intervalType: I, intervalCount: x }) ?? eU.intl.string(eU.t.K9Bmze))
                    : eU.intl.string(eU.t.K9Bmze),
                Q = T
                    ? (0, i.jsx)(a.y, {})
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
                        })({ intervalType: I, intervalCount: x, amount: U.amount, currency: U.currency }),
                X = T
                    ? (0, i.jsx)(a.y, {})
                    : (0, i.jsx)(eD.A, {
                          price: k,
                          currency: U.currency,
                          intervalType: I,
                          intervalCount: x,
                          isPrepaidPaymentSource: V,
                      }),
                ee = T
                    ? (0, i.jsx)(a.y, {})
                    : g && !V
                      ? (0, eY.CE)((0, eY.$g)(k, U.currency), I, x)
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
                        "reverse_trial" === F.upsellVariant ? (0, i.jsx)(eO, {}) : (0, i.jsx)(ts, { text: n }),
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
    return (0, i.jsx)(y ? tu : ta, {
        isLoading: I.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: s,
        planLabel: I.planLabel,
        planPriceContent: I.planPriceContent,
        subtotalContent: I.subtotalContent,
        refreshSubtotalContent: I.refreshSubtotalContent,
        legacyDescriptionContent: I.legacyDescriptionContent,
        refreshDescriptionContent: I.refreshDescriptionContent,
        fractionalBanner: I.fractionalBanner,
        existingSlotNotice: I.existingSlotNotice,
        discountCallout: I.discountCallout,
        refreshDiscountCallout: I.refreshDiscountCallout,
        legacyPricingNotes: I.legacyPricingNotes,
        refreshPricingNotes: I.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
let td = et.gD.NONE_MONTH;
var tm = n(898640);
function tp(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: l,
            setNumGuildBoostsToPurchase: s,
            guildId: a,
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
        I = null != y || Object.keys(S.paymentSources).length > 0,
        x = (0, E.Ir)(I ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS),
        P = (0, c.A)(() => (0, w.D$)(U.A.boostSlots)),
        A = (0, D.n)("GuildBoostPurchaseModal"),
        b = ec.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        v = A && b,
        j = (0, r.bG)([_.A], () => (null != a ? _.A.getGuild(a) : void 0), [a]),
        C = null != a ? G.A.getGuild(a) : null,
        N = null == j && null == C,
        T = null != h && h.isPurchasedExternally,
        M = Object.keys(S.paymentSources).length > 0,
        L = (0, r.bG)([R.A], () => (null != h ? (0, q.c9)(h.planId) : null)),
        O = (0, r.bG)([R.A], () => (null == L ? R.A.get(td) : L));
    el()(null != a, "Missing guildId"), el()(null != O, "Missing nextPremiumSubscriptionPlan");
    let k = (0, i.jsx)(tc, {
        premiumSubscriptionPlan: O,
        numGuildBoosts: l,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: m,
        premiumSubscription: h,
        existingAvailableSlots: P,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != o && o(), (0, eo.e)();
        },
        priceOptions:
            null != g ? { paymentSourceId: g, currency: null != u ? u : void 0 } : { currency: null != u ? u : void 0 },
        isRefreshEnabled: A,
        showRefreshSubtotalRate: v,
        refreshNextStepLabel: x,
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
            : null != a &&
              !_.A.isGuildFetching(a) &&
              N &&
              (k = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(es.p, {
                          messageType: es.Y.ERROR,
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
                        isRefreshEnabled: A,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: A
                            ? (0, i.jsx)(ea.$, {
                                  variant: "secondary",
                                  text: eU.intl.string(eU.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, i.jsx)(eu.Q, { text: eU.intl.string(eU.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(ea.$, {
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
    tI = n(935462),
    tx = n(331322),
    tP = n(532794),
    tA = n(811611),
    tf = n(901017),
    tb = n(403052);
function t_(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, r.bG)([ew.default], () => ew.default.locale);
    return (0, i.jsxs)("div", {
        className: tb.mH,
        children: [
            (0, i.jsx)(tf.A, {
                icon: eb._,
                iconClassName: tb.pl,
                description: eU.intl.formatToPlainString(eU.t.sQBgs2, { numFreeGuildSubscriptions: et.M4 }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(tf.A, {
                icon: eb._,
                iconClassName: tb.pl,
                description: eU.intl.formatToPlainString(eU.t["1A6vXi"], { percent: (0, eH.l9)(n, et.oX / 100) }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, i.jsx)(tf.A, { icon: ty.n, iconClassName: tb.zO, description: eU.intl.string(eU.t.Z9b2x2) }) : null,
            (0, i.jsx)(tf.A, { icon: tg.F, iconClassName: tb.Kg, description: eU.intl.string(eU.t["8dqG5E"]) }),
            (0, i.jsx)(tf.A, { icon: th.J, iconClassName: tb.$z, description: eU.intl.string(eU.t.cBorIy) }),
        ],
    });
}
function tv(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: u,
            analyticsLocation: o,
            analyticsSourceLocation: c,
            priceOptions: d,
        } = e,
        { analyticsLocations: S, sourceAnalyticsLocations: y } = (0, p.Ay)(m.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        g = null == t || null == t.premiumSubscriptionType,
        h = eV.Ay.getPrice(et.gD.PREMIUM_MONTH_TIER_2, !1, !1, d),
        I = (0, eY.$g)(h.amount, h.currency),
        x = (0, eL.V)(),
        P = x?.trial_id,
        A = x?.subscription_trial?.sku_id === et.pe.TIER_2;
    return (
        l.useEffect(() => {
            k.default.track(tt.HAw.PREMIUM_UPSELL_VIEWED, { type: et.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: y });
        }, [y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tI.s_, { "data-migration-pending": !0, onClick: n, className: tb.b }),
                (0, i.jsxs)(s.c, {
                    children: [
                        A && (0, i.jsx)(tA.Vq, { className: tb.Fg }),
                        (0, i.jsx)("div", { className: em()(tb.Tn, { [tb.NH]: A }) }),
                        (0, i.jsx)("div", {
                            className: tb.G3,
                            children:
                                null != P
                                    ? eU.intl.string(eU.t.AoSzEr)
                                    : eU.intl.format(eU.t["7vePZb"], { monthlyPrice: I }),
                        }),
                        (0, i.jsx)(t_, { shouldUpsellFromNoneTier: g }),
                    ],
                }),
                (0, i.jsx)(tS.j, {
                    children: (0, i.jsxs)(tx.B, {
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
                            (0, i.jsxs)(tx.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(eu.Q, {
                                        text: eU.intl.string(eU.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(ea.$, {
                                        variant: "active",
                                        text: null != P ? eU.intl.string(eU.t["Gd/XHF"]) : eU.intl.string(eU.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tP.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: et.pe.TIER_2,
                                                    analyticsLocations: S,
                                                    analyticsObject: {
                                                        ...o,
                                                        section: tt.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: c,
                                                    onSubscriptionConfirmation: u,
                                                    trialId: P,
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
    let { handleClose: t, handleStepChange: n, onSubscriptionConfirmation: s } = e,
        { currency: a, paymentModalArgs: u, analyticsLocation: o, analyticsSourceLocation: c } = Z(),
        { paymentSourceId: d, activeSubscription: m } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        p = (0, r.bG)([R.A], () => (null != m ? (0, q.c9)(m.planId) : null)),
        S = (0, r.bG)([R.A], () => (null == p ? R.A.get(td) : p));
    el()(null != S, "Missing nextPremiumSubscriptionPlan"), el()(null != a && "" !== a, "Currency not defined");
    let { paymentSources: y } = u,
        g = null != m ? m.paymentSourceId : null,
        h = Object.keys(y).length > 0,
        I = l.useCallback(() => n(E.pn.PLAN_SELECT), [n]),
        x = l.useCallback(() => n(null != g || h ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS), [n, g, h]);
    return (0, i.jsx)(tv, {
        premiumSubscriptionPlan: S,
        analyticsLocation: o,
        analyticsSourceLocation: c,
        onClose: t,
        onBack: I,
        onSkip: x,
        onSubscriptionConfirmation: s,
        priceOptions: null != d ? { paymentSourceId: d, currency: a } : { currency: a },
    });
}
var tj = n(253390);
function tC() {
    let e = (0, f.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: t } = Z(),
        n = (0, r.bG)([R.A], () => null == e || null != R.A.get(e.planId)),
        i = (0, g.Y)(),
        s = (0, r.bG)([R.A], () => (null != e ? (0, q.c9)(e.planId) : null)),
        a = l.useMemo(
            () => (null != e && n && i ? (0, tj.v)(e, t) : [{ planId: et.gD.PREMIUM_MONTH_GUILD, quantity: t }]),
            [e, n, i, t],
        ),
        u = l.useMemo(
            () =>
                a.find((e) => {
                    let { planId: t } = e;
                    return et.pW.has(t);
                })?.planId ?? et.gD.PREMIUM_MONTH_GUILD,
            [a],
        );
    return {
        newAdditionalPlans: a,
        currentPremiumSubscriptionPlan: s,
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
    let { handleStepChange: t, handleClose: n, analyticsData: s } = e,
        { guildId: a, currency: u, paymentModalArgs: o, premiumSubscriptionPaymentSourceId: c } = Z(),
        {
            activeSubscription: d,
            paymentSourceId: m,
            setPaymentSourceId: p,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
        }));
    el()(null != a, "Missing guildId"), el()(null != u && "" !== u, "Currency not defined");
    let { paymentSources: y } = o,
        { newAdditionalPlans: g, currentPremiumSubscriptionPlan: h } = tC(),
        I = (0, r.bG)([R.A], () => (null == h ? R.A.get(td) : h));
    el()(null != I, "Missing nextPremiumSubscriptionPlan");
    let x = null != m ? { paymentSourceId: m, currency: u } : { currency: u },
        P = (function (e) {
            let { handleStepChange: t, handleClose: n, analyticsData: i } = e,
                {
                    guildId: r,
                    currency: s,
                    paymentModalArgs: a,
                    premiumSubscriptionPaymentSourceId: u,
                    numGuildBoostsToPurchase: o,
                    analyticsLocation: c,
                    analyticsSourceLocation: d,
                    flowStartTime: m,
                    applicationId: p,
                    intent: y,
                    onSubscribeComplete: g,
                } = Z(),
                { paymentSources: h, setIsSubmittingCurrentStep: I, isSubmittingCurrentStep: x } = a,
                {
                    activeSubscription: P,
                    paymentSourceId: A,
                    setPurchaseError: b,
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
                G = (0, ez.iB)({ checkoutPaymentSources: D, paymentSourceId: A, location: "GuildBoostPurchaseModal" }),
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
                B = null != A ? { paymentSourceId: A, currency: s ?? void 0 } : { currency: s ?? void 0 },
                F = async () => {
                    el()(null != N, "Missing newAdditionalPlans");
                    let e = (0, z.W)(h, A);
                    b(null);
                    try {
                        v(j.h.PURCHASING),
                            I(!0),
                            el()(null != A, "Missing paymentSourceId"),
                            el()(null != C, "Missing invoicePreview");
                        let l = { amount: C.total, currency: C.currency },
                            s = B.currency ?? C.currency,
                            a = (0, eV.U8)(P, N, s.toLowerCase(), B.paymentSourceId);
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
                        if (null == P || null == T) {
                            el()(null != e, "Missing paymentSource");
                            let t = await (0, S.Ky)({
                                items: N,
                                paymentSource: e,
                                currency: s,
                                expectedInvoicePrice: l,
                                expectedRenewalPrice: a,
                            });
                            if (t.redirectConfirmation) return void w(null != t.redirectURL);
                        } else {
                            let t = { items: (0, eV.aE)(P, N) };
                            (t.currency = P.currency ?? s),
                                (t.paymentSource = null != u ? h[u] : void 0),
                                null == t.paymentSource &&
                                    (el()(null != e, "Missing paymentSource"), (t.paymentSource = e), (t.currency = s));
                            let n = await (0, S.nV)(P, t, l, a, i.location_stack);
                            if (n.redirectConfirmation) return void w(null != n.redirectURL);
                        }
                        null == y && t(E.pn.CONFIRM),
                            v(j.h.COMPLETED),
                            null != r && (await tM(r, null != y)),
                            null != y && n(),
                            g?.();
                    } catch (t) {
                        v(j.h.FAIL),
                            b(t),
                            k.default.track(tt.HAw.PAYMENT_FLOW_FAILED, {
                                ...R,
                                payment_error_code: t?.code,
                                payment_gateway:
                                    null != e ? (e.type === tt.hes.CARD ? tt.kM_.STRIPE : tt.kM_.BRAINTREE) : null,
                                payment_source_id: A,
                                duration_ms: Date.now() - m,
                            });
                    } finally {
                        O || I(!1);
                    }
                };
            return {
                text: eU.intl.string(eU.t.eUEeCt),
                loading: x,
                disabled: null == A || !_ || null != L || G,
                onClick: F,
                variant: "active",
            };
        })({ handleStepChange: t, handleClose: n, analyticsData: s }),
        b = l.useCallback(() => {
            t(E.pn.ADD_PAYMENT_STEPS), p(null);
        }, [t, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(W.dZ, {
                children: (0, i.jsx)(te, {
                    guildId: a,
                    paymentSources: y,
                    priceOptions: x,
                    currentPremiumSubscription: d,
                    premiumSubscriptionPaymentSourceId: c,
                    premiumSubscriptionPlan: I,
                    newAdditionalPlans: g,
                    paymentSourceId: m,
                    setPaymentSourceId: p,
                    onPaymentSourceAdd: b,
                }),
            }),
            (0, i.jsx)(W.UX, {
                children: (0, i.jsx)(A.lo, { onBackClick: () => t(E.pn.PLAN_SELECT), primaryButtonProps: P }),
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
            numGuildBoostsToPurchase: s,
            analyticsLocation: a,
            analyticsSourceLocation: u,
            paymentModalArgs: o,
        } = Z(),
        { setIsSubmittingCurrentStep: c, paymentSources: d } = o,
        { premiumGuildSubscriptionPlanId: m } = tC(),
        {
            paymentSourceId: y,
            setPurchaseState: g,
            setPurchaseError: h,
            loadId: x,
            startTime: P,
        } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            loadId: e.contextMetadata.loadId,
            startTime: e.contextMetadata.startTime,
        })),
        A = (0, M.l)(),
        b = (0, p.Db)(),
        _ = (0, r.bG)([tD.A], () => tD.A.popupCallbackCalled),
        v = {
            baseAnalyticsData: l.useMemo(
                () => ({
                    load_id: x,
                    payment_type: e3.fr[e3.VV.SUBSCRIPTION],
                    subscription_type: tt.rzx.PREMIUM,
                    subscription_plan_id: m,
                    sku_id: (0, eV.mH)(et.pe.GUILD),
                    quantity: s,
                    location: a,
                    source: u,
                    location_stack: b,
                    checkout_flow: I.CL.GUILD_BOOST_CHECKOUT,
                    is_gift: !1,
                    eligible_for_trial: !1,
                    guild_id: e ?? void 0,
                }),
                [x, m, s, a, u, b, e],
            ),
            flowStartTime: i,
            startTime: P,
            guildId: e,
            onSubscribeComplete: n,
            paymentSourceId: y,
            paymentSources: d,
            setIsSubmittingCurrentStep: c,
            setPurchaseError: h,
            setPurchaseState: g,
            setStep: A,
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
                paymentSourceId: s,
                paymentSources: a,
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
                                payment_source_type: (0, z.g)(a, s) ?? void 0,
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
                            payment_source_id: s,
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
    return (0, i.jsxs)(A.Jg, {
        transitionState: t,
        size: "md",
        onClose: l,
        "aria-label": eU.intl.string(eU.t.q9EGps),
        children: [
            (0, i.jsx)(A.s3, { title: eU.intl.string(eU.t.q9EGps) }),
            (0, i.jsx)(s.c, { children: (0, i.jsx)("p", { className: tm.C, children: n }) }),
        ],
    });
}
function tR(e) {
    let { transitionState: t, onClose: n, onSubscriptionConfirmation: s, analyticsLocations: c } = e,
        {
            numGuildBoostsToPurchase: I,
            currency: x,
            setCurrency: P,
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
            null == E || null != G.A.getGuild(E) || null != _.A.getGuild(E) || _.A.isGuildFetching(E) || (0, b.y)(E),
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
                null == U && null != D && null != D.paymentSourceId ? P(D.currency) : null != e && P(e[0]));
        }, [U, D, V, P, v]);
    let q = l.useMemo(() => ({ quantity: I }), [I]),
        $ = l.useCallback(() => (n(w === j.h.COMPLETED), Promise.resolve()), [n, w]);
    return F
        ? (0, i.jsx)(A.Jg, {
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
            : H && Y && null != x && "" !== x
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
                        onSubscriptionConfirmation: s,
                        renderHeader: tw,
                        skipUnifiedHeaderForSteps: tB,
                        disableUnsupportedExternalSubscriptionHandler: !0,
                        isMediumModal: !0,
                        analyticsDataOverride: q,
                    }),
                })
              : (0, i.jsx)(A.Jg, {
                    transitionState: t,
                    size: "md",
                    onClose: $,
                    "aria-label": eU.intl.string(eU.t.q9EGps),
                    children: (0, i.jsx)("div", { className: tm._5, children: (0, i.jsx)(a.y, {}) }),
                });
}
function tO(e) {
    let { transitionState: t, onClose: n, children: l } = e,
        { numGuildBoostsToPurchase: r, guildId: s, existingAvailableSlotCount: a } = Z(),
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
                      guild: G.A.getGuild(s),
                      guildBoostQuantity: r + a,
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
        ? (0, i.jsx)(A.s3, { title: (0, P.u)({ skuId: null, step: t }).title })
        : (0, i.jsx)(F.A, { onClose: () => n(r === j.h.COMPLETED), currentStep: t, purchaseState: r });
}
let tw = (e, t, n) =>
        n === E.pn.PREMIUM_UPSELL
            ? null
            : n === E.pn.REVIEW
              ? (0, i.jsx)(A.s3, { ...(0, P.u)({ skuId: e?.skuId ?? null, step: n }) })
              : (0, i.jsx)(tk, { step: n, onClose: t }),
    tB = [E.pn.PLAN_SELECT];
function tF(e) {
    return (0, i.jsx)(tR, { ...e });
}
function tH(e) {
    let {
            totalNumberOfSlotsToAssign: t = 1,
            disablePremiumUpsell: n,
            closeGuildPerksModal: s,
            guildId: a,
            analyticsLocation: u,
            analyticsSourceLocation: o,
            applicationId: d,
            intent: S,
            onSubscribeComplete: y,
        } = e,
        g = (0, r.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        { analyticsLocations: h } = (0, p.Ay)(m.A.GUILD_BOOST_PURCHASE_MODAL),
        P = (0, c.A)(() => t - (0, w.D$)(U.A.boostSlots).length),
        A = l.useMemo(() => (0, L.A)() ?? void 0, []);
    return (0, i.jsx)(p.f5, {
        value: h,
        children: (0, i.jsx)(x.CheckoutRootProvider, {
            activeSubscription: g,
            stepConfigs: tV,
            skuIDs: [],
            loadId: A,
            unifiedCheckoutFlow: I.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(v.Mq, {
                children: (0, i.jsxs)(X, {
                    initialNumGuildBoostsToPurchase: P,
                    disablePremiumUpsell: n,
                    closeGuildPerksModal: s,
                    guildId: a ?? null,
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
