t.d(n, {
    jn: () => m,
    lX: () => _
});
var o = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(481060),
    a = t(476770),
    l = t(592286),
    c = t(388032),
    d = t(35761);
function u(e) {
    let { value: n, placeholder: t, onChange: r, disabled: a, className: c, autofocus: u } = e;
    return (0, o.jsx)(s.Kx8, {
        className: i()(d.paragraphFieldBody, c),
        maxLength: l.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: r,
        disabled: a,
        autoFocus: u,
        autosize: !0,
        showRemainingCharacterCount: !a
    });
}
function m(e) {
    let { formField: n } = e;
    return (0, o.jsx)(a.CA, {
        title: n.label,
        children: (0, o.jsx)(u, {
            className: d.disabledFieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function _(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, o.jsx)(a.hK, {
        title: n.label,
        children: (0, o.jsx)(u, {
            value: n.response,
            onChange: r,
            autofocus: t,
            placeholder: c.intl.string(c.t['Sqn+Wl'])
        })
    });
}
