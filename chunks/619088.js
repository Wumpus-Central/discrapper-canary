"use strict";
n.d(t, { c: () => eD });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(683071),
    u = n(512950),
    c = n(821609),
    d = n(123292),
    _ = n(444927),
    h = n(529427),
    f = n(655857),
    p = n(211159),
    E = n(958340),
    m = n(166532),
    g = n(482132),
    A = n(87719),
    I = n(489254);
let T = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = n(71393),
    y = n(178368),
    C = n(97352),
    N = n(473145),
    v = n(615396),
    R = n(526151);
n(321073);
var O = n(503698),
    b = n.n(O),
    D = n(661531),
    L = n(990078),
    w = n(408278),
    M = n(834040),
    P = n(499373),
    x = n(834730),
    k = n(403581),
    U = n(663803),
    G = n(320448),
    F = n(534514),
    V = n(104510),
    B = n(695366),
    j = n(289873),
    H = n(726656),
    Y = n(793574),
    W = n(688810),
    K = n(531260),
    $ = n(666646),
    z = n(404374),
    q = n(543767),
    Z = n(881489),
    X = n(477421),
    Q = n(234419),
    J = n(295405),
    ee = n(166403),
    et = n(363476),
    en = n(531506),
    ei = n(375708),
    er = n(51465);
function es() {
    return (0, i.jsxs)("div", {
        className: b()(er.dt, er.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: er.qq,
            }),
            (0, i.jsx)(x.E, { variant: "text-sm/medium", className: er.tD, children: ei.intl.format(ei.t.f5VHKm, {}) }),
        ],
    });
}
function ea(e) {
    let { text: t, color: n } = e;
    return (0, i.jsxs)("div", {
        className: er.dt,
        children: [(0, i.jsx)(k.t, { size: "md", className: er.YW, color: n }), (0, i.jsx)("div", { children: t })],
    });
}
var eo = n(773669),
    el = n(287809),
    eu = n(975571),
    ec = n(252424),
    ed = n(428262),
    e_ = n(580630),
    eh = n(599669),
    ef = n(652215);
n(26279);
var ep = n(788868),
    eE = n(818348),
    em = n(406263),
    eg = n(7921);
