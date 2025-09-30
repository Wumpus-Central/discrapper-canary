n.d(t, {
    R: () => H,
    Z: () => Y,
}),
    n(415506);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(481060),
    c = n(366939),
    u = n(100527),
    d = n(906732),
    f = n(975298),
    _ = n(710845),
    p = n(963249),
    h = n(301766),
    m = n(509545),
    g = n(931331),
    E = n(754347),
    b = n(122289),
    y = n(74538),
    O = n(212895),
    v = n(296848),
    I = n(140465),
    T = n(695349),
    S = n(879463),
    A = n(104494),
    C = n(382791),
    N = n(987997),
    R = n(45474),
    P = n(474936),
    w = n(981631),
    D = n(388032),
    L = n(965406);
function x(e, t, n) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = new _.Z("SubscriptionHeader.tsx"),
    G = {
        page: w.ZY5.USER_SETTINGS,
        section: w.jXE.SETTINGS_PREMIUM,
        object: w.qAy.CARD,
    },
    B = [w.O0b.PAUSED, w.O0b.PAUSE_PENDING, w.O0b.BILLING_RETRY];
function Z(e) {
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
                                        (0, r.jsx)(C.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: l }),
                                            className: L.discountPill,
                                            colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL,
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
                                        (0, r.jsx)(C.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: l }),
                                            className: L.discountPill,
                                            colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL,
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
function V() {
    return (0, r.jsxs)("div", {
        className: L.wordMark,
        children: [
            (0, r.jsx)(E.Z, {
                className: L.discordWordmark,
                "aria-label": D.intl.string(D.t["FSOz7+"]),
            }),
            (0, r.jsx)("div", { className: L.classicWordmark }),
        ],
    });
}
function H() {
    let { analyticsLocations: e } = (0, d.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(Z, {
        wordMark: (0, r.jsx)(V, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: L.planInfo,
            children: D.intl.string(D.t.R0GJLy),
        }),
        buttons: (0, r.jsx)(N.Z, {
            className: L.toolsButton,
            onClick: () =>
                (0, p.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: G,
                }),
            text: D.intl.string(D.t["/ygMUV"]),
        }),
        statusClasses: { [L.tier1]: !0 },
    });
}
let Y = function (e) {
    var t;
    let { subscription: i, renewalInvoicePreview: a, paymentSource: o, busy: _, analyticsLocation: C } = e,
        x = "subscription_header",
        { analyticsLocations: M } = (0, d.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: H } = (0, f.Z)({ forceFetch: !1 }),
        Y = H === P.a$.FP_SUB_PAUSED,
        { enabled: W } = (0, S.ZP)({ location: x });
    (P.pj.has(i.planId) && w.JwP.ALL_PAUSEABLE.has(i.status) && !Y) || (W = !1);
    let K = (0, A.Ng)(),
        z = null == K || null == (t = K.discount) ? void 0 : t.amount,
        q = (0, I.t7)(),
        X = (0, I.lr)(),
        Q = (0, T.W)(),
        J = () => {
            (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSED) &&
                et(R.R.PAUSE_SELECT);
        },
        $ = () => {
            (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSE_PENDING || Y) && et();
        },
        ee = () => {
            i.status === w.O0b.BILLING_RETRY && et(R.R.CONFIRM);
        },
        et = (e) => {
            (0, l.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("17938"),
                    n.e("69432"),
                    n.e("26526"),
                    n.e("46573"),
                ]).then(n.bind(n, 48813));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        k(j({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: C,
                            analyticsLocations: M,
                            initialStep: e,
                        }),
                    );
            });
        },
        en = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = m.Z.get(i.premiumPlanIdFromItems);
                if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, O.DE)(e, null == o ? void 0 : o.id, !1),
                    n = t.length > 0 ? t[0] : i.currency,
                    r = !1;
                1 === t.length &&
                    (null == o ? void 0 : o.id) === i.paymentSourceId &&
                    (0, O.tD)(e.id, n, null == o ? void 0 : o.id) &&
                    (r = !0),
                    r
                        ? c.O5(i, M)
                        : (0, p.Z)({
                              initialPlanId: i.premiumPlanIdFromItems,
                              analyticsLocations: M,
                              analyticsLocation: C,
                              analyticsObject: G,
                              subscription: i,
                          });
            }
        },
        er = () => {
            if (!B.includes(i.status) || null == i.pauseEndsAt)
                return void (0, b.q2)(Error("Invalid subscription to resume"), {
                    extra: {
                        subscriptionId: i.id,
                        status: i.status,
                        pauseEndsAt: i.pauseEndsAt,
                    },
                });
            i.status === w.O0b.PAUSED
                ? (0, p.Z)({
                      initialPlanId: i.premiumPlanIdFromItems,
                      analyticsLocations: M,
                      analyticsLocation: C,
                      analyticsObject: G,
                      subscription: i,
                      skipConfirm: !0,
                  })
                : c.v4(i, M);
        },
        ei = () => {
            i.status === w.O0b.PAUSED && et(R.R.PAUSE_SELECT);
        },
        ea = () => {
            et(R.R.WHAT_YOU_LOSE);
        },
        eo = (e) => (
            s()(null != a, "Expected renewalInvoicePreview"),
            (0, r.jsx)("div", {
                className: L.planInfo,
                children: Q
                    ? D.intl.format(D.t["/SfHws"], { weeks: 1 })
                    : (0, y.qV)({
                          planId: e,
                          subscription: i,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: q,
                          activeDiscountInfo: X,
                          hasFractionalPremiumWithSub: Y,
                      }),
            })
        ),
        es = () => {
            let { status: e } = i;
            if (i.isPurchasedExternally) {
                let e = (0, y.JE)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, r.jsx)(l.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(l.zxk, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: _,
                        text: D.intl.string(D.t.obRG6e).toLocaleUpperCase(),
                    }),
                });
            }
            function t() {
                let e = y.ZP.isSwitchingPlansDisabled(i),
                    t = y.ZP.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: L.toolsButtons,
                    children: [
                        W
                            ? (0, r.jsx)("div", {
                                  className: L.secondaryBannerTextButtonContainerWithPause,
                                  children: (0, r.jsx)(l.Avr, {
                                      variant: "always-white",
                                      disabled: _,
                                      onClick: J,
                                      size: "sm",
                                      text: D.intl.string(D.t.eFlYVF),
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: L.secondaryBannerTextButtonContainer,
                                  children: (0, r.jsx)(l.Avr, {
                                      variant: "always-white",
                                      onClick: $,
                                      disabled: _,
                                      size: "sm",
                                      text: D.intl.string(D.t["ETE/oK"]),
                                  }),
                              }),
                        (0, r.jsx)(l.ua7, {
                            text: t,
                            children: (t) =>
                                (0, r.jsx)(
                                    N.Z,
                                    k(j({}, t), {
                                        className: L.toolsButton,
                                        disabled: e,
                                        onClick: () => {
                                            (0, p.Z)({
                                                analyticsLocations: M,
                                                analyticsLocation: C,
                                                analyticsObject: G,
                                                subscription: i,
                                            });
                                        },
                                        text: D.intl.string(D.t["dylp//"]),
                                    }),
                                ),
                        }),
                    ],
                });
            }
            if (y.ZP.isBaseSubscriptionCanceled(i))
                return (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: L.toolsButton,
                    children: (0, r.jsx)(l.zxk, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: D.intl.string(D.t.iIvF29),
                        loading: _,
                        onClick: en,
                    }),
                });
            switch (e) {
                case w.O0b.BILLING_RETRY:
                    return (0, r.jsx)(l.zxk, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: ee,
                        loading: _,
                        text: D.intl.string(D.t["ETE/oK"]),
                    });
                case w.O0b.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: L.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.secondaryBannerTextButtonContainer,
                                children: (0, r.jsx)(l.Avr, {
                                    variant: "always-white",
                                    disabled: _,
                                    onClick: $,
                                    size: "sm",
                                    text: D.intl.string(D.t.cM1H0N),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: L.toolsButton,
                                children: (0, r.jsx)(l.zxk, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.TgV5QU),
                                    loading: _,
                                    onClick: er,
                                }),
                            }),
                        ],
                    });
                case w.O0b.PAUSED:
                    if (Y) return t();
                    let { durations: n } = (0, v.AT)(i);
                    return (0, r.jsxs)("div", {
                        className: L.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.secondaryBannerTextButtonContainer,
                                children:
                                    n.length > 0
                                        ? (0, r.jsx)(l.Avr, {
                                              variant: "always-white",
                                              onClick: ei,
                                              disabled: _,
                                              size: "sm",
                                              text: D.intl.string(D.t.jNHWt7),
                                          })
                                        : (0, r.jsx)(l.Avr, {
                                              variant: "always-white",
                                              onClick: ea,
                                              disabled: _,
                                              size: "sm",
                                              text: D.intl.string(D.t.cM1H0N),
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: L.toolsButton,
                                children: (0, r.jsx)(l.zxk, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.zpi5pq),
                                    loading: _,
                                    onClick: er,
                                }),
                            }),
                        ],
                    });
                case w.O0b.ACTIVE:
                case w.O0b.PAST_DUE:
                    return t();
            }
        },
        el = y.ZP.getPlanIdFromInvoice(i, a);
    if ((0, h.Q0)(el)) return null;
    let ec = y.ZP.getStatusFromInvoice(i, a),
        eu = y.ZP.getPremiumType(el),
        ed = {
            [L.tier0]: eu === P.p9.TIER_0,
            [L.tier1]: eu === P.p9.TIER_1,
            [L.tier2]: eu === P.p9.TIER_2,
            [L.canceled]: ec === w.O0b.CANCELED,
            [L.pausePending]: ec === w.O0b.PAUSE_PENDING,
            [L.paused]: ec === w.O0b.PAUSED && !Y,
            [L.failedPayment]: (0, y.zV)(ec),
        },
        ef = null;
    switch (eu) {
        case P.p9.TIER_0:
            ef = (0, r.jsxs)("div", {
                className: L.wordMark,
                children: [
                    (0, r.jsx)(E.Z, {
                        className: L.discordWordmark,
                        "aria-label": D.intl.string(D.t["t9uG/v"]),
                    }),
                    (0, r.jsx)("div", { className: L.basicWordmark }),
                ],
            });
            break;
        case P.p9.TIER_1:
            ef = (0, r.jsx)(V, {});
            break;
        case P.p9.TIER_2:
            ef = (0, r.jsx)(g.Z, {
                className: L.planName,
                "aria-label": D.intl.string(D.t.lpNrPj),
            });
    }
    let e_ = B.includes(i.status) && !Y ? F : Z;
    return (0, r.jsx)(e_, {
        wordMark: ef,
        subscriptionInfo: eo(el),
        buttons: es(),
        statusClasses: ed,
        shouldUseDiscountMarketing: q,
        discountAmount: z,
    });
};
