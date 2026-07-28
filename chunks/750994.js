i.d(n, { Ay: () => c });
var e = i(477900);
i(582128);
var o = i(243721),
    r = i(866665);
function s(t) {
    let { value: n, onChange: i, note: r, title: s, disabled: a } = t;
    return (0, e.jsx)(o.d, { checked: n, onChange: i, disabled: a, label: s, description: r });
}
function a(t) {
    let { tooltipText: n, ...i } = t;
    return (0, e.jsx)(r.m, {
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
