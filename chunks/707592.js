n.d(t, {
    Gi: () => d,
    YJ: () => u,
    zY: () => m
});
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    o = n(489813),
    s = n(592286),
    c = n(119866);
function d(e) {
    let { value: t, placeholder: n, onChange: i, disabled: o, autofocus: d, className: u } = e;
    return (0, a.jsx)(l.oil, {
        inputClassName: r()(c.textInputFieldBodyInput, u),
        maxLength: s.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: o,
        autoFocus: d
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, a.jsx)(o.hK, {
        title: t.label,
        children: (0, a.jsx)(l.Kx8, {
            className: r()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, a.jsx)(o.hK, {
        title: t.label,
        children: (0, a.jsx)(d, {
            className: c.fieldBackground,
            onChange: i,
            value: t.response,
            autofocus: n
        })
    });
}
