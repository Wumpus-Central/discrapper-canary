t.d(l, { _V: () => c, aS: () => o, y4: () => u });
var s = t(477900);
t(582128);
var n = t(95477),
    i = t(260598),
    r = t(31457),
    a = t(260197),
    d = t(375708);
function c(e) {
    let { value: l, placeholder: t, onChange: i, disabled: r, autofocus: d } = e;
    return (0, s.jsx)(n.k, { maxLength: a.cs, value: l ?? "", placeholder: t, onChange: i, disabled: r, autoFocus: d });
}
function o(e) {
    let { formField: l } = e;
    return (0, s.jsx)(r._H, { title: l.label, children: (0, s.jsx)(i.f, { value: l.response, disabled: !0 }) });
}
function u(e) {
    let { formField: l, autofocus: t, onChange: n } = e;
    return (0, s.jsx)(r.cS, {
        title: l.label,
        children: (0, s.jsx)(c, {
            onChange: n,
            value: l.response,
            autofocus: t,
            placeholder: d.intl.string(d.t["Sqn+Wh"]),
        }),
    });
}
