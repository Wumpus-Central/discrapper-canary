n.d(t, { A: () => X, i: () => z });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(284009),
    r = n.n(a),
    o = n(735438),
    d = n(435371),
    c = n(397927),
    u = n(158032),
    _ = n(793574),
    m = n(688810),
    g = n(531260),
    A = n(626584),
    x = n(639289),
    h = n(532794),
    p = n(832946),
    T = n(97352),
    E = n(481354),
    S = n(85563),
    f = n(739508),
    C = n(203982),
    b = n(927578),
    N = n(83617),
    I = n(615396),
    v = n(526292),
    j = n(637073),
    y = n(573359),
    R = n(422936),
    O = n(795269),
    L = n(327479),
    D = n(473702),
    P = n(788868),
    M = n(652215),
    G = n(601107),
    U = n(985018),
    k = n(893233);
let V = new A.A("SubscriptionHeader.tsx"),
    w = { page: M.liQ.USER_SETTINGS, section: M.JJy.SETTINGS_PREMIUM, object: M.ZSU.CARD },
    B = [M.Dmq.PAUSED, M.Dmq.PAUSE_PENDING, M.Dmq.BILLING_RETRY];
function H(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(k.vK, a),
        children: [
            (0, i.jsx)("div", { className: k.aK }),
            (0, i.jsxs)("div", {
                className: k.wt,
                children: [
                    (0, i.jsx)("div", { className: k.Sl }),
                    (0, i.jsxs)("div", {
                        className: k.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: k.Gp,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(O.ir, {
                                            text: U.intl.formatToPlainString(U.t.iiLbvu, { percent: o }),
                                            className: k.NM,
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
            (0, i.jsx)("div", { className: k.Uo, children: s }),
        ],
    });
}
function F(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(k.vK, a, k.uR),
        children: [
            (0, i.jsx)("div", { className: k.aK }),
            (0, i.jsx)("div", {
                className: k.wt,
                children: (0, i.jsx)("div", {
                    className: k.zH,
                    children: (0, i.jsxs)("div", {
                        className: k.Gp,
                        children: [
                            (0, i.jsx)("div", { className: k.Sl }),
                            (0, i.jsxs)("div", {
                                className: k.Ck,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(O.ir, {
                                            text: U.intl.formatToPlainString(U.t.iiLbvu, { percent: o }),
                                            className: k.NM,
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
            (0, i.jsx)("div", { className: k.Uo, children: s }),
        ],
    });
}
function Y() {
    return (0, i.jsxs)("div", {
        className: k.Up,
        children: [
            (0, i.jsx)(S.A, { className: k.sq, "aria-label": U.intl.string(U.t.FSOz78) }),
            (0, i.jsx)("div", { className: k.CJ }),
        ],
    });
}
function z() {
    let { analyticsLocations: e } = (0, m.Ay)(_.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(H, {
        wordMark: (0, i.jsx)(Y, {}),
        subscriptionInfo: (0, i.jsx)("div", { className: k.MS, children: U.intl.string(U.t.R0GJL2) }),
        buttons: (0, i.jsx)(L.A, {
            className: k.au,
            onClick: () => (0, h.A)({ subscriptionTier: P.pe.TIER_1, analyticsLocations: e, analyticsObject: w }),
            text: U.intl.string(U.t["/ygMUY"]),
        }),
        statusClasses: { [k.aS]: !0 },
    });
}
let X = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: a,
            paymentSource: A,
            busy: O,
            analyticsLocation: z,
        } = e,
        { analyticsLocations: X } = (0, m.Ay)(_.A.SUBSCRIPTION_HEADER),
        W = (0, g.A)({ forceFetch: !1 }),
        { fractionalState: K } = W,
        Z = K === P.xc.FP_SUB_PAUSED,
        q = (0, R.O)(),
        J = q?.discount?.amount,
        Q = (0, v.k5)(),
        $ = (0, v.nf)(),
        ee = (0, j.d)(),
        et = () => {
            (t.status === M.Dmq.ACTIVE || t.status === M.Dmq.PAST_DUE || t.status === M.Dmq.PAUSE_PENDING || Z) && ei();
        },
        en = () => {
            t.status === M.Dmq.BILLING_RETRY && ei(D.g.CONFIRM);
        },
        ei = (e) => {
            (0, c.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("49561"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocation: z,
                        analyticsLocations: X,
                        initialStep: e,
                    });
            });
        },
        es = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = T.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void V.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let l = (0, N._w)(e, A?.id, !1),
                    d = l.length > 0 ? l[0] : t.currency,
                    u = !0;
                if ((1 === l.length && A?.id === t.paymentSourceId && (0, N.jJ)(e.id, d, A?.id) && (u = !1), u))
                    (0, h.A)({
                        initialPlanId: t.premiumPlanIdFromItems,
                        analyticsLocations: X,
                        analyticsLocation: z,
                        analyticsObject: w,
                        subscription: t,
                    });
                else {
                    let e, l;
                    r()(null != a, "Expected renewalInvoicePreview"),
                        r()(null != s, "Expected currentInvoicePreview"),
                        (e = (0, o.uniqueId)("premium-resubscribe-modal")),
                        (l = !1),
                        (0, c.mMO)(
                            async () => {
                                let { PremiumResubscribeModal: e } = await Promise.all([
                                    n.e("41353"),
                                    n.e("29716"),
                                    n.e("14704"),
                                    n.e("2824"),
                                    n.e("64434"),
                                ]).then(n.bind(n, 46292));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        premiumSubscription: t,
                                        analyticsLocations: X,
                                        fractionalPremiumInfo: W,
                                        currentInvoicePreview: s,
                                        renewalInvoicePreview: a,
                                        onClose: async () => {
                                            l ||
                                                ((l = !0),
                                                C._.dispatch(M.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                                y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated
                                                    ? setTimeout(() => {
                                                          n.onClose();
                                                      }, x.K)
                                                    : await n.onClose());
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    l ||
                                        ((l = !0),
                                        C._.dispatch(M.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        y.A.isDisplayingWowMomentConfirmation && y.A.isAnimated
                                            ? setTimeout(() => {
                                                  (0, c.OoC)(e);
                                              }, x.K)
                                            : (0, c.OoC)(e));
                                },
                                modalKey: e,
                            },
                        );
                }
            }
        },
        el = () => {
            B.includes(t.status) && null != t.pauseEndsAt
                ? t.status === M.Dmq.PAUSED && t.pauseReason !== G.qf.USER_TEMPORARY_BAN
                    ? (0, h.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: X,
                          analyticsLocation: z,
                          analyticsObject: w,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : u.U(t, X)
                : (0, f.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        ea = () => {
            t.status === M.Dmq.PAUSED && ei(D.g.PAUSE_SELECT);
        },
        er = () => {
            ei(D.g.WHAT_YOU_LOSE);
        },
        eo = b.Ay.getPlanIdFromInvoice(t, s);
    if ((0, p.m1)(eo)) return null;
    let ed = b.Ay.getStatusFromInvoice(t, s),
        ec = b.Ay.getPremiumType(eo),
        eu = {
            [k.Vd]: ec === P.PremiumTypes.TIER_0,
            [k.aS]: ec === P.PremiumTypes.TIER_1,
            [k.hA]: ec === P.PremiumTypes.TIER_2,
            [k.aD]: ed === M.Dmq.CANCELED,
            [k.WY]: ed === M.Dmq.PAUSE_PENDING,
            [k.Ft]: ed === M.Dmq.PAUSED && !Z,
            [k.GD]: (0, b.PK)(ed),
        },
        e_ = null;
    switch (ec) {
        case P.PremiumTypes.TIER_0:
            e_ = (0, i.jsxs)("div", {
                className: k.Up,
                children: [
                    (0, i.jsx)(S.A, { className: k.sq, "aria-label": U.intl.string(U.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: k.sT }),
                ],
            });
            break;
        case P.PremiumTypes.TIER_1:
            e_ = (0, i.jsx)(Y, {});
            break;
        case P.PremiumTypes.TIER_2:
            e_ = (0, i.jsx)(E.A, { className: k.V6, "aria-label": U.intl.string(U.t.lpNrPu) });
    }
    let em = B.includes(t.status) && !Z ? F : H;
    return (0, i.jsx)(em, {
        wordMark: e_,
        subscriptionInfo:
            (r()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: k.MS,
                children: ee
                    ? U.intl.format(U.t["/SfHwl"], { weeks: 1 })
                    : (0, b.nB)({
                          planId: eo,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: Q,
                          activeDiscountInfo: $,
                          hasFractionalPremiumWithSub: Z,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (t.isPurchasedExternally) {
                let e = (0, b.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: O,
                        text: U.intl.string(U.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = b.Ay.isSwitchingPlansDisabled(t),
                    n = b.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: k.Lv,
                    children: [
                        (0, i.jsx)("div", {
                            className: k.Nn,
                            children: (0, i.jsx)(c.QWc, {
                                variant: "always-white",
                                onClick: et,
                                disabled: O,
                                size: "sm",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                        }),
                        (0, i.jsx)(d.m_, {
                            text: n,
                            asContainer: !0,
                            children: (0, i.jsx)(L.A, {
                                className: l()(k.au, k.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, h.A)({
                                        analyticsLocations: X,
                                        analyticsLocation: z,
                                        analyticsObject: w,
                                        subscription: t,
                                    });
                                },
                                text: U.intl.string(U.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (b.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: k.au,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: U.intl.string(U.t.iIvF2z),
                        loading: O,
                        onClick: es,
                    }),
                });
            switch (e) {
                case M.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: en,
                        loading: O,
                        text: U.intl.string(U.t["ETE/oC"]),
                    });
                case M.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: k.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: k.Nn,
                                children: (0, i.jsx)(c.QWc, {
                                    variant: "always-white",
                                    disabled: O,
                                    onClick: et,
                                    size: "sm",
                                    text: U.intl.string(U.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: k.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: U.intl.string(U.t.TgV5Qf),
                                    loading: O,
                                    onClick: el,
                                }),
                            }),
                        ],
                    });
                case M.Dmq.PAUSED:
                    if (Z) return n();
                    let { durations: s } = (0, I.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: k.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: k.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: ea,
                                              disabled: O,
                                              size: "sm",
                                              text: U.intl.string(U.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: er,
                                              disabled: O,
                                              size: "sm",
                                              text: U.intl.string(U.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: k.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: U.intl.string(U.t.zpi5pg),
                                    loading: O,
                                    onClick: el,
                                }),
                            }),
                        ],
                    });
                case M.Dmq.ACTIVE:
                case M.Dmq.PAST_DUE:
                    return n();
            }
        })(),
        statusClasses: eu,
        shouldUseDiscountMarketing: Q,
        discountAmount: J,
    });
};
