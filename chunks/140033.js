n.d(t, {
    Ay: () => V,
}),
    n(896048),
    n(492834);
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(390544),
    c = n(311907),
    o = n(554146),
    d = n(435371),
    u = n(397927),
    f = n(793574),
    b = n(379848),
    m = n(95035),
    x = n(760751),
    j = n(403362),
    v = n(307600),
    g = n(363487),
    p = n(665171),
    h = n(397400),
    y = n(165655),
    O = n(496587),
    S = n(684610),
    _ = n(500897),
    N = n(225180),
    A = n(117265),
    E = n(365003),
    I = n(680127),
    T = n(858192),
    P = n(49999),
    C = n(294726),
    R = n(985018),
    M = n(748137);

function w(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function k(e) {
    let { guildId: t, instance: n } = e,
        [l, i] = a.useState(!1),
        s = a.useCallback(() => {
            i(!0),
                (0, p.as)(t, n.id).finally(() => {
                    i(!1);
                });
        }, [t, n.id]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: R.intl.string(C.default.TMzy7d),
        variant: "secondary",
        loading: l,
        onClick: s,
    });
}

function G(e) {
    return (0, r.jsx)(
        u.Button,
        w(
            {
                fullWidth: !0,
                text: R.intl.string(C.default.tkbVdf),
                variant: "secondary",
                icon: u.I9m,
                iconPosition: "end",
            },
            e,
        ),
    );
}

function D(e) {
    return (0, r.jsx)(
        u.Button,
        w(
            {
                fullWidth: !0,
                text: R.intl.string(C.default["fQCcM/"]),
                variant: "primary",
            },
            e,
        ),
    );
}

function L(e) {
    return (0, r.jsx)(
        u.Button,
        w(
            {
                fullWidth: !0,
                text: R.intl.string(C.default.gWMqnI),
                variant: "primary",
                icon: u.I9m,
                iconPosition: "end",
            },
            e,
        ),
    );
}

function U(e) {
    let { guildId: t } = e,
        [n, l] = a.useState(!1),
        i = a.useCallback(() => {
            l(!0),
                (0, p.cq)(t).finally(() => {
                    l(!1);
                });
        }, [t]);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: R.intl.string(C.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: i,
    });
}

function B(e) {
    let { instance: t } = e,
        n = (0, E.A)(t.providerType, t.gameServerPanelUrl);
    return (0, r.jsx)(u.Button, {
        fullWidth: !0,
        text: R.intl.string(C.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n &&
                (0, v.h)({
                    href: n,
                });
        },
    });
}

