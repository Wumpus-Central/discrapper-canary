t.d(n, { default: () => nC });
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
    S = t(683071),
    g = t(512950),
    E = t(821609),
    _ = t(820739),
    y = t(891197),
    P = t(444927),
    h = t(964486),
    I = t(793574),
    f = t(688810),
    x = t(753390),
    A = t(160946),
    N = t(606267),
    b = t(545075),
    C = t(663288),
    j = t(981036),
    v = t(725836),
    T = t(364995),
    M = t(666646),
    L = t(584160),
    R = t(480642),
    D = t(94420),
    U = t(357669),
    O = t(832286),
    G = t(958340),
    w = t(834252),
    k = t(166532),
    B = t(566980),
    F = t(216641),
    Y = t(925847),
    V = t(87719),
    W = t(253390),
    H = t(489254);
let z = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var $ = t(251913),
    J = t(632638),
    K = t(61299),
    q = t(71393),
    Q = t(178368),
    Z = t(825755),
    X = t(295405),
    ee = t(97352),
    en = t(166403),
    et = t(174459),
    ei = t(473145),
    el = t(428262),
    es = t(83617),
    er = t(615396),
    ea = t(802790),
    eu = t(636441),
    eo = t(587491),
    ec = t(285753);
t(321073);
var ed = t(503698),
    ep = t.n(ed),
    em = t(661531),
    eS = t(990078),
    eg = t(408278),
    eE = t(834040),
    e_ = t(499373),
    ey = t(834730),
    eP = t(403581),
    eh = t(663803),
    eI = t(320448),
    ef = t(534514),
    ex = t(104510),
    eA = t(695366),
    eN = t(726656),
    eb = t(531260),
    eC = t(404374),
    ej = t(543767),
    ev = t(881489),
    eT = t(477421),
    eM = t(234419),
    eL = t(363476),
    eR = t(531506),
    eD = t(375708),
    eU = t(51465);
