n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(259580),
    s = n(388032),
    a = n(537487);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, i.jsxs)(r.Clickable, {
        className: a.container,
        onClick: n,
        children: [
            (0, i.jsx)('div', {
                className: a.icon,
                children: (0, i.jsx)(r.GroupIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            }),
            (0, i.jsxs)('div', {
                className: a.description,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: a.label,
                        color: 'none',
                        variant: 'text-md/bold',
                        children: s.intl.string(s.t.yiaoNj)
                    }),
                    (0, i.jsxs)(r.Text, {
                        color: 'none',
                        variant: 'text-xs/normal',
                        children: [t.name, ' \u2022 ', s.intl.string(s.t.JwYI3N)]
                    })
                ]
            }),
            (0, i.jsx)(l.Z, {
                className: a.arrow,
                direction: l.Z.Directions.RIGHT
            })
        ]
    });
}
