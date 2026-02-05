n.d(t, { i: () => S, j: () => N });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(158032),
    o = n(954571),
    c = n(927578),
    d = n(427262),
    u = n(59784),
    _ = n(233317),
    m = n(622017),
    A = n(113090),
    g = n(752533),
    E = n(88001),
    h = n(652215),
    p = n(519412),
    C = n(985018),
    x = n(546991);
let T = () =>
        (0, i.jsxs)(a.BJc, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: x.wx,
            children: [
                (0, i.jsx)(a.Heading, { variant: "display-md", className: x.Nd, children: (0, E.DP)() }),
                (0, i.jsx)(a.Exy, { type: "beta", variant: "expressive" }),
            ],
        }),
    I = (e) => {
        let { title: t, description: n, button: s } = e;
        return (0, i.jsxs)("div", {
            className: x.bh,
            children: [
                (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: x.iQ,
                    children: [
                        (0, i.jsx)(a.Heading, { variant: "heading-xl/semibold", children: t }),
                        (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, i.jsx)("div", { className: x.UD, children: s }),
            ],
        });
    },
    S = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: r } = (0, A.A)(),
            { premiumGroupMembers: l, isLoading: o } = (0, m.A)(s?.subscriptionId ?? null);
        if (o || null == l || r || null == s) return (0, i.jsx)(a.y$y, {});
        let c = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: _, members: S } = l,
            { title: f, description: N } = (() => {
                switch (s.subscriptionStatus) {
                    case h.Dmq.CANCELED:
                        return {
                            title: C.intl.string(p.default.mCwdPj),
                            description: C.intl.format(p.default.wH9NYG, { endDate: u }),
                        };
                    case h.Dmq.PAUSED:
                        return {
                            title: C.intl.string(p.default.IDyd1e),
                            description: C.intl.format(p.default["8MfYhr"], {
                                premiumGroupProductName: (0, E.DP)(),
                                helpCenterLink: E.TE,
                            }),
                        };
                    case h.Dmq.PAST_DUE:
                    case h.Dmq.ACCOUNT_HOLD:
                    case h.Dmq.BILLING_RETRY:
                        return {
                            title: C.intl.string(p.default.Duq8zp),
                            description: C.intl.format(p.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, E.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: C.intl.formatToPlainString(p.default.xiUjMF, {
                                premiumGroupProductName: (0, E.DP)(),
                            }),
                            description: C.intl.format(p.default["2HEyqG"], {
                                primaryName: (0, d.$3)(_),
                                premiumGroupProductName: (0, E.DP)(),
                                helpCenterLink: E.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(a.hLv, {
            className: x.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(T, {}),
                (0, i.jsxs)("div", {
                    className: x.wS,
                    children: [
                        (0, i.jsx)(I, {
                            title: f,
                            description: N,
                            button: (0, i.jsx)(a.Button, {
                                variant: "secondary",
                                text: C.intl.string(p.default.NCu2JD),
                                onClick: () => {
                                    (0, a.mMO)(async () => {
                                        let { default: e } = await n.e("92796").then(n.bind(n, 205463));
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: c, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, i.jsxs)(a.BJc, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: x.Or,
                                    children: C.intl.string(p.default["oqw/KW"]),
                                }),
                                (0, i.jsx)(g.U4, { user: _, isOwnUser: !1 }),
                                S.map((e) => (0, i.jsx)(g.YF, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    f = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: s,
            onInvite: r,
            onRemoveMember: l,
            onRemoveInvitedUser: o,
            numTotalSeats: c,
            numUsedSeats: d,
            numAvailableInvites: u,
        } = e;
        if (n || null == t) return (0, i.jsx)(a.y$y, {});
        let { primary: _, members: m, invitedUsers: A } = t;
        return (0, i.jsxs)(a.BJc, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: C.intl.string(p.default["oqw/KW"]),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: C.intl.format(p.default["/a/UoP"], { usedSeats: d, totalSeats: c }),
                        }),
                    ],
                }),
                (0, i.jsx)(g.U4, { user: _, isOwnUser: !0 }),
                m.map((e) => (0, i.jsx)(g.MT, { user: e, onRemove: () => l(e) }, e.id)),
                A.map((e) => (0, i.jsx)(g.Bs, { user: e, onRemove: () => o(e) }, e.id)),
                Array.from({ length: u }).map((e, t) =>
                    (0, i.jsx)(g.XN, { onInvite: r, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    N = (e) => {
        let { subscription: t, analyticsLocations: d } = e,
            { premiumGroupMembers: A, isLoading: g } = (0, m.A)(t.id),
            {
                numAvailableInvites: S,
                numTotalSeats: N,
                numUsedSeats: b,
            } = (0, r.cf)([_.A], () => ({
                numAvailableInvites: _.A.getNumAvailableInvites(),
                numTotalSeats: _.A.getNumTotalSeats(),
                numUsedSeats: _.A.getNumUsedSeats(),
            })),
            [R, v] = s.useState(!1),
            { status: O } = t,
            j = s.useCallback(() => {
                (0, a.mMO)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("72820")
                        .then(n.bind(n, 281439));
                    return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: d });
                });
            }, [t, d]),
            P = s.useCallback(async () => {
                v(!0), await (0, l.Ir)(t, d), v(!1);
            }, [t, d]),
            y = () => {
                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, a.mMO)(async () => {
                        let { default: e } = await n.e("96368").then(n.bind(n, 773486));
                        return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                    });
            },
            L = s.useMemo(() => !E.BE.includes(t.status) && S > 0, [t.status, S]),
            { title: D, description: M } = (() => {
                switch (O) {
                    case h.Dmq.CANCELED:
                        return {
                            title: C.intl.string(p.default.KME8Q6),
                            description: C.intl.format(p.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, E.DP)(),
                            }),
                        };
                    case h.Dmq.PAUSED:
                        return {
                            title: C.intl.string(p.default["4flKoC"]),
                            description: C.intl.format(p.default["Q++BmO"], { premiumGroupProductName: (0, E.DP)() }),
                        };
                    case h.Dmq.PAST_DUE:
                    case h.Dmq.ACCOUNT_HOLD:
                    case h.Dmq.BILLING_RETRY:
                        return {
                            title: C.intl.string(p.default.cfeFEt),
                            description: C.intl.format(p.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: E.TE,
                            }),
                        };
                    default:
                        return {
                            title: C.intl.formatToPlainString(p.default.NRCfnQ, {
                                premiumGroupProductName: (0, E.DP)(),
                            }),
                            description: C.intl.format(p.default.lvnrnb, {
                                totalSeats: E.LM,
                                premiumGroupProductName: (0, E.DP)(),
                                helpCenterLink: E.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(a.hLv, {
            className: x.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(T, {}),
                (0, i.jsxs)("div", {
                    className: x.wS,
                    children: [
                        (0, i.jsx)(I, {
                            title: D,
                            description: M,
                            button: c.ki(t)
                                ? (0, i.jsx)(a.Button, {
                                      variant: "expressive",
                                      size: "md",
                                      text: C.intl.string(p.default.EFTJMQ),
                                      onClick: P,
                                      loading: R,
                                  })
                                : (0, i.jsxs)(a.BJc, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, i.jsx)(a.Button, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: C.intl.string(p.default.Tcmclj),
                                              onClick: y,
                                              disabled: !L,
                                          }),
                                          (0, i.jsx)(a.Button, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: C.intl.string(p.default.oO0EYw),
                                              onClick: j,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, i.jsx)(f, {
                            premiumGroupMembers: A,
                            isLoadingPremiumGroupMembers: g,
                            canInvite: L,
                            onInvite: y,
                            onRemoveMember: (e) => {
                                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, a.mMO)(async () => {
                                        let { default: s } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) => (0, i.jsx)(s, { ...n, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = u.A.getInviteByUserId(e.id)?.invite;
                                (0, a.mMO)(async () => {
                                    let { default: r } = await n.e("15554").then(n.bind(n, 115225));
                                    return (n) =>
                                        (0, i.jsx)(r, {
                                            ...n,
                                            subscriptionId: t.id,
                                            invitedUser: e,
                                            subscriptionGroupMemberId: s?.id,
                                        });
                                });
                            },
                            numTotalSeats: N,
                            numUsedSeats: b,
                            numAvailableInvites: S,
                        }),
                    ],
                }),
            ],
        });
    };
