i.d(t, { Z: () => r });
var n = i(200651);
i(192379);
var s = i(481060),
    l = i(859517),
    a = i(216019);
function r(e) {
    let { icon: t, message: i, onClick: r, autoFocus: o } = e;
    return (0, n.jsxs)('button', {
        className: l.container,
        onClick: r,
        autoFocus: o,
        children: [
            (0, n.jsx)('img', {
                className: l.icon,
                alt: '',
                src: t
            }),
            (0, n.jsx)(s.Text, {
                className: l.text,
                variant: 'text-md/bold',
                children: i
            }),
            (0, n.jsx)('img', {
                className: l.arrow,
                alt: '',
                src: a
            })
        ]
    });
}
