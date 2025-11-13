e.d(r, { Z: () => l });
var i = e(951288),
    n = e(481060);
function l(t) {
    let { activeSlide: r, totalSlides: e, className: l } = t;
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsxs)(n.Text, {
            variant: "display-sm",
            color: "text-primary",
            children: [Number.parseInt(r, 10) + 1, "/", e],
        }),
    });
}
