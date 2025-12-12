n.d(t, {
    L: () => R,
    d: () => N,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(366939),
    u = n(74538),
    d = n(51144),
    f = n(80721),
    p = n(643281),
    _ = n(591085),
    m = n(546090),
    h = n(366733),
    g = n(282793),
    E = n(981631),
    b = n(941651),
    y = n(388032),
    O = n(17845);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = () =>
        (0, r.jsxs)(l.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: O.header,
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "display-md",
                    className: O.logoHeader,
                    children: (0, g.sO)(),
                }),
                (0, r.jsx)(l.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    A = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, r.jsxs)("div", {
            className: O.descriptionAndButtonContainer,
            children: [
                (0, r.jsxs)(l.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: O.descriptionContainer,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: O.buttonContainer,
                    children: i,
                }),
            ],
        });
    },
    N = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembers: i, isLoading: o } = (0, _.Z)(),
            {
                hasFetchedMembership: a,
                premiumGroupSubscriptionId: c,
                premiumGroupMembershipSubscriptionStatus: u,
                premiumGroupMembershipCurrentPeriodEnd: f,
            } = (0, s.cj)([p.Z], () => ({
                hasFetchedMembership: p.Z.hasFetchedMembership(),
                premiumGroupSubscriptionId: p.Z.getPremiumGroupSubscriptionId(),
                premiumGroupMembershipSubscriptionStatus: p.Z.getPremiumGroupSubscriptionStatus(),
                premiumGroupMembershipCurrentPeriodEnd: p.Z.getPremiumGroupCurrentPeriodEnd(),
            }));
        if (o || null == i || !a || null == c) return (0, r.jsx)(l.$jN, {});
        let { primary: m, members: v } = i,
            { title: I, description: N } = (() => {
                switch (u) {
                    case E.O0b.CANCELED:
                        return {
                            title: y.intl.string(b.default.mCwdPj),
                            description: y.intl.format(b.default.wH9NYG, { endDate: f }),
                        };
                    case E.O0b.PAUSED:
                        return {
                            title: y.intl.string(b.default.IDyd1e),
                            description: y.intl.format(b.default["8MfYhr"], {
                                premiumGroupProductName: (0, g.sO)(),
                                helpCenterLink: g.j3,
                            }),
                        };
                    case E.O0b.PAST_DUE:
                    case E.O0b.ACCOUNT_HOLD:
                    case E.O0b.BILLING_RETRY:
                        return {
                            title: y.intl.string(b.default.Duq8zp),
                            description: y.intl.format(b.default["MHn/D6"], {
                                endDate: f,
                                premiumGroupProductName: (0, g.sO)(),
                            }),
                        };
                    default:
                        return {
                            title: y.intl.formatToPlainString(b.default.xiUjMF, {
                                premiumGroupProductName: (0, g.sO)(),
                            }),
                            description: y.intl.format(b.default["2HEyqG"], {
                                primaryName: (0, d.XM)(m),
                                premiumGroupProductName: (0, g.sO)(),
                                helpCenterLink: g.j3,
                            }),
                        };
                }
            })(),
            P = () => {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("92326").then(n.bind(n, 3446));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            T(S({}, n), {
                                premiumGroupSubscriptionId: c,
                                currentUser: t,
                            }),
                        );
                });
            };
        return (0, r.jsxs)(l.$1m, {
            className: O.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(C, {}),
                (0, r.jsxs)("div", {
                    className: O.contentGrid,
                    children: [
                        (0, r.jsx)(A, {
                            title: I,
                            description: N,
                            button: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                text: y.intl.string(b.default.NCu2JD),
                                onClick: P,
                            }),
                        }),
                        (0, r.jsxs)(l.Kqy, {
                            direction: "vertical",
                            padding: {
                                left: 32,
                                bottom: 12,
                            },
                            gap: 0,
                            children: [
                                (0, r.jsx)(l.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: O.usersListHeader,
                                    children: y.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(h.Vl, {
                                    user: m,
                                    isOwnUser: !1,
                                }),
                                v.map((e) =>
                                    (0, r.jsx)(
                                        h.kg,
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
    P = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: i,
            onInvite: o,
            onRemoveMember: a,
            onRemoveInvitedUser: s,
            numTotalSeats: c,
            numUsedSeats: u,
            numAvailableInvites: d,
        } = e;
        if (n || null == t) return (0, r.jsx)(l.$jN, {});
        let { primary: f, members: p, invitedUsers: _ } = t;
        return (0, r.jsxs)(l.Kqy, {
            direction: "vertical",
            padding: {
                left: 32,
                bottom: 12,
            },
            gap: 0,
            children: [
                (0, r.jsxs)(l.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        top: 12,
                        left: 4,
                        right: 4,
                        bottom: 10,
                    },
                    children: [
                        (0, r.jsxs)(l.Kqy, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(l.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    children: y.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(m.Z, {
                                    onInvite: o,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: y.intl.format(b.default["/a/UoP"], {
                                usedSeats: u,
                                totalSeats: c,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(h.Vl, {
                    user: f,
                    isOwnUser: !0,
                }),
                p.map((e) =>
                    (0, r.jsx)(
                        h.UA,
                        {
                            user: e,
                            onRemove: () => a(e),
                        },
                        e.id,
                    ),
                ),
                _.map((e) =>
                    (0, r.jsx)(
                        h.gk,
                        {
                            user: e,
                            onRemove: () => s(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({ length: d }).map((e, t) =>
                    (0, r.jsx)(
                        h.QU,
                        {
                            onInvite: o,
                            canInvite: i,
                        },
                        "seat-available-".concat(t),
                    ),
                ),
            ],
        });
    },
    R = (e) => {
        let { subscription: t, analyticsLocations: o } = e;
        a()(t.hasAnyPremiumGroup, "Subscription is not a premium group");
        let { premiumGroupMembers: d, isLoading: m } = (0, _.Z)(),
            {
                numAvailableInvites: h,
                numTotalSeats: v,
                numUsedSeats: I,
            } = (0, s.cj)([p.Z], () => ({
                numAvailableInvites: p.Z.getNumAvailableInvites(),
                numTotalSeats: p.Z.getNumTotalSeats(),
                numUsedSeats: p.Z.getNumUsedSeats(),
            })),
            [N, R] = i.useState(!1),
            { status: w } = t,
            D = i.useCallback(() => {
                (0, l.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            T(S({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: o,
                            }),
                        );
                });
            }, [t, o]),
            x = i.useCallback(async () => {
                R(!0), await (0, c.O5)(t, o), R(!1);
            }, [t, o]),
            L = (e) => {
                (0, f.Jn)(t.id, e.id);
            },
            j = () => {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (n) => (0, r.jsx)(e, T(S({}, n), { subscription: t }));
                });
            },
            M = (e) => {
                (0, f.if)(t.id, e.id);
            },
            k = () => {
                switch (w) {
                    case E.O0b.CANCELED:
                        return {
                            title: y.intl.string(b.default.KME8Q6),
                            description: y.intl.format(b.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, g.sO)(),
                            }),
                        };
                    case E.O0b.PAUSED:
                        return {
                            title: y.intl.string(b.default["4flKoC"]),
                            description: y.intl.format(b.default["Q++BmO"], { premiumGroupProductName: (0, g.sO)() }),
                        };
                    case E.O0b.PAST_DUE:
                    case E.O0b.ACCOUNT_HOLD:
                    case E.O0b.BILLING_RETRY:
                        return {
                            title: y.intl.string(b.default.cfeFEt),
                            description: y.intl.format(b.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: g.j3,
                            }),
                        };
                    default:
                        return {
                            title: y.intl.formatToPlainString(b.default.NRCfnQ, {
                                premiumGroupProductName: (0, g.sO)(),
                            }),
                            description: y.intl.format(b.default.lvnrnb, {
                                totalSeats: g.v$,
                                premiumGroupProductName: (0, g.sO)(),
                                helpCenterLink: g.j3,
                            }),
                        };
                }
            },
            U = () =>
                u.Vw(t)
                    ? (0, r.jsx)(l.Button, {
                          variant: "expressive",
                          size: "md",
                          text: y.intl.string(b.default.EFTJMQ),
                          onClick: x,
                          loading: N,
                      })
                    : (0, r.jsx)(l.Button, {
                          variant: "secondary",
                          size: "md",
                          text: y.intl.string(b.default.oO0EYw),
                          onClick: D,
                      }),
            G = i.useMemo(() => !g.Ou.includes(t.status) && h > 0, [t.status, h]),
            { title: Z, description: F } = k();
        return (0, r.jsxs)(l.$1m, {
            className: O.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(C, {}),
                (0, r.jsxs)("div", {
                    className: O.contentGrid,
                    children: [
                        (0, r.jsx)(A, {
                            title: Z,
                            description: F,
                            button: U(),
                        }),
                        (0, r.jsx)(P, {
                            premiumGroupMembers: d,
                            isLoadingPremiumGroupMembers: m,
                            canInvite: G,
                            onInvite: j,
                            onRemoveMember: L,
                            onRemoveInvitedUser: M,
                            numTotalSeats: v,
                            numUsedSeats: I,
                            numAvailableInvites: h,
                        }),
                    ],
                }),
            ],
        });
    };
