n.d(t, {
    A: () => o,
}),
    n(228524);
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(985018),
    a = n(137898);

function o(e) {
    let { displayName: t, description: n, icon: o, isLoading: c, isConnected: s, canConnect: u, onConnect: d } = e;
    return (0, l.jsxs)("div", {
        className: a.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: a.hu,
                children: [
                    (0, l.jsx)("div", {
                        className: a.Kk,
                        children: o,
                    }),
                    (0, l.jsxs)("div", {
                        className: a.P_,
                        children: [
                            (0, l.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t,
                            }),
                            null != n &&
                                n.length > 0 &&
                                (0, l.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: n,
                                }),
                        ],
                    }),
                ],
            }),
            c
                ? (0, l.jsx)(r.y$y, {})
                : s
                  ? (0, l.jsxs)("div", {
                        className: a.ul,
                        children: [
                            (0, l.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: i.intl.string(i.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(r.yr3, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "var(--status-positive)",
                            }),
                        ],
                    })
                  : (0, l.jsx)(r.Button, {
                        variant: "primary",
                        size: "sm",
                        onClick: d,
                        text: i.intl.string(i.t.S0W8Z5),
                        disabled: !u,
                    }),
        ],
    });
}
