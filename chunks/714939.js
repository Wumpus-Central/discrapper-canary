n.d(t, { Z: () => o }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(259580),
    a = n(388032),
    l = n(70713);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, r.jsxs)(i.P3F, {
        className: l.container,
        onClick: n,
        children: [
            (0, r.jsx)('div', {
                className: l.icon,
                children: (0, r.jsx)(i.BFJ, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            }),
            (0, r.jsxs)('div', {
                className: l.description,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: l.label,
                        color: 'none',
                        variant: 'text-md/bold',
                        children: a.NW.string(a.t.yiaoNj)
                    }),
                    (0, r.jsxs)(i.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        children: [t.name, ' \u2022 ', a.NW.string(a.t.JwYI3N)]
                    })
                ]
            }),
            (0, r.jsx)(s.Z, {
                className: l.arrow,
                direction: s.Z.Directions.RIGHT
            })
        ]
    });
}
