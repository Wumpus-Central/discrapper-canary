n.d(t, { Z: () => a });
var s = n(200651);
n(192379);
var i = n(481060),
    r = n(624516),
    l = n(216019);
function a(e) {
    let { icon: t, message: n, onClick: a, autoFocus: o } = e;
    return (0, s.jsx)(i.tEY, {
        children: (0, s.jsxs)('button', {
            className: r.container,
            onClick: a,
            autoFocus: o,
            children: [
                (0, s.jsx)('img', {
                    className: r.icon,
                    alt: '',
                    src: t
                }),
                (0, s.jsx)(i.Text, {
                    className: r.text,
                    variant: 'text-md/bold',
                    children: n
                }),
                (0, s.jsx)('img', {
                    className: r.arrow,
                    alt: '',
                    src: l
                })
            ]
        })
    });
}
