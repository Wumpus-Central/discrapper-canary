n.d(t, { Ay: () => U });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(390544),
    d = n(554146),
    c = n(435371),
    o = n(397927),
    u = n(793574),
    _ = n(932001),
    m = n(454908),
    x = n(95035),
    f = n(403362),
    g = n(307600),
    v = n(363487),
    j = n(665171),
    h = n(397400),
    A = n(165655),
    p = n(496587),
    C = n(684610),
    I = n(500897),
    N = n(225180),
    b = n(117265),
    E = n(365003),
    S = n(680127),
    T = n(858192),
    R = n(49999),
    y = n(576709),
    M = n(985018),
    k = n(615990);
function G(e) {
    let { guildId: t, instance: n } = e,
        [i, l] = s.useState(!1),
        r = s.useCallback(() => {
            l(!0),
                (0, j.as)(t, n.id).finally(() => {
                    l(!1);
                });
        }, [t, n.id]);
    return (0, a.jsx)(o.Button, {
        fullWidth: !0,
        text: M.intl.string(y.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: r,
    });
}
function L(e) {
    return (0, a.jsx)(o.Button, {
        fullWidth: !0,
        text: M.intl.string(y.default.tkbVdf),
        variant: "secondary",
        icon: o.I9m,
        iconPosition: "end",
        ...e,
    });
}
function D(e) {
    return (0, a.jsx)(o.Button, { fullWidth: !0, text: M.intl.string(y.default["fQCcM/"]), variant: "primary", ...e });
}
function P(e) {
    return (0, a.jsx)(o.Button, {
        fullWidth: !0,
        text: M.intl.string(y.default.gWMqnI),
        variant: "primary",
        icon: o.I9m,
        iconPosition: "end",
        ...e,
    });
}
function O(e) {
    let { guildId: t } = e,
        [n, i] = s.useState(!1),
        l = s.useCallback(() => {
            i(!0),
                (0, j.cq)(t).finally(() => {
                    i(!1);
                });
        }, [t]);
    return (0, a.jsx)(o.Button, {
        fullWidth: !0,
        text: M.intl.string(y.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: l,
    });
}
function B(e) {
    let { instance: t } = e,
        n = (0, E.A)(t.providerType, t.gameServerPanelUrl);
    return (0, a.jsx)(o.Button, {
        fullWidth: !0,
        text: M.intl.string(y.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, g.h)({ href: n });
        },
    });
}
function U(e) {
    let { guildId: t, instance: n } = e,
        i = (0, b.A)(n),
        [j, U] = (0, _.kn)([d.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        F = j !== d.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        { data: V } = (0, m.I)(n.gameId),
        w = (0, E.A)(n.providerType, n.gameServerPanelUrl),
        W = s.useCallback(() => {
            (0, h.Ai)(t, n.gameId, V?.name ?? "", n.id),
                F || null == n.providerType
                    ? (0, S.A)(t, n)
                    : (0, T.A)({
                          provider: n.providerType,
                          onAccept: () => {
                              U(R.i.TAKE_ACTION), (0, S.A)(t, n);
                          },
                      });
        }, [n, F, U, t, V?.name]),
        { handleCopyServerIp: q, animateCopyIcon: Y } = (0, I.A)(t, n.id, u.A.GAME_SERVER_GAME, i ?? ""),
        H = (0, N.A)(n.gameId, "cover"),
        K = (0, v.A)(t),
        Z = s.useCallback(() => {
            (0, h.f7)(t, n.id), (0, g.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        $ = s.useMemo(() => {
            switch (n.status) {
                case r.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(G, { guildId: t, instance: n }),
                            K && (0, a.jsx)(L, { onClick: Z, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case r.M.OFFLINE:
                case r.M.ONLINE:
                case r.M.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(D, { onClick: W }),
                            K && (0, a.jsx)(L, { onClick: Z, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case r.M.STARTUP_FAILED:
                case r.M.MISSING_STOCK:
                    return K ? (0, a.jsx)(P, { onClick: Z }) : (0, a.jsx)(D, { onClick: W, disabled: !0 });
                case r.M.DELETED:
                    return K
                        ? (0, a.jsx)(L, { onClick: Z, disabled: null == n.gameServerPanelUrl })
                        : (0, a.jsx)(D, { onClick: W, disabled: !0 });
                case r.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            K && null != w
                                ? (0, a.jsx)(B, { guildId: t, instance: n })
                                : (0, a.jsx)(D, { onClick: W, disabled: !0 }),
                            (0, a.jsx)(O, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, W, K, Z, t, w]),
        z = s.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(f.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        X = s.useMemo(() => {
            switch (n.status) {
                case r.M.STARTING:
                    if (null == n.gameServerPanelUrl) return M.intl.string(y.default["1A3US2"]);
                    return null;
                case r.M.STARTUP_FAILED:
                    return M.intl.string(K ? y.default.Mdoc98 : y.default.osZiRl);
                case r.M.MISSING_STOCK:
                    return M.intl.string(K ? y.default.YCakvM : y.default.osZiRl);
                case r.M.PROVIDER_ERRORED:
                    return M.intl.string(K ? y.default.NRyCeY : y.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, K]);
    return (0, a.jsxs)(p.A, {
        actions: $,
        children: [
            (0, a.jsxs)("div", {
                className: k.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: k.serverHeader,
                        children: [
                            (0, a.jsx)("img", { src: H ?? "", alt: "", className: k.gameImage }),
                            (0, a.jsxs)("div", {
                                className: k.serverInfo,
                                children: [
                                    (0, a.jsx)(o.Heading, { variant: "heading-md/medium", children: n.name }),
                                    (0, a.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [V?.name, z].filter(f.Vq).join(" • "),
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
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: M.intl.string(y.default.bDdi7n),
                                        }),
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-sm/medium",
                                            children: `${null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—"} / ${null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—"}`,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: M.intl.string(y.default["7phwMG"]),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: k.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, a.jsx)(o.Text, { variant: "text-sm/medium", children: "—" })
                                                    : F
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(o.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, a.jsx)(o.DUT, {
                                                                    className: k.copyButton,
                                                                    "aria-label": M.intl.string(M.t.OpuAlK),
                                                                    onClick: q,
                                                                    children: Y
                                                                        ? (0, a.jsx)(o.A9s, { size: "sm" })
                                                                        : (0, a.jsx)(o.TdU, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, a.jsx)(x.A, {
                                                            onClick: () => {
                                                                (0, T.A)({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        U(R.i.TAKE_ACTION), q();
                                                                    },
                                                                });
                                                            },
                                                            children: M.intl.string(y.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: k.detailItem,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: M.intl.string(y.default["n+ZX7y"]),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: k.statusContainer,
                                            children: [
                                                n.status === r.M.STARTING
                                                    ? (0, a.jsx)(o.y$y, {
                                                          type: o.tVU.SPINNING_CIRCLE_SIMPLE,
                                                          className: k.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: l()(
                                                              k.statusIndicator,
                                                              null != n.status && k[n.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(o.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case r.M.STARTING:
                                                                return M.intl.string(y.default.SgjaXI);
                                                            case r.M.STARTUP_FAILED:
                                                                return M.intl.string(y.default["7C9Z3s"]);
                                                            case r.M.OFFLINE:
                                                                return M.intl.string(y.default["Ys/RrB"]);
                                                            case r.M.ONLINE:
                                                                return M.intl.string(y.default["60kAzo"]);
                                                            case r.M.DELETED:
                                                                return M.intl.string(y.default.Z1NZwX);
                                                            case r.M.MISSING_STOCK:
                                                                return M.intl.string(y.default["+a5G2l"]);
                                                            case r.M.SLEEPING:
                                                                return M.intl.string(y.default.y0z8ZO);
                                                            case r.M.PROVIDER_ERRORED:
                                                                return M.intl.string(y.default["6g/oji"]);
                                                            default:
                                                                return "—";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != X &&
                                                    (0, a.jsx)(c.m_, {
                                                        position: "top",
                                                        text: X,
                                                        children: (0, a.jsx)(o.cBN, {
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
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: M.intl.string(y.default.mJlz3T),
                                        }),
                                        (0, a.jsx)(o.Text, {
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
                    children: (0, a.jsx)(C.A, { guildId: t, instance: n }),
                }),
            (0, a.jsx)("div", { className: k.imageBackground, children: (0, a.jsx)(A.T, { imageUrl: H ?? "" }) }),
        ],
    });
}
