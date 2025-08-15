t.d(n, { Z: () => r });
var i = t(951288);
t(647438);
var a = t(481060),
    s = t(259580),
    l = t(452847);
function r(e) {
    let { url: n, text: t, onClick: r } = e;
    return (0, i.jsx)(a.eee, {
        href: n,
        onClick: r,
        className: l.externalLinkWrapper,
        children: (0, i.jsxs)(a.P3F, {
            className: l.childButton,
            children: [
                (0, i.jsx)(a.Text, {
                    className: l.childText,
                    variant: "text-md/semibold",
                    children: t,
                }),
                (0, i.jsx)(s.Z, {
                    className: l.childIcon,
                    direction: s.Z.Directions.RIGHT,
                }),
            ],
        }),
    });
}
