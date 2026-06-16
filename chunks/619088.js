"use strict";
n.d(t, { c: () => eO });
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
    h = n(211159),
    f = n(958340),
    p = n(166532),
    E = n(482132),
    m = n(87719),
    g = n(489254);
let A = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = n(71393),
    T = n(178368),
    S = n(97352),
    y = n(473145),
    C = n(615396),
    N = n(526151);
n(321073);
var v = n(503698),
    R = n.n(v),
    O = n(661531),
    b = n(990078),
    D = n(408278),
    L = n(834040),
    w = n(499373),
    M = n(834730),
    P = n(403581),
    x = n(663803),
    k = n(320448),
    U = n(534514),
    G = n(104510),
    F = n(695366),
    V = n(289873),
    B = n(726656),
    j = n(793574),
    H = n(688810),
    Y = n(531260),
    W = n(666646),
    K = n(404374),
    $ = n(543767),
    z = n(881489),
    q = n(477421),
    Z = n(234419),
    X = n(295405),
    Q = n(166403),
    J = n(363476),
    ee = n(531506),
    et = n(375708),
    en = n(51465);
function ei() {
    return (0, i.jsxs)("div", {
        className: R()(en.dt, en.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: en.qq,
            }),
            (0, i.jsx)(M.E, { variant: "text-sm/medium", className: en.tD, children: et.intl.format(et.t.f5VHKm, {}) }),
        ],
    });
}
function er(e) {
    let { text: t, color: n } = e;
    return (0, i.jsxs)("div", {
        className: en.dt,
        children: [(0, i.jsx)(P.t, { size: "md", className: en.YW, color: n }), (0, i.jsx)("div", { children: t })],
    });
}
var es = n(773669),
    ea = n(287809),
    eo = n(975571),
    el = n(252424),
    eu = n(428262),
    ec = n(580630),
    ed = n(599669),
    e_ = n(652215);
n(26279);
var eh = n(788868),
    ef = n(818348),
    ep = n(406263),
    eE = n(7921);
