n.d(t, {
    Gi: () => d,
    YJ: () => u,
    zY: () => m,
});
var r = n(951288);
n(647438);
var l = n(755721),
    i = n(481060),
    s = n(489813),
    a = n(592286),
    o = n(388032),
    c = n(624463);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: s, autofocus: o } = e;
    return (0, r.jsx)(i.oil, {
        maxLength: a.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: l,
        disabled: s,
        autoFocus: o,
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.CA, {
        title: t.label,
        children: (0, r.jsx)(l.iS, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: o.intl.string(o.t["Sqn+Wl"]),
        }),
    });
}
