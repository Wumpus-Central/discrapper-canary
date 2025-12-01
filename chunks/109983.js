n.d(t, { Z: () => a });
var i = n(54381);
n(473749);
var l = n(481060),
    r = n(531803),
    s = n(216019);
function a(e) {
    let { icon: t, message: n, onClick: a, autoFocus: o } = e;
    return (0, i.jsx)(l.tEY, {
        children: (0, i.jsxs)("button", {
            className: r.container,
            onClick: a,
            autoFocus: o,
            children: [
                (0, i.jsx)("img", {
                    className: r.icon,
                    alt: "",
                    src: t,
                }),
                (0, i.jsx)(l.Text, {
                    className: r.text,
                    variant: "text-md/bold",
                    children: n,
                }),
                (0, i.jsx)("img", {
                    className: r.arrow,
                    alt: "",
                    src: s,
                }),
            ],
        }),
    });
}
