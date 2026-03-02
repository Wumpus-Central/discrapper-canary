n.d(t, { A: () => X, i: () => q });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(284009),
    r = n.n(l),
    o = n(735438),
    c = n(435371),
    d = n(397927),
    u = n(158032),
    _ = n(793574),
    m = n(688810),
    A = n(531260),
    g = n(626584),
    h = n(639289),
    x = n(532794),
    p = n(832946),
    E = n(97352),
    C = n(481354),
    T = n(85563),
    S = n(739508),
    I = n(203982),
    f = n(927578),
    N = n(83617),
    b = n(615396),
    j = n(526292),
    v = n(637073),
    O = n(573359),
    R = n(110919),
    y = n(414345),
    P = n(422936),
    L = n(795269),
    D = n(327479),
    M = n(473702),
    G = n(788868),
    U = n(652215),
    k = n(601107),
    V = n(985018),
    H = n(688142),
    w = n(282151),
    B = n(241988);
let Y = new g.A("SubscriptionHeader.tsx"),
    F = { page: U.liQ.USER_SETTINGS, section: U.JJy.SETTINGS_PREMIUM, object: U.ZSU.CARD },
    z = [U.Dmq.PAUSED, U.Dmq.PAUSE_PENDING, U.Dmq.BILLING_RETRY];
