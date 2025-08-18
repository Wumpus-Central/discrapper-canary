n.d(t, {
    Gi: () => u,
    YJ: () => d,
    zY: () => m,
});
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    o = n(489813),
    s = n(592286),
    a = n(388032),
    c = n(624463);
function u(e) {
    let { value: t, placeholder: n, onChange: i, disabled: o, autofocus: a } = e;
    return (0, r.jsx)(l.oil, {
        maxLength: s.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: i,
        disabled: o,
        autoFocus: a,
    });
}
function d(e) {
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
function m(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, r.jsx)(o.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            onChange: i,
            value: t.response,
            autofocus: n,
            placeholder: a.intl.string(a.t["Sqn+Wl"]),
        }),
    });
}
