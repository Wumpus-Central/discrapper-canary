n.d(t, {
    Q8: () => d,
    jn: () => C,
    lX: () => m
});
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    a = n(481060),
    i = n(489813),
    s = n(592286),
    c = n(388032),
    u = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: l, disabled: i, className: c, autofocus: d } = e;
    return (0, r.jsx)(a.Kx8, {
        className: o()(u.paragraphFieldBody, c),
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
function C(e) {
    let { formField: t } = e;
    return (0, r.jsx)(i.CA, {
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
    return (0, r.jsx)(i.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            value: t.response,
            onChange: l,
            autofocus: n,
            placeholder: c.NW.string(c.t['Sqn+Wl'])
        })
    });
}
