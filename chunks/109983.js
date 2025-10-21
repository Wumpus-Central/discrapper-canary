n.d(t, { Z: () => a });
var i = n(951288);
n(647438);
var l = n(481060),
    s = n(73610),
    r = n(216019);
function a(e) {
    let { icon: t, message: n, onClick: a, autoFocus: o } = e;
    return (0, i.jsx)(l.tEY, {
        children: (0, i.jsxs)("button", {
            className: s.container,
            onClick: a,
            autoFocus: o,
            children: [
                (0, i.jsx)("img", {
                    className: s.icon,
                    alt: "",
                    src: t,
                }),
                (0, i.jsx)(l.Text, {
                    className: s.text,
                    variant: "text-md/bold",
                    children: n,
                }),
                (0, i.jsx)("img", {
                    className: s.arrow,
                    alt: "",
                    src: r,
                }),
            ],
        }),
    });
}
