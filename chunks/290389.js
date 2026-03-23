n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(843282),
    l = n(435371),
    a = n(397927),
    r = n(371509),
    o = n(975237);
function d(e) {
    let { title: t, value: n, onChange: l, options: d, isDisabled: c = !1 } = e;
    return (0, i.jsxs)("div", {
        className: o.ar,
        children: [
            (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: c ? "text-muted" : "text-strong",
                className: o.DD,
                children: t,
            }),
            (0, i.jsx)(s.Te, {
                variant: "text-only",
                className: o.Lt,
                options: d,
                value: n,
                onChange: (e) => l(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, i.jsx)(r.A, { option: t });
                },
                renderOptionLabel: (e) => (0, i.jsx)(r.A, { option: e }),
                isDisabled: c,
                "data-migration-pending": !0,
            }),
        ],
    });
}
function c(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(l.m_, { text: t, asContainer: !0, children: (0, i.jsx)(d, { ...n }) });
}
function u(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, i.jsx)(c, { ...e }) : (0, i.jsx)(d, { ...e });
}
