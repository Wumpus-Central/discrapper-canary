n.d(t, { Ay: () => e9, Sb: () => e7, TC: () => e5, Hy: () => e8 });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(536637),
    o = n.n(a),
    u = n(17928),
    d = n(661531),
    c = n(695366),
    g = n(834730),
    m = n(297264),
    A = n(993077),
    E = n(289873),
    h = n(270003),
    S = n(452027),
    x = n(73153),
    T = n(964486),
    p = n(793574),
    f = n(688810),
    _ = n(531260),
    I = n(235986),
    N = n(769015),
    C = n(75678),
    b = n(832946),
    y = n(287809),
    v = n(174459),
    j = n(975571),
    O = n(24482),
    L = n(83617),
    R = n(543767),
    D = n(526292),
    P = n(155984),
    G = n(131168),
    M = n(331322),
    U = n(62010),
    V = n(192308),
    k = n(315629),
    w = n(821609),
    F = n(158032),
    B = n(427262),
    z = n(59784),
    X = n(233317),
    Y = n(622017),
    H = n(113090),
    W = n(778712),
    K = n(97808),
    Z = n(123292),
    q = n(950305),
    Q = n(854627),
    J = n(899082),
    $ = n(105292),
    ee = n(443543);
function et(e) {
    let { user: t, isOwnUser: n, label: s, removeButton: a, isFaded: o } = e,
        { avatarSrc: u, eventHandlers: d } = (0, Q.A)({ userId: t?.id, size: W._3.SIZE_24 }),
        c = (0, B.$3)(t),
        [m, A] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(ee.kL, { [ee.RE]: null != a }),
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [
            (0, i.jsxs)("div", {
                className: r()(ee.TT, { [ee.zj]: o }),
                children: [
                    (0, i.jsx)(K.eu, { className: ee.my, src: u, "aria-label": c, size: W._3.SIZE_24, ...d }),
                    (0, i.jsxs)(g.E, {
                        className: ee.Xh,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: [c, !!n && ` (${$.intl.string($.t.LuZzxn)})`],
                    }),
                    null != s &&
                        (0, i.jsxs)(g.E, {
                            className: ee.Pf,
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: [(0, i.jsx)("span", { className: ee.me, children: "\xb7" }), s],
                        }),
                ],
            }),
            null != a &&
                m &&
                (0, i.jsx)("div", {
                    className: ee.dM,
                    children: (0, i.jsx)(Z.Q, {
                        textVariant: "text-sm/medium",
                        variant: "secondary",
                        text: a.label,
                        onClick: a.onRemove,
                    }),
                }),
        ],
    });
}
function en(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(et, { user: t, isOwnUser: n, label: $.intl.string(J.default.vc2xys) });
}
function ei(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(et, {
        user: t,
        label: $.intl.string(J.default.mnt50A),
        removeButton: { onRemove: n, label: $.intl.string($.t.N86XcP) },
    });
}
function el(e) {
    let { user: t, isOwnUser: n } = e;
    return (0, i.jsx)(et, { user: t, isOwnUser: n, label: $.intl.string(J.default.mnt50A) });
}
function es(e) {
    let { user: t, onRemove: n } = e;
    return (0, i.jsx)(et, {
        user: t,
        label: $.intl.string(J.default["1RH5t9"]),
        isFaded: !0,
        removeButton: { onRemove: n, label: $.intl.string(J.default["2blqtw"]) },
    });
}
function er(e) {
    let { onInvite: t, canInvite: n } = e,
        [s, a] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: r()(ee.kL, { [ee.RE]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: [
            (0, i.jsxs)("div", {
                className: ee.TT,
                children: [
                    (0, i.jsx)("div", {
                        className: r()(ee.vG, ee.my),
                        children: (0, i.jsx)(q.UserIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                    }),
                    (0, i.jsx)(g.E, {
                        className: ee.Xh,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: $.intl.string(J.default["/x7DVG"]),
                    }),
                ],
            }),
            s &&
                n &&
                (0, i.jsx)("div", {
                    className: ee.dM,
                    children: (0, i.jsx)(Z.Q, {
                        textVariant: "text-sm/medium",
                        variant: "secondary",
                        text: $.intl.string(J.default.O15JWp),
                        onClick: t,
                    }),
                }),
        ],
    });
}
var ea = n(88001),
    eo = n(652215),
    eu = n(285613);
function ed() {
    return (0, i.jsx)(M.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 10,
        padding: { top: 12, bottom: 12 },
        className: eu.wx,
        children: (0, i.jsxs)(M.B, {
            direction: "horizontal",
            align: "center",
            gap: 10,
            children: [
                (0, i.jsx)(m.D, { variant: "nitro-xs", className: eu.Nd, children: (0, ea.DP)() }),
                (0, i.jsx)(U.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    });
}
function ec(e) {
    let { title: t, description: n, button: l } = e;
    return (0, i.jsxs)("div", {
        className: eu.bh,
        children: [
            (0, i.jsxs)(M.B, {
                direction: "vertical",
                gap: 8,
                className: eu.iQ,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                    (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)("div", { className: eu.UD, children: l }),
        ],
    });
}
function eg(e) {
    let { currentUser: t } = e,
        { premiumGroupMembership: l, isLoading: s } = (0, H.A)(),
        { premiumGroupMembers: r, isLoading: a } = (0, Y.A)(l?.subscriptionId ?? null);
    if (a || null == r || s || null == l) return (0, i.jsx)(E.y, {});
    let o = l.subscriptionId,
        u = l.currentPeriodEnd,
        { primary: d, members: c } = r,
        { title: g, description: A } = (function () {
            if (null == l) return { title: "", description: "" };
            switch (l.subscriptionStatus) {
                case eo.Dmq.CANCELED:
                    return {
                        title: $.intl.string(J.default.mCwdPj),
                        description: $.intl.format(J.default.wH9NYG, { endDate: u }),
                    };
                case eo.Dmq.PAUSED:
                    return {
                        title: $.intl.string(J.default.IDyd1e),
                        description: $.intl.format(J.default["8MfYhr"], {
                            premiumGroupProductName: (0, ea.DP)(),
                            helpCenterLink: ea.TE,
                        }),
                    };
                case eo.Dmq.PAST_DUE:
                case eo.Dmq.ACCOUNT_HOLD:
                case eo.Dmq.BILLING_RETRY:
                    return {
                        title: $.intl.string(J.default.Duq8zp),
                        description: $.intl.format(J.default["MHn/D6"], {
                            endDate: u,
                            premiumGroupProductName: (0, ea.DP)(),
                        }),
                    };
                default:
                    return {
                        title: $.intl.formatToPlainString(J.default.xiUjMF, { premiumGroupProductName: (0, ea.DP)() }),
                        description: $.intl.format(J.default["2HEyqG"], {
                            primaryName: (0, B.$3)(d),
                            premiumGroupProductName: (0, ea.DP)(),
                            helpCenterLink: ea.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eu.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(ed, {}),
            (0, i.jsxs)("div", {
                className: eu.wS,
                children: [
                    (0, i.jsx)(ec, {
                        title: g,
                        description: A,
                        button: (0, i.jsx)(w.$, {
                            variant: "secondary",
                            text: $.intl.string(J.default.NCu2JD),
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
                                className: eu.Or,
                                children: $.intl.string(J.default["oqw/KW"]),
                            }),
                            (0, i.jsx)(en, { user: d, isOwnUser: !1 }),
                            c.map((e) => (0, i.jsx)(el, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function em(e) {
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
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: $.intl.string(J.default["oqw/KW"]),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: $.intl.format(J.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                    }),
                ],
            }),
            (0, i.jsx)(en, { user: c, isOwnUser: !0 }),
            A.map((e) => (0, i.jsx)(ei, { user: e, onRemove: () => r(e) }, e.id)),
            h.map((e) => (0, i.jsx)(es, { user: e, onRemove: () => a(e) }, e.id)),
            Array.from({ length: d }).map((e, t) =>
                (0, i.jsx)(er, { onInvite: s, canInvite: l }, `seat-available-${t}`),
            ),
        ],
    });
}
function eA(e) {
    let { subscription: t, analyticsLocations: s } = e,
        { premiumGroupMembers: r, isLoading: a } = (0, Y.A)(t.id),
        {
            numAvailableInvites: o,
            numTotalSeats: d,
            numUsedSeats: c,
        } = (0, u.cf)([X.A], () => ({
            numAvailableInvites: X.A.getNumAvailableInvites(),
            numTotalSeats: X.A.getNumTotalSeats(),
            numUsedSeats: X.A.getNumUsedSeats(),
        })),
        [g, m] = l.useState(!1),
        { status: A } = t,
        E = l.useCallback(() => {
            (0, V.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                    n.e("489361"),
                    n.e("216806"),
                    n.e("310734"),
                    n.e("384820"),
                    n.e("594161"),
                    n.e("435432"),
                    n.e("80347"),
                    n.e("680166"),
                ]).then(n.bind(n, 293061));
                return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: s });
            });
        }, [t, s]),
        h = l.useCallback(async () => {
            (m(!0), await (0, F.Ir)(t, s), m(!1));
        }, [t, s]);
    function S() {
        (v.default.track(eo.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
            (0, V.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("768071"),
                    n.e("634508"),
                    n.e("96680"),
                    n.e("485579"),
                ]).then(n.bind(n, 785606));
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
            }));
    }
    let x = l.useMemo(() => !ea.BE.includes(t.status) && o > 0, [t.status, o]),
        { title: T, description: p } = (function () {
            switch (A) {
                case eo.Dmq.CANCELED:
                    return {
                        title: $.intl.string(J.default.KME8Q6),
                        description: $.intl.format(J.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, ea.DP)(),
                        }),
                    };
                case eo.Dmq.PAUSED:
                    return {
                        title: $.intl.string(J.default["4flKoC"]),
                        description: $.intl.format(J.default["Q++BmO"], { premiumGroupProductName: (0, ea.DP)() }),
                    };
                case eo.Dmq.PAST_DUE:
                case eo.Dmq.ACCOUNT_HOLD:
                case eo.Dmq.BILLING_RETRY:
                    return {
                        title: $.intl.string(J.default.cfeFEt),
                        description: $.intl.format(J.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: ea.TE,
                        }),
                    };
                default:
                    return {
                        title: $.intl.formatToPlainString(J.default.NRCfnQ, { premiumGroupProductName: (0, ea.DP)() }),
                        description: $.intl.format(J.default.lvnrnb, {
                            totalSeats: ea.LM,
                            premiumGroupProductName: (0, ea.DP)(),
                            helpCenterLink: ea.TE,
                        }),
                    };
            }
        })();
    return (0, i.jsxs)(k.h, {
        className: eu.kL,
        color: "nitro-pink",
        children: [
            (0, i.jsx)(ed, {}),
            (0, i.jsxs)("div", {
                className: eu.wS,
                children: [
                    (0, i.jsx)(ec, {
                        title: T,
                        description: p,
                        button: (0, O.ki)(t)
                            ? (0, i.jsx)(w.$, {
                                  variant: "expressive",
                                  size: "md",
                                  text: $.intl.string(J.default.EFTJMQ),
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
                                          text: $.intl.string(J.default.Tcmclj),
                                          onClick: S,
                                          disabled: !x,
                                      }),
                                      (0, i.jsx)(w.$, {
                                          variant: "secondary",
                                          size: "md",
                                          fullWidth: !0,
                                          text: $.intl.string(J.default.oO0EYw),
                                          onClick: E,
                                      }),
                                  ],
                              }),
                    }),
                    (0, i.jsx)(em, {
                        premiumGroupMembers: r,
                        isLoadingPremiumGroupMembers: a,
                        canInvite: x,
                        onInvite: S,
                        onRemoveMember: function (e) {
                            (v.default.track(eo.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                subscription_id: t.id,
                                member_user_id: e.id,
                            }),
                                (0, V.openModalLazy)(async () => {
                                    let { default: l } = await n.e("521305").then(n.bind(n, 391040));
                                    return (n) => (0, i.jsx)(l, { ...n, subscriptionId: t.id, member: e });
                                }));
                        },
                        onRemoveInvitedUser: function (e) {
                            v.default.track(eo.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                subscription_id: t.id,
                                invited_user_id: e.id,
                            });
                            let l = z.A.getInviteByUserId(e.id)?.invite;
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
var eE = n(866665),
    eh = n(392943),
    eS = n(580630),
    ex = n(202541),
    eT = n(267023);
let ep = { page: eo.liQ.USER_SETTINGS, section: eo.JJy.SETTINGS_PREMIUM, object: eo.ZSU.CARD };
function ef(e) {
    let { premiumSubscription: t, discountInfo: n } = e;
    if (null == n.duration || null == n.percentage) return null;
    let l = (0, O.y8)(ex.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        s = (0, eS.$g)(l.amount, l.currency),
        r = Math.round(l.amount * (1 - n.percentage / 100)),
        a = (0, eS.$g)(r, l.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: $.intl.string($.t["53BCd6"]),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: $.intl.format($.t.N43FMx, {
                    numMonths: n.duration,
                    discountedPrice: a,
                    billingPeriod: $.intl.string($.t.FPybU7),
                    fullPrice: s,
                }),
            }),
        ],
    });
}
let e_ = function (e) {
    var t;
    let { subscription: l, invoicePreview: s, isLoading: r, discountInfo: a, analyticsLocation: o } = e,
        { analyticsLocations: u } = (0, f.Ay)(p.A.REFERRAL_INCENTIVE_DISCOUNT_SUBSCRIPTION_HEADER),
        d = O.Ay.getPlanIdFromInvoice(l, s);
    if ((0, b.m1)(d)) return null;
    let c = O.Ay.isSwitchingPlansDisabled(l),
        m = O.Ay.getSwitchingPlansDisabledMessage(l),
        A =
            null == (t = l.metadata?.active_discount_expires_at)
                ? null
                : $.intl.formatToPlainString($.t.u8bQ1q, { expiryDate: new Date(t) });
    return (0, i.jsx)("div", {
        className: eT.b8,
        children: (0, i.jsx)(k.h, {
            color: "nitro-pink",
            className: eT.YL,
            children: (0, i.jsxs)("div", {
                className: eT.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: eT.Gp,
                        children: [
                            (0, i.jsx)(eh.A, {
                                color: "currentcolor",
                                className: eT.Ss,
                                "aria-label": $.intl.string($.t.lpNrPu),
                            }),
                            (0, i.jsx)(g.E, {
                                className: eT.Sd,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: A,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eT.yF }),
                    (0, i.jsxs)("div", {
                        className: eT.IH,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eT.Tm,
                                children: [
                                    (0, i.jsx)(ef, { premiumSubscription: l, discountInfo: a }),
                                    (0, i.jsx)("div", {
                                        className: eT.Xc,
                                        children: (0, i.jsxs)("div", {
                                            className: eT.qK,
                                            children: [
                                                (0, i.jsx)(eE.m, {
                                                    text: m,
                                                    shouldShow: c && null != m,
                                                    asContainer: !0,
                                                    children: (0, i.jsx)(w.$, {
                                                        variant: "expressive",
                                                        disabled: c,
                                                        text: $.intl.string($.t["dylp/7"]),
                                                        size: "md",
                                                        onClick: () => {
                                                            (0, C.A)({
                                                                analyticsLocations: u,
                                                                analyticsLocation: o,
                                                                analyticsObject: ep,
                                                                subscription: l,
                                                            });
                                                        },
                                                    }),
                                                }),
                                                (0, i.jsx)(w.$, {
                                                    variant: "secondary",
                                                    size: "md",
                                                    text: $.intl.string($.t["ETE/oC"]),
                                                    loading: r,
                                                    onClick: function () {
                                                        l.status !== eo.Dmq.CANCELED &&
                                                            (0, V.openModalLazy)(async () => {
                                                                let {
                                                                    PremiumBrandRefreshSubscriptionCancellationModal: e,
                                                                } = await Promise.all([
                                                                    n.e("489361"),
                                                                    n.e("216806"),
                                                                    n.e("310734"),
                                                                    n.e("384820"),
                                                                    n.e("594161"),
                                                                    n.e("435432"),
                                                                    n.e("80347"),
                                                                    n.e("680166"),
                                                                ]).then(n.bind(n, 293061));
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
                                className: eT._e,
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
var eI = n(97352),
    eN = n(403581),
    eC = n(511484),
    eb = n(811611),
    ey = n(473702),
    ev = n(858432),
    ej = n(398932);
let eO = { page: eo.liQ.USER_SETTINGS, section: eo.JJy.SETTINGS_PREMIUM, object: eo.ZSU.CARD };
function eL(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: l, isDiscountActive: s } = e,
        r = O.Ay.getPlanIdFromInvoice(t, l),
        a = eI.A.get(r);
    if (null == a || null == l || null == n || null == n.duration || null == n.percentage) return null;
    let o = l.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, eS.$g)(o.amount, l.currency),
        d = (0, O.y8)(ex.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, eS.$g)(d.amount, d.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: $.intl.format($.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: s
                    ? $.intl.format($.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: c })
                    : $.intl.format($.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: $.intl.string($.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function eR(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        l = (0, eC.tQ)(n, ex.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: $.intl.format($.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: $.intl.format($.t["PH7Q+R"], {
                    numMonths: t.discount.intervalCount,
                    discountedPrice: l,
                    billingPeriod: (0, O.Ke)(t.discount.intervalType),
                }),
            }),
        ],
    });
}
let eD = function (e) {
    let {
            subscription: t,
            invoicePreview: l,
            isLoading: s,
            analyticsLocation: r,
            discountInfo: a,
            renewalChurnDiscountInfo: o,
            discountOffer: u,
        } = e,
        { analyticsLocations: d } = (0, f.Ay)(p.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER);
    function c() {
        t.status !== eo.Dmq.CANCELED && m();
    }
    function m(e) {
        (0, V.openModalLazy)(async () => {
            let { PremiumBrandRefreshSubscriptionCancellationModal: l } = await Promise.all([
                n.e("489361"),
                n.e("216806"),
                n.e("310734"),
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
        E = (0, eb.ux)(u?.expiresAt?.toISOString());
    return (0, b.m1)(A)
        ? null
        : (0, i.jsx)("div", {
              className: ev.S6,
              children: (0, i.jsx)(k.h, {
                  color: "nitro-pink",
                  className: ev.YL,
                  children: (0, i.jsxs)("div", {
                      className: ev.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ev.Gp,
                              children: [
                                  (0, i.jsx)(eh.A, {
                                      color: "currentcolor",
                                      className: ev.fJ,
                                      "aria-label": $.intl.string($.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(g.E, {
                                      className: ev.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != u && E,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: ev.T }),
                          (0, i.jsxs)("div", {
                              className: ev.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: ev.Yc,
                                      children: [
                                          null != u
                                              ? (0, i.jsx)(eR, { discountOffer: u, premiumSubscription: t })
                                              : (0, i.jsx)(eL, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: l,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: ev.e_,
                                              children: (function () {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      n = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, i.jsxs)("div", {
                                                          className: ev.qK,
                                                          children: [
                                                              (0, i.jsx)(eE.m, {
                                                                  text: n,
                                                                  shouldShow: e && null != n,
                                                                  asContainer: !0,
                                                                  children: (0, i.jsx)(w.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: $.intl.string($.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, C.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: eO,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, i.jsx)(w.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: $.intl.string($.t["ETE/oC"]),
                                                                  loading: s,
                                                                  onClick: c,
                                                              }),
                                                          ],
                                                      });
                                                  {
                                                      let e =
                                                          null != u
                                                              ? $.intl.format($.t.XIVblY, {
                                                                    percent: u.discount.amount,
                                                                })
                                                              : $.intl.string($.t.zrCzVB);
                                                      return (0, i.jsx)(w.$, {
                                                          variant: "expressive",
                                                          icon: eN.t,
                                                          size: "md",
                                                          text: e,
                                                          loading: s,
                                                          onClick: () => m(ey.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: ev.Hp, src: ej.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eP = n(284009),
    eG = n.n(eP),
    eM = n(607399),
    eU = n(189213),
    eV = n(683071),
    ek = n(701273),
    ew = n(277984),
    eF = n(780964),
    eB = n(766075),
    ez = n(327479),
    eX = n(601107),
    eY = n(583690);
let eH = [eo.Dmq.PAST_DUE, eo.Dmq.ACCOUNT_HOLD, eo.Dmq.BILLING_RETRY],
    eW = (e) => {
        let { transitionState: t, onClose: n, subscription: s, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = l.useState(!1),
            [d, c] = l.useState(!1);
        async function g() {
            (u(!0), c(!1));
            try {
                (await (0, ew.M2)(s.id, r, a),
                    v.default.track(eo.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                        subscription_id: s.id,
                        location_stack: r,
                    }),
                    (0, ew.hP)(),
                    n());
            } catch (e) {
                (c(!0), u(!1));
            }
        }
        l.useEffect(() => {
            v.default.track(eo.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: s.id,
                location_stack: r,
            });
        }, []);
        let m = [
            { text: $.intl.string($.t.oEAioF), onClick: () => n(), variant: "secondary" },
            {
                text: $.intl.string($.t["cY+Oob"]),
                onClick: () => g(),
                disabled: o,
                variant: "critical-primary",
                loading: o,
            },
        ];
        return (0, i.jsx)(eU.a, {
            size: "md",
            transitionState: t,
            title: $.intl.string($.t.LZunzZ),
            subtitle: $.intl.string($.t.FClXh9),
            actions: m,
            onClose: async () => n(),
            children: d
                ? (0, i.jsx)(eV.w, { type: "critical", message: $.intl.string($.t["5mlOCW"]), role: "alert" })
                : null,
        });
    };
function eK(e) {
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
            return (eG()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e);
        }),
        { analyticsLocations: c } = (0, f.Ay)(p.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(n.additionalPlans)) return null;
    let { status: m } = n,
        A = (0, O.$k)(n),
        E = !A && n.isBoostOnly && eH.includes(n.status);
    if (A) t = eY.v2;
    else
        switch (m) {
            case eo.Dmq.PAST_DUE:
            case eo.Dmq.ACCOUNT_HOLD:
            case eo.Dmq.BILLING_RETRY:
                t = eY.P7;
                break;
            case eo.Dmq.PAUSE_PENDING:
            case eo.Dmq.PAUSED:
                t = n.pauseReason !== eX.qf.FRACTIONAL_PREMIUM ? eY.C7 : eY.wG;
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
                                        children: (0, i.jsx)(Z.Q, {
                                            variant: "always-white",
                                            onClick: function () {
                                                eH.includes(n.status) &&
                                                    (0, V.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(eW, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: $.intl.string($.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(ez.A, {
                                    onClick: () => (0, eB.openUserSettings)(eF.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: $.intl.string($.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, i.jsx)(g.E, {
                    className: eY.yW,
                    variant: "text-sm/normal",
                    children: $.intl.format(eM.Fr ? $.t.uxYBEa : $.t.k6haR9, { openAppHook: () => (0, ek.A)("app") }),
                }),
        ],
    });
}
var eZ = n(983048),
    eq = n(951555),
    eQ = n(28863),
    eJ = n(109681);
function e$(e) {
    let { subscription: t, renewalMutations: l, className: s, analyticsLocation: a } = e,
        o = (0, _.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === ex.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(eJ.zr, s),
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eJ.G }),
                (0, i.jsx)("div", {
                    className: eJ.Qq,
                    children: $.intl.format($.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(l) : O.Ay.getDisplayName(l.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(eQ.Anchor, {
                          onClick: (e) => {
                              (e.preventDefault(),
                                  (0, V.openModalLazy)(async () => {
                                      let { default: e } = await n.e("865975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: l,
                                              analyticsLocation: a,
                                          });
                                  }));
                          },
                          className: eJ.Lu,
                          children: $.intl.string($.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var e0 = n(72536);
function e1() {
    return (
        l.useEffect(() => {
            v.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e0.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e0.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, { className: e0.Cy, variant: "text-sm/normal", children: $.intl.string($.t.xFHEMa) }),
            ],
        })
    );
}
function e2() {
    return (
        l.useEffect(() => {
            v.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e0.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e0.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e0.Cy,
                    variant: "text-sm/normal",
                    children: $.intl.string($.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function e3(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: s } = e,
        { analyticsLocations: r } = (0, f.Ay)(p.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        l.useEffect(() => {
            v.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: e0.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: e0.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, {
                    className: e0.Cy,
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["0nbf/G"], {
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
function e4(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: l, className: s, fractionalPremiumInfo: a } = e;
    return (0, i.jsxs)("div", {
        className: r()(e0.KF, s),
        children: [
            (0, i.jsx)(m.D, { variant: "heading-md/semibold", className: e0.QL, children: $.intl.string($.t.KXQjfc) }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, l, !1, a) }),
        ],
    });
}
function e5() {
    let e = (0, u.bG)([y.default], () => y.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: e0.Gf,
                children: $.intl.string($.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: e0.yV, children: $.intl.string($.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.Z, {
                    className: e0.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(I.A, {
                        align: I.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(N.A, { game: null, size: N.M.SMALL, className: e0.pV }),
                            (0, i.jsx)("span", { className: e0.O, children: $.intl.string($.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(eg, { currentUser: e }),
        ],
    });
}
function e6(e) {
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
        { analyticsLocations: x } = (0, f.Ay)(p.A.SUBSCRIPTION_DETAILS),
        T = null != c ? {} : { subscriptionId: n.id, renewal: !0, analyticsLocations: x, analyticsLocation: l },
        [I] = (0, R.YV)(T);
    I = c ?? I;
    let N =
            null != g
                ? {}
                : {
                      subscriptionId: n.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: x,
                      analyticsLocation: l,
                  },
        [C] = (0, R.YV)(N);
    C = g ?? C;
    let b = (0, _.A)(),
        y = (0, G.p)(),
        v = (0, D.nf)(),
        j = O.Ay.isBaseSubscriptionCanceled(n),
        P = (function (e, t) {
            let n = eI.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, L._w)(n, t?.id, !1),
                    l = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, L.jJ)(n.id, l, t?.id)) return !0;
            }
            return !1;
        })(n, s);
    if (null == I || null == C) return (0, i.jsx)(E.y, {});
    let M = P ? (0, D.Bv)(C) : null,
        U = null != M || (null != v && null != v.discountId && ex.i_.includes(v.discountId)),
        V = !j && null != v && v.discountId === ex.sC,
        k = P && ((j && null != y) || (!j && U));
    return (
        (t =
            V && null != v
                ? (0, i.jsx)(e_, {
                      subscription: n,
                      invoicePreview: C,
                      paymentSource: s,
                      discountInfo: v,
                      isLoading: a,
                      analyticsLocation: l,
                  })
                : k
                  ? (0, i.jsx)(eD, {
                        subscription: n,
                        invoicePreview: C,
                        paymentSource: s,
                        discountOffer: y,
                        renewalChurnDiscountInfo: M,
                        discountInfo: v,
                        isLoading: a,
                        analyticsLocation: l,
                    })
                  : (0, i.jsx)(eZ.A, {
                        subscription: n,
                        currentInvoicePreview: I,
                        renewalInvoicePreview: C,
                        paymentSource: s,
                        busy: a,
                        analyticsLocation: l,
                    })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e0.fj,
                    children: [
                        !A && t,
                        (0, i.jsx)(eK, {
                            subscription: n,
                            renewalInvoicePreview: I,
                            fromStandaloneBillingPage: o,
                            fractionalPremiumInfo: b,
                            analyticsLocation: l,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.n, {
                        label: $.intl.string($.t.Sb6wI1),
                        children: (0, i.jsxs)("div", {
                            className: e0.zH,
                            children: [
                                (0, i.jsx)(e4, {
                                    subscription: n,
                                    renewalInvoicePreview: C,
                                    className: e0.g4,
                                    fractionalPremiumInfo: b,
                                    openInvoice: m,
                                }),
                                (0, i.jsx)("div", {
                                    className: r()(e0.g4, { [e0.sE]: u }),
                                    children: (0, i.jsx)(S.D, {
                                        label:
                                            n.isPurchasedExternally && null != n.paymentGateway
                                                ? $.intl.formatToPlainString($.t["rTk9v/"], {
                                                      paymentGatewayName: eo.qmC[n.paymentGateway],
                                                  })
                                                : $.intl.string($.t.iRzXKd),
                                        children: (0, i.jsx)(eq.A, {
                                            subscription: n,
                                            onPaymentSourceAdded: L.c_,
                                            highlightAddPaymentMethodButton: d || u,
                                            analyticsLocation: l,
                                            currentInvoicePreview: I,
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
let e8 = new Set([eo.Dmq.ACTIVE, eo.Dmq.PAST_DUE, eo.Dmq.CANCELED, eo.Dmq.PAUSE_PENDING, eo.Dmq.PAUSED]);
function e7() {
    return (
        l.useEffect(() => {
            v.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: e0.oU,
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(g.E, {
                    className: e0.dk,
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(eo.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function e9(e) {
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
        { analyticsLocations: S } = (0, f.Ay)(p.A.SUBSCRIPTION_DETAILS),
        _ = (0, G.p)(),
        I = null != s ? s.slice(1) : [],
        [N, C] = l.useState(0);
    (l.useEffect(() => {
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
        (0, T.Ay)(() => {
            function e() {
                return C((e) => e + 1);
            }
            return (
                x.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    x.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        }));
    let [v] = (0, R.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            fetchKey: N,
        }),
        [j] = (0, R.YV)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            userDiscountOfferId: _?.id,
            fetchKey: N,
        }),
        O = r?.invalid,
        L = (0, u.bG)([y.default], () => y.default.getCurrentUser()?.hasFreePremium()),
        D = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= D.diff(o()(), "days") || n.status === eo.Dmq.PAST_DUE) &&
            !L &&
            !n.isPurchasedExternally,
        k = O && n.status === eo.Dmq.PAST_DUE && !L && !n.isPurchasedExternally,
        w = (0, P.l)(),
        F = !L && w,
        B = n?.status === eo.Dmq.PAST_DUE,
        z = B ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        X = null != A && A.isPremiumGroupPrimary(),
        Y = n.hasAnyPremiumGroup,
        [H] = (0, R.C8)({ subscriptionId: n.id, preventFetch: !(F || B) });
    return null == v || null == j
        ? (0, i.jsx)(E.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, b.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(e$, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: e0.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(h.n, {
              label: $.intl.string($.t["/gs+Pz"]),
              description: $.intl.string($.t.D8UpUo),
              children: [
                  V ? (0, i.jsx)(e1, {}) : null,
                  k ? (0, i.jsx)(e2, {}) : null,
                  F && null != H ? (0, i.jsx)(e3, { daysPastDue: z, subscription: n, openInvoiceId: H.id }) : null,
                  X && Y && (0, i.jsx)(eA, { subscription: n, analyticsLocations: S }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: I.length > 0 ? e0.HZ : e0.__invalid_singleSubscription,
                              children: (0, i.jsx)(e6, {
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
                          I.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: e0.HZ,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: e0.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(e6, {
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
