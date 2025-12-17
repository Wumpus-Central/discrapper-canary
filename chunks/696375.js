e.d(t, { Z: () => r });
var i = e(54381);
e(473749);
var a = e(481060),
    s = e(259580),
    l = e(110024);
function r(n) {
    let { url: t, text: e, onClick: r } = n;
    return (0, i.jsx)(a.Anchor, {
        href: t,
        onClick: r,
        className: l.externalLinkWrapper,
        children: (0, i.jsxs)(a.P3F, {
            className: l.childButton,
            children: [
                (0, i.jsx)(a.Text, {
                    className: l.childText,
                    variant: "text-md/semibold",
                    children: e,
                }),
                (0, i.jsx)(s.Z, {
                    className: l.childIcon,
                    direction: s.Z.Directions.RIGHT,
                }),
            ],
        }),
    });
}
