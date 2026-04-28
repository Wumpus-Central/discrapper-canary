n.d(t, { Ay: () => e6, Sb: () => e1, TC: () => e0, Hy: () => e3 });
var s = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(989349),
    c = n.n(r),
    u = n(17928),
    o = n(661531),
    d = n(695366),
    m = n(834730),
    p = n(534514),
    h = n(359778),
    x = n(289873),
    f = n(270003),
    C = n(452027),
    g = n(228366),
    y = n(793574),
    j = n(688810),
    A = n(531260),
    v = n(235986),
    N = n(137177),
    P = n(532794),
    I = n(832946),
    E = n(287809),
    S = n(954571),
    b = n(975571),
    L = n(927578),
    _ = n(83617),
    T = n(543767),
    D = n(526292),
    w = n(155984),
    R = n(131168),
    M = n(331322),
    U = n(508770),
    k = n(192308),
    G = n(315629),
    O = n(821609),
    H = n(158032),
    B = n(427262),
    F = n(59784),
    z = n(233317),
    q = n(622017),
    Y = n(113090),
    V = n(778712),
    Z = n(97808),
    K = n(123292),
    W = n(950305),
    Q = n(854627),
    $ = n(466919),
    J = n(985018),
    X = n(339446);
let ee = (e) => {
        let { user: t, isOwnUser: n, label: a, removeButton: r, isFaded: c } = e,
            { avatarSrc: u, eventHandlers: o } = (0, Q.A)({ userId: t?.id, size: V._3.SIZE_24 }),
            d = (0, B.$3)(t),
            [p, h] = i.useState(!1);
        return (0, s.jsxs)("div", {
            className: l()(X.kL, { [X.RE]: null != r }),
            onMouseEnter: () => h(!0),
            onMouseLeave: () => h(!1),
            children: [
                (0, s.jsxs)("div", {
                    className: l()(X.TT, { [X.zj]: c }),
                    children: [
                        (0, s.jsx)(Z.eu, { className: X.my, src: u, "aria-label": d, size: V._3.SIZE_24, ...o }),
                        (0, s.jsxs)(m.E, {
                            className: X.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [d, !!n && ` (${J.intl.string(J.t.LuZzxn)})`],
                        }),
                        null != a &&
                            (0, s.jsxs)(m.E, {
                                className: X.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, s.jsx)("span", { className: X.me, children: "\xb7" }), a],
                            }),
                    ],
                }),
                null != r &&
                    p &&
                    (0, s.jsx)("div", {
                        className: X.dM,
                        children: (0, s.jsx)(K.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: r.label,
                            onClick: r.onRemove,
                        }),
                    }),
            ],
        });
    },
    et = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, s.jsx)(ee, { user: t, isOwnUser: n, label: J.intl.string($.default.vc2xys) });
    },
    en = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, s.jsx)(ee, {
            user: t,
            label: J.intl.string($.default.mnt50A),
            removeButton: { onRemove: n, label: J.intl.string(J.t.N86XcP) },
        });
    },
    es = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, s.jsx)(ee, { user: t, isOwnUser: n, label: J.intl.string($.default.mnt50A) });
    },
    ei = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, s.jsx)(ee, {
            user: t,
            label: J.intl.string($.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: n, label: J.intl.string($.default["2blqtw"]) },
        });
    },
    ea = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [a, r] = i.useState(!1);
        return (0, s.jsxs)("div", {
            className: l()(X.kL, { [X.RE]: n }),
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                (0, s.jsxs)("div", {
                    className: X.TT,
                    children: [
                        (0, s.jsx)("div", {
                            className: l()(X.vG, X.my),
                            children: (0, s.jsx)(W.n, { size: "xxs", color: o.A.colors.ICON_SUBTLE }),
                        }),
                        (0, s.jsx)(m.E, {
                            className: X.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: J.intl.string($.default["/x7DVG"]),
                        }),
                    ],
                }),
                a &&
                    n &&
                    (0, s.jsx)("div", {
                        className: X.dM,
                        children: (0, s.jsx)(K.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: J.intl.string($.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
var el = n(88001),
    er = n(652215),
    ec = n(666240);
let eu = () =>
        (0, s.jsxs)(M.B, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: ec.wx,
            children: [
                (0, s.jsx)(p.D, { variant: "display-md", className: ec.Nd, children: (0, el.DP)() }),
                (0, s.jsx)(U.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    eo = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, s.jsxs)("div", {
            className: ec.bh,
            children: [
                (0, s.jsxs)(M.B, {
                    direction: "vertical",
                    gap: 8,
                    className: ec.iQ,
                    children: [
                        (0, s.jsx)(p.D, { variant: "heading-xl/semibold", children: t }),
                        (0, s.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, s.jsx)("div", { className: ec.UD, children: i }),
            ],
        });
    },
    ed = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: i, isLoading: a } = (0, Y.A)(),
            { premiumGroupMembers: l, isLoading: r } = (0, q.A)(i?.subscriptionId ?? null);
        if (r || null == l || a || null == i) return (0, s.jsx)(x.y, {});
        let c = i.subscriptionId,
            u = i.currentPeriodEnd,
            { primary: o, members: d } = l,
            { title: m, description: h } = (() => {
                switch (i.subscriptionStatus) {
                    case er.Dmq.CANCELED:
                        return {
                            title: J.intl.string($.default.mCwdPj),
                            description: J.intl.format($.default.wH9NYG, { endDate: u }),
                        };
                    case er.Dmq.PAUSED:
                        return {
                            title: J.intl.string($.default.IDyd1e),
                            description: J.intl.format($.default["8MfYhr"], {
                                premiumGroupProductName: (0, el.DP)(),
                                helpCenterLink: el.TE,
                            }),
                        };
                    case er.Dmq.PAST_DUE:
                    case er.Dmq.ACCOUNT_HOLD:
                    case er.Dmq.BILLING_RETRY:
                        return {
                            title: J.intl.string($.default.Duq8zp),
                            description: J.intl.format($.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, el.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: J.intl.formatToPlainString($.default.xiUjMF, {
                                premiumGroupProductName: (0, el.DP)(),
                            }),
                            description: J.intl.format($.default["2HEyqG"], {
                                primaryName: (0, B.$3)(o),
                                premiumGroupProductName: (0, el.DP)(),
                                helpCenterLink: el.TE,
                            }),
                        };
                }
            })();
        return (0, s.jsxs)(G.h, {
            className: ec.kL,
            color: "nitro-pink",
            children: [
                (0, s.jsx)(eu, {}),
                (0, s.jsxs)("div", {
                    className: ec.wS,
                    children: [
                        (0, s.jsx)(eo, {
                            title: m,
                            description: h,
                            button: (0, s.jsx)(O.$, {
                                variant: "secondary",
                                text: J.intl.string($.default.NCu2JD),
                                onClick: () => {
                                    (0, k.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("31788"),
                                            n.e("6159"),
                                            n.e("87075"),
                                            n.e("92796"),
                                        ]).then(n.bind(n, 205463));
                                        return (n) =>
                                            (0, s.jsx)(e, { ...n, premiumGroupSubscriptionId: c, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, s.jsxs)(M.B, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, s.jsx)(p.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: ec.Or,
                                    children: J.intl.string($.default["oqw/KW"]),
                                }),
                                (0, s.jsx)(et, { user: o, isOwnUser: !1 }),
                                d.map((e) => (0, s.jsx)(es, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    em = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: i,
            onInvite: a,
            onRemoveMember: l,
            onRemoveInvitedUser: r,
            numTotalSeats: c,
            numUsedSeats: u,
            numAvailableInvites: o,
        } = e;
        if (n || null == t) return (0, s.jsx)(x.y, {});
        let { primary: d, members: h, invitedUsers: f } = t;
        return (0, s.jsxs)(M.B, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, s.jsxs)(M.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, s.jsx)(p.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: J.intl.string($.default["oqw/KW"]),
                        }),
                        (0, s.jsx)(m.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: J.intl.format($.default["/a/UoP"], { usedSeats: u, totalSeats: c }),
                        }),
                    ],
                }),
                (0, s.jsx)(et, { user: d, isOwnUser: !0 }),
                h.map((e) => (0, s.jsx)(en, { user: e, onRemove: () => l(e) }, e.id)),
                f.map((e) => (0, s.jsx)(ei, { user: e, onRemove: () => r(e) }, e.id)),
                Array.from({ length: o }).map((e, t) =>
                    (0, s.jsx)(ea, { onInvite: a, canInvite: i }, `seat-available-${t}`),
                ),
            ],
        });
    },
    ep = (e) => {
        let { subscription: t, analyticsLocations: a } = e,
            { premiumGroupMembers: l, isLoading: r } = (0, q.A)(t.id),
            {
                numAvailableInvites: c,
                numTotalSeats: o,
                numUsedSeats: d,
            } = (0, u.cf)([z.A], () => ({
                numAvailableInvites: z.A.getNumAvailableInvites(),
                numTotalSeats: z.A.getNumTotalSeats(),
                numUsedSeats: z.A.getNumUsedSeats(),
            })),
            [m, p] = i.useState(!1),
            { status: h } = t,
            x = i.useCallback(() => {
                (0, k.openModalLazy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        n.e("34218"),
                        n.e("31788"),
                        n.e("6159"),
                        n.e("84820"),
                        n.e("87075"),
                        n.e("94161"),
                        n.e("35432"),
                        n.e("10741"),
                        n.e("80347"),
                        n.e("80166"),
                    ]).then(n.bind(n, 293061));
                    return (n) => (0, s.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: a });
                });
            }, [t, a]),
            f = i.useCallback(async () => {
                p(!0), await (0, H.Ir)(t, a), p(!1);
            }, [t, a]),
            C = () => {
                S.default.track(er.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, k.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("92652"),
                            n.e("44616"),
                            n.e("96680"),
                            n.e("85579"),
                        ]).then(n.bind(n, 785606));
                        return (n) => (0, s.jsx)(e, { ...n, subscription: t });
                    });
            },
            g = i.useMemo(() => !el.BE.includes(t.status) && c > 0, [t.status, c]),
            { title: y, description: j } = (() => {
                switch (h) {
                    case er.Dmq.CANCELED:
                        return {
                            title: J.intl.string($.default.KME8Q6),
                            description: J.intl.format($.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, el.DP)(),
                            }),
                        };
                    case er.Dmq.PAUSED:
                        return {
                            title: J.intl.string($.default["4flKoC"]),
                            description: J.intl.format($.default["Q++BmO"], { premiumGroupProductName: (0, el.DP)() }),
                        };
                    case er.Dmq.PAST_DUE:
                    case er.Dmq.ACCOUNT_HOLD:
                    case er.Dmq.BILLING_RETRY:
                        return {
                            title: J.intl.string($.default.cfeFEt),
                            description: J.intl.format($.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: el.TE,
                            }),
                        };
                    default:
                        return {
                            title: J.intl.formatToPlainString($.default.NRCfnQ, {
                                premiumGroupProductName: (0, el.DP)(),
                            }),
                            description: J.intl.format($.default.lvnrnb, {
                                totalSeats: el.LM,
                                premiumGroupProductName: (0, el.DP)(),
                                helpCenterLink: el.TE,
                            }),
                        };
                }
            })();
        return (0, s.jsxs)(G.h, {
            className: ec.kL,
            color: "nitro-pink",
            children: [
                (0, s.jsx)(eu, {}),
                (0, s.jsxs)("div", {
                    className: ec.wS,
                    children: [
                        (0, s.jsx)(eo, {
                            title: y,
                            description: j,
                            button: L.ki(t)
                                ? (0, s.jsx)(O.$, {
                                      variant: "expressive",
                                      size: "md",
                                      text: J.intl.string($.default.EFTJMQ),
                                      onClick: f,
                                      loading: m,
                                  })
                                : (0, s.jsxs)(M.B, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, s.jsx)(O.$, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: J.intl.string($.default.Tcmclj),
                                              onClick: C,
                                              disabled: !g,
                                          }),
                                          (0, s.jsx)(O.$, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: J.intl.string($.default.oO0EYw),
                                              onClick: x,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, s.jsx)(em, {
                            premiumGroupMembers: l,
                            isLoadingPremiumGroupMembers: r,
                            canInvite: g,
                            onInvite: C,
                            onRemoveMember: (e) => {
                                S.default.track(er.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, k.openModalLazy)(async () => {
                                        let { default: i } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) => (0, s.jsx)(i, { ...n, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                S.default.track(er.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let i = F.A.getInviteByUserId(e.id)?.invite;
                                (0, k.openModalLazy)(async () => {
                                    let { default: a } = await n.e("15554").then(n.bind(n, 115225));
                                    return (n) =>
                                        (0, s.jsx)(a, {
                                            ...n,
                                            subscriptionId: t.id,
                                            invitedUser: e,
                                            subscriptionGroupMemberId: i?.id,
                                        });
                                });
                            },
                            numTotalSeats: o,
                            numUsedSeats: d,
                            numAvailableInvites: c,
                        }),
                    ],
                }),
            ],
        });
    };
var eh = n(97352),
    ex = n(990078),
    ef = n(403581);
function eC(e) {
    let { color: t = "white", className: n } = e;
    return (0, s.jsx)("svg", {
        width: "90",
        height: "17",
        viewBox: "0 0 90 17",
        className: n,
        fill: t,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, s.jsx)("path", {
            d: "M23.6251 0.426116H30.5799L27.1822 16.4055H20.2274L23.6251 0.426116ZM15.5289 0.426116L13.9893 7.77662L10.0075 0.426116H3.39317L0 16.4055H6.34428L7.88389 9.10824L11.8391 16.4055H18.4754L21.8732 0.426116H15.5289ZM67.8758 5.75257C67.8758 8.62885 65.7787 10.6263 62.8322 11.079L65.8849 16.4055H58.1603L55.6916 11.079L54.5502 16.4055H47.5953L50.94 0.426116H61.6112C65.646 0.426116 67.8758 2.74312 67.8758 5.75257ZM60.6821 6.71133C60.6821 5.69931 59.9388 5.0335 58.8239 5.0335H56.9658L56.249 8.4158H58.8239C59.9388 8.4158 60.6821 7.72336 60.6821 6.71133ZM49.4004 0.426116H32.1196L30.9781 5.7792H36.1279L33.8715 16.4055H40.8263L43.1092 5.7792H48.259L49.4004 0.426116ZM89.0322 7.61683C89.0322 13.2629 83.7763 16.8316 78.016 16.8316C71.9372 16.8316 68.6191 13.1297 68.6191 9.10824C68.6191 3.24914 73.6095 0 79.6087 0C85.6079 0 89.0322 3.27577 89.0322 7.61683ZM82.0243 8.06958C82.0243 6.36511 81.0687 5.14003 79.1044 5.14003C76.9808 5.14003 75.5473 6.79123 75.5473 8.78865C75.5473 10.573 76.6888 11.7182 78.4407 11.7182C80.5909 11.7182 82.0243 9.9871 82.0243 8.06958Z",
            fill: t,
        }),
    });
}
var eg = n(580630),
    ey = n(511484),
    ej = n(811611),
    eA = n(473702),
    ev = n(788868),
    eN = n(657127);
let eP = { page: er.liQ.USER_SETTINGS, section: er.JJy.SETTINGS_PREMIUM, object: er.ZSU.CARD };
function eI(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: i, isDiscountActive: a } = e,
        l = L.Ay.getPlanIdFromInvoice(t, i),
        r = eh.A.get(l);
    if (null == r || null == i || null == n || null == n.duration || null == n.percentage) return null;
    let c = i.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === r.id;
    });
    if (null == c) return null;
    let u = (0, eg.$g)(c.amount, i.currency),
        o = (0, L.y8)(ev.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        d = (0, eg.$g)(o.amount, o.currency);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(p.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: J.intl.format(J.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, s.jsx)(m.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: a
                    ? J.intl.format(J.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: d })
                    : J.intl.format(J.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: J.intl.string(J.t.FPybU7),
                          fullPrice: d,
                      }),
            }),
        ],
    });
}
function eE(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        i = (0, ey.tQ)(n, ev.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(p.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: J.intl.format(J.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, s.jsx)(m.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: J.intl.format(J.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: i,
                    billingPeriod: (0, L.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let eS = function (e) {
    let t,
        i,
        {
            subscription: a,
            invoicePreview: l,
            isLoading: r,
            analyticsLocation: c,
            discountInfo: u,
            renewalChurnDiscountInfo: o,
            discountOffer: d,
        } = e,
        { analyticsLocations: p } = (0, j.Ay)(y.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        h = (e) => {
            (0, k.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("34218"),
                    n.e("31788"),
                    n.e("6159"),
                    n.e("84820"),
                    n.e("87075"),
                    n.e("94161"),
                    n.e("35432"),
                    n.e("10741"),
                    n.e("80347"),
                    n.e("80166"),
                ]).then(n.bind(n, 293061));
                return (n) =>
                    (0, s.jsx)(t, {
                        ...n,
                        premiumSubscription: a,
                        analyticsLocation: c,
                        analyticsLocations: p,
                        initialStep: e,
                    });
            });
        },
        x = L.Ay.getPlanIdFromInvoice(a, l),
        f = (0, ej.ux)(d?.expires_at);
    return (0, I.m1)(x)
        ? null
        : (0, s.jsx)("div", {
              className: eN.S6,
              children: (0, s.jsx)(G.h, {
                  color: "nitro-pink",
                  className: eN.YL,
                  children: (0, s.jsxs)("div", {
                      className: eN.mK,
                      children: [
                          (0, s.jsxs)("div", {
                              className: eN.Gp,
                              children: [
                                  (0, s.jsx)(eC, {
                                      color: "currentcolor",
                                      className: eN.fJ,
                                      "aria-label": J.intl.string(J.t.lpNrPu),
                                  }),
                                  (0, s.jsx)(m.E, {
                                      className: eN.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != d && f,
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", { className: eN.T }),
                          (0, s.jsxs)("div", {
                              className: eN.ly,
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: eN.Yc,
                                      children: [
                                          null != d
                                              ? (0, s.jsx)(eE, { discountOffer: d, premiumSubscription: a })
                                              : (0, s.jsx)(eI, {
                                                    premiumSubscription: a,
                                                    discountInfo: u ?? o,
                                                    invoicePreview: l,
                                                    isDiscountActive: null != u,
                                                }),
                                          (0, s.jsx)("div", {
                                              className: eN.e_,
                                              children:
                                                  ((t = L.Ay.isSwitchingPlansDisabled(a)),
                                                  (i = L.Ay.getSwitchingPlansDisabledMessage(a)),
                                                  L.Ay.isBaseSubscriptionCanceled(a)
                                                      ? (0, s.jsx)(O.$, {
                                                            variant: "expressive",
                                                            icon: ef.t,
                                                            size: "md",
                                                            text: J.intl.string(J.t.zrCzVB),
                                                            loading: r,
                                                            onClick: () => h(eA.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, s.jsxs)("div", {
                                                            className: eN.qK,
                                                            children: [
                                                                (0, s.jsx)(ex.m, {
                                                                    text: i,
                                                                    shouldShow: t && null != i,
                                                                    asContainer: !0,
                                                                    children: (0, s.jsx)(O.$, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: J.intl.string(J.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, P.A)({
                                                                                analyticsLocations: p,
                                                                                analyticsLocation: c,
                                                                                analyticsObject: eP,
                                                                                subscription: a,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, s.jsx)(O.$, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: J.intl.string(J.t["ETE/oC"]),
                                                                    loading: r,
                                                                    onClick: () => {
                                                                        a.status !== er.Dmq.CANCELED && h();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)("img", {
                                      className: eN.Hp,
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
var eb = n(284009),
    eL = n.n(eb),
    e_ = n(607399),
    eT = n(189213),
    eD = n(683071),
    ew = n(701273),
    eR = n(323082),
    eM = n(780964),
    eU = n(858897);
let ek = (0, n(945810).mj)({
    name: "2026-02-past-due-guild-boost-cancellation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eG = n(327479),
    eO = n(601107),
    eH = n(428797);
let eB = [er.Dmq.PAST_DUE, er.Dmq.ACCOUNT_HOLD, er.Dmq.BILLING_RETRY],
    eF = (e) => {
        let { transitionState: t, onClose: n, subscription: a, analyticsLocations: l, analyticsLocation: r } = e,
            [c, u] = i.useState(!1),
            [o, d] = i.useState(!1);
        i.useEffect(() => {
            S.default.track(er.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: a.id,
                location_stack: l,
            });
        }, []);
        let m = async () => {
                u(!0), d(!1);
                try {
                    await (0, eR.M2)(a.id, l, r),
                        S.default.track(er.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: a.id,
                            location_stack: l,
                        }),
                        (0, eR.hP)(),
                        n();
                } catch (e) {
                    d(!0), u(!1);
                }
            },
            p = [
                { text: J.intl.string(J.t.oEAioF), onClick: () => n(), variant: "secondary" },
                {
                    text: J.intl.string(J.t["cY+Oob"]),
                    onClick: () => m(),
                    disabled: c,
                    variant: "critical-primary",
                    loading: c,
                },
            ];
        return (0, s.jsx)(eT.Modal, {
            size: "md",
            transitionState: t,
            title: J.intl.string(J.t.LZunzZ),
            subtitle: J.intl.string(J.t.FClXh9),
            actions: p,
            onClose: async () => n(),
            children: o ? (0, s.jsx)(eD.w, { type: "critical", children: J.intl.string(J.t["5mlOCW"]) }) : null,
        });
    };
function ez(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: c,
        } = e,
        o = (0, u.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return eL()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: d } = (0, j.Ay)(y.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        p = (function (e) {
            let { location: t } = e,
                { enabled: n } = ek.useConfig({ location: t });
            return n;
        })({ location: "GuildBoostingHeader" });
    if (0 === (0, L.bx)(n.additionalPlans)) return null;
    let { status: h } = n,
        x = (0, L.$k)(n),
        f = p && !x && n.isBoostOnly && eB.includes(n.status);
    if (x) t = eH.v2;
    else
        switch (h) {
            case er.Dmq.PAST_DUE:
            case er.Dmq.ACCOUNT_HOLD:
            case er.Dmq.BILLING_RETRY:
                t = eH.P7;
                break;
            case er.Dmq.PAUSE_PENDING:
            case er.Dmq.PAUSED:
                t = n.pauseReason !== eO.qf.FRACTIONAL_PREMIUM ? eH.C7 : eH.wG;
                break;
            default:
                t = eH.wG;
        }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: l()(t, eH.Qn),
                children: [
                    (0, s.jsx)("div", { className: eH.Kq }),
                    (0, s.jsx)("div", { className: eH.OL }),
                    (0, s.jsxs)("div", {
                        className: eH.eC,
                        children: [
                            (0, s.jsx)("div", { className: l()(eH.Ab, { [eH.aD]: x }) }),
                            (0, s.jsx)("div", {
                                children: (0, L.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: o,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    r &&
                        (0, s.jsxs)("div", {
                            className: eH.BQ,
                            children: [
                                f &&
                                    (0, s.jsx)("div", {
                                        className: eH.x7,
                                        children: (0, s.jsx)(K.Q, {
                                            variant: "always-white",
                                            onClick: () => {
                                                eB.includes(n.status) &&
                                                    (0, k.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, s.jsx)(eF, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: d,
                                                                analyticsLocation: c,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: J.intl.string(J.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, s.jsx)(eG.A, {
                                    onClick: () => (0, eU.openUserSettings)(eM.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: J.intl.string(J.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !r &&
                (0, s.jsx)(m.E, {
                    className: eH.yW,
                    variant: "text-sm/normal",
                    children: J.intl.format(e_.Fr ? J.t.uxYBEa : J.t.k6haR9, { openAppHook: () => (0, ew.A)("app") }),
                }),
        ],
    });
}
var eq = n(868942),
    eY = n(420139),
    eV = n(349288),
    eZ = n(697446);
function eK(e) {
    let { subscription: t, renewalMutations: i, className: a, analyticsLocation: r } = e,
        c = (0, A.A)(),
        u = t.currentPeriodEnd;
    return (
        c.fractionalState === ev.xc.FP_SUB_PAUSED && (u = c.endsAt.toDate()),
        (0, s.jsxs)("div", {
            className: l()(eZ.zr, a),
            children: [
                (0, s.jsx)(d.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eZ.G }),
                (0, s.jsx)("div", {
                    className: eZ.Qq,
                    children: J.intl.format(J.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, L.OU)(i) : L.Ay.getDisplayName(i.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, s.jsx)(eV.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, k.openModalLazy)(async () => {
                                      let { default: e } = await n.e("65975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, s.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: i,
                                              analyticsLocation: r,
                                          });
                                  });
                          },
                          className: eZ.Lu,
                          children: J.intl.string(J.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eW = n(633287);
function eQ() {
    return (
        i.useEffect(() => {
            S.default.track(er.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, s.jsxs)("div", {
            className: eW.Zz,
            children: [
                (0, s.jsx)(d.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eW.Sh,
                    color: o.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, s.jsx)(m.E, { className: eW.Cy, variant: "text-sm/normal", children: J.intl.string(J.t.xFHEMa) }),
            ],
        })
    );
}
function e$() {
    return (
        i.useEffect(() => {
            S.default.track(er.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, s.jsxs)("div", {
            className: eW.Zz,
            children: [
                (0, s.jsx)(d.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eW.Sh,
                    color: o.A.unsafe_rawColors.RED_360.css,
                }),
                (0, s.jsx)(m.E, {
                    className: eW.Cy,
                    variant: "text-sm/normal",
                    children: J.intl.string(J.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function eJ(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: l } = (0, j.Ay)(y.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            S.default.track(er.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, s.jsxs)("div", {
            className: eW.Zz,
            children: [
                (0, s.jsx)(d.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eW.Sh,
                    color: o.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, s.jsx)(m.E, {
                    className: eW.Cy,
                    variant: "text-sm/normal",
                    children: J.intl.format(J.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, P.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: a, analyticsLocations: l });
                        },
                    }),
                }),
            ],
        })
    );
}
function eX(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: r } = e;
    return (0, s.jsxs)("div", {
        className: l()(eW.KF, a),
        children: [
            (0, s.jsx)(p.D, { variant: "heading-md/semibold", className: eW.QL, children: J.intl.string(J.t.KXQjfc) }),
            (0, s.jsx)("div", { children: L.Ay.getBillingInformationString(t, n, i, !1, r) }),
        ],
    });
}
function e0() {
    let e = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(p.D, {
                variant: "heading-lg/semibold",
                className: eW.Gf,
                children: J.intl.string(J.t["/gs+Pz"]),
            }),
            (0, s.jsx)("p", { className: eW.yV, children: J.intl.string(J.t.D8UpUo) }),
            !t &&
                (0, s.jsx)(h.Z, {
                    className: eW.wb,
                    type: h.Z.Types.CUSTOM,
                    children: (0, s.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, s.jsx)(N.A, { game: null, size: N.M.SMALL, className: eW.pV }),
                            (0, s.jsx)("span", { className: eW.O, children: J.intl.string(J.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, s.jsx)(ed, { currentUser: e }),
        ],
    });
}
function e2(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: i,
            busy: a,
            fromStandaloneBillingPage: r,
            showInvalidPaymentMethod: c,
            showNoPaymentMethod: u,
            fetchedCurrentInvoicePreview: o,
            fetchedRenewalInvoicePreview: d,
            fetchedOpenInvoice: m,
            isPremiumGroup: p,
        } = e,
        { analyticsLocations: h } = (0, j.Ay)(y.A.SUBSCRIPTION_DETAILS),
        g = null != o ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: h, analyticsLocation: n },
        [v] = (0, T.Kq)(g);
    v = o ?? v;
    let N =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: h,
                      analyticsLocation: n,
                  },
        [P] = (0, T.Kq)(N);
    P = d ?? P;
    let I = (0, A.A)(),
        E = (0, R.p)(),
        S = (0, D.nf)(),
        b = L.Ay.isBaseSubscriptionCanceled(t),
        w = (function (e, t) {
            let n = eh.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let s = (0, _._w)(n, t?.id, !1),
                    i = s.length > 0 ? s[0] : e.currency;
                if (1 === s.length && t?.id === e.paymentSourceId && (0, _.jJ)(n.id, i, t?.id)) return !0;
            }
            return !1;
        })(t, i);
    if (null == v || null == P) return (0, s.jsx)(x.y, {});
    let M = w ? (0, D.Bv)(P) : null,
        U = null != M || (null != S && (S.discountId === ev.q || S.discountId === ev.EG)),
        k =
            w && ((b && null != E) || (!b && U))
                ? (0, s.jsx)(eS, {
                      subscription: t,
                      invoicePreview: P,
                      paymentSource: i,
                      discountOffer: E,
                      renewalChurnDiscountInfo: M,
                      discountInfo: S,
                      isLoading: a,
                      analyticsLocation: n,
                  })
                : (0, s.jsx)(eq.A, {
                      subscription: t,
                      currentInvoicePreview: v,
                      renewalInvoicePreview: P,
                      paymentSource: i,
                      busy: a,
                      analyticsLocation: n,
                  });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: eW.fj,
                children: [
                    !p && k,
                    (0, s.jsx)(ez, {
                        subscription: t,
                        renewalInvoicePreview: v,
                        fromStandaloneBillingPage: r,
                        fractionalPremiumInfo: I,
                        analyticsLocation: n,
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                children: (0, s.jsx)(f.n, {
                    label: J.intl.string(J.t.Sb6wI1),
                    children: (0, s.jsxs)("div", {
                        className: eW.zH,
                        children: [
                            (0, s.jsx)(eX, {
                                subscription: t,
                                renewalInvoicePreview: P,
                                className: eW.g4,
                                fractionalPremiumInfo: I,
                                openInvoice: m,
                            }),
                            (0, s.jsx)("div", {
                                className: l()(eW.g4, { [eW.sE]: c }),
                                children: (0, s.jsx)(C.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? J.intl.formatToPlainString(J.t["rTk9v/"], {
                                                  paymentGatewayName: er.qmC[t.paymentGateway],
                                              })
                                            : J.intl.string(J.t.iRzXKd),
                                    children: (0, s.jsx)(eY.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: _.c_,
                                        highlightAddPaymentMethodButton: u || c,
                                        analyticsLocation: n,
                                        currentInvoicePreview: v,
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
let e3 = new Set([er.Dmq.ACTIVE, er.Dmq.PAST_DUE, er.Dmq.CANCELED, er.Dmq.PAUSE_PENDING, er.Dmq.PAUSED]);
function e1() {
    return (
        i.useEffect(() => {
            S.default.track(er.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, s.jsxs)("div", {
            className: eW.oU,
            children: [
                (0, s.jsx)(d.E, { size: "custom", width: 20, height: 20, color: o.A.unsafe_rawColors.RED_360.css }),
                (0, s.jsx)(m.E, {
                    className: eW.dk,
                    variant: "text-sm/normal",
                    children: J.intl.format(J.t["6eXiiC"], { helpCenterLink: b.A.getArticleURL(er.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function e6(e) {
    let t,
        {
            subscription: n,
            subscriptions: a,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: o = !0,
            analyticsLocation: d,
            shouldRefetchInvoicesOnSubscriptionUpdate: m,
        } = e;
    null != a && null != a[0] && (n = a[0]);
    let h = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        { analyticsLocations: C } = (0, j.Ay)(y.A.SUBSCRIPTION_DETAILS),
        A = (0, R.p)(),
        v = null != a ? a.slice(1) : [],
        [N, P] = i.useState(0);
    i.useEffect(() => {
        if (!m) return;
        let e = (e) => {
            e.subscription.id === n.id && P((e) => e + 1);
        };
        return (
            g.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                g.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [n.id, m]);
    let [S] = (0, T.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: d,
            fetchKey: N,
        }),
        [b] = (0, T.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: C,
            analyticsLocation: d,
            userDiscountOfferId: A?.id,
            fetchKey: N,
        }),
        L = l?.invalid,
        _ = (0, u.bG)([E.default], () => E.default.getCurrentUser()?.hasFreePremium()),
        D = c()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = b?.total ?? 0,
        k =
            !M &&
            U > 0 &&
            (7 >= D.diff(c()(), "days") || n.status === er.Dmq.PAST_DUE) &&
            !_ &&
            !n.isPurchasedExternally,
        G = L && n.status === er.Dmq.PAST_DUE && !_ && !n.isPurchasedExternally,
        O = (0, w.l)(),
        H = !_ && O,
        B = n?.status === er.Dmq.PAST_DUE,
        F = B ? c()().diff(c()(n.currentPeriodStart), "days") : 0,
        z = null != h && h.isPremiumGroupPrimary(),
        q = n.hasAnyPremiumGroup,
        [Y] = (0, T.C8)({ subscriptionId: n.id, preventFetch: !(H || B) });
    return null == S || null == b
        ? (0, s.jsx)(x.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, I.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, s.jsx)(eK, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: eW.Il,
                  analyticsLocation: d,
              })),
          (0, s.jsxs)(f.n, {
              label: J.intl.string(J.t["/gs+Pz"]),
              description: J.intl.string(J.t.D8UpUo),
              children: [
                  k ? (0, s.jsx)(eQ, {}) : null,
                  G ? (0, s.jsx)(e$, {}) : null,
                  H && null != Y ? (0, s.jsx)(eJ, { daysPastDue: F, subscription: n, openInvoiceId: Y.id }) : null,
                  z && q && (0, s.jsx)(ep, { subscription: n, analyticsLocations: C }),
                  t,
                  (0, s.jsxs)("div", {
                      children: [
                          (0, s.jsx)("div", {
                              className: v.length > 0 ? eW.HZ : eW.__invalid_singleSubscription,
                              children: (0, s.jsx)(e2, {
                                  subscription: n,
                                  analyticsLocation: d,
                                  paymentSource: l,
                                  busy: r,
                                  fromStandaloneBillingPage: o,
                                  showNoPaymentMethod: k,
                                  showInvalidPaymentMethod: G,
                                  fetchedCurrentInvoicePreview: S,
                                  fetchedRenewalInvoicePreview: b,
                                  fetchedOpenInvoice: Y,
                                  isPremiumGroup: z,
                              }),
                          }),
                          v.map((e, t) =>
                              (0, s.jsxs)(
                                  "div",
                                  {
                                      className: eW.HZ,
                                      children: [
                                          (0, s.jsx)(p.D, {
                                              variant: "heading-md/semibold",
                                              className: eW.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, s.jsx)(e2, {
                                              subscription: e,
                                              analyticsLocation: d,
                                              paymentSource: l,
                                              busy: r,
                                              fromStandaloneBillingPage: o,
                                              showNoPaymentMethod: k,
                                              showInvalidPaymentMethod: G,
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
