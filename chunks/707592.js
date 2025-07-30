a.d(t, {
    Gi: () => d,
    YJ: () => u,
    zY: () => p
});
var n = a(255367);
a(73800);
var r = a(755721),
    c = a(481060),
    o = a(489813),
    i = a(592286),
    l = a(388032),
    s = a(667084);
function d(e) {
    let { value: t, placeholder: a, onChange: c, disabled: o, autofocus: l, className: s } = e;
    return (0, n.jsx)(r.Is, {
        inputClassName: s,
        maxLength: i.tL,
        value: null != t ? t : '',
        placeholder: a,
        onChange: c,
        disabled: o,
        autoFocus: l
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, n.jsx)(o.CA, {
        title: t.label,
        children: (0, n.jsx)(c.Kx8, {
            className: s.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function p(e) {
    let { formField: t, autofocus: a, onChange: r } = e;
    return (0, n.jsx)(o.hK, {
        title: t.label,
        children: (0, n.jsx)(d, {
            onChange: r,
            value: t.response,
            autofocus: a,
            placeholder: l.intl.string(l.t['Sqn+Wl'])
        })
    });
}
