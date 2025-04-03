t.d(n, { Z: () => r });
var i = t(200651);
t(192379);
var s = t(481060),
    a = t(259580),
    l = t(935786);
function r(e) {
    let { url: n, text: t, onClick: r } = e;
    return (0, i.jsx)(s.eee, {
        href: n,
        onClick: r,
        className: l.externalLinkWrapper,
        children: (0, i.jsxs)(s.P3F, {
            className: l.childButton,
            children: [
                (0, i.jsx)(s.Text, {
                    className: l.childText,
                    variant: 'text-md/semibold',
                    children: t
                }),
                (0, i.jsx)(a.Z, {
                    className: l.childIcon,
                    direction: a.Z.Directions.RIGHT
                })
            ]
        })
    });
}
