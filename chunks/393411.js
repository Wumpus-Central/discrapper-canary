n.d(t, {
    R: () => F,
    Z: () => H,
}),
    n(415506);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(512722),
    l = n.n(a),
    o = n(755721),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    m = n(906732),
    p = n(975298),
    g = n(710845),
    h = n(963249),
    f = n(301766),
    b = n(509545),
    x = n(931331),
    _ = n(754347),
    j = n(122289),
    E = n(74538),
    C = n(212895),
    O = n(296848),
    v = n(140465),
    S = n(695349),
    T = n(879463),
    I = n(104494),
    N = n(382791),
    y = n(987997),
    A = n(45474),
    P = n(474936),
    R = n(981631),
    D = n(388032),
    Z = n(965406);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = new g.Z("SubscriptionHeader.tsx"),
    B = {
        page: R.ZY5.USER_SETTINGS,
        section: R.jXE.SETTINGS_PREMIUM,
        object: R.qAy.CARD,
    },
    M = [R.O0b.PAUSED, R.O0b.PAUSE_PENDING, R.O0b.BILLING_RETRY];
function U(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: r,
        statusClasses: a,
        shouldUseDiscountMarketing: l,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(Z.banner, a),
        children: [
            (0, i.jsx)("div", { className: Z.bannerBackgroundImage }),
            (0, i.jsxs)("div", {
                className: Z.detailsContainer,
                children: [
                    (0, i.jsx)("div", { className: Z.image }),
                    (0, i.jsxs)("div", {
                        className: Z.details,
                        children: [
                            (0, i.jsxs)("div", {
                                className: Z.headerLabel,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(N.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: o }),
                                            className: Z.discountPill,
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
            (0, i.jsx)("div", {
                className: Z.buttons,
                children: r,
            }),
        ],
    });
}
function V(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: r,
        statusClasses: a,
        shouldUseDiscountMarketing: l,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(Z.banner, a, Z.repositioned),
        children: [
            (0, i.jsx)("div", { className: Z.bannerBackgroundImage }),
            (0, i.jsx)("div", {
                className: Z.detailsContainer,
                children: (0, i.jsx)("div", {
                    className: Z.details,
                    children: (0, i.jsxs)("div", {
                        className: Z.headerLabel,
                        children: [
                            (0, i.jsx)("div", { className: Z.image }),
                            (0, i.jsxs)("div", {
                                className: Z.headerColumnB,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(N.Cy, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvr, { percent: o }),
                                            className: Z.discountPill,
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
            (0, i.jsx)("div", {
                className: Z.buttons,
                children: r,
            }),
        ],
    });
}
function G() {
    return (0, i.jsxs)("div", {
        className: Z.wordMark,
        children: [
            (0, i.jsx)(_.Z, {
                className: Z.discordWordmark,
                "aria-label": D.intl.string(D.t["FSOz7+"]),
            }),
            (0, i.jsx)("div", { className: Z.classicWordmark }),
        ],
    });
}
function F() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(U, {
        wordMark: (0, i.jsx)(G, {}),
        subscriptionInfo: (0, i.jsx)("div", {
            className: Z.planInfo,
            children: D.intl.string(D.t.R0GJLy),
        }),
        buttons: (0, i.jsx)(y.Z, {
            className: Z.toolsButton,
            onClick: () =>
                (0, h.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: B,
                }),
            children: D.intl.string(D.t["/ygMUV"]),
        }),
        statusClasses: { [Z.tier1]: !0 },
    });
}
let H = function (e) {
    var t;
    let { subscription: r, renewalInvoicePreview: a, paymentSource: g, busy: N, analyticsLocation: F } = e,
        { analyticsLocations: H } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: z } = (0, p.Z)({ forceFetch: !1 }),
        W = z === P.a$.FP_SUB_PAUSED,
        { enabled: Y } = (0, T.ZP)({ location: "subscription_header" });
    (P.pj.has(r.planId) && R.JwP.ALL_PAUSEABLE.has(r.status) && !W) || (Y = !1);
    let K = (0, I.Ng)(),
        q = null == K || null == (t = K.discount) ? void 0 : t.amount,
        X = (0, v.t7)(),
        J = (0, v.lr)(),
        Q = (0, S.W)(),
        $ = () => {
            (r.status === R.O0b.ACTIVE || r.status === R.O0b.PAST_DUE || r.status === R.O0b.PAUSED) &&
                en(A.R.PAUSE_SELECT);
        },
        ee = () => {
            (r.status === R.O0b.ACTIVE || r.status === R.O0b.PAST_DUE || r.status === R.O0b.PAUSE_PENDING || W) && en();
        },
        et = () => {
            r.status === R.O0b.BILLING_RETRY && en(A.R.CONFIRM);
        },
        en = (e) => {
            (0, c.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("58067"), n.e("81709")]).then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        k(w({}, n), {
                            premiumSubscription: r,
                            analyticsLocation: F,
                            analyticsLocations: H,
                            initialStep: e,
                        }),
                    );
            });
        },
        ei = () => {
            if (null != r && null != r.premiumPlanIdFromItems) {
                let e = b.Z.get(r.premiumPlanIdFromItems);
                if (null == e) return void L.info("Plan not fetched for plan id: ".concat(r.premiumPlanIdFromItems));
                let t = (0, C.DE)(e, null == g ? void 0 : g.id, !1),
                    n = t.length > 0 ? t[0] : r.currency,
                    i = !1;
                1 === t.length &&
                    (null == g ? void 0 : g.id) === r.paymentSourceId &&
                    (0, C.tD)(e.id, n, null == g ? void 0 : g.id) &&
                    (i = !0),
                    i
                        ? d.O5(r, H)
                        : (0, h.Z)({
                              initialPlanId: r.premiumPlanIdFromItems,
                              analyticsLocations: H,
                              analyticsLocation: F,
                              analyticsObject: B,
                              subscription: r,
                          });
            }
        },
        er = () => {
            if (!M.includes(r.status) || null == r.pauseEndsAt)
                return void (0, j.q2)(Error("Invalid subscription to resume"), {
                    extra: {
                        subscriptionId: r.id,
                        status: r.status,
                        pauseEndsAt: r.pauseEndsAt,
                    },
                });
            r.status === R.O0b.PAUSED
                ? (0, h.Z)({
                      initialPlanId: r.premiumPlanIdFromItems,
                      analyticsLocations: H,
                      analyticsLocation: F,
                      analyticsObject: B,
                      subscription: r,
                      skipConfirm: !0,
                  })
                : d.v4(r, H);
        },
        es = () => {
            r.status === R.O0b.PAUSED && en(A.R.PAUSE_SELECT);
        },
        ea = () => {
            en(A.R.WHAT_YOU_LOSE);
        },
        el = E.ZP.getPlanIdFromInvoice(r, a);
    if ((0, f.Q0)(el)) return null;
    let eo = E.ZP.getStatusFromInvoice(r, a),
        ec = E.ZP.getPremiumType(el),
        ed = {
            [Z.tier0]: ec === P.p9.TIER_0,
            [Z.tier1]: ec === P.p9.TIER_1,
            [Z.tier2]: ec === P.p9.TIER_2,
            [Z.canceled]: eo === R.O0b.CANCELED,
            [Z.pausePending]: eo === R.O0b.PAUSE_PENDING,
            [Z.paused]: eo === R.O0b.PAUSED && !W,
            [Z.failedPayment]: (0, E.zV)(eo),
        },
        eu = null;
    switch (ec) {
        case P.p9.TIER_0:
            eu = (0, i.jsxs)("div", {
                className: Z.wordMark,
                children: [
                    (0, i.jsx)(_.Z, {
                        className: Z.discordWordmark,
                        "aria-label": D.intl.string(D.t["t9uG/v"]),
                    }),
                    (0, i.jsx)("div", { className: Z.basicWordmark }),
                ],
            });
            break;
        case P.p9.TIER_1:
            eu = (0, i.jsx)(G, {});
            break;
        case P.p9.TIER_2:
            eu = (0, i.jsx)(x.Z, {
                className: Z.planName,
                "aria-label": D.intl.string(D.t.lpNrPj),
            });
    }
    let em = M.includes(r.status) && !W ? V : U;
    return (0, i.jsx)(em, {
        wordMark: eu,
        subscriptionInfo:
            (l()(null != a, "Expected renewalInvoicePreview"),
            (0, i.jsx)("div", {
                className: Z.planInfo,
                children: Q
                    ? D.intl.format(D.t["/SfHws"], { weeks: 1 })
                    : (0, E.qV)({
                          planId: el,
                          subscription: r,
                          renewalInvoicePreview: a,
                          hasDiscountApplied: X,
                          activeDiscountInfo: J,
                          hasFractionalPremiumWithSub: W,
                      }),
            })),
        buttons: (() => {
            let { status: e } = r;
            if (r.isPurchasedExternally) {
                let e = (0, E.JE)(r.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.eee, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(o.zx, {
                        className: s()(Z.toolsButton, Z.externalButton),
                        size: o.zx.Sizes.SMALL,
                        look: o.iL.OUTLINED,
                        color: o.Tt.WHITE,
                        submitting: N,
                        children: D.intl.string(D.t.obRG6e),
                    }),
                });
            }
            function t() {
                let e = E.ZP.isSwitchingPlansDisabled(r),
                    t = E.ZP.getSwitchingPlansDisabledMessage(r);
                return (0, i.jsxs)("div", {
                    className: Z.toolsButtons,
                    children: [
                        Y
                            ? (0, i.jsx)(o.zx, {
                                  className: Z.toolsButton,
                                  size: o.zx.Sizes.SMALL,
                                  look: o.iL.LINK,
                                  color: o.Tt.WHITE,
                                  submitting: N,
                                  onClick: $,
                                  children: D.intl.string(D.t.eFlYVF),
                              })
                            : (0, i.jsx)(o.zx, {
                                  className: Z.toolsButton,
                                  size: o.zx.Sizes.SMALL,
                                  look: o.iL.LINK,
                                  color: o.Tt.WHITE,
                                  submitting: N,
                                  onClick: ee,
                                  children: D.intl.string(D.t["ETE/oK"]),
                              }),
                        (0, i.jsx)(c.ua7, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(
                                    y.Z,
                                    k(w({}, t), {
                                        disabled: e,
                                        className: Z.toolsButton,
                                        onClick: () => {
                                            (0, h.Z)({
                                                analyticsLocations: H,
                                                analyticsLocation: F,
                                                analyticsObject: B,
                                                subscription: r,
                                            });
                                        },
                                        children: D.intl.string(D.t["dylp//"]),
                                    }),
                                ),
                        }),
                    ],
                });
            }
            if (E.ZP.isBaseSubscriptionCanceled(r))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Z.toolsButton,
                    children: (0, i.jsx)(c.zxk, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: D.intl.string(D.t.iIvF29),
                        loading: N,
                        onClick: ei,
                    }),
                });
            switch (e) {
                case R.O0b.BILLING_RETRY:
                    return (0, i.jsx)(o.zx, {
                        className: Z.billingRetryCancel,
                        size: o.zx.Sizes.SMALL,
                        color: o.Tt.CUSTOM,
                        submitting: N,
                        onClick: et,
                        children: D.intl.string(D.t["ETE/oK"]),
                    });
                case R.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: Z.toolsButtons,
                        children: [
                            (0, i.jsx)(o.zx, {
                                className: Z.toolsButton,
                                size: o.zx.Sizes.SMALL,
                                look: o.iL.LINK,
                                color: o.Tt.WHITE,
                                submitting: N,
                                onClick: ee,
                                children: D.intl.string(D.t.cM1H0N),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: Z.toolsButton,
                                children: (0, i.jsx)(c.zxk, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.TgV5QU),
                                    loading: N,
                                    onClick: er,
                                }),
                            }),
                        ],
                    });
                case R.O0b.PAUSED:
                    if (W) return t();
                    let { durations: n } = (0, O.AT)(r);
                    return (0, i.jsxs)("div", {
                        className: Z.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(o.zx, {
                                      className: Z.linkButton,
                                      size: o.zx.Sizes.SMALL,
                                      look: o.iL.LINK,
                                      color: o.Tt.WHITE,
                                      submitting: N,
                                      onClick: es,
                                      children: D.intl.string(D.t.jNHWt7),
                                  })
                                : (0, i.jsx)(o.zx, {
                                      className: Z.linkButton,
                                      size: o.zx.Sizes.SMALL,
                                      look: o.iL.LINK,
                                      color: o.Tt.WHITE,
                                      submitting: N,
                                      onClick: ea,
                                      children: D.intl.string(D.t.cM1H0N),
                                  }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: Z.toolsButton,
                                children: (0, i.jsx)(c.zxk, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.zpi5pq),
                                    loading: N,
                                    onClick: er,
                                }),
                            }),
                        ],
                    });
                case R.O0b.ACTIVE:
                case R.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: ed,
        shouldUseDiscountMarketing: X,
        discountAmount: q,
    });
};
