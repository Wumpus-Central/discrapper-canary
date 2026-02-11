n.d(t, { A: () => W, i: () => z });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(284009),
    r = n.n(l),
    o = n(435371),
    c = n(397927),
    d = n(158032),
    u = n(793574),
    _ = n(688810),
    m = n(531260),
    A = n(626584),
    g = n(532794),
    h = n(832946),
    x = n(97352),
    p = n(481354),
    E = n(85563),
    C = n(739508),
    T = n(927578),
    S = n(83617),
    I = n(615396),
    f = n(526292),
    N = n(637073),
    b = n(110919),
    j = n(414345),
    v = n(422936),
    O = n(795269),
    R = n(327479),
    y = n(473702),
    P = n(788868),
    L = n(652215),
    D = n(601107),
    G = n(985018),
    M = n(688142),
    U = n(282151),
    k = n(241988);
let V = new A.A("SubscriptionHeader.tsx"),
    H = { page: L.liQ.USER_SETTINGS, section: L.JJy.SETTINGS_PREMIUM, object: L.ZSU.CARD },
    w = [L.Dmq.PAUSED, L.Dmq.PAUSE_PENDING, L.Dmq.BILLING_RETRY];
function B(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: l,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
        premiumType: d,
    } = e;
    if (!0 === (0, j.g)({ location: "PremiumBanner" })) {
        let e;
        switch (d) {
            case P.PremiumTypes.TIER_0:
                e = G.intl.string(G.t["t9uG/o"]);
                break;
            case P.PremiumTypes.TIER_1:
                e = G.intl.string(G.t.FSOz78);
                break;
            case P.PremiumTypes.TIER_2:
                e = G.intl.string(G.t.lG6a5x);
        }
        let t = d === P.PremiumTypes.TIER_2 ? "nitro-pink" : "nitro-green";
        return (0, i.jsxs)(c.hLv, {
            color: t,
            className: M.vK,
            children: [
                (0, i.jsx)("div", {
                    className: M.U_,
                    children: (0, i.jsx)(c.Heading, { variant: "heading-md/semibold", className: M.aq, children: e }),
                }),
                (0, i.jsx)(c.cGx, { gap: 8 }),
                (0, i.jsxs)("div", {
                    className: M.hL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.IH,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: "heading-xl/semibold",
                                    children: G.intl.string(G.t.lpNrPu),
                                }),
                                (0, i.jsx)(c.Text, { variant: "text-md/normal", children: n }),
                                (0, i.jsx)("div", { children: s }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: M.l2, children: (0, i.jsx)("img", { src: k, alt: "" }) }),
                    ],
                }),
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(U.vK, l),
        children: [
            (0, i.jsx)("div", { className: U.aK }),
            (0, i.jsxs)("div", {
                className: U.wt,
                children: [
                    (0, i.jsx)("div", { className: U.Sl }),
                    (0, i.jsxs)("div", {
                        className: U.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: U.Gp,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(O.ir, {
                                            text: G.intl.formatToPlainString(G.t.iiLbvu, { percent: o }),
                                            className: U.NM,
                                            colorOptions: O.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                ],
                            }),
                            n,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: U.Uo, children: s }),
        ],
    });
}
function Y(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: l,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
        premiumType: d,
    } = e;
    if (!0 === (0, j.g)({ location: "PremiumBanner" })) {
        let e;
        switch (d) {
            case P.PremiumTypes.TIER_0:
                e = G.intl.string(G.t["t9uG/o"]);
                break;
            case P.PremiumTypes.TIER_1:
                e = G.intl.string(G.t.FSOz78);
                break;
            case P.PremiumTypes.TIER_2:
                e = G.intl.string(G.t.lG6a5x);
        }
        let t = d === P.PremiumTypes.TIER_2 ? "nitro-pink" : "nitro-green";
        return (0, i.jsxs)(c.hLv, {
            color: t,
            className: M.vK,
            children: [
                (0, i.jsx)("div", {
                    className: M.U_,
                    children: (0, i.jsx)(c.Heading, { variant: "heading-md/semibold", className: M.aq, children: e }),
                }),
                (0, i.jsx)(c.cGx, { gap: 8 }),
                (0, i.jsxs)("div", {
                    className: M.hL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.IH,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: "heading-xl/semibold",
                                    children: G.intl.string(G.t.lpNrPu),
                                }),
                                (0, i.jsx)(c.Text, { variant: "text-md/normal", children: n }),
                                (0, i.jsx)("div", { children: s }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: M.l2, children: (0, i.jsx)("img", { src: k, alt: "" }) }),
                    ],
                }),
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(U.vK, l, U.uR),
        children: [
            (0, i.jsx)("div", { className: U.aK }),
            (0, i.jsx)("div", {
                className: U.wt,
                children: (0, i.jsx)("div", {
                    className: U.zH,
                    children: (0, i.jsxs)("div", {
                        className: U.Gp,
                        children: [
                            (0, i.jsx)("div", { className: U.Sl }),
                            (0, i.jsxs)("div", {
                                className: U.Ck,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(O.ir, {
                                            text: G.intl.formatToPlainString(G.t.iiLbvu, { percent: o }),
                                            className: U.NM,
                                            colorOptions: O.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)("div", { className: U.Uo, children: s }),
        ],
    });
}
function F() {
    return (0, i.jsxs)("div", {
        className: U.Up,
        children: [
            (0, i.jsx)(E.A, { className: U.sq, "aria-label": G.intl.string(G.t.FSOz78) }),
            (0, i.jsx)("div", { className: U.CJ }),
        ],
    });
}
function z() {
    let { analyticsLocations: e } = (0, _.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(B, {
        wordMark: (0, i.jsx)(F, {}),
        premiumType: P.PremiumTypes.TIER_1,
        subscriptionInfo: (0, i.jsx)("div", { className: U.MS, children: G.intl.string(G.t.R0GJL2) }),
        buttons: (0, i.jsx)(R.A, {
            className: U.au,
            onClick: () => (0, g.A)({ subscriptionTier: P.pe.TIER_1, analyticsLocations: e, analyticsObject: H }),
            text: G.intl.string(G.t["/ygMUY"]),
        }),
        statusClasses: { [U.aS]: !0 },
    });
}
let W = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: l,
            paymentSource: A,
            busy: O,
            analyticsLocation: k,
        } = e,
        { analyticsLocations: z } = (0, _.Ay)(u.A.SUBSCRIPTION_HEADER),
        W = (0, m.A)({ forceFetch: !1 }),
        { fractionalState: K } = W,
        Z = K === P.xc.FP_SUB_PAUSED,
        { enabled: q } = (0, b.Ay)({ location: "subscription_header" });
    (P.QV.has(t.planId) && L.Uyk.ALL_PAUSEABLE.has(t.status) && !Z) || (q = !1);
    let X = (0, v.O)(),
        J = X?.discount?.amount,
        Q = (0, f.k5)(),
        $ = (0, f.nf)(),
        ee = (0, N.d)(),
        et = () => {
            (t.status === L.Dmq.ACTIVE || t.status === L.Dmq.PAST_DUE || t.status === L.Dmq.PAUSED) &&
                es(y.g.PAUSE_SELECT);
        },
        en = () => {
            (t.status === L.Dmq.ACTIVE || t.status === L.Dmq.PAST_DUE || t.status === L.Dmq.PAUSE_PENDING || Z) && es();
        },
        ei = () => {
            t.status === L.Dmq.BILLING_RETRY && es(y.g.CONFIRM);
        },
        es = (e) => {
            (0, c.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await n
                    .e("72820")
                    .then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocation: k,
                        analyticsLocations: z,
                        initialStep: e,
                    });
            });
        },
        ea = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = x.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void V.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let a = (0, S._w)(e, A?.id, !1),
                    o = a.length > 0 ? a[0] : t.currency,
                    d = !0;
                1 === a.length && A?.id === t.paymentSourceId && (0, S.jJ)(e.id, o, A?.id) && (d = !1),
                    d
                        ? (0, g.A)({
                              initialPlanId: t.premiumPlanIdFromItems,
                              analyticsLocations: z,
                              analyticsLocation: k,
                              analyticsObject: H,
                              subscription: t,
                          })
                        : (r()(null != l, "Expected renewalInvoicePreview"),
                          r()(null != s, "Expected currentInvoicePreview"),
                          (0, c.mMO)(async () => {
                              let { PremiumResubscribeModal: e } = await Promise.all([
                                  n.e("29716"),
                                  n.e("14704"),
                                  n.e("2824"),
                                  n.e("54711"),
                              ]).then(n.bind(n, 46292));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      premiumSubscription: t,
                                      analyticsLocations: z,
                                      fractionalPremiumInfo: W,
                                      currentInvoicePreview: s,
                                      renewalInvoicePreview: l,
                                  });
                          }));
            }
        },
        el = () => {
            w.includes(t.status) && null != t.pauseEndsAt
                ? t.status === L.Dmq.PAUSED && t.pauseReason !== D.qf.USER_TEMPORARY_BAN
                    ? (0, g.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: z,
                          analyticsLocation: k,
                          analyticsObject: H,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : d.U(t, z)
                : (0, C.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        er = () => {
            t.status === L.Dmq.PAUSED && es(y.g.PAUSE_SELECT);
        },
        eo = () => {
            es(y.g.WHAT_YOU_LOSE);
        },
        ec = T.Ay.getPlanIdFromInvoice(t, s);
    if ((0, h.m1)(ec)) return null;
    let ed = T.Ay.getStatusFromInvoice(t, s),
        eu = T.Ay.getPremiumType(ec),
        e_ = {
            [U.Vd]: eu === P.PremiumTypes.TIER_0,
            [U.aS]: eu === P.PremiumTypes.TIER_1,
            [U.hA]: eu === P.PremiumTypes.TIER_2,
            [U.aD]: ed === L.Dmq.CANCELED,
            [U.WY]: ed === L.Dmq.PAUSE_PENDING,
            [U.Ft]: ed === L.Dmq.PAUSED && !Z,
            [U.GD]: (0, T.PK)(ed),
        },
        em = null;
    switch (eu) {
        case P.PremiumTypes.TIER_0:
            em = (0, i.jsxs)("div", {
                className: U.Up,
                children: [
                    (0, i.jsx)(E.A, { className: U.sq, "aria-label": G.intl.string(G.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: U.sT }),
                ],
            });
            break;
        case P.PremiumTypes.TIER_1:
            em = (0, i.jsx)(F, {});
            break;
        case P.PremiumTypes.TIER_2:
            em = (0, i.jsx)(p.A, { className: U.V6, "aria-label": G.intl.string(G.t.lpNrPu) });
    }
    let eA = w.includes(t.status) && !Z ? Y : B;
    return (0, i.jsx)(eA, {
        wordMark: em,
        subscriptionInfo:
            (r()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: U.MS,
                children: ee
                    ? G.intl.format(G.t["/SfHwl"], { weeks: 1 })
                    : (0, T.nB)({
                          planId: ec,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: Q,
                          activeDiscountInfo: $,
                          hasFractionalPremiumWithSub: Z,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (!0 === (0, j.g)({ location: "renderButtons" })) {
                if (t.isPurchasedExternally) {
                    let e = (0, T.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                    return (0, i.jsx)(c.MzZ, {
                        href: e,
                        useDefaultUnderlineStyles: !1,
                        children: (0, i.jsx)(c.Button, {
                            variant: "expressive",
                            size: "md",
                            icon: c.tvc,
                            loading: O,
                            text: G.intl.string(G.t.obRG6Y),
                        }),
                    });
                }
                if (T.Ay.isBaseSubscriptionCanceled(t))
                    return (0, i.jsx)(c.Button, {
                        variant: "expressive",
                        size: "md",
                        icon: c.tvc,
                        text: G.intl.string(G.t.iIvF2z),
                        loading: O,
                        onClick: ea,
                    });
                switch (e) {
                    case L.Dmq.BILLING_RETRY:
                        return (0, i.jsx)("div", {
                            className: M.f6,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "md",
                                onClick: ei,
                                loading: O,
                                text: G.intl.string(G.t["ETE/oC"]),
                            }),
                        });
                    case L.Dmq.PAUSE_PENDING:
                        return (0, i.jsxs)("div", {
                            className: M.f6,
                            children: [
                                (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    size: "md",
                                    icon: c.tvc,
                                    text: G.intl.string(G.t.TgV5Qf),
                                    loading: O,
                                    onClick: el,
                                }),
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    disabled: O,
                                    onClick: en,
                                    text: G.intl.string(G.t.cM1H0K),
                                }),
                            ],
                        });
                    case L.Dmq.PAUSED:
                        if (Z) return n();
                        let { durations: s } = (0, I.Vy)(t);
                        return (0, i.jsxs)("div", {
                            className: M.f6,
                            children: [
                                (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    size: "md",
                                    icon: c.tvc,
                                    text: G.intl.string(G.t.zpi5pg),
                                    loading: O,
                                    onClick: el,
                                }),
                                s.length > 0
                                    ? (0, i.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          onClick: er,
                                          disabled: O,
                                          text: G.intl.string(G.t.jNHWt6),
                                      })
                                    : (0, i.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          onClick: eo,
                                          disabled: O,
                                          text: G.intl.string(G.t.cM1H0K),
                                      }),
                            ],
                        });
                    case L.Dmq.ACTIVE:
                    case L.Dmq.PAST_DUE:
                        return n();
                }
            }
            if (t.isPurchasedExternally) {
                let e = (0, T.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: O,
                        text: G.intl.string(G.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = T.Ay.isSwitchingPlansDisabled(t),
                    n = T.Ay.getSwitchingPlansDisabledMessage(t);
                return !0 === (0, j.g)({ location: "renderButtons" })
                    ? q
                        ? (0, i.jsx)("div", {
                              className: M.f6,
                              children: (0, i.jsx)(c.Button, {
                                  variant: "secondary",
                                  disabled: O,
                                  onClick: et,
                                  size: "md",
                                  text: G.intl.string(G.t.eFlYVA),
                              }),
                          })
                        : (0, i.jsxs)("div", {
                              className: M.f6,
                              children: [
                                  (0, i.jsx)(o.m_, {
                                      text: n,
                                      asContainer: !0,
                                      children: (0, i.jsx)(c.Button, {
                                          variant: "expressive",
                                          size: "md",
                                          icon: c.tvc,
                                          disabled: e,
                                          onClick: () => {
                                              (0, g.A)({
                                                  analyticsLocations: z,
                                                  analyticsLocation: k,
                                                  analyticsObject: H,
                                                  subscription: t,
                                              });
                                          },
                                          text: G.intl.string(G.t["dylp/7"]),
                                      }),
                                  }),
                                  (0, i.jsx)(c.Button, {
                                      variant: "secondary",
                                      onClick: en,
                                      disabled: O,
                                      size: "md",
                                      text: G.intl.string(G.t["ETE/oC"]),
                                  }),
                              ],
                          })
                    : (0, i.jsxs)("div", {
                          className: U.Lv,
                          children: [
                              q
                                  ? (0, i.jsx)("div", {
                                        className: U.xP,
                                        children: (0, i.jsx)(c.QWc, {
                                            variant: "always-white",
                                            disabled: O,
                                            onClick: et,
                                            size: "sm",
                                            text: G.intl.string(G.t.eFlYVA),
                                        }),
                                    })
                                  : (0, i.jsx)("div", {
                                        className: U.Nn,
                                        children: (0, i.jsx)(c.QWc, {
                                            variant: "always-white",
                                            onClick: en,
                                            disabled: O,
                                            size: "sm",
                                            text: G.intl.string(G.t["ETE/oC"]),
                                        }),
                                    }),
                              (0, i.jsx)(o.m_, {
                                  text: n,
                                  asContainer: !0,
                                  children: (0, i.jsx)(R.A, {
                                      className: a()(U.au, U.lB),
                                      disabled: e,
                                      onClick: () => {
                                          (0, g.A)({
                                              analyticsLocations: z,
                                              analyticsLocation: k,
                                              analyticsObject: H,
                                              subscription: t,
                                          });
                                      },
                                      text: G.intl.string(G.t["dylp/7"]),
                                  }),
                              }),
                          ],
                      });
            }
            if (T.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: U.au,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: G.intl.string(G.t.iIvF2z),
                        loading: O,
                        onClick: ea,
                    }),
                });
            switch (e) {
                case L.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: ei,
                        loading: O,
                        text: G.intl.string(G.t["ETE/oC"]),
                    });
                case L.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: U.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: U.Nn,
                                children: (0, i.jsx)(c.QWc, {
                                    variant: "always-white",
                                    disabled: O,
                                    onClick: en,
                                    size: "sm",
                                    text: G.intl.string(G.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: U.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: G.intl.string(G.t.TgV5Qf),
                                    loading: O,
                                    onClick: el,
                                }),
                            }),
                        ],
                    });
                case L.Dmq.PAUSED:
                    if (Z) return n();
                    let { durations: s } = (0, I.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: U.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: U.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: er,
                                              disabled: O,
                                              size: "sm",
                                              text: G.intl.string(G.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: eo,
                                              disabled: O,
                                              size: "sm",
                                              text: G.intl.string(G.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: U.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: G.intl.string(G.t.zpi5pg),
                                    loading: O,
                                    onClick: el,
                                }),
                            }),
                        ],
                    });
                case L.Dmq.ACTIVE:
                case L.Dmq.PAST_DUE:
                    return n();
            }
        })(),
        statusClasses: e_,
        shouldUseDiscountMarketing: Q,
        discountAmount: J,
        premiumType: eu,
    });
};
