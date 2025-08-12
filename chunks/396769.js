n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(755721),
    o = n(481060),
    a = n(600164),
    s = n(791580);
function l(e) {
    let { icon: t, onClick: n, label: l } = e;
    return (0, r.jsx)(i.zx, {
        look: i.zx.Looks.BLANK,
        size: i.zx.Sizes.MIN,
        className: s.button,
        onClick: n,
        children: (0, r.jsxs)(a.Z, {
            align: a.Z.Align.CENTER,
            children: [
                (0, r.jsx)("div", {
                    className: s.buttonIcon,
                    children: t,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    children: l,
                }),
            ],
        }),
    });
}
