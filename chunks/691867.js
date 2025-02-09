n.d(t, { Z: () => d }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(581612),
    s = n(91311),
    c = n(421224);
function d() {
    let e = (0, l.e7)([s.Z], () => s.Z.allWithDescriptions(), [], l.pF),
        t = r.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, r] = e;
                    return (0, a.jsx)(
                        i.xJW,
                        {
                            children: (0, a.jsx)(i.j7V, {
                                value: n,
                                note: t,
                                onChange: (e) => (0, o.Z)(t, e),
                                hideBorder: !0,
                                children: r
                            })
                        },
                        t
                    );
                }),
            [e]
        );
    return (0, a.jsxs)('div', {
        className: c.container,
        children: [
            (0, a.jsx)(i.zxk, {
                onClick: o.q,
                className: c.button,
                fullWidth: !0,
                children: 'Clear all'
            }),
            (0, a.jsx)('div', {
                className: c.rowsContainer,
                children: t
            })
        ]
    });
}
