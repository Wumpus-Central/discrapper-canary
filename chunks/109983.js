n.d(t, { Z: () => a });
var i = n(255367);
n(73800);
var s = n(481060),
    l = n(624516),
    r = n(216019);
function a(e) {
    let { icon: t, message: n, onClick: a, autoFocus: o } = e;
    return (0, i.jsx)(s.tEY, {
        children: (0, i.jsxs)('button', {
            className: l.container,
            onClick: a,
            autoFocus: o,
            children: [
                (0, i.jsx)('img', {
                    className: l.icon,
                    alt: '',
                    src: t
                }),
                (0, i.jsx)(s.Text, {
                    className: l.text,
                    variant: 'text-md/bold',
                    children: n
                }),
                (0, i.jsx)('img', {
                    className: l.arrow,
                    alt: '',
                    src: r
                })
            ]
        })
    });
}
