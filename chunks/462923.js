t.d(n, { Z: () => h }), t(388685);
var a = t(951288),
    r = t(647438),
    i = t(442837),
    o = t(704215),
    s = t(481060),
    c = t(243778),
    l = t(690221),
    d = t(77498),
    u = t(572004),
    b = t(639777),
    m = t(444083),
    g = t(998964),
    f = t(340887),
    x = t(408629),
    p = t(921944),
    j = t(401561),
    v = t(388032),
    _ = t(842788);
function h(e) {
    let { guildId: n, instance: t } = e,
        h = (0, g.Z)(t),
        y = "Portkey",
        [O, C] = (0, c.US)([o.z.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        N = O !== o.z.GAME_SERVER_HOSTING_PORTKEY_TOS,
        P = (0, i.e7)([d.Z], () => d.Z.getDetectableGame(t.gameId)),
        I = r.useCallback(() => {
            N
                ? (0, f.Z)(t)
                : (0, x.Z)({
                      provider: y,
                      onAccept: () => {
                          C(p.L.TAKE_ACTION), (0, f.Z)(t);
                      },
                  });
        }, [t, N, C]),
        w = r.useCallback(() => {
            (0, u.JG)(h), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t["+5kSoa"]), s.ToastType.SUCCESS));
        }, [h]),
        S = (0, b.Z)(n);
    return (0, a.jsxs)("div", {
        className: _.card,
        children: [
            (0, a.jsxs)("div", {
                className: _.serverHeader,
                children: [
                    (0, a.jsx)("img", {
                        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
                        alt: "",
                        className: _.gameImage,
                    }),
                    (0, a.jsxs)("div", {
                        className: _.serverInfo,
                        children: [
                            (0, a.jsx)(s.X6q, {
                                variant: "heading-sm/medium",
                                children: t.name,
                            }),
                            (0, a.jsxs)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-tertiary",
                                children: [null != P ? "".concat(P.name, " \u2022 ") : "", t.planName],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: _.serverDetails,
                children: (0, a.jsxs)("div", {
                    className: _.detailsGrid,
                    children: [
                        (0, a.jsxs)("div", {
                            className: _.detailItem,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: v.intl.string(j.default.X0IaiI),
                                }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: "".concat(t.onlineConnectionsCount, " / ").concat(t.maxConnectionsCount),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: _.detailItem,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: v.intl.string(j.default["9pw/yM"]),
                                }),
                                (0, a.jsx)("div", {
                                    className: _.serverIpContainer,
                                    children: N
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(s.Text, {
                                                      variant: "text-sm/medium",
                                                      children: h,
                                                  }),
                                                  (0, a.jsx)(s.P3F, {
                                                      className: _.copyButton,
                                                      "aria-label": v.intl.string(v.t.OpuAlJ),
                                                      onClick: w,
                                                      children: (0, a.jsx)(s.TIy, { size: "sm" }),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsx)(l.Z, {
                                              onClick: () => {
                                                  (0, x.Z)({
                                                      provider: y,
                                                      onAccept: () => {
                                                          C(p.L.TAKE_ACTION), (0, f.Z)(t);
                                                      },
                                                  });
                                              },
                                              children: v.intl.string(j.default.UwXK29),
                                          }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: _.detailItem,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: v.intl.string(j.default.MQQIu7),
                                }),
                                (0, a.jsxs)("div", {
                                    className: _.statusContainer,
                                    children: [
                                        (0, a.jsx)("span", { className: _.statusIndicator }),
                                        (0, a.jsx)(s.Text, {
                                            variant: "text-sm/medium",
                                            children: t.status,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: _.detailItem,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: v.intl.string(j.default.fqrxlJ),
                                }),
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: t.regionName,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: _.serverActions,
                children: [
                    (0, a.jsx)(s.zxk, {
                        fullWidth: !0,
                        text: v.intl.string(j.default["0TMXHh"]),
                        onClick: I,
                        variant: "primary",
                    }),
                    S &&
                        null != t.gameServerPanelUrl &&
                        (0, a.jsx)(s.zxk, {
                            fullWidth: !0,
                            text: v.intl.string(j.default["jO3u+/"]),
                            onClick: () => {
                                window.open(t.gameServerPanelUrl, "_blank");
                            },
                            variant: "secondary",
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: _.overflowMenu,
                children: (0, a.jsx)(m.Z, {
                    guildId: n,
                    instance: t,
                }),
            }),
        ],
    });
}
