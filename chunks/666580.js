"use strict";
n.d(t, { A: () => d });
var a = n(627968),
    i = n(64700),
    r = n(834730),
    l = n(954197),
    s = n(405977);
let d = (e) => {
    let { element: t, onChange: n, state: d } = e,
        o = t.name,
        { title: c, options: u } = t.data,
        _ = d?.[o]?.value ?? void 0,
        [m, p] = i.useState(_);
    i.useEffect(() => {
        p(_);
    }, [_]);
    let h = i.useMemo(() => u.map((e) => ({ name: e.label, value: e.value })), [u]),
        g = i.useCallback(
            (e) => {
                null != e && (p(e), n(o, e));
            },
            [n, o],
        );
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(r.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: s.P,
                children: [c, t.should_submit_data && (0, a.jsx)("span", { className: s.m, children: "*" })],
            }),
            (0, a.jsx)(l.z, { value: m, onChange: g, options: h }),
        ],
    });
};
