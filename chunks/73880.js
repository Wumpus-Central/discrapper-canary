i.d(n, {
    Q8: function () {
        return c;
    },
    jn: function () {
        return g;
    },
    lX: function () {
        return d;
    }
});
var e = i(200651);
i(192379);
var r = i(120356),
    l = i.n(r),
    s = i(481060),
    u = i(489813),
    o = i(592286),
    a = i(119866);
function c(t) {
    let { value: n, placeholder: i, onChange: r, disabled: u, className: c, autofocus: g } = t;
    return (0, e.jsx)(s.TextArea, {
        className: l()(a.paragraphFieldBody, c),
        maxLength: o.RS,
        value: null != n ? n : '',
        placeholder: null != i ? i : '',
        onChange: r,
        disabled: u,
        autoFocus: g,
        autosize: !0,
        showRemainingCharacterCount: !u
    });
}
function g(t) {
    let { formField: n } = t;
    return (0, e.jsx)(u.hK, {
        title: n.label,
        children: (0, e.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function d(t) {
    let { formField: n, autofocus: i, onChange: r } = t;
    return (0, e.jsx)(u.hK, {
        title: n.label,
        children: (0, e.jsx)(c, {
            className: a.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: i
        })
    });
}
