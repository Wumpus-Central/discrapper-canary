n.d(t, {
    R: () => W,
    Z: () => K,
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
    S = n(140465),
    T = n(695349),
    A = n(879463),
    C = n(622909),
    N = n(382791),
    R = n(987997),
    P = n(45474),
    w = n(474936),
    D = n(981631),
    x = n(362786),
    L = n(388032),
    M = n(965406);
function j(e, t, n) {
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
function k(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = new p.Z("SubscriptionHeader.tsx"),
    Z = {
        page: D.ZY5.USER_SETTINGS,
        section: D.jXE.SETTINGS_PREMIUM,
        object: D.qAy.CARD,
    },
    F = [D.O0b.PAUSED, D.O0b.PAUSE_PENDING, D.O0b.BILLING_RETRY];
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
                                        (0, r.jsx)(N.Cy, {
                                            text: L.intl.formatToPlainString(L.t.iiLbvu, { percent: l }),
                                            className: M.discountPill,
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
                className: M.buttons,
                children: i,
            }),
        ],
    });
}
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
                                        (0, r.jsx)(N.Cy, {
                                            text: L.intl.formatToPlainString(L.t.iiLbvu, { percent: l }),
                                            className: M.discountPill,
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
                className: M.buttons,
                children: i,
            }),
        ],
    });
}
function Y() {
    return (0, r.jsxs)("div", {
        className: M.wordMark,
        children: [
            (0, r.jsx)(b.Z, {
                className: M.discordWordmark,
                "aria-label": L.intl.string(L.t.FSOz78),
            }),
            (0, r.jsx)("div", { className: M.classicWordmark }),
        ],
    });
}
function W() {
    let { analyticsLocations: e } = (0, f.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(V, {
        wordMark: (0, r.jsx)(Y, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: M.planInfo,
            children: L.intl.string(L.t.R0GJL2),
        }),
        buttons: (0, r.jsx)(R.Z, {
            className: M.toolsButton,
            onClick: () =>
                (0, h.Z)({
                    subscriptionTier: w.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: Z,
                }),
            text: L.intl.string(L.t["/ygMUY"]),
        }),
        statusClasses: { [M.tier1]: !0 },
    });
}
let K = function (e) {
    var t;
    let { subscription: i, renewalInvoicePreview: o, paymentSource: p, busy: N, analyticsLocation: j } = e,
        U = "subscription_header",
        { analyticsLocations: W } = (0, f.ZP)(d.Z.SUBSCRIPTION_HEADER),
        { fractionalState: K } = (0, _.Z)({ forceFetch: !1 }),
        z = K === w.a$.FP_SUB_PAUSED,
        { enabled: q } = (0, A.ZP)({ location: U });
    (w.pj.has(i.planId) && D.JwP.ALL_PAUSEABLE.has(i.status) && !z) || (q = !1);
    let X = (0, C.N)(),
        Q = null == X || null == (t = X.discount) ? void 0 : t.amount,
        J = (0, S.t7)(),
        $ = (0, S.lr)(),
        ee = (0, T.W)(),
        et = () => {
            (i.status === D.O0b.ACTIVE || i.status === D.O0b.PAST_DUE || i.status === D.O0b.PAUSED) &&
                ei(P.R.PAUSE_SELECT);
        },
        en = () => {
            (i.status === D.O0b.ACTIVE || i.status === D.O0b.PAST_DUE || i.status === D.O0b.PAUSE_PENDING || z) && ei();
        },
        er = () => {
            i.status === D.O0b.BILLING_RETRY && ei(P.R.CONFIRM);
        },
        ei = (e) => {
            (0, c.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await n.e("26526").then(n.bind(n, 48813));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        G(k({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: j,
                            analyticsLocations: W,
                            initialStep: e,
                        }),
                    );
            });
        },
        ea = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = g.Z.get(i.premiumPlanIdFromItems);
                if (null == e) return void B.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, v.DE)(e, null == p ? void 0 : p.id, !1),
                    n = t.length > 0 ? t[0] : i.currency,
                    r = !1;
                1 === t.length &&
                    (null == p ? void 0 : p.id) === i.paymentSourceId &&
                    (0, v.tD)(e.id, n, null == p ? void 0 : p.id) &&
                    (r = !0),
                    r
                        ? u.O5(i, W)
                        : (0, h.Z)({
                              initialPlanId: i.premiumPlanIdFromItems,
                              analyticsLocations: W,
                              analyticsLocation: j,
                              analyticsObject: Z,
                              subscription: i,
                          });
            }
        },
        eo = () => {
            if (!F.includes(i.status) || null == i.pauseEndsAt)
                return void (0, y.q2)(Error("Invalid subscription to resume"), {
                    extra: {
                        subscriptionId: i.id,
                        status: i.status,
                        pauseEndsAt: i.pauseEndsAt,
                    },
                });
            i.status === D.O0b.PAUSED && i.pauseReason !== x.Id.USER_TEMPORARY_BAN
                ? (0, h.Z)({
                      initialPlanId: i.premiumPlanIdFromItems,
                      analyticsLocations: W,
                      analyticsLocation: j,
                      analyticsObject: Z,
                      subscription: i,
                      skipConfirm: !0,
                  })
                : u.v4(i, W);
        },
        es = () => {
            i.status === D.O0b.PAUSED && ei(P.R.PAUSE_SELECT);
        },
        el = () => {
            ei(P.R.WHAT_YOU_LOSE);
        },
        ec = (e) => (
            s()(null != o, "Expected renewalInvoicePreview"),
            (0, r.jsx)("div", {
                className: M.planInfo,
                children: ee
                    ? L.intl.format(L.t["/SfHwl"], { weeks: 1 })
                    : (0, O.qV)({
                          planId: e,
                          subscription: i,
                          renewalInvoicePreview: o,
                          hasDiscountApplied: J,
                          activeDiscountInfo: $,
                          hasFractionalPremiumWithSub: z,
                      }),
            })
        ),
        eu = () => {
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
                        text: L.intl.string(L.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function t() {
                let e = O.ZP.isSwitchingPlansDisabled(i),
                    t = O.ZP.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: M.toolsButtons,
                    children: [
                        q
                            ? (0, r.jsx)("div", {
                                  className: M.secondaryBannerTextButtonContainerWithPause,
                                  children: (0, r.jsx)(c.Avr, {
                                      variant: "always-white",
                                      disabled: N,
                                      onClick: et,
                                      size: "sm",
                                      text: L.intl.string(L.t.eFlYVA),
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: M.secondaryBannerTextButtonContainer,
                                  children: (0, r.jsx)(c.Avr, {
                                      variant: "always-white",
                                      onClick: en,
                                      disabled: N,
                                      size: "sm",
                                      text: L.intl.string(L.t["ETE/oC"]),
                                  }),
                              }),
                        (0, r.jsx)(l.u, {
                            text: t,
                            asContainer: !0,
                            children: (0, r.jsx)(R.Z, {
                                className: a()(M.toolsButton, M.premiumSettingsPushButton),
                                disabled: e,
                                onClick: () => {
                                    (0, h.Z)({
                                        analyticsLocations: W,
                                        analyticsLocation: j,
                                        analyticsObject: Z,
                                        subscription: i,
                                    });
                                },
                                text: L.intl.string(L.t["dylp/7"]),
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
                        text: L.intl.string(L.t.iIvF2z),
                        loading: N,
                        onClick: ea,
                    }),
                });
            switch (e) {
                case D.O0b.BILLING_RETRY:
                    return (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: er,
                        loading: N,
                        text: L.intl.string(L.t["ETE/oC"]),
                    });
                case D.O0b.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: M.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: M.secondaryBannerTextButtonContainer,
                                children: (0, r.jsx)(c.Avr, {
                                    variant: "always-white",
                                    disabled: N,
                                    onClick: en,
                                    size: "sm",
                                    text: L.intl.string(L.t.cM1H0K),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: M.toolsButton,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: L.intl.string(L.t.TgV5Qf),
                                    loading: N,
                                    onClick: eo,
                                }),
                            }),
                        ],
                    });
                case D.O0b.PAUSED:
                    if (z) return t();
                    let { durations: n } = (0, I.AT)(i);
                    return (0, r.jsxs)("div", {
                        className: M.toolsButtons,
                        children: [
                            (0, r.jsx)("div", {
                                className: M.secondaryBannerTextButtonContainer,
                                children:
                                    n.length > 0
                                        ? (0, r.jsx)(c.Avr, {
                                              variant: "always-white",
                                              onClick: es,
                                              disabled: N,
                                              size: "sm",
                                              text: L.intl.string(L.t.jNHWt6),
                                          })
                                        : (0, r.jsx)(c.Avr, {
                                              variant: "always-white",
                                              onClick: el,
                                              disabled: N,
                                              size: "sm",
                                              text: L.intl.string(L.t.cM1H0K),
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: M.toolsButton,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: L.intl.string(L.t.zpi5pg),
                                    loading: N,
                                    onClick: eo,
                                }),
                            }),
                        ],
                    });
                case D.O0b.ACTIVE:
                case D.O0b.PAST_DUE:
                    return t();
            }
        },
        ed = O.ZP.getPlanIdFromInvoice(i, o);
    if ((0, m.Q0)(ed)) return null;
    let ef = O.ZP.getStatusFromInvoice(i, o),
        e_ = O.ZP.getPremiumType(ed),
        ep = {
            [M.tier0]: e_ === w.PremiumTypes.TIER_0,
            [M.tier1]: e_ === w.PremiumTypes.TIER_1,
            [M.tier2]: e_ === w.PremiumTypes.TIER_2,
            [M.canceled]: ef === D.O0b.CANCELED,
            [M.pausePending]: ef === D.O0b.PAUSE_PENDING,
            [M.paused]: ef === D.O0b.PAUSED && !z,
            [M.failedPayment]: (0, O.zV)(ef),
        },
        eh = null;
    switch (e_) {
        case w.PremiumTypes.TIER_0:
            eh = (0, r.jsxs)("div", {
                className: M.wordMark,
                children: [
                    (0, r.jsx)(b.Z, {
                        className: M.discordWordmark,
                        "aria-label": L.intl.string(L.t["t9uG/o"]),
                    }),
                    (0, r.jsx)("div", { className: M.basicWordmark }),
                ],
            });
            break;
        case w.PremiumTypes.TIER_1:
            eh = (0, r.jsx)(Y, {});
            break;
        case w.PremiumTypes.TIER_2:
            eh = (0, r.jsx)(E.Z, {
                className: M.planName,
                "aria-label": L.intl.string(L.t.lpNrPu),
            });
    }
    let em = F.includes(i.status) && !z ? H : V;
    return (0, r.jsx)(em, {
        wordMark: eh,
        subscriptionInfo: ec(ed),
        buttons: eu(),
        statusClasses: ep,
        shouldUseDiscountMarketing: J,
        discountAmount: Q,
    });
};
