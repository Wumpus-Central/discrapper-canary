var t = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(390544),
    d = i(554146),
    c = i(821609);
if (221552 == i.j) var u = i(509434);
if (221552 == i.j) var o = i(534514);
if (221552 == i.j) var m = i(834730);
if (221552 == i.j) var x = i(939249);
if (221552 == i.j) var f = i(933832);
if (221552 == i.j) var j = i(624479);
if (221552 == i.j) var g = i(289873);
if (221552 == i.j) var v = i(866665);
if (221552 == i.j) var E = i(290136);
var I = i(793574),
    h = i(263775),
    C = i(454908),
    N = i(363487),
    M = i(403362),
    S = i(889558),
    T = i(940456),
    A = i(907878),
    p = i(614393),
    R = i(770681),
    y = i(590388),
    k = i(685743),
    b = i(349085),
    _ = i(968459),
    O = i(981381),
    P = i(581453),
    G = i(342942),
    D = i(49999),
    L = i(105518),
    U = i(792996),
    F = i(377325);
function V(e) {
    let { guildId: n, instance: i } = e,
        [s, a] = l.useState(!1),
        r = l.useCallback(() => {
            (a(!0),
                (0, T.as)(n, i.id).finally(() => {
                    a(!1);
                }));
        }, [n, i.id]);
    return (0, t.jsx)(c.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.TMzy7d),
        variant: "secondary",
        loading: s,
        onClick: r,
    });
}
function w(e) {
    return (0, t.jsx)(c.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.tkbVdf),
        variant: "secondary",
        icon: u.LinkExternalSmallIcon,
        iconPosition: "end",
        ...e,
    });
}
function K(e) {
    return (0, t.jsx)(c.$, { fullWidth: !0, text: U.intl.string(L.default["fQCcM/"]), variant: "primary", ...e });
}
function Z(e) {
    return (0, t.jsx)(c.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.gWMqnI),
        variant: "primary",
        icon: u.LinkExternalSmallIcon,
        iconPosition: "end",
        ...e,
    });
}
function $(e) {
    let { guildId: n } = e,
        [i, s] = l.useState(!1),
        a = l.useCallback(() => {
            (s(!0),
                (0, T.cq)(n).finally(() => {
                    s(!1);
                }));
        }, [n]);
    return (0, t.jsx)(c.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.BLEx3k),
        variant: "secondary",
        loading: i,
        onClick: a,
    });
}
function z(e) {
    let { instance: n } = e,
        i = (0, O.A)(n.providerType, n.gameServerPanelUrl);
    return (0, t.jsx)(c.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != i && (0, S.h)({ href: i });
        },
    });
}
i.d(
    n,
    {},
    {
        Ay: function (e) {
            let { guildId: n, instance: i } = e,
                s = (0, _.A)(i),
                [c, u] = (0, h.kn)([d.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
                T = c !== d.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
                { data: W } = (0, C.I)(i.gameId),
                B = (0, O.A)(i.providerType, i.gameServerPanelUrl),
                Y = l.useCallback(() => {
                    ((0, A.Ai)(n, i.gameId, W?.name ?? "", i.id),
                        T || null == i.providerType
                            ? (0, P.A)(n, i)
                            : (0, G.A)({
                                  provider: i.providerType,
                                  onAccept: () => {
                                      (u(D.i.TAKE_ACTION), (0, P.A)(n, i));
                                  },
                              }));
                }, [i, T, u, n, W?.name]),
                { handleCopyServerIp: q, animateCopyIcon: H } = (0, k.A)(n, i.id, I.A.GAME_SERVER_GAME, s ?? ""),
                X = (0, b.A)(i.gameId, "cover"),
                Q = (0, N.A)(n),
                J = l.useCallback(() => {
                    ((0, A.f7)(n, i.id), (0, S.h)({ href: i.gameServerPanelUrl ?? "" }));
                }, [i.gameServerPanelUrl, n, i.id]),
                ee = l.useMemo(() => {
                    switch (i.status) {
                        case r.M.SLEEPING:
                            return (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(V, { guildId: n, instance: i }),
                                    Q && (0, t.jsx)(w, { onClick: J, disabled: null == i.gameServerPanelUrl }),
                                ],
                            });
                        case r.M.OFFLINE:
                        case r.M.ONLINE:
                        case r.M.STARTING:
                            return (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(K, { onClick: Y }),
                                    Q && (0, t.jsx)(w, { onClick: J, disabled: null == i.gameServerPanelUrl }),
                                ],
                            });
                        case r.M.STARTUP_FAILED:
                        case r.M.MISSING_STOCK:
                            return Q ? (0, t.jsx)(Z, { onClick: J }) : (0, t.jsx)(K, { onClick: Y, disabled: !0 });
                        case r.M.DELETED:
                            return Q
                                ? (0, t.jsx)(w, { onClick: J, disabled: null == i.gameServerPanelUrl })
                                : (0, t.jsx)(K, { onClick: Y, disabled: !0 });
                        case r.M.PROVIDER_ERRORED:
                            return (0, t.jsxs)(t.Fragment, {
                                children: [
                                    Q && null != B
                                        ? (0, t.jsx)(z, { guildId: n, instance: i })
                                        : (0, t.jsx)(K, { onClick: Y, disabled: !0 }),
                                    (0, t.jsx)($, { guildId: n, instance: i }),
                                ],
                            });
                        default:
                            return null;
                    }
                }, [i, Y, Q, J, n, B]),
                en = l.useMemo(() => {
                    if (null == i.gameConfig) return null;
                    let e = [i.gameConfig.type, i.gameConfig.version].filter(M.Vq).join(" ");
                    return "" === e ? null : e;
                }, [i.gameConfig]),
                ei = l.useMemo(() => {
                    switch (i.status) {
                        case r.M.STARTING:
                            if (null == i.gameServerPanelUrl) return U.intl.string(L.default["1A3US2"]);
                            return null;
                        case r.M.STARTUP_FAILED:
                            return U.intl.string(Q ? L.default.Mdoc98 : L.default.osZiRl);
                        case r.M.MISSING_STOCK:
                            return U.intl.string(Q ? L.default.YCakvM : L.default.osZiRl);
                        case r.M.PROVIDER_ERRORED:
                            return U.intl.string(Q ? L.default.NRyCeY : L.default.osZiRl);
                        default:
                            return null;
                    }
                }, [i.status, i.gameServerPanelUrl, Q]);
            return (0, t.jsxs)(R.A, {
                actions: ee,
                children: [
                    (0, t.jsxs)("div", {
                        className: F.serverDetailsContainer,
                        children: [
                            (0, t.jsxs)("div", {
                                className: F.serverHeader,
                                children: [
                                    (0, t.jsx)("img", { src: X ?? "", alt: "", className: F.gameImage }),
                                    (0, t.jsxs)("div", {
                                        className: F.serverInfo,
                                        children: [
                                            (0, t.jsx)(o.D, { variant: "heading-sm/medium", children: i.name }),
                                            (0, t.jsx)(m.E, {
                                                variant: "body-sm/medium",
                                                color: "text-muted",
                                                children: [W?.name, en].filter(M.Vq).join(" \u2022 "),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, t.jsx)("div", {
                                children: (0, t.jsxs)("div", {
                                    className: F.detailsGrid,
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: F.detailItem,
                                            children: [
                                                (0, t.jsx)(m.E, {
                                                    variant: "body-xs/semibold",
                                                    color: "text-muted",
                                                    children: U.intl.string(L.default.bDdi7n),
                                                }),
                                                (0, t.jsx)(m.E, {
                                                    variant: "body-sm/medium",
                                                    children: `${null != i.onlineConnectionsCount && i.onlineConnectionsCount >= 0 ? i.onlineConnectionsCount : "\u2014"} / ${null != i.maxConnectionsCount && i.maxConnectionsCount >= 0 ? i.maxConnectionsCount : "\u2014"}`,
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            className: F.detailItem,
                                            children: [
                                                (0, t.jsx)(m.E, {
                                                    variant: "body-xs/semibold",
                                                    color: "text-muted",
                                                    children: U.intl.string(L.default["7phwMG"]),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: F.serverIpContainer,
                                                    children:
                                                        null == s
                                                            ? (0, t.jsx)(m.E, {
                                                                  variant: "body-sm/medium",
                                                                  children: "\u2014",
                                                              })
                                                            : T
                                                              ? (0, t.jsxs)(t.Fragment, {
                                                                    children: [
                                                                        (0, t.jsx)(m.E, {
                                                                            variant: "body-sm/medium",
                                                                            children: s,
                                                                        }),
                                                                        (0, t.jsx)(x.D, {
                                                                            className: F.copyButton,
                                                                            "aria-label": U.intl.string(U.t.OpuAlK),
                                                                            onClick: q,
                                                                            children: H
                                                                                ? (0, t.jsx)(f.CheckmarkLargeIcon, {
                                                                                      size: "sm",
                                                                                  })
                                                                                : (0, t.jsx)(j.CopyIcon, {
                                                                                      size: "sm",
                                                                                  }),
                                                                        }),
                                                                    ],
                                                                })
                                                              : null != i.providerType &&
                                                                (0, t.jsx)(x.D, {
                                                                    tag: "a",
                                                                    onClick: () => {
                                                                        (0, G.A)({
                                                                            provider: i.providerType,
                                                                            onAccept: () => {
                                                                                (u(D.i.TAKE_ACTION), q());
                                                                            },
                                                                        });
                                                                    },
                                                                    children: U.intl.string(L.default["f+F7H3"]),
                                                                }),
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            className: F.detailItem,
                                            children: [
                                                (0, t.jsx)(m.E, {
                                                    variant: "body-xs/semibold",
                                                    color: "text-muted",
                                                    children: U.intl.string(L.default["n+ZX7y"]),
                                                }),
                                                (0, t.jsxs)("div", {
                                                    className: F.statusContainer,
                                                    children: [
                                                        i.status === r.M.STARTING
                                                            ? (0, t.jsx)(g.y, {
                                                                  type: g.t.SPINNING_CIRCLE_SIMPLE,
                                                                  className: F.statusLoading,
                                                              })
                                                            : (0, t.jsx)("span", {
                                                                  className: a()(
                                                                      F.statusIndicator,
                                                                      null != i.status && F[i.status],
                                                                  ),
                                                              }),
                                                        (0, t.jsx)(m.E, {
                                                            variant: "body-sm/medium",
                                                            children: (function (e) {
                                                                switch (e) {
                                                                    case r.M.STARTING:
                                                                        return U.intl.string(L.default.SgjaXI);
                                                                    case r.M.STARTUP_FAILED:
                                                                        return U.intl.string(L.default["7C9Z3s"]);
                                                                    case r.M.OFFLINE:
                                                                        return U.intl.string(L.default["Ys/RrB"]);
                                                                    case r.M.ONLINE:
                                                                        return U.intl.string(L.default["60kAzo"]);
                                                                    case r.M.DELETED:
                                                                        return U.intl.string(L.default.Z1NZwX);
                                                                    case r.M.MISSING_STOCK:
                                                                        return U.intl.string(L.default["+a5G2l"]);
                                                                    case r.M.SLEEPING:
                                                                        return U.intl.string(L.default.y0z8ZO);
                                                                    case r.M.PROVIDER_ERRORED:
                                                                        return U.intl.string(L.default["6g/oji"]);
                                                                    default:
                                                                        return "\u2014";
                                                                }
                                                            })(i.status),
                                                        }),
                                                        null != ei &&
                                                            (0, t.jsx)(v.m, {
                                                                position: "top",
                                                                text: ei,
                                                                children: (0, t.jsx)(E.CircleQuestionIcon, {
                                                                    className: F.statusTooltipIcon,
                                                                    size: "xs",
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            className: F.detailItem,
                                            children: [
                                                (0, t.jsx)(m.E, {
                                                    variant: "body-xs/semibold",
                                                    color: "text-muted",
                                                    children: U.intl.string(L.default.mJlz3T),
                                                }),
                                                (0, t.jsx)(m.E, {
                                                    variant: "body-sm/medium",
                                                    children: null != i.regionName ? i.regionName : "\u2014",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    Q &&
                        (0, t.jsx)("div", {
                            className: F.overflowMenu,
                            children: (0, t.jsx)(y.A, { guildId: n, instance: i }),
                        }),
                    (0, t.jsx)("div", {
                        className: F.imageBackground,
                        children: (0, t.jsx)(p.T, { imageUrl: X ?? "" }),
                    }),
                ],
            });
        },
        l5: K,
    },
);
