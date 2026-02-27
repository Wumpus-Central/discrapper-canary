n.d(t, { Ay: () => F });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(390544),
    d = n(311907),
    o = n(554146),
    c = n(435371),
    u = n(397927),
    _ = n(793574),
    m = n(932001),
    x = n(95035),
    g = n(760751),
    f = n(403362),
    v = n(307600),
    h = n(363487),
    j = n(665171),
    p = n(397400),
    C = n(165655),
    I = n(496587),
    A = n(684610),
    N = n(500897),
    S = n(225180),
    E = n(117265),
    b = n(365003),
    T = n(680127),
    y = n(858192),
    M = n(49999),
    R = n(294726),
    k = n(985018),
    G = n(748137);
function P(e) {
    let { guildId: t, instance: n } = e,
        [s, r] = i.useState(!1),
        l = i.useCallback(() => {
            r(!0),
                (0, j.as)(t, n.id).finally(() => {
                    r(!1);
                });
        }, [t, n.id]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: k.intl.string(R.default.TMzy7d),
        variant: "secondary",
        loading: s,
        onClick: l,
    });
}
function O(e) {
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: k.intl.string(R.default.tkbVdf),
        variant: "secondary",
        icon: u.I9m,
        iconPosition: "end",
        ...e,
    });
}
function D(e) {
    return (0, a.jsx)(u.Button, { fullWidth: !0, text: k.intl.string(R.default["fQCcM/"]), variant: "primary", ...e });
}
function L(e) {
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: k.intl.string(R.default.gWMqnI),
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
                (0, j.cq)(t).finally(() => {
                    s(!1);
                });
        }, [t]);
    return (0, a.jsx)(u.Button, {
        fullWidth: !0,
        text: k.intl.string(R.default.BLEx3k),
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
        text: k.intl.string(R.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, v.h)({ href: n });
        },
    });
}
function F(e) {
    let { guildId: t, instance: n } = e,
        s = (0, E.A)(n),
        [j, F] = (0, m.kn)([o.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        w = j !== o.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        V = (0, d.bG)([g.A], () => g.A.getDetectableGame(n.gameId)),
        W = (0, b.A)(n.providerType, n.gameServerPanelUrl),
        q = i.useCallback(() => {
            (0, p.Ai)(t, n.gameId, V?.name ?? "", n.id),
                w || null == n.providerType
                    ? (0, T.A)(t, n)
                    : (0, y.A)({
                          provider: n.providerType,
                          onAccept: () => {
                              F(M.i.TAKE_ACTION), (0, T.A)(t, n);
                          },
                      });
        }, [n, w, F, t, V?.name]),
        { handleCopyServerIp: H, animateCopyIcon: K } = (0, N.A)(t, n.id, _.A.GAME_SERVER_GAME, s ?? ""),
        Z = (0, S.A)(n.gameId, "cover"),
        $ = (0, h.A)(t),
        z = i.useCallback(() => {
            (0, p.f7)(t, n.id), (0, v.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        Y = i.useMemo(() => {
            switch (n.status) {
                case l.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(P, { guildId: t, instance: n }),
                            $ && (0, a.jsx)(O, { onClick: z, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case l.M.OFFLINE:
                case l.M.ONLINE:
                case l.M.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(D, { onClick: q }),
                            $ && (0, a.jsx)(O, { onClick: z, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case l.M.STARTUP_FAILED:
                case l.M.MISSING_STOCK:
                    return $ ? (0, a.jsx)(L, { onClick: z }) : (0, a.jsx)(D, { onClick: q, disabled: !0 });
                case l.M.DELETED:
                    return $
                        ? (0, a.jsx)(O, { onClick: z, disabled: null == n.gameServerPanelUrl })
                        : (0, a.jsx)(D, { onClick: q, disabled: !0 });
                case l.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            $ && null != W
                                ? (0, a.jsx)(B, { guildId: t, instance: n })
                                : (0, a.jsx)(D, { onClick: q, disabled: !0 }),
                            (0, a.jsx)(U, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, q, $, z, t, W]),
        Q = i.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(f.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        X = i.useMemo(() => {
            switch (n.status) {
                case l.M.STARTING:
                    if (null == n.gameServerPanelUrl) return k.intl.string(R.default["1A3US2"]);
                    return null;
                case l.M.STARTUP_FAILED:
                    return k.intl.string($ ? R.default.Mdoc98 : R.default.osZiRl);
                case l.M.MISSING_STOCK:
                    return k.intl.string($ ? R.default.YCakvM : R.default.osZiRl);
                case l.M.PROVIDER_ERRORED:
                    return k.intl.string($ ? R.default.NRyCeY : R.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, $]);
    return (0, a.jsxs)(I.A, {
        actions: Y,
        children: [
            (0, a.jsxs)("div", {
                className: G.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: G.serverHeader,
                        children: [
                            (0, a.jsx)("img", { src: Z ?? "", alt: "", className: G.gameImage }),
                            (0, a.jsxs)("div", {
                                className: G.serverInfo,
                                children: [
                                    (0, a.jsx)(u.Heading, { variant: "heading-md/medium", children: n.name }),
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [V?.name, Q].filter(f.Vq).join(" • "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: G.detailsGrid,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: G.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: k.intl.string(R.default.bDdi7n),
                                        }),
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: `${null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—"} / ${null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—"}`,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: G.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: k.intl.string(R.default["7phwMG"]),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: G.serverIpContainer,
                                            children:
                                                null == s
                                                    ? (0, a.jsx)(u.Text, { variant: "text-sm/medium", children: "—" })
                                                    : w
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: s,
                                                                }),
                                                                (0, a.jsx)(u.DUT, {
                                                                    className: G.copyButton,
                                                                    "aria-label": k.intl.string(k.t.OpuAlK),
                                                                    onClick: H,
                                                                    children: K
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
                                                                        F(M.i.TAKE_ACTION), H();
                                                                    },
                                                                });
                                                            },
                                                            children: k.intl.string(R.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: G.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: k.intl.string(R.default["n+ZX7y"]),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: G.statusContainer,
                                            children: [
                                                n.status === l.M.STARTING
                                                    ? (0, a.jsx)(u.y$y, {
                                                          type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                                                          className: G.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: r()(
                                                              G.statusIndicator,
                                                              null != n.status && G[n.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case l.M.STARTING:
                                                                return k.intl.string(R.default.SgjaXI);
                                                            case l.M.STARTUP_FAILED:
                                                                return k.intl.string(R.default["7C9Z3s"]);
                                                            case l.M.OFFLINE:
                                                                return k.intl.string(R.default["Ys/RrB"]);
                                                            case l.M.ONLINE:
                                                                return k.intl.string(R.default["60kAzo"]);
                                                            case l.M.DELETED:
                                                                return k.intl.string(R.default.Z1NZwX);
                                                            case l.M.MISSING_STOCK:
                                                                return k.intl.string(R.default["+a5G2l"]);
                                                            case l.M.SLEEPING:
                                                                return k.intl.string(R.default.y0z8ZO);
                                                            case l.M.PROVIDER_ERRORED:
                                                                return k.intl.string(R.default["6g/oji"]);
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
                                                            className: G.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: G.detailItem,
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: k.intl.string(R.default.mJlz3T),
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
            $ &&
                (0, a.jsx)("div", {
                    className: G.overflowMenu,
                    children: (0, a.jsx)(A.A, { guildId: t, instance: n }),
                }),
            (0, a.jsx)("div", { className: G.imageBackground, children: (0, a.jsx)(C.T, { imageUrl: Z ?? "" }) }),
        ],
    });
}
