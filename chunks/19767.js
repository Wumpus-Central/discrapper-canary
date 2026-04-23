a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(243721),
    r = a(404778),
    o = a(821609),
    d = a(53705),
    c = a(154323),
    u = a(155248);
function m() {
    let e = (0, i.bG)([c.A], () => c.A.allWithDescriptions(), [], i.My),
        t = l.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, l] = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(
                                s.d,
                                { label: l, description: t, checked: a, onChange: (e) => (0, d.L)(t, e) },
                                t,
                            ),
                            (0, n.jsx)(r.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, n.jsxs)("div", {
        className: u.kL,
        children: [
            (0, n.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: u.x6,
                children: (0, n.jsx)(o.$, { variant: "primary", text: "Clear all", onClick: d.$, fullWidth: !0 }),
            }),
            (0, n.jsx)("div", { className: u.vu, children: t }),
        ],
    });
}
