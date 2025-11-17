n.d(t, {
    Q8: () => s,
    jn: () => c,
    lX: () => u,
});
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(489813),
    o = n(592286),
    a = n(388032);
function s(e) {
    let { value: t, placeholder: n, onChange: i, disabled: a, autofocus: s } = e;
    return (0, r.jsx)(l.Kx8, {
        maxLength: o.RS,
        value: null != t ? t : "",
        placeholder: null != n ? n : "",
        onChange: i,
        disabled: a,
        autoFocus: s,
        autosize: !0,
        showRemainingCharacterCount: !a,
    });
}
function c(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
        title: t.label,
        children: (0, r.jsx)(s, {
            value: t.response,
            disabled: !0,
        }),
    });
}
function u(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(s, {
            value: t.response,
            onChange: l,
            autofocus: n,
            placeholder: a.intl.string(a.t["Sqn+Wh"]),
        }),
    });
}
