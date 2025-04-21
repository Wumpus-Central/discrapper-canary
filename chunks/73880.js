n.d(t, {
    Q8: () => d,
    jn: () => C,
    lX: () => m
});
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(489813),
    s = n(592286),
    c = n(388032),
    u = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: a, className: c, autofocus: d } = e;
    return (0, r.jsx)(i.Kx8, {
        className: o()(u.paragraphFieldBody, c),
        maxLength: s.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: l,
        disabled: a,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !a
    });
}
function C(e) {
    let { formField: t } = e;
    return (0, r.jsx)(a.CA, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: u.disabledFieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(a.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            value: t.response,
            onChange: l,
            autofocus: n,
            placeholder: c.intl.string(c.t['Sqn+Wl'])
        })
    });
}
