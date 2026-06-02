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
    y = t(820739),
    g = t(891197),
    h = t(444927),
    I = t(964486),
    f = t(793574),
    P = t(688810),
    A = t(753390),
    x = t(86379),
    E = t(160946),
    _ = t(606267),
    b = t(545075),
    C = t(813730),
    N = t(981036),
    v = t(725836),
    j = t(364995),
    T = t(666646),
    M = t(584160),
    L = t(480642),
    D = t(722847),
    R = t(357669),
    G = t(832286),
    U = t(958340),
    O = t(259160),
    k = t(424297),
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
        [y, g] = l.useState([]),
        h = (0, D.t4)((e) => e.activeSubscription),
        I = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        f = (0, u.bG)([eo.A], () => eo.A.defaultPaymentSourceId),
        P = null != h ? h.paymentSourceId : null,
        A = (0, eu._V)(null != P ? P : I ? f : null);
    return (0, i.jsx)(ec.Provider, {
        value: {
            numGuildBoostsToPurchase: d,
            setNumGuildBoostsToPurchase: p,
            disablePremiumUpsell: t,
            closeGuildPerksModal: s,
            guildId: a,
            currency: m,
            setCurrency: S,
            currencies: y,
            setCurrencies: g,
            paymentModalArgs: A,
            premiumSubscriptionPaymentSourceId: P,
            analyticsLocation: o,
            analyticsSourceLocation: c,
        },
        children: r,
    });
}
var eS = t(879100),
    ey = t(788868);
function eg(e) {
    let { handleClose: n, existingAvailableSlots: t } = e,
        { guildId: l, numGuildBoostsToPurchase: s, paymentModalArgs: r } = ed(),
        { startingFractionalPremiumEndsAtRef: a } = (0, k.P5)(),
        {
            paymentSourceId: o,
            activeSubscription: c,
            customCheckoutFlow: d,
        } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
        })),
        p = (0, u.bG)([U.A], () => (null != l ? U.A.getGuild(l) : void 0), [l]),
        m = null != l ? z.A.getGuild(l) : null,
        S = (0, h.A)(() => (0, ea.b2)(a.current)),
        y = (0, u.bG)([K.A], () => (null != c ? (0, ea.c9)(c.planId) : null)),
        { paymentSources: g } = r,
        I = (0, F.g)(g, o),
        f = null != m ? m.name : null != p ? p.name : void 0,
        P = S && null != y && !ey.YV.has(y.id);
    return (0, i.jsx)(eS.W, {
        guild: m,
        guildBoostQuantity: s + t.length,
        onClose: n,
        withAnimation: !1,
        paymentSourceType: I,
        fallbackGuildName: f,
        didPurchaseOnFractionalPremium: P,
        customCheckoutFlow: d,
    });
}
var eh = t(683071),
    eI = t(512950),
    ef = t(87719);
