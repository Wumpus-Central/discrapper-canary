n.d(t, { A: () => d });
var l = n(627968),
    a = n(64700),
    i = n(834730),
    r = n(954197),
    s = n(405977);
let d = (e) => {
    let { element: t, onChange: n, state: d } = e,
        o = t.name,
        { title: c, options: u } = t.data,
        _ = d?.[o]?.value ?? void 0,
        [m, h] = a.useState(_);
    a.useEffect(() => {
        h(_);
    }, [_]);
    let g = a.useMemo(() => u.map((e) => ({ name: e.label, value: e.value })), [u]),
        p = a.useCallback(
            (e) => {
                null != e && (h(e), n(o, e));
            },
            [n, o],
        );
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(i.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: s.P,
                children: [c, t.should_submit_data && (0, l.jsx)("span", { className: s.m, children: "*" })],
            }),
            (0, l.jsx)(r.z, { value: m, onChange: p, options: g }),
        ],
    });
};
