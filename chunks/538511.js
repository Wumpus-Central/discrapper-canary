n.d(t, {
    A: () => W,
    i: () => Y,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(284009),
    a = n.n(s),
    o = n(435371),
    c = n(397927),
    d = n(158032),
    u = n(793574),
    p = n(688810),
    _ = n(531260),
    m = n(626584),
    g = n(532794),
    f = n(832946),
    b = n(97352),
    h = n(481354),
    A = n(85563),
    E = n(739508),
    x = n(927578),
    O = n(83617),
    C = n(615396),
    y = n(526292),
    j = n(637073),
    T = n(110919),
    v = n(422936),
    S = n(795269),
    I = n(327479),
    N = n(473702),
    P = n(788868),
    R = n(652215),
    D = n(601107),
    w = n(985018),
    L = n(282151);

function M(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = new m.A("SubscriptionHeader.tsx"),
    k = {
        page: R.liQ.USER_SETTINGS,
        section: R.JJy.SETTINGS_PREMIUM,
        object: R.ZSU.CARD,
    },
    H = [R.Dmq.PAUSED, R.Dmq.PAUSE_PENDING, R.Dmq.BILLING_RETRY];

function B(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: i,
        statusClasses: s,
        shouldUseDiscountMarketing: a,
        discountAmount: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(L.vK, s),
        children: [
            (0, r.jsx)("div", {
                className: L.aK,
            }),
            (0, r.jsxs)("div", {
                className: L.wt,
                children: [
                    (0, r.jsx)("div", {
                        className: L.Sl,
                    }),
                    (0, r.jsxs)("div", {
                        className: L.zH,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.Gp,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, r.jsx)(S.ir, {
                                            text: w.intl.formatToPlainString(w.t.iiLbvu, {
                                                percent: o,
                                            }),
                                            className: L.NM,
                                            colorOptions: S.at.PREMIUM_TIER_2_WHITE_FILL,
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
                className: L.Uo,
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
        statusClasses: s,
        shouldUseDiscountMarketing: a,
        discountAmount: o,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(L.vK, s, L.uR),
        children: [
            (0, r.jsx)("div", {
                className: L.aK,
            }),
            (0, r.jsx)("div", {
                className: L.wt,
                children: (0, r.jsx)("div", {
                    className: L.zH,
                    children: (0, r.jsxs)("div", {
                        className: L.Gp,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.Sl,
                            }),
                            (0, r.jsxs)("div", {
                                className: L.Ck,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, r.jsx)(S.ir, {
                                            text: w.intl.formatToPlainString(w.t.iiLbvu, {
                                                percent: o,
                                            }),
                                            className: L.NM,
                                            colorOptions: S.at.PREMIUM_TIER_2_WHITE_FILL,
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
                className: L.Uo,
                children: i,
            }),
        ],
    });
}

function F() {
    return (0, r.jsxs)("div", {
        className: L.Up,
        children: [
            (0, r.jsx)(A.A, {
                className: L.sq,
                "aria-label": w.intl.string(w.t.FSOz78),
            }),
            (0, r.jsx)("div", {
                className: L.CJ,
            }),
        ],
    });
}

function Y() {
    let { analyticsLocations: e } = (0, p.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
    return (0, r.jsx)(B, {
        wordMark: (0, r.jsx)(F, {}),
        subscriptionInfo: (0, r.jsx)("div", {
            className: L.MS,
            children: w.intl.string(w.t.R0GJL2),
        }),
        buttons: (0, r.jsx)(I.A, {
            className: L.au,
            onClick: () =>
                (0, g.A)({
                    subscriptionTier: P.pe.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: k,
                }),
            text: w.intl.string(w.t["/ygMUY"]),
        }),
        statusClasses: {
            [L.aS]: !0,
        },
    });
}
let W = function (e) {
    var t;
    let {
            subscription: i,
            currentInvoicePreview: s,
            renewalInvoicePreview: m,
            paymentSource: S,
            busy: Y,
            analyticsLocation: W,
        } = e,
        { analyticsLocations: K } = (0, p.Ay)(u.A.SUBSCRIPTION_HEADER),
        z = (0, _.A)({
            forceFetch: !1,
        }),
        { fractionalState: Z } = z,
        q = Z === P.xc.FP_SUB_PAUSED,
        { enabled: X } = (0, T.Ay)({
            location: "subscription_header",
        });
    (P.QV.has(i.planId) && R.Uyk.ALL_PAUSEABLE.has(i.status) && !q) || (X = !1);
    let J = (0, v.O)(),
        Q = null == J || null == (t = J.discount) ? void 0 : t.amount,
        $ = (0, y.k5)(),
        ee = (0, y.nf)(),
        et = (0, j.d)(),
        en = () => {
            (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSED) &&
                el(N.g.PAUSE_SELECT);
        },
        er = () => {
            (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSE_PENDING || q) && el();
        },
        ei = () => {
            i.status === R.Dmq.BILLING_RETRY && el(N.g.CONFIRM);
        },
        el = (e) => {
            (0, c.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await n
                    .e("72820")
                    .then(n.bind(n, 281439));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        G(M({}, n), {
                            premiumSubscription: i,
                            analyticsLocation: W,
                            analyticsLocations: K,
                            initialStep: e,
                        }),
                    );
            });
        },
        es = () => {
            if (null != i && null != i.premiumPlanIdFromItems) {
                let e = b.A.get(i.premiumPlanIdFromItems);
                if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
                let t = (0, O._w)(e, null == S ? void 0 : S.id, !1),
                    l = t.length > 0 ? t[0] : i.currency,
                    o = !0;
                1 === t.length &&
                    (null == S ? void 0 : S.id) === i.paymentSourceId &&
                    (0, O.jJ)(e.id, l, null == S ? void 0 : S.id) &&
                    (o = !1),
                    o
                        ? (0, g.A)({
                              initialPlanId: i.premiumPlanIdFromItems,
                              analyticsLocations: K,
                              analyticsLocation: W,
                              analyticsObject: k,
                              subscription: i,
                          })
                        : (a()(null != m, "Expected renewalInvoicePreview"),
                          a()(null != s, "Expected currentInvoicePreview"),
                          (0, c.mMO)(async () => {
                              let { PremiumResubscribeModal: e } = await Promise.all([
                                  n.e("14704"),
                                  n.e("29716"),
                                  n.e("2824"),
                                  n.e("86819"),
                              ]).then(n.bind(n, 46292));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      G(M({}, t), {
                                          premiumSubscription: i,
                                          analyticsLocations: K,
                                          fractionalPremiumInfo: z,
                                          currentInvoicePreview: s,
                                          renewalInvoicePreview: m,
                                      }),
                                  );
                          }));
            }
        },
        ea = () => {
            H.includes(i.status) && null != i.pauseEndsAt
                ? i.status === R.Dmq.PAUSED && i.pauseReason !== D.qf.USER_TEMPORARY_BAN
                    ? (0, g.A)({
                          initialPlanId: i.premiumPlanIdFromItems,
                          analyticsLocations: K,
                          analyticsLocation: W,
                          analyticsObject: k,
                          subscription: i,
                          skipConfirm: !0,
                      })
                    : d.U(i, K)
                : (0, E.pM)(Error("Invalid subscription to resume"), {
                      extra: {
                          subscriptionId: i.id,
                          status: i.status,
                          pauseEndsAt: i.pauseEndsAt,
                      },
                  });
        },
        eo = () => {
            i.status === R.Dmq.PAUSED && el(N.g.PAUSE_SELECT);
        },
        ec = () => {
            el(N.g.WHAT_YOU_LOSE);
        },
        ed = x.Ay.getPlanIdFromInvoice(i, s);
    if ((0, f.m1)(ed)) return null;
    let eu = x.Ay.getStatusFromInvoice(i, s),
        ep = x.Ay.getPremiumType(ed),
        e_ = {
            [L.Vd]: ep === P.PremiumTypes.TIER_0,
            [L.aS]: ep === P.PremiumTypes.TIER_1,
            [L.hA]: ep === P.PremiumTypes.TIER_2,
            [L.aD]: eu === R.Dmq.CANCELED,
            [L.WY]: eu === R.Dmq.PAUSE_PENDING,
            [L.Ft]: eu === R.Dmq.PAUSED && !q,
            [L.GD]: (0, x.PK)(eu),
        },
        em = null;
    switch (ep) {
        case P.PremiumTypes.TIER_0:
            em = (0, r.jsxs)("div", {
                className: L.Up,
                children: [
                    (0, r.jsx)(A.A, {
                        className: L.sq,
                        "aria-label": w.intl.string(w.t["t9uG/o"]),
                    }),
                    (0, r.jsx)("div", {
                        className: L.sT,
                    }),
                ],
            });
            break;
        case P.PremiumTypes.TIER_1:
            em = (0, r.jsx)(F, {});
            break;
        case P.PremiumTypes.TIER_2:
            em = (0, r.jsx)(h.A, {
                className: L.V6,
                "aria-label": w.intl.string(w.t.lpNrPu),
            });
    }
    let eg = H.includes(i.status) && !q ? V : B;
    return (0, r.jsx)(eg, {
        wordMark: em,
        subscriptionInfo:
            (a()(null != s, "Expected currentInvoicePreview"),
            (0, r.jsx)("div", {
                className: L.MS,
                children: et
                    ? w.intl.format(w.t["/SfHwl"], {
                          weeks: 1,
                      })
                    : (0, x.nB)({
                          planId: ed,
                          subscription: i,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: $,
                          activeDiscountInfo: ee,
                          hasFractionalPremiumWithSub: q,
                      }),
            })),
        buttons: (() => {
            let { status: e } = i;
            if (i.isPurchasedExternally) {
                let e = (0, x.tW)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, r.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: Y,
                        text: w.intl.string(w.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }

            function t() {
                let e = x.Ay.isSwitchingPlansDisabled(i),
                    t = x.Ay.getSwitchingPlansDisabledMessage(i);
                return (0, r.jsxs)("div", {
                    className: L.Lv,
                    children: [
                        X
                            ? (0, r.jsx)("div", {
                                  className: L.xP,
                                  children: (0, r.jsx)(c.QWc, {
                                      variant: "always-white",
                                      disabled: Y,
                                      onClick: en,
                                      size: "sm",
                                      text: w.intl.string(w.t.eFlYVA),
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: L.Nn,
                                  children: (0, r.jsx)(c.QWc, {
                                      variant: "always-white",
                                      onClick: er,
                                      disabled: Y,
                                      size: "sm",
                                      text: w.intl.string(w.t["ETE/oC"]),
                                  }),
                              }),
                        (0, r.jsx)(o.m_, {
                            text: t,
                            asContainer: !0,
                            children: (0, r.jsx)(I.A, {
                                className: l()(L.au, L.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, g.A)({
                                        analyticsLocations: K,
                                        analyticsLocation: W,
                                        analyticsObject: k,
                                        subscription: i,
                                    });
                                },
                                text: w.intl.string(w.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (x.Ay.isBaseSubscriptionCanceled(i))
                return (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: L.au,
                    children: (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: w.intl.string(w.t.iIvF2z),
                        loading: Y,
                        onClick: es,
                    }),
                });
            switch (e) {
                case R.Dmq.BILLING_RETRY:
                    return (0, r.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: ei,
                        loading: Y,
                        text: w.intl.string(w.t["ETE/oC"]),
                    });
                case R.Dmq.PAUSE_PENDING:
                    return (0, r.jsxs)("div", {
                        className: L.Lv,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.Nn,
                                children: (0, r.jsx)(c.QWc, {
                                    variant: "always-white",
                                    disabled: Y,
                                    onClick: er,
                                    size: "sm",
                                    text: w.intl.string(w.t.cM1H0K),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: L.au,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: w.intl.string(w.t.TgV5Qf),
                                    loading: Y,
                                    onClick: ea,
                                }),
                            }),
                        ],
                    });
                case R.Dmq.PAUSED:
                    if (q) return t();
                    let { durations: n } = (0, C.Vy)(i);
                    return (0, r.jsxs)("div", {
                        className: L.Lv,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.Nn,
                                children:
                                    n.length > 0
                                        ? (0, r.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: eo,
                                              disabled: Y,
                                              size: "sm",
                                              text: w.intl.string(w.t.jNHWt6),
                                          })
                                        : (0, r.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: ec,
                                              disabled: Y,
                                              size: "sm",
                                              text: w.intl.string(w.t.cM1H0K),
                                          }),
                            }),
                            (0, r.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: L.au,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: w.intl.string(w.t.zpi5pg),
                                    loading: Y,
                                    onClick: ea,
                                }),
                            }),
                        ],
                    });
                case R.Dmq.ACTIVE:
                case R.Dmq.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: e_,
        shouldUseDiscountMarketing: $,
        discountAmount: Q,
    });
};
