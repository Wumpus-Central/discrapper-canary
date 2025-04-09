n.d(t, {
    Gi: () => d,
    YJ: () => u,
    zY: () => m
});
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    i = n(481060),
    s = n(489813),
    o = n(592286),
    c = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: s, autofocus: d, className: u } = e;
    return (0, r.jsx)(i.oil, {
        inputClassName: a()(c.textInputFieldBodyInput, u),
        maxLength: o.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: l,
        disabled: s,
        autoFocus: d
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(i.Kx8, {
            className: a()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            onChange: l,
            value: t.response,
            autofocus: n
        })
    });
}
