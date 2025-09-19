n.d(t, { Z: () => x });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    s = n(481060),
    c = n(690221),
    o = n(572004),
    l = n(639777),
    u = n(29168),
    d = n(444083),
    m = n(998964),
    b = n(340887),
    p = n(408629),
    f = n(401561),
    j = n(388032),
    g = n(842788);
function x(e) {
    let { guildId: t, instance: n } = e,
        x = (0, m.Z)(n),
        v = (0, i.e7)([u.Z], () => u.Z.getState()),
        y = a.useCallback(() => {
            v
                ? (0, b.Z)(n)
                : (0, p.Z)({
                      onAccept: () => {
                          (0, b.Z)(n);
                      },
                  });
        }, [n, v]),
        O = a.useCallback(() => {
            (0, o.JG)(x), (0, s.showToast)((0, s.createToast)(j.intl.string(j.t["+5kSoa"]), s.ToastType.SUCCESS));
        }, [x]),
        h = (0, l.Z)(t);
    return (0, r.jsxs)("div", {
        className: g.card,
        children: [
            (0, r.jsxs)("div", {
                className: g.serverHeader,
                children: [
                    (0, r.jsx)("img", {
                        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
                        alt: "",
                        className: g.gameImage,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.serverInfo,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: "heading-sm/medium",
                                children: n.name,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-tertiary",
                                children: n.planName,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.serverDetails,
                children: (0, r.jsxs)("div", {
                    className: g.detailsGrid,
                    children: [
                        (0, r.jsxs)("div", {
                            className: g.detailItem,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: j.intl.string(f.default.X0IaiI),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: g.detailItem,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: j.intl.string(f.default["9pw/yM"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: g.serverIpContainer,
                                    children: v
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(s.Text, {
                                                      variant: "text-sm/medium",
                                                      children: x,
                                                  }),
                                                  (0, r.jsx)(s.P3F, {
                                                      className: g.copyButton,
                                                      "aria-label": j.intl.string(j.t.OpuAlJ),
                                                      onClick: O,
                                                      children: (0, r.jsx)(s.TIy, { size: "sm" }),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsx)(c.Z, {
                                              onClick: () => {
                                                  (0, p.Z)({});
                                              },
                                              children: j.intl.string(f.default.UwXK29),
                                          }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: g.detailItem,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: j.intl.string(f.default.MQQIu7),
                                }),
                                (0, r.jsxs)("div", {
                                    className: g.statusContainer,
                                    children: [
                                        (0, r.jsx)("span", { className: g.statusIndicator }),
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-sm/medium",
                                            children: n.status,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: g.detailItem,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/semibold",
                                    children: j.intl.string(f.default.fqrxlJ),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: n.regionName,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.serverActions,
                children: [
                    (0, r.jsx)(s.zxk, {
                        fullWidth: !0,
                        text: j.intl.string(f.default["0TMXHh"]),
                        onClick: y,
                        variant: "primary",
                    }),
                    h &&
                        null != n.gameServerPanelUrl &&
                        (0, r.jsx)(s.zxk, {
                            fullWidth: !0,
                            text: j.intl.string(f.default["jO3u+/"]),
                            onClick: () => {
                                window.open(n.gameServerPanelUrl, "_blank");
                            },
                            variant: "secondary",
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.overflowMenu,
                children: (0, r.jsx)(d.Z, {
                    guildId: t,
                    instance: n,
                }),
            }),
        ],
    });
}
