l.d(t, { _V: () => u, aS: () => d, y4: () => c });
var i = l(627968);
l(64700);
var n = l(292666);
if (21552 == l.j) var s = l(260598);
var r = l(31457),
    a = l(260197),
    o = l(985018);
function u(e) {
    let { value: t, placeholder: l, onChange: s, disabled: r, autofocus: o } = e;
    return (0, i.jsx)(n.k, { maxLength: a.cs, value: t ?? "", placeholder: l, onChange: s, disabled: r, autoFocus: o });
}
function d(e) {
    let { formField: t } = e;
    return (0, i.jsx)(r._H, { title: t.label, children: (0, i.jsx)(s.f, { value: t.response, disabled: !0 }) });
}
function c(e) {
    let { formField: t, autofocus: l, onChange: n } = e;
    return (0, i.jsx)(r.cS, {
        title: t.label,
        children: (0, i.jsx)(u, {
            onChange: n,
            value: t.response,
            autofocus: l,
            placeholder: o.intl.string(o.t["Sqn+Wh"]),
        }),
    });
}
