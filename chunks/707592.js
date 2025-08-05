a.d(t, {
    Gi: () => s,
    YJ: () => d,
    zY: () => u
});
var n = a(255367);
a(73800);
var r = a(755721),
    c = a(489813),
    o = a(592286),
    i = a(388032),
    l = a(667084);
function s(e) {
    let { value: t, placeholder: a, onChange: c, disabled: i, autofocus: l, className: s } = e;
    return (0, n.jsx)(r.Is, {
        inputClassName: s,
        maxLength: o.tL,
        value: null != t ? t : '',
        placeholder: a,
        onChange: c,
        disabled: i,
        autoFocus: l
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, n.jsx)(c.CA, {
        title: t.label,
        children: (0, n.jsx)(r.iS, {
            className: l.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: t, autofocus: a, onChange: r } = e;
    return (0, n.jsx)(c.hK, {
        title: t.label,
        children: (0, n.jsx)(s, {
            onChange: r,
            value: t.response,
            autofocus: a,
            placeholder: i.intl.string(i.t['Sqn+Wl'])
        })
    });
}
