i.d(n, {
    Gi: function () {
        return c;
    },
    YJ: function () {
        return d;
    },
    zY: function () {
        return g;
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
    let { value: n, placeholder: i, onChange: r, disabled: u, autofocus: c, className: d } = t;
    return (0, e.jsx)(s.TextInput, {
        inputClassName: l()(a.textInputFieldBodyInput, d),
        maxLength: o.tL,
        value: null != n ? n : '',
        placeholder: i,
        onChange: r,
        disabled: u,
        autoFocus: c
    });
}
function d(t) {
    let { formField: n } = t;
    return (0, e.jsx)(u.hK, {
        title: n.label,
        children: (0, e.jsx)(s.TextArea, {
            className: l()(a.textInputFieldBodyInput, a.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function g(t) {
    let { formField: n, autofocus: i, onChange: r } = t;
    return (0, e.jsx)(u.hK, {
        title: n.label,
        children: (0, e.jsx)(c, {
            className: a.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: i
        })
    });
}
