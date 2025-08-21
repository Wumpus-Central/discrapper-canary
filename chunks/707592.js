t.d(n, {
    Gi: () => u,
    YJ: () => d,
    zY: () => p,
});
var l = t(951288);
t(647438);
var i = t(755721),
    a = t(481060),
    o = t(489813),
    r = t(592286),
    s = t(388032),
    c = t(624463);
function u(e) {
    let { value: n, placeholder: t, onChange: i, disabled: o, autofocus: s } = e;
    return (0, l.jsx)(a.oil, {
        maxLength: r.tL,
        value: null != n ? n : "",
        placeholder: t,
        onChange: i,
        disabled: o,
        autoFocus: s,
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, l.jsx)(o.CA, {
        title: n.label,
        children: (0, l.jsx)(i.iS, {
            className: c.disabledFieldBackground,
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
        }),
    });
}
function p(e) {
    let { formField: n, autofocus: t, onChange: i } = e;
    return (0, l.jsx)(o.hK, {
        title: n.label,
        children: (0, l.jsx)(u, {
            onChange: i,
            value: n.response,
            autofocus: t,
            placeholder: s.intl.string(s.t["Sqn+Wl"]),
        }),
    });
}
