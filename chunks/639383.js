n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(843282),
    r = n(435371),
    a = n(397927),
    l = n(371509),
    o = n(721267);
function c(e) {
    let { title: t, value: n, onChange: r, options: c, isDisabled: d = !1 } = e;
    return (0, i.jsxs)("div", {
        className: o.ar,
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: d ? "text-muted" : "text-strong",
                className: o.DD,
                children: t,
            }),
            (0, i.jsx)(s.Te, {
                variant: "text-only",
                className: o.Lt,
                options: c,
                value: n,
                onChange: (e) => r(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, i.jsx)(l.A, { option: t });
                },
                renderOptionLabel: (e) => (0, i.jsx)(l.A, { option: e }),
                isDisabled: d,
                "data-migration-pending": !0,
            }),
        ],
    });
}
function d(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(r.m_, { text: t, asContainer: !0, children: (0, i.jsx)(c, { ...n }) });
}
function u(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, i.jsx)(d, { ...e }) : (0, i.jsx)(c, { ...e });
}
