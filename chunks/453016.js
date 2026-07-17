i.d(t, { _V: () => u, aS: () => d, y4: () => c });
var n = i(627968);
i(64700);
var l = i(292666);
if (21552 == i.j) var s = i(260598);
var r = i(31457),
    a = i(260197),
    o = i(375708);
function u(e) {
    let { value: t, placeholder: i, onChange: s, disabled: r, autofocus: o } = e;
    return (0, n.jsx)(l.k, { maxLength: a.cs, value: t ?? "", placeholder: i, onChange: s, disabled: r, autoFocus: o });
}
function d(e) {
    let { formField: t } = e;
    return (0, n.jsx)(r._H, { title: t.label, children: (0, n.jsx)(s.f, { value: t.response, disabled: !0 }) });
}
function c(e) {
    let { formField: t, autofocus: i, onChange: l } = e;
    return (0, n.jsx)(r.cS, {
        title: t.label,
        children: (0, n.jsx)(u, {
            onChange: l,
            value: t.response,
            autofocus: i,
            placeholder: o.intl.string(o.t["Sqn+Wh"]),
        }),
    });
}
