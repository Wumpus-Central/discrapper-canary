n.d(t, {
    Gi: () => o,
    YJ: () => c,
    zY: () => u,
});
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(489813),
    s = n(592286),
    a = n(388032);
function o(e) {
    let { value: t, placeholder: n, onChange: i, disabled: a, autofocus: o } = e;
    return (0, r.jsx)(l.oil, {
        maxLength: s.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: i,
        disabled: a,
        autoFocus: o,
    });
}
function c(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
        title: t.label,
        children: (0, r.jsx)(l.Kx8, {
            value: t.response,
            disabled: !0,
        }),
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(o, {
            onChange: l,
            value: t.response,
            autofocus: n,
            placeholder: a.intl.string(a.t["Sqn+Wh"]),
        }),
    });
}
