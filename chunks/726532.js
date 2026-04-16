n.d(t, { i: () => b, j: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(158032),
    o = n(954571),
    d = n(927578),
    c = n(427262),
    u = n(59784),
    m = n(233317),
    g = n(622017),
    _ = n(113090),
    x = n(752533),
    h = n(88001),
    A = n(652215),
    p = n(466919),
    T = n(985018),
    f = n(666240);
let S = () =>
        (0, i.jsxs)(r.BJc, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: f.wx,
            children: [
                (0, i.jsx)(r.Heading, { variant: "display-md", className: f.Nd, children: (0, h.DP)() }),
                (0, i.jsx)(r.Exy, { type: "beta", variant: "expressive" }),
            ],
        }),
    E = (e) => {
        let { title: t, description: n, button: s } = e;
        return (0, i.jsxs)("div", {
            className: f.bh,
            children: [
                (0, i.jsxs)(r.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: f.iQ,
                    children: [
                        (0, i.jsx)(r.Heading, { variant: "heading-xl/semibold", children: t }),
                        (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, i.jsx)("div", { className: f.UD, children: s }),
            ],
        });
    },
    b = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: l } = (0, _.A)(),
            { premiumGroupMembers: a, isLoading: o } = (0, g.A)(s?.subscriptionId ?? null);
        if (o || null == a || l || null == s) return (0, i.jsx)(r.y$y, {});
        let d = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: m, members: b } = a,
            { title: C, description: v } = (() => {
                switch (s.subscriptionStatus) {
                    case A.Dmq.CANCELED:
                        return {
                            title: T.intl.string(p.default.mCwdPj),
                            description: T.intl.format(p.default.wH9NYG, { endDate: u }),
                        };
                    case A.Dmq.PAUSED:
                        return {
                            title: T.intl.string(p.default.IDyd1e),
                            description: T.intl.format(p.default["8MfYhr"], {
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE,
                            }),
                        };
                    case A.Dmq.PAST_DUE:
                    case A.Dmq.ACCOUNT_HOLD:
                    case A.Dmq.BILLING_RETRY:
                        return {
                            title: T.intl.string(p.default.Duq8zp),
                            description: T.intl.format(p.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: T.intl.formatToPlainString(p.default.xiUjMF, {
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                            description: T.intl.format(p.default["2HEyqG"], {
                                primaryName: (0, c.$3)(m),
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(r.hLv, {
            className: f.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(S, {}),
                (0, i.jsxs)("div", {
                    className: f.wS,
                    children: [
                        (0, i.jsx)(E, {
                            title: C,
                            description: v,
                            button: (0, i.jsx)(r.Button, {
                                variant: "secondary",
                                text: T.intl.string(p.default.NCu2JD),
                                onClick: () => {
                                    (0, r.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("41353"), n.e("72127")]).then(
                                            n.bind(n, 205463),
                                        );
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: d, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, i.jsxs)(r.BJc, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, i.jsx)(r.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: f.Or,
                                    children: T.intl.string(p.default["oqw/KW"]),
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
            onRemoveMember: a,
            onRemoveInvitedUser: o,
            numTotalSeats: d,
            numUsedSeats: c,
            numAvailableInvites: u,
        } = e;
        if (n || null == t) return (0, i.jsx)(r.y$y, {});
        let { primary: m, members: g, invitedUsers: _ } = t;
        return (0, i.jsxs)(r.BJc, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, i.jsxs)(r.BJc, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: T.intl.string(p.default["oqw/KW"]),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: T.intl.format(p.default["/a/UoP"], { usedSeats: c, totalSeats: d }),
                        }),
                    ],
                }),
                (0, i.jsx)(x.U4, { user: m, isOwnUser: !0 }),
                g.map((e) => (0, i.jsx)(x.MT, { user: e, onRemove: () => a(e) }, e.id)),
                _.map((e) => (0, i.jsx)(x.Bs, { user: e, onRemove: () => o(e) }, e.id)),
                Array.from({ length: u }).map((e, t) =>
                    (0, i.jsx)(x.XN, { onInvite: l, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    v = (e) => {
        let { subscription: t, analyticsLocations: c } = e,
            { premiumGroupMembers: _, isLoading: x } = (0, g.A)(t.id),
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
                (0, r.mMO)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        n.e("41353"),
                        n.e("35432"),
                        n.e("11108"),
                    ]).then(n.bind(n, 281439));
                    return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: c });
                });
            }, [t, c]),
            R = s.useCallback(async () => {
                j(!0), await (0, a.Ir)(t, c), j(!1);
            }, [t, c]),
            L = () => {
                o.default.track(A.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, r.mMO)(async () => {
                        let { default: e } = await n.e("96368").then(n.bind(n, 773486));
                        return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                    });
            },
            P = s.useMemo(() => !h.BE.includes(t.status) && b > 0, [t.status, b]),
            { title: D, description: G } = (() => {
                switch (y) {
                    case A.Dmq.CANCELED:
                        return {
                            title: T.intl.string(p.default.KME8Q6),
                            description: T.intl.format(p.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                        };
                    case A.Dmq.PAUSED:
                        return {
                            title: T.intl.string(p.default["4flKoC"]),
                            description: T.intl.format(p.default["Q++BmO"], { premiumGroupProductName: (0, h.DP)() }),
                        };
                    case A.Dmq.PAST_DUE:
                    case A.Dmq.ACCOUNT_HOLD:
                    case A.Dmq.BILLING_RETRY:
                        return {
                            title: T.intl.string(p.default.cfeFEt),
                            description: T.intl.format(p.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: h.TE,
                            }),
                        };
                    default:
                        return {
                            title: T.intl.formatToPlainString(p.default.NRCfnQ, {
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                            description: T.intl.format(p.default.lvnrnb, {
                                totalSeats: h.LM,
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(r.hLv, {
            className: f.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(S, {}),
                (0, i.jsxs)("div", {
                    className: f.wS,
                    children: [
                        (0, i.jsx)(E, {
                            title: D,
                            description: G,
                            button: d.ki(t)
                                ? (0, i.jsx)(r.Button, {
                                      variant: "expressive",
                                      size: "md",
                                      text: T.intl.string(p.default.EFTJMQ),
                                      onClick: R,
                                      loading: I,
                                  })
                                : (0, i.jsxs)(r.BJc, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, i.jsx)(r.Button, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: T.intl.string(p.default.Tcmclj),
                                              onClick: L,
                                              disabled: !P,
                                          }),
                                          (0, i.jsx)(r.Button, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: T.intl.string(p.default.oO0EYw),
                                              onClick: O,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, i.jsx)(C, {
                            premiumGroupMembers: _,
                            isLoadingPremiumGroupMembers: x,
                            canInvite: P,
                            onInvite: L,
                            onRemoveMember: (e) => {
                                o.default.track(A.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, r.mMO)(async () => {
                                        let { default: s } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) => (0, i.jsx)(s, { ...n, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                o.default.track(A.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = u.A.getInviteByUserId(e.id)?.invite;
                                (0, r.mMO)(async () => {
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
