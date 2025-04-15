n.d(t, {
    Gi: () => s,
    YJ: () => d,
    zY: () => u
});
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(489813),
    a = n(592286),
    l = n(388032),
    c = n(667084);
function s(e) {
    let { value: t, placeholder: n, onChange: i, disabled: l, autofocus: c, className: s } = e;
    return (0, r.jsx)(o.oil, {
        inputClassName: s,
        maxLength: a.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: l,
        autoFocus: c
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
        title: t.label,
        children: (0, r.jsx)(o.Kx8, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: o } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(s, {
            onChange: o,
            value: t.response,
            autofocus: n,
            placeholder: l.NW.string(l.t['Sqn+Wl'])
        })
    });
}
