i.d(n, { Z: () => r });
var t = i(951288);
i(647438);
var a = i(481060),
    s = i(259580),
    l = i(452847);
function r(e) {
    let { url: n, text: i, onClick: r } = e;
    return (0, t.jsx)(a.eee, {
        href: n,
        onClick: r,
        className: l.externalLinkWrapper,
        children: (0, t.jsxs)(a.P3F, {
            className: l.childButton,
            children: [
                (0, t.jsx)(a.Text, {
                    className: l.childText,
                    variant: "text-md/semibold",
                    children: i,
                }),
                (0, t.jsx)(s.Z, {
                    className: l.childIcon,
                    direction: s.Z.Directions.RIGHT,
                }),
            ],
        }),
    });
}
