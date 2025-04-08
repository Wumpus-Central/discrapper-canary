n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(624516),
    l = n(216019);
function r(e) {
    let { icon: t, message: n, onClick: r, autoFocus: d } = e;
    return (0, i.jsx)(s.tEY, {
        children: (0, i.jsxs)('button', {
            className: a.container,
            onClick: r,
            autoFocus: d,
            children: [
                (0, i.jsx)('img', {
                    className: a.icon,
                    alt: '',
                    src: t
                }),
                (0, i.jsx)(s.Text, {
                    className: a.text,
                    variant: 'text-md/bold',
                    children: n
                }),
                (0, i.jsx)('img', {
                    className: a.arrow,
                    alt: '',
                    src: l
                })
            ]
        })
    });
}
