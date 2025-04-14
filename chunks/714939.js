n.d(t, { Z: () => o }), n(953529);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(259580),
    l = n(388032),
    a = n(70713);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, r.jsxs)(i.P3F, {
        className: a.container,
        onClick: n,
        children: [
            (0, r.jsx)('div', {
                className: a.icon,
                children: (0, r.jsx)(i.BFJ, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            }),
            (0, r.jsxs)('div', {
                className: a.description,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: a.label,
                        color: 'none',
                        variant: 'text-md/bold',
                        children: l.NW.string(l.t.yiaoNj)
                    }),
                    (0, r.jsxs)(i.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        children: [t.name, ' \u2022 ', l.NW.string(l.t.JwYI3N)]
                    })
                ]
            }),
            (0, r.jsx)(s.Z, {
                className: a.arrow,
                direction: s.Z.Directions.RIGHT
            })
        ]
    });
}
