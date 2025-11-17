i.d(e, { Z: () => r });
var t = i(54381);
i(473749);
var a = i(481060),
    s = i(259580),
    l = i(452847);
function r(n) {
    let { url: e, text: i, onClick: r } = n;
    return (0, t.jsx)(a.Anchor, {
        href: e,
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
