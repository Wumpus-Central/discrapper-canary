t.d(n, { default: () => nb });
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
    E = t(512950),
    g = t(821609),
    _ = t(820739),
    P = t(891197),
    y = t(444927),
    I = t(964486),
    x = t(793574),
    h = t(688810),
    f = t(753390),
    A = t(160946),
    N = t(606267),
    b = t(545075),
    j = t(622207),
    C = t(981036),
    T = t(725836),
    v = t(426398),
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
    ei = t(428262),
    el = t(83617),
    es = t(615396),
    er = t(802790),
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
    eg = t(499373),
    e_ = t(834730),
    eP = t(403581),
    ey = t(663803),
    eI = t(320448),
    ex = t(534514),
    eh = t(104510),
    ef = t(695366),
    eA = t(726656),
    eN = t(531260),
    eb = t(404374),
    ej = t(543767),
    eC = t(881489),
    eT = t(477421),
    ev = t(234419),
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
            (0, i.jsx)(e_.E, {
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
        children: [(0, i.jsx)(eP.t, { size: "md", className: eD.YW, color: t }), (0, i.jsx)("div", { children: n })],
    });
}
var eG = t(773669),
    ew = t(287809),
    ek = t(975571),
    eB = t(252424),
    eF = t(580630),
    eV = t(155718),
    eY = t(61572),
    eW = t(717925),
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
            totalDue: s,
            currency: r,
            startDate: a,
        } = e,
        { immediateDelivery: u } = (0, e$.U)();
    return (0, i.jsx)(eH._, {
        variant: {
            type: eH.I.Subscription,
            purchaseButtonText: eR.intl.string(eR.t.eUEeCt),
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
function e2(e) {
    return eR.intl.format(eR.t.IeaYqg, { endDate: e });
}
function e6(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: e1.bU }),
            (0, i.jsx)(e_.E, { variant: "text-sm/normal", className: e1.b7, children: n }),
            (0, i.jsx)("div", { className: e1.bU }),
        ],
    });
}
function e8(e) {
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
                label: eR.intl.formatToPlainString(eR.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, ei.Mn)(t.id, !1, i),
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
            label: eR.intl.formatToPlainString(eR.t.ZSVged, { planName: (0, ei.RH)(l[0].subscriptionPlanId) }),
            tooltip: eR.intl.string(eR.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            u.push({
                id: "guild-boosting-adjustment",
                label: eR.intl.string(eR.t["+as5ZZ"]),
                tooltip: eR.intl.string(eR.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== r.tax && u.push({ id: "tax", label: eR.intl.string(eR.t.jiRvC7), amount: r.tax, lineItemType: "tax" });
    let { lineItems: o, currency: c } = (0, eK.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(ez.Vm, {
        defaultExpanded: !0,
        label: eR.intl.string(e0.default.eoXh7B),
        lineItems: d,
        currency: c,
    });
}
function e4(e) {
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
        ? (0, i.jsx)(eQ.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: s,
              isUpdate: n,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(eQ.m0, {
              renewalInvoice: s,
              priceOptions: u,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function e5(e) {
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
        E = (function (e) {
            let n,
                {
                    guildId: t,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                o = (0, u.bG)([K.A, G.A], () => {
                    let e = K.A.getGuild(t);
                    return null != e ? e : G.A.isGuildFetching(t) ? null : G.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([X.A], () => X.A.getForSkuAndInterval((0, ei.mH)(eZ.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, ei.J$)(i.paymentSourceId),
                S = (0, eC.ds)();
            n = null != l ? (0, ei.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: E } = (0, h.Ay)(),
                [g, _] = (0, ej.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: E,
                    analyticsLocation: x.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P, y] = (0, ej.YV)({
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
                    checkoutInvoicePreview: g,
                    checkoutInvoiceError: _,
                    renewalInvoicePreview: P,
                    renewalInvoiceError: y,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: g,
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
            isSubscriptionUpdate: g,
            guild: _,
            isPrepaid: P,
            isReverseTrial: y,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: f,
        } = E,
        A = l.useMemo(
            () => ({ tooltipText: null == o ? null : eR.intl.string(eR.t.XiuuV9), shouldUseUnifiedCheckoutUI: !0 }),
            [o],
        );
    if (null == I || null == f || null == _) return (0, i.jsx)(eW.E, {});
    let N = (0, i.jsx)(e4, {
            isSubscriptionUpdate: g,
            premiumSubscription: a,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: f,
            isPrepaid: P,
            isReverseTrial: y,
            priceOptions: s,
        }),
        b = (0, i.jsx)(eY.N, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eR.intl.string(eR.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            disabled: null != o,
            subscriptionPaymentSourceId: o,
            additionalPaymentSourceDropdownProps: A,
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
                startDate: (0, eQ.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: g,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: f,
            checkoutInvoicePreview: I,
            paymentSources: t,
            paymentSourceId: p,
        }),
        C = (0, i.jsx)(e3, { ...j }),
        T = (function (e) {
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
                m = (e) => (0, eq.Z)(i.invoiceItems).find((n) => eZ.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let E = m((e) => e.amount < 0),
                g = null != E ? S.quantity - E.quantity : S.quantity,
                _ = i.invoiceItems.filter((e) => (0, ei.xq)(e.subscriptionPlanId)),
                P = _.reduce((e, n) => e + n.amount, 0),
                y = (0, ej.sL)(S) * g,
                I = (0, eF.$g)(y, i.currency),
                x = (0, eF.CE)(I, d, p),
                h = (0, eF.$g)(i.total, i.currency) + (i.currency !== eX.Yr.USD ? "*" : ""),
                f = i.subtotal - y - P,
                A = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * g };
                }),
                N = A.find((e) => e.type === eV.iS.SUBSCRIPTION_PLAN),
                b = A.find((e) => e.type === eV.iS.ENTITLEMENT),
                j = S.subscriptionPlanPrice * g;
            return {
                addedQuantity: g,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: x,
                formattedOriginalAmountGuildBoostRate: (0, eF.CE)((0, eF.$g)(j, i.currency), d, p),
                formattedTotal: h,
                basePlanAdjustment: P,
                basePlanInvoiceItems: _,
                guildBoostingAdjustment: f,
                subscriptionDiscount: N,
                entitlementDiscount: b,
                originalAmount: j,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: s,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: I,
            renewalInvoicePreview: f,
            priceOptions: s,
            reviewState: E,
        }),
        v = (0, i.jsx)(e8, { ...T }),
        L = (function (e, n, t) {
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
                label: eR.intl.formatToPlainString(eR.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, ei.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(eJ.a6, {}),
                price: a,
                PriceIcon: c ? eP.t : void 0,
                priceTooltip: c ? eR.intl.string(e0.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            _,
            T,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: e2(i.currentPeriodEnd) } : null;
            })({ isPrepaid: P, isReverseTrial: y, premiumSubscription: a }),
        ),
        R = (0, i.jsx)(eJ.f7, { ...L });
    return (0, i.jsx)(eW.T, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: R,
        subscriptionDetailsContent: N,
        paymentSelectContent: b,
        invoiceSummaryContent: v,
        legalContent: C,
        invoiceTotalDueValue: T.formattedTotal,
        invoiceTotalDueLabel: eR.intl.string(e0.default.R0cZsM),
    });
}
var e9 = t(652215);
t(26279);
var e7 = t(406263);
function ne(e) {
    return "" === e || "-" === e;
}
function nn(e) {
    let { value: n, onChange: t, minValue: s = 1, maxValue: r = 30, ariaLabel: a } = e,
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
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eR.intl.string(eR.t["k+ohJm"]),
                disabled: !c || u <= s,
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
                                if (n <= s) return void d(s);
                                if (n >= r) return void d(r);
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
                icon: eg.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eR.intl.string(eR.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function nt(e) {
    let { message: n } = e;
    return (0, i.jsx)(e_.E, { variant: "text-xs/normal", color: "text-muted", className: e7.jH, children: n });
}
function ni(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: e7.Vk,
        children: [
            (0, i.jsx)("div", {
                className: e7.D0,
                children: (0, i.jsx)(eP.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e7.ue,
                    color: eb.k0.PREMIUM_TIER_2,
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
        refreshDiscountCallout: E,
        legacyPricingNotes: g,
        refreshPricingNotes: _,
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
                            (0, i.jsx)(ey.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: e1.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: e1.$0, children: r }),
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
            g.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
        ],
    });
}
function ns(e) {
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
        discountCallout: E,
        refreshDiscountCallout: g,
        legacyPricingNotes: _,
        refreshPricingNotes: P,
    } = e;
    return (0, i.jsxs)("div", {
        className: e7.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: e7.K3,
                children: [
                    (0, i.jsx)(e_.E, {
                        variant: "text-md/medium",
                        className: e7.bk,
                        children: eR.intl.string(eR.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eI._, { className: e7.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(e_.E, { variant: "text-md/medium", className: e7.kX, children: r }),
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
                                onChange: (e) => s(e),
                                ariaLabel: a,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(e_.E, { variant: "text-md/medium", className: e7.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ed()(e7.El, { [e1.S]: n }), children: u }),
                ],
            }),
            g,
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
            P.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function nr(e) {
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
            setNumGuildBoosts: s,
            setForceDisableSubmitButton: a,
            premiumSubscription: o,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: p,
            isRefreshEnabled: S = !1,
            refreshNextStepLabel: E = eR.intl.string(eR.t.QBnNHq),
        } = e,
        g = (function (e) {
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
                } = e,
                E =
                    ((n = (0, u.bG)([ee.A], () => ee.A.getPremiumTypeSubscription())),
                    (0, u.bG)([Z.A], () =>
                        n?.paymentSourceId != null ? Z.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                g = s.interval,
                _ = s.intervalCount,
                P = (0, u.bG)([X.A], () => X.A.getForSkuAndInterval((0, ei.mH)(eZ.pe.GUILD), g, _)),
                y = (0, u.bG)([ew.default], () => ew.default.getCurrentUser()),
                I = (0, eN.A)({ forceFetch: !1 });
            r()(null != P, "Missing guildBoostingSubscriptionPlan");
            let f = [{ planId: P.id, quantity: 1 }],
                A = c?.items.find(
                    (e) => e.planId === eZ.gD.PREMIUM_MONTH_TIER_2 || e.planId === eZ.gD.PREMIUM_YEAR_TIER_2,
                );
            null != A && f.push(A);
            let N = c?.items.find(
                    (e) => e.planId === eZ.gD.PREMIUM_MONTH_GUILD || e.planId === eZ.gD.PREMIUM_YEAR_GUILD,
                ),
                b = null == E || !eZ.uJ.has(E) || null == N,
                { analyticsLocations: j } = (0, h.Ay)(),
                [C, T] = (0, ej.YV)({
                    subscriptionId: c?.id,
                    items: f,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: b,
                    analyticsLocations: j,
                    analyticsLocation: x.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, M.Tr)(C, T);
            let v = !b && null == C && null == T;
            l.useLayoutEffect(() => {
                o(v);
            }, [v, o]);
            let L = (0, ev.V)()?.subscription_trial?.sku_id === eZ.pe.TIER_2,
                R = ei.Ay.hasBoostDiscount(y),
                D = R && null != c && ei.Ay.isPremiumAtLeast(ei.Ay.getPremiumType(c.planId), eZ.PremiumTypes.TIER_1),
                U = C?.findInvoiceItemByPlanId(P.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: C.currency }
                        : ei.Ay.getPrice(P.id, R, !1, S),
                G = a * O.amount,
                w = (0, eC.ds)() && R && null != c,
                k = (function (e) {
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
                ? (r()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (t = eR.intl.format(eR.t.hf6YOY, { planName: ei.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eR.intl.format("upsell_trial" === k.upsellVariant ? eR.t.ba1L74 : eR.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eB.l9)(eG.default.locale, eZ.oX / 100),
                      freeSubscriptionCount: eZ.M4,
                  }));
            let B = p.filter((e) => (0, et.I5)(e)).length,
                F = (0, ei.J$)(S.paymentSourceId),
                { ipCountryCode: V } = (0, eT.A)(),
                Y = "HR" === V && O.currency === eX.Yr.EUR,
                W =
                    w && null != c
                        ? (0, i.jsx)(e6, { text: e2(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: ed()(e1.hA, e1.G3), children: eR.intl.string(eR.t.jNY1FO) }),
                H =
                    w && null != c
                        ? (0, i.jsx)(e6, { text: e2(c.currentPeriodEnd), className: e1.jk })
                        : (0, i.jsx)("div", { className: e7._X, children: eR.intl.string(eR.t.jNY1FO) }),
                z = k.showExistingSlotNotice
                    ? (0, i.jsx)(nr, { existingAvailableSlots: p, canceledCount: B, premiumSubscription: c })
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
                      })({ intervalType: g, intervalCount: _ }) ?? eR.intl.string(eR.t.K9Bmze))
                    : eR.intl.string(eR.t.K9Bmze),
                K = v
                    ? (0, i.jsx)(m.y, {})
                    : F
                      ? (0, eF.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eF.$g)(n, t);
                            return i === eZ.WT.YEAR
                                ? eR.intl.formatToPlainString(eR.t["8M04YJ"], { price: s })
                                : i === eZ.WT.MONTH && 1 === l
                                  ? eR.intl.formatToPlainString(eR.t.VStWCR, { price: s })
                                  : i === eZ.WT.MONTH && l > 1
                                    ? eR.intl.formatToPlainString(eR.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: g, intervalCount: _, amount: O.amount, currency: O.currency }),
                q = v
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eM.A, {
                          price: G,
                          currency: O.currency,
                          intervalType: g,
                          intervalCount: _,
                          isPrepaidPaymentSource: F,
                      }),
                Q = v ? (0, i.jsx)(m.y, {}) : (0, eF.$g)(G, O.currency),
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
            let es = eR.intl.format(eR.t.Om31w8, { documentationLink: ek.A.getArticleURL(e9.MVz.LOCALIZED_PRICING) });
            return (
                en.push((0, i.jsx)(eA.A, { message: es }, "localized-pricing")),
                el.push((0, i.jsx)(nt, { message: es }, "localized-pricing")),
                {
                    isLoading: v,
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
                            : (0, i.jsx)(eO, { text: t, color: eb.k0.PREMIUM_TIER_2 }),
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
    return (0, i.jsx)(S ? ns : nl, {
        isLoading: g.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: s,
        planLabel: g.planLabel,
        planPriceContent: g.planPriceContent,
        subtotalContent: g.subtotalContent,
        refreshSubtotalContent: g.refreshSubtotalContent,
        legacyDescriptionContent: g.legacyDescriptionContent,
        refreshDescriptionContent: g.refreshDescriptionContent,
        fractionalBanner: g.fractionalBanner,
        existingSlotNotice: g.existingSlotNotice,
        discountCallout: g.discountCallout,
        refreshDiscountCallout: g.refreshDiscountCallout,
        legacyPricingNotes: g.legacyPricingNotes,
        refreshPricingNotes: g.refreshPricingNotes,
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
    ng = t(213178);
function n_(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eG.default], () => eG.default.locale);
    return (0, i.jsxs)("div", {
        className: ng.mH,
        children: [
            (0, i.jsx)(nE.A, {
                icon: eh._,
                iconClassName: ng.pl,
                description: eR.intl.formatToPlainString(eR.t.sQBgs2, { numFreeGuildSubscriptions: eZ.M4 }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nE.A, {
                icon: eh._,
                iconClassName: ng.pl,
                description: eR.intl.formatToPlainString(eR.t["1A6vXi"], { percent: (0, eB.l9)(t, eZ.oX / 100) }),
                color: ep.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nE.A, { icon: no.n, iconClassName: ng.zO, description: eR.intl.string(eR.t.Z9b2x2) }) : null,
            (0, i.jsx)(nE.A, { icon: nc.F, iconClassName: ng.Kg, description: eR.intl.string(eR.t["8dqG5E"]) }),
            (0, i.jsx)(nE.A, { icon: nd.J, iconClassName: ng.$z, description: eR.intl.string(eR.t.cBorIy) }),
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
        { analyticsLocations: E, sourceAnalyticsLocations: _ } = (0, h.Ay)(x.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        P = null == n || null == n.premiumSubscriptionType,
        y = ei.Ay.getPrice(eZ.gD.PREMIUM_MONTH_TIER_2, !1, !1, S),
        I = (0, eF.$g)(y.amount, y.currency),
        f = (0, ev.V)(),
        A = f?.trial_id,
        N = f?.subscription_trial?.sku_id === eZ.pe.TIER_2;
    return (
        l.useEffect(() => {
            en.default.track(e9.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eZ.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: _,
            });
        }, [_]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(np.s_, { "data-migration-pending": !0, onClick: t, className: ng.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        N && (0, i.jsx)(nS.Vq, { className: ng.Fg }),
                        (0, i.jsx)("div", { className: ed()(ng.Tn, { [ng.NH]: N }) }),
                        (0, i.jsx)("div", {
                            className: ng.G3,
                            children:
                                null != A
                                    ? eR.intl.string(eR.t.AoSzEr)
                                    : eR.intl.format(eR.t["7vePZb"], { monthlyPrice: I }),
                        }),
                        (0, i.jsx)(n_, { shouldUpsellFromNoneTier: P }),
                    ],
                }),
                (0, i.jsx)(o.j, {
                    children: (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(p.Q, { text: eR.intl.string(eR.t["13/7kX"]), onClick: s, variant: "secondary" }),
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, i.jsx)(p.Q, {
                                        text: eR.intl.string(eR.t["SI/adm"]),
                                        onClick: r,
                                        variant: "secondary",
                                    }),
                                    (0, i.jsx)(g.$, {
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
var ny = t(898640);
let nI = eZ.gD.NONE_MONTH,
    nx = [k.pn.PLAN_SELECT, k.pn.REVIEW, k.pn.CONFIRM],
    nh = [k.pn.PLAN_SELECT, k.pn.ADD_PAYMENT_STEPS, k.pn.REVIEW, k.pn.CONFIRM];
async function nf(e, n) {
    await (0, _.CD)();
    let t = (0, et.D$)(q.A.boostSlots);
    return (0, _.VA)(
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
                                  text: eR.intl.string(eR.t["13/7kX"]),
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
function nN(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            closeGuildPerksModal: o,
            analyticsLocations: d,
            analyticsLocation: _,
            analyticsSourceLocation: ec,
            guildId: ed,
            onSubscribeComplete: ep,
            totalNumberOfSlotsToAssign: em = 1,
            disablePremiumUpsell: eS = !1,
            onSubscriptionConfirmation: eE,
            applicationId: eg,
            intent: e_,
        } = e,
        eP = (0, D.t4)((e) => e.hasAcceptedTerms),
        {
            activeSubscription: ey,
            blockedPayments: eI,
            startingFractionalPremiumEndsAtRef: ex,
            customCheckoutFlow: eh,
        } = (0, w.P5)(),
        ef = (0, M.sw)(),
        eA = (0, u.bG)([ee.A], () => ee.A.hasFetchedSubscriptions()),
        eN = null != ey ? ey.paymentSourceId : null,
        eb = (0, u.bG)([X.A], () => (null != ey ? (0, es.c9)(ey.planId) : null)),
        ej = (0, u.bG)([X.A], () => null == ey || null != X.A.get(ey.planId)),
        eC = (0, u.bG)([X.A], () => (null == eb ? X.A.get(nI) : eb)),
        eT = l.useRef((0, et.D$)(q.A.boostSlots)).current,
        ev = (0, u.bG)([G.A], () => (null != ed ? G.A.getGuild(ed) : void 0), [ed]),
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
        eH = (0, v.kc)(),
        ez = (0, N.iB)({ checkoutPaymentSources: eH, paymentSourceId: eO, location: "GuildBoostPurchaseModal" }),
        [eJ, e$] = l.useState(em - eT.length),
        eK = (0, u.bG)([Q.A], () => Q.A.popupCallbackCalled),
        eq = (0, A.Y)(),
        eQ = l.useMemo(
            () => (null != ey && ej && eq ? (0, W.v)(ey, eJ) : [{ planId: eZ.gD.PREMIUM_MONTH_GUILD, quantity: eJ }]),
            [ey, ej, eJ, eq],
        ),
        e0 = l.useMemo(() => (0, V.A)(), []),
        [e1, e3] = (0, y.A)(() => [e0 ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: e2 } = (0, h.Ay)(d, x.A.GUILD_BOOST_PURCHASE_MODAL),
        e6 = l.useMemo(
            () =>
                eQ.find((e) => {
                    let { planId: n } = e;
                    return eZ.pW.has(n);
                })?.planId ?? eZ.gD.PREMIUM_MONTH_GUILD,
            [eQ],
        ),
        e8 = (0, u.bG)([X.A], () => X.A.get(e6)?.skuId, [e6]),
        e4 = l.useMemo(
            () => ({
                load_id: e1,
                payment_type: eX.fr[eX.VV.SUBSCRIPTION],
                sku_id: eZ.pe.GUILD,
                subscription_type: e9.rzx.PREMIUM,
                subscription_plan_id: e6,
                quantity: eJ,
                location: _,
                source: ec,
                location_stack: e2,
                checkout_flow: j.CL.GUILD_BOOST_CHECKOUT,
            }),
            [e1, _, e2, ec, eJ, e6],
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
                en.default.track(e9.HAw.PAYMENT_FLOW_STEP, {
                    ...e4,
                    from_step: null != n ? n : e7,
                    to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                    step_duration_ms: t - nn,
                    flow_duration_ms: t - e3,
                    guild_id: ed,
                    application_id: eg,
                });
            },
            [eU, e4, e7, nn, e3, ed, eg],
        ),
        ni = {
            baseAnalyticsData: e4,
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
                paymentSourceId: s,
                setIsSubmittingCurrentStep: r,
                setPurchaseError: a,
            } = nl.current;
            (async () => {
                if (!0 === eK)
                    try {
                        if (null == Q.A.redirectedPaymentId) return;
                        await (0, f.tn)(Q.A.redirectedPaymentId),
                            i(k.pn.CONFIRM),
                            nc(B.h.COMPLETED),
                            null != t && (await nf(t, null != e_)),
                            l?.();
                    } catch (t) {
                        nc(B.h.FAIL),
                            a(t),
                            en.default.track(e9.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: e9.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, f.bl)();
                    }
            })();
        }, [eK, e_]),
        (0, I.Ay)(() => {
            ee.A.hasFetchedSubscriptions() || (0, f.hP)(),
                null == ed ||
                    null != K.A.getGuild(ed) ||
                    null != G.A.getGuild(ed) ||
                    G.A.isGuildFetching(ed) ||
                    (0, O.y)(ed),
                (0, U.b)({ ...e4, guild_id: ed, application_id: eg, custom_checkout_flow: eh }),
                null != ey &&
                    null != ey.renewalMutations &&
                    en.default.track(e9.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: _, guild_id: ed });
        });
    let [ns, nr] = l.useState(nx),
        [no, nc] = l.useState(B.h.WAITING),
        [nd, np] = l.useState(!0),
        nm = () => {
            s(no === B.h.COMPLETED);
        },
        nS = null != ey && ey.isPurchasedExternally;
    l.useEffect(() => {
        ew !== z.oc.PENDING &&
            e7 !== k.pn.CONFIRM &&
            null != eN &&
            (ns !== nx && nr(nx), nx.includes(e7) || e7 === k.pn.PREMIUM_UPSELL || nt(k.pn.REVIEW)),
            e7 === k.pn.ADD_PAYMENT_STEPS && ns !== nh && nr(nh),
            nS && e7 !== k.pn.PLAN_SELECT && ne(k.pn.PLAN_SELECT);
    }, [e7, nt, nS, ew, ey, eN, ns]),
        (0, z.b)(e7, ew, nt, nc),
        (0, k.zT)(e7, no, nc);
    let nE = (0, H.n)("GuildBoostPurchaseModal"),
        ng = nE && (e7 === k.pn.REVIEW || e7 === k.pn.CONFIRM),
        n_ = (0, eo.A)(ng),
        [nN, nb] = l.useState(null),
        [nj, nC] = l.useState([]),
        [nT, nv] = l.useState(!1),
        nM = l.useMemo(() => JSON.stringify(nj), [nj]);
    l.useEffect(() => {
        let e;
        eq &&
            (null != X.A.get(eZ.gD.PREMIUM_MONTH_GUILD) && nC((e = (0, el._w)(eZ.gD.PREMIUM_MONTH_GUILD, eO, !1))),
            null == eO && null != ey && null != ey.paymentSourceId ? nb(ey.currency) : null != e && nb(e[0]));
    }, [eO, ey, eq, nM]);
    let nL = (0, $.Y)({
        paymentModalArgs: eL,
        initialStep: k.pn.PAYMENT_TYPE,
        prependSteps: [k.pn.PLAN_SELECT],
        appendSteps: [k.pn.REVIEW, k.pn.CONFIRM],
        breadcrumpSteps: ns,
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
            en.default.track(e9.HAw.PAYMENT_FLOW_STEP, {
                ...e4,
                from_step: n,
                to_step: t,
                step_duration_ms: i - nn,
                flow_duration_ms: i - e3,
                guild_id: ed,
            });
        },
        shouldUseManaModal: !0,
    });
    if (eI) n = (0, i.jsx)(b.oO, {});
    else if (eA && ej && eq && null != nN && "" !== nN)
        if (ey?.isPausedOrPausePending && !ey.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: ny.C, children: eR.intl.string(eR.t.mOWsF1) }),
            });
        else if (null != ey && null != ey.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: ny.C, children: eR.intl.string(eR.t.npfhh0) }),
            });
        else if (e7 === k.pn.PREMIUM_UPSELL) {
            r()(null != eC, "Missing nextPremiumSubscriptionPlan"), r()(nN, "Currency not defined");
            let e = null != eO ? { paymentSourceId: eO, currency: nN } : { currency: nN };
            n = (0, i.jsx)(nP, {
                premiumSubscriptionPlan: eC,
                analyticsLocation: _,
                analyticsSourceLocation: ec,
                onClose: nm,
                onBack: () => nt(k.pn.PLAN_SELECT),
                onSkip: () => nt(null != eN || eW ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS),
                onSubscriptionConfirmation: eE,
                priceOptions: e,
            });
        } else {
            let e, t, l, s;
            r()(nN, "Currency not defined");
            let a = null != eO ? { paymentSourceId: eO, currency: nN } : { currency: nN },
                u = K.A.getGuild(ed),
                c = null == ev && null == u,
                d = null;
            switch (e7) {
                case k.pn.PLAN_SELECT:
                    r()(null != ed, "Missing guildId"),
                        r()(null != eC, "Missing nextPremiumSubscriptionPlan"),
                        (e = (0, i.jsx)(na, {
                            premiumSubscriptionPlan: eC,
                            numGuildBoosts: eJ,
                            setNumGuildBoosts: e$,
                            setForceDisableSubmitButton: np,
                            premiumSubscription: ey,
                            existingAvailableSlots: eT,
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
                                ns.find((e) => e !== k.pn.PLAN_SELECT && e !== k.pn.CONFIRM) ?? k.pn.REVIEW,
                            ),
                        })),
                        nS && null != ey && null != ey.paymentGateway
                            ? (e = (0, i.jsxs)("div", {
                                  className: ny.xK,
                                  children: [
                                      (0, i.jsx)(S.w, {
                                          type: "critical",
                                          children: eR.intl.format(eR.t["/m3Y3s"], {
                                              paymentGatewayName: eX.qm[ey.paymentGateway],
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
                                          className: ny.MR,
                                          children: eR.intl.string(eR.t.eAn6z2),
                                      }),
                                      e,
                                  ],
                              })),
                        (l = nE
                            ? (0, i.jsx)(g.$, {
                                  variant: "secondary",
                                  text: eR.intl.string(eR.t["ETE/oC"]),
                                  onClick: nm,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eR.intl.string(eR.t.oEAioF),
                                  onClick: nm,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(g.$, {
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
                                eS || (null != eb && eb.premiumSubscriptionType === eZ.PremiumTypes.TIER_2)
                                    ? nt(null != eN || eW ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS)
                                    : nt(k.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case k.pn.ADD_PAYMENT_STEPS:
                    break;
                case k.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(P.N, { className: ny.__invalid_body });
                    break;
                case k.pn.REVIEW:
                    r()(null != eC, "Missing nextPremiumSubscriptionPlan"),
                        r()(null != ed, "Missing guildId"),
                        (e = (0, i.jsx)(e5, {
                            guildId: ed,
                            paymentSources: eD,
                            priceOptions: a,
                            currentPremiumSubscription: ey,
                            premiumSubscriptionPaymentSourceId: eN,
                            premiumSubscriptionPlan: eC,
                            newAdditionalPlans: eQ,
                            paymentSourceId: eO,
                            setPaymentSourceId: ek,
                            onPaymentSourceAdd: () => {
                                nt(k.pn.ADD_PAYMENT_STEPS), ek(null);
                            },
                        })),
                        (t = k.pn.PLAN_SELECT);
                    let m = async () => {
                        r()(null != eQ, "Missing newAdditionalPlans");
                        let e = (0, F.W)(eD, eO);
                        eU(null);
                        try {
                            nc(B.h.PURCHASING),
                                eG(!0),
                                r()(null != eO, "Missing paymentSourceId"),
                                r()(null != ef, "Missing invoicePreview");
                            let n = { amount: ef.total, currency: ef.currency },
                                t = a.currency ?? ef.currency,
                                i = (0, ei.U8)(ey, eQ, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (en.default.track(e9.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e4,
                                    duration_ms: Date.now() - e3,
                                    guild_id: ed,
                                    application_id: eg,
                                }),
                                nT)
                            )
                                return;
                            if (null == ey || null == eb) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, f.Ky)({
                                    items: eQ,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void nv(null != l.redirectURL);
                            } else {
                                let l = { items: (0, ei.aE)(ey, eQ) };
                                (l.currency = ey.currency ?? t),
                                    (l.paymentSource = null != eN ? eD[eN] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, f.nV)(ey, l, n, i, e2);
                                if (s.redirectConfirmation) return void nv(null != s.redirectURL);
                            }
                            null == e_ && nt(k.pn.CONFIRM),
                                nc(B.h.COMPLETED),
                                null != ed && (await nf(ed, null != e_)),
                                null != e_ && nm(),
                                ep?.();
                        } catch (n) {
                            nc(B.h.FAIL),
                                eU(n),
                                en.default.track(e9.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e4,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === e9.hes.CARD ? e9.kM_.STRIPE : e9.kM_.BRAINTREE) : null,
                                    payment_source_id: eO,
                                    duration_ms: Date.now() - e3,
                                });
                        } finally {
                            nT || eG(!1);
                        }
                    };
                    (d = {
                        text: eR.intl.string(eR.t.eUEeCt),
                        loading: eB,
                        disabled: !eP || ez,
                        onClick: m,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(C.p, { ...d }));
                    break;
                case k.pn.CONFIRM:
                    let _ = u?.name ?? ev?.name,
                        y = (0, F.g)(eD, eO),
                        I = (0, es.b2)(ex.current) && null != eb && !eZ.YV.has(eb.id);
                    e = (0, i.jsx)(nu.W, {
                        guild: u,
                        guildBoostQuantity: eJ + eT.length,
                        onClose: nm,
                        withAnimation: !1,
                        paymentSourceType: y,
                        fallbackGuildName: _,
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
                          steps: ns,
                          currentStep: e7,
                          paymentError: x,
                          purchaseErrorBlockRef: eY,
                          hasCurrencies: nj.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nA, {
                              currentStep: e7,
                              isRefreshEnabled: nE,
                              backStep: t,
                              handleStepChange: nt,
                              primaryButtonProps: d,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: ny._5, children: (0, i.jsx)(m.y, {}) });
    let nR = (0, L.u)({ skuId: e8, step: e7 }),
        nD = null;
    return (eI ||
        (nE && e7 !== k.pn.PREMIUM_UPSELL
            ? (nD = e7 === k.pn.REVIEW ? (0, i.jsx)(R.s3, { ...nR }) : (0, i.jsx)(R.s3, { title: nR.title }))
            : e7 === k.pn.REVIEW
              ? (nD = (0, i.jsx)(R.s3, { ...nR }))
              : e7 !== k.pn.PREMIUM_UPSELL &&
                (nD = (0, i.jsx)(er.A, { onClose: nm, currentStep: e7, purchaseState: no }))),
    nE && e7 === k.pn.CONFIRM)
        ? (0, i.jsx)(eu.A, {
              mediaUrls: n_.mediaUrls,
              isSuccess: n_.isSuccess,
              transitionState: t,
              onClose: () => (nm(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ea.A, {
                      transitionState: t,
                      guild: K.A.getGuild(ed),
                      guildBoostQuantity: eJ + eT.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(T.e0, {
              children: (0, i.jsxs)(R.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nm(), Promise.resolve()),
                  children: [nD, n],
              }),
          });
}
function nb(e) {
    let n = (0, u.bG)([ee.A], () => ee.A.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, h.Ay)(x.A.GUILD_BOOST_PURCHASE_MODAL);
    return (0, i.jsx)(h.f5, {
        value: t,
        children: (0, i.jsx)(w.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: j.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(nN, { ...e }),
        }),
    });
}
