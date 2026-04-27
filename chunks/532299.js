n.d(t, { default: () => tN });
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
    I = n(964486),
    A = n(793574),
    y = n(688810),
    S = n(323082),
    x = n(160946),
    v = n(606267),
    C = n(545075),
    N = n(226991),
    P = n(981036),
    R = n(725836),
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
    eI = n(534514),
    eA = n(104510),
    ey = n(695366),
    eS = n(726656),
    ex = n(531260),
    ev = n(404374),
    eC = n(543767),
    eN = n(881489),
    eP = n(477421),
    eR = n(234419),
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
    eW = n(69882),
    eH = n(93159),
    eV = n(596034),
    eY = n(848584),
    ez = n(241989),
    eK = n(826469),
    eX = n(908419),
    eq = n(888751),
    eZ = n(874638),
    e$ = n(692440),
    eJ = n(351906),
    eQ = n(788868),
    e0 = n(818348),
    e1 = n(327105),
    e9 = n(7921);
function e8(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: a,
            totalDue: i,
            currency: l,
            startDate: s,
        } = e,
        { immediateDelivery: c } = (0, eX.U)();
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
function e2(e) {
    return eL.intl.format(eL.t.IeaYqg, { endDate: e });
}
function e7(e) {
    let { text: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", { className: e9.bU }),
            (0, r.jsx)(eb.E, { variant: "text-sm/normal", className: e9.b7, children: t }),
            (0, r.jsx)("div", { className: e9.bU }),
        ],
    });
}
function e5(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: a,
            guildBoostingAdjustment: i,
            proratedInvoicePreview: l,
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
                proratedInvoicePreview: o,
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
    let { lineItems: o, currency: u } = (0, eq.EA)({ id: "main-line-item", amount: t, ...s }),
        d = [...o, ...c];
    return (0, r.jsx)(eY.Vm, {
        defaultExpanded: !0,
        label: eL.intl.string(e1.default.eoXh7B),
        lineItems: d,
        currency: u,
    });
}
function e3(e) {
    let {
        isSubscriptionUpdate: t,
        premiumSubscription: n,
        proratedInvoicePreview: a,
        renewalInvoicePreview: i,
        isPrepaid: l,
        isReverseTrial: s,
        priceOptions: c,
    } = e;
    return null != n
        ? (0, r.jsx)(e$.m0, {
              premiumSubscription: n,
              proratedInvoice: a,
              renewalInvoice: i,
              isUpdate: t,
              isPrepaidPaymentSource: l,
              isTrial: s,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, r.jsx)(e$.m0, {
              renewalInvoice: i,
              priceOptions: c,
              isPrepaidPaymentSource: l,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function e6(e) {
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
                p = (0, c.bG)([J.A], () => J.A.getForSkuAndInterval((0, en.mH)(eQ.pe.GUILD), u, d));
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
                    analyticsLocation: A.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [g, E] = (0, eC.Kq)({
                    subscriptionId: a?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: r.paymentSourceId,
                    currency: r.currency,
                    analyticsLocations: m,
                    analyticsLocation: A.A.GUILD_BOOSTING_REVIEW_RENEWAL,
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
                    proratedInvoicePreview: b,
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
            proratedInvoicePreview: I,
            renewalInvoicePreview: S,
        } = m,
        x = a.useMemo(() => {
            let e = I?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(eK.A.createFromCheckoutContext);
        }, [I?.checkoutContext]),
        {
            dropdownPaymentSources: C,
            giftCardsEnabled: N,
            dropdownPaymentSourceId: P,
            handleDropdownPaymentSourceChange: R,
            giftCardCheckboxProps: T,
            walletCoversSubtotal: L,
        } = (0, v.Y0)({
            checkoutPaymentSources: x,
            paymentSourceId: p,
            setPaymentSourceId: _,
            location: "GuildBoostReview",
            subscriptionPaymentSourceId: o,
        }),
        j = (0, c.bG)([eJ.A], () => eJ.A.hidePersonalInformation);
    if (null == I || null == S || null == h) return (0, r.jsx)(eW.Ed, {});
    let k = (0, r.jsx)(e3, {
            isSubscriptionUpdate: b,
            premiumSubscription: s,
            proratedInvoicePreview: I,
            renewalInvoicePreview: S,
            isPrepaid: g,
            isReverseTrial: E,
            priceOptions: i,
        }),
        U = (0, r.jsx)(eH.nL, {
            label: eL.intl.string(eL.t["u+Cw58"]),
            giftCardsEnabled: N,
            giftCardCheckboxProps: T,
            paymentSourceDropdownProps: {
                tooltipText: null == o ? null : eL.intl.string(eL.t.XiuuV9),
                paymentSources: C,
                selectedPaymentSourceId: P,
                onChange: R,
                onPaymentSourceAdd: f,
                hidePersonalInformation: j,
                shouldUseUnifiedCheckoutUI: !0,
            },
            showCheckboxAboveDropdown: L,
            disabled: null != o,
        }),
        w = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: r,
                proratedInvoicePreview: a,
                paymentSources: i,
                paymentSourceId: l,
            } = e;
            return {
                paymentSourceType: (0, B.g)(i, l),
                premiumSubscriptionPlan: n,
                renewalPrice: r.subtotal,
                totalDue: a.total,
                currency: a.currency,
                startDate: (0, e$.de)({ isSubscriptionUpdate: t, currentInvoice: a, renewalInvoice: r }),
            };
        })({
            isSubscriptionUpdate: b,
            premiumSubscriptionPlan: u,
            renewalInvoicePreview: S,
            proratedInvoicePreview: I,
            paymentSources: n,
            paymentSourceId: p,
        }),
        D = (0, r.jsx)(e8, { ...w }),
        F = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    proratedInvoicePreview: r,
                    renewalInvoicePreview: a,
                    priceOptions: i,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: c, isPrepaid: o, isReverseTrial: u } = s,
                d = n.interval,
                p = n.intervalCount,
                _ = (e) => (0, eZ.Z)(r.invoiceItems).find((t) => eQ.pW.has(t.subscriptionPlanId) && e(t)),
                f = _((e) => e.amount >= 0);
            l()(null != f, "Missing guild boosting invoice item");
            let m = _((e) => e.amount < 0),
                b = null != m ? f.quantity - m.quantity : f.quantity,
                h = r.invoiceItems.filter((e) => (0, en.xq)(e.subscriptionPlanId)),
                g = h.reduce((e, t) => e + t.amount, 0),
                E = (0, eC.sL)(f) * b,
                I = (0, eB.$g)(E, r.currency),
                A = (0, eB.CE)(I, d, p),
                y = (0, eB.$g)(r.total, r.currency) + (r.currency !== e0.Yr.USD ? "*" : ""),
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
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, eB.CE)((0, eB.$g)(N, r.currency), d, p),
                formattedTotal: y,
                basePlanAdjustment: g,
                basePlanInvoiceItems: h,
                guildBoostingAdjustment: S,
                subscriptionDiscount: v,
                entitlementDiscount: C,
                originalAmount: N,
                premiumSubscription: t,
                proratedInvoicePreview: r,
                renewalInvoicePreview: a,
                priceOptions: i,
            };
        })({
            premiumSubscription: s,
            premiumSubscriptionPlan: u,
            proratedInvoicePreview: I,
            renewalInvoicePreview: S,
            priceOptions: i,
            reviewState: m,
        }),
        G = (0, r.jsx)(e5, { ...F }),
        W = (function (e, t, n) {
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
                priceTooltip: u ? eL.intl.string(e1.default.YUNJJa) : void 0,
                priceSubText: u ? c : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            h,
            F,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: r } = e;
                return !t && n && null != r ? { type: "reverseTrial", text: e2(r.currentPeriodEnd) } : null;
            })({ isPrepaid: g, isReverseTrial: E, premiumSubscription: s }),
        ),
        H = (0, r.jsx)(ez.f7, { ...W });
    return (0, r.jsx)(eW.T_, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: H,
        subscriptionDetailsContent: k,
        paymentSelectContent: U,
        invoiceSummaryContent: G,
        legalContent: D,
        invoiceTotalDueValue: F.formattedTotal,
        invoiceTotalDueLabel: eL.intl.string(e1.default.R0cZsM),
    });
}
var e4 = n(652215);
n(26279);
var te = n(406263);
function tt(e) {
    return "" === e || "-" === e;
}
function tn(e) {
    let { value: t, onChange: n, minValue: i = 1, maxValue: l = 30, ariaLabel: s } = e,
        [c, o] = a.useState(t);
    a.useEffect(() => {
        o(t);
    }, [t]);
    let u = "number" == typeof c,
        d = (e) => {
            o(e), tt(e) || n(e);
        };
    return (0, r.jsxs)("div", {
        className: te.U$,
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
                className: te.WJ,
                children: (0, r.jsx)("input", {
                    className: te.Zh,
                    "aria-label": s,
                    inputMode: "numeric",
                    value: `${c}`,
                    onChange: (e) =>
                        ((e) => {
                            if (tt(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= i) return void d(i);
                                if (t >= l) return void d(l);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        tt(c) && o(t);
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
function tr(e) {
    let { message: t } = e;
    return (0, r.jsx)(eb.E, { variant: "text-xs/normal", color: "text-muted", className: te.jH, children: t });
}
function ta(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: te.Vk,
        children: [
            (0, r.jsx)("div", {
                className: te.D0,
                children: (0, r.jsx)(eh.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: te.ue,
                    color: ev.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, r.jsx)("div", { className: te.yP, children: t }),
        ],
    });
}
function ti(e) {
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
                className: e9.mP,
                children: [
                    (0, r.jsxs)("div", {
                        className: e9.E6,
                        children: [
                            (0, r.jsx)(eg.l, {
                                value: n,
                                onChange: (e) => i(e),
                                className: e9.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)("div", { className: e9.$0, children: l }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eu()(e9.QK, { [e9.S]: t }), children: s }),
                ],
            }),
            (0, r.jsx)("div", { className: e9.J3 }),
            (0, r.jsxs)("div", {
                className: e9.mP,
                children: [
                    (0, r.jsx)("div", { className: e9.xp, children: eL.intl.string(eL.t.RtA7nR) }),
                    (0, r.jsx)("div", {
                        className: eu()(e9.__invalid_planSelectorSubtotalPrice, { [e9.S]: t }),
                        children: c,
                    }),
                ],
            }),
            b.map((e, t) => (0, r.jsx)(a.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function tl(e) {
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
        className: te.xY,
        children: [
            _,
            (0, r.jsxs)("div", {
                className: te.K3,
                children: [
                    (0, r.jsx)(eb.E, {
                        variant: "text-md/medium",
                        className: te.bk,
                        children: eL.intl.string(eL.t["r+SebU"]),
                    }),
                    (0, r.jsx)(eE._, { className: te.bN, color: "currentColor", size: "xs" }),
                    (0, r.jsx)(eb.E, { variant: "text-md/medium", className: te.kX, children: l }),
                ],
            }),
            p,
            f,
            (0, r.jsxs)("div", {
                className: te.fh,
                children: [
                    (0, r.jsxs)("div", {
                        className: te.fX,
                        children: [
                            (0, r.jsx)(tn, {
                                value: n,
                                onChange: (e) => i(e),
                                ariaLabel: s,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, r.jsx)(eb.E, { variant: "text-md/medium", className: te.ny, children: s }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: eu()(te.El, { [e9.S]: t }), children: c }),
                ],
            }),
            b,
            (0, r.jsxs)("div", {
                className: te.fh,
                children: [
                    (0, r.jsx)(eI.D, {
                        variant: "heading-lg/semibold",
                        className: te.O3,
                        children: eL.intl.string(eL.t.RtA7nR),
                    }),
                    (0, r.jsx)("div", { className: eu()(te.BU, { [e9.S]: t }), children: u }),
                ],
            }),
            g.map((e, t) => (0, r.jsx)(a.Fragment, { children: e }, t)),
        ],
    });
}
function ts(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: a } = e;
    return (0, r.jsxs)("div", {
        className: e9.Mv,
        children: [
            (0, r.jsx)(eA._, { className: e9.T5, color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
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
                                  className: e9.Y5,
                                  color: ed.A.unsafe_rawColors.YELLOW_300.css,
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
                g = (0, c.bG)([J.A], () => J.A.getForSkuAndInterval((0, en.mH)(eQ.pe.GUILD), b, h)),
                E = (0, c.bG)([ew.default], () => ew.default.getCurrentUser()),
                I = (0, ex.A)({ forceFetch: !1 });
            l()(null != g, "Missing guildBoostingSubscriptionPlan");
            let S = [{ planId: g.id, quantity: 1 }],
                x = u?.items.find(
                    (e) => e.planId === eQ.gD.PREMIUM_MONTH_TIER_2 || e.planId === eQ.gD.PREMIUM_YEAR_TIER_2,
                );
            null != x && S.push(x);
            let v = u?.items.find(
                    (e) => e.planId === eQ.gD.PREMIUM_MONTH_GUILD || e.planId === eQ.gD.PREMIUM_YEAR_GUILD,
                ),
                C = null == m || !eQ.uJ.has(m) || null == v,
                { analyticsLocations: N } = (0, y.Ay)(),
                [P, R] = (0, eC.Kq)({
                    subscriptionId: u?.id,
                    items: S,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: f.currency,
                    preventFetch: C,
                    analyticsLocations: N,
                    analyticsLocation: A.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, M.Tr)(P, R);
            let T = !C && null == P && null == R;
            a.useLayoutEffect(() => {
                o(T);
            }, [T, o]);
            let L = (0, eR.V)()?.subscription_trial?.sku_id === eQ.pe.TIER_2,
                j = en.Ay.hasBoostDiscount(E),
                k = j && null != u && en.Ay.isPremiumAtLeast(en.Ay.getPremiumType(u.planId), eQ.PremiumTypes.TIER_1),
                U = P?.findInvoiceItemByPlanId(g.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: P.currency }
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
                            showFractionalPremiumBanner: r === eQ.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: I.fractionalState,
                    isReverseTrial: D,
                    hasDiscountUpsell: k,
                    withTrialOfferCopyVariant: L,
                });
            "discount" === F.upsellVariant
                ? (l()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = eL.intl.format(eL.t.hf6YOY, { planName: en.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = eL.intl.format("upsell_trial" === F.upsellVariant ? eL.t.ba1L74 : eL.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eF.l9)(eO.default.locale, eQ.oX / 100),
                      freeSubscriptionCount: eQ.M4,
                  }));
            let B = p.filter((e) => (0, et.I5)(e)).length,
                G = (0, en.J$)(f.paymentSourceId),
                { ipCountryCode: W } = (0, eP.A)(),
                H = "HR" === W && O.currency === e0.Yr.EUR,
                V =
                    D && null != u
                        ? (0, r.jsx)(e7, { text: e2(u.currentPeriodEnd) })
                        : (0, r.jsx)("div", { className: eu()(e9.hA, e9.G3), children: eL.intl.string(eL.t.jNY1FO) }),
                Y =
                    D && null != u
                        ? (0, r.jsx)(e7, { text: e2(u.currentPeriodEnd), className: e9.jk })
                        : (0, r.jsx)("div", { className: te._X, children: eL.intl.string(eL.t.jNY1FO) }),
                z = F.showExistingSlotNotice
                    ? (0, r.jsx)(ts, { existingAvailableSlots: p, canceledCount: B, premiumSubscription: u })
                    : null,
                K = F.showFractionalPremiumBanner ? (0, r.jsx)(eM.vi, { fractionalPremiumInfo: I }) : null,
                X = G
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eQ.WT.YEAR
                              ? eL.intl.string(eL.t.YDpAzZ)
                              : t === eQ.WT.MONTH && 1 === n
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
                            return r === eQ.WT.YEAR
                                ? eL.intl.formatToPlainString(eL.t["8M04YJ"], { price: i })
                                : r === eQ.WT.MONTH && 1 === a
                                  ? eL.intl.formatToPlainString(eL.t.VStWCR, { price: i })
                                  : r === eQ.WT.MONTH && a > 1
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
                            kunaPriceWithCurrency: (0, eB.$g)(7.5345 * w, e0.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                er.push(e), ea.push(e);
            }
            let ei = eL.intl.format(eL.t.Om31w8, { documentationLink: eD.A.getArticleURL(e4.MVz.LOCALIZED_PRICING) });
            return (
                er.push((0, r.jsx)(eS.A, { message: ei }, "localized-pricing")),
                ea.push((0, r.jsx)(tr, { message: ei }, "localized-pricing")),
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
                        "reverse_trial" === F.upsellVariant ? (0, r.jsx)(ek, {}) : (0, r.jsx)(ta, { text: n }),
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
    return (0, r.jsx)(f ? tl : ti, {
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
var to = n(879100),
    tu = n(460905),
    td = n(183623),
    tp = n(95635),
    t_ = n(935462),
    tf = n(532794),
    tm = n(811611),
    tb = n(901017),
    th = n(213178);
function tg(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, c.bG)([eO.default], () => eO.default.locale);
    return (0, r.jsxs)("div", {
        className: th.mH,
        children: [
            (0, r.jsx)(tb.A, {
                icon: eA._,
                iconClassName: th.pl,
                description: eL.intl.formatToPlainString(eL.t.sQBgs2, { numFreeGuildSubscriptions: eQ.M4 }),
                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(tb.A, {
                icon: eA._,
                iconClassName: th.pl,
                description: eL.intl.formatToPlainString(eL.t["1A6vXi"], { percent: (0, eF.l9)(n, eQ.oX / 100) }),
                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t ? (0, r.jsx)(tb.A, { icon: tu.n, iconClassName: th.zO, description: eL.intl.string(eL.t.Z9b2x2) }) : null,
            (0, r.jsx)(tb.A, { icon: td.F, iconClassName: th.Kg, description: eL.intl.string(eL.t["8dqG5E"]) }),
            (0, r.jsx)(tb.A, { icon: tp.J, iconClassName: th.$z, description: eL.intl.string(eL.t.cBorIy) }),
        ],
    });
}
function tE(e) {
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
        { analyticsLocations: m, sourceAnalyticsLocations: h } = (0, y.Ay)(A.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        g = null == t || null == t.premiumSubscriptionType,
        E = en.Ay.getPrice(eQ.gD.PREMIUM_MONTH_TIER_2, !1, !1, f),
        I = (0, eB.$g)(E.amount, E.currency),
        S = (0, eR.V)(),
        x = S?.trial_id,
        v = S?.subscription_trial?.sku_id === eQ.pe.TIER_2;
    return (
        a.useEffect(() => {
            ee.default.track(e4.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eQ.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: h,
            });
        }, [h]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(t_.s_, { "data-migration-pending": !0, onClick: n, className: th.b }),
                (0, r.jsxs)(u.c, {
                    children: [
                        v && (0, r.jsx)(tm.Vq, { className: th.Fg }),
                        (0, r.jsx)("div", { className: eu()(th.Tn, { [th.NH]: v }) }),
                        (0, r.jsx)("div", {
                            className: th.G3,
                            children:
                                null != x
                                    ? eL.intl.string(eL.t.AoSzEr)
                                    : eL.intl.format(eL.t["7vePZb"], { monthlyPrice: I }),
                        }),
                        (0, r.jsx)(tg, { shouldUpsellFromNoneTier: g }),
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
                                                (0, tf.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eQ.pe.TIER_2,
                                                    analyticsLocations: m,
                                                    analyticsObject: {
                                                        ...c,
                                                        section: e4.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
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
var tI = n(898640);
let tA = eQ.gD.NONE_MONTH,
    ty = [D.pn.PLAN_SELECT, D.pn.REVIEW, D.pn.CONFIRM],
    tS = [D.pn.PLAN_SELECT, D.pn.ADD_PAYMENT_STEPS, D.pn.REVIEW, D.pn.CONFIRM];
async function tx(e, t) {
    await (0, h.CD)();
    let n = (0, et.D$)(q.A.boostSlots);
    return (0, h.VA)(
        e,
        n.map((e) => e.id),
        t,
    );
}
function tv(e) {
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
function tC(e) {
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
            customCheckoutFlow: eI,
            hasAcceptedTerms: eA,
        } = (0, w.P5)(),
        ey = (0, M.sw)(),
        eS = (0, c.bG)([Q.A], () => Q.A.hasFetchedSubscriptions()),
        ex = null != eh ? eh.paymentSourceId : null,
        ev = (0, c.bG)([J.A], () => (null != eh ? (0, ea.c9)(eh.planId) : null)),
        eC = (0, c.bG)([J.A], () => null == eh || null != J.A.get(eh.planId)),
        eN = (0, c.bG)([J.A], () => (null == ev ? J.A.get(tA) : ev)),
        eP = a.useRef((0, et.D$)(q.A.boostSlots)).current,
        eR = (0, c.bG)([O.A], () => (null != eu ? O.A.getGuild(eu) : void 0), [eu]),
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
        [ez, eK] = a.useState(ep - eP.length),
        eX = (0, c.bG)([Z.A], () => Z.A.popupCallbackCalled),
        eq = (0, x.Y)(),
        eZ = a.useMemo(
            () => (null != eh && eC && eq ? (0, H.v)(eh, ez) : [{ planId: eQ.gD.PREMIUM_MONTH_GUILD, quantity: ez }]),
            [eh, eC, ez, eq],
        ),
        e$ = a.useMemo(() => (0, G.A)(), []),
        [eJ, e1] = (0, E.A)(() => [e$ ?? (0, s.A)(), Date.now()]),
        { analyticsLocations: e9 } = (0, y.Ay)(d, A.A.GUILD_BOOST_PURCHASE_MODAL),
        e8 = a.useMemo(
            () =>
                eZ.find((e) => {
                    let { planId: t } = e;
                    return eQ.pW.has(t);
                })?.planId ?? eQ.gD.PREMIUM_MONTH_GUILD,
            [eZ],
        ),
        e2 = (0, c.bG)([J.A], () => J.A.get(e8)?.skuId, [e8]),
        e7 = a.useMemo(
            () => ({
                load_id: eJ,
                payment_type: e0.fr[e0.VV.SUBSCRIPTION],
                sku_id: eQ.pe.GUILD,
                subscription_type: e4.rzx.PREMIUM,
                subscription_plan_id: e8,
                quantity: ez,
                location: h,
                source: eo,
                location_stack: e9,
                checkout_flow: N.CL.GUILD_BOOST_CHECKOUT,
            }),
            [eJ, h, e9, eo, ez, e8],
        );
    a.useEffect(() => {
        (0, er.c_)(eU);
    }, [eU]);
    let [e5, e3] = a.useState(D.pn.PLAN_SELECT),
        te = a.useMemo(() => Date.now(), [e5]),
        tt = a.useCallback(
            (e, t) => {
                e3(e), ek(null);
                let n = Date.now();
                ee.default.track(e4.HAw.PAYMENT_FLOW_STEP, {
                    ...e7,
                    from_step: null != t ? t : e5,
                    to_step: e === D.pn.ADD_PAYMENT_STEPS ? D.pn.PAYMENT_TYPE : e,
                    step_duration_ms: n - te,
                    flow_duration_ms: n - e1,
                    guild_id: eu,
                    application_id: em,
                });
            },
            [ek, e7, e5, te, e1, eu, em],
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
                            ts(F.h.COMPLETED),
                            null != n && (await tx(n, null != eb)),
                            a?.();
                    } catch (n) {
                        ts(F.h.FAIL),
                            s(n),
                            ee.default.track(e4.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: n?.code,
                                payment_gateway: e4.kM_.STRIPE,
                                payment_source_id: i,
                                duration_ms: Date.now() - t,
                            });
                    } finally {
                        l(!1), (0, S.bl)();
                    }
            })();
        }, [eX, eb]),
        (0, I.Ay)(() => {
            Q.A.hasFetchedSubscriptions() || (0, S.hP)(),
                null == eu ||
                    null != X.A.getGuild(eu) ||
                    null != O.A.getGuild(eu) ||
                    O.A.isGuildFetching(eu) ||
                    (0, U.y)(eu),
                (0, k.b)({ ...e7, guild_id: eu, application_id: em, custom_checkout_flow: eI }),
                null != eh &&
                    null != eh.renewalMutations &&
                    ee.default.track(e4.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: h, guild_id: eu });
        });
    let [ta, ti] = a.useState(ty),
        [tl, ts] = a.useState(F.h.WAITING),
        [tu, td] = a.useState(!0),
        tp = () => {
            i(tl === F.h.COMPLETED);
        },
        t_ = null != eh && eh.isPurchasedExternally;
    a.useEffect(() => {
        ew !== Y.oc.PENDING &&
            e5 !== D.pn.CONFIRM &&
            null != ex &&
            (ta !== ty && ti(ty), ty.includes(e5) || e5 === D.pn.PREMIUM_UPSELL || tt(D.pn.REVIEW)),
            e5 === D.pn.ADD_PAYMENT_STEPS && ta !== tS && ti(tS),
            t_ && e5 !== D.pn.PLAN_SELECT && e3(D.pn.PLAN_SELECT);
    }, [e5, tt, t_, ew, eh, ex, ta]),
        (0, Y.b)(e5, ew, tt, ts),
        (0, D.zT)(e5, tl, ts);
    let tf = (0, V.n)("GuildBoostPurchaseModal"),
        tm = tf && (e5 === D.pn.REVIEW || e5 === D.pn.CONFIRM),
        tb = (0, ec.A)(tm),
        [th, tg] = a.useState(null),
        [tC, tN] = a.useState([]),
        [tP, tR] = a.useState(!1),
        tT = a.useMemo(() => JSON.stringify(tC), [tC]);
    a.useEffect(() => {
        let e;
        eq &&
            (null != J.A.get(eQ.gD.PREMIUM_MONTH_GUILD) && tN((e = (0, er._w)(eQ.gD.PREMIUM_MONTH_GUILD, eU, !1))),
            null == eU && null != eh && null != eh.paymentSourceId ? tg(eh.currency) : null != e && tg(e[0]));
    }, [eU, eh, eq, tT]);
    let tM = (0, K.Y)({
        paymentModalArgs: eM,
        initialStep: D.pn.PAYMENT_TYPE,
        prependSteps: [D.pn.PLAN_SELECT],
        appendSteps: [D.pn.REVIEW, D.pn.CONFIRM],
        breadcrumpSteps: ta,
        currentBreadcrumpStep: e5,
        onReturn: () => {
            tt(Object.values(ej).length < 1 ? D.pn.PLAN_SELECT : D.pn.REVIEW, D.pn.PAYMENT_TYPE);
        },
        onComplete: (e) => {
            tt(D.pn.REVIEW, e);
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: n } = e,
                r = Date.now();
            ee.default.track(e4.HAw.PAYMENT_FLOW_STEP, {
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
    else if (eS && eC && eq && null != th && "" !== th)
        if (eh?.isPausedOrPausePending && !eh.isPausedAllowsUpdatesButNotResume)
            t = (0, r.jsx)(u.c, {
                children: (0, r.jsx)("p", { className: tI.C, children: eL.intl.string(eL.t.mOWsF1) }),
            });
        else if (null != eh && null != eh.renewalMutations)
            t = (0, r.jsx)(u.c, {
                children: (0, r.jsx)("p", { className: tI.C, children: eL.intl.string(eL.t.npfhh0) }),
            });
        else if (e5 === D.pn.PREMIUM_UPSELL) {
            l()(null != eN, "Missing nextPremiumSubscriptionPlan"), l()(th, "Currency not defined");
            let e = null != eU ? { paymentSourceId: eU, currency: th } : { currency: th };
            t = (0, r.jsx)(tE, {
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
            l()(th, "Currency not defined");
            let s = null != eU ? { paymentSourceId: eU, currency: th } : { currency: th },
                c = X.A.getGuild(eu),
                u = null == eR && null == c,
                d = null;
            switch (e5) {
                case D.pn.PLAN_SELECT:
                    l()(null != eu, "Missing guildId"),
                        l()(null != eN, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, r.jsx)(tc, {
                            premiumSubscriptionPlan: eN,
                            numGuildBoosts: ez,
                            setNumGuildBoosts: eK,
                            setForceDisableSubmitButton: td,
                            premiumSubscription: eh,
                            existingAvailableSlots: eP,
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
                                  className: tI.xK,
                                  children: [
                                      (0, r.jsx)(f.w, {
                                          type: "critical",
                                          children: eL.intl.format(eL.t["/m3Y3s"], {
                                              paymentGatewayName: e0.qm[eh.paymentGateway],
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
                                          className: tI.MR,
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
                                e_ || (null != ev && ev.premiumSubscriptionType === eQ.PremiumTypes.TIER_2)
                                    ? tt(null != ex || eH ? D.pn.REVIEW : D.pn.ADD_PAYMENT_STEPS)
                                    : tt(D.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case D.pn.ADD_PAYMENT_STEPS:
                    break;
                case D.pn.AWAITING_AUTHENTICATION:
                    e = (0, r.jsx)(g.N, { className: tI.__invalid_body });
                    break;
                case D.pn.REVIEW:
                    l()(null != eN, "Missing nextPremiumSubscriptionPlan"),
                        l()(null != eu, "Missing guildId"),
                        (e = (0, r.jsx)(e6, {
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
                            ts(F.h.PURCHASING),
                                eO(!0),
                                l()(null != eU, "Missing paymentSourceId"),
                                l()(null != ey, "Missing invoicePreview");
                            let t = { amount: ey.total, currency: ey.currency },
                                n = s.currency ?? ey.currency,
                                r = (0, en.U8)(eh, eZ, n.toLowerCase(), s.paymentSourceId);
                            if (
                                (ee.default.track(e4.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e7,
                                    duration_ms: Date.now() - e1,
                                    guild_id: eu,
                                    application_id: em,
                                }),
                                tP)
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
                                if (a.redirectConfirmation) return void tR(null != a.redirectURL);
                            } else {
                                let a = { items: (0, en.aE)(eh, eZ) };
                                (a.currency = eh.currency ?? n),
                                    (a.paymentSource = null != ex ? ej[ex] : void 0),
                                    null == a.paymentSource &&
                                        (l()(null != e, "Missing paymentSource"),
                                        (a.paymentSource = e),
                                        (a.currency = n));
                                let i = await (0, S.nV)(eh, a, t, r, e9);
                                if (i.redirectConfirmation) return void tR(null != i.redirectURL);
                            }
                            null == eb && tt(D.pn.CONFIRM),
                                ts(F.h.COMPLETED),
                                null != eu && (await tx(eu, null != eb)),
                                null != eb && tp(),
                                ed?.();
                        } catch (t) {
                            ts(F.h.FAIL),
                                ek(t),
                                ee.default.track(e4.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e7,
                                    payment_error_code: t?.code,
                                    payment_gateway:
                                        null != e ? (e.type === e4.hes.CARD ? e4.kM_.STRIPE : e4.kM_.BRAINTREE) : null,
                                    payment_source_id: eU,
                                    duration_ms: Date.now() - e1,
                                });
                        } finally {
                            tP || eO(!1);
                        }
                    };
                    (d = {
                        text: eL.intl.string(eL.t.eUEeCt),
                        loading: eF,
                        disabled: !eA || eY,
                        onClick: _,
                        variant: "active",
                    }),
                        (i = (0, r.jsx)(P.p, { ...d }));
                    break;
                case D.pn.CONFIRM:
                    let h = c?.name ?? eR?.name,
                        E = (0, B.g)(ej, eU),
                        I = (0, ea.b2)(eE.current) && null != ev && !eQ.YV.has(ev.id);
                    e = (0, r.jsx)(to.W, {
                        guild: c,
                        guildBoostQuantity: ez + eP.length,
                        onClose: tp,
                        withAnimation: !1,
                        paymentSourceType: E,
                        fallbackGuildName: h,
                        didPurchaseOnFractionalPremium: I,
                        customCheckoutFlow: eI,
                    });
            }
            let A = null != eB && null == (0, D.ou)(eB) ? eB : eG;
            t =
                e5 === D.pn.ADD_PAYMENT_STEPS
                    ? tM
                    : (0, r.jsx)(z.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: t, isBoostingPreCheckoutModalRefreshEnabled: n } = e;
                              return t === D.pn.REVIEW || t === D.pn.CONFIRM || (n && t === D.pn.PLAN_SELECT);
                          })({ currentStep: e5, isBoostingPreCheckoutModalRefreshEnabled: tf }),
                          steps: ta,
                          currentStep: e5,
                          paymentError: A,
                          purchaseErrorBlockRef: eW,
                          hasCurrencies: tC.length > 1,
                          body: e,
                          footer: (0, r.jsx)(tv, {
                              currentStep: e5,
                              isRefreshEnabled: tf,
                              backStep: n,
                              handleStepChange: tt,
                              primaryButtonProps: d,
                              secondaryButton: a,
                              legacySubmitButton: i,
                          }),
                      });
        }
    else t = (0, r.jsx)("div", { className: tI._5, children: (0, r.jsx)(_.y, {}) });
    let tL = (0, L.u)({ skuId: e2, step: e5 }),
        tj = null;
    return (eg ||
        (tf && e5 !== D.pn.PREMIUM_UPSELL
            ? (tj = e5 === D.pn.REVIEW ? (0, r.jsx)(j.s3, { ...tL }) : (0, r.jsx)(j.s3, { title: tL.title }))
            : e5 === D.pn.REVIEW
              ? (tj = (0, r.jsx)(j.s3, { ...tL }))
              : e5 !== D.pn.PREMIUM_UPSELL &&
                (tj = (0, r.jsx)(ei.A, { onClose: tp, currentStep: e5, purchaseState: tl }))),
    tf && e5 === D.pn.CONFIRM)
        ? (0, r.jsx)(es.A, {
              mediaUrls: tb.mediaUrls,
              isSuccess: tb.isSuccess,
              transitionState: n,
              onClose: () => (tp(), Promise.resolve()),
              children: (e, t) =>
                  (0, r.jsx)(el.A, {
                      transitionState: n,
                      guild: X.A.getGuild(eu),
                      guildBoostQuantity: ez + eP.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: t,
                  }),
          })
        : (0, r.jsx)(R.e0, {
              children: (0, r.jsxs)(j.Jg, {
                  transitionState: n,
                  size: "md",
                  onClose: () => (tp(), Promise.resolve()),
                  children: [tj, t],
              }),
          });
}
function tN(e) {
    let t = (0, c.bG)([Q.A], () => Q.A.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, y.Ay)(A.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, r.jsx)(y.f5, {
        value: n,
        children: (0, r.jsx)(w.PaymentContextProvider, {
            activeSubscription: t,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: N.CL.GUILD_BOOST_CHECKOUT,
            children: (0, r.jsx)(tC, { ...e }),
        }),
    });
}
