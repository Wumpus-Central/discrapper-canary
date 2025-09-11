n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(690221),
    l = n(572004),
    c = n(55935),
    d = n(639777),
    u = n(29168),
    p = n(444083),
    m = n(340887),
    b = n(408629),
    g = n(440589),
    f = n(388032),
    v = n(799427);
function y(e) {
    let { guildId: t, instance: n } = e,
        y = (0, a.e7)([u.Z], () => u.Z.getState()),
        h = i.useCallback(() => {
            y
                ? (0, m.Z)(n)
                : (0, b.Z)({
                      onAccept: () => {
                          (0, m.Z)(n);
                      },
                  });
        }, [n, y]),
        j = i.useCallback(() => {
            (0, l.JG)(n.serverIP),
                (0, o.showToast)((0, o.createToast)(f.intl.string(f.t["+5kSoa"]), o.ToastType.SUCCESS));
        }, [n.serverIP]),
        O = (0, d.Z)(t);
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
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-sm/medium",
                                children: n.name,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-tertiary",
                                children: n.planName,
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
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default.X0IaiI),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: "".concat(n.onlineConnectionsCount, " / ").concat(n.maxConnectionsCount),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.detailItem,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default["9pw/yM"]),
                                }),
                                (0, r.jsx)("div", {
                                    className: v.serverIpContainer,
                                    children: y
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-sm/medium",
                                                      children: n.serverIP,
                                                  }),
                                                  (0, r.jsx)(o.P3F, {
                                                      className: v.copyButton,
                                                      "aria-label": f.intl.string(f.t.OpuAlJ),
                                                      onClick: j,
                                                      children: (0, r.jsx)(o.TIy, { size: "sm" }),
                                                  }),
                                              ],
                                          })
                                        : (0, r.jsx)(s.Z, {
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
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default.MQQIu7),
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.statusContainer,
                                    children: [
                                        (0, r.jsx)("span", { className: v.statusIndicator }),
                                        (0, r.jsx)(o.Text, {
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
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    children: f.intl.string(g.default.v8iSgI),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: (0, c.Y4)(new Date(n.lastUpdated)),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.serverActions,
                children: [
                    (0, r.jsx)(o.zxk, {
                        fullWidth: !0,
                        text: f.intl.string(g.default["0TMXHh"]),
                        onClick: h,
                        variant: "primary",
                    }),
                    O &&
                        (0, r.jsx)(o.zxk, {
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
                children: (0, r.jsx)(p.Z, {
                    guildId: t,
                    instance: n,
                }),
            }),
        ],
    });
}
