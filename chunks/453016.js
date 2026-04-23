r.d(t, { _V: () => d, aS: () => c, y4: () => u });
var n = r(627968);
r(64700);
var i = r(292666);
if (21552 == r.j) var l = r(260598);
var a = r(31457),
    s = r(260197),
    o = r(985018);
function d(e) {
    let { value: t, placeholder: r, onChange: l, disabled: a, autofocus: o } = e;
    return (0, n.jsx)(i.k, { maxLength: s.cs, value: t ?? "", placeholder: r, onChange: l, disabled: a, autoFocus: o });
}
function c(e) {
    let { formField: t } = e;
    return (0, n.jsx)(a._H, { title: t.label, children: (0, n.jsx)(l.f, { value: t.response, disabled: !0 }) });
}
function u(e) {
    let { formField: t, autofocus: r, onChange: i } = e;
    return (0, n.jsx)(a.cS, {
        title: t.label,
        children: (0, n.jsx)(d, {
            onChange: i,
            value: t.response,
            autofocus: r,
            placeholder: o.intl.string(o.t["Sqn+Wh"]),
        }),
    });
}
