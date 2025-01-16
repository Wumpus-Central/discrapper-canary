n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    s = n(859517),
    a = n(216019);
function o(e) {
    let { icon: t, message: n, onClick: o, autoFocus: r } = e;
    return (0, i.jsxs)('button', {
        className: s.container,
        onClick: o,
        autoFocus: r,
        children: [
            (0, i.jsx)('img', {
                className: s.icon,
                alt: '',
                src: t
            }),
            (0, i.jsx)(l.Text, {
                className: s.text,
                variant: 'text-md/bold',
                children: n
            }),
            (0, i.jsx)('img', {
                className: s.arrow,
                alt: '',
                src: a
            })
        ]
    });
}
