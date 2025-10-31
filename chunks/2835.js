r.d(t, { Z: () => a });
var n = r(951288),
    e = r(481060);
function a(i) {
    let { activeSlide: t, totalSlides: r, className: a } = i;
    return (0, n.jsx)("div", {
        className: a,
        children: (0, n.jsxs)(e.Text, {
            variant: "display-sm",
            color: "text-primary",
            children: [Number.parseInt(t, 10) + 1, "/", r],
        }),
    });
}
