t.d(n, { default: () => nC });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(835245),
    u = t(17928),
    o = t(364840),
    c = t(430993),
    d = t(331322),
    p = t(123292),
    m = t(289873),
    S = t(683071),
    E = t(512950),
    _ = t(821609),
    g = t(820739),
    y = t(891197),
    P = t(444927),
    I = t(964486),
    x = t(793574),
    h = t(688810),
    f = t(753390),
    A = t(160946),
    N = t(606267),
    C = t(545075),
    b = t(110048),
    j = t(981036),
    v = t(725836),
    T = t(935899),
    M = t(666646),
    L = t(584160),
    R = t(169797),
    D = t(94420),
    U = t(357669),
    O = t(832286),
    G = t(958340),
    w = t(49960),
    k = t(166532),
    B = t(566980),
    F = t(216641),
    V = t(925847),
    Y = t(87719),
    W = t(253390),
    H = t(489254),
    z = t(251913),
    J = t(632638),
    $ = t(61299),
    K = t(71393),
    q = t(178368),
    Q = t(825755),
    Z = t(295405),
    X = t(97352),
    ee = t(166403),
    en = t(174459),
    et = t(473145),
    ei = t(927578),
    el = t(83617),
    er = t(615396),
    es = t(802790),
    ea = t(636441),
    eu = t(587491),
    eo = t(285753);
t(321073);
var ec = t(503698),
    ed = t.n(ec),
    ep = t(661531),
    em = t(990078),
    eS = t(408278),
    eE = t(834040),
    e_ = t(499373),
    eg = t(834730),
    ey = t(403581),
    eP = t(663803),
    eI = t(320448),
    ex = t(534514),
    eh = t(104510),
    ef = t(695366),
    eA = t(726656),
    eN = t(531260),
    eC = t(404374),
    eb = t(543767),
    ej = t(881489),
    ev = t(477421),
    eT = t(234419),
    eM = t(363476),
    eL = t(531506),
    eR = t(375708),
    eD = t(51465);
