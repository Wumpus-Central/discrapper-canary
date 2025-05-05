n.d(t, {
    Gi: () => c,
    YJ: () => u,
    zY: () => d
});
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(489813),
    o = n(592286),
    s = n(388032),
    a = n(667084);
function c(e) {
    let { value: t, placeholder: n, onChange: l, disabled: s, autofocus: a, className: c } = e;
    return (0, r.jsx)(i.oil, {
        inputClassName: c,
        maxLength: o.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: l,
        disabled: s,
        autoFocus: a
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(l.CA, {
        title: t.label,
        children: (0, r.jsx)(i.Kx8, {
            className: a.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function d(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(c, {
            onChange: i,
            value: t.response,
            autofocus: n,
            placeholder: s.intl.string(s.t['Sqn+Wl'])
        })
    });
}
