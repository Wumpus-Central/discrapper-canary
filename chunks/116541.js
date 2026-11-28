n.d(t, { Sb: () => eB, TC: () => ew, GG: () => ek, Hy: () => eF, Ay: () => eX });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(536637),
    o = n.n(a),
    u = n(855986),
    c = n(646514),
    d = n(695366),
    m = n(834730),
    g = n(534514),
    A = n(993077),
    E = n(289873),
    h = n(270003),
    f = n(452027),
    p = n(73153),
    S = n(964486),
    T = n(793574),
    x = n(688810),
    I = n(531260),
    _ = n(235986),
    b = n(769015),
    y = n(778705),
    N = n(832946),
    C = n(287809),
    v = n(129230),
    j = n(975571),
    O = n(448645),
    D = n(83617),
    P = n(543767),
    R = n(526292),
    L = n(155984),
    G = n(131168),
    M = n(331322),
    U = n(805251),
    V = n(192308),
    w = n(821609),
    k = n(315629),
    F = n(158032),
    B = n(856383),
    X = n(427262),
    z = n(139665),
    H = n(473702),
    Y = n(59784),
    W = n(233317),
    K = n(622017),
    q = n(113090),
    Z = n(778712),
    Q = n(97808),
    $ = n(123292),
    J = n(950305),
    ee = n(854627),
    et = n(707328),
    en = n(792996),
    ei = n(443543);
