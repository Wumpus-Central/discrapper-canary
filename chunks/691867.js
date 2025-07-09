(a.d(t, { Z: () => d }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(442837),
    i = a(481060),
    s = a(581612),
    o = a(91311),
    c = a(716561);
function d() {
    let e = (0, l.e7)([o.Z], () => o.Z.allWithDescriptions(), [], l.pF),
        t = r.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, r] = e;
                    return (0, n.jsx)(
                        i.xJW,
                        {
                            children: (0, n.jsx)(i.j7V, {
                                value: a,
                                note: t,
                                onChange: (e) => (0, s.Z)(t, e),
                                hideBorder: !0,
                                children: r
                            })
                        },
                        t
                    );
                }),
            [e]
        );
    return (0, n.jsxs)('div', {
        className: c.container,
        children: [
            (0, n.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: c.button,
                children: (0, n.jsx)(i.zxk, {
                    variant: 'primary',
                    text: 'Clear all',
                    onClick: s.q,
                    fullWidth: !0
                })
            }),
            (0, n.jsx)('div', {
                className: c.rowsContainer,
                children: t
            })
        ]
    });
}
