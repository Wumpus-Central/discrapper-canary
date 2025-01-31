n.d(t, {
    jn: () => m,
    lX: () => x
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    o = n(476770),
    a = n(592286),
    u = n(388032),
    c = n(484979);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: o, className: u, autofocus: d } = e;
    return (0, i.jsx)(s.Kx8, {
        className: r()(c.paragraphFieldBody, u),
        maxLength: a.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: l,
        disabled: o,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !o
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, i.jsx)(o.CA, {
        title: t.label,
        children: (0, i.jsx)(d, {
            className: c.disabledFieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function x(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, i.jsx)(o.hK, {
        title: t.label,
        children: (0, i.jsx)(d, {
            value: t.response,
            onChange: l,
            autofocus: n,
            placeholder: u.intl.string(u.t['Sqn+Wl'])
        })
    });
}
