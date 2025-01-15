t.d(n, {
    Q8: function () {
        return c;
    },
    jn: function () {
        return d;
    },
    lX: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    u = t(481060),
    o = t(489813),
    a = t(592286),
    s = t(376150);
function c(e) {
    let { value: n, placeholder: t, onChange: r, disabled: o, className: c, autofocus: d } = e;
    return (0, i.jsx)(u.TextArea, {
        className: l()(s.paragraphFieldBody, c),
        maxLength: a.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: r,
        disabled: o,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !o
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, i.jsx)(o.hK, {
        title: n.label,
        children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function f(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, i.jsx)(o.hK, {
        title: n.label,
        children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: t
        })
    });
}
