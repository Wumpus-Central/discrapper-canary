t.d(a, { Ay: () => l });
var n = t(627968);
t(64700);
var _ = t(990078),
    r = t(243721);
function i(e) {
    let { value: a, onChange: t, note: _, title: i, disabled: o } = e;
    return (0, n.jsx)(r.d, { checked: a, onChange: t, disabled: o, label: i, description: _ });
}
function o(e) {
    let { tooltipText: a, ...t } = e;
    return (0, n.jsx)(_.m, {
        text: a,
        asContainer: !0,
        align: "right",
        caretConfig: { position: "bottom", align: "end" },
        children: (0, n.jsx)(i, { ...t }),
    });
}
function l(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, n.jsx)(o, { ...e }) : (0, n.jsx)(i, { ...e });
}
