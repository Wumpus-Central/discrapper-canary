i.d(e, { Z: () => l });
var n = i(54381),
    r = i(481060);
function l(t) {
    let { activeSlide: e, totalSlides: i, className: l } = t;
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsxs)(r.Text, {
            variant: "display-sm",
            color: "text-primary",
            children: [Number.parseInt(e, 10) + 1, "/", i],
        }),
    });
}
