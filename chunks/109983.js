n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var a = n(481060),
    l = n(207568),
    r = n(216019);
function s(e) {
    let { icon: t, message: n, onClick: s, autoFocus: o } = e;
    return (0, i.jsx)(a.tEY, {
        children: (0, i.jsxs)("button", {
            className: l.container,
            onClick: s,
            autoFocus: o,
            children: [
                (0, i.jsx)("img", {
                    className: l.icon,
                    alt: "",
                    src: t,
                }),
                (0, i.jsx)(a.Text, {
                    className: l.text,
                    variant: "text-md/bold",
                    children: n,
                }),
                (0, i.jsx)("img", {
                    className: l.arrow,
                    alt: "",
                    src: r,
                }),
            ],
        }),
    });
}
