r.d(t, { Z: () => a });
var e = r(951288),
    n = r(481060);
function a(i) {
    let { activeSlide: t, totalSlides: r, className: a } = i;
    return (0, e.jsx)("div", {
        className: a,
        children: (0, e.jsxs)(n.Text, {
            variant: "display-sm",
            color: "text-primary",
            children: [Number.parseInt(t, 10) + 1, "/", r],
        }),
    });
}
