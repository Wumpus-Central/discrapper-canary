n.d(t, {
    Gi: () => s,
    YJ: () => u,
    zY: () => d,
});
var r = n(255367);
n(73800);
var i = n(755721),
    o = n(489813),
    a = n(592286),
    l = n(388032),
    c = n(667084);
function s(e) {
    let { value: t, placeholder: n, onChange: o, disabled: l, autofocus: c, className: s } = e;
    return (0, r.jsx)(i.Is, {
        inputClassName: s,
        maxLength: a.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: o,
        disabled: l,
        autoFocus: c,
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(o.CA, {
        title: t.label,
        children: (0, r.jsx)(i.iS, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
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
            placeholder: l.intl.string(l.t["Sqn+Wl"]),
        }),
    });
}
