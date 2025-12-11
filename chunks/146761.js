n.d(t, {
    L: () => A,
    d: () => T,
}),
    n(953529),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(366939),
    c = n(74538),
    u = n(51144),
    d = n(591085),
    f = n(546090),
    p = n(366733),
    _ = n(282793),
    m = n(981631),
    h = n(96011),
    g = n(388032),
    E = n(17845);
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
        (0, r.jsxs)(s.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: E.header,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "display-md",
                    className: E.logoHeader,
                    children: (0, _.sO)(),
                }),
                (0, r.jsx)(s.Cts, {
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
                (0, r.jsxs)(s.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: E.descriptionContainer,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(s.Text, {
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
            { premiumGroupMembers: n, isLoading: i } = (0, d.Z)();
        if (i || null == n) return (0, r.jsx)(s.$jN, {});
        let { primary: a, members: o } = n,
            l = () => {
                throw Error("Not implemented");
            };
        return (0, r.jsxs)(s.$1m, {
            className: E.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(S, {}),
                (0, r.jsxs)("div", {
                    className: E.contentGrid,
                    children: [
                        (0, r.jsx)(I, {
                            title: g.intl.formatToPlainString(h.default.xiUjMF, {
                                premiumGroupProductName: (0, _.sO)(),
                            }),
                            description: g.intl.format(h.default["2HEyqG"], {
                                primaryName: (0, u.XM)(a),
                                helpCenterLink: _.j3,
                                premiumGroupProductName: (0, _.sO)(),
                            }),
                            button: (0, r.jsx)(s.Button, {
                                variant: "secondary",
                                text: g.intl.string(h.default.NCu2JD),
                                onClick: l,
                            }),
                        }),
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            padding: {
                                left: 32,
                                bottom: 12,
                            },
                            gap: 0,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: E.usersListHeader,
                                    children: g.intl.string(h.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(p.Vl, {
                                    user: a,
                                    isOwnUser: !1,
                                }),
                                o.map((e) =>
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
            onRemoveMember: o,
            onRemoveInvitedUser: l,
        } = e;
        if (n || null == t) return (0, r.jsx)(s.$jN, {});
        let { primary: c, members: u, invitedUsers: d } = t,
            m = _.v$,
            E = u.length,
            b = Math.max(0, m - E - d.length);
        return (0, r.jsxs)(s.Kqy, {
            direction: "vertical",
            padding: {
                left: 32,
                bottom: 12,
            },
            gap: 0,
            children: [
                (0, r.jsxs)(s.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        top: 12,
                        left: 4,
                        right: 4,
                        bottom: 10,
                    },
                    children: [
                        (0, r.jsxs)(s.Kqy, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(s.Heading, {
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
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: g.intl.format(h.default["/a/UoP"], {
                                usedSeats: E,
                                totalSeats: m,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(p.Vl, {
                    user: c,
                    isOwnUser: !0,
                }),
                u.map((e) =>
                    (0, r.jsx)(
                        p.UA,
                        {
                            user: e,
                            onRemove: () => o(e),
                        },
                        e.id,
                    ),
                ),
                d.map((e) =>
                    (0, r.jsx)(
                        p.gk,
                        {
                            user: e,
                            onRemove: () => l(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({ length: b }).map((e, t) =>
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
        let { subscription: t, analyticsLocations: a } = e;
        o()(t.hasAnyPremiumGroup, "Subscription is not a premium group");
        let { premiumGroupMembers: u, isLoading: f } = (0, d.Z)(),
            [p, b] = i.useState(!1),
            { status: O } = t,
            T = i.useCallback(() => {
                (0, s.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            v(y({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: a,
                            }),
                        );
                });
            }, [t, a]),
            A = i.useCallback(async () => {
                b(!0), await (0, l.O5)(t, a), b(!1);
            }, [t, a]),
            N = (e) => {
                throw Error("Not implemented");
            },
            P = () => {
                throw Error("Not implemented");
            },
            R = (e) => {
                throw Error("Not implemented");
            },
            w = () => {
                switch (O) {
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
            D = () =>
                c.Vw(t)
                    ? (0, r.jsx)(s.Button, {
                          variant: "expressive",
                          size: "md",
                          text: g.intl.string(h.default.EFTJMQ),
                          onClick: A,
                          loading: p,
                      })
                    : (0, r.jsx)(s.Button, {
                          variant: "secondary",
                          size: "md",
                          text: g.intl.string(h.default.oO0EYw),
                          onClick: T,
                      }),
            x = i.useMemo(() => !_.Ou.includes(t.status), [t.status]),
            { title: L, description: j } = w();
        return (0, r.jsxs)(s.$1m, {
            className: E.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(S, {}),
                (0, r.jsxs)("div", {
                    className: E.contentGrid,
                    children: [
                        (0, r.jsx)(I, {
                            title: L,
                            description: j,
                            button: D(),
                        }),
                        (0, r.jsx)(C, {
                            premiumGroupMembers: u,
                            isLoadingPremiumGroupMembers: f,
                            canInvite: x,
                            onInvite: P,
                            onRemoveMember: N,
                            onRemoveInvitedUser: R,
                        }),
                    ],
                }),
            ],
        });
    };
