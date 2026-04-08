n.d(t, { Ay: () => F });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(390544),
    d = n(311907),
    c = n(554146),
    o = n(435371),
    u = n(397927),
    _ = n(793574),
    m = n(932001),
    x = n(95035),
    g = n(760751),
    f = n(403362),
    v = n(307600),
    j = n(363487),
    h = n(665171),
    A = n(397400),
    p = n(165655),
    C = n(496587),
    b = n(684610),
    I = n(500897),
    N = n(225180),
    E = n(117265),
    S = n(365003),
    T = n(680127),
    R = n(858192),
    y = n(49999),
    M = n(738072),
    G = n(985018),
    k = n(6383);
function L(e) {
    let { guildId: t, instance: n } = e,
        [i, l] = s.useState(!1),
        r = s.useCallback(() => {
            l(!0),
                (0, h.as)(t, n.id).finally(() => {
                    l(!1);
                });
        }, [t, n.id]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: r,
    });
}
function D(e) {
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.tkbVdf),
        variant: "secondary",
        icon: u.I9m,
        iconPosition: "end",
        ...e,
    });
}
function P(e) {
    return (0, a.jsx)(u.Button, { fullWidth: !0, text: G.intl.string(M.default["fQCcM/"]), variant: "primary", ...e });
}
function O(e) {
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.gWMqnI),
        variant: "primary",
        icon: u.I9m,
        iconPosition: "end",
        ...e,
    });
}
function B(e) {
    let { guildId: t } = e,
        [n, i] = s.useState(!1),
        l = s.useCallback(() => {
            i(!0),
                (0, h.cq)(t).finally(() => {
                    i(!1);
                });
        }, [t]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: l,
    });
}
function U(e) {
    let { instance: t } = e,
        n = (0, S.A)(t.providerType, t.gameServerPanelUrl);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, v.h)({ href: n });
        },
    });
}
function F(e) {
    let { guildId: t, instance: n } = e,
        i = (0, E.A)(n),
        [h, F] = (0, m.kn)([c.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        V = h !== c.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        w = (0, d.bG)([g.A], () => g.A.getDetectableGame(n.gameId)),
        W = (0, S.A)(n.providerType, n.gameServerPanelUrl),
        q = s.useCallback(() => {
            (0, A.Ai)(t, n.gameId, w?.name ?? "", n.id),
                V || null == n.providerType
                    ? (0, T.A)(t, n)
                    : (0, R.A)({
                          provider: n.providerType,
                          onAccept: () => {
                              F(y.i.TAKE_ACTION), (0, T.A)(t, n);
                          },
                      });
        }, [n, V, F, t, w?.name]),
        { handleCopyServerIp: Y, animateCopyIcon: H } = (0, I.A)(t, n.id, _.A.GAME_SERVER_GAME, i ?? ""),
        K = (0, N.A)(n.gameId, "cover"),
        Z = (0, j.A)(t),
        $ = s.useCallback(() => {
            (0, A.f7)(t, n.id), (0, v.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        z = s.useMemo(() => {
            switch (n.status) {
                case r.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(L, { guildId: t, instance: n }),
                            Z && (0, a.jsx)(D, { onClick: $, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case r.M.OFFLINE:
                case r.M.ONLINE:
                case r.M.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(P, { onClick: q }),
                            Z && (0, a.jsx)(D, { onClick: $, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case r.M.STARTUP_FAILED:
                case r.M.MISSING_STOCK:
                    return Z ? (0, a.jsx)(O, { onClick: $ }) : (0, a.jsx)(P, { onClick: q, disabled: !0 });
                case r.M.DELETED:
                    return Z
                        ? (0, a.jsx)(D, { onClick: $, disabled: null == n.gameServerPanelUrl })
                        : (0, a.jsx)(P, { onClick: q, disabled: !0 });
                case r.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            Z && null != W
                                ? (0, a.jsx)(U, { guildId: t, instance: n })
                                : (0, a.jsx)(P, { onClick: q, disabled: !0 }),
                            (0, a.jsx)(B, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, q, Z, $, t, W]),
        X = s.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(f.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        Q = s.useMemo(() => {
            switch (n.status) {
                case r.M.STARTING:
                    if (null == n.gameServerPanelUrl) return G.intl.string(M.default["1A3US2"]);
                    return null;
                case r.M.STARTUP_FAILED:
                    return G.intl.string(Z ? M.default.Mdoc98 : M.default.osZiRl);
                case r.M.MISSING_STOCK:
                    return G.intl.string(Z ? M.default.YCakvM : M.default.osZiRl);
                case r.M.PROVIDER_ERRORED:
                    return G.intl.string(Z ? M.default.NRyCeY : M.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, Z]);
    return (0, a.jsxs)(C.A, {
        actions: z,
        children: [
            (0, a.jsxs)("div", {
                className: k.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.serverHeader,
                        children: [
                            (0, a.jsx)("img", { src: K ?? "", alt: "", className: k.gameImage }),
                            (0, a.jsxs)("div", {
                                className: k.serverInfo,
                                children: [
                                    (0, a.jsx)(u.Heading, { variant: "heading-md/medium", children: n.name }),
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [w?.name, X].filter(f.Vq).join(" • "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: k.detailsGrid,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: G.intl.string(M.default.bDdi7n),
                                        }),
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: `${null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—"} / ${null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—"}`,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: G.intl.string(M.default["7phwMG"]),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: k.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, a.jsx)(u.Text, { variant: "text-sm/medium", children: "—" })
                                                    : V
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, a.jsx)(u.DUT, {
                                                                    className: k.copyButton,
                                                                    "aria-label": G.intl.string(G.t.OpuAlK),
                                                                    onClick: Y,
                                                                    children: H
                                                                        ? (0, a.jsx)(u.A9s, { size: "sm" })
                                                                        : (0, a.jsx)(u.TdU, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, a.jsx)(x.A, {
                                                            onClick: () => {
                                                                (0, R.A)({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        F(y.i.TAKE_ACTION), Y();
                                                                    },
                                                                });
                                                            },
                                                            children: G.intl.string(M.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: G.intl.string(M.default["n+ZX7y"]),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: k.statusContainer,
                                            children: [
                                                n.status === r.M.STARTING
                                                    ? (0, a.jsx)(u.y$y, {
                                                          type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                                                          className: k.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: l()(
                                                              k.statusIndicator,
                                                              null != n.status && k[n.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case r.M.STARTING:
                                                                return G.intl.string(M.default.SgjaXI);
                                                            case r.M.STARTUP_FAILED:
                                                                return G.intl.string(M.default["7C9Z3s"]);
                                                            case r.M.OFFLINE:
                                                                return G.intl.string(M.default["Ys/RrB"]);
                                                            case r.M.ONLINE:
                                                                return G.intl.string(M.default["60kAzo"]);
                                                            case r.M.DELETED:
                                                                return G.intl.string(M.default.Z1NZwX);
                                                            case r.M.MISSING_STOCK:
                                                                return G.intl.string(M.default["+a5G2l"]);
                                                            case r.M.SLEEPING:
                                                                return G.intl.string(M.default.y0z8ZO);
                                                            case r.M.PROVIDER_ERRORED:
                                                                return G.intl.string(M.default["6g/oji"]);
                                                            default:
                                                                return "—";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != Q &&
                                                    (0, a.jsx)(o.m_, {
                                                        position: "top",
                                                        text: Q,
                                                        children: (0, a.jsx)(u.cBN, {
                                                            className: k.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: G.intl.string(M.default.mJlz3T),
                                        }),
                                        (0, a.jsx)(u.Text, {
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
            Z &&
                (0, a.jsx)("div", {
                    className: k.overflowMenu,
                    children: (0, a.jsx)(b.A, { guildId: t, instance: n }),
                }),
            (0, a.jsx)("div", { className: k.imageBackground, children: (0, a.jsx)(p.T, { imageUrl: K ?? "" }) }),
        ],
    });
}
