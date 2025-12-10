n.d(t, {
    L: () => I,
    d: () => v,
}),
    n(953529),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(51144),
    c = n(591085),
    u = n(546090),
    d = n(366733),
    f = n(282793),
    p = n(441677),
    _ = n(388032),
    m = n(17845);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = () =>
        (0, r.jsxs)(s.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: m.header,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "display-md",
                    className: m.logoHeader,
                    children: (0, f.sO)(),
                }),
                (0, r.jsx)(s.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    O = (e) => {
        let { title: t, description: n, buttonText: i, onClick: a } = e;
        return (0, r.jsxs)("div", {
            className: m.descriptionAndButtonContainer,
            children: [
                (0, r.jsxs)(s.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    className: m.descriptionContainer,
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
                    className: m.buttonContainer,
                    children: (0, r.jsx)(s.Button, {
                        variant: "secondary",
                        text: i,
                        onClick: a,
                    }),
                }),
            ],
        });
    },
    v = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembers: n, isLoading: i } = (0, c.Z)();
        if (i || null == n) return (0, r.jsx)(s.$jN, {});
        let { primary: a, members: o } = n,
            u = () => {
                throw Error("Not implemented");
            };
        return (0, r.jsxs)(s.$1m, {
            className: m.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(y, {}),
                (0, r.jsxs)("div", {
                    className: m.contentGrid,
                    children: [
                        (0, r.jsx)(O, {
                            title: _.intl.formatToPlainString(p.default.xiUjMF, {
                                premiumGroupProductName: (0, f.sO)(),
                            }),
                            description: _.intl.format(p.default["2HEyqG"], {
                                primaryName: (0, l.XM)(a),
                                helpCenterLink: f.j3,
                                premiumGroupProductName: (0, f.sO)(),
                            }),
                            buttonText: _.intl.string(p.default.NCu2JD),
                            onClick: u,
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
                                    className: m.usersListHeader,
                                    children: _.intl.string(p.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(d.Vl, {
                                    user: a,
                                    isOwnUser: !1,
                                }),
                                o.map((e) =>
                                    (0, r.jsx)(
                                        d.kg,
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
    S = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            onInvite: i,
            onRemoveMember: a,
            onRemoveInvitedUser: o,
        } = e;
        if (n || null == t) return (0, r.jsx)(s.$jN, {});
        let { primary: l, members: c, invitedUsers: m } = t,
            h = f.v$,
            g = c.length,
            E = Math.max(0, h - g - m.length);
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
                                    children: _.intl.string(p.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(u.Z, { onInvite: i }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: _.intl.format(p.default["/a/UoP"], {
                                usedSeats: g,
                                totalSeats: h,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(d.Vl, {
                    user: l,
                    isOwnUser: !0,
                }),
                c.map((e) =>
                    (0, r.jsx)(
                        d.UA,
                        {
                            user: e,
                            onRemove: () => a(e),
                        },
                        e.id,
                    ),
                ),
                m.map((e) =>
                    (0, r.jsx)(
                        d.gk,
                        {
                            user: e,
                            onRemove: () => o(e),
                        },
                        e.id,
                    ),
                ),
                Array.from({ length: E }).map((e, t) => (0, r.jsx)(d.QU, { onInvite: i }, "seat-available-".concat(t))),
            ],
        });
    },
    I = (e) => {
        let { subscription: t, analyticsLocations: a } = e;
        o()(t.hasAnyPremiumGroup, "Subscription is not a premium group");
        let { premiumGroupMembers: l, isLoading: u } = (0, c.Z)(),
            d = i.useCallback(() => {
                (0, s.ZDy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                        .e("26526")
                        .then(n.bind(n, 48813));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                premiumSubscription: t,
                                analyticsLocations: a,
                            }),
                        );
                });
            }, [t, a]),
            h = (e) => {
                throw Error("Not implemented");
            },
            E = () => {
                throw Error("Not implemented");
            },
            v = (e) => {
                throw Error("Not implemented");
            };
        return (0, r.jsxs)(s.$1m, {
            className: m.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(y, {}),
                (0, r.jsxs)("div", {
                    className: m.contentGrid,
                    children: [
                        (0, r.jsx)(O, {
                            title: _.intl.formatToPlainString(p.default.NRCfnQ, {
                                premiumGroupProductName: (0, f.sO)(),
                            }),
                            description: _.intl.format(p.default.lvnrnb, {
                                totalSeats: f.v$,
                                premiumGroupProductName: (0, f.sO)(),
                                helpCenterLink: f.j3,
                            }),
                            buttonText: _.intl.string(p.default.oO0EYw),
                            onClick: d,
                        }),
                        (0, r.jsx)(S, {
                            premiumGroupMembers: l,
                            isLoadingPremiumGroupMembers: u,
                            onInvite: E,
                            onRemoveMember: h,
                            onRemoveInvitedUser: v,
                        }),
                    ],
                }),
            ],
        });
    };
