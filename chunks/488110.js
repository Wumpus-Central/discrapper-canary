n.d(t, { Sb: () => tr, TC: () => ti, Hy: () => ts, Ay: () => ta });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(536637),
    o = n.n(a),
    u = n(855986),
    d = n(646514),
    c = n(695366),
    g = n(834730),
    m = n(534514),
    A = n(993077),
    E = n(289873),
    h = n(270003),
    S = n(452027),
    f = n(73153),
    T = n(964486),
    p = n(793574),
    x = n(688810),
    I = n(531260),
    _ = n(235986),
    b = n(769015),
    N = n(778705),
    C = n(832946),
    y = n(287809),
    v = n(129230),
    j = n(975571),
    O = n(448645),
    D = n(83617),
    R = n(543767),
    L = n(526292),
    P = n(155984),
    G = n(131168),
    M = n(331322),
    U = n(805251),
    V = n(192308),
    k = n(821609),
    w = n(315629),
    F = n(158032),
    B = n(856383),
    X = n(427262),
    z = n(139665),
    H = n(473702),
    Y = n(59784),
    W = n(233317),
    K = n(622017),
    Z = n(113090),
    q = n(778712),
    Q = n(97808),
    J = n(123292),
    $ = n(950305),
    ee = n(854627),
    et = n(107198),
    en = n(792996),
    ei = n(443543);
function el(e) {
    let { user: t, isOwnUser: n, label: s, removeButton: a, isFaded: o } = e,
        { avatarSrc: u, eventHandlers: d } = (0, ee.A)({ userId: t?.id, size: q._3.SIZE_24 }),
        c = (0, X.$3)(t),
        [m, A] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(ei.kL, { [ei.RE]: null != a }),
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [
            (0, i.jsxs)("div", {
                className: r()(ei.TT, { [ei.zj]: o }),
                children: [
                    (0, i.jsx)(Q.eu, { className: ei.my, src: u, "aria-label": c, size: q._3.SIZE_24, ...d }),
                    (0, i.jsxs)(g.E, {
                        className: ei.Xh,
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: [c, !!n && ` (${en.intl.string(en.t.LuZzxn)})`],
                    }),
                    null != s &&
                        (0, i.jsxs)(g.E, {
                            className: ei.Pf,
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: [(0, i.jsx)("span", { className: ei.me, children: "\xb7" }), s],
                        }),
                ],
            }),
            null != a &&
                m &&
                (0, i.jsx)("div", {
                    className: ei.dM,
                    children: (0, i.jsx)(J.Q, {
                        textVariant: "body-sm/medium",
                        variant: "secondary",
                        text: a.label,
                        onClick: a.onRemove,
                    }),
                }),
        ],
    });
}
function es(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(el, { user: t, isOwnUser: n, label: en.intl.string(et.default.vc2xys) });
}
function er(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(el, {
        user: t,
        label: en.intl.string(et.default.mnt50A),
        removeButton: { onRemove: n, label: en.intl.string(en.t.N86XcP) },
    });
}
function ea(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(el, { user: t, isOwnUser: n, label: en.intl.string(et.default.mnt50A) });
}
function eo(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(el, {
        user: t,
        label: en.intl.string(et.default["1RH5t9"]),
        isFaded: !0,
        removeButton: { onRemove: n, label: en.intl.string(et.default["2blqtw"]) },
    });
}
function eu(e) {
    let { onInvite: t, canInvite: n } = e,
        [s, a] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(ei.kL, { [ei.RE]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, i.jsxs)("div", {
                className: ei.TT,
                children: [
                    (0, i.jsx)("div", {
                        className: r()(ei.vG, ei.my),
                        children: (0, i.jsx)($.UserIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                    }),
                    (0, i.jsx)(g.E, {
                        className: ei.Xh,
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: en.intl.string(et.default["/x7DVG"]),
                    }),
                ],
            }),
            s &&
                n &&
                (0, i.jsx)("div", {
                    className: ei.dM,
                    children: (0, i.jsx)(J.Q, {
                        textVariant: "body-sm/medium",
                        variant: "secondary",
                        text: en.intl.string(et.default.O15JWp),
                        onClick: t,
                    }),
                }),
        ],
    });
}
var ed = n(682901),
    ec = n(88001),
    eg = n(652215),
    em = n(891027),
    eA = n(285613);