function em(e) {
    return "" === e || "-" === e;
}
function eg(e) {
    let { value: t, onChange: n, minValue: s = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = r.useState(t);
    r.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof l,
        d = (e) => {
            u(e), em(e) || n(e);
        };
    return (0, i.jsxs)("div", {
        className: ep.U$,
        children: [
            (0, i.jsx)(D.K, {
                variant: "secondary",
                size: "md",
                icon: L.Q,
                onClick: () => {
                    c && !(l <= s) && d(l - 1);
                },
                "aria-label": et.intl.string(et.t["k+ohJm"]),
                disabled: !c || l <= s,
            }),
            (0, i.jsx)("div", {
                className: ep.WJ,
                children: (0, i.jsx)("input", {
                    className: ep.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        ((e) => {
                            if (em(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= s) return void d(s);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        em(l) && u(t);
                    },
                }),
            }),
            (0, i.jsx)(D.K, {
                variant: "secondary",
                size: "md",
                icon: w.T,
                onClick: () => {
                    c && !(l >= a) && d(l + 1);
                },
                "aria-label": et.intl.string(et.t.w8Sc4B),
                disabled: !c || l >= a,
            }),
        ],
    });
}
function eA(e) {
    let { message: t } = e;
    return (0, i.jsx)(M.E, { variant: "text-xs/normal", color: "text-muted", className: ep.jH, children: t });
}
function eI(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: ep.Vk,
        children: [
            (0, i.jsx)("div", {
                className: ep.D0,
                children: (0, i.jsx)(P.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: ep.ue,
                    color: K.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: ep.yP, children: t }),
        ],
    });
}
function eT(e) {
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
                className: eE.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: eE.E6,
                        children: [
                            (0, i.jsx)(x.l, {
                                value: n,
                                onChange: (e) => s(e),
                                className: eE.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: eE.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: R()(eE.QK, { [eE.S]: t }), children: o }),
                ],
            }),
            (0, i.jsx)("div", { className: eE.J3 }),
            (0, i.jsxs)("div", {
                className: eE.mP,
                children: [
                    (0, i.jsx)("div", { className: eE.xp, children: et.intl.string(et.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: R()(eE.__invalid_planSelectorSubtotalPrice, { [eE.S]: t }),
                        children: l,
                    }),
                ],
            }),
            E.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function eS(e) {
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
        className: ep.xY,
        children: [
            h,
            (0, i.jsxs)("div", {
                className: ep.K3,
                children: [
                    (0, i.jsx)(M.E, {
                        variant: "text-md/medium",
                        className: ep.bk,
                        children: et.intl.string(et.t["r+SebU"]),
                    }),
                    (0, i.jsx)(k._, { className: ep.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(M.E, { variant: "text-md/medium", className: ep.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, i.jsxs)("div", {
                className: ep.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: ep.fX,
                        children: [
                            (0, i.jsx)(eg, {
                                value: n,
                                onChange: (e) => s(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(M.E, { variant: "text-md/medium", className: ep.ny, children: o }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: R()(ep.El, { [eE.S]: t }), children: l }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: ep.fh,
                children: [
                    (0, i.jsx)(U.D, {
                        variant: "heading-lg/semibold",
                        className: ep.O3,
                        children: et.intl.string(et.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: R()(ep.BU, { [eE.S]: t }), children: c }),
                ],
            }),
            g.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
        ],
    });
}
function ey(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: r } = e;
    return (0, i.jsxs)("div", {
        className: eE.Mv,
        children: [
            (0, i.jsx)(G._, { className: eE.T5, color: O.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    et.intl.format(et.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != r
                        ? (0, i.jsx)(b.m, {
                              text: et.intl.formatToPlainString(et.t.SFpsCH, {
                                  canceledCount: n,
                                  date: r.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(F.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: eE.Y5,
                                  color: O.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eC(e) {
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
            refreshNextStepLabel: p = et.intl.string(et.t.QBnNHq),
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
                    ((t = (0, o.bG)([Q.A], () => Q.A.getPremiumTypeSubscription())),
                    (0, o.bG)([X.A], () =>
                        t?.paymentSourceId != null ? X.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                E = s.interval,
                m = s.intervalCount,
                g = (0, o.bG)([S.A], () => S.A.getForSkuAndInterval((0, eu.mH)(eh.pe.GUILD), E, m)),
                A = (0, o.bG)([ea.default], () => ea.default.getCurrentUser()),
                I = (0, Y.A)({ forceFetch: !1 });
            a()(null != g, "Missing guildBoostingSubscriptionPlan");
            let T = [{ planId: g.id, quantity: 1 }],
                C = c?.items.find(
                    (e) => e.planId === eh.gD.PREMIUM_MONTH_TIER_2 || e.planId === eh.gD.PREMIUM_YEAR_TIER_2,
                );
            null != C && T.push(C);
            let N = c?.items.find(
                    (e) => e.planId === eh.gD.PREMIUM_MONTH_GUILD || e.planId === eh.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == p || !eh.uJ.has(p) || null == N,
                { analyticsLocations: O } = (0, H.Ay)(),
                [b, D] = (0, $.YV)({
                    subscriptionId: c?.id,
                    items: T,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: h.currency,
                    preventFetch: v,
                    analyticsLocations: O,
                    analyticsLocation: j.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, W.Tr)(b, D);
            let L = !v && null == b && null == D;
            r.useLayoutEffect(() => {
                u(L);
            }, [L, u]);
            let w = (0, Z.V)()?.subscription_trial?.sku_id === eh.pe.TIER_2,
                M = eu.Ay.hasBoostDiscount(A),
                P = M && null != c && eu.Ay.isPremiumAtLeast(eu.Ay.getPremiumType(c.planId), eh.PremiumTypes.TIER_1),
                x = b?.findInvoiceItemByPlanId(g.id),
                k =
                    null != x
                        ? { amount: x.amount, tax: 0, taxInclusive: !0, currency: b.currency }
                        : eu.Ay.getPrice(g.id, M, !1, h),
                U = l * k.amount,
                G = (0, z.ds)() && M && null != c,
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
                            showFractionalPremiumBanner: i === eh.xc.FP_SUB_PAUSED,
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
                  (n = et.intl.format(et.t.hf6YOY, { planName: eu.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = et.intl.format("upsell_trial" === F.upsellVariant ? et.t.ba1L74 : et.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, el.l9)(es.default.locale, eh.oX / 100),
                      freeSubscriptionCount: eh.M4,
                  }));
            let en = _.filter((e) => (0, y.I5)(e)).length,
                em = (0, eu.J$)(h.paymentSourceId),
                { ipCountryCode: eg } = (0, q.A)(),
                eT = "HR" === eg && k.currency === ef.Yr.EUR,
                eS =
                    G && null != c
                        ? (0, i.jsx)(ed.Ak, { text: (0, ed.zT)(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: R()(eE.hA, eE.G3), children: et.intl.string(et.t.jNY1FO) }),
                eC =
                    G && null != c
                        ? (0, i.jsx)(ed.Ak, { text: (0, ed.zT)(c.currentPeriodEnd), className: eE.jk })
                        : (0, i.jsx)("div", { className: ep._X, children: et.intl.string(et.t.jNY1FO) }),
                eN = F.showExistingSlotNotice
                    ? (0, i.jsx)(ey, { existingAvailableSlots: _, canceledCount: en, premiumSubscription: c })
                    : null,
                ev = F.showFractionalPremiumBanner ? (0, i.jsx)(ee.vi, { fractionalPremiumInfo: I }) : null,
                eR = em
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === eh.WT.YEAR
                              ? et.intl.string(et.t.YDpAzZ)
                              : t === eh.WT.MONTH && 1 === n
                                ? et.intl.string(et.t["6ZR3By"])
                                : null;
                      })({ intervalType: E, intervalCount: m }) ?? et.intl.string(et.t.K9Bmze))
                    : et.intl.string(et.t.K9Bmze),
                eO = L
                    ? (0, i.jsx)(V.y, {})
                    : em
                      ? (0, ec.$g)(k.amount, k.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, ec.$g)(t, n);
                            return i === eh.WT.YEAR
                                ? et.intl.formatToPlainString(et.t["8M04YJ"], { price: s })
                                : i === eh.WT.MONTH && 1 === r
                                  ? et.intl.formatToPlainString(et.t.VStWCR, { price: s })
                                  : i === eh.WT.MONTH && r > 1
                                    ? et.intl.formatToPlainString(et.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: E, intervalCount: m, amount: k.amount, currency: k.currency }),
                eb = L
                    ? (0, i.jsx)(V.y, {})
                    : (0, i.jsx)(J.A, {
                          price: U,
                          currency: k.currency,
                          intervalType: E,
                          intervalCount: m,
                          isPrepaidPaymentSource: em,
                      }),
                eD = L
                    ? (0, i.jsx)(V.y, {})
                    : f && !em
                      ? (0, ec.CE)((0, ec.$g)(U, k.currency), E, m)
                      : (0, ec.$g)(U, k.currency),
                eL = [],
                ew = [];
            if (eT) {
                let e = (0, i.jsx)(
                    B.A,
                    {
                        message: et.intl.formatToPlainString(et.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, ec.$g)(7.5345 * U, ef.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                eL.push(e), ew.push(e);
            }
            let eM = et.intl.format(et.t.Om31w8, { documentationLink: eo.A.getArticleURL(e_.MVz.LOCALIZED_PRICING) });
            return (
                eL.push((0, i.jsx)(B.A, { message: eM }, "localized-pricing")),
                ew.push((0, i.jsx)(eA, { message: eM }, "localized-pricing")),
                {
                    isLoading: L,
                    planLabel: eR,
                    planPriceContent: eO,
                    subtotalContent: eb,
                    refreshSubtotalContent: eD,
                    legacyDescriptionContent: eS,
                    refreshDescriptionContent: eC,
                    existingSlotNotice: eN,
                    fractionalBanner: ev,
                    legacyPricingNotes: eL,
                    refreshPricingNotes: ew,
                    discountCallout:
                        "reverse_trial" === F.upsellVariant
                            ? (0, i.jsx)(ei, {})
                            : (0, i.jsx)(er, { text: n, color: K.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === F.upsellVariant ? (0, i.jsx)(ei, {}) : (0, i.jsx)(eI, { text: n }),
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
    return (0, i.jsx)(h ? eS : eT, {
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
var eN = n(879100),
    ev = n(469633),
    eR = n(898640);
function eO(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: r,
            setNumGuildBoostsToPurchase: s,
            guildId: v,
            currency: R,
            closeGuildPerksModal: O,
            disablePremiumUpsell: b,
            setForceDisableSubmitButton: D,
            forceDisableSubmitButton: L,
            paymentModalArgs: w,
            premiumSubscriptionPaymentSourceId: M,
        } = (0, N.Oe)(),
        { paymentSourceId: P, activeSubscription: x } = (0, h.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        k = null != M || Object.keys(w.paymentSources).length > 0,
        U = (0, p.Ir)(k ? p.pn.REVIEW : p.pn.ADD_PAYMENT_STEPS),
        G = (0, _.A)(() => (0, y.D$)(T.A.boostSlots)),
        F = (0, g.n)("GuildBoostPurchaseModal"),
        V = A.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        B = F && V,
        j = (0, o.bG)([f.A], () => (null != v ? f.A.getGuild(v) : void 0), [v]),
        H = null != v ? I.A.getGuild(v) : null,
        Y = null == j && null == H,
        W = null != x && x.isPurchasedExternally,
        K = Object.keys(w.paymentSources).length > 0,
        $ = (0, o.bG)([S.A], () => (null != x ? (0, C.c9)(x.planId) : null)),
        z = (0, o.bG)([S.A], () => (null == $ ? S.A.get(ev.Z) : $));
    a()(null != v, "Missing guildId"), a()(null != z, "Missing nextPremiumSubscriptionPlan");
    let q = (0, i.jsx)(eC, {
        premiumSubscriptionPlan: z,
        numGuildBoosts: r,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: D,
        premiumSubscription: x,
        existingAvailableSlots: G,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != O && O(), (0, m.e)();
        },
        priceOptions:
            null != P ? { paymentSourceId: P, currency: null != R ? R : void 0 } : { currency: null != R ? R : void 0 },
        isRefreshEnabled: F,
        showRefreshSubtotalRate: B,
        refreshNextStepLabel: U,
    });
    return (
        W && null != x && null != x.paymentGateway
            ? (q = (0, i.jsxs)("div", {
                  className: eR.xK,
                  children: [
                      (0, i.jsx)(l.w, {
                          type: "critical",
                          children: et.intl.format(et.t["/m3Y3s"], { paymentGatewayName: ef.qm[x.paymentGateway] }),
                      }),
                      q,
                  ],
              }))
            : null != v &&
              !f.A.isGuildFetching(v) &&
              Y &&
              (q = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.p, {
                          messageType: u.Y.ERROR,
                          className: eR.MR,
                          children: et.intl.string(et.t.eAn6z2),
                      }),
                      q,
                  ],
              })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.dZ, { children: q }),
                (0, i.jsx)(E.UX, {
                    children: (0, i.jsx)(eN._, {
                        currentStep: p.pn.PLAN_SELECT,
                        isRefreshEnabled: F,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: F
                            ? (0, i.jsx)(c.$, {
                                  variant: "secondary",
                                  text: et.intl.string(et.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, i.jsx)(d.Q, { text: et.intl.string(et.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(c.$, {
                            variant: "primary",
                            text: et.intl.string(et.t["3PatSz"]),
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
                                forceDisableSubmitButton: L,
                                numGuildBoostsToPurchase: r,
                                isDisabledBecauseExternalSubscription: W,
                                isMissingGuildInformation: Y,
                            }),
                            onClick: () => {
                                b || (null != $ && $.premiumSubscriptionType === eh.PremiumTypes.TIER_2)
                                    ? n(null != M || K ? p.pn.REVIEW : p.pn.ADD_PAYMENT_STEPS)
                                    : n(p.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
