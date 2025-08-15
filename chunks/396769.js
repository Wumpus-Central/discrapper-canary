n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(600164),
    o = n(906067);
function s(e) {
    let { icon: t, onClick: n, label: s } = e;
    return (0, r.jsx)(i.zx, {
        look: i.zx.Looks.BLANK,
        size: i.zx.Sizes.MIN,
        className: o.button,
        onClick: n,
        children: (0, r.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            children: [
                (0, r.jsx)("div", {
                    className: o.buttonIcon,
                    children: t,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    children: s,
                }),
            ],
        }),
    });
}
