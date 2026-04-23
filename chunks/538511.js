n.d(t, { A: () => Z, i: () => W });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(284009),
    r = n.n(a),
    o = n(735438),
    d = n(990078),
    u = n(192308),
    c = n(349288),
    g = n(821609),
    m = n(123292),
    _ = n(158032),
    A = n(793574),
    h = n(688810),
    p = n(531260),
    x = n(626584),
    E = n(639289),
    T = n(532794),
    S = n(832946),
    f = n(97352),
    b = n(481354),
    C = n(85563),
    v = n(739508),
    N = n(203982),
    I = n(927578),
    y = n(83617),
    j = n(615396),
    O = n(526292),
    R = n(881489),
    L = n(573359),
    D = n(422936),
    P = n(774774),
    G = n(327479),
    M = n(473702),
    U = n(788868),
    k = n(652215),
    V = n(601107),
    w = n(985018),
    B = n(640692);
let F = new x.A("SubscriptionHeader.tsx"),
    z = { page: k.liQ.USER_SETTINGS, section: k.JJy.SETTINGS_PREMIUM, object: k.ZSU.CARD },
    H = [k.Dmq.PAUSED, k.Dmq.PAUSE_PENDING, k.Dmq.BILLING_RETRY];
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
        className: l()(B.vK, a),
        children: [
            (0, i.jsx)("div", { className: B.aK }),
            (0, i.jsxs)("div", {
                className: B.wt,
                children: [
                    (0, i.jsx)("div", { className: B.Sl }),
                    (0, i.jsxs)("div", {
                        className: B.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: B.Gp,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(P.HU, {
                                            text: w.intl.formatToPlainString(w.t.iiLbvu, { percent: o }),
                                            className: B.NM,
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
            (0, i.jsx)("div", { className: B.Uo, children: s }),
        ],
    });
}
function X(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(B.vK, a, B.uR),
        children: [
            (0, i.jsx)("div", { className: B.aK }),
            (0, i.jsx)("div", {
                className: B.wt,
                children: (0, i.jsx)("div", {
                    className: B.zH,
                    children: (0, i.jsxs)("div", {
                        className: B.Gp,
                        children: [
                            (0, i.jsx)("div", { className: B.Sl }),
                            (0, i.jsxs)("div", {
                                className: B.Ck,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(P.HU, {
                                            text: w.intl.formatToPlainString(w.t.iiLbvu, { percent: o }),
                                            className: B.NM,
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
            (0, i.jsx)("div", { className: B.Uo, children: s }),
        ],
    });
}
function K() {
    return (0, i.jsxs)("div", {
        className: B.Up,
        children: [
            (0, i.jsx)(C.A, { className: B.sq, "aria-label": w.intl.string(w.t.FSOz78) }),
            (0, i.jsx)("div", { className: B.CJ }),
        ],
    });
}
function W() {
    let { analyticsLocations: e } = (0, h.Ay)(A.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(Y, {
        wordMark: (0, i.jsx)(K, {}),
        subscriptionInfo: (0, i.jsx)("div", { className: B.MS, children: w.intl.string(w.t.R0GJL2) }),
        buttons: (0, i.jsx)(G.A, {
            className: B.au,
            onClick: () => (0, T.A)({ subscriptionTier: U.pe.TIER_1, analyticsLocations: e, analyticsObject: z }),
            text: w.intl.string(w.t["/ygMUY"]),
        }),
        statusClasses: { [B.aS]: !0 },
    });
}
let Z = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: a,
            paymentSource: x,
            busy: P,
            analyticsLocation: W,
        } = e,
        { analyticsLocations: Z } = (0, h.Ay)(A.A.SUBSCRIPTION_HEADER),
        q = (0, p.A)({ forceFetch: !1 }),
        { fractionalState: Q } = q,
        J = Q === U.xc.FP_SUB_PAUSED,
        $ = (0, D.O)(),
        ee = $?.discount?.amount,
        et = (0, O.k5)(),
        en = (0, O.nf)(),
        ei = (0, R.ds)(),
        es = () => {
            (t.status === k.Dmq.ACTIVE || t.status === k.Dmq.PAST_DUE || t.status === k.Dmq.PAUSE_PENDING || J) && ea();
        },
        el = () => {
            t.status === k.Dmq.BILLING_RETRY && ea(M.g.CONFIRM);
        },
        ea = (e) => {
            (0, u.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("94133"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocation: W,
                        analyticsLocations: Z,
                        initialStep: e,
                    });
            });
        },
        er = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = f.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void F.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let l = (0, y._w)(e, x?.id, !1),
                    d = l.length > 0 ? l[0] : t.currency,
                    c = !0;
                if ((1 === l.length && x?.id === t.paymentSourceId && (0, y.jJ)(e.id, d, x?.id) && (c = !1), c))
                    (0, T.A)({
                        initialPlanId: t.premiumPlanIdFromItems,
                        analyticsLocations: Z,
                        analyticsLocation: W,
                        analyticsObject: z,
                        subscription: t,
                    });
                else {
                    let e, l;
                    r()(null != a, "Expected renewalInvoicePreview"),
                        r()(null != s, "Expected currentInvoicePreview"),
                        (e = (0, o.uniqueId)("premium-resubscribe-modal")),
                        (l = !1),
                        (0, u.openModalLazy)(
                            async () => {
                                let { PremiumResubscribeModal: e } = await Promise.all([
                                    n.e("41353"),
                                    n.e("29716"),
                                    n.e("14704"),
                                    n.e("2824"),
                                    n.e("59756"),
                                ]).then(n.bind(n, 46292));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        premiumSubscription: t,
                                        analyticsLocations: Z,
                                        fractionalPremiumInfo: q,
                                        currentInvoicePreview: s,
                                        renewalInvoicePreview: a,
                                        onClose: async () => {
                                            l ||
                                                ((l = !0),
                                                N._.dispatch(k.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                                L.A.isDisplayingWowMomentConfirmation && L.A.isAnimated
                                                    ? setTimeout(() => {
                                                          n.onClose();
                                                      }, E.K)
                                                    : await n.onClose());
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    l ||
                                        ((l = !0),
                                        N._.dispatch(k.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        L.A.isDisplayingWowMomentConfirmation && L.A.isAnimated
                                            ? setTimeout(() => {
                                                  (0, u.closeModal)(e);
                                              }, E.K)
                                            : (0, u.closeModal)(e));
                                },
                                modalKey: e,
                            },
                        );
                }
            }
        },
        eo = () => {
            H.includes(t.status) && null != t.pauseEndsAt
                ? t.status === k.Dmq.PAUSED && t.pauseReason !== V.qf.USER_TEMPORARY_BAN
                    ? (0, T.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: Z,
                          analyticsLocation: W,
                          analyticsObject: z,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : _.U(t, Z)
                : (0, v.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        ed = () => {
            t.status === k.Dmq.PAUSED && ea(M.g.PAUSE_SELECT);
        },
        eu = () => {
            ea(M.g.WHAT_YOU_LOSE);
        },
        ec = I.Ay.getPlanIdFromInvoice(t, s);
    if ((0, S.m1)(ec)) return null;
    let eg = I.Ay.getStatusFromInvoice(t, s),
        em = I.Ay.getPremiumType(ec),
        e_ = {
            [B.Vd]: em === U.PremiumTypes.TIER_0,
            [B.aS]: em === U.PremiumTypes.TIER_1,
            [B.hA]: em === U.PremiumTypes.TIER_2,
            [B.aD]: eg === k.Dmq.CANCELED,
            [B.WY]: eg === k.Dmq.PAUSE_PENDING,
            [B.Ft]: eg === k.Dmq.PAUSED && !J,
            [B.GD]: (0, I.PK)(eg),
        },
        eA = null;
    switch (em) {
        case U.PremiumTypes.TIER_0:
            eA = (0, i.jsxs)("div", {
                className: B.Up,
                children: [
                    (0, i.jsx)(C.A, { className: B.sq, "aria-label": w.intl.string(w.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: B.sT }),
                ],
            });
            break;
        case U.PremiumTypes.TIER_1:
            eA = (0, i.jsx)(K, {});
            break;
        case U.PremiumTypes.TIER_2:
            eA = (0, i.jsx)(b.A, { className: B.V6, "aria-label": w.intl.string(w.t.lpNrPu) });
    }
    let eh = H.includes(t.status) && !J ? X : Y;
    return (0, i.jsx)(eh, {
        wordMark: eA,
        subscriptionInfo:
            (r()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: B.MS,
                children: ei
                    ? w.intl.format(w.t["/SfHwl"], { weeks: 1 })
                    : (0, I.nB)({
                          planId: ec,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: et,
                          activeDiscountInfo: en,
                          hasFractionalPremiumWithSub: J,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (t.isPurchasedExternally) {
                let e = (0, I.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(g.$, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: P,
                        text: w.intl.string(w.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = I.Ay.isSwitchingPlansDisabled(t),
                    n = I.Ay.getSwitchingPlansDisabledMessage(t);
                return (0, i.jsxs)("div", {
                    className: B.Lv,
                    children: [
                        (0, i.jsx)("div", {
                            className: B.Nn,
                            children: (0, i.jsx)(m.Q, {
                                variant: "always-white",
                                onClick: es,
                                disabled: P,
                                size: "sm",
                                text: w.intl.string(w.t["ETE/oC"]),
                            }),
                        }),
                        (0, i.jsx)(d.m, {
                            text: n,
                            asContainer: !0,
                            children: (0, i.jsx)(G.A, {
                                className: l()(B.au, B.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, T.A)({
                                        analyticsLocations: Z,
                                        analyticsLocation: W,
                                        analyticsObject: z,
                                        subscription: t,
                                    });
                                },
                                text: w.intl.string(w.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (I.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: B.au,
                    children: (0, i.jsx)(g.$, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: w.intl.string(w.t.iIvF2z),
                        loading: P,
                        onClick: er,
                    }),
                });
            switch (e) {
                case k.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(g.$, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: el,
                        loading: P,
                        text: w.intl.string(w.t["ETE/oC"]),
                    });
                case k.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: B.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: B.Nn,
                                children: (0, i.jsx)(m.Q, {
                                    variant: "always-white",
                                    disabled: P,
                                    onClick: es,
                                    size: "sm",
                                    text: w.intl.string(w.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: B.au,
                                children: (0, i.jsx)(g.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: w.intl.string(w.t.TgV5Qf),
                                    loading: P,
                                    onClick: eo,
                                }),
                            }),
                        ],
                    });
                case k.Dmq.PAUSED:
                    if (J) return n();
                    let { durations: s } = (0, j.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: B.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: B.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(m.Q, {
                                              variant: "always-white",
                                              onClick: ed,
                                              disabled: P,
                                              size: "sm",
                                              text: w.intl.string(w.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(m.Q, {
                                              variant: "always-white",
                                              onClick: eu,
                                              disabled: P,
                                              size: "sm",
                                              text: w.intl.string(w.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: B.au,
                                children: (0, i.jsx)(g.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: w.intl.string(w.t.zpi5pg),
                                    loading: P,
                                    onClick: eo,
                                }),
                            }),
                        ],
                    });
                case k.Dmq.ACTIVE:
                case k.Dmq.PAST_DUE:
                    return n();
            }
        })(),
        statusClasses: e_,
        shouldUseDiscountMarketing: et,
        discountAmount: ee,
    });
};
