t.d(l, { _V: () => c, aS: () => o, y4: () => u });
var s = t(627968);
t(64700);
var i = t(292666),
    n = t(260598),
    r = t(31457),
    a = t(260197),
    d = t(985018);
function c(e) {
    let { value: l, placeholder: t, onChange: n, disabled: r, autofocus: d } = e;
    return (0, s.jsx)(i.k, { maxLength: a.cs, value: l ?? "", placeholder: t, onChange: n, disabled: r, autoFocus: d });
}
function o(e) {
    let { formField: l } = e;
    return (0, s.jsx)(r._H, { title: l.label, children: (0, s.jsx)(n.f, { value: l.response, disabled: !0 }) });
}
function u(e) {
    let { formField: l, autofocus: t, onChange: i } = e;
    return (0, s.jsx)(r.cS, {
        title: l.label,
        children: (0, s.jsx)(c, {
            onChange: i,
            value: l.response,
            autofocus: t,
            placeholder: d.intl.string(d.t["Sqn+Wh"]),
        }),
    });
}
