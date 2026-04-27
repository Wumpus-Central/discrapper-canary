n.d(t, { default: () => tv });
var r = n(627968),
    a = n(64700),
    i = n(284009),
    l = n.n(i),
    s = n(132500),
    c = n(17928),
    o = n(364840),
    u = n(430993),
    d = n(331322),
    p = n(123292),
    _ = n(289873),
    f = n(683071),
    m = n(512950),
    b = n(821609),
    h = n(820739),
    g = n(891197),
    E = n(444927),
    A = n(964486),
    I = n(793574),
    y = n(688810),
    S = n(323082),
    x = n(160946),
    v = n(606267),
    C = n(545075),
    N = n(226991),
    R = n(981036),
    P = n(725836),
    T = n(935899),
    M = n(666646),
    L = n(584160),
    j = n(169797),
    k = n(357669),
    U = n(832286),
    O = n(958340),
    w = n(156312),
    D = n(166532),
    F = n(566980),
    B = n(216641),
    G = n(925847),
    W = n(87719),
    H = n(253390),
    V = n(489254),
    Y = n(251913),
    z = n(632638),
    K = n(61299),
    X = n(71393),
    q = n(178368),
    Z = n(825755),
    $ = n(295405),
    J = n(97352),
    Q = n(166403),
    ee = n(954571),
    et = n(473145),
    en = n(927578),
    er = n(83617),
    ea = n(615396),
    ei = n(802790),
    el = n(636441),
    es = n(587491),
    ec = n(285753);
n(321073);
var eo = n(503698),
    eu = n.n(eo),
    ed = n(661531),
    ep = n(990078),
    e_ = n(408278),
    ef = n(834040),
    em = n(499373),
    eb = n(834730),
    eh = n(403581),
    eg = n(663803),
    eE = n(320448),
    eA = n(534514),
    eI = n(104510),
    ey = n(695366),
    eS = n(726656),
    ex = n(531260),
    ev = n(404374),
    eC = n(543767),
    eN = n(881489),
    eR = n(477421),
    eP = n(234419),
    eT = n(363476),
    eM = n(531506),
    eL = n(985018),
    ej = n(51465);
function ek() {
    return (0, r.jsxs)("div", {
        className: eu()(ej.dt, ej.dE),
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: ej.qq,
            }),
            (0, r.jsx)(eb.E, {
                variant: "text-sm/medium",
                className: ej.tD,
                children: eL.intl.format(eL.t.f5VHKm, {}),
            }),
        ],
    });
}
function eU(e) {
    let { text: t, color: n } = e;
    return (0, r.jsxs)("div", {
        className: ej.dt,
        children: [(0, r.jsx)(eh.t, { size: "md", className: ej.YW, color: n }), (0, r.jsx)("div", { children: t })],
    });
}
var eO = n(773669),
    ew = n(287809),
    eD = n(975571),
    eF = n(252424),
    eB = n(580630),
    eG = n(155718),
    eW = n(61572),
    eH = n(69882),
    eV = n(596034),
    eY = n(848584),
    ez = n(241989),
    eK = n(908419),
    eX = n(888751),
    eq = n(874638),
    eZ = n(692440),
    e$ = n(788868),
    eJ = n(818348),
    eQ = n(327105),
    e0 = n(7921);
