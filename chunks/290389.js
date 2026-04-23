l.d(t, { A: () => o });
var n = l(627968);
l(64700);
var i = l(843282),
    s = l(990078),
    a = l(834730),
    r = l(371509),
    d = l(100712);
function c(e) {
    let { title: t, value: l, onChange: s, options: c, isDisabled: u = !1 } = e;
    return (0, n.jsxs)("div", {
        className: d.ar,
        children: [
            (0, n.jsx)(a.E, {
                variant: "text-md/medium",
                color: u ? "text-muted" : "text-strong",
                className: d.DD,
                children: t,
            }),
            (0, n.jsx)(i.Te, {
                variant: "text-only",
                className: d.Lt,
                options: c,
                value: l,
                onChange: (e) => s(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, n.jsx)(r.A, { option: t });
                },
                renderOptionLabel: (e) => (0, n.jsx)(r.A, { option: e }),
                isDisabled: u,
                "data-migration-pending": !0,
            }),
        ],
    });
}
function u(e) {
    let { tooltipText: t, ...l } = e;
    return (0, n.jsx)(s.m, { text: t, asContainer: !0, children: (0, n.jsx)(c, { ...l }) });
}
function o(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, n.jsx)(u, { ...e }) : (0, n.jsx)(c, { ...e });
}
