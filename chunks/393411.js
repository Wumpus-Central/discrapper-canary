n.d(t, {
    R: () => Y,
    Z: () => W,
}),
    n(415506);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(681715),
    c = n(481060),
    u = n(366939),
    d = n(100527),
    f = n(906732),
    _ = n(975298),
    p = n(710845),
    h = n(963249),
    m = n(301766),
    g = n(509545),
    E = n(931331),
    b = n(754347),
    y = n(122289),
    O = n(74538),
    v = n(212895),
    I = n(296848),
    T = n(140465),
    S = n(695349),
    A = n(879463),
    C = n(104494),
    N = n(382791),
    R = n(987997),
    P = n(45474),
    w = n(474936),
    D = n(981631),
    x = n(388032),
    L = n(965406);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = new p.Z("SubscriptionHeader.tsx"),
    B = {
        page: D.ZY5.USER_SETTINGS,
        section: D.jXE.SETTINGS_PREMIUM,
        object: D.qAy.CARD,
    },
    Z = [D.O0b.PAUSED, D.O0b.PAUSE_PENDING, D.O0b.BILLING_RETRY];
function F(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: o,
        shouldUseDiscountMarketing: s,
        discountAmount: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(L.banner, o),
        children: [
            (0, r.jsx)("div", { className: L.bannerBackgroundImage }),
            (0, r.jsxs)("div", {
                className: L.detailsContainer,
                children: [
                    (0, r.jsx)("div", { className: L.image }),
                    (0, r.jsxs)("div", {
                        className: L.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.headerLabel,
                                children: [
                                    t,
                                    s &&
                                        null != l &&
                                        (0, r.jsx)(N.Cy, {
                                            text: x.intl.formatToPlainString(x.t.iiLbvu, { percent: l }),
                                            className: L.discountPill,
                                            colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                ],
                            }),
                            n,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: L.buttons,
                children: i,
            }),
        ],
    });
}
function V(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: o,
        shouldUseDiscountMarketing: s,
        discountAmount: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(L.banner, o, L.repositioned),
        children: [
            (0, r.jsx)("div", { className: L.bannerBackgroundImage }),
            (0, r.jsx)("div", {
                className: L.detailsContainer,
                children: (0, r.jsx)("div", {
                    className: L.details,
                    children: (0, r.jsxs)("div", {
                        className: L.headerLabel,
                        children: [
                            (0, r.jsx)("div", { className: L.image }),
                            (0, r.jsxs)("div", {
                                className: L.headerColumnB,
                                children: [
                                    t,
                                    s &&
                                        null != l &&
                                        (0, r.jsx)(N.Cy, {
                                            text: x.intl.formatToPlainString(x.t.iiLbvu, { percent: l }),
                                            className: L.discountPill,
                                            colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: L.buttons,
                children: i,
            }),
        ],
    });
}
function H() {
    return (0, r.jsxs)("div", {
        className: L.wordMark,
        children: [
            (0, r.jsx)(b.Z, {
                className: L.discordWordmark,
                "aria-label": x.intl.string(x.t.FSOz78),
            }),
            (0, r.jsx)("div", { className: L.classicWordmark }),
        ],
    });
}
function Y() {
    let { analyticsLocations: e } = (0, f.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(F, {
        wordMark: (0, r.jsx)(H, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: L.planInfo,
            children: x.intl.string(x.t.R0GJL2),
        }),
        buttons: (0, r.jsx)(R.Z, {
            className: L.toolsButton,
            onClick: () =>
                (0, h.Z)({
                    subscriptionTier: w.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: B,
                }),
            text: x.intl.string(x.t["/ygMUY"]),
        }),
        statusClasses: { [L.tier1]: !0 },
    });
}
let W = function (e) {
    var t;
    let { subscription: i, renewalInvoicePreview: o, paymentSource: p, busy: N, analyticsLocation: M } = e,
        k = "subscription_header",
        { analyticsLocations: Y } = (0, f.ZP)(d.Z.SUBSCRIPTION_HEADER),
        { fractionalState: W } = (0, _.Z)({ forceFetch: !1 }),
        K = W === w.a$.FP_SUB_PAUSED,
        { enabled: z } = (0, A.ZP)({ location: k });
    (w.pj.has(i.planId) && D.JwP.ALL_PAUSEABLE.has(i.status) && !K) || (z = !1);
    let q = (0, C.Ng)(),
        X = null == q || null == (t = q.discount) ? void 0 : t.amount,
        Q = (0, T.t7)(),
        J = (0, T.lr)(),
        $ = (0, S.W)(),
        ee = () => {
            (i.status === D.O0b.ACTIVE || i.status === D.O0b.PAST_DUE || i.status === D.O0b.PAUSED) &&
                er(P.R.PAUSE_SELECT);
        },
        et = () => {
            (i.status === D.O0b.ACTIVE || i.status === D.O0b.PAST_DUE || i.status === D.O0b.PAUSE_PENDING || K) && er();
        },
        en = () => {
            i.status === D.O0b.BILLING_RETRY && er(P.R.CONFIRM);
        },
        er = (e) => {
            (0, c.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await n.e("26526").then(n.bind(n, 48813));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        U(j({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: M,
                            analyticsLocations: Y,
                            initialStep: e,
                        }),
                    );
            });
        },
        ei = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = g.Z.get(i.premiumPlanIdFromItems);
                if (null == e) return void G.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, v.DE)(e, null == p ? void 0 : p.id, !1),
                    n = t.length > 0 ? t[0] : i.currency,
                    r = !1;
                1 === t.length &&
                    (null == p ? void 0 : p.id) === i.paymentSourceId &&
                    (0, v.tD)(e.id, n, null == p ? void 0 : p.id) &&
                    (r = !0),
                    r
                        ? u.O5(i, Y)
                        : (0, h.Z)({
                              initialPlanId: i.premiumPlanIdFromItems,
                              analyticsLocations: Y,
                              analyticsLocation: M,
                              analyticsObject: B,
                              subscription: i,
                          });
            }
        },
        ea = () => {
            if (!Z.includes(i.status) || null == i.pauseEndsAt)
                return void (0, y.q2)(Error("Invalid subscription to resume"), {
                    extra: {
                        subscriptionId: i.id,
                        status: i.status,
                        pauseEndsAt: i.pauseEndsAt,
                    },
                });
            i.status === D.O0b.PAUSED
                ? (0, h.Z)({
                      initialPlanId: i.premiumPlanIdFromItems,
                      analyticsLocations: Y,
                      analyticsLocation: M,
                      analyticsObject: B,
                      subscription: i,
                      skipConfirm: !0,
                  })
                : u.v4(i, Y);
        },
        eo = () => {
            i.status === D.O0b.PAUSED && er(P.R.PAUSE_SELECT);
        },
        es = () => {
            er(P.R.WHAT_YOU_LOSE);
        },
        el = (e) => (
            s()(null != o, "Expected renewalInvoicePreview"),
            (0, r.jsx)("div", {
                className: L.planInfo,
                children: $
                    ? x.intl.format(x.t["/SfHwl"], { weeks: 1 })
                    : (0, O.qV)({
                          planId: e,
                          subscription: i,
                          renewalInvoicePreview: o,
                          hasDiscountApplied: Q,
                          activeDiscountInfo: J,
                          hasFractionalPremiumWithSub: K,
                      }),
            })
        ),
        ec = () => {
            let { status: e } = i;
            if (i.isPurchasedExternally) {
                let e = (0, O.JE)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, r.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: N,
                        text: x.intl.string(x.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function t() {
                let e = O.ZP.isSwitchingPlansDisabled(i),
                    t = O.ZP.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: L.toolsButtons,
                    children: [
                        z
                            ? (0, r.jsx)("div", {
                                  className: L.secondaryBannerTextButtonContainerWithPause,
                                  children: (0, r.jsx)(c.Avr, {
                                      variant: "always-white",
                                      disabled: N,
                                      onClick: ee,
                                      size: "sm",
                                      text: x.intl.string(x.t.eFlYVA),
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: L.secondaryBannerTextButtonContainer,
                                  children: (0, r.jsx)(c.Avr, {
                                      variant: "always-white",
                                      onClick: et,
                                      disabled: N,
                                      size: "sm",
                                      text: x.intl.string(x.t["ETE/oC"]),
                                  }),
                              }),
                        (0, r.jsx)(l.u, {
                            text: t,
                            asContainer: !0,
                            children: (0, r.jsx)(R.Z, {
                                className: a()(L.toolsButton, L.premiumSettingsPushButton),
                                disabled: e,
                                onClick: () => {
                                    (0, h.Z)({
                                        analyticsLocations: Y,
                                        analyticsLocation: M,
                                        analyticsObject: B,
                                        subscription: i,
                                    });
                                },
                                text: x.intl.string(x.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (O.ZP.isBaseSubscriptionCanceled(i))
                return (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: L.toolsButton,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: x.intl.string(x.t.iIvF2z),
                        loading: N,
                        onClick: ei,
                    }),
                });
            switch (e) {
                case D.O0b.BILLING_RETRY:
                    return (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: en,
                        loading: N,
                        text: x.intl.string(x.t["ETE/oC"]),
                    });
                case D.O0b.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: L.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.secondaryBannerTextButtonContainer,
                                children: (0, r.jsx)(c.Avr, {
                                    variant: "always-white",
                                    disabled: N,
                                    onClick: et,
                                    size: "sm",
                                    text: x.intl.string(x.t.cM1H0K),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: L.toolsButton,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: x.intl.string(x.t.TgV5Qf),
                                    loading: N,
                                    onClick: ea,
                                }),
                            }),
                        ],
                    });
                case D.O0b.PAUSED:
                    if (K) return t();
                    let { durations: n } = (0, I.AT)(i);
                    return (0, r.jsxs)("div", {
                        className: L.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.secondaryBannerTextButtonContainer,
                                children:
                                    n.length > 0
                                        ? (0, r.jsx)(c.Avr, {
                                              variant: "always-white",
                                              onClick: eo,
                                              disabled: N,
                                              size: "sm",
                                              text: x.intl.string(x.t.jNHWt6),
                                          })
                                        : (0, r.jsx)(c.Avr, {
                                              variant: "always-white",
                                              onClick: es,
                                              disabled: N,
                                              size: "sm",
                                              text: x.intl.string(x.t.cM1H0K),
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: L.toolsButton,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: x.intl.string(x.t.zpi5pg),
                                    loading: N,
                                    onClick: ea,
                                }),
                            }),
                        ],
                    });
                case D.O0b.ACTIVE:
                case D.O0b.PAST_DUE:
                    return t();
            }
        },
        eu = O.ZP.getPlanIdFromInvoice(i, o);
    if ((0, m.Q0)(eu)) return null;
    let ed = O.ZP.getStatusFromInvoice(i, o),
        ef = O.ZP.getPremiumType(eu),
        e_ = {
            [L.tier0]: ef === w.PremiumTypes.TIER_0,
            [L.tier1]: ef === w.PremiumTypes.TIER_1,
            [L.tier2]: ef === w.PremiumTypes.TIER_2,
            [L.canceled]: ed === D.O0b.CANCELED,
            [L.pausePending]: ed === D.O0b.PAUSE_PENDING,
            [L.paused]: ed === D.O0b.PAUSED && !K,
            [L.failedPayment]: (0, O.zV)(ed),
        },
        ep = null;
    switch (ef) {
        case w.PremiumTypes.TIER_0:
            ep = (0, r.jsxs)("div", {
                className: L.wordMark,
                children: [
                    (0, r.jsx)(b.Z, {
                        className: L.discordWordmark,
                        "aria-label": x.intl.string(x.t["t9uG/o"]),
                    }),
                    (0, r.jsx)("div", { className: L.basicWordmark }),
                ],
            });
            break;
        case w.PremiumTypes.TIER_1:
            ep = (0, r.jsx)(H, {});
            break;
        case w.PremiumTypes.TIER_2:
            ep = (0, r.jsx)(E.Z, {
                className: L.planName,
                "aria-label": x.intl.string(x.t.lpNrPu),
            });
    }
    let eh = Z.includes(i.status) && !K ? V : F;
    return (0, r.jsx)(eh, {
        wordMark: ep,
        subscriptionInfo: el(eu),
        buttons: ec(),
        statusClasses: e_,
        shouldUseDiscountMarketing: Q,
        discountAmount: X,
    });
};
