i.d(t, { Ay: () => e4, Sb: () => e6, TC: () => e1, Hy: () => e3 });
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
    S = i(964486),
    p = i(793574),
    f = i(688810),
    N = i(531260),
    _ = i(235986),
    C = i(137177),
    I = i(532794),
    b = i(832946),
    v = i(287809),
    j = i(174459),
    y = i(975571),
    O = i(428262),
    R = i(83617),
    L = i(543767),
    D = i(526292),
    P = i(155984),
    G = i(131168),
    U = i(331322),
    M = i(508770),
    V = i(192308),
    k = i(315629),
    w = i(821609),
    F = i(158032),
    B = i(427262),
    z = i(59784),
    Y = i(233317),
    X = i(622017),
    H = i(113090),
    K = i(778712),
    W = i(97808),
    Z = i(123292),
    q = i(950305),
    Q = i(854627),
    J = i(466919),
    $ = i(375708),
    ee = i(339446);
let et = (e) => {
        let { user: t, isOwnUser: i, label: l, removeButton: a, isFaded: o } = e,
            { avatarSrc: u, eventHandlers: d } = (0, Q.A)({ userId: t?.id, size: K._3.SIZE_24 }),
            c = (0, B.$3)(t),
            [m, A] = s.useState(!1);
        return (0, n.jsxs)("div", {
            className: r()(ee.kL, { [ee.RE]: null != a }),
            onMouseEnter: () => A(!0),
            onMouseLeave: () => A(!1),
            children: [
                (0, n.jsxs)("div", {
                    className: r()(ee.TT, { [ee.zj]: o }),
                    children: [
                        (0, n.jsx)(W.eu, { className: ee.my, src: u, "aria-label": c, size: K._3.SIZE_24, ...d }),
                        (0, n.jsxs)(g.E, {
                            className: ee.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [c, !!i && ` (${$.intl.string($.t.LuZzxn)})`],
                        }),
                        null != l &&
                            (0, n.jsxs)(g.E, {
                                className: ee.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, n.jsx)("span", { className: ee.me, children: "\xb7" }), l],
                            }),
                    ],
                }),
                null != a &&
                    m &&
                    (0, n.jsx)("div", {
                        className: ee.dM,
                        children: (0, n.jsx)(Z.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: a.label,
                            onClick: a.onRemove,
                        }),
                    }),
            ],
        });
    },
    ei = (e) => {
        let { user: t, isOwnUser: i } = e;
        return (0, n.jsx)(et, { user: t, isOwnUser: i, label: $.intl.string(J.default.vc2xys) });
    },
    en = (e) => {
        let { user: t, onRemove: i } = e;
        return (0, n.jsx)(et, {
            user: t,
            label: $.intl.string(J.default.mnt50A),
            removeButton: { onRemove: i, label: $.intl.string($.t.N86XcP) },
        });
    },
    es = (e) => {
        let { user: t, isOwnUser: i } = e;
        return (0, n.jsx)(et, { user: t, isOwnUser: i, label: $.intl.string(J.default.mnt50A) });
    },
    el = (e) => {
        let { user: t, onRemove: i } = e;
        return (0, n.jsx)(et, {
            user: t,
            label: $.intl.string(J.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: i, label: $.intl.string(J.default["2blqtw"]) },
        });
    },
    er = (e) => {
        let { onInvite: t, canInvite: i } = e,
            [l, a] = s.useState(!1);
        return (0, n.jsxs)("div", {
            className: r()(ee.kL, { [ee.RE]: i }),
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            children: [
                (0, n.jsxs)("div", {
                    className: ee.TT,
                    children: [
                        (0, n.jsx)("div", {
                            className: r()(ee.vG, ee.my),
                            children: (0, n.jsx)(q.n, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                        }),
                        (0, n.jsx)(g.E, {
                            className: ee.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: $.intl.string(J.default["/x7DVG"]),
                        }),
                    ],
                }),
                l &&
                    i &&
                    (0, n.jsx)("div", {
                        className: ee.dM,
                        children: (0, n.jsx)(Z.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: $.intl.string(J.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
var ea = i(88001),
    eo = i(652215),
    eu = i(666240);
let ed = () =>
        (0, n.jsxs)(U.B, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: eu.wx,
            children: [
                (0, n.jsx)(m.D, { variant: "display-md", className: eu.Nd, children: (0, ea.DP)() }),
                (0, n.jsx)(M.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    ec = (e) => {
        let { title: t, description: i, button: s } = e;
        return (0, n.jsxs)("div", {
            className: eu.bh,
            children: [
                (0, n.jsxs)(U.B, {
                    direction: "vertical",
                    gap: 8,
                    className: eu.iQ,
                    children: [
                        (0, n.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                        (0, n.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: i }),
                    ],
                }),
                (0, n.jsx)("div", { className: eu.UD, children: s }),
            ],
        });
    },
    eg = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: l } = (0, H.A)(),
            { premiumGroupMembers: r, isLoading: a } = (0, X.A)(s?.subscriptionId ?? null);
        if (a || null == r || l || null == s) return (0, n.jsx)(h.y, {});
        let o = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: d, members: c } = r,
            { title: g, description: A } = (() => {
                switch (s.subscriptionStatus) {
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
                            title: $.intl.formatToPlainString(J.default.xiUjMF, {
                                premiumGroupProductName: (0, ea.DP)(),
                            }),
                            description: $.intl.format(J.default["2HEyqG"], {
                                primaryName: (0, B.$3)(d),
                                premiumGroupProductName: (0, ea.DP)(),
                                helpCenterLink: ea.TE,
                            }),
                        };
                }
            })();
        return (0, n.jsxs)(k.h, {
            className: eu.kL,
            color: "nitro-pink",
            children: [
                (0, n.jsx)(ed, {}),
                (0, n.jsxs)("div", {
                    className: eu.wS,
                    children: [
                        (0, n.jsx)(ec, {
                            title: g,
                            description: A,
                            button: (0, n.jsx)(w.$, {
                                variant: "secondary",
                                text: $.intl.string(J.default.NCu2JD),
                                onClick: () => {
                                    (0, V.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            i.e("8516"),
                                            i.e("9045"),
                                            i.e("92796"),
                                        ]).then(i.bind(i, 205463));
                                        return (i) =>
                                            (0, n.jsx)(e, { ...i, premiumGroupSubscriptionId: o, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, n.jsxs)(U.B, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, n.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: eu.Or,
                                    children: $.intl.string(J.default["oqw/KW"]),
                                }),
                                (0, n.jsx)(ei, { user: d, isOwnUser: !1 }),
                                c.map((e) => (0, n.jsx)(es, { user: e, isOwnUser: e.id === t?.id }, e.id)),
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
        return (0, n.jsxs)(U.B, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, n.jsxs)(U.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, n.jsx)(m.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: $.intl.string(J.default["oqw/KW"]),
                        }),
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: $.intl.format(J.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                        }),
                    ],
                }),
                (0, n.jsx)(ei, { user: c, isOwnUser: !0 }),
                A.map((e) => (0, n.jsx)(en, { user: e, onRemove: () => r(e) }, e.id)),
                E.map((e) => (0, n.jsx)(el, { user: e, onRemove: () => a(e) }, e.id)),
                Array.from({ length: d }).map((e, t) =>
                    (0, n.jsx)(er, { onInvite: l, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    eA = (e) => {
        let { subscription: t, analyticsLocations: l } = e,
            { premiumGroupMembers: r, isLoading: a } = (0, X.A)(t.id),
            {
                numAvailableInvites: o,
                numTotalSeats: d,
                numUsedSeats: c,
            } = (0, u.cf)([Y.A], () => ({
                numAvailableInvites: Y.A.getNumAvailableInvites(),
                numTotalSeats: Y.A.getNumTotalSeats(),
                numUsedSeats: Y.A.getNumUsedSeats(),
            })),
            [g, m] = s.useState(!1),
            { status: A } = t,
            h = s.useCallback(() => {
                (0, V.openModalLazy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        i.e("34218"),
                        i.e("8516"),
                        i.e("16581"),
                        i.e("9045"),
                        i.e("84820"),
                        i.e("94161"),
                        i.e("13051"),
                        i.e("80347"),
                        i.e("80166"),
                    ]).then(i.bind(i, 293061));
                    return (i) => (0, n.jsx)(e, { ...i, premiumSubscription: t, analyticsLocations: l });
                });
            }, [t, l]),
            E = s.useCallback(async () => {
                m(!0), await (0, F.Ir)(t, l), m(!1);
            }, [t, l]),
            T = () => {
                j.default.track(eo.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, V.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            i.e("8802"),
                            i.e("44616"),
                            i.e("96680"),
                            i.e("85579"),
                        ]).then(i.bind(i, 785606));
                        return (i) => (0, n.jsx)(e, { ...i, subscription: t });
                    });
            },
            x = s.useMemo(() => !ea.BE.includes(t.status) && o > 0, [t.status, o]),
            { title: S, description: p } = (() => {
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
                            title: $.intl.formatToPlainString(J.default.NRCfnQ, {
                                premiumGroupProductName: (0, ea.DP)(),
                            }),
                            description: $.intl.format(J.default.lvnrnb, {
                                totalSeats: ea.LM,
                                premiumGroupProductName: (0, ea.DP)(),
                                helpCenterLink: ea.TE,
                            }),
                        };
                }
            })();
        return (0, n.jsxs)(k.h, {
            className: eu.kL,
            color: "nitro-pink",
            children: [
                (0, n.jsx)(ed, {}),
                (0, n.jsxs)("div", {
                    className: eu.wS,
                    children: [
                        (0, n.jsx)(ec, {
                            title: S,
                            description: p,
                            button: O.ki(t)
                                ? (0, n.jsx)(w.$, {
                                      variant: "expressive",
                                      size: "md",
                                      text: $.intl.string(J.default.EFTJMQ),
                                      onClick: E,
                                      loading: g,
                                  })
                                : (0, n.jsxs)(U.B, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, n.jsx)(w.$, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: $.intl.string(J.default.Tcmclj),
                                              onClick: T,
                                              disabled: !x,
                                          }),
                                          (0, n.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: $.intl.string(J.default.oO0EYw),
                                              onClick: h,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsx)(em, {
                            premiumGroupMembers: r,
                            isLoadingPremiumGroupMembers: a,
                            canInvite: x,
                            onInvite: T,
                            onRemoveMember: (e) => {
                                j.default.track(eo.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, V.openModalLazy)(async () => {
                                        let { default: s } = await i.e("21305").then(i.bind(i, 391040));
                                        return (i) => (0, n.jsx)(s, { ...i, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                j.default.track(eo.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = z.A.getInviteByUserId(e.id)?.invite;
                                (0, V.openModalLazy)(async () => {
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
var eh = i(97352),
    eE = i(990078),
    eT = i(403581);
function ex(e) {
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
var eS = i(580630),
    ep = i(410516),
    ef = i(811611),
    eN = i(473702),
    e_ = i(788868),
    eC = i(657127),
    eI = i(398932);
let eb = { page: eo.liQ.USER_SETTINGS, section: eo.JJy.SETTINGS_PREMIUM, object: eo.ZSU.CARD };
function ev(e) {
    let { premiumSubscription: t, discountInfo: i, invoicePreview: s, isDiscountActive: l } = e,
        r = O.Ay.getPlanIdFromInvoice(t, s),
        a = eh.A.get(r);
    if (null == a || null == s || null == i || null == i.duration || null == i.percentage) return null;
    let o = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, eS.$g)(o.amount, s.currency),
        d = (0, O.y8)(e_.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, eS.$g)(d.amount, d.currency);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: $.intl.format($.t["50bA2I"], { percent: i.percentage }),
            }),
            (0, n.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l
                    ? $.intl.format($.t["3ZiutU"], { percent: i.percentage, numMonths: i.duration, regularPrice: c })
                    : $.intl.format($.t.N43FMx, {
                          numMonths: i.duration,
                          discountedPrice: u,
                          billingPeriod: $.intl.string($.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function ej(e) {
    let { discountOffer: t, premiumSubscription: i } = e,
        s = (0, ep.tQ)(i, e_.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: $.intl.format($.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, n.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: $.intl.format($.t["PH7Q+R"], {
                    numMonths: t.discount.userUsageLimit,
                    discountedPrice: s,
                    billingPeriod: (0, O.Ke)(t.discount.userUsageLimitInterval),
                }),
            }),
        ],
    });
}
let ey = function (e) {
    let {
            subscription: t,
            invoicePreview: s,
            isLoading: l,
            analyticsLocation: r,
            discountInfo: a,
            renewalChurnDiscountInfo: o,
            discountOffer: u,
        } = e,
        { analyticsLocations: d } = (0, f.Ay)(p.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        c = () => {
            t.status !== eo.Dmq.CANCELED && m();
        },
        m = (e) => {
            (0, V.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await Promise.all([
                    i.e("34218"),
                    i.e("8516"),
                    i.e("16581"),
                    i.e("9045"),
                    i.e("84820"),
                    i.e("94161"),
                    i.e("13051"),
                    i.e("80347"),
                    i.e("80166"),
                ]).then(i.bind(i, 293061));
                return (i) =>
                    (0, n.jsx)(s, {
                        ...i,
                        premiumSubscription: t,
                        analyticsLocation: r,
                        analyticsLocations: d,
                        initialStep: e,
                    });
            });
        },
        A = O.Ay.getPlanIdFromInvoice(t, s),
        h = (0, ef.ux)(u?.expiresAt?.toISOString());
    return (0, b.m1)(A)
        ? null
        : (0, n.jsx)("div", {
              className: eC.S6,
              children: (0, n.jsx)(k.h, {
                  color: "nitro-pink",
                  className: eC.YL,
                  children: (0, n.jsxs)("div", {
                      className: eC.mK,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eC.Gp,
                              children: [
                                  (0, n.jsx)(ex, {
                                      color: "currentcolor",
                                      className: eC.fJ,
                                      "aria-label": $.intl.string($.t.lpNrPu),
                                  }),
                                  (0, n.jsx)(g.E, {
                                      className: eC.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != u && h,
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
                                          null != u
                                              ? (0, n.jsx)(ej, { discountOffer: u, premiumSubscription: t })
                                              : (0, n.jsx)(ev, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: s,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, n.jsx)("div", {
                                              className: eC.e_,
                                              children: (() => {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      i = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, n.jsxs)("div", {
                                                          className: eC.qK,
                                                          children: [
                                                              (0, n.jsx)(eE.m, {
                                                                  text: i,
                                                                  shouldShow: e && null != i,
                                                                  asContainer: !0,
                                                                  children: (0, n.jsx)(w.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: $.intl.string($.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, I.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: eb,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, n.jsx)(w.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: $.intl.string($.t["ETE/oC"]),
                                                                  loading: l,
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
                                                      return (0, n.jsx)(w.$, {
                                                          variant: "expressive",
                                                          icon: eT.t,
                                                          size: "md",
                                                          text: e,
                                                          loading: l,
                                                          onClick: () => m(eN.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)("img", { className: eC.Hp, src: eI.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eO = i(284009),
    eR = i.n(eO),
    eL = i(607399),
    eD = i(189213),
    eP = i(683071),
    eG = i(701273),
    eU = i(753390),
    eM = i(780964),
    eV = i(766075),
    ek = i(327479),
    ew = i(601107),
    eF = i(428797);
let eB = [eo.Dmq.PAST_DUE, eo.Dmq.ACCOUNT_HOLD, eo.Dmq.BILLING_RETRY],
    ez = (e) => {
        let { transitionState: t, onClose: i, subscription: l, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = s.useState(!1),
            [d, c] = s.useState(!1);
        s.useEffect(() => {
            j.default.track(eo.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: r,
            });
        }, []);
        let g = async () => {
                u(!0), c(!1);
                try {
                    await (0, eU.M2)(l.id, r, a),
                        j.default.track(eo.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: r,
                        }),
                        (0, eU.hP)(),
                        i();
                } catch (e) {
                    c(!0), u(!1);
                }
            },
            m = [
                { text: $.intl.string($.t.oEAioF), onClick: () => i(), variant: "secondary" },
                {
                    text: $.intl.string($.t["cY+Oob"]),
                    onClick: () => g(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, n.jsx)(eD.Modal, {
            size: "md",
            transitionState: t,
            title: $.intl.string($.t.LZunzZ),
            subtitle: $.intl.string($.t.FClXh9),
            actions: m,
            onClose: async () => i(),
            children: d ? (0, n.jsx)(eP.w, { type: "critical", children: $.intl.string($.t["5mlOCW"]) }) : null,
        });
    };
function eY(e) {
    let t,
        {
            subscription: i,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            analyticsLocation: o,
        } = e,
        d = (0, u.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return eR()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: c } = (0, f.Ay)(p.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(i.additionalPlans)) return null;
    let { status: m } = i,
        A = (0, O.$k)(i),
        h = !A && i.isBoostOnly && eB.includes(i.status);
    if (A) t = eF.v2;
    else
        switch (m) {
            case eo.Dmq.PAST_DUE:
            case eo.Dmq.ACCOUNT_HOLD:
            case eo.Dmq.BILLING_RETRY:
                t = eF.P7;
                break;
            case eo.Dmq.PAUSE_PENDING:
            case eo.Dmq.PAUSED:
                t = i.pauseReason !== ew.qf.FRACTIONAL_PREMIUM ? eF.C7 : eF.wG;
                break;
            default:
                t = eF.wG;
        }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r()(t, eF.Qn),
                children: [
                    (0, n.jsx)("div", { className: eF.Kq }),
                    (0, n.jsx)("div", { className: eF.OL }),
                    (0, n.jsxs)("div", {
                        className: eF.eC,
                        children: [
                            (0, n.jsx)("div", { className: r()(eF.Ab, { [eF.aD]: A }) }),
                            (0, n.jsx)("div", {
                                children: (0, O.Uf)({
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
                            className: eF.BQ,
                            children: [
                                h &&
                                    (0, n.jsx)("div", {
                                        className: eF.x7,
                                        children: (0, n.jsx)(Z.Q, {
                                            variant: "always-white",
                                            onClick: () => {
                                                eB.includes(i.status) &&
                                                    (0, V.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, n.jsx)(ez, {
                                                                ...e,
                                                                subscription: i,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: $.intl.string($.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, n.jsx)(ek.A, {
                                    onClick: () => (0, eV.openUserSettings)(eM.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: $.intl.string($.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, n.jsx)(g.E, {
                    className: eF.yW,
                    variant: "text-sm/normal",
                    children: $.intl.format(eL.Fr ? $.t.uxYBEa : $.t.k6haR9, { openAppHook: () => (0, eG.A)("app") }),
                }),
        ],
    });
}
var eX = i(868942),
    eH = i(420139),
    eK = i(349288),
    eW = i(697446);
function eZ(e) {
    let { subscription: t, renewalMutations: s, className: l, analyticsLocation: a } = e,
        o = (0, N.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === e_.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, n.jsxs)("div", {
            className: r()(eW.zr, l),
            children: [
                (0, n.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eW.G }),
                (0, n.jsx)("div", {
                    className: eW.Qq,
                    children: $.intl.format($.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(s) : O.Ay.getDisplayName(s.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, n.jsx)(eK.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, V.openModalLazy)(async () => {
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
                          className: eW.Lu,
                          children: $.intl.string($.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eq = i(633287);
function eQ() {
    return (
        s.useEffect(() => {
            j.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eq.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eq.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, n.jsx)(g.E, { className: eq.Cy, variant: "text-sm/normal", children: $.intl.string($.t.xFHEMa) }),
            ],
        })
    );
}
function eJ() {
    return (
        s.useEffect(() => {
            j.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eq.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eq.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, n.jsx)(g.E, {
                    className: eq.Cy,
                    variant: "text-sm/normal",
                    children: $.intl.string($.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function e$(e) {
    let { daysPastDue: t, subscription: i, openInvoiceId: l } = e,
        { analyticsLocations: r } = (0, f.Ay)(p.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            j.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eq.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eq.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, n.jsx)(g.E, {
                    className: eq.Cy,
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, I.A)({ initialPlanId: i.planIdFromItems, openInvoiceId: l, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function e0(e) {
    let { subscription: t, renewalInvoicePreview: i, openInvoice: s, className: l, fractionalPremiumInfo: a } = e;
    return (0, n.jsxs)("div", {
        className: r()(eq.KF, l),
        children: [
            (0, n.jsx)(m.D, { variant: "heading-md/semibold", className: eq.QL, children: $.intl.string($.t.KXQjfc) }),
            (0, n.jsx)("div", { children: O.Ay.getBillingInformationString(t, i, s, !1, a) }),
        ],
    });
}
function e1() {
    let e = (0, u.bG)([v.default], () => v.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: eq.Gf,
                children: $.intl.string($.t["/gs+Pz"]),
            }),
            (0, n.jsx)("p", { className: eq.yV, children: $.intl.string($.t.D8UpUo) }),
            !t &&
                (0, n.jsx)(A.Z, {
                    className: eq.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, n.jsxs)(_.A, {
                        align: _.A.Align.CENTER,
                        children: [
                            (0, n.jsx)(C.A, { game: null, size: C.M.SMALL, className: eq.pV }),
                            (0, n.jsx)("span", { className: eq.O, children: $.intl.string($.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, n.jsx)(eg, { currentUser: e }),
        ],
    });
}
function e2(e) {
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
        { analyticsLocations: A } = (0, f.Ay)(p.A.SUBSCRIPTION_DETAILS),
        x = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: A, analyticsLocation: i },
        [S] = (0, L.YV)(x);
    S = d ?? S;
    let _ =
            null != c
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: A,
                      analyticsLocation: i,
                  },
        [C] = (0, L.YV)(_);
    C = c ?? C;
    let I = (0, N.A)(),
        b = (0, G.p)(),
        v = (0, D.nf)(),
        j = O.Ay.isBaseSubscriptionCanceled(t),
        y = (function (e, t) {
            let i = eh.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != i) {
                let n = (0, R._w)(i, t?.id, !1),
                    s = n.length > 0 ? n[0] : e.currency;
                if (1 === n.length && t?.id === e.paymentSourceId && (0, R.jJ)(i.id, s, t?.id)) return !0;
            }
            return !1;
        })(t, s);
    if (null == S || null == C) return (0, n.jsx)(h.y, {});
    let P = y ? (0, D.Bv)(C) : null,
        U = null != P || (null != v && (v.discountId === e_.q || v.discountId === e_.EG)),
        M =
            y && ((j && null != b) || (!j && U))
                ? (0, n.jsx)(ey, {
                      subscription: t,
                      invoicePreview: C,
                      paymentSource: s,
                      discountOffer: b,
                      renewalChurnDiscountInfo: P,
                      discountInfo: v,
                      isLoading: l,
                      analyticsLocation: i,
                  })
                : (0, n.jsx)(eX.A, {
                      subscription: t,
                      currentInvoicePreview: S,
                      renewalInvoicePreview: C,
                      paymentSource: s,
                      busy: l,
                      analyticsLocation: i,
                  });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: eq.fj,
                children: [
                    !m && M,
                    (0, n.jsx)(eY, {
                        subscription: t,
                        renewalInvoicePreview: S,
                        fromStandaloneBillingPage: a,
                        fractionalPremiumInfo: I,
                        analyticsLocation: i,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                children: (0, n.jsx)(E.n, {
                    label: $.intl.string($.t.Sb6wI1),
                    children: (0, n.jsxs)("div", {
                        className: eq.zH,
                        children: [
                            (0, n.jsx)(e0, {
                                subscription: t,
                                renewalInvoicePreview: C,
                                className: eq.g4,
                                fractionalPremiumInfo: I,
                                openInvoice: g,
                            }),
                            (0, n.jsx)("div", {
                                className: r()(eq.g4, { [eq.sE]: o }),
                                children: (0, n.jsx)(T.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? $.intl.formatToPlainString($.t["rTk9v/"], {
                                                  paymentGatewayName: eo.qmC[t.paymentGateway],
                                              })
                                            : $.intl.string($.t.iRzXKd),
                                    children: (0, n.jsx)(eH.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: R.c_,
                                        highlightAddPaymentMethodButton: u || o,
                                        analyticsLocation: i,
                                        currentInvoicePreview: S,
                                        dropdownClassName: eq.sp,
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
let e3 = new Set([eo.Dmq.ACTIVE, eo.Dmq.PAST_DUE, eo.Dmq.CANCELED, eo.Dmq.PAUSE_PENDING, eo.Dmq.PAUSED]);
function e6() {
    return (
        s.useEffect(() => {
            j.default.track(eo.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, n.jsxs)("div", {
            className: eq.oU,
            children: [
                (0, n.jsx)(c.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, n.jsx)(g.E, {
                    className: eq.dk,
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["6eXiiC"], { helpCenterLink: y.A.getArticleURL(eo.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function e4(e) {
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
    let A = (0, u.bG)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: T } = (0, f.Ay)(p.A.SUBSCRIPTION_DETAILS),
        N = (0, G.p)(),
        _ = null != l ? l.slice(1) : [],
        [C, I] = s.useState(0);
    s.useEffect(() => {
        if (!g) return;
        let e = (e) => {
            e.subscription.id === i.id && I((e) => e + 1);
        };
        return (
            x.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                x.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [i.id, g]),
        (0, S.Ay)(() => {
            let e = () => I((e) => e + 1);
            return (
                x.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    x.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        });
    let [j] = (0, L.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: T,
            analyticsLocation: c,
            fetchKey: C,
        }),
        [y] = (0, L.YV)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: T,
            analyticsLocation: c,
            userDiscountOfferId: N?.id,
            fetchKey: C,
        }),
        O = r?.invalid,
        R = (0, u.bG)([v.default], () => v.default.getCurrentUser()?.hasFreePremium()),
        D = o()(i.currentPeriodEnd),
        U = null != i.paymentSourceId,
        M = y?.total ?? 0,
        V =
            !U &&
            M > 0 &&
            (7 >= D.diff(o()(), "days") || i.status === eo.Dmq.PAST_DUE) &&
            !R &&
            !i.isPurchasedExternally,
        k = O && i.status === eo.Dmq.PAST_DUE && !R && !i.isPurchasedExternally,
        w = (0, P.l)(),
        F = !R && w,
        B = i?.status === eo.Dmq.PAST_DUE,
        z = B ? o()().diff(o()(i.currentPeriodStart), "days") : 0,
        Y = null != A && A.isPremiumGroupPrimary(),
        X = i.hasAnyPremiumGroup,
        [H] = (0, L.C8)({ subscriptionId: i.id, preventFetch: !(F || B) });
    return null == j || null == y
        ? (0, n.jsx)(h.y, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, b.m1)(i.renewalMutations.planId)) ||
                  i.hasExternalPlanChange) &&
              (t = (0, n.jsx)(eZ, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: eq.Il,
                  analyticsLocation: c,
              })),
          (0, n.jsxs)(E.n, {
              label: $.intl.string($.t["/gs+Pz"]),
              description: $.intl.string($.t.D8UpUo),
              children: [
                  V ? (0, n.jsx)(eQ, {}) : null,
                  k ? (0, n.jsx)(eJ, {}) : null,
                  F && null != H ? (0, n.jsx)(e$, { daysPastDue: z, subscription: i, openInvoiceId: H.id }) : null,
                  Y && X && (0, n.jsx)(eA, { subscription: i, analyticsLocations: T }),
                  t,
                  (0, n.jsxs)("div", {
                      children: [
                          (0, n.jsx)("div", {
                              className: _.length > 0 ? eq.HZ : eq.__invalid_singleSubscription,
                              children: (0, n.jsx)(e2, {
                                  subscription: i,
                                  analyticsLocation: c,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: V,
                                  showInvalidPaymentMethod: k,
                                  fetchedCurrentInvoicePreview: j,
                                  fetchedRenewalInvoicePreview: y,
                                  fetchedOpenInvoice: H,
                                  isPremiumGroup: Y,
                              }),
                          }),
                          _.map((e, t) =>
                              (0, n.jsxs)(
                                  "div",
                                  {
                                      className: eq.HZ,
                                      children: [
                                          (0, n.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: eq.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, n.jsx)(e2, {
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