function eO() {
    return (0, i.jsxs)("div", {
        className: ep()(eU.dt, eU.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eU.qq,
            }),
            (0, i.jsx)(ey.E, {
                variant: "text-sm/medium",
                className: eU.tD,
                children: eD.intl.format(eD.t.f5VHKm, {}),
            }),
        ],
    });
}
function eG(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: eU.dt,
        children: [(0, i.jsx)(eP.t, { size: "md", className: eU.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var ew = t(773669),
    ek = t(287809),
    eB = t(975571),
    eF = t(252424),
    eY = t(580630),
    eV = t(155718),
    eW = t(61572),
    eH = t(717925),
    ez = t(596034),
    e$ = t(848584),
    eJ = t(241989),
    eK = t(908419),
    eq = t(888751),
    eQ = t(874638),
    eZ = t(692440),
    eX = t(788868),
    e0 = t(818348),
    e1 = t(327105),
    e3 = t(7921);
function e8(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, eK.U)();
    return (0, i.jsx)(ez._, {
        variant: {
            type: ez.I.Subscription,
            purchaseButtonText: eD.intl.string(eD.t.eUEeCt),
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
function e6(e) {
    return eD.intl.format(eD.t.IeaYqg, { endDate: e });
}
function e2(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: e3.bU }),
            (0, i.jsx)(ey.E, { variant: "text-sm/normal", className: e3.b7, children: n }),
            (0, i.jsx)("div", { className: e3.bU }),
        ],
    });
}
function e4(e) {
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
                label: eD.intl.formatToPlainString(eD.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, el.Mn)(t.id, !1, i),
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
            label: eD.intl.formatToPlainString(eD.t.ZSVged, { planName: (0, el.RH)(l[0].subscriptionPlanId) }),
            tooltip: eD.intl.string(eD.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eD.intl.string(eD.t["+as5ZZ"]),
                tooltip: eD.intl.string(eD.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: eD.intl.string(eD.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, eq.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e$.Vm, {
        defaultExpanded: !0,
        label: eD.intl.string(e1.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function e5(e) {
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
        ? (0, i.jsx)(eZ.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(eZ.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function e7(e) {
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
                o = (0, u.bG)([q.A, G.A], () => {
                    let e = q.A.getGuild(t);
                    return null != e ? e : G.A.isGuildFetching(t) ? null : G.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([ee.A], () => ee.A.getForSkuAndInterval((0, el.mH)(eX.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, el.J$)(i.paymentSourceId),
                S = (0, ev.ds)();
            n = null != l ? (0, el.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: g } = (0, f.Ay)(),
                [E, _] = (0, ej.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [y, P] = (0, ej.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, M.OQ)({
                    checkoutInvoicePreview: E,
                    checkoutInvoiceError: _,
                    renewalInvoicePreview: y,
                    renewalInvoiceError: P,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: E,
                    renewalInvoicePreview: y,
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
            isSubscriptionUpdate: E,
            guild: _,
            isPrepaid: y,
            isReverseTrial: P,
            checkoutInvoicePreview: h,
            renewalInvoicePreview: x,
        } = g,
        A = (0, N.A)({ location: "GuildBoostReview", message: eD.intl.string(e1.default["tK8A/8"]) }),
        b = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == h || null == x || null == _) return (0, i.jsx)(eH.E, {});
    let C = (0, i.jsx)(e5, {
            isSubscriptionUpdate: E,
            premiumSubscription: a,
            checkoutInvoicePreview: h,
            renewalInvoicePreview: x,
            isPrepaid: y,
            isReverseTrial: P,
            priceOptions: s,
        }),
        j = (0, i.jsx)(eW.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eD.intl.string(eD.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            additionalPaymentSourceDropdownProps: b,
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
                startDate: (0, eZ.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: E,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: x,
            checkoutInvoicePreview: h,
            paymentSources: t,
            paymentSourceId: p,
        }),
        T = (0, i.jsx)(e8, { ...v }),
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
                m = (e) => (0, eQ.Z)(i.invoiceItems).find((n) => eX.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let g = m((e) => e.amount < 0),
                E = null != g ? S.quantity - g.quantity : S.quantity,
                _ = i.invoiceItems.filter((e) => (0, el.xq)(e.subscriptionPlanId)),
                y = _.reduce((e, n) => e + n.amount, 0),
                P = (0, ej.sL)(S) * E,
                h = (0, eY.$g)(P, i.currency),
                I = (0, eY.CE)(h, d, p),
                f = (0, eY.$g)(i.total, i.currency) + (i.currency !== e0.Yr.USD ? "*" : ""),
                x = i.subtotal - P - y,
                A = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * E };
                }),
                N = A.find((e) => e.type === eV.iS.SUBSCRIPTION_PLAN),
                b = A.find((e) => e.type === eV.iS.ENTITLEMENT),
                C = S.subscriptionPlanPrice * E;
            return {
                addedQuantity: E,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: h,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, eY.CE)((0, eY.$g)(C, i.currency), d, p),
                formattedTotal: f,
                basePlanAdjustment: y,
                basePlanInvoiceItems: _,
                guildBoostingAdjustment: x,
                subscriptionDiscount: N,
                entitlementDiscount: b,
                originalAmount: C,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: s,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: h,
            renewalInvoicePreview: x,
            priceOptions: s,
            reviewState: g,
        }),
        R = (0, i.jsx)(e4, { ...L }),
        D = (function (e, n, t) {
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
                label: eD.intl.formatToPlainString(eD.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, el.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eJ.a6, {}),
                price: a,
                PriceIcon: c ? eP.t : void 0,
                priceTooltip: c ? eD.intl.string(e1.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            _,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: e6(i.currentPeriodEnd) } : null;
            })({ isPrepaid: y, isReverseTrial: P, premiumSubscription: a }),
        ),
        U = (0, i.jsx)(eJ.f7, { ...D });
    return (0, i.jsx)(eH.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: A,
        purchaseItemContent: U,
        subscriptionDetailsContent: C,
        paymentSelectContent: j,
        invoiceSummaryContent: R,
        legalContent: T,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: eD.intl.string(e1.default.R0cZsM),
    });
}
var e9 = t(652215);
t(26279);
var ne = t(406263);
function nn(e) {
    return "" === e || "-" === e;
}
function nt(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), nn(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: ne.U$,
        children: [
            (0, i.jsx)(eg.K, {
                variant: "secondary",
                size: "md",
                icon: eE.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eD.intl.string(eD.t["k+ohJm"]),
                disabled: !c || u <= s,
            }),
            (0, i.jsx)("div", {
                className: ne.WJ,
                children: (0, i.jsx)("input", {
                    className: ne.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (nn(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        nn(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(eg.K, {
                variant: "secondary",
                size: "md",
                icon: e_.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eD.intl.string(eD.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function ni(e) {
    let { message: n } = e;
    return (0, i.jsx)(ey.E, { variant: "text-xs/normal", color: "text-muted", className: ne.jH, children: n });
}
function nl(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: ne.Vk,
        children: [
            (0, i.jsx)("div", {
                className: ne.D0,
                children: (0, i.jsx)(eP.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: ne.ue,
                    color: eC.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: ne.yP, children: n }),
        ],
    });
}
function ns(e) {
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
        legacyPricingNotes: E,
        refreshPricingNotes: _,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: e3.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: e3.E6,
                        children: [
                            (0, i.jsx)(eh.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: e3.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e3.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ep()(e3.QK, { [e3.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: e3.J3 }),
            (0, i.jsxs)("div", {
                className: e3.mP,
                children: [
                    (0, i.jsx)("div", { className: e3.xp, children: eD.intl.string(eD.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: ep()(e3.__invalid_planSelectorSubtotalPrice, { [e3.S]: n }),
                        children: u,
                    }),
                ],
            }),
            E.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nr(e) {
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
        refreshDiscountCallout: E,
        legacyPricingNotes: _,
        refreshPricingNotes: y,
    } = e;
    return (0, i.jsxs)("div", {
        className: ne.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: ne.K3,
                children: [
                    (0, i.jsx)(ey.E, {
                        variant: "text-md/medium",
                        className: ne.bk,
                        children: eD.intl.string(eD.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eI._, { className: ne.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ey.E, { variant: "text-md/medium", className: ne.kX, children: r }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: ne.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: ne.fX,
                        children: [
                            (0, i.jsx)(nt, {
                                value: t,
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(ey.E, { variant: "text-md/medium", className: ne.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ep()(ne.El, { [e3.S]: n }), children: u }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: ne.fh,
                children: [
                    (0, i.jsx)(ef.D, {
                        variant: "heading-lg/semibold",
                        className: ne.O3,
                        children: eD.intl.string(eD.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: ep()(ne.BU, { [e3.S]: n }), children: c }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function na(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e3.Mv,
        children: [
            (0, i.jsx)(ex._, { className: e3.T5, color: em.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eD.intl.format(eD.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(eS.m, {
                              text: eD.intl.formatToPlainString(eD.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eA.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e3.Y5,
                                  color: em.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function nu(e) {
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
            refreshNextStepLabel: E = eD.intl.string(eD.t.QBnNHq),
        } = e,
        _ = (function (e) {
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
                E =
                    ((n = (0, u.bG)([en.A], () => en.A.getPremiumTypeSubscription())),
                    (0, u.bG)([X.A], () =>
                        n?.paymentSourceId != null ? X.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                _ = s.interval,
                y = s.intervalCount,
                P = (0, u.bG)([ee.A], () => ee.A.getForSkuAndInterval((0, el.mH)(eX.pe.GUILD), _, y)),
                h = (0, u.bG)([ek.default], () => ek.default.getCurrentUser()),
                x = (0, eb.A)({ forceFetch: !1 });
            r()(null != P, "Missing guildBoostingSubscriptionPlan");
            let A = [{ planId: P.id, quantity: 1 }],
                N = c?.items.find(
                    (e) => e.planId === eX.gD.PREMIUM_MONTH_TIER_2 || e.planId === eX.gD.PREMIUM_YEAR_TIER_2,
                );
            null != N && A.push(N);
            let b = c?.items.find(
                    (e) => e.planId === eX.gD.PREMIUM_MONTH_GUILD || e.planId === eX.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == E || !eX.uJ.has(E) || null == b,
                { analyticsLocations: j } = (0, f.Ay)(),
                [v, T] = (0, ej.YV)({
                    subscriptionId: c?.id,
                    items: A,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: C,
                    analyticsLocations: j,
                    analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, M.Tr)(v, T);
            let L = !C && null == v && null == T;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let R = (0, eM.V)()?.subscription_trial?.sku_id === eX.pe.TIER_2,
                D = el.Ay.hasBoostDiscount(h),
                U = D && null != c && el.Ay.isPremiumAtLeast(el.Ay.getPremiumType(c.planId), eX.PremiumTypes.TIER_1),
                O = v?.findInvoiceItemByPlanId(P.id),
                G =
                    null != O
                        ? { amount: O.amount, tax: 0, taxInclusive: !0, currency: v.currency }
                        : el.Ay.getPrice(P.id, D, !1, S),
                w = a * G.amount,
                k = (0, ev.ds)() && D && null != c,
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
                            showFractionalPremiumBanner: i === eX.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: x.fractionalState,
                    isReverseTrial: k,
                    hasDiscountUpsell: U,
                    withTrialOfferCopyVariant: R,
                });
            "discount" === B.upsellVariant
                ? (r()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = eD.intl.format(eD.t.hf6YOY, { planName: el.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eD.intl.format("upsell_trial" === B.upsellVariant ? eD.t.ba1L74 : eD.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eF.l9)(ew.default.locale, eX.oX / 100),
                      freeSubscriptionCount: eX.M4,
                  }));
            let F = p.filter((e) => (0, ei.I5)(e)).length,
                Y = (0, el.J$)(S.paymentSourceId),
                { ipCountryCode: V } = (0, eT.A)(),
                W = "HR" === V && G.currency === e0.Yr.EUR,
                H =
                    k && null != c
                        ? (0, i.jsx)(e2, { text: e6(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: ep()(e3.hA, e3.G3), children: eD.intl.string(eD.t.jNY1FO) }),
                z =
                    k && null != c
                        ? (0, i.jsx)(e2, { text: e6(c.currentPeriodEnd), className: e3.jk })
                        : (0, i.jsx)("div", { className: ne._X, children: eD.intl.string(eD.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(na, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eR.vi, { fractionalPremiumInfo: x }) : null,
                K = Y
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eX.WT.YEAR
                              ? eD.intl.string(eD.t.YDpAzZ)
                              : n === eX.WT.MONTH && 1 === t
                                ? eD.intl.string(eD.t["6ZR3By"])
                                : null;
                      })({ intervalType: _, intervalCount: y }) ?? eD.intl.string(eD.t.K9Bmze))
                    : eD.intl.string(eD.t.K9Bmze),
                q = L
                    ? (0, i.jsx)(m.y, {})
                    : Y
                      ? (0, eY.$g)(G.amount, G.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eY.$g)(n, t);
                            return i === eX.WT.YEAR
                                ? eD.intl.formatToPlainString(eD.t["8M04YJ"], { price: s })
                                : i === eX.WT.MONTH && 1 === l
                                  ? eD.intl.formatToPlainString(eD.t.VStWCR, { price: s })
                                  : i === eX.WT.MONTH && l > 1
                                    ? eD.intl.formatToPlainString(eD.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: _, intervalCount: y, amount: G.amount, currency: G.currency }),
                Q = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eL.A, {
                          price: w,
                          currency: G.currency,
                          intervalType: _,
                          intervalCount: y,
                          isPrepaidPaymentSource: Y,
                      }),
                Z = L
                    ? (0, i.jsx)(m.y, {})
                    : g && !Y
                      ? (0, eY.CE)((0, eY.$g)(w, G.currency), _, y)
                      : (0, eY.$g)(w, G.currency),
                et = [],
                es = [];
            if (W) {
                let e = (0, i.jsx)(
                    eN.A,
                    {
                        message: eD.intl.formatToPlainString(eD.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eY.$g)(7.5345 * w, e0.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                et.push(e), es.push(e);
            }
            let er = eD.intl.format(eD.t.Om31w8, { documentationLink: eB.A.getArticleURL(e9.MVz.LOCALIZED_PRICING) });
            return (
                et.push((0, i.jsx)(eN.A, { message: er }, "localized-pricing")),
                es.push((0, i.jsx)(ni, { message: er }, "localized-pricing")),
                {
                    isLoading: L,
                    planLabel: K,
                    planPriceContent: q,
                    subtotalContent: Q,
                    refreshSubtotalContent: Z,
                    legacyDescriptionContent: H,
                    refreshDescriptionContent: z,
                    existingSlotNotice: $,
                    fractionalBanner: J,
                    legacyPricingNotes: et,
                    refreshPricingNotes: es,
                    discountCallout:
                        "reverse_trial" === B.upsellVariant
                            ? (0, i.jsx)(eO, {})
                            : (0, i.jsx)(eG, { text: t, color: eC.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(eO, {}) : (0, i.jsx)(nl, { text: t }),
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
    return (0, i.jsx)(S ? nr : ns, {
        isLoading: _.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
        planLabel: _.planLabel,
        planPriceContent: _.planPriceContent,
        subtotalContent: _.subtotalContent,
        refreshSubtotalContent: _.refreshSubtotalContent,
        legacyDescriptionContent: _.legacyDescriptionContent,
        refreshDescriptionContent: _.refreshDescriptionContent,
        fractionalBanner: _.fractionalBanner,
        existingSlotNotice: _.existingSlotNotice,
        discountCallout: _.discountCallout,
        refreshDiscountCallout: _.refreshDiscountCallout,
        legacyPricingNotes: _.legacyPricingNotes,
        refreshPricingNotes: _.refreshPricingNotes,
        refreshNextStepLabel: E,
    });
}
var no = t(879100),
    nc = t(460905),
    nd = t(183623),
    np = t(95635),
    nm = t(935462),
    nS = t(532794),
    ng = t(811611),
    nE = t(901017),
    n_ = t(213178);
function ny(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([ew.default], () => ew.default.locale);
    return (0, i.jsxs)("div", {
        className: n_.mH,
        children: [
            (0, i.jsx)(nE.A, {
                icon: ex._,
                iconClassName: n_.pl,
                description: eD.intl.formatToPlainString(eD.t.sQBgs2, { numFreeGuildSubscriptions: eX.M4 }),
                color: em.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nE.A, {
                icon: ex._,
                iconClassName: n_.pl,
                description: eD.intl.formatToPlainString(eD.t["1A6vXi"], { percent: (0, eF.l9)(t, eX.oX / 100) }),
                color: em.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nE.A, { icon: nc.n, iconClassName: n_.zO, description: eD.intl.string(eD.t.Z9b2x2) }) : null,
            (0, i.jsx)(nE.A, { icon: nd.F, iconClassName: n_.Kg, description: eD.intl.string(eD.t["8dqG5E"]) }),
            (0, i.jsx)(nE.A, { icon: np.J, iconClassName: n_.$z, description: eD.intl.string(eD.t.cBorIy) }),
        ],
    });
}
function nP(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: s,
            onSkip: r,
            onSubscriptionConfirmation: a,
            analyticsLocation: u,
            analyticsSourceLocation: m,
            priceOptions: S,
        } = e,
        { analyticsLocations: g, sourceAnalyticsLocations: _ } = (0, f.Ay)(I.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        y = null == n || null == n.premiumSubscriptionType,
        P = el.Ay.getPrice(eX.gD.PREMIUM_MONTH_TIER_2, !1, !1, S),
        h = (0, eY.$g)(P.amount, P.currency),
        x = (0, eM.V)(),
        A = x?.trial_id,
        N = x?.subscription_trial?.sku_id === eX.pe.TIER_2;
    return (
        l.useEffect(() => {
            et.default.track(e9.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eX.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: _,
            });
        }, [_]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nm.s_, { "data-migration-pending": !0, onClick: t, className: n_.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        N && (0, i.jsx)(ng.Vq, { className: n_.Fg }),
                        (0, i.jsx)("div", { className: ep()(n_.Tn, { [n_.NH]: N }) }),
                        (0, i.jsx)("div", {
                            className: n_.G3,
                            children:
                                null != A
                                    ? eD.intl.string(eD.t.AoSzEr)
                                    : eD.intl.format(eD.t["7vePZb"], { monthlyPrice: h }),
                        }),
                        (0, i.jsx)(ny, { shouldUpsellFromNoneTier: y }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eD.intl.string(eD.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eD.intl.string(eD.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(E.$, {
                                        variant: "active",
                                        text: null != A ? eD.intl.string(eD.t["Gd/XHF"]) : eD.intl.string(eD.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nS.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eX.pe.TIER_2,
                                                    analyticsLocations: g,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: e9.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: m,
                                                    onSubscriptionConfirmation: a,
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
var nh = t(898640);
let nI = eX.gD.NONE_MONTH,
    nf = [k.pn.PLAN_SELECT, k.pn.REVIEW, k.pn.CONFIRM],
    nx = [k.pn.PLAN_SELECT, k.pn.ADD_PAYMENT_STEPS, k.pn.REVIEW, k.pn.CONFIRM];
async function nA(e, n) {
    await (0, _.CD)();
    let t = (0, ei.D$)(Q.A.boostSlots);
    return (0, _.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nN(e) {
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
            (0, i.jsx)(R.lo, { onBackClick: null != l ? () => s(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: eD.intl.string(eD.t["13/7kX"]),
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
function nb(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            closeGuildPerksModal: o,
            analyticsLocations: d,
            analyticsLocation: _,
            analyticsSourceLocation: ed,
            guildId: ep,
            onSubscribeComplete: em,
            totalNumberOfSlotsToAssign: eS = 1,
            disablePremiumUpsell: eg = !1,
            onSubscriptionConfirmation: eE,
            applicationId: e_,
            intent: ey,
        } = e,
        {
            activeSubscription: eP,
            blockedPayments: eh,
            startingFractionalPremiumEndsAtRef: eI,
            customCheckoutFlow: ef,
        } = (0, w.P5)(),
        ex = (0, D.t4)((e) => e.hasAcceptedTerms),
        eA = (0, N.A)({ location: "GuildBoostPurchaseModal", message: eD.intl.string(e1.default["tK8A/8"]) }),
        eN = (0, M.sw)(),
        eb = (0, u.bG)([en.A], () => en.A.hasFetchedSubscriptions()),
        eC = null != eP ? eP.paymentSourceId : null,
        ej = (0, u.bG)([ee.A], () => (null != eP ? (0, er.c9)(eP.planId) : null)),
        ev = (0, u.bG)([ee.A], () => null == eP || null != ee.A.get(eP.planId)),
        eT = (0, u.bG)([ee.A], () => (null == ej ? ee.A.get(nI) : ej)),
        eM = l.useRef((0, ei.D$)(Q.A.boostSlots)).current,
        eL = (0, u.bG)([G.A], () => (null != ep ? G.A.getGuild(ep) : void 0), [ep]),
        eR = (0, u.bG)([X.A], () => X.A.defaultPaymentSourceId),
        eU = (0, K._V)(null != eC ? eC : eb ? eR : null),
        {
            paymentSources: eO,
            setPurchaseError: eG,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: ek,
            paymentAuthenticationState: eB,
            setPaymentSourceId: eF,
            isSubmittingCurrentStep: eY,
            paymentError: eV,
            purchaseError: eW,
            purchaseErrorBlockRef: eH,
        } = eU,
        ez = Object.keys(eO).length > 0,
        { checkoutPaymentSources: e$ } = (0, T.t)(),
        eJ = (0, N.iB)({ checkoutPaymentSources: e$, paymentSourceId: ew, location: "GuildBoostPurchaseModal" }),
        [eK, eq] = l.useState(eS - eM.length),
        eQ = (0, u.bG)([Z.A], () => Z.A.popupCallbackCalled),
        eZ = (0, A.Y)(),
        e3 = l.useMemo(
            () => (null != eP && ev && eZ ? (0, W.v)(eP, eK) : [{ planId: eX.gD.PREMIUM_MONTH_GUILD, quantity: eK }]),
            [eP, ev, eK, eZ],
        ),
        e8 = l.useMemo(() => (0, Y.A)(), []),
        [e6, e2] = (0, P.A)(() => [e8 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e4 } = (0, f.Ay)(d, I.A.GUILD_BOOST_PURCHASE_MODAL),
        e5 = l.useMemo(
            () =>
                e3.find((e) => {
                    let { planId: n } = e;
                    return eX.pW.has(n);
                })?.planId ?? eX.gD.PREMIUM_MONTH_GUILD,
            [e3],
        ),
        ne = (0, u.bG)([ee.A], () => ee.A.get(e5)?.skuId, [e5]),
        nn = l.useMemo(
            () => ({
                load_id: e6,
                payment_type: e0.fr[e0.VV.SUBSCRIPTION],
                sku_id: eX.pe.GUILD,
                subscription_type: e9.rzx.PREMIUM,
                subscription_plan_id: e5,
                quantity: eK,
                location: _,
                source: ed,
                location_stack: e4,
                checkout_flow: C.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e6, _, e4, ed, eK, e5],
        );
    l.useEffect(() => {
        (0, es.c_)(ew);
    }, [ew]);
    let [nt, ni] = l.useState(k.pn.PLAN_SELECT),
        nl = l.useMemo(() => Date.now(), [nt]),
        ns = l.useCallback(
            (e, n) => {
                ni(e), eG(null);
                let t = Date.now();
                et.default.track(e9.HAw.PAYMENT_FLOW_STEP, {
                    ...nn,
                    from_step: null != n ? n : nt,
                    to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - nl,
                    flow_duration_ms: t - e2,
                    guild_id: ep,
                    application_id: e_,
                });
            },
            [eG, nn, nt, nl, e2, ep, e_],
        ),
        nr = {
            baseAnalyticsData: nn,
            flowStartTime: e2,
            guildId: ep,
            handleStepChange: ns,
            onSubscribeComplete: em,
            paymentSourceId: ew,
            setIsSubmittingCurrentStep: ek,
            setPurchaseError: eG,
        },
        na = l.useRef(nr);
    l.useEffect(() => {
        na.current = nr;
    }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: s,
                setIsSubmittingCurrentStep: r,
                setPurchaseError: a,
            } = na.current;
            (async () => {
                if (!0 === eQ)
                    try {
                        if (null == Z.A.redirectedPaymentId) return;
                        await (0, x.tn)(Z.A.redirectedPaymentId),
                            i(k.pn.CONFIRM),
                            nm(B.h.COMPLETED),
                            null != t && (await nA(t, null != ey)),
                            l?.();
                    } catch (t) {
                        nm(B.h.FAIL),
                            a(t),
                            et.default.track(e9.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: e9.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, x.bl)();
                    }
            })();
        }, [eQ, ey]),
        (0, h.Ay)(() => {
            en.A.hasFetchedSubscriptions() || (0, x.hP)(),
                null == ep ||
                    null != q.A.getGuild(ep) ||
                    null != G.A.getGuild(ep) ||
                    G.A.isGuildFetching(ep) ||
                    (0, O.y)(ep),
                (0, U.b)({ ...nn, guild_id: ep, application_id: e_, custom_checkout_flow: ef }),
                null != eP &&
                    null != eP.renewalMutations &&
                    et.default.track(e9.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: _, guild_id: ep });
        });
    let [nc, nd] = l.useState(nf),
        [np, nm] = l.useState(B.h.WAITING),
        [nS, ng] = l.useState(!0),
        nE = () => {
            s(np === B.h.COMPLETED);
        },
        n_ = null != eP && eP.isPurchasedExternally;
    l.useEffect(() => {
        eB !== $.oc.PENDING &&
            nt !== k.pn.CONFIRM &&
            null != eC &&
            (nc !== nf && nd(nf), nf.includes(nt) || nt === k.pn.PREMIUM_UPSELL || ns(k.pn.REVIEW)),
            nt === k.pn.ADD_PAYMENT_STEPS && nc !== nx && nd(nx),
            n_ && nt !== k.pn.PLAN_SELECT && ni(k.pn.PLAN_SELECT);
    }, [nt, ns, n_, eB, eP, eC, nc]),
        (0, $.b)(nt, eB, ns, nm),
        (0, k.zT)(nt, np, nm);
    let ny = (0, H.n)("GuildBoostPurchaseModal"),
        nb = z.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        nC = ny && nb,
        nj = ny && (nt === k.pn.REVIEW || nt === k.pn.CONFIRM),
        nv = (0, ec.A)(nj),
        [nT, nM] = l.useState(null),
        [nL, nR] = l.useState([]),
        [nD, nU] = l.useState(!1),
        nO = l.useMemo(() => JSON.stringify(nL), [nL]);
    l.useEffect(() => {
        let e;
        eZ &&
            (null != ee.A.get(eX.gD.PREMIUM_MONTH_GUILD) && nR((e = (0, es._w)(eX.gD.PREMIUM_MONTH_GUILD, ew, !1))),
            null == ew && null != eP && null != eP.paymentSourceId ? nM(eP.currency) : null != e && nM(e[0]));
    }, [ew, eP, eZ, nO]);
    let nG = (0, K.Y)({
        paymentModalArgs: eU,
        initialStep: k.pn.PAYMENT_TYPE,
        prependSteps: [k.pn.PLAN_SELECT],
        appendSteps: [k.pn.REVIEW, k.pn.CONFIRM],
        breadcrumpSteps: nc,
        currentBreadcrumpStep: nt,
        onReturn: () => {
            ns(Object.values(eO).length < 1 ? k.pn.PLAN_SELECT : k.pn.REVIEW, k.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            ns(k.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            et.default.track(e9.HAw.PAYMENT_FLOW_STEP, {
                ...nn,
                from_step: n,
                to_step: t,
                step_duration_ms: i - nl,
                flow_duration_ms: i - e2,
                guild_id: ep,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eh) n = (0, i.jsx)(b.oO, {});
    else if (eb && ev && eZ && null != nT && "" !== nT)
        if (eP?.isPausedOrPausePending && !eP.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nh.C, children: eD.intl.string(eD.t.mOWsF1) }),
            });
        else if (null != eP && null != eP.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nh.C, children: eD.intl.string(eD.t.npfhh0) }),
            });
        else if (nt === k.pn.PREMIUM_UPSELL) {
            r()(null != eT, "Missing nextPremiumSubscriptionPlan"), r()(nT, "Currency not defined");
            let e = null != ew ? { paymentSourceId: ew, currency: nT } : { currency: nT };
            n = (0, i.jsx)(nP, {
                premiumSubscriptionPlan: eT,
                analyticsLocation: _,
                analyticsSourceLocation: ed,
                onClose: nE,
                onBack: () => ns(k.pn.PLAN_SELECT),
                onSkip: () => ns(null != eC || ez ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e,
            });
        } else {
            let e, t, l, s;
            r()(nT, "Currency not defined");
            let a = null != ew ? { paymentSourceId: ew, currency: nT } : { currency: nT },
                u = q.A.getGuild(ep),
                c = null == eL && null == u,
                d = null;
            switch (nt) {
                case k.pn.PLAN_SELECT:
                    r()(null != ep, "Missing guildId"),
                        r()(null != eT, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(nu, {
                            premiumSubscriptionPlan: eT,
                            numGuildBoosts: eK,
                            setNumGuildBoosts: eq,
                            setForceDisableSubmitButton: ng,
                            premiumSubscription: eP,
                            existingAvailableSlots: eM,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nE(), null != o && o(), (0, V.e)();
                            },
                            priceOptions: a,
                            isRefreshEnabled: ny,
                            showRefreshSubtotalRate: nC,
                            refreshNextStepLabel: (0, k.Ir)(
                                nc.find((e) => e !== k.pn.PLAN_SELECT && e !== k.pn.CONFIRM) ?? k.pn.REVIEW,
                            ),
                        })),
                        n_ && null != eP && null != eP.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: nh.xK,
                                  children: [
                                      (0, i.jsx)(S.w, {
                                          type: "critical",
                                          children: eD.intl.format(eD.t["/m3Y3s"], {
                                              paymentGatewayName: e0.qm[eP.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !G.A.isGuildFetching(ep) &&
                              c &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.p, {
                                          messageType: g.Y.ERROR,
                                          className: nh.MR,
                                          children: eD.intl.string(eD.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = ny
                            ? (0, i.jsx)(E.$, {
                                  variant: "secondary",
                                  text: eD.intl.string(eD.t["ETE/oC"]),
                                  onClick: nE,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eD.intl.string(eD.t.oEAioF),
                                  onClick: nE,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(E.$, {
                            variant: "primary",
                            text: eD.intl.string(eD.t["3PatSz"]),
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
                                forceDisableSubmitButton: nS,
                                numGuildBoostsToPurchase: eK,
                                isDisabledBecauseExternalSubscription: n_,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                eg || (null != ej && ej.premiumSubscriptionType === eX.PremiumTypes.TIER_2)
                                    ? ns(null != eC || ez ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS)
                                    : ns(k.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case k.pn.ADD_PAYMENT_STEPS:
                    break;
                case k.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(y.N, { className: nh.__invalid_body });
                    break;
                case k.pn.REVIEW:
                    r()(null != eT, "Missing nextPremiumSubscriptionPlan"),
                        r()(null != ep, "Missing guildId"),
                        (e = (0, i.jsx)(e7, {
                            guildId: ep,
                            paymentSources: eO,
                            priceOptions: a,
                            currentPremiumSubscription: eP,
                            premiumSubscriptionPaymentSourceId: eC,
                            premiumSubscriptionPlan: eT,
                            newAdditionalPlans: e3,
                            paymentSourceId: ew,
                            setPaymentSourceId: eF,
                            onPaymentSourceAdd: () => {
                                ns(k.pn.ADD_PAYMENT_STEPS), eF(null);
                            },
                        })),
                        (t = k.pn.PLAN_SELECT);
                    let m = async () => {
                        r()(null != e3, "Missing newAdditionalPlans");
                        let e = (0, F.W)(eO, ew);
                        eG(null);
                        try {
                            nm(B.h.PURCHASING),
                                ek(!0),
                                r()(null != ew, "Missing paymentSourceId"),
                                r()(null != eN, "Missing invoicePreview");
                            let n = { amount: eN.total, currency: eN.currency },
                                t = a.currency ?? eN.currency,
                                i = (0, el.U8)(eP, e3, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (et.default.track(e9.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...nn,
                                    duration_ms: Date.now() - e2,
                                    guild_id: ep,
                                    application_id: e_,
                                }),
                                nD)
                            )
                                return;
                            if (null == eP || null == ej) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, x.Ky)({
                                    items: e3,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nU(null != l.redirectURL);
                            } else {
                                let l = { items: (0, el.aE)(eP, e3) };
                                (l.currency = eP.currency ?? t),
                                    (l.paymentSource = null != eC ? eO[eC] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, x.nV)(eP, l, n, i, e4);
                                if (s.redirectConfirmation) return void nU(null != s.redirectURL);
                            }
                            null == ey && ns(k.pn.CONFIRM),
                                nm(B.h.COMPLETED),
                                null != ep && (await nA(ep, null != ey)),
                                null != ey && nE(),
                                em?.();
                        } catch (n) {
                            nm(B.h.FAIL),
                                eG(n),
                                et.default.track(e9.HAw.PAYMENT_FLOW_FAILED, {
                                    ...nn,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === e9.hes.CARD ? e9.kM_.STRIPE : e9.kM_.BRAINTREE) : null,
                                    payment_source_id: ew,
                                    duration_ms: Date.now() - e2,
                                });
                        } finally {
                            nD || ek(!1);
                        }
                    };
                    (d = {
                        text: eD.intl.string(eD.t.eUEeCt),
                        loading: eY,
                        disabled: null == ew || !ex || null != eA || eJ,
                        onClick: m,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(j.p, { ...d }));
                    break;
                case k.pn.CONFIRM:
                    let _ = u?.name ?? eL?.name,
                        P = (0, F.g)(eO, ew),
                        h = (0, er.b2)(eI.current) && null != ej && !eX.YV.has(ej.id);
                    e = (0, i.jsx)(no.W, {
                        guild: u,
                        guildBoostQuantity: eK + eM.length,
                        onClose: nE,
                        withAnimation: !1,
                        paymentSourceType: P,
                        fallbackGuildName: _,
                        didPurchaseOnFractionalPremium: h,
                        customCheckoutFlow: ef,
                    });
            }
            let I = null != eV && null == (0, k.ou)(eV) ? eV : eW;
            n =
                nt === k.pn.ADD_PAYMENT_STEPS
                    ? nG
                    : (0, i.jsx)(J.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === k.pn.REVIEW || n === k.pn.CONFIRM || (t && n === k.pn.PLAN_SELECT);
                          })({ currentStep: nt, isBoostingPreCheckoutModalRefreshEnabled: ny }),
                          steps: nc,
                          currentStep: nt,
                          paymentError: I,
                          purchaseErrorBlockRef: eH,
                          hasCurrencies: nL.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nN, {
                              currentStep: nt,
                              isRefreshEnabled: ny,
                              backStep: t,
                              handleStepChange: ns,
                              primaryButtonProps: d,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nh._5, children: (0, i.jsx)(m.y, {}) });
    let nw = (0, L.u)({ skuId: ne, step: nt }),
        nk = null;
    return (eh ||
        (ny && nt !== k.pn.PREMIUM_UPSELL
            ? (nk = nt === k.pn.REVIEW ? (0, i.jsx)(R.s3, { ...nw }) : (0, i.jsx)(R.s3, { title: nw.title }))
            : nt === k.pn.REVIEW
              ? (nk = (0, i.jsx)(R.s3, { ...nw }))
              : nt !== k.pn.PREMIUM_UPSELL &&
                (nk = (0, i.jsx)(ea.A, { onClose: nE, currentStep: nt, purchaseState: np }))),
    ny && nt === k.pn.CONFIRM)
        ? (0, i.jsx)(eo.A, {
              mediaUrls: nv.mediaUrls,
              isSuccess: nv.isSuccess,
              transitionState: t,
              onClose: () => (nE(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(eu.A, {
                      transitionState: t,
                      guild: q.A.getGuild(ep),
                      guildBoostQuantity: eK + eM.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(v.e0, {
              children: (0, i.jsxs)(R.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nE(), Promise.resolve()),
                  children: [nk, n],
              }),
          });
}
function nC(e) {
    let n = (0, u.bG)([en.A], () => en.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, f.Ay)(I.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(f.f5, {
        value: t,
        children: (0, i.jsx)(w.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: C.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(nb, { ...e }),
        }),
    });
}
