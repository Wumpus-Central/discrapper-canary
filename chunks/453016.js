s.d(l, { _V: () => c, aS: () => o, y4: () => u });
var t = s(477900);
s(582128);
var n = s(95477),
    i = s(103557),
    r = s(31457),
    a = s(260197),
    d = s(105292);
function c(e) {
    let { value: l, placeholder: s, onChange: i, disabled: r, autofocus: d } = e;
    return (0, t.jsx)(n.k, { maxLength: a.cs, value: l ?? "", placeholder: s, onChange: i, disabled: r, autoFocus: d });
}
function o(e) {
    let { formField: l } = e;
    return (0, t.jsx)(r._H, { title: l.label, children: (0, t.jsx)(i.f, { value: l.response, disabled: !0 }) });
}
function u(e) {
    let { formField: l, autofocus: s, onChange: n } = e;
    return (0, t.jsx)(r.cS, {
        title: l.label,
        children: (0, t.jsx)(c, {
            onChange: n,
            value: l.response,
            autofocus: s,
            placeholder: d.intl.string(d.t["Sqn+Wh"]),
        }),
    });
}
