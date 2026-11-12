n.d(t, { Sb: () => e9, TC: () => e6, Hy: () => e7, Ay: () => te });
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
    T = n(73153),
    f = n(964486),
    p = n(793574),
    x = n(688810),
    I = n(531260),
    _ = n(235986),
    N = n(769015),
    b = n(778705),
    C = n(832946),
    y = n(287809),
    v = n(129230),
    j = n(975571),
    O = n(448645),
    R = n(83617),
    D = n(543767),
    L = n(526292),
    P = n(155984),
    G = n(131168),
    M = n(331322),
    U = n(805251),
    V = n(192308),
    k = n(315629),
    w = n(821609),
    F = n(158032),
    B = n(856383),
    X = n(427262),
    z = n(59784),
    H = n(233317),
    Y = n(622017),
    W = n(113090),
    K = n(778712),
    Z = n(97808),
    q = n(123292),
    Q = n(950305),
    J = n(854627),
    $ = n(107198),
    ee = n(792996),
    et = n(443543);
function en(e) {
    let { user: t, isOwnUser: n, label: s, removeButton: a, isFaded: o } = e,
        { avatarSrc: u, eventHandlers: d } = (0, J.A)({ userId: t?.id, size: K._3.SIZE_24 }),
        c = (0, X.$3)(t),
        [m, A] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(et.kL, { [et.RE]: null != a }),
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [
            (0, i.jsxs)("div", {
                className: r()(et.TT, { [et.zj]: o }),
                children: [
                    (0, i.jsx)(Z.eu, { className: et.my, src: u, "aria-label": c, size: K._3.SIZE_24, ...d }),
                    (0, i.jsxs)(g.E, {
                        className: et.Xh,
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: [c, !!n && ` (${ee.intl.string(ee.t.LuZzxn)})`],
                    }),
                    null != s &&
                        (0, i.jsxs)(g.E, {
                            className: et.Pf,
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: [(0, i.jsx)("span", { className: et.me, children: "\xb7" }), s],
                        }),
                ],
            }),
            null != a &&
                m &&
                (0, i.jsx)("div", {
                    className: et.dM,
                    children: (0, i.jsx)(q.Q, {
                        textVariant: "body-sm/medium",
                        variant: "secondary",
                        text: a.label,
                        onClick: a.onRemove,
                    }),
                }),
        ],
    });
}
function ei(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(en, { user: t, isOwnUser: n, label: ee.intl.string($.default.vc2xys) });
}
function el(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(en, {
        user: t,
        label: ee.intl.string($.default.mnt50A),
        removeButton: { onRemove: n, label: ee.intl.string(ee.t.N86XcP) },
    });
}
function es(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(en, { user: t, isOwnUser: n, label: ee.intl.string($.default.mnt50A) });
}
function er(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(en, {
        user: t,
        label: ee.intl.string($.default["1RH5t9"]),
        isFaded: !0,
        removeButton: { onRemove: n, label: ee.intl.string($.default["2blqtw"]) },
    });
}
function ea(e) {
    let { onInvite: t, canInvite: n } = e,
        [s, a] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(et.kL, { [et.RE]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, i.jsxs)("div", {
                className: et.TT,
                children: [
                    (0, i.jsx)("div", {
                        className: r()(et.vG, et.my),
                        children: (0, i.jsx)(Q.UserIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                    }),
                    (0, i.jsx)(g.E, {
                        className: et.Xh,
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: ee.intl.string($.default["/x7DVG"]),
                    }),
                ],
            }),
            s &&
                n &&
                (0, i.jsx)("div", {
                    className: et.dM,
                    children: (0, i.jsx)(q.Q, {
                        textVariant: "body-sm/medium",
                        variant: "secondary",
                        text: ee.intl.string($.default.O15JWp),
                        onClick: t,
                    }),
                }),
        ],
    });
}
var eo = n(88001),
    eu = n(652215),
    ed = n(285613);
