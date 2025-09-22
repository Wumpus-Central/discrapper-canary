n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(481060),
    s = n(581612),
    o = n(91311),
    c = n(685960);
function d() {
    let e = (0, i.e7)([o.Z], () => o.Z.allWithDescriptions(), [], i.pF),
        t = r.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, r] = e;
                    return (0, a.jsx)(
                        l.j7V,
                        {
                            value: n,
                            note: t,
                            onChange: (e) => (0, s.Z)(t, e),
                            hideBorder: !0,
                            children: r,
                        },
                        t,
                    );
                }),
            [e],
        );
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: c.button,
                children: (0, a.jsx)(l.zxk, {
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
