n.d(t, {
    Gi: () => c,
    YJ: () => d,
    zY: () => u,
});
var l = n(255367);
n(73800);
var r = n(755721),
    a = n(489813),
    i = n(592286),
    s = n(388032),
    o = n(667084);
function c(e) {
    let { value: t, placeholder: n, onChange: a, disabled: s, autofocus: o, className: c } = e;
    return (0, l.jsx)(r.Is, {
        inputClassName: c,
        maxLength: i.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: a,
        disabled: s,
        autoFocus: o,
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, l.jsx)(a.CA, {
        title: t.label,
        children: (0, l.jsx)(r.iS, {
            className: o.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: r } = e;
    return (0, l.jsx)(a.hK, {
        title: t.label,
        children: (0, l.jsx)(c, {
            onChange: r,
            value: t.response,
            autofocus: n,
            placeholder: s.intl.string(s.t["Sqn+Wl"]),
        }),
    });
}
