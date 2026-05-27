t.d(n, { default: () => nk });
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
    g = t(821609),
    S = t(820739),
    y = t(891197),
    h = t(444927),
    I = t(964486),
    P = t(793574),
    f = t(688810),
    x = t(753390),
    A = t(160946),
    E = t(606267),
    _ = t(545075),
    b = t(155506),
    N = t(981036),
    j = t(725836),
    C = t(364995),
    v = t(666646),
    T = t(584160),
    M = t(480642),
    L = t(722847),
    D = t(357669),
    R = t(832286),
    G = t(958340),
    U = t(937008),
    O = t(834252),
    k = t(166532),
    w = t(566980),
    B = t(216641),
    F = t(925847),
    V = t(253390),
    W = t(489254),
    Y = t(251913),
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
    en = t(615396),
    et = t(802790),
    ei = t(636441),
    el = t(587491),
    es = t(285753),
    er = t(735305);
function ea(e) {
    let { setBodyNode: n, setFooterNode: t } = (0, O.P5)();
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
var eu = t(61299),
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
        [m, g] = l.useState(null),
        [S, y] = l.useState([]),
        { activeSubscription: h } = (0, O.P5)(),
        I = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        P = (0, u.bG)([eo.A], () => eo.A.defaultPaymentSourceId),
        f = null != h ? h.paymentSourceId : null,
        x = (0, eu._V)(null != f ? f : I ? P : null);
    return (0, i.jsx)(ec.Provider, {
        value: {
            numGuildBoostsToPurchase: d,
            setNumGuildBoostsToPurchase: p,
            disablePremiumUpsell: t,
            closeGuildPerksModal: s,
            guildId: a,
            currency: m,
            setCurrency: g,
            currencies: S,
            setCurrencies: y,
            paymentModalArgs: x,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        },
        children: r,
    });
}
var eg = t(879100),
    eS = t(788868);
function ey(e) {
    let { handleClose: n, existingAvailableSlots: t } = e,
        { guildId: l, numGuildBoostsToPurchase: s, paymentModalArgs: r } = ed(),
        { activeSubscription: a, startingFractionalPremiumEndsAtRef: o, customCheckoutFlow: c } = (0, O.P5)(),
        d = (0, L.t4)((e) => e.paymentSourceId),
        p = (0, u.bG)([G.A], () => (null != l ? G.A.getGuild(l) : void 0), [l]),
        m = null != l ? z.A.getGuild(l) : null,
        g = (0, h.A)(() => (0, en.b2)(o.current)),
        S = (0, u.bG)([K.A], () => (null != a ? (0, en.c9)(a.planId) : null)),
        { paymentSources: y } = r,
        I = (0, B.g)(y, d),
        P = null != m ? m.name : null != p ? p.name : void 0,
        f = g && null != S && !eS.YV.has(S.id);
    return (0, i.jsx)(eg.W, {
        guild: m,
        guildBoostQuantity: s + t.length,
        onClose: n,
        withAnimation: !1,
        paymentSourceType: I,
        fallbackGuildName: P,
        didPurchaseOnFractionalPremium: f,
        customCheckoutFlow: c,
    });
}
var eh = t(683071),
    eI = t(512950),
    eP = t(87719);
