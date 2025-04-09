n.d(t, {
    Gi: () => u,
    YJ: () => d,
    zY: () => _
});
var r = n(200651);
n(192379);
var o = n(120356),
    i = n.n(o),
    a = n(481060),
    c = n(489813),
    l = n(592286),
    s = n(667084);
function u(e) {
    let { value: t, placeholder: n, onChange: o, disabled: c, autofocus: u, className: d } = e;
    return (0, r.jsx)(a.oil, {
        inputClassName: i()(s.textInputFieldBodyInput, d),
        maxLength: l.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: o,
        disabled: c,
        autoFocus: u
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(c.hK, {
        title: t.label,
        children: (0, r.jsx)(a.Kx8, {
            className: i()(s.textInputFieldBodyInput, s.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function _(e) {
    let { formField: t, autofocus: n, onChange: o } = e;
    return (0, r.jsx)(c.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: s.fieldBackground,
            onChange: o,
            value: t.response,
            autofocus: n
        })
    });
}
