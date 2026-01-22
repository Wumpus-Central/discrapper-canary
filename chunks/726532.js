n.d(t, {
    i: () => N,
    j: () => w,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(158032),
    l = n(954571),
    c = n(927578),
    u = n(427262),
    d = n(59784),
    f = n(233317),
    p = n(622017),
    _ = n(113090),
    h = n(99499),
    m = n(752533),
    g = n(88001),
    E = n(652215),
    b = n(519412),
    y = n(985018),
    O = n(546991);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = () =>
        (0, r.jsxs)(s.BJc, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: O.wx,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "display-md",
                    className: O.Nd,
                    children: (0, g.DP)(),
                }),
                (0, r.jsx)(s.Exy, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    C = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, r.jsxs)("div", {
            className: O.bh,
            children: [
                (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: O.iQ,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: O.UD,
                    children: i,
                }),
            ],
        });
    },
    N = (e) => {
        var t;
        let { currentUser: i } = e,
            { premiumGroupMembership: a, isLoading: o } = (0, _.A)(),
            { premiumGroupMembers: l, isLoading: c } = (0, p.A)(
                null != (t = null == a ? void 0 : a.subscriptionId) ? t : null,
            );
        if (c || null == l || o || null == a) return (0, r.jsx)(s.y$y, {});
        let d = a.subscriptionId,
            f = a.currentPeriodEnd,
            { primary: h, members: A } = l,
            { title: S, description: N } = (() => {
                switch (a.subscriptionStatus) {
                    case E.Dmq.CANCELED:
                        return {
                            title: y.intl.string(b.default.mCwdPj),
                            description: y.intl.format(b.default.wH9NYG, {
                                endDate: f,
                            }),
                        };
                    case E.Dmq.PAUSED:
                        return {
                            title: y.intl.string(b.default.IDyd1e),
                            description: y.intl.format(b.default["8MfYhr"], {
                                premiumGroupProductName: (0, g.DP)(),
                                helpCenterLink: g.TE,
                            }),
                        };
                    case E.Dmq.PAST_DUE:
                    case E.Dmq.ACCOUNT_HOLD:
                    case E.Dmq.BILLING_RETRY:
                        return {
                            title: y.intl.string(b.default.Duq8zp),
                            description: y.intl.format(b.default["MHn/D6"], {
                                endDate: f,
                                premiumGroupProductName: (0, g.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: y.intl.formatToPlainString(b.default.xiUjMF, {
                                premiumGroupProductName: (0, g.DP)(),
                            }),
                            description: y.intl.format(b.default["2HEyqG"], {
                                primaryName: (0, u.$3)(h),
                                premiumGroupProductName: (0, g.DP)(),
                                helpCenterLink: g.TE,
                            }),
                        };
                }
            })(),
            R = () => {
                (0, s.mMO)(async () => {
                    let { default: e } = await n.e("92796").then(n.bind(n, 205463));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            I(v({}, t), {
                                premiumGroupSubscriptionId: d,
                                currentUser: i,
                            }),
                        );
                });
            };
        return (0, r.jsxs)(s.hLv, {
            className: O.kL,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(T, {}),
                (0, r.jsxs)("div", {
                    className: O.wS,
                    children: [
                        (0, r.jsx)(C, {
                            title: S,
                            description: N,
                            button: (0, r.jsx)(s.Button, {
                                variant: "secondary",
                                text: y.intl.string(b.default.NCu2JD),
                                onClick: R,
                            }),
                        }),
                        (0, r.jsxs)(s.BJc, {
                            direction: "vertical",
                            padding: {
                                left: 32,
                                bottom: 12,
                            },
                            gap: 0,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: O.Or,
                                    children: y.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(m.U4, {
                                    user: h,
                                    isOwnUser: !1,
                                }),
                                A.map((e) =>
                                    (0, r.jsx)(
                                        m.YF,
                                        {
                                            user: e,
                                            isOwnUser: e.id === (null == i ? void 0 : i.id),
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    R = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: i,
            onInvite: a,
            onRemoveMember: o,
            onRemoveInvitedUser: l,
            numTotalSeats: c,
            numUsedSeats: u,
            numAvailableInvites: d,
        } = e;
        if (n || null == t) return (0, r.jsx)(s.y$y, {});
        let { primary: f, members: p, invitedUsers: _ } = t;
        return (0, r.jsxs)(s.BJc, {
            direction: "vertical",
            padding: {
                left: 32,
                bottom: 12,
            },
            gap: 0,
            children: [
                (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        top: 12,
                        left: 4,
                        right: 4,
                        bottom: 10,
                    },
                    children: [
                        (0, r.jsxs)(s.BJc, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    children: y.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(h.A, {
                                    onInvite: a,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: y.intl.format(b.default["/a/UoP"], {
                                usedSeats: u,
                                totalSeats: c,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.U4, {
                    user: f,
                    isOwnUser: !0,
                }),
                p.map((e) =>
                    (0, r.jsx)(
                        m.MT,
                        {
                            user: e,
                            onRemove: () => o(e),
                        },
                        e.id,
                    ),
                ),
                _.map((e) =>
                    (0, r.jsx)(
                        m.Bs,
                        {
                            user: e,
                            onRemove: () => l(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({
                    length: d,
                }).map((e, t) =>
                    (0, r.jsx)(
                        m.XN,
                        {
                            onInvite: a,
                            canInvite: i,
                        },
                        "seat-available-".concat(t),
                    ),
                ),
            ],
        });
    },
    w = (e) => {
        let { subscription: t, analyticsLocations: u } = e,
            { premiumGroupMembers: _, isLoading: h } = (0, p.A)(t.id),
            {
                numAvailableInvites: m,
                numTotalSeats: A,
                numUsedSeats: S,
            } = (0, a.cf)([f.A], () => ({
                numAvailableInvites: f.A.getNumAvailableInvites(),
                numTotalSeats: f.A.getNumTotalSeats(),
                numUsedSeats: f.A.getNumUsedSeats(),
            })),
            [N, w] = i.useState(!1),
            { status: P } = t,
            D = i.useCallback(() => {
                (0, s.mMO)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("72820")
                        .then(n.bind(n, 281439));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            I(v({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: u,
                            }),
                        );
                });
            }, [t, u]),
            x = i.useCallback(async () => {
                w(!0), await (0, o.Ir)(t, u), w(!1);
            }, [t, u]),
            L = (e) => {
                l.default.track(E.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                    subscription_id: t.id,
                    member_user_id: e.id,
                }),
                    (0, s.mMO)(async () => {
                        let { default: i } = await n.e("21305").then(n.bind(n, 391040));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                I(v({}, n), {
                                    subscriptionId: t.id,
                                    member: e,
                                }),
                            );
                    });
            },
            j = () => {
                l.default.track(E.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, {
                    subscription_id: t.id,
                }),
                    (0, s.mMO)(async () => {
                        let { default: e } = await n.e("73987").then(n.bind(n, 773486));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                I(v({}, n), {
                                    subscription: t,
                                }),
                            );
                    });
            },
            M = (e) => {
                var i;
                l.default.track(E.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                    subscription_id: t.id,
                    invited_user_id: e.id,
                });
                let a = null == (i = d.A.getInviteByUserId(e.id)) ? void 0 : i.invite;
                (0, s.mMO)(async () => {
                    let { default: i } = await n.e("15554").then(n.bind(n, 115225));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            I(v({}, n), {
                                subscriptionId: t.id,
                                invitedUser: e,
                                subscriptionGroupMemberId: null == a ? void 0 : a.id,
                            }),
                        );
                });
            },
            k = () => {
                switch (P) {
                    case E.Dmq.CANCELED:
                        return {
                            title: y.intl.string(b.default.KME8Q6),
                            description: y.intl.format(b.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, g.DP)(),
                            }),
                        };
                    case E.Dmq.PAUSED:
                        return {
                            title: y.intl.string(b.default["4flKoC"]),
                            description: y.intl.format(b.default["Q++BmO"], {
                                premiumGroupProductName: (0, g.DP)(),
                            }),
                        };
                    case E.Dmq.PAST_DUE:
                    case E.Dmq.ACCOUNT_HOLD:
                    case E.Dmq.BILLING_RETRY:
                        return {
                            title: y.intl.string(b.default.cfeFEt),
                            description: y.intl.format(b.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: g.TE,
                            }),
                        };
                    default:
                        return {
                            title: y.intl.formatToPlainString(b.default.NRCfnQ, {
                                premiumGroupProductName: (0, g.DP)(),
                            }),
                            description: y.intl.format(b.default.lvnrnb, {
                                totalSeats: g.LM,
                                premiumGroupProductName: (0, g.DP)(),
                                helpCenterLink: g.TE,
                            }),
                        };
                }
            },
            U = () =>
                c.ki(t)
                    ? (0, r.jsx)(s.Button, {
                          variant: "expressive",
                          size: "md",
                          text: y.intl.string(b.default.EFTJMQ),
                          onClick: x,
                          loading: N,
                      })
                    : (0, r.jsx)(s.Button, {
                          variant: "secondary",
                          size: "md",
                          text: y.intl.string(b.default.oO0EYw),
                          onClick: D,
                      }),
            G = i.useMemo(() => !g.BE.includes(t.status) && m > 0, [t.status, m]),
            { title: V, description: F } = k();
        return (0, r.jsxs)(s.hLv, {
            className: O.kL,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(T, {}),
                (0, r.jsxs)("div", {
                    className: O.wS,
                    children: [
                        (0, r.jsx)(C, {
                            title: V,
                            description: F,
                            button: U(),
                        }),
                        (0, r.jsx)(R, {
                            premiumGroupMembers: _,
                            isLoadingPremiumGroupMembers: h,
                            canInvite: G,
                            onInvite: j,
                            onRemoveMember: L,
                            onRemoveInvitedUser: M,
                            numTotalSeats: A,
                            numUsedSeats: S,
                            numAvailableInvites: m,
                        }),
                    ],
                }),
            ],
        });
    };
