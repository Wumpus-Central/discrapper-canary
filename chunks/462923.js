n.d(t, { Z: () => y });
var r = n(951288),
    a = n(647438),
    s = n(442837),
    i = n(481060),
    o = n(690221),
    c = n(572004),
    l = n(55935),
    u = n(639777),
    d = n(29168),
    m = n(444083),
    p = n(340887),
    b = n(408629),
    g = n(401561),
    f = n(388032),
    v = n(842788);
function y(e) {
    let { guildId: t, instance: n } = e,
        y = (0, s.e7)([d.Z], () => d.Z.getState()),
        j = a.useCallback(() => {
            y
                ? (0, p.Z)(n)
                : (0, b.Z)({
                      onAccept: () => {
                          (0, p.Z)(n);
                      },
                  });
        }, [n, y]),
        x = a.useCallback(() => {
            (0, c.JG)(n.serverIP),
                (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["+5kSoa"]), i.ToastType.SUCCESS));
        }, [n.serverIP]),
        P = (0, u.Z)(t);
    return (0, r.jsxs)("div", {
        className: v.card,
        children: [
            (0, r.jsxs)("div", {
                className: v.serverHeader,
                children: [
                    (0, r.jsx)("img", {
                        src: "https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=MC",
                        alt: "",
                        className: v.gameImage,
                    }),
                    (0, r.jsxs)("div", {
                        className: v.serverInfo,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: "heading-sm/medium",
                                children: n.name,
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                color: "text-tertiary",
                                children: n.plan.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.serverDetails,
                children: (0, r.jsxs)("div", {
                    className: v.detailsGrid,
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.detailItem,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default.X0IaiI),
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.detailItem,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default["9pw/yM"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: v.serverIpContainer,
                                    children: y
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(i.Text, {
                                                      variant: "text-sm/medium",
                                                      children: n.serverIP,
                                                  }),
                                                  (0, r.jsx)(i.P3F, {
                                                      className: v.copyButton,
                                                      "aria-label": f.intl.string(f.t.OpuAlJ),
                                                      onClick: x,
                                                      children: (0, r.jsx)(i.TIy, { size: "sm" }),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsx)(o.Z, {
                                              onClick: () => {
                                                  (0, b.Z)({});
                                              },
                                              children: f.intl.string(g.default.UwXK29),
                                          }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.detailItem,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default.MQQIu7),
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.statusContainer,
                                    children: [
                                        (0, r.jsx)("span", { className: v.statusIndicator }),
                                        (0, r.jsx)(i.Text, {
                                            variant: "text-sm/medium",
                                            children: n.status,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.detailItem,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default.v8iSgI),
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    children: (0, l.Y4)(new Date(n.lastUpdated)),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.serverActions,
                children: [
                    (0, r.jsx)(i.zxk, {
                        fullWidth: !0,
                        text: f.intl.string(g.default["0TMXHh"]),
                        onClick: j,
                        variant: "primary",
                    }),
                    P &&
                        (0, r.jsx)(i.zxk, {
                            fullWidth: !0,
                            text: f.intl.string(g.default["jO3u+/"]),
                            onClick: () => {
                                window.open(n.gameServerPanelUrl, "_blank");
                            },
                            variant: "secondary",
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.overflowMenu,
                children: (0, r.jsx)(m.Z, {
                    guildId: t,
                    instance: n,
                }),
            }),
        ],
    });
}
