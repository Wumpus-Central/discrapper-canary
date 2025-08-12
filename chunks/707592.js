t.d(n, {
    Gi: () => c,
    YJ: () => u,
    zY: () => d,
});
var l = t(255367);
t(73800);
var i = t(755721),
    a = t(489813),
    o = t(592286),
    r = t(388032),
    s = t(863296);
function c(e) {
    let { value: n, placeholder: t, onChange: a, disabled: r, autofocus: s, className: c } = e;
    return (0, l.jsx)(i.Is, {
        inputClassName: c,
        maxLength: o.tL,
        value: null != n ? n : "",
        placeholder: t,
        onChange: a,
        disabled: r,
        autoFocus: s,
    });
}
function u(e) {
    let { formField: n } = e;
    return (0, l.jsx)(a.CA, {
        title: n.label,
        children: (0, l.jsx)(i.iS, {
            className: s.disabledFieldBackground,
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function d(e) {
    let { formField: n, autofocus: t, onChange: i } = e;
    return (0, l.jsx)(a.hK, {
        title: n.label,
        children: (0, l.jsx)(c, {
            onChange: i,
            value: n.response,
            autofocus: t,
            placeholder: r.intl.string(r.t["Sqn+Wl"]),
        }),
    });
}
