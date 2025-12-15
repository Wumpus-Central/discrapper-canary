n.d(t, {
    L: () => N,
    d: () => C,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(366939),
    l = n(74538),
    c = n(51144),
    u = n(80721),
    d = n(643281),
    f = n(591085),
    p = n(546090),
    _ = n(366733),
    m = n(282793),
    h = n(981631),
    g = n(353149),
    E = n(388032),
    b = n(12048);
function y(e, t, n) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = () =>
        (0, r.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: b.header,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "display-md",
                    className: b.logoHeader,
                    children: (0, m.sO)(),
                }),
                (0, r.jsx)(o.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    T = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, r.jsxs)("div", {
            className: b.descriptionAndButtonContainer,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: b.descriptionContainer,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: b.buttonContainer,
                    children: i,
                }),
            ],
        });
    },
    C = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembers: i, isLoading: s } = (0, f.Z)(),
            {
                hasFetchedMembership: l,
                premiumGroupSubscriptionId: u,
                premiumGroupMembershipSubscriptionStatus: p,
                premiumGroupMembershipCurrentPeriodEnd: y,
            } = (0, a.cj)([d.Z], () => ({
                hasFetchedMembership: d.Z.hasFetchedMembership(),
                premiumGroupSubscriptionId: d.Z.getPremiumGroupSubscriptionId(),
                premiumGroupMembershipSubscriptionStatus: d.Z.getPremiumGroupSubscriptionStatus(),
                premiumGroupMembershipCurrentPeriodEnd: d.Z.getPremiumGroupCurrentPeriodEnd(),
            }));
        if (s || null == i || !l || null == u) return (0, r.jsx)(o.$jN, {});
        let { primary: v, members: C } = i,
            { title: A, description: N } = (() => {
                switch (p) {
                    case h.O0b.CANCELED:
                        return {
                            title: E.intl.string(g.default.mCwdPj),
                            description: E.intl.format(g.default.wH9NYG, { endDate: y }),
                        };
                    case h.O0b.PAUSED:
                        return {
                            title: E.intl.string(g.default.IDyd1e),
                            description: E.intl.format(g.default["8MfYhr"], {
                                premiumGroupProductName: (0, m.sO)(),
                                helpCenterLink: m.j3,
                            }),
                        };
                    case h.O0b.PAST_DUE:
                    case h.O0b.ACCOUNT_HOLD:
                    case h.O0b.BILLING_RETRY:
                        return {
                            title: E.intl.string(g.default.Duq8zp),
                            description: E.intl.format(g.default["MHn/D6"], {
                                endDate: y,
                                premiumGroupProductName: (0, m.sO)(),
                            }),
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(g.default.xiUjMF, {
                                premiumGroupProductName: (0, m.sO)(),
                            }),
                            description: E.intl.format(g.default["2HEyqG"], {
                                primaryName: (0, c.XM)(v),
                                premiumGroupProductName: (0, m.sO)(),
                                helpCenterLink: m.j3,
                            }),
                        };
                }
            })(),
            P = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("92326").then(n.bind(n, 3446));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            S(O({}, n), {
                                premiumGroupSubscriptionId: u,
                                currentUser: t,
                            }),
                        );
                });
            };
        return (0, r.jsxs)(o.$1m, {
            className: b.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(I, {}),
                (0, r.jsxs)("div", {
                    className: b.contentGrid,
                    children: [
                        (0, r.jsx)(T, {
                            title: A,
                            description: N,
                            button: (0, r.jsx)(o.Button, {
                                variant: "secondary",
                                text: E.intl.string(g.default.NCu2JD),
                                onClick: P,
                            }),
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            direction: "vertical",
                            padding: {
                                left: 32,
                                bottom: 12,
                            },
                            gap: 0,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: b.usersListHeader,
                                    children: E.intl.string(g.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(_.Vl, {
                                    user: v,
                                    isOwnUser: !1,
                                }),
                                C.map((e) =>
                                    (0, r.jsx)(
                                        _.kg,
                                        {
                                            user: e,
                                            isOwnUser: e.id === (null == t ? void 0 : t.id),
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
    A = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: i,
            onInvite: a,
            onRemoveMember: s,
            onRemoveInvitedUser: l,
            numTotalSeats: c,
            numUsedSeats: u,
            numAvailableInvites: d,
        } = e;
        if (n || null == t) return (0, r.jsx)(o.$jN, {});
        let { primary: f, members: m, invitedUsers: h } = t;
        return (0, r.jsxs)(o.Kqy, {
            direction: "vertical",
            padding: {
                left: 32,
                bottom: 12,
            },
            gap: 0,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        top: 12,
                        left: 4,
                        right: 4,
                        bottom: 10,
                    },
                    children: [
                        (0, r.jsxs)(o.Kqy, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    children: E.intl.string(g.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(p.Z, {
                                    onInvite: a,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: E.intl.format(g.default["/a/UoP"], {
                                usedSeats: u,
                                totalSeats: c,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(_.Vl, {
                    user: f,
                    isOwnUser: !0,
                }),
                m.map((e) =>
                    (0, r.jsx)(
                        _.UA,
                        {
                            user: e,
                            onRemove: () => s(e),
                        },
                        e.id,
                    ),
                ),
                h.map((e) =>
                    (0, r.jsx)(
                        _.gk,
                        {
                            user: e,
                            onRemove: () => l(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({ length: d }).map((e, t) =>
                    (0, r.jsx)(
                        _.QU,
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
    N = (e) => {
        let { subscription: t, analyticsLocations: c } = e,
            { premiumGroupMembers: p, isLoading: _ } = (0, f.Z)(),
            {
                numAvailableInvites: y,
                numTotalSeats: v,
                numUsedSeats: C,
            } = (0, a.cj)([d.Z], () => ({
                numAvailableInvites: d.Z.getNumAvailableInvites(),
                numTotalSeats: d.Z.getNumTotalSeats(),
                numUsedSeats: d.Z.getNumUsedSeats(),
            })),
            [N, P] = i.useState(!1),
            { status: R } = t,
            w = i.useCallback(() => {
                (0, o.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            S(O({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: c,
                            }),
                        );
                });
            }, [t, c]),
            D = i.useCallback(async () => {
                P(!0), await (0, s.O5)(t, c), P(!1);
            }, [t, c]),
            x = (e) => {
                (0, u.Jn)(t.id, e.id);
            },
            L = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (n) => (0, r.jsx)(e, S(O({}, n), { subscription: t }));
                });
            },
            j = (e) => {
                (0, u.if)(t.id, e.id);
            },
            M = () => {
                switch (R) {
                    case h.O0b.CANCELED:
                        return {
                            title: E.intl.string(g.default.KME8Q6),
                            description: E.intl.format(g.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, m.sO)(),
                            }),
                        };
                    case h.O0b.PAUSED:
                        return {
                            title: E.intl.string(g.default["4flKoC"]),
                            description: E.intl.format(g.default["Q++BmO"], { premiumGroupProductName: (0, m.sO)() }),
                        };
                    case h.O0b.PAST_DUE:
                    case h.O0b.ACCOUNT_HOLD:
                    case h.O0b.BILLING_RETRY:
                        return {
                            title: E.intl.string(g.default.cfeFEt),
                            description: E.intl.format(g.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: m.j3,
                            }),
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(g.default.NRCfnQ, {
                                premiumGroupProductName: (0, m.sO)(),
                            }),
                            description: E.intl.format(g.default.lvnrnb, {
                                totalSeats: m.v$,
                                premiumGroupProductName: (0, m.sO)(),
                                helpCenterLink: m.j3,
                            }),
                        };
                }
            },
            k = () =>
                l.Vw(t)
                    ? (0, r.jsx)(o.Button, {
                          variant: "expressive",
                          size: "md",
                          text: E.intl.string(g.default.EFTJMQ),
                          onClick: D,
                          loading: N,
                      })
                    : (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          size: "md",
                          text: E.intl.string(g.default.oO0EYw),
                          onClick: w,
                      }),
            U = i.useMemo(() => !m.Ou.includes(t.status) && y > 0, [t.status, y]),
            { title: G, description: Z } = M();
        return (0, r.jsxs)(o.$1m, {
            className: b.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(I, {}),
                (0, r.jsxs)("div", {
                    className: b.contentGrid,
                    children: [
                        (0, r.jsx)(T, {
                            title: G,
                            description: Z,
                            button: k(),
                        }),
                        (0, r.jsx)(A, {
                            premiumGroupMembers: p,
                            isLoadingPremiumGroupMembers: _,
                            canInvite: U,
                            onInvite: L,
                            onRemoveMember: x,
                            onRemoveInvitedUser: j,
                            numTotalSeats: v,
                            numUsedSeats: C,
                            numAvailableInvites: y,
                        }),
                    ],
                }),
            ],
        });
    };
