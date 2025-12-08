n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var l = n(481060),
    a = n(531803),
    r = n(216019);
function s(e) {
    let { icon: t, message: n, onClick: s, autoFocus: o } = e;
    return (0, i.jsx)(l.tEY, {
        children: (0, i.jsxs)("button", {
            className: a.container,
            onClick: s,
            autoFocus: o,
            children: [
                (0, i.jsx)("img", {
                    className: a.icon,
                    alt: "",
                    src: t,
                }),
                (0, i.jsx)(l.Text, {
                    className: a.text,
                    variant: "text-md/bold",
                    children: n,
                }),
                (0, i.jsx)("img", {
                    className: a.arrow,
                    alt: "",
                    src: r,
                }),
            ],
        }),
    });
}
