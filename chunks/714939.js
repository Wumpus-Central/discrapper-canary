n.d(t, { Z: () => o }), n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(259580),
    s = n(388032),
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
                        children: s.intl.string(s.t.yiaoNj)
                    }),
                    (0, r.jsxs)(i.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        children: [t.name, ' \u2022 ', s.intl.string(s.t.JwYI3N)]
                    })
                ]
            }),
            (0, r.jsx)(l.Z, {
                className: a.arrow,
                direction: l.Z.Directions.RIGHT
            })
        ]
    });
}
