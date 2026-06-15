l.d(t, { _V: () => c, aS: () => o, y4: () => u });
var s = l(627968);
l(64700);
var i = l(292666),
    n = l(260598),
    r = l(31457),
    a = l(260197),
    d = l(375708);
function c(e) {
    let { value: t, placeholder: l, onChange: n, disabled: r, autofocus: d } = e;
    return (0, s.jsx)(i.k, { maxLength: a.cs, value: t ?? "", placeholder: l, onChange: n, disabled: r, autoFocus: d });
}
function o(e) {
    let { formField: t } = e;
    return (0, s.jsx)(r._H, { title: t.label, children: (0, s.jsx)(n.f, { value: t.response, disabled: !0 }) });
}
function u(e) {
    let { formField: t, autofocus: l, onChange: i } = e;
    return (0, s.jsx)(r.cS, {
        title: t.label,
        children: (0, s.jsx)(c, {
            onChange: i,
            value: t.response,
            autofocus: l,
            placeholder: d.intl.string(d.t["Sqn+Wh"]),
        }),
    });
}
