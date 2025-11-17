i.d(e, { Z: () => l });
var r = i(54381),
    n = i(481060);
function l(t) {
    let { activeSlide: e, totalSlides: i, className: l } = t;
    return (0, r.jsx)("div", {
        className: l,
        children: (0, r.jsxs)(n.Text, {
            variant: "display-sm",
            color: "text-primary",
            children: [Number.parseInt(e, 10) + 1, "/", i],
        }),
    });
}
