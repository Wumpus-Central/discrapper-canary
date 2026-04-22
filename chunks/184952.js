t.d(n, { A: () => u });
var l = t(627968);
t(64700);
var i = t(834730),
    a = t(289873),
    r = t(628284),
    o = t(821609),
    s = t(985018),
    c = t(221919);
function u(e) {
    let { displayName: n, description: t, icon: u, isLoading: d, isConnected: m, canConnect: h, onConnect: p } = e;
    return (0, l.jsxs)("div", {
        className: c.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: c.hu,
                children: [
                    (0, l.jsx)("div", { className: c.Kk, children: u }),
                    (0, l.jsxs)("div", {
                        className: c.P_,
                        children: [
                            (0, l.jsx)(i.E, { variant: "text-md/medium", color: "text-strong", children: n }),
                            null != t &&
                                t.length > 0 &&
                                (0, l.jsx)(i.E, { variant: "text-sm/medium", color: "text-muted", children: t }),
                        ],
                    }),
                ],
            }),
            d
                ? (0, l.jsx)(a.y, {})
                : m
                  ? (0, l.jsxs)("div", {
                        className: c.ul,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: s.intl.string(s.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(r.y, { size: "custom", width: 20, height: 20, color: "var(--status-positive)" }),
                        ],
                    })
                  : (0, l.jsx)(o.$, {
                        variant: "primary",
                        size: "sm",
                        onClick: p,
                        text: s.intl.string(s.t.S0W8Z5),
                        disabled: !h,
                    }),
        ],
    });
}
