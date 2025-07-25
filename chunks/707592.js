n.d(t, {
    Gi: () => u,
    YJ: () => d,
    zY: () => m
});
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    s = n(489813),
    o = n(592286),
    a = n(388032),
    c = n(667084);
function u(e) {
    let { value: t, placeholder: n, onChange: l, disabled: s, autofocus: a, className: c } = e;
    return (0, r.jsx)(i.Is, {
        inputClassName: c,
        maxLength: o.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: l,
        disabled: s,
        autoFocus: a
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.CA, {
        title: t.label,
        children: (0, r.jsx)(l.Kx8, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            onChange: i,
            value: t.response,
            autofocus: n,
            placeholder: a.intl.string(a.t['Sqn+Wl'])
        })
    });
}
