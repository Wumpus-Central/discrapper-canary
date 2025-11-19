t.d(n, {
    Gi: () => s,
    YJ: () => l,
    zY: () => u,
});
var r = t(54381);
t(473749);
var i = t(481060),
    a = t(489813),
    o = t(592286),
    c = t(388032);
function s(e) {
    let { value: n, placeholder: t, onChange: a, disabled: c, autofocus: s } = e;
    return (0, r.jsx)(i.oil, {
        maxLength: o.tL,
        value: null != n ? n : "",
        placeholder: t,
        onChange: a,
        disabled: c,
        autoFocus: s,
    });
}
function l(e) {
    let { formField: n } = e;
    return (0, r.jsx)(a.CA, {
        title: n.label,
        children: (0, r.jsx)(i.Kx8, {
            value: n.response,
            disabled: !0,
        }),
    });
}
function u(e) {
    let { formField: n, autofocus: t, onChange: i } = e;
    return (0, r.jsx)(a.hK, {
        title: n.label,
        children: (0, r.jsx)(s, {
            onChange: i,
            value: n.response,
            autofocus: t,
            placeholder: c.intl.string(c.t["Sqn+Wh"]),
        }),
    });
}
