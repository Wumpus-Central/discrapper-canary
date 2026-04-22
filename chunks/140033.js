n.d(t, { Ay: () => Y });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(390544),
    d = n(554146),
    c = n(990078),
    o = n(821609),
    u = n(509434),
    _ = n(534514),
    m = n(834730),
    x = n(939249),
    f = n(933832),
    g = n(624479),
    v = n(289873),
    j = n(290136),
    h = n(793574),
    A = n(932001),
    p = n(454908),
    E = n(95035),
    C = n(403362),
    I = n(307600),
    b = n(363487),
    N = n(665171),
    S = n(397400),
    R = n(165655),
    M = n(496587),
    y = n(684610),
    k = n(500897),
    G = n(225180),
    T = n(117265),
    L = n(365003),
    D = n(680127),
    P = n(858192),
    O = n(49999),
    F = n(76660),
    U = n(985018),
    B = n(364214);
function V(e) {
    let { guildId: t, instance: n } = e,
        [i, l] = s.useState(!1),
        r = s.useCallback(() => {
            l(!0),
                (0, N.as)(t, n.id).finally(() => {
                    l(!1);
                });
        }, [t, n.id]);
    return (0, a.jsx)(o.$, {
        fullWidth: !0,
        text: U.intl.string(F.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: r,
    });
}
function w(e) {
    return (0, a.jsx)(o.$, {
        fullWidth: !0,
        text: U.intl.string(F.default.tkbVdf),
        variant: "secondary",
        icon: u.I,
        iconPosition: "end",
        ...e,
    });
}
function W(e) {
    return (0, a.jsx)(o.$, { fullWidth: !0, text: U.intl.string(F.default["fQCcM/"]), variant: "primary", ...e });
}
function $(e) {
    return (0, a.jsx)(o.$, {
        fullWidth: !0,
        text: U.intl.string(F.default.gWMqnI),
        variant: "primary",
        icon: u.I,
        iconPosition: "end",
        ...e,
    });
}
function z(e) {
    let { guildId: t } = e,
        [n, i] = s.useState(!1),
        l = s.useCallback(() => {
            i(!0),
                (0, N.cq)(t).finally(() => {
                    i(!1);
                });
        }, [t]);
    return (0, a.jsx)(o.$, {
        fullWidth: !0,
        text: U.intl.string(F.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: l,
    });
}
function q(e) {
    let { instance: t } = e,
        n = (0, L.A)(t.providerType, t.gameServerPanelUrl);
    return (0, a.jsx)(o.$, {
        fullWidth: !0,
        text: U.intl.string(F.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, I.h)({ href: n });
        },
    });
}
function Y(e) {
    let { guildId: t, instance: n } = e,
        i = (0, T.A)(n),
        [o, u] = (0, A.kn)([d.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        N = o !== d.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        { data: Y } = (0, p.I)(n.gameId),
        H = (0, L.A)(n.providerType, n.gameServerPanelUrl),
        K = s.useCallback(() => {
            (0, S.Ai)(t, n.gameId, Y?.name ?? "", n.id),
                N || null == n.providerType
                    ? (0, D.A)(t, n)
                    : (0, P.A)({
                          provider: n.providerType,
                          onAccept: () => {
                              u(O.i.TAKE_ACTION), (0, D.A)(t, n);
                          },
                      });
        }, [n, N, u, t, Y?.name]),
        { handleCopyServerIp: Z, animateCopyIcon: X } = (0, k.A)(t, n.id, h.A.GAME_SERVER_GAME, i ?? ""),
        Q = (0, G.A)(n.gameId, "cover"),
        J = (0, b.A)(t),
        ee = s.useCallback(() => {
            (0, S.f7)(t, n.id), (0, I.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        et = s.useMemo(() => {
            switch (n.status) {
                case r.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(V, { guildId: t, instance: n }),
                            J && (0, a.jsx)(w, { onClick: ee, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case r.M.OFFLINE:
                case r.M.ONLINE:
                case r.M.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(W, { onClick: K }),
                            J && (0, a.jsx)(w, { onClick: ee, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case r.M.STARTUP_FAILED:
                case r.M.MISSING_STOCK:
                    return J ? (0, a.jsx)($, { onClick: ee }) : (0, a.jsx)(W, { onClick: K, disabled: !0 });
                case r.M.DELETED:
                    return J
                        ? (0, a.jsx)(w, { onClick: ee, disabled: null == n.gameServerPanelUrl })
                        : (0, a.jsx)(W, { onClick: K, disabled: !0 });
                case r.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            J && null != H
                                ? (0, a.jsx)(q, { guildId: t, instance: n })
                                : (0, a.jsx)(W, { onClick: K, disabled: !0 }),
                            (0, a.jsx)(z, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, K, J, ee, t, H]),
        en = s.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(C.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        ea = s.useMemo(() => {
            switch (n.status) {
                case r.M.STARTING:
                    if (null == n.gameServerPanelUrl) return U.intl.string(F.default["1A3US2"]);
                    return null;
                case r.M.STARTUP_FAILED:
                    return U.intl.string(J ? F.default.Mdoc98 : F.default.osZiRl);
                case r.M.MISSING_STOCK:
                    return U.intl.string(J ? F.default.YCakvM : F.default.osZiRl);
                case r.M.PROVIDER_ERRORED:
                    return U.intl.string(J ? F.default.NRyCeY : F.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, J]);
    return (0, a.jsxs)(M.A, {
        actions: et,
        children: [
            (0, a.jsxs)("div", {
                className: B.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: B.serverHeader,
                        children: [
                            (0, a.jsx)("img", { src: Q ?? "", alt: "", className: B.gameImage }),
                            (0, a.jsxs)("div", {
                                className: B.serverInfo,
                                children: [
                                    (0, a.jsx)(_.D, { variant: "heading-md/medium", children: n.name }),
                                    (0, a.jsx)(m.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [Y?.name, en].filter(C.Vq).join(" • "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: B.detailsGrid,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: B.detailItem,
                                    children: [
                                        (0, a.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(F.default.bDdi7n),
                                        }),
                                        (0, a.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            children: `${null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—"} / ${null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—"}`,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: B.detailItem,
                                    children: [
                                        (0, a.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(F.default["7phwMG"]),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: B.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, a.jsx)(m.E, { variant: "text-sm/medium", children: "—" })
                                                    : N
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(m.E, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, a.jsx)(x.D, {
                                                                    className: B.copyButton,
                                                                    "aria-label": U.intl.string(U.t.OpuAlK),
                                                                    onClick: Z,
                                                                    children: X
                                                                        ? (0, a.jsx)(f.A, { size: "sm" })
                                                                        : (0, a.jsx)(g.T, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, a.jsx)(E.A, {
                                                            onClick: () => {
                                                                (0, P.A)({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        u(O.i.TAKE_ACTION), Z();
                                                                    },
                                                                });
                                                            },
                                                            children: U.intl.string(F.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: B.detailItem,
                                    children: [
                                        (0, a.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(F.default["n+ZX7y"]),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: B.statusContainer,
                                            children: [
                                                n.status === r.M.STARTING
                                                    ? (0, a.jsx)(v.y, {
                                                          type: v.t.SPINNING_CIRCLE_SIMPLE,
                                                          className: B.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: l()(
                                                              B.statusIndicator,
                                                              null != n.status && B[n.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(m.E, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case r.M.STARTING:
                                                                return U.intl.string(F.default.SgjaXI);
                                                            case r.M.STARTUP_FAILED:
                                                                return U.intl.string(F.default["7C9Z3s"]);
                                                            case r.M.OFFLINE:
                                                                return U.intl.string(F.default["Ys/RrB"]);
                                                            case r.M.ONLINE:
                                                                return U.intl.string(F.default["60kAzo"]);
                                                            case r.M.DELETED:
                                                                return U.intl.string(F.default.Z1NZwX);
                                                            case r.M.MISSING_STOCK:
                                                                return U.intl.string(F.default["+a5G2l"]);
                                                            case r.M.SLEEPING:
                                                                return U.intl.string(F.default.y0z8ZO);
                                                            case r.M.PROVIDER_ERRORED:
                                                                return U.intl.string(F.default["6g/oji"]);
                                                            default:
                                                                return "—";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != ea &&
                                                    (0, a.jsx)(c.m, {
                                                        position: "top",
                                                        text: ea,
                                                        children: (0, a.jsx)(j.c, {
                                                            className: B.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: B.detailItem,
                                    children: [
                                        (0, a.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: U.intl.string(F.default.mJlz3T),
                                        }),
                                        (0, a.jsx)(m.E, {
                                            variant: "text-sm/medium",
                                            children: null != n.regionName ? n.regionName : "—",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            J &&
                (0, a.jsx)("div", {
                    className: B.overflowMenu,
                    children: (0, a.jsx)(y.A, { guildId: t, instance: n }),
                }),
            (0, a.jsx)("div", { className: B.imageBackground, children: (0, a.jsx)(R.T, { imageUrl: Q ?? "" }) }),
        ],
    });
}