function ec() {
    return (0, i.jsx)(M.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 10,
        padding: { top: 12, bottom: 12 },
        className: ed.wx,
        children: (0, i.jsxs)(M.B, {
            direction: "horizontal",
            align: "center",
            gap: 10,
            children: [
                (0, i.jsx)(m.D, { variant: "nitro-xs", children: (0, eo.DP)() }),
                (0, i.jsx)(U.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    });
}
function eg(e) {
    let { title: t, description: n, button: l } = e;
    return (0, i.jsxs)("div", {
        className: ed.bh,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 8,
                className: ed.iQ,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                    (0, i.jsx)(g.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)("div", { className: ed.UD, children: l }),
        ],
    });
}
function em(e) {
    let { currentUser: t } = e,
        { premiumGroupMembership: l, isLoading: s } = (0, W.A)(),
        { premiumGroupMembers: r, isLoading: a } = (0, Y.A)(l?.subscriptionId ?? null);
    if (a || null == r || s || null == l) return (0, i.jsx)(E.y, {});
    let o = l.subscriptionId,
        u = l.currentPeriodEnd,
        { primary: d, members: c } = r,
        { title: g, description: A } = (function () {
            if (null == l) return { title: "", description: "" };
            switch (l.subscriptionStatus) {
                case eu.Dmq.CANCELED:
                    return {
                        title: ee.intl.string($.default.mCwdPj),
                        description: ee.intl.format($.default.wH9NYG, { endDate: u }),
                    };
                case eu.Dmq.PAUSED:
                    return {
                        title: ee.intl.string($.default.IDyd1e),
                        description: ee.intl.format($.default["8MfYhr"], {
                            premiumGroupProductName: (0, eo.DP)(),
                            helpCenterLink: eo.TE,
                        }),
                    };
                case eu.Dmq.PAST_DUE:
                case eu.Dmq.ACCOUNT_HOLD:
                case eu.Dmq.BILLING_RETRY:
                    return {
                        title: ee.intl.string($.default.Duq8zp),
                        description: ee.intl.format($.default["MHn/D6"], {
                            endDate: u,
                            premiumGroupProductName: (0, eo.DP)(),
                        }),
                    };
                default:
                    return {
                        title: ee.intl.formatToPlainString($.default.xiUjMF, { premiumGroupProductName: (0, eo.DP)() }),
                        description: ee.intl.format($.default["2HEyqG"], {
                            primaryName: (0, X.$3)(d),
                            premiumGroupProductName: (0, eo.DP)(),
                            helpCenterLink: eo.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: ed.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(ec, {}),
            (0, i.jsxs)("div", {
                className: ed.wS,
                children: [
                    (0, i.jsx)(eg, {
                        title: g,
                        description: A,
                        button: (0, i.jsx)(w.$, {
                            variant: "secondary",
                            text: ee.intl.string($.default.NCu2JD),
                            onClick: function () {
                                (0, V.mM)(async () => {
                                    let { default: e } = await n.e(392796).then(n.bind(n, 205463));
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
                                variant: "heading-xs/medium",
                                color: "text-strong",
                                className: ed.Or,
                                children: ee.intl.string($.default["oqw/KW"]),
                            }),
                            (0, i.jsx)(ei, { user: d, isOwnUser: !1 }),
                            c.map((e) => (0, i.jsx)(es, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
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
                        children: ee.intl.string($.default["oqw/KW"]),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: ee.intl.format($.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                    }),
                ],
            }),
            (0, i.jsx)(ei, { user: c, isOwnUser: !0 }),
            A.map((e) => (0, i.jsx)(el, { user: e, onRemove: () => r(e) }, e.id)),
            h.map((e) => (0, i.jsx)(er, { user: e, onRemove: () => a(e) }, e.id)),
            Array.from({ length: d }).map((e, t) =>
                (0, i.jsx)(ea, { onInvite: s, canInvite: l }, `seat-available-${t}`),
            ),
        ],
    });
}
function eE(e) {
    let { subscription: t, analyticsLocations: s } = e,
        { premiumGroupMembers: r, isLoading: a } = (0, Y.A)(t.id),
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
        E = l.useCallback(() => {
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
        h = l.useCallback(async () => {
            m(!0);
            try {
                await (0, F.Ir)(t, s);
            } catch (e) {
                B.A.captureException(e, { extra: { subscriptionId: t.id } });
            } finally {
                m(!1);
            }
        }, [t, s]);
    function S() {
        (v.default.track(eu.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
            (0, V.mM)(async () => {
                let { default: e } = await Promise.all([n.e(768071), n.e(634508), n.e(490010), n.e(967884)]).then(
                    n.bind(n, 307399),
                );
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
            }));
    }
    let T = l.useMemo(() => !eo.BE.includes(t.status) && o > 0, [t.status, o]),
        { title: f, description: p } = (function () {
            switch (A) {
                case eu.Dmq.CANCELED:
                    return {
                        title: ee.intl.string($.default.KME8Q6),
                        description: ee.intl.format($.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, eo.DP)(),
                        }),
                    };
                case eu.Dmq.PAUSED:
                    return {
                        title: ee.intl.string($.default["4flKoC"]),
                        description: ee.intl.format($.default["Q++BmO"], { premiumGroupProductName: (0, eo.DP)() }),
                    };
                case eu.Dmq.PAST_DUE:
                case eu.Dmq.ACCOUNT_HOLD:
                case eu.Dmq.BILLING_RETRY:
                    return {
                        title: ee.intl.string($.default.cfeFEt),
                        description: ee.intl.format($.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: eo.TE,
                        }),
                    };
                default:
                    return {
                        title: ee.intl.formatToPlainString($.default.NRCfnQ, { premiumGroupProductName: (0, eo.DP)() }),
                        description: ee.intl.format($.default.lvnrnb, {
                            totalSeats: 5,
                            premiumGroupProductName: (0, eo.DP)(),
                            helpCenterLink: eo.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: ed.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(ec, {}),
            (0, i.jsxs)("div", {
                className: ed.wS,
                children: [
                    (0, i.jsx)(eg, {
                        title: f,
                        description: p,
                        button: (0, O.ki)(t)
                            ? (0, i.jsx)(w.$, {
                                  variant: "expressive",
                                  size: "md",
                                  text: ee.intl.string($.default.EFTJMQ),
                                  onClick: h,
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
                                          text: ee.intl.string($.default.Tcmclj),
                                          onClick: S,
                                          disabled: !T,
                                      }),
                                      (0, i.jsx)(w.$, {
                                          variant: "secondary",
                                          size: "md",
                                          fullWidth: !0,
                                          text: ee.intl.string($.default.oO0EYw),
                                          onClick: E,
                                      }),
                                  ],
                              }),
                    }),
                    (0, i.jsx)(eA, {
                        premiumGroupMembers: r,
                        isLoadingPremiumGroupMembers: a,
                        canInvite: T,
                        onInvite: S,
                        onRemoveMember: function (e) {
                            (v.default.track(eu.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                subscription_id: t.id,
                                member_user_id: e.id,
                            }),
                                (0, V.mM)(async () => {
                                    let { default: l } = await n.e(521305).then(n.bind(n, 391040));
                                    return (n) => (0, i.jsx)(l, { ...n, subscriptionId: t.id, member: e });
                                }));
                        },
                        onRemoveInvitedUser: function (e) {
                            v.default.track(eu.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                subscription_id: t.id,
                                invited_user_id: e.id,
                            });
                            let l = z.A.getInviteByUserId(e.id)?.invite;
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
var eh = n(866665),
    eS = n(392943),
    eT = n(580630),
    ef = n(682901),
    ep = n(267023);
let ex = { page: eu.liQ.USER_SETTINGS, section: eu.JJy.SETTINGS_PREMIUM, object: eu.ZSU.CARD };
function eI(e) {
    let { premiumSubscription: t, discountInfo: n } = e;
    if (null == n.duration || null == n.percentage) return null;
    let l = (0, O.y8)(ef.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        s = (0, eT.$g)(l.amount, l.currency),
        r = Math.round(l.amount * (1 - n.percentage / 100)),
        a = (0, eT.$g)(r, l.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: ee.intl.string(ee.t["53BCd6"]),
            }),
            (0, i.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: ee.intl.format(ee.t.N43FMx, {
                    numMonths: n.duration,
                    discountedPrice: a,
                    billingPeriod: ee.intl.string(ee.t.FPybU7),
                    fullPrice: s,
                }),
            }),
        ],
    });
}
let e_ = function (e) {
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
                : ee.intl.formatToPlainString(ee.t.u8bQ1q, { expiryDate: new Date(t) });
    return (0, i.jsx)("div", {
        className: ep.b8,
        children: (0, i.jsx)(k.h, {
            color: "nitro-pink",
            className: ep.YL,
            children: (0, i.jsxs)("div", {
                className: ep.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: ep.Gp,
                        children: [
                            (0, i.jsx)(eS.A, {
                                color: "currentcolor",
                                className: ep.Ss,
                                "aria-label": ee.intl.string(ee.t.lpNrPu),
                            }),
                            (0, i.jsx)(g.E, {
                                className: ep.Sd,
                                variant: "body-sm/medium",
                                color: "text-strong",
                                children: A,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ep.yF }),
                    (0, i.jsxs)("div", {
                        className: ep.IH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ep.Tm,
                                children: [
                                    (0, i.jsx)(eI, { premiumSubscription: l, discountInfo: a }),
                                    (0, i.jsx)("div", {
                                        className: ep.Xc,
                                        children: (0, i.jsxs)("div", {
                                            className: ep.qK,
                                            children: [
                                                (0, i.jsx)(eh.m, {
                                                    text: m,
                                                    shouldShow: c && null != m,
                                                    asContainer: !0,
                                                    children: (0, i.jsx)(w.$, {
                                                        variant: "expressive",
                                                        disabled: c,
                                                        text: ee.intl.string(ee.t["dylp/7"]),
                                                        size: "md",
                                                        onClick: () => {
                                                            (0, b.A)({
                                                                analyticsLocations: u,
                                                                analyticsLocation: o,
                                                                analyticsObject: ex,
                                                                subscription: l,
                                                            });
                                                        },
                                                    }),
                                                }),
                                                (0, i.jsx)(w.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    text: ee.intl.string(ee.t["ETE/oC"]),
                                                    loading: r,
                                                    onClick: function () {
                                                        l.status !== eu.Dmq.CANCELED &&
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
                                className: ep._e,
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
var eN = n(97352),
    eb = n(403581),
    eC = n(511484),
    ey = n(811611),
    ev = n(473702),
    ej = n(858432),
    eO = n(398932);
let eR = { page: eu.liQ.USER_SETTINGS, section: eu.JJy.SETTINGS_PREMIUM, object: eu.ZSU.CARD };
function eD(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: l, isDiscountActive: s } = e,
        r = O.Ay.getPlanIdFromInvoice(t, l),
        a = eN.A.get(r);
    if (null == a || null == l || null == n || null == n.duration || null == n.percentage) return null;
    let o = l.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, eT.$g)(o.amount, l.currency),
        d = (0, O.y8)(ef.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, eT.$g)(d.amount, d.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: ee.intl.format(ee.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: s
                    ? ee.intl.format(ee.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: c })
                    : ee.intl.format(ee.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: ee.intl.string(ee.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function eL(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        l = (0, eC.tQ)(n, ef.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: ee.intl.format(ee.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: ee.intl.format(ee.t["PH7Q+R"], {
                    numMonths: t.discount.intervalCount,
                    discountedPrice: l,
                    billingPeriod: (0, O.Ke)(t.discount.intervalType),
                }),
            }),
        ],
    });
}
let eP = function (e) {
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
        t.status !== eu.Dmq.CANCELED && m();
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
        E = (0, ey.ux)(u?.expiresAt?.toISOString());
    return (0, C.m1)(A)
        ? null
        : (0, i.jsx)("div", {
              className: ej.S6,
              children: (0, i.jsx)(k.h, {
                  color: "nitro-pink",
                  className: ej.YL,
                  children: (0, i.jsxs)("div", {
                      className: ej.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ej.Gp,
                              children: [
                                  (0, i.jsx)(eS.A, {
                                      color: "currentcolor",
                                      className: ej.fJ,
                                      "aria-label": ee.intl.string(ee.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      className: ej.tD,
                                      variant: "body-sm/medium",
                                      color: "text-strong",
                                      children: null != u && E,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: ej.T }),
                          (0, i.jsxs)("div", {
                              className: ej.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ej.Yc,
                                      children: [
                                          null != u
                                              ? (0, i.jsx)(eL, { discountOffer: u, premiumSubscription: t })
                                              : (0, i.jsx)(eD, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: l,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: ej.e_,
                                              children: (function () {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      n = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, i.jsxs)("div", {
                                                          className: ej.qK,
                                                          children: [
                                                              (0, i.jsx)(eh.m, {
                                                                  text: n,
                                                                  shouldShow: e && null != n,
                                                                  asContainer: !0,
                                                                  children: (0, i.jsx)(w.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: ee.intl.string(ee.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, b.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: eR,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, i.jsx)(w.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: ee.intl.string(ee.t["ETE/oC"]),
                                                                  loading: s,
                                                                  onClick: c,
                                                              }),
                                                          ],
                                                      });
                                                  {
                                                      let e =
                                                          null != u
                                                              ? ee.intl.format(ee.t.XIVblY, {
                                                                    percent: u.discount.amount,
                                                                })
                                                              : ee.intl.string(ee.t.zrCzVB);
                                                      return (0, i.jsx)(w.$, {
                                                          variant: "expressive",
                                                          icon: eb.NitroWheelIcon,
                                                          size: "md",
                                                          text: e,
                                                          loading: s,
                                                          onClick: () => m(ev.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: ej.Hp, src: eO.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eG = n(284009),
    eM = n.n(eG),
    eU = n(607399),
    eV = n(189213),
    ek = n(683071),
    ew = n(701273),
    eF = n(669815),
    eB = n(780964),
    eX = n(766075),
    ez = n(327479),
    eH = n(601107),
    eY = n(583690);
let eW = [eu.Dmq.PAST_DUE, eu.Dmq.ACCOUNT_HOLD, eu.Dmq.BILLING_RETRY],
    eK = (e) => {
        let { transitionState: t, onClose: n, subscription: s, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = l.useState(!1),
            [d, c] = l.useState(!1);
        l.useEffect(() => {
            v.default.track(eu.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: s.id,
                location_stack: r,
            });
        }, []);
        let g = [
            { text: ee.intl.string(ee.t.oEAioF), onClick: () => n(), variant: "secondary" },
            {
                text: ee.intl.string(ee.t["cY+Oob"]),
                onClick: () =>
                    (async function () {
                        (u(!0), c(!1));
                        try {
                            (await (0, eF.M2)(s.id, r, a),
                                v.default.track(eu.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                                    subscription_id: s.id,
                                    location_stack: r,
                                }),
                                (0, eF.hP)(),
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
        return (0, i.jsx)(eV.a, {
            size: "md",
            transitionState: t,
            title: ee.intl.string(ee.t.LZunzZ),
            subtitle: ee.intl.string(ee.t.FClXh9),
            actions: g,
            onClose: async () => n(),
            children: d
                ? (0, i.jsx)(ek.w, { type: "critical", message: ee.intl.string(ee.t["5mlOCW"]), role: "alert" })
                : null,
        });
    };
function eZ(e) {
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
            return (eM()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e);
        }),
        { analyticsLocations: c } = (0, x.Ay)(p.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(n.additionalPlans)) return null;
    let { status: m } = n,
        A = (0, O.$k)(n),
        E = !A && n.isBoostOnly && eW.includes(n.status);
    if (A) t = eY.v2;
    else
        switch (m) {
            case eu.Dmq.PAST_DUE:
            case eu.Dmq.ACCOUNT_HOLD:
            case eu.Dmq.BILLING_RETRY:
                t = eY.P7;
                break;
            case eu.Dmq.PAUSE_PENDING:
            case eu.Dmq.PAUSED:
                t = n.pauseReason !== eH.qf.FRACTIONAL_PREMIUM ? eY.C7 : eY.wG;
                break;
            default:
                t = eY.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(t, eY.Qn),
                children: [
                    (0, i.jsx)("div", { className: eY.Kq }),
                    (0, i.jsx)("div", { className: eY.OL }),
                    (0, i.jsxs)("div", {
                        className: eY.eC,
                        children: [
                            (0, i.jsx)("div", { className: r()(eY.Ab, { [eY.aD]: A }) }),
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
                            className: eY.BQ,
                            children: [
                                E &&
                                    (0, i.jsx)("div", {
                                        className: eY.x7,
                                        children: (0, i.jsx)(q.Q, {
                                            variant: "always-white",
                                            onClick: function () {
                                                eW.includes(n.status) &&
                                                    (0, V.mM)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(eK, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: ee.intl.string(ee.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(ez.A, {
                                    onClick: () => (0, eX.openUserSettings)(eB.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: ee.intl.string(ee.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, i.jsx)(g.E, {
                    className: eY.yW,
                    variant: "body-sm/normal",
                    children: ee.intl.format(eU.Fr ? ee.t.uxYBEa : ee.t.k6haR9, {
                        openAppHook: () => (0, ew.A)("app"),
                    }),
                }),
        ],
    });
}
var eq = n(358787),
    eQ = n(590885),
    eJ = n(28863),
    e$ = n(109681);
function e0(e) {
    let { subscription: t, renewalMutations: l, className: s, analyticsLocation: a } = e,
        o = (0, I.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === ef.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(e$.zr, s),
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: e$.G,
                }),
                (0, i.jsx)("div", {
                    className: e$.Qq,
                    children: ee.intl.format(ee.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(l) : O.Ay.getDisplayName(l.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(eJ.Anchor, {
                          onClick: (e) => {
                              (e.preventDefault(),
                                  (0, V.mM)(async () => {
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
                          className: e$.Lu,
                          children: ee.intl.string(ee.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var e1 = n(72536);
function e2() {
    return (
        l.useEffect(() => {
            v.default.track(eu.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.Zz,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e1.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, { className: e1.Cy, variant: "body-sm/normal", children: ee.intl.string(ee.t.xFHEMa) }),
            ],
        })
    );
}
function e3() {
    return (
        l.useEffect(() => {
            v.default.track(eu.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.Zz,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e1.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e1.Cy,
                    variant: "body-sm/normal",
                    children: ee.intl.string(ee.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function e5(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(p.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        l.useEffect(() => {
            v.default.track(eu.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.Zz,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e1.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e1.Cy,
                    variant: "body-sm/normal",
                    children: ee.intl.format(ee.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, b.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: s, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function e4(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: l, className: s, fractionalPremiumInfo: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(e1.KF, s),
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-sm/semibold",
                className: e1.QL,
                children: ee.intl.string(ee.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, l, !1, a) }),
        ],
    });
}
function e6() {
    let e = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: e1.Gf,
                children: ee.intl.string(ee.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: e1.yV, children: ee.intl.string(ee.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.Z, {
                    className: e1.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(_.A, {
                        align: _.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(N.A, { game: null, size: N.M.SMALL, className: e1.pV }),
                            (0, i.jsx)("span", { className: e1.O, children: ee.intl.string(ee.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(em, { currentUser: e }),
        ],
    });
}
function e8(e) {
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
        { analyticsLocations: T } = (0, x.Ay)(p.A.SUBSCRIPTION_DETAILS),
        f = null != c ? {} : { subscriptionId: n.id, renewal: !0, analyticsLocations: T, analyticsLocation: l },
        [_] = (0, D.YV)(f);
    _ = c ?? _;
    let N =
            null != g
                ? {}
                : {
                      subscriptionId: n.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: T,
                      analyticsLocation: l,
                  },
        [b] = (0, D.YV)(N);
    b = g ?? b;
    let C = (0, I.A)(),
        y = (0, G.p)(),
        v = (0, L.nf)(),
        j = O.Ay.isBaseSubscriptionCanceled(n),
        P = (function (e, t) {
            let n = eN.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, R._w)(n, t?.id, !1),
                    l = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, R.jJ)(n.id, l, t?.id)) return !0;
            }
            return !1;
        })(n, s);
    if (null == _ || null == b) return (0, i.jsx)(E.y, {});
    let M = P ? (0, L.Bv)(b) : null,
        U = null != M || (null != v && null != v.discountId && ef.i_.includes(v.discountId)),
        V = !j && null != v && v.discountId === ef.sC,
        k = P && ((j && null != y) || (!j && U));
    return (
        (t =
            V && null != v
                ? (0, i.jsx)(e_, {
                      subscription: n,
                      invoicePreview: b,
                      paymentSource: s,
                      discountInfo: v,
                      isLoading: a,
                      analyticsLocation: l,
                  })
                : k
                  ? (0, i.jsx)(eP, {
                        subscription: n,
                        invoicePreview: b,
                        paymentSource: s,
                        discountOffer: y,
                        renewalChurnDiscountInfo: M,
                        discountInfo: v,
                        isLoading: a,
                        analyticsLocation: l,
                    })
                  : (0, i.jsx)(eq.Ay, {
                        subscription: n,
                        currentInvoicePreview: _,
                        renewalInvoicePreview: b,
                        paymentSource: s,
                        busy: a,
                        analyticsLocation: l,
                    })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e1.fj,
                    children: [
                        !A && t,
                        (0, i.jsx)(eZ, {
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
                        label: ee.intl.string(ee.t.Sb6wI1),
                        children: (0, i.jsxs)("div", {
                            className: e1.zH,
                            children: [
                                (0, i.jsx)(e4, {
                                    subscription: n,
                                    renewalInvoicePreview: b,
                                    className: e1.g4,
                                    fractionalPremiumInfo: C,
                                    openInvoice: m,
                                }),
                                (0, i.jsx)("div", {
                                    className: r()(e1.g4, { [e1.sE]: u }),
                                    children: (0, i.jsx)(S.D, {
                                        label:
                                            n.isPurchasedExternally && null != n.paymentGateway
                                                ? ee.intl.formatToPlainString(ee.t["rTk9v/"], {
                                                      paymentGatewayName: eu.qmC[n.paymentGateway],
                                                  })
                                                : ee.intl.string(ee.t.iRzXKd),
                                        children: (0, i.jsx)(eQ.A, {
                                            subscription: n,
                                            onPaymentSourceAdded: R.c_,
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
let e7 = new Set([eu.Dmq.ACTIVE, eu.Dmq.PAST_DUE, eu.Dmq.CANCELED, eu.Dmq.PAUSE_PENDING, eu.Dmq.PAUSED]);
function e9() {
    return (
        l.useEffect(() => {
            v.default.track(eu.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: e1.oU,
            children: [
                (0, i.jsx)(c.CircleErrorIcon, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e1.dk,
                    variant: "body-sm/normal",
                    children: ee.intl.format(ee.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(eu.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function te(e) {
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
        [N, b] = l.useState(0);
    (l.useEffect(() => {
        if (g)
            return (
                T.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
                () => {
                    T.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
                }
            );
        function e(e) {
            e.subscription.id === n.id && b((e) => e + 1);
        }
    }, [n.id, g]),
        (0, f.Ay)(() => {
            function e() {
                return b((e) => e + 1);
            }
            return (
                T.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    T.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        }));
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
        R = (0, u.bG)([y.default], () => y.default.getCurrentUser()?.hasFreePremium()),
        L = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= L.diff(o()(), "days") || n.status === eu.Dmq.PAST_DUE) &&
            !R &&
            !n.isPurchasedExternally,
        k = O && n.status === eu.Dmq.PAST_DUE && !R && !n.isPurchasedExternally,
        w = (0, P.l)(),
        F = !R && w,
        B = n?.status === eu.Dmq.PAST_DUE,
        X = B ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        z = null != A && A.isPremiumGroupPrimary(),
        H = n.hasAnyPremiumGroup,
        [Y] = (0, D.C8)({ subscriptionId: n.id, preventFetch: !(F || B) });
    return null == v || null == j
        ? (0, i.jsx)(E.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, C.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(e0, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: e1.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(h.n, {
              label: ee.intl.string(ee.t["/gs+Pz"]),
              description: ee.intl.string(ee.t.D8UpUo),
              children: [
                  V ? (0, i.jsx)(e2, {}) : null,
                  k ? (0, i.jsx)(e3, {}) : null,
                  F && null != Y ? (0, i.jsx)(e5, { daysPastDue: X, subscription: n, openInvoiceId: Y.id }) : null,
                  z && H && (0, i.jsx)(eE, { subscription: n, analyticsLocations: S }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: _.length > 0 ? e1.HZ : e1.__invalid_singleSubscription,
                              children: (0, i.jsx)(e8, {
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
                                      className: e1.HZ,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-sm/semibold",
                                              className: e1.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(e8, {
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
