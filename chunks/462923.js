t.d(n, { Z: () => P }), t(388685);
var a = t(951288),
    r = t(647438),
    i = t(120356),
    s = t.n(i),
    o = t(660815),
    c = t(442837),
    l = t(704215),
    d = t(481060),
    u = t(243778),
    b = t(690221),
    m = t(77498),
    g = t(572004),
    f = t(49012),
    x = t(639777),
    p = t(310978),
    v = t(444083),
    j = t(943970),
    _ = t(998964),
    h = t(340887),
    O = t(408629),
    y = t(921944),
    C = t(440589),
    N = t(388032),
    I = t(799427);
function P(e) {
    let { guildId: n, instance: t } = e,
        i = (0, _.Z)(t),
        P = null != t.serverIP && null != t.port,
        S = "Portkey",
        [w, T] = (0, u.US)([l.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        E = w !== l.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        k = (0, c.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)),
        Z = r.useCallback(() => {
            E
                ? (0, h.Z)(n, t)
                : (0, O.Z)({
                      provider: S,
                      onAccept: () => {
                          T(y.L.TAKE_ACTION), (0, h.Z)(n, t);
                      },
                  });
        }, [t, E, T, n]),
        D = r.useCallback(() => {
            (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(N.intl.string(N.t["+5kSoa"]), d.ToastType.SUCCESS));
        }, [i]),
        R = (0, x.Z)(n),
        G = (0, j.Z)(t.gameId, "cover");
    return (0, a.jsxs)("div", {
        className: I.card,
        children: [
            (0, a.jsxs)("div", {
                className: I.contentWrapper,
                children: [
                    (0, a.jsxs)("div", {
                        className: I.serverDetailsContainer,
                        children: [
                            (0, a.jsxs)("div", {
                                className: I.serverHeader,
                                children: [
                                    (0, a.jsx)("img", {
                                        src: null != G ? G : "",
                                        alt: "",
                                        className: I.gameImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: I.serverInfo,
                                        children: [
                                            (0, a.jsx)(d.X6q, {
                                                variant: "heading-sm/medium",
                                                children: t.name,
                                            }),
                                            (0, a.jsxs)(d.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-tertiary",
                                                children: [null != k ? "".concat(k.name, " \u2022 ") : "", t.planName],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                children: (0, a.jsxs)("div", {
                                    className: I.detailsGrid,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, a.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default.X0IaiI),
                                                }),
                                                (0, a.jsx)(d.Text, {
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
                                        (0, a.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, a.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default["9pw/yM"]),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: I.serverIpContainer,
                                                    children: P
                                                        ? E
                                                            ? (0, a.jsxs)(a.Fragment, {
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-sm/medium",
                                                                          children: i,
                                                                      }),
                                                                      (0, a.jsx)(d.P3F, {
                                                                          className: I.copyButton,
                                                                          "aria-label": N.intl.string(N.t.OpuAlJ),
                                                                          onClick: D,
                                                                          children: (0, a.jsx)(d.TIy, { size: "sm" }),
                                                                      }),
                                                                  ],
                                                              })
                                                            : (0, a.jsx)(b.Z, {
                                                                  onClick: () => {
                                                                      (0, O.Z)({
                                                                          provider: S,
                                                                          onAccept: () => {
                                                                              T(y.L.TAKE_ACTION), (0, h.Z)(n, t);
                                                                          },
                                                                      });
                                                                  },
                                                                  children: N.intl.string(C.default.UwXK29),
                                                              })
                                                        : (0, a.jsx)(d.Text, {
                                                              variant: "text-sm/medium",
                                                              children: "\u2014\u2014\u2014",
                                                          }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, a.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default.MQQIu7),
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: I.statusContainer,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: s()(
                                                                I.statusIndicator,
                                                                null != t.status && I[t.status],
                                                            ),
                                                        }),
                                                        (0, a.jsx)(d.Text, {
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
                                                                        return "\u2014\u2014\u2014";
                                                                }
                                                            })(t.status),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: I.detailItem,
                                            children: [
                                                (0, a.jsx)(d.Text, {
                                                    variant: "text-xs/semibold",
                                                    children: N.intl.string(C.default.fqrxlJ),
                                                }),
                                                (0, a.jsx)(d.Text, {
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
                    (0, a.jsx)("div", { className: I.divider }),
                    (0, a.jsxs)("div", {
                        className: I.serverActions,
                        children: [
                            P &&
                                (0, a.jsx)(d.zxk, {
                                    fullWidth: !0,
                                    text: N.intl.string(C.default["0TMXHh"]),
                                    onClick: Z,
                                    variant: "primary",
                                }),
                            R &&
                                null != t.gameServerPanelUrl &&
                                (0, a.jsx)(d.zxk, {
                                    fullWidth: !0,
                                    text: N.intl.string(C.default["jO3u+/"]),
                                    onClick: () => {
                                        var e;
                                        (0, f.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
                                    },
                                    variant: "secondary",
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: I.overflowMenu,
                children: (0, a.jsx)(v.Z, {
                    guildId: n,
                    instance: t,
                }),
            }),
            (0, a.jsx)("div", {
                className: I.imageBackground,
                children: (0, a.jsx)(p.M, { imageUrl: null != G ? G : "" }),
            }),
        ],
    });
}
