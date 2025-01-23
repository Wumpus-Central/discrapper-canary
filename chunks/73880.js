t.d(n, {
    Q8: function () {
        return c;
    },
    jn: function () {
        return d;
    },
    lX: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    u = t(481060),
    a = t(489813),
    o = t(592286),
    s = t(119866);
function c(e) {
    let { value: n, placeholder: t, onChange: r, disabled: a, className: c, autofocus: d } = e;
    return (0, i.jsx)(u.TextArea, {
        className: l()(s.paragraphFieldBody, c),
        maxLength: o.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: r,
        disabled: a,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !a
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, i.jsx)(a.hK, {
        title: n.label,
        children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function E(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, i.jsx)(a.hK, {
        title: n.label,
        children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: t
        })
    });
}
