n.d(t, { A: () => m });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(954197),
    o = n(821609),
    d = n(207963),
    c = n(985018),
    u = n(659649);
function m(e) {
    let { type: t, options: n, required: r } = e,
        m = l.useMemo(() => n.find((e) => e.default)?.value, [n]),
        { state: _, executeStateUpdate: p } = (0, d.At)(e, null != m ? { type: t, value: m } : void 0),
        h = l.useMemo(() => (_?.type === t ? _.value : null), [_, t]),
        A = null != h,
        C = l.useMemo(() => n.map((e) => ({ name: e.label, value: e.value, desc: e.description })), [n]),
        x = (e) => {
            p({ type: t, value: e });
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.z, { options: C, value: h ?? "", onChange: x, required: r }),
            !r &&
                (0, a.jsx)("div", {
                    className: i()(u.H, { [u.d]: !A }),
                    "aria-hidden": !A,
                    children: (0, a.jsx)(o.$, {
                        text: c.intl.string(c.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => x(null),
                    }),
                }),
        ],
    });
}