function eE() {
    return (0, i.jsx)(M.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 10,
        padding: { top: 12, bottom: 12 },
        className: eA.wx,
        children: (0, i.jsxs)(M.B, {
            direction: "horizontal",
            align: "center",
            gap: 10,
            children: [
                (0, i.jsx)(m.D, { variant: "nitro-xs", children: (0, ec.DP)() }),
                (0, i.jsx)(U.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    });
}
function eh(e) {
    let { title: t, description: n, button: l } = e;
    return (0, i.jsxs)("div", {
        className: eA.bh,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 8,
                className: eA.iQ,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                    (0, i.jsx)(g.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)("div", { className: eA.UD, children: l }),
        ],
    });
}
function eS(e) {
    let { premiumGroupSubscriptionId: t, currentUser: l } = e;
    return (0, i.jsx)(k.$, {
        variant: "secondary",
        text: en.intl.string(et.default.NCu2JD),
        onClick: function () {
            (0, V.mM)(async () => {
                let { default: e } = await n.e(392796).then(n.bind(n, 205463));
                return (n) => (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: t, currentUser: l });
            });
        },
    });
}
function ef(e) {
    let { currentUser: t } = e,
        { premiumGroupMembership: n, isLoading: l } = (0, Z.A)(),
        { premiumGroupMembers: s, isLoading: r } = (0, K.A)(n?.subscriptionId ?? null);
    if (r || null == s || l || null == n) return (0, i.jsx)(E.y, {});
    let a = n.subscriptionId,
        o = n.currentPeriodEnd,
        { primary: u, members: d } = s,
        { title: c, description: g } = (function () {
            if (null == n) return { title: "", description: "" };
            switch (n.subscriptionStatus) {
                case eg.Dmq.CANCELED:
                    return {
                        title: en.intl.string(et.default.mCwdPj),
                        description: en.intl.format(et.default.wH9NYG, { endDate: o }),
                    };
                case eg.Dmq.PAUSED:
                    return {
                        title: en.intl.string(et.default.IDyd1e),
                        description: en.intl.format(et.default["8MfYhr"], {
                            premiumGroupProductName: (0, ec.DP)(),
                            helpCenterLink: ec.TE,
                        }),
                    };
                case eg.Dmq.PAST_DUE:
                case eg.Dmq.ACCOUNT_HOLD:
                case eg.Dmq.BILLING_RETRY:
                    return {
                        title: en.intl.string(et.default.Duq8zp),
                        description: en.intl.format(et.default["MHn/D6"], {
                            endDate: o,
                            premiumGroupProductName: (0, ec.DP)(),
                        }),
                    };
                default:
                    return {
                        title: en.intl.formatToPlainString(et.default.xiUjMF, {
                            premiumGroupProductName: (0, ec.DP)(),
                        }),
                        description: en.intl.format(et.default["2HEyqG"], {
                            primaryName: (0, X.$3)(u),
                            premiumGroupProductName: (0, ec.DP)(),
                            helpCenterLink: ec.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(w.h, {
        className: eA.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(eE, {}),
            (0, i.jsxs)("div", {
                className: eA.wS,
                children: [
                    (0, i.jsx)(eh, {
                        title: c,
                        description: g,
                        button: (0, i.jsx)(eS, { premiumGroupSubscriptionId: a, currentUser: t }),
                    }),
                    (0, i.jsxs)(M.B, {
                        direction: "vertical",
                        padding: { left: 32, bottom: 12 },
                        gap: 0,
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "heading-xs/medium",
                                color: "text-strong",
                                className: eA.Or,
                                children: en.intl.string(et.default["oqw/KW"]),
                            }),
                            (0, i.jsx)(es, { user: u, isOwnUser: !1 }),
                            d.map((e) => (0, i.jsx)(ea, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eT(e) {
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
    if (n || null == t) return (0, i.jsx)(E.y, {});
    let { primary: c, members: A, invitedUsers: h } = t;
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
                        variant: "heading-xs/medium",
                        color: "text-strong",
                        children: en.intl.string(et.default["oqw/KW"]),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: en.intl.format(et.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                    }),
                ],
            }),
            (0, i.jsx)(es, { user: c, isOwnUser: !0 }),
            A.map((e) => (0, i.jsx)(er, { user: e, onRemove: () => r(e) }, e.id)),
            h.map((e) => (0, i.jsx)(eo, { user: e, onRemove: () => a(e) }, e.id)),
            Array.from({ length: d }).map((e, t) =>
                (0, i.jsx)(eu, { onInvite: s, canInvite: l }, `seat-available-${t}`),
            ),
        ],
    });
}
function ep(e) {
    let { subscription: t, analyticsLocations: n, disabled: s = !1 } = e,
        [r, a] = l.useState(!1),
        o = l.useCallback(async () => {
            a(!0);
            try {
                await (0, F.Ir)(t, n);
            } catch (e) {
                B.A.captureException(e, { extra: { subscriptionId: t.id } });
            } finally {
                a(!1);
            }
        }, [t, n]);
    return (0, i.jsx)(k.$, {
        variant: "expressive",
        size: "md",
        text: en.intl.string(et.default.EFTJMQ),
        onClick: o,
        loading: r,
        disabled: s,
    });
}
function ex(e) {
    let { canInvite: t, onInvite: n } = e;
    return (0, i.jsx)(k.$, {
        variant: "primary",
        size: "md",
        fullWidth: !0,
        text: en.intl.string(et.default.Tcmclj),
        onClick: n,
        disabled: !t,
    });
}
function eI(e) {
    let { subscription: t, analyticsLocations: s, isContinuationEnabled: r, churnUserDiscountOffer: a } = e,
        o = l.useCallback(() => {
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(489361),
                    n.e(216806),
                    n.e(363094),
                    n.e(384820),
                    n.e(594161),
                    n.e(435432),
                    n.e(80347),
                    n.e(52513),
                ]).then(n.bind(n, 336888));
                return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: s });
            });
        }, [t, s]),
        u =
            r && a?.discountId === ed.Ki
                ? en.intl.formatToPlainString(em.default.JsnZTi, { percent: a.discount.amount })
                : en.intl.string(et.default.oO0EYw);
    return (0, i.jsx)(k.$, { variant: "secondary", size: "md", fullWidth: !0, text: u, onClick: o });
}
function e_(e) {
    let { subscription: t, analyticsLocations: s, churnUserDiscountOffer: r } = e,
        a = l.useCallback(() => {
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(489361),
                    n.e(216806),
                    n.e(363094),
                    n.e(384820),
                    n.e(594161),
                    n.e(435432),
                    n.e(80347),
                    n.e(52513),
                ]).then(n.bind(n, 336888));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        premiumSubscription: t,
                        analyticsLocations: s,
                        initialStep: H.g.CONFIRM_DISCOUNT,
                    });
            });
        }, [t, s]);
    return (0, i.jsx)(k.$, {
        variant: "secondary",
        size: "md",
        fullWidth: !0,
        text: en.intl.formatToPlainString(em.default["eZa6K/"], { percent: r.discount.amount }),
        onClick: a,
    });
}
function eb(e) {
    let { subscription: t, analyticsLocations: s } = e,
        { premiumGroupMembers: r, isLoading: a } = (0, K.A)(t.id),
        {
            numAvailableInvites: o,
            numTotalSeats: d,
            numUsedSeats: c,
        } = (0, u.cf)([W.A], () => ({
            numAvailableInvites: W.A.getNumAvailableInvites(),
            numTotalSeats: W.A.getNumTotalSeats(),
            numUsedSeats: W.A.getNumUsedSeats(),
        })),
        { status: g } = t,
        m = (0, z.G)({ location: "PremiumGroupSubscriptionManageCard" }),
        { churnUserDiscountOffer: A } = (0, L.g5)(!m),
        E = A?.isApplied() === !0,
        h = (0, O.ki)(t),
        S = g === eg.Dmq.ACTIVE && null != t.renewalMutations,
        f = m && E && (h || S);
    function T() {
        (v.default.track(eg.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([n.e(768071), n.e(634508), n.e(490010), n.e(967884)]).then(
                    n.bind(n, 307399),
                );
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
            }));
    }
    let p = l.useMemo(() => !ec.BE.includes(t.status) && o > 0, [t.status, o]),
        { title: x, description: I } = (function () {
            if (f)
                return {
                    title: en.intl.string(et.default.KME8Q6),
                    description: en.intl.format(em.default.sv43VQ, {
                        endDate: t.currentPeriodEnd,
                        premiumGroupProductName: (0, ec.DP)(),
                    }),
                };
            switch (g) {
                case eg.Dmq.CANCELED:
                    return {
                        title: en.intl.string(et.default.KME8Q6),
                        description: en.intl.format(et.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, ec.DP)(),
                        }),
                    };
                case eg.Dmq.PAUSED:
                    return {
                        title: en.intl.string(et.default["4flKoC"]),
                        description: en.intl.format(et.default["Q++BmO"], { premiumGroupProductName: (0, ec.DP)() }),
                    };
                case eg.Dmq.PAST_DUE:
                case eg.Dmq.ACCOUNT_HOLD:
                case eg.Dmq.BILLING_RETRY:
                    return {
                        title: en.intl.string(et.default.cfeFEt),
                        description: en.intl.format(et.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: ec.TE,
                        }),
                    };
                default:
                    return {
                        title: en.intl.formatToPlainString(et.default.NRCfnQ, {
                            premiumGroupProductName: (0, ec.DP)(),
                        }),
                        description: en.intl.format(et.default.lvnrnb, {
                            totalSeats: 5,
                            premiumGroupProductName: (0, ec.DP)(),
                            helpCenterLink: ec.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(w.h, {
        className: eA.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(eE, {}),
            (0, i.jsxs)("div", {
                className: eA.wS,
                children: [
                    (0, i.jsx)(eh, {
                        title: x,
                        description: I,
                        button: (function () {
                            if (h && !m) return (0, i.jsx)(ep, { subscription: t, analyticsLocations: s });
                            if (f) return (0, i.jsx)(ep, { subscription: t, analyticsLocations: s, disabled: !0 });
                            let e = h && A?.discountId === ed.Ki;
                            return (0, i.jsxs)(M.B, {
                                direction: "vertical",
                                gap: 12,
                                children: [
                                    (0, i.jsx)(ex, { canInvite: p, onInvite: T }),
                                    e
                                        ? (0, i.jsx)(e_, {
                                              subscription: t,
                                              analyticsLocations: s,
                                              churnUserDiscountOffer: A,
                                          })
                                        : (0, i.jsx)(eI, {
                                              subscription: t,
                                              analyticsLocations: s,
                                              isContinuationEnabled: m,
                                              churnUserDiscountOffer: A,
                                          }),
                                ],
                            });
                        })(),
                    }),
                    (0, i.jsx)(eT, {
                        premiumGroupMembers: r,
                        isLoadingPremiumGroupMembers: a,
                        canInvite: p,
                        onInvite: T,
                        onRemoveMember: function (e) {
                            (v.default.track(eg.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                subscription_id: t.id,
                                member_user_id: e.id,
                            }),
                                (0, V.mM)(async () => {
                                    let { default: l } = await n.e(521305).then(n.bind(n, 391040));
                                    return (n) => (0, i.jsx)(l, { ...n, subscriptionId: t.id, member: e });
                                }));
                        },
                        onRemoveInvitedUser: function (e) {
                            v.default.track(eg.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                subscription_id: t.id,
                                invited_user_id: e.id,
                            });
                            let l = Y.A.getInviteByUserId(e.id)?.invite;
                            (0, V.mM)(async () => {
                                let { default: s } = await n.e(815554).then(n.bind(n, 115225));
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
var eN = n(866665),
    eC = n(392943),
    ey = n(580630),
    ev = n(267023);
let ej = { page: eg.liQ.USER_SETTINGS, section: eg.JJy.SETTINGS_PREMIUM, object: eg.ZSU.CARD };
function eO(e) {
    let { premiumSubscription: t, discountInfo: n } = e;
    if (null == n.duration || null == n.percentage) return null;
    let l = (0, O.y8)(ed.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        s = (0, ey.$g)(l.amount, l.currency),
        r = Math.round(l.amount * (1 - n.percentage / 100)),
        a = (0, ey.$g)(r, l.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: en.intl.string(en.t["53BCd6"]),
            }),
            (0, i.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: en.intl.format(en.t.N43FMx, {
                    numMonths: n.duration,
                    discountedPrice: a,
                    billingPeriod: en.intl.string(en.t.FPybU7),
                    fullPrice: s,
                }),
            }),
        ],
    });
}
let eD = function (e) {
    var t;
    let { subscription: l, invoicePreview: s, isLoading: r, discountInfo: a, analyticsLocation: o } = e,
        { analyticsLocations: u } = (0, x.Ay)(p.A.REFERRAL_INCENTIVE_DISCOUNT_SUBSCRIPTION_HEADER),
        d = O.Ay.getPlanIdFromInvoice(l, s);
    if ((0, C.m1)(d)) return null;
    let c = O.Ay.isSwitchingPlansDisabled(l),
        m = O.Ay.getSwitchingPlansDisabledMessage(l),
        A =
            null == (t = l.metadata?.active_discount_expires_at)
                ? null
                : en.intl.formatToPlainString(en.t.u8bQ1q, { expiryDate: new Date(t) });
    return (0, i.jsx)("div", {
        className: ev.b8,
        children: (0, i.jsx)(w.h, {
            color: "nitro-pink",
            className: ev.YL,
            children: (0, i.jsxs)("div", {
                className: ev.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: ev.Gp,
                        children: [
                            (0, i.jsx)(eC.A, {
                                color: "currentcolor",
                                className: ev.Ss,
                                "aria-label": en.intl.string(en.t.lpNrPu),
                            }),
                            (0, i.jsx)(g.E, {
                                className: ev.Sd,
                                variant: "body-sm/medium",
                                color: "text-strong",
                                children: A,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ev.yF }),
                    (0, i.jsxs)("div", {
                        className: ev.IH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ev.Tm,
                                children: [
                                    (0, i.jsx)(eO, { premiumSubscription: l, discountInfo: a }),
                                    (0, i.jsx)("div", {
                                        className: ev.Xc,
                                        children: (0, i.jsxs)("div", {
                                            className: ev.qK,
                                            children: [
                                                (0, i.jsx)(eN.m, {
                                                    text: m,
                                                    shouldShow: c && null != m,
                                                    asContainer: !0,
                                                    children: (0, i.jsx)(k.$, {
                                                        variant: "expressive",
                                                        disabled: c,
                                                        text: en.intl.string(en.t["dylp/7"]),
                                                        size: "md",
                                                        onClick: () => {
                                                            (0, N.A)({
                                                                analyticsLocations: u,
                                                                analyticsLocation: o,
                                                                analyticsObject: ej,
                                                                subscription: l,
                                                            });
                                                        },
                                                    }),
                                                }),
                                                (0, i.jsx)(k.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    text: en.intl.string(en.t["ETE/oC"]),
                                                    loading: r,
                                                    onClick: function () {
                                                        l.status !== eg.Dmq.CANCELED &&
                                                            (0, V.mM)(async () => {
                                                                let { default: e } = await Promise.all([
                                                                    n.e(489361),
                                                                    n.e(216806),
                                                                    n.e(363094),
                                                                    n.e(384820),
                                                                    n.e(594161),
                                                                    n.e(435432),
                                                                    n.e(80347),
                                                                    n.e(52513),
                                                                ]).then(n.bind(n, 336888));
                                                                return (t) =>
                                                                    (0, i.jsx)(e, {
                                                                        ...t,
                                                                        premiumSubscription: l,
                                                                        analyticsLocation: o,
                                                                        analyticsLocations: u,
                                                                        initialStep: void 0,
                                                                    });
                                                            });
                                                    },
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("img", {
                                className: ev._e,
                                src: "https://cdn.discordapp.com/assets/content/44c174fe5b2d4d5d63ae502269342904afdfa7ea9fcc06a7ed693ae69bffebbb.svg",
                                alt: "",
                                draggable: !1,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var eR = n(97352),
    eL = n(403581),
    eP = n(511484),
    eG = n(811611),
    eM = n(858432),
    eU = n(398932);
let eV = { page: eg.liQ.USER_SETTINGS, section: eg.JJy.SETTINGS_PREMIUM, object: eg.ZSU.CARD };
function ek(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: l, isDiscountActive: s } = e,
        r = O.Ay.getPlanIdFromInvoice(t, l),
        a = eR.A.get(r);
    if (null == a || null == l || null == n || null == n.duration || null == n.percentage) return null;
    let o = l.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, ey.$g)(o.amount, l.currency),
        d = (0, O.y8)(ed.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, ey.$g)(d.amount, d.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: en.intl.format(en.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: s
                    ? en.intl.format(en.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: c })
                    : en.intl.format(en.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: en.intl.string(en.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function ew(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        l = (0, eP.tQ)(n, ed.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: en.intl.format(en.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: en.intl.format(en.t["PH7Q+R"], {
                    numMonths: t.discount.intervalCount,
                    discountedPrice: l,
                    billingPeriod: (0, O.Ke)(t.discount.intervalType),
                }),
            }),
        ],
    });
}
let eF = function (e) {
    let {
            subscription: t,
            invoicePreview: l,
            isLoading: s,
            analyticsLocation: r,
            discountInfo: a,
            renewalChurnDiscountInfo: o,
            discountOffer: u,
        } = e,
        { analyticsLocations: d } = (0, x.Ay)(p.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER);
    function c() {
        t.status !== eg.Dmq.CANCELED && m();
    }
    function m(e) {
        (0, V.mM)(async () => {
            let { default: l } = await Promise.all([
                n.e(489361),
                n.e(216806),
                n.e(363094),
                n.e(384820),
                n.e(594161),
                n.e(435432),
                n.e(80347),
                n.e(52513),
            ]).then(n.bind(n, 336888));
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
        E = (0, eG.ux)(u?.expiresAt?.toISOString());
    return (0, C.m1)(A)
        ? null
        : (0, i.jsx)("div", {
              className: eM.S6,
              children: (0, i.jsx)(w.h, {
                  color: "nitro-pink",
                  className: eM.YL,
                  children: (0, i.jsxs)("div", {
                      className: eM.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eM.Gp,
                              children: [
                                  (0, i.jsx)(eC.A, {
                                      color: "currentcolor",
                                      className: eM.fJ,
                                      "aria-label": en.intl.string(en.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      className: eM.tD,
                                      variant: "body-sm/medium",
                                      color: "text-strong",
                                      children: null != u && E,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: eM.T }),
                          (0, i.jsxs)("div", {
                              className: eM.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: eM.Yc,
                                      children: [
                                          null != u
                                              ? (0, i.jsx)(ew, { discountOffer: u, premiumSubscription: t })
                                              : (0, i.jsx)(ek, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: l,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: eM.e_,
                                              children: (function () {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      n = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, i.jsxs)("div", {
                                                          className: eM.qK,
                                                          children: [
                                                              (0, i.jsx)(eN.m, {
                                                                  text: n,
                                                                  shouldShow: e && null != n,
                                                                  asContainer: !0,
                                                                  children: (0, i.jsx)(k.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: en.intl.string(en.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, N.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: eV,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, i.jsx)(k.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: en.intl.string(en.t["ETE/oC"]),
                                                                  loading: s,
                                                                  onClick: c,
                                                              }),
                                                          ],
                                                      });
                                                  {
                                                      let e =
                                                          null != u
                                                              ? en.intl.format(en.t.XIVblY, {
                                                                    percent: u.discount.amount,
                                                                })
                                                              : en.intl.string(en.t.zrCzVB);
                                                      return (0, i.jsx)(k.$, {
                                                          variant: "expressive",
                                                          icon: eL.NitroWheelIcon,
                                                          size: "md",
                                                          text: e,
                                                          loading: s,
                                                          onClick: () => m(H.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: eM.Hp, src: eU.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eB = n(284009),
    eX = n.n(eB),
    ez = n(607399),
    eH = n(189213),
    eY = n(683071),
    eW = n(701273),
    eK = n(669815),
    eZ = n(780964),
    eq = n(766075),
    eQ = n(327479),
    eJ = n(601107),
    e$ = n(583690);
let e0 = [eg.Dmq.PAST_DUE, eg.Dmq.ACCOUNT_HOLD, eg.Dmq.BILLING_RETRY],
    e1 = (e) => {
        let { transitionState: t, onClose: n, subscription: s, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = l.useState(!1),
            [d, c] = l.useState(!1);
        l.useEffect(() => {
            v.default.track(eg.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: s.id,
                location_stack: r,
            });
        }, []);
        let g = [
            { text: en.intl.string(en.t.oEAioF), onClick: () => n(), variant: "secondary" },
            {
                text: en.intl.string(en.t["cY+Oob"]),
                onClick: () =>
                    (async function () {
                        (u(!0), c(!1));
                        try {
                            (await (0, eK.M2)(s.id, r, a),
                                v.default.track(eg.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                                    subscription_id: s.id,
                                    location_stack: r,
                                }),
                                (0, eK.hP)(),
                                n());
                        } catch (e) {
                            (c(!0), u(!1));
                        }
                    })(),
                disabled: o,
                variant: "critical-primary",
                loading: o,
            },
        ];
        return (0, i.jsx)(eH.a, {
            size: "md",
            transitionState: t,
            title: en.intl.string(en.t.LZunzZ),
            subtitle: en.intl.string(en.t.FClXh9),
            actions: g,
            onClose: async () => n(),
            children: d
                ? (0, i.jsx)(eY.w, { type: "critical", message: en.intl.string(en.t["5mlOCW"]), role: "alert" })
                : null,
        });
    };
function e2(e) {
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
            return (eX()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e);
        }),
        { analyticsLocations: c } = (0, x.Ay)(p.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(n.additionalPlans)) return null;
    let { status: m } = n,
        A = (0, O.$k)(n),
        E = !A && n.isBoostOnly && e0.includes(n.status);
    if (A) t = e$.v2;
    else
        switch (m) {
            case eg.Dmq.PAST_DUE:
            case eg.Dmq.ACCOUNT_HOLD:
            case eg.Dmq.BILLING_RETRY:
                t = e$.P7;
                break;
            case eg.Dmq.PAUSE_PENDING:
            case eg.Dmq.PAUSED:
                t = n.pauseReason !== eJ.qf.FRACTIONAL_PREMIUM ? e$.C7 : e$.wG;
                break;
            default:
                t = e$.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(t, e$.Qn),
                children: [
                    (0, i.jsx)("div", { className: e$.Kq }),
                    (0, i.jsx)("div", { className: e$.OL }),
                    (0, i.jsxs)("div", {
                        className: e$.eC,
                        children: [
                            (0, i.jsx)("div", { className: r()(e$.Ab, { [e$.aD]: A }) }),
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
                            className: e$.BQ,
                            children: [
                                E &&
                                    (0, i.jsx)("div", {
                                        className: e$.x7,
                                        children: (0, i.jsx)(J.Q, {
                                            variant: "always-white",
                                            onClick: function () {
                                                e0.includes(n.status) &&
                                                    (0, V.mM)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(e1, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: en.intl.string(en.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(eQ.A, {
                                    onClick: () => (0, eq.openUserSettings)(eZ.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: en.intl.string(en.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, i.jsx)(g.E, {
                    className: e$.yW,
                    variant: "body-sm/normal",
                    children: en.intl.format(ez.Fr ? en.t.uxYBEa : en.t.k6haR9, {
                        openAppHook: () => (0, eW.A)("app"),
                    }),
                }),
        ],
    });
}
var e3 = n(358787),
    e6 = n(590885),
    e4 = n(28863),
    e5 = n(109681);
function e8(e) {
    let { subscription: t, renewalMutations: l, className: s, analyticsLocation: a } = e,
        o = (0, I.A)(),
        { analyticsLocations: u } = (0, x.Ay)(),
        d = (0, O.Zb)(t.planId),
        g = (0, z.G)({ location: "SubscriptionRenewalMutationNotice", autoTrackExposure: d }),
        m = t.currentPeriodEnd;
    return (
        o.fractionalState === ed.xc.FP_SUB_PAUSED && (m = o.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(e5.zr, s),
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: e5.G,
                }),
                (0, i.jsx)("div", {
                    className: e5.Qq,
                    children: en.intl.format(en.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(l) : O.Ay.getDisplayName(l.planId),
                        date: m,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(e4.Anchor, {
                          onClick: (e) => {
                              (e.preventDefault(),
                                  d && g
                                      ? (0, V.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(489361),
                                                n.e(216806),
                                                n.e(363094),
                                                n.e(384820),
                                                n.e(594161),
                                                n.e(435432),
                                                n.e(80347),
                                                n.e(52513),
                                            ]).then(n.bind(n, 336888));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    premiumSubscription: t,
                                                    analyticsLocations: u,
                                                    analyticsLocation: a,
                                                    initialStep: H.g.CONFIRM,
                                                });
                                        })
                                      : (0, V.mM)(async () => {
                                            let { default: e } = await n.e(865975).then(n.bind(n, 702698));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    subscription: t,
                                                    renewalMutations: l,
                                                    analyticsLocation: a,
                                                });
                                        }));
                          },
                          className: e5.Lu,
                          children: en.intl.string(en.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var e7 = n(72536);
function e9() {
    return (
        l.useEffect(() => {
            v.default.track(eg.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e7.Zz,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e7.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, { className: e7.Cy, variant: "body-sm/normal", children: en.intl.string(en.t.xFHEMa) }),
            ],
        })
    );
}
function te() {
    return (
        l.useEffect(() => {
            v.default.track(eg.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e7.Zz,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e7.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e7.Cy,
                    variant: "body-sm/normal",
                    children: en.intl.string(en.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function tt(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(p.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        l.useEffect(() => {
            v.default.track(eg.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e7.Zz,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e7.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e7.Cy,
                    variant: "body-sm/normal",
                    children: en.intl.format(en.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, N.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: s, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function tn(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: l, className: s, fractionalPremiumInfo: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(e7.KF, s),
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-sm/semibold",
                className: e7.QL,
                children: en.intl.string(en.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, l, !1, a) }),
        ],
    });
}
function ti() {
    let e = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: e7.Gf,
                children: en.intl.string(en.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: e7.yV, children: en.intl.string(en.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.Z, {
                    className: e7.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(_.A, {
                        align: _.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(b.A, { game: null, size: b.M.SMALL, className: e7.pV }),
                            (0, i.jsx)("span", { className: e7.O, children: en.intl.string(en.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(ef, { currentUser: e }),
        ],
    });
}
function tl(e) {
    let t,
        {
            subscription: n,
            analyticsLocation: l,
            paymentSource: s,
            busy: a,
            fromStandaloneBillingPage: o,
            showInvalidPaymentMethod: u,
            showNoPaymentMethod: d,
            fetchedCurrentInvoicePreview: c,
            fetchedRenewalInvoicePreview: g,
            fetchedOpenInvoice: m,
            isPremiumGroup: A,
        } = e,
        { analyticsLocations: f } = (0, x.Ay)(p.A.SUBSCRIPTION_DETAILS),
        T = null != c ? {} : { subscriptionId: n.id, renewal: !0, analyticsLocations: f, analyticsLocation: l },
        [_] = (0, R.YV)(T);
    _ = c ?? _;
    let b =
            null != g
                ? {}
                : {
                      subscriptionId: n.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: f,
                      analyticsLocation: l,
                  },
        [N] = (0, R.YV)(b);
    N = g ?? N;
    let C = (0, I.A)(),
        y = (0, G.p)(),
        v = (0, L.nf)(),
        j = O.Ay.isBaseSubscriptionCanceled(n),
        P = (function (e, t) {
            let n = eR.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, D._w)(n, t?.id, !1),
                    l = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, D.jJ)(n.id, l, t?.id)) return !0;
            }
            return !1;
        })(n, s);
    if (null == _ || null == N) return (0, i.jsx)(E.y, {});
    let M = P ? (0, L.Bv)(N) : null,
        U = null != M || (null != v && null != v.discountId && ed.i_.includes(v.discountId)),
        V = !j && null != v && v.discountId === ed.sC,
        k = P && ((j && null != y) || (!j && U));
    return (
        (t =
            V && null != v
                ? (0, i.jsx)(eD, {
                      subscription: n,
                      invoicePreview: N,
                      paymentSource: s,
                      discountInfo: v,
                      isLoading: a,
                      analyticsLocation: l,
                  })
                : k
                  ? (0, i.jsx)(eF, {
                        subscription: n,
                        invoicePreview: N,
                        paymentSource: s,
                        discountOffer: y,
                        renewalChurnDiscountInfo: M,
                        discountInfo: v,
                        isLoading: a,
                        analyticsLocation: l,
                    })
                  : (0, i.jsx)(e3.Ay, {
                        subscription: n,
                        currentInvoicePreview: _,
                        renewalInvoicePreview: N,
                        paymentSource: s,
                        busy: a,
                        analyticsLocation: l,
                    })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e7.fj,
                    children: [
                        !A && t,
                        (0, i.jsx)(e2, {
                            subscription: n,
                            renewalInvoicePreview: _,
                            fromStandaloneBillingPage: o,
                            fractionalPremiumInfo: C,
                            analyticsLocation: l,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.n, {
                        label: en.intl.string(en.t.Sb6wI1),
                        children: (0, i.jsxs)("div", {
                            className: e7.zH,
                            children: [
                                (0, i.jsx)(tn, {
                                    subscription: n,
                                    renewalInvoicePreview: N,
                                    className: e7.g4,
                                    fractionalPremiumInfo: C,
                                    openInvoice: m,
                                }),
                                (0, i.jsx)("div", {
                                    className: r()(e7.g4, { [e7.sE]: u }),
                                    children: (0, i.jsx)(S.D, {
                                        label:
                                            n.isPurchasedExternally && null != n.paymentGateway
                                                ? en.intl.formatToPlainString(en.t["rTk9v/"], {
                                                      paymentGatewayName: eg.qmC[n.paymentGateway],
                                                  })
                                                : en.intl.string(en.t.iRzXKd),
                                        children: (0, i.jsx)(e6.A, {
                                            subscription: n,
                                            onPaymentSourceAdded: D.c_,
                                            highlightAddPaymentMethodButton: d || u,
                                            analyticsLocation: l,
                                            currentInvoicePreview: _,
                                            openInvoice: m,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
}
let ts = new Set([eg.Dmq.ACTIVE, eg.Dmq.PAST_DUE, eg.Dmq.CANCELED, eg.Dmq.PAUSE_PENDING, eg.Dmq.PAUSED]);
function tr() {
    return (
        l.useEffect(() => {
            v.default.track(eg.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: e7.oU,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e7.dk,
                    variant: "body-sm/normal",
                    children: en.intl.format(en.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(eg.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function ta(e) {
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
        { analyticsLocations: S } = (0, x.Ay)(p.A.SUBSCRIPTION_DETAILS),
        I = (0, G.p)(),
        _ = null != s ? s.slice(1) : [],
        [b, N] = l.useState(0);
    (l.useEffect(() => {
        if (g)
            return (
                f.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
                () => {
                    f.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
                }
            );
        function e(e) {
            e.subscription.id === n.id && N((e) => e + 1);
        }
    }, [n.id, g]),
        (0, T.Ay)(() => {
            function e() {
                return N((e) => e + 1);
            }
            return (
                f.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    f.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        }));
    let [v] = (0, R.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            fetchKey: b,
        }),
        [j] = (0, R.YV)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            userDiscountOfferId: I?.id,
            fetchKey: b,
        }),
        O = r?.invalid,
        D = (0, u.bG)([y.default], () => y.default.getCurrentUser()?.hasFreePremium()),
        L = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= L.diff(o()(), "days") || n.status === eg.Dmq.PAST_DUE) &&
            !D &&
            !n.isPurchasedExternally,
        k = O && n.status === eg.Dmq.PAST_DUE && !D && !n.isPurchasedExternally,
        w = (0, P.l)(),
        F = !D && w,
        B = n?.status === eg.Dmq.PAST_DUE,
        X = B ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        z = null != A && A.isPremiumGroupPrimary(),
        H = n.hasAnyPremiumGroup,
        [Y] = (0, R.C8)({ subscriptionId: n.id, preventFetch: !(F || B) });
    return null == v || null == j
        ? (0, i.jsx)(E.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, C.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(e8, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: e7.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(h.n, {
              label: en.intl.string(en.t["/gs+Pz"]),
              description: en.intl.string(en.t.D8UpUo),
              children: [
                  V ? (0, i.jsx)(e9, {}) : null,
                  k ? (0, i.jsx)(te, {}) : null,
                  F && null != Y ? (0, i.jsx)(tt, { daysPastDue: X, subscription: n, openInvoiceId: Y.id }) : null,
                  z && H && (0, i.jsx)(eb, { subscription: n, analyticsLocations: S }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: _.length > 0 ? e7.HZ : e7.__invalid_singleSubscription,
                              children: (0, i.jsx)(tl, {
                                  subscription: n,
                                  analyticsLocation: c,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: V,
                                  showInvalidPaymentMethod: k,
                                  fetchedCurrentInvoicePreview: v,
                                  fetchedRenewalInvoicePreview: j,
                                  fetchedOpenInvoice: Y,
                                  isPremiumGroup: z,
                              }),
                          }),
                          _.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: e7.HZ,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-sm/semibold",
                                              className: e7.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(tl, {
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