function e1(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: a,
            totalDue: i,
            currency: l,
            startDate: s,
        } = e,
        { immediateDelivery: c } = (0, eK.U)();
    return (0, r.jsx)(eV._, {
        variant: {
            type: eV.I.Subscription,
            purchaseButtonText: eL.intl.string(eL.t.eUEeCt),
            totalDue: i,
            renewalPrice: a,
            currency: l,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: c,
    });
}
function e9(e) {
    return eL.intl.format(eL.t.IeaYqg, { endDate: e });
}
function e8(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: e0.bU }),
            (0, r.jsx)(eb.E, { variant: "text-sm/normal", className: e0.b7, children: t }),
            (0, r.jsx)("div", { className: e0.bU }),
        ],
    });
}
function e2(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: a,
            guildBoostingAdjustment: i,
            checkoutInvoicePreview: l,
        } = e,
        s = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: r,
                formattedGuildBoostPrice: a,
                formattedGuildBoostRate: i,
                subscriptionDiscount: l,
                entitlementDiscount: s,
                originalAmount: c,
                checkoutInvoicePreview: o,
            } = e;
            return {
                label: eL.intl.formatToPlainString(eL.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, en.Mn)(n.id, !1, r),
                }),
                value: r ? a : i,
                subscriptionDiscount: l,
                entitlementDiscount: s,
                originalAmount: c,
                currency: o.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        c = [];
    0 !== n &&
        c.push({
            id: "base-plan-adjustment",
            label: eL.intl.formatToPlainString(eL.t.ZSVged, { planName: (0, en.RH)(a[0].subscriptionPlanId) }),
            tooltip: eL.intl.string(eL.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== i &&
            c.push({
                id: "guild-boosting-adjustment",
                label: eL.intl.string(eL.t["+as5ZZ"]),
                tooltip: eL.intl.string(eL.t.JmwQJM),
                amount: i,
                lineItemType: "adjustment",
            }),
        0 !== l.tax && c.push({ id: "tax", label: eL.intl.string(eL.t.jiRvC7), amount: l.tax, lineItemType: "tax" });
    let { lineItems: o, currency: u } = (0, eX.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...o, ...c];
    return (0, r.jsx)(eY.Vm, {
        defaultExpanded: !0,
        label: eL.intl.string(eQ.default.eoXh7B),
        lineItems: d,
        currency: u,
    });
}
function e7(e) {
    let {
        isSubscriptionUpdate: t,
        premiumSubscription: n,
        checkoutInvoicePreview: a,
        renewalInvoicePreview: i,
        isPrepaid: l,
        isReverseTrial: s,
        priceOptions: c,
    } = e;
    return null != n
        ? (0, r.jsx)(eZ.m0, {
              premiumSubscription: n,
              proratedInvoice: a,
              renewalInvoice: i,
              isUpdate: t,
              isPrepaidPaymentSource: l,
              isTrial: s,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, r.jsx)(eZ.m0, {
              renewalInvoice: i,
              priceOptions: c,
              isPrepaidPaymentSource: l,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function e5(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPaymentSourceId: o,
            premiumSubscriptionPlan: u,
            newAdditionalPlans: d,
            paymentSourceId: p,
            setPaymentSourceId: _,
            onPaymentSourceAdd: f,
        } = e,
        m = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: r,
                    currentPremiumSubscription: a,
                    premiumSubscriptionPlan: i,
                    newAdditionalPlans: s,
                } = e,
                o = (0, c.bG)([X.A, O.A], () => {
                    let e = X.A.getGuild(n);
                    return null != e ? e : O.A.isGuildFetching(n) ? null : O.A.getGuild(n);
                }, [n]),
                u = i.interval,
                d = i.intervalCount,
                p = (0, c.bG)([J.A], () => J.A.getForSkuAndInterval((0, en.mH)(e$.pe.GUILD), u, d));
            l()(null != p, "Missing guildBoostingSubscriptionPlan");
            let _ = (0, en.J$)(r.paymentSourceId),
                f = (0, eN.ds)();
            t = null != a ? (0, en.Om)(a, s[0].quantity, s[0].planId) : s;
            let { analyticsLocations: m } = (0, y.Ay)(),
                [b, h] = (0, eC.Kq)({
                    subscriptionId: a?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: r.paymentSourceId,
                    currency: r.currency,
                    analyticsLocations: m,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [g, E] = (0, eC.Kq)({
                    subscriptionId: a?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: r.paymentSourceId,
                    currency: r.currency,
                    analyticsLocations: m,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, M.OQ)({
                    checkoutInvoicePreview: b,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: g,
                    renewalInvoiceError: E,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: _,
                    isReverseTrial: f,
                    checkoutInvoicePreview: b,
                    renewalInvoicePreview: g,
                    isSubscriptionUpdate: null != a,
                }
            );
        })({
            guildId: t,
            priceOptions: i,
            currentPremiumSubscription: s,
            premiumSubscriptionPlan: u,
            newAdditionalPlans: d,
        }),
        {
            isSubscriptionUpdate: b,
            guild: h,
            isPrepaid: g,
            isReverseTrial: E,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: S,
        } = m,
        x = a.useMemo(
            () => ({ tooltipText: null == o ? null : eL.intl.string(eL.t.XiuuV9), shouldUseUnifiedCheckoutUI: !0 }),
            [o],
        );
    if (null == A || null == S || null == h) return (0, r.jsx)(eH.Ed, {});
    let v = (0, r.jsx)(e7, {
            isSubscriptionUpdate: b,
            premiumSubscription: s,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: S,
            isPrepaid: g,
            isReverseTrial: E,
            priceOptions: i,
        }),
        C = (0, r.jsx)(eW.N, {
            setPaymentSourceId: _,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eL.intl.string(eL.t["u+Cw58"]),
            onPaymentSourceAdd: f,
            disabled: null != o,
            subscriptionPaymentSourceId: o,
            additionalPaymentSourceDropdownProps: x,
        }),
        N = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: r,
                checkoutInvoicePreview: a,
                paymentSources: i,
                paymentSourceId: l,
            } = e;
            return {
                paymentSourceType: (0, B.g)(i, l),
                premiumSubscriptionPlan: n,
                renewalPrice: r.subtotal,
                totalDue: a.total,
                currency: a.currency,
                startDate: (0, eZ.de)({ isSubscriptionUpdate: t, currentInvoice: a, renewalInvoice: r }),
            };
        })({
            isSubscriptionUpdate: b,
            premiumSubscriptionPlan: u,
            renewalInvoicePreview: S,
            checkoutInvoicePreview: A,
            paymentSources: n,
            paymentSourceId: p,
        }),
        R = (0, r.jsx)(e1, { ...N }),
        P = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: r,
                    renewalInvoicePreview: a,
                    priceOptions: i,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: c, isPrepaid: o, isReverseTrial: u } = s,
                d = n.interval,
                p = n.intervalCount,
                _ = (e) => (0, eq.Z)(r.invoiceItems).find((t) => e$.pW.has(t.subscriptionPlanId) && e(t)),
                f = _((e) => e.amount >= 0);
            l()(null != f, "Missing guild boosting invoice item");
            let m = _((e) => e.amount < 0),
                b = null != m ? f.quantity - m.quantity : f.quantity,
                h = r.invoiceItems.filter((e) => (0, en.xq)(e.subscriptionPlanId)),
                g = h.reduce((e, t) => e + t.amount, 0),
                E = (0, eC.sL)(f) * b,
                A = (0, eB.$g)(E, r.currency),
                I = (0, eB.CE)(A, d, p),
                y = (0, eB.$g)(r.total, r.currency) + (r.currency !== eJ.Yr.USD ? "*" : ""),
                S = r.subtotal - E - g,
                x = f.discounts.map((e) => {
                    let t = e.amount / f.quantity;
                    return { ...e, amount: t * b };
                }),
                v = x.find((e) => e.type === eG.iS.SUBSCRIPTION_PLAN),
                C = x.find((e) => e.type === eG.iS.ENTITLEMENT),
                N = f.subscriptionPlanPrice * b;
            return {
                addedQuantity: b,
                guildBoostingSubscriptionPlan: c,
                isPrepaid: o,
                isReverseTrial: u,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, eB.CE)((0, eB.$g)(N, r.currency), d, p),
                formattedTotal: y,
                basePlanAdjustment: g,
                basePlanInvoiceItems: h,
                guildBoostingAdjustment: S,
                subscriptionDiscount: v,
                entitlementDiscount: C,
                originalAmount: N,
                premiumSubscription: t,
                checkoutInvoicePreview: r,
                renewalInvoicePreview: a,
                priceOptions: i,
            };
        })({
            premiumSubscription: s,
            premiumSubscriptionPlan: u,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: S,
            priceOptions: i,
            reviewState: m,
        }),
        T = (0, r.jsx)(e2, { ...P }),
        L = (function (e, t, n) {
            let {
                    addedQuantity: a,
                    guildBoostingSubscriptionPlan: i,
                    isPrepaid: l,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: c,
                    subscriptionDiscount: o,
                } = t,
                u = null != o;
            return {
                label: eL.intl.formatToPlainString(eL.t.a3cAOg, {
                    numGuildSubscriptions: a,
                    planName: (0, en.Mn)(i.id, !1, l),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, r.jsx)(ez.a6, {}),
                price: s,
                PriceIcon: u ? eh.t : void 0,
                priceTooltip: u ? eL.intl.string(eQ.default.YUNJJa) : void 0,
                priceSubText: u ? c : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            h,
            P,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: r } = e;
                return !t && n && null != r ? { type: "reverseTrial", text: e9(r.currentPeriodEnd) } : null;
            })({ isPrepaid: g, isReverseTrial: E, premiumSubscription: s }),
        ),
        j = (0, r.jsx)(ez.f7, { ...L });
    return (0, r.jsx)(eH.T_, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: j,
        subscriptionDetailsContent: v,
        paymentSelectContent: C,
        invoiceSummaryContent: T,
        legalContent: R,
        invoiceTotalDueValue: P.formattedTotal,
        invoiceTotalDueLabel: eL.intl.string(eQ.default.R0cZsM),
    });
}
var e3 = n(652215);
n(26279);
var e6 = n(406263);
function e4(e) {
    return "" === e || "-" === e;
}
function te(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: l = 30, ariaLabel: s } = e,
        [c, o] = a.useState(t);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let u = "number" == typeof c,
        d = (e) => {
            o(e), e4(e) || n(e);
        };
    return (0, r.jsxs)("div", {
        className: e6.U$,
        children: [
            (0, r.jsx)(e_.K, {
                variant: "secondary",
                size: "md",
                icon: ef.Q,
                onClick: () => {
                    u && !(c <= i) && d(c - 1);
                },
                "aria-label": eL.intl.string(eL.t["k+ohJm"]),
                disabled: !u || c <= i,
            }),
            (0, r.jsx)("div", {
                className: e6.WJ,
                children: (0, r.jsx)("input", {
                    className: e6.Zh,
                    "aria-label": s,
                    inputMode: "numeric",
                    value: `${c}`,
                    onChange: (e) =>
                        ((e) => {
                            if (e4(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= l) return void d(l);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        e4(c) && o(t);
                    },
                }),
            }),
            (0, r.jsx)(e_.K, {
                variant: "secondary",
                size: "md",
                icon: em.T,
                onClick: () => {
                    u && !(c >= l) && d(c + 1);
                },
                "aria-label": eL.intl.string(eL.t.w8Sc4B),
                disabled: !u || c >= l,
            }),
        ],
    });
}
function tt(e) {
    let { message: t } = e;
    return (0, r.jsx)(eb.E, { variant: "text-xs/normal", color: "text-muted", className: e6.jH, children: t });
}
function tn(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: e6.Vk,
        children: [
            (0, r.jsx)("div", {
                className: e6.D0,
                children: (0, r.jsx)(eh.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e6.ue,
                    color: ev.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: e6.yP, children: t }),
        ],
    });
}
function tr(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: l,
        planPriceContent: s,
        subtotalContent: c,
        refreshSubtotalContent: o,
        legacyDescriptionContent: u,
        refreshDescriptionContent: d,
        fractionalBanner: p,
        existingSlotNotice: _,
        discountCallout: f,
        refreshDiscountCallout: m,
        legacyPricingNotes: b,
        refreshPricingNotes: h,
    } = e;
    return (0, r.jsxs)("div", {
        children: [
            p,
            u,
            _,
            (0, r.jsxs)("div", {
                className: e0.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: e0.E6,
                        children: [
                            (0, r.jsx)(eg.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: e0.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: e0.$0, children: l }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eu()(e0.QK, { [e0.S]: t }), children: s }),
                ],
            }),
            (0, r.jsx)("div", { className: e0.J3 }),
            (0, r.jsxs)("div", {
                className: e0.mP,
                children: [
                    (0, r.jsx)("div", { className: e0.xp, children: eL.intl.string(eL.t.RtA7nR) }),
                    (0, r.jsx)("div", {
                        className: eu()(e0.__invalid_planSelectorSubtotalPrice, { [e0.S]: t }),
                        children: c,
                    }),
                ],
            }),
            b.map((e, t) => (0, r.jsx)(a.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function ta(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        refreshNextStepLabel: l,
        planLabel: s,
        planPriceContent: c,
        subtotalContent: o,
        refreshSubtotalContent: u,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: _,
        existingSlotNotice: f,
        discountCallout: m,
        refreshDiscountCallout: b,
        legacyPricingNotes: h,
        refreshPricingNotes: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: e6.xY,
        children: [
            _,
            (0, r.jsxs)("div", {
                className: e6.K3,
                children: [
                    (0, r.jsx)(eb.E, {
                        variant: "text-md/medium",
                        className: e6.bk,
                        children: eL.intl.string(eL.t["r+SebU"]),
                    }),
                    (0, r.jsx)(eE._, { className: e6.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(eb.E, { variant: "text-md/medium", className: e6.kX, children: l }),
                ],
            }),
            p,
            f,
            (0, r.jsxs)("div", {
                className: e6.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: e6.fX,
                        children: [
                            (0, r.jsx)(te, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: s,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(eb.E, { variant: "text-md/medium", className: e6.ny, children: s }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eu()(e6.El, { [e0.S]: t }), children: c }),
                ],
            }),
            b,
            (0, r.jsxs)("div", {
                className: e6.fh,
                children: [
                    (0, r.jsx)(eA.D, {
                        variant: "heading-lg/semibold",
                        className: e6.O3,
                        children: eL.intl.string(eL.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: eu()(e6.BU, { [e0.S]: t }), children: u }),
                ],
            }),
            g.map((e, t) => (0, r.jsx)(a.Fragment, { children: e }, t)),
        ],
    });
}
function ti(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: a } = e;
    return (0, r.jsxs)("div", {
        className: e0.Mv,
        children: [
            (0, r.jsx)(eI._, { className: e0.T5, color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, r.jsxs)("div", {
                children: [
                    eL.intl.format(eL.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != a
                        ? (0, r.jsx)(ep.m, {
                              text: eL.intl.formatToPlainString(eL.t.SFpsCH, {
                                  canceledCount: n,
                                  date: a.currentPeriodEnd,
                              }),
                              children: (0, r.jsx)(ey.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: e0.Y5,
                                  color: ed.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function tl(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: i,
            setForceDisableSubmitButton: s,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: f = !1,
            refreshNextStepLabel: m = eL.intl.string(eL.t.QBnNHq),
        } = e,
        b = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: i,
                    numGuildBoosts: s,
                    setForceDisableSubmitButton: o,
                    premiumSubscription: u,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: f,
                } = e,
                m =
                    ((t = (0, c.bG)([Q.A], () => Q.A.getPremiumTypeSubscription())),
                    (0, c.bG)([$.A], () =>
                        t?.paymentSourceId != null ? $.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                b = i.interval,
                h = i.intervalCount,
                g = (0, c.bG)([J.A], () => J.A.getForSkuAndInterval((0, en.mH)(e$.pe.GUILD), b, h)),
                E = (0, c.bG)([ew.default], () => ew.default.getCurrentUser()),
                A = (0, ex.A)({ forceFetch: !1 });
            l()(null != g, "Missing guildBoostingSubscriptionPlan");
            let S = [{ planId: g.id, quantity: 1 }],
                x = u?.items.find(
                    (e) => e.planId === e$.gD.PREMIUM_MONTH_TIER_2 || e.planId === e$.gD.PREMIUM_YEAR_TIER_2,
                );
            null != x && S.push(x);
            let v = u?.items.find(
                    (e) => e.planId === e$.gD.PREMIUM_MONTH_GUILD || e.planId === e$.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == m || !e$.uJ.has(m) || null == v,
                { analyticsLocations: N } = (0, y.Ay)(),
                [R, P] = (0, eC.Kq)({
                    subscriptionId: u?.id,
                    items: S,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: f.currency,
                    preventFetch: C,
                    analyticsLocations: N,
                    analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, M.Tr)(R, P);
            let T = !C && null == R && null == P;
            a.useLayoutEffect(() => {
                o(T);
            }, [T, o]);
            let L = (0, eP.V)()?.subscription_trial?.sku_id === e$.pe.TIER_2,
                j = en.Ay.hasBoostDiscount(E),
                k = j && null != u && en.Ay.isPremiumAtLeast(en.Ay.getPremiumType(u.planId), e$.PremiumTypes.TIER_1),
                U = R?.findInvoiceItemByPlanId(g.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: R.currency }
                        : en.Ay.getPrice(g.id, j, !1, f),
                w = s * O.amount,
                D = (0, eN.ds)() && j && null != u,
                F = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: r,
                            isReverseTrial: a,
                            hasDiscountUpsell: i,
                            withTrialOfferCopyVariant: l,
                        } = e;
                    return (
                        (t = a ? "reverse_trial" : i ? "discount" : l ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: r === e$.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: D,
                    hasDiscountUpsell: k,
                    withTrialOfferCopyVariant: L,
                });
            "discount" === F.upsellVariant
                ? (l()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = eL.intl.format(eL.t.hf6YOY, { planName: en.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = eL.intl.format("upsell_trial" === F.upsellVariant ? eL.t.ba1L74 : eL.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eF.l9)(eO.default.locale, e$.oX / 100),
                      freeSubscriptionCount: e$.M4,
                  }));
            let B = p.filter((e) => (0, et.I5)(e)).length,
                G = (0, en.J$)(f.paymentSourceId),
                { ipCountryCode: W } = (0, eR.A)(),
                H = "HR" === W && O.currency === eJ.Yr.EUR,
                V =
                    D && null != u
                        ? (0, r.jsx)(e8, { text: e9(u.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: eu()(e0.hA, e0.G3), children: eL.intl.string(eL.t.jNY1FO) }),
                Y =
                    D && null != u
                        ? (0, r.jsx)(e8, { text: e9(u.currentPeriodEnd), className: e0.jk })
                        : (0, r.jsx)("div", { className: e6._X, children: eL.intl.string(eL.t.jNY1FO) }),
                z = F.showExistingSlotNotice
                    ? (0, r.jsx)(ti, { existingAvailableSlots: p, canceledCount: B, premiumSubscription: u })
                    : null,
                K = F.showFractionalPremiumBanner ? (0, r.jsx)(eM.vi, { fractionalPremiumInfo: A }) : null,
                X = G
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === e$.WT.YEAR
                              ? eL.intl.string(eL.t.YDpAzZ)
                              : t === e$.WT.MONTH && 1 === n
                                ? eL.intl.string(eL.t["6ZR3By"])
                                : null;
                      })({ intervalType: b, intervalCount: h }) ?? eL.intl.string(eL.t.K9Bmze))
                    : eL.intl.string(eL.t.K9Bmze),
                q = T
                    ? (0, r.jsx)(_.y, {})
                    : G
                      ? (0, eB.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: r, intervalCount: a = 1 } = e,
                                i = (0, eB.$g)(t, n);
                            return r === e$.WT.YEAR
                                ? eL.intl.formatToPlainString(eL.t["8M04YJ"], { price: i })
                                : r === e$.WT.MONTH && 1 === a
                                  ? eL.intl.formatToPlainString(eL.t.VStWCR, { price: i })
                                  : r === e$.WT.MONTH && a > 1
                                    ? eL.intl.formatToPlainString(eL.t.xJvAFU, { price: i })
                                    : null;
                        })({ intervalType: b, intervalCount: h, amount: O.amount, currency: O.currency }),
                Z = T
                    ? (0, r.jsx)(_.y, {})
                    : (0, r.jsx)(eT.A, {
                          price: w,
                          currency: O.currency,
                          intervalType: b,
                          intervalCount: h,
                          isPrepaidPaymentSource: G,
                      }),
                ee = T ? (0, r.jsx)(_.y, {}) : (0, eB.$g)(w, O.currency),
                er = [],
                ea = [];
            if (H) {
                let e = (0, r.jsx)(
                    eS.A,
                    {
                        message: eL.intl.formatToPlainString(eL.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eB.$g)(7.5345 * w, eJ.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                er.push(e), ea.push(e);
            }
            let ei = eL.intl.format(eL.t.Om31w8, { documentationLink: eD.A.getArticleURL(e3.MVz.LOCALIZED_PRICING) });
            return (
                er.push((0, r.jsx)(eS.A, { message: ei }, "localized-pricing")),
                ea.push((0, r.jsx)(tt, { message: ei }, "localized-pricing")),
                {
                    isLoading: T,
                    planLabel: X,
                    planPriceContent: q,
                    subtotalContent: Z,
                    refreshSubtotalContent: ee,
                    legacyDescriptionContent: V,
                    refreshDescriptionContent: Y,
                    existingSlotNotice: z,
                    fractionalBanner: K,
                    legacyPricingNotes: er,
                    refreshPricingNotes: ea,
                    discountCallout:
                        "reverse_trial" === F.upsellVariant
                            ? (0, r.jsx)(ek, {})
                            : (0, r.jsx)(eU, { text: n, color: ev.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === F.upsellVariant ? (0, r.jsx)(ek, {}) : (0, r.jsx)(tn, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: s,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: d,
            priceOptions: p,
        });
    return (0, r.jsx)(f ? ta : tr, {
        isLoading: b.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: i,
        planLabel: b.planLabel,
        planPriceContent: b.planPriceContent,
        subtotalContent: b.subtotalContent,
        refreshSubtotalContent: b.refreshSubtotalContent,
        legacyDescriptionContent: b.legacyDescriptionContent,
        refreshDescriptionContent: b.refreshDescriptionContent,
        fractionalBanner: b.fractionalBanner,
        existingSlotNotice: b.existingSlotNotice,
        discountCallout: b.discountCallout,
        refreshDiscountCallout: b.refreshDiscountCallout,
        legacyPricingNotes: b.legacyPricingNotes,
        refreshPricingNotes: b.refreshPricingNotes,
        refreshNextStepLabel: m,
    });
}
var ts = n(879100),
    tc = n(460905),
    to = n(183623),
    tu = n(95635),
    td = n(935462),
    tp = n(532794),
    t_ = n(811611),
    tf = n(901017),
    tm = n(213178);
function tb(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, c.bG)([eO.default], () => eO.default.locale);
    return (0, r.jsxs)("div", {
        className: tm.mH,
        children: [
            (0, r.jsx)(tf.A, {
                icon: eI._,
                iconClassName: tm.pl,
                description: eL.intl.formatToPlainString(eL.t.sQBgs2, { numFreeGuildSubscriptions: e$.M4 }),
                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(tf.A, {
                icon: eI._,
                iconClassName: tm.pl,
                description: eL.intl.formatToPlainString(eL.t["1A6vXi"], { percent: (0, eF.l9)(n, e$.oX / 100) }),
                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(tf.A, { icon: tc.n, iconClassName: tm.zO, description: eL.intl.string(eL.t.Z9b2x2) }) : null,
            (0, r.jsx)(tf.A, { icon: to.F, iconClassName: tm.Kg, description: eL.intl.string(eL.t["8dqG5E"]) }),
            (0, r.jsx)(tf.A, { icon: tu.J, iconClassName: tm.$z, description: eL.intl.string(eL.t.cBorIy) }),
        ],
    });
}
function th(e) {
    let {
            premiumSubscriptionPlan: t,
            onClose: n,
            onBack: i,
            onSkip: l,
            onSubscriptionConfirmation: s,
            analyticsLocation: c,
            analyticsSourceLocation: _,
            priceOptions: f,
        } = e,
        { analyticsLocations: m, sourceAnalyticsLocations: h } = (0, y.Ay)(I.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        g = null == t || null == t.premiumSubscriptionType,
        E = en.Ay.getPrice(e$.gD.PREMIUM_MONTH_TIER_2, !1, !1, f),
        A = (0, eB.$g)(E.amount, E.currency),
        S = (0, eP.V)(),
        x = S?.trial_id,
        v = S?.subscription_trial?.sku_id === e$.pe.TIER_2;
    return (
        a.useEffect(() => {
            ee.default.track(e3.HAw.PREMIUM_UPSELL_VIEWED, {
                type: e$.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: h,
            });
        }, [h]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(td.s_, { "data-migration-pending": !0, onClick: n, className: tm.b }),
                (0, r.jsxs)(u.c, {
                    children: [
                        v && (0, r.jsx)(t_.Vq, { className: tm.Fg }),
                        (0, r.jsx)("div", { className: eu()(tm.Tn, { [tm.NH]: v }) }),
                        (0, r.jsx)("div", {
                            className: tm.G3,
                            children:
                                null != x
                                    ? eL.intl.string(eL.t.AoSzEr)
                                    : eL.intl.format(eL.t["7vePZb"], { monthlyPrice: A }),
                        }),
                        (0, r.jsx)(tb, { shouldUpsellFromNoneTier: g }),
                    ],
                }),
                (0, r.jsx)(o.j, {
                    children: (0, r.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(p.Q, { text: eL.intl.string(eL.t["13/7kX"]), onClick: i, variant: "secondary" }),
                            (0, r.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, r.jsx)(p.Q, {
                                        text: eL.intl.string(eL.t["SI/adm"]),
                                        onClick: l,
                                        variant: "secondary",
                                    }),
                                    (0, r.jsx)(b.$, {
                                        variant: "active",
                                        text: null != x ? eL.intl.string(eL.t["Gd/XHF"]) : eL.intl.string(eL.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            n(),
                                                (0, tp.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: e$.pe.TIER_2,
                                                    analyticsLocations: m,
                                                    analyticsObject: {
                                                        ...c,
                                                        section: e3.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: _,
                                                    onSubscriptionConfirmation: s,
                                                    trialId: x,
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
var tg = n(898640);
let tE = e$.gD.NONE_MONTH,
    tA = [D.pn.PLAN_SELECT, D.pn.REVIEW, D.pn.CONFIRM],
    tI = [D.pn.PLAN_SELECT, D.pn.ADD_PAYMENT_STEPS, D.pn.REVIEW, D.pn.CONFIRM];
async function ty(e, t) {
    await (0, h.CD)();
    let n = (0, et.D$)(q.A.boostSlots);
    return (0, h.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function tS(e) {
    let {
        currentStep: t,
        isRefreshEnabled: n,
        backStep: a,
        handleStepChange: i,
        primaryButtonProps: s,
        secondaryButton: c,
        legacySubmitButton: u,
    } = e;
    return t === D.pn.CONFIRM
        ? null
        : t === D.pn.REVIEW
          ? (l()(null != s, "Missing primaryButtonProps for review step"),
            (0, r.jsx)(j.lo, { onBackClick: null != a ? () => i(a) : void 0, primaryButtonProps: s }))
          : (0, r.jsx)(o.j, {
                children: (0, r.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: null != a ? "space-between" : "end",
                    fullWidth: !0,
                    children: [
                        null != a
                            ? (0, r.jsx)(p.Q, {
                                  text: eL.intl.string(eL.t["13/7kX"]),
                                  onClick: () => i(a),
                                  variant: "secondary",
                              })
                            : null,
                        (0, r.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            ...(n && t === D.pn.PLAN_SELECT ? { gap: 8 } : {}),
                            fullWidth: !1,
                            children: [c, u],
                        }),
                    ],
                }),
            });
}
function tx(e) {
    let t,
        {
            transitionState: n,
            onClose: i,
            closeGuildPerksModal: o,
            analyticsLocations: d,
            analyticsLocation: h,
            analyticsSourceLocation: eo,
            guildId: eu,
            onSubscribeComplete: ed,
            totalNumberOfSlotsToAssign: ep = 1,
            disablePremiumUpsell: e_ = !1,
            onSubscriptionConfirmation: ef,
            applicationId: em,
            intent: eb,
        } = e,
        {
            activeSubscription: eh,
            blockedPayments: eg,
            startingFractionalPremiumEndsAtRef: eE,
            customCheckoutFlow: eA,
            hasAcceptedTerms: eI,
        } = (0, w.P5)(),
        ey = (0, M.sw)(),
        eS = (0, c.bG)([Q.A], () => Q.A.hasFetchedSubscriptions()),
        ex = null != eh ? eh.paymentSourceId : null,
        ev = (0, c.bG)([J.A], () => (null != eh ? (0, ea.c9)(eh.planId) : null)),
        eC = (0, c.bG)([J.A], () => null == eh || null != J.A.get(eh.planId)),
        eN = (0, c.bG)([J.A], () => (null == ev ? J.A.get(tE) : ev)),
        eR = a.useRef((0, et.D$)(q.A.boostSlots)).current,
        eP = (0, c.bG)([O.A], () => (null != eu ? O.A.getGuild(eu) : void 0), [eu]),
        eT = (0, c.bG)([$.A], () => $.A.defaultPaymentSourceId),
        eM = (0, K._V)(null != ex ? ex : eS ? eT : null),
        {
            paymentSources: ej,
            setPurchaseError: ek,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eO,
            paymentAuthenticationState: ew,
            setPaymentSourceId: eD,
            isSubmittingCurrentStep: eF,
            paymentError: eB,
            purchaseError: eG,
            purchaseErrorBlockRef: eW,
        } = eM,
        eH = Object.keys(ej).length > 0,
        eV = (0, T.D)(),
        eY = (0, v.iB)({ checkoutPaymentSources: eV, paymentSourceId: eU, location: "GuildBoostPurchaseModal" }),
        [ez, eK] = a.useState(ep - eR.length),
        eX = (0, c.bG)([Z.A], () => Z.A.popupCallbackCalled),
        eq = (0, x.Y)(),
        eZ = a.useMemo(
            () => (null != eh && eC && eq ? (0, H.v)(eh, ez) : [{ planId: e$.gD.PREMIUM_MONTH_GUILD, quantity: ez }]),
            [eh, eC, ez, eq],
        ),
        eQ = a.useMemo(() => (0, G.A)(), []),
        [e0, e1] = (0, E.A)(() => [eQ ?? (0, s.A)(), Date.now()]),
        { analyticsLocations: e9 } = (0, y.Ay)(d, I.A.GUILD_BOOST_PURCHASE_MODAL),
        e8 = a.useMemo(
            () =>
                eZ.find((e) => {
                    let { planId: t } = e;
                    return e$.pW.has(t);
                })?.planId ?? e$.gD.PREMIUM_MONTH_GUILD,
            [eZ],
        ),
        e2 = (0, c.bG)([J.A], () => J.A.get(e8)?.skuId, [e8]),
        e7 = a.useMemo(
            () => ({
                load_id: e0,
                payment_type: eJ.fr[eJ.VV.SUBSCRIPTION],
                sku_id: e$.pe.GUILD,
                subscription_type: e3.rzx.PREMIUM,
                subscription_plan_id: e8,
                quantity: ez,
                location: h,
                source: eo,
                location_stack: e9,
                checkout_flow: N.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e0, h, e9, eo, ez, e8],
        );
    a.useEffect(() => {
        (0, er.c_)(eU);
    }, [eU]);
    let [e6, e4] = a.useState(D.pn.PLAN_SELECT),
        te = a.useMemo(() => Date.now(), [e6]),
        tt = a.useCallback(
            (e, t) => {
                e4(e), ek(null);
                let n = Date.now();
                ee.default.track(e3.HAw.PAYMENT_FLOW_STEP, {
                    ...e7,
                    from_step: null != t ? t : e6,
                    to_step: e === D.pn.ADD_PAYMENT_STEPS ? D.pn.PAYMENT_TYPE : e,
                    step_duration_ms: n - te,
                    flow_duration_ms: n - e1,
                    guild_id: eu,
                    application_id: em,
                });
            },
            [ek, e7, e6, te, e1, eu, em],
        ),
        tn = {
            baseAnalyticsData: e7,
            flowStartTime: e1,
            guildId: eu,
            handleStepChange: tt,
            onSubscribeComplete: ed,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eO,
            setPurchaseError: ek,
        },
        tr = a.useRef(tn);
    a.useEffect(() => {
        tr.current = tn;
    }),
        a.useEffect(() => {
            let {
                baseAnalyticsData: e,
                flowStartTime: t,
                guildId: n,
                handleStepChange: r,
                onSubscribeComplete: a,
                paymentSourceId: i,
                setIsSubmittingCurrentStep: l,
                setPurchaseError: s,
            } = tr.current;
            (async () => {
                if (!0 === eX)
                    try {
                        if (null == Z.A.redirectedPaymentId) return;
                        await (0, S.tn)(Z.A.redirectedPaymentId),
                            r(D.pn.CONFIRM),
                            to(F.h.COMPLETED),
                            null != n && (await ty(n, null != eb)),
                            a?.();
                    } catch (n) {
                        to(F.h.FAIL),
                            s(n),
                            ee.default.track(e3.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: n?.code,
                                payment_gateway: e3.kM_.STRIPE,
                                payment_source_id: i,
                                duration_ms: Date.now() - t,
                            });
                    } finally {
                        l(!1), (0, S.bl)();
                    }
            })();
        }, [eX, eb]),
        (0, A.Ay)(() => {
            Q.A.hasFetchedSubscriptions() || (0, S.hP)(),
                null == eu ||
                    null != X.A.getGuild(eu) ||
                    null != O.A.getGuild(eu) ||
                    O.A.isGuildFetching(eu) ||
                    (0, U.y)(eu),
                (0, k.b)({ ...e7, guild_id: eu, application_id: em, custom_checkout_flow: eA }),
                null != eh &&
                    null != eh.renewalMutations &&
                    ee.default.track(e3.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: h, guild_id: eu });
        });
    let [ta, ti] = a.useState(tA),
        [tc, to] = a.useState(F.h.WAITING),
        [tu, td] = a.useState(!0),
        tp = () => {
            i(tc === F.h.COMPLETED);
        },
        t_ = null != eh && eh.isPurchasedExternally;
    a.useEffect(() => {
        ew !== Y.oc.PENDING &&
            e6 !== D.pn.CONFIRM &&
            null != ex &&
            (ta !== tA && ti(tA), tA.includes(e6) || e6 === D.pn.PREMIUM_UPSELL || tt(D.pn.REVIEW)),
            e6 === D.pn.ADD_PAYMENT_STEPS && ta !== tI && ti(tI),
            t_ && e6 !== D.pn.PLAN_SELECT && e4(D.pn.PLAN_SELECT);
    }, [e6, tt, t_, ew, eh, ex, ta]),
        (0, Y.b)(e6, ew, tt, to),
        (0, D.zT)(e6, tc, to);
    let tf = (0, V.n)("GuildBoostPurchaseModal"),
        tm = tf && (e6 === D.pn.REVIEW || e6 === D.pn.CONFIRM),
        tb = (0, ec.A)(tm),
        [tx, tv] = a.useState(null),
        [tC, tN] = a.useState([]),
        [tR, tP] = a.useState(!1),
        tT = a.useMemo(() => JSON.stringify(tC), [tC]);
    a.useEffect(() => {
        let e;
        eq &&
            (null != J.A.get(e$.gD.PREMIUM_MONTH_GUILD) && tN((e = (0, er._w)(e$.gD.PREMIUM_MONTH_GUILD, eU, !1))),
            null == eU && null != eh && null != eh.paymentSourceId ? tv(eh.currency) : null != e && tv(e[0]));
    }, [eU, eh, eq, tT]);
    let tM = (0, K.Y)({
        paymentModalArgs: eM,
        initialStep: D.pn.PAYMENT_TYPE,
        prependSteps: [D.pn.PLAN_SELECT],
        appendSteps: [D.pn.REVIEW, D.pn.CONFIRM],
        breadcrumpSteps: ta,
        currentBreadcrumpStep: e6,
        onReturn: () => {
            tt(Object.values(ej).length < 1 ? D.pn.PLAN_SELECT : D.pn.REVIEW, D.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            tt(D.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                r = Date.now();
            ee.default.track(e3.HAw.PAYMENT_FLOW_STEP, {
                ...e7,
                from_step: t,
                to_step: n,
                step_duration_ms: r - te,
                flow_duration_ms: r - e1,
                guild_id: eu,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eg) t = (0, r.jsx)(C.oO, {});
    else if (eS && eC && eq && null != tx && "" !== tx)
        if (eh?.isPausedOrPausePending && !eh.isPausedAllowsUpdatesButNotResume)
            t = (0, r.jsx)(u.c, {
                children: (0, r.jsx)("p", { className: tg.C, children: eL.intl.string(eL.t.mOWsF1) }),
            });
        else if (null != eh && null != eh.renewalMutations)
            t = (0, r.jsx)(u.c, {
                children: (0, r.jsx)("p", { className: tg.C, children: eL.intl.string(eL.t.npfhh0) }),
            });
        else if (e6 === D.pn.PREMIUM_UPSELL) {
            l()(null != eN, "Missing nextPremiumSubscriptionPlan"), l()(tx, "Currency not defined");
            let e = null != eU ? { paymentSourceId: eU, currency: tx } : { currency: tx };
            t = (0, r.jsx)(th, {
                premiumSubscriptionPlan: eN,
                analyticsLocation: h,
                analyticsSourceLocation: eo,
                onClose: tp,
                onBack: () => tt(D.pn.PLAN_SELECT),
                onSkip: () => tt(null != ex || eH ? D.pn.REVIEW : D.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: ef,
                priceOptions: e,
            });
        } else {
            let e, n, a, i;
            l()(tx, "Currency not defined");
            let s = null != eU ? { paymentSourceId: eU, currency: tx } : { currency: tx },
                c = X.A.getGuild(eu),
                u = null == eP && null == c,
                d = null;
            switch (e6) {
                case D.pn.PLAN_SELECT:
                    l()(null != eu, "Missing guildId"),
                        l()(null != eN, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, r.jsx)(tl, {
                            premiumSubscriptionPlan: eN,
                            numGuildBoosts: ez,
                            setNumGuildBoosts: eK,
                            setForceDisableSubmitButton: td,
                            premiumSubscription: eh,
                            existingAvailableSlots: eR,
                            onClickPremiumSubscriptionLink: () => {
                                if (__BILLING_STANDALONE__) {
                                    window.location.href = "discord://app/settings/nitro";
                                    return;
                                }
                                tp(), null != o && o(), (0, W.e)();
                            },
                            priceOptions: s,
                            isRefreshEnabled: tf,
                            refreshNextStepLabel: (0, D.Ir)(
                                ta.find((e) => e !== D.pn.PLAN_SELECT && e !== D.pn.CONFIRM) ?? D.pn.REVIEW,
                            ),
                        })),
                        t_ && null != eh && null != eh.paymentGateway
                            ? (e = (0, r.jsxs)("div", {
                                  className: tg.xK,
                                  children: [
                                      (0, r.jsx)(f.w, {
                                          type: "critical",
                                          children: eL.intl.format(eL.t["/m3Y3s"], {
                                              paymentGatewayName: eJ.qm[eh.paymentGateway],
                                          }),
                                      }),
                                      e,
                                  ],
                              }))
                            : !O.A.isGuildFetching(eu) &&
                              u &&
                              (e = (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(m.p, {
                                          messageType: m.Y.ERROR,
                                          className: tg.MR,
                                          children: eL.intl.string(eL.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (a = tf
                            ? (0, r.jsx)(b.$, {
                                  variant: "secondary",
                                  text: eL.intl.string(eL.t["ETE/oC"]),
                                  onClick: tp,
                              })
                            : (0, r.jsx)(p.Q, {
                                  text: eL.intl.string(eL.t.oEAioF),
                                  onClick: tp,
                                  variant: "secondary",
                              })),
                        (i = (0, r.jsx)(b.$, {
                            variant: "primary",
                            text: eL.intl.string(eL.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: r,
                                    isMissingGuildInformation: a,
                                } = e;
                                return t || 0 === n || r || a;
                            })({
                                forceDisableSubmitButton: tu,
                                numGuildBoostsToPurchase: ez,
                                isDisabledBecauseExternalSubscription: t_,
                                isMissingGuildInformation: u,
                            }),
                            onClick: () => {
                                e_ || (null != ev && ev.premiumSubscriptionType === e$.PremiumTypes.TIER_2)
                                    ? tt(null != ex || eH ? D.pn.REVIEW : D.pn.ADD_PAYMENT_STEPS)
                                    : tt(D.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case D.pn.ADD_PAYMENT_STEPS:
                    break;
                case D.pn.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(g.N, { className: tg.__invalid_body });
                    break;
                case D.pn.REVIEW:
                    l()(null != eN, "Missing nextPremiumSubscriptionPlan"),
                        l()(null != eu, "Missing guildId"),
                        (e = (0, r.jsx)(e5, {
                            guildId: eu,
                            paymentSources: ej,
                            priceOptions: s,
                            currentPremiumSubscription: eh,
                            premiumSubscriptionPaymentSourceId: ex,
                            premiumSubscriptionPlan: eN,
                            newAdditionalPlans: eZ,
                            paymentSourceId: eU,
                            setPaymentSourceId: eD,
                            onPaymentSourceAdd: () => {
                                tt(D.pn.ADD_PAYMENT_STEPS), eD(null);
                            },
                        })),
                        (n = D.pn.PLAN_SELECT);
                    let _ = async () => {
                        l()(null != eZ, "Missing newAdditionalPlans");
                        let e = (0, B.W)(ej, eU);
                        ek(null);
                        try {
                            to(F.h.PURCHASING),
                                eO(!0),
                                l()(null != eU, "Missing paymentSourceId"),
                                l()(null != ey, "Missing invoicePreview");
                            let t = { amount: ey.total, currency: ey.currency },
                                n = s.currency ?? ey.currency,
                                r = (0, en.U8)(eh, eZ, n.toLowerCase(), s.paymentSourceId);
                            if (
                                (ee.default.track(e3.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e7,
                                    duration_ms: Date.now() - e1,
                                    guild_id: eu,
                                    application_id: em,
                                }),
                                tR)
                            )
                                return;
                            if (null == eh || null == ev) {
                                l()(null != e, "Missing paymentSource");
                                let a = await (0, S.Ky)({
                                    items: eZ,
                                    paymentSource: e,
                                    currency: n,
                                    expectedInvoicePrice: t,
                                    expectedRenewalPrice: r,
                                });
                                if (a.redirectConfirmation) return void tP(null != a.redirectURL);
                            } else {
                                let a = { items: (0, en.aE)(eh, eZ) };
                                (a.currency = eh.currency ?? n),
                                    (a.paymentSource = null != ex ? ej[ex] : void 0),
                                    null == a.paymentSource &&
                                        (l()(null != e, "Missing paymentSource"),
                                        (a.paymentSource = e),
                                        (a.currency = n));
                                let i = await (0, S.nV)(eh, a, t, r, e9);
                                if (i.redirectConfirmation) return void tP(null != i.redirectURL);
                            }
                            null == eb && tt(D.pn.CONFIRM),
                                to(F.h.COMPLETED),
                                null != eu && (await ty(eu, null != eb)),
                                null != eb && tp(),
                                ed?.();
                        } catch (t) {
                            to(F.h.FAIL),
                                ek(t),
                                ee.default.track(e3.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e7,
                                    payment_error_code: t?.code,
                                    payment_gateway:
                                        null != e ? (e.type === e3.hes.CARD ? e3.kM_.STRIPE : e3.kM_.BRAINTREE) : null,
                                    payment_source_id: eU,
                                    duration_ms: Date.now() - e1,
                                });
                        } finally {
                            tR || eO(!1);
                        }
                    };
                    (d = {
                        text: eL.intl.string(eL.t.eUEeCt),
                        loading: eF,
                        disabled: !eI || eY,
                        onClick: _,
                        variant: "active",
                    }),
                        (i = (0, r.jsx)(R.p, { ...d }));
                    break;
                case D.pn.CONFIRM:
                    let h = c?.name ?? eP?.name,
                        E = (0, B.g)(ej, eU),
                        A = (0, ea.b2)(eE.current) && null != ev && !e$.YV.has(ev.id);
                    e = (0, r.jsx)(ts.W, {
                        guild: c,
                        guildBoostQuantity: ez + eR.length,
                        onClose: tp,
                        withAnimation: !1,
                        paymentSourceType: E,
                        fallbackGuildName: h,
                        didPurchaseOnFractionalPremium: A,
                        customCheckoutFlow: eA,
                    });
            }
            let I = null != eB && null == (0, D.ou)(eB) ? eB : eG;
            t =
                e6 === D.pn.ADD_PAYMENT_STEPS
                    ? tM
                    : (0, r.jsx)(z.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: t, isBoostingPreCheckoutModalRefreshEnabled: n } = e;
                              return t === D.pn.REVIEW || t === D.pn.CONFIRM || (n && t === D.pn.PLAN_SELECT);
                          })({ currentStep: e6, isBoostingPreCheckoutModalRefreshEnabled: tf }),
                          steps: ta,
                          currentStep: e6,
                          paymentError: I,
                          purchaseErrorBlockRef: eW,
                          hasCurrencies: tC.length > 1,
                          body: e,
                          footer: (0, r.jsx)(tS, {
                              currentStep: e6,
                              isRefreshEnabled: tf,
                              backStep: n,
                              handleStepChange: tt,
                              primaryButtonProps: d,
                              secondaryButton: a,
                              legacySubmitButton: i,
                          }),
                      });
        }
    else t = (0, r.jsx)("div", { className: tg._5, children: (0, r.jsx)(_.y, {}) });
    let tL = (0, L.u)({ skuId: e2, step: e6 }),
        tj = null;
    return (eg ||
        (tf && e6 !== D.pn.PREMIUM_UPSELL
            ? (tj = e6 === D.pn.REVIEW ? (0, r.jsx)(j.s3, { ...tL }) : (0, r.jsx)(j.s3, { title: tL.title }))
            : e6 === D.pn.REVIEW
              ? (tj = (0, r.jsx)(j.s3, { ...tL }))
              : e6 !== D.pn.PREMIUM_UPSELL &&
                (tj = (0, r.jsx)(ei.A, { onClose: tp, currentStep: e6, purchaseState: tc }))),
    tf && e6 === D.pn.CONFIRM)
        ? (0, r.jsx)(es.A, {
              mediaUrls: tb.mediaUrls,
              isSuccess: tb.isSuccess,
              transitionState: n,
              onClose: () => (tp(), Promise.resolve()),
              children: (e, t) =>
                  (0, r.jsx)(el.A, {
                      transitionState: n,
                      guild: X.A.getGuild(eu),
                      guildBoostQuantity: ez + eR.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: t,
                  }),
          })
        : (0, r.jsx)(P.e0, {
              children: (0, r.jsxs)(j.Jg, {
                  transitionState: n,
                  size: "md",
                  onClose: () => (tp(), Promise.resolve()),
                  children: [tj, t],
              }),
          });
}
function tv(e) {
    let t = (0, c.bG)([Q.A], () => Q.A.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, y.Ay)(I.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(y.f5, {
        value: n,
        children: (0, r.jsx)(w.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: N.CL.GUILD_BOOST_CHECKOUT,
            children: (0, r.jsx)(tx, { ...e }),
        }),
    });
}