function eA(e) {
    return "" === e || "-" === e;
}
function eI(e) {
    let { value: t, onChange: n, minValue: s = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = r.useState(t);
    r.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof l,
        d = (e) => {
            u(e), eA(e) || n(e);
        };
    return (0, i.jsxs)("div", {
        className: em.U$,
        children: [
            (0, i.jsx)(w.K, {
                variant: "secondary",
                size: "md",
                icon: M.Q,
                onClick: () => {
                    c && !(l <= s) && d(l - 1);
                },
                "aria-label": ei.intl.string(ei.t["k+ohJm"]),
                disabled: !c || l <= s,
            }),
            (0, i.jsx)("div", {
                className: em.WJ,
                children: (0, i.jsx)("input", {
                    className: em.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        ((e) => {
                            if (eA(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= s) return void d(s);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        eA(l) && u(t);
                    },
                }),
            }),
            (0, i.jsx)(w.K, {
                variant: "secondary",
                size: "md",
                icon: P.T,
                onClick: () => {
                    c && !(l >= a) && d(l + 1);
                },
                "aria-label": ei.intl.string(ei.t.w8Sc4B),
                disabled: !c || l >= a,
            }),
        ],
    });
}
function eT(e) {
    let { message: t } = e;
    return (0, i.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", className: em.jH, children: t });
}
function eS(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: em.Vk,
        children: [
            (0, i.jsx)("div", {
                className: em.D0,
                children: (0, i.jsx)(k.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: em.ue,
                    color: z.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: em.yP, children: t }),
        ],
    });
}
function ey(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: s,
        planLabel: a,
        planPriceContent: o,
        subtotalContent: l,
        refreshSubtotalContent: u,
        legacyDescriptionContent: c,
        refreshDescriptionContent: d,
        fractionalBanner: _,
        existingSlotNotice: h,
        discountCallout: f,
        refreshDiscountCallout: p,
        legacyPricingNotes: E,
        refreshPricingNotes: m,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            _,
            c,
            h,
            (0, i.jsxs)("div", {
                className: eg.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: eg.E6,
                        children: [
                            (0, i.jsx)(U.l, {
                                value: n,
                                onChange: (e) => s(e),
                                className: eg.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: eg.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: b()(eg.QK, { [eg.S]: t }), children: o }),
                ],
            }),
            (0, i.jsx)("div", { className: eg.J3 }),
            (0, i.jsxs)("div", {
                className: eg.mP,
                children: [
                    (0, i.jsx)("div", { className: eg.xp, children: ei.intl.string(ei.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: b()(eg.__invalid_planSelectorSubtotalPrice, { [eg.S]: t }),
                        children: l,
                    }),
                ],
            }),
            E.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function eC(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: s,
        refreshNextStepLabel: a,
        planLabel: o,
        planPriceContent: l,
        subtotalContent: u,
        refreshSubtotalContent: c,
        legacyDescriptionContent: d,
        refreshDescriptionContent: _,
        fractionalBanner: h,
        existingSlotNotice: f,
        discountCallout: p,
        refreshDiscountCallout: E,
        legacyPricingNotes: m,
        refreshPricingNotes: g,
    } = e;
    return (0, i.jsxs)("div", {
        className: em.xY,
        children: [
            h,
            (0, i.jsxs)("div", {
                className: em.K3,
                children: [
                    (0, i.jsx)(x.E, {
                        variant: "text-md/medium",
                        className: em.bk,
                        children: ei.intl.string(ei.t["r+SebU"]),
                    }),
                    (0, i.jsx)(G._, { className: em.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(x.E, { variant: "text-md/medium", className: em.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, i.jsxs)("div", {
                className: em.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: em.fX,
                        children: [
                            (0, i.jsx)(eI, {
                                value: n,
                                onChange: (e) => s(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(x.E, { variant: "text-md/medium", className: em.ny, children: o }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: b()(em.El, { [eg.S]: t }), children: l }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: em.fh,
                children: [
                    (0, i.jsx)(F.D, {
                        variant: "heading-lg/semibold",
                        className: em.O3,
                        children: ei.intl.string(ei.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: b()(em.BU, { [eg.S]: t }), children: c }),
                ],
            }),
            g.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
        ],
    });
}
function eN(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: r } = e;
    return (0, i.jsxs)("div", {
        className: eg.Mv,
        children: [
            (0, i.jsx)(V._, { className: eg.T5, color: D.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    ei.intl.format(ei.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != r
                        ? (0, i.jsx)(L.m, {
                              text: ei.intl.formatToPlainString(ei.t.SFpsCH, {
                                  canceledCount: n,
                                  date: r.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(B.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: eg.Y5,
                                  color: D.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ev(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: s,
            setForceDisableSubmitButton: l,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d = [],
            priceOptions: _,
            isRefreshEnabled: h = !1,
            showRefreshSubtotalRate: f = !1,
            refreshNextStepLabel: p = ei.intl.string(ei.t.QBnNHq),
        } = e,
        E = (function (e) {
            let t,
                n,
                {
                    premiumSubscriptionPlan: s,
                    numGuildBoosts: l,
                    setForceDisableSubmitButton: u,
                    premiumSubscription: c,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: _,
                    priceOptions: h,
                    showRefreshSubtotalRate: f,
                } = e,
                p =
                    ((t = (0, o.bG)([ee.A], () => ee.A.getPremiumTypeSubscription())),
                    (0, o.bG)([J.A], () =>
                        t?.paymentSourceId != null ? J.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                E = s.interval,
                m = s.intervalCount,
                g = (0, o.bG)([C.A], () => C.A.getForSkuAndInterval((0, ed.mH)(ep.pe.GUILD), E, m)),
                A = (0, o.bG)([el.default], () => el.default.getCurrentUser()),
                I = (0, K.A)({ forceFetch: !1 });
            a()(null != g, "Missing guildBoostingSubscriptionPlan");
            let T = [{ planId: g.id, quantity: 1 }],
                S = c?.items.find(
                    (e) => e.planId === ep.gD.PREMIUM_MONTH_TIER_2 || e.planId === ep.gD.PREMIUM_YEAR_TIER_2,
                );
            null != S && T.push(S);
            let y = c?.items.find(
                    (e) => e.planId === ep.gD.PREMIUM_MONTH_GUILD || e.planId === ep.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == p || !ep.uJ.has(p) || null == y,
                { analyticsLocations: R } = (0, W.Ay)(),
                [O, D] = (0, q.YV)({
                    subscriptionId: c?.id,
                    items: T,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: h.currency,
                    preventFetch: v,
                    analyticsLocations: R,
                    analyticsLocation: Y.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, $.Tr)(O, D);
            let L = !v && null == O && null == D;
            r.useLayoutEffect(() => {
                u(L);
            }, [L, u]);
            let w = (0, Q.V)()?.subscription_trial?.sku_id === ep.pe.TIER_2,
                M = ed.Ay.hasBoostDiscount(A),
                P = M && null != c && ed.Ay.isPremiumAtLeast(ed.Ay.getPremiumType(c.planId), ep.PremiumTypes.TIER_1),
                x = O?.findInvoiceItemByPlanId(g.id),
                k =
                    null != x
                        ? { amount: x.amount, tax: 0, taxInclusive: !0, currency: O.currency }
                        : ed.Ay.getPrice(g.id, M, !1, h),
                U = l * k.amount,
                G = (0, Z.ds)() && M && null != c,
                F = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: r,
                            hasDiscountUpsell: s,
                            withTrialOfferCopyVariant: a,
                        } = e;
                    return (
                        (t = r ? "reverse_trial" : s ? "discount" : a ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: i === ep.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: _.length,
                    fractionalPremiumState: I.fractionalState,
                    isReverseTrial: G,
                    hasDiscountUpsell: P,
                    withTrialOfferCopyVariant: w,
                });
            "discount" === F.upsellVariant
                ? (a()(null != c, "Missing premiumSubscription for discount upsell variant"),
                  (n = ei.intl.format(ei.t.hf6YOY, { planName: ed.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = ei.intl.format("upsell_trial" === F.upsellVariant ? ei.t.ba1L74 : ei.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, ec.l9)(eo.default.locale, ep.oX / 100),
                      freeSubscriptionCount: ep.M4,
                  }));
            let V = _.filter((e) => (0, N.I5)(e)).length,
                B = (0, ed.J$)(h.paymentSourceId),
                { ipCountryCode: er } = (0, X.A)(),
                eA = "HR" === er && k.currency === eE.Yr.EUR,
                eI =
                    G && null != c
                        ? (0, i.jsx)(eh.Ak, { text: (0, eh.zT)(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: b()(eg.hA, eg.G3), children: ei.intl.string(ei.t.jNY1FO) }),
                ey =
                    G && null != c
                        ? (0, i.jsx)(eh.Ak, { text: (0, eh.zT)(c.currentPeriodEnd), className: eg.jk })
                        : (0, i.jsx)("div", { className: em._X, children: ei.intl.string(ei.t.jNY1FO) }),
                eC = F.showExistingSlotNotice
                    ? (0, i.jsx)(eN, { existingAvailableSlots: _, canceledCount: V, premiumSubscription: c })
                    : null,
                ev = F.showFractionalPremiumBanner ? (0, i.jsx)(en.vi, { fractionalPremiumInfo: I }) : null,
                eR = B
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === ep.WT.YEAR
                              ? ei.intl.string(ei.t.YDpAzZ)
                              : t === ep.WT.MONTH && 1 === n
                                ? ei.intl.string(ei.t["6ZR3By"])
                                : null;
                      })({ intervalType: E, intervalCount: m }) ?? ei.intl.string(ei.t.K9Bmze))
                    : ei.intl.string(ei.t.K9Bmze),
                eO = L
                    ? (0, i.jsx)(j.y, {})
                    : B
                      ? (0, e_.$g)(k.amount, k.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, e_.$g)(t, n);
                            return i === ep.WT.YEAR
                                ? ei.intl.formatToPlainString(ei.t["8M04YJ"], { price: s })
                                : i === ep.WT.MONTH && 1 === r
                                  ? ei.intl.formatToPlainString(ei.t.VStWCR, { price: s })
                                  : i === ep.WT.MONTH && r > 1
                                    ? ei.intl.formatToPlainString(ei.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: E, intervalCount: m, amount: k.amount, currency: k.currency }),
                eb = L
                    ? (0, i.jsx)(j.y, {})
                    : (0, i.jsx)(et.A, {
                          price: U,
                          currency: k.currency,
                          intervalType: E,
                          intervalCount: m,
                          isPrepaidPaymentSource: B,
                      }),
                eD = L
                    ? (0, i.jsx)(j.y, {})
                    : f && !B
                      ? (0, e_.CE)((0, e_.$g)(U, k.currency), E, m)
                      : (0, e_.$g)(U, k.currency),
                eL = [],
                ew = [];
            if (eA) {
                let e = (0, i.jsx)(
                    H.A,
                    {
                        message: ei.intl.formatToPlainString(ei.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, e_.$g)(7.5345 * U, eE.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                eL.push(e), ew.push(e);
            }
            let eM = ei.intl.format(ei.t.Om31w8, { documentationLink: eu.A.getArticleURL(ef.MVz.LOCALIZED_PRICING) });
            return (
                eL.push((0, i.jsx)(H.A, { message: eM }, "localized-pricing")),
                ew.push((0, i.jsx)(eT, { message: eM }, "localized-pricing")),
                {
                    isLoading: L,
                    planLabel: eR,
                    planPriceContent: eO,
                    subtotalContent: eb,
                    refreshSubtotalContent: eD,
                    legacyDescriptionContent: eI,
                    refreshDescriptionContent: ey,
                    existingSlotNotice: eC,
                    fractionalBanner: ev,
                    legacyPricingNotes: eL,
                    refreshPricingNotes: ew,
                    discountCallout:
                        "reverse_trial" === F.upsellVariant
                            ? (0, i.jsx)(es, {})
                            : (0, i.jsx)(ea, { text: n, color: z.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === F.upsellVariant ? (0, i.jsx)(es, {}) : (0, i.jsx)(eS, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: l,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: c,
            existingAvailableSlots: d,
            priceOptions: _,
            showRefreshSubtotalRate: f,
        });
    return (0, i.jsx)(h ? eC : ey, {
        isLoading: E.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: s,
        planLabel: E.planLabel,
        planPriceContent: E.planPriceContent,
        subtotalContent: E.subtotalContent,
        refreshSubtotalContent: E.refreshSubtotalContent,
        legacyDescriptionContent: E.legacyDescriptionContent,
        refreshDescriptionContent: E.refreshDescriptionContent,
        fractionalBanner: E.fractionalBanner,
        existingSlotNotice: E.existingSlotNotice,
        discountCallout: E.discountCallout,
        refreshDiscountCallout: E.refreshDiscountCallout,
        legacyPricingNotes: E.legacyPricingNotes,
        refreshPricingNotes: E.refreshPricingNotes,
        refreshNextStepLabel: p,
    });
}
var eR = n(879100),
    eO = n(469633),
    eb = n(898640);
function eD(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: r,
            setNumGuildBoostsToPurchase: s,
            guildId: O,
            closeGuildPerksModal: b,
            disablePremiumUpsell: D,
            setForceDisableSubmitButton: L,
            forceDisableSubmitButton: w,
            paymentModalArgs: M,
            premiumSubscriptionPaymentSourceId: P,
        } = (0, R.Oe)(),
        { paymentSourceId: x, activeSubscription: k } = (0, p.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: U } = (0, f.Jn)(),
        G = null != P || Object.keys(M.paymentSources).length > 0,
        F = (0, m.Ir)(G ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS),
        V = (0, _.A)(() => (0, N.D$)(y.A.boostSlots)),
        B = (0, I.n)("GuildBoostPurchaseModal"),
        j = T.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        H = B && j,
        Y = (0, o.bG)([E.A], () => (null != O ? E.A.getGuild(O) : void 0), [O]),
        W = null != O ? S.A.getGuild(O) : null,
        K = null == Y && null == W,
        $ = null != k && k.isPurchasedExternally,
        z = Object.keys(M.paymentSources).length > 0,
        q = (0, o.bG)([C.A], () => (null != k ? (0, v.c9)(k.planId) : null)),
        Z = (0, o.bG)([C.A], () => (null == q ? C.A.get(eO.Z) : q));
    if (null == O) throw new h.vd({ message: "Missing guildId" });
    a()(null != Z, "Missing nextPremiumSubscriptionPlan");
    let X = (0, i.jsx)(ev, {
        premiumSubscriptionPlan: Z,
        numGuildBoosts: r,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: L,
        premiumSubscription: k,
        existingAvailableSlots: V,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != b && b(), (0, A.e)();
        },
        priceOptions:
            null != x ? { paymentSourceId: x, currency: null != U ? U : void 0 } : { currency: null != U ? U : void 0 },
        isRefreshEnabled: B,
        showRefreshSubtotalRate: H,
        refreshNextStepLabel: F,
    });
    return (
        $ && null != k && null != k.paymentGateway
            ? (X = (0, i.jsxs)("div", {
                  className: eb.xK,
                  children: [
                      (0, i.jsx)(l.w, {
                          type: "critical",
                          children: ei.intl.format(ei.t["/m3Y3s"], { paymentGatewayName: eE.qm[k.paymentGateway] }),
                      }),
                      X,
                  ],
              }))
            : null != O &&
              !E.A.isGuildFetching(O) &&
              K &&
              (X = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.p, {
                          messageType: u.Y.ERROR,
                          className: eb.MR,
                          children: ei.intl.string(ei.t.eAn6z2),
                      }),
                      X,
                  ],
              })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.dZ, { children: X }),
                (0, i.jsx)(g.UX, {
                    children: (0, i.jsx)(eR._, {
                        currentStep: m.pn.PLAN_SELECT,
                        isRefreshEnabled: B,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: B
                            ? (0, i.jsx)(c.$, {
                                  variant: "secondary",
                                  text: ei.intl.string(ei.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, i.jsx)(d.Q, { text: ei.intl.string(ei.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(c.$, {
                            variant: "primary",
                            text: ei.intl.string(ei.t["3PatSz"]),
                            type: "submit",
                            disabled: (function (e) {
                                let {
                                    forceDisableSubmitButton: t,
                                    numGuildBoostsToPurchase: n,
                                    isDisabledBecauseExternalSubscription: i,
                                    isMissingGuildInformation: r,
                                } = e;
                                return t || 0 === n || i || r;
                            })({
                                forceDisableSubmitButton: w,
                                numGuildBoostsToPurchase: r,
                                isDisabledBecauseExternalSubscription: $,
                                isMissingGuildInformation: K,
                            }),
                            onClick: () => {
                                D || (null != q && q.premiumSubscriptionType === ep.PremiumTypes.TIER_2)
                                    ? n(null != P || z ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS)
                                    : n(m.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
