i.d(n, { Ay: () => c });
var e = i(627968);
i(64700);
var o = i(990078),
    r = i(243721);
function s(t) {
    let { value: n, onChange: i, note: o, title: s, disabled: a } = t;
    return (0, e.jsx)(r.d, { checked: n, onChange: i, disabled: a, label: s, description: o });
}
function a(t) {
    let { tooltipText: n, ...i } = t;
    return (0, e.jsx)(o.m, {
        text: n,
        asContainer: !0,
        align: "right",
        caretConfig: { position: "bottom", align: "end" },
        children: (0, e.jsx)(s, { ...i }),
    });
}
function c(t) {
    return "tooltipText" in t && null != t.tooltipText ? (0, e.jsx)(a, { ...t }) : (0, e.jsx)(s, { ...t });
}
