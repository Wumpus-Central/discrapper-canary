e.d(n, { Z: () => r });
var i = e(200651);
e(192379);
var l = e(481060),
    s = e(624516),
    a = e(216019);
function r(t) {
    let { icon: n, message: e, onClick: r, autoFocus: d } = t;
    return (0, i.jsx)(l.tEY, {
        children: (0, i.jsxs)('button', {
            className: s.container,
            onClick: r,
            autoFocus: d,
            children: [
                (0, i.jsx)('img', {
                    className: s.icon,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(l.Text, {
                    className: s.text,
                    variant: 'text-md/bold',
                    children: e
                }),
                (0, i.jsx)('img', {
                    className: s.arrow,
                    alt: '',
                    src: a
                })
            ]
        })
    });
}
