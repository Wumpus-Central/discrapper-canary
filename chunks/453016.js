n.d(t, { _V: () => u, aS: () => d, y4: () => c });
var i = n(627968);
n(64700);
var l = n(292666);
if (21552 == n.j) var s = n(260598);
var r = n(31457),
    a = n(260197),
    o = n(375708);
function u(e) {
    let { value: t, placeholder: n, onChange: s, disabled: r, autofocus: o } = e;
    return (0, i.jsx)(l.k, { maxLength: a.cs, value: t ?? "", placeholder: n, onChange: s, disabled: r, autoFocus: o });
}
function d(e) {
    let { formField: t } = e;
    return (0, i.jsx)(r._H, { title: t.label, children: (0, i.jsx)(s.f, { value: t.response, disabled: !0 }) });
}
function c(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, i.jsx)(r.cS, {
        title: t.label,
        children: (0, i.jsx)(u, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: o.intl.string(o.t["Sqn+Wh"]),
        }),
    });
}