function V(e) {
    let { guildId: t, instance: n } = e,
        l = (0, A.A)(n),
        [p, w] = (0, b.kn)([o.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        V = p !== o.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        F = (0, c.bG)([x.A], () => x.A.getDetectableGame(n.gameId)),
        q = (0, E.A)(n.providerType, n.gameServerPanelUrl),
        W = a.useCallback(() => {
            var e;
            (0, h.Ai)(t, n.gameId, null != (e = null == F ? void 0 : F.name) ? e : "", n.id),
                V || null == n.providerType
                    ? (0, I.A)(t, n)
                    : (0, T.A)({
                          provider: n.providerType,
                          onAccept: () => {
                              w(P.i.TAKE_ACTION), (0, I.A)(t, n);
                          },
                      });
        }, [n, V, w, t, null == F ? void 0 : F.name]),
        { handleCopyServerIp: z, animateCopyIcon: H } = (0, _.A)(t, n.id, f.A.GAME_SERVER_GAME, null != l ? l : ""),
        K = (0, N.A)(n.gameId, "cover"),
        Y = (0, g.A)(t),
        Z = a.useCallback(() => {
            var e;
            (0, h.f7)(t, n.id),
                (0, v.h)({
                    href: null != (e = n.gameServerPanelUrl) ? e : "",
                });
        }, [n.gameServerPanelUrl, t, n.id]),
        Q = a.useMemo(() => {
            switch (n.status) {
                case s.M.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, {
                                guildId: t,
                                instance: n,
                            }),
                            Y &&
                                (0, r.jsx)(G, {
                                    onClick: Z,
                                    disabled: null == n.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.M.OFFLINE:
                case s.M.ONLINE:
                case s.M.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(D, {
                                onClick: W,
                            }),
                            Y &&
                                (0, r.jsx)(G, {
                                    onClick: Z,
                                    disabled: null == n.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.M.STARTUP_FAILED:
                case s.M.MISSING_STOCK:
                    return Y
                        ? (0, r.jsx)(L, {
                              onClick: Z,
                          })
                        : (0, r.jsx)(D, {
                              onClick: W,
                              disabled: !0,
                          });
                case s.M.DELETED:
                    return Y
                        ? (0, r.jsx)(G, {
                              onClick: Z,
                              disabled: null == n.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(D, {
                              onClick: W,
                              disabled: !0,
                          });
                case s.M.PROVIDER_ERRORED:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            Y && null != q
                                ? (0, r.jsx)(B, {
                                      guildId: t,
                                      instance: n,
                                  })
                                : (0, r.jsx)(D, {
                                      onClick: W,
                                      disabled: !0,
                                  }),
                            (0, r.jsx)(U, {
                                guildId: t,
                                instance: n,
                            }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, W, Y, Z, t, q]),
        $ = a.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(j.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        X = a.useMemo(() => {
            switch (n.status) {
                case s.M.STARTING:
                    if (null == n.gameServerPanelUrl) return R.intl.string(C.default["1A3US2"]);
                    return null;
                case s.M.STARTUP_FAILED:
                    return R.intl.string(Y ? C.default.Mdoc98 : C.default.osZiRl);
                case s.M.MISSING_STOCK:
                    return R.intl.string(Y ? C.default.YCakvM : C.default.osZiRl);
                case s.M.PROVIDER_ERRORED:
                    return R.intl.string(Y ? C.default.NRyCeY : C.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, Y]);
    return (0, r.jsxs)(O.A, {
        actions: Q,
        children: [
            (0, r.jsxs)("div", {
                className: M.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: M.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != K ? K : "",
                                alt: "",
                                className: M.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: M.serverInfo,
                                children: [
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-md/medium",
                                        children: n.name,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [null == F ? void 0 : F.name, $].filter(j.Vq).join(" • "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: M.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: M.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(C.default.bDdi7n),
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: ""
                                                .concat(
                                                    null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0
                                                        ? n.onlineConnectionsCount
                                                        : "—",
                                                    " / ",
                                                )
                                                .concat(
                                                    null != n.maxConnectionsCount && n.maxConnectionsCount >= 0
                                                        ? n.maxConnectionsCount
                                                        : "—",
                                                ),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(C.default["7phwMG"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: M.serverIpContainer,
                                            children:
                                                null == l
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "—",
                                                      })
                                                    : V
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: l,
                                                                }),
                                                                (0, r.jsx)(u.DUT, {
                                                                    className: M.copyButton,
                                                                    "aria-label": R.intl.string(R.t.OpuAlK),
                                                                    onClick: z,
                                                                    children: H
                                                                        ? (0, r.jsx)(u.A9s, {
                                                                              size: "sm",
                                                                          })
                                                                        : (0, r.jsx)(u.TdU, {
                                                                              size: "sm",
                                                                          }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, r.jsx)(m.A, {
                                                            onClick: () => {
                                                                (0, T.A)({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        w(P.i.TAKE_ACTION), z();
                                                                    },
                                                                });
                                                            },
                                                            children: R.intl.string(C.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(C.default["n+ZX7y"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: M.statusContainer,
                                            children: [
                                                n.status === s.M.STARTING
                                                    ? (0, r.jsx)(u.y$y, {
                                                          type: u.tVU.SPINNING_CIRCLE_SIMPLE,
                                                          className: M.statusLoading,
                                                      })
                                                    : (0, r.jsx)("span", {
                                                          className: i()(
                                                              M.statusIndicator,
                                                              null != n.status && M[n.status],
                                                          ),
                                                      }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case s.M.STARTING:
                                                                return R.intl.string(C.default.SgjaXI);
                                                            case s.M.STARTUP_FAILED:
                                                                return R.intl.string(C.default["7C9Z3s"]);
                                                            case s.M.OFFLINE:
                                                                return R.intl.string(C.default["Ys/RrB"]);
                                                            case s.M.ONLINE:
                                                                return R.intl.string(C.default["60kAzo"]);
                                                            case s.M.DELETED:
                                                                return R.intl.string(C.default.Z1NZwX);
                                                            case s.M.MISSING_STOCK:
                                                                return R.intl.string(C.default["+a5G2l"]);
                                                            case s.M.SLEEPING:
                                                                return R.intl.string(C.default.y0z8ZO);
                                                            case s.M.PROVIDER_ERRORED:
                                                                return R.intl.string(C.default["6g/oji"]);
                                                            default:
                                                                return "—";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != X &&
                                                    (0, r.jsx)(d.m_, {
                                                        position: "top",
                                                        text: X,
                                                        children: (0, r.jsx)(u.cBN, {
                                                            className: M.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: R.intl.string(C.default.mJlz3T),
                                        }),
                                        (0, r.jsx)(u.Text, {
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
            Y &&
                (0, r.jsx)("div", {
                    className: M.overflowMenu,
                    children: (0, r.jsx)(S.A, {
                        guildId: t,
                        instance: n,
                    }),
                }),
            (0, r.jsx)("div", {
                className: M.imageBackground,
                children: (0, r.jsx)(y.T, {
                    imageUrl: null != K ? K : "",
                }),
            }),
        ],
    });
}
