n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(397927),
    o = n(207963),
    c = n(985018),
    d = n(7016);
function u(e) {
    let { type: t, options: n, required: r } = e,
        u = a.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: m, executeStateUpdate: p } = (0, o.At)(e, null != u ? { type: t, value: u } : void 0),
        A = a.useMemo(() => (m?.type === t ? m.value : null), [m, t]),
        h = null != A,
        C = a.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]),
        E = (e) => {
            p({ type: t, value: e });
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.z6M, { options: C, value: A ?? "", onChange: E, required: r }),
            !r &&
                (0, l.jsx)("div", {
                    className: s()(d.H, { [d.d]: !h }),
                    "aria-hidden": !h,
                    children: (0, l.jsx)(i.Button, {
                        text: c.intl.string(c.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => E(null),
                    }),
                }),
        ],
    });
}
