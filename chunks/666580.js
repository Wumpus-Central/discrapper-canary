n.d(t, { A: () => s });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(105769);
let s = (e) => {
    let { element: t, onChange: n, state: s } = e,
        d = t.name,
        { title: o, options: c } = t.data,
        u = s?.[d]?.value ?? void 0,
        [_, m] = a.useState(u);
    a.useEffect(() => {
        m(u);
    }, [u]);
    let p = a.useMemo(() => c.map((e) => ({ name: e.label, value: e.value })), [c]),
        g = a.useCallback(
            (e) => {
                null != e && (m(e), n(d, e));
            },
            [n, d],
        );
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(i.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: r.P,
                children: [o, t.should_submit_data && (0, l.jsx)("span", { className: r.m, children: "*" })],
            }),
            (0, l.jsx)(i.z6M, { value: _, onChange: g, options: p }),
        ],
    });
};
