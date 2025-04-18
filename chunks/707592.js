n.d(t, {
    Gi: () => s,
    YJ: () => u,
    zY: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(489813),
    l = n(592286),
    a = n(388032),
    c = n(679808);
function s(e) {
    let { value: t, placeholder: n, onChange: o, disabled: a, autofocus: c, className: s } = e;
    return (0, r.jsx)(i.oil, {
        inputClassName: s,
        maxLength: l.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: o,
        disabled: a,
        autoFocus: c
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(o.CA, {
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
function d(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, r.jsx)(o.hK, {
        title: t.label,
        children: (0, r.jsx)(s, {
            onChange: i,
            value: t.response,
            autofocus: n,
            placeholder: a.NW.string(a.t['Sqn+Wl'])
        })
    });
}