function el(e) {
    let { user: t, isOwnUser: n, label: s, removeButton: a, isFaded: o } = e,
        { avatarSrc: u, eventHandlers: c } = (0, ee.A)({ userId: t?.id, size: Z._3.SIZE_24 }),
        d = (0, X.$3)(t),
        [g, A] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(ei.kL, { [ei.RE]: null != a }),
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [
            (0, i.jsxs)("div", {
                className: r()(ei.TT, { [ei.zj]: o }),
                children: [
                    (0, i.jsx)(Q.eu, { className: ei.my, src: u, "aria-label": d, size: Z._3.SIZE_24, ...c }),
                    (0, i.jsxs)(m.E, {
                        className: ei.Xh,
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: [d, !!n && ` (${en.intl.string(en.t.LuZzxn)})`],
                    }),
                    null != s &&
                        (0, i.jsxs)(m.E, {
                            className: ei.Pf,
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: [(0, i.jsx)("span", { className: ei.me, children: "\xb7" }), s],
                        }),
                ],
            }),
            null != a &&
                g &&
                (0, i.jsx)("div", {
                    className: ei.dM,
                    children: (0, i.jsx)($.Q, {
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
                        children: (0, i.jsx)(J.UserIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                    }),
                    (0, i.jsx)(m.E, {
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
                    children: (0, i.jsx)($.Q, {
                        textVariant: "body-sm/medium",
                        variant: "secondary",
                        text: en.intl.string(et.default.O15JWp),
                        onClick: t,
                    }),
                }),
        ],
    });
}
var ec = n(682901),
    ed = n(88001),
    em = n(652215),
    eg = n(483769),
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
                (0, i.jsx)(g.D, { variant: "nitro-xs", children: (0, ed.DP)() }),
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
                    (0, i.jsx)(g.D, { variant: "heading-xl/semibold", children: t }),
                    (0, i.jsx)(m.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)("div", { className: eA.UD, children: l }),
        ],
    });
}
function ef(e) {
    let { premiumGroupSubscriptionId: t, currentUser: l } = e;
    return (0, i.jsx)(w.$, {
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
function ep(e) {
    let { currentUser: t } = e,
        { premiumGroupMembership: n, isLoading: l } = (0, q.A)(),
        { premiumGroupMembers: s, isLoading: r } = (0, K.A)(n?.subscriptionId ?? null);
    if (r || null == s || l || null == n) return (0, i.jsx)(E.y, {});
    let a = n.subscriptionId,
        o = n.currentPeriodEnd,
        { primary: u, members: c } = s,
        { title: d, description: m } = (function () {
            if (null == n) return { title: "", description: "" };
            switch (n.subscriptionStatus) {
                case em.Dmq.CANCELED:
                    return {
                        title: en.intl.string(et.default.mCwdPj),
                        description: en.intl.format(et.default.wH9NYG, { endDate: o }),
                    };
                case em.Dmq.PAUSED:
                    return {
                        title: en.intl.string(et.default.IDyd1e),
                        description: en.intl.format(et.default["8MfYhr"], {
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
                case em.Dmq.PAST_DUE:
                case em.Dmq.ACCOUNT_HOLD:
                case em.Dmq.BILLING_RETRY:
                    return {
                        title: en.intl.string(et.default.Duq8zp),
                        description: en.intl.format(et.default["MHn/D6"], {
                            endDate: o,
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                    };
                default:
                    return {
                        title: en.intl.formatToPlainString(et.default.xiUjMF, {
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                        description: en.intl.format(et.default["2HEyqG"], {
                            primaryName: (0, X.$3)(u),
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eA.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(eE, {}),
            (0, i.jsxs)("div", {
                className: eA.wS,
                children: [
                    (0, i.jsx)(eh, {
                        title: d,
                        description: m,
                        button: (0, i.jsx)(ef, { premiumGroupSubscriptionId: a, currentUser: t }),
                    }),
                    (0, i.jsxs)(M.B, {
                        direction: "vertical",
                        padding: { left: 32, bottom: 12 },
                        gap: 0,
                        children: [
                            (0, i.jsx)(g.D, {
                                variant: "heading-xs/medium",
                                color: "text-strong",
                                className: eA.Or,
                                children: en.intl.string(et.default["oqw/KW"]),
                            }),
                            (0, i.jsx)(es, { user: u, isOwnUser: !1 }),
                            c.map((e) => (0, i.jsx)(ea, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eS(e) {
    let {
        premiumGroupMembers: t,
        isLoadingPremiumGroupMembers: n,
        canInvite: l,
        onInvite: s,
        onRemoveMember: r,
        onRemoveInvitedUser: a,
        numTotalSeats: o,
        numUsedSeats: u,
        numAvailableInvites: c,
    } = e;
    if (n || null == t) return (0, i.jsx)(E.y, {});
    let { primary: d, members: A, invitedUsers: h } = t;
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
                    (0, i.jsx)(g.D, {
                        variant: "heading-xs/medium",
                        color: "text-strong",
                        children: en.intl.string(et.default["oqw/KW"]),
                    }),
                    (0, i.jsx)(m.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: en.intl.format(et.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                    }),
                ],
            }),
            (0, i.jsx)(es, { user: d, isOwnUser: !0 }),
            A.map((e) => (0, i.jsx)(er, { user: e, onRemove: () => r(e) }, e.id)),
            h.map((e) => (0, i.jsx)(eo, { user: e, onRemove: () => a(e) }, e.id)),
            Array.from({ length: c }).map((e, t) =>
                (0, i.jsx)(eu, { onInvite: s, canInvite: l }, `seat-available-${t}`),
            ),
        ],
    });
}
function eT(e) {
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
    return (0, i.jsx)(w.$, {
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
    return (0, i.jsx)(w.$, {
        variant: "primary",
        size: "md",
        fullWidth: !0,
        text: en.intl.string(et.default.Tcmclj),
        onClick: n,
        disabled: !t,
    });
}
function eI(e) {
    let {
            subscription: t,
            analyticsLocations: s,
            isContinuationEnabled: r,
            churnUserDiscountOffer: a,
            disabled: o,
        } = e,
        u = l.useCallback(() => {
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(489361),
                    n.e(216806),
                    n.e(363094),
                    n.e(162439),
                    n.e(594161),
                    n.e(435432),
                    n.e(80347),
                    n.e(52513),
                ]).then(n.bind(n, 336888));
                return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: s });
            });
        }, [t, s]),
        c =
            r && a?.discountId === ec.Ki
                ? en.intl.formatToPlainString(eg.default.JsnZTi, { percent: a.discount.amount })
                : en.intl.string(et.default.oO0EYw);
    return (0, i.jsx)(w.$, { variant: "secondary", size: "md", fullWidth: !0, text: c, onClick: u, disabled: o });
}
function e_(e) {
    let { subscription: t, analyticsLocations: s, churnUserDiscountOffer: r } = e,
        a = l.useCallback(() => {
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(489361),
                    n.e(216806),
                    n.e(363094),
                    n.e(162439),
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
    return (0, i.jsx)(w.$, {
        variant: "secondary",
        size: "md",
        fullWidth: !0,
        text: en.intl.formatToPlainString(eg.default["eZa6K/"], { percent: r.discount.amount }),
        onClick: a,
    });
}
function eb(e) {
    let { subscription: t, analyticsLocations: s } = e,
        { premiumGroupMembers: r, isLoading: a } = (0, K.A)(t.id),
        {
            numAvailableInvites: o,
            numTotalSeats: c,
            numUsedSeats: d,
        } = (0, u.cf)([W.A], () => ({
            numAvailableInvites: W.A.getNumAvailableInvites(),
            numTotalSeats: W.A.getNumTotalSeats(),
            numUsedSeats: W.A.getNumUsedSeats(),
        })),
        { status: m } = t,
        g = (0, z.G)({ location: "PremiumGroupSubscriptionManageCard" }),
        { churnUserDiscountOffer: A } = (0, R.g5)(!g),
        E = A?.isApplied() === !0,
        h = (0, O.ki)(t),
        f = m === em.Dmq.ACTIVE && null != t.renewalMutations,
        p = g && E && (h || f);
    function S() {
        (v.default.track(em.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([n.e(768071), n.e(634508), n.e(490010), n.e(967884)]).then(
                    n.bind(n, 307399),
                );
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
            }));
    }
    let T = l.useMemo(() => !ed.BE.includes(t.status) && o > 0, [t.status, o]),
        { title: x, description: I } = (function () {
            if (p)
                return {
                    title: en.intl.string(et.default.KME8Q6),
                    description: en.intl.format(eg.default.sv43VQ, {
                        endDate: t.currentPeriodEnd,
                        premiumGroupProductName: (0, ed.DP)(),
                    }),
                };
            switch (m) {
                case em.Dmq.CANCELED:
                    return {
                        title: en.intl.string(et.default.KME8Q6),
                        description: en.intl.format(et.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                    };
                case em.Dmq.PAUSED:
                    return {
                        title: en.intl.string(et.default["4flKoC"]),
                        description: en.intl.format(et.default["Q++BmO"], { premiumGroupProductName: (0, ed.DP)() }),
                    };
                case em.Dmq.PAST_DUE:
                case em.Dmq.ACCOUNT_HOLD:
                case em.Dmq.BILLING_RETRY:
                    return {
                        title: en.intl.string(et.default.cfeFEt),
                        description: en.intl.format(et.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: ed.TE,
                        }),
                    };
                default:
                    return {
                        title: en.intl.formatToPlainString(et.default.NRCfnQ, {
                            premiumGroupProductName: (0, ed.DP)(),
                        }),
                        description: en.intl.format(et.default.lvnrnb, {
                            totalSeats: 5,
                            premiumGroupProductName: (0, ed.DP)(),
                            helpCenterLink: ed.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
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
                            if (h && !g) return (0, i.jsx)(eT, { subscription: t, analyticsLocations: s });
                            if (p) return (0, i.jsx)(eT, { subscription: t, analyticsLocations: s, disabled: !0 });
                            let e = h && A?.discountId === ec.Ki;
                            return (0, i.jsxs)(M.B, {
                                direction: "vertical",
                                gap: 12,
                                children: [
                                    (0, i.jsx)(ex, { canInvite: T, onInvite: S }),
                                    e
                                        ? (0, i.jsx)(e_, {
                                              subscription: t,
                                              analyticsLocations: s,
                                              churnUserDiscountOffer: A,
                                          })
                                        : (0, i.jsx)(eI, {
                                              subscription: t,
                                              analyticsLocations: s,
                                              isContinuationEnabled: g,
                                              churnUserDiscountOffer: A,
                                              disabled: h,
                                          }),
                                ],
                            });
                        })(),
                    }),
                    (0, i.jsx)(eS, {
                        premiumGroupMembers: r,
                        isLoadingPremiumGroupMembers: a,
                        canInvite: T,
                        onInvite: S,
                        onRemoveMember: function (e) {
                            (v.default.track(em.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                subscription_id: t.id,
                                member_user_id: e.id,
                            }),
                                (0, V.mM)(async () => {
                                    let { default: l } = await n.e(521305).then(n.bind(n, 391040));
                                    return (n) => (0, i.jsx)(l, { ...n, subscriptionId: t.id, member: e });
                                }));
                        },
                        onRemoveInvitedUser: function (e) {
                            v.default.track(em.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
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
                        numTotalSeats: c,
                        numUsedSeats: d,
                        numAvailableInvites: o,
                    }),
                ],
            }),
        ],
    });
}
var ey = n(615029),
    eN = n(947418),
    eC = n(687944),
    ev = n(972710),
    ej = n(358787),
    eO = n(621031),
    eD = n(28863),
    eP = n(109681);
function eR(e) {
    let { subscription: t, renewalMutations: l, className: s, analyticsLocation: a } = e,
        o = (0, I.A)(),
        { analyticsLocations: u } = (0, x.Ay)(),
        c = (0, O.Zb)(t.planId),
        m = (0, z.G)({ location: "SubscriptionRenewalMutationNotice", autoTrackExposure: c }),
        g = t.currentPeriodEnd;
    return (
        o.fractionalState === ec.xc.FP_SUB_PAUSED && (g = o.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(eP.zr, s),
            children: [
                (0, i.jsx)(d.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: eP.G,
                }),
                (0, i.jsx)("div", {
                    className: eP.Qq,
                    children: en.intl.format(en.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(l) : O.Ay.getDisplayName(l.planId),
                        date: g,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(eD.Anchor, {
                          onClick: (e) => {
                              (e.preventDefault(),
                                  c && m
                                      ? (0, V.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(489361),
                                                n.e(216806),
                                                n.e(363094),
                                                n.e(162439),
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
                          className: eP.Lu,
                          children: en.intl.string(en.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eL = n(72536);
function eG() {
    return (
        l.useEffect(() => {
            v.default.track(em.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eL.Zz,
            children: [
                (0, i.jsx)(d.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eL.Sh,
                    color: c.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(m.E, { className: eL.Cy, variant: "body-sm/normal", children: en.intl.string(en.t.xFHEMa) }),
            ],
        })
    );
}
function eM() {
    return (
        l.useEffect(() => {
            v.default.track(em.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eL.Zz,
            children: [
                (0, i.jsx)(d.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eL.Sh,
                    color: c.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(m.E, {
                    className: eL.Cy,
                    variant: "body-sm/normal",
                    children: en.intl.string(en.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function eU(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(T.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        l.useEffect(() => {
            v.default.track(em.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eL.Zz,
            children: [
                (0, i.jsx)(d.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eL.Sh,
                    color: c.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(m.E, {
                    className: eL.Cy,
                    variant: "body-sm/normal",
                    children: en.intl.format(en.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, y.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: s, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function eV(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: l, className: s, fractionalPremiumInfo: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(eL.KF, s),
        children: [
            (0, i.jsx)(g.D, {
                variant: "heading-sm/semibold",
                className: eL.QL,
                children: en.intl.string(en.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, l, !1, a) }),
        ],
    });
}
function ew() {
    let e = (0, u.bG)([C.default], () => C.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(g.D, {
                variant: "heading-lg/semibold",
                className: eL.Gf,
                children: en.intl.string(en.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: eL.yV, children: en.intl.string(en.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.Z, {
                    className: eL.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(_.A, {
                        align: _.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(b.A, { game: null, size: b.M.SMALL, className: eL.pV }),
                            (0, i.jsx)("span", { className: eL.O, children: en.intl.string(en.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(ep, { currentUser: e }),
        ],
    });
}
function ek(e) {
    let t,
        {
            subscription: n,
            analyticsLocation: l,
            paymentSource: s,
            busy: a,
            fromStandaloneBillingPage: o,
            showInvalidPaymentMethod: u,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: m,
            fetchedOpenInvoice: g,
            isPremiumGroup: A,
        } = e,
        { analyticsLocations: p } = (0, x.Ay)(T.A.SUBSCRIPTION_DETAILS),
        S = null != d ? {} : { subscriptionId: n.id, renewal: !0, analyticsLocations: p, analyticsLocation: l },
        [_] = (0, P.YV)(S);
    _ = d ?? _;
    let b =
            null != m
                ? {}
                : {
                      subscriptionId: n.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: p,
                      analyticsLocation: l,
                  },
        [y] = (0, P.YV)(b);
    y = m ?? y;
    let N = (0, I.A)(),
        C = (0, G.p)(),
        v = (0, R.nf)(),
        j = O.Ay.isBaseSubscriptionCanceled(n),
        L = (0, eN.v)(n, s);
    if (null == _ || null == y) return (0, i.jsx)(E.y, {});
    let M = L ? (0, R.Bv)(y) : null,
        U = null != M || (null != v && null != v.discountId && ec.i_.includes(v.discountId)),
        V = !j && null != v && v.discountId === ec.sC,
        w = L && ((j && null != C) || (!j && U));
    return (
        (t =
            V && null != v
                ? (0, i.jsx)(ey.A, {
                      subscription: n,
                      invoicePreview: y,
                      paymentSource: s,
                      discountInfo: v,
                      isLoading: a,
                      analyticsLocation: l,
                  })
                : w
                  ? (0, i.jsx)(eC.A, {
                        subscription: n,
                        invoicePreview: y,
                        paymentSource: s,
                        discountOffer: C,
                        renewalChurnDiscountInfo: M,
                        discountInfo: v,
                        isLoading: a,
                        analyticsLocation: l,
                    })
                  : (0, i.jsx)(ej.Ay, {
                        subscription: n,
                        currentInvoicePreview: _,
                        renewalInvoicePreview: y,
                        paymentSource: s,
                        busy: a,
                        analyticsLocation: l,
                    })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eL.fj,
                    children: [
                        !A && t,
                        (0, i.jsx)(ev.C, {
                            subscription: n,
                            renewalInvoicePreview: _,
                            fromStandaloneBillingPage: o,
                            fractionalPremiumInfo: N,
                            analyticsLocation: l,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.n, {
                        label: en.intl.string(en.t.Sb6wI1),
                        children: (0, i.jsxs)("div", {
                            className: eL.zH,
                            children: [
                                (0, i.jsx)(eV, {
                                    subscription: n,
                                    renewalInvoicePreview: y,
                                    className: eL.g4,
                                    fractionalPremiumInfo: N,
                                    openInvoice: g,
                                }),
                                (0, i.jsx)("div", {
                                    className: r()(eL.g4, { [eL.sE]: u }),
                                    children: (0, i.jsx)(f.D, {
                                        label:
                                            n.isPurchasedExternally && null != n.paymentGateway
                                                ? en.intl.formatToPlainString(en.t["rTk9v/"], {
                                                      paymentGatewayName: em.qmC[n.paymentGateway],
                                                  })
                                                : en.intl.string(en.t.iRzXKd),
                                        children: (0, i.jsx)(eO.A, {
                                            subscription: n,
                                            onPaymentSourceAdded: D.c_,
                                            highlightAddPaymentMethodButton: c || u,
                                            analyticsLocation: l,
                                            currentInvoicePreview: _,
                                            openInvoice: g,
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
let eF = new Set([em.Dmq.ACTIVE, em.Dmq.PAST_DUE, em.Dmq.CANCELED, em.Dmq.PAUSE_PENDING, em.Dmq.PAUSED]);
function eB() {
    return (
        l.useEffect(() => {
            v.default.track(em.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: eL.oU,
            children: [
                (0, i.jsx)(d.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: c.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(m.E, {
                    className: eL.dk,
                    variant: "body-sm/normal",
                    children: en.intl.format(en.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(em.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function eX(e) {
    let t,
        {
            subscription: n,
            subscriptions: s,
            paymentSource: r,
            busy: a,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: d,
            shouldRefetchInvoicesOnSubscriptionUpdate: m,
        } = e;
    null != s && null != s[0] && (n = s[0]);
    let A = (0, u.bG)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: f } = (0, x.Ay)(T.A.SUBSCRIPTION_DETAILS),
        I = (0, G.p)(),
        _ = null != s ? s.slice(1) : [],
        [b, y] = l.useState(0);
    (l.useEffect(() => {
        if (m)
            return (
                p.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
                () => {
                    p.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
                }
            );
        function e(e) {
            e.subscription.id === n.id && y((e) => e + 1);
        }
    }, [n.id, m]),
        (0, S.Ay)(() => {
            function e() {
                return y((e) => e + 1);
            }
            return (
                p.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    p.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        }));
    let [v] = (0, P.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: f,
            analyticsLocation: d,
            fetchKey: b,
        }),
        [j] = (0, P.YV)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: f,
            analyticsLocation: d,
            userDiscountOfferId: I?.id,
            fetchKey: b,
        }),
        O = r?.invalid,
        D = (0, u.bG)([C.default], () => C.default.getCurrentUser()?.hasFreePremium()),
        R = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= R.diff(o()(), "days") || n.status === em.Dmq.PAST_DUE) &&
            !D &&
            !n.isPurchasedExternally,
        w = O && n.status === em.Dmq.PAST_DUE && !D && !n.isPurchasedExternally,
        k = (0, L.l)(),
        F = !D && k,
        B = n?.status === em.Dmq.PAST_DUE,
        X = B ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        z = null != A && A.isPremiumGroupPrimary(),
        H = n.hasAnyPremiumGroup,
        [Y] = (0, P.C8)({ subscriptionId: n.id, preventFetch: !(F || B) });
    return null == v || null == j
        ? (0, i.jsx)(E.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, N.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(eR, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: eL.Il,
                  analyticsLocation: d,
              })),
          (0, i.jsxs)(h.n, {
              label: en.intl.string(en.t["/gs+Pz"]),
              description: en.intl.string(en.t.D8UpUo),
              children: [
                  V ? (0, i.jsx)(eG, {}) : null,
                  w ? (0, i.jsx)(eM, {}) : null,
                  F && null != Y ? (0, i.jsx)(eU, { daysPastDue: X, subscription: n, openInvoiceId: Y.id }) : null,
                  z && H && (0, i.jsx)(eb, { subscription: n, analyticsLocations: f }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: _.length > 0 ? eL.HZ : eL.__invalid_singleSubscription,
                              children: (0, i.jsx)(ek, {
                                  subscription: n,
                                  analyticsLocation: d,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: V,
                                  showInvalidPaymentMethod: w,
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
                                      className: eL.HZ,
                                      children: [
                                          (0, i.jsx)(g.D, {
                                              variant: "heading-sm/semibold",
                                              className: eL.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(ek, {
                                              subscription: e,
                                              analyticsLocation: d,
                                              paymentSource: r,
                                              busy: a,
                                              fromStandaloneBillingPage: c,
                                              showNoPaymentMethod: V,
                                              showInvalidPaymentMethod: w,
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
