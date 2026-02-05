n.d(t, { A: () => F, i: () => V });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(284009),
    l = n.n(a),
    o = n(435371),
    c = n(397927),
    d = n(158032),
    u = n(793574),
    _ = n(688810),
    m = n(531260),
    A = n(626584),
    g = n(532794),
    E = n(832946),
    h = n(97352),
    p = n(481354),
    C = n(85563),
    x = n(739508),
    T = n(927578),
    I = n(83617),
    S = n(615396),
    f = n(526292),
    N = n(637073),
    b = n(110919),
    R = n(422936),
    v = n(795269),
    O = n(327479),
    j = n(473702),
    P = n(788868),
    y = n(652215),
    L = n(601107),
    D = n(985018),
    M = n(282151);
let G = new A.A("SubscriptionHeader.tsx"),
    U = { page: y.liQ.USER_SETTINGS, section: y.JJy.SETTINGS_PREMIUM, object: y.ZSU.CARD },
    k = [y.Dmq.PAUSED, y.Dmq.PAUSE_PENDING, y.Dmq.BILLING_RETRY];
function B(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: l,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(M.vK, a),
        children: [
            (0, i.jsx)("div", { className: M.aK }),
            (0, i.jsxs)("div", {
                className: M.wt,
                children: [
                    (0, i.jsx)("div", { className: M.Sl }),
                    (0, i.jsxs)("div", {
                        className: M.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: M.Gp,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(v.ir, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvu, { percent: o }),
                                            className: M.NM,
                                            colorOptions: v.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                ],
                            }),
                            n,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: M.Uo, children: s }),
        ],
    });
}
function w(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: l,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(M.vK, a, M.uR),
        children: [
            (0, i.jsx)("div", { className: M.aK }),
            (0, i.jsx)("div", {
                className: M.wt,
                children: (0, i.jsx)("div", {
                    className: M.zH,
                    children: (0, i.jsxs)("div", {
                        className: M.Gp,
                        children: [
                            (0, i.jsx)("div", { className: M.Sl }),
                            (0, i.jsxs)("div", {
                                className: M.Ck,
                                children: [
                                    t,
                                    l &&
                                        null != o &&
                                        (0, i.jsx)(v.ir, {
                                            text: D.intl.formatToPlainString(D.t.iiLbvu, { percent: o }),
                                            className: M.NM,
                                            colorOptions: v.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)("div", { className: M.Uo, children: s }),
        ],
    });
}
function H() {
    return (0, i.jsxs)("div", {
        className: M.Up,
        children: [
            (0, i.jsx)(C.A, { className: M.sq, "aria-label": D.intl.string(D.t.FSOz78) }),
            (0, i.jsx)("div", { className: M.CJ }),
        ],
    });
}
function V() {
    let { analyticsLocations: e } = (0, _.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(B, {
        wordMark: (0, i.jsx)(H, {}),
        subscriptionInfo: (0, i.jsx)("div", { className: M.MS, children: D.intl.string(D.t.R0GJL2) }),
        buttons: (0, i.jsx)(O.A, {
            className: M.au,
            onClick: () => (0, g.A)({ subscriptionTier: P.pe.TIER_1, analyticsLocations: e, analyticsObject: U }),
            text: D.intl.string(D.t["/ygMUY"]),
        }),
        statusClasses: { [M.aS]: !0 },
    });
}
let F = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: a,
            paymentSource: A,
            busy: v,
            analyticsLocation: V,
        } = e,
        { analyticsLocations: F } = (0, _.Ay)(u.A.SUBSCRIPTION_HEADER),
        Y = (0, m.A)({ forceFetch: !1 }),
        { fractionalState: W } = Y,
        z = W === P.xc.FP_SUB_PAUSED,
        { enabled: K } = (0, b.Ay)({ location: "subscription_header" });
    (P.QV.has(t.planId) && y.Uyk.ALL_PAUSEABLE.has(t.status) && !z) || (K = !1);
    let Z = (0, R.O)(),
        X = Z?.discount?.amount,
        q = (0, f.k5)(),
        J = (0, f.nf)(),
        Q = (0, N.d)(),
        $ = () => {
            (t.status === y.Dmq.ACTIVE || t.status === y.Dmq.PAST_DUE || t.status === y.Dmq.PAUSED) &&
                en(j.g.PAUSE_SELECT);
        },
        ee = () => {
            (t.status === y.Dmq.ACTIVE || t.status === y.Dmq.PAST_DUE || t.status === y.Dmq.PAUSE_PENDING || z) && en();
        },
        et = () => {
            t.status === y.Dmq.BILLING_RETRY && en(j.g.CONFIRM);
        },
        en = (e) => {
            (0, c.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await n
                    .e("72820")
                    .then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocation: V,
                        analyticsLocations: F,
                        initialStep: e,
                    });
            });
        },
        ei = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = h.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void G.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let r = (0, I._w)(e, A?.id, !1),
                    o = r.length > 0 ? r[0] : t.currency,
                    d = !0;
                1 === r.length && A?.id === t.paymentSourceId && (0, I.jJ)(e.id, o, A?.id) && (d = !1),
                    d
                        ? (0, g.A)({
                              initialPlanId: t.premiumPlanIdFromItems,
                              analyticsLocations: F,
                              analyticsLocation: V,
                              analyticsObject: U,
                              subscription: t,
                          })
                        : (l()(null != a, "Expected renewalInvoicePreview"),
                          l()(null != s, "Expected currentInvoicePreview"),
                          (0, c.mMO)(async () => {
                              let { PremiumResubscribeModal: e } = await Promise.all([
                                  n.e("14704"),
                                  n.e("29716"),
                                  n.e("2824"),
                                  n.e("54711"),
                              ]).then(n.bind(n, 46292));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      premiumSubscription: t,
                                      analyticsLocations: F,
                                      fractionalPremiumInfo: Y,
                                      currentInvoicePreview: s,
                                      renewalInvoicePreview: a,
                                  });
                          }));
            }
        },
        es = () => {
            k.includes(t.status) && null != t.pauseEndsAt
                ? t.status === y.Dmq.PAUSED && t.pauseReason !== L.qf.USER_TEMPORARY_BAN
                    ? (0, g.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: F,
                          analyticsLocation: V,
                          analyticsObject: U,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : d.U(t, F)
                : (0, x.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        er = () => {
            t.status === y.Dmq.PAUSED && en(j.g.PAUSE_SELECT);
        },
        ea = () => {
            en(j.g.WHAT_YOU_LOSE);
        },
        el = T.Ay.getPlanIdFromInvoice(t, s);
    if ((0, E.m1)(el)) return null;
    let eo = T.Ay.getStatusFromInvoice(t, s),
        ec = T.Ay.getPremiumType(el),
        ed = {
            [M.Vd]: ec === P.PremiumTypes.TIER_0,
            [M.aS]: ec === P.PremiumTypes.TIER_1,
            [M.hA]: ec === P.PremiumTypes.TIER_2,
            [M.aD]: eo === y.Dmq.CANCELED,
            [M.WY]: eo === y.Dmq.PAUSE_PENDING,
            [M.Ft]: eo === y.Dmq.PAUSED && !z,
            [M.GD]: (0, T.PK)(eo),
        },
        eu = null;
    switch (ec) {
        case P.PremiumTypes.TIER_0:
            eu = (0, i.jsxs)("div", {
                className: M.Up,
                children: [
                    (0, i.jsx)(C.A, { className: M.sq, "aria-label": D.intl.string(D.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: M.sT }),
                ],
            });
            break;
        case P.PremiumTypes.TIER_1:
            eu = (0, i.jsx)(H, {});
            break;
        case P.PremiumTypes.TIER_2:
            eu = (0, i.jsx)(p.A, { className: M.V6, "aria-label": D.intl.string(D.t.lpNrPu) });
    }
    let e_ = k.includes(t.status) && !z ? w : B;
    return (0, i.jsx)(e_, {
        wordMark: eu,
        subscriptionInfo:
            (l()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: M.MS,
                children: Q
                    ? D.intl.format(D.t["/SfHwl"], { weeks: 1 })
                    : (0, T.nB)({
                          planId: el,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: q,
                          activeDiscountInfo: J,
                          hasFractionalPremiumWithSub: z,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (t.isPurchasedExternally) {
                let e = (0, T.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: v,
                        text: D.intl.string(D.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = T.Ay.isSwitchingPlansDisabled(t),
                    n = T.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: M.Lv,
                    children: [
                        K
                            ? (0, i.jsx)("div", {
                                  className: M.xP,
                                  children: (0, i.jsx)(c.QWc, {
                                      variant: "always-white",
                                      disabled: v,
                                      onClick: $,
                                      size: "sm",
                                      text: D.intl.string(D.t.eFlYVA),
                                  }),
                              })
                            : (0, i.jsx)("div", {
                                  className: M.Nn,
                                  children: (0, i.jsx)(c.QWc, {
                                      variant: "always-white",
                                      onClick: ee,
                                      disabled: v,
                                      size: "sm",
                                      text: D.intl.string(D.t["ETE/oC"]),
                                  }),
                              }),
                        (0, i.jsx)(o.m_, {
                            text: n,
                            asContainer: !0,
                            children: (0, i.jsx)(O.A, {
                                className: r()(M.au, M.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, g.A)({
                                        analyticsLocations: F,
                                        analyticsLocation: V,
                                        analyticsObject: U,
                                        subscription: t,
                                    });
                                },
                                text: D.intl.string(D.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (T.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: M.au,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: D.intl.string(D.t.iIvF2z),
                        loading: v,
                        onClick: ei,
                    }),
                });
            switch (e) {
                case y.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: et,
                        loading: v,
                        text: D.intl.string(D.t["ETE/oC"]),
                    });
                case y.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: M.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: M.Nn,
                                children: (0, i.jsx)(c.QWc, {
                                    variant: "always-white",
                                    disabled: v,
                                    onClick: ee,
                                    size: "sm",
                                    text: D.intl.string(D.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: M.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.TgV5Qf),
                                    loading: v,
                                    onClick: es,
                                }),
                            }),
                        ],
                    });
                case y.Dmq.PAUSED:
                    if (z) return n();
                    let { durations: s } = (0, S.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: M.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: M.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: er,
                                              disabled: v,
                                              size: "sm",
                                              text: D.intl.string(D.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: ea,
                                              disabled: v,
                                              size: "sm",
                                              text: D.intl.string(D.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: M.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: D.intl.string(D.t.zpi5pg),
                                    loading: v,
                                    onClick: es,
                                }),
                            }),
                        ],
                    });
                case y.Dmq.ACTIVE:
                case y.Dmq.PAST_DUE:
                    return n();
            }
        })(),
        statusClasses: ed,
        shouldUseDiscountMarketing: q,
        discountAmount: X,
    });
};
