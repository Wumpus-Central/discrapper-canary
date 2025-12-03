n.d(t, { Z: () => r });
var i = n(54381),
    s = n(481060);
function r(e) {
    let { activeSlide: t, totalSlides: n, className: r } = e;
    return (0, i.jsx)("div", {
        className: r,
        children: (0, i.jsxs)(s.Text, {
            variant: "display-sm",
            color: "text-strong",
            children: [Number.parseInt(t, 10) + 1, "/", n],
        }),
    });
}
