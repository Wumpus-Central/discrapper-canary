n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(985018),
    r = n(137898);
function o(e) {
    let { displayName: t, description: n, icon: o, isLoading: s, isConnected: c, canConnect: u, onConnect: d } = e;
    return (0, l.jsxs)("div", {
        className: r.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: r.hu,
                children: [
                    (0, l.jsx)("div", { className: r.Kk, children: o }),
                    (0, l.jsxs)("div", {
                        className: r.P_,
                        children: [
                            (0, l.jsx)(i.Text, { variant: "text-md/medium", color: "text-strong", children: t }),
                            null != n &&
                                n.length > 0 &&
                                (0, l.jsx)(i.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
                        ],
                    }),
                ],
            }),
            s
                ? (0, l.jsx)(i.y$y, {})
                : c
                  ? (0, l.jsxs)("div", {
                        className: r.ul,
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: a.intl.string(a.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(i.yr3, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "var(--status-positive)",
                            }),
                        ],
                    })
                  : (0, l.jsx)(i.Button, {
                        variant: "primary",
                        size: "sm",
                        onClick: d,
                        text: a.intl.string(a.t.S0W8Z5),
                        disabled: !u,
                    }),
        ],
    });
}
