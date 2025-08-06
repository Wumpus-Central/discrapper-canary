n.d(t, { Z: () => r });
var i = n(255367);
n(73800);
var s = n(481060),
    l = n(624516),
    a = n(216019);
function r(e) {
    let { icon: t, message: n, onClick: r, autoFocus: o } = e;
    return (0, i.jsx)(s.tEY, {
        children: (0, i.jsxs)('button', {
            className: l.container,
            onClick: r,
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
                    src: a
                })
            ]
        })
    });
}
