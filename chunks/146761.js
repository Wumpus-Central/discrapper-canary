n.d(t, {
    L: () => A,
    d: () => T,
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
    u = n(643281),
    d = n(591085),
    f = n(546090),
    p = n(366733),
    _ = n(282793),
    m = n(981631),
    h = n(353149),
    g = n(388032),
    E = n(12048);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = () =>
        (0, r.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: E.header,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "display-md",
                    className: E.logoHeader,
                    children: (0, _.sO)(),
                }),
                (0, r.jsx)(o.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    I = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, r.jsxs)("div", {
            className: E.descriptionAndButtonContainer,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: E.descriptionContainer,
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
                    className: E.buttonContainer,
                    children: i,
                }),
            ],
        });
    },
    T = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembers: i, isLoading: s } = (0, d.Z)(),
            {
                hasFetchedMembership: l,
                premiumGroupSubscriptionId: f,
                premiumGroupMembershipSubscriptionStatus: b,
                premiumGroupMembershipCurrentPeriodEnd: O,
            } = (0, a.cj)([u.Z], () => ({
                hasFetchedMembership: u.Z.hasFetchedMembership(),
                premiumGroupSubscriptionId: u.Z.getPremiumGroupSubscriptionId(),
                premiumGroupMembershipSubscriptionStatus: u.Z.getPremiumGroupSubscriptionStatus(),
                premiumGroupMembershipCurrentPeriodEnd: u.Z.getPremiumGroupCurrentPeriodEnd(),
            }));
        if (s || null == i || !l || null == f) return (0, r.jsx)(o.$jN, {});
        let { primary: T, members: C } = i,
            { title: A, description: N } = (() => {
                switch (b) {
                    case m.O0b.CANCELED:
                        return {
                            title: g.intl.string(h.default.mCwdPj),
                            description: g.intl.format(h.default.wH9NYG, { endDate: O }),
                        };
                    case m.O0b.PAUSED:
                        return {
                            title: g.intl.string(h.default.IDyd1e),
                            description: g.intl.format(h.default["8MfYhr"], {
                                premiumGroupProductName: (0, _.sO)(),
                                helpCenterLink: _.j3,
                            }),
                        };
                    case m.O0b.PAST_DUE:
                    case m.O0b.ACCOUNT_HOLD:
                    case m.O0b.BILLING_RETRY:
                        return {
                            title: g.intl.string(h.default.Duq8zp),
                            description: g.intl.format(h.default["MHn/D6"], {
                                endDate: O,
                                premiumGroupProductName: (0, _.sO)(),
                            }),
                        };
                    default:
                        return {
                            title: g.intl.formatToPlainString(h.default.xiUjMF, {
                                premiumGroupProductName: (0, _.sO)(),
                            }),
                            description: g.intl.format(h.default["2HEyqG"], {
                                primaryName: (0, c.XM)(T),
                                premiumGroupProductName: (0, _.sO)(),
                                helpCenterLink: _.j3,
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
                            v(y({}, n), {
                                premiumGroupSubscriptionId: f,
                                currentUser: t,
                            }),
                        );
                });
            };
        return (0, r.jsxs)(o.$1m, {
            className: E.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(S, {}),
                (0, r.jsxs)("div", {
                    className: E.contentGrid,
                    children: [
                        (0, r.jsx)(I, {
                            title: A,
                            description: N,
                            button: (0, r.jsx)(o.Button, {
                                variant: "secondary",
                                text: g.intl.string(h.default.NCu2JD),
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
                                    className: E.usersListHeader,
                                    children: g.intl.string(h.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(p.Vl, {
                                    user: T,
                                    isOwnUser: !1,
                                }),
                                C.map((e) =>
                                    (0, r.jsx)(
                                        p.kg,
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
    C = (e) => {
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
        let { primary: _, members: m, invitedUsers: E } = t;
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
                                    children: g.intl.string(h.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(f.Z, {
                                    onInvite: a,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: g.intl.format(h.default["/a/UoP"], {
                                usedSeats: u,
                                totalSeats: c,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(p.Vl, {
                    user: _,
                    isOwnUser: !0,
                }),
                m.map((e) =>
                    (0, r.jsx)(
                        p.UA,
                        {
                            user: e,
                            onRemove: () => s(e),
                        },
                        e.id,
                    ),
                ),
                E.map((e) =>
                    (0, r.jsx)(
                        p.gk,
                        {
                            user: e,
                            onRemove: () => l(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({ length: d }).map((e, t) =>
                    (0, r.jsx)(
                        p.QU,
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
    A = (e) => {
        let { subscription: t, analyticsLocations: c } = e,
            { premiumGroupMembers: f, isLoading: p } = (0, d.Z)(),
            {
                numAvailableInvites: b,
                numTotalSeats: O,
                numUsedSeats: T,
            } = (0, a.cj)([u.Z], () => ({
                numAvailableInvites: u.Z.getNumAvailableInvites(),
                numTotalSeats: u.Z.getNumTotalSeats(),
                numUsedSeats: u.Z.getNumUsedSeats(),
            })),
            [A, N] = i.useState(!1),
            { status: P } = t,
            R = i.useCallback(() => {
                (0, o.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            v(y({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: c,
                            }),
                        );
                });
            }, [t, c]),
            w = i.useCallback(async () => {
                N(!0), await (0, s.O5)(t, c), N(!1);
            }, [t, c]),
            D = (e) => {
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e("30153").then(n.bind(n, 845959));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            v(y({}, n), {
                                subscriptionId: t.id,
                                member: e,
                            }),
                        );
                });
            },
            x = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (n) => (0, r.jsx)(e, v(y({}, n), { subscription: t }));
                });
            },
            L = (e) => {
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e("72114").then(n.bind(n, 157312));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            v(y({}, n), {
                                subscriptionId: t.id,
                                invitedUser: e,
                            }),
                        );
                });
            },
            j = () => {
                switch (P) {
                    case m.O0b.CANCELED:
                        return {
                            title: g.intl.string(h.default.KME8Q6),
                            description: g.intl.format(h.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, _.sO)(),
                            }),
                        };
                    case m.O0b.PAUSED:
                        return {
                            title: g.intl.string(h.default["4flKoC"]),
                            description: g.intl.format(h.default["Q++BmO"], { premiumGroupProductName: (0, _.sO)() }),
                        };
                    case m.O0b.PAST_DUE:
                    case m.O0b.ACCOUNT_HOLD:
                    case m.O0b.BILLING_RETRY:
                        return {
                            title: g.intl.string(h.default.cfeFEt),
                            description: g.intl.format(h.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: _.j3,
                            }),
                        };
                    default:
                        return {
                            title: g.intl.formatToPlainString(h.default.NRCfnQ, {
                                premiumGroupProductName: (0, _.sO)(),
                            }),
                            description: g.intl.format(h.default.lvnrnb, {
                                totalSeats: _.v$,
                                premiumGroupProductName: (0, _.sO)(),
                                helpCenterLink: _.j3,
                            }),
                        };
                }
            },
            M = () =>
                l.Vw(t)
                    ? (0, r.jsx)(o.Button, {
                          variant: "expressive",
                          size: "md",
                          text: g.intl.string(h.default.EFTJMQ),
                          onClick: w,
                          loading: A,
                      })
                    : (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          size: "md",
                          text: g.intl.string(h.default.oO0EYw),
                          onClick: R,
                      }),
            k = i.useMemo(() => !_.Ou.includes(t.status) && b > 0, [t.status, b]),
            { title: U, description: G } = j();
        return (0, r.jsxs)(o.$1m, {
            className: E.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(S, {}),
                (0, r.jsxs)("div", {
                    className: E.contentGrid,
                    children: [
                        (0, r.jsx)(I, {
                            title: U,
                            description: G,
                            button: M(),
                        }),
                        (0, r.jsx)(C, {
                            premiumGroupMembers: f,
                            isLoadingPremiumGroupMembers: p,
                            canInvite: k,
                            onInvite: x,
                            onRemoveMember: D,
                            onRemoveInvitedUser: L,
                            numTotalSeats: O,
                            numUsedSeats: T,
                            numAvailableInvites: b,
                        }),
                    ],
                }),
            ],
        });
    };
