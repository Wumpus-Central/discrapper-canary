"use strict";
n.d(t, { c: () => eb });
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
    h = n(655857),
    f = n(211159),
    p = n(958340),
    E = n(166532),
    m = n(482132),
    g = n(87719),
    A = n(489254);
let I = (0, n(240921).Ay)({
    name: "2026-05-boosting-pre-checkout-modal-refresh-monthly-rate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var T = n(71393),
    S = n(178368),
    y = n(97352),
    C = n(473145),
    N = n(615396),
    v = n(526151);
n(321073);
var R = n(503698),
    O = n.n(R),
    b = n(661531),
    D = n(990078),
    L = n(408278),
    w = n(834040),
    M = n(499373),
    P = n(834730),
    x = n(403581),
    k = n(663803),
    U = n(320448),
    G = n(534514),
    F = n(104510),
    V = n(695366),
    B = n(289873),
    j = n(726656),
    H = n(793574),
    Y = n(688810),
    W = n(531260),
    K = n(666646),
    $ = n(404374),
    z = n(543767),
    q = n(881489),
    Z = n(477421),
    X = n(234419),
    Q = n(295405),
    J = n(166403),
    ee = n(363476),
    et = n(531506),
    en = n(375708),
    ei = n(51465);
function er() {
    return (0, i.jsxs)("div", {
        className: O()(ei.dt, ei.dE),
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/0253ce7b3c383fba5cadfd162724ef1769e45a69203a87698bf89d6b87a53acd.svg",
                alt: "reverse trial unlock",
                className: ei.qq,
            }),
            (0, i.jsx)(P.E, { variant: "text-sm/medium", className: ei.tD, children: en.intl.format(en.t.f5VHKm, {}) }),
        ],
    });
}
function es(e) {
    let { text: t, color: n } = e;
    return (0, i.jsxs)("div", {
        className: ei.dt,
        children: [(0, i.jsx)(x.t, { size: "md", className: ei.YW, color: n }), (0, i.jsx)("div", { children: t })],
    });
}
var ea = n(773669),
    eo = n(287809),
    el = n(975571),
    eu = n(252424),
    ec = n(428262),
    ed = n(580630),
    e_ = n(599669),
    eh = n(652215);
n(26279);
var ef = n(788868),
    ep = n(818348),
    eE = n(406263),
    em = n(7921);
