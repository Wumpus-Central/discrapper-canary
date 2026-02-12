n.d(t, { Ay: () => w });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(390544),
    o = n(311907),
    d = n(554146),
    c = n(435371),
    u = n(397927),
    m = n(793574),
    _ = n(379848),
    x = n(95035),
    g = n(760751),
    f = n(403362),
    v = n(307600),
    j = n(363487),
    h = n(665171),
    p = n(397400),
    N = n(165655),
    I = n(496587),
    A = n(684610),
    C = n(500897),
    S = n(225180),
    T = n(117265),
    b = n(365003),
    E = n(680127),
    y = n(858192),
    R = n(49999),
    M = n(294726),
    G = n(985018),
    k = n(748137);
function L(e) {
    let { guildId: t, instance: n } = e,
        [s, r] = i.useState(!1),
        l = i.useCallback(() => {
            r(!0),
                (0, h.as)(t, n.id).finally(() => {
                    r(!1);
                });
        }, [t, n.id]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.TMzy7d),
        variant: "secondary",
        loading: s,
        onClick: l,
    });
}
function P(e) {
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.tkbVdf),
        variant: "secondary",
        icon: u.I9m,
        iconPosition: "end",
        ...e,
    });
}
function D(e) {
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
function U(e) {
    let { guildId: t } = e,
        [n, s] = i.useState(!1),
        r = i.useCallback(() => {
            s(!0),
                (0, h.cq)(t).finally(() => {
                    s(!1);
                });
        }, [t]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: r,
    });
}
function B(e) {
    let { instance: t } = e,
        n = (0, b.A)(t.providerType, t.gameServerPanelUrl);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: G.intl.string(M.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, v.h)({ href: n });
        },
    });
}
function w(e) {
    let { guildId: t, instance: n } = e,
        s = (0, T.A)(n),
        [h, w] = (0, _.kn)([d.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        F = h !== d.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        W = (0, o.bG)([g.A], () => g.A.getDetectableGame(n.gameId)),
        V = (0, b.A)(n.providerType, n.gameServerPanelUrl),
        q = i.useCallback(() => {
            (0, p.Ai)(t, n.gameId, W?.name ?? "", n.id),
                F || null == n.providerType
                    ? (0, E.A)(t, n)
                    : (0, y.A)({
                          provider: n.providerType,
                          onAccept: () => {
                              w(R.i.TAKE_ACTION), (0, E.A)(t, n);
                          },
                      });
        }, [n, F, w, t, W?.name]),
        { handleCopyServerIp: z, animateCopyIcon: H } = (0, C.A)(t, n.id, m.A.GAME_SERVER_GAME, s ?? ""),
        $ = (0, S.A)(n.gameId, "cover"),
        K = (0, j.A)(t),
        Y = i.useCallback(() => {
            (0, p.f7)(t, n.id), (0, v.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        Z = i.useMemo(() => {
            switch (n.status) {
                case l.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(L, { guildId: t, instance: n }),
                            K && (0, a.jsx)(P, { onClick: Y, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case l.M.OFFLINE:
                case l.M.ONLINE:
                case l.M.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(D, { onClick: q }),
                            K && (0, a.jsx)(P, { onClick: Y, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case l.M.STARTUP_FAILED:
                case l.M.MISSING_STOCK:
                    return K ? (0, a.jsx)(O, { onClick: Y }) : (0, a.jsx)(D, { onClick: q, disabled: !0 });
                case l.M.DELETED:
                    return K
                        ? (0, a.jsx)(P, { onClick: Y, disabled: null == n.gameServerPanelUrl })
                        : (0, a.jsx)(D, { onClick: q, disabled: !0 });
                case l.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            K && null != V
                                ? (0, a.jsx)(B, { guildId: t, instance: n })
                                : (0, a.jsx)(D, { onClick: q, disabled: !0 }),
                            (0, a.jsx)(U, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, q, K, Y, t, V]),
        Q = i.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(f.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        X = i.useMemo(() => {
            switch (n.status) {
                case l.M.STARTING:
                    if (null == n.gameServerPanelUrl) return G.intl.string(M.default["1A3US2"]);
                    return null;
                case l.M.STARTUP_FAILED:
                    return G.intl.string(K ? M.default.Mdoc98 : M.default.osZiRl);
                case l.M.MISSING_STOCK:
                    return G.intl.string(K ? M.default.YCakvM : M.default.osZiRl);
                case l.M.PROVIDER_ERRORED:
                    return G.intl.string(K ? M.default.NRyCeY : M.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, K]);
    return (0, a.jsxs)(I.A, {
        actions: Z,
        children: [
            (0, a.jsxs)("div", {
                className: k.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.serverHeader,
                        children: [
                            (0, a.jsx)("img", { src: $ ?? "", alt: "", className: k.gameImage }),
                            (0, a.jsxs)("div", {
                                className: k.serverInfo,
                                children: [
                                    (0, a.jsx)(u.Heading, { variant: "heading-md/medium", children: n.name }),
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [W?.name, Q].filter(f.Vq).join(" • "),
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
                                                null == s
                                                    ? (0, a.jsx)(u.Text, { variant: "text-sm/medium", children: "—" })
                                                    : F
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: s,
                                                                }),
                                                                (0, a.jsx)(u.DUT, {
                                                                    className: k.copyButton,
                                                                    "aria-label": G.intl.string(G.t.OpuAlK),
                                                                    onClick: z,
                                                                    children: H
                                                                        ? (0, a.jsx)(u.A9s, { size: "sm" })
                                                                        : (0, a.jsx)(u.TdU, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, a.jsx)(x.A, {
                                                            onClick: () => {
                                                                (0, y.A)({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        w(R.i.TAKE_ACTION), z();
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
                                                n.status === l.M.STARTING
                                                    ? (0, a.jsx)(u.y$y, {
                                                          type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                                                          className: k.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: r()(
                                                              k.statusIndicator,
                                                              null != n.status && k[n.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case l.M.STARTING:
                                                                return G.intl.string(M.default.SgjaXI);
                                                            case l.M.STARTUP_FAILED:
                                                                return G.intl.string(M.default["7C9Z3s"]);
                                                            case l.M.OFFLINE:
                                                                return G.intl.string(M.default["Ys/RrB"]);
                                                            case l.M.ONLINE:
                                                                return G.intl.string(M.default["60kAzo"]);
                                                            case l.M.DELETED:
                                                                return G.intl.string(M.default.Z1NZwX);
                                                            case l.M.MISSING_STOCK:
                                                                return G.intl.string(M.default["+a5G2l"]);
                                                            case l.M.SLEEPING:
                                                                return G.intl.string(M.default.y0z8ZO);
                                                            case l.M.PROVIDER_ERRORED:
                                                                return G.intl.string(M.default["6g/oji"]);
                                                            default:
                                                                return "—";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != X &&
                                                    (0, a.jsx)(c.m_, {
                                                        position: "top",
                                                        text: X,
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
            K &&
                (0, a.jsx)("div", {
                    className: k.overflowMenu,
                    children: (0, a.jsx)(A.A, { guildId: t, instance: n }),
                }),
            (0, a.jsx)("div", { className: k.imageBackground, children: (0, a.jsx)(N.T, { imageUrl: $ ?? "" }) }),
        ],
    });
}
