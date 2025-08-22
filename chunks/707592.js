n.d(t, {
    Gi: () => d,
    YJ: () => s,
    zY: () => f,
});
var i = n(951288);
n(647438);
var l = n(755721),
    a = n(481060),
    r = n(489813),
    o = n(592286),
    c = n(388032),
    u = n(624463);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: r, autofocus: c } = e;
    return (0, i.jsx)(a.oil, {
        maxLength: o.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: l,
        disabled: r,
        autoFocus: c,
    });
}
function s(e) {
    let { formField: t } = e;
    return (0, i.jsx)(r.CA, {
        title: t.label,
        children: (0, i.jsx)(l.iS, {
            className: u.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function f(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, i.jsx)(r.hK, {
        title: t.label,
        children: (0, i.jsx)(d, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: c.intl.string(c.t["Sqn+Wl"]),
        }),
    });
}
