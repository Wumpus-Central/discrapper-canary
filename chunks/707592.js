n.d(t, {
    Gi: () => o,
    YJ: () => c,
    zY: () => u,
});
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(489813),
    a = n(592286),
    s = n(388032);
function o(e) {
    let { value: t, placeholder: n, onChange: i, disabled: s, autofocus: o } = e;
    return (0, r.jsx)(l.oil, {
        maxLength: a.tL,
        value: null != t ? t : "",
        placeholder: n,
        onChange: i,
        disabled: s,
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
            placeholder: s.intl.string(s.t["Sqn+Wh"]),
        }),
    });
}
