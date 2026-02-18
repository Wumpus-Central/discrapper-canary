n.d(t, { i: () => I, j: () => N });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(158032),
    o = n(954571),
    c = n(927578),
    d = n(427262),
    u = n(59784),
    _ = n(233317),
    m = n(622017),
    A = n(113090),
    g = n(752533),
    h = n(88001),
    x = n(652215),
    p = n(519412),
    E = n(985018),
    C = n(546991);
let T = () =>
        (0, i.jsxs)(l.BJc, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: C.wx,
            children: [
                (0, i.jsx)(l.Heading, { variant: "display-md", className: C.Nd, children: (0, h.DP)() }),
                (0, i.jsx)(l.Exy, { type: "beta", variant: "expressive" }),
            ],
        }),
    S = (e) => {
        let { title: t, description: n, button: s } = e;
        return (0, i.jsxs)("div", {
            className: C.bh,
            children: [
                (0, i.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: C.iQ,
                    children: [
                        (0, i.jsx)(l.Heading, { variant: "heading-xl/semibold", children: t }),
                        (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, i.jsx)("div", { className: C.UD, children: s }),
            ],
        });
    },
    I = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: a } = (0, A.A)(),
            { premiumGroupMembers: r, isLoading: o } = (0, m.A)(s?.subscriptionId ?? null);
        if (o || null == r || a || null == s) return (0, i.jsx)(l.y$y, {});
        let c = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: _, members: I } = r,
            { title: f, description: N } = (() => {
                switch (s.subscriptionStatus) {
                    case x.Dmq.CANCELED:
                        return {
                            title: E.intl.string(p.default.mCwdPj),
                            description: E.intl.format(p.default.wH9NYG, { endDate: u }),
                        };
                    case x.Dmq.PAUSED:
                        return {
                            title: E.intl.string(p.default.IDyd1e),
                            description: E.intl.format(p.default["8MfYhr"], {
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE,
                            }),
                        };
                    case x.Dmq.PAST_DUE:
                    case x.Dmq.ACCOUNT_HOLD:
                    case x.Dmq.BILLING_RETRY:
                        return {
                            title: E.intl.string(p.default.Duq8zp),
                            description: E.intl.format(p.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(p.default.xiUjMF, {
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                            description: E.intl.format(p.default["2HEyqG"], {
                                primaryName: (0, d.$3)(_),
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(l.hLv, {
            className: C.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(T, {}),
                (0, i.jsxs)("div", {
                    className: C.wS,
                    children: [
                        (0, i.jsx)(S, {
                            title: f,
                            description: N,
                            button: (0, i.jsx)(l.Button, {
                                variant: "secondary",
                                text: E.intl.string(p.default.NCu2JD),
                                onClick: () => {
                                    (0, l.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("41353"), n.e("40573")]).then(
                                            n.bind(n, 205463),
                                        );
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: c, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, i.jsxs)(l.BJc, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: C.Or,
                                    children: E.intl.string(p.default["oqw/KW"]),
                                }),
                                (0, i.jsx)(g.U4, { user: _, isOwnUser: !1 }),
                                I.map((e) => (0, i.jsx)(g.YF, { user: e, isOwnUser: e.id === t?.id }, e.id)),
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
            onInvite: a,
            onRemoveMember: r,
            onRemoveInvitedUser: o,
            numTotalSeats: c,
            numUsedSeats: d,
            numAvailableInvites: u,
        } = e;
        if (n || null == t) return (0, i.jsx)(l.y$y, {});
        let { primary: _, members: m, invitedUsers: A } = t;
        return (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, i.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: E.intl.string(p.default["oqw/KW"]),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: E.intl.format(p.default["/a/UoP"], { usedSeats: d, totalSeats: c }),
                        }),
                    ],
                }),
                (0, i.jsx)(g.U4, { user: _, isOwnUser: !0 }),
                m.map((e) => (0, i.jsx)(g.MT, { user: e, onRemove: () => r(e) }, e.id)),
                A.map((e) => (0, i.jsx)(g.Bs, { user: e, onRemove: () => o(e) }, e.id)),
                Array.from({ length: u }).map((e, t) =>
                    (0, i.jsx)(g.XN, { onInvite: a, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    N = (e) => {
        let { subscription: t, analyticsLocations: d } = e,
            { premiumGroupMembers: A, isLoading: g } = (0, m.A)(t.id),
            {
                numAvailableInvites: I,
                numTotalSeats: N,
                numUsedSeats: b,
            } = (0, a.cf)([_.A], () => ({
                numAvailableInvites: _.A.getNumAvailableInvites(),
                numTotalSeats: _.A.getNumTotalSeats(),
                numUsedSeats: _.A.getNumUsedSeats(),
            })),
            [j, v] = s.useState(!1),
            { status: O } = t,
            R = s.useCallback(() => {
                (0, l.mMO)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        n.e("41353"),
                        n.e("35432"),
                        n.e("82383"),
                    ]).then(n.bind(n, 281439));
                    return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: d });
                });
            }, [t, d]),
            y = s.useCallback(async () => {
                v(!0), await (0, r.Ir)(t, d), v(!1);
            }, [t, d]),
            P = () => {
                o.default.track(x.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, l.mMO)(async () => {
                        let { default: e } = await n.e("96368").then(n.bind(n, 773486));
                        return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                    });
            },
            L = s.useMemo(() => !h.BE.includes(t.status) && I > 0, [t.status, I]),
            { title: D, description: M } = (() => {
                switch (O) {
                    case x.Dmq.CANCELED:
                        return {
                            title: E.intl.string(p.default.KME8Q6),
                            description: E.intl.format(p.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                        };
                    case x.Dmq.PAUSED:
                        return {
                            title: E.intl.string(p.default["4flKoC"]),
                            description: E.intl.format(p.default["Q++BmO"], { premiumGroupProductName: (0, h.DP)() }),
                        };
                    case x.Dmq.PAST_DUE:
                    case x.Dmq.ACCOUNT_HOLD:
                    case x.Dmq.BILLING_RETRY:
                        return {
                            title: E.intl.string(p.default.cfeFEt),
                            description: E.intl.format(p.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: h.TE,
                            }),
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(p.default.NRCfnQ, {
                                premiumGroupProductName: (0, h.DP)(),
                            }),
                            description: E.intl.format(p.default.lvnrnb, {
                                totalSeats: h.LM,
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(l.hLv, {
            className: C.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(T, {}),
                (0, i.jsxs)("div", {
                    className: C.wS,
                    children: [
                        (0, i.jsx)(S, {
                            title: D,
                            description: M,
                            button: c.ki(t)
                                ? (0, i.jsx)(l.Button, {
                                      variant: "expressive",
                                      size: "md",
                                      text: E.intl.string(p.default.EFTJMQ),
                                      onClick: y,
                                      loading: j,
                                  })
                                : (0, i.jsxs)(l.BJc, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, i.jsx)(l.Button, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: E.intl.string(p.default.Tcmclj),
                                              onClick: P,
                                              disabled: !L,
                                          }),
                                          (0, i.jsx)(l.Button, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: E.intl.string(p.default.oO0EYw),
                                              onClick: R,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, i.jsx)(f, {
                            premiumGroupMembers: A,
                            isLoadingPremiumGroupMembers: g,
                            canInvite: L,
                            onInvite: P,
                            onRemoveMember: (e) => {
                                o.default.track(x.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, l.mMO)(async () => {
                                        let { default: s } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) => (0, i.jsx)(s, { ...n, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                o.default.track(x.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = u.A.getInviteByUserId(e.id)?.invite;
                                (0, l.mMO)(async () => {
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
                            numTotalSeats: N,
                            numUsedSeats: b,
                            numAvailableInvites: I,
                        }),
                    ],
                }),
            ],
        });
    };
