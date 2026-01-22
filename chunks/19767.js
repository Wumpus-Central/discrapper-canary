n.d(t, { A: () => d }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(53705),
    o = n(154323),
    c = n(607335);
function d() {
    let e = (0, i.bG)([o.A], () => o.A.allWithDescriptions(), [], i.My),
        t = l.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, l] = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(
                                r.dOG,
                                {
                                    label: l,
                                    description: t,
                                    checked: n,
                                    onChange: (e) => (0, s.L)(t, e),
                                },
                                t,
                            ),
                            (0, a.jsx)(r.cGx, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, a.jsxs)("div", {
        className: c.kL,
        children: [
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: c.x6,
                children: (0, a.jsx)(r.Button, {
                    variant: "primary",
                    text: "Clear all",
                    onClick: s.$,
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)("div", {
                className: c.vu,
                children: t,
            }),
        ],
    });
}
