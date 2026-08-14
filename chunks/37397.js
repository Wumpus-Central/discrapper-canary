n.d(t, { Ay: () => e4, Sb: () => e6, TC: () => e2, Hy: () => e5 });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(989349),
    o = n.n(a),
    u = n(17928),
    d = n(661531),
    c = n(695366),
    g = n(834730),
    m = n(297264),
    A = n(993077),
    h = n(289873),
    E = n(270003),
    S = n(452027),
    x = n(228366),
    p = n(964486),
    T = n(793574),
    f = n(688810),
    I = n(531260),
    _ = n(235986),
    N = n(769015),
    C = n(532794),
    b = n(832946),
    y = n(287809),
    v = n(174459),
    j = n(975571),
    O = n(158045),
    L = n(83617),
    D = n(543767),
    R = n(526292),
    P = n(155984),
    G = n(131168),
    M = n(331322),
    U = n(508770),
    V = n(192308),
    k = n(315629),
    w = n(821609),
    F = n(158032),
    B = n(580630),
    z = n(427262),
    X = n(795269),
    Y = n(59784),
    H = n(233317),
    K = n(622017),
    W = n(113090),
    Z = n(778712),
    q = n(97808),
    Q = n(123292),
    J = n(950305),
    $ = n(854627),
    ee = n(466919),
    et = n(375708),
    en = n(517694);
function ei(e) {
    let { user: t, isOwnUser: n, label: s, removeButton: a, isFaded: o } = e,
        { avatarSrc: u, eventHandlers: d } = (0, $.A)({ userId: t?.id, size: Z._3.SIZE_24 }),
        c = (0, z.$3)(t),
        [m, A] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(en.kL, { [en.RE]: null != a }),
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [
            (0, i.jsxs)("div", {
                className: r()(en.TT, { [en.zj]: o }),
                children: [
                    (0, i.jsx)(q.eu, { className: en.my, src: u, "aria-label": c, size: Z._3.SIZE_24, ...d }),
                    (0, i.jsxs)(g.E, {
                        className: en.Xh,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: [c, !!n && ` (${et.intl.string(et.t.LuZzxn)})`],
                    }),
                    null != s &&
                        (0, i.jsxs)(g.E, {
                            className: en.Pf,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: [(0, i.jsx)("span", { className: en.me, children: "\xb7" }), s],
                        }),
                ],
            }),
            null != a &&
                m &&
                (0, i.jsx)("div", {
                    className: en.dM,
                    children: (0, i.jsx)(Q.Q, {
                        textVariant: "text-sm/medium",
                        variant: "secondary",
                        text: a.label,
                        onClick: a.onRemove,
                    }),
                }),
        ],
    });
}
function el(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(ei, { user: t, isOwnUser: n, label: et.intl.string(ee.default.vc2xys) });
}
function es(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(ei, {
        user: t,
        label: et.intl.string(ee.default.mnt50A),
        removeButton: { onRemove: n, label: et.intl.string(et.t.N86XcP) },
    });
}
function er(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(ei, { user: t, isOwnUser: n, label: et.intl.string(ee.default.mnt50A) });
}
function ea(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(ei, {
        user: t,
        label: et.intl.string(ee.default["1RH5t9"]),
        isFaded: !0,
        removeButton: { onRemove: n, label: et.intl.string(ee.default["2blqtw"]) },
    });
}
function eo(e) {
    let { onInvite: t, canInvite: n } = e,
        [s, a] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(en.kL, { [en.RE]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, i.jsxs)("div", {
                className: en.TT,
                children: [
                    (0, i.jsx)("div", {
                        className: r()(en.vG, en.my),
                        children: (0, i.jsx)(J.n, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                    }),
                    (0, i.jsx)(g.E, {
                        className: en.Xh,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default["/x7DVG"]),
                    }),
                ],
            }),
            s &&
                n &&
                (0, i.jsx)("div", {
                    className: en.dM,
                    children: (0, i.jsx)(Q.Q, {
                        textVariant: "text-sm/medium",
                        variant: "secondary",
                        text: et.intl.string(ee.default.O15JWp),
                        onClick: t,
                    }),
                }),
        ],
    });
}
var eu = n(202541),
    ed = n(88001),
    ec = n(652215),
    eg = n(935544);
