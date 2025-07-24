n.d(t, {
    Gi: () => d,
    YJ: () => u,
    zY: () => m
});
var r = n(255367);
n(73800);
var l = n(755721),
    i = n(481060),
    a = n(489813),
    s = n(592286),
    o = n(388032),
    c = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: i, disabled: a, autofocus: o, className: c } = e;
    return (0, r.jsx)(l.Is, {
        inputClassName: c,
        maxLength: s.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: a,
        autoFocus: o
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(a.CA, {
        title: t.label,
        children: (0, r.jsx)(i.Kx8, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(a.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: o.intl.string(o.t['Sqn+Wl'])
        })
    });
}
