t.d(n, {
    Gi: () => d,
    YJ: () => u,
    zY: () => _
});
var o = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    a = t(481060),
    l = t(489813),
    s = t(592286),
    c = t(119866);
function d(e) {
    let { value: n, placeholder: t, onChange: r, disabled: l, autofocus: d, className: u } = e;
    return (0, o.jsx)(a.oil, {
        inputClassName: i()(c.textInputFieldBodyInput, u),
        maxLength: s.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: r,
        disabled: l,
        autoFocus: d
    });
}
function u(e) {
    let { formField: n } = e;
    return (0, o.jsx)(l.hK, {
        title: n.label,
        children: (0, o.jsx)(a.Kx8, {
            className: i()(c.textInputFieldBodyInput, c.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function _(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, o.jsx)(l.hK, {
        title: n.label,
        children: (0, o.jsx)(d, {
            className: c.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: t
        })
    });
}