function W(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: l,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
        premiumType: c,
    } = e;
    if (!0 === (0, y.g1)({ location: "PremiumBanner" })) {
        let e;
        switch (c) {
            case G.PremiumTypes.TIER_0:
                e = V.intl.string(V.t["t9uG/o"]);
                break;
            case G.PremiumTypes.TIER_1:
                e = V.intl.string(V.t.FSOz78);
                break;
            case G.PremiumTypes.TIER_2:
                e = V.intl.string(V.t.lG6a5x);
        }
        let t = c === G.PremiumTypes.TIER_2 ? "nitro-pink" : "nitro-green";
        return (0, i.jsxs)(d.hLv, {
            color: t,
            className: H.vK,
            children: [
                (0, i.jsx)("div", {
                    className: H.U_,
                    children: (0, i.jsx)(d.Heading, { variant: "heading-md/semibold", className: H.aq, children: e }),
                }),
                (0, i.jsx)(d.cGx, { gap: 8 }),
                (0, i.jsxs)("div", {
                    className: H.hL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: H.IH,
                            children: [
                                (0, i.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    children: V.intl.string(V.t.lpNrPu),
                                }),
                                (0, i.jsx)(d.Text, { variant: "text-md/normal", children: n }),
                                (0, i.jsx)("div", { children: s }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: H.l2, children: (0, i.jsx)("img", { src: B, alt: "" }) }),
                    ],
                }),
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(w.vK, l),
        children: [
            (0, i.jsx)("div", { className: w.aK }),
            (0, i.jsxs)("div", {
                className: w.wt,
                children: [
                    (0, i.jsx)("div", { className: w.Sl }),
                    (0, i.jsxs)("div", {
                        className: w.zH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: w.Gp,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(L.ir, {
                                            text: V.intl.formatToPlainString(V.t.iiLbvu, { percent: o }),
                                            className: w.NM,
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
            (0, i.jsx)("div", { className: w.Uo, children: s }),
        ],
    });
}
function K(e) {
    let {
        wordMark: t,
        subscriptionInfo: n,
        buttons: s,
        statusClasses: l,
        shouldUseDiscountMarketing: r,
        discountAmount: o,
        premiumType: c,
    } = e;
    if (!0 === (0, y.g1)({ location: "PremiumBanner" })) {
        let e;
        switch (c) {
            case G.PremiumTypes.TIER_0:
                e = V.intl.string(V.t["t9uG/o"]);
                break;
            case G.PremiumTypes.TIER_1:
                e = V.intl.string(V.t.FSOz78);
                break;
            case G.PremiumTypes.TIER_2:
                e = V.intl.string(V.t.lG6a5x);
        }
        let t = c === G.PremiumTypes.TIER_2 ? "nitro-pink" : "nitro-green";
        return (0, i.jsxs)(d.hLv, {
            color: t,
            className: H.vK,
            children: [
                (0, i.jsx)("div", {
                    className: H.U_,
                    children: (0, i.jsx)(d.Heading, { variant: "heading-md/semibold", className: H.aq, children: e }),
                }),
                (0, i.jsx)(d.cGx, { gap: 8 }),
                (0, i.jsxs)("div", {
                    className: H.hL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: H.IH,
                            children: [
                                (0, i.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    children: V.intl.string(V.t.lpNrPu),
                                }),
                                (0, i.jsx)(d.Text, { variant: "text-md/normal", children: n }),
                                (0, i.jsx)("div", { children: s }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: H.l2, children: (0, i.jsx)("img", { src: B, alt: "" }) }),
                    ],
                }),
            ],
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(w.vK, l, w.uR),
        children: [
            (0, i.jsx)("div", { className: w.aK }),
            (0, i.jsx)("div", {
                className: w.wt,
                children: (0, i.jsx)("div", {
                    className: w.zH,
                    children: (0, i.jsxs)("div", {
                        className: w.Gp,
                        children: [
                            (0, i.jsx)("div", { className: w.Sl }),
                            (0, i.jsxs)("div", {
                                className: w.Ck,
                                children: [
                                    t,
                                    r &&
                                        null != o &&
                                        (0, i.jsx)(L.ir, {
                                            text: V.intl.formatToPlainString(V.t.iiLbvu, { percent: o }),
                                            className: w.NM,
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
            (0, i.jsx)("div", { className: w.Uo, children: s }),
        ],
    });
}
function Z() {
    return (0, i.jsxs)("div", {
        className: w.Up,
        children: [
            (0, i.jsx)(T.A, { className: w.sq, "aria-label": V.intl.string(V.t.FSOz78) }),
            (0, i.jsx)("div", { className: w.CJ }),
        ],
    });
}
function q() {
    let { analyticsLocations: e } = (0, m.Ay)(_.A.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(W, {
        wordMark: (0, i.jsx)(Z, {}),
        premiumType: G.PremiumTypes.TIER_1,
        subscriptionInfo: (0, i.jsx)("div", { className: w.MS, children: V.intl.string(V.t.R0GJL2) }),
        buttons: (0, i.jsx)(D.A, {
            className: w.au,
            onClick: () => (0, x.A)({ subscriptionTier: G.pe.TIER_1, analyticsLocations: e, analyticsObject: F }),
            text: V.intl.string(V.t["/ygMUY"]),
        }),
        statusClasses: { [w.aS]: !0 },
    });
}
let X = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: s,
            renewalInvoicePreview: l,
            paymentSource: g,
            busy: L,
            analyticsLocation: B,
        } = e,
        { analyticsLocations: q } = (0, m.Ay)(_.A.SUBSCRIPTION_HEADER),
        X = (0, A.A)({ forceFetch: !1 }),
        { fractionalState: Q } = X,
        J = Q === G.xc.FP_SUB_PAUSED,
        { enabled: $ } = (0, R.Ay)({ location: "subscription_header" });
    (G.QV.has(t.planId) && U.Uyk.ALL_PAUSEABLE.has(t.status) && !J) || ($ = !1);
    let ee = (0, P.O)(),
        et = ee?.discount?.amount,
        en = (0, j.k5)(),
        ei = (0, j.nf)(),
        es = (0, v.d)(),
        ea = () => {
            (t.status === U.Dmq.ACTIVE || t.status === U.Dmq.PAST_DUE || t.status === U.Dmq.PAUSED) &&
                eo(M.g.PAUSE_SELECT);
        },
        el = () => {
            (t.status === U.Dmq.ACTIVE || t.status === U.Dmq.PAST_DUE || t.status === U.Dmq.PAUSE_PENDING || J) && eo();
        },
        er = () => {
            t.status === U.Dmq.BILLING_RETRY && eo(M.g.CONFIRM);
        },
        eo = (e) => {
            (0, d.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("82383"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocation: B,
                        analyticsLocations: q,
                        initialStep: e,
                    });
            });
        },
        ec = () => {
            if (null != t && null != t.premiumPlanIdFromItems) {
                let e = E.A.get(t.premiumPlanIdFromItems);
                if (null == e) return void Y.info(`Plan not fetched for plan id: ${t.premiumPlanIdFromItems}`);
                let a = (0, N._w)(e, g?.id, !1),
                    c = a.length > 0 ? a[0] : t.currency,
                    u = !0;
                if ((1 === a.length && g?.id === t.paymentSourceId && (0, N.jJ)(e.id, c, g?.id) && (u = !1), u))
                    (0, x.A)({
                        initialPlanId: t.premiumPlanIdFromItems,
                        analyticsLocations: q,
                        analyticsLocation: B,
                        analyticsObject: F,
                        subscription: t,
                    });
                else {
                    let e, a;
                    r()(null != l, "Expected renewalInvoicePreview"),
                        r()(null != s, "Expected currentInvoicePreview"),
                        (e = (0, o.uniqueId)("premium-resubscribe-modal")),
                        (a = !1),
                        (0, d.mMO)(
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
                                        analyticsLocations: q,
                                        fractionalPremiumInfo: X,
                                        currentInvoicePreview: s,
                                        renewalInvoicePreview: l,
                                        onClose: async () => {
                                            a ||
                                                ((a = !0),
                                                I._.dispatch(U.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
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
                                    a ||
                                        ((a = !0),
                                        I._.dispatch(U.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        O.A.isDisplayingWowMomentConfirmation && O.A.isAnimated
                                            ? setTimeout(() => {
                                                  (0, d.OoC)(e);
                                              }, h.K)
                                            : (0, d.OoC)(e));
                                },
                                modalKey: e,
                            },
                        );
                }
            }
        },
        ed = () => {
            z.includes(t.status) && null != t.pauseEndsAt
                ? t.status === U.Dmq.PAUSED && t.pauseReason !== k.qf.USER_TEMPORARY_BAN
                    ? (0, x.A)({
                          initialPlanId: t.premiumPlanIdFromItems,
                          analyticsLocations: q,
                          analyticsLocation: B,
                          analyticsObject: F,
                          subscription: t,
                          skipConfirm: !0,
                      })
                    : u.U(t, q)
                : (0, S.pM)(Error("Invalid subscription to resume"), {
                      extra: { subscriptionId: t.id, status: t.status, pauseEndsAt: t.pauseEndsAt },
                  });
        },
        eu = () => {
            t.status === U.Dmq.PAUSED && eo(M.g.PAUSE_SELECT);
        },
        e_ = () => {
            eo(M.g.WHAT_YOU_LOSE);
        },
        em = f.Ay.getPlanIdFromInvoice(t, s);
    if ((0, p.m1)(em)) return null;
    let eA = f.Ay.getStatusFromInvoice(t, s),
        eg = f.Ay.getPremiumType(em),
        eh = {
            [w.Vd]: eg === G.PremiumTypes.TIER_0,
            [w.aS]: eg === G.PremiumTypes.TIER_1,
            [w.hA]: eg === G.PremiumTypes.TIER_2,
            [w.aD]: eA === U.Dmq.CANCELED,
            [w.WY]: eA === U.Dmq.PAUSE_PENDING,
            [w.Ft]: eA === U.Dmq.PAUSED && !J,
            [w.GD]: (0, f.PK)(eA),
        },
        ex = null;
    switch (eg) {
        case G.PremiumTypes.TIER_0:
            ex = (0, i.jsxs)("div", {
                className: w.Up,
                children: [
                    (0, i.jsx)(T.A, { className: w.sq, "aria-label": V.intl.string(V.t["t9uG/o"]) }),
                    (0, i.jsx)("div", { className: w.sT }),
                ],
            });
            break;
        case G.PremiumTypes.TIER_1:
            ex = (0, i.jsx)(Z, {});
            break;
        case G.PremiumTypes.TIER_2:
            ex = (0, i.jsx)(C.A, { className: w.V6, "aria-label": V.intl.string(V.t.lpNrPu) });
    }
    let ep = z.includes(t.status) && !J ? K : W;
    return (0, i.jsx)(ep, {
        wordMark: ex,
        subscriptionInfo:
            (r()(null != s, "Expected currentInvoicePreview"),
            (0, i.jsx)("div", {
                className: w.MS,
                children: es
                    ? V.intl.format(V.t["/SfHwl"], { weeks: 1 })
                    : (0, f.nB)({
                          planId: em,
                          subscription: t,
                          renewalInvoicePreview: s,
                          hasDiscountApplied: en,
                          activeDiscountInfo: ei,
                          hasFractionalPremiumWithSub: J,
                      }),
            })),
        buttons: (() => {
            let { status: e } = t;
            if (!0 === (0, y.g1)({ location: "renderButtons" })) {
                if (t.isPurchasedExternally) {
                    let e = (0, f.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                    return (0, i.jsx)(d.MzZ, {
                        href: e,
                        useDefaultUnderlineStyles: !1,
                        children: (0, i.jsx)(d.Button, {
                            variant: "expressive",
                            size: "md",
                            icon: d.tvc,
                            loading: L,
                            text: V.intl.string(V.t.obRG6Y),
                        }),
                    });
                }
                if (f.Ay.isBaseSubscriptionCanceled(t))
                    return (0, i.jsx)(d.Button, {
                        variant: "expressive",
                        size: "md",
                        icon: d.tvc,
                        text: V.intl.string(V.t.iIvF2z),
                        loading: L,
                        onClick: ec,
                    });
                switch (e) {
                    case U.Dmq.BILLING_RETRY:
                        return (0, i.jsx)("div", {
                            className: H.f6,
                            children: (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                size: "md",
                                onClick: er,
                                loading: L,
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                        });
                    case U.Dmq.PAUSE_PENDING:
                        return (0, i.jsxs)("div", {
                            className: H.f6,
                            children: [
                                (0, i.jsx)(d.Button, {
                                    variant: "expressive",
                                    size: "md",
                                    icon: d.tvc,
                                    text: V.intl.string(V.t.TgV5Qf),
                                    loading: L,
                                    onClick: ed,
                                }),
                                (0, i.jsx)(d.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    disabled: L,
                                    onClick: el,
                                    text: V.intl.string(V.t.cM1H0K),
                                }),
                            ],
                        });
                    case U.Dmq.PAUSED:
                        if (J) return n();
                        let { durations: s } = (0, b.Vy)(t);
                        return (0, i.jsxs)("div", {
                            className: H.f6,
                            children: [
                                (0, i.jsx)(d.Button, {
                                    variant: "expressive",
                                    size: "md",
                                    icon: d.tvc,
                                    text: V.intl.string(V.t.zpi5pg),
                                    loading: L,
                                    onClick: ed,
                                }),
                                s.length > 0
                                    ? (0, i.jsx)(d.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          onClick: eu,
                                          disabled: L,
                                          text: V.intl.string(V.t.jNHWt6),
                                      })
                                    : (0, i.jsx)(d.Button, {
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
                let e = (0, f.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
                return (0, i.jsx)(d.MzZ, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(d.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        loading: L,
                        text: V.intl.string(V.t.obRG6Y).toLocaleUpperCase(),
                    }),
                });
            }
            function n() {
                let e = f.Ay.isSwitchingPlansDisabled(t),
                    n = f.Ay.getSwitchingPlansDisabledMessage(t);
                if (!0 === (0, y.g1)({ location: "renderButtons" })) {
                    if ($)
                        return (0, i.jsx)("div", {
                            className: H.f6,
                            children: (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                disabled: L,
                                onClick: ea,
                                size: "md",
                                text: V.intl.string(V.t.eFlYVA),
                            }),
                        });
                    let s = t.hasPremiumAtLeast(G.PremiumTypes.TIER_2);
                    return (0, i.jsxs)("div", {
                        className: H.f6,
                        children: [
                            (0, i.jsx)(c.m_, {
                                text: n,
                                asContainer: !0,
                                children: (0, i.jsx)(d.Button, {
                                    variant: s ? "primary" : "expressive",
                                    size: "md",
                                    icon: s ? void 0 : d.tvc,
                                    disabled: e,
                                    onClick: () => {
                                        (0, x.A)({
                                            analyticsLocations: q,
                                            analyticsLocation: B,
                                            analyticsObject: F,
                                            subscription: t,
                                        });
                                    },
                                    text: V.intl.string(V.t["dylp/7"]),
                                }),
                            }),
                            (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                onClick: el,
                                disabled: L,
                                size: "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsxs)("div", {
                    className: w.Lv,
                    children: [
                        $
                            ? (0, i.jsx)("div", {
                                  className: w.xP,
                                  children: (0, i.jsx)(d.QWc, {
                                      variant: "always-white",
                                      disabled: L,
                                      onClick: ea,
                                      size: "sm",
                                      text: V.intl.string(V.t.eFlYVA),
                                  }),
                              })
                            : (0, i.jsx)("div", {
                                  className: w.Nn,
                                  children: (0, i.jsx)(d.QWc, {
                                      variant: "always-white",
                                      onClick: el,
                                      disabled: L,
                                      size: "sm",
                                      text: V.intl.string(V.t["ETE/oC"]),
                                  }),
                              }),
                        (0, i.jsx)(c.m_, {
                            text: n,
                            asContainer: !0,
                            children: (0, i.jsx)(D.A, {
                                className: a()(w.au, w.lB),
                                disabled: e,
                                onClick: () => {
                                    (0, x.A)({
                                        analyticsLocations: q,
                                        analyticsLocation: B,
                                        analyticsObject: F,
                                        subscription: t,
                                    });
                                },
                                text: V.intl.string(V.t["dylp/7"]),
                            }),
                        }),
                    ],
                });
            }
            if (f.Ay.isBaseSubscriptionCanceled(t))
                return (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: w.au,
                    children: (0, i.jsx)(d.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        text: V.intl.string(V.t.iIvF2z),
                        loading: L,
                        onClick: ec,
                    }),
                });
            switch (e) {
                case U.Dmq.BILLING_RETRY:
                    return (0, i.jsx)(d.Button, {
                        variant: "overlay-primary",
                        size: "sm",
                        onClick: er,
                        loading: L,
                        text: V.intl.string(V.t["ETE/oC"]),
                    });
                case U.Dmq.PAUSE_PENDING:
                    return (0, i.jsxs)("div", {
                        className: w.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: w.Nn,
                                children: (0, i.jsx)(d.QWc, {
                                    variant: "always-white",
                                    disabled: L,
                                    onClick: el,
                                    size: "sm",
                                    text: V.intl.string(V.t.cM1H0K),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: w.au,
                                children: (0, i.jsx)(d.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: V.intl.string(V.t.TgV5Qf),
                                    loading: L,
                                    onClick: ed,
                                }),
                            }),
                        ],
                    });
                case U.Dmq.PAUSED:
                    if (J) return n();
                    let { durations: s } = (0, b.Vy)(t);
                    return (0, i.jsxs)("div", {
                        className: w.Lv,
                        children: [
                            (0, i.jsx)("div", {
                                className: w.Nn,
                                children:
                                    s.length > 0
                                        ? (0, i.jsx)(d.QWc, {
                                              variant: "always-white",
                                              onClick: eu,
                                              disabled: L,
                                              size: "sm",
                                              text: V.intl.string(V.t.jNHWt6),
                                          })
                                        : (0, i.jsx)(d.QWc, {
                                              variant: "always-white",
                                              onClick: e_,
                                              disabled: L,
                                              size: "sm",
                                              text: V.intl.string(V.t.cM1H0K),
                                          }),
                            }),
                            (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: w.au,
                                children: (0, i.jsx)(d.Button, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: V.intl.string(V.t.zpi5pg),
                                    loading: L,
                                    onClick: ed,
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
        premiumType: eg,
    });
};
