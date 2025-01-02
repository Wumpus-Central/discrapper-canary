t.d(n, {
    Q8: function () {
        return c;
    },
    jn: function () {
        return d;
    },
    lX: function () {
        return I;
    }
});
var r = t(200651);
t(192379);
var i = t(120356),
    l = t.n(i),
    u = t(481060),
    o = t(489813),
    s = t(592286),
    a = t(119866);
function c(e) {
    let { value: n, placeholder: t, onChange: i, disabled: o, className: c, autofocus: d } = e;
    return (0, r.jsx)(u.TextArea, {
        className: l()(a.paragraphFieldBody, c),
        maxLength: s.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: i,
        disabled: o,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !o
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, r.jsx)(o.hK, {
        title: n.label,
        children: (0, r.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function I(e) {
    let { formField: n, autofocus: t, onChange: i } = e;
    return (0, r.jsx)(o.hK, {
        title: n.label,
        children: (0, r.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            onChange: i,
            autofocus: t
        })
    });
}
