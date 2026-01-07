n.d(t, {
    R: () => K,
    Z: () => z,
}),
    n(415506);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(681715),
    c = n(481060),
    u = n(366939),
    d = n(100527),
    f = n(906732),
    p = n(975298),
    _ = n(710845),
    m = n(963249),
    h = n(301766),
    g = n(509545),
    E = n(931331),
    b = n(754347),
    y = n(122289),
    O = n(74538),
    v = n(212895),
    S = n(296848),
    I = n(140465),
    T = n(695349),
    C = n(879463),
    A = n(765456),
    N = n(622909),
    P = n(382791),
    R = n(987997),
    w = n(45474),
    D = n(474936),
    x = n(981631),
    L = n(362786),
    j = n(388032),
    M = n(423768);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = new _.Z("SubscriptionHeader.tsx"),
    B = {
        page: x.ZY5.USER_SETTINGS,
        section: x.jXE.SETTINGS_PREMIUM,
        object: x.qAy.CARD,
    },
    V = [x.O0b.PAUSED, x.O0b.PAUSE_PENDING, x.O0b.BILLING_RETRY];
function H(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: o,
        shouldUseDiscountMarketing: s,
        discountAmount: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(M.banner, o),
        children: [
            (0, r.jsx)("div", { className: M.bannerBackgroundImage }),
            (0, r.jsxs)("div", {
                className: M.detailsContainer,
                children: [
                    (0, r.jsx)("div", { className: M.image }),
                    (0, r.jsxs)("div", {
                        className: M.details,
                        children: [
                            (0, r.jsxs)("div", {
                                className: M.headerLabel,
                                children: [
                                    t,
                                    s &&
                                        null != l &&
                                        (0, r.jsx)(P.Cy, {
                                            text: j.intl.formatToPlainString(j.t.iiLbvu, { percent: l }),
                                            className: M.discountPill,
                                            colorOptions: P.VE.PREMIUM_TIER_2_WHITE_FILL,
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
                className: M.buttons,
                children: i,
            }),
        ],
    });
}
function Y(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: o,
        shouldUseDiscountMarketing: s,
        discountAmount: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(M.banner, o, M.repositioned),
        children: [
            (0, r.jsx)("div", { className: M.bannerBackgroundImage }),
            (0, r.jsx)("div", {
                className: M.detailsContainer,
                children: (0, r.jsx)("div", {
                    className: M.details,
                    children: (0, r.jsxs)("div", {
                        className: M.headerLabel,
                        children: [
                            (0, r.jsx)("div", { className: M.image }),
                            (0, r.jsxs)("div", {
                                className: M.headerColumnB,
                                children: [
                                    t,
                                    s &&
                                        null != l &&
                                        (0, r.jsx)(P.Cy, {
                                            text: j.intl.formatToPlainString(j.t.iiLbvu, { percent: l }),
                                            className: M.discountPill,
                                            colorOptions: P.VE.PREMIUM_TIER_2_WHITE_FILL,
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
                className: M.buttons,
                children: i,
            }),
        ],
    });
}
function W() {
    return (0, r.jsxs)("div", {
        className: M.wordMark,
        children: [
            (0, r.jsx)(b.Z, {
                className: M.discordWordmark,
                "aria-label": j.intl.string(j.t.FSOz78),
            }),
            (0, r.jsx)("div", { className: M.classicWordmark }),
        ],
    });
}
function K() {
    let { analyticsLocations: e } = (0, f.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(H, {
        wordMark: (0, r.jsx)(W, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: M.planInfo,
            children: j.intl.string(j.t.R0GJL2),
        }),
        buttons: (0, r.jsx)(R.Z, {
            className: M.toolsButton,
            onClick: () =>
                (0, m.Z)({
                    subscriptionTier: D.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: B,
                }),
            text: j.intl.string(j.t["/ygMUY"]),
        }),
        statusClasses: { [M.tier1]: !0 },
    });
}
let z = function (e) {
    var t;
    let {
            subscription: i,
            currentInvoicePreview: o,
            renewalInvoicePreview: _,
            paymentSource: P,
            busy: k,
            analyticsLocation: G,
        } = e,
        K = "subscription_header",
        { analyticsLocations: z } = (0, f.ZP)(d.Z.SUBSCRIPTION_HEADER),
        q = (0, p.Z)({ forceFetch: !1 }),
        { fractionalState: Q } = q,
        X = Q === D.a$.FP_SUB_PAUSED,
        { enabled: J } = (0, C.ZP)({ location: K }),
        $ = (0, A.a)(K);
    (D.pj.has(i.planId) && x.JwP.ALL_PAUSEABLE.has(i.status) && !X) || (J = !1);
    let ee = (0, N.N)(),
        et = null == ee || null == (t = ee.discount) ? void 0 : t.amount,
        en = (0, I.t7)(),
        er = (0, I.lr)(),
        ei = (0, T.W)(),
        ea = () => {
            (i.status === x.O0b.ACTIVE || i.status === x.O0b.PAST_DUE || i.status === x.O0b.PAUSED) &&
                el(w.R.PAUSE_SELECT);
        },
        eo = () => {
            (i.status === x.O0b.ACTIVE || i.status === x.O0b.PAST_DUE || i.status === x.O0b.PAUSE_PENDING || X) && el();
        },
        es = () => {
            i.status === x.O0b.BILLING_RETRY && el(w.R.CONFIRM);
        },
        el = (e) => {
            (0, c.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await n.e("26526").then(n.bind(n, 48813));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        Z(U({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: G,
                            analyticsLocations: z,
                            initialStep: e,
                        }),
                    );
            });
        },
        ec = () => {
            s()(null != _, "Expected renewalInvoicePreview"),
                (0, c.ZDy)(async () => {
                    let { PremiumResubscribeModal: e } = await Promise.all([
                        n.e("84992"),
                        n.e("16"),
                        n.e("23242"),
                        n.e("31800"),
                    ]).then(n.bind(n, 445968));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            Z(U({}, t), {
                                premiumSubscription: i,
                                analyticsLocations: z,
                                fractionalPremiumInfo: q,
                                renewalInvoicePreview: _,
                            }),
                        );
                });
        },
        eu = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = g.Z.get(i.premiumPlanIdFromItems);
                if (null == e) return void F.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, v.DE)(e, null == P ? void 0 : P.id, !1),
                    n = t.length > 0 ? t[0] : i.currency,
                    r = !0;
                1 === t.length &&
                    (null == P ? void 0 : P.id) === i.paymentSourceId &&
                    (0, v.tD)(e.id, n, null == P ? void 0 : P.id) &&
                    (r = !1),
                    r
                        ? (0, m.Z)({
                              initialPlanId: i.premiumPlanIdFromItems,
                              analyticsLocations: z,
                              analyticsLocation: G,
                              analyticsObject: B,
                              subscription: i,
                          })
                        : $
                          ? ec()
                          : u.O5(i, z);
            }
        },
        ed = () => {
            if (!V.includes(i.status) || null == i.pauseEndsAt)
                return void (0, y.q2)(Error("Invalid subscription to resume"), {
                    extra: {
                        subscriptionId: i.id,
                        status: i.status,
                        pauseEndsAt: i.pauseEndsAt,
                    },
                });
            i.status === x.O0b.PAUSED && i.pauseReason !== L.Id.USER_TEMPORARY_BAN
                ? (0, m.Z)({
                      initialPlanId: i.premiumPlanIdFromItems,
                      analyticsLocations: z,
                      analyticsLocation: G,
                      analyticsObject: B,
                      subscription: i,
                      skipConfirm: !0,
                  })
                : u.v4(i, z);
        },
        ef = () => {
            i.status === x.O0b.PAUSED && el(w.R.PAUSE_SELECT);
        },
        ep = () => {
            el(w.R.WHAT_YOU_LOSE);
        },
        e_ = (e) => (
            s()(null != o, "Expected currentInvoicePreview"),
            (0, r.jsx)("div", {
                className: M.planInfo,
                children: ei
                    ? j.intl.format(j.t["/SfHwl"], { weeks: 1 })
                    : (0, O.qV)({
                          planId: e,
                          subscription: i,
                          renewalInvoicePreview: o,
                          hasDiscountApplied: en,
                          activeDiscountInfo: er,
                          hasFractionalPremiumWithSub: X,
                      }),
            })
        ),
        em = () => {
            let { status: e } = i;
            if (i.isPurchasedExternally) {
                let e = (0, O.JE)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, r.jsx)(c.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: k,
                        text: j.intl.string(j.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function t() {
                let e = O.ZP.isSwitchingPlansDisabled(i),
                    t = O.ZP.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: M.toolsButtons,
                    children: [
                        J
                            ? (0, r.jsx)("div", {
                                  className: M.secondaryBannerTextButtonContainerWithPause,
                                  children: (0, r.jsx)(c.Avr, {
                                      variant: "always-white",
                                      disabled: k,
                                      onClick: ea,
                                      size: "sm",
                                      text: j.intl.string(j.t.eFlYVA),
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: M.secondaryBannerTextButtonContainer,
                                  children: (0, r.jsx)(c.Avr, {
                                      variant: "always-white",
                                      onClick: eo,
                                      disabled: k,
                                      size: "sm",
                                      text: j.intl.string(j.t["ETE/oC"]),
                                  }),
                              }),
                        (0, r.jsx)(l.u, {
                            text: t,
                            asContainer: !0,
                            children: (0, r.jsx)(R.Z, {
                                className: a()(M.toolsButton, M.premiumSettingsPushButton),
                                disabled: e,
                                onClick: () => {
                                    (0, m.Z)({
                                        analyticsLocations: z,
                                        analyticsLocation: G,
                                        analyticsObject: B,
                                        subscription: i,
                                    });
                                },
                                text: j.intl.string(j.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (O.ZP.isBaseSubscriptionCanceled(i))
                return (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: M.toolsButton,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: j.intl.string(j.t.iIvF2z),
                        loading: k,
                        onClick: eu,
                    }),
                });
            switch (e) {
                case x.O0b.BILLING_RETRY:
                    return (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: es,
                        loading: k,
                        text: j.intl.string(j.t["ETE/oC"]),
                    });
                case x.O0b.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: M.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: M.secondaryBannerTextButtonContainer,
                                children: (0, r.jsx)(c.Avr, {
                                    variant: "always-white",
                                    disabled: k,
                                    onClick: eo,
                                    size: "sm",
                                    text: j.intl.string(j.t.cM1H0K),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: M.toolsButton,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: j.intl.string(j.t.TgV5Qf),
                                    loading: k,
                                    onClick: ed,
                                }),
                            }),
                        ],
                    });
                case x.O0b.PAUSED:
                    if (X) return t();
                    let { durations: n } = (0, S.AT)(i);
                    return (0, r.jsxs)("div", {
                        className: M.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: M.secondaryBannerTextButtonContainer,
                                children:
                                    n.length > 0
                                        ? (0, r.jsx)(c.Avr, {
                                              variant: "always-white",
                                              onClick: ef,
                                              disabled: k,
                                              size: "sm",
                                              text: j.intl.string(j.t.jNHWt6),
                                          })
                                        : (0, r.jsx)(c.Avr, {
                                              variant: "always-white",
                                              onClick: ep,
                                              disabled: k,
                                              size: "sm",
                                              text: j.intl.string(j.t.cM1H0K),
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: M.toolsButton,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: j.intl.string(j.t.zpi5pg),
                                    loading: k,
                                    onClick: ed,
                                }),
                            }),
                        ],
                    });
                case x.O0b.ACTIVE:
                case x.O0b.PAST_DUE:
                    return t();
            }
        },
        eh = O.ZP.getPlanIdFromInvoice(i, o);
    if ((0, h.Q0)(eh)) return null;
    let eg = O.ZP.getStatusFromInvoice(i, o),
        eE = O.ZP.getPremiumType(eh),
        eb = {
            [M.tier0]: eE === D.PremiumTypes.TIER_0,
            [M.tier1]: eE === D.PremiumTypes.TIER_1,
            [M.tier2]: eE === D.PremiumTypes.TIER_2,
            [M.canceled]: eg === x.O0b.CANCELED,
            [M.pausePending]: eg === x.O0b.PAUSE_PENDING,
            [M.paused]: eg === x.O0b.PAUSED && !X,
            [M.failedPayment]: (0, O.zV)(eg),
        },
        ey = null;
    switch (eE) {
        case D.PremiumTypes.TIER_0:
            ey = (0, r.jsxs)("div", {
                className: M.wordMark,
                children: [
                    (0, r.jsx)(b.Z, {
                        className: M.discordWordmark,
                        "aria-label": j.intl.string(j.t["t9uG/o"]),
                    }),
                    (0, r.jsx)("div", { className: M.basicWordmark }),
                ],
            });
            break;
        case D.PremiumTypes.TIER_1:
            ey = (0, r.jsx)(W, {});
            break;
        case D.PremiumTypes.TIER_2:
            ey = (0, r.jsx)(E.Z, {
                className: M.planName,
                "aria-label": j.intl.string(j.t.lpNrPu),
            });
    }
    let eO = V.includes(i.status) && !X ? Y : H;
    return (0, r.jsx)(eO, {
        wordMark: ey,
        subscriptionInfo: e_(eh),
        buttons: em(),
        statusClasses: eb,
        shouldUseDiscountMarketing: en,
        discountAmount: et,
    });
};
