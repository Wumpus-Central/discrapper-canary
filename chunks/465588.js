n.d(t, {
    jn: () => m,
    lX: () => x
});
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(476770),
    o = n(592286),
    c = n(388032),
    d = n(641198);
function u(e) {
    let { value: t, placeholder: n, onChange: l, disabled: s, className: c, autofocus: u } = e;
    return (0, r.jsx)(a.Kx8, {
        className: i()(d.paragraphFieldBody, c),
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
function m(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.CA, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: d.disabledFieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function x(e) {
    let { formField: t, autofocus: n, onChange: l } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            value: t.response,
            onChange: l,
            autofocus: n,
            placeholder: c.NW.string(c.t['Sqn+Wl'])
        })
    });
}
