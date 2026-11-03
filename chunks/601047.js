n.d(s, { P1: () => i, zD: () => d });
var r = n(477900);
n(582128);
var l = n(103557),
    a = n(31457),
    t = n(260197),
    o = n(105292);
function c(e) {
    let { value: s, placeholder: n, onChange: a, disabled: o, autofocus: c } = e;
    return (0, r.jsx)(l.f, {
        maxLength: t.nQ,
        value: s ?? "",
        placeholder: n ?? "",
        onChange: a,
        disabled: o,
        autoFocus: c,
        autosize: !0,
        showRemainingCharacterCount: !o,
    });
}
function i(e) {
    let { formField: s } = e;
    return (0, r.jsx)(a._H, { title: s.label, children: (0, r.jsx)(c, { value: s.response, disabled: !0 }) });
}
function d(e) {
    let { formField: s, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(a.cS, {
        title: s.label,
        children: (0, r.jsx)(c, {
            value: s.response,
            onChange: l,
            autofocus: n,
            placeholder: o.intl.string(o.t["Sqn+Wh"]),
        }),
    });
}
