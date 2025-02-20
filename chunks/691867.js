n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(481060),
    o = n(581612),
    s = n(91311),
    c = n(751741);
function d() {
    let e = (0, i.e7)([s.Z], () => s.Z.allWithDescriptions(), [], i.pF),
        t = a.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, a] = e;
                    return (0, r.jsx)(
                        l.xJW,
                        {
                            children: (0, r.jsx)(l.j7V, {
                                value: n,
                                note: t,
                                onChange: (e) => (0, o.Z)(t, e),
                                hideBorder: !0,
                                children: a
                            })
                        },
                        t
                    );
                }),
            [e]
        );
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(l.zxk, {
                onClick: o.q,
                className: c.button,
                fullWidth: !0,
                children: 'Clear all'
            }),
            (0, r.jsx)('div', {
                className: c.rowsContainer,
                children: t
            })
        ]
    });
}
