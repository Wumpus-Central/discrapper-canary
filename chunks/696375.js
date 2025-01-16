t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(259580),
    s = t(847273);
function o(e) {
    let { url: n, text: t, onClick: o } = e;
    return (0, i.jsx)(l.Anchor, {
        href: n,
        onClick: o,
        className: s.externalLinkWrapper,
        children: (0, i.jsxs)(l.Clickable, {
            className: s.childButton,
            children: [
                (0, i.jsx)(l.Text, {
                    className: s.childText,
                    variant: 'text-md/semibold',
                    children: t
                }),
                (0, i.jsx)(a.Z, {
                    className: s.childIcon,
                    direction: a.Z.Directions.RIGHT
                })
            ]
        })
    });
}
