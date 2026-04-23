n.d(t, { i: () => O, j: () => L });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(331322),
    r = n(534514),
    o = n(508770),
    d = n(834730),
    u = n(289873),
    c = n(192308),
    g = n(315629),
    m = n(821609),
    _ = n(158032),
    A = n(954571),
    h = n(927578),
    p = n(427262),
    x = n(59784),
    E = n(233317),
    T = n(622017),
    S = n(113090),
    f = n(752533),
    b = n(88001),
    C = n(652215),
    v = n(466919),
    N = n(985018),
    I = n(666240);
let y = () =>
        (0, i.jsxs)(a.B, {
            direction: "horizontal",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: I.wx,
            children: [
                (0, i.jsx)(r.D, { variant: "display-md", className: I.Nd, children: (0, b.DP)() }),
                (0, i.jsx)(o.E, { type: "beta", variant: "expressive" }),
            ],
        }),
    j = (e) => {
        let { title: t, description: n, button: s } = e;
        return (0, i.jsxs)("div", {
            className: I.bh,
            children: [
                (0, i.jsxs)(a.B, {
                    direction: "vertical",
                    gap: 8,
                    className: I.iQ,
                    children: [
                        (0, i.jsx)(r.D, { variant: "heading-xl/semibold", children: t }),
                        (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                    ],
                }),
                (0, i.jsx)("div", { className: I.UD, children: s }),
            ],
        });
    },
    O = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: l } = (0, S.A)(),
            { premiumGroupMembers: o, isLoading: d } = (0, T.A)(s?.subscriptionId ?? null);
        if (d || null == o || l || null == s) return (0, i.jsx)(u.y, {});
        let _ = s.subscriptionId,
            A = s.currentPeriodEnd,
            { primary: h, members: x } = o,
            { title: E, description: O } = (() => {
                switch (s.subscriptionStatus) {
                    case C.Dmq.CANCELED:
                        return {
                            title: N.intl.string(v.default.mCwdPj),
                            description: N.intl.format(v.default.wH9NYG, { endDate: A }),
                        };
                    case C.Dmq.PAUSED:
                        return {
                            title: N.intl.string(v.default.IDyd1e),
                            description: N.intl.format(v.default["8MfYhr"], {
                                premiumGroupProductName: (0, b.DP)(),
                                helpCenterLink: b.TE,
                            }),
                        };
                    case C.Dmq.PAST_DUE:
                    case C.Dmq.ACCOUNT_HOLD:
                    case C.Dmq.BILLING_RETRY:
                        return {
                            title: N.intl.string(v.default.Duq8zp),
                            description: N.intl.format(v.default["MHn/D6"], {
                                endDate: A,
                                premiumGroupProductName: (0, b.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: N.intl.formatToPlainString(v.default.xiUjMF, {
                                premiumGroupProductName: (0, b.DP)(),
                            }),
                            description: N.intl.format(v.default["2HEyqG"], {
                                primaryName: (0, p.$3)(h),
                                premiumGroupProductName: (0, b.DP)(),
                                helpCenterLink: b.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(g.h, {
            className: I.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(y, {}),
                (0, i.jsxs)("div", {
                    className: I.wS,
                    children: [
                        (0, i.jsx)(j, {
                            title: E,
                            description: O,
                            button: (0, i.jsx)(m.$, {
                                variant: "secondary",
                                text: N.intl.string(v.default.NCu2JD),
                                onClick: () => {
                                    (0, c.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("41353"), n.e("72127")]).then(
                                            n.bind(n, 205463),
                                        );
                                        return (n) =>
                                            (0, i.jsx)(e, { ...n, premiumGroupSubscriptionId: _, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, i.jsxs)(a.B, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, i.jsx)(r.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: I.Or,
                                    children: N.intl.string(v.default["oqw/KW"]),
                                }),
                                (0, i.jsx)(f.U4, { user: h, isOwnUser: !1 }),
                                x.map((e) => (0, i.jsx)(f.YF, { user: e, isOwnUser: e.id === t?.id }, e.id)),
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
            canInvite: s,
            onInvite: l,
            onRemoveMember: o,
            onRemoveInvitedUser: c,
            numTotalSeats: g,
            numUsedSeats: m,
            numAvailableInvites: _,
        } = e;
        if (n || null == t) return (0, i.jsx)(u.y, {});
        let { primary: A, members: h, invitedUsers: p } = t;
        return (0, i.jsxs)(a.B, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, i.jsxs)(a.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, i.jsx)(r.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: N.intl.string(v.default["oqw/KW"]),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: N.intl.format(v.default["/a/UoP"], { usedSeats: m, totalSeats: g }),
                        }),
                    ],
                }),
                (0, i.jsx)(f.U4, { user: A, isOwnUser: !0 }),
                h.map((e) => (0, i.jsx)(f.MT, { user: e, onRemove: () => o(e) }, e.id)),
                p.map((e) => (0, i.jsx)(f.Bs, { user: e, onRemove: () => c(e) }, e.id)),
                Array.from({ length: _ }).map((e, t) =>
                    (0, i.jsx)(f.XN, { onInvite: l, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    L = (e) => {
        let { subscription: t, analyticsLocations: r } = e,
            { premiumGroupMembers: o, isLoading: d } = (0, T.A)(t.id),
            {
                numAvailableInvites: u,
                numTotalSeats: p,
                numUsedSeats: S,
            } = (0, l.cf)([E.A], () => ({
                numAvailableInvites: E.A.getNumAvailableInvites(),
                numTotalSeats: E.A.getNumTotalSeats(),
                numUsedSeats: E.A.getNumUsedSeats(),
            })),
            [f, O] = s.useState(!1),
            { status: L } = t,
            D = s.useCallback(() => {
                (0, c.openModalLazy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        n.e("41353"),
                        n.e("35432"),
                        n.e("94133"),
                    ]).then(n.bind(n, 281439));
                    return (n) => (0, i.jsx)(e, { ...n, premiumSubscription: t, analyticsLocations: r });
                });
            }, [t, r]),
            P = s.useCallback(async () => {
                O(!0), await (0, _.Ir)(t, r), O(!1);
            }, [t, r]),
            G = () => {
                A.default.track(C.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await n.e("96368").then(n.bind(n, 773486));
                        return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                    });
            },
            M = s.useMemo(() => !b.BE.includes(t.status) && u > 0, [t.status, u]),
            { title: U, description: k } = (() => {
                switch (L) {
                    case C.Dmq.CANCELED:
                        return {
                            title: N.intl.string(v.default.KME8Q6),
                            description: N.intl.format(v.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, b.DP)(),
                            }),
                        };
                    case C.Dmq.PAUSED:
                        return {
                            title: N.intl.string(v.default["4flKoC"]),
                            description: N.intl.format(v.default["Q++BmO"], { premiumGroupProductName: (0, b.DP)() }),
                        };
                    case C.Dmq.PAST_DUE:
                    case C.Dmq.ACCOUNT_HOLD:
                    case C.Dmq.BILLING_RETRY:
                        return {
                            title: N.intl.string(v.default.cfeFEt),
                            description: N.intl.format(v.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: b.TE,
                            }),
                        };
                    default:
                        return {
                            title: N.intl.formatToPlainString(v.default.NRCfnQ, {
                                premiumGroupProductName: (0, b.DP)(),
                            }),
                            description: N.intl.format(v.default.lvnrnb, {
                                totalSeats: b.LM,
                                premiumGroupProductName: (0, b.DP)(),
                                helpCenterLink: b.TE,
                            }),
                        };
                }
            })();
        return (0, i.jsxs)(g.h, {
            className: I.kL,
            color: "nitro-pink",
            children: [
                (0, i.jsx)(y, {}),
                (0, i.jsxs)("div", {
                    className: I.wS,
                    children: [
                        (0, i.jsx)(j, {
                            title: U,
                            description: k,
                            button: h.ki(t)
                                ? (0, i.jsx)(m.$, {
                                      variant: "expressive",
                                      size: "md",
                                      text: N.intl.string(v.default.EFTJMQ),
                                      onClick: P,
                                      loading: f,
                                  })
                                : (0, i.jsxs)(a.B, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, i.jsx)(m.$, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: N.intl.string(v.default.Tcmclj),
                                              onClick: G,
                                              disabled: !M,
                                          }),
                                          (0, i.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: N.intl.string(v.default.oO0EYw),
                                              onClick: D,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, i.jsx)(R, {
                            premiumGroupMembers: o,
                            isLoadingPremiumGroupMembers: d,
                            canInvite: M,
                            onInvite: G,
                            onRemoveMember: (e) => {
                                A.default.track(C.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, c.openModalLazy)(async () => {
                                        let { default: s } = await n.e("21305").then(n.bind(n, 391040));
                                        return (n) => (0, i.jsx)(s, { ...n, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                A.default.track(C.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = x.A.getInviteByUserId(e.id)?.invite;
                                (0, c.openModalLazy)(async () => {
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
                            numTotalSeats: p,
                            numUsedSeats: S,
                            numAvailableInvites: u,
                        }),
                    ],
                }),
            ],
        });
    };
