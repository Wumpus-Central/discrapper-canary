t.d(n, { ZP: () => R }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(120356),
    s = t.n(i),
    l = t(660815),
    o = t(442837),
    c = t(704215),
    d = t(681715),
    u = t(481060),
    m = t(243778),
    g = t(690221),
    b = t(77498),
    f = t(572004),
    x = t(823379),
    p = t(49012),
    v = t(639777),
    j = t(744993),
    _ = t(310978),
    h = t(450403),
    y = t(444083),
    C = t(943970),
    O = t(998964),
    I = t(340887),
    N = t(408629),
    P = t(921944),
    S = t(401561),
    T = t(388032),
    w = t(842788);
function k(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function E(e) {
    return (0, r.jsx)(
        u.zxk,
        k(
            {
                fullWidth: !0,
                text: T.intl.string(S.default.NHwQ0N),
                variant: "secondary",
            },
            e,
        ),
    );
}
function Z(e) {
    return (0, r.jsx)(
        u.zxk,
        k(
            {
                fullWidth: !0,
                text: T.intl.string(S.default["jO3u+/"]),
                variant: "secondary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function G(e) {
    return (0, r.jsx)(
        u.zxk,
        k(
            {
                fullWidth: !0,
                text: T.intl.string(S.default["0TMXHh"]),
                variant: "primary",
            },
            e,
        ),
    );
}
function D(e) {
    return (0, r.jsx)(
        u.zxk,
        k(
            {
                fullWidth: !0,
                text: T.intl.string(S.default.irvMjo),
                variant: "primary",
                icon: u.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function R(e) {
    let { guildId: n, instance: t } = e,
        i = (0, O.Z)(t),
        [k, R] = (0, m.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        A = k !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        V = (0, o.e7)([b.Z], () => b.Z.getDetectableGame(t.gameId)),
        L = a.useCallback(() => {
            A || null == t.providerType
                ? (0, I.Z)(n, t)
                : (0, N.Z)({
                      provider: t.providerType,
                      onAccept: () => {
                          R(P.L.TAKE_ACTION), (0, I.Z)(n, t);
                      },
                  });
        }, [t, A, R, n]),
        W = a.useCallback(() => {
            (0, f.JG)(null != i ? i : ""),
                (0, u.showToast)((0, u.createToast)(T.intl.string(T.t["+5kSoa"]), u.ToastType.SUCCESS));
        }, [i]),
        B = (0, C.Z)(t.gameId, "cover"),
        U = (0, v.Z)(n),
        M = a.useCallback(() => {
            var e;
            (0, p.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl]),
        z = a.useCallback(() => {
            (0, j.WX)(n, t.id);
        }, [n, t.id]),
        F = a.useMemo(() => {
            switch (t.status) {
                case l.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E, { onClick: z }),
                            U &&
                                (0, r.jsx)(Z, {
                                    onClick: M,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case l.V.OFFLINE:
                case l.V.ONLINE:
                case l.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(G, { onClick: L }),
                            U &&
                                (0, r.jsx)(Z, {
                                    onClick: M,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case l.V.STARTUP_FAILED:
                case l.V.MISSING_STOCK:
                    return U
                        ? (0, r.jsx)(D, { onClick: M })
                        : (0, r.jsx)(G, {
                              onClick: L,
                              disabled: !0,
                          });
                case l.V.DELETED:
                    return U
                        ? (0, r.jsx)(Z, {
                              onClick: M,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(G, {
                              onClick: L,
                              disabled: !0,
                          });
                default:
                    return null;
            }
        }, [t, L, U, M, z]),
        K = a.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(x.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]),
        X = a.useMemo(() => {
            switch (t.status) {
                case l.V.STARTING:
                    if (null == t.gameServerPanelUrl) return T.intl.string(S.default.K59Dxc);
                    return null;
                case l.V.STARTUP_FAILED:
                    return T.intl.string(U ? S.default.lpwWOD : S.default.pNWcub);
                case l.V.MISSING_STOCK:
                    return T.intl.string(U ? S.default.CksIra : S.default.pNWcub);
                default:
                    return null;
            }
        }, [t.status, t.gameServerPanelUrl, U]);
    return (0, r.jsxs)(h.Z, {
        actions: F,
        children: [
            (0, r.jsxs)("div", {
                className: w.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != B ? B : "",
                                alt: "",
                                className: w.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: w.serverInfo,
                                children: [
                                    (0, r.jsx)(u.X6q, {
                                        variant: "heading-sm/medium",
                                        children: t.name,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-tertiary",
                                        children: [null == V ? void 0 : V.name, K].filter(x.lm).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: w.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(S.default.X0IaiI),
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: ""
                                                .concat(
                                                    null != t.onlineConnectionsCount
                                                        ? t.onlineConnectionsCount
                                                        : "\u2014",
                                                    " / ",
                                                )
                                                .concat(
                                                    null != t.maxConnectionsCount ? t.maxConnectionsCount : "\u2014",
                                                ),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(S.default["9pw/yM"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: w.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(u.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : A
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(u.P3F, {
                                                                    className: w.copyButton,
                                                                    "aria-label": T.intl.string(T.t.OpuAlJ),
                                                                    onClick: W,
                                                                    children: (0, r.jsx)(u.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(g.Z, {
                                                            onClick: () => {
                                                                (0, N.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        R(P.L.TAKE_ACTION), (0, I.Z)(n, t);
                                                                    },
                                                                });
                                                            },
                                                            children: T.intl.string(S.default.UwXK29),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(S.default.MQQIu7),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: w.statusContainer,
                                            children: [
                                                t.status === l.V.STARTING
                                                    ? (0, r.jsx)(u.$jN, {
                                                          type: u.RAz.SPINNING_CIRCLE_SIMPLE,
                                                          className: w.statusLoading,
                                                          itemClassName: w.statusLoadingItem,
                                                      })
                                                    : (0, r.jsx)("span", {
                                                          className: s()(
                                                              w.statusIndicator,
                                                              null != t.status && w[t.status],
                                                          ),
                                                      }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case l.V.STARTING:
                                                                return T.intl.string(S.default["7XF8pK"]);
                                                            case l.V.STARTUP_FAILED:
                                                                return T.intl.string(S.default["C/096+"]);
                                                            case l.V.OFFLINE:
                                                                return T.intl.string(S.default.Bz9gcH);
                                                            case l.V.ONLINE:
                                                                return T.intl.string(S.default["7q4iGR"]);
                                                            case l.V.DELETED:
                                                                return T.intl.string(S.default["UvP/1N"]);
                                                            case l.V.MISSING_STOCK:
                                                                return T.intl.string(S.default.ssC3cX);
                                                            case l.V.SLEEPING:
                                                                return T.intl.string(S.default.PS8AMT);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(t.status),
                                                }),
                                                null != X &&
                                                    (0, r.jsx)(d.u, {
                                                        position: "top",
                                                        text: X,
                                                        children: (0, r.jsx)(u.idN, {
                                                            className: w.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: w.detailItem,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: T.intl.string(S.default.fqrxlJ),
                                        }),
                                        (0, r.jsx)(u.Text, {
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
            U &&
                (0, r.jsx)("div", {
                    className: w.overflowMenu,
                    children: (0, r.jsx)(y.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: w.imageBackground,
                children: (0, r.jsx)(_.M, { imageUrl: null != B ? B : "" }),
            }),
        ],
    });
}
