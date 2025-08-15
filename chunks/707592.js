t.d(a, {
    Gi: () => s,
    YJ: () => d,
    zY: () => p,
});
var n = t(255367);
t(73800);
var c = t(755721),
    o = t(489813),
    r = t(592286),
    i = t(388032),
    l = t(624463);
function s(e) {
    let { value: a, placeholder: t, onChange: o, disabled: i, autofocus: l, className: s } = e;
    return (0, n.jsx)(c.Is, {
        inputClassName: s,
        maxLength: r.tL,
        value: null != a ? a : "",
        placeholder: t,
        onChange: o,
        disabled: i,
        autoFocus: l,
    });
}
function d(e) {
    let { formField: a } = e;
    return (0, n.jsx)(o.CA, {
        title: a.label,
        children: (0, n.jsx)(c.iS, {
            className: l.disabledFieldBackground,
            value: a.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function p(e) {
    let { formField: a, autofocus: t, onChange: c } = e;
    return (0, n.jsx)(o.hK, {
        title: a.label,
        children: (0, n.jsx)(s, {
            onChange: c,
            value: a.response,
            autofocus: t,
            placeholder: i.intl.string(i.t["Sqn+Wl"]),
        }),
    });
}
