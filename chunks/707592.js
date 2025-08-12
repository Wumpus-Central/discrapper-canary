n.d(t, {
    Gi: () => s,
    YJ: () => u,
    zY: () => d,
});
var i = n(255367);
n(73800);
var r = n(755721),
    o = n(489813),
    a = n(592286),
    l = n(388032),
    c = n(863296);
function s(e) {
    let { value: t, placeholder: n, onChange: o, disabled: l, autofocus: c, className: s } = e;
    return (0, i.jsx)(r.Is, {
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
    return (0, i.jsx)(o.CA, {
        title: t.label,
        children: (0, i.jsx)(r.iS, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function d(e) {
    let { formField: t, autofocus: n, onChange: r } = e;
    return (0, i.jsx)(o.hK, {
        title: t.label,
        children: (0, i.jsx)(s, {
            onChange: r,
            value: t.response,
            autofocus: n,
            placeholder: l.intl.string(l.t["Sqn+Wl"]),
        }),
    });
}
