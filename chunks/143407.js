t.d(n, { Ay: () => W, l5: () => K });
var i = t(477900),
    s = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(390544),
    d = t(554146),
    u = t(821609);
if (221552 == t.j) var c = t(509434);
if (221552 == t.j) var o = t(297264);
if (221552 == t.j) var m = t(834730);
if (221552 == t.j) var x = t(939249);
if (221552 == t.j) var f = t(933832);
if (221552 == t.j) var j = t(624479);
if (221552 == t.j) var g = t(289873);
if (221552 == t.j) var v = t(866665);
if (221552 == t.j) var E = t(290136);
var h = t(793574),
    I = t(131607),
    C = t(569926),
    N = t(363487),
    M = t(403362),
    S = t(123917),
    T = t(498480),
    A = t(907878),
    R = t(614393),
    p = t(770681),
    k = t(590388),
    _ = t(685743),
    y = t(349085),
    O = t(968459),
    P = t(981381),
    b = t(581453),
    G = t(342942),
    D = t(49999),
    L = t(275695),
    U = t(375708),
    F = t(37540);
function V(e) {
    let { guildId: n, instance: t } = e,
        [l, a] = s.useState(!1),
        r = s.useCallback(() => {
            a(!0),
                (0, T.as)(n, t.id).finally(() => {
                    a(!1);
                });
        }, [n, t.id]);
    return (0, i.jsx)(u.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.TMzy7d),
        variant: "secondary",
        loading: l,
        onClick: r,
    });
}
function w(e) {
    return (0, i.jsx)(u.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.tkbVdf),
        variant: "secondary",
        icon: c.I,
        iconPosition: "end",
        ...e,
    });
}
function K(e) {
    return (0, i.jsx)(u.$, { fullWidth: !0, text: U.intl.string(L.default["fQCcM/"]), variant: "primary", ...e });
}
function Z(e) {
    return (0, i.jsx)(u.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.gWMqnI),
        variant: "primary",
        icon: c.I,
        iconPosition: "end",
        ...e,
    });
}
function $(e) {
    let { guildId: n } = e,
        [t, l] = s.useState(!1),
        a = s.useCallback(() => {
            l(!0),
                (0, T.cq)(n).finally(() => {
                    l(!1);
                });
        }, [n]);
    return (0, i.jsx)(u.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.BLEx3k),
        variant: "secondary",
        loading: t,
        onClick: a,
    });
}
function z(e) {
    let { instance: n } = e,
        t = (0, P.A)(n.providerType, n.gameServerPanelUrl);
    return (0, i.jsx)(u.$, {
        fullWidth: !0,
        text: U.intl.string(L.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != t && (0, S.h)({ href: t });
        },
    });
}
function W(e) {
    let { guildId: n, instance: t } = e,
        l = (0, O.A)(t),
        [u, c] = (0, I.kn)([d.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        T = u !== d.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        { data: W } = (0, C.I)(t.gameId),
        B = (0, P.A)(t.providerType, t.gameServerPanelUrl),
        Y = s.useCallback(() => {
            (0, A.Ai)(n, t.gameId, W?.name ?? "", t.id),
                T || null == t.providerType
                    ? (0, b.A)(n, t)
                    : (0, G.A)({
                          provider: t.providerType,
                          onAccept: () => {
                              c(D.i.TAKE_ACTION), (0, b.A)(n, t);
                          },
                      });
        }, [t, T, c, n, W?.name]),
        { handleCopyServerIp: q, animateCopyIcon: H } = (0, _.A)(n, t.id, h.A.GAME_SERVER_GAME, l ?? ""),
        X = (0, y.A)(t.gameId, "cover"),
        J = (0, N.A)(n),
        Q = s.useCallback(() => {
            (0, A.f7)(n, t.id), (0, S.h)({ href: t.gameServerPanelUrl ?? "" });
        }, [t.gameServerPanelUrl, n, t.id]),
        ee = s.useMemo(() => {
            switch (t.status) {
                case r.M.SLEEPING:
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(V, { guildId: n, instance: t }),
                            J && (0, i.jsx)(w, { onClick: Q, disabled: null == t.gameServerPanelUrl }),
                        ],
                    });
                case r.M.OFFLINE:
                case r.M.ONLINE:
                case r.M.STARTING:
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(K, { onClick: Y }),
                            J && (0, i.jsx)(w, { onClick: Q, disabled: null == t.gameServerPanelUrl }),
                        ],
                    });
                case r.M.STARTUP_FAILED:
                case r.M.MISSING_STOCK:
                    return J ? (0, i.jsx)(Z, { onClick: Q }) : (0, i.jsx)(K, { onClick: Y, disabled: !0 });
                case r.M.DELETED:
                    return J
                        ? (0, i.jsx)(w, { onClick: Q, disabled: null == t.gameServerPanelUrl })
                        : (0, i.jsx)(K, { onClick: Y, disabled: !0 });
                case r.M.PROVIDER_ERRORED:
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            J && null != B
                                ? (0, i.jsx)(z, { guildId: n, instance: t })
                                : (0, i.jsx)(K, { onClick: Y, disabled: !0 }),
                            (0, i.jsx)($, { guildId: n, instance: t }),
                        ],
                    });
                default:
                    return null;
            }
        }, [t, Y, J, Q, n, B]),
        en = s.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(M.Vq).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        et = s.useMemo(() => {
            switch (t.status) {
                case r.M.STARTING:
                    if (null == t.gameServerPanelUrl) return U.intl.string(L.default["1A3US2"]);
                    return null;
                case r.M.STARTUP_FAILED:
                    return U.intl.string(J ? L.default.Mdoc98 : L.default.osZiRl);
                case r.M.MISSING_STOCK:
                    return U.intl.string(J ? L.default.YCakvM : L.default.osZiRl);
                case r.M.PROVIDER_ERRORED:
                    return U.intl.string(J ? L.default.NRyCeY : L.default.osZiRl);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, J]);
    return (0, i.jsxs)(p.A, {
        actions: ee,
        children: [
            (0, i.jsxs)("div", {
                className: F.serverDetailsContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: F.serverHeader,
                        children: [
                            (0, i.jsx)("img", { src: X ?? "", alt: "", className: F.gameImage }),
                            (0, i.jsxs)("div", {
                                className: F.serverInfo,
                                children: [
                                    (0, i.jsx)(o.D, { variant: "heading-md/medium", children: t.name }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [W?.name, en].filter(M.Vq).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: F.detailsGrid,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: F.detailItem,
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(L.default.bDdi7n),
                                        }),
                                        (0, i.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            children: `${null != t.onlineConnectionsCount && t.onlineConnectionsCount >= 0 ? t.onlineConnectionsCount : "\u2014"} / ${null != t.maxConnectionsCount && t.maxConnectionsCount >= 0 ? t.maxConnectionsCount : "\u2014"}`,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: F.detailItem,
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(L.default["7phwMG"]),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: F.serverIpContainer,
                                            children:
                                                null == l
                                                    ? (0, i.jsx)(m.E, { variant: "text-sm/medium", children: "\u2014" })
                                                    : T
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(m.E, {
                                                                    variant: "text-sm/medium",
                                                                    children: l,
                                                                }),
                                                                (0, i.jsx)(x.D, {
                                                                    className: F.copyButton,
                                                                    "aria-label": U.intl.string(U.t.OpuAlK),
                                                                    onClick: q,
                                                                    children: H
                                                                        ? (0, i.jsx)(f.A, { size: "sm" })
                                                                        : (0, i.jsx)(j.T, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, i.jsx)(x.D, {
                                                            tag: "a",
                                                            onClick: () => {
                                                                (0, G.A)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        c(D.i.TAKE_ACTION), q();
                                                                    },
                                                                });
                                                            },
                                                            children: U.intl.string(L.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: F.detailItem,
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(L.default["n+ZX7y"]),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: F.statusContainer,
                                            children: [
                                                t.status === r.M.STARTING
                                                    ? (0, i.jsx)(g.y, {
                                                          type: g.t.SPINNING_CIRCLE_SIMPLE,
                                                          className: F.statusLoading,
                                                      })
                                                    : (0, i.jsx)("span", {
                                                          className: a()(
                                                              F.statusIndicator,
                                                              null != t.status && F[t.status],
                                                          ),
                                                      }),
                                                (0, i.jsx)(m.E, {
                                                    variant: "text-sm/medium",
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
                                                    })(t.status),
                                                }),
                                                null != et &&
                                                    (0, i.jsx)(v.m, {
                                                        position: "top",
                                                        text: et,
                                                        children: (0, i.jsx)(E.c, {
                                                            className: F.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: F.detailItem,
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(L.default.mJlz3T),
                                        }),
                                        (0, i.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            children: null != t.regionName ? t.regionName : "\u2014",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            J &&
                (0, i.jsx)("div", {
                    className: F.overflowMenu,
                    children: (0, i.jsx)(k.A, { guildId: n, instance: t }),
                }),
            (0, i.jsx)("div", { className: F.imageBackground, children: (0, i.jsx)(R.T, { imageUrl: X ?? "" }) }),
        ],
    });
}
