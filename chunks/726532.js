n.d(t, { i: () => b, j: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(158032),
    o = n(954571),
    d = n(927578),
    c = n(427262),
    u = n(59784),
    m = n(233317),
    _ = n(622017),
    g = n(113090),
    x = n(752533),
    A = n(88001),
    h = n(652215),
    p = n(518582),
    f = n(985018),
    T = n(849865);
let S = () =>
        (0, i.jsxs)(a.BJc, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: T.wx,
            children: [
                (0, i.jsx)(a.Heading, { variant: "display-md", className: T.Nd, children: (0, A.DP)() }),
                (0, i.jsx)(a.Exy, { type: "beta", variant: "expressive" }),
            ],
        }),
    E = (e) => {
        let { title: t, description: n, button: s } = e;
        return (0, i.jsxs)("div", {
            className: T.bh,
            children: [
                (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: T.iQ,
                    children: [
                        (0, i.jsx)(a.Heading, { variant: "heading-xl/semibold", children: t }),
                        (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, i.jsx)("div", { className: T.UD, children: s }),
            ],
        });
    },
    b = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: l } = (0, g.A)(),
            { premiumGroupMembers: r, isLoading: o } = (0, _.A)(s?.subscriptionId ?? null);
        if (o || null == r || l || null == s) return (0, i.jsx)(a.y$y, {});
        let d = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: m, members: b } = r,
            { title: C, description: v } = (() => {
                switch (s.subscriptionStatus) {
                    case h.Dmq.CANCELED:
                        return {
                            title: f.intl.string(p.default.mCwdPj),
                            description: f.intl.format(p.default.wH9NYG, { endDate: u }),
                        };
                    case h.Dmq.PAUSED:
                        return {
                            title: f.intl.string(p.default.IDyd1e),
                            description: f.intl.format(p.default["8MfYhr"], {
                                premiumGroupProductName: (0, A.DP)(),
                                helpCenterLink: A.TE,
                            }),
                        };
                    case h.Dmq.PAST_DUE:
                    case h.Dmq.ACCOUNT_HOLD:
                    case h.Dmq.BILLING_RETRY:
                        return {
                            title: f.intl.string(p.default.Duq8zp),
                            description: f.intl.format(p.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, A.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: f.intl.formatToPlainString(p.default.xiUjMF, {
                                premiumGroupProductName: (0, A.DP)(),
                            }),
                            description: f.intl.format(p.default["2HEyqG"], {
                                primaryName: (0, c.$3)(m),
                                premiumGroupProductName: (0, A.DP)(),
                                helpCenterLink: A.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(a.hLv, {
            className: T.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(S, {}),
                (0, i.jsxs)("div", {
                    className: T.wS,
                    children: [
                        (0, i.jsx)(E, {
                            title: C,
                            description: v,
                            button: (0, i.jsx)(a.Button, {
                                variant: "secondary",
                                text: f.intl.string(p.default.NCu2JD),
                                onClick: () => {
                                    (0, a.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("41353"), n.e("17965")]).then(
                                            n.bind(n, 205463),
                                        );
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: d, currentUser: t });
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
                                    className: T.Or,
                                    children: f.intl.string(p.default["oqw/KW"]),
                                }),
                                (0, i.jsx)(x.U4, { user: m, isOwnUser: !1 }),
                                b.map((e) => (0, i.jsx)(x.YF, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    C = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: s,
            onInvite: l,
            onRemoveMember: r,
            onRemoveInvitedUser: o,
            numTotalSeats: d,
            numUsedSeats: c,
            numAvailableInvites: u,
        } = e;
        if (n || null == t) return (0, i.jsx)(a.y$y, {});
        let { primary: m, members: _, invitedUsers: g } = t;
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
                            children: f.intl.string(p.default["oqw/KW"]),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: f.intl.format(p.default["/a/UoP"], { usedSeats: c, totalSeats: d }),
                        }),
                    ],
                }),
                (0, i.jsx)(x.U4, { user: m, isOwnUser: !0 }),
                _.map((e) => (0, i.jsx)(x.MT, { user: e, onRemove: () => r(e) }, e.id)),
                g.map((e) => (0, i.jsx)(x.Bs, { user: e, onRemove: () => o(e) }, e.id)),
                Array.from({ length: u }).map((e, t) =>
                    (0, i.jsx)(x.XN, { onInvite: l, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    v = (e) => {
        let { subscription: t, analyticsLocations: c } = e,
            { premiumGroupMembers: g, isLoading: x } = (0, _.A)(t.id),
            {
                numAvailableInvites: b,
                numTotalSeats: v,
                numUsedSeats: N,
            } = (0, l.cf)([m.A], () => ({
                numAvailableInvites: m.A.getNumAvailableInvites(),
                numTotalSeats: m.A.getNumTotalSeats(),
                numUsedSeats: m.A.getNumUsedSeats(),
            })),
            [I, j] = s.useState(!1),
            { status: y } = t,
            O = s.useCallback(() => {
                (0, a.mMO)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        n.e("41353"),
                        n.e("35432"),
                        n.e("62009"),
                    ]).then(n.bind(n, 281439));
                    return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: c });
                });
            }, [t, c]),
            R = s.useCallback(async () => {
                j(!0), await (0, r.Ir)(t, c), j(!1);
            }, [t, c]),
            L = () => {
                o.default.track(h.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, a.mMO)(async () => {
                        let { default: e } = await n.e("96368").then(n.bind(n, 773486));
                        return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                    });
            },
            P = s.useMemo(() => !A.BE.includes(t.status) && b > 0, [t.status, b]),
            { title: D, description: G } = (() => {
                switch (y) {
                    case h.Dmq.CANCELED:
                        return {
                            title: f.intl.string(p.default.KME8Q6),
                            description: f.intl.format(p.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, A.DP)(),
                            }),
                        };
                    case h.Dmq.PAUSED:
                        return {
                            title: f.intl.string(p.default["4flKoC"]),
                            description: f.intl.format(p.default["Q++BmO"], { premiumGroupProductName: (0, A.DP)() }),
                        };
                    case h.Dmq.PAST_DUE:
                    case h.Dmq.ACCOUNT_HOLD:
                    case h.Dmq.BILLING_RETRY:
                        return {
                            title: f.intl.string(p.default.cfeFEt),
                            description: f.intl.format(p.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: A.TE,
                            }),
                        };
                    default:
                        return {
                            title: f.intl.formatToPlainString(p.default.NRCfnQ, {
                                premiumGroupProductName: (0, A.DP)(),
                            }),
                            description: f.intl.format(p.default.lvnrnb, {
                                totalSeats: A.LM,
                                premiumGroupProductName: (0, A.DP)(),
                                helpCenterLink: A.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(a.hLv, {
            className: T.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(S, {}),
                (0, i.jsxs)("div", {
                    className: T.wS,
                    children: [
                        (0, i.jsx)(E, {
                            title: D,
                            description: G,
                            button: d.ki(t)
                                ? (0, i.jsx)(a.Button, {
                                      variant: "expressive",
                                      size: "md",
                                      text: f.intl.string(p.default.EFTJMQ),
                                      onClick: R,
                                      loading: I,
                                  })
                                : (0, i.jsxs)(a.BJc, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, i.jsx)(a.Button, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: f.intl.string(p.default.Tcmclj),
                                              onClick: L,
                                              disabled: !P,
                                          }),
                                          (0, i.jsx)(a.Button, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: f.intl.string(p.default.oO0EYw),
                                              onClick: O,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, i.jsx)(C, {
                            premiumGroupMembers: g,
                            isLoadingPremiumGroupMembers: x,
                            canInvite: P,
                            onInvite: L,
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
                                    let { default: l } = await n.e("15554").then(n.bind(n, 115225));
                                    return (n) =>
                                        (0, i.jsx)(l, {
                                            ...n,
                                            subscriptionId: t.id,
                                            invitedUser: e,
                                            subscriptionGroupMemberId: s?.id,
                                        });
                                });
                            },
                            numTotalSeats: v,
                            numUsedSeats: N,
                            numAvailableInvites: b,
                        }),
                    ],
                }),
            ],
        });
    };
