n.d(t, {
    Gi: () => c,
    YJ: () => d,
    zY: () => u
});
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(489813),
    a = n(592286),
    o = n(388032),
    s = n(667084);
function c(e) {
    let { value: t, placeholder: n, onChange: i, disabled: o, autofocus: s, className: c } = e;
    return (0, r.jsx)(l.oil, {
        inputClassName: c,
        maxLength: a.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: o,
        autoFocus: s
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
        title: t.label,
        children: (0, r.jsx)(l.Kx8, {
            className: s.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(c, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: o.intl.string(o.t['Sqn+Wl'])
        })
    });
}
