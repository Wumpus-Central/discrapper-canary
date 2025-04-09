n.d(t, {
    Q8: () => d,
    jn: () => u,
    lX: () => m
});
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    i = n(481060),
    s = n(489813),
    o = n(592286),
    c = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: s, className: d, autofocus: u } = e;
    return (0, r.jsx)(i.Kx8, {
        className: a()(c.paragraphFieldBody, d),
        maxLength: o.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: l,
        disabled: s,
        autoFocus: u,
        autosize: !0,
        showRemainingCharacterCount: !s
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: t.response,
            onChange: l,
            autofocus: n
        })
    });
}
