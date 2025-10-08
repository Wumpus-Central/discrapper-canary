t.d(n, { ZP: () => D }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(120356),
    o = t.n(i),
    l = t(660815),
    s = t(442837),
    c = t(704215),
    d = t(481060),
    u = t(243778),
    m = t(690221),
    g = t(77498),
    b = t(572004),
    f = t(823379),
    x = t(49012),
    p = t(639777),
    v = t(744993),
    j = t(310978),
    _ = t(450403),
    h = t(444083),
    y = t(943970),
    O = t(998964),
    C = t(340887),
    I = t(408629),
    N = t(921944),
    P = t(401561),
    S = t(388032),
    T = t(842788);
function w(e) {
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
function k(e) {
    return (0, r.jsx)(
        d.zxk,
        w(
            {
                fullWidth: !0,
                text: S.intl.string(P.default.NHwQ0N),
                variant: "secondary",
            },
            e,
        ),
    );
}
function E(e) {
    return (0, r.jsx)(
        d.zxk,
        w(
            {
                fullWidth: !0,
                text: S.intl.string(P.default["jO3u+/"]),
                variant: "secondary",
                icon: d.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function Z(e) {
    return (0, r.jsx)(
        d.zxk,
        w(
            {
                fullWidth: !0,
                text: S.intl.string(P.default["0TMXHh"]),
                variant: "primary",
            },
            e,
        ),
    );
}
function G(e) {
    return (0, r.jsx)(
        d.zxk,
        w(
            {
                fullWidth: !0,
                text: S.intl.string(P.default.irvMjo),
                variant: "primary",
                icon: d.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function D(e) {
    let { guildId: n, instance: t } = e,
        i = (0, O.Z)(t),
        [w, D] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        R = w !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        A = (0, s.e7)([g.Z], () => g.Z.getDetectableGame(t.gameId)),
        V = a.useCallback(() => {
            R || null == t.providerType
                ? (0, C.Z)(n, t)
                : (0, I.Z)({
                      provider: t.providerType,
                      onAccept: () => {
                          D(N.L.TAKE_ACTION), (0, C.Z)(n, t);
                      },
                  });
        }, [t, R, D, n]),
        B = a.useCallback(() => {
            (0, b.JG)(null != i ? i : ""),
                (0, d.showToast)((0, d.createToast)(S.intl.string(S.t["+5kSoa"]), d.ToastType.SUCCESS));
        }, [i]),
        W = (0, y.Z)(t.gameId, "cover"),
        L = (0, p.Z)(n),
        M = a.useCallback(() => {
            var e;
            (0, x.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl]),
        z = a.useCallback(() => {
            (0, v.WX)(n, t.id);
        }, [n, t.id]),
        U = a.useMemo(() => {
            switch (t.status) {
                case l.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, { onClick: z }),
                            L &&
                                (0, r.jsx)(E, {
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
                            (0, r.jsx)(Z, { onClick: V }),
                            L &&
                                (0, r.jsx)(E, {
                                    onClick: M,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case l.V.MISSING_STOCK:
                    return L
                        ? (0, r.jsx)(G, { onClick: M })
                        : (0, r.jsx)(Z, {
                              onClick: V,
                              disabled: !0,
                          });
                case l.V.DELETED:
                case l.V.STARTUP_FAILED:
                    return L
                        ? (0, r.jsx)(E, {
                              onClick: M,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(Z, {
                              onClick: V,
                              disabled: !0,
                          });
                default:
                    return null;
            }
        }, [t, V, L, M, z]),
        F = a.useMemo(() => {
            if (null == t.gameConfig) return null;
            let e = [t.gameConfig.type, t.gameConfig.version].filter(f.lm).join(" ");
            return "" === e ? null : e;
        }, [t.gameConfig]);
    return (0, r.jsxs)(_.Z, {
        actions: U,
        children: [
            (0, r.jsxs)("div", {
                className: T.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != W ? W : "",
                                alt: "",
                                className: T.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.serverInfo,
                                children: [
                                    (0, r.jsx)(d.X6q, {
                                        variant: "heading-sm/medium",
                                        children: t.name,
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-tertiary",
                                        children: [null == A ? void 0 : A.name, F].filter(f.lm).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: T.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: S.intl.string(P.default.X0IaiI),
                                        }),
                                        (0, r.jsx)(d.Text, {
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
                                    className: T.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: S.intl.string(P.default["9pw/yM"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: T.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(d.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : R
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(d.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(d.P3F, {
                                                                    className: T.copyButton,
                                                                    "aria-label": S.intl.string(S.t.OpuAlJ),
                                                                    onClick: B,
                                                                    children: (0, r.jsx)(d.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(m.Z, {
                                                            onClick: () => {
                                                                (0, I.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        D(N.L.TAKE_ACTION), (0, C.Z)(n, t);
                                                                    },
                                                                });
                                                            },
                                                            children: S.intl.string(P.default.UwXK29),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: S.intl.string(P.default.MQQIu7),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.statusContainer,
                                            children: [
                                                (0, r.jsx)("span", {
                                                    className: o()(T.statusIndicator, null != t.status && T[t.status]),
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case l.V.STARTING:
                                                                return S.intl.string(P.default["7XF8pK"]);
                                                            case l.V.STARTUP_FAILED:
                                                                return S.intl.string(P.default["C/096+"]);
                                                            case l.V.OFFLINE:
                                                                return S.intl.string(P.default.Bz9gcH);
                                                            case l.V.ONLINE:
                                                                return S.intl.string(P.default["7q4iGR"]);
                                                            case l.V.DELETED:
                                                                return S.intl.string(P.default["UvP/1N"]);
                                                            case l.V.MISSING_STOCK:
                                                                return S.intl.string(P.default.ssC3cX);
                                                            case l.V.SLEEPING:
                                                                return S.intl.string(P.default.PS8AMT);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(t.status),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: S.intl.string(P.default.fqrxlJ),
                                        }),
                                        (0, r.jsx)(d.Text, {
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
            L &&
                (0, r.jsx)("div", {
                    className: T.overflowMenu,
                    children: (0, r.jsx)(h.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: T.imageBackground,
                children: (0, r.jsx)(j.M, { imageUrl: null != W ? W : "" }),
            }),
        ],
    });
}
