n.d(t, {
    Gi: () => c,
    YJ: () => u,
    zY: () => d
});
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(489813),
    s = n(592286),
    o = n(388032),
    a = n(667084);
function c(e) {
    let { value: t, placeholder: n, onChange: l, disabled: o, autofocus: a, className: c } = e;
    return (0, r.jsx)(i.Is, {
        inputClassName: c,
        maxLength: s.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: l,
        disabled: o,
        autoFocus: a
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(l.CA, {
        title: t.label,
        children: (0, r.jsx)(i.iS, {
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
            placeholder: o.intl.string(o.t['Sqn+Wl'])
        })
    });
}