let eP = (0, t(240921).Ay)({
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
    eC = t(834040),
    eN = t(499373),
    ev = t(834730),
    ej = t(403581),
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
            (0, i.jsx)(ev.E, {
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
        children: [(0, i.jsx)(ej.t, { size: "md", className: eH.YW, color: t }), (0, i.jsx)("div", { children: n })],
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
    e4 = t(848584),
    e6 = t(241989),
    e8 = t(908419),
    e2 = t(888751),
    e5 = t(874638),
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
        { immediateDelivery: u } = (0, e8.U)();
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
            (0, i.jsx)(ev.E, { variant: "text-sm/normal", className: nn.b7, children: n }),
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
    let { lineItems: o, currency: c } = (0, e2.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...o, ...u];
    return (0, i.jsx)(e4.Vm, {
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
        y = (function (e) {
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
                p = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(ey.pe.GUILD), c, d));
            r()(null != p, "Missing guildBoostingSubscriptionPlan");
            let m = (0, X.J$)(i.paymentSourceId),
                S = (0, ew.ds)();
            n = null != l ? (0, X.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: y } = (0, P.Ay)(),
                [g, h] = (0, ek.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: y,
                    analyticsLocation: f.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [I, A] = (0, ek.YV)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: y,
                    analyticsLocation: f.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, T.OQ)({
                    checkoutInvoicePreview: g,
                    checkoutInvoiceError: h,
                    renewalInvoicePreview: I,
                    renewalInvoiceError: A,
                }),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: m,
                    isReverseTrial: S,
                    checkoutInvoicePreview: g,
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
            isSubscriptionUpdate: g,
            guild: h,
            isPrepaid: I,
            isReverseTrial: A,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: E,
        } = y,
        b = (0, _.A)({ location: "GuildBoostReview", message: eW.intl.string(ne.default["tK8A/8"]) }),
        C = l.useMemo(() => ({ shouldUseUnifiedCheckoutUI: !0 }), []);
    if (null == x || null == E || null == h) return (0, i.jsx)(e1.E, {});
    let N = (0, i.jsx)(nr, {
            isSubscriptionUpdate: g,
            premiumSubscription: a,
            checkoutInvoicePreview: x,
            renewalInvoicePreview: E,
            isPrepaid: I,
            isReverseTrial: A,
            priceOptions: s,
        }),
        v = (0, i.jsx)(e0.n, {
            setPaymentSourceId: m,
            paymentSourceId: p,
            location: "GuildBoostReview",
            label: eW.intl.string(eW.t["u+Cw58"]),
            onPaymentSourceAdd: S,
            additionalPaymentSourceDropdownProps: C,
            premiumSubscriptionPaymentSourceId: o,
            hideCurrencySelect: null != o,
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
                startDate: (0, e7.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: g,
            premiumSubscriptionPlan: c,
            renewalInvoicePreview: E,
            checkoutInvoicePreview: x,
            paymentSources: t,
            paymentSourceId: p,
        }),
        M = (0, i.jsx)(nt, { ...j }),
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
                m = (e) => (0, e5.Z)(i.invoiceItems).find((n) => ey.pW.has(n.subscriptionPlanId) && e(n)),
                S = m((e) => e.amount >= 0);
            r()(null != S, "Missing guild boosting invoice item");
            let y = m((e) => e.amount < 0),
                g = null != y ? S.quantity - y.quantity : S.quantity,
                h = i.invoiceItems.filter((e) => (0, X.xq)(e.subscriptionPlanId)),
                I = h.reduce((e, n) => e + n.amount, 0),
                f = (0, ek.sL)(S) * g,
                P = (0, eZ.$g)(f, i.currency),
                A = (0, eZ.CE)(P, d, p),
                x = (0, eZ.$g)(i.total, i.currency) + (i.currency !== e9.Yr.USD ? "*" : ""),
                E = i.subtotal - f - I,
                _ = S.discounts.map((e) => {
                    let n = e.amount / S.quantity;
                    return { ...e, amount: n * g };
                }),
                b = _.find((e) => e.type === eX.iS.SUBSCRIPTION_PLAN),
                C = _.find((e) => e.type === eX.iS.ENTITLEMENT),
                N = S.subscriptionPlanPrice * g;
            return {
                addedQuantity: g,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: P,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, eZ.CE)((0, eZ.$g)(N, i.currency), d, p),
                formattedTotal: x,
                basePlanAdjustment: I,
                basePlanInvoiceItems: h,
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
            reviewState: y,
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
                graphic: (0, i.jsx)(e6.a6, {}),
                price: a,
                PriceIcon: c ? ej.t : void 0,
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
            })({ isPrepaid: I, isReverseTrial: A, premiumSubscription: a }),
        ),
        G = (0, i.jsx)(e6.f7, { ...R });
    return (0, i.jsx)(e1.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: b,
        purchaseItemContent: G,
        subscriptionDetailsContent: N,
        paymentMethodContent: v,
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
                icon: eC.Q,
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
                icon: eN.T,
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
    return (0, i.jsx)(ev.E, { variant: "text-xs/normal", color: "text-muted", className: no.jH, children: n });
}
function nm(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: no.Vk,
        children: [
            (0, i.jsx)("div", {
                className: no.D0,
                children: (0, i.jsx)(ej.t, {
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
        refreshDiscountCallout: y,
        legacyPricingNotes: g,
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
            g.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            S,
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
        existingSlotNotice: S,
        discountCallout: y,
        refreshDiscountCallout: g,
        legacyPricingNotes: h,
        refreshPricingNotes: I,
    } = e;
    return (0, i.jsxs)("div", {
        className: no.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: no.K3,
                children: [
                    (0, i.jsx)(ev.E, {
                        variant: "text-md/medium",
                        className: no.bk,
                        children: eW.intl.string(eW.t["r+SebU"]),
                    }),
                    (0, i.jsx)(eM._, { className: no.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(ev.E, { variant: "text-md/medium", className: no.kX, children: r }),
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
                            (0, i.jsx)(ev.E, { variant: "text-md/medium", className: no.ny, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ex()(no.El, { [nn.S]: n }), children: u }),
                ],
            }),
            g,
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
            I.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function ng(e) {
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
            showRefreshSubtotalRate: y = !1,
            refreshNextStepLabel: g = eW.intl.string(eW.t.QBnNHq),
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
                    showRefreshSubtotalRate: y,
                } = e,
                g =
                    ((n = (0, u.bG)([q.A], () => q.A.getPremiumTypeSubscription())),
                    (0, u.bG)([eo.A], () =>
                        n?.paymentSourceId != null ? eo.A.getPaymentSource(n.paymentSourceId)?.country : null,
                    )),
                h = s.interval,
                I = s.intervalCount,
                A = (0, u.bG)([K.A], () => K.A.getForSkuAndInterval((0, X.mH)(ey.pe.GUILD), h, I)),
                x = (0, u.bG)([eK.default], () => eK.default.getCurrentUser()),
                E = (0, eU.A)({ forceFetch: !1 });
            r()(null != A, "Missing guildBoostingSubscriptionPlan");
            let _ = [{ planId: A.id, quantity: 1 }],
                b = c?.items.find(
                    (e) => e.planId === ey.gD.PREMIUM_MONTH_TIER_2 || e.planId === ey.gD.PREMIUM_YEAR_TIER_2,
                );
            null != b && _.push(b);
            let C = c?.items.find(
                    (e) => e.planId === ey.gD.PREMIUM_MONTH_GUILD || e.planId === ey.gD.PREMIUM_YEAR_GUILD,
                ),
                N = null == g || !ey.uJ.has(g) || null == C,
                { analyticsLocations: v } = (0, P.Ay)(),
                [j, M] = (0, ek.YV)({
                    subscriptionId: c?.id,
                    items: _,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: S.currency,
                    preventFetch: N,
                    analyticsLocations: v,
                    analyticsLocation: f.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, T.Tr)(j, M);
            let L = !N && null == j && null == M;
            l.useLayoutEffect(() => {
                o(L);
            }, [L, o]);
            let D = (0, eF.V)()?.subscription_trial?.sku_id === ey.pe.TIER_2,
                R = X.Ay.hasBoostDiscount(x),
                G = R && null != c && X.Ay.isPremiumAtLeast(X.Ay.getPremiumType(c.planId), ey.PremiumTypes.TIER_1),
                U = j?.findInvoiceItemByPlanId(A.id),
                O =
                    null != U
                        ? { amount: U.amount, tax: 0, taxInclusive: !0, currency: j.currency }
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
                            showFractionalPremiumBanner: i === ey.xc.FP_SUB_PAUSED,
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
                      discountPercentage: (0, eQ.l9)(eJ.default.locale, ey.oX / 100),
                      freeSubscriptionCount: ey.M4,
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
                    ? (0, i.jsx)(ng, { existingAvailableSlots: p, canceledCount: F, premiumSubscription: c })
                    : null,
                J = B.showFractionalPremiumBanner ? (0, i.jsx)(eY.vi, { fractionalPremiumInfo: E }) : null,
                Q = V
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === ey.WT.YEAR
                              ? eW.intl.string(eW.t.YDpAzZ)
                              : n === ey.WT.MONTH && 1 === t
                                ? eW.intl.string(eW.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: I }) ?? eW.intl.string(eW.t.K9Bmze))
                    : eW.intl.string(eW.t.K9Bmze),
                ee = L
                    ? (0, i.jsx)(m.y, {})
                    : V
                      ? (0, eZ.$g)(O.amount, O.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                s = (0, eZ.$g)(n, t);
                            return i === ey.WT.YEAR
                                ? eW.intl.formatToPlainString(eW.t["8M04YJ"], { price: s })
                                : i === ey.WT.MONTH && 1 === l
                                  ? eW.intl.formatToPlainString(eW.t.VStWCR, { price: s })
                                  : i === ey.WT.MONTH && l > 1
                                    ? eW.intl.formatToPlainString(eW.t.xJvAFU, { price: s })
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
                    : y && !V
                      ? (0, eZ.CE)((0, eZ.$g)(k, O.currency), h, I)
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
            showRefreshSubtotalRate: y,
        });
    return (0, i.jsx)(S ? ny : nS, {
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
        refreshNextStepLabel: g,
    });
}
let nI = ey.gD.NONE_MONTH;
var nf = t(898640);
function nP(e) {
    let { handleClose: n, setForceDisableSubmitButton: t, refreshNextStepLabel: l } = e,
        {
            numGuildBoostsToPurchase: s,
            setNumGuildBoostsToPurchase: a,
            guildId: o,
            currency: c,
            closeGuildPerksModal: d,
        } = ed(),
        { paymentSourceId: p, activeSubscription: m } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        S = (0, h.A)(() => (0, Z.D$)($.A.boostSlots)),
        y = (0, Y.n)("GuildBoostPurchaseModal"),
        g = eP.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        I = y && g,
        f = (0, u.bG)([U.A], () => (null != o ? U.A.getGuild(o) : void 0), [o]),
        P = null != o ? z.A.getGuild(o) : null,
        A = null != m && m.isPurchasedExternally,
        x = (0, u.bG)([K.A], () => (null != m ? (0, ea.c9)(m.planId) : null)),
        E = (0, u.bG)([K.A], () => (null == x ? K.A.get(nI) : x));
    r()(null != o, "Missing guildId"), r()(null != E, "Missing nextPremiumSubscriptionPlan");
    let _ = (0, i.jsx)(nh, {
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
            n(), null != d && d(), (0, ef.e)();
        },
        priceOptions:
            null != p ? { paymentSourceId: p, currency: null != c ? c : void 0 } : { currency: null != c ? c : void 0 },
        isRefreshEnabled: y,
        showRefreshSubtotalRate: I,
        refreshNextStepLabel: l,
    });
    return (
        A && null != m && null != m.paymentGateway
            ? (_ = (0, i.jsxs)("div", {
                  className: nf.xK,
                  children: [
                      (0, i.jsx)(eh.w, {
                          type: "critical",
                          children: eW.intl.format(eW.t["/m3Y3s"], { paymentGatewayName: e9.qm[m.paymentGateway] }),
                      }),
                      _,
                  ],
              }))
            : null == o ||
              U.A.isGuildFetching(o) ||
              null != f ||
              null != P ||
              (_ = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eI.p, {
                          messageType: eI.Y.ERROR,
                          className: nf.MR,
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
    nC = t(811611),
    nN = t(901017),
    nv = t(403052);
function nj(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, u.bG)([eJ.default], () => eJ.default.locale);
    return (0, i.jsxs)("div", {
        className: nv.mH,
        children: [
            (0, i.jsx)(nN.A, {
                icon: eD._,
                iconClassName: nv.pl,
                description: eW.intl.formatToPlainString(eW.t.sQBgs2, { numFreeGuildSubscriptions: ey.M4 }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(nN.A, {
                icon: eD._,
                iconClassName: nv.pl,
                description: eW.intl.formatToPlainString(eW.t["1A6vXi"], { percent: (0, eQ.l9)(t, ey.oX / 100) }),
                color: eE.A.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(nN.A, { icon: nA.n, iconClassName: nv.zO, description: eW.intl.string(eW.t.Z9b2x2) }) : null,
            (0, i.jsx)(nN.A, { icon: nx.F, iconClassName: nv.Kg, description: eW.intl.string(eW.t["8dqG5E"]) }),
            (0, i.jsx)(nN.A, { icon: nE.J, iconClassName: nv.$z, description: eW.intl.string(eW.t.cBorIy) }),
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
            priceOptions: y,
        } = e,
        { analyticsLocations: g, sourceAnalyticsLocations: h } = (0, P.Ay)(f.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        I = null == n || null == n.premiumSubscriptionType,
        A = X.Ay.getPrice(ey.gD.PREMIUM_MONTH_TIER_2, !1, !1, y),
        x = (0, eZ.$g)(A.amount, A.currency),
        E = (0, eF.V)(),
        _ = E?.trial_id,
        b = E?.subscription_trial?.sku_id === ey.pe.TIER_2;
    return (
        l.useEffect(() => {
            Q.default.track(nu.HAw.PREMIUM_UPSELL_VIEWED, { type: ey.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n_.s_, { "data-migration-pending": !0, onClick: t, className: nv.b }),
                (0, i.jsxs)(c.c, {
                    children: [
                        b && (0, i.jsx)(nC.Vq, { className: nv.Fg }),
                        (0, i.jsx)("div", { className: ex()(nv.Tn, { [nv.NH]: b }) }),
                        (0, i.jsx)("div", {
                            className: nv.G3,
                            children:
                                null != _
                                    ? eW.intl.string(eW.t.AoSzEr)
                                    : eW.intl.format(eW.t["7vePZb"], { monthlyPrice: x }),
                        }),
                        (0, i.jsx)(nj, { shouldUpsellFromNoneTier: I }),
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
                                                    subscriptionTier: ey.pe.TIER_2,
                                                    analyticsLocations: g,
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
        { currency: a, paymentModalArgs: o, analyticsLocation: c, analyticsSourceLocation: d } = ed(),
        { paymentSourceId: p, activeSubscription: m } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        S = (0, u.bG)([K.A], () => (null != m ? (0, ea.c9)(m.planId) : null)),
        y = (0, u.bG)([K.A], () => (null == S ? K.A.get(nI) : S));
    r()(null != y, "Missing nextPremiumSubscriptionPlan"), r()(null != a && "" !== a, "Currency not defined");
    let { paymentSources: g } = o,
        h = null != m ? m.paymentSourceId : null,
        I = Object.keys(g).length > 0,
        f = l.useCallback(() => t(w.pn.PLAN_SELECT), [t]),
        P = l.useCallback(() => t(null != h || I ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS), [t, h, I]);
    return (0, i.jsx)(nT, {
        premiumSubscriptionPlan: y,
        analyticsLocation: c,
        analyticsSourceLocation: d,
        onClose: n,
        onBack: f,
        onSkip: P,
        onSubscriptionConfirmation: s,
        priceOptions: null != p ? { paymentSourceId: p, currency: a } : { currency: a },
    });
}
var nL = t(253390);
function nD() {
    let e = (0, D.t4)((e) => e.activeSubscription),
        { numGuildBoostsToPurchase: n } = ed(),
        t = (0, u.bG)([K.A], () => null == e || null != K.A.get(e.planId)),
        i = (0, E.Y)(),
        s = (0, u.bG)([K.A], () => (null != e ? (0, ea.c9)(e.planId) : null));
    return {
        newAdditionalPlans: l.useMemo(
            () => (null != e && t && i ? (0, nL.v)(e, n) : [{ planId: ey.gD.PREMIUM_MONTH_GUILD, quantity: n }]),
            [e, t, i, n],
        ),
        currentPremiumSubscriptionPlan: s,
        hasFetchedPremiumSubscriptionPlan: t,
    };
}
function nR(e) {
    let { handleStepChange: n } = e,
        { guildId: t, currency: s, paymentModalArgs: a, premiumSubscriptionPaymentSourceId: o } = ed(),
        {
            paymentSourceId: c,
            setPaymentSourceId: d,
            premiumSubscription: p,
        } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPaymentSourceId: e.setPaymentSourceId,
            premiumSubscription: e.activeSubscription,
        }));
    r()(null != t, "Missing guildId"), r()(null != s && "" !== s, "Currency not defined");
    let { paymentSources: m } = a,
        { newAdditionalPlans: S, currentPremiumSubscriptionPlan: y } = nD(),
        g = (0, u.bG)([K.A], () => (null == y ? K.A.get(nI) : y));
    r()(null != g, "Missing nextPremiumSubscriptionPlan");
    let h = null != c ? { paymentSourceId: c, currency: s } : { currency: s },
        I = l.useCallback(() => {
            n(w.pn.ADD_PAYMENT_STEPS), d(null);
        }, [n, d]);
    return (0, i.jsx)(na, {
        guildId: t,
        paymentSources: m,
        priceOptions: h,
        currentPremiumSubscription: p,
        premiumSubscriptionPaymentSourceId: o,
        premiumSubscriptionPlan: g,
        newAdditionalPlans: S,
        paymentSourceId: c,
        setPaymentSourceId: d,
        onPaymentSourceAdd: I,
    });
}
let nG = [w.pn.PLAN_SELECT, w.pn.REVIEW, w.pn.CONFIRM],
    nU = [w.pn.PLAN_SELECT, w.pn.ADD_PAYMENT_STEPS, w.pn.REVIEW, w.pn.CONFIRM];
async function nO(e, n) {
    await (0, y.CD)();
    let t = (0, Z.D$)($.A.boostSlots);
    return (0, y.VA)(
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
            analyticsSourceLocation: y,
            guildId: O,
            onSubscribeComplete: k,
            onSubscriptionConfirmation: es,
            applicationId: ea,
            intent: eu,
        } = e,
        {
            numGuildBoostsToPurchase: eo,
            currency: ec,
            setCurrency: ep,
            currencies: em,
            setCurrencies: eS,
            paymentModalArgs: eh,
            premiumSubscriptionPaymentSourceId: eI,
            disablePremiumUpsell: ef,
        } = ed(),
        eP = (0, x.Hp)(),
        eA = (0, D.t4)((e) => e.hasAcceptedTerms),
        ex = (0, _.A)({ location: "GuildBoostPurchaseModal", message: eW.intl.string(ne.default["tK8A/8"]) }),
        eE = (0, T.sw)(),
        e_ = (0, u.bG)([q.A], () => q.A.hasFetchedSubscriptions()),
        { newAdditionalPlans: eb, currentPremiumSubscriptionPlan: eC, hasFetchedPremiumSubscriptionPlan: eN } = nD(),
        ev = l.useRef((0, Z.D$)($.A.boostSlots)).current,
        ej = (0, u.bG)([U.A], () => (null != O ? U.A.getGuild(O) : void 0), [O]),
        {
            paymentSources: eT,
            setIsSubmittingCurrentStep: eM,
            paymentAuthenticationState: eL,
            isSubmittingCurrentStep: eD,
            paymentError: eR,
            purchaseErrorBlockRef: eG,
        } = eh,
        {
            paymentSourceId: eU,
            setPurchaseError: eO,
            premiumSubscription: ek,
            customCheckoutFlow: ew,
        } = (0, D.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
            premiumSubscription: e.activeSubscription,
            customCheckoutFlow: e.customCheckoutFlow,
        })),
        eB = Object.keys(eT).length > 0,
        { checkoutPaymentSources: eF } = (0, j.t)(),
        eV = (0, _.iB)({ checkoutPaymentSources: eF, paymentSourceId: eU, location: "GuildBoostPurchaseModal" }),
        eY = (0, u.bG)([J.A], () => J.A.popupCallbackCalled),
        eH = (0, E.Y)(),
        ez = l.useMemo(() => (0, V.A)(), []),
        [e$, eJ] = (0, h.A)(() => [ez ?? (0, a.A)(), Date.now()]),
        { analyticsLocations: eK } = (0, P.Ay)(o, f.A.GUILD_BOOST_PURCHASE_MODAL),
        eq = l.useMemo(
            () =>
                eb.find((e) => {
                    let { planId: n } = e;
                    return ey.pW.has(n);
                })?.planId ?? ey.gD.PREMIUM_MONTH_GUILD,
            [eb],
        ),
        eQ = (0, u.bG)([K.A], () => K.A.get(eq)?.skuId, [eq]),
        eZ = l.useMemo(
            () => ({
                load_id: e$,
                payment_type: e9.fr[e9.VV.SUBSCRIPTION],
                sku_id: (0, X.mH)(ey.pe.GUILD),
                subscription_type: nu.rzx.PREMIUM,
                subscription_plan_id: eq,
                quantity: eo,
                location: d,
                source: y,
                location_stack: eK,
                checkout_flow: C.CL.GUILD_BOOST_CHECKOUT,
                is_gift: !1,
                eligible_for_trial: !1,
                guild_id: O,
            }),
            [e$, d, eK, y, O, eo, eq],
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
        e4 = l.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t } = n;
                e1(e), eO(null);
                let i = Date.now();
                Q.default.track(nu.HAw.PAYMENT_FLOW_STEP, {
                    ...eZ,
                    from_step: null != t ? t : e0,
                    to_step: e === w.pn.ADD_PAYMENT_STEPS ? w.pn.PAYMENT_TYPE : e,
                    step_duration_ms: i - e3,
                    flow_duration_ms: i - eJ,
                    guild_id: O,
                    application_id: ea,
                });
            },
            [eO, eZ, e0, e3, eJ, O, ea],
        ),
        e6 = {
            paymentFlowFailedAnalyticsData: eX,
            flowStartTime: eJ,
            guildId: O,
            handleStepChange: e4,
            onSubscribeComplete: k,
            paymentSourceId: eU,
            setIsSubmittingCurrentStep: eM,
            setPurchaseError: eO,
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
                if (!0 === eY)
                    try {
                        if (null == J.A.redirectedPaymentId) return;
                        await (0, A.tn)(J.A.redirectedPaymentId),
                            i(w.pn.CONFIRM),
                            nn(B.h.COMPLETED),
                            null != t && (await nO(t, null != eu)),
                            l?.();
                    } catch (t) {
                        nn(B.h.FAIL),
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
        }, [eY, eu]),
        (0, I.Ay)(() => {
            q.A.hasFetchedSubscriptions() || (0, A.hP)(),
                null == O ||
                    null != z.A.getGuild(O) ||
                    null != U.A.getGuild(O) ||
                    U.A.isGuildFetching(O) ||
                    (0, G.y)(O),
                (0, R.b)({ ...eZ, guild_id: O, application_id: ea, custom_checkout_flow: ew }),
                null != ek &&
                    null != ek.renewalMutations &&
                    Q.default.track(nu.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: d, guild_id: O });
        });
    let [e2, e5] = l.useState(nG),
        [e7, nn] = l.useState(B.h.WAITING),
        nt = () => {
            s(e7 === B.h.COMPLETED);
        },
        ni = null != ek && ek.isPurchasedExternally;
    l.useEffect(() => {
        eL !== W.oc.PENDING &&
            e0 !== w.pn.CONFIRM &&
            null != eI &&
            (e2 !== nG && e5(nG), nG.includes(e0) || e0 === w.pn.PREMIUM_UPSELL || e4(w.pn.REVIEW)),
            e0 === w.pn.ADD_PAYMENT_STEPS && e2 !== nU && e5(nU),
            ni && e0 !== w.pn.PLAN_SELECT && e1(w.pn.PLAN_SELECT);
    }, [e0, e4, ni, eL, ek, eI, e2]),
        (0, W.b)(e0, eL, e4, nn),
        (0, w.zT)(e0, e7, nn);
    let nl = (0, Y.n)("GuildBoostPurchaseModal"),
        ns = nl && (e0 === w.pn.REVIEW || e0 === w.pn.CONFIRM),
        nr = (0, el.A)(ns),
        [na, no] = l.useState(!1),
        [nc, nd] = l.useState(!0),
        np = l.useMemo(() => JSON.stringify(em), [em]);
    if (
        (l.useEffect(() => {
            let e;
            eH &&
                (null != K.A.get(ey.gD.PREMIUM_MONTH_GUILD) && eS((e = (0, ee._w)(ey.gD.PREMIUM_MONTH_GUILD, eU, !1))),
                null == eU && null != ek && null != ek.paymentSourceId ? ep(ek.currency) : null != e && ep(e[0]));
        }, [eU, ek, eH, np, ep, eS]),
        eP)
    )
        n = (0, i.jsx)(b.oO, {});
    else if (e_ && eN && eH && null != ec && "" !== ec)
        if (ek?.isPausedOrPausePending && !ek.isPausedAllowsUpdatesButNotResume)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nf.C, children: eW.intl.string(eW.t.mOWsF1) }),
            });
        else if (null != ek && null != ek.renewalMutations)
            n = (0, i.jsx)(c.c, {
                children: (0, i.jsx)("p", { className: nf.C, children: eW.intl.string(eW.t.npfhh0) }),
            });
        else if (e0 === w.pn.PREMIUM_UPSELL)
            n = (0, i.jsx)(nM, {
                subscriptionTier: null,
                planGroup: [],
                initialPlanId: null,
                handleClose: nt,
                handleStepChange: e4,
                analyticsData: eZ,
                setAnalyticsData: e9.tE,
                skipConfirm: !1,
                onSubscriptionConfirmation: es,
            });
        else {
            let e, t, l, s;
            r()(ec, "Currency not defined");
            let a = null != eU ? { paymentSourceId: eU, currency: ec } : { currency: ec },
                u = z.A.getGuild(O),
                o = null;
            switch (e0) {
                case w.pn.PLAN_SELECT:
                    r()(null != O, "Missing guildId"),
                        (e = (0, i.jsx)(nP, {
                            subscriptionTier: null,
                            planGroup: [],
                            initialPlanId: null,
                            handleClose: nt,
                            handleStepChange: e4,
                            analyticsData: eZ,
                            setAnalyticsData: e9.tE,
                            skipConfirm: !1,
                            setForceDisableSubmitButton: nd,
                            refreshNextStepLabel: (0, w.Ir)(
                                e2.find((e) => e !== w.pn.PLAN_SELECT && e !== w.pn.CONFIRM) ?? w.pn.REVIEW,
                            ),
                        })),
                        (l = nl
                            ? (0, i.jsx)(S.$, {
                                  variant: "secondary",
                                  text: eW.intl.string(eW.t["ETE/oC"]),
                                  onClick: nt,
                              })
                            : (0, i.jsx)(p.Q, {
                                  text: eW.intl.string(eW.t.oEAioF),
                                  onClick: nt,
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
                                forceDisableSubmitButton: nc,
                                numGuildBoostsToPurchase: eo,
                                isDisabledBecauseExternalSubscription: ni,
                                isMissingGuildInformation: null == ej && null == u,
                            }),
                            onClick: () => {
                                ef || (null != eC && eC.premiumSubscriptionType === ey.PremiumTypes.TIER_2)
                                    ? e4(null != eI || eB ? w.pn.REVIEW : w.pn.ADD_PAYMENT_STEPS)
                                    : e4(w.pn.PREMIUM_UPSELL);
                            },
                        }));
                    break;
                case w.pn.ADD_PAYMENT_STEPS:
                    break;
                case w.pn.AWAITING_AUTHENTICATION:
                    e = (0, i.jsx)(g.N, { className: nf.__invalid_body });
                    break;
                case w.pn.REVIEW:
                    (e = (0, i.jsx)(nR, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nt,
                        handleStepChange: e4,
                        analyticsData: eZ,
                        setAnalyticsData: e9.tE,
                        skipConfirm: !1,
                    })),
                        (t = w.pn.PLAN_SELECT);
                    let c = async () => {
                        r()(null != eb, "Missing newAdditionalPlans");
                        let e = (0, F.W)(eT, eU);
                        eO(null);
                        try {
                            nn(B.h.PURCHASING),
                                eM(!0),
                                r()(null != eU, "Missing paymentSourceId"),
                                r()(null != eE, "Missing invoicePreview");
                            let n = { amount: eE.total, currency: eE.currency },
                                t = a.currency ?? eE.currency,
                                i = (0, X.U8)(ek, eb, t.toLowerCase(), a.paymentSourceId);
                            if (
                                (Q.default.track(nu.HAw.PAYMENT_FLOW_COMPLETED, {
                                    ...eZ,
                                    duration_ms: Date.now() - eJ,
                                    guild_id: O,
                                    application_id: ea,
                                }),
                                na)
                            )
                                return;
                            if (null == ek || null == eC) {
                                r()(null != e, "Missing paymentSource");
                                let l = await (0, A.Ky)({
                                    items: eb,
                                    paymentSource: e,
                                    currency: t,
                                    expectedInvoicePrice: n,
                                    expectedRenewalPrice: i,
                                });
                                if (l.redirectConfirmation) return void no(null != l.redirectURL);
                            } else {
                                let l = { items: (0, X.aE)(ek, eb) };
                                (l.currency = ek.currency ?? t),
                                    (l.paymentSource = null != eI ? eT[eI] : void 0),
                                    null == l.paymentSource &&
                                        (r()(null != e, "Missing paymentSource"),
                                        (l.paymentSource = e),
                                        (l.currency = t));
                                let s = await (0, A.nV)(ek, l, n, i, eK);
                                if (s.redirectConfirmation) return void no(null != s.redirectURL);
                            }
                            null == eu && e4(w.pn.CONFIRM),
                                nn(B.h.COMPLETED),
                                null != O && (await nO(O, null != eu)),
                                null != eu && nt(),
                                k?.();
                        } catch (n) {
                            nn(B.h.FAIL),
                                eO(n),
                                Q.default.track(nu.HAw.PAYMENT_FLOW_FAILED, {
                                    ...eX,
                                    payment_error_code: n?.code,
                                    payment_gateway:
                                        null != e ? (e.type === nu.hes.CARD ? nu.kM_.STRIPE : nu.kM_.BRAINTREE) : null,
                                    payment_source_id: eU,
                                    duration_ms: Date.now() - eJ,
                                });
                        } finally {
                            na || eM(!1);
                        }
                    };
                    (o = {
                        text: eW.intl.string(eW.t.eUEeCt),
                        loading: eD,
                        disabled: null == eU || !eA || null != ex || eV,
                        onClick: c,
                        variant: "active",
                    }),
                        (s = (0, i.jsx)(N.p, { ...o }));
                    break;
                case w.pn.CONFIRM:
                    e = (0, i.jsx)(eg, {
                        subscriptionTier: null,
                        planGroup: [],
                        initialPlanId: null,
                        handleClose: nt,
                        handleStepChange: e4,
                        analyticsData: eZ,
                        setAnalyticsData: e9.tE,
                        skipConfirm: !1,
                        existingAvailableSlots: ev,
                    });
            }
            let d = null != eR && null == (0, w.ou)(eR) ? eR : null;
            n =
                e0 === w.pn.ADD_PAYMENT_STEPS
                    ? (0, i.jsx)(er, {
                          subscriptionTier: null,
                          planGroup: [],
                          initialPlanId: null,
                          handleClose: nt,
                          handleStepChange: e4,
                          analyticsData: eZ,
                          setAnalyticsData: e9.tE,
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
                          footer: (0, i.jsx)(nk, {
                              currentStep: e0,
                              isRefreshEnabled: nl,
                              backStep: t,
                              handleStepChange: e4,
                              primaryButtonProps: o,
                              secondaryButton: l,
                              legacySubmitButton: s,
                          }),
                      });
        }
    else n = (0, i.jsx)("div", { className: nf._5, children: (0, i.jsx)(m.y, {}) });
    let nm = (0, M.u)({ skuId: eQ, step: e0 }),
        nS = null;
    return (eP ||
        (nl && e0 !== w.pn.PREMIUM_UPSELL
            ? (nS = e0 === w.pn.REVIEW ? (0, i.jsx)(L.s3, { ...nm }) : (0, i.jsx)(L.s3, { title: nm.title }))
            : e0 === w.pn.REVIEW
              ? (nS = (0, i.jsx)(L.s3, { ...nm }))
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
                      guild: z.A.getGuild(O),
                      guildBoostQuantity: eo + ev.length,
                      isTransfer: !1,
                      graphic: e,
                      onClose: n,
                  }),
          })
        : (0, i.jsx)(v.e0, {
              children: (0, i.jsxs)(L.Jg, {
                  transitionState: t,
                  size: "md",
                  onClose: () => (nt(), Promise.resolve()),
                  children: [nS, n],
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
        { analyticsLocations: c } = (0, P.Ay)(f.A.GUILD_BOOST_PURCHASE_MODAL),
        d = (0, h.A)(() => n - (0, Z.D$)($.A.boostSlots).length);
    return (0, i.jsx)(P.f5, {
        value: c,
        children: (0, i.jsx)(k.PaymentContextProvider, {
            activeSubscription: o,
            stepConfigs: nF,
            skuIDs: [],
            unifiedCheckoutFlow: C.CL.GUILD_BOOST_CHECKOUT,
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
