n.d(t, {
    Gi: () => d,
    YJ: () => u,
    zY: () => m
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(489813),
    s = n(592286),
    c = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: a, disabled: l, autofocus: d, className: u } = e;
    return (0, r.jsx)(o.oil, {
        inputClassName: i()(c.textInputFieldBodyInput, u),
        maxLength: s.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: a,
        disabled: l,
        autoFocus: d
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(o.Kx8, {
            className: i()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: a } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            onChange: a,
            value: t.response,
            autofocus: n
        })
    });
}
