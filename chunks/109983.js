e.d(n, { Z: () => r });
var i = e(255367);
e(73800);
var l = e(481060),
    a = e(624516),
    s = e(216019);
function r(t) {
    let { icon: n, message: e, onClick: r, autoFocus: d } = t;
    return (0, i.jsx)(l.tEY, {
        children: (0, i.jsxs)('button', {
            className: a.container,
            onClick: r,
            autoFocus: d,
            children: [
                (0, i.jsx)('img', {
                    className: a.icon,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(l.Text, {
                    className: a.text,
                    variant: 'text-md/bold',
                    children: e
                }),
                (0, i.jsx)('img', {
                    className: a.arrow,
                    alt: '',
                    src: s
                })
            ]
        })
    });
}
