t.d(n, { Z: () => N }), t(388685);
var a = t(951288),
    r = t(647438),
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
    p = t(639777),
    x = t(444083),
    j = t(943970),
    v = t(998964),
    _ = t(340887),
    O = t(408629),
    h = t(921944),
    y = t(440589),
    C = t(388032),
    I = t(799427);
function N(e) {
    let { guildId: n, instance: t } = e,
        i = (0, v.Z)(t),
        N = "Portkey",
        [P, S] = (0, u.US)([c.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        w = P !== c.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        T = (0, l.e7)([m.Z], () => m.Z.getDetectableGame(t.gameId)),
        E = r.useCallback(() => {
            w
                ? (0, _.Z)(n, t)
                : (0, O.Z)({
                      provider: N,
                      onAccept: () => {
                          S(h.L.TAKE_ACTION), (0, _.Z)(n, t);
                      },
                  });
        }, [t, w, S, n]),
        k = r.useCallback(() => {
            (0, g.JG)(i), (0, d.showToast)((0, d.createToast)(C.intl.string(C.t["+5kSoa"]), d.ToastType.SUCCESS));
        }, [i]),
        Z = (0, p.Z)(n),
        R = (0, j.Z)(t.gameId, "cover");
    return (0, a.jsxs)("div", {
        className: I.card,
        children: [
            (0, a.jsxs)("div", {
                className: I.serverHeader,
                children: [
                    (0, a.jsx)("img", {
                        src: null != R ? R : "",
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
                                children: [null != T ? "".concat(T.name, " \u2022 ") : "", t.planName],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: I.serverDetails,
                children: (0, a.jsxs)("div", {
                    className: I.detailsGrid,
                    children: [
                        (0, a.jsxs)("div", {
                            className: I.detailItem,
                            children: [
                                (0, a.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    children: C.intl.string(y.default.X0IaiI),
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: I.detailItem,
                            children: [
                                (0, a.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    children: C.intl.string(y.default["9pw/yM"]),
                                }),
                                (0, a.jsx)("div", {
                                    className: I.serverIpContainer,
                                    children: w
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(d.Text, {
                                                      variant: "text-sm/medium",
                                                      children: i,
                                                  }),
                                                  (0, a.jsx)(d.P3F, {
                                                      className: I.copyButton,
                                                      "aria-label": C.intl.string(C.t.OpuAlJ),
                                                      onClick: k,
                                                      children: (0, a.jsx)(d.TIy, { size: "sm" }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(b.Z, {
                                              onClick: () => {
                                                  (0, O.Z)({
                                                      provider: N,
                                                      onAccept: () => {
                                                          S(h.L.TAKE_ACTION), (0, _.Z)(n, t);
                                                      },
                                                  });
                                              },
                                              children: C.intl.string(y.default.UwXK29),
                                          }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: I.detailItem,
                            children: [
                                (0, a.jsx)(d.Text, {
                                    variant: "text-xs/semibold",
                                    children: C.intl.string(y.default.MQQIu7),
                                }),
                                (0, a.jsxs)("div", {
                                    className: I.statusContainer,
                                    children: [
                                        (0, a.jsx)("span", { className: s()(I.statusIndicator, I[t.status]) }),
                                        (0, a.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            children: (function (e) {
                                                switch (e) {
                                                    case o.V.STARTING:
                                                        return C.intl.string(y.default["7XF8pK"]);
                                                    case o.V.STARTUP_FAILED:
                                                        return C.intl.string(y.default["C/096+"]);
                                                    case o.V.OFFLINE:
                                                        return C.intl.string(y.default.Bz9gcH);
                                                    case o.V.ONLINE:
                                                        return C.intl.string(y.default["7q4iGR"]);
                                                    case o.V.DELETED:
                                                        return C.intl.string(y.default["UvP/1N"]);
                                                    case o.V.MISSING_STOCK:
                                                        return C.intl.string(y.default.ssC3cX);
                                                    case o.V.SLEEPING:
                                                        return C.intl.string(y.default.PS8AMT);
                                                    default:
                                                        return C.intl.string(y.default.Bz9gcH);
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
                                    children: C.intl.string(y.default.fqrxlJ),
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    children: t.regionName,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: I.serverActions,
                children: [
                    (0, a.jsx)(d.zxk, {
                        fullWidth: !0,
                        text: C.intl.string(y.default["0TMXHh"]),
                        onClick: E,
                        variant: "primary",
                    }),
                    Z &&
                        null != t.gameServerPanelUrl &&
                        (0, a.jsx)(d.zxk, {
                            fullWidth: !0,
                            text: C.intl.string(y.default["jO3u+/"]),
                            onClick: () => {
                                var e;
                                (0, f.q)({ href: null != (e = t.gameServerPanelUrl) ? e : "" });
                            },
                            variant: "secondary",
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: I.overflowMenu,
                children: (0, a.jsx)(x.Z, {
                    guildId: n,
                    instance: t,
                }),
            }),
        ],
    });
}
