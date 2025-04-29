t.d(n, { Z: () => r });
var i = t(255367);
t(73800);
var s = t(481060),
    l = t(259580),
    a = t(935786);
function r(e) {
    let { url: n, text: t, onClick: r } = e;
    return (0, i.jsx)(s.eee, {
        href: n,
        onClick: r,
        className: a.externalLinkWrapper,
        children: (0, i.jsxs)(s.P3F, {
            className: a.childButton,
            children: [
                (0, i.jsx)(s.Text, {
                    className: a.childText,
                    variant: 'text-md/semibold',
                    children: t
                }),
                (0, i.jsx)(l.Z, {
                    className: a.childIcon,
                    direction: l.Z.Directions.RIGHT
                })
            ]
        })
    });
}
