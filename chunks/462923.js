t.d(n, { ZP: () => k }), t(388685);
var r = t(951288),
    a = t(647438),
    i = t(120356),
    s = t.n(i),
    o = t(660815),
    l = t(442837),
    c = t(704215),
    d = t(481060),
    u = t(243778),
    b = t(690221),
    m = t(77498),
    g = t(572004),
    f = t(49012),
    x = t(639777),
    p = t(310978),
    j = t(444083),
    v = t(943970),
    _ = t(998964),
    h = t(340887),
    O = t(408629),
    y = t(921944),
    C = t(401561),
    N = t(388032),
    I = t(842788);
function P(e) {
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
function S(e) {
    return (0, r.jsx)(
        d.zxk,
        P(
            {
                fullWidth: !0,
                text: N.intl.string(C.default.NHwQ0N),
                variant: "secondary",
            },
            e,
        ),
    );
}
function w(e) {
    return (0, r.jsx)(
        d.zxk,
        P(
            {
                fullWidth: !0,
                text: N.intl.string(C.default["jO3u+/"]),
                variant: "secondary",
                icon: d.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function T(e) {
    return (0, r.jsx)(
        d.zxk,
        P(
            {
                fullWidth: !0,
                text: N.intl.string(C.default["0TMXHh"]),
                variant: "primary",
            },
            e,
        ),
    );
}
function E(e) {
    return (0, r.jsx)(
        d.zxk,
        P(
            {
                fullWidth: !0,
                text: N.intl.string(C.default.irvMjo),
                variant: "primary",
                icon: d.Gr1,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function k(e) {
    let { guildId: n, instance: t } = e,
        i = (0, _.Z)(t),
        P = null != t.serverIP && null != t.port,
        k = "Portkey",
        [Z, D] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        G = Z !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        R = (0, l.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)),
        A = a.useCallback(() => {
            G
                ? (0, h.Z)(n, t)
                : (0, O.Z)({
                      provider: k,
                      onAccept: () => {
                          D(y.L.TAKE_ACTION), (0, h.Z)(n, t);
                      },
                  });
        }, [t, G, D, n]),
        V = a.useCallback(() => {
            (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(N.intl.string(N.t["+5kSoa"]), d.ToastType.SUCCESS));
        }, [i]),
        W = (0, v.Z)(t.gameId, "cover"),
        B = (0, x.Z)(n),
        L = a.useCallback(() => {
            var e;
            (0, f.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
        }, [t.gameServerPanelUrl]),
        M = a.useMemo(() => {
            switch (t.status) {
                case o.V.SLEEPING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(S, {}),
                            B &&
                                (0, r.jsx)(w, {
                                    onClick: L,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case o.V.OFFLINE:
                case o.V.ONLINE:
                case o.V.STARTING:
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(T, {
                                onClick: A,
                                disabled: !P,
                            }),
                            B &&
                                (0, r.jsx)(w, {
                                    onClick: L,
                                    disabled: null == t.gameServerPanelUrl,
                                }),
                        ],
                    });
                case o.V.MISSING_STOCK:
                    return B
                        ? (0, r.jsx)(E, { onClick: L })
                        : (0, r.jsx)(T, {
                              onClick: A,
                              disabled: !0,
                          });
                case o.V.DELETED:
                case o.V.STARTUP_FAILED:
                    return B
                        ? (0, r.jsx)(w, {
                              onClick: L,
                              disabled: null == t.gameServerPanelUrl,
                          })
                        : (0, r.jsx)(T, {
                              onClick: A,
                              disabled: !0,
                          });
                default:
                    return null;
            }
        }, [t, A, B, L, P]);
    return (0, r.jsxs)("div", {
        className: I.card,
        children: [
            (0, r.jsxs)("div", {
                className: I.contentWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.serverDetailsContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.serverHeader,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: null != W ? W : "",
                                        alt: "",
                                        className: I.gameImage,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: I.serverInfo,
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
                                    className: I.detailsGrid,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default.X0IaiI),
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-sm/medium",
                                                    children: ""
                                                        .concat(
                                                            null != t.onlineConnectionsCount
                                                                ? t.onlineConnectionsCount
                                                                : "\u2014\u2014\u2014",
                                                            " / ",
                                                        )
                                                        .concat(
                                                            null != t.maxConnectionsCount
                                                                ? t.maxConnectionsCount
                                                                : "\u2014\u2014\u2014",
                                                        ),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default["9pw/yM"]),
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: I.serverIpContainer,
                                                    children: P
                                                        ? G
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-sm/medium",
                                                                          children: i,
                                                                      }),
                                                                      (0, r.jsx)(d.P3F, {
                                                                          className: I.copyButton,
                                                                          "aria-label": N.intl.string(N.t.OpuAlJ),
                                                                          onClick: V,
                                                                          children: (0, r.jsx)(d.TIy, { size: "sm" }),
                                                                      }),
                                                                  ],
                                                              })
                                                            : (0, r.jsx)(b.Z, {
                                                                  onClick: () => {
                                                                      (0, O.Z)({
                                                                          provider: k,
                                                                          onAccept: () => {
                                                                              D(y.L.TAKE_ACTION), (0, h.Z)(n, t);
                                                                          },
                                                                      });
                                                                  },
                                                                  children: N.intl.string(C.default.UwXK29),
                                                              })
                                                        : (0, r.jsx)(d.Text, {
                                                              variant: "text-sm/medium",
                                                              children: "\u2014\u2014\u2014",
                                                          }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default.MQQIu7),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: I.statusContainer,
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className: s()(
                                                                I.statusIndicator,
                                                                null != t.status && I[t.status],
                                                            ),
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: "text-sm/medium",
                                                            children: (function (e) {
                                                                switch (e) {
                                                                    case o.V.STARTING:
                                                                        return N.intl.string(C.default["7XF8pK"]);
                                                                    case o.V.STARTUP_FAILED:
                                                                        return N.intl.string(C.default["C/096+"]);
                                                                    case o.V.OFFLINE:
                                                                        return N.intl.string(C.default.Bz9gcH);
                                                                    case o.V.ONLINE:
                                                                        return N.intl.string(C.default["7q4iGR"]);
                                                                    case o.V.DELETED:
                                                                        return N.intl.string(C.default["UvP/1N"]);
                                                                    case o.V.MISSING_STOCK:
                                                                        return N.intl.string(C.default.ssC3cX);
                                                                    case o.V.SLEEPING:
                                                                        return N.intl.string(C.default.PS8AMT);
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
                                            className: I.detailItem,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default.fqrxlJ),
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-sm/medium",
                                                    children:
                                                        null != t.regionName ? t.regionName : "\u2014\u2014\u2014",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    null != M &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: I.divider }),
                                (0, r.jsx)("div", {
                                    className: I.serverActions,
                                    children: M,
                                }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        className: I.overflowMenu,
                        children: (0, r.jsx)(j.Z, {
                            guildId: n,
                            instance: t,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: I.imageBackground,
                children: (0, r.jsx)(p.M, { imageUrl: null != W ? W : "" }),
            }),
        ],
    });
}
