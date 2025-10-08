t.d(n, { ZP: () => G }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(120356),
    o = t.n(i),
    s = t(660815),
    l = t(442837),
    c = t(704215),
    d = t(481060),
    u = t(243778),
    m = t(690221),
    g = t(77498),
    b = t(572004),
    f = t(49012),
    x = t(639777),
    p = t(744993),
    v = t(310978),
    j = t(450403),
    _ = t(444083),
    h = t(943970),
    y = t(998964),
    O = t(340887),
    C = t(408629),
    N = t(921944),
    I = t(401561),
    P = t(388032),
    S = t(842788);
function T(e) {
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
function w(e) {
    return (0, r.jsx)(
        d.zxk,
        T(
            {
                fullWidth: !0,
                text: P.intl.string(I.default.NHwQ0N),
                variant: "secondary",
            },
            e,
        ),
    );
}
function k(e) {
    return (0, r.jsx)(
        d.zxk,
        T(
            {
                fullWidth: !0,
                text: P.intl.string(I.default["jO3u+/"]),
                variant: "secondary",
                icon: d.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function E(e) {
    return (0, r.jsx)(
        d.zxk,
        T(
            {
                fullWidth: !0,
                text: P.intl.string(I.default["0TMXHh"]),
                variant: "primary",
            },
            e,
        ),
    );
}
function Z(e) {
    return (0, r.jsx)(
        d.zxk,
        T(
            {
                fullWidth: !0,
                text: P.intl.string(I.default.irvMjo),
                variant: "primary",
                icon: d.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function G(e) {
    let { guildId: n, instance: t } = e,
        i = (0, y.Z)(t),
        [T, G] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        D = T !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        R = (0, l.e7)([g.Z], () => g.Z.getDetectableGame(t.gameId)),
        A = a.useCallback(() => {
            D || null == t.providerType
                ? (0, O.Z)(n, t)
                : (0, C.Z)({
                      provider: t.providerType,
                      onAccept: () => {
                          G(N.L.TAKE_ACTION), (0, O.Z)(n, t);
                      },
                  });
        }, [t, D, G, n]),
        V = a.useCallback(() => {
            (0, b.JG)(null != i ? i : ""),
                (0, d.showToast)((0, d.createToast)(P.intl.string(P.t["+5kSoa"]), d.ToastType.SUCCESS));
        }, [i]),
        B = (0, h.Z)(t.gameId, "cover"),
        W = (0, x.Z)(n),
        L = a.useCallback(() => {
            var e;
            (0, f.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl]),
        z = a.useCallback(() => {
            (0, p.WX)(n, t.id);
        }, [n, t.id]),
        M = a.useMemo(() => {
            switch (t.status) {
                case s.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w, { onClick: z }),
                            W &&
                                (0, r.jsx)(k, {
                                    onClick: L,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.OFFLINE:
                case s.V.ONLINE:
                case s.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E, { onClick: A }),
                            W &&
                                (0, r.jsx)(k, {
                                    onClick: L,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case s.V.MISSING_STOCK:
                    return W
                        ? (0, r.jsx)(Z, { onClick: L })
                        : (0, r.jsx)(E, {
                              onClick: A,
                              disabled: !0,
                          });
                case s.V.DELETED:
                case s.V.STARTUP_FAILED:
                    return W
                        ? (0, r.jsx)(k, {
                              onClick: L,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(E, {
                              onClick: A,
                              disabled: !0,
                          });
                default:
                    return null;
            }
        }, [t, A, W, L, z]);
    return (0, r.jsxs)(j.Z, {
        actions: M,
        children: [
            (0, r.jsxs)("div", {
                className: S.serverDetailsContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.serverHeader,
                        children: [
                            (0, r.jsx)("img", {
                                src: null != B ? B : "",
                                alt: "",
                                className: S.gameImage,
                            }),
                            (0, r.jsxs)("div", {
                                className: S.serverInfo,
                                children: [
                                    (0, r.jsx)(d.X6q, {
                                        variant: "heading-sm/medium",
                                        children: t.name,
                                    }),
                                    (0, r.jsxs)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-tertiary",
                                        children: [null != R ? "".concat(R.name, " \u2022 ") : "", t.planName],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: S.detailsGrid,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: P.intl.string(I.default.X0IaiI),
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
                                    className: S.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: P.intl.string(I.default["9pw/yM"]),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: S.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, r.jsx)(d.Text, {
                                                          variant: "text-sm/medium",
                                                          children: "\u2014",
                                                      })
                                                    : D
                                                      ? (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(d.Text, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, r.jsx)(d.P3F, {
                                                                    className: S.copyButton,
                                                                    "aria-label": P.intl.string(P.t.OpuAlJ),
                                                                    onClick: V,
                                                                    children: (0, r.jsx)(d.TIy, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != t.providerType &&
                                                        (0, r.jsx)(m.Z, {
                                                            onClick: () => {
                                                                (0, C.Z)({
                                                                    provider: t.providerType,
                                                                    onAccept: () => {
                                                                        G(N.L.TAKE_ACTION), (0, O.Z)(n, t);
                                                                    },
                                                                });
                                                            },
                                                            children: P.intl.string(I.default.UwXK29),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: S.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: P.intl.string(I.default.MQQIu7),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: S.statusContainer,
                                            children: [
                                                (0, r.jsx)("span", {
                                                    className: o()(S.statusIndicator, null != t.status && S[t.status]),
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case s.V.STARTING:
                                                                return P.intl.string(I.default["7XF8pK"]);
                                                            case s.V.STARTUP_FAILED:
                                                                return P.intl.string(I.default["C/096+"]);
                                                            case s.V.OFFLINE:
                                                                return P.intl.string(I.default.Bz9gcH);
                                                            case s.V.ONLINE:
                                                                return P.intl.string(I.default["7q4iGR"]);
                                                            case s.V.DELETED:
                                                                return P.intl.string(I.default["UvP/1N"]);
                                                            case s.V.MISSING_STOCK:
                                                                return P.intl.string(I.default.ssC3cX);
                                                            case s.V.SLEEPING:
                                                                return P.intl.string(I.default.PS8AMT);
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
                                    className: S.detailItem,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: P.intl.string(I.default.fqrxlJ),
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
            W &&
                (0, r.jsx)("div", {
                    className: S.overflowMenu,
                    children: (0, r.jsx)(_.Z, {
                        guildId: n,
                        instance: t,
                    }),
                }),
            (0, r.jsx)("div", {
                className: S.imageBackground,
                children: (0, r.jsx)(v.M, { imageUrl: null != B ? B : "" }),
            }),
        ],
    });
}
