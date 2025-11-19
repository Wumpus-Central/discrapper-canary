n.d(t, { Z: () => d }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(442837),
    r = n(481060),
    s = n(581612),
    o = n(91311),
    c = n(685960);
function d() {
    let e = (0, i.e7)([o.Z], () => o.Z.allWithDescriptions(), [], i.pF),
        t = l.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, l] = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(
                                r.rsf,
                                {
                                    label: l,
                                    description: t,
                                    checked: n,
                                    onChange: (e) => (0, s.Z)(t, e),
                                },
                                t,
                            ),
                            (0, a.jsx)(r.izJ, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: c.button,
                children: (0, a.jsx)(r.Button, {
                    variant: "primary",
                    text: "Clear all",
                    onClick: s.q,
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)("div", {
                className: c.rowsContainer,
                children: t,
            }),
        ],
    });
}
