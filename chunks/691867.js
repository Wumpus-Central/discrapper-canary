n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(581612),
    s = n(91311),
    c = n(844426);
function d() {
    let e = (0, l.e7)([s.Z], () => s.Z.allWithDescriptions(), [], l.pF),
        t = a.useMemo(
            () =>
                e.map((e) => {
                    let [t, n, a] = e;
                    return (0, r.jsx)(
                        i.FormItem,
                        {
                            children: (0, r.jsx)(i.FormSwitch, {
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
            (0, r.jsx)(i.Button, {
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
