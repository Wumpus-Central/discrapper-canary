n.d(t, { A: () => W, i: () => X });
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
    g = n(688810),
    m = n(531260),
    A = n(626584),
    h = n(639289),
    p = n(532794),
    x = n(832946),
    E = n(97352),
    T = n(481354),
    S = n(85563),
    C = n(739508),
    f = n(203982),
    I = n(927578),
    b = n(83617),
    N = n(615396),
    v = n(526292),
    j = n(637073),
    O = n(573359),
    R = n(110919),
    y = n(422936),
    P = n(795269),
    L = n(327479),
    D = n(473702),
    G = n(788868),
    M = n(652215),
    U = n(601107),
    k = n(985018),
    V = n(282151);
let w = new A.A("SubscriptionHeader.tsx"),
    H = { page: M.liQ.USER_SETTINGS, section: M.JJy.SETTINGS_PREMIUM, object: M.ZSU.CARD },
    B = [M.Dmq.PAUSED, M.Dmq.PAUSE_PENDING, M.Dmq.BILLING_RETRY];
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
        className: l()(V.vK, a),
        children: [
            (0, i.jsx)("div", { className: V.aK }),
            (0, i.jsxs)("div", {
                className: V.wt,
                children: [
                    (0, i.jsx)("div", { className: V.Sl }),
                    (0, i.jsxs)("div", {
                        className: V.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: V.Gp,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(P.ir, {
                                            text: k.intl.formatToPlainString(k.t.iiLbvu, { percent: o }),
                                            className: V.NM,
                                            colorOptions: P.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                ],
                            }),
                            n,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: V.Uo, children: s }),
        ],
    });
}
function Y(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(V.vK, a, V.uR),
        children: [
            (0, i.jsx)("div", { className: V.aK }),
            (0, i.jsx)("div", {
                className: V.wt,
                children: (0, i.jsx)("div", {
                    className: V.zH,
                    children: (0, i.jsxs)("div", {
                        className: V.Gp,
                        children: [
                            (0, i.jsx)("div", { className: V.Sl }),
                            (0, i.jsxs)("div", {
                                className: V.Ck,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(P.ir, {
                                            text: k.intl.formatToPlainString(k.t.iiLbvu, { percent: o }),
                                            className: V.NM,
                                            colorOptions: P.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)("div", { className: V.Uo, children: s }),
        ],
    });
}
function z() {
    return (0, i.jsxs)("div", {
        className: V.Up,
        children: [
            (0, i.jsx)(S.A, { className: V.sq, "aria-label": k.intl.string(k.t.FSOz78) }),
            (0, i.jsx)("div", { className: V.CJ }),
        ],
    });
}
function X() {
    let { analyticsLocations: e } = (0, g.Ay)(_.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(F, {
        wordMark: (0, i.jsx)(z, {}),
        subscriptionInfo: (0, i.jsx)("div", { className: V.MS, children: k.intl.string(k.t.R0GJL2) }),
        buttons: (0, i.jsx)(L.A, {
            className: V.au,
            onClick: () => (0, p.A)({ subscriptionTier: G.pe.TIER_1, analyticsLocations: e, analyticsObject: H }),
            text: k.intl.string(k.t["/ygMUY"]),
        }),
        statusClasses: { [V.aS]: !0 },
    });
}
let W = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: a,
            paymentSource: A,
            busy: P,
            analyticsLocation: X,
        } = e,
        { analyticsLocations: W } = (0, g.Ay)(_.A.SUBSCRIPTION_HEADER),
        K = (0, m.A)({ forceFetch: !1 }),
        { fractionalState: Z } = K,
        q = Z === G.xc.FP_SUB_PAUSED,
        { enabled: J } = (0, R.Ay)({ location: "subscription_header" });
    (G.QV.has(t.planId) && M.Uyk.ALL_PAUSEABLE.has(t.status) && !q) || (J = !1);
    let Q = (0, y.O)(),
        $ = Q?.discount?.amount,
        ee = (0, v.k5)(),
        et = (0, v.nf)(),
        en = (0, j.d)(),
        ei = () => {
            (t.status === M.Dmq.ACTIVE || t.status === M.Dmq.PAST_DUE || t.status === M.Dmq.PAUSED) &&
                ea(D.g.PAUSE_SELECT);
        },
        es = () => {
            (t.status === M.Dmq.ACTIVE || t.status === M.Dmq.PAST_DUE || t.status === M.Dmq.PAUSE_PENDING || q) && ea();
        },
        el = () => {
            t.status === M.Dmq.BILLING_RETRY && ea(D.g.CONFIRM);
        },
        ea = (e) => {
            (0, c.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("82383"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocation: X,
                        analyticsLocations: W,
                        initialStep: e,
                    });
            });
        },
        er = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = E.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void w.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let l = (0, b._w)(e, A?.id, !1),
                    d = l.length > 0 ? l[0] : t.currency,
                    u = !0;
                if ((1 === l.length && A?.id === t.paymentSourceId && (0, b.jJ)(e.id, d, A?.id) && (u = !1), u))
                    (0, p.A)({
                        initialPlanId: t.premiumPlanIdFromItems,
                        analyticsLocations: W,
                        analyticsLocation: X,
                        analyticsObject: H,
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
                                    n.e("30834"),
                                ]).then(n.bind(n, 46292));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        premiumSubscription: t,
                                        analyticsLocations: W,
                                        fractionalPremiumInfo: K,
                                        currentInvoicePreview: s,
                                        renewalInvoicePreview: a,
                                        onClose: async () => {
                                            l ||
                                                ((l = !0),
                                                f._.dispatch(M.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                                O.A.isDisplayingWowMomentConfirmation && O.A.isAnimated
                                                    ? setTimeout(() => {
                                                          n.onClose();
                                                      }, h.K)
                                                    : await n.onClose());
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    l ||
                                        ((l = !0),
                                        f._.dispatch(M.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        O.A.isDisplayingWowMomentConfirmation && O.A.isAnimated
                                            ? setTimeout(() => {
                                                  (0, c.OoC)(e);
                                              }, h.K)
                                            : (0, c.OoC)(e));
                                },
                                modalKey: e,
                            },
                        );
                }
            }
        },
        eo = () => {
            B.includes(t.status) && null != t.pauseEndsAt
                ? t.status === M.Dmq.PAUSED && t.pauseReason !== U.qf.USER_TEMPORARY_BAN
                    ? (0, p.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: W,
                          analyticsLocation: X,
                          analyticsObject: H,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : u.U(t, W)
                : (0, C.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        ed = () => {
            t.status === M.Dmq.PAUSED && ea(D.g.PAUSE_SELECT);
        },
        ec = () => {
            ea(D.g.WHAT_YOU_LOSE);
        },
        eu = I.Ay.getPlanIdFromInvoice(t, s);
    if ((0, x.m1)(eu)) return null;
    let e_ = I.Ay.getStatusFromInvoice(t, s),
        eg = I.Ay.getPremiumType(eu),
        em = {
            [V.Vd]: eg === G.PremiumTypes.TIER_0,
            [V.aS]: eg === G.PremiumTypes.TIER_1,
            [V.hA]: eg === G.PremiumTypes.TIER_2,
            [V.aD]: e_ === M.Dmq.CANCELED,
            [V.WY]: e_ === M.Dmq.PAUSE_PENDING,
            [V.Ft]: e_ === M.Dmq.PAUSED && !q,
            [V.GD]: (0, I.PK)(e_),
        },
        eA = null;
    switch (eg) {
        case G.PremiumTypes.TIER_0:
            eA = (0, i.jsxs)("div", {
                className: V.Up,
                children: [
                    (0, i.jsx)(S.A, { className: V.sq, "aria-label": k.intl.string(k.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: V.sT }),
                ],
            });
            break;
        case G.PremiumTypes.TIER_1:
            eA = (0, i.jsx)(z, {});
            break;
        case G.PremiumTypes.TIER_2:
            eA = (0, i.jsx)(T.A, { className: V.V6, "aria-label": k.intl.string(k.t.lpNrPu) });
    }
    let eh = B.includes(t.status) && !q ? Y : F;
    return (0, i.jsx)(eh, {
        wordMark: eA,
        subscriptionInfo:
            (r()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: V.MS,
                children: en
                    ? k.intl.format(k.t["/SfHwl"], { weeks: 1 })
                    : (0, I.nB)({
                          planId: eu,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: ee,
                          activeDiscountInfo: et,
                          hasFractionalPremiumWithSub: q,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (t.isPurchasedExternally) {
                let e = (0, I.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: P,
                        text: k.intl.string(k.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = I.Ay.isSwitchingPlansDisabled(t),
                    n = I.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: V.Lv,
                    children: [
                        J
                            ? (0, i.jsx)("div", {
                                  className: V.xP,
                                  children: (0, i.jsx)(c.QWc, {
                                      variant: "always-white",
                                      disabled: P,
                                      onClick: ei,
                                      size: "sm",
                                      text: k.intl.string(k.t.eFlYVA),
                                  }),
                              })
                            : (0, i.jsx)("div", {
                                  className: V.Nn,
                                  children: (0, i.jsx)(c.QWc, {
                                      variant: "always-white",
                                      onClick: es,
                                      disabled: P,
                                      size: "sm",
                                      text: k.intl.string(k.t["ETE/oC"]),
                                  }),
                              }),
                        (0, i.jsx)(d.m_, {
                            text: n,
                            asContainer: !0,
                            children: (0, i.jsx)(L.A, {
                                className: l()(V.au, V.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, p.A)({
                                        analyticsLocations: W,
                                        analyticsLocation: X,
                                        analyticsObject: H,
                                        subscription: t,
                                    });
                                },
                                text: k.intl.string(k.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (I.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: V.au,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: k.intl.string(k.t.iIvF2z),
                        loading: P,
                        onClick: er,
                    }),
                });
            switch (e) {
                case M.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: el,
                        loading: P,
                        text: k.intl.string(k.t["ETE/oC"]),
                    });
                case M.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: V.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: V.Nn,
                                children: (0, i.jsx)(c.QWc, {
                                    variant: "always-white",
                                    disabled: P,
                                    onClick: es,
                                    size: "sm",
                                    text: k.intl.string(k.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: V.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: k.intl.string(k.t.TgV5Qf),
                                    loading: P,
                                    onClick: eo,
                                }),
                            }),
                        ],
                    });
                case M.Dmq.PAUSED:
                    if (q) return n();
                    let { durations: s } = (0, N.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: V.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: V.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: ed,
                                              disabled: P,
                                              size: "sm",
                                              text: k.intl.string(k.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: ec,
                                              disabled: P,
                                              size: "sm",
                                              text: k.intl.string(k.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: V.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: k.intl.string(k.t.zpi5pg),
                                    loading: P,
                                    onClick: eo,
                                }),
                            }),
                        ],
                    });
                case M.Dmq.ACTIVE:
                case M.Dmq.PAST_DUE:
                    return n();
            }
        })(),
        statusClasses: em,
        shouldUseDiscountMarketing: ee,
        discountAmount: $,
    });
};
