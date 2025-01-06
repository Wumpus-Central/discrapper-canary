n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(259580),
    a = n(388032),
    s = n(537487);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, i.jsxs)(r.Clickable, {
        className: s.container,
        onClick: n,
        children: [
            (0, i.jsx)('div', {
                className: s.icon,
                children: (0, i.jsx)(r.GroupIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            }),
            (0, i.jsxs)('div', {
                className: s.description,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: s.label,
                        color: 'none',
                        variant: 'text-md/bold',
                        children: a.intl.string(a.t.yiaoNj)
                    }),
                    (0, i.jsxs)(r.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        children: [t.name, ' \u2022 ', a.intl.string(a.t.JwYI3N)]
                    })
                ]
            }),
            (0, i.jsx)(l.Z, {
                className: s.arrow,
                direction: l.Z.Directions.RIGHT
            })
        ]
    });
}
