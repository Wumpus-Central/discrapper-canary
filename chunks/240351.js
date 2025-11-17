n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(858719),
    o = n(548564);
let s = (e) => {
    let { header: t, displayType: n } = e,
        s = (0, a.C7)(n) > 0 ? "text-brand" : "text-muted",
        l = (0, a.A)(n);
    return (0, r.jsxs)("div", {
        className: o.counter,
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-xxl/medium",
                color: s,
                children: (0, r.jsx)(i.y5t, { children: l }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                className: o.counterText,
                children: t,
            }),
        ],
    });
};
