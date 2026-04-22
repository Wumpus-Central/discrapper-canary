"use strict";
r.d(t, { _V: () => c, aS: () => d, y4: () => _ });
var i = r(627968);
r(64700);
var a = r(292666);
if (21552 == r.j) var n = r(260598);
var s = r(31457),
    l = r(260197),
    o = r(985018);
function c(e) {
    let { value: t, placeholder: r, onChange: n, disabled: s, autofocus: o } = e;
    return (0, i.jsx)(a.k, { maxLength: l.cs, value: t ?? "", placeholder: r, onChange: n, disabled: s, autoFocus: o });
}
function d(e) {
    let { formField: t } = e;
    return (0, i.jsx)(s._H, { title: t.label, children: (0, i.jsx)(n.f, { value: t.response, disabled: !0 }) });
}
function _(e) {
    let { formField: t, autofocus: r, onChange: a } = e;
    return (0, i.jsx)(s.cS, {
        title: t.label,
        children: (0, i.jsx)(c, {
            onChange: a,
            value: t.response,
            autofocus: r,
            placeholder: o.intl.string(o.t["Sqn+Wh"]),
        }),
    });
}
