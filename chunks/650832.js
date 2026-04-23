"use strict";
n.d(t, { Ay: () => o });
var i = n(627968);
n(64700);
var s = n(990078),
    r = n(243721);
function l(e) {
    let { value: t, onChange: n, note: s, title: l, disabled: a } = e;
    return (0, i.jsx)(r.d, { checked: t, onChange: n, disabled: a, label: l, description: s });
}
function a(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(s.m, {
        text: t,
        asContainer: !0,
        align: "right",
        caretConfig: { position: "bottom", align: "end" },
        children: (0, i.jsx)(l, { ...n }),
    });
}
function o(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, i.jsx)(a, { ...e }) : (0, i.jsx)(l, { ...e });
}
