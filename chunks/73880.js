n.d(t, {
    Q8: () => u,
    jn: () => d,
    lX: () => C
});
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(481060),
    i = n(489813),
    s = n(592286),
    c = n(667084);
function u(e) {
    let { value: t, placeholder: n, onChange: l, disabled: i, className: u, autofocus: d } = e;
    return (0, r.jsx)(a.Kx8, {
        className: o()(c.paragraphFieldBody, u),
        maxLength: s.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: l,
        disabled: i,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !i
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function C(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            onChange: l,
            autofocus: n
        })
    });
}
