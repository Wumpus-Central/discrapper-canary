n.d(t, {
    L: () => P,
    d: () => A,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(366939),
    l = n(626135),
    c = n(74538),
    u = n(51144),
    d = n(643281),
    f = n(591085),
    p = n(340426),
    _ = n(546090),
    m = n(366733),
    h = n(282793),
    g = n(981631),
    E = n(353149),
    b = n(388032),
    y = n(12048);
function O(e, t, n) {
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
                O(e, t, n[t]);
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
        (0, r.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: y.header,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "display-md",
                    className: y.logoHeader,
                    children: (0, h.sO)(),
                }),
                (0, r.jsx)(o.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    C = (e) => {
        let { title: t, description: n, button: i } = e;
        return (0, r.jsxs)("div", {
            className: y.descriptionAndButtonContainer,
            children: [
                (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: y.descriptionContainer,
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
                    className: y.buttonContainer,
                    children: i,
                }),
            ],
        });
    },
    A = (e) => {
        var t;
        let { currentUser: i } = e,
            { premiumGroupMembership: a, isLoading: s } = (0, p.Z)(),
            { premiumGroupMembers: l, isLoading: c } = (0, f.Z)(
                null != (t = null == a ? void 0 : a.subscriptionId) ? t : null,
            );
        if (c || null == l || s || null == a) return (0, r.jsx)(o.$jN, {});
        let d = a.subscriptionId,
            _ = a.currentPeriodEnd,
            { primary: O, members: S } = l,
            { title: A, description: N } = (() => {
                switch (a.subscriptionStatus) {
                    case g.O0b.CANCELED:
                        return {
                            title: b.intl.string(E.default.mCwdPj),
                            description: b.intl.format(E.default.wH9NYG, { endDate: _ }),
                        };
                    case g.O0b.PAUSED:
                        return {
                            title: b.intl.string(E.default.IDyd1e),
                            description: b.intl.format(E.default["8MfYhr"], {
                                premiumGroupProductName: (0, h.sO)(),
                                helpCenterLink: h.j3,
                            }),
                        };
                    case g.O0b.PAST_DUE:
                    case g.O0b.ACCOUNT_HOLD:
                    case g.O0b.BILLING_RETRY:
                        return {
                            title: b.intl.string(E.default.Duq8zp),
                            description: b.intl.format(E.default["MHn/D6"], {
                                endDate: _,
                                premiumGroupProductName: (0, h.sO)(),
                            }),
                        };
                    default:
                        return {
                            title: b.intl.formatToPlainString(E.default.xiUjMF, {
                                premiumGroupProductName: (0, h.sO)(),
                            }),
                            description: b.intl.format(E.default["2HEyqG"], {
                                primaryName: (0, u.XM)(O),
                                premiumGroupProductName: (0, h.sO)(),
                                helpCenterLink: h.j3,
                            }),
                        };
                }
            })(),
            P = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("92326").then(n.bind(n, 3446));
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
        return (0, r.jsxs)(o.$1m, {
            className: y.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(T, {}),
                (0, r.jsxs)("div", {
                    className: y.contentGrid,
                    children: [
                        (0, r.jsx)(C, {
                            title: A,
                            description: N,
                            button: (0, r.jsx)(o.Button, {
                                variant: "secondary",
                                text: b.intl.string(E.default.NCu2JD),
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
                                    className: y.usersListHeader,
                                    children: b.intl.string(E.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(m.Vl, {
                                    user: O,
                                    isOwnUser: !1,
                                }),
                                S.map((e) =>
                                    (0, r.jsx)(
                                        m.kg,
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
    N = (e) => {
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
        let { primary: f, members: p, invitedUsers: h } = t;
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
                                    children: b.intl.string(E.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(_.Z, {
                                    onInvite: a,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: b.intl.format(E.default["/a/UoP"], {
                                usedSeats: u,
                                totalSeats: c,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.Vl, {
                    user: f,
                    isOwnUser: !0,
                }),
                p.map((e) =>
                    (0, r.jsx)(
                        m.UA,
                        {
                            user: e,
                            onRemove: () => s(e),
                        },
                        e.id,
                    ),
                ),
                h.map((e) =>
                    (0, r.jsx)(
                        m.gk,
                        {
                            user: e,
                            onRemove: () => l(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({ length: d }).map((e, t) =>
                    (0, r.jsx)(
                        m.QU,
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
    P = (e) => {
        let { subscription: t, analyticsLocations: u } = e,
            { premiumGroupMembers: p, isLoading: _ } = (0, f.Z)(t.id),
            {
                numAvailableInvites: m,
                numTotalSeats: O,
                numUsedSeats: S,
            } = (0, a.cj)([d.Z], () => ({
                numAvailableInvites: d.Z.getNumAvailableInvites(),
                numTotalSeats: d.Z.getNumTotalSeats(),
                numUsedSeats: d.Z.getNumUsedSeats(),
            })),
            [A, P] = i.useState(!1),
            { status: R } = t,
            w = i.useCallback(() => {
                (0, o.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
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
            D = i.useCallback(async () => {
                P(!0), await (0, s.O5)(t, u), P(!1);
            }, [t, u]),
            x = (e) => {
                l.default.track(g.rMx.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                    subscription_id: t.id,
                    member_user_id: e.id,
                }),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e("30153").then(n.bind(n, 845959));
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
            L = () => {
                l.default.track(g.rMx.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                        return (n) => (0, r.jsx)(e, I(v({}, n), { subscription: t }));
                    });
            },
            j = (e) => {
                l.default.track(g.rMx.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                    subscription_id: t.id,
                    invited_user_id: e.id,
                }),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e("72114").then(n.bind(n, 157312));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                I(v({}, n), {
                                    subscriptionId: t.id,
                                    invitedUser: e,
                                }),
                            );
                    });
            },
            M = () => {
                switch (R) {
                    case g.O0b.CANCELED:
                        return {
                            title: b.intl.string(E.default.KME8Q6),
                            description: b.intl.format(E.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, h.sO)(),
                            }),
                        };
                    case g.O0b.PAUSED:
                        return {
                            title: b.intl.string(E.default["4flKoC"]),
                            description: b.intl.format(E.default["Q++BmO"], { premiumGroupProductName: (0, h.sO)() }),
                        };
                    case g.O0b.PAST_DUE:
                    case g.O0b.ACCOUNT_HOLD:
                    case g.O0b.BILLING_RETRY:
                        return {
                            title: b.intl.string(E.default.cfeFEt),
                            description: b.intl.format(E.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: h.j3,
                            }),
                        };
                    default:
                        return {
                            title: b.intl.formatToPlainString(E.default.NRCfnQ, {
                                premiumGroupProductName: (0, h.sO)(),
                            }),
                            description: b.intl.format(E.default.lvnrnb, {
                                totalSeats: h.v$,
                                premiumGroupProductName: (0, h.sO)(),
                                helpCenterLink: h.j3,
                            }),
                        };
                }
            },
            k = () =>
                c.Vw(t)
                    ? (0, r.jsx)(o.Button, {
                          variant: "expressive",
                          size: "md",
                          text: b.intl.string(E.default.EFTJMQ),
                          onClick: D,
                          loading: A,
                      })
                    : (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          size: "md",
                          text: b.intl.string(E.default.oO0EYw),
                          onClick: w,
                      }),
            U = i.useMemo(() => !h.Ou.includes(t.status) && m > 0, [t.status, m]),
            { title: G, description: Z } = M();
        return (0, r.jsxs)(o.$1m, {
            className: y.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(T, {}),
                (0, r.jsxs)("div", {
                    className: y.contentGrid,
                    children: [
                        (0, r.jsx)(C, {
                            title: G,
                            description: Z,
                            button: k(),
                        }),
                        (0, r.jsx)(N, {
                            premiumGroupMembers: p,
                            isLoadingPremiumGroupMembers: _,
                            canInvite: U,
                            onInvite: L,
                            onRemoveMember: x,
                            onRemoveInvitedUser: j,
                            numTotalSeats: O,
                            numUsedSeats: S,
                            numAvailableInvites: m,
                        }),
                    ],
                }),
            ],
        });
    };
