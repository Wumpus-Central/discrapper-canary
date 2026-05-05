i.d(t, { Ay: () => e3, Sb: () => e2, TC: () => e$, Hy: () => e1 });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(989349),
    o = i.n(a),
    u = i(17928),
    d = i(661531),
    c = i(695366),
    g = i(834730),
    m = i(534514),
    A = i(359778),
    h = i(289873),
    E = i(270003),
    T = i(452027),
    x = i(228366),
    S = i(793574),
    p = i(688810),
    N = i(531260),
    f = i(235986),
    C = i(137177),
    _ = i(532794),
    I = i(832946),
    b = i(287809),
    v = i(174459),
    j = i(975571),
    y = i(927578),
    O = i(83617),
    R = i(543767),
    L = i(367319),
    D = i(155984),
    P = i(131168),
    G = i(331322),
    U = i(508770),
    M = i(192308),
    V = i(315629),
    k = i(821609),
    w = i(158032),
    B = i(427262),
    F = i(59784),
    z = i(233317),
    Y = i(622017),
    X = i(113090),
    H = i(778712),
    K = i(97808),
    W = i(123292),
    Z = i(950305),
    q = i(854627),
    Q = i(466919),
    J = i(375708),
    $ = i(339446);
let ee = (e) => {
        let { user: t, isOwnUser: i, label: l, removeButton: a, isFaded: o } = e,
            { avatarSrc: u, eventHandlers: d } = (0, q.A)({ userId: t?.id, size: H._3.SIZE_24 }),
            c = (0, B.$3)(t),
            [m, A] = s.useState(!1);
        return (0, n.jsxs)("div", {
            className: r()($.kL, { [$.RE]: null != a }),
            onMouseEnter: () => A(!0),
            onMouseLeave: () => A(!1),
            children: [
                (0, n.jsxs)("div", {
                    className: r()($.TT, { [$.zj]: o }),
                    children: [
                        (0, n.jsx)(K.eu, { className: $.my, src: u, "aria-label": c, size: H._3.SIZE_24, ...d }),
                        (0, n.jsxs)(g.E, {
                            className: $.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [c, !!i && ` (${J.intl.string(J.t.LuZzxn)})`],
                        }),
                        null != l &&
                            (0, n.jsxs)(g.E, {
                                className: $.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, n.jsx)("span", { className: $.me, children: "\xb7" }), l],
                            }),
                    ],
                }),
                null != a &&
                    m &&
                    (0, n.jsx)("div", {
                        className: $.dM,
                        children: (0, n.jsx)(W.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: a.label,
                            onClick: a.onRemove,
                        }),
                    }),
            ],
        });
    },
    et = (e) => {
        let { user: t, isOwnUser: i } = e;
        return (0, n.jsx)(ee, { user: t, isOwnUser: i, label: J.intl.string(Q.default.vc2xys) });
    },
    ei = (e) => {
        let { user: t, onRemove: i } = e;
        return (0, n.jsx)(ee, {
            user: t,
            label: J.intl.string(Q.default.mnt50A),
            removeButton: { onRemove: i, label: J.intl.string(J.t.N86XcP) },
        });
    },
    en = (e) => {
        let { user: t, isOwnUser: i } = e;
        return (0, n.jsx)(ee, { user: t, isOwnUser: i, label: J.intl.string(Q.default.mnt50A) });
    },
    es = (e) => {
        let { user: t, onRemove: i } = e;
        return (0, n.jsx)(ee, {
            user: t,
            label: J.intl.string(Q.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: i, label: J.intl.string(Q.default["2blqtw"]) },
        });
    },
    el = (e) => {
        let { onInvite: t, canInvite: i } = e,
            [l, a] = s.useState(!1);
        return (0, n.jsxs)("div", {
            className: r()($.kL, { [$.RE]: i }),
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            children: [
                (0, n.jsxs)("div", {
                    className: $.TT,
                    children: [
                        (0, n.jsx)("div", {
                            className: r()($.vG, $.my),
                            children: (0, n.jsx)(Z.n, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                        }),
                        (0, n.jsx)(g.E, {
                            className: $.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: J.intl.string(Q.default["/x7DVG"]),
                        }),
                    ],
                }),
                l &&
                    i &&
                    (0, n.jsx)("div", {
                        className: $.dM,
                        children: (0, n.jsx)(W.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: J.intl.string(Q.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
var er = i(88001),
    ea = i(652215),
    eo = i(666240);
let eu = () =>
        (0, n.jsxs)(G.B, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: eo.wx,
            children: [
                (0, n.jsx)(m.D, { variant: "display-md", className: eo.Nd, children: (0, er.DP)() }),
                (0, n.jsx)(U.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    ed = (e) => {
        let { title: t, description: i, button: s } = e;
        return (0, n.jsxs)("div", {
            className: eo.bh,
            children: [
                (0, n.jsxs)(G.B, {
                    direction: "vertical",
                    gap: 8,
                    className: eo.iQ,
                    children: [
                        (0, n.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                        (0, n.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: i }),
                    ],
                }),
                (0, n.jsx)("div", { className: eo.UD, children: s }),
            ],
        });
    },
    ec = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: l } = (0, X.A)(),
            { premiumGroupMembers: r, isLoading: a } = (0, Y.A)(s?.subscriptionId ?? null);
        if (a || null == r || l || null == s) return (0, n.jsx)(h.y, {});
        let o = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: d, members: c } = r,
            { title: g, description: A } = (() => {
                switch (s.subscriptionStatus) {
                    case ea.Dmq.CANCELED:
                        return {
                            title: J.intl.string(Q.default.mCwdPj),
                            description: J.intl.format(Q.default.wH9NYG, { endDate: u }),
                        };
                    case ea.Dmq.PAUSED:
                        return {
                            title: J.intl.string(Q.default.IDyd1e),
                            description: J.intl.format(Q.default["8MfYhr"], {
                                premiumGroupProductName: (0, er.DP)(),
                                helpCenterLink: er.TE,
                            }),
                        };
                    case ea.Dmq.PAST_DUE:
                    case ea.Dmq.ACCOUNT_HOLD:
                    case ea.Dmq.BILLING_RETRY:
                        return {
                            title: J.intl.string(Q.default.Duq8zp),
                            description: J.intl.format(Q.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: J.intl.formatToPlainString(Q.default.xiUjMF, {
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                            description: J.intl.format(Q.default["2HEyqG"], {
                                primaryName: (0, B.$3)(d),
                                premiumGroupProductName: (0, er.DP)(),
                                helpCenterLink: er.TE,
                            }),
                        };
                }
            })();
        return (0, n.jsxs)(V.h, {
            className: eo.kL,
            color: "nitro-pink",
            children: [
                (0, n.jsx)(eu, {}),
                (0, n.jsxs)("div", {
                    className: eo.wS,
                    children: [
                        (0, n.jsx)(ed, {
                            title: g,
                            description: A,
                            button: (0, n.jsx)(k.$, {
                                variant: "secondary",
                                text: J.intl.string(Q.default.NCu2JD),
                                onClick: () => {
                                    (0, M.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            i.e("85094"),
                                            i.e("9045"),
                                            i.e("92796"),
                                        ]).then(i.bind(i, 205463));
                                        return (i) =>
                                            (0, n.jsx)(e, { ...i, premiumGroupSubscriptionId: o, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, n.jsxs)(G.B, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, n.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: eo.Or,
                                    children: J.intl.string(Q.default["oqw/KW"]),
                                }),
                                (0, n.jsx)(et, { user: d, isOwnUser: !1 }),
                                c.map((e) => (0, n.jsx)(en, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    eg = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: i,
            canInvite: s,
            onInvite: l,
            onRemoveMember: r,
            onRemoveInvitedUser: a,
            numTotalSeats: o,
            numUsedSeats: u,
            numAvailableInvites: d,
        } = e;
        if (i || null == t) return (0, n.jsx)(h.y, {});
        let { primary: c, members: A, invitedUsers: E } = t;
        return (0, n.jsxs)(G.B, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, n.jsxs)(G.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, n.jsx)(m.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: J.intl.string(Q.default["oqw/KW"]),
                        }),
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: J.intl.format(Q.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                        }),
                    ],
                }),
                (0, n.jsx)(et, { user: c, isOwnUser: !0 }),
                A.map((e) => (0, n.jsx)(ei, { user: e, onRemove: () => r(e) }, e.id)),
                E.map((e) => (0, n.jsx)(es, { user: e, onRemove: () => a(e) }, e.id)),
                Array.from({ length: d }).map((e, t) =>
                    (0, n.jsx)(el, { onInvite: l, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    em = (e) => {
        let { subscription: t, analyticsLocations: l } = e,
            { premiumGroupMembers: r, isLoading: a } = (0, Y.A)(t.id),
            {
                numAvailableInvites: o,
                numTotalSeats: d,
                numUsedSeats: c,
            } = (0, u.cf)([z.A], () => ({
                numAvailableInvites: z.A.getNumAvailableInvites(),
                numTotalSeats: z.A.getNumTotalSeats(),
                numUsedSeats: z.A.getNumUsedSeats(),
            })),
            [g, m] = s.useState(!1),
            { status: A } = t,
            h = s.useCallback(() => {
                (0, M.openModalLazy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        i.e("34218"),
                        i.e("85094"),
                        i.e("16581"),
                        i.e("9045"),
                        i.e("84820"),
                        i.e("94161"),
                        i.e("35432"),
                        i.e("80347"),
                        i.e("10741"),
                        i.e("80166"),
                    ]).then(i.bind(i, 293061));
                    return (i) => (0, n.jsx)(e, { ...i, premiumSubscription: t, analyticsLocations: l });
                });
            }, [t, l]),
            E = s.useCallback(async () => {
                m(!0), await (0, w.Ir)(t, l), m(!1);
            }, [t, l]),
            T = () => {
                v.default.track(ea.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, M.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            i.e("7017"),
                            i.e("44616"),
                            i.e("96680"),
                            i.e("85579"),
                        ]).then(i.bind(i, 785606));
                        return (i) => (0, n.jsx)(e, { ...i, subscription: t });
                    });
            },
            x = s.useMemo(() => !er.BE.includes(t.status) && o > 0, [t.status, o]),
            { title: S, description: p } = (() => {
                switch (A) {
                    case ea.Dmq.CANCELED:
                        return {
                            title: J.intl.string(Q.default.KME8Q6),
                            description: J.intl.format(Q.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                        };
                    case ea.Dmq.PAUSED:
                        return {
                            title: J.intl.string(Q.default["4flKoC"]),
                            description: J.intl.format(Q.default["Q++BmO"], { premiumGroupProductName: (0, er.DP)() }),
                        };
                    case ea.Dmq.PAST_DUE:
                    case ea.Dmq.ACCOUNT_HOLD:
                    case ea.Dmq.BILLING_RETRY:
                        return {
                            title: J.intl.string(Q.default.cfeFEt),
                            description: J.intl.format(Q.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: er.TE,
                            }),
                        };
                    default:
                        return {
                            title: J.intl.formatToPlainString(Q.default.NRCfnQ, {
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                            description: J.intl.format(Q.default.lvnrnb, {
                                totalSeats: er.LM,
                                premiumGroupProductName: (0, er.DP)(),
                                helpCenterLink: er.TE,
                            }),
                        };
                }
            })();
        return (0, n.jsxs)(V.h, {
            className: eo.kL,
            color: "nitro-pink",
            children: [
                (0, n.jsx)(eu, {}),
                (0, n.jsxs)("div", {
                    className: eo.wS,
                    children: [
                        (0, n.jsx)(ed, {
                            title: S,
                            description: p,
                            button: y.ki(t)
                                ? (0, n.jsx)(k.$, {
                                      variant: "expressive",
                                      size: "md",
                                      text: J.intl.string(Q.default.EFTJMQ),
                                      onClick: E,
                                      loading: g,
                                  })
                                : (0, n.jsxs)(G.B, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, n.jsx)(k.$, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: J.intl.string(Q.default.Tcmclj),
                                              onClick: T,
                                              disabled: !x,
                                          }),
                                          (0, n.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: J.intl.string(Q.default.oO0EYw),
                                              onClick: h,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsx)(eg, {
                            premiumGroupMembers: r,
                            isLoadingPremiumGroupMembers: a,
                            canInvite: x,
                            onInvite: T,
                            onRemoveMember: (e) => {
                                v.default.track(ea.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, M.openModalLazy)(async () => {
                                        let { default: s } = await i.e("21305").then(i.bind(i, 391040));
                                        return (i) => (0, n.jsx)(s, { ...i, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                v.default.track(ea.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = F.A.getInviteByUserId(e.id)?.invite;
                                (0, M.openModalLazy)(async () => {
                                    let { default: l } = await i.e("15554").then(i.bind(i, 115225));
                                    return (i) =>
                                        (0, n.jsx)(l, {
                                            ...i,
                                            subscriptionId: t.id,
                                            invitedUser: e,
                                            subscriptionGroupMemberId: s?.id,
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
    };
var eA = i(97352),
    eh = i(990078),
    eE = i(403581);
function eT(e) {
    let { color: t = "white", className: i } = e;
    return (0, n.jsx)("svg", {
        width: "90",
        height: "17",
        viewBox: "0 0 90 17",
        className: i,
        fill: t,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, n.jsx)("path", {
            d: "M23.6251 0.426116H30.5799L27.1822 16.4055H20.2274L23.6251 0.426116ZM15.5289 0.426116L13.9893 7.77662L10.0075 0.426116H3.39317L0 16.4055H6.34428L7.88389 9.10824L11.8391 16.4055H18.4754L21.8732 0.426116H15.5289ZM67.8758 5.75257C67.8758 8.62885 65.7787 10.6263 62.8322 11.079L65.8849 16.4055H58.1603L55.6916 11.079L54.5502 16.4055H47.5953L50.94 0.426116H61.6112C65.646 0.426116 67.8758 2.74312 67.8758 5.75257ZM60.6821 6.71133C60.6821 5.69931 59.9388 5.0335 58.8239 5.0335H56.9658L56.249 8.4158H58.8239C59.9388 8.4158 60.6821 7.72336 60.6821 6.71133ZM49.4004 0.426116H32.1196L30.9781 5.7792H36.1279L33.8715 16.4055H40.8263L43.1092 5.7792H48.259L49.4004 0.426116ZM89.0322 7.61683C89.0322 13.2629 83.7763 16.8316 78.016 16.8316C71.9372 16.8316 68.6191 13.1297 68.6191 9.10824C68.6191 3.24914 73.6095 0 79.6087 0C85.6079 0 89.0322 3.27577 89.0322 7.61683ZM82.0243 8.06958C82.0243 6.36511 81.0687 5.14003 79.1044 5.14003C76.9808 5.14003 75.5473 6.79123 75.5473 8.78865C75.5473 10.573 76.6888 11.7182 78.4407 11.7182C80.5909 11.7182 82.0243 9.9871 82.0243 8.06958Z",
            fill: t,
        }),
    });
}
var ex = i(580630),
    eS = i(511484),
    ep = i(811611),
    eN = i(473702),
    ef = i(788868),
    eC = i(657127);
let e_ = { page: ea.liQ.USER_SETTINGS, section: ea.JJy.SETTINGS_PREMIUM, object: ea.ZSU.CARD };
function eI(e) {
    let { premiumSubscription: t, discountInfo: i, invoicePreview: s, isDiscountActive: l } = e,
        r = y.Ay.getPlanIdFromInvoice(t, s),
        a = eA.A.get(r);
    if (null == a || null == s || null == i || null == i.duration || null == i.percentage) return null;
    let o = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, ex.$g)(o.amount, s.currency),
        d = (0, y.y8)(ef.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, ex.$g)(d.amount, d.currency);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: J.intl.format(J.t["50bA2I"], { percent: i.percentage }),
            }),
            (0, n.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l
                    ? J.intl.format(J.t["3ZiutU"], { percent: i.percentage, numMonths: i.duration, regularPrice: c })
                    : J.intl.format(J.t.N43FMx, {
                          numMonths: i.duration,
                          discountedPrice: u,
                          billingPeriod: J.intl.string(J.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function eb(e) {
    let { discountOffer: t, premiumSubscription: i } = e,
        s = (0, eS.tQ)(i, ef.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: J.intl.format(J.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, n.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: J.intl.format(J.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: s,
                    billingPeriod: (0, y.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let ev = function (e) {
    let t,
        s,
        {
            subscription: l,
            invoicePreview: r,
            isLoading: a,
            analyticsLocation: o,
            discountInfo: u,
            renewalChurnDiscountInfo: d,
            discountOffer: c,
        } = e,
        { analyticsLocations: m } = (0, p.Ay)(S.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        A = (e) => {
            (0, M.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    i.e("34218"),
                    i.e("85094"),
                    i.e("16581"),
                    i.e("9045"),
                    i.e("84820"),
                    i.e("94161"),
                    i.e("35432"),
                    i.e("80347"),
                    i.e("10741"),
                    i.e("80166"),
                ]).then(i.bind(i, 293061));
                return (i) =>
                    (0, n.jsx)(t, {
                        ...i,
                        premiumSubscription: l,
                        analyticsLocation: o,
                        analyticsLocations: m,
                        initialStep: e,
                    });
            });
        },
        h = y.Ay.getPlanIdFromInvoice(l, r),
        E = (0, ep.ux)(c?.expires_at);
    return (0, I.m1)(h)
        ? null
        : (0, n.jsx)("div", {
              className: eC.S6,
              children: (0, n.jsx)(V.h, {
                  color: "nitro-pink",
                  className: eC.YL,
                  children: (0, n.jsxs)("div", {
                      className: eC.mK,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eC.Gp,
                              children: [
                                  (0, n.jsx)(eT, {
                                      color: "currentcolor",
                                      className: eC.fJ,
                                      "aria-label": J.intl.string(J.t.lpNrPu),
                                  }),
                                  (0, n.jsx)(g.E, {
                                      className: eC.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != c && E,
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", { className: eC.T }),
                          (0, n.jsxs)("div", {
                              className: eC.ly,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eC.Yc,
                                      children: [
                                          null != c
                                              ? (0, n.jsx)(eb, { discountOffer: c, premiumSubscription: l })
                                              : (0, n.jsx)(eI, {
                                                    premiumSubscription: l,
                                                    discountInfo: u ?? d,
                                                    invoicePreview: r,
                                                    isDiscountActive: null != u,
                                                }),
                                          (0, n.jsx)("div", {
                                              className: eC.e_,
                                              children:
                                                  ((t = y.Ay.isSwitchingPlansDisabled(l)),
                                                  (s = y.Ay.getSwitchingPlansDisabledMessage(l)),
                                                  y.Ay.isBaseSubscriptionCanceled(l)
                                                      ? (0, n.jsx)(k.$, {
                                                            variant: "expressive",
                                                            icon: eE.t,
                                                            size: "md",
                                                            text: J.intl.string(J.t.zrCzVB),
                                                            loading: a,
                                                            onClick: () => A(eN.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, n.jsxs)("div", {
                                                            className: eC.qK,
                                                            children: [
                                                                (0, n.jsx)(eh.m, {
                                                                    text: s,
                                                                    shouldShow: t && null != s,
                                                                    asContainer: !0,
                                                                    children: (0, n.jsx)(k.$, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: J.intl.string(J.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, _.A)({
                                                                                analyticsLocations: m,
                                                                                analyticsLocation: o,
                                                                                analyticsObject: e_,
                                                                                subscription: l,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, n.jsx)(k.$, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: J.intl.string(J.t["ETE/oC"]),
                                                                    loading: a,
                                                                    onClick: () => {
                                                                        l.status !== ea.Dmq.CANCELED && A();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)("img", {
                                      className: eC.Hp,
                                      src: "/assets/c4347155a9b71184.svg",
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
var ej = i(284009),
    ey = i.n(ej),
    eO = i(607399),
    eR = i(189213),
    eL = i(683071),
    eD = i(701273),
    eP = i(753390),
    eG = i(780964),
    eU = i(858897),
    eM = i(327479),
    eV = i(601107),
    ek = i(428797);
let ew = [ea.Dmq.PAST_DUE, ea.Dmq.ACCOUNT_HOLD, ea.Dmq.BILLING_RETRY],
    eB = (e) => {
        let { transitionState: t, onClose: i, subscription: l, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = s.useState(!1),
            [d, c] = s.useState(!1);
        s.useEffect(() => {
            v.default.track(ea.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: r,
            });
        }, []);
        let g = async () => {
                u(!0), c(!1);
                try {
                    await (0, eP.M2)(l.id, r, a),
                        v.default.track(ea.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: r,
                        }),
                        (0, eP.hP)(),
                        i();
                } catch (e) {
                    c(!0), u(!1);
                }
            },
            m = [
                { text: J.intl.string(J.t.oEAioF), onClick: () => i(), variant: "secondary" },
                {
                    text: J.intl.string(J.t["cY+Oob"]),
                    onClick: () => g(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, n.jsx)(eR.Modal, {
            size: "md",
            transitionState: t,
            title: J.intl.string(J.t.LZunzZ),
            subtitle: J.intl.string(J.t.FClXh9),
            actions: m,
            onClose: async () => i(),
            children: d ? (0, n.jsx)(eL.w, { type: "critical", children: J.intl.string(J.t["5mlOCW"]) }) : null,
        });
    };
function eF(e) {
    let t,
        {
            subscription: i,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            analyticsLocation: o,
        } = e,
        d = (0, u.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return ey()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: c } = (0, p.Ay)(S.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, y.bx)(i.additionalPlans)) return null;
    let { status: m } = i,
        A = (0, y.$k)(i),
        h = !A && i.isBoostOnly && ew.includes(i.status);
    if (A) t = ek.v2;
    else
        switch (m) {
            case ea.Dmq.PAST_DUE:
            case ea.Dmq.ACCOUNT_HOLD:
            case ea.Dmq.BILLING_RETRY:
                t = ek.P7;
                break;
            case ea.Dmq.PAUSE_PENDING:
            case ea.Dmq.PAUSED:
                t = i.pauseReason !== eV.qf.FRACTIONAL_PREMIUM ? ek.C7 : ek.wG;
                break;
            default:
                t = ek.wG;
        }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r()(t, ek.Qn),
                children: [
                    (0, n.jsx)("div", { className: ek.Kq }),
                    (0, n.jsx)("div", { className: ek.OL }),
                    (0, n.jsxs)("div", {
                        className: ek.eC,
                        children: [
                            (0, n.jsx)("div", { className: r()(ek.Ab, { [ek.aD]: A }) }),
                            (0, n.jsx)("div", {
                                children: (0, y.Uf)({
                                    subscription: i,
                                    renewalInvoicePreview: s,
                                    user: d,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, n.jsxs)("div", {
                            className: ek.BQ,
                            children: [
                                h &&
                                    (0, n.jsx)("div", {
                                        className: ek.x7,
                                        children: (0, n.jsx)(W.Q, {
                                            variant: "always-white",
                                            onClick: () => {
                                                ew.includes(i.status) &&
                                                    (0, M.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, n.jsx)(eB, {
                                                                ...e,
                                                                subscription: i,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: J.intl.string(J.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, n.jsx)(eM.A, {
                                    onClick: () => (0, eU.openUserSettings)(eG.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: J.intl.string(J.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, n.jsx)(g.E, {
                    className: ek.yW,
                    variant: "text-sm/normal",
                    children: J.intl.format(eO.Fr ? J.t.uxYBEa : J.t.k6haR9, { openAppHook: () => (0, eD.A)("app") }),
                }),
        ],
    });
}
var ez = i(868942),
    eY = i(420139),
    eX = i(349288),
    eH = i(697446);
function eK(e) {
    let { subscription: t, renewalMutations: s, className: l, analyticsLocation: a } = e,
        o = (0, N.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === ef.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, n.jsxs)("div", {
            className: r()(eH.zr, l),
            children: [
                (0, n.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eH.G }),
                (0, n.jsx)("div", {
                    className: eH.Qq,
                    children: J.intl.format(J.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, y.OU)(s) : y.Ay.getDisplayName(s.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, n.jsx)(eX.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, M.openModalLazy)(async () => {
                                      let { default: e } = await i.e("65975").then(i.bind(i, 702698));
                                      return (i) =>
                                          (0, n.jsx)(e, {
                                              ...i,
                                              subscription: t,
                                              renewalMutations: s,
                                              analyticsLocation: a,
                                          });
                                  });
                          },
                          className: eH.Lu,
                          children: J.intl.string(J.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eW = i(633287);
function eZ() {
    return (
        s.useEffect(() => {
            v.default.track(ea.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eW.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eW.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, n.jsx)(g.E, { className: eW.Cy, variant: "text-sm/normal", children: J.intl.string(J.t.xFHEMa) }),
            ],
        })
    );
}
function eq() {
    return (
        s.useEffect(() => {
            v.default.track(ea.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eW.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eW.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, n.jsx)(g.E, {
                    className: eW.Cy,
                    variant: "text-sm/normal",
                    children: J.intl.string(J.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function eQ(e) {
    let { daysPastDue: t, subscription: i, openInvoiceId: l } = e,
        { analyticsLocations: r } = (0, p.Ay)(S.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            v.default.track(ea.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eW.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eW.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, n.jsx)(g.E, {
                    className: eW.Cy,
                    variant: "text-sm/normal",
                    children: J.intl.format(J.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, _.A)({ initialPlanId: i.planIdFromItems, openInvoiceId: l, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function eJ(e) {
    let { subscription: t, renewalInvoicePreview: i, openInvoice: s, className: l, fractionalPremiumInfo: a } = e;
    return (0, n.jsxs)("div", {
        className: r()(eW.KF, l),
        children: [
            (0, n.jsx)(m.D, { variant: "heading-md/semibold", className: eW.QL, children: J.intl.string(J.t.KXQjfc) }),
            (0, n.jsx)("div", { children: y.Ay.getBillingInformationString(t, i, s, !1, a) }),
        ],
    });
}
function e$() {
    let e = (0, u.bG)([b.default], () => b.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: eW.Gf,
                children: J.intl.string(J.t["/gs+Pz"]),
            }),
            (0, n.jsx)("p", { className: eW.yV, children: J.intl.string(J.t.D8UpUo) }),
            !t &&
                (0, n.jsx)(A.Z, {
                    className: eW.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, n.jsxs)(f.A, {
                        align: f.A.Align.CENTER,
                        children: [
                            (0, n.jsx)(C.A, { game: null, size: C.M.SMALL, className: eW.pV }),
                            (0, n.jsx)("span", { className: eW.O, children: J.intl.string(J.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, n.jsx)(ec, { currentUser: e }),
        ],
    });
}
function e0(e) {
    let {
            subscription: t,
            analyticsLocation: i,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: a,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: u,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: c,
            fetchedOpenInvoice: g,
            isPremiumGroup: m,
        } = e,
        { analyticsLocations: A } = (0, p.Ay)(S.A.SUBSCRIPTION_DETAILS),
        x = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: A, analyticsLocation: i },
        [f] = (0, R.YV)(x);
    f = d ?? f;
    let C =
            null != c
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: A,
                      analyticsLocation: i,
                  },
        [_] = (0, R.YV)(C);
    _ = c ?? _;
    let I = (0, N.A)(),
        b = (0, P.p)(),
        v = (0, L.nf)(),
        j = y.Ay.isBaseSubscriptionCanceled(t),
        D = (function (e, t) {
            let i = eA.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != i) {
                let n = (0, O._w)(i, t?.id, !1),
                    s = n.length > 0 ? n[0] : e.currency;
                if (1 === n.length && t?.id === e.paymentSourceId && (0, O.jJ)(i.id, s, t?.id)) return !0;
            }
            return !1;
        })(t, s);
    if (null == f || null == _) return (0, n.jsx)(h.y, {});
    let G = D ? (0, L.Bv)(_) : null,
        U = null != G || (null != v && (v.discountId === ef.q || v.discountId === ef.EG)),
        M =
            D && ((j && null != b) || (!j && U))
                ? (0, n.jsx)(ev, {
                      subscription: t,
                      invoicePreview: _,
                      paymentSource: s,
                      discountOffer: b,
                      renewalChurnDiscountInfo: G,
                      discountInfo: v,
                      isLoading: l,
                      analyticsLocation: i,
                  })
                : (0, n.jsx)(ez.A, {
                      subscription: t,
                      currentInvoicePreview: f,
                      renewalInvoicePreview: _,
                      paymentSource: s,
                      busy: l,
                      analyticsLocation: i,
                  });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: eW.fj,
                children: [
                    !m && M,
                    (0, n.jsx)(eF, {
                        subscription: t,
                        renewalInvoicePreview: f,
                        fromStandaloneBillingPage: a,
                        fractionalPremiumInfo: I,
                        analyticsLocation: i,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                children: (0, n.jsx)(E.n, {
                    label: J.intl.string(J.t.Sb6wI1),
                    children: (0, n.jsxs)("div", {
                        className: eW.zH,
                        children: [
                            (0, n.jsx)(eJ, {
                                subscription: t,
                                renewalInvoicePreview: _,
                                className: eW.g4,
                                fractionalPremiumInfo: I,
                                openInvoice: g,
                            }),
                            (0, n.jsx)("div", {
                                className: r()(eW.g4, { [eW.sE]: o }),
                                children: (0, n.jsx)(T.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? J.intl.formatToPlainString(J.t["rTk9v/"], {
                                                  paymentGatewayName: ea.qmC[t.paymentGateway],
                                              })
                                            : J.intl.string(J.t.iRzXKd),
                                    children: (0, n.jsx)(eY.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: O.c_,
                                        highlightAddPaymentMethodButton: u || o,
                                        analyticsLocation: i,
                                        currentInvoicePreview: f,
                                        dropdownClassName: eW.sp,
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
let e1 = new Set([ea.Dmq.ACTIVE, ea.Dmq.PAST_DUE, ea.Dmq.CANCELED, ea.Dmq.PAUSE_PENDING, ea.Dmq.PAUSED]);
function e2() {
    return (
        s.useEffect(() => {
            v.default.track(ea.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, n.jsxs)("div", {
            className: eW.oU,
            children: [
                (0, n.jsx)(c.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, n.jsx)(g.E, {
                    className: eW.dk,
                    variant: "text-sm/normal",
                    children: J.intl.format(J.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(ea.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function e3(e) {
    let t,
        {
            subscription: i,
            subscriptions: l,
            paymentSource: r,
            busy: a,
            fromStandaloneBillingPage: d = !0,
            analyticsLocation: c,
            shouldRefetchInvoicesOnSubscriptionUpdate: g,
        } = e;
    null != l && null != l[0] && (i = l[0]);
    let A = (0, u.bG)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: T } = (0, p.Ay)(S.A.SUBSCRIPTION_DETAILS),
        N = (0, P.p)(),
        f = null != l ? l.slice(1) : [],
        [C, _] = s.useState(0);
    s.useEffect(() => {
        if (!g) return;
        let e = (e) => {
            e.subscription.id === i.id && _((e) => e + 1);
        };
        return (
            x.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                x.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [i.id, g]);
    let [v] = (0, R.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: T,
            analyticsLocation: c,
            fetchKey: C,
        }),
        [j] = (0, R.YV)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: T,
            analyticsLocation: c,
            userDiscountOfferId: N?.id,
            fetchKey: C,
        }),
        y = r?.invalid,
        O = (0, u.bG)([b.default], () => b.default.getCurrentUser()?.hasFreePremium()),
        L = o()(i.currentPeriodEnd),
        G = null != i.paymentSourceId,
        U = j?.total ?? 0,
        M =
            !G &&
            U > 0 &&
            (7 >= L.diff(o()(), "days") || i.status === ea.Dmq.PAST_DUE) &&
            !O &&
            !i.isPurchasedExternally,
        V = y && i.status === ea.Dmq.PAST_DUE && !O && !i.isPurchasedExternally,
        k = (0, D.l)(),
        w = !O && k,
        B = i?.status === ea.Dmq.PAST_DUE,
        F = B ? o()().diff(o()(i.currentPeriodStart), "days") : 0,
        z = null != A && A.isPremiumGroupPrimary(),
        Y = i.hasAnyPremiumGroup,
        [X] = (0, R.C8)({ subscriptionId: i.id, preventFetch: !(w || B) });
    return null == v || null == j
        ? (0, n.jsx)(h.y, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, I.m1)(i.renewalMutations.planId)) ||
                  i.hasExternalPlanChange) &&
              (t = (0, n.jsx)(eK, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: eW.Il,
                  analyticsLocation: c,
              })),
          (0, n.jsxs)(E.n, {
              label: J.intl.string(J.t["/gs+Pz"]),
              description: J.intl.string(J.t.D8UpUo),
              children: [
                  M ? (0, n.jsx)(eZ, {}) : null,
                  V ? (0, n.jsx)(eq, {}) : null,
                  w && null != X ? (0, n.jsx)(eQ, { daysPastDue: F, subscription: i, openInvoiceId: X.id }) : null,
                  z && Y && (0, n.jsx)(em, { subscription: i, analyticsLocations: T }),
                  t,
                  (0, n.jsxs)("div", {
                      children: [
                          (0, n.jsx)("div", {
                              className: f.length > 0 ? eW.HZ : eW.__invalid_singleSubscription,
                              children: (0, n.jsx)(e0, {
                                  subscription: i,
                                  analyticsLocation: c,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: M,
                                  showInvalidPaymentMethod: V,
                                  fetchedCurrentInvoicePreview: v,
                                  fetchedRenewalInvoicePreview: j,
                                  fetchedOpenInvoice: X,
                                  isPremiumGroup: z,
                              }),
                          }),
                          f.map((e, t) =>
                              (0, n.jsxs)(
                                  "div",
                                  {
                                      className: eW.HZ,
                                      children: [
                                          (0, n.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: eW.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, n.jsx)(e0, {
                                              subscription: e,
                                              analyticsLocation: c,
                                              paymentSource: r,
                                              busy: a,
                                              fromStandaloneBillingPage: d,
                                              showNoPaymentMethod: M,
                                              showInvalidPaymentMethod: V,
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
