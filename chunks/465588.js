n.d(t, {
    jn: () => m,
    lX: () => _
});
var o = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(476770),
    l = n(592286),
    c = n(388032),
    d = n(513903);
function u(e) {
    let { value: t, placeholder: n, onChange: r, disabled: s, className: c, autofocus: u } = e;
    return (0, o.jsx)(a.Kx8, {
        className: i()(d.paragraphFieldBody, c),
        maxLength: l.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: r,
        disabled: s,
        autoFocus: u,
        autosize: !0,
        showRemainingCharacterCount: !s
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, o.jsx)(s.CA, {
        title: t.label,
        children: (0, o.jsx)(u, {
            className: d.disabledFieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function _(e) {
    let { formField: t, autofocus: n, onChange: r } = e;
    return (0, o.jsx)(s.hK, {
        title: t.label,
        children: (0, o.jsx)(u, {
            value: t.response,
            onChange: r,
            autofocus: n,
            placeholder: c.NW.string(c.t['Sqn+Wl'])
        })
    });
}
