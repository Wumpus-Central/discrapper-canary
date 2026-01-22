n.d(t, {
    L: () => w,
    d: () => N,
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
    d = n(703995),
    f = n(643281),
    p = n(591085),
    _ = n(340426),
    h = n(546090),
    m = n(366733),
    g = n(282793),
    E = n(981631),
    b = n(353149),
    y = n(388032),
    O = n(12048);
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
        (0, r.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: O.header,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "display-md",
                    className: O.logoHeader,
                    children: (0, g.sO)(),
                }),
                (0, r.jsx)(o.Cts, {
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
                (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: O.descriptionContainer,
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
                    className: O.buttonContainer,
                    children: i,
                }),
            ],
        });
    },
    N = (e) => {
        var t;
        let { currentUser: i } = e,
            { premiumGroupMembership: a, isLoading: s } = (0, _.Z)(),
            { premiumGroupMembers: l, isLoading: c } = (0, p.Z)(
                null != (t = null == a ? void 0 : a.subscriptionId) ? t : null,
            );
        if (c || null == l || s || null == a) return (0, r.jsx)(o.$jN, {});
        let d = a.subscriptionId,
            f = a.currentPeriodEnd,
            { primary: h, members: v } = l,
            { title: I, description: N } = (() => {
                switch (a.subscriptionStatus) {
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
                                primaryName: (0, u.XM)(h),
                                premiumGroupProductName: (0, g.sO)(),
                                helpCenterLink: g.j3,
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
                            T(S({}, t), {
                                premiumGroupSubscriptionId: d,
                                currentUser: i,
                            }),
                        );
                });
            };
        return (0, r.jsxs)(o.$1m, {
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
                            button: (0, r.jsx)(o.Button, {
                                variant: "secondary",
                                text: y.intl.string(b.default.NCu2JD),
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
                                    className: O.usersListHeader,
                                    children: y.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(m.Vl, {
                                    user: h,
                                    isOwnUser: !1,
                                }),
                                v.map((e) =>
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
    P = (e) => {
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
        let { primary: f, members: p, invitedUsers: _ } = t;
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
                                    children: y.intl.string(b.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(h.Z, {
                                    onInvite: a,
                                    disabled: !i,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: y.intl.format(b.default["/a/UoP"], {
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
                _.map((e) =>
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
    w = (e) => {
        let { subscription: t, analyticsLocations: u } = e,
            { premiumGroupMembers: _, isLoading: h } = (0, p.Z)(t.id),
            {
                numAvailableInvites: m,
                numTotalSeats: v,
                numUsedSeats: I,
            } = (0, a.cj)([f.Z], () => ({
                numAvailableInvites: f.Z.getNumAvailableInvites(),
                numTotalSeats: f.Z.getNumTotalSeats(),
                numUsedSeats: f.Z.getNumUsedSeats(),
            })),
            [N, w] = i.useState(!1),
            { status: R } = t,
            D = i.useCallback(() => {
                (0, o.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            T(S({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: u,
                            }),
                        );
                });
            }, [t, u]),
            x = i.useCallback(async () => {
                w(!0), await (0, s.O5)(t, u), w(!1);
            }, [t, u]),
            L = (e) => {
                l.default.track(E.rMx.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                    subscription_id: t.id,
                    member_user_id: e.id,
                }),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e("30153").then(n.bind(n, 845959));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                T(S({}, n), {
                                    subscriptionId: t.id,
                                    member: e,
                                }),
                            );
                    });
            },
            j = () => {
                l.default.track(E.rMx.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                        return (n) => (0, r.jsx)(e, T(S({}, n), { subscription: t }));
                    });
            },
            M = (e) => {
                var i;
                l.default.track(E.rMx.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                    subscription_id: t.id,
                    invited_user_id: e.id,
                });
                let a = null == (i = d.Z.getInviteByUserId(e.id)) ? void 0 : i.invite;
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e("72114").then(n.bind(n, 157312));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            T(S({}, n), {
                                subscriptionId: t.id,
                                invitedUser: e,
                                subscriptionGroupMemberId: null == a ? void 0 : a.id,
                            }),
                        );
                });
            },
            k = () => {
                switch (R) {
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
                c.Vw(t)
                    ? (0, r.jsx)(o.Button, {
                          variant: "expressive",
                          size: "md",
                          text: y.intl.string(b.default.EFTJMQ),
                          onClick: x,
                          loading: N,
                      })
                    : (0, r.jsx)(o.Button, {
                          variant: "secondary",
                          size: "md",
                          text: y.intl.string(b.default.oO0EYw),
                          onClick: D,
                      }),
            G = i.useMemo(() => !g.Ou.includes(t.status) && m > 0, [t.status, m]),
            { title: Z, description: F } = k();
        return (0, r.jsxs)(o.$1m, {
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
                            premiumGroupMembers: _,
                            isLoadingPremiumGroupMembers: h,
                            canInvite: G,
                            onInvite: j,
                            onRemoveMember: L,
                            onRemoveInvitedUser: M,
                            numTotalSeats: v,
                            numUsedSeats: I,
                            numAvailableInvites: m,
                        }),
                    ],
                }),
            ],
        });
    };
