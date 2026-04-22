n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311678),
    o = n(847374),
    d = n(320448),
    u = n(686533),
    c = n(525923),
    g = n(481384);
function m(e) {
    let { children: t, className: n, onExpand: l, ...m } = e,
        [_, A] = s.useState(!1);
    return (0, i.jsx)(r.N, {
        className: g.uR,
        collapsibleContent: (0, i.jsx)("div", { className: g.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(u.A, {
                ...m,
                onClick: (e) => {
                    var n;
                    A((n = !_)), l?.(n), t?.(e);
                },
                className: a()(g.AC, n),
                action: (0, i.jsxs)("div", {
                    className: g.rc,
                    children: [
                        m.action,
                        _
                            ? (0, i.jsx)(o.a, {
                                  size: "custom",
                                  width: c.S4,
                                  height: c.S4,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(d._, {
                                  size: "custom",
                                  width: c.S4,
                                  height: c.S4,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