function eg(e) {
    return "" === e || "-" === e;
}
function eA(e) {
    let { value: t, onChange: n, minValue: s = 1, maxValue: a = 30, ariaLabel: o } = e,
        [l, u] = r.useState(t);
    r.useEffect(() => {
        u(t);
    }, [t]);
    let c = "number" == typeof l,
        d = (e) => {
            u(e), eg(e) || n(e);
        };
    return (0, i.jsxs)("div", {
        className: eE.U$,
        children: [
            (0, i.jsx)(L.K, {
                variant: "secondary",
                size: "md",
                icon: w.Q,
                onClick: () => {
                    c && !(l <= s) && d(l - 1);
                },
                "aria-label": en.intl.string(en.t["k+ohJm"]),
                disabled: !c || l <= s,
            }),
            (0, i.jsx)("div", {
                className: eE.WJ,
                children: (0, i.jsx)("input", {
                    className: eE.Zh,
                    "aria-label": o,
                    inputMode: "numeric",
                    value: `${l}`,
                    onChange: (e) =>
                        ((e) => {
                            if (eg(e)) return void d(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= s) return void d(s);
                                if (t >= a) return void d(a);
                                d(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        eg(l) && u(t);
                    },
                }),
            }),
            (0, i.jsx)(L.K, {
                variant: "secondary",
                size: "md",
                icon: M.T,
                onClick: () => {
                    c && !(l >= a) && d(l + 1);
                },
                "aria-label": en.intl.string(en.t.w8Sc4B),
                disabled: !c || l >= a,
            }),
        ],
    });
}
function eI(e) {
    let { message: t } = e;
    return (0, i.jsx)(P.E, { variant: "text-xs/normal", color: "text-muted", className: eE.jH, children: t });
}
function eT(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: eE.Vk,
        children: [
            (0, i.jsx)("div", {
                className: eE.D0,
                children: (0, i.jsx)(x.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eE.ue,
                    color: $.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: eE.yP, children: t }),
        ],
    });
}
function eS(e) {
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
                className: em.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: em.E6,
                        children: [
                            (0, i.jsx)(k.l, {
                                value: n,
                                onChange: (e) => s(e),
                                className: em.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: em.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: O()(em.QK, { [em.S]: t }), children: o }),
                ],
            }),
            (0, i.jsx)("div", { className: em.J3 }),
            (0, i.jsxs)("div", {
                className: em.mP,
                children: [
                    (0, i.jsx)("div", { className: em.xp, children: en.intl.string(en.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: O()(em.__invalid_planSelectorSubtotalPrice, { [em.S]: t }),
                        children: l,
                    }),
                ],
            }),
            E.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
            f,
        ],
    });
}
function ey(e) {
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
        className: eE.xY,
        children: [
            h,
            (0, i.jsxs)("div", {
                className: eE.K3,
                children: [
                    (0, i.jsx)(P.E, {
                        variant: "text-md/medium",
                        className: eE.bk,
                        children: en.intl.string(en.t["r+SebU"]),
                    }),
                    (0, i.jsx)(U._, { className: eE.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(P.E, { variant: "text-md/medium", className: eE.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, i.jsxs)("div", {
                className: eE.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: eE.fX,
                        children: [
                            (0, i.jsx)(eA, {
                                value: n,
                                onChange: (e) => s(e),
                                ariaLabel: o,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)(P.E, { variant: "text-md/medium", className: eE.ny, children: o }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: O()(eE.El, { [em.S]: t }), children: l }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: eE.fh,
                children: [
                    (0, i.jsx)(G.D, {
                        variant: "heading-lg/semibold",
                        className: eE.O3,
                        children: en.intl.string(en.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: O()(eE.BU, { [em.S]: t }), children: c }),
                ],
            }),
            g.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
        ],
    });
}
function eC(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: r } = e;
    return (0, i.jsxs)("div", {
        className: em.Mv,
        children: [
            (0, i.jsx)(F._, { className: em.T5, color: b.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    en.intl.format(en.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != r
                        ? (0, i.jsx)(D.m, {
                              text: en.intl.formatToPlainString(en.t.SFpsCH, {
                                  canceledCount: n,
                                  date: r.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(V.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: em.Y5,
                                  color: b.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eN(e) {
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
            refreshNextStepLabel: p = en.intl.string(en.t.QBnNHq),
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
                    ((t = (0, o.bG)([J.A], () => J.A.getPremiumTypeSubscription())),
                    (0, o.bG)([Q.A], () =>
                        t?.paymentSourceId != null ? Q.A.getPaymentSource(t.paymentSourceId)?.country : null,
                    )),
                E = s.interval,
                m = s.intervalCount,
                g = (0, o.bG)([y.A], () => y.A.getForSkuAndInterval((0, ec.mH)(ef.pe.GUILD), E, m)),
                A = (0, o.bG)([eo.default], () => eo.default.getCurrentUser()),
                I = (0, W.A)({ forceFetch: !1 });
            a()(null != g, "Missing guildBoostingSubscriptionPlan");
            let T = [{ planId: g.id, quantity: 1 }],
                S = c?.items.find(
                    (e) => e.planId === ef.gD.PREMIUM_MONTH_TIER_2 || e.planId === ef.gD.PREMIUM_YEAR_TIER_2,
                );
            null != S && T.push(S);
            let N = c?.items.find(
                    (e) => e.planId === ef.gD.PREMIUM_MONTH_GUILD || e.planId === ef.gD.PREMIUM_YEAR_GUILD,
                ),
                v = null == p || !ef.uJ.has(p) || null == N,
                { analyticsLocations: R } = (0, Y.Ay)(),
                [b, D] = (0, z.YV)({
                    subscriptionId: c?.id,
                    items: T,
                    renewal: !0,
                    paymentSourceId: c?.paymentSourceId,
                    currency: h.currency,
                    preventFetch: v,
                    analyticsLocations: R,
                    analyticsLocation: H.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, K.Tr)(b, D);
            let L = !v && null == b && null == D;
            r.useLayoutEffect(() => {
                u(L);
            }, [L, u]);
            let w = (0, X.V)()?.subscription_trial?.sku_id === ef.pe.TIER_2,
                M = ec.Ay.hasBoostDiscount(A),
                P = M && null != c && ec.Ay.isPremiumAtLeast(ec.Ay.getPremiumType(c.planId), ef.PremiumTypes.TIER_1),
                x = b?.findInvoiceItemByPlanId(g.id),
                k =
                    null != x
                        ? { amount: x.amount, tax: 0, taxInclusive: !0, currency: b.currency }
                        : ec.Ay.getPrice(g.id, M, !1, h),
                U = l * k.amount,
                G = (0, q.ds)() && M && null != c,
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
                            showFractionalPremiumBanner: i === ef.xc.FP_SUB_PAUSED,
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
                  (n = en.intl.format(en.t.hf6YOY, { planName: ec.Ay.getTierDisplayNameByPlanId(c.planId) })))
                : (n = en.intl.format("upsell_trial" === F.upsellVariant ? en.t.ba1L74 : en.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, eu.l9)(ea.default.locale, ef.oX / 100),
                      freeSubscriptionCount: ef.M4,
                  }));
            let V = _.filter((e) => (0, C.I5)(e)).length,
                ei = (0, ec.J$)(h.paymentSourceId),
                { ipCountryCode: eg } = (0, Z.A)(),
                eA = "HR" === eg && k.currency === ep.Yr.EUR,
                eS =
                    G && null != c
                        ? (0, i.jsx)(e_.Ak, { text: (0, e_.zT)(c.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: O()(em.hA, em.G3), children: en.intl.string(en.t.jNY1FO) }),
                ey =
                    G && null != c
                        ? (0, i.jsx)(e_.Ak, { text: (0, e_.zT)(c.currentPeriodEnd), className: em.jk })
                        : (0, i.jsx)("div", { className: eE._X, children: en.intl.string(en.t.jNY1FO) }),
                eN = F.showExistingSlotNotice
                    ? (0, i.jsx)(eC, { existingAvailableSlots: _, canceledCount: V, premiumSubscription: c })
                    : null,
                ev = F.showFractionalPremiumBanner ? (0, i.jsx)(et.vi, { fractionalPremiumInfo: I }) : null,
                eR = ei
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === ef.WT.YEAR
                              ? en.intl.string(en.t.YDpAzZ)
                              : t === ef.WT.MONTH && 1 === n
                                ? en.intl.string(en.t["6ZR3By"])
                                : null;
                      })({ intervalType: E, intervalCount: m }) ?? en.intl.string(en.t.K9Bmze))
                    : en.intl.string(en.t.K9Bmze),
                eO = L
                    ? (0, i.jsx)(B.y, {})
                    : ei
                      ? (0, ed.$g)(k.amount, k.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                s = (0, ed.$g)(t, n);
                            return i === ef.WT.YEAR
                                ? en.intl.formatToPlainString(en.t["8M04YJ"], { price: s })
                                : i === ef.WT.MONTH && 1 === r
                                  ? en.intl.formatToPlainString(en.t.VStWCR, { price: s })
                                  : i === ef.WT.MONTH && r > 1
                                    ? en.intl.formatToPlainString(en.t.xJvAFU, { price: s })
                                    : null;
                        })({ intervalType: E, intervalCount: m, amount: k.amount, currency: k.currency }),
                eb = L
                    ? (0, i.jsx)(B.y, {})
                    : (0, i.jsx)(ee.A, {
                          price: U,
                          currency: k.currency,
                          intervalType: E,
                          intervalCount: m,
                          isPrepaidPaymentSource: ei,
                      }),
                eD = L
                    ? (0, i.jsx)(B.y, {})
                    : f && !ei
                      ? (0, ed.CE)((0, ed.$g)(U, k.currency), E, m)
                      : (0, ed.$g)(U, k.currency),
                eL = [],
                ew = [];
            if (eA) {
                let e = (0, i.jsx)(
                    j.A,
                    {
                        message: en.intl.formatToPlainString(en.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, ed.$g)(7.5345 * U, ep.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                eL.push(e), ew.push(e);
            }
            let eM = en.intl.format(en.t.Om31w8, { documentationLink: el.A.getArticleURL(eh.MVz.LOCALIZED_PRICING) });
            return (
                eL.push((0, i.jsx)(j.A, { message: eM }, "localized-pricing")),
                ew.push((0, i.jsx)(eI, { message: eM }, "localized-pricing")),
                {
                    isLoading: L,
                    planLabel: eR,
                    planPriceContent: eO,
                    subtotalContent: eb,
                    refreshSubtotalContent: eD,
                    legacyDescriptionContent: eS,
                    refreshDescriptionContent: ey,
                    existingSlotNotice: eN,
                    fractionalBanner: ev,
                    legacyPricingNotes: eL,
                    refreshPricingNotes: ew,
                    discountCallout:
                        "reverse_trial" === F.upsellVariant
                            ? (0, i.jsx)(er, {})
                            : (0, i.jsx)(es, { text: n, color: $.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === F.upsellVariant ? (0, i.jsx)(er, {}) : (0, i.jsx)(eT, { text: n }),
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
    return (0, i.jsx)(h ? ey : eS, {
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
var ev = n(879100),
    eR = n(469633),
    eO = n(898640);
function eb(e) {
    let { handleClose: t, handleStepChange: n } = e,
        {
            numGuildBoostsToPurchase: r,
            setNumGuildBoostsToPurchase: s,
            guildId: R,
            closeGuildPerksModal: O,
            disablePremiumUpsell: b,
            setForceDisableSubmitButton: D,
            forceDisableSubmitButton: L,
            paymentModalArgs: w,
            premiumSubscriptionPaymentSourceId: M,
        } = (0, v.Oe)(),
        { paymentSourceId: P, activeSubscription: x } = (0, f.t4)((e) => ({
            paymentSourceId: e.paymentSourceId,
            activeSubscription: e.activeSubscription,
        })),
        { displayCurrency: k } = (0, h.Jn)(),
        U = null != M || Object.keys(w.paymentSources).length > 0,
        G = (0, E.Ir)(U ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS),
        F = (0, _.A)(() => (0, C.D$)(S.A.boostSlots)),
        V = (0, A.n)("GuildBoostPurchaseModal"),
        B = I.useConfig({ location: "GuildBoostPurchaseModal" }).enabled,
        j = V && B,
        H = (0, o.bG)([p.A], () => (null != R ? p.A.getGuild(R) : void 0), [R]),
        Y = null != R ? T.A.getGuild(R) : null,
        W = null == H && null == Y,
        K = null != x && x.isPurchasedExternally,
        $ = Object.keys(w.paymentSources).length > 0,
        z = (0, o.bG)([y.A], () => (null != x ? (0, N.c9)(x.planId) : null)),
        q = (0, o.bG)([y.A], () => (null == z ? y.A.get(eR.Z) : z));
    a()(null != R, "Missing guildId"), a()(null != q, "Missing nextPremiumSubscriptionPlan");
    let Z = (0, i.jsx)(eN, {
        premiumSubscriptionPlan: q,
        numGuildBoosts: r,
        setNumGuildBoosts: s,
        setForceDisableSubmitButton: D,
        premiumSubscription: x,
        existingAvailableSlots: F,
        onClickPremiumSubscriptionLink: () => {
            if (__BILLING_STANDALONE__) {
                window.location.href = "discord://app/settings/nitro";
                return;
            }
            t(), null != O && O(), (0, g.e)();
        },
        priceOptions:
            null != P ? { paymentSourceId: P, currency: null != k ? k : void 0 } : { currency: null != k ? k : void 0 },
        isRefreshEnabled: V,
        showRefreshSubtotalRate: j,
        refreshNextStepLabel: G,
    });
    return (
        K && null != x && null != x.paymentGateway
            ? (Z = (0, i.jsxs)("div", {
                  className: eO.xK,
                  children: [
                      (0, i.jsx)(l.w, {
                          type: "critical",
                          children: en.intl.format(en.t["/m3Y3s"], { paymentGatewayName: ep.qm[x.paymentGateway] }),
                      }),
                      Z,
                  ],
              }))
            : null != R &&
              !p.A.isGuildFetching(R) &&
              W &&
              (Z = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.p, {
                          messageType: u.Y.ERROR,
                          className: eO.MR,
                          children: en.intl.string(en.t.eAn6z2),
                      }),
                      Z,
                  ],
              })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.dZ, { children: Z }),
                (0, i.jsx)(m.UX, {
                    children: (0, i.jsx)(ev._, {
                        currentStep: E.pn.PLAN_SELECT,
                        isRefreshEnabled: V,
                        backStep: void 0,
                        handleStepChange: n,
                        primaryButtonProps: null,
                        secondaryButton: V
                            ? (0, i.jsx)(c.$, {
                                  variant: "secondary",
                                  text: en.intl.string(en.t["ETE/oC"]),
                                  onClick: t,
                              })
                            : (0, i.jsx)(d.Q, { text: en.intl.string(en.t.oEAioF), onClick: t, variant: "secondary" }),
                        legacySubmitButton: (0, i.jsx)(c.$, {
                            variant: "primary",
                            text: en.intl.string(en.t["3PatSz"]),
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
                                isDisabledBecauseExternalSubscription: K,
                                isMissingGuildInformation: W,
                            }),
                            onClick: () => {
                                b || (null != z && z.premiumSubscriptionType === ef.PremiumTypes.TIER_2)
                                    ? n(null != M || $ ? E.pn.REVIEW : E.pn.ADD_PAYMENT_STEPS)
                                    : n(E.pn.PREMIUM_UPSELL);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
