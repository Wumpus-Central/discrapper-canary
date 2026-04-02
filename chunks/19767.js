n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(53705),
    o = n(154323),
    d = n(749929);
function c() {
    let e = (0, s.bG)([o.A], () => o.A.allWithDescriptions(), [], s.My),
        t = i.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, i] = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(
                                l.dOG,
                                { label: i, description: t, checked: n, onChange: (e) => (0, r.L)(t, e) },
                                t,
                            ),
                            (0, a.jsx)(l.cGx, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, a.jsxs)("div", {
        className: d.kL,
        children: [
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: d.x6,
                children: (0, a.jsx)(l.Button, { variant: "primary", text: "Clear all", onClick: r.$, fullWidth: !0 }),
            }),
            (0, a.jsx)("div", { className: d.vu, children: t }),
        ],
    });
}