function eU() {
    return (0, i.jsxs)("div", {
        className: ed()(eD.dt, eD.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eD.qq,
            }),
            (0, i.jsx)(eg.E, {
                variant: "text-sm/medium",
                className: eD.tD,
                children: eR.intl.format(eR.t.f5VHKm, {}),
            }),
        ],
    });
}
function eO(e) {
    let { text: n, color: t } = e;
    return (0, i.jsxs)("div", {
        className: eD.dt,
        children: [(0, i.jsx)(ey.t, { size: "md", className: eD.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var eG = t(773669),
    ew = t(287809),
    ek = t(975571),
    eB = t(252424),
    eF = t(580630),
    eV = t(155718),
    eY = t(61572),
    eW = t(164928),
    eH = t(596034),
    ez = t(848584),
    eJ = t(241989),
    e$ = t(908419),
    eK = t(888751),
    eq = t(874638),
    eQ = t(692440),
    eZ = t(788868),
    eX = t(818348),
    e0 = t(327105),
    e1 = t(7921);
function e3(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: r,
            currency: s,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e$.U)();
    return (0, i.jsx)(eH._, {
        variant: {
            type: eH.I.Subscription,
            purchaseButtonText: eR.intl.string(eR.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: s,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: a,
        },
        paymentSourceType: n,
        immediateDelivery: u,
    });
}
function e6(e) {
    return eR.intl.format(eR.t.IeaYqg, { endDate: e });
}
function e8(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: e1.bU }),
            (0, i.jsx)(eg.E, { variant: "text-sm/normal", className: e1.b7, children: n }),
            (0, i.jsx)("div", { className: e1.bU }),
        ],
    });
}
function e9(e) {
    let {
            originalAmount: n,
            basePlanAdjustment: t,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: r,
            checkoutInvoicePreview: s,
        } = e,
        a = ((e) => {
            let {
                addedQuantity: n,
                guildBoostingSubscriptionPlan: t,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: u,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: eR.intl.formatToPlainString(eR.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, ei.Mn)(t.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: s,
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
            label: eR.intl.formatToPlainString(eR.t.ZSVged, { planName: (0, ei.RH)(l[0].subscriptionPlanId) }),
            tooltip: eR.intl.string(eR.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eR.intl.string(eR.t["+as5ZZ"]),
                tooltip: eR.intl.string(eR.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== s.tax && u.push({ id: "tax", label: eR.intl.string(eR.t.jiRvC7), amount: s.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, eK.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(ez.Vm, {
        defaultExpanded: !0,
        label: eR.intl.string(e0.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function e2(e) {
    let {
        isSubscriptionUpdate: n,
        premiumSubscription: t,
        checkoutInvoicePreview: l,
        renewalInvoicePreview: r,
        isPrepaid: s,
        isReverseTrial: a,
        priceOptions: u,
    } = e;
    return null != t
        ? (0, i.jsx)(eQ.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: r,
              isUpdate: n,
              isPrepaidPaymentSource: s,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(eQ.m0, {
              renewalInvoice: r,
              priceOptions: u,
              isPrepaidPaymentSource: s,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function e4(e) {
    let {
            guildId: n,
            paymentSources: t,
            priceOptions: r,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: o,
            premiumSubscriptionPlan: c,
            newAdditionalPlans: d,
            paymentSourceId: p,
            setPaymentSourceId: m,
            onPaymentSourceAdd: S,
        } = e,
        E = (function (e) {
            let n,
                {
                    guildId: t,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: r,
                    newAdditionalPlans: a,
                } = e,
                o = (0, u.bG)([K.A, G.A], () => {
                    let e = K.A.getGuild(t);
                    return null != e ? e : G.A.isGuildFetching(t) ? null : G.A.getGuild(t);
                }, [t]),
                c = r.interval,
                d = r.intervalCount,
                p = (0, u.bG)([X.A], () => X.A.getForSkuAndInterval((0, ei.mH)(eZ.pe.GUILD), c, d));
            s()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, ei.J$)(i.paymentSourceId),
                S = (0, ej.ds)();
            n = null != l ? (0, ei.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: E } = (0, h.Ay)(),
                [_, g] = (0, eb.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: E,
                    analyticsLocation: x.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [y, P] = (0, eb.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: E,
                    analyticsLocation: x.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, M.OQ)({
                    checkoutInvoicePreview: _,
                    checkoutInvoiceError: g,
                    renewalInvoicePreview: y,
                    renewalInvoiceError: P,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: _,
                    renewalInvoicePreview: y,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: n,
            priceOptions: r,
            currentPremiumSubscription: a,
            premiumSubscriptionPlan: c,
            newAdditionalPlans: d,
        }),
        {
            isSubscriptionUpdate: _,
            guild: g,
            isPrepaid: y,
            isReverseTrial: P,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: f,
        } = E,
        A = l.useMemo(
            () => ({ tooltipText: null == o ? null : eR.intl.string(eR.t.XiuuV9), shouldUseUnifiedCheckoutUI: !0 }),
            [o],
        );
    if (null == I || null == f || null == g) return (0, i.jsx)(eW.E, {});
    let N = (0, i.jsx)(e2, {
            isSubscriptionUpdate: _,
            premiumSubscription: a,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: f,
            isPrepaid: y,
            isReverseTrial: P,
            priceOptions: r,
        }),
        C = (0, i.jsx)(eY.N, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eR.intl.string(eR.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            disabled: null != o,
            subscriptionPaymentSourceId: o,
            additionalPaymentSourceDropdownProps: A,
        }),
        b = (function (e) {
            let {
                isSubscriptionUpdate: n,
                premiumSubscriptionPlan: t,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: l,
                paymentSources: r,
                paymentSourceId: s,
            } = e;
            return {
                paymentSourceType: (0, F.g)(r, s),
                premiumSubscriptionPlan: t,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, eQ.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: _,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: f,
            checkoutInvoicePreview: I,
            paymentSources: t,
            paymentSourceId: p,
        }),
        j = (0, i.jsx)(e3, { ...b }),
        v = (function (e) {
            let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: u, isPrepaid: o, isReverseTrial: c } = a,
                d = t.interval,
                p = t.intervalCount,
                m = (e) => (0, eq.Z)(i.invoiceItems).find((n) => eZ.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            s()(null != S, "Missing guild boosting invoice item");
            let E = m((e) => e.amount < 0),
                _ = null != E ? S.quantity - E.quantity : S.quantity,
                g = i.invoiceItems.filter((e) => (0, ei.xq)(e.subscriptionPlanId)),
                y = g.reduce((e, n) => e + n.amount, 0),
                P = (0, eb.sL)(S) * _,
                I = (0, eF.$g)(P, i.currency),
                x = (0, eF.CE)(I, d, p),
                h = (0, eF.$g)(i.total, i.currency) + (i.currency !== eX.Yr.USD ? "*" : ""),
                f = i.subtotal - P - y,
                A = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * _ };
                }),
                N = A.find((e) => e.type === eV.iS.SUBSCRIPTION_PLAN),
                C = A.find((e) => e.type === eV.iS.ENTITLEMENT),
                b = S.subscriptionPlanPrice * _;
            return {
                addedQuantity: _,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: x,
                formattedOriginalAmountGuildBoostRate: (0, eF.CE)((0, eF.$g)(b, i.currency), d, p),
                formattedTotal: h,
                basePlanAdjustment: y,
                basePlanInvoiceItems: g,
                guildBoostingAdjustment: f,
                subscriptionDiscount: N,
                entitlementDiscount: C,
                originalAmount: b,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: f,
            priceOptions: r,
            reviewState: E,
        }),
        T = (0, i.jsx)(e9, { ...v }),
        L = (function (e, n, t) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: s,
                    formattedGuildBoostRate: a,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: o,
                } = n,
                c = null != o;
            return {
                label: eR.intl.formatToPlainString(eR.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, ei.Mn)(r.id, !1, s),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eJ.a6, {}),
                price: a,
                PriceIcon: c ? ey.t : void 0,
                priceTooltip: c ? eR.intl.string(e0.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            g,
            v,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: e6(i.currentPeriodEnd) } : null;
            })({ isPrepaid: y, isReverseTrial: P, premiumSubscription: a }),
        ),
        R = (0, i.jsx)(eJ.f7, { ...L });
    return (0, i.jsx)(eW.T, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: R,
        subscriptionDetailsContent: N,
        paymentSelectContent: C,
        invoiceSummaryContent: T,
        legalContent: j,
        invoiceTotalDueValue: v.formattedTotal,
        invoiceTotalDueLabel: eR.intl.string(e0.default.R0cZsM),
    });
}
var e5 = t(652215);
t(26279);
var e7 = t(406263);
function ne(e) {
    return "" === e || "-" === e;
}
function nn(e) {
    let { value: n, onChange: t, minValue: r = 1, maxValue: s = 30, ariaLabel: a } = e,
        [u, o] = l.useState(n);
    l.useEffect(() => {
        o(n);
    }, [n]);
    let c = "number" == typeof u,
        d = (e) => {
            o(e), ne(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: e7.U$,
        children: [
            (0, i.jsx)(eS.K, {
                variant: "secondary",
                size: "md",
                icon: eE.Q,
                onClick: () => {
                    c && !(u <= r) && d(u - 1);
                },
                "aria-label": eR.intl.string(eR.t["k+ohJm"]),
                disabled: !c || u <= r,
            }),
            (0, i.jsx)("div", {
                className: e7.WJ,
                children: (0, i.jsx)("input", {
                    className: e7.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${u}`,
                    onChange: (e) =>
                        ((e) => {
                            if (ne(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= r) return void d(r);
                                if (n >= s) return void d(s);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        ne(u) && o(n);
                    },
                }),
            }),
            (0, i.jsx)(eS.K, {
                variant: "secondary",
                size: "md",
                icon: e_.T,
                onClick: () => {
                    c && !(u >= s) && d(u + 1);
                },
                "aria-label": eR.intl.string(eR.t.w8Sc4B),
                disabled: !c || u >= s,
            }),
        ],
    });
}
function nt(e) {
    let { message: n } = e;
    return (0, i.jsx)(eg.E, { variant: "text-xs/normal", color: "text-muted", className: e7.jH, children: n });
}
function ni(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: e7.Vk,
        children: [
            (0, i.jsx)("div", {
                className: e7.D0,
                children: (0, i.jsx)(ey.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e7.ue,
                    color: eC.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: e7.yP, children: n }),
        ],
    });
}
function nl(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: s,
        planPriceContent: a,
        subtotalContent: u,
        refreshSubtotalContent: o,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: S,
        refreshDiscountCallout: E,
        legacyPricingNotes: _,
        refreshPricingNotes: g,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            c,
            m,
            (0, i.jsxs)("div", {
                className: e1.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: e1.E6,
                        children: [
                            (0, i.jsx)(eP.l, {
                                value: t,
                                onChange: (e) => r(e),
                                className: e1.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e1.$0, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ed()(e1.QK, { [e1.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: e1.J3 }),
            (0, i.jsxs)("div", {
                className: e1.mP,
                children: [
                    (0, i.jsx)("div", { className: e1.xp, children: eR.intl.string(eR.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: ed()(e1.__invalid_planSelectorSubtotalPrice, { [e1.S]: n }),
                        children: u,
                    }),
                ],
            }),
            _.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function nr(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        refreshNextStepLabel: s,
        planLabel: a,
        planPriceContent: u,
        subtotalContent: o,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: S,
        discountCallout: E,
        refreshDiscountCallout: _,
        legacyPricingNotes: g,
        refreshPricingNotes: y,
    } = e;
    return (0, i.jsxs)("div", {
        className: e7.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: e7.K3,
                children: [
                    (0, i.jsx)(eg.E, {
                        variant: "text-md/medium",
                        className: e7.bk,
                        children: eR.intl.string(eR.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eI._, { className: e7.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(eg.E, { variant: "text-md/medium", className: e7.kX, children: s }),
                ],
            }),
            p,
            S,
            (0, i.jsxs)("div", {
                className: e7.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: e7.fX,
                        children: [
                            (0, i.jsx)(nn, {
                                value: t,
                                onChange: (e) => r(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(eg.E, { variant: "text-md/medium", className: e7.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ed()(e7.El, { [e1.S]: n }), children: u }),
                ],
            }),
            _,
            (0, i.jsxs)("div", {
                className: e7.fh,
                children: [
                    (0, i.jsx)(ex.D, {
                        variant: "heading-lg/semibold",
                        className: e7.O3,
                        children: eR.intl.string(eR.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: ed()(e7.BU, { [e1.S]: n }), children: c }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function ns(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: e1.Mv,
        children: [
            (0, i.jsx)(eh._, { className: e1.T5, color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eR.intl.format(eR.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(em.m, {
                              text: eR.intl.formatToPlainString(eR.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(ef.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e1.Y5,
                                  color: ep.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function na(e) {
    let {
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: S = !1,
            refreshNextStepLabel: E = eR.intl.string(eR.t.QBnNHq),
        } = e,
        _ = (function (e) {
            let n,
                t,
                {
                    premiumSubscriptionPlan: r,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: S,
                } = e,
                E =
                    ((n = (0, u.bG)([ee.A], () => ee.A.getPremiumTypeSubscription())),
                    (0, u.bG)([Z.A], () =>
                        n?.paymentSourceId != null ? Z.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                _ = r.interval,
                g = r.intervalCount,
                y = (0, u.bG)([X.A], () => X.A.getForSkuAndInterval((0, ei.mH)(eZ.pe.GUILD), _, g)),
                P = (0, u.bG)([ew.default], () => ew.default.getCurrentUser()),
                I = (0, eN.A)({ forceFetch: !1 });
            s()(null != y, "Missing guildBoostingSubscriptionPlan");
            let f = [{ planId: y.id, quantity: 1 }],
                A = c?.items.find(
                    (e) => e.planId === eZ.gD.PREMIUM_MONTH_TIER_2 || e.planId === eZ.gD.PREMIUM_YEAR_TIER_2,
                );
            null != A && f.push(A);
            let N = c?.items.find(
                    (e) => e.planId === eZ.gD.PREMIUM_MONTH_GUILD || e.planId === eZ.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == E || !eZ.uJ.has(E) || null == N,
                { analyticsLocations: b } = (0, h.Ay)(),
                [j, v] = (0, eb.YV)({
                    subscriptionId: c?.id,
                    items: f,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: C,
                    analyticsLocations: b,
                    analyticsLocation: x.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, M.Tr)(j, v);
            let T = !C && null == j && null == v;
            l.useLayoutEffect(() => {
                o(T);
            }, [T, o]);
            let L = (0, eT.V)()?.subscription_trial?.sku_id === eZ.pe.TIER_2,
                R = ei.Ay.hasBoostDiscount(P),
                D = R && null != c && ei.Ay.isPremiumAtLeast(ei.Ay.getPremiumType(c.planId), eZ.PremiumTypes.TIER_1),
                U = j?.findInvoiceItemByPlanId(y.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: j.currency }
                        : ei.Ay.getPrice(y.id, R, !1, S),
                G = a * O.amount,
                w = (0, ej.ds)() && R && null != c,
                k = (function (e) {
                    let n,
                        {
                            existingAvailableSlotsCount: t,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: s,
                        } = e;
                    return (
                        (n = l ? "reverse_trial" : r ? "discount" : s ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: t > 0,
                            showFractionalPremiumBanner: i === eZ.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: I.fractionalState,
                    isReverseTrial: w,
                    hasDiscountUpsell: D,
                    withTrialOfferCopyVariant: L,
                });
            "discount" === k.upsellVariant
                ? (s()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = eR.intl.format(eR.t.hf6YOY, { planName: ei.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eR.intl.format("upsell_trial" === k.upsellVariant ? eR.t.ba1L74 : eR.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eB.l9)(eG.default.locale, eZ.oX / 100),
                      freeSubscriptionCount: eZ.M4,
                  }));
            let B = p.filter((e) => (0, et.I5)(e)).length,
                F = (0, ei.J$)(S.paymentSourceId),
                { ipCountryCode: V } = (0, ev.A)(),
                Y = "HR" === V && O.currency === eX.Yr.EUR,
                W =
                    w && null != c
                        ? (0, i.jsx)(e8, { text: e6(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: ed()(e1.hA, e1.G3), children: eR.intl.string(eR.t.jNY1FO) }),
                H =
                    w && null != c
                        ? (0, i.jsx)(e8, { text: e6(c.currentPeriodEnd), className: e1.jk })
                        : (0, i.jsx)("div", { className: e7._X, children: eR.intl.string(eR.t.jNY1FO) }),
                z = k.showExistingSlotNotice
                    ? (0, i.jsx)(ns, { existingAvailableSlots: p, canceledCount: B, premiumSubscription: c })
                    : null,
                J = k.showFractionalPremiumBanner ? (0, i.jsx)(eL.vi, { fractionalPremiumInfo: I }) : null,
                $ = F
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eZ.WT.YEAR
                              ? eR.intl.string(eR.t.YDpAzZ)
                              : n === eZ.WT.MONTH && 1 === t
                                ? eR.intl.string(eR.t["6ZR3By"])
                                : null;
                      })({ intervalType: _, intervalCount: g }) ?? eR.intl.string(eR.t.K9Bmze))
                    : eR.intl.string(eR.t.K9Bmze),
                K = T
                    ? (0, i.jsx)(m.y, {})
                    : F
                      ? (0, eF.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                r = (0, eF.$g)(n, t);
                            return i === eZ.WT.YEAR
                                ? eR.intl.formatToPlainString(eR.t["8M04YJ"], { price: r })
                                : i === eZ.WT.MONTH && 1 === l
                                  ? eR.intl.formatToPlainString(eR.t.VStWCR, { price: r })
                                  : i === eZ.WT.MONTH && l > 1
                                    ? eR.intl.formatToPlainString(eR.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: _, intervalCount: g, amount: O.amount, currency: O.currency }),
                q = T
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eM.A, {
                          price: G,
                          currency: O.currency,
                          intervalType: _,
                          intervalCount: g,
                          isPrepaidPaymentSource: F,
                      }),
                Q = T ? (0, i.jsx)(m.y, {}) : (0, eF.$g)(G, O.currency),
                en = [],
                el = [];
            if (Y) {
                let e = (0, i.jsx)(
                    eA.A,
                    {
                        message: eR.intl.formatToPlainString(eR.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eF.$g)(7.5345 * G, eX.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                en.push(e), el.push(e);
            }
            let er = eR.intl.format(eR.t.Om31w8, { documentationLink: ek.A.getArticleURL(e5.MVz.LOCALIZED_PRICING) });
            return (
                en.push((0, i.jsx)(eA.A, { message: er }, "localized-pricing")),
                el.push((0, i.jsx)(nt, { message: er }, "localized-pricing")),
                {
                    isLoading: T,
                    planLabel: $,
                    planPriceContent: K,
                    subtotalContent: q,
                    refreshSubtotalContent: Q,
                    legacyDescriptionContent: W,
                    refreshDescriptionContent: H,
                    existingSlotNotice: z,
                    fractionalBanner: J,
                    legacyPricingNotes: en,
                    refreshPricingNotes: el,
                    discountCallout:
                        "reverse_trial" === k.upsellVariant
                            ? (0, i.jsx)(eU, {})
                            : (0, i.jsx)(eO, { text: t, color: eC.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === k.upsellVariant ? (0, i.jsx)(eU, {}) : (0, i.jsx)(ni, { text: t }),
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
        });
    return (0, i.jsx)(S ? nr : nl, {
        isLoading: _.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
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
var nu = t(879100),
    no = t(460905),
    nc = t(183623),
    nd = t(95635),
    np = t(935462),
    nm = t(532794),
    nS = t(811611),
    nE = t(901017),
    n_ = t(213178);
function ng(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eG.default], () => eG.default.locale);
    return (0, i.jsxs)("div", {
        className: n_.mH,
        children: [
            (0, i.jsx)(nE.A, {
                icon: eh._,
                iconClassName: n_.pl,
                description: eR.intl.formatToPlainString(eR.t.sQBgs2, { numFreeGuildSubscriptions: eZ.M4 }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nE.A, {
                icon: eh._,
                iconClassName: n_.pl,
                description: eR.intl.formatToPlainString(eR.t["1A6vXi"], { percent: (0, eB.l9)(t, eZ.oX / 100) }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nE.A, { icon: no.n, iconClassName: n_.zO, description: eR.intl.string(eR.t.Z9b2x2) }) : null,
            (0, i.jsx)(nE.A, { icon: nc.F, iconClassName: n_.Kg, description: eR.intl.string(eR.t["8dqG5E"]) }),
            (0, i.jsx)(nE.A, { icon: nd.J, iconClassName: n_.$z, description: eR.intl.string(eR.t.cBorIy) }),
        ],
    });
}
function ny(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: r,
            onSkip: s,
            onSubscriptionConfirmation: a,
            analyticsLocation: u,
            analyticsSourceLocation: m,
            priceOptions: S,
        } = e,
        { analyticsLocations: E, sourceAnalyticsLocations: g } = (0, h.Ay)(x.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        y = null == n || null == n.premiumSubscriptionType,
        P = ei.Ay.getPrice(eZ.gD.PREMIUM_MONTH_TIER_2, !1, !1, S),
        I = (0, eF.$g)(P.amount, P.currency),
        f = (0, eT.V)(),
        A = f?.trial_id,
        N = f?.subscription_trial?.sku_id === eZ.pe.TIER_2;
    return (
        l.useEffect(() => {
            en.default.track(e5.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eZ.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: g,
            });
        }, [g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(np.s_, { "data-migration-pending": !0, onClick: t, className: n_.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        N && (0, i.jsx)(nS.Vq, { className: n_.Fg }),
                        (0, i.jsx)("div", { className: ed()(n_.Tn, { [n_.NH]: N }) }),
                        (0, i.jsx)("div", {
                            className: n_.G3,
                            children:
                                null != A
                                    ? eR.intl.string(eR.t.AoSzEr)
                                    : eR.intl.format(eR.t["7vePZb"], { monthlyPrice: I }),
                        }),
                        (0, i.jsx)(ng, { shouldUpsellFromNoneTier: y }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eR.intl.string(eR.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eR.intl.string(eR.t["SI/adm"]),
                                        onClick: s,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(_.$, {
                                        variant: "active",
                                        text: null != A ? eR.intl.string(eR.t["Gd/XHF"]) : eR.intl.string(eR.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nm.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eZ.pe.TIER_2,
                                                    analyticsLocations: E,
                                                    analyticsObject: {
                                                        ...u,
                                                        section: e5.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
var nP = t(898640);
let nI = eZ.gD.NONE_MONTH,
    nx = [k.pn.PLAN_SELECT, k.pn.REVIEW, k.pn.CONFIRM],
    nh = [k.pn.PLAN_SELECT, k.pn.ADD_PAYMENT_STEPS, k.pn.REVIEW, k.pn.CONFIRM];
async function nf(e, n) {
    await (0, g.CD)();
    let t = (0, et.D$)(q.A.boostSlots);
    return (0, g.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nA(e) {
    let {
        currentStep: n,
        isRefreshEnabled: t,
        backStep: l,
        handleStepChange: r,
        primaryButtonProps: a,
        secondaryButton: u,
        legacySubmitButton: c,
    } = e;
    return n === k.pn.CONFIRM
        ? null
        : n === k.pn.REVIEW
          ? (s()(null != a, "Missing primaryButtonProps for review step"),
            (0, i.jsx)(R.lo, { onBackClick: null != l ? () => r(l) : void 0, primaryButtonProps: a }))
          : (0, i.jsx)(o.j, {
                children: (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != l ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != l
                            ? (0, i.jsx)(p.Q, {
                                  text: eR.intl.string(eR.t["13/7kX"]),
                                  onClick: () => r(l),
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
function nN(e) {
    let n,
        {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: o,
            analyticsLocations: d,
            analyticsLocation: g,
            analyticsSourceLocation: ec,
            guildId: ed,
            onSubscribeComplete: ep,
            totalNumberOfSlotsToAssign: em = 1,
            disablePremiumUpsell: eS = !1,
            onSubscriptionConfirmation: eE,
            applicationId: e_,
            intent: eg,
        } = e,
        ey = (0, D.t4)((e) => e.hasAcceptedTerms),
        {
            activeSubscription: eP,
            blockedPayments: eI,
            startingFractionalPremiumEndsAtRef: ex,
            customCheckoutFlow: eh,
        } = (0, w.P5)(),
        ef = (0, M.sw)(),
        eA = (0, u.bG)([ee.A], () => ee.A.hasFetchedSubscriptions()),
        eN = null != eP ? eP.paymentSourceId : null,
        eC = (0, u.bG)([X.A], () => (null != eP ? (0, er.c9)(eP.planId) : null)),
        eb = (0, u.bG)([X.A], () => null == eP || null != X.A.get(eP.planId)),
        ej = (0, u.bG)([X.A], () => (null == eC ? X.A.get(nI) : eC)),
        ev = l.useRef((0, et.D$)(q.A.boostSlots)).current,
        eT = (0, u.bG)([G.A], () => (null != ed ? G.A.getGuild(ed) : void 0), [ed]),
        eM = (0, u.bG)([Z.A], () => Z.A.defaultPaymentSourceId),
        eL = (0, $._V)(null != eN ? eN : eA ? eM : null),
        {
            paymentSources: eD,
            setPurchaseError: eU,
            paymentSourceId: eO,
            setIsSubmittingCurrentStep: eG,
            paymentAuthenticationState: ew,
            setPaymentSourceId: ek,
            isSubmittingCurrentStep: eB,
            paymentError: eF,
            purchaseError: eV,
            purchaseErrorBlockRef: eY,
        } = eL,
        eW = Object.keys(eD).length > 0,
        eH = (0, T.D)(),
        ez = (0, N.iB)({ checkoutPaymentSources: eH, paymentSourceId: eO, location: "GuildBoostPurchaseModal" }),
        [eJ, e$] = l.useState(em - ev.length),
        eK = (0, u.bG)([Q.A], () => Q.A.popupCallbackCalled),
        eq = (0, A.Y)(),
        eQ = l.useMemo(
            () => (null != eP && eb && eq ? (0, W.v)(eP, eJ) : [{ planId: eZ.gD.PREMIUM_MONTH_GUILD, quantity: eJ }]),
            [eP, eb, eJ, eq],
        ),
        e0 = l.useMemo(() => (0, V.A)(), []),
        [e1, e3] = (0, P.A)(() => [e0 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e6 } = (0, h.Ay)(d, x.A.GUILD_BOOST_PURCHASE_MODAL),
        e8 = l.useMemo(
            () =>
                eQ.find((e) => {
                    let { planId: n } = e;
                    return eZ.pW.has(n);
                })?.planId ?? eZ.gD.PREMIUM_MONTH_GUILD,
            [eQ],
        ),
        e9 = (0, u.bG)([X.A], () => X.A.get(e8)?.skuId, [e8]),
        e2 = l.useMemo(
            () => ({
                load_id: e1,
                payment_type: eX.fr[eX.VV.SUBSCRIPTION],
                sku_id: eZ.pe.GUILD,
                subscription_type: e5.rzx.PREMIUM,
                subscription_plan_id: e8,
                quantity: eJ,
                location: g,
                source: ec,
                location_stack: e6,
                checkout_flow: b.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e1, g, e6, ec, eJ, e8],
        );
    l.useEffect(() => {
        (0, el.c_)(eO);
    }, [eO]);
    let [e7, ne] = l.useState(k.pn.PLAN_SELECT),
        nn = l.useMemo(() => Date.now(), [e7]),
        nt = l.useCallback(
            (e, n) => {
                ne(e), eU(null);
                let t = Date.now();
                en.default.track(e5.HAw.PAYMENT_FLOW_STEP, {
                    ...e2,
                    from_step: null != n ? n : e7,
                    to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - nn,
                    flow_duration_ms: t - e3,
                    guild_id: ed,
                    application_id: e_,
                });
            },
            [eU, e2, e7, nn, e3, ed, e_],
        ),
        ni = {
            baseAnalyticsData: e2,
            flowStartTime: e3,
            guildId: ed,
            handleStepChange: nt,
            onSubscribeComplete: ep,
            paymentSourceId: eO,
            setIsSubmittingCurrentStep: eG,
            setPurchaseError: eU,
        },
        nl = l.useRef(ni);
    l.useEffect(() => {
        nl.current = ni;
    }),
        l.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: n,
                guildId: t,
                handleStepChange: i,
                onSubscribeComplete: l,
                paymentSourceId: r,
                setIsSubmittingCurrentStep: s,
                setPurchaseError: a,
            } = nl.current;
            (async () => {
                if (!0 === eK)
                    try {
                        if (null == Q.A.redirectedPaymentId) return;
                        await (0, f.tn)(Q.A.redirectedPaymentId),
                            i(k.pn.CONFIRM),
                            nc(B.h.COMPLETED),
                            null != t && (await nf(t, null != eg)),
                            l?.();
                    } catch (t) {
                        nc(B.h.FAIL),
                            a(t),
                            en.default.track(e5.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: e5.kM_.STRIPE,
                                payment_source_id: r,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        s(!1), (0, f.bl)();
                    }
            })();
        }, [eK, eg]),
        (0, I.Ay)(() => {
            ee.A.hasFetchedSubscriptions() || (0, f.hP)(),
                null == ed ||
                    null != K.A.getGuild(ed) ||
                    null != G.A.getGuild(ed) ||
                    G.A.isGuildFetching(ed) ||
                    (0, O.y)(ed),
                (0, U.b)({ ...e2, guild_id: ed, application_id: e_, custom_checkout_flow: eh }),
                null != eP &&
                    null != eP.renewalMutations &&
                    en.default.track(e5.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: g, guild_id: ed });
        });
    let [nr, ns] = l.useState(nx),
        [no, nc] = l.useState(B.h.WAITING),
        [nd, np] = l.useState(!0),
        nm = () => {
            r(no === B.h.COMPLETED);
        },
        nS = null != eP && eP.isPurchasedExternally;
    l.useEffect(() => {
        ew !== z.oc.PENDING &&
            e7 !== k.pn.CONFIRM &&
            null != eN &&
            (nr !== nx && ns(nx), nx.includes(e7) || e7 === k.pn.PREMIUM_UPSELL || nt(k.pn.REVIEW)),
            e7 === k.pn.ADD_PAYMENT_STEPS && nr !== nh && ns(nh),
            nS && e7 !== k.pn.PLAN_SELECT && ne(k.pn.PLAN_SELECT);
    }, [e7, nt, nS, ew, eP, eN, nr]),
        (0, z.b)(e7, ew, nt, nc),
        (0, k.zT)(e7, no, nc);
    let nE = (0, H.n)("GuildBoostPurchaseModal"),
        n_ = nE && (e7 === k.pn.REVIEW || e7 === k.pn.CONFIRM),
        ng = (0, eo.A)(n_),
        [nN, nC] = l.useState(null),
        [nb, nj] = l.useState([]),
        [nv, nT] = l.useState(!1),
        nM = l.useMemo(() => JSON.stringify(nb), [nb]);
    l.useEffect(() => {
        let e;
        eq &&
            (null != X.A.get(eZ.gD.PREMIUM_MONTH_GUILD) && nj((e = (0, el._w)(eZ.gD.PREMIUM_MONTH_GUILD, eO, !1))),
            null == eO && null != eP && null != eP.paymentSourceId ? nC(eP.currency) : null != e && nC(e[0]));
    }, [eO, eP, eq, nM]);
    let nL = (0, $.Y)({
        paymentModalArgs: eL,
        initialStep: k.pn.PAYMENT_TYPE,
        prependSteps: [k.pn.PLAN_SELECT],
        appendSteps: [k.pn.REVIEW, k.pn.CONFIRM],
        breadcrumpSteps: nr,
        currentBreadcrumpStep: e7,
        onReturn: () => {
            nt(Object.values(eD).length < 1 ? k.pn.PLAN_SELECT : k.pn.REVIEW, k.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            nt(k.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
                i = Date.now();
            en.default.track(e5.HAw.PAYMENT_FLOW_STEP, {
                ...e2,
                from_step: n,
                to_step: t,
                step_duration_ms: i - nn,
                flow_duration_ms: i - e3,
                guild_id: ed,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eI) n = (0, i.jsx)(C.oO, {});
    else if (eA && eb && eq && null != nN && "" !== nN)
        if (eP?.isPausedOrPausePending && !eP.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nP.C, children: eR.intl.string(eR.t.mOWsF1) }),
            });
        else if (null != eP && null != eP.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nP.C, children: eR.intl.string(eR.t.npfhh0) }),
            });
        else if (e7 === k.pn.PREMIUM_UPSELL) {
            s()(null != ej, "Missing nextPremiumSubscriptionPlan"), s()(nN, "Currency not defined");
            let e = null != eO ? { paymentSourceId: eO, currency: nN } : { currency: nN };
            n = (0, i.jsx)(ny, {
                premiumSubscriptionPlan: ej,
                analyticsLocation: g,
                analyticsSourceLocation: ec,
                onClose: nm,
                onBack: () => nt(k.pn.PLAN_SELECT),
                onSkip: () => nt(null != eN || eW ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e,
            });
        } else {
            let e, t, l, r;
            s()(nN, "Currency not defined");
            let a = null != eO ? { paymentSourceId: eO, currency: nN } : { currency: nN },
                u = K.A.getGuild(ed),
                c = null == eT && null == u,
                d = null;
            switch (e7) {
                case k.pn.PLAN_SELECT:
                    s()(null != ed, "Missing guildId"),
                        s()(null != ej, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(na, {
                            premiumSubscriptionPlan: ej,
                            numGuildBoosts: eJ,
                            setNumGuildBoosts: e$,
                            setForceDisableSubmitButton: np,
                            premiumSubscription: eP,
                            existingAvailableSlots: ev,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                nm(), null != o && o(), (0, Y.e)();
                            },
                            priceOptions: a,
                            isRefreshEnabled: nE,
                            refreshNextStepLabel: (0, k.Ir)(
                                nr.find((e) => e !== k.pn.PLAN_SELECT && e !== k.pn.CONFIRM) ?? k.pn.REVIEW,
                            ),
                        })),
                        nS && null != eP && null != eP.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: nP.xK,
                                  children: [
                                      (0, i.jsx)(S.w, {
                                          type: "critical",
                                          children: eR.intl.format(eR.t["/m3Y3s"], {
                                              paymentGatewayName: eX.qm[eP.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !G.A.isGuildFetching(ed) &&
                              c &&
                              (e = (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(E.p, {
                                          messageType: E.Y.ERROR,
                                          className: nP.MR,
                                          children: eR.intl.string(eR.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = nE
                            ? (0, i.jsx)(_.$, {
                                  variant: "secondary",
                                  text: eR.intl.string(eR.t["ETE/oC"]),
                                  onClick: nm,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eR.intl.string(eR.t.oEAioF),
                                  onClick: nm,
                                  variant: "secondary",
                              })),
                        (r = (0, i.jsx)(_.$, {
                            variant: "primary",
                            text: eR.intl.string(eR.t["3PatSz"]),
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
                                numGuildBoostsToPurchase: eJ,
                                isDisabledBecauseExternalSubscription: nS,
                                isMissingGuildInformation: c,
                            }),
                            onClick: () => {
                                eS || (null != eC && eC.premiumSubscriptionType === eZ.PremiumTypes.TIER_2)
                                    ? nt(null != eN || eW ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS)
                                    : nt(k.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case k.pn.ADD_PAYMENT_STEPS:
                    break;
                case k.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(y.N, { className: nP.__invalid_body });
                    break;
                case k.pn.REVIEW:
                    s()(null != ej, "Missing nextPremiumSubscriptionPlan"),
                        s()(null != ed, "Missing guildId"),
                        (e = (0, i.jsx)(e4, {
                            guildId: ed,
                            paymentSources: eD,
                            priceOptions: a,
                            currentPremiumSubscription: eP,
                            premiumSubscriptionPaymentSourceId: eN,
                            premiumSubscriptionPlan: ej,
                            newAdditionalPlans: eQ,
                            paymentSourceId: eO,
                            setPaymentSourceId: ek,
                            onPaymentSourceAdd: () => {
                                nt(k.pn.ADD_PAYMENT_STEPS), ek(null);
                            },
                        })),
                        (t = k.pn.PLAN_SELECT);
                    let m = async () => {
                        s()(null != eQ, "Missing newAdditionalPlans");
                        let e = (0, F.W)(eD, eO);
                        eU(null);
                        try {
                            nc(B.h.PURCHASING),
                                eG(!0),
                                s()(null != eO, "Missing paymentSourceId"),
                                s()(null != ef, "Missing invoicePreview");
                            let n = { amount: ef.total, currency: ef.currency },
                                t = a.currency ?? ef.currency,
                                i = (0, ei.U8)(eP, eQ, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (en.default.track(e5.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e2,
                                    duration_ms: Date.now() - e3,
                                    guild_id: ed,
                                    application_id: e_,
                                }),
                                nv)
                            )
                                return;
                            if (null == eP || null == eC) {
                                s()(null != e, "Missing paymentSource");
                                let l = await (0, f.Ky)({
                                    items: eQ,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nT(null != l.redirectURL);
                            } else {
                                let l = { items: (0, ei.aE)(eP, eQ) };
                                (l.currency = eP.currency ?? t),
                                    (l.paymentSource = null != eN ? eD[eN] : void 0),
                                    null == l.paymentSource &&
                                        (s()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let r = await (0, f.nV)(eP, l, n, i, e6);
                                if (r.redirectConfirmation) return void nT(null != r.redirectURL);
                            }
                            null == eg && nt(k.pn.CONFIRM),
                                nc(B.h.COMPLETED),
                                null != ed && (await nf(ed, null != eg)),
                                null != eg && nm(),
                                ep?.();
                        } catch (n) {
                            nc(B.h.FAIL),
                                eU(n),
                                en.default.track(e5.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e2,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === e5.hes.CARD ? e5.kM_.STRIPE : e5.kM_.BRAINTREE) : null,
                                    payment_source_id: eO,
                                    duration_ms: Date.now() - e3,
                                });
                        } finally {
                            nv || eG(!1);
                        }
                    };
                    (d = {
                        text: eR.intl.string(eR.t.eUEeCt),
                        loading: eB,
                        disabled: !ey || ez,
                        onClick: m,
                        variant: "active",
                    }),
                        (r = (0, i.jsx)(j.p, { ...d }));
                    break;
                case k.pn.CONFIRM:
                    let g = u?.name ?? eT?.name,
                        P = (0, F.g)(eD, eO),
                        I = (0, er.b2)(ex.current) && null != eC && !eZ.YV.has(eC.id);
                    e = (0, i.jsx)(nu.W, {
                        guild: u,
                        guildBoostQuantity: eJ + ev.length,
                        onClose: nm,
                        withAnimation: !1,
                        paymentSourceType: P,
                        fallbackGuildName: g,
                        didPurchaseOnFractionalPremium: I,
                        customCheckoutFlow: eh,
                    });
            }
            let x = null != eF && null == (0, k.ou)(eF) ? eF : eV;
            n =
                e7 === k.pn.ADD_PAYMENT_STEPS
                    ? nL
                    : (0, i.jsx)(J.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === k.pn.REVIEW || n === k.pn.CONFIRM || (t && n === k.pn.PLAN_SELECT);
                          })({ currentStep: e7, isBoostingPreCheckoutModalRefreshEnabled: nE }),
                          steps: nr,
                          currentStep: e7,
                          paymentError: x,
                          purchaseErrorBlockRef: eY,
                          hasCurrencies: nb.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nA, {
                              currentStep: e7,
                              isRefreshEnabled: nE,
                              backStep: t,
                              handleStepChange: nt,
                              primaryButtonProps: d,
                              secondaryButton: l,
                              legacySubmitButton: r,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nP._5, children: (0, i.jsx)(m.y, {}) });
    let nR = (0, L.u)({ skuId: e9, step: e7 }),
        nD = null;
    return (eI ||
        (nE && e7 !== k.pn.PREMIUM_UPSELL
            ? (nD = e7 === k.pn.REVIEW ? (0, i.jsx)(R.s3, { ...nR }) : (0, i.jsx)(R.s3, { title: nR.title }))
            : e7 === k.pn.REVIEW
              ? (nD = (0, i.jsx)(R.s3, { ...nR }))
              : e7 !== k.pn.PREMIUM_UPSELL &&
                (nD = (0, i.jsx)(es.A, { onClose: nm, currentStep: e7, purchaseState: no }))),
    nE && e7 === k.pn.CONFIRM)
        ? (0, i.jsx)(eu.A, {
              mediaUrls: ng.mediaUrls,
              isSuccess: ng.isSuccess,
              transitionState: t,
              onClose: () => (nm(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ea.A, {
                      transitionState: t,
                      guild: K.A.getGuild(ed),
                      guildBoostQuantity: eJ + ev.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(v.e0, {
              children: (0, i.jsxs)(R.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nm(), Promise.resolve()),
                  children: [nD, n],
              }),
          });
}
function nC(e) {
    let n = (0, u.bG)([ee.A], () => ee.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, h.Ay)(x.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(h.f5, {
        value: t,
        children: (0, i.jsx)(w.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: b.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(nN, { ...e }),
        }),
    });
}
