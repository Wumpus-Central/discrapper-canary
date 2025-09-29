r.d(e, { Z: () => s });
var t = r(951288),
    n = r(481060);
function s(i) {
    let { currentStep: e, totalSteps: r, className: s } = i;
    return (0, t.jsx)("div", {
        className: s,
        children: (0, t.jsxs)(n.Text, {
            variant: "display-sm",
            color: "text-primary",
            children: [e + 1, "/", r],
        }),
    });
}