let ef = (0, t(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
t(321073);
var ex = t(503698),
    eA = t.n(ex),
    eE = t(661531),
    e_ = t(990078),
    eb = t(408278),
    eN = t(834040),
    ej = t(499373),
    eC = t(834730),
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
    eW = t(531506),
    eY = t(375708),
    eH = t(51465);
function ez() {
    return (0, i.jsxs)("div", {
        className: eA()(eH.dt, eH.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: eH.qq,
            }),
            (0, i.jsx)(eC.E, {
                variant: "text-sm/medium",
                className: eH.tD,
                children: eY.intl.format(eY.t.f5VHKm, {}),
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
    e0 = t(682481),
    e1 = t(61572),
    e3 = t(717925),
    e6 = t(596034),
    e8 = t(848584),
    e5 = t(241989),
    e2 = t(908419),
    e4 = t(888751),
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
    return (0, i.jsx)(e6._, {
        variant: {
            type: e6.I.Subscription,
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
function nl(e) {
    return eY.intl.format(eY.t.IeaYqg, { endDate: e });
}
function ns(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: nt.bU }),
            (0, i.jsx)(eC.E, { variant: "text-sm/normal", className: nt.b7, children: n }),
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
                label: eY.intl.formatToPlainString(eY.t.a3cAOg, {
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
            label: eY.intl.formatToPlainString(eY.t.ZSVged, { planName: (0, X.RH)(l[0].subscriptionPlanId) }),
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
    let { lineItems: o, currency: c } = (0, e4.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e8.Vm, {
        defaultExpanded: !0,
        label: eY.intl.string(nn.default.eoXh7B),
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
            onPaymentSourceAdd: g,
        } = e,
        S = (function (e) {
            let n,
                {
                    guildId: t,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: a,
                } = e,
                o = (0, u.bG)([z.A, G.A], () => {
                    let e = z.A.getGuild(t);
                    return null != e ? e : G.A.isGuildFetching(t) ? null : G.A.getGuild(t);
                }, [t]),
                c = s.interval,
                d = s.intervalCount,
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eS.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                g = (0, ew.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: S } = (0, f.Ay)(),
                [y, h] = (0, ek.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: S,
                    analyticsLocation: P.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [I, x] = (0, ek.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: S,
                    analyticsLocation: P.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, v.OQ)({
                    checkoutInvoicePreview: y,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: I,
                    renewalInvoiceError: x,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: g,
                    checkoutInvoicePreview: y,
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
            isSubscriptionUpdate: y,
            guild: h,
            isPrepaid: I,
            isReverseTrial: x,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: _,
        } = S,
        b = (0, E.A)({ location: "GuildBoostReview", message: eY.intl.string(nn.default["tK8A/8"]) }),
        N = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == A || null == _ || null == h) return (0, i.jsx)(e3.E, {});
    let j = (0, i.jsx)(na, {
            isSubscriptionUpdate: y,
            premiumSubscription: a,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: _,
            isPrepaid: I,
            isReverseTrial: x,
            priceOptions: s,
        }),
        C = (0, i.jsx)(e0.y, {
            children: (0, i.jsx)(e1.n, {
                setPaymentSourceId: m,
                paymentSourceId: p,
                location: "GuildBoostReview",
                label: eY.intl.string(eY.t["u+Cw58"]),
                onPaymentSourceAdd: g,
                additionalPaymentSourceDropdownProps: N,
                premiumSubscriptionPaymentSourceId: o,
                hideCurrencySelect: null != o,
            }),
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
                startDate: (0, e9.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: y,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: _,
            checkoutInvoicePreview: A,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(ni, { ...T }),
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
                m = (e) => (0, e7.Z)(i.invoiceItems).find((n) => eS.pW.has(n.subscriptionPlanId) && e(n)),
                g = m((e) => e.amount >= 0);
            r()(null != g, "Missing guild boosting invoice item");
            let S = m((e) => e.amount < 0),
                y = null != S ? g.quantity - S.quantity : g.quantity,
                h = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                I = h.reduce((e, n) => e + n.amount, 0),
                P = (0, ek.sL)(g) * y,
                f = (0, eZ.$g)(P, i.currency),
                x = (0, eZ.CE)(f, d, p),
                A = (0, eZ.$g)(i.total, i.currency) + (i.currency !== ne.Yr.USD ? "*" : ""),
                E = i.subtotal - P - I,
                _ = g.discounts.map((e) => {
                    let n = e.amount / g.quantity;
                    return { ...e, amount: n * y };
                }),
                b = _.find((e) => e.type === eX.iS.SUBSCRIPTION_PLAN),
                N = _.find((e) => e.type === eX.iS.ENTITLEMENT),
                j = g.subscriptionPlanPrice * y;
            return {
                addedQuantity: y,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: f,
                formattedGuildBoostRate: x,
                formattedOriginalAmountGuildBoostRate: (0, eZ.CE)((0, eZ.$g)(j, i.currency), d, p),
                formattedTotal: A,
                basePlanAdjustment: I,
                basePlanInvoiceItems: h,
                guildBoostingAdjustment: E,
                subscriptionDiscount: b,
                entitlementDiscount: N,
                originalAmount: j,
                premiumSubscription: n,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: s,
            };
        })({
            premiumSubscription: a,
            premiumSubscriptionPlan: c,
            checkoutInvoicePreview: A,
            renewalInvoicePreview: _,
            priceOptions: s,
            reviewState: S,
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
                label: eY.intl.formatToPlainString(eY.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, X.Mn)(s.id, !1, r),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(e5.a6, {}),
                price: a,
                PriceIcon: c ? ev.t : void 0,
                priceTooltip: c ? eY.intl.string(nn.default.YUNJJa) : void 0,
                priceSubText: c ? u : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            h,
            L,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: nl(i.currentPeriodEnd) } : null;
            })({ isPrepaid: I, isReverseTrial: x, premiumSubscription: a }),
        ),
        U = (0, i.jsx)(e5.f7, { ...R });
    return (0, i.jsx)(e3.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: U,
        subscriptionDetailsContent: j,
        paymentMethodContent: C,
        invoiceSummaryContent: D,
        legalContent: M,
        invoiceTotalDueValue: L.formattedTotal,
        invoiceTotalDueLabel: eY.intl.string(nn.default.R0cZsM),
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
            (0, i.jsx)(eb.K, {
                variant: "secondary",
                size: "md",
                icon: eN.Q,
                onClick: () => {
                    c && !(u <= s) && d(u - 1);
                },
                "aria-label": eY.intl.string(eY.t["k+ohJm"]),
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
            (0, i.jsx)(eb.K, {
                variant: "secondary",
                size: "md",
                icon: ej.T,
                onClick: () => {
                    c && !(u >= r) && d(u + 1);
                },
                "aria-label": eY.intl.string(eY.t.w8Sc4B),
                disabled: !c || u >= r,
            }),
        ],
    });
}
function nm(e) {
    let { message: n } = e;
    return (0, i.jsx)(eC.E, { variant: "text-xs/normal", color: "text-muted", className: nc.jH, children: n });
}
function ng(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: nc.Vk,
        children: [
            (0, i.jsx)("div", {
                className: nc.D0,
                children: (0, i.jsx)(ev.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: nc.ue,
                    color: eO.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: nc.yP, children: n }),
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
        discountCallout: g,
        refreshDiscountCallout: S,
        legacyPricingNotes: y,
        refreshPricingNotes: h,
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
                            (0, i.jsx)(eT.l, {
                                value: t,
                                onChange: (e) => s(e),
                                className: nt.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: nt.$0, children: r }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eA()(nt.QK, { [nt.S]: n }), children: a }),
                ],
            }),
            (0, i.jsx)("div", { className: nt.J3 }),
            (0, i.jsxs)("div", {
                className: nt.mP,
                children: [
                    (0, i.jsx)("div", { className: nt.xp, children: eY.intl.string(eY.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: eA()(nt.__invalid_planSelectorSubtotalPrice, { [nt.S]: n }),
                        children: u,
                    }),
                ],
            }),
            y.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            g,
        ],
    });
}
function ny(e) {
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
        existingSlotNotice: g,
        discountCallout: S,
        refreshDiscountCallout: y,
        legacyPricingNotes: h,
        refreshPricingNotes: I,
    } = e;
    return (0, i.jsxs)("div", {
        className: nc.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: nc.K3,
                children: [
                    (0, i.jsx)(eC.E, {
                        variant: "text-md/medium",
                        className: nc.bk,
                        children: eY.intl.string(eY.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eM._, { className: nc.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(eC.E, { variant: "text-md/medium", className: nc.kX, children: r }),
                ],
            }),
            p,
            g,
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
                            (0, i.jsx)(eC.E, { variant: "text-md/medium", className: nc.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eA()(nc.El, { [nt.S]: n }), children: u }),
                ],
            }),
            y,
            (0, i.jsxs)("div", {
                className: nc.fh,
                children: [
                    (0, i.jsx)(eL.D, {
                        variant: "heading-lg/semibold",
                        className: nc.O3,
                        children: eY.intl.string(eY.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: eA()(nc.BU, { [nt.S]: n }), children: c }),
                ],
            }),
            I.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function nh(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: nt.Mv,
        children: [
            (0, i.jsx)(eD._, { className: nt.T5, color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    eY.intl.format(eY.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(e_.m, {
                              text: eY.intl.formatToPlainString(eY.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(eR.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: nt.Y5,
                                  color: eE.A.unsafe_rawColors.YELLOW_300.css,
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
            isRefreshEnabled: g = !1,
            showRefreshSubtotalRate: S = !1,
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
                    priceOptions: g,
                    showRefreshSubtotalRate: S,
                } = e,
                y =
                    ((n = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription())),
                    (0, u.bG)([eo.A], () =>
                        n?.paymentSourceId != null ? eo.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                h = s.interval,
                I = s.intervalCount,
                x = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(eS.pe.GUILD), h, I)),
                A = (0, u.bG)([eK.default], () => eK.default.getCurrentUser()),
                E = (0, eU.A)({ forceFetch: !1 });
            r()(null != x, "Missing guildBoostingSubscriptionPlan");
            let _ = [{ planId: x.id, quantity: 1 }],
                b = c?.items.find(
                    (e) => e.planId === eS.gD.PREMIUM_MONTH_TIER_2 || e.planId === eS.gD.PREMIUM_YEAR_TIER_2,
                );
            null != b && _.push(b);
            let N = c?.items.find(
                    (e) => e.planId === eS.gD.PREMIUM_MONTH_GUILD || e.planId === eS.gD.PREMIUM_YEAR_GUILD,
                ),
                j = null == y || !eS.uJ.has(y) || null == N,
                { analyticsLocations: C } = (0, f.Ay)(),
                [T, M] = (0, ek.YV)({
                    subscriptionId: c?.id,
                    items: _,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: g.currency,
                    preventFetch: j,
                    analyticsLocations: C,
                    analyticsLocation: P.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, v.Tr)(T, M);
            let L = !j && null == T && null == M;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let D = (0, eF.V)()?.subscription_trial?.sku_id === eS.pe.TIER_2,
                R = X.Ay.hasBoostDiscount(A),
                G = R && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), eS.PremiumTypes.TIER_1),
                U = T?.findInvoiceItemByPlanId(x.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: T.currency }
                        : X.Ay.getPrice(x.id, R, !1, g),
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
                  (t = eY.intl.format(eY.t.hf6YOY, { planName: X.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (t = eY.intl.format("upsell_trial" === B.upsellVariant ? eY.t.ba1L74 : eY.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eQ.l9)(eJ.default.locale, eS.oX / 100),
                      freeSubscriptionCount: eS.M4,
                  }));
            let F = p.filter((e) => (0, Z.I5)(e)).length,
                V = (0, X.J$)(g.paymentSourceId),
                { ipCountryCode: W } = (0, eB.A)(),
                Y = "HR" === W && O.currency === ne.Yr.EUR,
                H =
                    w && null != c
                        ? (0, i.jsx)(ns, { text: nl(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: eA()(nt.hA, nt.G3), children: eY.intl.string(eY.t.jNY1FO) }),
                z =
                    w && null != c
                        ? (0, i.jsx)(ns, { text: nl(c.currentPeriodEnd), className: nt.jk })
                        : (0, i.jsx)("div", { className: nc._X, children: eY.intl.string(eY.t.jNY1FO) }),
                $ = B.showExistingSlotNotice
                    ? (0, i.jsx)(nh, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eW.vi, { fractionalPremiumInfo: E }) : null,
                Q = V
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === eS.WT.YEAR
                              ? eY.intl.string(eY.t.YDpAzZ)
                              : n === eS.WT.MONTH && 1 === t
                                ? eY.intl.string(eY.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: I }) ?? eY.intl.string(eY.t.K9Bmze))
                    : eY.intl.string(eY.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : V
                      ? (0, eZ.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eZ.$g)(n, t);
                            return i === eS.WT.YEAR
                                ? eY.intl.formatToPlainString(eY.t["8M04YJ"], { price: s })
                                : i === eS.WT.MONTH && 1 === l
                                  ? eY.intl.formatToPlainString(eY.t.VStWCR, { price: s })
                                  : i === eS.WT.MONTH && l > 1
                                    ? eY.intl.formatToPlainString(eY.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: h, intervalCount: I, amount: O.amount, currency: O.currency }),
                en = L
                    ? (0, i.jsx)(m.y, {})
                    : (0, i.jsx)(eV.A, {
                          price: k,
                          currency: O.currency,
                          intervalType: h,
                          intervalCount: I,
                          isPrepaidPaymentSource: V,
                      }),
                et = L
                    ? (0, i.jsx)(m.y, {})
                    : S && !V
                      ? (0, eZ.CE)((0, eZ.$g)(k, O.currency), h, I)
                      : (0, eZ.$g)(k, O.currency),
                ei = [],
                el = [];
            if (Y) {
                let e = (0, i.jsx)(
                    eG.A,
                    {
                        message: eY.intl.formatToPlainString(eY.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, eZ.$g)(7.5345 * k, ne.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ei.push(e), el.push(e);
            }
            let es = eY.intl.format(eY.t.Om31w8, { documentationLink: eq.A.getArticleURL(no.MVz.LOCALIZED_PRICING) });
            return (
                ei.push((0, i.jsx)(eG.A, { message: es }, "localized-pricing")),
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
                            ? (0, i.jsx)(ez, {})
                            : (0, i.jsx)(e$, { text: t, color: eO.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === B.upsellVariant ? (0, i.jsx)(ez, {}) : (0, i.jsx)(ng, { text: t }),
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
            showRefreshSubtotalRate: S,
        });
    return (0, i.jsx)(g ? ny : nS, {
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
let nP = eS.gD.NONE_MONTH;
var nf = t(898640);
function nx(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        { activeSubscription: s } = (0, O.P5)(),
        {
            numGuildBoostsToPurchase: a,
            setNumGuildBoostsToPurchase: o,
            guildId: c,
            currency: d,
            closeGuildPerksModal: p,
        } = ed(),
        m = (0, L.t4)((e) => e.paymentSourceId),
        g = (0, h.A)(() => (0, Z.D$)($.A.boostSlots)),
        S = (0, W.n)("GuildBoostPurchaseModal"),
        y = ef.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        I = S && y,
        P = (0, u.bG)([G.A], () => (null != c ? G.A.getGuild(c) : void 0), [c]),
        f = null != c ? z.A.getGuild(c) : null,
        x = null != s && s.isPurchasedExternally,
        A = (0, u.bG)([K.A], () => (null != s ? (0, en.c9)(s.planId) : null)),
        E = (0, u.bG)([K.A], () => (null == A ? K.A.get(nP) : A));
    r()(null != c, "Missing guildId"), r()(null != E, "Missing nextPremiumSubscriptionPlan");
    let _ = (0, i.jsx)(nI, {
        premiumSubscriptionPlan: E,
        numGuildBoosts: a,
        setNumGuildBoosts: o,
        setForceDisableSubmitButton: t,
        premiumSubscription: s,
        existingAvailableSlots: g,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            n(), null != p && p(), (0, eP.e)();
        },
        priceOptions:
            null != m ? { paymentSourceId: m, currency: null != d ? d : void 0 } : { currency: null != d ? d : void 0 },
        isRefreshEnabled: S,
        showRefreshSubtotalRate: I,
        refreshNextStepLabel: l,
    });
    return (
        x && null != s && null != s.paymentGateway
            ? (_ = (0, i.jsxs)("div", {
                  className: nf.xK,
                  children: [
                      (0, i.jsx)(eh.w, {
                          type: "critical",
                          children: eY.intl.format(eY.t["/m3Y3s"], { paymentGatewayName: ne.qm[s.paymentGateway] }),
                      }),
                      _,
                  ],
              }))
            : null == c ||
              G.A.isGuildFetching(c) ||
              null != P ||
              null != f ||
              (_ = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eI.p, {
                          messageType: eI.Y.ERROR,
                          className: nf.MR,
                          children: eY.intl.string(eY.t.eAn6z2),
                      }),
                      _,
                  ],
              })),
        _
    );
}
var nA = t(460905),
    nE = t(183623),
    n_ = t(95635),
    nb = t(935462),
    nN = t(532794),
    nj = t(811611),
    nC = t(901017),
    nv = t(403052);
function nT(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eJ.default], () => eJ.default.locale);
    return (0, i.jsxs)("div", {
        className: nv.mH,
        children: [
            (0, i.jsx)(nC.A, {
                icon: eD._,
                iconClassName: nv.pl,
                description: eY.intl.formatToPlainString(eY.t.sQBgs2, { numFreeGuildSubscriptions: eS.M4 }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nC.A, {
                icon: eD._,
                iconClassName: nv.pl,
                description: eY.intl.formatToPlainString(eY.t["1A6vXi"], { percent: (0, eQ.l9)(t, eS.oX / 100) }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nC.A, { icon: nA.n, iconClassName: nv.zO, description: eY.intl.string(eY.t.Z9b2x2) }) : null,
            (0, i.jsx)(nC.A, { icon: nE.F, iconClassName: nv.Kg, description: eY.intl.string(eY.t["8dqG5E"]) }),
            (0, i.jsx)(nC.A, { icon: n_.J, iconClassName: nv.$z, description: eY.intl.string(eY.t.cBorIy) }),
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
            priceOptions: S,
        } = e,
        { analyticsLocations: y, sourceAnalyticsLocations: h } = (0, f.Ay)(P.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        I = null == n || null == n.premiumSubscriptionType,
        x = X.Ay.getPrice(eS.gD.PREMIUM_MONTH_TIER_2, !1, !1, S),
        A = (0, eZ.$g)(x.amount, x.currency),
        E = (0, eF.V)(),
        _ = E?.trial_id,
        b = E?.subscription_trial?.sku_id === eS.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(no.HAw.PREMIUM_UPSELL_VIEWED, { type: eS.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nb.s_, { "data-migration-pending": !0, onClick: t, className: nv.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        b && (0, i.jsx)(nj.Vq, { className: nv.Fg }),
                        (0, i.jsx)("div", { className: eA()(nv.Tn, { [nv.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: nv.G3,
                            children:
                                null != _
                                    ? eY.intl.string(eY.t.AoSzEr)
                                    : eY.intl.format(eY.t["7vePZb"], { monthlyPrice: A }),
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
                                    (0, i.jsx)(g.$, {
                                        variant: "active",
                                        text: null != _ ? eY.intl.string(eY.t["Gd/XHF"]) : eY.intl.string(eY.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, nN.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: eS.pe.TIER_2,
                                                    analyticsLocations: y,
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
        { activeSubscription: a } = (0, O.P5)(),
        { currency: o, paymentModalArgs: c, analyticsLocation: d, analyticsSourceLocation: p } = ed(),
        m = (0, L.t4)((e) => e.paymentSourceId),
        g = (0, u.bG)([K.A], () => (null != a ? (0, en.c9)(a.planId) : null)),
        S = (0, u.bG)([K.A], () => (null == g ? K.A.get(nP) : g));
    r()(null != S, "Missing nextPremiumSubscriptionPlan"), r()(null != o && "" !== o, "Currency not defined");
    let { paymentSources: y } = c,
        h = null != a ? a.paymentSourceId : null,
        I = Object.keys(y).length > 0,
        P = l.useCallback(() => t(k.pn.PLAN_SELECT), [t]),
        f = l.useCallback(() => t(null != h || I ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS), [t, h, I]);
    return (0, i.jsx)(nM, {
        premiumSubscriptionPlan: S,
        analyticsLocation: d,
        analyticsSourceLocation: p,
        onClose: n,
        onBack: P,
        onSkip: f,
        onSubscriptionConfirmation: s,
        priceOptions: null != m ? { paymentSourceId: m, currency: o } : { currency: o },
    });
}
let nD = [k.pn.PLAN_SELECT, k.pn.REVIEW, k.pn.CONFIRM],
    nR = [k.pn.PLAN_SELECT, k.pn.ADD_PAYMENT_STEPS, k.pn.REVIEW, k.pn.CONFIRM];
async function nG(e, n) {
    await (0, S.CD)();
    let t = (0, Z.D$)($.A.boostSlots);
    return (0, S.VA)(
        e,
        t.map((e) => e.id),
        n,
    );
}
function nU(e) {
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
function nO(e) {
    let n,
        {
            transitionState: t,
            onClose: s,
            analyticsLocations: o,
            analyticsLocation: d,
            analyticsSourceLocation: S,
            guildId: U,
            onSubscribeComplete: er,
            onSubscriptionConfirmation: eu,
            applicationId: eo,
            intent: ec,
        } = e,
        {
            numGuildBoostsToPurchase: ep,
            currency: em,
            setCurrency: eg,
            currencies: eh,
            setCurrencies: eI,
            paymentModalArgs: eP,
            disablePremiumUpsell: ef,
        } = ed(),
        { activeSubscription: ex, blockedPayments: eA, customCheckoutFlow: eE } = (0, O.P5)(),
        e_ = (0, L.t4)((e) => e.hasAcceptedTerms),
        eb = (0, E.A)({ location: "GuildBoostPurchaseModal", message: eY.intl.string(nn.default["tK8A/8"]) }),
        eN = (0, v.sw)(),
        ej = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        eC = null != ex ? ex.paymentSourceId : null,
        ev = (0, u.bG)([K.A], () => (null != ex ? (0, en.c9)(ex.planId) : null)),
        eT = (0, u.bG)([K.A], () => null == ex || null != K.A.get(ex.planId)),
        eM = (0, u.bG)([K.A], () => (null == ev ? K.A.get(nP) : ev)),
        eL = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        eD = (0, u.bG)([G.A], () => (null != U ? G.A.getGuild(U) : void 0), [U]),
        {
            paymentSources: eR,
            setIsSubmittingCurrentStep: eG,
            paymentAuthenticationState: eU,
            isSubmittingCurrentStep: eO,
            paymentError: ek,
            purchaseErrorBlockRef: ew,
        } = eP,
        {
            paymentSourceId: eB,
            setPaymentSourceId: eF,
            setPurchaseError: eV,
        } = (0, L.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            setPurchaseError: e.setPurchaseError,
        })),
        eW = Object.keys(eR).length > 0,
        { checkoutPaymentSources: eH } = (0, C.t)(),
        ez = (0, E.iB)({ checkoutPaymentSources: eH, paymentSourceId: eB, location: "GuildBoostPurchaseModal" }),
        e$ = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        eJ = (0, A.Y)(),
        eK = l.useMemo(
            () => (null != ex && eT && eJ ? (0, V.v)(ex, ep) : [{ planId: eS.gD.PREMIUM_MONTH_GUILD, quantity: ep }]),
            [ex, eT, ep, eJ],
        ),
        eq = l.useMemo(() => (0, F.A)(), []),
        [eQ, eZ] = (0, h.A)(() => [eq ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eX } = (0, f.Ay)(o, P.A.GUILD_BOOST_PURCHASE_MODAL),
        e0 = l.useMemo(
            () =>
                eK.find((e) => {
                    let { planId: n } = e;
                    return eS.pW.has(n);
                })?.planId ?? eS.gD.PREMIUM_MONTH_GUILD,
            [eK],
        ),
        e1 = (0, u.bG)([K.A], () => K.A.get(e0)?.skuId, [e0]),
        e3 = l.useMemo(
            () => ({
                load_id: eQ,
                payment_type: ne.fr[ne.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(eS.pe.GUILD),
                subscription_type: no.rzx.PREMIUM,
                subscription_plan_id: e0,
                quantity: ep,
                location: d,
                source: S,
                location_stack: eX,
                checkout_flow: b.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
                guild_id: U,
            }),
            [eQ, d, eX, S, U, ep, e0],
        ),
        e6 = l.useMemo(() => {
            let { guild_id: e, ...n } = e3;
            return n;
        }, [e3]);
    l.useEffect(() => {
        (0, ee.c_)(eB);
    }, [eB]);
    let [e8, e5] = l.useState(k.pn.PLAN_SELECT),
        e2 = l.useMemo(() => Date.now(), [e8]),
        e4 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e5(e), eV(null);
                let i = Date.now();
                Q.default.track(no.HAw.PAYMENT_FLOW_STEP, {
                    ...e3,
                    from_step: null != t ? t : e8,
                    to_step: e === k.pn.ADD_PAYMENT_STEPS ? k.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e2,
                    flow_duration_ms: i - eZ,
                    guild_id: U,
                    application_id: eo,
                });
            },
            [eV, e3, e8, e2, eZ, U, eo],
        ),
        e7 = {
            paymentFlowFailedAnalyticsData: e6,
            flowStartTime: eZ,
            guildId: U,
            handleStepChange: e4,
            onSubscribeComplete: er,
            paymentSourceId: eB,
            setIsSubmittingCurrentStep: eG,
            setPurchaseError: eV,
        },
        e9 = l.useRef(e7);
    l.useEffect(() => {
        e9.current = e7;
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
            } = e9.current;
            (async () => {
                if (!0 === e$)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, x.tn)(J.A.redirectedPaymentId),
                            i(k.pn.CONFIRM),
                            ns(w.h.COMPLETED),
                            null != t && (await nG(t, null != ec)),
                            l?.();
                    } catch (t) {
                        ns(w.h.FAIL),
                            a(t),
                            Q.default.track(no.HAw.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: t?.code,
                                payment_gateway: no.kM_.STRIPE,
                                payment_source_id: s,
                                duration_ms: Date.now() - n,
                            });
                    } finally {
                        r(!1), (0, x.bl)();
                    }
            })();
        }, [e$, ec]),
        (0, I.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, x.hP)(),
                null == U ||
                    null != z.A.getGuild(U) ||
                    null != G.A.getGuild(U) ||
                    G.A.isGuildFetching(U) ||
                    (0, R.y)(U),
                (0, D.b)({ ...e3, guild_id: U, application_id: eo, custom_checkout_flow: eE }),
                null != ex &&
                    null != ex.renewalMutations &&
                    Q.default.track(no.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: U });
        });
    let [nt, ni] = l.useState(nD),
        [nl, ns] = l.useState(w.h.WAITING),
        nr = () => {
            s(nl === w.h.COMPLETED);
        },
        na = null != ex && ex.isPurchasedExternally;
    l.useEffect(() => {
        eU !== Y.oc.PENDING &&
            e8 !== k.pn.CONFIRM &&
            null != eC &&
            (nt !== nD && ni(nD), nD.includes(e8) || e8 === k.pn.PREMIUM_UPSELL || e4(k.pn.REVIEW)),
            e8 === k.pn.ADD_PAYMENT_STEPS && nt !== nR && ni(nR),
            na && e8 !== k.pn.PLAN_SELECT && e5(k.pn.PLAN_SELECT);
    }, [e8, e4, na, eU, ex, eC, nt]),
        (0, Y.b)(e8, eU, e4, ns),
        (0, k.zT)(e8, nl, ns);
    let nc = (0, W.n)("GuildBoostPurchaseModal"),
        nd = nc && (e8 === k.pn.REVIEW || e8 === k.pn.CONFIRM),
        np = (0, es.A)(nd),
        [nm, ng] = l.useState(!1),
        [nS, ny] = l.useState(!0),
        nh = l.useMemo(() => JSON.stringify(eh), [eh]);
    if (
        (l.useEffect(() => {
            let e;
            eJ &&
                (null != K.A.get(eS.gD.PREMIUM_MONTH_GUILD) && eI((e = (0, ee._w)(eS.gD.PREMIUM_MONTH_GUILD, eB, !1))),
                null == eB && null != ex && null != ex.paymentSourceId ? eg(ex.currency) : null != e && eg(e[0]));
        }, [eB, ex, eJ, nh, eg, eI]),
        eA)
    )
        n = (0, i.jsx)(_.oO, {});
    else if (ej && eT && eJ && null != em && "" !== em)
        if (ex?.isPausedOrPausePending && !ex.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nf.C, children: eY.intl.string(eY.t.mOWsF1) }),
            });
        else if (null != ex && null != ex.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nf.C, children: eY.intl.string(eY.t.npfhh0) }),
            });
        else if (e8 === k.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nL, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: nr,
                handleStepChange: e4,
                analyticsData: e3,
                setAnalyticsData: ne.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: eu,
            });
        else {
            let e, t, l, s;
            r()(em, "Currency not defined");
            let a = null != eB ? { paymentSourceId: eB, currency: em } : { currency: em },
                u = z.A.getGuild(U),
                o = null;
            switch (e8) {
                case k.pn.PLAN_SELECT:
                    r()(null != U, "Missing guildId"),
                        (e = (0, i.jsx)(nx, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: nr,
                            handleStepChange: e4,
                            analyticsData: e3,
                            setAnalyticsData: ne.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: ny,
                            refreshNextStepLabel: (0, k.Ir)(
                                nt.find((e) => e !== k.pn.PLAN_SELECT && e !== k.pn.CONFIRM) ?? k.pn.REVIEW,
                            ),
                        })),
                        (l = nc
                            ? (0, i.jsx)(g.$, {
                                  variant: "secondary",
                                  text: eY.intl.string(eY.t["ETE/oC"]),
                                  onClick: nr,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eY.intl.string(eY.t.oEAioF),
                                  onClick: nr,
                                  variant: "secondary",
                              })),
                        (s = (0, i.jsx)(g.$, {
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
                                forceDisableSubmitButton: nS,
                                numGuildBoostsToPurchase: ep,
                                isDisabledBecauseExternalSubscription: na,
                                isMissingGuildInformation: null == eD && null == u,
                            }),
                            onClick: () => {
                                ef || (null != ev && ev.premiumSubscriptionType === eS.PremiumTypes.TIER_2)
                                    ? e4(null != eC || eW ? k.pn.REVIEW : k.pn.ADD_PAYMENT_STEPS)
                                    : e4(k.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case k.pn.ADD_PAYMENT_STEPS:
                    break;
                case k.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(y.N, { className: nf.__invalid_body });
                    break;
                case k.pn.REVIEW:
                    r()(null != eM, "Missing nextPremiumSubscriptionPlan"),
                        r()(null != U, "Missing guildId"),
                        (e = (0, i.jsx)(nu, {
                            guildId: U,
                            paymentSources: eR,
                            priceOptions: a,
                            currentPremiumSubscription: ex,
                            premiumSubscriptionPaymentSourceId: eC,
                            premiumSubscriptionPlan: eM,
                            newAdditionalPlans: eK,
                            paymentSourceId: eB,
                            setPaymentSourceId: eF,
                            onPaymentSourceAdd: () => {
                                e4(k.pn.ADD_PAYMENT_STEPS), eF(null);
                            },
                        })),
                        (t = k.pn.PLAN_SELECT);
                    let c = async () => {
                        r()(null != eK, "Missing newAdditionalPlans");
                        let e = (0, B.W)(eR, eB);
                        eV(null);
                        try {
                            ns(w.h.PURCHASING),
                                eG(!0),
                                r()(null != eB, "Missing paymentSourceId"),
                                r()(null != eN, "Missing invoicePreview");
                            let n = { amount: eN.total, currency: eN.currency },
                                t = a.currency ?? eN.currency,
                                i = (0, X.U8)(ex, eK, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(no.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...e3,
                                    duration_ms: Date.now() - eZ,
                                    guild_id: U,
                                    application_id: eo,
                                }),
                                nm)
                            )
                                return;
                            if (null == ex || null == ev) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, x.Ky)({
                                    items: eK,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void ng(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(ex, eK) };
                                (l.currency = ex.currency ?? t),
                                    (l.paymentSource = null != eC ? eR[eC] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, x.nV)(ex, l, n, i, eX);
                                if (s.redirectConfirmation) return void ng(null != s.redirectURL);
                            }
                            null == ec && e4(k.pn.CONFIRM),
                                ns(w.h.COMPLETED),
                                null != U && (await nG(U, null != ec)),
                                null != ec && nr(),
                                er?.();
                        } catch (n) {
                            ns(w.h.FAIL),
                                eV(n),
                                Q.default.track(no.HAw.PAYMENT_FLOW_FAILED, {
                                    ...e6,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === no.hes.CARD ? no.kM_.STRIPE : no.kM_.BRAINTREE) : null,
                                    payment_source_id: eB,
                                    duration_ms: Date.now() - eZ,
                                });
                        } finally {
                            nm || eG(!1);
                        }
                    };
                    (o = {
                        text: eY.intl.string(eY.t.eUEeCt),
                        loading: eO,
                        disabled: null == eB || !e_ || null != eb || ez,
                        onClick: c,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(N.p, { ...o }));
                    break;
                case k.pn.CONFIRM:
                    e = (0, i.jsx)(ey, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nr,
                        handleStepChange: e4,
                        analyticsData: e3,
                        setAnalyticsData: ne.tE,
                        skipConfirm: !1,
                        existingAvailableSlots: eL,
                    });
            }
            let d = null != ek && null == (0, k.ou)(ek) ? ek : null;
            n =
                e8 === k.pn.ADD_PAYMENT_STEPS
                    ? (0, i.jsx)(ea, {
                          subscriptionTier: null,
                          planGroup: [],
                          initialPlanId: null,
                          handleClose: nr,
                          handleStepChange: e4,
                          analyticsData: e3,
                          setAnalyticsData: ne.tE,
                          skipConfirm: !1,
                      })
                    : (0, i.jsx)(H.A, {
                          shouldUseManaModal: !0,
                          hideBreadcrumbs: (function (e) {
                              let { currentStep: n, isBoostingPreCheckoutModalRefreshEnabled: t } = e;
                              return n === k.pn.REVIEW || n === k.pn.CONFIRM || (t && n === k.pn.PLAN_SELECT);
                          })({ currentStep: e8, isBoostingPreCheckoutModalRefreshEnabled: nc }),
                          steps: nt,
                          currentStep: e8,
                          paymentError: d,
                          purchaseErrorBlockRef: ew,
                          hasCurrencies: eh.length > 1,
                          body: e,
                          footer: (0, i.jsx)(nU, {
                              currentStep: e8,
                              isRefreshEnabled: nc,
                              backStep: t,
                              handleStepChange: e4,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nf._5, children: (0, i.jsx)(m.y, {}) });
    let nI = (0, T.u)({ skuId: e1, step: e8 }),
        nA = null;
    return (eA ||
        (nc && e8 !== k.pn.PREMIUM_UPSELL
            ? (nA = e8 === k.pn.REVIEW ? (0, i.jsx)(M.s3, { ...nI }) : (0, i.jsx)(M.s3, { title: nI.title }))
            : e8 === k.pn.REVIEW
              ? (nA = (0, i.jsx)(M.s3, { ...nI }))
              : e8 !== k.pn.PREMIUM_UPSELL &&
                (nA = (0, i.jsx)(et.A, { onClose: nr, currentStep: e8, purchaseState: nl }))),
    nc && e8 === k.pn.CONFIRM)
        ? (0, i.jsx)(el.A, {
              mediaUrls: np.mediaUrls,
              isSuccess: np.isSuccess,
              transitionState: t,
              onClose: () => (nr(), Promise.resolve()),
              children: (e, n) =>
                  (0, i.jsx)(ei.A, {
                      transitionState: t,
                      guild: z.A.getGuild(U),
                      guildBoostQuantity: ep + eL.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(j.e0, {
              children: (0, i.jsxs)(M.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nr(), Promise.resolve()),
                  children: [nA, n],
              }),
          });
}
function nk(e) {
    let {
            totalNumberOfSlotsToAssign: n = 1,
            disablePremiumUpsell: t,
            closeGuildPerksModal: l,
            guildId: s,
            analyticsLocation: r,
            analyticsSourceLocation: a,
        } = e,
        o = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription()),
        { analyticsLocations: c } = (0, f.Ay)(P.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, h.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(f.f5, {
        value: c,
        children: (0, i.jsx)(O.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: nw,
            skuIDs: [],
            unifiedCheckoutFlow: b.CL.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(U.Mq, {
                children: (0, i.jsx)(em, {
                    initialNumGuildBoostsToPurchase: d,
                    disablePremiumUpsell: t,
                    closeGuildPerksModal: l,
                    guildId: s ?? null,
                    analyticsLocation: r,
                    analyticsSourceLocation: a,
                    children: (0, i.jsx)(nO, { ...e }),
                }),
            }),
        }),
    });
}
let nw = [{ key: k.pn.ADD_PAYMENT_STEPS, renderStep: () => (0, i.jsx)("div", {}) }];
