n.d(t, { Z: () => s });
var i = n(951288);
n(647438);
var r = n(755721),
    l = n(481060),
    a = n(600164),
    o = n(906067);
function s(e) {
    let { icon: t, onClick: n, label: s } = e;
    return (0, i.jsx)(r.zx, {
        look: r.zx.Looks.BLANK,
        size: r.zx.Sizes.MIN,
        className: o.button,
        onClick: n,
        children: (0, i.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            children: [
                (0, i.jsx)("div", {
                    className: o.buttonIcon,
                    children: t,
                }),
                (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    children: s,
                }),
            ],
        }),
    });
}
