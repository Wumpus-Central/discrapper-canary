n.d(t, { A: () => Z, i: () => K });
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
    y = n(414345),
    P = n(422936),
    L = n(795269),
    D = n(327479),
    G = n(473702),
    M = n(788868),
    U = n(652215),
    k = n(601107),
    V = n(985018),
    w = n(688142),
    H = n(282151);
let B = new A.A("SubscriptionHeader.tsx"),
    Y = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_PREMIUM, object: U.ZSU.CARD },
    F = [U.Dmq.PAUSED, U.Dmq.PAUSE_PENDING, U.Dmq.BILLING_RETRY];
function z(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: a,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(H.vK, a),
        children: [
            (0, i.jsx)("div", { className: H.aK }),
            (0, i.jsxs)("div", {
                className: H.wt,
                children: [
                    (0, i.jsx)("div", { className: H.Sl }),
                    (0, i.jsxs)("div", {
                        className: H.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: H.Gp,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(L.ir, {
                                            text: V.intl.formatToPlainString(V.t.iiLbvu, { percent: o }),
                                            className: H.NM,
                                            colorOptions: L.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                ],
                            }),
                            n,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: H.Uo, children: s }),
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
        className: l()(H.vK, a, H.uR),
        children: [
            (0, i.jsx)("div", { className: H.aK }),
            (0, i.jsx)("div", {
                className: H.wt,
                children: (0, i.jsx)("div", {
                    className: H.zH,
                    children: (0, i.jsxs)("div", {
                        className: H.Gp,
                        children: [
                            (0, i.jsx)("div", { className: H.Sl }),
                            (0, i.jsxs)("div", {
                                className: H.Ck,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(L.ir, {
                                            text: V.intl.formatToPlainString(V.t.iiLbvu, { percent: o }),
                                            className: H.NM,
                                            colorOptions: L.at.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1,
                                        }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)("div", { className: H.Uo, children: s }),
        ],
    });
}
function W() {
    return (0, i.jsxs)("div", {
        className: H.Up,
        children: [
            (0, i.jsx)(S.A, { className: H.sq, "aria-label": V.intl.string(V.t.FSOz78) }),
            (0, i.jsx)("div", { className: H.CJ }),
        ],
    });
}
function K() {
    let { analyticsLocations: e } = (0, g.Ay)(_.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(z, {
        wordMark: (0, i.jsx)(W, {}),
        subscriptionInfo: (0, i.jsx)("div", { className: H.MS, children: V.intl.string(V.t.R0GJL2) }),
        buttons: (0, i.jsx)(D.A, {
            className: H.au,
            onClick: () => (0, p.A)({ subscriptionTier: M.pe.TIER_1, analyticsLocations: e, analyticsObject: Y }),
            text: V.intl.string(V.t["/ygMUY"]),
        }),
        statusClasses: { [H.aS]: !0 },
    });
}
let Z = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: a,
            paymentSource: A,
            busy: L,
            analyticsLocation: K,
        } = e,
        { analyticsLocations: Z } = (0, g.Ay)(_.A.SUBSCRIPTION_HEADER),
        q = (0, m.A)({ forceFetch: !1 }),
        { fractionalState: J } = q,
        Q = J === M.xc.FP_SUB_PAUSED,
        { enabled: $ } = (0, R.Ay)({ location: "subscription_header" });
    (M.QV.has(t.planId) && U.Uyk.ALL_PAUSEABLE.has(t.status) && !Q) || ($ = !1);
    let ee = (0, P.O)(),
        et = ee?.discount?.amount,
        en = (0, v.k5)(),
        ei = (0, v.nf)(),
        es = (0, j.d)(),
        el = () => {
            (t.status === U.Dmq.ACTIVE || t.status === U.Dmq.PAST_DUE || t.status === U.Dmq.PAUSED) &&
                eo(G.g.PAUSE_SELECT);
        },
        ea = () => {
            (t.status === U.Dmq.ACTIVE || t.status === U.Dmq.PAST_DUE || t.status === U.Dmq.PAUSE_PENDING || Q) && eo();
        },
        er = () => {
            t.status === U.Dmq.BILLING_RETRY && eo(G.g.CONFIRM);
        },
        eo = (e) => {
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
                        analyticsLocation: K,
                        analyticsLocations: Z,
                        initialStep: e,
                    });
            });
        },
        ed = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = E.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void B.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let l = (0, b._w)(e, A?.id, !1),
                    d = l.length > 0 ? l[0] : t.currency,
                    u = !0;
                if ((1 === l.length && A?.id === t.paymentSourceId && (0, b.jJ)(e.id, d, A?.id) && (u = !1), u))
                    (0, p.A)({
                        initialPlanId: t.premiumPlanIdFromItems,
                        analyticsLocations: Z,
                        analyticsLocation: K,
                        analyticsObject: Y,
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
                                    n.e("72746"),
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
                                                f._.dispatch(U.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
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
                                        f._.dispatch(U.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
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
        ec = () => {
            F.includes(t.status) && null != t.pauseEndsAt
                ? t.status === U.Dmq.PAUSED && t.pauseReason !== k.qf.USER_TEMPORARY_BAN
                    ? (0, p.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: Z,
                          analyticsLocation: K,
                          analyticsObject: Y,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : u.U(t, Z)
                : (0, C.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        eu = () => {
            t.status === U.Dmq.PAUSED && eo(G.g.PAUSE_SELECT);
        },
        e_ = () => {
            eo(G.g.WHAT_YOU_LOSE);
        },
        eg = I.Ay.getPlanIdFromInvoice(t, s);
    if ((0, x.m1)(eg)) return null;
    let em = I.Ay.getStatusFromInvoice(t, s),
        eA = I.Ay.getPremiumType(eg),
        eh = {
            [H.Vd]: eA === M.PremiumTypes.TIER_0,
            [H.aS]: eA === M.PremiumTypes.TIER_1,
            [H.hA]: eA === M.PremiumTypes.TIER_2,
            [H.aD]: em === U.Dmq.CANCELED,
            [H.WY]: em === U.Dmq.PAUSE_PENDING,
            [H.Ft]: em === U.Dmq.PAUSED && !Q,
            [H.GD]: (0, I.PK)(em),
        },
        ep = null;
    switch (eA) {
        case M.PremiumTypes.TIER_0:
            ep = (0, i.jsxs)("div", {
                className: H.Up,
                children: [
                    (0, i.jsx)(S.A, { className: H.sq, "aria-label": V.intl.string(V.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: H.sT }),
                ],
            });
            break;
        case M.PremiumTypes.TIER_1:
            ep = (0, i.jsx)(W, {});
            break;
        case M.PremiumTypes.TIER_2:
            ep = (0, i.jsx)(T.A, { className: H.V6, "aria-label": V.intl.string(V.t.lpNrPu) });
    }
    let ex = F.includes(t.status) && !Q ? X : z;
    return (0, i.jsx)(ex, {
        wordMark: ep,
        subscriptionInfo:
            (r()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: H.MS,
                children: es
                    ? V.intl.format(V.t["/SfHwl"], { weeks: 1 })
                    : (0, I.nB)({
                          planId: eg,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: en,
                          activeDiscountInfo: ei,
                          hasFractionalPremiumWithSub: Q,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (!0 === (0, y.g1)({ location: "renderButtons" })) {
                if (t.isPurchasedExternally) {
                    let e = (0, I.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                    return (0, i.jsx)(c.MzZ, {
                        href: e,
                        useDefaultUnderlineStyles: !1,
                        children: (0, i.jsx)(c.Button, {
                            variant: "expressive",
                            size: "md",
                            icon: c.tvc,
                            loading: L,
                            text: V.intl.string(V.t.obRG6Y),
                        }),
                    });
                }
                if (I.Ay.isBaseSubscriptionCanceled(t))
                    return (0, i.jsx)(c.Button, {
                        variant: "expressive",
                        size: "md",
                        icon: c.tvc,
                        text: V.intl.string(V.t.iIvF2z),
                        loading: L,
                        onClick: ed,
                    });
                switch (e) {
                    case U.Dmq.BILLING_RETRY:
                        return (0, i.jsx)("div", {
                            className: w.f6,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "md",
                                onClick: er,
                                loading: L,
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                        });
                    case U.Dmq.PAUSE_PENDING:
                        return (0, i.jsxs)("div", {
                            className: w.f6,
                            children: [
                                (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    size: "md",
                                    icon: c.tvc,
                                    text: V.intl.string(V.t.TgV5Qf),
                                    loading: L,
                                    onClick: ec,
                                }),
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    disabled: L,
                                    onClick: ea,
                                    text: V.intl.string(V.t.cM1H0K),
                                }),
                            ],
                        });
                    case U.Dmq.PAUSED:
                        if (Q) return n();
                        let { durations: s } = (0, N.Vy)(t);
                        return (0, i.jsxs)("div", {
                            className: w.f6,
                            children: [
                                (0, i.jsx)(c.Button, {
                                    variant: "expressive",
                                    size: "md",
                                    icon: c.tvc,
                                    text: V.intl.string(V.t.zpi5pg),
                                    loading: L,
                                    onClick: ec,
                                }),
                                s.length > 0
                                    ? (0, i.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          onClick: eu,
                                          disabled: L,
                                          text: V.intl.string(V.t.jNHWt6),
                                      })
                                    : (0, i.jsx)(c.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          onClick: e_,
                                          disabled: L,
                                          text: V.intl.string(V.t.cM1H0K),
                                      }),
                            ],
                        });
                    case U.Dmq.ACTIVE:
                    case U.Dmq.PAST_DUE:
                        return n();
                }
            }
            if (t.isPurchasedExternally) {
                let e = (0, I.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(c.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: L,
                        text: V.intl.string(V.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = I.Ay.isSwitchingPlansDisabled(t),
                    n = I.Ay.getSwitchingPlansDisabledMessage(t);
                if (!0 === (0, y.g1)({ location: "renderButtons" })) {
                    if ($)
                        return (0, i.jsx)("div", {
                            className: w.f6,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                disabled: L,
                                onClick: el,
                                size: "md",
                                text: V.intl.string(V.t.eFlYVA),
                            }),
                        });
                    let s = t.hasPremiumAtLeast(M.PremiumTypes.TIER_2);
                    return (0, i.jsxs)("div", {
                        className: w.f6,
                        children: [
                            (0, i.jsx)(d.m_, {
                                text: n,
                                asContainer: !0,
                                children: (0, i.jsx)(c.Button, {
                                    variant: s ? "primary" : "expressive",
                                    size: "md",
                                    icon: s ? void 0 : c.tvc,
                                    disabled: e,
                                    onClick: () => {
                                        (0, p.A)({
                                            analyticsLocations: Z,
                                            analyticsLocation: K,
                                            analyticsObject: Y,
                                            subscription: t,
                                        });
                                    },
                                    text: V.intl.string(V.t["dylp/7"]),
                                }),
                            }),
                            (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                onClick: ea,
                                disabled: L,
                                size: "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsxs)("div", {
                    className: H.Lv,
                    children: [
                        $
                            ? (0, i.jsx)("div", {
                                  className: H.xP,
                                  children: (0, i.jsx)(c.QWc, {
                                      variant: "always-white",
                                      disabled: L,
                                      onClick: el,
                                      size: "sm",
                                      text: V.intl.string(V.t.eFlYVA),
                                  }),
                              })
                            : (0, i.jsx)("div", {
                                  className: H.Nn,
                                  children: (0, i.jsx)(c.QWc, {
                                      variant: "always-white",
                                      onClick: ea,
                                      disabled: L,
                                      size: "sm",
                                      text: V.intl.string(V.t["ETE/oC"]),
                                  }),
                              }),
                        (0, i.jsx)(d.m_, {
                            text: n,
                            asContainer: !0,
                            children: (0, i.jsx)(D.A, {
                                className: l()(H.au, H.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, p.A)({
                                        analyticsLocations: Z,
                                        analyticsLocation: K,
                                        analyticsObject: Y,
                                        subscription: t,
                                    });
                                },
                                text: V.intl.string(V.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (I.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: H.au,
                    children: (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: V.intl.string(V.t.iIvF2z),
                        loading: L,
                        onClick: ed,
                    }),
                });
            switch (e) {
                case U.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: er,
                        loading: L,
                        text: V.intl.string(V.t["ETE/oC"]),
                    });
                case U.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: H.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: H.Nn,
                                children: (0, i.jsx)(c.QWc, {
                                    variant: "always-white",
                                    disabled: L,
                                    onClick: ea,
                                    size: "sm",
                                    text: V.intl.string(V.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: H.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: V.intl.string(V.t.TgV5Qf),
                                    loading: L,
                                    onClick: ec,
                                }),
                            }),
                        ],
                    });
                case U.Dmq.PAUSED:
                    if (Q) return n();
                    let { durations: s } = (0, N.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: H.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: H.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: eu,
                                              disabled: L,
                                              size: "sm",
                                              text: V.intl.string(V.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(c.QWc, {
                                              variant: "always-white",
                                              onClick: e_,
                                              disabled: L,
                                              size: "sm",
                                              text: V.intl.string(V.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: H.au,
                                children: (0, i.jsx)(c.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: V.intl.string(V.t.zpi5pg),
                                    loading: L,
                                    onClick: ec,
                                }),
                            }),
                        ],
                    });
                case U.Dmq.ACTIVE:
                case U.Dmq.PAST_DUE:
                    return n();
            }
        })(),
        statusClasses: eh,
        shouldUseDiscountMarketing: en,
        discountAmount: et,
    });
};
