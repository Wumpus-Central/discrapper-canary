t.d(n, {
    jn: function () {
        return f;
    },
    lX: function () {
        return m;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    s = t(481060),
    o = t(476770),
    u = t(592286),
    c = t(388032),
    a = t(484979);
function d(e) {
    let { value: n, placeholder: t, onChange: r, disabled: o, className: c, autofocus: d } = e;
    return (0, i.jsx)(s.TextArea, {
        className: l()(a.paragraphFieldBody, c),
        maxLength: u.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: r,
        disabled: o,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !o
    });
}
function f(e) {
    let { formField: n } = e;
    return (0, i.jsx)(o.CA, {
        title: n.label,
        children: (0, i.jsx)(d, {
            className: a.disabledFieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, i.jsx)(o.hK, {
        title: n.label,
        children: (0, i.jsx)(d, {
            value: n.response,
            onChange: r,
            autofocus: t,
            placeholder: c.intl.string(c.t['Sqn+Wl'])
        })
    });
}