function em(e) {
    let { discountApplied: t = !1 } = e;
    return (0, i.jsxs)(M.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 10,
        padding: { top: 12, bottom: 12 },
        className: eg.wx,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "horizontal",
                align: "center",
                gap: 10,
                children: [
                    (0, i.jsx)(m.D, { variant: "display-md", className: eg.Nd, children: (0, ed.DP)() }),
                    (0, i.jsx)(U.E, { type: "beta", variant: "expressive" }),
                ],
            }),
            t && (0, i.jsx)(X.R, { text: et.intl.string(et.t.EyjDRE) }),
        ],
    });
}
function eA(e) {
    let { title: t, discountDescription: n, description: l, button: s } = e;
    return (0, i.jsxs)("div", {
        className: eg.bh,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 8,
                className: eg.iQ,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                    null != n
                        ? (0, i.jsx)(g.E, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              className: eg.eY,
                              children: n,
                          })
                        : null,
                    (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
            (0, i.jsx)("div", { className: eg.UD, children: s }),
        ],
    });
}
function eh(e) {
    let { currentUser: t } = e,
        { premiumGroupMembership: l, isLoading: s } = (0, W.A)(),
        { premiumGroupMembers: r, isLoading: a } = (0, K.A)(l?.subscriptionId ?? null);
    if (a || null == r || s || null == l) return (0, i.jsx)(h.y, {});
    let o = l.subscriptionId,
        u = l.currentPeriodEnd,
        { primary: d, members: c } = r,
        { title: g, description: A } = (function () {
            if (null == l) return { title: "", description: "" };
            switch (l.subscriptionStatus) {
                case ec.Dmq.CANCELED:
                    return {
                        title: et.intl.string(ee.default.mCwdPj),
                        description: et.intl.format(ee.default.wH9NYG, { endDate: u }),
                    };
                case ec.Dmq.PAUSED:
                    return {
                        title: et.intl.string(ee.default.IDyd1e),
                        description: et.intl.format(ee.default["8MfYhr"], {
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
                case ec.Dmq.PAST_DUE:
                case ec.Dmq.ACCOUNT_HOLD:
                case ec.Dmq.BILLING_RETRY:
                    return {
                        title: et.intl.string(ee.default.Duq8zp),
                        description: et.intl.format(ee.default["MHn/D6"], {
                            endDate: u,
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                    };
                default:
                    return {
                        title: et.intl.formatToPlainString(ee.default.xiUjMF, {
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                        description: et.intl.format(ee.default["2HEyqG"], {
                            primaryName: (0, z.$3)(d),
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eg.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(em, {}),
            (0, i.jsxs)("div", {
                className: eg.wS,
                children: [
                    (0, i.jsx)(eA, {
                        title: g,
                        description: A,
                        button: (0, i.jsx)(w.$, {
                            variant: "secondary",
                            text: et.intl.string(ee.default.NCu2JD),
                            onClick: function () {
                                (0, V.openModalLazy)(async () => {
                                    let { default: e } = await n.e("392796").then(n.bind(n, 205463));
                                    return (n) =>
                                        (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: o, currentUser: t });
                                });
                            },
                        }),
                    }),
                    (0, i.jsxs)(M.B, {
                        direction: "vertical",
                        padding: { left: 32, bottom: 12 },
                        gap: 0,
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "heading-sm/medium",
                                color: "text-strong",
                                className: eg.Or,
                                children: et.intl.string(ee.default["oqw/KW"]),
                            }),
                            (0, i.jsx)(el, { user: d, isOwnUser: !1 }),
                            c.map((e) => (0, i.jsx)(er, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let {
        premiumGroupMembers: t,
        isLoadingPremiumGroupMembers: n,
        canInvite: l,
        onInvite: s,
        onRemoveMember: r,
        onRemoveInvitedUser: a,
        numTotalSeats: o,
        numUsedSeats: u,
        numAvailableInvites: d,
    } = e;
    if (n || null == t) return (0, i.jsx)(h.y, {});
    let { primary: c, members: A, invitedUsers: E } = t;
    return (0, i.jsxs)(M.B, {
        direction: "vertical",
        padding: { left: 32, bottom: 12 },
        gap: 0,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 4,
                padding: { top: 12, left: 4, right: 4, bottom: 10 },
                children: [
                    (0, i.jsx)(m.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default["oqw/KW"]),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: et.intl.format(ee.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                    }),
                ],
            }),
            (0, i.jsx)(el, { user: c, isOwnUser: !0 }),
            A.map((e) => (0, i.jsx)(es, { user: e, onRemove: () => r(e) }, e.id)),
            E.map((e) => (0, i.jsx)(ea, { user: e, onRemove: () => a(e) }, e.id)),
            Array.from({ length: d }).map((e, t) =>
                (0, i.jsx)(eo, { onInvite: s, canInvite: l }, `seat-available-${t}`),
            ),
        ],
    });
}
function eS(e) {
    let { subscription: t, analyticsLocations: s } = e,
        { premiumGroupMembers: r, isLoading: a } = (0, K.A)(t.id),
        {
            numAvailableInvites: o,
            numTotalSeats: d,
            numUsedSeats: c,
        } = (0, u.cf)([H.A], () => ({
            numAvailableInvites: H.A.getNumAvailableInvites(),
            numTotalSeats: H.A.getNumTotalSeats(),
            numUsedSeats: H.A.getNumUsedSeats(),
        })),
        [g, m] = l.useState(!1),
        { status: A } = t,
        h = (0, R.nf)(),
        E = (0, R.k5)() && h?.discountId === eu.xH,
        S = l.useCallback(() => {
            (0, V.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                    n.e("191170"),
                    n.e("564729"),
                    n.e("805549"),
                    n.e("384820"),
                    n.e("594161"),
                    n.e("435432"),
                    n.e("80347"),
                    n.e("680166"),
                ]).then(n.bind(n, 293061));
                return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: s });
            });
        }, [t, s]),
        x = l.useCallback(async () => {
            m(!0), await (0, F.Ir)(t, s), m(!1);
        }, [t, s]);
    function p() {
        v.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
            (0, V.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("533587"),
                    n.e("586248"),
                    n.e("174630"),
                    n.e("448948"),
                    n.e("485579"),
                ]).then(n.bind(n, 785606));
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
            });
    }
    let T = l.useMemo(() => !ed.BE.includes(t.status) && o > 0, [t.status, o]),
        {
            title: f,
            description: I,
            discountDescription: _,
        } = (function () {
            switch (A) {
                case ec.Dmq.CANCELED:
                    return {
                        title: et.intl.string(ee.default.KME8Q6),
                        description: et.intl.format(ee.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                    };
                case ec.Dmq.PAUSED:
                    return {
                        title: et.intl.string(ee.default["4flKoC"]),
                        description: et.intl.format(ee.default["Q++BmO"], { premiumGroupProductName: (0, ed.DP)() }),
                    };
                case ec.Dmq.PAST_DUE:
                case ec.Dmq.ACCOUNT_HOLD:
                case ec.Dmq.BILLING_RETRY:
                    return {
                        title: et.intl.string(ee.default.cfeFEt),
                        description: et.intl.format(ee.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: ed.TE,
                        }),
                    };
                default: {
                    let e = null;
                    if (E && t.metadata?.active_discount_expires_at != null) {
                        let n = (0, O.y8)(eu.gD.PREMIUM_GROUP_MONTH, !1, !1, {
                            currency: t.currency,
                            paymentSourceId: t.paymentSourceId ?? void 0,
                        });
                        e = et.intl.format(ee.default.FwjZzr, {
                            percent: h?.percentage ?? 0,
                            discountEndDate: new Date(t.metadata.active_discount_expires_at),
                            regularPrice: (0, B.$g)(n.amount, n.currency),
                        });
                    }
                    return {
                        title: et.intl.formatToPlainString(ee.default.NRCfnQ, {
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                        description: et.intl.format(ee.default.lvnrnb, {
                            totalSeats: ed.LM,
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                        ...(null != e ? { discountDescription: e } : null),
                    };
                }
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eg.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(em, { discountApplied: E }),
            (0, i.jsxs)("div", {
                className: eg.wS,
                children: [
                    (0, i.jsx)(eA, {
                        title: f,
                        description: I,
                        discountDescription: _,
                        button: (0, O.ki)(t)
                            ? (0, i.jsx)(w.$, {
                                  variant: "expressive",
                                  size: "md",
                                  text: et.intl.string(ee.default.EFTJMQ),
                                  onClick: x,
                                  loading: g,
                              })
                            : (0, i.jsxs)(M.B, {
                                  direction: "vertical",
                                  gap: 12,
                                  children: [
                                      (0, i.jsx)(w.$, {
                                          variant: "primary",
                                          size: "md",
                                          fullWidth: !0,
                                          text: et.intl.string(ee.default.Tcmclj),
                                          onClick: p,
                                          disabled: !T,
                                      }),
                                      (0, i.jsx)(w.$, {
                                          variant: "secondary",
                                          size: "md",
                                          fullWidth: !0,
                                          text: et.intl.string(ee.default.oO0EYw),
                                          onClick: S,
                                      }),
                                  ],
                              }),
                    }),
                    (0, i.jsx)(eE, {
                        premiumGroupMembers: r,
                        isLoadingPremiumGroupMembers: a,
                        canInvite: T,
                        onInvite: p,
                        onRemoveMember: function (e) {
                            v.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                subscription_id: t.id,
                                member_user_id: e.id,
                            }),
                                (0, V.openModalLazy)(async () => {
                                    let { default: l } = await n.e("521305").then(n.bind(n, 391040));
                                    return (n) => (0, i.jsx)(l, { ...n, subscriptionId: t.id, member: e });
                                });
                        },
                        onRemoveInvitedUser: function (e) {
                            v.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                subscription_id: t.id,
                                invited_user_id: e.id,
                            });
                            let l = Y.A.getInviteByUserId(e.id)?.invite;
                            (0, V.openModalLazy)(async () => {
                                let { default: s } = await n.e("815554").then(n.bind(n, 115225));
                                return (n) =>
                                    (0, i.jsx)(s, {
                                        ...n,
                                        subscriptionId: t.id,
                                        invitedUser: e,
                                        subscriptionGroupMemberId: l?.id,
                                    });
                            });
                        },
                        numTotalSeats: d,
                        numUsedSeats: c,
                        numAvailableInvites: o,
                    }),
                ],
            }),
        ],
    });
}
var ex = n(97352),
    ep = n(403581),
    eT = n(866665),
    ef = n(392943),
    eI = n(511484),
    e_ = n(811611),
    eN = n(473702),
    eC = n(337519),
    eb = n(398932);
let ey = { page: ec.liQ.USER_SETTINGS, section: ec.JJy.SETTINGS_PREMIUM, object: ec.ZSU.CARD };
function ev(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: l, isDiscountActive: s } = e,
        r = O.Ay.getPlanIdFromInvoice(t, l),
        a = ex.A.get(r);
    if (null == a || null == l || null == n || null == n.duration || null == n.percentage) return null;
    let o = l.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, B.$g)(o.amount, l.currency),
        d = (0, O.y8)(eu.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, B.$g)(d.amount, d.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.format(et.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: s
                    ? et.intl.format(et.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: c })
                    : et.intl.format(et.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: et.intl.string(et.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function ej(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        l = (0, eI.tQ)(n, eu.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.format(et.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: et.intl.format(et.t["PH7Q+R"], {
                    numMonths: t.discount.intervalCount,
                    discountedPrice: l,
                    billingPeriod: (0, O.Ke)(t.discount.intervalType),
                }),
            }),
        ],
    });
}
let eO = function (e) {
    let {
            subscription: t,
            invoicePreview: l,
            isLoading: s,
            analyticsLocation: r,
            discountInfo: a,
            renewalChurnDiscountInfo: o,
            discountOffer: u,
        } = e,
        { analyticsLocations: d } = (0, f.Ay)(T.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER);
    function c() {
        t.status !== ec.Dmq.CANCELED && m();
    }
    function m(e) {
        (0, V.openModalLazy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: l } = await Promise.all([
                n.e("191170"),
                n.e("564729"),
                n.e("805549"),
                n.e("384820"),
                n.e("594161"),
                n.e("435432"),
                n.e("80347"),
                n.e("680166"),
            ]).then(n.bind(n, 293061));
            return (n) =>
                (0, i.jsx)(l, {
                    ...n,
                    premiumSubscription: t,
                    analyticsLocation: r,
                    analyticsLocations: d,
                    initialStep: e,
                });
        });
    }
    let A = O.Ay.getPlanIdFromInvoice(t, l),
        h = (0, e_.ux)(u?.expiresAt?.toISOString());
    return (0, b.m1)(A)
        ? null
        : (0, i.jsx)("div", {
              className: eC.S6,
              children: (0, i.jsx)(k.h, {
                  color: "nitro-pink",
                  className: eC.YL,
                  children: (0, i.jsxs)("div", {
                      className: eC.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eC.Gp,
                              children: [
                                  (0, i.jsx)(ef.A, {
                                      color: "currentcolor",
                                      className: eC.fJ,
                                      "aria-label": et.intl.string(et.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      className: eC.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != u && h,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: eC.T }),
                          (0, i.jsxs)("div", {
                              className: eC.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: eC.Yc,
                                      children: [
                                          null != u
                                              ? (0, i.jsx)(ej, { discountOffer: u, premiumSubscription: t })
                                              : (0, i.jsx)(ev, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: l,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: eC.e_,
                                              children: (function () {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      n = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, i.jsxs)("div", {
                                                          className: eC.qK,
                                                          children: [
                                                              (0, i.jsx)(eT.m, {
                                                                  text: n,
                                                                  shouldShow: e && null != n,
                                                                  asContainer: !0,
                                                                  children: (0, i.jsx)(w.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: et.intl.string(et.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, C.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: ey,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, i.jsx)(w.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: et.intl.string(et.t["ETE/oC"]),
                                                                  loading: s,
                                                                  onClick: c,
                                                              }),
                                                          ],
                                                      });
                                                  {
                                                      let e =
                                                          null != u
                                                              ? et.intl.format(et.t.XIVblY, {
                                                                    percent: u.discount.amount,
                                                                })
                                                              : et.intl.string(et.t.zrCzVB);
                                                      return (0, i.jsx)(w.$, {
                                                          variant: "expressive",
                                                          icon: ep.t,
                                                          size: "md",
                                                          text: e,
                                                          loading: s,
                                                          onClick: () => m(eN.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: eC.Hp, src: eb.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eL = n(284009),
    eD = n.n(eL),
    eR = n(607399),
    eP = n(189213),
    eG = n(683071),
    eM = n(701273),
    eU = n(277984),
    eV = n(780964),
    ek = n(766075),
    ew = n(327479),
    eF = n(601107),
    eB = n(959445);
let ez = [ec.Dmq.PAST_DUE, ec.Dmq.ACCOUNT_HOLD, ec.Dmq.BILLING_RETRY],
    eX = (e) => {
        let { transitionState: t, onClose: n, subscription: s, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = l.useState(!1),
            [d, c] = l.useState(!1);
        async function g() {
            u(!0), c(!1);
            try {
                await (0, eU.M2)(s.id, r, a),
                    v.default.track(ec.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                        subscription_id: s.id,
                        location_stack: r,
                    }),
                    (0, eU.hP)(),
                    n();
            } catch (e) {
                c(!0), u(!1);
            }
        }
        l.useEffect(() => {
            v.default.track(ec.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: s.id,
                location_stack: r,
            });
        }, []);
        let m = [
            { text: et.intl.string(et.t.oEAioF), onClick: () => n(), variant: "secondary" },
            {
                text: et.intl.string(et.t["cY+Oob"]),
                onClick: () => g(),
                disabled: o,
                variant: "critical-primary",
                loading: o,
            },
        ];
        return (0, i.jsx)(eP.Modal, {
            size: "md",
            transitionState: t,
            title: et.intl.string(et.t.LZunzZ),
            subtitle: et.intl.string(et.t.FClXh9),
            actions: m,
            onClose: async () => n(),
            children: d ? (0, i.jsx)(eG.w, { type: "critical", children: et.intl.string(et.t["5mlOCW"]) }) : null,
        });
    };
function eY(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: l,
            fractionalPremiumInfo: s,
            fromStandaloneBillingPage: a = !0,
            analyticsLocation: o,
        } = e,
        d = (0, u.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return eD()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: c } = (0, f.Ay)(T.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(n.additionalPlans)) return null;
    let { status: m } = n,
        A = (0, O.$k)(n),
        h = !A && n.isBoostOnly && ez.includes(n.status);
    if (A) t = eB.v2;
    else
        switch (m) {
            case ec.Dmq.PAST_DUE:
            case ec.Dmq.ACCOUNT_HOLD:
            case ec.Dmq.BILLING_RETRY:
                t = eB.P7;
                break;
            case ec.Dmq.PAUSE_PENDING:
            case ec.Dmq.PAUSED:
                t = n.pauseReason !== eF.qf.FRACTIONAL_PREMIUM ? eB.C7 : eB.wG;
                break;
            default:
                t = eB.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(t, eB.Qn),
                children: [
                    (0, i.jsx)("div", { className: eB.Kq }),
                    (0, i.jsx)("div", { className: eB.OL }),
                    (0, i.jsxs)("div", {
                        className: eB.eC,
                        children: [
                            (0, i.jsx)("div", { className: r()(eB.Ab, { [eB.aD]: A }) }),
                            (0, i.jsx)("div", {
                                children: (0, O.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: l,
                                    user: d,
                                    fractionalPremiumInfo: s,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, i.jsxs)("div", {
                            className: eB.BQ,
                            children: [
                                h &&
                                    (0, i.jsx)("div", {
                                        className: eB.x7,
                                        children: (0, i.jsx)(Q.Q, {
                                            variant: "always-white",
                                            onClick: function () {
                                                ez.includes(n.status) &&
                                                    (0, V.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(eX, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: et.intl.string(et.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(ew.A, {
                                    onClick: () => (0, ek.openUserSettings)(eV.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: et.intl.string(et.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, i.jsx)(g.E, {
                    className: eB.yW,
                    variant: "text-sm/normal",
                    children: et.intl.format(eR.Fr ? et.t.uxYBEa : et.t.k6haR9, {
                        openAppHook: () => (0, eM.A)("app"),
                    }),
                }),
        ],
    });
}
var eH = n(983048),
    eK = n(951555),
    eW = n(349288),
    eZ = n(292094);
function eq(e) {
    let { subscription: t, renewalMutations: l, className: s, analyticsLocation: a } = e,
        o = (0, I.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === eu.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(eZ.zr, s),
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eZ.G }),
                (0, i.jsx)("div", {
                    className: eZ.Qq,
                    children: et.intl.format(et.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(l) : O.Ay.getDisplayName(l.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(eW.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, V.openModalLazy)(async () => {
                                      let { default: e } = await n.e("865975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: l,
                                              analyticsLocation: a,
                                          });
                                  });
                          },
                          className: eZ.Lu,
                          children: et.intl.string(et.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eQ = n(716687);
function eJ() {
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eQ.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eQ.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, { className: eQ.Cy, variant: "text-sm/normal", children: et.intl.string(et.t.xFHEMa) }),
            ],
        })
    );
}
function e$() {
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eQ.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eQ.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: eQ.Cy,
                    variant: "text-sm/normal",
                    children: et.intl.string(et.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function e0(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: r } = (0, f.Ay)(T.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eQ.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eQ.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, {
                    className: eQ.Cy,
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: s, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function e1(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: l, className: s, fractionalPremiumInfo: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(eQ.KF, s),
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-md/semibold",
                className: eQ.QL,
                children: et.intl.string(et.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, l, !1, a) }),
        ],
    });
}
function e2() {
    let e = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: eQ.Gf,
                children: et.intl.string(et.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: eQ.yV, children: et.intl.string(et.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.Z, {
                    className: eQ.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(_.A, {
                        align: _.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(N.A, { game: null, size: N.M.SMALL, className: eQ.pV }),
                            (0, i.jsx)("span", { className: eQ.O, children: et.intl.string(et.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(eh, { currentUser: e }),
        ],
    });
}
function e3(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: l,
            busy: s,
            fromStandaloneBillingPage: a,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: u,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: c,
            fetchedOpenInvoice: g,
            isPremiumGroup: m,
        } = e,
        { analyticsLocations: A } = (0, f.Ay)(T.A.SUBSCRIPTION_DETAILS),
        x = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: A, analyticsLocation: n },
        [p] = (0, D.YV)(x);
    p = d ?? p;
    let _ =
            null != c
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: A,
                      analyticsLocation: n,
                  },
        [N] = (0, D.YV)(_);
    N = c ?? N;
    let C = (0, I.A)(),
        b = (0, G.p)(),
        y = (0, R.nf)(),
        v = O.Ay.isBaseSubscriptionCanceled(t),
        j = (function (e, t) {
            let n = ex.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, L._w)(n, t?.id, !1),
                    l = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, L.jJ)(n.id, l, t?.id)) return !0;
            }
            return !1;
        })(t, l);
    if (null == p || null == N) return (0, i.jsx)(h.y, {});
    let P = j ? (0, R.Bv)(N) : null,
        M = null != P || (null != y && (y.discountId === eu.q || y.discountId === eu.EG)),
        U =
            j && ((v && null != b) || (!v && M))
                ? (0, i.jsx)(eO, {
                      subscription: t,
                      invoicePreview: N,
                      paymentSource: l,
                      discountOffer: b,
                      renewalChurnDiscountInfo: P,
                      discountInfo: y,
                      isLoading: s,
                      analyticsLocation: n,
                  })
                : (0, i.jsx)(eH.A, {
                      subscription: t,
                      currentInvoicePreview: p,
                      renewalInvoicePreview: N,
                      paymentSource: l,
                      busy: s,
                      analyticsLocation: n,
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: eQ.fj,
                children: [
                    !m && U,
                    (0, i.jsx)(eY, {
                        subscription: t,
                        renewalInvoicePreview: p,
                        fromStandaloneBillingPage: a,
                        fractionalPremiumInfo: C,
                        analyticsLocation: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(E.n, {
                    label: et.intl.string(et.t.Sb6wI1),
                    children: (0, i.jsxs)("div", {
                        className: eQ.zH,
                        children: [
                            (0, i.jsx)(e1, {
                                subscription: t,
                                renewalInvoicePreview: N,
                                className: eQ.g4,
                                fractionalPremiumInfo: C,
                                openInvoice: g,
                            }),
                            (0, i.jsx)("div", {
                                className: r()(eQ.g4, { [eQ.sE]: o }),
                                children: (0, i.jsx)(S.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? et.intl.formatToPlainString(et.t["rTk9v/"], {
                                                  paymentGatewayName: ec.qmC[t.paymentGateway],
                                              })
                                            : et.intl.string(et.t.iRzXKd),
                                    children: (0, i.jsx)(eK.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: L.c_,
                                        highlightAddPaymentMethodButton: u || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: p,
                                        openInvoice: g,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
let e5 = new Set([ec.Dmq.ACTIVE, ec.Dmq.PAST_DUE, ec.Dmq.CANCELED, ec.Dmq.PAUSE_PENDING, ec.Dmq.PAUSED]);
function e6() {
    return (
        l.useEffect(() => {
            v.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: eQ.oU,
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(g.E, {
                    className: eQ.dk,
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(ec.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function e4(e) {
    let t,
        {
            subscription: n,
            subscriptions: s,
            paymentSource: r,
            busy: a,
            fromStandaloneBillingPage: d = !0,
            analyticsLocation: c,
            shouldRefetchInvoicesOnSubscriptionUpdate: g,
        } = e;
    null != s && null != s[0] && (n = s[0]);
    let A = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        { analyticsLocations: S } = (0, f.Ay)(T.A.SUBSCRIPTION_DETAILS),
        I = (0, G.p)(),
        _ = null != s ? s.slice(1) : [],
        [N, C] = l.useState(0);
    l.useEffect(() => {
        if (g)
            return (
                x.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
                () => {
                    x.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
                }
            );
        function e(e) {
            e.subscription.id === n.id && C((e) => e + 1);
        }
    }, [n.id, g]),
        (0, p.Ay)(() => {
            function e() {
                return C((e) => e + 1);
            }
            return (
                x.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    x.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        });
    let [v] = (0, D.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            fetchKey: N,
        }),
        [j] = (0, D.YV)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            userDiscountOfferId: I?.id,
            fetchKey: N,
        }),
        O = r?.invalid,
        L = (0, u.bG)([y.default], () => y.default.getCurrentUser()?.hasFreePremium()),
        R = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= R.diff(o()(), "days") || n.status === ec.Dmq.PAST_DUE) &&
            !L &&
            !n.isPurchasedExternally,
        k = O && n.status === ec.Dmq.PAST_DUE && !L && !n.isPurchasedExternally,
        w = (0, P.l)(),
        F = !L && w,
        B = n?.status === ec.Dmq.PAST_DUE,
        z = B ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        X = null != A && A.isPremiumGroupPrimary(),
        Y = n.hasAnyPremiumGroup,
        [H] = (0, D.C8)({ subscriptionId: n.id, preventFetch: !(F || B) });
    return null == v || null == j
        ? (0, i.jsx)(h.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, b.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(eq, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: eQ.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(E.n, {
              label: et.intl.string(et.t["/gs+Pz"]),
              description: et.intl.string(et.t.D8UpUo),
              children: [
                  V ? (0, i.jsx)(eJ, {}) : null,
                  k ? (0, i.jsx)(e$, {}) : null,
                  F && null != H ? (0, i.jsx)(e0, { daysPastDue: z, subscription: n, openInvoiceId: H.id }) : null,
                  X && Y && (0, i.jsx)(eS, { subscription: n, analyticsLocations: S }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: _.length > 0 ? eQ.HZ : eQ.__invalid_singleSubscription,
                              children: (0, i.jsx)(e3, {
                                  subscription: n,
                                  analyticsLocation: c,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: V,
                                  showInvalidPaymentMethod: k,
                                  fetchedCurrentInvoicePreview: v,
                                  fetchedRenewalInvoicePreview: j,
                                  fetchedOpenInvoice: H,
                                  isPremiumGroup: X,
                              }),
                          }),
                          _.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: eQ.HZ,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: eQ.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(e3, {
                                              subscription: e,
                                              analyticsLocation: c,
                                              paymentSource: r,
                                              busy: a,
                                              fromStandaloneBillingPage: d,
                                              showNoPaymentMethod: V,
                                              showInvalidPaymentMethod: k,
                                              fetchedCurrentInvoicePreview: null,
                                              fetchedRenewalInvoicePreview: null,
                                              fetchedOpenInvoice: null,
                                              isPremiumGroup: !1,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ],
                  }),
              ],
          }));
}
