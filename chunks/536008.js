n.d(t, { Ay: () => e6, Sb: () => e1, TC: () => e0, Hy: () => e2 });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(989349),
    c = n.n(l),
    o = n(17928),
    d = n(661531),
    u = n(695366),
    m = n(834730),
    p = n(534514),
    h = n(359778),
    _ = n(289873),
    x = n(270003),
    f = n(452027),
    g = n(228366),
    C = n(793574),
    y = n(688810),
    A = n(531260),
    v = n(235986),
    b = n(137177),
    j = n(532794),
    I = n(832946),
    S = n(287809),
    P = n(954571),
    N = n(975571),
    E = n(927578),
    L = n(83617),
    T = n(543767),
    D = n(526292),
    w = n(155984),
    R = n(131168),
    M = n(331322),
    U = n(508770),
    k = n(192308),
    G = n(315629),
    B = n(821609),
    O = n(158032),
    H = n(427262),
    F = n(59784),
    z = n(233317),
    q = n(622017),
    Y = n(113090),
    V = n(778712),
    W = n(97808),
    K = n(123292),
    Z = n(950305),
    Q = n(854627),
    $ = n(466919),
    J = n(985018),
    X = n(339446);
let ee = (e) => {
        let { user: t, isOwnUser: n, label: a, removeButton: l, isFaded: c } = e,
            { avatarSrc: o, eventHandlers: d } = (0, Q.A)({ userId: t?.id, size: V._3.SIZE_24 }),
            u = (0, H.$3)(t),
            [p, h] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: r()(X.kL, { [X.RE]: null != l }),
            onMouseEnter: () => h(!0),
            onMouseLeave: () => h(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: r()(X.TT, { [X.zj]: c }),
                    children: [
                        (0, i.jsx)(W.eu, { className: X.my, src: o, "aria-label": u, size: V._3.SIZE_24, ...d }),
                        (0, i.jsxs)(m.E, {
                            className: X.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [u, !!n && ` (${J.intl.string(J.t.LuZzxn)})`],
                        }),
                        null != a &&
                            (0, i.jsxs)(m.E, {
                                className: X.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, i.jsx)("span", { className: X.me, children: "\xb7" }), a],
                            }),
                    ],
                }),
                null != l &&
                    p &&
                    (0, i.jsx)("div", {
                        className: X.dM,
                        children: (0, i.jsx)(K.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: l.label,
                            onClick: l.onRemove,
                        }),
                    }),
            ],
        });
    },
    et = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(ee, { user: t, isOwnUser: n, label: J.intl.string($.default.vc2xys) });
    },
    en = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(ee, {
            user: t,
            label: J.intl.string($.default.mnt50A),
            removeButton: { onRemove: n, label: J.intl.string(J.t.N86XcP) },
        });
    },
    ei = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, i.jsx)(ee, { user: t, isOwnUser: n, label: J.intl.string($.default.mnt50A) });
    },
    es = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, i.jsx)(ee, {
            user: t,
            label: J.intl.string($.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: n, label: J.intl.string($.default["2blqtw"]) },
        });
    },
    ea = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [a, l] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: r()(X.kL, { [X.RE]: n }),
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            children: [
                (0, i.jsxs)("div", {
                    className: X.TT,
                    children: [
                        (0, i.jsx)("div", {
                            className: r()(X.vG, X.my),
                            children: (0, i.jsx)(Z.n, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                        }),
                        (0, i.jsx)(m.E, {
                            className: X.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: J.intl.string($.default["/x7DVG"]),
                        }),
                    ],
                }),
                a &&
                    n &&
                    (0, i.jsx)("div", {
                        className: X.dM,
                        children: (0, i.jsx)(K.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: J.intl.string($.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
var er = n(88001),
    el = n(652215),
    ec = n(666240);
let eo = () =>
        (0, i.jsxs)(M.B, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: ec.wx,
            children: [
                (0, i.jsx)(p.D, { variant: "display-md", className: ec.Nd, children: (0, er.DP)() }),
                (0, i.jsx)(U.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    ed = (e) => {
        let { title: t, description: n, button: s } = e;
        return (0, i.jsxs)("div", {
            className: ec.bh,
            children: [
                (0, i.jsxs)(M.B, {
                    direction: "vertical",
                    gap: 8,
                    className: ec.iQ,
                    children: [
                        (0, i.jsx)(p.D, { variant: "heading-xl/semibold", children: t }),
                        (0, i.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, i.jsx)("div", { className: ec.UD, children: s }),
            ],
        });
    },
    eu = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: a } = (0, Y.A)(),
            { premiumGroupMembers: r, isLoading: l } = (0, q.A)(s?.subscriptionId ?? null);
        if (l || null == r || a || null == s) return (0, i.jsx)(_.y, {});
        let c = s.subscriptionId,
            o = s.currentPeriodEnd,
            { primary: d, members: u } = r,
            { title: m, description: h } = (() => {
                switch (s.subscriptionStatus) {
                    case el.Dmq.CANCELED:
                        return {
                            title: J.intl.string($.default.mCwdPj),
                            description: J.intl.format($.default.wH9NYG, { endDate: o }),
                        };
                    case el.Dmq.PAUSED:
                        return {
                            title: J.intl.string($.default.IDyd1e),
                            description: J.intl.format($.default["8MfYhr"], {
                                premiumGroupProductName: (0, er.DP)(),
                                helpCenterLink: er.TE,
                            }),
                        };
                    case el.Dmq.PAST_DUE:
                    case el.Dmq.ACCOUNT_HOLD:
                    case el.Dmq.BILLING_RETRY:
                        return {
                            title: J.intl.string($.default.Duq8zp),
                            description: J.intl.format($.default["MHn/D6"], {
                                endDate: o,
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: J.intl.formatToPlainString($.default.xiUjMF, {
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                            description: J.intl.format($.default["2HEyqG"], {
                                primaryName: (0, H.$3)(d),
                                premiumGroupProductName: (0, er.DP)(),
                                helpCenterLink: er.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(G.h, {
            className: ec.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(eo, {}),
                (0, i.jsxs)("div", {
                    className: ec.wS,
                    children: [
                        (0, i.jsx)(ed, {
                            title: m,
                            description: h,
                            button: (0, i.jsx)(B.$, {
                                variant: "secondary",
                                text: J.intl.string($.default.NCu2JD),
                                onClick: () => {
                                    (0, k.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("6159"), n.e("95721")]).then(
                                            n.bind(n, 205463),
                                        );
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: c, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, i.jsxs)(M.B, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: ec.Or,
                                    children: J.intl.string($.default["oqw/KW"]),
                                }),
                                (0, i.jsx)(et, { user: d, isOwnUser: !1 }),
                                u.map((e) => (0, i.jsx)(ei, { user: e, isOwnUser: e.id === t?.id }, e.id)),
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
            canInvite: s,
            onInvite: a,
            onRemoveMember: r,
            onRemoveInvitedUser: l,
            numTotalSeats: c,
            numUsedSeats: o,
            numAvailableInvites: d,
        } = e;
        if (n || null == t) return (0, i.jsx)(_.y, {});
        let { primary: u, members: h, invitedUsers: x } = t;
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
                        (0, i.jsx)(p.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: J.intl.string($.default["oqw/KW"]),
                        }),
                        (0, i.jsx)(m.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: J.intl.format($.default["/a/UoP"], { usedSeats: o, totalSeats: c }),
                        }),
                    ],
                }),
                (0, i.jsx)(et, { user: u, isOwnUser: !0 }),
                h.map((e) => (0, i.jsx)(en, { user: e, onRemove: () => r(e) }, e.id)),
                x.map((e) => (0, i.jsx)(es, { user: e, onRemove: () => l(e) }, e.id)),
                Array.from({ length: d }).map((e, t) =>
                    (0, i.jsx)(ea, { onInvite: a, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    ep = (e) => {
        let { subscription: t, analyticsLocations: a } = e,
            { premiumGroupMembers: r, isLoading: l } = (0, q.A)(t.id),
            {
                numAvailableInvites: c,
                numTotalSeats: d,
                numUsedSeats: u,
            } = (0, o.cf)([z.A], () => ({
                numAvailableInvites: z.A.getNumAvailableInvites(),
                numTotalSeats: z.A.getNumTotalSeats(),
                numUsedSeats: z.A.getNumUsedSeats(),
            })),
            [m, p] = s.useState(!1),
            { status: h } = t,
            _ = s.useCallback(() => {
                (0, k.openModalLazy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        n.e("6159"),
                        n.e("98083"),
                        n.e("31179"),
                    ]).then(n.bind(n, 293061));
                    return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: a });
                });
            }, [t, a]),
            x = s.useCallback(async () => {
                p(!0), await (0, O.Ir)(t, a), p(!1);
            }, [t, a]),
            f = () => {
                P.default.track(el.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, k.openModalLazy)(async () => {
                        let { default: e } = await n.e("85579").then(n.bind(n, 785606));
                        return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                    });
            },
            g = s.useMemo(() => !er.BE.includes(t.status) && c > 0, [t.status, c]),
            { title: C, description: y } = (() => {
                switch (h) {
                    case el.Dmq.CANCELED:
                        return {
                            title: J.intl.string($.default.KME8Q6),
                            description: J.intl.format($.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                        };
                    case el.Dmq.PAUSED:
                        return {
                            title: J.intl.string($.default["4flKoC"]),
                            description: J.intl.format($.default["Q++BmO"], { premiumGroupProductName: (0, er.DP)() }),
                        };
                    case el.Dmq.PAST_DUE:
                    case el.Dmq.ACCOUNT_HOLD:
                    case el.Dmq.BILLING_RETRY:
                        return {
                            title: J.intl.string($.default.cfeFEt),
                            description: J.intl.format($.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: er.TE,
                            }),
                        };
                    default:
                        return {
                            title: J.intl.formatToPlainString($.default.NRCfnQ, {
                                premiumGroupProductName: (0, er.DP)(),
                            }),
                            description: J.intl.format($.default.lvnrnb, {
                                totalSeats: er.LM,
                                premiumGroupProductName: (0, er.DP)(),
                                helpCenterLink: er.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(G.h, {
            className: ec.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(eo, {}),
                (0, i.jsxs)("div", {
                    className: ec.wS,
                    children: [
                        (0, i.jsx)(ed, {
                            title: C,
                            description: y,
                            button: E.ki(t)
                                ? (0, i.jsx)(B.$, {
                                      variant: "expressive",
                                      size: "md",
                                      text: J.intl.string($.default.EFTJMQ),
                                      onClick: x,
                                      loading: m,
                                  })
                                : (0, i.jsxs)(M.B, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, i.jsx)(B.$, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: J.intl.string($.default.Tcmclj),
                                              onClick: f,
                                              disabled: !g,
                                          }),
                                          (0, i.jsx)(B.$, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: J.intl.string($.default.oO0EYw),
                                              onClick: _,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, i.jsx)(em, {
                            premiumGroupMembers: r,
                            isLoadingPremiumGroupMembers: l,
                            canInvite: g,
                            onInvite: f,
                            onRemoveMember: (e) => {
                                P.default.track(el.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, k.openModalLazy)(async () => {
                                        let { default: s } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) => (0, i.jsx)(s, { ...n, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                P.default.track(el.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = F.A.getInviteByUserId(e.id)?.invite;
                                (0, k.openModalLazy)(async () => {
                                    let { default: a } = await n.e("15554").then(n.bind(n, 115225));
                                    return (n) =>
                                        (0, i.jsx)(a, {
                                            ...n,
                                            subscriptionId: t.id,
                                            invitedUser: e,
                                            subscriptionGroupMemberId: s?.id,
                                        });
                                });
                            },
                            numTotalSeats: d,
                            numUsedSeats: u,
                            numAvailableInvites: c,
                        }),
                    ],
                }),
            ],
        });
    };
var eh = n(97352),
    e_ = n(990078),
    ex = n(403581);
function ef(e) {
    let { color: t = "white", className: n } = e;
    return (0, i.jsx)("svg", {
        width: "90",
        height: "17",
        viewBox: "0 0 90 17",
        className: n,
        fill: t,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M23.6251 0.426116H30.5799L27.1822 16.4055H20.2274L23.6251 0.426116ZM15.5289 0.426116L13.9893 7.77662L10.0075 0.426116H3.39317L0 16.4055H6.34428L7.88389 9.10824L11.8391 16.4055H18.4754L21.8732 0.426116H15.5289ZM67.8758 5.75257C67.8758 8.62885 65.7787 10.6263 62.8322 11.079L65.8849 16.4055H58.1603L55.6916 11.079L54.5502 16.4055H47.5953L50.94 0.426116H61.6112C65.646 0.426116 67.8758 2.74312 67.8758 5.75257ZM60.6821 6.71133C60.6821 5.69931 59.9388 5.0335 58.8239 5.0335H56.9658L56.249 8.4158H58.8239C59.9388 8.4158 60.6821 7.72336 60.6821 6.71133ZM49.4004 0.426116H32.1196L30.9781 5.7792H36.1279L33.8715 16.4055H40.8263L43.1092 5.7792H48.259L49.4004 0.426116ZM89.0322 7.61683C89.0322 13.2629 83.7763 16.8316 78.016 16.8316C71.9372 16.8316 68.6191 13.1297 68.6191 9.10824C68.6191 3.24914 73.6095 0 79.6087 0C85.6079 0 89.0322 3.27577 89.0322 7.61683ZM82.0243 8.06958C82.0243 6.36511 81.0687 5.14003 79.1044 5.14003C76.9808 5.14003 75.5473 6.79123 75.5473 8.78865C75.5473 10.573 76.6888 11.7182 78.4407 11.7182C80.5909 11.7182 82.0243 9.9871 82.0243 8.06958Z",
            fill: t,
        }),
    });
}
var eg = n(580630),
    eC = n(511484),
    ey = n(811611),
    eA = n(473702),
    ev = n(788868),
    eb = n(657127);
let ej = { page: el.liQ.USER_SETTINGS, section: el.JJy.SETTINGS_PREMIUM, object: el.ZSU.CARD };
function eI(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: s, isDiscountActive: a } = e,
        r = E.Ay.getPlanIdFromInvoice(t, s),
        l = eh.A.get(r);
    if (null == l || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let c = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === l.id;
    });
    if (null == c) return null;
    let o = (0, eg.$g)(c.amount, s.currency),
        d = (0, E.y8)(ev.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        u = (0, eg.$g)(d.amount, d.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: J.intl.format(J.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(m.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: a
                    ? J.intl.format(J.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: u })
                    : J.intl.format(J.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: o,
                          billingPeriod: J.intl.string(J.t.FPybU7),
                          fullPrice: u,
                      }),
            }),
        ],
    });
}
function eS(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        s = (0, eC.tQ)(n, ev.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: J.intl.format(J.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(m.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: J.intl.format(J.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: s,
                    billingPeriod: (0, E.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let eP = function (e) {
    let t,
        s,
        {
            subscription: a,
            invoicePreview: r,
            isLoading: l,
            analyticsLocation: c,
            discountInfo: o,
            renewalChurnDiscountInfo: d,
            discountOffer: u,
        } = e,
        { analyticsLocations: p } = (0, y.Ay)(C.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        h = (e) => {
            (0, k.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("6159"),
                    n.e("98083"),
                    n.e("31179"),
                ]).then(n.bind(n, 293061));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: a,
                        analyticsLocation: c,
                        analyticsLocations: p,
                        initialStep: e,
                    });
            });
        },
        _ = E.Ay.getPlanIdFromInvoice(a, r),
        x = (0, ey.ux)(u?.expires_at);
    return (0, I.m1)(_)
        ? null
        : (0, i.jsx)("div", {
              className: eb.S6,
              children: (0, i.jsx)(G.h, {
                  color: "nitro-pink",
                  className: eb.YL,
                  children: (0, i.jsxs)("div", {
                      className: eb.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eb.Gp,
                              children: [
                                  (0, i.jsx)(ef, {
                                      color: "currentcolor",
                                      className: eb.fJ,
                                      "aria-label": J.intl.string(J.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(m.E, {
                                      className: eb.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != u && x,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: eb.T }),
                          (0, i.jsxs)("div", {
                              className: eb.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: eb.Yc,
                                      children: [
                                          null != u
                                              ? (0, i.jsx)(eS, { discountOffer: u, premiumSubscription: a })
                                              : (0, i.jsx)(eI, {
                                                    premiumSubscription: a,
                                                    discountInfo: o ?? d,
                                                    invoicePreview: r,
                                                    isDiscountActive: null != o,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: eb.e_,
                                              children:
                                                  ((t = E.Ay.isSwitchingPlansDisabled(a)),
                                                  (s = E.Ay.getSwitchingPlansDisabledMessage(a)),
                                                  E.Ay.isBaseSubscriptionCanceled(a)
                                                      ? (0, i.jsx)(B.$, {
                                                            variant: "expressive",
                                                            icon: ex.t,
                                                            size: "md",
                                                            text: J.intl.string(J.t.zrCzVB),
                                                            loading: l,
                                                            onClick: () => h(eA.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: eb.qK,
                                                            children: [
                                                                (0, i.jsx)(e_.m, {
                                                                    text: s,
                                                                    shouldShow: t && null != s,
                                                                    asContainer: !0,
                                                                    children: (0, i.jsx)(B.$, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: J.intl.string(J.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, j.A)({
                                                                                analyticsLocations: p,
                                                                                analyticsLocation: c,
                                                                                analyticsObject: ej,
                                                                                subscription: a,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(B.$, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: J.intl.string(J.t["ETE/oC"]),
                                                                    loading: l,
                                                                    onClick: () => {
                                                                        a.status !== el.Dmq.CANCELED && h();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", {
                                      className: eb.Hp,
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
var eN = n(284009),
    eE = n.n(eN),
    eL = n(607399),
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
    eB = n(601107),
    eO = n(428797);
let eH = [el.Dmq.PAST_DUE, el.Dmq.ACCOUNT_HOLD, el.Dmq.BILLING_RETRY],
    eF = (e) => {
        let { transitionState: t, onClose: n, subscription: a, analyticsLocations: r, analyticsLocation: l } = e,
            [c, o] = s.useState(!1),
            [d, u] = s.useState(!1);
        s.useEffect(() => {
            P.default.track(el.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: a.id,
                location_stack: r,
            });
        }, []);
        let m = async () => {
                o(!0), u(!1);
                try {
                    await (0, eR.M2)(a.id, r, l),
                        P.default.track(el.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: a.id,
                            location_stack: r,
                        }),
                        (0, eR.hP)(),
                        n();
                } catch (e) {
                    u(!0), o(!1);
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
        return (0, i.jsx)(eT.Modal, {
            size: "md",
            transitionState: t,
            title: J.intl.string(J.t.LZunzZ),
            subtitle: J.intl.string(J.t.FClXh9),
            actions: p,
            onClose: async () => n(),
            children: d ? (0, i.jsx)(eD.w, { type: "critical", children: J.intl.string(J.t["5mlOCW"]) }) : null,
        });
    };
function ez(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: l = !0,
            analyticsLocation: c,
        } = e,
        d = (0, o.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return eE()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: u } = (0, y.Ay)(C.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        p = (function (e) {
            let { location: t } = e,
                { enabled: n } = ek.useConfig({ location: t });
            return n;
        })({ location: "GuildBoostingHeader" });
    if (0 === (0, E.bx)(n.additionalPlans)) return null;
    let { status: h } = n,
        _ = (0, E.$k)(n),
        x = p && !_ && n.isBoostOnly && eH.includes(n.status);
    if (_) t = eO.v2;
    else
        switch (h) {
            case el.Dmq.PAST_DUE:
            case el.Dmq.ACCOUNT_HOLD:
            case el.Dmq.BILLING_RETRY:
                t = eO.P7;
                break;
            case el.Dmq.PAUSE_PENDING:
            case el.Dmq.PAUSED:
                t = n.pauseReason !== eB.qf.FRACTIONAL_PREMIUM ? eO.C7 : eO.wG;
                break;
            default:
                t = eO.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(t, eO.Qn),
                children: [
                    (0, i.jsx)("div", { className: eO.Kq }),
                    (0, i.jsx)("div", { className: eO.OL }),
                    (0, i.jsxs)("div", {
                        className: eO.eC,
                        children: [
                            (0, i.jsx)("div", { className: r()(eO.Ab, { [eO.aD]: _ }) }),
                            (0, i.jsx)("div", {
                                children: (0, E.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: d,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    l &&
                        (0, i.jsxs)("div", {
                            className: eO.BQ,
                            children: [
                                x &&
                                    (0, i.jsx)("div", {
                                        className: eO.x7,
                                        children: (0, i.jsx)(K.Q, {
                                            variant: "always-white",
                                            onClick: () => {
                                                eH.includes(n.status) &&
                                                    (0, k.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(eF, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: u,
                                                                analyticsLocation: c,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: J.intl.string(J.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(eG.A, {
                                    onClick: () => (0, eU.openUserSettings)(eM.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: J.intl.string(J.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !l &&
                (0, i.jsx)(m.E, {
                    className: eO.yW,
                    variant: "text-sm/normal",
                    children: J.intl.format(eL.Fr ? J.t.uxYBEa : J.t.k6haR9, { openAppHook: () => (0, ew.A)("app") }),
                }),
        ],
    });
}
var eq = n(868942),
    eY = n(420139),
    eV = n(349288),
    eW = n(697446);
function eK(e) {
    let { subscription: t, renewalMutations: s, className: a, analyticsLocation: l } = e,
        c = (0, A.A)(),
        o = t.currentPeriodEnd;
    return (
        c.fractionalState === ev.xc.FP_SUB_PAUSED && (o = c.endsAt.toDate()),
        (0, i.jsxs)("div", {
            className: r()(eW.zr, a),
            children: [
                (0, i.jsx)(u.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eW.G }),
                (0, i.jsx)("div", {
                    className: eW.Qq,
                    children: J.intl.format(J.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, E.OU)(s) : E.Ay.getDisplayName(s.planId),
                        date: o,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(eV.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, k.openModalLazy)(async () => {
                                      let { default: e } = await n.e("65975").then(n.bind(n, 702698));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              subscription: t,
                                              renewalMutations: s,
                                              analyticsLocation: l,
                                          });
                                  });
                          },
                          className: eW.Lu,
                          children: J.intl.string(J.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eZ = n(633287);
function eQ() {
    return (
        s.useEffect(() => {
            P.default.track(el.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eZ.Zz,
            children: [
                (0, i.jsx)(u.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eZ.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(m.E, { className: eZ.Cy, variant: "text-sm/normal", children: J.intl.string(J.t.xFHEMa) }),
            ],
        })
    );
}
function e$() {
    return (
        s.useEffect(() => {
            P.default.track(el.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eZ.Zz,
            children: [
                (0, i.jsx)(u.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eZ.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(m.E, {
                    className: eZ.Cy,
                    variant: "text-sm/normal",
                    children: J.intl.string(J.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function eJ(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: r } = (0, y.Ay)(C.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            P.default.track(el.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: eZ.Zz,
            children: [
                (0, i.jsx)(u.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eZ.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(m.E, {
                    className: eZ.Cy,
                    variant: "text-sm/normal",
                    children: J.intl.format(J.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, j.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: a, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function eX(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: s, className: a, fractionalPremiumInfo: l } = e;
    return (0, i.jsxs)("div", {
        className: r()(eZ.KF, a),
        children: [
            (0, i.jsx)(p.D, { variant: "heading-md/semibold", className: eZ.QL, children: J.intl.string(J.t.KXQjfc) }),
            (0, i.jsx)("div", { children: E.Ay.getBillingInformationString(t, n, s, !1, l) }),
        ],
    });
}
function e0() {
    let e = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(p.D, {
                variant: "heading-lg/semibold",
                className: eZ.Gf,
                children: J.intl.string(J.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: eZ.yV, children: J.intl.string(J.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(h.Z, {
                    className: eZ.wb,
                    type: h.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(v.A, {
                        align: v.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(b.A, { game: null, size: b.M.SMALL, className: eZ.pV }),
                            (0, i.jsx)("span", { className: eZ.O, children: J.intl.string(J.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(eu, { currentUser: e }),
        ],
    });
}
function e3(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: s,
            busy: a,
            fromStandaloneBillingPage: l,
            showInvalidPaymentMethod: c,
            showNoPaymentMethod: o,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: u,
            fetchedOpenInvoice: m,
            isPremiumGroup: p,
        } = e,
        { analyticsLocations: h } = (0, y.Ay)(C.A.SUBSCRIPTION_DETAILS),
        g = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: h, analyticsLocation: n },
        [v] = (0, T.Kq)(g);
    v = d ?? v;
    let b =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: h,
                      analyticsLocation: n,
                  },
        [j] = (0, T.Kq)(b);
    j = u ?? j;
    let I = (0, A.A)(),
        S = (0, R.p)(),
        P = (0, D.nf)(),
        N = E.Ay.isBaseSubscriptionCanceled(t),
        w = (function (e, t) {
            let n = eh.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, L._w)(n, t?.id, !1),
                    s = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, L.jJ)(n.id, s, t?.id)) return !0;
            }
            return !1;
        })(t, s);
    if (null == v || null == j) return (0, i.jsx)(_.y, {});
    let M = w ? (0, D.Bv)(j) : null,
        U = null != M || (null != P && (P.discountId === ev.q || P.discountId === ev.EG)),
        k =
            w && ((N && null != S) || (!N && U))
                ? (0, i.jsx)(eP, {
                      subscription: t,
                      invoicePreview: j,
                      paymentSource: s,
                      discountOffer: S,
                      renewalChurnDiscountInfo: M,
                      discountInfo: P,
                      isLoading: a,
                      analyticsLocation: n,
                  })
                : (0, i.jsx)(eq.A, {
                      subscription: t,
                      currentInvoicePreview: v,
                      renewalInvoicePreview: j,
                      paymentSource: s,
                      busy: a,
                      analyticsLocation: n,
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: eZ.fj,
                children: [
                    !p && k,
                    (0, i.jsx)(ez, {
                        subscription: t,
                        renewalInvoicePreview: v,
                        fromStandaloneBillingPage: l,
                        fractionalPremiumInfo: I,
                        analyticsLocation: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(x.n, {
                    label: J.intl.string(J.t.Sb6wI1),
                    children: (0, i.jsxs)("div", {
                        className: eZ.zH,
                        children: [
                            (0, i.jsx)(eX, {
                                subscription: t,
                                renewalInvoicePreview: j,
                                className: eZ.g4,
                                fractionalPremiumInfo: I,
                                openInvoice: m,
                            }),
                            (0, i.jsx)("div", {
                                className: r()(eZ.g4, { [eZ.sE]: c }),
                                children: (0, i.jsx)(f.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? J.intl.formatToPlainString(J.t["rTk9v/"], {
                                                  paymentGatewayName: el.qmC[t.paymentGateway],
                                              })
                                            : J.intl.string(J.t.iRzXKd),
                                    children: (0, i.jsx)(eY.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: L.c_,
                                        highlightAddPaymentMethodButton: o || c,
                                        analyticsLocation: n,
                                        currentInvoicePreview: v,
                                        dropdownClassName: eZ.sp,
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
let e2 = new Set([el.Dmq.ACTIVE, el.Dmq.PAST_DUE, el.Dmq.CANCELED, el.Dmq.PAUSE_PENDING, el.Dmq.PAUSED]);
function e1() {
    return (
        s.useEffect(() => {
            P.default.track(el.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: eZ.oU,
            children: [
                (0, i.jsx)(u.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(m.E, {
                    className: eZ.dk,
                    variant: "text-sm/normal",
                    children: J.intl.format(J.t["6eXiiC"], { helpCenterLink: N.A.getArticleURL(el.MVz.NITRO) }),
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
            paymentSource: r,
            busy: l,
            fromStandaloneBillingPage: d = !0,
            analyticsLocation: u,
            shouldRefetchInvoicesOnSubscriptionUpdate: m,
        } = e;
    null != a && null != a[0] && (n = a[0]);
    let h = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        { analyticsLocations: f } = (0, y.Ay)(C.A.SUBSCRIPTION_DETAILS),
        A = (0, R.p)(),
        v = null != a ? a.slice(1) : [],
        [b, j] = s.useState(0);
    s.useEffect(() => {
        if (!m) return;
        let e = (e) => {
            e.subscription.id === n.id && j((e) => e + 1);
        };
        return (
            g.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                g.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [n.id, m]);
    let [P] = (0, T.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: f,
            analyticsLocation: u,
            fetchKey: b,
        }),
        [N] = (0, T.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: f,
            analyticsLocation: u,
            userDiscountOfferId: A?.id,
            fetchKey: b,
        }),
        E = r?.invalid,
        L = (0, o.bG)([S.default], () => S.default.getCurrentUser()?.hasFreePremium()),
        D = c()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = N?.total ?? 0,
        k =
            !M &&
            U > 0 &&
            (7 >= D.diff(c()(), "days") || n.status === el.Dmq.PAST_DUE) &&
            !L &&
            !n.isPurchasedExternally,
        G = E && n.status === el.Dmq.PAST_DUE && !L && !n.isPurchasedExternally,
        B = (0, w.l)(),
        O = !L && B,
        H = n?.status === el.Dmq.PAST_DUE,
        F = H ? c()().diff(c()(n.currentPeriodStart), "days") : 0,
        z = null != h && h.isPremiumGroupPrimary(),
        q = n.hasAnyPremiumGroup,
        [Y] = (0, T.C8)({ subscriptionId: n.id, preventFetch: !(O || H) });
    return null == P || null == N
        ? (0, i.jsx)(_.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, I.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(eK, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: eZ.Il,
                  analyticsLocation: u,
              })),
          (0, i.jsxs)(x.n, {
              label: J.intl.string(J.t["/gs+Pz"]),
              description: J.intl.string(J.t.D8UpUo),
              children: [
                  k ? (0, i.jsx)(eQ, {}) : null,
                  G ? (0, i.jsx)(e$, {}) : null,
                  O && null != Y ? (0, i.jsx)(eJ, { daysPastDue: F, subscription: n, openInvoiceId: Y.id }) : null,
                  z && q && (0, i.jsx)(ep, { subscription: n, analyticsLocations: f }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: v.length > 0 ? eZ.HZ : eZ.__invalid_singleSubscription,
                              children: (0, i.jsx)(e3, {
                                  subscription: n,
                                  analyticsLocation: u,
                                  paymentSource: r,
                                  busy: l,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: k,
                                  showInvalidPaymentMethod: G,
                                  fetchedCurrentInvoicePreview: P,
                                  fetchedRenewalInvoicePreview: N,
                                  fetchedOpenInvoice: Y,
                                  isPremiumGroup: z,
                              }),
                          }),
                          v.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: eZ.HZ,
                                      children: [
                                          (0, i.jsx)(p.D, {
                                              variant: "heading-md/semibold",
                                              className: eZ.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(e3, {
                                              subscription: e,
                                              analyticsLocation: u,
                                              paymentSource: r,
                                              busy: l,
                                              fromStandaloneBillingPage: d,
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
