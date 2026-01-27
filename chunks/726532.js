n.d(t, {
    i: () => S,
    j: () => v,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(158032),
    o = n(954571),
    c = n(927578),
    d = n(427262),
    u = n(59784),
    _ = n(233317),
    p = n(622017),
    m = n(113090),
    g = n(99499),
    A = n(752533),
    f = n(88001),
    h = n(652215),
    b = n(519412),
    E = n(985018),
    x = n(546991);

function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = () =>
        (0, r.jsxs)(s.BJc, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: x.wx,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "display-md",
                    className: x.Nd,
                    children: (0, f.DP)(),
                }),
                (0, r.jsx)(s.Exy, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    T = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, r.jsxs)("div", {
            className: x.bh,
            children: [
                (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: x.iQ,
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
                    className: x.UD,
                    children: i,
                }),
            ],
        });
    },
    S = (e) => {
        var t;
        let { currentUser: i } = e,
            { premiumGroupMembership: l, isLoading: a } = (0, m.A)(),
            { premiumGroupMembers: o, isLoading: c } = (0, p.A)(
                null != (t = null == l ? void 0 : l.subscriptionId) ? t : null,
            );
        if (c || null == o || a || null == l) return (0, r.jsx)(s.y$y, {});
        let u = l.subscriptionId,
            _ = l.currentPeriodEnd,
            { primary: g, members: S } = o,
            { title: j, description: v } = (() => {
                switch (l.subscriptionStatus) {
                    case h.Dmq.CANCELED:
                        return {
                            title: E.intl.string(b.default.mCwdPj),
                            description: E.intl.format(b.default.wH9NYG, {
                                endDate: _,
                            }),
                        };
                    case h.Dmq.PAUSED:
                        return {
                            title: E.intl.string(b.default.IDyd1e),
                            description: E.intl.format(b.default["8MfYhr"], {
                                premiumGroupProductName: (0, f.DP)(),
                                helpCenterLink: f.TE,
                            }),
                        };
                    case h.Dmq.PAST_DUE:
                    case h.Dmq.ACCOUNT_HOLD:
                    case h.Dmq.BILLING_RETRY:
                        return {
                            title: E.intl.string(b.default.Duq8zp),
                            description: E.intl.format(b.default["MHn/D6"], {
                                endDate: _,
                                premiumGroupProductName: (0, f.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(b.default.xiUjMF, {
                                premiumGroupProductName: (0, f.DP)(),
                            }),
                            description: E.intl.format(b.default["2HEyqG"], {
                                primaryName: (0, d.$3)(g),
                                premiumGroupProductName: (0, f.DP)(),
                                helpCenterLink: f.TE,
                            }),
                        };
                }
            })();
        return (0, r.jsxs)(s.hLv, {
            className: x.kL,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(I, {}),
                (0, r.jsxs)("div", {
                    className: x.wS,
                    children: [
                        (0, r.jsx)(T, {
                            title: j,
                            description: v,
                            button: (0, r.jsx)(s.Button, {
                                variant: "secondary",
                                text: E.intl.string(b.default.NCu2JD),
                                onClick: () => {
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await n.e("92796").then(n.bind(n, 205463));
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                C(O({}, t), {
                                                    premiumGroupSubscriptionId: u,
                                                    currentUser: i,
                                                }),
                                            );
                                    });
                                },
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
                                    className: x.Or,
                                    children: E.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(A.U4, {
                                    user: g,
                                    isOwnUser: !1,
                                }),
                                S.map((e) =>
                                    (0, r.jsx)(
                                        A.YF,
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
    j = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: i,
            onInvite: l,
            onRemoveMember: a,
            onRemoveInvitedUser: o,
            numTotalSeats: c,
            numUsedSeats: d,
            numAvailableInvites: u,
        } = e;
        if (n || null == t) return (0, r.jsx)(s.y$y, {});
        let { primary: _, members: p, invitedUsers: m } = t;
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
                                    children: E.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(g.A, {
                                    onInvite: l,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: E.intl.format(b.default["/a/UoP"], {
                                usedSeats: d,
                                totalSeats: c,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(A.U4, {
                    user: _,
                    isOwnUser: !0,
                }),
                p.map((e) =>
                    (0, r.jsx)(
                        A.MT,
                        {
                            user: e,
                            onRemove: () => a(e),
                        },
                        e.id,
                    ),
                ),
                m.map((e) =>
                    (0, r.jsx)(
                        A.Bs,
                        {
                            user: e,
                            onRemove: () => o(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({
                    length: u,
                }).map((e, t) =>
                    (0, r.jsx)(
                        A.XN,
                        {
                            onInvite: l,
                            canInvite: i,
                        },
                        "seat-available-".concat(t),
                    ),
                ),
            ],
        });
    },
    v = (e) => {
        let { subscription: t, analyticsLocations: d } = e,
            { premiumGroupMembers: m, isLoading: g } = (0, p.A)(t.id),
            {
                numAvailableInvites: A,
                numTotalSeats: S,
                numUsedSeats: v,
            } = (0, l.cf)([_.A], () => ({
                numAvailableInvites: _.A.getNumAvailableInvites(),
                numTotalSeats: _.A.getNumTotalSeats(),
                numUsedSeats: _.A.getNumUsedSeats(),
            })),
            [N, y] = i.useState(!1),
            { status: P } = t,
            R = i.useCallback(() => {
                (0, s.mMO)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("72820")
                        .then(n.bind(n, 281439));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            C(O({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: d,
                            }),
                        );
                });
            }, [t, d]),
            D = i.useCallback(async () => {
                y(!0), await (0, a.Ir)(t, d), y(!1);
            }, [t, d]),
            w = i.useMemo(() => !f.BE.includes(t.status) && A > 0, [t.status, A]),
            { title: L, description: M } = (() => {
                switch (P) {
                    case h.Dmq.CANCELED:
                        return {
                            title: E.intl.string(b.default.KME8Q6),
                            description: E.intl.format(b.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, f.DP)(),
                            }),
                        };
                    case h.Dmq.PAUSED:
                        return {
                            title: E.intl.string(b.default["4flKoC"]),
                            description: E.intl.format(b.default["Q++BmO"], {
                                premiumGroupProductName: (0, f.DP)(),
                            }),
                        };
                    case h.Dmq.PAST_DUE:
                    case h.Dmq.ACCOUNT_HOLD:
                    case h.Dmq.BILLING_RETRY:
                        return {
                            title: E.intl.string(b.default.cfeFEt),
                            description: E.intl.format(b.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: f.TE,
                            }),
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(b.default.NRCfnQ, {
                                premiumGroupProductName: (0, f.DP)(),
                            }),
                            description: E.intl.format(b.default.lvnrnb, {
                                totalSeats: f.LM,
                                premiumGroupProductName: (0, f.DP)(),
                                helpCenterLink: f.TE,
                            }),
                        };
                }
            })();
        return (0, r.jsxs)(s.hLv, {
            className: x.kL,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(I, {}),
                (0, r.jsxs)("div", {
                    className: x.wS,
                    children: [
                        (0, r.jsx)(T, {
                            title: L,
                            description: M,
                            button: c.ki(t)
                                ? (0, r.jsx)(s.Button, {
                                      variant: "expressive",
                                      size: "md",
                                      text: E.intl.string(b.default.EFTJMQ),
                                      onClick: D,
                                      loading: N,
                                  })
                                : (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      text: E.intl.string(b.default.oO0EYw),
                                      onClick: R,
                                  }),
                        }),
                        (0, r.jsx)(j, {
                            premiumGroupMembers: m,
                            isLoadingPremiumGroupMembers: g,
                            canInvite: w,
                            onInvite: () => {
                                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                }),
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("73987"), n.e("37997")]).then(
                                            n.bind(n, 773486),
                                        );
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                C(O({}, n), {
                                                    subscription: t,
                                                }),
                                            );
                                    });
                            },
                            onRemoveMember: (e) => {
                                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, s.mMO)(async () => {
                                        let { default: i } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) =>
                                            (0, r.jsx)(
                                                i,
                                                C(O({}, n), {
                                                    subscriptionId: t.id,
                                                    member: e,
                                                }),
                                            );
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                var i;
                                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let l = null == (i = u.A.getInviteByUserId(e.id)) ? void 0 : i.invite;
                                (0, s.mMO)(async () => {
                                    let { default: i } = await n.e("15554").then(n.bind(n, 115225));
                                    return (n) =>
                                        (0, r.jsx)(
                                            i,
                                            C(O({}, n), {
                                                subscriptionId: t.id,
                                                invitedUser: e,
                                                subscriptionGroupMemberId: null == l ? void 0 : l.id,
                                            }),
                                        );
                                });
                            },
                            numTotalSeats: S,
                            numUsedSeats: v,
                            numAvailableInvites: A,
                        }),
                    ],
                }),
            ],
        });
    };
